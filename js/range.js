const recipes = [
  {
    id: 1,
    title: "レンジ油うどん",
    image: "images/aburadoba.jpg",
    description: "レンジで簡単に作れる、油うどんです。",
    ingredients: [
      "冷凍うどん:１玉",
      "しょうゆ:大さじ１",
      "ごま油:小さじ１",
      "鶏がらスープの素:小さじ1/2",
      "卵黄:１個",
      "ねぎ:少々"
    ],
    steps: [
      "冷凍うどんを耐熱容器に入れる。",
      "表示通りにレンジで加熱する。",
      "しょうゆ、ごま油、鶏がらスープの素を加えて混ぜる。",
      "卵黄とねぎをのせたら完成！"
    ]
  },
  {
    id: 2,
    title: "レンジ肉うどん",
    image: "images/niku-udon.jpeg",
    description: "レンジで簡単に作れる、肉うどんです。",
    ingredients: [
      "冷凍うどん:１玉",
      "豚小間切れ肉:８０ｇ",
      "めんつゆ:大さじ２",
      "水:２００㎖",
      "砂糖:小さじ１"
    ],
    steps: [
      "耐熱容器に豚肉、めんつゆ、水、砂糖を入れる。",
      "６００Ｗで３分加熱する。",
      "冷凍うどんを加え、さらに３分加熱する。",
      "肉に火が通ったら完成！"
    ]
  },
  {
    id: 3,
    title: "レンジ釜玉うどん",
    image: "images/kamatama.jpg",
    description: "レンジで簡単に作れる、釜玉うどんです。",
    ingredients: [
      "冷凍うどん:１玉",
      "卵:１個",
      "めんつゆ:大さじ１",
      "かつお節:少々",
      "ねぎ:少々"
    ],
    steps: [
      "冷凍うどんをレンジで表示通りに加熱する。",
      "熱いうちに卵、めんつゆを加えて混ぜる。",
      "かつお節とねぎをのせたら完成！"
    ]
  },
  {
    id: 4,
    title: "レンジ焼きうどん",
    image: "images/yakiudon.jpg",
    description: "レンジで簡単に作れる、焼きうどんです。",
    ingredients: [
      "冷凍うどん:１玉",
      "豚小間切れ肉:５０ｇ",
      "カット野菜:１００ｇ",
      "しょうゆ:大さじ１",
      "みりん:大さじ１",
      "ごま油:大さじ１"
    ],
    steps: [
      "耐熱容器に豚肉、カット野菜、うどんを入れる。",
      "ふんわりラップして６００Ｗで４分加熱する。",
      "しょうゆ、みりん、ごま油を加えて混ぜる。",
      "さらに１分加熱したら完成！"
    ]
  },
  {
    id: 5,
    title: "レンジ明太子パスタ",
    image: "images/mentaipasuta.jpg",
    description: "レンジで簡単に作れる、明太子パスタです。",
    ingredients: [
      "パスタ:１００ｇ",
      "水:２５０㎖",
      "明太子:１本",
      "バター:１０ｇ",
      "めんつゆ:小さじ１",
      "刻みのり:少々"
    ],
    steps: [
      "耐熱容器に半分に折ったパスタと水を加える。",
      "ラップなしで６００Ｗで表示時間＋２分加熱する。",
      "明太子、バター、めんつゆを加えて混ぜる。",
      "刻みのりをのせたら完成！"
    ]
  },
  {
    id: 6,
    title: "レンジ塩昆布パスタ",
    image: "images/siokonbu-pasuta.jpg",
    description: "レンジで作れる、塩昆布パスタです。",
    ingredients: [
      "パスタ:１００ｇ",
      "塩昆布:大さじ１",
      "バター:１０ｇ",
      "水:２５０㎖"
    ],
    steps: [
      "耐熱容器に半分に折ったパスタと水を入れる。",
      "ラップなしで６００Ｗで表示時間＋２分ほど加熱する。",
      "塩昆布とバターを加える。",
      "よく混ぜたら完成！"
    ]
  },
  {
    id: 7,
    title: "レンジツナパスタ",
    image: "images/tuna-pasuta.jpg",
    description: "レンジで簡単に作れる、ツナパスタです。",
    ingredients: [
      "パスタ：１００ｇ",
      "水:２５０㎖",
      "ツナ缶:1/2缶",
      "めんつゆ:大さじ１",
      "バター:１０ｇ"
    ],
    steps: [
      "耐熱容器にパスタと水を入れる。",
      "６００Ｗで表示時間＋２分加熱する。",
      "ツナ、めんつゆ、バターを加えて混ぜる。",
      "よく混ざったら完成！"
    ]
  },
  {
    id: 8,
    title: "レンジナポリタン",
    image: "images/napo.jpeg",
    description: "レンジで簡単に作れる、ナポリタンです。",
    ingredients: [
      "パスタ:１００ｇ",
      "ウインナー:２本",
      "玉ねぎ:1/4個",
      "ケチャップ:大さじ３",
      "コンソメ:小さじ1/2",
      "塩:少々"
    ],
    steps: [
      "耐熱容器に半分に折ったパスタ、水、ウインナー、玉ねぎを入れる。",
      "ラップなしで６００Ｗで表示時間＋２分を目安に加熱する。",
      "ケチャップ、コンソメ、塩を加えて混ぜる。",
      "さらに１分加熱したら完成！"
    ]
  },
  {
    id: 9,
    title: "レンジカルボナーラ",
    image: "images/karubo.jpg",
    description: "レンジで簡単に作れる、カルボナーラです。",
    ingredients: [
      "パスタ:１００ｇ",
      "ベーコン:２枚",
      "水:２５０㎖",
      "牛乳:１００㎖",
      "卵:１個",
      "粉チーズ:大さじ２",
      "塩コショウ:少々"
    ],
    steps: [
      "耐熱容器に半分に折ったパスタ、水、ベーコンを入れる。",
      "ラップなしで６００Ｗで表示時間＋２分ほど加熱する。",
      "牛乳、卵、粉チーズ、塩コショウを混ぜて加える。",
      "余熱でよく混ぜたら完成！"
    ]
  },
  {
    id: 10,
    title: "レンジ麻婆丼",
    image: "images/ma-bo.jpg",
    description: "レンジで簡単に作れる、麻婆丼です。",
    ingredients: [
      "ご飯:１杯",
      "絹ごし豆腐:１５０ｇ",
      "豚ひき肉:５０ｇ",
      "焼肉のたれ:大さじ１",
      "味噌:小さじ１",
      "豆板醤:少々",
      "片栗粉:小さじ１",
      "水:大さじ２"
    ],
    steps: [
      "耐熱容器にひき肉、焼肉のたれ、味噌、豆板醤を入れて混ぜる。",
      "６００Ｗで２分加熱する。",
      "豆腐、水で溶いた片栗粉を加えて混ぜる。",
      "さらに６００Ｗで２分加熱する。",
      "ご飯にかけたら完成！"
    ]
  },
  {
    id: 11,
    title: "レンジ豚丼",
    image: "images/buta-don.jpg",
    description: "レンジで簡単に作れる、豚丼です。",
    ingredients: [
      "ご飯:１杯",
      "しょうゆ:大さじ１",
      "みりん:大さじ１",
      "砂糖:小さじ１",
      "酒:大さじ１"
    ],
    steps: [
      "耐熱容器に豚肉と調味料を入れて混ぜる。",
      "ふんわりラップして６００Ｗで３分加熱する。",
      "一度混ぜ、さらに１分ほど加熱する。",
      "豚肉に火が通ったらご飯にのせて完成！"
    ]
  },
  {
    id: 12,
    title: "レンジ親子丼",
    image: "images/oyakodon.jpg",
    description: "レンジで簡単に作れる、親子丼です。",
    ingredients: [
      "ご飯:１杯",
      "鶏モモ肉:８０ｇ",
      "玉ねぎ:1/4（薄切り）",
      "卵:１個",
      "めんつゆ（２倍濃縮）:大さじ２",
      "水:大さじ３"
    ],
    steps: [
      "耐熱容器に鶏肉、玉ねぎ、めんつゆ、水を入れる。",
      "ふんわりラップして６００Ｗで３分加熱する。",
      "一度取り出して混ぜ、溶き卵を加える。",
      "再び６００Ｗで１分ほど加熱する。",
      "ご飯にのせたら完成！"
    ]
  },
  {
    id: 13,
    title: "レンジ豚キムチ丼",
    image: "images/butakimuti.jpg",
    description: "レンジで簡単に作れる、豚キムチ丼です。",
    ingredients: [
      "ご飯:１杯",
      "しょうゆ:大さじ１",
      "豚小間切れ肉:１００ｇ",
      "キムチ:５０ｇ",
      "ごま油:小さじ１"
    ],
    steps: [
      "耐熱容器に豚肉とキムチを入れる。",
      "ふんわりラップをして６００Ｗで３分加熱する。",
      "一度混ぜて、さらに１分ほど加熱する。",
      "ごま油を加えて混ぜる。",
      "ご飯にのせたら完成！"
    ]
  },
  {
    id: 14,
    title: "レンジ牛丼",
    image: "images/gyudon.jpg",
    description: "レンジで簡単に作れる、牛丼です。",
    ingredients: [
      "ご飯:１杯",
      "牛小間切れ肉:１００ｇ",
      "玉ねぎ:1/4個（薄切り）",
      "しょうゆ:大さじ１",
      "砂糖:小さじ１",
      "酒:大さじ１",
      "水:大さじ３"
    ],
    steps: [
      "耐熱容器に牛肉、玉ねぎ、調味料をすべて入れる。",
      "ふんわりラップをして６００Ｗで４分加熱する。",
      "一度混ぜて、肉に火が通るまで追加で１分ほど加熱する。",
      "ご飯にのせたら完成！"
    ]
  },
  {
    id: 15,
    title: "レンジそぼろ丼",
    image: "images/soborodon.jpg",
    description: "レンジで簡単に作れる、そぼろ丼です。",
    ingredients: [
      "ご飯:１杯",
      "豚ひき肉:１００ｇ",
      "しょうゆ:大さじ１",
      "砂糖:小さじ１",
      "酒:大さじ１"
    ],
    steps: [
      "耐熱容器にひき肉と調味料を入れて混ぜる。",
      "ふんわりラップをして６００Ｗで２分加熱する。",
      "さらに１～２分加熱して火を通す。",
      "ご飯にのせたら完成！"
    ]
  },
  {
    id: 16,
    title: "レンジ肉じゃが",
    image: "images/nikujyaga.jpeg",
    description: "レンジで簡単に作れる、肉じゃがです。",
    ingredients: [
      "豚こま切れ肉:８０ｇ",
      "じゃがいも:１個",
      "玉ねぎ:1/4個",
      "にんじん:1/2本",
      "しょうゆ:大さじ1",
      "砂糖:小さじ１",
      "みりん:大さじ１",
      "水:１００㎖"
    ],
    steps: [
      "具材を食べやすい大きさに切る。",
      "耐熱容器にすべての材料を入れる。",
      "ふんわりラップをして６００Ｗで６分加熱する。",
      "一度混ぜて、さらに３分加熱する。",
      "野菜が柔らかくなったら完成！"
    ]
  },
  {
    id: 17,
    title: "レンジ豚もやし",
    image: "images/butamoyashi.jpg",
    description: "レンジで簡単に作れる、豚もやしです。",
    ingredients: [
      "豚小間切れ肉:１００ｇ",
      "もやし:1/2袋",
      "ポン酢:大さじ１～２"
    ],
    steps: [
      "耐熱容器にもやしを入れる。",
      "豚肉を広げてのせる。",
      "ふんわりラップをして６００Ｗで４分加熱する。",
      "豚肉に火が通ったらポン酢をかけて完成！"
    ]
  },
  {
    id: 18,
    title: "レンジ豚しゃぶ",
    image: "images/butasyabu.jpg",
    description: "レンジで簡単に作れる、豚しゃぶです。",
    ingredients: [
      "豚薄切り肉:１００ｇ",
      "もやし:1/2袋",
      "ポン酢:大さじ１～２"
    ],
    steps: [
      "耐熱容器にもやしを広げ、その上に豚肉を広げる。",
      "ふんわりラップをして６００Ｗで３～４分加熱する。",
      "豚肉に火が通ったらポン酢をかけて完成！"
    ]
  },
  {
    id: 19,
    title: "レンジ天津飯",
    image: "images/tensinhan.jpg",
    description: "レンジで簡単に作れる、天津飯です。",
    ingredients: [
      "ご飯:１杯",
      "卵:２個",
      "カニカマ:２本",
      "水:１００㎖",
      "しょうゆ:小さじ１",
      "酢:小さじ１",
      "砂糖:小さじ１",
      "鶏がらスープの素:小さじ1/2",
      "片栗粉:小さじ１"
    ],
    steps: [
      "卵を溶き、カニカマを加える。",
      "耐熱容器に入れて６００Ｗ分加熱し、混ぜる。",
      "さらに３０秒ほど加熱して卵を固める。",
      "別の耐熱容器に水、しょうゆ、酢、砂糖、鶏がらスープの素、片栗粉を入れて混ぜる。",
      "６００Ｗで１分加熱して混ぜ、とろみをつける。",
      "ご飯に卵をのせ、あんをかけたら完成！"
    ]
  },
  {
    id: 20,
    title: "レンジ中華スープ",
    image: "images/chaina-soup.jpeg",
    description: "レンジで簡単に作れる、中華スープです。",
    ingredients: [
      "水:２００㎖",
      "鶏がらスープ:小さじ１",
      "卵:１個",
      "わかめ:少々",
      "ごま油:少々"
    ],
    steps: [
      "耐熱容器に水、鶏がらスープの素、わかめを入れる。",
      "６００Ｗで２分加熱する。",
      "溶き卵を加えてさらに４０秒～１分加熱する。",
      "ごま油を加えたら完成！"
    ]
  },
  {
    id: 21,
    title: "レンジ茶碗蒸し",
    image: "images/chawanmusi.jpg",
    description: "レンジで簡単に作れる、茶わん蒸しです。",
    ingredients: [
      "卵:１個",
      "水:１５０㎖",
      "めんつゆ:小さじ２",
      "鶏肉:３０ｇ",
      "かまぼこ:２枚",
      "しいたけ:１個"
    ],
    steps: [
      "卵、水、めんつゆを混ぜる。",
      "耐熱容器に具材を入れ、卵液を注ぐ。",
      "ふんわりラップをして２００Ｗで１０分ほど加熱する。",
      "固まったら完成！"
    ]
  },
  {
    id: 22,
    title: "レンジ蒸し鶏",
    image: "images/musidori.jpg",
    description: "レンジで簡単に作れる、蒸し鶏です。",
    ingredients: [
      "鶏むね肉:１００ｇ",
      "酒:大さじ１",
      "塩:少々",
      "コショウ:少々"
    ],
    steps: [
      "鶏肉にフォークで数か所穴をあける。",
      "ふんわりラップをして６００Ｗで３分加熱する。",
      "裏返してさらに１～２分加熱する。",
      "火が通ったら完成！"
    ]
  },
  {
    id: 23,
    title: "レンジ焼きそば",
    image: "images/yakisoba.jpg",
    description: "レンジで簡単に作れる、焼きそばです。",
    ingredients: [
      "焼きそば麵:１袋",
      "豚小間切れ肉:５０ｇ",
      "カット野菜:１００ｇ",
      "焼きそばソース:大さじ２",
      "ごま油:小さじ１"
    ],
    steps: [
      "耐熱容器に豚肉、カット野菜、麵を入れる。",
      "ふんわりラップをして６００Ｗで４分加熱する。",
      "ソースとごま油を加えて混ぜる。",
      "さらに１分加熱したら完成！"
    ]
  },
  {
    id: 24,
    title: "レンジよだれ鶏",
    image: "images/yodaresori.jpg",
    description: "レンジで簡単に作れる、よだれ鶏です。",
    ingredients: [
      "鶏むね肉:１００ｇ",
      "酒:大さじ１",
      "しょうゆ:大さじ１",
      "酢:大さじ１",
      "砂糖:小さじ１",
      "ごま油:小さじ１",
      "ラー油:少々"
    ],
    steps: [
      "鶏肉にフォークで穴をあける。",
      "耐熱容器に鶏肉と酒を入れる。",
      "ふんわりラップをして６００Ｗで３分加熱する。",
      "裏返してさらに１～２分加熱する。",
      "しょうゆ、酢、砂糖、ごま油、ラー油を混ぜてかけたら完成！"
    ]
  },
  {
    id: 25,
    title: "レンジ味噌汁",
    image: "images/misosiru.jpg",
    description: "レンジで簡単に作れる、味噌汁です。",
    ingredients: [
      "水:２００ｇ",
      "味噌:大さじ１",
      "だしの素:小さじ1/2",
      "豆腐:５０ｇ",
      "乾燥わかめ:少々"
    ],
    steps: [
      "耐熱容器に水、だしの素、豆腐、わかめを入れる。",
      "６００Ｗで２分加熱する。",
      "味噌を溶かして完成！"
    ]
  },
  {
    id: 26,
    title: "レンジポトフ",
    image: "images/potofu2.jpg",
    description: "レンジで簡単に作れる、ポトフです。",
    ingredients: [
      "ウインナー:２本",
      "じゃがいも:1/2個",
      "にんじん:1/4本",
      "キャベツ:１～２枚",
      "水:２００㎖",
      "コンソメ:小さじ１"
    ],
    steps: [
      "具材を食べやすい大きさにする。",
      "耐熱容器にすべての材料を入れる。",
      "ふんわりラップをして６００Ｗで６分加熱する。",
      "一度混ぜて、さらに２～３分加熱する",
      "野菜が柔らかくなったら完成！"
    ]
  },
  {
    id: 27,
    title: "レンジビビンバ",
    image: "images/bibinba.jpg",
    description: "レンジで簡単に作れる、ビビンバです。",
    ingredients: [
      "ご飯:１杯",
      "豚ひき肉:８０ｇ",
      "もやし:1/2袋",
      "ほうれん草:５０ｇ",
      "焼肉のたれ:大さじ１",
      "卵黄:１個"
    ],
    steps: [
      "耐熱容器にひき肉と焼肉のたれを入れて混ぜる。",
      "６００ワットで２分加熱し、混ぜる。",
      "もやし、ほうれん草を加えてさらに２分加熱する。",
      "ごま油を加えて混ぜる。",
      "ご飯にのせ、卵黄をのせたら完成！"
    ]
  },
  {
    id: 28,
    title: "レンジハヤシライス",
    image: "images/hayasi.jpeg",
    description: "レンジで簡単に作れる、ハヤシライスです。",
    ingredients: [
      "ご飯:１杯",
      "牛小間切れ肉:８０ｇ",
      "玉ねぎ:1/2個",
      "ハヤシライスのルウ:１～２かけ",
      "水:１５０㎖"
    ],
    steps: [
      "耐熱容器に牛肉、玉ねぎ、水を入れる。",
      "ふんわりラップをして６００Ｗで５分加熱する。",
      "一度混ぜて、さらに２分加熱する。",
      "ルウを加えて溶かす。",
      "ご飯にかけたら完成！"
    ]
  },
  {
    id: 29,
    title: "レンジチャーハン",
    image: "images/chahan.jpg",
    description: "レンジで簡単に作れる、チャーハンです。",
    ingredients: [
      "ご飯:１杯",
      "卵:１個",
      "ハム:２枚",
      "鶏がらスープの素:小さじ1/2",
      "しょうゆ:小さじ１",
      "ごま油:小さじ１"
    ],
    steps: [
      "耐熱容器にご飯、溶き卵、細かくちぎったハムを入れる。",
      "鶏がらスープの素、しょうゆ、ごま油を加えて混ぜる。",
      "ラップなしで６００Ｗで２分加熱する。",
      "一度混ぜて、さらに１分加熱する。",
      "全体を混ぜたら完成！"
    ]
  },
  {
    id: 30,
    title: "レンジオムレツ",
    image: "images/omuretu.jpeg",
    description: "レンジで簡単に作れる、オムレツです。",
    ingredients: [
      "卵:２個",
      "チーズ:２０ｇ",
      "塩:少々"
    ],
    steps: [
      "卵を溶き、塩を加える。",
      "チーズを加えて混ぜる。",
      "耐熱容器に入れて６００Ｗで１分加熱する。",
      "一度混ぜて、さらに３０秒ほど加熱したら完成！"
    ]
  },
  {
     id: 31,
    title: "レンジたまご雑炊",
    image: "images/zosui.jpg",
    description: "レンジで簡単に作れる、たまご雑炊です。",
    ingredients: [
      "ご飯:１杯",
      "卵:１個",
      "水:２００㎖",
      "めんつゆ:大さじ１",
      "ねぎ:少々"
    ],
    steps: [
      "耐熱容器にご飯、水、めんつゆを入れる。",
      "６００Ｗで３分加熱する。",
      "溶き卵を加えて混ぜる。",
      "さらに６００Ｗで４０秒～１分加熱する。",
      "ねぎをのせたら完成！"
    ] 
  },
  {
     id: 32,
    title: "レンジだし卵",
    image: "images/dasitamago.jpg",
    description: "レンジで簡単に作れる、だし卵です。",
    ingredients: [
      "卵:１個",
      "めんつゆ:小さじ１",
      "水:大さじ１"
    ],
    steps: [
      "材料をすべて混ぜる。",
      "耐熱容器に入れて、６００Ｗで４０秒加熱する。",
      "一度混ぜて、さらに２０～３０秒加熱したら完成！"
    ]
  },
  {
     id: 33,
    title: "レンジタコライス",
    image: "images/takoraisu.jpg",
    description: "レンジで簡単に作れる、タコライスです。",
    ingredients: [
      "ご飯:１杯",
      "合いびき肉:８０ｇ",
      "レタス:１～２枚",
      "トマト:1/2個",
      "ケチャップ:大さじ1",
      "ウスターソース:小さじ1",
      "カレー粉:小さじ1/2",
      "ピザ用チーズ:２０ｇ"
    ],
    steps: [
      "耐熱容器にひき肉、ケチャップ、ウスターソース、カレー粉を入れて混ぜる。",
      "６００Ｗで３分加熱し、混ぜる。",
      "さらに１分加熱して火に通す。",
      "ご飯にレタス、トマト、ひき肉、チーズをのせたら完成！"
    ]
  },
  {
     id: 34,
    title: "レンジスクランブルエッグ",
    image: "images/sukuranburuegu.jpg",
    description: "レンジで簡単に作れる、スクランブルエッグです。",
    ingredients: [
      "卵:２個",
      "牛乳:大さじ１",
      "塩:少々",
      "コショウ:少々"
    ],
    steps: [
      "材料をすべて混ぜる。",
      "耐熱容器に入れて６００Ｗで４０秒加熱する。",
      "取り出して混ぜる。",
      "さらに３０秒ほど加熱して混ぜたら完成！"
    ]
  },
  {
     id: 35,
    title: "レンジじゃがバター",
    image: "images/jyagabata.jpg",
    description: "レンジで簡単に作れる、じゃがバターです。",
    ingredients: [
      "じゃがいも:１個",
      "バター:１０ｇ",
      "塩:少々"
    ],
    steps: [
      "じゃがいもを洗い、フォークで数か所穴をあける。",
      "濡らしたキッチンペーパーで包み、さらにラップを包む。",
      "６００Ｗで３～４分加熱する。",
      "バターと塩をのせたら完成！"
    ]
  },
  {
     id: 36,
    title: "レンジキャベ豚",
    image: "images/butakyabe2.jpg",
    description: "レンジで簡単に作れる、キャベ豚です。",
    ingredients: [
      "豚小間切れ肉:１００ｇ",
      "キャベツ:２～３枚",
      "ポン酢:大さじ１～２"
    ],
    steps: [
      "キャベツを食べやすい大きさにちぎる。",
      "耐熱容器にキャベツと豚肉を入れる。",
      "ふんわりラップをして６００Ｗで４分加熱する。",
      "豚肉に火が通ったらポン酢をかけて完成！"
    ]
  },
  {
     id: 37,
    title: "レンジカレー",
    image: "images/kare-.jpeg",
    description: "レンジで簡単に作れる、カレーです。",
    ingredients: [
      "ご飯:１杯",
      "豚小間切れ肉:８０ｇ",
      "じゃがいも:1/2個",
      "にんじん:1/4本",
      "玉ねぎ:1/4個",
      "カレールウ:1～2かけ",
      "水:１５０㎖"
    ],
    steps: [
      "耐熱容器に食べやすく切った具材と水を入れる。",
      "ふんわりラップをして６００Ｗで６分加熱する。",
      "一度混ぜ、さらに３分ほど加熱する。",
      "火が通ったらカレールウを加えて溶かす。",
      "ご飯にかけたら完成！"
    ]
  },
  {
     id: 38,
    title: "レンジオムライス",
    image: "images/omu.jpg",
    description: "レンジで簡単に作れる、オムライスです。",
    ingredients: [
      "ご飯:１杯",
      "卵:２個",
      "ウインナー:２本",
      "ケチャップ:大さじ２",
      "塩:少々",
      "コショウ:少々"
    ],
    steps: [
      "耐熱容器にご飯、食べやすく切ったウインナー、ケチャップを入れて混ぜる。",
      "６００Ｗで１分３０秒加熱する。",
      "別の耐熱容器に卵を溶き、塩、コショウを加える。",
      "６００Ｗで１分加熱して卵を固める。",
      "ケチャップライスに卵をのせたら完成！"
    ]
  }
];

const dishSection = document.getElementById("dish-section");
const dishList = document.getElementById("dish-list");
const recipeDetail = document.getElementById("recipe-detail");
function showDishes() {
  dishList.innerHTML = "";
  recipes.forEach((recipe) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "dish-card";
    const image = document.createElement("img");
    image.className = "dish-image";
    image.src = recipe.image;
    image.alt = recipe.title;
    const name = document.createElement("span");
    name.className = "dish-name";
    name.textContent = recipe.title;
    card.append(image, name);
    card.addEventListener("click", () => showRecipe(recipe));
    dishList.appendChild(card);
  });
}

function showRecipe(recipe) {
  dishSection.hidden = true;
  recipeDetail.hidden = false;
  document.getElementById("recipe-title").textContent =
    recipe.title;
  const image = document.getElementById("recipe-image");
  image.src = recipe.image;
  image.alt = recipe.title;
  document.getElementById("recipe-description").textContent =
    recipe.description;
  const ingredientList = document.getElementById("ingredient-list");
  ingredientList.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientList.appendChild(li);
  });

  const stepList = document.getElementById("step-list");
  stepList.innerHTML = "";
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepList.appendChild(li);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("back-to-dishes").addEventListener("click", () => {
  recipeDetail.hidden = true;
  dishSection.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// メニューバー
const hamburger = document.getElementById("hamburger-btn");
const menu = document.getElementById("slide-menu");
const overlay = document.getElementById("menu-overlay");
if (hamburger && menu && overlay) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("show");
  });

}
showDishes();
 