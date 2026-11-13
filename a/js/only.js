document.addEventListener("DOMContentLoaded", () => {
   // メニューバー
   const menuButton = document.getElementById("hamburger-btn");
   const menu = document.getElementById("slide-menu");
   const overlay = document.getElementById("menu-overlay");

   function closeMenu() {
       menu.classList.remove("open");
       overlay.classList.remove("show");
       menuButton.setAttribute("aria-expanded", "false");
   }
   menuButton.addEventListener("click", () => {
       const isOpen = menu.classList.toggle("open");
       overlay.classList.toggle("show", isOpen);
       menuButton.setAttribute("aria-expanded", isOpen);
   });
   overlay.addEventListener("click", closeMenu);
   // カテゴリーごとのレシピ
   const recipes = {
       seasoned: [
           {
               id: "味付き食品",
               title: "豚キャベ",
               image:"images/butakyabe.jpg",
               description: "味付け肉で作れる",
               ingredients: [
                   "味付き豚肉：１００ｇ",
                   "カットキャベツ：１００ｇ"
               ],
               steps: [
                   "耐熱容器にキャベツを入れる。",
                   "味付き豚肉を上にのせる。",
                   "ふんわりラップして６００Ｗで４～５分加熱する。",
                   "肉に火が通ったら完成！"
               ]
           },
           {
               id:"味付き食品",
               title:"焼肉丼",
               image:"images/yakiniku-don.jpg",
               description:"味付き肉で作れる",
               ingredients: [
                   "味付き焼肉 : １００ｇ",
                   "ご飯:１杯"
               ],
               steps: [
                   "味付き焼肉を表示通りに加熱する。",
                   "ご飯にのせたら完成！"
               ]
           },
           {
               id:"味付き食品",
               title:"つくね親子丼風",
               image:"images/tukune-don.jpg",
               description:"味付けつくねで作れる",
               ingredients: [
                   "味付きつくね : ３～４個",
                   "ご飯:１杯",
                   "卵:１個",
                   "めんつゆ:小さじ２"
               ],
               steps: [
                   "つくねを表示通りに温める。",
                   "耐熱容器に卵とめんつゆを入れて混ぜる。",
                   "６００Ｗで１分加熱して混ぜる。",
                   "つくねをご飯にのせ、卵をかけたら完成！"
               ]
           },
           {
               id:"味付き食品",
               title:"サラダチキン親子丼風",
               image:"images/sarada-don.jpg",
               description:"サラダチキンで作れる",
               ingredients: [
                   "サラダチキン:１個",
                   "ご飯:１杯",
                   "卵:１個",
                   "めんつゆ:大さじ１"
               ],
               steps: [
                   "サラダチキンを食べやすくちぎる。",
                   "耐熱容器に卵、めんつゆ、水大さじ１を入れて混ぜる。",
                   "６００Ｗで１分加熱して混ぜる",
                   "ご飯にサラダチキンと卵をのせたら完成！"
               ]
           },
           {
               id:"味付け食品",
               title:"チキンサンド",
               image:"images/sarada-sand.jpg",
               description:"サラダチキンで作る",
               ingredients: [
                   "サラダチキン:１個",
                   "食パン:２枚",
                   "マヨネーズ:大さじ１"
               ],
               steps: [
                   "サラダチキンを食べやすくちぎる。",
                   "食パンにマヨネーズを塗る。",
                   "サラダチキンをのせる。",
                   "もう１枚の食パンではさんだら完成！"
               ]
           },
           {
               id:"味付き食品",
               title:"チキンパスタ",
               image:"images/sarada-pasta.jpg",
               description:"サラダチキンで作る",
               ingredients: [
                   "サラダチキン:１個",
                   "パスタ:１００ｇ",
                   "めんつゆ:大さじ１",
                   "バター:１０ｇ"
               ],
               steps: [
                   "パスタを耐熱容器で表示時間通りに加熱する。",
                   "サラダチキンを食べやすくちぎる。",
                   "パスタにサラダチキン、めんつゆ、バターを加える。",
                   "よく混ぜたら完成！"
               ]
           }
       ],
       canned: [
           {
               id: "缶詰",
               title: "サバ缶丼",
               image:"images/saba-don.jpg",
               description: "サバ缶で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "サバ缶:1/2～1缶",
                   "しょうゆ：小さじ1",
                   "ねぎ:少々"
               ],
               steps: [
                   "サバ缶の汁を軽く切る。",
                   "ご飯にサバをのせる。",
                   "ねぎをのせたら完成！"
               ]
           },
           {
               id: "缶詰",
               title: "サバ味噌丼",
               image:"images/sabamiso-don.jpg",
               description: "サバ缶で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "サバ缶：１缶",
                   "味噌：小さじ１",
                   "砂糖:小さじ1/2"
               ],
               steps: [
                   "サバ缶のサバを耐熱容器に入れる。",
                   "味噌と砂糖を加えて混ぜる。",
                   "６００Ｗで１分加熱する。",
                   "ご飯にのせたら完成！"
               ]
           },
           {
               id: "缶詰",
               title: "ツナ卵丼",
               image:"images/tuna-don.jpg",
               description: "ツナ缶で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "ツナ缶：1/2缶",
                   "卵：１個",
                   "めんつゆ:大さじ１"
               ],
               steps: [
                   "耐熱容器にツナ、卵、めんつゆを入れて混ぜる。",
                   "６００Ｗで１分加熱する。",
                   "一度混ぜて、さらに３０秒ほど加熱する。",
                   "ご飯にのせたら完成！"
               ]
           },
           {
                id: "缶詰",
               title: "コンビーフ丼",
               image:"images/conbeef-don.jpg",
               description: "コンビーフ缶で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "コンビーフ：1/2缶",
                   "卵：１個",
                   "しょうゆ:小さじ１"
               ],
               steps: [
                   "コンビーフを耐熱容器に入れる。",
                   "卵を加えて混ぜる。",
                   "６００Ｗで１分加熱する。",
                   "しょうゆを加えて混ぜ、ご飯にのせたら完成！"
               ]
           },
           {
                id: "缶詰",
               title: "卵とじ牛丼",
               image:"images/tamatoji-don.jpg",
               description: "牛丼の具で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "牛丼の具：１袋",
                   "卵：１個"
               ],
               steps: [
                   "牛丼の具を表示通りに温める。",
                   "溶き卵を加えて６００Ｗで４０秒ほど加熱する。",
                   "ご飯にのせたら完成！"
               ]
           },
           {
                id: "缶詰",
               title: "焼き鳥丼",
               image:"images/yakitori-don.jpg",
               description: "焼き鳥缶で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "焼き鳥缶：１缶",
                   "刻みのり:少々"
               ],
               steps: [
                   "焼き鳥缶を温める。",
                   "ご飯にのせる。",
                   "刻みのりをかけたら完成！"
               ]
           },
           {
                id: "缶詰",
               title: "焼き鳥親子丼風",
               image:"images/yakitoritama-don.jpg",
               description: "焼き鳥缶で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "焼き鳥缶:１缶",
                   "卵：１個",
                   "めんつゆ:小さじ１"
               ],
               steps: [
                   "焼き鳥缶を耐熱容器に入れる。",
                   "溶き卵とめんつゆを加える。",
                   "６００Ｗで１分加熱する。",
                   "一度混ぜ、さらに３０秒ほど加熱する。",
                   "ご飯にのせたら完成！"
               ]
           }
       ],
       frozen: [
           {
               id: "冷凍食品",
               title: "餃子スープ",
               image:"images/gyoza-soup.jpeg",
               description: "冷凍餃子で作れる",
               ingredients: [
                   "冷凍餃子：４～５個",
                   "カット野菜：１００ｇ",
                   "水:２５０㎖",
                   "鶏がらスープの素:小さじ１"
               ],
               steps: [
                   "耐熱容器に水、カット野菜、鶏がらスープの素を入れる。",
                   "冷凍餃子を乗せる。",
                   "ふんわりラップして６００Ｗで５～６分加熱する。",
                   "餃子に火が通ったら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "チーズ餃子",
               image:"images/tizu-gyoza.jpg",
               description: "冷凍疑餃子で作れる",
               ingredients: [
                   "冷凍餃子:５個",
                   "ピザ用チーズ：３０ｇ",
                   "しょうゆ：少々"
               ],
               steps: [
                   "冷凍餃子を表示通りにレンジで温める。",
                   "チーズをのせる。",
                   "さらに３０～４０秒加熱したらチーズを溶かす。",
                   "しょうゆをかけたら完成！"
               ]
           },
           {
               id: "冷凍食品",
               title: "冷凍唐揚げの即席親子丼",
               image:"images/karaage-don.jpg",
               description: "冷凍唐揚げで作れる",
               ingredients: [
                   "冷凍唐揚げ：３～４個",
                   "ご飯：１杯",
                   "卵:１個",
                   "めんつゆ:大さじ１",
                   "水:大さじ２"
               ],
               steps: [
                   "冷凍唐揚げを表示通りにレンジで温める。",
                   "耐熱容器にめんつゆ、水、溶き卵を入れる。",
                   "６００Ｗで１分加熱し、一度混ぜる。",
                   "唐揚げを加えて、さらに３０秒ほど加熱する。",
                   "ご飯にのせたら完成！"
               ]
           },
           {
               id: "冷凍食品",
               title: "カレー唐揚げ丼",
               image:"images/karekara-don.jpg",
               description: "冷凍唐揚げで作れる",
               ingredients: [
                   "ご飯:１杯",
                   "冷凍唐揚げ：４個",
                   "カレー粉:小さじ1/2",
                   "マヨネーズ:小さじ１"
               ],
               steps: [
                   "冷凍唐揚げを表示通りに温める。",
                   "カレー粉を唐揚げにまぶす。",
                   "ご飯にのせ、マヨネーズをかけたら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "なんちゃってチキン南蛮",
               image:"images/tikinnaban.jpg",
               description: "冷凍唐揚げで作れる",
               ingredients: [
                   "冷凍唐揚げ:４個",
                   "タルタルソース:大さじ２",
                   "ポン酢：小さじ１"
               ],
               steps: [
                   "冷凍唐揚げを表示通りに温める。",
                   "ポン酢を唐揚げにかける。",
                   "タルタルソースをかけたら完成！"
               ]
           },  
           {
                id: "冷凍食品",
               title: "焼きおにぎり茶漬け",
               image:"images/yakioni.jpg",
               description: "冷凍焼きおにぎりで作れる",
               ingredients: [
                   "冷凍焼きおにぎり:１個",
                   "お茶：１５０㎖",
                   "だしの素：少々"
               ],
               steps: [
                   "焼きおにぎりを表示通りに温める。",
                   "器に焼きおにぎりを入れる。",
                   "温かいお茶とだしの素を加えたら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "焼きおにぎりチーズ",
               image:"images/yakioni-tizu.jpg",
               description: "冷凍焼きおにぎりで作れる",
               ingredients: [
                   "冷凍焼きおにぎり:１個",
                   "スライスチーズ：１枚"
               ],
               steps: [
                   "焼きおにぎりを表示通りに温める。",
                   "チーズをのせる。",
                   "さらに３０秒ほど加熱してチーズをとかしたら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "釜玉うどん",
               image:"images/kamatama-udon.jpg",
               description: "冷凍うどんで作れる",
               ingredients: [
                   "冷凍うどん:１玉",
                   "卵：１個",
                   "めんつゆ:大さじ１"
               ],
               steps: [
                   "冷凍うどんを表示通りにレンジで加熱する。",
                   "熱いうちに卵とめんつゆを加える。",
                   "よく混ぜたら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "レンジ肉うどん",
               image:"images/niku-udon.jpg",
               description: "冷凍うどんで作れる",
               ingredients: [
                   "冷凍うどん:１玉",
                   "豚小間切れ肉：８０ｇ",
                   "めんつゆ：大さじ２",
                   "水:２００㎖"
               ],
               steps: [
                   "耐熱容器に豚肉、めんつゆ、水を加える。",
                   "６００Ｗで３分加熱する。",
                   "冷凍うどんを加えて、さらに３分加熱する。",
                   "豚肉に火が通ったら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "ほうれん草卵とじ",
               image:"images/hourensou-tamago.jpg",
               description: "冷凍ほうれん草で作れる",
               ingredients: [
                   "冷凍ほうれん草:８０ｇ",
                   "卵:１個",
                   "めんつゆ:大さじ１",
                   "水:大さじ１"
               ],
               steps: [
                   "耐熱容器にほうれん草、めんつゆ、水を入れる。",
                   "６００Ｗで１分３０秒ほど加熱する。",
                   "溶き卵を加えて混ぜる。",
                   "さらに４０秒～１分加熱したら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "ふわたまチャーハン",
               image:"images/fuwatama-cha.jpg",
               description: "冷凍チャーハンで作れる",
               ingredients: [
                   "冷凍チャーハン:１袋",
                   "卵：１個"
               ],
               steps: [
                   "冷凍チャーハンを表示通りに温める。",
                   "溶き卵を別の耐熱容器に入れる。",
                   "６００Ｗで４０秒加熱して混ぜる。",
                   "さらに２０～３０秒加熱する。",
                   "チャーハンに卵をのせたら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "ツナブロッコリー",
               image:"images/tunaburo.jpg",
               description: "冷凍ブロッコリーで作れる",
               ingredients: [
                   "冷凍ブロッコリー:１００ｇ",
                   "ツナ缶：1/2缶",
                   "マヨネーズ：大さじ１"
               ],
               steps: [
                   "冷凍ブロッコリーを表示通りに温める。",
                   "ツナとマヨネーズを加える。",
                   "よく混ぜたら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "チーズポテト",
               image:"images/ti-pote.jpg",
               description: "冷凍ポテトで作れる",
               ingredients: [
                   "冷凍フライドポテト:１００ｇ",
                   "ピザ用チーズ:３０ｇ",
                   "塩：少々"
               ],
               steps: [
                   "冷凍ポテトを表示通りに温める。",
                   "チーズを乗せる。",
                   "さらに３０～４０秒加熱してチーズを溶かす。",
                   "塩を振ったら完成！"
               ]
           },
           {
                id: "冷凍食品",
               title: "チーズハンバーグ丼",
               image:"images/tizuhan.jpeg",
               description: "冷凍ハンバーグで作れる",
               ingredients: [
                   "ご飯:１杯",
                   "冷凍ハンバーグ：１個",
                   "スライスチーズ：１枚",
                   "ケチャップ:大さじ１"
               ],
               steps: [
                   "冷凍ハンバーグを表示通りに温める。",
                   "チーズをのせて、さらに３０ほど加熱する。",
                   "ご飯にのせる・。",
                   "ケチャップをかけたら完成！"
               ]
           }
       ],
       vegetables: [
           {
               id: "カット野菜",
               title: "野菜卵とじ",
               image:"images/yasatamatoji.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１００ｇ",
                   "卵：１個",
                   "めんつゆ：大さじ１"
               ],
               steps: [
                   "耐熱容器にカット野菜とめんつゆを入れる",
                   "６００Ｗで２分加熱する。",
                   "溶き卵を加える。",
                   "さらに４０秒～１分加熱したら完成！"
               ]
           },
           {
               id: "カット野菜",
               title: "豚キャベツ",
               image:"images/butakyabetu.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１５０ｇ",
                   "豚小間切れ肉：１００ｇ",
                   "ポン酢：大さじ１"
               ],
               steps: [
                   "耐熱容器にキャベツを入れる。",
                   "豚肉を広げて乗せる。",
                   "ふんわりラップして６００Ｗで４分加熱する。",
                   "豚肉に火が通ったらポン酢をかけて完成！"
               ]
           },
           {
                id: "カット野菜",
               title: "豚キャベツ丼",
               image:"images/butakyabe-don.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "カット野菜：１００ｇ",
                   "豚小間切れ肉：１００ｇ",
                   "焼肉のたれ：大さじ１"
               ],
               steps: [
                   "耐熱容器にキャベツと豚肉を入れる。",
                   "ふんわりラップして６００Ｗで４分加熱する。",
                   "焼肉のたれを加えて混ぜる。",
                   "ご飯にのせたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "中華野菜スープ",
               image:"images/chuka-soup.jpeg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１００ｇ",
                   "水：２５０㎖",
                   "鶏がらスープの素：小さじ１"
               ],
               steps: [
                   "耐熱容器にすべての材料を入れる。",
                   "ふんわりラップして６００Ｗで４分加熱する。",
                   "よく混ぜたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "焼肉丼",
               image:"images/yakinikudon.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "カット野菜：１００ｇ",
                   "豚小間切れ肉：１００ｇ",
                   "焼肉のたれ：大さじ２"
               ],
               steps: [
                   "耐熱容器にカット野菜と豚肉を入れる。",
                   "ふんわりラップして６００Ｗで４分加熱する。",
                   "焼肉のたれを加えて混ぜる。",
                   "ご飯にのせたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "簡単ポトフ",
               image:"images/potofu.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１００ｇ",
                   "ウインナー：３本",
                   "水:２５０㎖",
                   "コンソメ：小さじ１"
               ],
               steps: [
                   "耐熱容器にカット野菜、ウインナー、水、コンソメを入れる。",
                   "ふんわりラップして６００Ｗで６分加熱する。",
                   "野菜が柔らかくなったら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "ロコモコ丼風",
               image:"images/rokomoko-don.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "冷凍ハンバーグ：１個",
                   "カットサラダ:適量",
                   "卵：１個",
                   "ケチャップ:大さじ１"
               ],
               steps: [
                   "冷凍ハンバーグを表示通りに温める。",
                   "卵を耐熱容器に割り入れ、黄身に穴をあける。",
                   "６００Ｗで４０～５０秒加熱する。",
                   "ご飯にカットサラダ、ハンバーグ、卵をのせる。",
                   "ケチャップをかけたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "ツナ野菜丼",
               image:"images/tunayasai-don.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "カット野菜：１００ｇ",
                   "ツナ缶：1/2缶",
                   "マヨネーズ：大さじ１"
               ],
               steps: [
                   "カット野菜を耐熱容器に入れて６００Ｗで２分加熱する。",
                   "ツナとマヨネーズを加えて混ぜる。",
                   "ご飯にのせたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "ツナ野菜サラダ",
               image:"images/tunasarada.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カットサラダ：１袋",
                   "ツナ缶：1/2缶",
                   "マヨネーズ：大さじ１"
               ],
               steps: [
                   "カットサラダを器に入れる。",
                   "ツナとマヨネーズを加える。",
                   "よく混ぜたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "レンジ野菜炒め",
               image:"images/yasaiitame.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１５０ｇ",
                   "豚バラ肉：８０ｇ",
                   "焼肉のたれ：大さじ１"
               ],
               steps: [
                   "耐熱容器にカット野菜と豚肉を入れる。",
                   "ふんわりラップして６００Ｗで４分加熱する。",
                   "焼肉のたれを加えて混ぜる。",
                   "さらに３０秒ほど加熱したら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "レンジ野菜丼",
               image:"images/yasai-don.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "カット野菜：１００ｇ",
                   "卵：１個",
                   "めんつゆ：大さじ１"
               ],
               steps: [
                   "耐熱容器にカット野菜とめんつゆを入れる。",
                   "６００Ｗで２分加熱する。",
                   "溶き卵を加えてさらに１分加熱する。",
                   "ご飯にのせたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "レンジ野菜カレー",
               image:"images/kare-.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "ご飯:１杯",
                   "カット野菜：１５０ｇ",
                   "豚小間切れ肉：８０ｇ",
                   "カレールウ:１～２欠け",
                   "水:１５０㎖"
               ],
               steps: [
                   "耐熱容器にカット野菜、豚肉、水を入れる。",
                   "ふんわりラップして６００Ｗで６分加熱する。",
                   "一度混ぜ、さらに２分加熱する。",
                   "カレールウを加えて溶かす。",
                   "ご飯にかけたら完成！"
               ]  
           },
           {
                id: "カット野菜",
               title: "レンジ豚野菜蒸し",
               image:"images/musiyasai.jpg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１５０ｇ",
                   "豚小間切れ肉：１００ｇ",
                   "ポン酢：大さじ１～２"
               ],
               steps: [
                   "耐熱容器にカット野菜を入れる。",
                   "豚肉を広げてのせる。",
                   "ふんわりラップして６００Ｗで４分加熱する。",
                   "豚肉に火が通ったらポン酢をかけて完成！。"
               ]  
           },
           {
                id: "カット野菜",
               title: "レンジ蒸し鶏",
               image:"images/musidori.jpeg",
               description: "カット野菜で作れる",
               ingredients: [
                   "カット野菜：１５０ｇ",
                   "鶏むね肉：１００ｇ",
                   "ポン酢：大さじ１"
               ],
               steps: [
                   "耐熱容器にカット野菜を入れる。",
                   "鶏むね肉を薄めに切って上にのせる。",
                   "酒大さじ１をかけ、ふんわりラップをする。",
                   "６００Ｗで４～５分加熱する。",
                   "火が通ったらポン酢をかけて完成！"
               ]  
           }
       ]
   };
   const categoryNames = {
       seasoned: "🍗 味付き商品",
       canned: "🥫 缶詰",
       frozen: "❄️ コンビニ冷凍食品",
       vegetables: "🥬 カット野菜"
   };
   const categorySection =
       document.getElementById("categories");
   const dishSection =
       document.getElementById("dish-section");
   const dishList =
       document.getElementById("dish-list");
   const recipeDetail =
       document.getElementById("recipe-detail");
   const backToDishes =
       document.getElementById("back-to-dishes");
   const backToCategories =
       document.getElementById("back-to-categories");
   let currentCategory = "seasoned";
   // 料理名一覧を表示
   function showDishes(category) {
    currentCategory = category;
    document.getElementById("category-title").textContent =
        categoryNames[category];
    dishList.replaceChildren();
    recipes[category].forEach(recipe => {
        const button = document.createElement("button");
        button.className = "dish-card";
        button.type = "button";
        // 料理画像
        const img = document.createElement("img");
        img.className = "dish-image";
        img.src = recipe.image;
        img.alt = recipe.title;
        img.loading = "lazy";
        // 画像が見つからない場合
        img.onerror = () => {
            img.style.display = "none";
        };
        // 料理名
        const name = document.createElement("span");
        name.className = "dish-name";
        name.textContent = recipe.title;
        // レシピへの案内
        const arrow = document.createElement("span");
        arrow.className = "dish-arrow";
        arrow.textContent = "レシピを見る →";
        button.append(img, name, arrow);
        button.addEventListener("click", () => {
            showRecipe(recipe);
        });
        dishList.appendChild(button);
    });
    document.querySelectorAll(".category-card").forEach(card => {
        card.classList.toggle(
            "selected",
            card.dataset.category === category
        );
    });
    categorySection.hidden = true;
    dishSection.hidden = false;
    recipeDetail.hidden = true;
    backToCategories.hidden = false;
    dishSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
 
   // レシピ詳細を表示
   function showRecipe(recipe) {
       document.getElementById("recipe-title").textContent =
           recipe.title;
       document.getElementById("recipe-description").textContent =
           recipe.description;
       const ingredientList =
           document.getElementById("ingredient-list");
       const stepList =
           document.getElementById("step-list");
       ingredientList.replaceChildren();
       stepList.replaceChildren();
       recipe.ingredients.forEach(item => {
           const li = document.createElement("li");
           li.textContent = item;
           ingredientList.appendChild(li);
       });
       recipe.steps.forEach(step => {
           const li = document.createElement("li");
           li.textContent = step;
           stepList.appendChild(li);
       });
       dishSection.hidden = true;
       recipeDetail.hidden = false;
       backToCategories.hidden = true;
       recipeDetail.scrollIntoView({
           behavior: "smooth",
           block: "start"
       });
       const recipeImage = document.getElementById('recipe-image');

       recipeImage.src = recipe.image;
       recipeImage.alt = recipe.alt;
   }
   // カテゴリーを押したとき
   document.querySelectorAll(".category-card").forEach(card => {
       card.addEventListener("click", () => {
           showDishes(card.dataset.category);
       });
   });
   // 料理一覧に戻る
   backToDishes.addEventListener("click", () => {
       recipeDetail.hidden = true;
       dishSection.hidden = false;
       backToCategories.hidden = false;
       dishSection.scrollIntoView({
           behavior: "smooth",
           block: "start"
       });
   });
   // カテゴリー一覧に戻る
   backToCategories.addEventListener("click", () => {
       dishSection.hidden = true;
       recipeDetail.hidden = true;
       categorySection.hidden = false;
       backToCategories.hidden = true;
       categorySection.scrollIntoView({
           behavior: "smooth",
           block: "start"
       });
   });
});