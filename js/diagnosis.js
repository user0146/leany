// =========================
// 診断結果一覧
// =========================
const recipes = {
  A: ["レンジ麻婆丼", "レンジ天津飯", "レンジ油うどん"],
  B: ["レンジ塩昆布パスタ", "レンジ釜玉うどん", "レンジ卵雑炊"],
  C: ["豚キムチ丼", "ハムチーズトースト", "チーズ焼きうどん"],
  D: ["ツナパスタ", "卵そぼろ丼", "ポキ丼"],
  E: ["レンジ肉じゃが", "レンジじゃがバター", "ツナマヨおにぎり"],
  F: ["レンジ中華スープ", "レンジポトフ", "レンジだし卵"],
  G: ["グラタン", "ミネストローネ", "焼きおにぎり茶漬け"],
  H: ["ポテサラ", "コンソメスープ", "シーザーサラダ"],
  I: ["豆腐のお好み焼きボウル", "キムチ雑炊", "山芋とろろ鉄板"],
  J: ["豚もやしポン酢", "ロゼキムチ春雨", "ツナ野菜丼"],
  K: ["鮭ときのこの出汁醤油丼", "腸活ミラノ風ドリア", "クリームリゾット"],
  L: ["豆乳坦々スープ", "豆腐とえのきのチーズ焼き", "たまちきクリームサラダ"],
  M: ["肉味噌サラダ", "キムとんぺい", "じゃがチーズ"],
  N: ["オートミールスープ", "もやしキムチ納豆", "レンジ茶わん蒸し"],
  O: ["スイートポテトケーキ", "きな粉餅＆チョコ餅", "豆腐ステーキ"],
  P: ["豆乳明太クリームえのき", "えのき白菜の生姜スープ", "卵ワカメスープ"]
};

// =========================
// 全ページから料理名に一致するURLを自動取得する関数（ゴリ押し検索）
// =========================
let urlMapCache = null;

async function getRecipeUrlMap() {
  if (urlMapCache) return urlMapCache;

  const isSubDir = window.location.pathname.includes('/recipe/');
  const basePath = isSubDir ? '../' : '';

  const jsSources = [
    { file: 'js/diet.js', pageUrl: 'diet.html' },
    { file: 'js/only.js', pageUrl: 'only-recipe.html' },
    { file: 'js/range.js', pageUrl: 'range-recipe.html' }
  ];

  const htmlSources = [
    '材料4つ以内レシピ.html',
    'range-recipe.html'
  ];

  const list = [];

  // 1. JSファイルから料理名とURLを抽出
  for (const src of jsSources) {
    try {
      const res = await fetch(`${basePath}${src.file}`);
      if (!res.ok) continue;
      const text = await res.text();
      const titleRegex = /title\s*:\s*["'`]([^"'`]+)["'`]/g;
      let match;

      while ((match = titleRegex.exec(text)) !== null) {
        const title = match[1];
        const beforeChunk = text.slice(Math.max(0, match.index - 120), match.index);
        let url = `${basePath}${src.pageUrl}?title=${encodeURIComponent(title)}`;

        if (src.pageUrl === 'diet.html') {
          const keyMatch = beforeChunk.match(/["'`]?([a-zA-Z0-9_-]+)["'`]?\s*:\s*\{[^{}]*$/);
          if (keyMatch) {
            url = `${basePath}diet.html?id=${encodeURIComponent(keyMatch[1])}`;
          }
        }
        list.push({ title, url });
      }
    } catch (e) {}
  }

  // 2. HTMLファイルから料理名とURLを抽出
  for (const file of htmlSources) {
    try {
      const res = await fetch(`${basePath}${file}`);
      if (!res.ok) continue;
      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, 'text/html');
      const cards = doc.querySelectorAll('.recipe-link, .recipe-card, [data-recipe-id]');

      cards.forEach(card => {
        const linkEl = card.tagName === 'A' ? card : card.closest('a') || card.querySelector('a');
        const href = linkEl ? linkEl.getAttribute('href') : '';
        const title = (card.querySelector('h3, h4, .recipe-title, .dish-name')?.textContent || '').trim();
        if (!title) return;

        const url = href ? `${basePath}${href}` : `${basePath}${file}?title=${encodeURIComponent(title)}`;
        list.push({ title, url });
      });
    } catch (e) {}
  }

  urlMapCache = list;
  return list;
}

// 料理名の表記ゆれ（例：「キムチ雑炊」と「おなかが膨れるキムチ雑炊」）を吸収してURLを探す
function findBestUrl(recipeName, list) {
  // 表記ゆれ用の変換辞書
  const alias = {
    "レンジ茶わん蒸し": "レンジ茶碗蒸し",
    "たまちきクリームサラダ": "たまチキクリームサラダ",
    "スイートポテトケーキ": "スイートポテトチーズケーキ",
    "クリームリゾット": "トマトチーズリゾット"
  };
  const target = alias[recipeName] || recipeName;

  // 完全一致 → 部分一致の順で検索
  const exact = list.find(item => item.title === target);
  if (exact) return exact.url;

  const partial = list.find(item => item.title.includes(target) || target.includes(item.title));
  if (partial) return partial.url;

  // 見つからなかった場合のフォールバック
  return `range-recipe.html?title=${encodeURIComponent(target)}`;
}

// =========================
// HTML要素の取得
// =========================
const form = document.getElementById("diagnosisForm");
const result = document.getElementById("result");
const recipeList = document.getElementById("recipeList");
const resultType = document.getElementById("resultType");
const retryBtn = document.getElementById("retryBtn");

// =========================
// 診断処理
// =========================
if (form && result && recipeList && resultType && retryBtn) {
  // ページ読み込み時に裏側で全レシピURLを先読みしておく
  getRecipeUrlMap();

  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const priority = form.priority.value;
    const hunger = form.hunger.value;
    const energy = form.energy.value;
    const taste = form.taste.value;

    let type = "";

    if (priority === "quick") {
      if (hunger === "hungry") {
        type = energy === "easy" ? "A" : "C";
      } else {
        type = energy === "easy" ? "E" : "G";
      }
    } else {
      if (hunger === "hungry") {
        type = energy === "easy" ? "I" : "K";
      } else {
        type = energy === "easy" ? "M" : "O";
      }
    }

    if (taste === "light") {
      const lightTypes = {
        A: "B", C: "D", E: "F", G: "H",
        I: "J", K: "L", M: "N", O: "P"
      };
      type = lightTypes[type];
    }

    // 全レシピのURL一覧を取得
    const urlList = await getRecipeUrlMap();

    // 結果表示
    recipeList.innerHTML = "";

    recipes[type].forEach((recipeName, index) => {
      const targetUrl = findBestUrl(recipeName, urlList);

      // カード全体をリンク（aタグ）にする
      const link = document.createElement("a");
      link.href = targetUrl;
      link.style.textDecoration = "none";
      link.style.color = "inherit";
      link.style.display = "block";

      const card = document.createElement("div");
      card.className = "recipe-card";
      card.style.cursor = "pointer";

      const number = document.createElement("p");
      number.textContent = "RECOMMEND " + (index + 1);

      const name = document.createElement("h3");
      name.textContent = recipeName;

      const message = document.createElement("p");
      message.textContent = "レシピを見る →";

      card.appendChild(number);
      card.appendChild(name);
      card.appendChild(message);

      link.appendChild(card);
      recipeList.appendChild(link);
    });

    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // もう一度診断
  retryBtn.addEventListener("click", function() {
    form.reset();
    result.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =========================
// メニューバー
// =========================
const hamburger = document.getElementById("hamburger-btn");
const menu = document.getElementById("slide-menu");
const overlay = document.getElementById("menu-overlay");

if (hamburger && menu && overlay) {
  hamburger.addEventListener("click", function() {
    const isOpen = menu.classList.toggle("open");
    overlay.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  overlay.addEventListener("click", function() {
    menu.classList.remove("open");
    overlay.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  });

  menu.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      menu.classList.remove("open");
      overlay.classList.remove("show");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}
