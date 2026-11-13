document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    function collectCategoryRecipes(dataObj, defaultLink) {
        const items = [];
        if (!dataObj) return items;

        Object.keys(dataObj).forEach(category => {
            const list = dataObj[category];
            if (Array.isArray(list)) {
                list.forEach(r => {
                    items.push({
                        title: r.title || '',
                        subtitle: r.description || '',
                        image: r.image || '',
                        ingredients: Array.isArray(r.ingredients) ? r.ingredients : [],
                        link: defaultLink
                    });
                });
            }
        });
        return items;
    }

    function executeSearch(keyword) {
        const query = keyword.trim().toLowerCase();
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }

        const allItems = [];

        // ① diet.js (recipeData)
        if (typeof recipeData !== 'undefined') {
            Object.keys(recipeData).forEach(id => {
                const r = recipeData[id];
                allItems.push({
                    title: r.title || '',
                    subtitle: r.subtitle || '',
                    image: r.image || '',
                    ingredients: (r.ingredients || []).map(ing => ing.name || ''),
                    link: `diet.html?id=${encodeURIComponent(id)}`
                });
            });
        }

        // ② only.js (window.onlyRecipes)
        if (window.onlyRecipes) {
            allItems.push(...collectCategoryRecipes(window.onlyRecipes, 'only-recipe.html'));
        }

        // ③ range.js (window.rangeRecipes)
        if (window.rangeRecipes) {
            allItems.push(...collectCategoryRecipes(window.rangeRecipes, 'range-recipe.html'));
        }

        let matchCount = 0;
        let cardsHTML = '';

        allItems.forEach(item => {
            const titleMatch = item.title.toLowerCase().includes(query);
            const subtitleMatch = item.subtitle.toLowerCase().includes(query);
            const ingredientMatch = item.ingredients.some(ing => String(ing).toLowerCase().includes(query));

            if (titleMatch || subtitleMatch || ingredientMatch) {
                matchCount++;
                cardsHTML += `
                    <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fafafa; display: flex; flex-direction: column;">
                        <div style="height: 100px; background: #ddd; overflow: hidden;">
                            ${item.image
                                ? `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                                : `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #777; font-size: 0.8rem;">No Image</div>`
                            }
                        </div>
                        <div style="padding: 10px; display: flex; flex-direction: column; flex-grow: 1;">
                            <h4 style="font-size: 0.9rem; margin-bottom: 5px; color: #333; line-height: 1.3;">${item.title}</h4>
                            <p style="font-size: 0.75rem; color: #666; margin-bottom: 10px; flex-grow: 1;">${item.subtitle}</p>
                            <a href="${item.link}" style="display: inline-block; text-align: center; background: #88c9b3; padding: 6px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: bold; text-decoration: none; color: #fff;">レシピを見る</a>
                        </div>
                    </div>
                `;
            }
        });

        if (matchCount === 0) {
            searchResults.innerHTML = `
                <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center; color: #777; margin: 15px 0;">
                    ${keyword} に一致するレシピは見つかりませんでした。
                </div>
            `;
        } else {
            searchResults.innerHTML = `
                <div style="background: #fff; padding: 15px; border-radius: 10px; margin: 15px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1rem; color: #2d5a43; margin-bottom: 10px;">${keyword} の検索結果</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                        ${cardsHTML}
                    </div>
                </div>
            `;
        }
    }

    searchInput.addEventListener('input', (e) => {
        executeSearch(e.target.value);
    });

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            executeSearch(searchInput.value);
        });
    }
});
