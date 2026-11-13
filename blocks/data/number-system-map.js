/* Data packs for number-system-map.html (prim:number-system-map). Original content, CC BY-NC 4.0.
 *
 * KT_DATA["number-system-map-<lang>"] = {
 *   id, lang,                 // lang = target language: "en" (learners whose source is Chinese) or "zh" (source English)
 *   src,                      // source language of the cards: "zh" or "en"
 *   speech,                   // BCP-47 tag for browser playback of the model reading
 *   title, titleEn, subtitle, subtitleEn,
 *   cards: [{                 // step 1 shows only `say` (a source-language sentence, no digits); step 2 shows the digits
 *     id, n,                  // n = the exact number the sentence means (for "多 / more than" items: the stated base)
 *     say,                    // the source sentence
 *     ctx, ctxEn,             // optional frame around {n}; when absent the sentence is shown alone
 *     approx,                 // null | "over" (多 / more than / over) | "about" (左右 / 大约 / about)
 *     unit,                   // null | accepted target-language unit / noun strings (one must follow the number)
 *     model,                  // one acceptable target reading (shown after the item is done, used for playback)
 *     kc                      // the KC the card is filed under
 *   }],
 *   childCards: [ same shape, numbers up to 10,000, no unit ],
 *   rule: [{                  // reverse half: where the grouping rule does not apply or is applied wrongly
 *     id, q, qEn, show, showLang, opts: [target-language strings], ok: [indexes], why, whyEn
 *   }],
 *   review: [ items kept out of the drills until a teacher checks them ]
 * };
 * Readings are parsed by the page (English number words; Chinese 万/亿 numerals incl. 两万五, 一百零五, 点, 多, 左右).
 */
window.KT_DATA = window.KT_DATA || {};
KT_DATA["number-system-map-en"] = {
  "id": "number-system-map-en",
  "lang": "en",
  "src": "zh",
  "speech": "en-GB",
  "title": "万、亿 换成 thousand、million",
  "titleEn": "From 万 and 亿 to thousand and million",
  "subtitle": "给说中文的英语学习者：先估量级，再把四位一组换成三位一组，最后用英语写出整个数量。",
  "subtitleEn": "For English learners who think in Chinese numbers: estimate the size first, regroup four digits into three, then write the whole quantity in English.",
  "cards": [
    {"id": "e1", "n": 150000, "say": "这座小城有十五万人。", "approx": null, "unit": ["people", "residents", "inhabitants"], "model": "one hundred and fifty thousand people", "kc": "kt:en-lex-numbers-data"},
    {"id": "e2", "n": 100000000, "say": "这部电影的票房是一亿元。", "approx": null, "unit": ["yuan", "rmb"], "model": "one hundred million yuan", "kc": "kt:en-lex-numbers-data"},
    {"id": "e3", "n": 2300000000, "say": "这家公司今年的预算是二十三亿元。", "approx": null, "unit": ["yuan", "rmb"], "model": "two point three billion yuan", "kc": "kt:en-lex-numbers-data"},
    {"id": "e4", "n": 30000, "say": "比赛那天来了三万多人。", "approx": "over", "unit": ["people", "fans", "spectators"], "model": "more than thirty thousand people", "kc": "kt:en-lex-numbers-data"},
    {"id": "e5", "n": 8000000, "say": "这座城市有八百多万人口。", "approx": "over", "unit": ["people", "residents", "inhabitants"], "model": "more than eight million people", "kc": "kt:en-lex-numbers-data"},
    {"id": "e6", "n": 24000000, "say": "这个国家有两千四百万辆汽车。", "approx": null, "unit": ["cars", "vehicles"], "model": "twenty-four million cars", "kc": "kt:en-lex-numbers-data"},
    {"id": "e7", "n": 1500000, "say": "这套房子卖一百五十万元。", "approx": null, "unit": ["yuan", "rmb"], "model": "one point five million yuan", "kc": "kt:en-lex-numbers-data"},
    {"id": "e8", "n": 50000, "say": "这个体育场能坐五万人。", "approx": null, "unit": ["people", "spectators", "fans"], "model": "fifty thousand people", "kc": "kt:en-lex-numbers-data"},
    {"id": "e9", "n": 100000, "say": "这个展览每年有十万左右的游客。", "approx": "about", "unit": ["visitors", "people", "tourists"], "model": "about one hundred thousand visitors", "kc": "kt:en-lex-numbers-data"},
    {"id": "e10", "n": 3500, "say": "这台电脑三千五百元。", "approx": null, "unit": ["yuan", "rmb"], "model": "three thousand five hundred yuan", "kc": "kt:en-fn-numbers"},
    {"id": "e11", "n": 12000000, "say": "这座城市有一千二百万人口。", "approx": null, "unit": ["people", "residents", "inhabitants"], "model": "twelve million people", "kc": "kt:en-lex-numbers-data"},
    {"id": "e12", "n": 650000, "say": "这本书卖了六十五万本。", "approx": null, "unit": ["copies", "books"], "model": "six hundred and fifty thousand copies", "kc": "kt:en-lex-numbers-data"},
    {"id": "e13", "n": 450000000, "say": "这个网站有4.5亿用户。", "approx": null, "unit": ["users", "people"], "model": "four hundred and fifty million users", "kc": "kt:en-lex-numbers-data"},
    {"id": "e14", "n": 200, "say": "我们学校有两百名学生。", "approx": null, "unit": ["students", "pupils"], "model": "two hundred students", "kc": "kt:en-fn-numbers"},
    {"id": "e15", "n": 12000, "say": "我今天走了一万二千步。", "approx": null, "unit": ["steps"], "model": "twelve thousand steps", "kc": "kt:en-fn-numbers"},
    {"id": "e16", "n": 1000000, "say": "这个小游戏有一百万人玩过。", "approx": null, "unit": ["people", "players"], "model": "one million people", "kc": "kt:en-lex-numbers-data"}
  ],
  "childCards": [
    {"id": "ec1", "n": 300, "say": "三百", "approx": null, "unit": null, "model": "three hundred", "kc": "kt:en-fn-numbers"},
    {"id": "ec2", "n": 1000, "say": "一千", "approx": null, "unit": null, "model": "one thousand", "kc": "kt:en-fn-numbers"},
    {"id": "ec3", "n": 2500, "say": "两千五百", "approx": null, "unit": null, "model": "two thousand five hundred", "kc": "kt:en-fn-numbers"},
    {"id": "ec4", "n": 5000, "say": "五千", "approx": null, "unit": null, "model": "five thousand", "kc": "kt:en-fn-numbers"},
    {"id": "ec5", "n": 10000, "say": "一万", "approx": null, "unit": null, "model": "ten thousand", "kc": "kt:en-fn-numbers"}
  ],
  "rule": [
    {"id": "r1", "q": "十五万怎么说？", "qEn": "How do you say 十五万?", "show": "150,000", "showLang": null,
     "opts": ["one hundred and fifty thousand", "one point five million", "fifteen thousand", "fifteen ten thousand"], "ok": [0],
     "why": "150,000 是三位分组里的 150 个 thousand。one point five million 是 1,500,000，大了十倍；英语没有 ten thousand 这一级的单位。", "whyEn": "150,000 is 150 thousands in groups of three. One point five million is 1,500,000, ten times too big; English has no single unit for 10,000."},
    {"id": "r2", "q": "这是年份，怎么读？", "qEn": "This is a year. How is it read?", "show": "1998", "showLang": null,
     "opts": ["nineteen ninety-eight", "one thousand nine hundred and ninety-eight", "nineteen nine eight"], "ok": [0],
     "why": "年份一般两位两位读，不按数量读。规则管不到这里。", "whyEn": "Years are usually read in pairs, not as a quantity. The grouping rule does not apply."},
    {"id": "r3", "q": "这是电话号码（虚构），怎么读？", "qEn": "This is a (made-up) phone number. How is it read?", "show": "6215 3087", "showLang": null,
     "opts": ["six two one five, three oh eight seven", "sixty-two million fifteen thousand three hundred and eighty-seven", "six thousand two hundred and fifteen, three thousand and eighty-seven"], "ok": [0],
     "why": "电话号码一位一位读（0 常读作 oh），不是一个数量。", "whyEn": "Phone numbers are read digit by digit (0 is often oh); they are not a quantity."},
    {"id": "r4", "q": "“打了三成折扣”里的“三成”是多少？", "qEn": "In “打了三成折扣”, what is 三成?", "show": "三成", "showLang": "zh-CN",
     "opts": ["thirty percent", "three percent", "three tenths of a percent"], "ok": [0],
     "why": "一成是十分之一，三成 = 30%。percent 不加 -s。", "whyEn": "一成 is one tenth, so 三成 = 30%. Percent takes no -s."},
    {"id": "r5", "q": "没有具体数字时，空里填什么？", "qEn": "There is no exact number. What goes in the gap?", "show": "___ people use this app every day.", "showLang": "en",
     "opts": ["Millions of", "Million of", "Three millions of"], "ok": [0],
     "why": "不说具体多少时用 millions of；有具体数字就不加 -s 也不加 of。", "whyEn": "Without a specific number: millions of. With a number: no -s and no of."},
    {"id": "r6", "q": "哪一个对？", "qEn": "Which is right?", "show": "3,000,000 people", "showLang": null,
     "opts": ["three million people", "three millions people", "three million of people"], "ok": [0],
     "why": "前面有具体数字（three），million 不加 -s，后面直接接名词。", "whyEn": "After a specific number (three), million takes no -s and the noun follows directly."},
    {"id": "r7", "q": "小数怎么读？", "qEn": "How is the decimal read?", "show": "0.25", "showLang": null,
     "opts": ["zero point two five", "zero point twenty-five", "twenty-five point zero"], "ok": [0],
     "why": "小数点后面一位一位读。", "whyEn": "After the point, read digit by digit."},
    {"id": "r8", "q": "九千要换算吗？", "qEn": "Does 九千 need converting?", "show": "九千", "showLang": "zh-CN",
     "opts": ["nine thousand", "zero point nine ten thousand", "ninety hundred"], "ok": [0],
     "why": "不到一万的数两种语言都有“千”，直接对应，不用换算。", "whyEn": "Under 10,000 both languages have a word for thousand; it maps directly."},
    {"id": "r9", "q": "一百零五元怎么说？", "qEn": "How do you say 一百零五元?", "show": "105", "showLang": null,
     "opts": ["one hundred and five yuan", "one hundred and fifty yuan", "one hundred zero five yuan"], "ok": [0],
     "why": "“零”在英语里不读出来；一百五（150）和一百零五（105）是两个数。", "whyEn": "零 is not said in English; 一百五 (150) and 一百零五 (105) are different numbers."},
    {"id": "r10", "q": "哪一个对？", "qEn": "Which is right?", "show": "200 students", "showLang": null,
     "opts": ["two hundred students", "two hundreds students", "two hundreds of students"], "ok": [0],
     "why": "有具体数字时 hundred 不加 -s。", "whyEn": "After a specific number, hundred takes no -s."},
    {"id": "r11", "q": "三分之一怎么说？", "qEn": "How do you say 三分之一?", "show": "1/3", "showLang": null,
     "opts": ["one third", "three one", "three of one"], "ok": [0],
     "why": "英语先说分子再说分母（one third），中文先说分母（三分之一）。", "whyEn": "English says the top number first (one third); Chinese says the bottom number first (三分之一)."},
    {"id": "r12", "q": "一亿是多少？", "qEn": "What is 一亿?", "show": "一亿", "showLang": "zh-CN",
     "opts": ["one hundred million", "one billion", "ten million"], "ok": [0],
     "why": "一亿 = 100,000,000 = one hundred million。one billion 是十亿。", "whyEn": "一亿 = 100,000,000 = one hundred million. One billion is 十亿."}
  ],
  "review": [
    "e13 的原句写作“4.5亿”（带阿拉伯数字），新闻里常见，但第 1 步就不是纯读法了",
    "British 读法 one hundred and fifty thousand 和 American 读法 one hundred fifty thousand 都接受；页面没有区分",
    "电话号码里 0 读作 oh 还是 zero，两种都常见；题目只给了 oh",
    "1998 以外的年份（2000 年以后读 two thousand and five 还是 twenty oh five）没有出题",
    "dozens of / hundreds of 只出了 millions of 一题"
  ]
};
KT_DATA["number-system-map-zh"] = {
  "id": "number-system-map-zh",
  "lang": "zh",
  "src": "en",
  "speech": "zh-CN",
  "title": "thousand、million 换成 万、亿",
  "titleEn": "From thousand and million to 万 and 亿",
  "subtitle": "给说英语的中文学习者：先估量级，再把三位一组换成四位一组，最后用中文写出整个数量（量词、多、左右都要对）。",
  "subtitleEn": "For learners of Chinese who think in English numbers: estimate the size first, regroup three digits into four, then write the whole quantity in Chinese (measure word, 多 and 左右 included).",
  "cards": [
    {"id": "z1", "n": 150000, "say": "The town has one hundred and fifty thousand people.", "approx": null, "unit": ["人", "居民"], "model": "十五万人", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z2", "n": 2400000, "say": "Two point four million people live in the city.", "approx": null, "unit": ["人", "居民"], "model": "两百四十万人", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z3", "n": 30000, "say": "More than thirty thousand fans came to the match.", "approx": "over", "unit": ["人", "名球迷", "个球迷", "球迷", "名观众", "观众"], "model": "三万多名球迷", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z4", "n": 100000, "say": "About one hundred thousand visitors come every year.", "approx": "about", "unit": ["游客", "名游客", "人", "人次"], "model": "十万左右的游客", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z5", "n": 1000000000, "say": "The project cost one billion yuan.", "approx": null, "unit": ["元", "块", "块钱", "人民币"], "model": "十亿元", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z6", "n": 2300000000, "say": "The company earned two point three billion dollars.", "approx": null, "unit": ["美元"], "model": "二十三亿美元", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z7", "n": 8500000, "say": "The city has eight and a half million people.", "approx": null, "unit": ["人", "居民"], "model": "八百五十万人", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z8", "n": 105, "say": "This bag costs one hundred and five yuan.", "approx": null, "unit": ["元", "块", "块钱"], "model": "一百零五块", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z9", "n": 25000, "say": "The car has done twenty-five thousand kilometres.", "approx": null, "unit": ["公里"], "model": "两万五千公里", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z10", "n": 600000, "say": "Six hundred thousand copies were sold.", "approx": null, "unit": ["本", "册", "份"], "model": "六十万本", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z11", "n": 12000000, "say": "Twelve million people watched the final.", "approx": null, "unit": ["人", "观众", "名观众"], "model": "一千二百万人", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z12", "n": 45000, "say": "The stadium holds forty-five thousand people.", "approx": null, "unit": ["人", "名观众", "个座位", "座位"], "model": "四万五千人", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z13", "n": 380000000, "say": "The app has three hundred and eighty million users.", "approx": null, "unit": ["用户", "名用户", "个用户", "人"], "model": "三亿八千万用户", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z14", "n": 2000, "say": "The flight costs about two thousand yuan.", "approx": "about", "unit": ["元", "块", "块钱"], "model": "两千块左右", "kc": "kt:zh-numbers-large-approx"},
    {"id": "z15", "n": 1000000, "say": "More than one million people signed up.", "approx": "over", "unit": ["人", "名", "个人"], "model": "一百多万人", "kc": "kt:zh-numbers-large-approx"}
  ],
  "childCards": [
    {"id": "zc1", "n": 300, "say": "three hundred", "approx": null, "unit": null, "model": "三百", "kc": "kt:zh-numbers-large-approx"},
    {"id": "zc2", "n": 2000, "say": "two thousand", "approx": null, "unit": null, "model": "两千", "kc": "kt:zh-numbers-large-approx"},
    {"id": "zc3", "n": 5500, "say": "five thousand five hundred", "approx": null, "unit": null, "model": "五千五百", "kc": "kt:zh-numbers-large-approx"},
    {"id": "zc4", "n": 10000, "say": "ten thousand", "approx": null, "unit": null, "model": "一万", "kc": "kt:zh-numbers-large-approx"},
    {"id": "zc5", "n": 1005, "say": "one thousand and five", "approx": null, "unit": null, "model": "一千零五", "kc": "kt:zh-numbers-large-approx"}
  ],
  "rule": [
    {"id": "q1", "q": "100,000 用中文怎么说？", "qEn": "How do you say 100,000 in Chinese?", "show": "100,000", "showLang": null,
     "opts": ["十万", "一百千", "一千百"], "ok": [0],
     "why": "中文四位一级：10|0000 是十个万。没有“一百千”的说法。", "whyEn": "Chinese groups by four: 10|0000 is ten 万. There is no *一百千."},
    {"id": "q2", "q": "30,000 用中文怎么说？", "qEn": "How do you say 30,000 in Chinese?", "show": "30,000", "showLang": null,
     "opts": ["三万", "三十千", "三千十"], "ok": [0],
     "why": "3|0000 是三个万。“三十千”是按英语三位一组直译。", "whyEn": "3|0000 is three 万. *三十千 is a word-for-word copy of the English grouping."},
    {"id": "q3", "q": "“三成”是多少？", "qEn": "What is 三成?", "show": "三成", "showLang": "zh-CN",
     "opts": ["30%", "3%", "3"], "ok": [0],
     "why": "一成是十分之一，三成 = 30%，也可以说百分之三十。", "whyEn": "一成 is one tenth, so 三成 = 30%, also 百分之三十."},
    {"id": "q4", "q": "30% 怎么读？", "qEn": "How is 30% read?", "show": "30%", "showLang": null,
     "opts": ["百分之三十", "三十百分", "三十分之百"], "ok": [0],
     "why": "中文先说整体（百分之），再说部分（三十）。", "whyEn": "Chinese says the whole first (百分之), then the part (三十)."},
    {"id": "q5", "q": "1/3 怎么读？", "qEn": "How is 1/3 read?", "show": "1/3", "showLang": null,
     "opts": ["三分之一", "一分之三", "一三分"], "ok": [0],
     "why": "先说分母，再说分子：三分之一。和英语 one third 的顺序相反。", "whyEn": "The bottom number comes first: 三分之一, the opposite order to one third."},
    {"id": "q6", "q": "105 怎么读？", "qEn": "How is 105 read?", "show": "105", "showLang": null,
     "opts": ["一百零五", "一百五", "一百五十"], "ok": [0],
     "why": "中间空了一位要读“零”。“一百五”是 150 的口语说法。", "whyEn": "An empty place in the middle is read as 零. 一百五 is the spoken short form of 150."},
    {"id": "q7", "q": "“一百五”是多少？", "qEn": "What number is 一百五?", "show": "一百五", "showLang": "zh-CN",
     "opts": ["150", "105", "15"], "ok": [0],
     "why": "最后一位省掉的单位是“十”：一百五 = 一百五十。", "whyEn": "The dropped unit at the end is 十: 一百五 = 一百五十."},
    {"id": "q8", "q": "这是年份，怎么读？", "qEn": "This is a year. How is it read?", "show": "2026年", "showLang": null,
     "opts": ["二〇二六年", "两千零二十六年", "二十二十六年"], "ok": [0],
     "why": "中文年份一位一位读，0 读“零”（写作〇或零）。规则管不到这里。", "whyEn": "Chinese years are read digit by digit, 0 as 零 (written 〇 or 零). The grouping rule does not apply."},
    {"id": "q9", "q": "“more than 30,000 people” 怎么说？", "qEn": "How do you say “more than 30,000 people”?", "show": "more than 30,000 people", "showLang": "en",
     "opts": ["三万多人", "三多万人", "三万人多"], "ok": [0],
     "why": "“多”放在“万”后面、名词前面。“三多万”不对。", "whyEn": "多 goes after 万 and before the noun. *三多万 is wrong."},
    {"id": "q10", "q": "“about 100,000” 怎么说？", "qEn": "How do you say “about 100,000”?", "show": "about 100,000", "showLang": "en",
     "opts": ["十万左右", "左右十万", "十左右万"], "ok": [0],
     "why": "“左右”放在数后面；也可以把“大约”放在前面：大约十万。", "whyEn": "左右 goes after the number; or put 大约 in front: 大约十万."},
    {"id": "q11", "q": "“more than ten students” 怎么说？", "qEn": "How do you say “more than ten students”?", "show": "more than ten students", "showLang": "en",
     "opts": ["十多个学生", "十个多学生", "多十个学生"], "ok": [0],
     "why": "十以上的整十数，“多”在数和量词之间：十多个。", "whyEn": "With round tens, 多 goes between the number and the measure word: 十多个."},
    {"id": "q12", "q": "9,000 要换成“万”吗？", "qEn": "Does 9,000 need 万?", "show": "9,000", "showLang": null,
     "opts": ["九千", "零点九万", "九十百"], "ok": [0],
     "why": "不到一万的数两种语言都有“千”，直接说九千。", "whyEn": "Under 10,000 both languages have thousand; just say 九千."},
    {"id": "q13", "q": "0.25 怎么读？", "qEn": "How is 0.25 read?", "show": "0.25", "showLang": null,
     "opts": ["零点二五", "零点二十五", "二十五点零"], "ok": [0],
     "why": "小数点后一位一位读。", "whyEn": "After 点, read digit by digit."}
  ],
  "review": [
    "二千／两千：千、万、亿前多数人说“两”，“二千”在某些说法里也有；页面接受二，只给提醒，请老师确认是否要判错",
    "“二万”在部分地区口语里出现；同上，只提醒",
    "电话号码里的“一”读作 yāo，没有出题（读音题这里不判断）",
    "两百四十万 / 二百四十万 都接受；一千二百万 / 一千两百万 都接受",
    "“三万多名球迷”中量词“名”与“个”都接受；量词是否得体没有判断",
    "2026年 的写法 二〇二六 与 二零二六 都常见，题目只给了 〇"
  ]
};
