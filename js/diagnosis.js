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
 form.addEventListener("submit", function(event) {
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
   // さっぱりを選んだ場合
   if (taste === "light") {
     const lightTypes = {
       A: "B",
       C: "D",
       E: "F",
       G: "H",
       I: "J",
       K: "L",
       M: "N",
       O: "P"
     };
     type = lightTypes[type];
   }
   // 結果表示
   resultType.textContent = "診断タイプ：" + type;
   recipeList.innerHTML = "";
   recipes[type].forEach((recipe, index) => {
     const card = document.createElement("div");
     card.className = "recipe-card";
     const number = document.createElement("p");
     number.textContent = "RECOMMEND " + (index + 1);
     const name = document.createElement("h3");
     name.textContent = recipe;
     const message = document.createElement("p");
     message.textContent = "今日のおすすめ料理！";
     card.appendChild(number);
     card.appendChild(name);
     card.appendChild(message);
     recipeList.appendChild(card);
   });
   result.classList.remove("hidden");
   result.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 });

 // =========================
 // もう一度診断
 // =========================
 retryBtn.addEventListener("click", function() {
   form.reset();
   result.classList.add("hidden");
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 });
}

// =========================
// メニューバー
// =========================
const hamburger = document.getElementById("hamburger-btn");
const menu = document.getElementById("slide-menu");
const overlay = document.getElementById("menu-overlay");
if (hamburger && menu && overlay) {
 // メニューを開く・閉じる
 hamburger.addEventListener("click", function() {
   const isOpen = menu.classList.toggle("open");
   overlay.classList.toggle("show");
   hamburger.setAttribute("aria-expanded", isOpen);
 });

 // 背景を押すと閉じる
 overlay.addEventListener("click", function() {
   menu.classList.remove("open");
   overlay.classList.remove("show");
   hamburger.setAttribute("aria-expanded", "false");
 });

 // メニュー内のリンクを押すと閉じる
 menu.querySelectorAll("a").forEach(function(link) {
   link.addEventListener("click", function() {
     menu.classList.remove("open");
     overlay.classList.remove("show");
     hamburger.setAttribute("aria-expanded", "false");
   });
 });
}