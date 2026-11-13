/* Data packs for blocks/reading-select.html (prim:reading-select): reading-select-ja, reading-select-zh.
 * (No English pack: the primitive is not bound to any English KC in curriculum/en/primitive-map.json.)
 *
 * Pack format
 *   id, lang, speech, title/titleEn, subtitle/subtitleEn, kcs[]
 *   bases    { basisId: {label, labelEn, reverse?} }  the locked list of reasons. reverse = "没有规律，要单独记".
 *   groups   { tag: {label, labelEn} }
 *   fam      { "字或词": { reading: "words with this reading", ... }, ... }  shown when a learner picks a reading
 *            (“这个读音出现在……这些词里”) and as hint 3. A reading missing here = not a reading of it in common words.
 *            famEn: English versions of the few entries that carry a Chinese note in brackets (map falls back per key).
 *   passages [{id, tag, title, titleEn, tokens}]
 *            tokens: "plain text" | {"t": "山田", "r": "やまだ"} (fixed ruby) | {"s": slot}
 *            slot  {id, t (text in the slot), f (key into fam; default t), r [reading options], ok [right readings],
 *                   b [acceptable bases], hl [nBefore, nAfter] characters of the neighbouring text that decide the
 *                   reading (hint 2), kc, note?/noteEn? (shown after answering; e.g. both readings are right)}
 *            Per character, the most frequent reading is the right answer in at most half of the slots (check.rules).
 *   shift    [{id, ref: tokens (the same form with its reading shown), tokens: tokens with one slot}]  step 2
 *   make     [{c (character or form), readings [..], words [[word, reading of c in it, [bases]]], hint, hintEn}]  step 3:
 *            a learner's own sentence is checked only where an occurrence sits inside one of these words.
 *   review   items a native teacher should check.
 */
KT_DATA["reading-select-ja"] = {
  "id": "reading-select-ja", "lang": "ja", "speech": "ja-JP",
  "title": "按语境选读音（日语）", "titleEn": "Choosing the reading in context (Japanese)",
  "subtitle": "同一个汉字有几种读法。先看它在什么词里、后面接什么、前面是什么数字，再定读音，并说出依据。", "subtitleEn": "One kanji, several readings. Look at the word it sits in, what follows it and any number before it, then choose the reading and say why.",
  "kcs": ["kt:ja-kanji-system", "kt:ja-kanji-n5", "kt:ja-deictic-days", "kt:ja-sound-rendaku", "kt:ja-kanji-n2", "kt:ja-kanji-joyo", "kt:ja-lex-nature-disaster"],
  "bases": {
    "pos": {"label": "单独成词，或后面有送假名（多用训读）", "labelEn": "A word on its own, or followed by okurigana (usually kun)"},
    "word": {"label": "在汉字连成的词里（多用音读）", "labelEn": "Part of a kanji compound (usually on)"},
    "counter": {"label": "前面的数字、后面的量词", "labelEn": "The number before it / the counter after it"},
    "sound": {"label": "前后的音（连浊、促音）", "labelEn": "The sounds around it (rendaku, small っ)"},
    "meaning": {"label": "这里的意思（同一个词有两个意思）", "labelEn": "The meaning here (one written word, two meanings)"},
    "memo": {"label": "没有规律，要单独记（熟字训等）", "labelEn": "No rule: learn it as it is (jukujikun etc.)", "reverse": true}
  },
  "groups": {
    "kanji": {"label": "音读和训读、日期和数字", "labelEn": "On and kun, dates and numbers"},
    "sound": {"label": "连浊和促音", "labelEn": "Rendaku and small っ"},
    "word": {"label": "熟字训、同形词、灾害词", "labelEn": "Jukujikun, one spelling two words, disaster words"}
  },
  "fam": {
    "生": {"せい": "学生、先生、生活", "しょう": "一生", "なま": "生ビール、生野菜", "う": "生まれる", "い": "生きる"},
    "行": {"い": "行く、行きます", "こう": "銀行、旅行", "ぎょう": "行列、一行（いちぎょう）", "おこな": "行う"},
    "上": {"うえ": "上、机の上", "じょう": "以上、屋上", "あ": "上がる、上げる", "うわ": "上着"},
    "人": {"ひと": "人、あの人", "じん": "日本人、外国人", "にん": "三人、五人、人気"},
    "今日": {"きょう": "今日は月曜日です", "こんにち": "今日の社会、こんにちは"},
    "四月": {"しがつ": "四月"},
    "一日": {"ついたち": "四月一日（日期）", "いちにち": "一日中、一日休む"},
    "明日": {"あした": "明日（口语）", "あさって": "明後日"},
    "一人": {"ひとり": "一人、一人で"},
    "四日": {"よっか": "四日（日期、天数）"},
    "今年": {"ことし": "今年"},
    "九月": {"くがつ": "九月"},
    "本棚": {"ほんだな": "本棚"},
    "手紙": {"てがみ": "手紙"},
    "紙": {"かみ": "紙（单用）", "がみ": "手紙、折り紙（在复合词后面）"},
    "合鍵": {"あいかぎ": "合鍵"},
    "大風": {"おおかぜ": "大風"},
    "雨傘": {"あまがさ": "雨傘"},
    "学校": {"がっこう": "学校"},
    "学生": {"がくせい": "学生"},
    "発表": {"はっぴょう": "発表"},
    "発音": {"はつおん": "発音"},
    "一番": {"いちばん": "一番", "いっぱん": "一般（另一个词）"},
    "結果": {"けっか": "結果"},
    "結論": {"けつろん": "結論"},
    "一緒": {"いっしょ": "一緒"},
    "大人": {"おとな": "大人", "だいじん": "大臣（另一个词）"},
    "土産": {"みやげ": "お土産"},
    "生物": {"なまもの": "生物（生鲜食品）", "せいぶつ": "生物（生物学）"},
    "大学": {"だいがく": "大学"},
    "地震": {"じしん": "地震"},
    "地下": {"ちか": "地下、地下鉄"},
    "津波": {"つなみ": "津波"},
    "台風": {"たいふう": "台風"}
  },
  "famEn": {
    "一日": {"ついたち": "四月一日 (a date)", "いちにち": "一日中、一日休む"},
    "明日": {"あした": "明日 (spoken)", "あさって": "明後日"},
    "四日": {"よっか": "四日 (a date, or four days)"},
    "紙": {"かみ": "紙 (on its own)", "がみ": "手紙、折り紙 (after another word in a compound)"},
    "一番": {"いちばん": "一番", "いっぱん": "一般 (a different word)"},
    "大人": {"おとな": "大人", "だいじん": "大臣 (a different word)"},
    "生物": {"なまもの": "生物 (fresh food)", "せいぶつ": "生物 (living things, biology)"}
  },
  "passages": [
    {"id": "ja1", "tag": "kanji", "title": "自我介绍", "titleEn": "About me",
     "tokens": [{"s": {"id": "ja1-1", "t": "生", "r": ["う", "せい", "なま"], "ok": ["う"], "b": ["pos"], "hl": [0, 2], "kc": "kt:ja-kanji-system"}}, "まれは東京ですが、学", {"s": {"id": "ja1-2", "t": "生", "r": ["う", "せい", "なま"], "ok": ["せい"], "b": ["word"], "hl": [1, 0], "kc": "kt:ja-kanji-system"}},
       "のころは大阪にいました。週末は友達と", {"s": {"id": "ja1-3", "t": "生", "r": ["う", "せい", "なま"], "ok": ["なま"], "b": ["pos", "word"], "hl": [0, 3], "kc": "kt:ja-kanji-system"}}, "ビールを飲みに",
       {"s": {"id": "ja1-4", "t": "行", "r": ["い", "こう", "ぎょう"], "ok": ["い"], "b": ["pos"], "hl": [0, 3], "kc": "kt:ja-kanji-n5"}}, "きました。駅の前の銀", {"s": {"id": "ja1-5", "t": "行", "r": ["い", "こう", "ぎょう"], "ok": ["こう"], "b": ["word"], "hl": [1, 0], "kc": "kt:ja-kanji-n5"}},
       "の", {"s": {"id": "ja1-6", "t": "上", "r": ["うえ", "じょう", "あ"], "ok": ["うえ"], "b": ["pos"], "hl": [1, 1], "kc": "kt:ja-kanji-n5"}}, "の店です。"]},
    {"id": "ja2", "tag": "kanji", "title": "旅行的日期", "titleEn": "Travel dates",
     "tokens": [{"s": {"id": "ja2-1", "t": "今日", "r": ["きょう", "こんにち", "いまにち"], "ok": ["きょう"], "b": ["memo"], "hl": [0, 1], "kc": "kt:ja-deictic-days"}}, "は",
       {"s": {"id": "ja2-2", "t": "四月", "r": ["しがつ", "よんがつ", "よつき"], "ok": ["しがつ"], "b": ["counter", "memo"], "hl": [0, 0], "kc": "kt:ja-kanji-n5"}},
       {"s": {"id": "ja2-3", "t": "一日", "r": ["ついたち", "いちにち", "ひとひ"], "ok": ["ついたち"], "b": ["counter", "memo"], "hl": [2, 0], "kc": "kt:ja-kanji-n5"}}, "です。",
       {"s": {"id": "ja2-4", "t": "明日", "r": ["あした", "めいにち", "あさって"], "ok": ["あした"], "b": ["memo"], "hl": [0, 0], "kc": "kt:ja-deictic-days", "note": "あす 也对，比 あした 正式。", "noteEn": "あす is also right; it is more formal than あした."}}, "から",
       {"s": {"id": "ja2-5", "t": "一人", "r": ["ひとり", "いちにん", "いちじん"], "ok": ["ひとり"], "b": ["counter", "memo"], "hl": [0, 1], "kc": "kt:ja-kanji-n5"}}, "で",
       {"s": {"id": "ja2-6", "t": "四日", "r": ["よっか", "よんにち", "しにち"], "ok": ["よっか"], "b": ["counter", "memo"], "hl": [0, 1], "kc": "kt:ja-kanji-n5"}}, "間、旅行します。",
       {"s": {"id": "ja2-7", "t": "今年", "r": ["ことし", "こんねん", "いまとし"], "ok": ["ことし"], "b": ["memo"], "hl": [0, 0], "kc": "kt:ja-deictic-days"}}, "の",
       {"s": {"id": "ja2-8", "t": "九月", "r": ["くがつ", "きゅうがつ", "ここのつき"], "ok": ["くがつ"], "b": ["counter", "memo"], "hl": [0, 0], "kc": "kt:ja-kanji-n5"}}, "にも行きました。"]},
    {"id": "ja3", "tag": "sound", "title": "出门前", "titleEn": "Before going out",
     "tokens": [{"s": {"id": "ja3-1", "t": "本棚", "r": ["ほんだな", "ほんたな"], "ok": ["ほんだな"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-sound-rendaku"}}, "の上に",
       {"s": {"id": "ja3-2", "t": "手紙", "r": ["てがみ", "てかみ"], "ok": ["てがみ"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-sound-rendaku"}}, "と",
       {"s": {"id": "ja3-3", "t": "合鍵", "r": ["あいかぎ", "あいがぎ"], "ok": ["あいかぎ"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-sound-rendaku", "note": "后一个词 かぎ 里已经有浊音 ぎ，所以不连浊。", "noteEn": "The second part かぎ already has a voiced ぎ, so there is no rendaku."}}, "があります。外は",
       {"s": {"id": "ja3-4", "t": "大風", "r": ["おおかぜ", "おおがぜ"], "ok": ["おおかぜ"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-sound-rendaku", "note": "かぜ 里已经有浊音 ぜ，不连浊。", "noteEn": "かぜ already has a voiced ぜ, so there is no rendaku."}}, "なので、",
       {"s": {"id": "ja3-5", "t": "雨傘", "r": ["あまがさ", "あめかさ", "あめがさ"], "ok": ["あまがさ"], "b": ["sound", "memo"], "hl": [0, 0], "kc": "kt:ja-sound-rendaku", "note": "かさ 连浊成 がさ；前面的 あめ 也变成 あま，这一点要单独记。", "noteEn": "かさ becomes がさ (rendaku), and あめ also changes to あま, which has to be learned."}}, "を持っていきましょう。"]},
    {"id": "ja4", "tag": "sound", "title": "发表会", "titleEn": "The presentation",
     "tokens": [{"s": {"id": "ja4-1", "t": "学校", "r": ["がっこう", "がくこう"], "ok": ["がっこう"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "の",
       {"s": {"id": "ja4-2", "t": "学生", "r": ["がくせい", "がっせい"], "ok": ["がくせい"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "が",
       {"s": {"id": "ja4-3", "t": "発表", "r": ["はっぴょう", "はつひょう"], "ok": ["はっぴょう"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "をしました。",
       {"s": {"id": "ja4-4", "t": "発音", "r": ["はつおん", "はっとん"], "ok": ["はつおん"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "がきれいで、",
       {"s": {"id": "ja4-5", "t": "一番", "r": ["いちばん", "いっぱん"], "ok": ["いちばん"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "よかったです。",
       {"s": {"id": "ja4-6", "t": "結果", "r": ["けっか", "けつか"], "ok": ["けっか"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "より",
       {"s": {"id": "ja4-7", "t": "結論", "r": ["けつろん", "けっろん"], "ok": ["けつろん"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "を先に話して、",
       {"s": {"id": "ja4-8", "t": "一緒", "r": ["いっしょ", "いちしょ"], "ok": ["いっしょ"], "b": ["sound"], "hl": [0, 0], "kc": "kt:ja-kanji-n2"}}, "に考えましょう。"]},
    {"id": "ja5", "tag": "word", "title": "寄给奶奶的东西", "titleEn": "A parcel for grandma",
     "tokens": [{"s": {"id": "ja5-1", "t": "大人", "r": ["おとな", "だいじん", "おおひと"], "ok": ["おとな"], "b": ["memo"], "hl": [0, 0], "kc": "kt:ja-kanji-joyo"}}, "になって、祖母にお",
       {"s": {"id": "ja5-2", "t": "土産", "r": ["みやげ", "どさん"], "ok": ["みやげ"], "b": ["memo"], "hl": [1, 0], "kc": "kt:ja-kanji-joyo"}}, "を送りました。中身は",
       {"s": {"id": "ja5-3", "t": "生物", "r": ["なまもの", "せいぶつ"], "ok": ["なまもの"], "b": ["meaning"], "hl": [0, 12], "kc": "kt:ja-kanji-n2"}}, "なので、早く食べてください。妹は",
       {"s": {"id": "ja5-4", "t": "大学", "r": ["だいがく", "おおがく"], "ok": ["だいがく"], "b": ["word"], "hl": [0, 0], "kc": "kt:ja-kanji-n5"}}, "で",
       {"s": {"id": "ja5-5", "t": "生物", "r": ["なまもの", "せいぶつ"], "ok": ["せいぶつ"], "b": ["meaning"], "hl": [3, 7], "kc": "kt:ja-kanji-n2"}}, "を勉強しています。"]},
    {"id": "ja6", "tag": "word", "title": "地震以后", "titleEn": "After the earthquake",
     "tokens": ["昨日の夜、大きい", {"s": {"id": "ja6-1", "t": "地震", "r": ["じしん", "ちしん"], "ok": ["じしん"], "b": ["word", "memo"], "hl": [0, 0], "kc": "kt:ja-lex-nature-disaster", "note": "地 有 ち 和 じ 两个音读：地震 じしん，地下 ちか。用哪一个要按词记。", "noteEn": "地 has two on readings, ち and じ: 地震 じしん, 地下 ちか. Which one is used has to be learned per word."}}, "がありました。海の近くでは",
       {"s": {"id": "ja6-2", "t": "津波", "r": ["つなみ", "しんぱ"], "ok": ["つなみ"], "b": ["memo", "pos"], "hl": [0, 0], "kc": "kt:ja-lex-nature-disaster"}}, "に気をつけてください。",
       {"s": {"id": "ja6-3", "t": "台風", "r": ["たいふう", "だいふう"], "ok": ["たいふう"], "b": ["word", "memo"], "hl": [0, 0], "kc": "kt:ja-lex-nature-disaster"}}, "も来るので、",
       {"s": {"id": "ja6-4", "t": "地下", "r": ["ちか", "じか"], "ok": ["ちか"], "b": ["word", "memo"], "hl": [0, 0], "kc": "kt:ja-lex-nature-disaster"}}, "の店は休みです。"]}
  ],
  "shift": [
    {"id": "sh-sei", "ref": ["学", {"t": "生", "r": "せい"}, "です。"], "tokens": ["一", {"s": {"id": "sh-sei-b", "t": "生", "r": ["せい", "しょう", "う"], "ok": ["しょう"], "b": ["word", "memo"], "hl": [1, 0], "kc": "kt:ja-kanji-system"}}, "忘れません。"]},
    {"id": "sh-nama", "ref": [{"t": "生", "r": "なま"}, "ビール"], "tokens": [{"s": {"id": "sh-nama-b", "t": "生", "r": ["なま", "う", "せい"], "ok": ["う"], "b": ["pos"], "hl": [0, 3], "kc": "kt:ja-kanji-system"}}, "まれた町"]},
    {"id": "sh-kou", "ref": ["銀", {"t": "行", "r": "こう"}], "tokens": ["旅", {"s": {"id": "sh-kou-b", "t": "行", "r": ["こう", "い", "ぎょう"], "ok": ["こう"], "b": ["word"], "hl": [1, 0], "kc": "kt:ja-kanji-n5"}}, "に出ます。"]},
    {"id": "sh-gyou", "ref": [{"t": "行", "r": "い"}, "きます"], "tokens": [{"s": {"id": "sh-gyou-b", "t": "行", "r": ["い", "こう", "ぎょう"], "ok": ["ぎょう"], "b": ["word", "memo"], "hl": [0, 1], "kc": "kt:ja-kanji-system"}}, "列ができています。"]},
    {"id": "sh-a", "ref": ["机の", {"t": "上", "r": "うえ"}], "tokens": ["エレベーターで", {"s": {"id": "sh-a-b", "t": "上", "r": ["うえ", "あ", "じょう"], "ok": ["あ"], "b": ["pos"], "hl": [0, 3], "kc": "kt:ja-kanji-n5"}}, "がります。"]},
    {"id": "sh-jou", "ref": ["以", {"t": "上", "r": "じょう"}], "tokens": ["屋", {"s": {"id": "sh-jou-b", "t": "上", "r": ["じょう", "うえ", "あ"], "ok": ["じょう"], "b": ["word"], "hl": [1, 0], "kc": "kt:ja-kanji-system"}}, "でお昼を食べます。"]},
    {"id": "sh-ichinichi", "ref": ["四月", {"t": "一日", "r": "ついたち"}], "tokens": [{"s": {"id": "sh-ichinichi-b", "t": "一日", "r": ["ついたち", "いちにち"], "ok": ["いちにち"], "b": ["meaning", "counter"], "hl": [0, 1], "kc": "kt:ja-kanji-n5"}}, "中、雨でした。"]},
    {"id": "sh-konnichi", "ref": [{"t": "今日", "r": "きょう"}, "は月曜日です。"], "tokens": [{"s": {"id": "sh-konnichi-b", "t": "今日", "r": ["きょう", "こんにち"], "ok": ["こんにち", "きょう"], "b": ["memo", "meaning"], "hl": [0, 5], "kc": "kt:ja-deictic-days", "note": "两种都对：こんにち 是书面的“如今、当今”，きょう 是“今天”。语体和意思不同，读法没有规则可推。", "noteEn": "Both are right: こんにち is formal “nowadays”, きょう is “today”. Register and meaning differ; no rule gives the reading."}}, "の日本では、高齢者が増えています。"]},
    {"id": "sh-kami", "ref": ["手", {"t": "紙", "r": "がみ"}], "tokens": [{"s": {"id": "sh-kami-b", "t": "紙", "r": ["かみ", "がみ"], "ok": ["かみ"], "b": ["sound", "pos"], "hl": [0, 3], "kc": "kt:ja-sound-rendaku"}}, "をください。"]},
    {"id": "sh-jin", "ref": ["三", {"t": "人", "r": "にん"}], "tokens": ["日本", {"s": {"id": "sh-jin-b", "t": "人", "r": ["にん", "じん", "ひと"], "ok": ["じん"], "b": ["word", "memo"], "hl": [2, 0], "kc": "kt:ja-kanji-system"}}, "の友達"]},
    {"id": "sh-jin2", "ref": ["日本", {"t": "人", "r": "じん"}], "tokens": ["外国", {"s": {"id": "sh-jin2-b", "t": "人", "r": ["じん", "にん", "ひと"], "ok": ["じん"], "b": ["word"], "hl": [2, 0], "kc": "kt:ja-kanji-system"}}, "の先生"]}
  ],
  "make": [
    {"c": "生", "readings": ["せい", "しょう", "なま", "う", "い"], "hint": "例：学生のころ、生ビールを…", "hintEn": "e.g. 学生のころ、生ビールを…",
     "words": [["学生", "せい", ["word"]], ["先生", "せい", ["word"]], ["生活", "せい", ["word"]], ["一生", "しょう", ["word", "memo"]], ["生ビール", "なま", ["pos", "word"]], ["生野菜", "なま", ["pos", "word"]], ["生まれ", "う", ["pos"]], ["生きる", "い", ["pos"]], ["生き", "い", ["pos"]]]},
    {"c": "行", "readings": ["い", "こう", "ぎょう", "おこな"], "hint": "例：銀行に行きます", "hintEn": "e.g. 銀行に行きます",
     "words": [["行く", "い", ["pos"]], ["行き", "い", ["pos"]], ["行っ", "い", ["pos"]], ["行か", "い", ["pos"]], ["銀行", "こう", ["word"]], ["旅行", "こう", ["word"]], ["行列", "ぎょう", ["word", "memo"]], ["行う", "おこな", ["pos"]], ["行い", "おこな", ["pos"]]]},
    {"c": "上", "readings": ["うえ", "じょう", "あ", "うわ"], "hint": "例：屋上に上がります", "hintEn": "e.g. 屋上に上がります",
     "words": [["の上", "うえ", ["pos"]], ["上に", "うえ", ["pos"]], ["以上", "じょう", ["word"]], ["屋上", "じょう", ["word"]], ["上がる", "あ", ["pos"]], ["上がり", "あ", ["pos"]], ["上げ", "あ", ["pos"]], ["上着", "うわ", ["word", "memo"]]]},
    {"c": "人", "readings": ["ひと", "じん", "にん"], "hint": "例：あの人は日本人です", "hintEn": "e.g. あの人は日本人です",
     "words": [["あの人", "ひと", ["pos"]], ["この人", "ひと", ["pos"]], ["日本人", "じん", ["word"]], ["外国人", "じん", ["word"]], ["中国人", "じん", ["word"]], ["三人", "にん", ["counter"]], ["五人", "にん", ["counter"]], ["人気", "にん", ["word"]]]}
  ],
  "review": [
    "明日 只列 あした 为选项；あす 也对（slot 的 note 里说明了），但不能选",
    "依据的归类（如 四月 しがつ 接受“数字和量词”或“单独记”，津波 接受“单独记”或“单独成词”）是编写者的判断，同一处常有两种说法，请老师确认可接受的依据",
    "生ビール 的 生 接受“单独成词”或“在词里”两种依据",
    "一日中 的 一日 接受“意思”或“数字量词”依据",
    "第 3 步只核对写进 make.words 里的词形（如 行っ、上がる）；其他用法记为自评",
    "契约举的例子“銀行の行長”在中文里两个“行”都读 háng，不是两种读音"
  ]
};

KT_DATA["reading-select-zh"] = {
  "id": "reading-select-zh", "lang": "zh", "speech": "zh-CN",
  "title": "按语境选读音（多音字）", "titleEn": "Choosing the reading in context (polyphones)",
  "subtitle": "一个字几种读音。先看它在什么词里、是什么词性、前面有没有数字，再定读音，并说出依据。", "subtitleEn": "One character, several readings. Look at the word it is in, what part of speech it is and whether a number comes before it, then choose the reading and say why.",
  "kcs": ["kt:zh-hanzi-l5", "kt:zh-hanzi-l6"],
  "bases": {
    "pos": {"label": "词性和意思：在这里是动词、副词还是形容词", "labelEn": "Part of speech and meaning: is it a verb, an adverb or an adjective here?"},
    "word": {"label": "所在的固定词语", "labelEn": "The fixed word it is part of"},
    "counter": {"label": "前面有数字：这里是量词", "labelEn": "A number comes before it: here it is a measure word"},
    "memo": {"label": "没有规律，要单独记（地名、口语和书面两读等）", "labelEn": "No rule: learn it as it is (place names, spoken vs written readings etc.)", "reverse": true}
  },
  "groups": {
    "l5": {"label": "五级：行、长、种、只", "labelEn": "Level 5: 行, 长, 种, 只"},
    "l6": {"label": "六级：还、重、乐、得、觉、了", "labelEn": "Level 6: 还, 重, 乐, 得, 觉, 了"}
  },
  "fam": {
    "行": {"háng": "银行、行长、行业、两行字", "xíng": "自行车、不行、步行、旅行"},
    "长": {"zhǎng": "长大、校长、成长", "cháng": "很长、长城、长短"},
    "还": {"hái": "还没、还是、还有", "huán": "还书、还钱、还给"},
    "重": {"zhòng": "重要、很重、严重", "chóng": "重新、重复、重庆"},
    "乐": {"lè": "快乐、乐观、可乐", "yuè": "音乐、乐器"},
    "种": {"zhǒng": "这种、一种、各种", "zhòng": "种树、种花"},
    "只": {"zhī": "一只猫、两只手", "zhǐ": "只有、只吃"},
    "得": {"de": "觉得、跑得快", "dé": "得到、获得、得了第一名", "děi": "我得走了"},
    "觉": {"jué": "觉得、感觉", "jiào": "睡觉、午觉"},
    "了": {"le": "走了、吃了", "liǎo": "了解、受不了"},
    "血": {"xuè": "血液、血管", "xiě": "流了点儿血（口语）"},
    "便": {"biàn": "方便、顺便", "pián": "便宜"}
  },
  "famEn": {
    "血": {"xuè": "血液、血管", "xiě": "流了点儿血 (spoken)"}
  },
  "passages": [
    {"id": "zh1", "tag": "l5", "title": "银行的行长", "titleEn": "The bank manager",
     "tokens": ["他在银", {"s": {"id": "zh1-1", "t": "行", "r": ["háng", "xíng"], "ok": ["háng"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l5"}}, "工作，是这家银行的",
       {"s": {"id": "zh1-2", "t": "行", "r": ["háng", "xíng"], "ok": ["háng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l5"}}, "长。他从小在这里",
       {"s": {"id": "zh1-3", "t": "长", "r": ["zhǎng", "cháng"], "ok": ["zhǎng"], "b": ["pos", "word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l5"}}, "大，每天走一条很",
       {"s": {"id": "zh1-4", "t": "长", "r": ["zhǎng", "cháng"], "ok": ["cháng"], "b": ["pos"], "hl": [1, 3], "kc": "kt:zh-hanzi-l5"}}, "的河边小路。"]},
    {"id": "zh2", "tag": "l5", "title": "黑板上的话", "titleEn": "Words on the blackboard",
     "tokens": ["黑板上写了两", {"s": {"id": "zh2-1", "t": "行", "r": ["háng", "xíng"], "ok": ["háng"], "b": ["counter"], "hl": [1, 1], "kc": "kt:zh-hanzi-l5"}}, "字：骑自",
       {"s": {"id": "zh2-2", "t": "行", "r": ["háng", "xíng"], "ok": ["xíng"], "b": ["word"], "hl": [1, 1], "kc": "kt:zh-hanzi-l5"}}, "车不",
       {"s": {"id": "zh2-3", "t": "行", "r": ["háng", "xíng"], "ok": ["xíng"], "b": ["word", "pos"], "hl": [1, 0], "kc": "kt:zh-hanzi-l5"}}, "，要步",
       {"s": {"id": "zh2-4", "t": "行", "r": ["háng", "xíng"], "ok": ["xíng"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l5"}}, "。"]},
    {"id": "zh3", "tag": "l5", "title": "院子里", "titleEn": "In the yard",
     "tokens": ["这", {"s": {"id": "zh3-1", "t": "种", "r": ["zhǒng", "zhòng"], "ok": ["zhǒng"], "b": ["counter"], "hl": [1, 1], "kc": "kt:zh-hanzi-l5"}}, "花很好看，我想在院子里",
       {"s": {"id": "zh3-2", "t": "种", "r": ["zhǒng", "zhòng"], "ok": ["zhòng"], "b": ["pos"], "hl": [0, 2], "kc": "kt:zh-hanzi-l5"}}, "一棵。一",
       {"s": {"id": "zh3-3", "t": "只", "r": ["zhī", "zhǐ"], "ok": ["zhī"], "b": ["counter"], "hl": [1, 2], "kc": "kt:zh-hanzi-l5"}}, "小猫",
       {"s": {"id": "zh3-4", "t": "只", "r": ["zhī", "zhǐ"], "ok": ["zhǐ"], "b": ["pos"], "hl": [0, 2], "kc": "kt:zh-hanzi-l5"}}, "吃鱼，不吃别的。"]},
    {"id": "zh4", "tag": "l6", "title": "借书", "titleEn": "A borrowed book",
     "tokens": ["这本书我", {"s": {"id": "zh4-1", "t": "还", "r": ["hái", "huán"], "ok": ["hái"], "b": ["pos"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "没看完，下星期",
       {"s": {"id": "zh4-2", "t": "还", "r": ["hái", "huán"], "ok": ["huán"], "b": ["pos"], "hl": [0, 2], "kc": "kt:zh-hanzi-l6"}}, "给你。上次借的钱我已经",
       {"s": {"id": "zh4-3", "t": "还", "r": ["hái", "huán"], "ok": ["huán"], "b": ["pos"], "hl": [2, 1], "kc": "kt:zh-hanzi-l6"}}, "了。你今天要书，",
       {"s": {"id": "zh4-4", "t": "还", "r": ["hái", "huán"], "ok": ["hái"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "是下星期要？"]},
    {"id": "zh5", "tag": "l6", "title": "改作业", "titleEn": "Redoing homework",
     "tokens": ["这件事很", {"s": {"id": "zh5-1", "t": "重", "r": ["zhòng", "chóng"], "ok": ["zhòng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "要，请你",
       {"s": {"id": "zh5-2", "t": "重", "r": ["zhòng", "chóng"], "ok": ["chóng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "新写一遍，不要",
       {"s": {"id": "zh5-3", "t": "重", "r": ["zhòng", "chóng"], "ok": ["chóng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "复。书包太",
       {"s": {"id": "zh5-4", "t": "重", "r": ["zhòng", "chóng"], "ok": ["zhòng"], "b": ["pos"], "hl": [1, 1], "kc": "kt:zh-hanzi-l6"}}, "了，先放下吧。"]},
    {"id": "zh6", "tag": "l6", "title": "音乐会", "titleEn": "The concert",
     "tokens": ["听音", {"s": {"id": "zh6-1", "t": "乐", "r": ["lè", "yuè"], "ok": ["yuè"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l6"}}, "的时候我很快",
       {"s": {"id": "zh6-2", "t": "乐", "r": ["lè", "yuè"], "ok": ["lè"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l6"}}, "。他会两种",
       {"s": {"id": "zh6-3", "t": "乐", "r": ["lè", "yuè"], "ok": ["yuè"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "器。"]},
    {"id": "zh7", "tag": "l6", "title": "比赛以后", "titleEn": "After the race",
     "tokens": ["我", {"s": {"id": "zh7-1", "t": "觉", "r": ["jué", "jiào"], "ok": ["jué"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "得他会",
       {"s": {"id": "zh7-2", "t": "得", "r": ["de", "dé", "děi"], "ok": ["dé"], "b": ["pos"], "hl": [0, 4], "kc": "kt:zh-hanzi-l6"}}, "第一名。可是他说：“我",
       {"s": {"id": "zh7-3", "t": "得", "r": ["de", "dé", "děi"], "ok": ["děi"], "b": ["pos"], "hl": [0, 2], "kc": "kt:zh-hanzi-l6"}}, "回家睡",
       {"s": {"id": "zh7-4", "t": "觉", "r": ["jué", "jiào"], "ok": ["jiào"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l6"}}, "了，太累，受不",
       {"s": {"id": "zh7-5", "t": "了", "r": ["le", "liǎo"], "ok": ["liǎo"], "b": ["word"], "hl": [2, 0], "kc": "kt:zh-hanzi-l6"}}, "。”说完就走",
       {"s": {"id": "zh7-6", "t": "了", "r": ["le", "liǎo"], "ok": ["le"], "b": ["pos"], "hl": [1, 0], "kc": "kt:zh-hanzi-l6"}}, "。"]},
    {"id": "zh8", "tag": "l6", "title": "在重庆", "titleEn": "In Chongqing",
     "tokens": ["我在", {"s": {"id": "zh8-1", "t": "重", "r": ["zhòng", "chóng"], "ok": ["chóng"], "b": ["memo"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6", "note": "地名“重庆”读 Chóngqìng，要单独记。", "noteEn": "The place name 重庆 is Chóngqìng; it has to be learned."}}, "庆骑车摔倒了，手上流了好多",
       {"s": {"id": "zh8-2", "t": "血", "r": ["xuè", "xiě"], "ok": ["xiě", "xuè"], "b": ["memo"], "hl": [2, 0], "kc": "kt:zh-hanzi-l6", "note": "两种都对：口语里单用常读 xiě，书面和合成词（血液）读 xuè。", "noteEn": "Both are right: used on its own in speech it is often xiě; in writing and in compounds (血液) it is xuè."}}, "，药店的东西也不",
       {"s": {"id": "zh8-3", "t": "便", "r": ["biàn", "pián"], "ok": ["pián"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "宜。"]}
  ],
  "shift": [
    {"id": "sh-xing", "ref": ["银", {"t": "行", "r": "háng"}], "tokens": ["我们去旅", {"s": {"id": "sh-xing-b", "t": "行", "r": ["háng", "xíng"], "ok": ["xíng"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l5"}}, "吧。"]},
    {"id": "sh-hangye", "ref": ["自", {"t": "行", "r": "xíng"}, "车"], "tokens": ["他在这个", {"s": {"id": "sh-hangye-b", "t": "行", "r": ["háng", "xíng"], "ok": ["háng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l5"}}, "业做了十年。"]},
    {"id": "sh-hangzhang", "ref": ["银", {"t": "行", "r": "háng"}], "tokens": ["我们", {"s": {"id": "sh-hangzhang-b", "t": "行", "r": ["háng", "xíng"], "ok": ["háng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l5"}}, "长很忙。"]},
    {"id": "sh-xiaozhang", "ref": [{"t": "长", "r": "zhǎng"}, "大"], "tokens": ["校", {"s": {"id": "sh-xiaozhang-b", "t": "长", "r": ["zhǎng", "cháng"], "ok": ["zhǎng"], "b": ["word"], "hl": [1, 0], "kc": "kt:zh-hanzi-l5"}}, "在开会。"]},
    {"id": "sh-changcheng", "ref": ["很", {"t": "长", "r": "cháng"}], "tokens": ["我想去", {"s": {"id": "sh-changcheng-b", "t": "长", "r": ["zhǎng", "cháng"], "ok": ["cháng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l5"}}, "城。"]},
    {"id": "sh-huanqian", "ref": [{"t": "还", "r": "hái"}, "没"], "tokens": ["明天我", {"s": {"id": "sh-huanqian-b", "t": "还", "r": ["hái", "huán"], "ok": ["huán"], "b": ["pos"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "钱给你。"]},
    {"id": "sh-leguan", "ref": ["快", {"t": "乐", "r": "lè"}], "tokens": ["他这个人很", {"s": {"id": "sh-leguan-b", "t": "乐", "r": ["lè", "yuè"], "ok": ["lè"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "观。"]},
    {"id": "sh-yinyue", "ref": ["快", {"t": "乐", "r": "lè"}], "tokens": ["晚上有一场音", {"s": {"id": "sh-yinyue-b", "t": "乐", "r": ["lè", "yuè"], "ok": ["yuè"], "b": ["word"], "hl": [1, 1], "kc": "kt:zh-hanzi-l6"}}, "会。"]},
    {"id": "sh-zhiyou", "ref": ["一", {"t": "只", "r": "zhī"}, "猫"], "tokens": ["我", {"s": {"id": "sh-zhiyou-b", "t": "只", "r": ["zhī", "zhǐ"], "ok": ["zhǐ"], "b": ["pos", "word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l5"}}, "有十块钱。"]},
    {"id": "sh-chongfu", "ref": ["很", {"t": "重", "r": "zhòng"}, "要"], "tokens": ["这句话他", {"s": {"id": "sh-chongfu-b", "t": "重", "r": ["zhòng", "chóng"], "ok": ["chóng"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "复了三遍。"]},
    {"id": "sh-pianyi", "ref": ["方", {"t": "便", "r": "biàn"}], "tokens": ["这件衣服很", {"s": {"id": "sh-pianyi-b", "t": "便", "r": ["biàn", "pián"], "ok": ["pián"], "b": ["word"], "hl": [0, 1], "kc": "kt:zh-hanzi-l6"}}, "宜。"]}
  ],
  "make": [
    {"c": "行", "readings": ["háng", "xíng"], "hint": "例：骑自行车去银行", "hintEn": "e.g. 骑自行车去银行",
     "words": [["银行", "háng", ["word"]], ["行长", "háng", ["word"]], ["行业", "háng", ["word"]], ["两行", "háng", ["counter"]], ["自行车", "xíng", ["word"]], ["不行", "xíng", ["word", "pos"]], ["步行", "xíng", ["word"]], ["旅行", "xíng", ["word"]], ["行人", "xíng", ["word"]]]},
    {"c": "长", "readings": ["zhǎng", "cháng"], "hint": "例：他长大以后，头发很长", "hintEn": "e.g. 他长大以后，头发很长",
     "words": [["长大", "zhǎng", ["pos", "word"]], ["校长", "zhǎng", ["word"]], ["成长", "zhǎng", ["word"]], ["长得", "zhǎng", ["pos"]], ["很长", "cháng", ["pos"]], ["长城", "cháng", ["word"]], ["长短", "cháng", ["word"]], ["太长", "cháng", ["pos"]]]},
    {"c": "还", "readings": ["hái", "huán"], "hint": "例：我还没还书", "hintEn": "e.g. 我还没还书",
     "words": [["还没", "hái", ["pos"]], ["还是", "hái", ["word"]], ["还有", "hái", ["pos", "word"]], ["还要", "hái", ["pos"]], ["还书", "huán", ["pos"]], ["还钱", "huán", ["pos"]], ["还给", "huán", ["pos"]]]},
    {"c": "乐", "readings": ["lè", "yuè"], "hint": "例：听音乐很快乐", "hintEn": "e.g. 听音乐很快乐",
     "words": [["快乐", "lè", ["word"]], ["乐观", "lè", ["word"]], ["可乐", "lè", ["word"]], ["音乐", "yuè", ["word"]], ["乐器", "yuè", ["word"]]]},
    {"c": "重", "readings": ["zhòng", "chóng"], "hint": "例：重要的话要重复", "hintEn": "e.g. 重要的话要重复",
     "words": [["重要", "zhòng", ["word"]], ["严重", "zhòng", ["word"]], ["很重", "zhòng", ["pos"]], ["太重", "zhòng", ["pos"]], ["重新", "chóng", ["word"]], ["重复", "chóng", ["word"]], ["重庆", "chóng", ["memo"]]]},
    {"c": "只", "readings": ["zhī", "zhǐ"], "hint": "例：我只有一只猫", "hintEn": "e.g. 我只有一只猫",
     "words": [["一只", "zhī", ["counter"]], ["两只", "zhī", ["counter"]], ["三只", "zhī", ["counter"]], ["只有", "zhǐ", ["pos", "word"]], ["只是", "zhǐ", ["pos", "word"]], ["只要", "zhǐ", ["word"]]]}
  ],
  "review": [
    "血 在“手上流了好多血”里接受 xiě 和 xuè 两种读音，请确认",
    "“我觉得他会得第一名”中 得 读 dé；“我得回家睡觉了”中 得 读 děi",
    "依据的归类（如“不行”接受“固定词语”或“词性”，“只有”接受“词性”或“固定词语”）是编写者的判断，请老师确认",
    "页面不播放中文读音：浏览器合成可能把多音字读错",
    "第 3 步只核对 make.words 里的词；“一行”有 háng（一行字）和 xíng（一行人）两读，所以没有放进核对词表"
  ]
};
