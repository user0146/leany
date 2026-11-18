// レシピページのレビュー欄（星・コメント・写真）
// 前提：supabase-client.js を先に読み込んで、db が使えること
// ・どのレシピのレビューかは、ページのファイル名（例：親子丼.html → 「親子丼」）で自動的に決まります
// ・写真を選ぶ欄と「ログインしてください」の文は、HTMLになければこのファイルが足します

(function () {
  const section = document.querySelector(".review-section");
  if (!section) return;

  const itemsEl = document.getElementById("review-items");
  const form = document.getElementById("review-form");
  if (!form || !itemsEl) return;

  if (typeof db === "undefined") {
    itemsEl.textContent =
      "レビューを読み込めませんでした。（supabase-client.js の読み込み順を確認してください）";
    return;
  }

  // どのレシピか：data-recipe-id があればそれを、なければページのファイル名を使う
  const recipeKey =
    section.dataset.recipeId ||
    decodeURIComponent(location.pathname.split("/").pop()).replace(/\.html$/, "");

  const BUCKET = "cook-photos";
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const EXT = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif"
  };

  const nameInput = document.getElementById("review-name");
  const ratingSelect = document.getElementById("review-rating");
  const commentInput = document.getElementById("review-comment");
  const submitButton = document.getElementById("review-submit");
  const messageEl = document.getElementById("review-message");
  const avgStarsEl = document.getElementById("average-stars");
  const avgTextEl = document.getElementById("review-average");
  const countEl = document.getElementById("review-count");

  // ----- HTMLに無い部品を足す -----

  // 写真を選ぶ欄
  let photoInput = document.getElementById("review-photo");
  if (!photoInput) {
    const label = document.createElement("label");
    label.setAttribute("for", "review-photo");
    label.textContent = "写真（なくてもOK）";

    photoInput = document.createElement("input");
    photoInput.type = "file";
    photoInput.id = "review-photo";
    photoInput.accept = "image/jpeg,image/png,image/webp,image/gif";

    form.insertBefore(label, submitButton);
    form.insertBefore(photoInput, submitButton);
  }

  // ログインを促す文
  let loginNote = document.getElementById("review-login-note");
  if (!loginNote) {
    const authBox = document.getElementById("auth-status");
    const authUrl = (authBox && authBox.dataset.authUrl) || "auth.html";

    loginNote = document.createElement("p");
    loginNote.id = "review-login-note";
    loginNote.className = "rv-note";

    const link = document.createElement("a");
    link.href = authUrl;
    link.textContent = "ログイン";
    loginNote.append(link, "すると、レビューと写真を投稿できます。");

    form.parentNode.insertBefore(loginNote, form);
  }

  let currentUser = null;

  // ----- 表示まわり -----

  function showMessage(text, type) {
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.dataset.type = type || "";
    messageEl.hidden = !text;
  }

  function stars(n) {
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

  function photoUrl(path) {
    return db.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
  }

  // 平均の星・件数を更新する
  function renderSummary(reviews) {
    if (reviews.length === 0) {
      avgStarsEl.textContent = stars(0);
      avgTextEl.textContent = "まだ評価はありません";
      countEl.textContent = "レビュー 0件";
      return;
    }
    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    avgStarsEl.textContent = stars(Math.round(avg));
    avgTextEl.textContent = avg.toFixed(1) + " / 5";
    countEl.textContent = "レビュー " + reviews.length + "件";
  }

  function renderReviews(reviews) {
    renderSummary(reviews);
    itemsEl.replaceChildren();

    if (reviews.length === 0) {
      const p = document.createElement("p");
      p.textContent = "まだレビューがありません。最初のレビューを書いてみましょう。";
      itemsEl.appendChild(p);
      return;
    }

    reviews.forEach((r) => {
      const item = document.createElement("article");
      item.className = "rv-item";

      const head = document.createElement("div");
      head.className = "rv-head";

      const name = document.createElement("strong");
      name.textContent = r.nickname; // textContentなので、入力した文字がそのまま表示される
      head.appendChild(name);

      const rating = document.createElement("span");
      rating.className = "rv-stars";
      rating.textContent = stars(r.rating);
      rating.setAttribute("aria-label", "5段階中" + r.rating);
      head.appendChild(rating);

      const date = document.createElement("span");
      date.className = "rv-date";
      date.textContent = new Date(r.created_at).toLocaleDateString("ja-JP");
      head.appendChild(date);

      item.appendChild(head);

      const comment = document.createElement("p");
      comment.className = "rv-comment";
      comment.textContent = r.comment;
      item.appendChild(comment);

      if (r.image_path) {
        const img = document.createElement("img");
        img.className = "rv-photo";
        img.src = photoUrl(r.image_path);
        img.alt = r.nickname + "さんが作った料理の写真";
        img.loading = "lazy";
        item.appendChild(img);
      }

      // 自分の投稿にだけ、削除ボタンを出す
      if (currentUser && r.user_id === currentUser.id) {
        const del = document.createElement("button");
        del.type = "button";
        del.className = "rv-delete";
        del.textContent = "削除する";
        del.addEventListener("click", () => deleteReview(r));
        item.appendChild(del);
      }

      itemsEl.appendChild(item);
    });
  }

  // ----- データの取得・追加・削除 -----

  async function loadReviews() {
    const { data, error } = await db
      .from("reviews")
      .select("*")
      .eq("recipe_key", recipeKey)
      .order("created_at", { ascending: false });

    if (error) {
      itemsEl.textContent = "レビューを読み込めませんでした。（" + error.message + "）";
      return;
    }
    renderReviews(data);
  }

  async function deleteReview(r) {
    if (!confirm("このレビューを削除しますか？")) return;

    const { error } = await db.from("reviews").delete().eq("id", r.id);
    if (error) {
      showMessage("削除できませんでした。（" + error.message + "）", "error");
      return;
    }
    if (r.image_path) await db.storage.from(BUCKET).remove([r.image_path]);
    showMessage("レビューを削除しました。", "success");
    loadReviews();
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const nickname = nameInput.value.trim();
    const comment = commentInput.value.trim();
    const file = photoInput.files[0];

    if (!nickname || !comment) {
      showMessage("お名前とコメントを入力してください。", "error");
      return;
    }
    if (file && !EXT[file.type]) {
      showMessage("JPEG・PNG・WebP・GIFの画像を選んでください。", "error");
      return;
    }
    if (file && file.size > MAX_SIZE) {
      showMessage("写真は5MBまでです。小さいサイズの写真を選んでください。", "error");
      return;
    }

    submitButton.disabled = true;
    showMessage("");

    // 写真があれば先に送る（保存先は「ユーザーID/日時-乱数.拡張子」）
    let path = null;
    if (file) {
      path =
        currentUser.id + "/" + Date.now() + "-" +
        Math.random().toString(36).slice(2, 8) + "." + EXT[file.type];

      const upload = await db.storage
        .from(BUCKET)
        .upload(path, file, { contentType: file.type });

      if (upload.error) {
        showMessage("写真を送れませんでした。（" + upload.error.message + "）", "error");
        submitButton.disabled = false;
        return;
      }
    }

    const { error } = await db.from("reviews").insert({
      recipe_key: recipeKey,
      nickname,
      rating: Number(ratingSelect.value),
      comment,
      image_path: path
    });

    if (error) {
      if (path) await db.storage.from(BUCKET).remove([path]); // 記録に失敗したら写真も消す
      showMessage("投稿できませんでした。（" + error.message + "）", "error");
    } else {
      const keepName = nameInput.value; // 次回も同じ名前を使えるように残す
      form.reset();
      nameInput.value = keepName;
      showMessage("レビューを投稿しました。", "success");
      loadReviews();
    }
    submitButton.disabled = false;
  });

  // ----- ログイン状態に合わせて表示を切り替える -----

  showMessage("");
  form.hidden = true; // ログインが確認できるまでは隠しておく

  db.auth.onAuthStateChange((event, session) => {
    const nextUser = session ? session.user : null;
    const changed = (nextUser && nextUser.id) !== (currentUser && currentUser.id);
    currentUser = nextUser;

    form.hidden = !currentUser;
    loginNote.hidden = !!currentUser;

    // コールバックの中で直接Supabaseを呼ぶと止まることがあるので、少し後に実行する
    if (changed || event === "INITIAL_SESSION") {
      setTimeout(loadReviews, 0);
    }
  });
})();
