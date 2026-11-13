// 全ページ共通の動き
//   ① ローディング画面  ② ハンバーガーメニュー  ③ おすすめスライダー
//   ④ レシピの絞り込み  ⑤ 野菜検索            ⑥ サイト内検索ボタン
// 対応する要素がないページでは、その部分は何もしません。
// ※ Supabase関連は supabase-client.js / auth-status.js に分けてあります。

document.addEventListener('DOMContentLoaded', () => {

  // =====================================
  // ① ローディング画面
  // =====================================
  const loadingScreen = document.getElementById('loading-screen');
  const homeScreen = document.getElementById('home-screen');
  const loadingTextElem = document.getElementById('loading-text');

  if (loadingScreen && homeScreen && loadingTextElem) {
    const message = '読み込み中...';
    const speed = 150; // 1文字あたりの速さ（ミリ秒）
    let charIndex = 0;

    loadingTextElem.textContent = '';

    // ローディング画面を消してホーム画面を表示
    const transitionToHome = () => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
      }, 500);
    };

    // 1文字ずつタイピング表示
    const typeWriter = () => {
      if (charIndex < message.length) {
        loadingTextElem.textContent += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(transitionToHome, 1000);
      }
    };

    typeWriter();
  }


  // =====================================
  // ② ハンバーガーメニュー（三本線）
  // =====================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const slideMenu = document.getElementById('slide-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  if (hamburgerBtn && slideMenu && menuOverlay) {
    const setMenu = (open) => {
      hamburgerBtn.classList.toggle('active', open);
      slideMenu.classList.toggle('active', open);
      menuOverlay.classList.toggle('active', open);
      hamburgerBtn.setAttribute('aria-expanded', String(open));
    };

    hamburgerBtn.addEventListener('click', () => {
      setMenu(!slideMenu.classList.contains('active'));
    });

    // 暗い部分を押す、またはEscキーで閉じる
    menuOverlay.addEventListener('click', () => setMenu(false));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }


  // =====================================
  // ③ おすすめレシピスライダー
  // =====================================
  const slides = document.querySelectorAll('.slide-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let currentSlide = 0;

  function showSlide(index) {
    if (slides.length === 0) return;

    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => {
      dot.classList.remove('active');
      dot.removeAttribute('aria-current');
    });

    slides[currentSlide].classList.add('active');

    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
      dots[currentSlide].setAttribute('aria-current', 'true');
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });


  // =====================================
  // ④ レシピの絞り込み機能
  // =====================================
  const filterButtons = document.querySelectorAll('.filter');
  const recipeLinks = document.querySelectorAll('.recipe-link');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      const value = button.dataset.filter;

      recipeLinks.forEach(link => {
        const card = link.querySelector('.recipe-card');
        if (!card) return;
        link.hidden = value !== 'all' && card.dataset.category !== value;
      });
    });
  });


  // =====================================
  // ⑤ 野菜検索（漢字・ひらがな・カタカナ対応）
  // =====================================
  const vegetableInput = document.getElementById('vegetable-search');
  const vegetableCards = document.querySelectorAll('.vegetable-card');
  const emptyMessage = document.getElementById('search-empty');

  if (vegetableInput) {
    // 文字をそろえる（カタカナ→ひらがな、全角→半角、空白を消す）
    const normalizeText = (text) =>
      text
        .normalize('NFKC')
        .replace(/[\u30A1-\u30F6]/g, char =>
          String.fromCharCode(char.charCodeAt(0) - 0x60)
        )
        .toLowerCase()
        .replace(/\s+/g, '');

    vegetableInput.addEventListener('input', () => {
      const keyword = normalizeText(vegetableInput.value);
      let count = 0;

      vegetableCards.forEach(card => {
        const name = normalizeText(card.dataset.name || '');
        const kana = normalizeText(card.dataset.kana || '');
        const matched = keyword === '' || name.includes(keyword) || kana.includes(keyword);

        card.style.display = matched ? '' : 'none';
        if (matched) count++;
      });

      if (emptyMessage) {
        emptyMessage.style.display = count === 0 ? 'block' : 'none';
      }
    });
  }


  // =====================================
  // ⑥ サイト内検索ボタン
  //   ・トップページ：入力に合わせて search.js が結果を出すので、ボタンは同じ動きをさせる
  //   ・それ以外　　：トップページへ、検索ワード付きで移動する
  // =====================================
  const globalSearchInput = document.getElementById('search-input');
  const globalSearchButton = document.getElementById('search-btn');

  if (globalSearchInput && globalSearchButton) {
    // recipe/ の中のページかどうかで、トップページへの道が変わる
    const inRecipeFolder = location.pathname.includes('/recipe/');
    const homeUrl = (inRecipeFolder ? '../' : '') + 'index.html';
    const isHome = /(^|\/)(index\.html)?$/.test(location.pathname);

    const executeGlobalSearch = () => {
      const keyword = globalSearchInput.value.trim();
      if (keyword === '') return;

      if (isHome) {
        globalSearchInput.dispatchEvent(new Event('input'));
      } else {
        location.href = homeUrl + '?search=' + encodeURIComponent(keyword);
      }
    };

    globalSearchButton.addEventListener('click', executeGlobalSearch);
    globalSearchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') executeGlobalSearch();
    });
  }

});