document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput) return;

    function executeSearch(keyword) {
        if (typeof recipeData === 'undefined') {
            console.error('recipeData が読み込まれていません。 diet.jsの読み込み順を確認してください。');
            return;
        }

        const query = keyword.trim().toLowerCase();
        if (!query) {
            if (searchResults) {
                searchResults.innerHTML = '';
            }
            return;
        }

        const recipeKeys = Object.keys(recipeData);
        let matchCount = 0;

        let resultsHTML = `
            <div style="background: #fff; padding: 15px; border-radius: 10px; margin: 15px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h3 style="font-size: 1rem; color: #2d5a43; margin-bottom: 10px;">${keyword} の検索結果</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
        `;

        recipeKeys.forEach(id => {
            const recipe = recipeData[id];
            const titleMatch = recipe.title && recipe.title.toLowerCase().includes(query);
            const subtitleMatch = recipe.subtitle && recipe.subtitle.toLowerCase().includes(query);
            const ingredientMatch = recipe.ingredients && recipe.ingredients.some(ing => ing.name && ing.name.toLowerCase().includes(query));

            if (titleMatch || subtitleMatch || ingredientMatch) {
                matchCount++;
                resultsHTML += `
                    <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fafafa; display: flex; flex-direction: column;">
                        <div style="height: 100px; background: #ddd; overflow: hidden;">
                            ${recipe.image
                                ? `<img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                                : `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #777; font-size: 0.8rem;">No Image</div>`
                            }
                        </div>
                        <div style="padding: 10px; display: flex; flex-direction: column; flex-grow: 1;">
                            <h4 style="font-size: 0.9rem; margin-bottom: 5px; color: #333; line-height: 1.3;">${recipe.title}</h4>
                            <p style="font-size: 0.75rem; color: #666; margin-bottom: 10px; flex-grow: 1;">${recipe.subtitle || ''}</p>
                            <a href="diet.html?id=${encodeURIComponent(id)}" style="display: inline-block; text-align: center; background: #88c9b3; padding: 6px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: bold; text-decoration: none; color: #fff;">レシピを見る</a>
                        </div>
                    </div>
                `;
            }
        });

        if (matchCount === 0) {
            resultsHTML = `
                <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center; color: #777; margin: 15px 0;">
                    ${keyword} に一致するレシピは見つかりませんでした。
                </div>
            `;
        } else {
            resultsHTML += `
                </div>
            </div>
            `;
        }

        if (searchResults) {
            searchResults.innerHTML = resultsHTML;
        }
    }

    searchInput.addEventListener('input', (e) => {
        executeSearch(e.target.value);
    });
});
