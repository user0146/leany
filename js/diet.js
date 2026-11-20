
const recipeData = {
 "tofu-cheese": {
   title: "豆腐のお好み焼きボウル",
   subtitle: "ヘルシーで満足感たっぷり",
   image: "images/豆腐お好み焼きボウル.jpg",
   ingredients: [
     { name: "豆腐", amount: "150g" },
     { name: "豚肉", amount: "70g" },
     { name: "千切りキャベツ", amount: "200g" },
     { name: "卵", amount: "1個" },
     { name: "チーズ", amount: "一つかみ" },
     { name: "お好み焼きソース" },
     { name: "マヨネーズ" },
     { name: "青のり" },
     { name: "鰹節" },
     { name: "★片栗粉", amount: "大さじ1.5" },
     { name: "★めんつゆ", amount: "大さじ1" },
   ],
   recipe: [
     "耐熱容器に豆腐・卵・★を入れ混ぜる",
     "キャベツを入れ混ぜる",
     "平らにならして豚肉、チーズをのせ600Wで7分",
     "ソースをかけて完成"
   ]
 },
 "tonyu-enoki": {
   title: "豆乳明太クリームえのき",
   subtitle: "レンジで簡単、濃厚クリーミー",
   image: "images/豆乳明太クリームえのき.jpg",
   ingredients: [
     { name: "えのき", amount: "一袋" },
     { name: "豆乳", amount: "50ml" },
     { name: "白だし", amount: "大さじ1" },
     { name: "明太子", amount: "40g" },
     { name: "チーズ", amount: "お好み" }
   ],
   recipe: [
     "えのきの石づきをカットし軽くほぐしてラップをかけて600Wで1分半",
     "その他材料を加えてよく混ぜる",
     "ラップをしてさらに1分半加熱したら完成"
   ]
 },
 "tyoukatu-doria": {
   title: "腸活ミラノ風ドリア",
   subtitle: "えのきでかさ増しヘルシードリア",
   image: "images/ミラノ風ドリア.jpg",
   ingredients: [
     { name: "♥ご飯", amount: "80g" },
     { name: "♥えのき", amount: "1/2袋" },
     { name: "♥豆乳", amount: "130ml" },
     { name: "♥コンソメ", amount: "大さじ1" },
     { name: "鶏むねひき肉", amount: "80g" },
     { name: "ピザ用チーズ", amount: "適量" },
     { name: "★トマト缶", amount: "130g" },
     { name: "★コンソメ", amount: "小さじ2" },
     { name: "★ケチャップ", amount: "小さじ2" },
     { name: "★ソース", amount: "大さじ1" }
   ],
   recipe: [
     "耐熱ボウルに♥(えのきはハサミでカット)を入れ混ぜる",
     "ラップをしてレンジで5分",
     "フライパンに鶏むねひき肉を入れ火を通し★を入れ煮る",
     "♥の上に★とピザ用チーズをのせてレンジで1分で完成"
   ]
 },
 "oatmeal": {
   title: "オートミールスープ",
   subtitle: "スープジャーで放置するだけ",
   image: "images/オートミールスープ.jpg",
   ingredients: [
     { name: "オートミール", amount: "30g" },
     { name: "ノンオイルツナ缶", amount: "一缶" },
     { name: "お好みのスープの素", amount: "一つ" }
   ],
   recipe: [
     "お湯を180ml温めておく",
     "スープジャーに上記の材料をすべて入れる",
     "お湯を注いで30分以上たてば完成"
   ]
 },
 "kimuchi-rice": {
   title: "おなかが膨れるキムチ雑炊",
   subtitle: "低カロリーで大満足",
   image: "images/キムチ雑炊.jpg",
   ingredients: [
     { name: "ご飯", amount: "100g" },
     { name: "キムチ", amount: "お好みの量" },
     { name: "エノキ", amount: "一袋" },
     { name: "卵", amount: "一個" },
     { name: "コチュジャン", amount: "小さじ1" },
     { name: "鶏ガラ", amount: "小さじ2" },
     { name: "水", amount: "150ml" }
   ],
   recipe: [
     "えのきを切る",
     "耐熱容器に卵以外の全材料を入れ混ぜてレンジで600w5分",
     "レンチン直後に卵を落として全力で混ぜて完成"
   ]
 },
 "enoki-cheese": {
   title: "エノキで腸活！カリモチ豆腐とエノキのチーズ焼き",
   subtitle: "カリカリもちもち食感",
   image: "images/豆腐とエノキのチーズ焼き.jpg",
   ingredients: [
     { name: "絹豆腐", amount: "150g" },
     { name: "えのき", amount: "一袋" },
     { name: "ネギ(お好み)", amount: "一つかみ" },
     { name: "チーズピザ用", amount: "50g" },
     { name: "片栗粉", amount: "大さじ3" },
     { name: "ごま油", amount: "大さじ1/2" },
     { name: "ポン酢", amount: "お好み" }
   ],
   recipe: [
     "フライパンにごま油以外の材料を入れ混ぜる（エノキはキッチンバサミで切る）",
     "フライパンに沿ってごま油を入れて、両面カリカリになるまで焼く",
     "完成。ポン酢などにつけて食べてね！！"
   ]
 },
 "shyoga-soup": {
   title: "えのき白菜の生姜スープ",
   subtitle: "生姜の力で体の芯から温まる",
   image: "images/エノキ白菜の生姜スープ.jpg",
   ingredients: [
     { name: "白菜", amount: "1/8切れ" },
     { name: "えのき", amount: "一袋" },
     { name: "豚こま肉", amount: "200g" },
     { name: "オリーブオイル", amount: "小さじ1" },
     { name: "水溶き片栗粉", amount: "片栗粉小さじ2" },
     { name: "コショウ", amount: "お好み" },
     { name: "★水", amount: "200ml" },
     { name: "★生姜", amount: "小さじ1" },
     { name: "★めんつゆ(濃縮)", amount: "大さじ2" },
     { name: "★鶏ガラ", amount: "小さじ2" }
   ],
   recipe: [
     "白菜を1㎝幅、えのきは2㎝幅に切る",
     "鍋にオリーブオイルを敷き、豚こま肉を入れ炒める",
     "えのきと白菜を加えて炒める",
     "★を加えよく混ぜ、水溶き片栗粉を加える",
     "お好みでコショウを振って完成"
   ]
 },
 "kim-tonpei": {
   title: "キムとんぺい",
   subtitle: "レンジで作れるヘルシーとんぺい焼き",
   image: "images/キムトンペイ.jpg",
   ingredients: [
     { name: "卵", amount: "2個" },
     { name: "えのき", amount: "一袋" },
     { name: "千切りキャベツ", amount: "適量" },
     { name: "もやし", amount: "適量" },
     { name: "キムチ", amount: "適量" },
     { name: "ソース", amount: "なるべく少量" },
     { name: "マヨネーズ", amount: "なるべく少量" }
   ],
   recipe: [
     "平ためのお皿にラップを敷いて、その上に卵を落とし混ぜる",
     "えのきをハサミでカットしながら皿に入れる",
     "千切りキャベツ、もやし、キムチを入れる",
     "ラップをして500w4分",
     "敷いたラップを使って半分に包む",
     "ソースとマヨをかけて（カロリーあるのでなるべく少量）完成"
   ]
 },
 "tamachiki-salada": {
   title: "たまチキクリームサラダ",
   subtitle: "高タンパクで濃厚な味わい",
   image: "images/たまチキクリームサラダ.jpg",
   ingredients: [
     { name: "ゆで卵", amount: "2個" },
     { name: "ささみ", amount: "2本" },
     { name: "ほうれん草" },
     { name: "酒", amount: "大さじ1" },
     { name: "はちみつ", amount: "大さじ1" },
     { name: "塩", amount: "少々" },
     { name: "★絹豆腐", amount: "150g" },
     { name: "★味噌", amount: "小さじ1" },
     { name: "★鶏ガラ", amount: "少々" },
     { name: "★醤油", amount: "大さじ1" },
     { name: "★はちみつ", amount: "小さじ2" },
     { name: "★豆板醤orコチュジャン(お好み)", amount: "小さじ1" }
   ],
   recipe: [
     "ささみの筋を取って酒、はちみつ、塩をかけてなじませ放置",
     "ほうれん草を切ってささみの上にのせてラップで600w4分レンジでチン",
     "★を滑らかになるまで全部混ぜる",
     "★にささみ達と卵をのせて完成"
   ]
 },
 "moya-kimuchinatto": {
   title: "もやしキムチ納豆",
   subtitle: "包丁いらずのスピード腸活おかず",
   image: "images/もやしキムチ納豆.jpg",
   ingredients: [
     { name: "もやし", amount: "一袋" },
     { name: "キムチ", amount: "お好みの量" },
     { name: "納豆", amount: "一パック" },
     { name: "卵黄", amount: "一個" },
     { name: "きざみのり", amount: "お好み" },
     { name: "★めんつゆ", amount: "小さじ1" },
     { name: "★ごま油", amount: "少々" },
     { name: "★味の素", amount: "小さじ1" }
   ],
   recipe: [
     "もやしをアイラップに移し, レンジで3分",
     "水分を絞ってボウルに移し, キムチ, 納豆を入れる",
     "★を入れ混ぜる",
     "卵黄と刻みのりを乗せて完成"
   ]
 },
 "rose-harusame": {
   title: "ロゼキムチ春雨",
   subtitle: "レンジで即席、人気のロゼ風",
   image: "images/ロゼキムチ春雨.jpg",
   ingredients: [
     { name: "春雨", amount: "4玉" },
     { name: "キムチ", amount: "50g" },
     { name: "豆乳", amount: "150ml" },
     { name: "水", amount: "50ml" },
     { name: "コチュジャン", amount: "小さじ2" },
     { name: "オイスターソース", amount: "小さじ1" },
     { name: "鶏ガラスープの素", amount: "小さじ1" }
   ],
   recipe: [
     "材料と調味料をすべて混ぜてラップをかけてレンジで500w5分したら完成！"
   ]
 },
 "natto-soborodon": {
   title: "簡単満足感！納豆そぼろ丼",
   subtitle: "ヘルシーひき肉と納豆のコラボ",
   image: "images/納豆そぼろ丼.jpg",
   ingredients: [
     { name: "鶏むねひき肉", amount: "50g" },
     { name: "納豆", amount: "一パック" },
     { name: "温玉", amount: "一個" },
     { name: "お米", amount: "100g" },
     { name: "★醤油", amount: "小さじ2" },
     { name: "★砂糖", amount: "小さじ1" },
     { name: "★みりん", amount: "小さじ1" },
     { name: "★酒", amount: "大さじ1" },
     { name: "★生姜", amount: "少々" }
   ],
   recipe: [
     "お米を炊いておく",
     "ひき肉を焼く",
     "★を入れてそぼろを作る",
     "火を止めて、混ぜた納豆を入れ混ぜる",
     "ご飯にそぼろと温玉を乗せて完成"
   ]
 },
 "hikiniku-bibinva": {
   title: "旨×軽 鶏ひき肉ヘルシービビンバ",
   subtitle: "牛肉要らずの満足感！！脂質オフ",
   image: "images/ヘルシービビンバ.jpg",
   ingredients: [
     { name: "鶏むねひき肉", amount: "100g" },
     { name: "ほうれん草", amount: "25g" },
     { name: "人参", amount: "25g" },
     { name: "もやし", amount: "1/3袋" },
     { name: "ご飯", amount: "100g" },
     { name: "★醤油", amount: "小さじ1" },
     { name: "★中華だし", amount: "小さじ1" },
     { name: "★みりん", amount: "大さじ1" },
     { name: "★コチュジャン", amount: "小さじ1" }
   ],
   recipe: [
     "鶏ひき肉を先に炒め、野菜をすべて入れる",
     "全体に火が通ったら★を入れて炒める",
     "ご飯に乗せたら完成"
   ]
 },
 "tomatocheese-rezotto": {
   title: "チーズなのに罪悪感ゼロ　神痩せトマトチーズリゾット",
   subtitle: "濃厚なのにカロリーオフ！大満足の痩せスープ飯",
   image: "images/トマトチーズリゾット.jpg",
   ingredients: [
     { name: "トマトジュース(無塩)", amount: "200ml" },
     { name: "ご飯", amount: "80g" },
     { name: "えのき", amount: "一袋" },
     { name: "シーチキン(ノンオイル)", amount: "一缶" },
     { name: "チーズ", amount: "25g" },
     { name: "ニンニクチューブ", amount: "小さじ1" },
     { name: "コンソメ", amount: "小さじ1" },
     { name: "(ブラックペッパー)", amount: "お好み" },
     { name: "(パセリ)", amount: "お好み" }
   ],
   recipe: [
     "耐熱容器にチーズ以外の全材料を投入する",
     "上からチーズをのせてふんわりラップで600w4分",
     "※足りなかったらレンジの時間増やしてください！",
     "お好みでブラックペッパーやパセリをかけて完成"
   ]
 },
 "sweet-potatocake": {
   title: "神痩せ！！スイートポテトチーズケーキ",
   subtitle: "ダイエット中も我慢しない感動のしっとり食感",
   image: "images/スイートポテトチーズケーキ.jpg",
   ingredients: [
     { name: "サツマイモ", amount: "300g" },
     { name: "牛乳(豆乳でも可)", amount: "180ml" },
     { name: "卵", amount: "2個" },
     { name: "はちみつ", amount: "大さじ２" }
   ],
   recipe: [
     "サツマイモの皮を剥く（皮アリでもOKな人はスキップしてね！）",
     "サツマイモを細かめに切る",
     "耐熱容器にいれて600wで5分",
     "別容器に材料をぜんぶいれ混ぜる（ぶんぶんチョッパーがある人は使うと混ぜやすいよ！！",
     "耐熱容器にクッキングシートを敷いてそこに流し込む",
     "レンジで600w7分温めたら完成！！"
   ]
 },
 "kinako-chocomochi": {
   title: "もっちもちで大満足！太らない魔法のきな粉餅＆チョコ餅",
   subtitle: "驚きの低カロリー　至福の和風スイーツ",
   image: "images/きな粉餅チョコ餅.jpg",
   ingredients: [
     { name: "【きな粉餅】", amount: "" },
     { name: "絹豆腐", amount: "150g" },
     { name: "きな粉", amount: "" },
     { name: "黒蜜", amount: "お好みのソース" },
     { name: "【チョコ餅】", amount: "" },
     { name: "絹豆腐", amount: "150g" },
     { name: "ココアパウダー", amount: "" },
     { name: "チョコソース", amount: "お好み" },
     { name: "バナナ", amount: "お好み" },
     { name: "★片栗粉", amount: "大さじ2" },
     { name: "★ココアパウダー", amount: "大さじ2" },
     { name: "★はちみつ", amount: "大さじ2" },
     { name: "★ラカント", amount: "大さじ1" }
   ],
   recipe: [
     "絹豆腐を泡だて器で滑らかになるまで混ぜる",
     "★を入れてよく混ぜる",
     "ラップして600w50秒～90秒チン",
     "一度取り出して固まっているところを潰しながら混ぜる",
     "またラップをして同様チン",
     "全力で混ぜる",
     "餅を切って各々の粉につけたら完成"
   ]
 },
 "yamaimotororo-teppan": {
   title: "小麦粉なしで超ヘルシー！！ふわふわ山芋とろろ鉄板",
   subtitle: "糖質オフなのに大満足のボリューム　おなか一杯食べても罪悪感ゼロ！！！",
   image: "images/山芋とろろ鉄板.jpg",
   ingredients: [
     { name: "卵", amount: "2個" },
     { name: "かつお節", amount: "一パック" },
     { name: "山芋とろろ(冷凍)", amount: "500g" },
     { name: "醤油", amount: "" },
     { name: "めんつゆ", amount: "" }
   ],
   recipe: [
     "フライパンに解凍したとろろと卵を入れる",
     "醤油とめんつゆを１：３の割合で入れて火をつけながら混ぜる",
     "かつお節をかけたら完成"
   ]
 },
 "sakekinoko-deshijyouyu": {
   title: "栄養満点＆ヘルシー！！鮭ときのこだし醤油丼",
   subtitle: "糖質や脂質を控えたいときにおすすめ！！",
   image: "images/鮭ときのこだし醤油丼.jpg",
   ingredients: [
     { name: "鮭", amount: "一切れ" },
     { name: "えのき", amount: "1/3" },
     { name: "舞茸", amount: "半パック" },
     { name: "温玉", amount: "一個" },
     { name: "ご飯", amount: "100g" },
     { name: "小ねぎ", amount: "お好み" },
     { name: "片栗粉", amount: "適量" },
     { name: "★醤油", amount: "小さじ1" },
     { name: "★かつおだし", amount: "小さじ1" }
   ],
   recipe: [
     "ご飯を炊いておく",
     "鮭を一口大にカットして片栗粉をまぶす",
     "鮭、マイタケの順にフライパンで焼いていく",
     "火が通ったら★を入れ炒める",
     "ご飯にのせて、温玉と小葱ものせたら完成"
   ]
 },
 "cream-rezooto": {
   title: "どろ旨濃厚な激やせクリームリゾット",
   subtitle: "我慢しない大人の本気ダイエット主食！！",
   image: "images/クリームリゾット.jpg",
   ingredients: [
     { name: "ピザ用チーズ", amount: "適量" },
     { name: "卵黄", amount: "一つ" },
     { name: "ブラックペッパー", amount: "適量" },
     { name: "★白米", amount: "100g" },
     { name: "★えのき", amount: "一袋" },
     { name: "★冷凍ほうれん草", amount: "適量" },
     { name: "★ノンオイルツナ缶", amount: "一缶" },
     { name: "★豆乳", amount: "200ml" },
     { name: "★塩コショウ", amount: "適量" }
   ],
   recipe: [
     "フライパンに★を入れ火にかけてよく混ぜる",
     "蓋をし弱中火で4～6分",
     "チーズを追加し蓋をして溶かす",
     "溶けたら火を止めブラックペッパーをかけ卵黄を乗せたら完成"
   ]
 },
 "tonyutantan-soup": {
   title: "お店クオリティの痩せる豆乳坦々スープ",
   subtitle: "ひと手間でダイエット食の域を超える！濃厚で奥深い至高の旨辛スープ",
   image: "images/豆乳坦々スープ.jpg",
   ingredients: [
     { name: "キャベツ", amount: "1/4玉" },
     { name: "ニラ", amount: "一袋" },
     { name: "もやし", amount: "一袋" },
     { name: "鶏ひき肉", amount: "130g" },
     { name: "ごま油", amount: "小さじ1" },
     { name: "ニンニク", amount: "2cm" },
     { name: "豆板醤", amount: "お好みの辛さの量で" },
     { name: "★豆乳", amount: "200ml" },
     { name: "★鶏ガラ", amount: "小さじ2" },
     { name: "★味噌", amount: "大さじ1" },
     { name: "★醤油", amount: "大さじ1" },
     { name: "★すりごま", amount: "大さじ1" },
     { name: "★水", amount: "230ml" }
   ],
   recipe: [
     "キャベツを一口大にざく切り、ニラは3～4㎝の長さに切る",
     "フライパンにごま油、ニンニクを入れ香りが立つまで炒める",
     "鶏ひき肉を入れよく炒める",
     "豆板醤を入れる方はお好みの量入れて混ぜる",
     "切ったキャベツを入れ、しんなりするまで炒める",
     "★を加えてよく混ぜたら弱火で温める",
     "ニラを加えてくたっとするまで煮たら完成"
   ]
 },
 "to-fu-steak": {
   title: "旨みじゅわっと溢れる！本気の痩せる豆腐ステーキ",
   subtitle: "おなかいっぱい食べでも罪悪感ゼロのスタミナ飯",
   image: "images/豆腐ステーキ.jpg",
   ingredients: [
     { name: "豆腐", amount: "一丁" },
     { name: "片栗粉", amount: "適量" },
     { name: "サラダ油", amount: "適量" },
     { name: "★醤油", amount: "大さじ2" },
     { name: "★砂糖", amount: "大さじ2" },
     { name: "★みりん", amount: "大さじ2" },
     { name: "★酒", amount: "大さじ1" }
   ],
   recipe: [
     "豆腐をキッチンペーパーで包み600w2～3分",
     "温まった豆腐に片栗粉をまぶす",
     "フライパンにサラダ油を敷いて、豆腐を揚げ焼き",
     "余分な油を拭き取り、★を絡めて完成"
   ]
 },
 "nikumiso-salada": {
   title: "自分を労わるご褒美ヘルシー。贅沢仕立ての痩せる肉味噌サラダ",
   subtitle: "我慢ゼロで心も満たされる大人の主菜",
   image: "images/肉味噌サラダ.jpg",
   ingredients: [
     { name: "千切りキャベツ", amount: "一袋" },
     { name: "豚ロース", amount: "5枚" },
     { name: "塩コショウ", amount: "適量" },
     { name: "★ゴマ油", amount: "小さじ1" },
     { name: "★味噌", amount: "小さじ1" },
     { name: "★めんつゆ", amount: "大さじ1" },
     { name: "★いりごま", amount: "たっぷり" }
   ],
   recipe: [
     "キャベツと豚ロースをボウルに入れ上から少し塩コショウを振る",
     "ラップをかけてレンジで500w4分",
     "★をかけて完成"
   ]
 },
 "natsukyabe-salada": {
   title: "ひと手間で劇的においしくなる！極旨ヘルシー納豆キャベツサラダ",
   subtitle: "腸活＆ダイエットに最適な妥協なしの味。",
   image: "images/納豆キャベツサラダ.jpg",
   ingredients: [
     { name: "千切りキャベツ", amount: "一袋" },
     { name: "納豆", amount: "2パック" },
     { name: "卵黄", amount: "一つ" },
     { name: "ゴマ油", amount: "" },
     { name: "めんつゆ", amount: "" }
   ],
   recipe: [
     "千切りキャベツをボウルに入れて、混ぜ終わった納豆を乗せる",
     "ごま油、めんつゆを一周ずつかける",
     "卵黄を乗せて完成！！"
   ]
 }
};

// ==========================================================

// 画面の表示を制御するメインの処理

// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("all-recipes-container");

  if (!container) return;

  // HTML側にあるコツのセクションを取得

  const dietTipsSection = document.querySelector(".diet-tips-section");

  const recommendSection = document.querySelector(".recommend-section");

  // URLから ?id=... を取得

  const urlParams = new URLSearchParams(window.location.search);

  const selectedId = urlParams.get("id");

  if (selectedId && recipeData[selectedId]) {

    // 【詳細表示モード】

    location.replace("recipe/" + selectedId + ".html");

  } else {

    // 【一覧表示モード】

    renderRecipeList();

  }

  // 1. レシピカード一覧 ＋ コツの表示

  function renderRecipeList() {

    container.innerHTML = "";

    const titleHeading = document.createElement("h2");

    titleHeading.className = "section-title";

    titleHeading.textContent = "ダイエットレシピ一覧";

    titleHeading.style.marginBottom = "20px";

    container.appendChild(titleHeading);

    const gridEl = document.createElement("div");

    gridEl.className = "cat-grid";

    Object.keys(recipeData).forEach(key => {

      const data = recipeData[key];

      gridEl.appendChild(createRecipeCard({
        href: `recipe/${key}.html`,
        image: data.image,
        title: data.title,
        description: data.subtitle || ""
      }));

    });

    container.appendChild(gridEl);

    // 一覧画面ではコツを表示する

    if (dietTipsSection) dietTipsSection.style.display = "block";

    if (recommendSection) recommendSection.style.display = "block";

  }

  // 2. 個別レシピ詳細の表示

  function renderRecipeDetail(key) {

    const data = recipeData[key];

    container.innerHTML = "";

    // 詳細画面ではコツを非表示にしてすっきりさせる

    if (dietTipsSection) dietTipsSection.style.display = "none";

    if (recommendSection) recommendSection.style.display = "none";

    // 一覧に戻るボタン

    const backLink = document.createElement("a");

    backLink.href = "diet.html";

    backLink.textContent = "← ダイエットレシピ一覧に戻る";

    backLink.style.display = "inline-block";

    backLink.style.marginBottom = "20px";

    backLink.style.color = "#2d5a43";

    backLink.style.fontWeight = "bold";

    backLink.style.textDecoration = "none";

    backLink.style.padding = "8px 14px";

    backLink.style.background = "#e8f5ee";

    backLink.style.borderRadius = "20px";

    container.appendChild(backLink);

    const recipeItem = document.createElement("div");

    recipeItem.className = "recipe-item-block";

    recipeItem.style.padding = "24px";

    recipeItem.style.background = "#fff";

    recipeItem.style.borderRadius = "14px";

    recipeItem.style.border = "1px solid #f0e9dc";

    recipeItem.style.boxShadow = "0 4px 14px rgba(72, 81, 56, 0.06)";

    let ingredientsHTML = "";

    data.ingredients.forEach(item => {

      const amountText = item.amount ? `： ${item.amount}` : "";

      ingredientsHTML += `<li><span class="ing-name">${item.name}</span><span class="ing-amount">${amountText}</span></li>`;

    });

    let stepsHTML = "";

    data.recipe.forEach(step => {

      stepsHTML += `<li>${step}</li>`;

    });

    const imageHTML = data.image ? `<div class="recipe-image-container"><img src="${data.image}" alt="${data.title}"></div>` : "";

    recipeItem.innerHTML = `
<h2 class="recipe-title-text" style="font-size: 1.5rem; color: #2d5a43; margin-bottom: 5px;">${data.title}</h2>
<p class="recipe-subtitle-text" style="color: #666; font-style: italic; margin-bottom: 15px;">${data.subtitle || ""}</p>

      ${imageHTML}
<section class="recipe-section">
<h3 style="font-size: 1rem; border-left: 4px solid #88c9b3; padding-left: 10px; margin: 20px 0 12px; color: #2d5a43;">材料</h3>
<ul class="ingredient-list">${ingredientsHTML}</ul>
</section>
<section class="recipe-section">
<h3 style="font-size: 1rem; border-left: 4px solid #88c9b3; padding-left: 10px; margin: 20px 0 12px; color: #2d5a43;">作り方</h3>
<ol class="step-list">${stepsHTML}</ol>
</section>

    `;

    container.appendChild(recipeItem);

  }

});
