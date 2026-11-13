/* Data packs for blocks/reading-aid-fade.html (prim:reading-aid-fade):
 *   reading-aid-fade-ja     振假名 over kanji words (N5–N4 short notices, N3–N2 news-style sentences)
 *   reading-aid-fade-zh     拼音 over single characters (一级 signs and notes, 二～三级 short passages with 多音字)
 *   reading-aid-fade-en     sound dots under decodable words, a tap-to-hear mark on sight words (picture-book pages)
 *   reading-aid-fade-en-ipa IPA over new words (adult learners)
 *
 * Pack format
 *   id, lang, speech (BCP-47 for browser TTS), title/titleEn, subtitle/subtitleEn, kcs[]
 *   aid      "kana" | "pinyin" | "ipa" | "dots"   what the reading aid is
 *   input    "kana" | "pinyin" | null             spot checks can be typed (kana also accepts romaji; pinyin accepts
 *                                                 tone marks or tone numbers). null = options only.
 *   kinds    { kindId: {label, labelEn, reverse?} }  error categories for 归类 (step 2). reverse = the
 *            "字认识，但这里读法特殊" category (the reverse half).
 *   groups   { tag: {label, labelEn} }           passage groups (?focus=<tag>)
 *   units    { unitId: {text, aid, opts, cue?, keep?, pic?, say?, kc} }
 *            text  what is printed in the passage (a word for ja/en, one character for zh)
 *            aid   the reading shown in <ruby> (dots: array of graphemes; null for sight words = tap to hear)
 *            ans   (optional) the right option in a spot check when it is not `aid` (en: a picture)
 *            opts  [[shown, kind]] wrong options for the spot check; kind refers to `kinds`.
 *                  Distractors are a look-alike / same-phonetic character's reading, a tone/length slip,
 *                  or the other reading of the same character.
 *            cue   [before, after]: how the unit is shown when isolated (polyphones need a word around them)
 *            keep  true = names / readings that never fade (not counted in the fade target)
 *            say   text for speech synthesis (default: text)
 *   passages [{id, tag, title, titleEn, tokens, q}]
 *            tokens  "plain text" | {"u": unitId} | {"t": "山田", "r": "やまだ"} (fixed ruby, always shown)
 *            q       meaning question that needs the faded units: {q, qEn, opts:[{t, tEn}], ok: index, needs:[unitId]}
 *   errors   [{id, u, said, kind, why, whyEn}]  prepared misreadings for 归类 (the learner's own mistakes come first)
 *   reverse  [{id, show, q, qEn, opts:[{t, tEn}], ok, why, whyEn}]  不该撤 / 读得出≠读得懂.
 *            show = tokens like a passage (fixed ruby allowed). ok = index of the right option.
 *   review   items a native teacher should check before these packs are used in class.
 */
KT_DATA["reading-aid-fade-ja"] = {
  "id": "reading-aid-fade-ja", "lang": "ja", "speech": "ja-JP",
  "title": "振假名逐步撤除", "titleEn": "Fading furigana",
  "subtitle": "注音默认藏起来：先自己读，读不出再点开看。每个词两段不同的材料里都没偷看、读对了，注音就撤掉；再错一次就恢复。", "subtitleEn": "The readings start hidden: read on your own and click a word only if you are stuck. A word loses its furigana after you read it right without peeking in two different passages; one more mistake brings it back.",
  "kcs": ["kt:ja-kanji-n5", "kt:ja-skill-read-basic", "kt:ja-kanji-n4", "kt:ja-kanji-n3", "kt:ja-kanji-n2"],
  "aid": "kana", "input": "kana",
  "kinds": {
    "unknown": {"label": "不认识，读成了别的字或词", "labelEn": "Did not know it: read it as another character or word"},
    "length": {"label": "认识，但长音、促音或清浊错了", "labelEn": "Knew it, but got a long vowel, small っ or voicing wrong"},
    "onkun": {"label": "这个字的几种读法搞混了（音读／训读）", "labelEn": "Mixed up the character's readings (on / kun)"},
    "special": {"label": "字认识，但这个词读法特殊（熟字训等）", "labelEn": "Knew the characters, but this word has a special reading (jukujikun etc.)", "reverse": true}
  },
  "groups": {
    "n5": {"label": "入门：告示和便条（N5–N4）", "labelEn": "Beginner: notices and notes (N5–N4)"},
    "n3": {"label": "中级：新闻式短句（N3–N2）", "labelEn": "Intermediate: news-style sentences (N3–N2)"}
  },
  "units": {
    "kyou": {"text": "今日", "aid": "きょう", "opts": [["こんにち", "special"], ["いまにち", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "ashita": {"text": "明日", "aid": "あした", "opts": [["めいにち", "special"], ["あさって", "unknown"]], "kc": "kt:ja-kanji-n5"},
    "gakkou": {"text": "学校", "aid": "がっこう", "opts": [["がくこう", "length"], ["がこう", "length"]], "kc": "kt:ja-kanji-n5"},
    "toshokan": {"text": "図書館", "aid": "としょかん", "opts": [["としょうかん", "length"], ["ずしょかん", "onkun"]], "kc": "kt:ja-kanji-n4"},
    "gogo": {"text": "午後", "aid": "ごご", "opts": [["ごうご", "length"], ["ごあと", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "goji": {"text": "五時", "aid": "ごじ", "opts": [["ごうじ", "length"], ["いつとき", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "yasumi": {"text": "休み", "aid": "やすみ", "opts": [["きゅうみ", "onkun"], ["たいみ", "unknown"]], "kc": "kt:ja-kanji-n5"},
    "getsuyoubi": {"text": "月曜日", "aid": "げつようび", "opts": [["がつようび", "onkun"], ["げつようひ", "length"]], "kc": "kt:ja-kanji-n5"},
    "tomodachi": {"text": "友達", "aid": "ともだち", "opts": [["ゆうたつ", "onkun"], ["ともたち", "length"]], "kc": "kt:ja-kanji-n5"},
    "futari": {"text": "二人", "aid": "ふたり", "opts": [["ににん", "special"], ["にじん", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "hitori": {"text": "一人", "aid": "ひとり", "opts": [["いちにん", "special"], ["いちじん", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "iku": {"text": "行", "aid": "い", "cue": ["", "きます"], "opts": [["こう", "onkun"], ["おこな", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "kaimono": {"text": "買い物", "aid": "かいもの", "opts": [["ばいぶつ", "onkun"], ["かいぶつ", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "densha": {"text": "電車", "aid": "でんしゃ", "opts": [["てんしゃ", "length"], ["でんくるま", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "eki": {"text": "駅", "aid": "えき", "opts": [["やく", "unknown"], ["えっき", "length"]], "kc": "kt:ja-kanji-n5"},
    "miyage": {"text": "土産", "aid": "みやげ", "cue": ["お", ""], "opts": [["どさん", "special"], ["つちさん", "onkun"]], "kc": "kt:ja-kanji-n4"},
    "tegami": {"text": "手紙", "aid": "てがみ", "opts": [["てかみ", "length"], ["しゅし", "onkun"]], "kc": "kt:ja-kanji-n4"},
    "heya": {"text": "部屋", "aid": "へや", "opts": [["ぶおく", "special"], ["ぶや", "special"]], "kc": "kt:ja-kanji-n5"},
    "ookii": {"text": "大きい", "aid": "おおきい", "opts": [["おきい", "length"], ["だいきい", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "tokei": {"text": "時計", "aid": "とけい", "opts": [["じけい", "special"], ["ときけい", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "benkyou": {"text": "勉強", "aid": "べんきょう", "opts": [["べんきょ", "length"], ["めんきょう", "unknown"]], "kc": "kt:ja-kanji-n4"},
    "otona": {"text": "大人", "aid": "おとな", "opts": [["だいじん", "special"], ["おおひと", "onkun"]], "kc": "kt:ja-kanji-n5"},
    "taifuu": {"text": "台風", "aid": "たいふう", "opts": [["だいふう", "length"], ["たいかぜ", "onkun"]], "kc": "kt:ja-kanji-n3"},
    "eikyou": {"text": "影響", "aid": "えいきょう", "opts": [["えいきょ", "length"], ["けいきょう", "unknown"]], "kc": "kt:ja-kanji-n3"},
    "okure": {"text": "遅", "aid": "おく", "cue": ["", "れる"], "opts": [["おそ", "onkun"], ["ち", "onkun"]], "kc": "kt:ja-kanji-n3"},
    "chousa": {"text": "調査", "aid": "ちょうさ", "opts": [["ちょさ", "length"], ["しゅうさ", "unknown"]], "kc": "kt:ja-kanji-n2"},
    "kekka": {"text": "結果", "aid": "けっか", "opts": [["けか", "length"], ["けつか", "length"]], "kc": "kt:ja-kanji-n2"},
    "chiiki": {"text": "地域", "aid": "ちいき", "opts": [["じいき", "onkun"], ["ちき", "length"]], "kc": "kt:ja-kanji-n2"},
    "keizai": {"text": "経済", "aid": "けいざい", "opts": [["けいさい", "length"], ["きょうざい", "onkun"]], "kc": "kt:ja-kanji-n2"},
    "uke": {"text": "受", "aid": "う", "cue": ["", "ける"], "opts": [["じゅ", "onkun"], ["さず", "unknown"]], "kc": "kt:ja-kanji-n3"},
    "raishuu": {"text": "来週", "aid": "らいしゅう", "opts": [["らいしゅ", "length"], ["きしゅう", "onkun"]], "kc": "kt:ja-kanji-n5"}
  },
  "passages": [
    {"id": "j1", "tag": "n5", "title": "图书馆的告示", "titleEn": "A library notice",
     "tokens": [{"u": "kyou"}, "は", {"u": "getsuyoubi"}, "です。", {"u": "gakkou"}, "の", {"u": "toshokan"}, "は", {"u": "gogo"}, {"u": "goji"}, "までです。", {"u": "ashita"}, "は", {"u": "yasumi"}, "です。"],
     "q": {"q": "明天去学校图书馆，能进去吗？", "qEn": "Can you use the school library tomorrow?", "opts": [{"t": "不能，明天闭馆", "tEn": "No, it is closed tomorrow"}, {"t": "能，开到下午五点", "tEn": "Yes, until 5 p.m."}, {"t": "只有上午开", "tEn": "Only in the morning"}], "ok": 0, "needs": ["ashita", "yasumi"]}},
    {"id": "j2", "tag": "n5", "title": "周末的计划", "titleEn": "Weekend plans",
     "tokens": [{"u": "ashita"}, "、", {"u": "tomodachi"}, "と", {"u": "futari"}, "で", {"u": "toshokan"}, "に", {"u": "iku"}, "きます。", {"u": "gogo"}, "は", {"u": "kaimono"}, "です。"],
     "q": {"q": "明天下午做什么？", "qEn": "What happens tomorrow afternoon?", "opts": [{"t": "去买东西", "tEn": "Shopping"}, {"t": "去图书馆", "tEn": "Going to the library"}, {"t": "在家休息", "tEn": "Resting at home"}], "ok": 0, "needs": ["gogo", "kaimono"]}},
    {"id": "j3", "tag": "n5", "title": "一个人坐电车", "titleEn": "On the train alone",
     "tokens": [{"u": "kyou"}, "は", {"u": "hitori"}, "で", {"u": "densha"}, "にのりました。", {"u": "eki"}, "で", {"u": "tomodachi"}, "にお", {"u": "miyage"}, "をかいました。"],
     "q": {"q": "今天是怎么坐电车的？", "qEn": "How did the writer take the train today?", "opts": [{"t": "一个人", "tEn": "Alone"}, {"t": "和朋友两个人", "tEn": "With a friend, the two of them"}, {"t": "和大人一起", "tEn": "With an adult"}], "ok": 0, "needs": ["hitori"]}},
    {"id": "j4", "tag": "n5", "title": "给山田的便条", "titleEn": "A note to Yamada",
     "tokens": [{"t": "山田", "r": "やまだ"}, "さんへ　", {"u": "tegami"}, "をありがとう。", {"u": "heya"}, "に", {"u": "ookii"}, {"u": "tokei"}, "がありますね。", {"u": "ashita"}, "、", {"u": "gakkou"}, "で", {"u": "benkyou"}, "しましょう。"],
     "q": {"q": "山田之前送来了什么？", "qEn": "What did Yamada send before?", "opts": [{"t": "一封信", "tEn": "A letter"}, {"t": "一包纸巾", "tEn": "A pack of tissues"}, {"t": "一个大钟", "tEn": "A big clock"}], "ok": 0, "needs": ["tegami"]}},
    {"id": "j5", "tag": "n5", "title": "门口的牌子", "titleEn": "The sign at the door",
     "tokens": [{"u": "otona"}, "は", {"u": "hitori"}, " 500", {"t": "円", "r": "えん"}, "です。", {"u": "gogo"}, {"u": "goji"}, "まで。", {"u": "getsuyoubi"}, "は", {"u": "yasumi"}, "です。"],
     "q": {"q": "星期一下午能进去吗？", "qEn": "Can you go in on Monday afternoon?", "opts": [{"t": "不能，星期一休息", "tEn": "No, it is closed on Mondays"}, {"t": "能，到五点", "tEn": "Yes, until five"}, {"t": "只有大人能进", "tEn": "Only adults can go in"}], "ok": 0, "needs": ["getsuyoubi", "yasumi"]}},
    {"id": "j6", "tag": "n3", "title": "车站广播", "titleEn": "A station announcement",
     "tokens": [{"u": "taifuu"}, "の", {"u": "eikyou"}, "で、", {"u": "densha"}, "がすこし", {"u": "okure"}, "れています。"],
     "q": {"q": "电车怎么了？", "qEn": "What is happening to the trains?", "opts": [{"t": "晚点了", "tEn": "They are running late"}, {"t": "停运了", "tEn": "They have stopped running"}, {"t": "提前到了", "tEn": "They arrived early"}], "ok": 0, "needs": ["okure"]}},
    {"id": "j7", "tag": "n3", "title": "调查报告", "titleEn": "A survey report",
     "tokens": [{"u": "chousa"}, "の", {"u": "kekka"}, "、この", {"u": "chiiki"}, "の", {"u": "keizai"}, "は", {"u": "taifuu"}, "の", {"u": "eikyou"}, "を", {"u": "uke"}, "けていた。"],
     "q": {"q": "调查发现了什么？", "qEn": "What did the survey find?", "opts": [{"t": "这个地区的经济受到了台风的影响", "tEn": "The local economy was affected by the typhoon"}, {"t": "经济的变化造成了台风", "tEn": "Changes in the economy caused the typhoon"}, {"t": "台风没有带来影响", "tEn": "The typhoon had no effect"}], "ok": 0, "needs": ["eikyou", "uke"]}},
    {"id": "j8", "tag": "n3", "title": "调查的通知", "titleEn": "A notice about a survey",
     "tokens": [{"u": "chiiki"}, "の", {"u": "keizai"}, "について", {"u": "chousa"}, "をしました。", {"u": "kekka"}, "は", {"u": "raishuu"}, "わかります。"],
     "q": {"q": "什么时候知道结果？", "qEn": "When will the results be known?", "opts": [{"t": "下周", "tEn": "Next week"}, {"t": "这周", "tEn": "This week"}, {"t": "已经知道了", "tEn": "They are already known"}], "ok": 0, "needs": ["raishuu", "kekka"]}}
  ],
  "errors": [
    {"id": "e-otona", "u": "otona", "said": "だいじん", "kind": "special", "why": "大人 是熟字训，要整个词记 おとな；按字读成 だいじん 是“大臣”的读音。", "whyEn": "大人 is a jukujikun word, learned whole as おとな; reading it character by character gives だいじん, the reading of 大臣 (minister)."},
    {"id": "e-miyage", "u": "miyage", "said": "どさん", "kind": "special", "why": "土産 是熟字训 みやげ，不能按 土 ど＋産 さん 拼。", "whyEn": "土産 is a jukujikun word, みやげ; it cannot be built from 土 ど + 産 さん."},
    {"id": "e-gakkou", "u": "gakkou", "said": "がこう", "kind": "length", "why": "学 がく＋校 こう 连读时 く 变成促音 っ：がっこう。字认识，促音丢了。", "whyEn": "学 がく + 校 こう: the く turns into a small っ when joined, がっこう. The characters were known; the small っ was lost."},
    {"id": "e-eikyou", "u": "eikyou", "said": "えいきょ", "kind": "length", "why": "響 读 きょう，有长音。按普通话 xiǎng 去推，最容易丢长音。", "whyEn": "響 is read きょう, with a long vowel. Guessing from Mandarin xiǎng makes it easy to drop the long vowel."},
    {"id": "e-kekka", "u": "kekka", "said": "けか", "kind": "length", "why": "結 けつ＋果 か 连读成 けっか，中间是促音。", "whyEn": "結 けつ + 果 か join as けっか, with a small っ in the middle."},
    {"id": "e-tegami", "u": "tegami", "said": "てかみ", "kind": "length", "why": "て＋かみ 组成复合词时后一个词浊化（连浊）：てがみ。", "whyEn": "When て + かみ form a compound, the second part becomes voiced (rendaku): てがみ."},
    {"id": "e-keizai", "u": "keizai", "said": "けいさい", "kind": "length", "why": "済 在这里读 ざい，是浊音。", "whyEn": "済 is read ざい here, with a voiced z."},
    {"id": "e-kyou", "u": "kyou", "said": "こんにち", "kind": "special", "why": "“今日は月曜日です”里的 今日 读 きょう（熟字训）。こんにち 是书面语“如今”的读法，问候语 こんにちは 也这样写。", "whyEn": "In 今日は月曜日です, 今日 is read きょう (jukujikun). こんにち is the formal reading meaning “nowadays”, also used in the greeting こんにちは."},
    {"id": "e-hitori", "u": "hitori", "said": "いちにん", "kind": "special", "why": "一人、二人 读 ひとり、ふたり，三人 以后才是 さんにん、よにん。", "whyEn": "一人 and 二人 are ひとり and ふたり; only from 三人 on do you get さんにん, よにん."},
    {"id": "e-okure", "u": "okure", "said": "おそれる", "kind": "onkun", "why": "遅 有两个训读：遅い おそい、遅れる おくれる。看后面的送假名 れる 来定。", "whyEn": "遅 has two kun readings: 遅い おそい and 遅れる おくれる. The okurigana れる after it decides."},
    {"id": "e-chiiki", "u": "chiiki", "said": "じいき", "kind": "onkun", "why": "地 有两个音读 ち 和 じ：地震 じしん，地域 ちいき。要按词记。", "whyEn": "地 has two on readings, ち and じ: 地震 じしん but 地域 ちいき. Learn it per word."},
    {"id": "e-toshokan", "u": "toshokan", "said": "としょうかん", "kind": "length", "why": "書 读 しょ，没有长音。普通话 shū 容易让人加长。", "whyEn": "書 is しょ, with no long vowel. Mandarin shū tempts you to lengthen it."}
  ],
  "reverse": [
    {"id": "r-name", "show": [{"t": "山田", "r": "やまだ"}, "さん"],
     "q": "山田 是人名。它的注音要不要按“两段读对就撤”的规则撤掉？", "qEn": "山田 is a name. Should its reading fade under the “right twice, then remove” rule?",
     "opts": [{"t": "一直可以点开看，不计入撤除目标", "tEn": "Keep it available to click; it does not count towards fading"}, {"t": "和别的词一样，两段读对就撤", "tEn": "Treat it like other words: remove after two right readings"}], "ok": 0,
     "why": "人名、地名的读法常常没法推，读错了也说明不了汉字水平。让它一直可以点看。", "whyEn": "Names often cannot be worked out, and misreading one says little about kanji knowledge. Keep the reading available."},
    {"id": "r-tsuitachi", "show": ["四月", {"t": "一日", "r": "？"}, "は", {"t": "休", "r": "やす"}, "みです。"],
     "q": "你在“一日中”里读对了 いちにち，注音撤掉了。“四月一日”里的 一日 能直接用这个读法吗？", "qEn": "You read 一日 right as いちにち in 一日中, and its reading was removed. Can you use that reading for 一日 in 四月一日?",
     "opts": [{"t": "不能：日期里读 ついたち，这里要重新给注音", "tEn": "No: as a date it is ついたち, so the reading should come back here"}, {"t": "能：同一个词，读法一样", "tEn": "Yes: same word, same reading"}, {"t": "两种都对", "tEn": "Both are fine"}], "ok": 0,
     "why": "同一个写法在新语境里读法会变（一日 いちにち／ついたち）。撤注音是对“这个词在这种用法里”撤，不是对字形撤。", "whyEn": "The same spelling can change reading in a new context (一日 いちにち / ついたち). Fading applies to the word in that use, not to the written form."},
    {"id": "r-tegami", "show": [{"t": "手紙", "r": "てがみ"}],
     "q": "你能读出 てがみ。“手紙”是什么意思？", "qEn": "You can read it: てがみ. What does 手紙 mean?",
     "opts": [{"t": "信", "tEn": "A letter"}, {"t": "卫生纸", "tEn": "Toilet paper"}, {"t": "手工纸", "tEn": "Craft paper"}], "ok": 0,
     "why": "读得出不等于懂意思：手紙 是“信”。注音撤了也要用意思题来查。", "whyEn": "Being able to read it is not the same as understanding it: 手紙 means a letter. Even after the reading fades, meaning still has to be checked."},
    {"id": "r-benkyou", "show": [{"t": "勉強", "r": "べんきょう"}, "します"],
     "q": "“勉強します”是什么意思？", "qEn": "What does 勉強します mean?",
     "opts": [{"t": "学习", "tEn": "To study"}, {"t": "勉强去做", "tEn": "To do something reluctantly"}, {"t": "使劲推", "tEn": "To push hard"}], "ok": 0,
     "why": "勉強 在日语里是“学习”。中文的“勉强”是另一个意思。", "whyEn": "In Japanese 勉強 means to study. Chinese 勉强 (reluctantly) is a different word."},
    {"id": "r-daijoubu", "show": [{"t": "大丈夫", "r": "だいじょうぶ"}, "です"],
     "q": "“大丈夫です”是什么意思？", "qEn": "What does 大丈夫です mean?",
     "opts": [{"t": "没问题、没关系", "tEn": "It's fine / no problem"}, {"t": "他是个男子汉", "tEn": "He is a real man"}, {"t": "丈夫很高大", "tEn": "The husband is big"}], "ok": 0,
     "why": "大丈夫 读 だいじょうぶ，意思是“没问题”。和中文的“大丈夫”意思不同。", "whyEn": "大丈夫 is だいじょうぶ, “it's fine”. The Chinese word 大丈夫 (a real man) means something else."},
    {"id": "r-miyage", "show": ["お", {"t": "土産", "r": "みやげ"}],
     "q": "お土産 读 おみやげ。这个读音能从 土 和 産 的读音推出来吗？", "qEn": "お土産 is read おみやげ. Can this reading be worked out from the readings of 土 and 産?",
     "opts": [{"t": "不能，要整个词记（熟字训）", "tEn": "No, it is learned as a whole word (jukujikun)"}, {"t": "能，土 み＋産 やげ", "tEn": "Yes: 土 み + 産 やげ"}], "ok": 0,
     "why": "熟字训的读音属于整个词，不属于单个字。这类词可以一直保留可点的注音。", "whyEn": "A jukujikun reading belongs to the whole word, not to each character. Words like this can keep a clickable reading."}
  ],
  "review": [
    "明日 只接受 あした；あす 也是正确读法（较正式），目前作为错误选项没有出现，但打字输入 あす 会被判错——请老师决定是否加为可接受读音",
    "今日 的干扰项 こんにち 被归为“读法特殊”一类，也可以看作音读训读混淆，请老师确认归类",
    "部屋 的两个干扰项 ぶおく、ぶや 都归为“读法特殊”",
    "五時 的干扰项 いつとき、休み 的干扰项 たいみ 等是编写者造的错误读法，请确认它们像学习者真会犯的错",
    "遅 在“遅れています”中注音只给 おく，送假名 れ 不带注音",
    "N3–N2 两组材料（j6–j8）的汉字分级是编写者估计，不是官方字表"
  ]
};

KT_DATA["reading-aid-fade-zh"] = {
  "id": "reading-aid-fade-zh", "lang": "zh", "speech": "zh-CN",
  "title": "拼音逐步撤除", "titleEn": "Fading pinyin",
  "subtitle": "拼音默认藏起来：先自己读，读不出再点开看。一个字在两段不同的材料里都没偷看、读对了，拼音就撤掉；再错一次就恢复。", "subtitleEn": "The pinyin starts hidden: read on your own and click a character only if you are stuck. A character loses its pinyin after you read it right without peeking in two different passages; one more mistake brings it back.",
  "kcs": ["kt:zh-hanzi-l1", "kt:zh-skill-read-basic", "kt:zh-hanzi-l2", "kt:zh-hanzi-l3"],
  "aid": "pinyin", "input": "pinyin",
  "kinds": {
    "unknown": {"label": "不认识，读成了形近字或同声旁的字", "labelEn": "Did not know it: read it as a look-alike or a character with the same sound part"},
    "tone": {"label": "认识，但声调错了", "labelEn": "Knew it, but the tone was wrong"},
    "poly": {"label": "字认识，但这里读法特殊（多音字）", "labelEn": "Knew the character, but it has a different reading here (polyphone)", "reverse": true}
  },
  "groups": {
    "l1": {"label": "一级：告示、菜单、问路", "labelEn": "Level 1: signs, menus, asking the way"},
    "l23": {"label": "二～三级：便条和短句（有多音字）", "labelEn": "Levels 2–3: notes and short sentences (with polyphones)"}
  },
  "units": {
    "今": {"text": "今", "aid": "jīn", "opts": [["jìn", "tone"], ["lìng", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "天": {"text": "天", "aid": "tiān", "opts": [["tiǎn", "tone"], ["fū", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "期": {"text": "期", "aid": "qī", "opts": [["qí", "tone"], ["jī", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "请": {"text": "请", "aid": "qǐng", "opts": [["qíng", "tone"], ["jīng", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "问": {"text": "问", "aid": "wèn", "opts": [["wén", "tone"], ["jiān", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "校": {"text": "校", "aid": "xiào", "opts": [["xiáo", "tone"], ["jiāo", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "入": {"text": "入", "aid": "rù", "opts": [["rén", "unknown"], ["rǔ", "tone"]], "kc": "kt:zh-hanzi-l1"},
    "出": {"text": "出", "aid": "chū", "opts": [["chǔ", "tone"], ["shān", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "左": {"text": "左", "aid": "zuǒ", "opts": [["zuó", "tone"], ["yòu", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "右": {"text": "右", "aid": "yòu", "opts": [["yǒu", "tone"], ["shí", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "饭": {"text": "饭", "aid": "fàn", "opts": [["fǎn", "tone"], ["bǎn", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "块": {"text": "块", "aid": "kuài", "opts": [["kuǎi", "tone"], ["jué", "unknown"]], "kc": "kt:zh-hanzi-l1"},
    "在": {"text": "在", "aid": "zài", "opts": [["zǎi", "tone"], ["cún", "unknown"]], "kc": "kt:zh-hanzi-l2"},
    "再": {"text": "再", "aid": "zài", "opts": [["zǎi", "tone"], ["liǎng", "unknown"]], "kc": "kt:zh-hanzi-l2"},
    "觉jue": {"text": "觉", "aid": "jué", "cue": ["", "得"], "opts": [["jiào", "poly"], ["xué", "unknown"]], "kc": "kt:zh-hanzi-l2"},
    "觉jiao": {"text": "觉", "aid": "jiào", "cue": ["睡", ""], "opts": [["jué", "poly"], ["jiǎo", "tone"]], "kc": "kt:zh-hanzi-l2"},
    "睡": {"text": "睡", "aid": "shuì", "opts": [["shuǐ", "tone"], ["chuí", "unknown"]], "kc": "kt:zh-hanzi-l2"},
    "晴": {"text": "晴", "aid": "qíng", "opts": [["qīng", "tone"], ["jīng", "unknown"]], "kc": "kt:zh-hanzi-l2"},
    "喝": {"text": "喝", "aid": "hē", "opts": [["kě", "unknown"], ["hé", "tone"]], "kc": "kt:zh-hanzi-l2"},
    "以": {"text": "以", "aid": "yǐ", "opts": [["yí", "tone"], ["sì", "unknown"]], "kc": "kt:zh-hanzi-l2"},
    "长zhang": {"text": "长", "aid": "zhǎng", "cue": ["", "大"], "opts": [["cháng", "poly"], ["zhāng", "tone"]], "kc": "kt:zh-hanzi-l3"},
    "长chang": {"text": "长", "aid": "cháng", "cue": ["很", ""], "opts": [["zhǎng", "poly"], ["chàng", "tone"]], "kc": "kt:zh-hanzi-l3"},
    "还hai": {"text": "还", "aid": "hái", "cue": ["", "没"], "opts": [["huán", "poly"], ["jìn", "unknown"]], "kc": "kt:zh-hanzi-l3"},
    "还huan": {"text": "还", "aid": "huán", "cue": ["", "书"], "opts": [["hái", "poly"], ["huàn", "tone"]], "kc": "kt:zh-hanzi-l3"}
  },
  "passages": [
    {"id": "z1", "tag": "l1", "title": "问路", "titleEn": "Asking the way",
     "tokens": [{"u": "今"}, {"u": "天"}, "是星", {"u": "期"}, "一。", {"u": "请"}, {"u": "问"}, "，学", {"u": "校"}, "在哪儿？"],
     "q": {"q": "说话的人想知道什么？", "qEn": "What does the speaker want to know?", "opts": [{"t": "学校在哪儿", "tEn": "Where the school is"}, {"t": "今天星期几", "tEn": "What day it is today"}, {"t": "学校几点开门", "tEn": "When the school opens"}], "ok": 0, "needs": ["问", "校"]}},
    {"id": "z2", "tag": "l1", "title": "门口的牌子", "titleEn": "A sign at the door",
     "tokens": [{"u": "入"}, "口在", {"u": "左"}, "边，", {"u": "出"}, "口在", {"u": "右"}, "边。米", {"u": "饭"}, "两", {"u": "块"}, "。"],
     "q": {"q": "出去要走哪边？", "qEn": "Which side is the way out?", "opts": [{"t": "右边", "tEn": "The right"}, {"t": "左边", "tEn": "The left"}, {"t": "牌子上没说", "tEn": "The sign does not say"}], "ok": 0, "needs": ["出", "右"]}},
    {"id": "z3", "tag": "l1", "title": "饭店在哪边", "titleEn": "Which side is the restaurant?",
     "tokens": [{"u": "今"}, {"u": "天"}, {"u": "晴"}, "了。", {"u": "请"}, {"u": "问"}, "，", {"u": "饭"}, "店在", {"u": "左"}, "边", {"u": "还hai"}, "是", {"u": "右"}, "边？"],
     "q": {"q": "说话的人问的是什么？", "qEn": "What is the speaker asking about?", "opts": [{"t": "饭店在哪一边", "tEn": "Which side the restaurant is on"}, {"t": "今天天气怎么样", "tEn": "What the weather is like"}, {"t": "一碗饭多少钱", "tEn": "How much a bowl of rice costs"}], "ok": 0, "needs": ["饭", "左", "右"]}},
    {"id": "z4", "tag": "l23", "title": "门上的便条", "titleEn": "A note on the door",
     "tokens": ["我", {"u": "今"}, {"u": "天"}, "不", {"u": "在"}, "家，你明", {"u": "天"}, {"u": "再"}, "来吧。"],
     "q": {"q": "写便条的人希望对方怎么做？", "qEn": "What does the writer want the reader to do?", "opts": [{"t": "明天再来一次", "tEn": "Come back tomorrow"}, {"t": "今天在家等", "tEn": "Wait at home today"}, {"t": "明天不要来", "tEn": "Not come tomorrow"}], "ok": 0, "needs": ["在", "再"]}},
    {"id": "z5", "tag": "l23", "title": "借书", "titleEn": "A borrowed book",
     "tokens": ["他", {"u": "长zhang"}, "得很高，头发也很", {"u": "长chang"}, "。我", {"u": "还hai"}, "没", {"u": "还huan"}, "你的书呢。"],
     "q": {"q": "那本书现在在谁那儿？", "qEn": "Who has the book now?", "opts": [{"t": "在说话的人那儿，还没还", "tEn": "The speaker still has it; it has not been returned"}, {"t": "已经还给“你”了", "tEn": "It has been returned to “you”"}, {"t": "在“他”那儿", "tEn": "“He” has it"}], "ok": 0, "needs": ["还hai", "还huan"]}},
    {"id": "z6", "tag": "l23", "title": "睡前", "titleEn": "Before bed",
     "tokens": ["我", {"u": "觉jue"}, "得", {"u": "睡"}, {"u": "觉jiao"}, {"u": "以"}, "前不应该", {"u": "喝"}, "咖啡。等你", {"u": "长zhang"}, "大了", {"u": "再"}, {"u": "喝"}, "吧。"],
     "q": {"q": "说话的人认为什么时候不该喝咖啡？", "qEn": "When does the speaker think you should not drink coffee?", "opts": [{"t": "睡觉以前", "tEn": "Before going to bed"}, {"t": "睡醒以后", "tEn": "After waking up"}, {"t": "长大以前", "tEn": "Before growing up"}], "ok": 0, "needs": ["睡", "以"]}}
  ],
  "errors": [
    {"id": "e-huan", "u": "还huan", "said": "hái", "kind": "poly", "why": "“还书”是把书还回去，读 huán。“还没”的还才读 hái。", "whyEn": "还书 means to give a book back: huán. Only the 还 of 还没 (still not) is hái."},
    {"id": "e-zhang", "u": "长zhang", "said": "cháng", "kind": "poly", "why": "“长大、长得高”说的是生长，读 zhǎng；“很长”说的是长短，读 cháng。", "whyEn": "长大 and 长得高 are about growing: zhǎng. 很长 is about length: cháng."},
    {"id": "e-jue", "u": "觉jue", "said": "jiào", "kind": "poly", "why": "“觉得”读 juéde；只有“睡觉”的觉读 jiào。", "whyEn": "觉得 is juéde; only the 觉 of 睡觉 is jiào."},
    {"id": "e-jiao", "u": "觉jiao", "said": "jué", "kind": "poly", "why": "“睡觉”读 shuìjiào。", "whyEn": "睡觉 is shuìjiào."},
    {"id": "e-qing", "u": "请", "said": "qīng", "kind": "tone", "why": "请 是第三声 qǐng。字认识，声调错了。", "whyEn": "请 has the third tone, qǐng. The character was known; the tone was wrong."},
    {"id": "e-ru", "u": "入", "said": "rén", "kind": "unknown", "why": "入 rù 和 人 rén 形近。“入口”读成“人口”，意思全变了。", "whyEn": "入 rù looks like 人 rén. Reading 入口 (entrance) as 人口 (population) changes the meaning completely."},
    {"id": "e-qing2", "u": "晴", "said": "jīng", "kind": "unknown", "why": "晴 qíng 和 睛 jīng 都有“青”，左边一个是日，一个是目。", "whyEn": "晴 qíng and 睛 jīng both have 青; the left part is 日 in one and 目 in the other."},
    {"id": "e-zai", "u": "再", "said": "zǎi", "kind": "tone", "why": "再 是第四声 zài，和“在”同音。", "whyEn": "再 has the fourth tone, zài, the same sound as 在."},
    {"id": "e-fan", "u": "饭", "said": "bǎn", "kind": "unknown", "why": "饭 fàn 和 板、版 bǎn 有同一个声旁“反”，但读音不同。", "whyEn": "饭 fàn shares the sound part 反 with 板 and 版 (bǎn), but the sounds differ."},
    {"id": "e-wen", "u": "问", "said": "wén", "kind": "tone", "why": "问 是第四声 wèn；wén 是“闻、文”的音。", "whyEn": "问 has the fourth tone, wèn; wén is the sound of 闻 and 文."}
  ],
  "reverse": [
    {"id": "r-zaizai", "show": ["你明天", {"t": "？", "r": "zài"}, "来吧。"],
     "q": "“在”和“再”你都读得出 zài。这里该写哪一个？", "qEn": "You can read both 在 and 再 as zài. Which one belongs here?",
     "opts": [{"t": "再", "tEn": "再"}, {"t": "在", "tEn": "在"}, {"t": "两个都行", "tEn": "Either is fine"}], "ok": 0,
     "why": "读得出不等于用得对：“再来”是又一次来，用 再。拼音完全一样，只能靠意思分。", "whyEn": "Reading a character is not the same as using it: 再来 means come again, so 再. The pinyin is identical; only meaning tells them apart."},
    {"id": "r-huan", "show": ["我", {"t": "还", "r": "？"}, "书。"],
     "q": "“还没”的还你已经两次读对，拼音撤掉了。“我还书”里的还呢？", "qEn": "You read the 还 of 还没 right twice and its pinyin was removed. What about 还 in 我还书?",
     "opts": [{"t": "要重新给拼音：这里读 huán", "tEn": "Its pinyin should come back: here it is huán"}, {"t": "不用：同一个字，读 hái", "tEn": "No need: same character, hái"}, {"t": "两种都对", "tEn": "Both are fine"}], "ok": 0,
     "why": "撤拼音是对“这个字在这个词里”撤。多音字换了词，要重新确认读音。", "whyEn": "Pinyin fades for a character in a given word. When a polyphone appears in a new word, its reading has to be checked again."},
    {"id": "r-chongqing", "show": [{"t": "重庆", "r": "Chóngqìng"}],
     "q": "“重要”的重（zhòng）你已经会读了。地名“重庆”的拼音要撤吗？", "qEn": "You already read the 重 of 重要 (zhòng). Should the pinyin on the place name 重庆 fade?",
     "opts": [{"t": "一直可以点开看：地名里读 chóng", "tEn": "Keep it available: in this place name it is chóng"}, {"t": "撤：重 读 zhòng", "tEn": "Remove it: 重 is zhòng"}], "ok": 0,
     "why": "人名、地名和多音字在新词里的读法，可以一直保留可点的拼音，不计入撤除目标。", "whyEn": "Names, place names and polyphones in new words can keep a clickable reading; they do not count towards fading."},
    {"id": "r-ta", "show": [{"t": "他", "r": "tā"}, "、", {"t": "她", "r": "tā"}, "、", {"t": "它", "r": "tā"}],
     "q": "这三个字拼音一样。“小猫饿了，___要吃饭。”该用哪个？", "qEn": "These three have the same pinyin. “The kitten is hungry; ___ wants to eat.” Which one?",
     "opts": [{"t": "它", "tEn": "它"}, {"t": "他", "tEn": "他"}, {"t": "她", "tEn": "她"}], "ok": 0,
     "why": "拼音帮不了：要看指的是男人、女人还是动物和东西。", "whyEn": "Pinyin cannot help here: you need to know whether it refers to a man, a woman, or an animal or thing."}
  ],
  "review": [
    "干扰项（如 校 的 jiāo、块 的 jué、在 的 cún）是编写者按形近或同声旁挑的，请确认是学习者真会犯的错",
    "校 本身也是多音字（校对 jiàoduì），本包只用 xiào",
    "“得”在“觉得”中读轻声 de，本包没有把“得”作为目标字"
  ]
};

KT_DATA["reading-aid-fade-en"] = {
  "id": "reading-aid-fade-en", "lang": "en", "speech": "en-US",
  "title": "拼读点线逐步撤除", "titleEn": "Fading sound dots",
  "subtitle": "绘本页：能按规则拼读的词，字母下面有拼读点线（一个音一个点，两个字母一个音画一条线）；认读词不按规则，只能点一下听。先自己读，读不出再点。", "subtitleEn": "Picture-book pages: words you can sound out have sound dots under the letters (one dot per sound, a line when two letters make one sound). Sight words do not follow the rules, so you can only click them to hear them. Read on your own first; click only if you are stuck.",
  "kcs": ["kt:en-orth-cvc-decoding", "kt:en-orth-sight-words"],
  "aid": "dots", "input": null,
  "kinds": {
    "unknown": {"label": "读成了另一个长得像的词", "labelEn": "Read it as another word that looks similar"},
    "vowel": {"label": "元音读错了（短元音混淆）", "labelEn": "Got the vowel wrong (short vowels mixed up)"},
    "rule": {"label": "按拼读规则硬拼，但这个词不按规则", "labelEn": "Sounded it out by the rules, but this word does not follow them", "reverse": true}
  },
  "groups": {
    "book": {"label": "绘本页", "labelEn": "Picture-book pages"}
  },
  "units": {
    "cat": {"text": "cat", "aid": ["c", "a", "t"], "ans": "🐱", "opts": [["✂️", "vowel"], ["🎩", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "dog": {"text": "dog", "aid": ["d", "o", "g"], "ans": "🐶", "opts": [["⛏️", "vowel"], ["🪵", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "bed": {"text": "bed", "aid": ["b", "e", "d"], "ans": "🛏️", "opts": [["🟥", "unknown"], ["🚌", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "red": {"text": "red", "aid": ["r", "e", "d"], "ans": "🟥", "opts": [["🎣", "vowel"], ["🛏️", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "pig": {"text": "pig", "aid": ["p", "i", "g"], "ans": "🐷", "opts": [["🐶", "unknown"], ["🖊️", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "sun": {"text": "sun", "aid": ["s", "u", "n"], "ans": "☀️", "opts": [["🚌", "unknown"], ["🔟", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "hen": {"text": "hen", "aid": ["h", "e", "n"], "ans": "🐔", "opts": [["🖊️", "unknown"], ["🔟", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "ten": {"text": "ten", "aid": ["t", "e", "n"], "ans": "🔟", "opts": [["🥫", "vowel"], ["🐔", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "pen": {"text": "pen", "aid": ["p", "e", "n"], "ans": "🖊️", "opts": [["📌", "vowel"], ["🐔", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "box": {"text": "box", "aid": ["b", "o", "x"], "ans": "📦", "opts": [["🦊", "unknown"], ["🛏️", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "fox": {"text": "fox", "aid": ["f", "o", "x"], "ans": "🦊", "opts": [["📦", "unknown"], ["🐶", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "bus": {"text": "bus", "aid": ["b", "u", "s"], "ans": "🚌", "opts": [["☀️", "unknown"], ["📦", "unknown"]], "kc": "kt:en-orth-cvc-decoding"},
    "the": {"text": "the", "aid": null, "ans": "the", "opts": [["they", "unknown"], ["then", "unknown"]], "kc": "kt:en-orth-sight-words"},
    "The": {"text": "The", "aid": null, "say": "the", "ans": "the", "opts": [["they", "unknown"], ["then", "unknown"]], "kc": "kt:en-orth-sight-words"},
    "was": {"text": "was", "aid": null, "ans": "was", "opts": [["saw", "unknown"], ["as", "unknown"]], "kc": "kt:en-orth-sight-words"},
    "said": {"text": "said", "aid": null, "ans": "said", "opts": [["sad", "unknown"], ["sand", "unknown"]], "kc": "kt:en-orth-sight-words"},
    "One": {"text": "One", "aid": null, "say": "one", "ans": "one", "opts": [["on", "unknown"], ["own", "unknown"]], "kc": "kt:en-orth-sight-words"},
    "Come": {"text": "Come", "aid": null, "say": "come", "ans": "come", "opts": [["came", "unknown"], ["cone", "unknown"]], "kc": "kt:en-orth-sight-words"},
    "They": {"text": "They", "aid": null, "say": "they", "ans": "they", "opts": [["the", "unknown"], ["then", "unknown"]], "kc": "kt:en-orth-sight-words"}
  },
  "passages": [
    {"id": "e1", "tag": "book", "title": "第 1 页", "titleEn": "Page 1",
     "tokens": ["A ", {"u": "cat"}, " and a ", {"u": "dog"}, " sat on a ", {"u": "bed"}, ". ", {"u": "The"}, " ", {"u": "bed"}, " ", {"u": "was"}, " ", {"u": "red"}, "."],
     "q": {"q": "谁坐在床上？", "qEn": "Who sat on the bed?", "opts": [{"t": "🐱 🐶"}, {"t": "🐷 🐔"}, {"t": "🦊"}], "ok": 0, "needs": ["cat", "dog"]}},
    {"id": "e2", "tag": "book", "title": "第 2 页", "titleEn": "Page 2",
     "tokens": [{"u": "One"}, " ", {"u": "pig"}, " ", {"u": "said"}, ", “", {"u": "Come"}, " and sit in ", {"u": "the"}, " ", {"u": "sun"}, "!”"],
     "q": {"q": "有几只猪？", "qEn": "How many pigs are there?", "opts": [{"t": "1"}, {"t": "2"}, {"t": "10"}], "ok": 0, "needs": ["One", "pig"]}},
    {"id": "e3", "tag": "book", "title": "第 3 页", "titleEn": "Page 3",
     "tokens": [{"u": "The"}, " ", {"u": "hen"}, " ", {"u": "was"}, " in a ", {"u": "box"}, ". ", {"u": "The"}, " ", {"u": "fox"}, " ", {"u": "said"}, ", “Get out!”"],
     "q": {"q": "母鸡在哪儿？", "qEn": "Where was the hen?", "opts": [{"t": "📦"}, {"t": "🛏️"}, {"t": "🚌"}], "ok": 0, "needs": ["hen", "box"]}},
    {"id": "e4", "tag": "book", "title": "第 4 页", "titleEn": "Page 4",
     "tokens": [{"u": "They"}, " got on ", {"u": "the"}, " ", {"u": "bus"}, ". ", {"u": "One"}, " ", {"u": "dog"}, " had a ", {"u": "red"}, " ", {"u": "pen"}, "."],
     "q": {"q": "小狗拿着什么？", "qEn": "What did the dog have?", "opts": [{"t": "🖊️"}, {"t": "📌"}, {"t": "🐔"}], "ok": 0, "needs": ["pen"]}},
    {"id": "e5", "tag": "book", "title": "第 5 页", "titleEn": "Page 5",
     "tokens": [{"u": "The"}, " ", {"u": "ten"}, " ", {"u": "pig"}, "s sat in ", {"u": "the"}, " ", {"u": "sun"}, ". ", {"u": "The"}, " ", {"u": "cat"}, " ", {"u": "said"}, ", “", {"u": "Come"}, " here!”"],
     "q": {"q": "有几只猪在晒太阳？", "qEn": "How many pigs sat in the sun?", "opts": [{"t": "10"}, {"t": "1"}, {"t": "2"}], "ok": 0, "needs": ["ten"]}}
  ],
  "errors": [
    {"id": "e-said", "u": "said", "said": "/seɪd/ (like “sayed”)", "kind": "rule", "why": "said 不按 ai 的规则读，读 /sed/，要整体记。", "whyEn": "said does not follow the usual ai pattern; it is /sed/ and has to be learned whole."},
    {"id": "e-come", "u": "Come", "said": "/kəʊm/ (like “comb”)", "kind": "rule", "why": "come 不按“词尾不发音的 e 让元音读长”的规则，读 /kʌm/。", "whyEn": "come breaks the silent-e rule (which would make the o long); it is /kʌm/."},
    {"id": "e-one", "u": "One", "said": "/ɒn/ (like “on”)", "kind": "rule", "why": "one 读 /wʌn/，和拼写几乎没有关系。", "whyEn": "one is /wʌn/; its sound has almost nothing to do with its spelling."},
    {"id": "e-was", "u": "was", "said": "saw", "kind": "unknown", "why": "was 和 saw 字母一样、顺序相反，是最常见的看反。", "whyEn": "was and saw have the same letters in reverse order; this is the most common reversal."},
    {"id": "e-pen", "u": "pen", "said": "pin", "kind": "vowel", "why": "e 和 i 两个短元音混了：pen 是笔，pin 是图钉。", "whyEn": "The short vowels e and i got mixed up: pen is a pen, pin is a pin."},
    {"id": "e-they", "u": "They", "said": "the", "kind": "unknown", "why": "they 和 the 开头一样，读得快时容易漏掉 y。", "whyEn": "they and the start the same way; reading fast, the y is easy to miss."},
    {"id": "e-ten", "u": "ten", "said": "tin", "kind": "vowel", "why": "ten 的元音是短 e，不是短 i。", "whyEn": "ten has a short e, not a short i."}
  ],
  "reverse": [
    {"id": "r-said", "show": ["said"],
     "q": "said 要不要画拼读点线？", "qEn": "Should said get sound dots?",
     "opts": [{"t": "不要：它不按规则，点线会把人带错，要整体认", "tEn": "No: it breaks the rules, so dots would mislead; learn it whole"}, {"t": "要：s-ai-d 三个点", "tEn": "Yes: three dots, s-ai-d"}], "ok": 0,
     "why": "认读词的点线本来就不按规则，画了反而误导，应该一开始就不给。", "whyEn": "Sound dots on sight words do not follow the rules anyway; they mislead, so sight words get none from the start."},
    {"id": "r-cat", "show": ["cat"],
     "q": "cat 的点线该一直留着吗？", "qEn": "Should the dots under cat stay for good?",
     "opts": [{"t": "不用：两次不看点线读对，就撤掉", "tEn": "No: after two right readings without the dots, remove them"}, {"t": "要一直留着", "tEn": "Yes, keep them for good"}], "ok": 0,
     "why": "能按规则拼读的词，点线是拐杖，会读了就该撤，不然孩子只看点线不看字母。", "whyEn": "For decodable words the dots are a crutch: remove them once the word is read, or the child keeps looking at the dots instead of the letters."},
    {"id": "r-bat", "show": ["bat"],
     "q": "孩子读对了 bat。这张图是哪一个？🦇 还是 🏏？", "qEn": "The child read bat correctly. Which picture is it: 🦇 or 🏏?",
     "opts": [{"t": "🦇"}, {"t": "🏏"}, {"t": "两个都对，要看句子", "tEn": "Both are right; it depends on the sentence"}], "ok": 2,
     "why": "读得出不等于知道是哪个意思：bat 可以是蝙蝠，也可以是球拍。要看上下文。", "whyEn": "Reading a word is not the same as knowing which meaning: bat can be the animal or the bat used in sport. The sentence decides."},
    {"id": "r-one", "show": ["one"],
     "q": "孩子把 one 读成 on。该怎么归类？", "qEn": "A child reads one as on. What kind of mistake is it?",
     "opts": [{"t": "按规则硬拼了一个不按规则的词", "tEn": "Sounded out a word that breaks the rules"}, {"t": "元音读错了", "tEn": "Got a vowel wrong"}, {"t": "没认真看", "tEn": "Was not paying attention"}], "ok": 0,
     "why": "one 要整体认。点线和拼读规则在这里帮不上忙。", "whyEn": "one has to be learned whole. Sound dots and phonics rules cannot help here."}
  ],
  "review": [
    "图片选项用的是 emoji：✂️（cut）、⛏️（dig）、🪵（log）、🎣（rod）、🥫（tin）只是近似，请确认孩子能认出",
    "认读词抽查用的是“听音选词”，需要浏览器语音或大人读出这个词",
    "点线（sound buttons）只画在可按规则拼读的 CVC 词下面；pigs 里的 s 不画点线"
  ]
};

KT_DATA["reading-aid-fade-en-ipa"] = {
  "id": "reading-aid-fade-en-ipa", "lang": "en", "speech": "en-GB",
  "title": "音标逐步撤除", "titleEn": "Fading IPA",
  "subtitle": "生词上方是音标（英式），默认藏起来。先自己读，读不出再点开看。两段不同的材料里都没偷看、选对了，音标就撤掉。", "subtitleEn": "New words carry an IPA transcription (British), hidden by default. Read on your own and click only if you are stuck. Once you get a word right without peeking in two different passages, its IPA is removed.",
  "kcs": ["kt:en-phon-ipa"],
  "aid": "ipa", "input": null,
  "kinds": {
    "stress": {"label": "重音放错了音节", "labelEn": "Stress on the wrong syllable"},
    "sound": {"label": "某个音读错了（长短元音、θ/s 等）", "labelEn": "One sound was wrong (long/short vowel, θ/s and so on)"},
    "spell": {"label": "照拼写猜音，这个词不按拼写读", "labelEn": "Guessed the sound from the spelling, but this word is not said as spelled", "reverse": true}
  },
  "groups": {
    "adult": {"label": "成人：短文中的生词", "labelEn": "Adults: new words in short texts"}
  },
  "units": {
    "hotel": {"text": "hotel", "aid": "/həʊˈtel/", "opts": [["/ˈhəʊtel/", "stress"], ["/ˈhɒtəl/", "spell"]], "kc": "kt:en-phon-ipa"},
    "island": {"text": "island", "aid": "/ˈaɪlənd/", "opts": [["/ˈɪzlənd/", "spell"], ["/aɪˈlænd/", "stress"]], "kc": "kt:en-phon-ipa"},
    "Wednesday": {"text": "Wednesday", "aid": "/ˈwenzdeɪ/", "opts": [["/ˈwednzdeɪ/", "spell"], ["/wenzˈdeɪ/", "stress"]], "kc": "kt:en-phon-ipa"},
    "water": {"text": "water", "aid": "/ˈwɔːtə/", "opts": [["/ˈwɒtə/", "sound"], ["/ˈwætə/", "spell"]], "kc": "kt:en-phon-ipa"},
    "think": {"text": "think", "aid": "/θɪŋk/", "opts": [["/sɪŋk/", "sound"], ["/θiːŋk/", "sound"]], "kc": "kt:en-phon-ipa"},
    "colleague": {"text": "colleague", "aid": "/ˈkɒliːɡ/", "opts": [["/kəˈliːɡ/", "stress"], ["/ˈkɒliːɡjuː/", "spell"]], "kc": "kt:en-phon-ipa"},
    "recipe": {"text": "recipe", "aid": "/ˈresəpi/", "opts": [["/rɪˈsaɪp/", "spell"], ["/ˈriːsaɪp/", "spell"]], "kc": "kt:en-phon-ipa"},
    "develop": {"text": "develop", "aid": "/dɪˈveləp/", "opts": [["/ˈdevələp/", "stress"], ["/dɪˈviːləp/", "sound"]], "kc": "kt:en-phon-ipa"},
    "women": {"text": "women", "aid": "/ˈwɪmɪn/", "opts": [["/ˈwʊmən/", "spell"], ["/ˈwəʊmen/", "spell"]], "kc": "kt:en-phon-ipa"},
    "sheep": {"text": "sheep", "aid": "/ʃiːp/", "opts": [["/ʃɪp/", "sound"], ["/ʃep/", "sound"]], "kc": "kt:en-phon-ipa"},
    "comfortable": {"text": "comfortable", "aid": "/ˈkʌmftəbl/", "opts": [["/kəmˈfɔːtəbl/", "stress"], ["/ˈkɒmfɔːteɪbl/", "spell"]], "kc": "kt:en-phon-ipa"}
  },
  "passages": [
    {"id": "i1", "tag": "adult", "title": "度假", "titleEn": "A holiday",
     "tokens": ["Our ", {"u": "hotel"}, " is on a small ", {"u": "island"}, ". We arrive on ", {"u": "Wednesday"}, "."],
     "q": {"q": "我们什么时候到？", "qEn": "When do we arrive?", "opts": [{"t": "星期三", "tEn": "On Wednesday"}, {"t": "星期一", "tEn": "On Monday"}, {"t": "没有说", "tEn": "It does not say"}], "ok": 0, "needs": ["Wednesday"]}},
    {"id": "i2", "tag": "adult", "title": "做汤", "titleEn": "Making soup",
     "tokens": ["My ", {"u": "colleague"}, " gave me a ", {"u": "recipe"}, " for soup. I ", {"u": "think"}, " it needs more ", {"u": "water"}, "."],
     "q": {"q": "谁给了我菜谱？", "qEn": "Who gave me the recipe?", "opts": [{"t": "同事", "tEn": "Someone I work with"}, {"t": "家人", "tEn": "A family member"}, {"t": "酒店厨师", "tEn": "The hotel cook"}], "ok": 0, "needs": ["colleague"]}},
    {"id": "i3", "tag": "adult", "title": "农场", "titleEn": "On the farm",
     "tokens": ["Two ", {"u": "women"}, " keep ", {"u": "sheep"}, " on the ", {"u": "island"}, ". The old ", {"u": "hotel"}, " is not very ", {"u": "comfortable"}, "."],
     "q": {"q": "岛上的人养什么？", "qEn": "What do the people on the island keep?", "opts": [{"t": "羊", "tEn": "Sheep"}, {"t": "船", "tEn": "Ships"}, {"t": "鸡", "tEn": "Chickens"}], "ok": 0, "needs": ["sheep"]}},
    {"id": "i4", "tag": "adult", "title": "新菜谱", "titleEn": "A new recipe",
     "tokens": ["On ", {"u": "Wednesday"}, ", my ", {"u": "colleague"}, " will ", {"u": "develop"}, " a new ", {"u": "recipe"}, ". I ", {"u": "think"}, " the ", {"u": "women"}, " will like it."],
     "q": {"q": "同事星期三要做什么？", "qEn": "What will my colleague do on Wednesday?", "opts": [{"t": "研制一个新菜谱", "tEn": "Work out a new recipe"}, {"t": "去岛上度假", "tEn": "Go on holiday to the island"}, {"t": "买一只羊", "tEn": "Buy a sheep"}], "ok": 0, "needs": ["develop", "recipe"]}}
  ],
  "errors": [
    {"id": "e-hotel", "u": "hotel", "said": "/ˈhəʊtel/", "kind": "stress", "why": "hotel 的重音在第二个音节，不跟“双音节名词重音在前”的倾向。", "whyEn": "hotel is stressed on the second syllable; it does not follow the tendency for two-syllable nouns to be stressed first."},
    {"id": "e-island", "u": "island", "said": "/ˈɪzlənd/", "kind": "spell", "why": "island 的 s 不发音，第一个音是 /aɪ/。", "whyEn": "The s in island is silent, and the word starts with /aɪ/."},
    {"id": "e-wed", "u": "Wednesday", "said": "/ˈwednzdeɪ/", "kind": "spell", "why": "Wednesday 的第一个 d 不发音。", "whyEn": "The first d in Wednesday is silent."},
    {"id": "e-think", "u": "think", "said": "/sɪŋk/", "kind": "sound", "why": "/θ/ 读成了 /s/，think 变成了 sink。", "whyEn": "/θ/ became /s/, so think turned into sink."},
    {"id": "e-women", "u": "women", "said": "/ˈwʊmən/", "kind": "spell", "why": "women 的第一个音节读 /wɪ/，和 woman 不同。", "whyEn": "The first syllable of women is /wɪ/, unlike woman."},
    {"id": "e-sheep", "u": "sheep", "said": "/ʃɪp/", "kind": "sound", "why": "长音 /iː/ 读短了，sheep 变成了 ship。音标里的 ː 就是长音记号。", "whyEn": "The long /iː/ was made short, so sheep became ship. The ː mark in IPA means long."}
  ],
  "reverse": [
    {"id": "r-record", "show": ["Please ", {"t": "record", "r": "?"}, " the song."],
     "q": "名词 record /ˈrekɔːd/ 的音标你已经撤掉了。这句里的 record 也可以不看音标吗？", "qEn": "You have stopped needing the IPA for the noun record /ˈrekɔːd/. Can you skip it for record in this sentence too?",
     "opts": [{"t": "不行：这里是动词，读 /rɪˈkɔːd/，重音变了", "tEn": "No: here it is a verb, /rɪˈkɔːd/, with different stress"}, {"t": "可以：同一个词", "tEn": "Yes: it is the same word"}], "ok": 0,
     "why": "同一个拼写，词性不同重音就不同。撤音标是对“这个词的这种用法”撤。", "whyEn": "Same spelling, different part of speech, different stress. IPA fades for one use of a word, not for its spelling."},
    {"id": "r-read", "show": ["Yesterday I ", {"t": "read", "r": "?"}, " a book."],
     "q": "这句里的 read 怎么读？", "qEn": "How is read said in this sentence?",
     "opts": [{"t": "/red/：过去时", "tEn": "/red/: past tense"}, {"t": "/riːd/：现在时", "tEn": "/riːd/: present tense"}, {"t": "两种都对", "tEn": "Both are fine"}], "ok": 0,
     "why": "Yesterday 决定了是过去时，read 读 /red/。只看拼写判断不了。", "whyEn": "Yesterday makes it past tense, so read is /red/. The spelling alone cannot tell you."},
    {"id": "r-develop", "show": [{"t": "develop", "r": "/dɪˈveləp/"}],
     "q": "develop 是动词，重音在第二个音节。这说明“双音节或三音节动词重音在后”是条可靠的规则吗？", "qEn": "develop is a verb stressed on the second syllable. Does that make “verbs are stressed late” a reliable rule?",
     "opts": [{"t": "不是：只是倾向，hotel、develop 这样的词要单独记", "tEn": "No: it is only a tendency; words like hotel and develop have to be learned one by one"}, {"t": "是：所有动词都这样", "tEn": "Yes: all verbs work like this"}], "ok": 0,
     "why": "重音规律只是倾向，例外很多。生词的音标要等真的读对了再撤。", "whyEn": "Stress patterns are tendencies with many exceptions. Keep the IPA on a new word until it has really been read right."}
  ],
  "review": [
    "音标统一用英式（DJ/LPD 风格）：comfortable 也常记作 /ˈkʌmfətəbl/，Wednesday 也有 /ˈwenzdi/，请老师决定是否接受",
    "选项里的错误音标（如 /ˈhɒtəl/、/ˈkɒliːɡjuː/）是编写者按常见误读造的",
    "浏览器的 en-GB 语音不一定存在，会退回 en-US 读音"
  ]
};
