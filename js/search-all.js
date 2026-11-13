document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput) return;

    const isSubDir = window.location.pathname.includes('/recipe/');
    const basePath = isSubDir ? '../' : '';

    const JS_SOURCES = [
        { file: 'js/diet.js', pageUrl: 'diet.html', categoryLabel: 'ダイエット' },
        { file: 'js/only.js', pageUrl: 'only-recipe.html', categoryLabel: '〇〇だけレシピ' },
        { file: 'js/range.js', pageUrl: 'range-recipe.html', categoryLabel: 'レンジでレシピ' }
    ];

    const HTML_SOURCES = [
        { file: '材料4つ以内レシピ.html', categoryLabel: '材料4つ以内' },
        { file: 'range-recipe.html', categoryLabel: 'レンジでレシピ' }
    ];

    let cachedAllRecipes = null;

    function getMatchGroup(text, regex) {
        const m = text.match(regex);
        return m ? m.at(1) : '';
    }

    function extractRecipesFromJS(codeText, sourceInfo) {
        const extracted = [];
        const titleRegex = /title\s*:\s*["'`]([^"'`]+)["'`]/g;
        let match;

        while ((match = titleRegex.exec(codeText)) !== null) {
            const title = match.at(1);
            const startIndex = match.index;
            const beforeChunk = codeText.slice(Math.max(0, startIndex - 120), startIndex);
            const afterChunk = codeText.slice(startIndex, startIndex + 1500);
            const chunk = beforeChunk + afterChunk;

            const image = getMatchGroup(afterChunk, /image\s*:\s*["'`]([^"'`]+)["'`]/);
            const description = getMatchGroup(afterChunk, /(?:description|subtitle)\s*:\s*["'`]([^"'`]+)["'`]/);

            let id = '';
            const keyMatch = getMatchGroup(beforeChunk, /["'`]?([a-zA-Z0-9_-]+)["'`]?\s*:\s*\{[^{}]*$/);
            const idPropMatch = getMatchGroup(chunk, /id\s*:\s*["'`]([^"'`]+)["'`]/);
            if (sourceInfo.pageUrl === 'diet.html' && keyMatch) {
                id = keyMatch;
            } else if (idPropMatch) {
                id = idPropMatch;
            }

            const ingredientsText = getMatchGroup(afterChunk, /ingredients\s*:\s*\[([\s\S]*?)\]/);

            let targetUrl = `${basePath}${sourceInfo.pageUrl}?title=${encodeURIComponent(title)}`;
            if (sourceInfo.pageUrl === 'diet.html' && id) {
                targetUrl = `${basePath}diet.html?id=${encodeURIComponent(id)}`;
            } else if (id) {
                targetUrl += `&id=${encodeURIComponent(id)}`;
            }

            if (!extracted.some(r => r.title === title && r.categoryLabel === sourceInfo.categoryLabel)) {
                extracted.push({
                    title: title,
                    description: description,
                    image: image ? `${basePath}${image}` : '',
                    searchBlob: `${title} ${description} ${ingredientsText}`.toLowerCase(),
                    url: targetUrl,
                    categoryLabel: sourceInfo.categoryLabel
                });
            }
        }
        return extracted;
    }

    function extractRecipesFromHTML(htmlText, sourceInfo) {
        const extracted = [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const cards = doc.querySelectorAll('.recipe-link, .recipe-card, [data-recipe-id]');

        cards.forEach(card => {
            const linkEl = card.tagName === 'A' ? card : card.closest('a') || card.querySelector('a');
            const href = linkEl ? linkEl.getAttribute('href') : '';
            const title = (card.querySelector('h3, h4, .recipe-title, .dish-name')?.textContent || '').trim();
            const image = card.querySelector('img')?.getAttribute('src') || '';
            const meta = (card.querySelector('.meta')?.textContent || '').trim();
            const ingredients = (card.querySelector('.ingredients')?.textContent || '').trim();
            const subCat = (card.querySelector('.category')?.textContent || '').trim();

            if (!title) return;

            const description = [meta, ingredients].filter(Boolean).join(' / ');
            const finalUrl = href
                ? `${basePath}${href}`
                : `${basePath}${sourceInfo.file}?title=${encodeURIComponent(title)}`;

            if (!extracted.some(r => r.title === title && r.categoryLabel.startsWith(sourceInfo.categoryLabel))) {
                extracted.push({
                    title: title,
                    description: description,
                    image: image ? `${basePath}${image}` : '',
                    searchBlob: `${title} ${subCat} ${meta} ${ingredients}`.toLowerCase(),
                    url: finalUrl,
                    categoryLabel: subCat ? `${sourceInfo.categoryLabel}・${subCat}` : sourceInfo.categoryLabel
                });
            }
        });

        return extracted;
    }

    async function loadAllRecipes() {
        if (cachedAllRecipes) return cachedAllRecipes;

        const all = [];
        const hasLoadedDietData = typeof recipeData !== 'undefined';

        if (hasLoadedDietData) {
            Object.keys(recipeData).forEach(id => {
                const r = recipeData[id];
                const ingNames = r.ingredients ? r.ingredients.map(i => i.name || i).join(' ') : '';
                all.push({
                    title: r.title || '',
                    description: r.subtitle || '',
                    image: r.image ? `${basePath}${r.image}` : '',
                    searchBlob: `${r.title || ''} ${r.subtitle || ''} ${ingNames}`.toLowerCase(),
                    url: `${basePath}diet.html?id=${encodeURIComponent(id)}`,
                    categoryLabel: 'ダイエット'
                });
            });
        }

        for (const source of JS_SOURCES) {
            if (source.file === 'js/diet.js' && hasLoadedDietData) continue;
            try {
                const res = await fetch(`${basePath}${source.file}`);
                if (res.ok) {
                    const text = await res.text();
                    all.push(...extractRecipesFromJS(text, source));
                }
            } catch (err) {}
        }

        for (const source of HTML_SOURCES) {
            try {
                const res = await fetch(`${basePath}${source.file}`);
                if (res.ok) {
                    const text = await res.text();
                    all.push(...extractRecipesFromHTML(text, source));
                }
            } catch (err) {}
        }

        cachedAllRecipes = all;
        return all;
    }

    async function executeSearch(keyword) {
        const query = keyword.trim().toLowerCase();
        if (!query) {
            if (searchResults) searchResults.innerHTML = '';
            return;
        }

        const allRecipes = await loadAllRecipes();
        const keywords = query.split(/\s+/).filter(Boolean);
        const matched = allRecipes.filter(recipe =>
            keywords.every(kw => recipe.searchBlob.includes(kw))
        );

        if (matched.length === 0) {
            searchResults.innerHTML = `
                <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center; color: #777; margin: 15px 0;">
                    「${keyword}」に一致するレシピは見つかりませんでした。
                </div>
            `;
            return;
        }

        let resultsHTML = `
            <div style="background: #fff; padding: 15px; border-radius: 10px; margin: 15px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h3 style="font-size: 1rem; color: #2d5a43; margin-bottom: 10px;">「${keyword}」の検索結果（${matched.length}件）</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
        `;

        matched.forEach(recipe => {
            resultsHTML += `
                <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fafafa; display: flex; flex-direction: column;">
                    <div style="height: 100px; background: #ddd; overflow: hidden; position: relative;">
                        <span style="position: absolute; top: 5px; left: 5px; background: rgba(45,90,67,0.85); color: #fff; font-size: 0.65rem; padding: 2px 6px; border-radius: 4px;">
                            ${recipe.categoryLabel}
                        </span>
                        ${recipe.image
                            ? `<img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                            : `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #777; font-size: 0.8rem;">No Image</div>`
                        }
                    </div>
                    <div style="padding: 10px; display: flex; flex-direction: column; flex-grow: 1;">
                        <h4 style="font-size: 0.9rem; margin-bottom: 5px; color: #333; line-height: 1.3;">${recipe.title}</h4>
                        <p style="font-size: 0.75rem; color: #666; margin-bottom: 10px; flex-grow: 1;">${recipe.description}</p>
                        <a href="${recipe.url}" style="display: inline-block; text-align: center; background: #88c9b3; padding: 6px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: bold; text-decoration: none; color: #fff;">レシピを見る</a>
                    </div>
                </div>
            `;
        });

        resultsHTML += `</div></div>`;
        if (searchResults) searchResults.innerHTML = resultsHTML;
    }

    searchInput.addEventListener('input', (e) => {
        executeSearch(e.target.value);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const targetTitle = urlParams.get('title');
    if (targetTitle) {
        setTimeout(() => {
            const categoryCards = document.querySelectorAll('.category-card');
            if (categoryCards.length > 0) {
for (const card of categoryCards) {
card.click();
const dishButtons = Array.from(document.querySelectorAll('.dish-card, button'));
const matchBtn = dishButtons.find(btn => btn.textContent.includes(targetTitle));
if (matchBtn) {
matchBtn.click();
return;
}
}
}
const allClickables = Array.from(document.querySelectorAll('button, .recipe-card, .dish-card, a'));
const directMatch = allClickables.find(el =>
!el.closest('#search-results') && el.textContent.includes(targetTitle)
);
if (directMatch) {
directMatch.click();
directMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
}, 150);
}
});