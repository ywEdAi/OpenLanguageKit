/* Data packs for blocks/classifier-match.html (prim:classifier-match):
 * classifier-match-zh, classifier-match-ja, classifier-match-en.
 *
 * Pack format
 *   generic    box id of the all-purpose classifier (个 / つ) or null. Putting a thing there when it has a more usual
 *              classifier is not marked wrong: it is yellow, “understood, but people usually say …”.
 *   boxes      { id: {t, feature?, note?} } t = the classifier / counting way in the target language;
 *              feature = id in features (the shared property of the box; asked after sorting).
 *   features   [{id, zh, en}] the locked list of properties offered for every box (includes distractors).
 *   items      { id: {w, pic, gloss:{zh,en}, ok:[box ids], kc?, pl?, a?, fix?:{zh,en}} } things on the table.
 *              ok = boxes that are right (several = both fine). en: pl = plural, a = article, ok may contain
 *              "none" (counted directly in step 3) and unit ids; fix = what to say instead of the wrong form.
 *   sets       step 1 rounds: [{id, title:{zh,en}, boxes:[ids], items:[ids], child?}]
 *   newItems   step 2: [{id, kc, w, pic, gloss, q, ok:[box ids] (empty = no classifier), cat, note:{zh,en},
 *              read?:{ok, opts:[...]}, det?:{q, ok, opts:[...]}}]
 *              q is the target-language phrase with ＿ where the classifier goes.
 *              cat = rule | exception | both | none — exception / both / none are the reverse half.
 *              read (ja) = reading of number + counter, judged on the whole reading;
 *              det (en) = determiner or noun-form choice that must agree with the box.
 *   newBoxes   box ids offered in step 2 (plus “no classifier”).
 *   numbers    step 3 number column: [{t, v, bad?:{zh,en}}] bad = a form that is wrong before a classifier (zh 二).
 *   units      en only: { id: {sg, pl} } container / unit words for step 3.
 *   orderCl    step 3 classifier column: box ids (zh / ja) or "none" + unit ids (en).
 *   tasks      step 3: [{id, kc, title:{zh,en}, needs:[{item, n}]}] a real list to write; every need must appear once.
 *   line       how a step 3 line is written: "zh" = 数+量+名, "ja" = Nを数量ください, "en" = number (+ unit of) + noun.
 *   review     items a native teacher should check (kept out of the drills or marked here).
 */
KT_DATA["classifier-match-zh"] = {
  "id": "classifier-match-zh", "lang": "zh", "speech": "zh-CN",
  "title": "汉语量词：按类别分盒子", "titleEn": "Chinese measure words: sort by kind",
  "subtitle": "把东西放进量词盒子，找出每个盒子的共同点，再处理规律之外的词，最后自己写一张购物单。", "subtitleEn": "Put things into measure-word boxes, find what each box has in common, then deal with the exceptions and write your own shopping list.",
  "kcs": ["kt:zh-measure-words-basic", "kt:zh-lex-measure-extended", "kt:zh-lex-food-drink"],
  "generic": "ge",
  "boxes": {
    "ge": {"t": "个", "feature": "general"}, "ben": {"t": "本", "feature": "book"}, "zhang": {"t": "张", "feature": "flat"},
    "bei": {"t": "杯", "feature": "cup"}, "kou": {"t": "口"}, "wei": {"t": "位"}, "jian": {"t": "件", "feature": "clothes"},
    "tiao": {"t": "条", "feature": "long"}, "shuang": {"t": "双", "feature": "pair"}, "tao": {"t": "套", "feature": "set"},
    "chang": {"t": "场"}, "ci": {"t": "次"}, "bian": {"t": "遍"}
  },
  "features": [
    {"id": "book", "zh": "装订成册的", "en": "bound like a book"}, {"id": "flat", "zh": "有一个平面的", "en": "has a flat surface"},
    {"id": "cup", "zh": "装在杯子里的", "en": "served in a cup or glass"}, {"id": "clothes", "zh": "衣服（多为上衣）", "en": "clothes (mostly tops)"},
    {"id": "long", "zh": "细长、能弯的", "en": "long and bendable"}, {"id": "pair", "zh": "成对的", "en": "come in pairs"},
    {"id": "set", "zh": "几件配成一套的", "en": "several pieces making a set"}, {"id": "handle", "zh": "有把手的", "en": "has a handle"},
    {"id": "machine", "zh": "机器", "en": "machines"}, {"id": "general", "zh": "通用", "en": "general purpose"}
  ],
  "items": {
    "shu": {"w": "书", "pic": "📕", "gloss": {"en": "book"}, "ok": ["ben"], "kc": "kt:zh-measure-words-basic"},
    "cidian": {"w": "词典", "pic": "📘", "gloss": {"en": "dictionary"}, "ok": ["ben"], "kc": "kt:zh-measure-words-basic"},
    "zazhi": {"w": "杂志", "pic": "📰", "gloss": {"en": "magazine"}, "ok": ["ben"], "kc": "kt:zh-measure-words-basic"},
    "zhi": {"w": "纸", "pic": "📄", "gloss": {"en": "paper"}, "ok": ["zhang"], "kc": "kt:zh-measure-words-basic"},
    "piao": {"w": "票", "pic": "🎫", "gloss": {"en": "ticket"}, "ok": ["zhang"], "kc": "kt:zh-measure-words-basic"},
    "zhaopian": {"w": "照片", "pic": "🖼", "gloss": {"en": "photo"}, "ok": ["zhang"], "kc": "kt:zh-measure-words-basic"},
    "ditu": {"w": "地图", "pic": "🗺", "gloss": {"en": "map"}, "ok": ["zhang"], "kc": "kt:zh-measure-words-basic"},
    "cha": {"w": "茶", "pic": "🍵", "gloss": {"en": "tea"}, "ok": ["bei"], "kc": "kt:zh-lex-food-drink"},
    "kafei": {"w": "咖啡", "pic": "☕", "gloss": {"en": "coffee"}, "ok": ["bei"], "kc": "kt:zh-lex-food-drink"},
    "shui": {"w": "水", "pic": "🥛", "gloss": {"en": "water"}, "ok": ["bei"], "kc": "kt:zh-lex-food-drink"},
    "pingguo": {"w": "苹果", "pic": "🍎", "gloss": {"en": "apple"}, "ok": ["ge"], "kc": "kt:zh-measure-words-basic"},
    "mianbao": {"w": "面包", "pic": "🍞", "gloss": {"en": "bread roll"}, "ok": ["ge"], "kc": "kt:zh-lex-food-drink"},
    "xuesheng": {"w": "学生", "pic": "🧑‍🎓", "gloss": {"en": "student"}, "ok": ["ge"], "kc": "kt:zh-measure-words-basic"},
    "yifu": {"w": "衣服", "pic": "👚", "gloss": {"en": "clothes (a top)"}, "ok": ["jian"], "kc": "kt:zh-lex-measure-extended"},
    "chenshan": {"w": "衬衫", "pic": "👔", "gloss": {"en": "shirt"}, "ok": ["jian"], "kc": "kt:zh-lex-measure-extended"},
    "kuzi": {"w": "裤子", "pic": "👖", "gloss": {"en": "trousers"}, "ok": ["tiao"], "kc": "kt:zh-lex-measure-extended"},
    "qunzi": {"w": "裙子", "pic": "👗", "gloss": {"en": "skirt / dress"}, "ok": ["tiao"], "kc": "kt:zh-lex-measure-extended"},
    "yu": {"w": "鱼", "pic": "🐟", "gloss": {"en": "fish"}, "ok": ["tiao"], "kc": "kt:zh-lex-measure-extended"},
    "xie": {"w": "鞋", "pic": "👟", "gloss": {"en": "shoes"}, "ok": ["shuang"], "kc": "kt:zh-lex-measure-extended"},
    "wazi": {"w": "袜子", "pic": "🧦", "gloss": {"en": "socks"}, "ok": ["shuang"], "kc": "kt:zh-lex-measure-extended"},
    "kuaizi": {"w": "筷子", "pic": "🥢", "gloss": {"en": "chopsticks"}, "ok": ["shuang"], "kc": "kt:zh-lex-measure-extended"},
    "xifu": {"w": "西服", "pic": "🤵", "gloss": {"en": "suit"}, "ok": ["tao"], "kc": "kt:zh-lex-measure-extended"},
    "jidan": {"w": "鸡蛋", "pic": "🥚", "gloss": {"en": "egg"}, "ok": ["ge"], "kc": "kt:zh-lex-food-drink"}
  },
  "sets": [
    {"id": "basic", "child": true, "title": {"zh": "书桌和餐桌", "en": "Desk and table"}, "boxes": ["ge", "ben", "zhang", "bei"], "items": ["shu", "cidian", "zazhi", "zhi", "piao", "zhaopian", "ditu", "cha", "kafei", "shui", "pingguo", "mianbao", "xuesheng"]},
    {"id": "wear", "title": {"zh": "衣柜和厨房", "en": "Wardrobe and kitchen"}, "boxes": ["ge", "jian", "tiao", "shuang", "tao"], "items": ["yifu", "chenshan", "kuzi", "qunzi", "yu", "xie", "wazi", "kuaizi", "xifu", "jidan"]}
  ],
  "newBoxes": ["ge", "ben", "zhang", "bei", "kou", "wei", "jian", "tiao", "shuang", "tao", "chang", "ci", "bian"],
  "newItems": [
    {"id": "xinwen", "kc": "kt:zh-lex-measure-extended", "w": "新闻", "pic": "📺", "gloss": {"en": "piece of news"}, "q": "今天有一＿好新闻。", "ok": ["tiao"], "cat": "exception", "note": {"zh": "新闻不是细长的东西，也用“条”：一条新闻、一条消息。", "en": "News is not long and thin, but takes 条 too: 一条新闻, 一条消息."}},
    {"id": "shi", "kc": "kt:zh-lex-measure-extended", "w": "事", "pic": "💭", "gloss": {"en": "matter"}, "q": "我想跟你说一＿事。", "ok": ["jian"], "cat": "exception", "note": {"zh": "“件”不只用于衣服，也用于事情：一件事。", "en": "件 is not only for clothes but also for matters: 一件事."}},
    {"id": "chuang", "kc": "kt:zh-measure-words-basic", "w": "床", "pic": "🛏", "gloss": {"en": "bed"}, "q": "房间里有两＿床。", "ok": ["zhang"], "cat": "rule", "note": {"zh": "床有一个平面：张。", "en": "A bed has a flat surface: 张."}},
    {"id": "huzhao", "kc": "kt:zh-measure-words-basic", "w": "护照", "pic": "🛂", "gloss": {"en": "passport"}, "q": "我有一＿护照。", "ok": ["ben"], "cat": "rule", "note": {"zh": "护照装订成册：本。", "en": "A passport is bound like a book: 本."}},
    {"id": "niunai", "kc": "kt:zh-lex-food-drink", "w": "牛奶", "pic": "🥛", "gloss": {"en": "milk"}, "q": "早上喝了一＿牛奶。", "ok": ["bei"], "cat": "rule", "note": {"zh": "装在杯子里：杯。", "en": "In a glass: 杯."}},
    {"id": "shoutao", "kc": "kt:zh-lex-measure-extended", "w": "手套", "pic": "🧤", "gloss": {"en": "gloves"}, "q": "我买了一＿手套。", "ok": ["shuang"], "cat": "rule", "note": {"zh": "成对的：双。", "en": "They come in pairs: 双."}},
    {"id": "weijin", "kc": "kt:zh-lex-measure-extended", "w": "围巾", "pic": "🧣", "gloss": {"en": "scarf"}, "q": "她送我一＿围巾。", "ok": ["tiao"], "cat": "rule", "note": {"zh": "细长、能弯：条。", "en": "Long and bendable: 条."}},
    {"id": "renkou", "kc": "kt:zh-measure-words-basic", "w": "人", "pic": "👪", "gloss": {"en": "people (family size)"}, "q": "我家有三＿人。", "ok": ["kou"], "cat": "exception", "note": {"zh": "说家里有几个人时用“口”：我家有三口人。说“三个人”也能懂。", "en": "For how many people a family has, use 口: 我家有三口人. 三个人 is understood too."}},
    {"id": "yu2", "kc": "kt:zh-lex-measure-extended", "w": "雨", "pic": "🌧", "gloss": {"en": "rain"}, "q": "昨天下了一＿大雨。", "ok": ["chang"], "cat": "exception", "note": {"zh": "“场”不按形状，按一次从开始到结束的事情：一场雨、一场比赛。", "en": "场 is not about shape but about one event from start to end: 一场雨, 一场比赛."}},
    {"id": "fangzi", "kc": "kt:zh-lex-measure-extended", "w": "房子", "pic": "🏠", "gloss": {"en": "flat / apartment"}, "q": "他们在北京买了一＿房子。", "ok": ["tao"], "cat": "exception", "note": {"zh": "一整套住房也用“套”：一套房子。", "en": "A whole flat also takes 套: 一套房子."}},
    {"id": "laoshi", "kc": "kt:zh-measure-words-basic", "w": "老师", "pic": "👩‍🏫", "gloss": {"en": "teacher"}, "q": "门口有一＿老师。", "ok": ["ge", "wei"], "cat": "both", "note": {"zh": "两个都对：“位”更客气，“个”更随便。", "en": "Both are right: 位 is more polite, 个 more casual."}},
    {"id": "bian", "kc": "kt:zh-lex-measure-extended", "w": "看", "pic": "🔁", "gloss": {"en": "times (read through)"}, "q": "这本书我看了三＿。", "ok": ["bian", "ci"], "cat": "both", "note": {"zh": "两个都对：“遍”强调从头到尾，“次”只数次数。", "en": "Both are right: 遍 stresses start to finish, 次 just counts times."}},
    {"id": "tian", "kc": "kt:zh-measure-words-basic", "w": "天", "pic": "📅", "gloss": {"en": "day"}, "q": "我在上海住了三＿天。", "ok": [], "cat": "none", "note": {"zh": "“天、年”自己就是量词，直接说三天、两年，不说 ×三个天。", "en": "天 and 年 are measure words themselves: 三天, 两年, not ×三个天."}},
    {"id": "nian", "kc": "kt:zh-measure-words-basic", "w": "年", "pic": "🗓", "gloss": {"en": "year"}, "q": "她学了两＿年中文。", "ok": [], "cat": "none", "note": {"zh": "直接说两年，不加量词。", "en": "Just 两年, no measure word."}},
    {"id": "ci", "kc": "kt:zh-lex-measure-extended", "w": "去", "pic": "✈️", "gloss": {"en": "times (been to)"}, "q": "我去过北京两＿。", "ok": ["ci"], "cat": "rule", "note": {"zh": "数动作的次数：次。", "en": "Counting how many times an action happened: 次."}}
  ],
  "numbers": [{"t": "一", "v": 1}, {"t": "两", "v": 2}, {"t": "二", "v": 2, "bad": {"zh": "量词前面说“两”，不说“二”：两本书。", "en": "Before a measure word say 两, not 二: 两本书."}}, {"t": "三", "v": 3}, {"t": "四", "v": 4}, {"t": "五", "v": 5}],
  "orderCl": ["ge", "ben", "zhang", "bei", "jian", "tiao", "shuang"],
  "line": "zh",
  "tasks": [
    {"id": "shop", "kc": "kt:zh-measure-words-basic", "title": {"zh": "开学前去买东西：写一张购物单。", "en": "Shopping before term starts: write a shopping list."}, "needs": [{"item": "shu", "n": 2}, {"item": "ditu", "n": 1}, {"item": "wazi", "n": 2}, {"item": "chenshan", "n": 1}, {"item": "pingguo", "n": 3}]},
    {"id": "cafe", "kc": "kt:zh-lex-food-drink", "title": {"zh": "给全家买早餐：写下要点的东西。", "en": "Breakfast for the family: write what to order."}, "needs": [{"item": "cha", "n": 2}, {"item": "shui", "n": 1}, {"item": "mianbao", "n": 3}, {"item": "jidan", "n": 4}, {"item": "kuaizi", "n": 4}]}
  ],
  "reverse": "量词不全按形状：一条新闻、一件事、一场雨按习惯或事件；一位老师和一个老师都对，语气不同；天、年本身就是量词，不再加“个”。", "reverseEn": "Measure words are not all about shape: 一条新闻, 一件事, 一场雨 follow habit or events; 一位老师 and 一个老师 are both right with a different tone; 天 and 年 are measure words themselves and take no 个.",
  "review": ["“一个面包”和“一块面包”都常见，本页只把“个”当对", "狗用“只”还是“条”有地区差异，没有放进题里", "“我家有三口人”判“口”对、“个”标黄（能懂）", "“这本书我看了三遍／三次”两个都接受"],
  "reviewEn": ["一个面包 and 一块面包 are both common; this page only accepts 个", "Whether dogs take 只 or 条 varies by region, so dogs are left out", "我家有三口人: 口 is right, 个 is yellow (understood)", "这本书我看了三遍 / 三次: both accepted"]
};

KT_DATA["classifier-match-ja"] = {
  "id": "classifier-match-ja", "lang": "ja", "speech": "ja-JP",
  "title": "日语助数词：按类别分盒子", "titleEn": "Japanese counters: sort by kind",
  "subtitle": "把东西放进助数词盒子，找出共同点，再处理例外和读音变化，最后用 Nを数量ください 点单。", "subtitleEn": "Put things into counter boxes, find what they share, deal with the exceptions and sound changes, then order with Nを数量ください.",
  "kcs": ["kt:ja-counters", "kt:ja-quantity-request"],
  "generic": "tsu",
  "boxes": {
    "tsu": {"t": "つ", "feature": "general"}, "ko": {"t": "個", "feature": "small"}, "nin": {"t": "人", "feature": "people"},
    "mai": {"t": "枚", "feature": "flat"}, "hon": {"t": "本", "feature": "long"}, "satsu": {"t": "冊", "feature": "book"},
    "dai": {"t": "台", "feature": "machine"}, "hai": {"t": "杯", "feature": "cup"}, "hiki": {"t": "匹", "feature": "animal"},
    "soku": {"t": "足"}
  },
  "features": [
    {"id": "long", "zh": "细长的", "en": "long and thin"}, {"id": "flat", "zh": "薄而平的", "en": "thin and flat"},
    {"id": "book", "zh": "装订成册的", "en": "bound like a book"}, {"id": "people", "zh": "人", "en": "people"},
    {"id": "machine", "zh": "机器和车", "en": "machines and vehicles"}, {"id": "cup", "zh": "装在杯碗里的", "en": "in a cup or bowl"},
    {"id": "animal", "zh": "小动物", "en": "small animals"}, {"id": "small", "zh": "小块的东西", "en": "small solid things"},
    {"id": "handle", "zh": "有把手的", "en": "has a handle"}, {"id": "general", "zh": "通用", "en": "general purpose"}
  ],
  "items": {
    "enpitsu": {"w": "鉛筆", "pic": "✏️", "gloss": {"zh": "铅笔", "en": "pencil"}, "ok": ["hon"]},
    "kasa": {"w": "傘", "pic": "🌂", "gloss": {"zh": "伞", "en": "umbrella"}, "ok": ["hon"]},
    "banana": {"w": "バナナ", "pic": "🍌", "gloss": {"zh": "香蕉", "en": "banana"}, "ok": ["hon"]},
    "kami": {"w": "紙", "pic": "📄", "gloss": {"zh": "纸", "en": "paper"}, "ok": ["mai"]},
    "kitte": {"w": "切手", "pic": "📮", "gloss": {"zh": "邮票", "en": "stamp"}, "ok": ["mai"]},
    "shatsu": {"w": "シャツ", "pic": "👕", "gloss": {"zh": "衬衫", "en": "shirt"}, "ok": ["mai"]},
    "hon": {"w": "本", "pic": "📕", "gloss": {"zh": "书", "en": "book"}, "ok": ["satsu"]},
    "nooto": {"w": "ノート", "pic": "📓", "gloss": {"zh": "笔记本", "en": "notebook"}, "ok": ["satsu"]},
    "gakusei": {"w": "学生", "pic": "🧑‍🎓", "gloss": {"zh": "学生", "en": "student"}, "ok": ["nin"]},
    "kodomo": {"w": "子ども", "pic": "🧒", "gloss": {"zh": "孩子", "en": "child"}, "ok": ["nin"]},
    "ringo": {"w": "りんご", "pic": "🍎", "gloss": {"zh": "苹果", "en": "apple"}, "ok": ["tsu", "ko"]},
    "kuruma": {"w": "車", "pic": "🚗", "gloss": {"zh": "汽车", "en": "car"}, "ok": ["dai"]},
    "pasokon": {"w": "パソコン", "pic": "💻", "gloss": {"zh": "电脑", "en": "computer"}, "ok": ["dai"]},
    "jitensha": {"w": "自転車", "pic": "🚲", "gloss": {"zh": "自行车", "en": "bicycle"}, "ok": ["dai"]},
    "koohii": {"w": "コーヒー", "pic": "☕", "gloss": {"zh": "咖啡", "en": "coffee"}, "ok": ["hai"]},
    "ocha": {"w": "お茶", "pic": "🍵", "gloss": {"zh": "茶", "en": "tea"}, "ok": ["hai"]},
    "neko": {"w": "猫", "pic": "🐈", "gloss": {"zh": "猫", "en": "cat"}, "ok": ["hiki"]},
    "sakana": {"w": "魚", "pic": "🐟", "gloss": {"zh": "鱼", "en": "fish"}, "ok": ["hiki"]},
    "tamago": {"w": "卵", "pic": "🥚", "gloss": {"zh": "鸡蛋", "en": "egg"}, "ok": ["ko", "tsu"]},
    "keshigomu": {"w": "消しゴム", "pic": "🧽", "gloss": {"zh": "橡皮", "en": "eraser"}, "ok": ["ko", "tsu"]},
    "biiru": {"w": "ビール", "pic": "🍺", "gloss": {"zh": "啤酒", "en": "beer"}, "ok": ["hon", "hai"]},
    "yakitori": {"w": "焼き鳥", "pic": "🍢", "gloss": {"zh": "烤鸡肉串", "en": "chicken skewer"}, "ok": ["hon"]},
    "kozara": {"w": "小皿", "pic": "🍽", "gloss": {"zh": "小碟子", "en": "small plate"}, "ok": ["mai"]}
  },
  "sets": [
    {"id": "desk", "child": true, "title": {"zh": "文具和教室", "en": "Stationery and classroom"}, "boxes": ["tsu", "hon", "mai", "satsu", "nin"], "items": ["enpitsu", "kasa", "banana", "kami", "kitte", "shatsu", "hon", "nooto", "gakusei", "kodomo", "ringo"]},
    {"id": "home", "title": {"zh": "家里和车库", "en": "Home and garage"}, "boxes": ["tsu", "dai", "hai", "hiki", "ko"], "items": ["kuruma", "pasokon", "jitensha", "koohii", "ocha", "neko", "sakana", "tamago", "keshigomu"]}
  ],
  "newBoxes": ["tsu", "ko", "nin", "mai", "hon", "satsu", "dai", "hai", "hiki", "soku"],
  "newItems": [
    {"id": "denwa", "kc": "kt:ja-counters", "w": "電話", "pic": "📞", "gloss": {"zh": "电话", "en": "phone call"}, "q": "あとで電話を1＿かけます。", "ok": ["hon"], "cat": "exception", "read": {"ok": "いっぽん", "opts": ["いっぽん", "いちほん", "ひとほん"]}, "note": {"zh": "打电话的次数也用“本”：電話を1本。不是按形状。", "en": "Phone calls also take 本: 電話を1本. Not about shape."}},
    {"id": "eiga", "kc": "kt:ja-counters", "w": "映画", "pic": "🎬", "gloss": {"zh": "电影", "en": "film"}, "q": "週末に映画を3＿見ました。", "ok": ["hon"], "cat": "exception", "read": {"ok": "さんぼん", "opts": ["さんぼん", "さんほん", "さんぽん"]}, "note": {"zh": "电影也用“本”（来自胶片卷）：映画を3本。", "en": "Films also take 本 (from film reels): 映画を3本."}},
    {"id": "binbiiru", "kc": "kt:ja-counters", "w": "瓶ビール", "pic": "🍾", "gloss": {"zh": "瓶装啤酒", "en": "bottled beer"}, "q": "瓶ビールを2＿ください。", "ok": ["hon"], "cat": "rule", "read": {"ok": "にほん", "opts": ["にほん", "にぼん", "ふたほん"]}, "note": {"zh": "瓶子是细长的：本。日语没有汉语的“瓶”这个量词。", "en": "Bottles are long: 本. Japanese has no counter like Chinese 瓶."}},
    {"id": "sara", "kc": "kt:ja-counters", "w": "お皿", "pic": "🍽", "gloss": {"zh": "盘子", "en": "plate"}, "q": "お皿を6＿出してください。", "ok": ["mai"], "cat": "rule", "read": {"ok": "ろくまい", "opts": ["ろくまい", "ろっまい", "むまい"]}, "note": {"zh": "薄而平：枚。ろくまい 不变音。", "en": "Thin and flat: 枚. ろくまい has no sound change."}},
    {"id": "inu", "kc": "kt:ja-counters", "w": "犬", "pic": "🐕", "gloss": {"zh": "狗", "en": "dog"}, "q": "犬を3＿飼っています。", "ok": ["hiki"], "cat": "rule", "read": {"ok": "さんびき", "opts": ["さんびき", "さんひき", "さんぴき"]}, "note": {"zh": "小动物：匹。3 后面变浊音 びき。", "en": "Small animals: 匹. After 3 it becomes voiced: びき."}},
    {"id": "sakana6", "kc": "kt:ja-counters", "w": "魚", "pic": "🐠", "gloss": {"zh": "鱼", "en": "fish"}, "q": "水そうに魚が6＿います。", "ok": ["hiki"], "cat": "rule", "read": {"ok": "ろっぴき", "opts": ["ろっぴき", "ろくひき", "ろくぴき"]}, "note": {"zh": "6 后面：ろっぴき（促音加半浊音）。", "en": "After 6: ろっぴき (small っ and p)."}},
    {"id": "koohii1", "kc": "kt:ja-quantity-request", "w": "コーヒー", "pic": "☕", "gloss": {"zh": "咖啡", "en": "coffee"}, "q": "コーヒーを1＿ください。", "ok": ["hai"], "cat": "rule", "read": {"ok": "いっぱい", "opts": ["いっぱい", "いちはい", "ひとはい"]}, "note": {"zh": "杯装的饮料：杯。1 杯读 いっぱい。", "en": "Drinks in a cup: 杯. One cup is いっぱい."}},
    {"id": "zasshi", "kc": "kt:ja-counters", "w": "雑誌", "pic": "📰", "gloss": {"zh": "杂志", "en": "magazine"}, "q": "雑誌を3＿買いました。", "ok": ["satsu"], "cat": "rule", "read": {"ok": "さんさつ", "opts": ["さんさつ", "さんざつ", "みさつ"]}, "note": {"zh": "装订成册：冊。さんさつ 不变音。", "en": "Bound like a book: 冊. さんさつ has no sound change."}},
    {"id": "sensei", "kc": "kt:ja-counters", "w": "先生", "pic": "👩‍🏫", "gloss": {"zh": "老师", "en": "teacher"}, "q": "先生が2＿来ました。", "ok": ["nin"], "cat": "rule", "read": {"ok": "ふたり", "opts": ["ふたり", "ににん", "ふたにん"]}, "note": {"zh": "人：人。1、2 人读 ひとり、ふたり。", "en": "People: 人. One and two are ひとり, ふたり."}},
    {"id": "kodomo4", "kc": "kt:ja-counters", "w": "子ども", "pic": "🧒", "gloss": {"zh": "孩子", "en": "child"}, "q": "公園に子どもが4＿います。", "ok": ["nin"], "cat": "rule", "read": {"ok": "よにん", "opts": ["よにん", "よんにん", "しにん"]}, "note": {"zh": "4 人读 よにん。", "en": "Four people is よにん."}},
    {"id": "kutsu", "kc": "kt:ja-counters", "w": "靴", "pic": "👟", "gloss": {"zh": "鞋", "en": "shoes"}, "q": "新しい靴を1＿買いました。", "ok": ["soku"], "cat": "rule", "read": {"ok": "いっそく", "opts": ["いっそく", "いちそく", "ひとそく"]}, "note": {"zh": "鞋袜一双：足。1 足读 いっそく。", "en": "A pair of shoes or socks: 足. One pair is いっそく."}},
    {"id": "keeki", "kc": "kt:ja-counters", "w": "ケーキ", "pic": "🍰", "gloss": {"zh": "蛋糕", "en": "cake"}, "q": "ケーキを2＿買いました。", "ok": ["ko", "tsu"], "cat": "both", "note": {"zh": "两个都对：2個 和 2つ（ふたつ）都常说。", "en": "Both are right: 2個 and 2つ (ふたつ) are both common."}},
    {"id": "jikan", "kc": "kt:ja-counters", "w": "時間", "pic": "⏱", "gloss": {"zh": "小时", "en": "hours"}, "q": "駅まで2＿時間かかります。", "ok": [], "cat": "none", "note": {"zh": "“時間”自己就带单位，直接说 2時間，不加助数词。", "en": "時間 is already a unit: 2時間, no counter."}},
    {"id": "nen", "kc": "kt:ja-counters", "w": "年", "pic": "🗓", "gloss": {"zh": "年", "en": "years"}, "q": "日本に3＿年住んでいます。", "ok": [], "cat": "none", "note": {"zh": "直接说 3年，不加助数词。", "en": "Just 3年, no counter."}}
  ],
  "numbers": [{"t": "1", "v": 1}, {"t": "2", "v": 2}, {"t": "3", "v": 3}, {"t": "4", "v": 4}, {"t": "5", "v": 5}],
  "orderCl": ["tsu", "ko", "hon", "mai", "satsu", "hai", "nin"],
  "line": "ja",
  "tasks": [
    {"id": "izakaya", "kc": "kt:ja-quantity-request", "title": {"zh": "在居酒屋点单。", "en": "Ordering at an izakaya."}, "needs": [{"item": "biiru", "n": 2}, {"item": "yakitori", "n": 3}, {"item": "ocha", "n": 1}, {"item": "kozara", "n": 2}]},
    {"id": "bungu", "kc": "kt:ja-quantity-request", "title": {"zh": "在文具店买东西。", "en": "Buying at a stationery shop."}, "needs": [{"item": "enpitsu", "n": 3}, {"item": "nooto", "n": 2}, {"item": "kami", "n": 5}, {"item": "keshigomu", "n": 1}]}
  ],
  "reverse": "助数词不全按形状：電話や映画也用“本”；ケーキ用“個”和“つ”都行；時間、年本身就是单位，不加助数词。数字和助数词合起来时还会变音（いっぽん、さんびき）。", "reverseEn": "Counters are not all about shape: phone calls and films take 本; ケーキ takes 個 or つ; 時間 and 年 are units themselves and take no counter. Number and counter also change sound together (いっぽん, さんびき).",
  "review": ["犬 按“小动物”用 匹，大狗也可用 頭，题里只收 匹", "瓶ビール 归为“按规律”（瓶子细长）", "8 和 10 前后的读音（はっぴき／はちひき、じゅっぽん／じっぽん）有两读，未出题", "第 3 步固定为 Nを数量ください 语序，“数量のN”这类语序页面不考"],
  "reviewEn": ["犬 takes 匹 as a small animal; large dogs can take 頭, but only 匹 is accepted", "瓶ビール is classed as “by the rule” (bottles are long)", "Readings around 8 and 10 have two forms (はっぴき / はちひき, じゅっぽん / じっぽん), so they are not drilled", "Step 3 fixes the order Nを数量ください; the order 数量のN is not tested"]
};

KT_DATA["classifier-match-en"] = {
  "id": "classifier-match-en", "lang": "en", "speech": "en-US",
  "title": "英语可数与不可数：按数法分盒子", "titleEn": "English countable and uncountable: sort by how you count",
  "subtitle": "先判断东西能不能一个一个数，再选 many / much、a few / a little、fewer / less，最后用 a loaf of、a cup of 写一张单子。", "subtitleEn": "First decide whether a thing can be counted one by one, then choose many / much, a few / a little, fewer / less, and finally write a list with a loaf of, a cup of.",
  "kcs": ["kt:en-countability", "kt:en-much-many", "kt:en-some-any", "kt:en-determiners-wider", "kt:en-fewer-less", "kt:en-lex-food-drink"],
  "generic": null,
  "boxes": {
    "count": {"t": "a / two / many", "feature": "one"},
    "mass": {"t": "much / a little", "feature": "mass"}
  },
  "features": [
    {"id": "one", "zh": "能一个一个数", "en": "can be counted one by one"}, {"id": "mass", "zh": "是一团、一堆或一类东西", "en": "a mass, a heap or a kind of thing"},
    {"id": "small", "zh": "小的东西", "en": "small things"}, {"id": "food", "zh": "吃的东西", "en": "things to eat"}
  ],
  "items": {
    "apple": {"w": "apple", "pl": "apples", "a": "an", "pic": "🍎", "gloss": {"zh": "苹果"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "egg": {"w": "egg", "pl": "eggs", "a": "an", "pic": "🥚", "gloss": {"zh": "鸡蛋"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "sandwich": {"w": "sandwich", "pl": "sandwiches", "a": "a", "pic": "🥪", "gloss": {"zh": "三明治"}, "ok": ["count", "none"], "kc": "kt:en-lex-food-drink"},
    "banana": {"w": "banana", "pl": "bananas", "a": "a", "pic": "🍌", "gloss": {"zh": "香蕉"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "bread": {"w": "bread", "pic": "🍞", "gloss": {"zh": "面包"}, "ok": ["mass", "loaf", "slice"], "kc": "kt:en-countability", "fix": {"zh": "×two breads → two loaves of bread / two slices of bread", "en": "×two breads → two loaves of bread / two slices of bread"}},
    "rice": {"w": "rice", "pic": "🍚", "gloss": {"zh": "米饭"}, "ok": ["mass", "bowl"], "kc": "kt:en-countability", "fix": {"zh": "×two rices → two bowls of rice", "en": "×two rices → two bowls of rice"}},
    "milk": {"w": "milk", "pic": "🥛", "gloss": {"zh": "牛奶"}, "ok": ["mass", "carton", "bottle", "glass"], "kc": "kt:en-countability", "fix": {"zh": "×two milks → two cartons of milk", "en": "×two milks → two cartons of milk"}},
    "cheese": {"w": "cheese", "pic": "🧀", "gloss": {"zh": "奶酪"}, "ok": ["mass", "piece", "slice"], "kc": "kt:en-countability", "fix": {"zh": "×a cheese → a piece of cheese", "en": "×a cheese → a piece of cheese"}},
    "sugar": {"w": "sugar", "pic": "🧂", "gloss": {"zh": "糖"}, "ok": ["mass"], "kc": "kt:en-countability", "fix": {"zh": "×many sugars → much sugar / a little sugar", "en": "×many sugars → much sugar / a little sugar"}},
    "chair": {"w": "chair", "pl": "chairs", "a": "a", "pic": "🪑", "gloss": {"zh": "椅子"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "bag": {"w": "bag", "pl": "bags", "a": "a", "pic": "👜", "gloss": {"zh": "包"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "coin": {"w": "coin", "pl": "coins", "a": "a", "pic": "🪙", "gloss": {"zh": "硬币"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "idea": {"w": "idea", "pl": "ideas", "a": "an", "pic": "💡", "gloss": {"zh": "主意"}, "ok": ["count", "none"], "kc": "kt:en-countability"},
    "furniture": {"w": "furniture", "pic": "🛋", "gloss": {"zh": "家具"}, "ok": ["mass", "piece"], "kc": "kt:en-countability", "fix": {"zh": "×furnitures → pieces of furniture", "en": "×furnitures → pieces of furniture"}},
    "advice": {"w": "advice", "pic": "🗣", "gloss": {"zh": "建议"}, "ok": ["mass", "piece"], "kc": "kt:en-countability", "fix": {"zh": "×an advice → a piece of advice / some advice", "en": "×an advice → a piece of advice / some advice"}},
    "information": {"w": "information", "pic": "ℹ️", "gloss": {"zh": "信息"}, "ok": ["mass", "piece"], "kc": "kt:en-countability", "fix": {"zh": "×informations → information / a piece of information", "en": "×informations → information / a piece of information"}},
    "homework": {"w": "homework", "pic": "📝", "gloss": {"zh": "作业"}, "ok": ["mass"], "kc": "kt:en-countability", "fix": {"zh": "×two homeworks → two pieces of homework / some homework", "en": "×two homeworks → two pieces of homework / some homework"}},
    "money": {"w": "money", "pic": "💰", "gloss": {"zh": "钱"}, "ok": ["mass"], "kc": "kt:en-much-many", "fix": {"zh": "×How many money? → How much money?", "en": "×How many money? → How much money?"}},
    "coffee": {"w": "coffee", "pl": "coffees", "a": "a", "pic": "☕", "gloss": {"zh": "咖啡"}, "ok": ["mass", "none", "cup"], "kc": "kt:en-lex-food-drink"},
    "water": {"w": "water", "pl": "waters", "a": "a", "pic": "💧", "gloss": {"zh": "水"}, "ok": ["mass", "bottle", "glass"], "kc": "kt:en-lex-food-drink", "fix": {"zh": "×two waters 只在点单时偶尔说；写单子用 two bottles of water", "en": "×two waters is only an occasional ordering shortcut; on a list write two bottles of water"}},
    "cake": {"w": "cake", "pl": "cakes", "a": "a", "pic": "🍰", "gloss": {"zh": "蛋糕（切块）"}, "ok": ["piece", "slice"], "kc": "kt:en-lex-food-drink", "fix": {"zh": "two cakes 是两整个蛋糕；切块用 two slices of cake", "en": "two cakes means two whole cakes; for pieces use two slices of cake"}}
  },
  "sets": [
    {"id": "food", "child": true, "title": {"zh": "厨房", "en": "Kitchen"}, "boxes": ["count", "mass"], "items": ["apple", "egg", "sandwich", "banana", "bread", "rice", "milk", "cheese", "sugar"]},
    {"id": "things", "title": {"zh": "家里和学校", "en": "Home and school"}, "boxes": ["count", "mass"], "items": ["chair", "bag", "coin", "idea", "furniture", "advice", "information", "homework", "money"]}
  ],
  "newBoxes": ["count", "mass"],
  "newItems": [
    {"id": "news", "kc": "kt:en-countability", "w": "news", "pic": "📺", "gloss": {"zh": "新闻"}, "q": "news", "ok": ["mass"], "cat": "exception", "det": {"q": "There isn't ＿ news today.", "ok": "much", "opts": ["much", "many"]}, "note": {"zh": "news 看起来是复数，其实不可数：much news、the news is。", "en": "news looks plural but is uncountable: much news, the news is."}},
    {"id": "people", "kc": "kt:en-fewer-less", "w": "people", "pic": "👥", "gloss": {"zh": "人们"}, "q": "people", "ok": ["count"], "cat": "exception", "det": {"q": "＿ people came this year than last year.", "ok": "Fewer", "opts": ["Fewer", "Less"]}, "note": {"zh": "people 没有 -s 也是可数复数：fewer people（口语里 less people 也常听到，正式写作用 fewer）。", "en": "people has no -s but is a countable plural: fewer people (less people is heard in speech; formal writing uses fewer)."}},
    {"id": "coffee", "kc": "kt:en-lex-food-drink", "w": "coffee", "pic": "☕", "gloss": {"zh": "咖啡"}, "q": "coffee", "ok": ["count", "mass"], "cat": "both", "note": {"zh": "两个都对：coffee 作饮料本身不可数；点单时 Two coffees, please 指两杯。", "en": "Both are right: coffee as a drink is uncountable; Two coffees, please means two cups."}},
    {"id": "chicken", "kc": "kt:en-countability", "w": "chicken", "pic": "🍗", "gloss": {"zh": "鸡／鸡肉"}, "q": "chicken", "ok": ["count", "mass"], "cat": "both", "note": {"zh": "两个都对：作肉不可数（some chicken），作动物可数（three chickens）。", "en": "Both are right: as meat it is uncountable (some chicken), as animals countable (three chickens)."}},
    {"id": "hair", "kc": "kt:en-countability", "w": "hair", "pic": "💇", "gloss": {"zh": "头发"}, "q": "hair", "ok": ["count", "mass"], "cat": "both", "note": {"zh": "两个都对：满头的头发不可数（She has long hair），一根是可数的（There's a hair in my soup）。", "en": "Both are right: all of it is uncountable (She has long hair), one strand is countable (There's a hair in my soup)."}},
    {"id": "equipment", "kc": "kt:en-much-many", "w": "equipment", "pic": "🎒", "gloss": {"zh": "装备"}, "q": "equipment", "ok": ["mass"], "cat": "rule", "det": {"q": "How ＿ equipment do we need?", "ok": "much", "opts": ["much", "many"]}, "note": {"zh": "一类东西的总称：不可数，用 much。", "en": "A name for a whole kind of thing: uncountable, much."}},
    {"id": "sheep", "kc": "kt:en-determiners-wider", "w": "sheep", "pic": "🐑", "gloss": {"zh": "羊"}, "q": "sheep", "ok": ["count"], "cat": "rule", "det": {"q": "There are ＿ sheep on the hill.", "ok": "a few", "opts": ["a few", "a little"]}, "note": {"zh": "一只一只能数（复数不加 -s）：a few sheep。", "en": "Countable one by one (plural without -s): a few sheep."}},
    {"id": "butter", "kc": "kt:en-determiners-wider", "w": "butter", "pic": "🧈", "gloss": {"zh": "黄油"}, "q": "butter", "ok": ["mass"], "cat": "rule", "det": {"q": "Add ＿ butter to the pan.", "ok": "a little", "opts": ["a little", "a few"]}, "note": {"zh": "一团东西：a little butter。", "en": "A mass: a little butter."}},
    {"id": "traffic", "kc": "kt:en-fewer-less", "w": "traffic", "pic": "🚦", "gloss": {"zh": "交通（车流）"}, "q": "traffic", "ok": ["mass"], "cat": "rule", "det": {"q": "There was ＿ traffic than usual.", "ok": "less", "opts": ["less", "fewer"]}, "note": {"zh": "车流是一团：less traffic。", "en": "Traffic is a mass: less traffic."}},
    {"id": "car", "kc": "kt:en-fewer-less", "w": "car", "pic": "🚗", "gloss": {"zh": "汽车"}, "q": "car", "ok": ["count"], "cat": "rule", "det": {"q": "There were ＿ cars than usual.", "ok": "fewer", "opts": ["fewer", "less"]}, "note": {"zh": "车一辆一辆能数：fewer cars。", "en": "Cars can be counted one by one: fewer cars."}},
    {"id": "egg-some", "kc": "kt:en-some-any", "w": "egg", "pic": "🥚", "gloss": {"zh": "鸡蛋"}, "q": "egg", "ok": ["count"], "cat": "rule", "det": {"q": "Have we got any ＿?", "ok": "eggs", "opts": ["eggs", "egg"]}, "note": {"zh": "可数名词跟在 some / any 后面用复数：any eggs。", "en": "A countable noun after some / any is plural: any eggs."}},
    {"id": "bread-some", "kc": "kt:en-some-any", "w": "bread", "pic": "🍞", "gloss": {"zh": "面包"}, "q": "bread", "ok": ["mass"], "cat": "rule", "det": {"q": "Can you buy some ＿?", "ok": "bread", "opts": ["bread", "breads"]}, "note": {"zh": "不可数名词跟在 some 后面不加 -s：some bread。", "en": "An uncountable noun after some takes no -s: some bread."}},
    {"id": "knowledge", "kc": "kt:en-determiners-wider", "w": "knowledge", "pic": "🧠", "gloss": {"zh": "知识"}, "q": "knowledge", "ok": ["mass"], "cat": "rule", "det": {"q": "He has ＿ knowledge of history.", "ok": "a little", "opts": ["a little", "a few"]}, "note": {"zh": "抽象的东西多为不可数：a little knowledge。", "en": "Abstract things are mostly uncountable: a little knowledge."}}
  ],
  "numbers": [{"t": "a / an", "v": 1}, {"t": "two", "v": 2}, {"t": "three", "v": 3}, {"t": "four", "v": 4}, {"t": "six", "v": 6}],
  "units": {"loaf": {"sg": "loaf", "pl": "loaves"}, "slice": {"sg": "slice", "pl": "slices"}, "carton": {"sg": "carton", "pl": "cartons"}, "bottle": {"sg": "bottle", "pl": "bottles"}, "glass": {"sg": "glass", "pl": "glasses"}, "piece": {"sg": "piece", "pl": "pieces"}, "cup": {"sg": "cup", "pl": "cups"}, "bowl": {"sg": "bowl", "pl": "bowls"}},
  "orderCl": ["none", "loaf", "slice", "carton", "bottle", "piece", "cup"],
  "line": "en",
  "tasks": [
    {"id": "breakfast", "kc": "kt:en-lex-food-drink", "title": {"zh": "给全家买早餐：写一张购物单。", "en": "Breakfast for the family: write a shopping list."}, "needs": [{"item": "bread", "n": 2}, {"item": "milk", "n": 1}, {"item": "egg", "n": 6}, {"item": "apple", "n": 4}, {"item": "cheese", "n": 1}]},
    {"id": "cafe", "kc": "kt:en-countability", "title": {"zh": "在咖啡馆给朋友们点单。", "en": "Ordering for friends at a café."}, "needs": [{"item": "coffee", "n": 2}, {"item": "water", "n": 1}, {"item": "cake", "n": 2}, {"item": "sandwich", "n": 3}]}
  ],
  "reverse": "可数性跟着意思变：coffee 作饮料不可数，点单时 two coffees 指两杯；chicken 作肉不可数、作动物可数；news 像复数其实不可数，people 没有 -s 却是复数。", "reverseEn": "Countability follows meaning: coffee as a drink is uncountable, but two coffees when ordering means two cups; chicken is uncountable as meat, countable as animals; news looks plural but is uncountable, and people has no -s but is plural.",
  "review": ["“two waters”在点单里可以说，本页写单子时判为不对（要求 a bottle of water）", "fewer / less people：只按正式写作判 fewer", "en 没有“这里不用单位”这一类题", "cake 只接受 slices / pieces of cake（整蛋糕的意思不在任务里）"],
  "reviewEn": ["“two waters” is possible when ordering; on the written list this page asks for a bottle of water", "fewer / less people: only the formal written fewer is accepted", "English has no “no unit needed” items", "cake only accepts slices / pieces of cake (whole cakes are not in the task)"]
};
