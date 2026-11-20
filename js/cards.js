// レシピ一覧のカードを作る共通の部品
// ダイエット（diet.js）・〇〇だけ（only.js）・レンジ（range.js）の一覧ページで使います。
// 見た目は css/category.css で決まります。
function createRecipeCard({ href, image, title, description }) {
  const card = document.createElement("a");
  card.className = "cat-card";
  card.href = href;

  const imageBox = document.createElement("div");
  imageBox.className = "cat-card-img";
  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = title;
    img.loading = "lazy";
    img.onerror = () => img.remove(); // 画像が見つからないときは、灰色の枠だけにする
    imageBox.appendChild(img);
  }

  const body = document.createElement("div");
  body.className = "cat-card-body";

  const heading = document.createElement("h3");
  heading.className = "cat-card-title";
  heading.textContent = title; // textContentなので、入力した文字がそのまま表示される

  const desc = document.createElement("p");
  desc.className = "cat-card-desc";
  desc.textContent = description || "";

  const pill = document.createElement("span");
  pill.className = "cat-pill";
  pill.textContent = "レシピを見る";

  body.append(heading, desc, pill);
  card.append(imageBox, body);
  return card;
}
