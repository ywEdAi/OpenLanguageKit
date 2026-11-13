/* Data packs for blocks/paradigm-apply.html (prim:paradigm-apply): paradigm-apply-en, paradigm-apply-ja, paradigm-apply-zh.
 *
 * One pack holds several RULE SETS (one inflection each: ます形, て形, plural -s, past -ed, 动词重叠 …). Open one with
 * ?rule=<set id> (or ?focus=<set id>); the bar lets the learner switch. Words live once in `lexicon`, so the forms a
 * learner derives in different sets grow into one paradigm row per word (base | ます | て | た | ない …).
 *
 * Pack format
 *   lexicon   { <wordId>: {base, read?, gloss?, glossEn?, pos} }  read = kana reading (ja; typed kana answers are
 *             accepted, speech reads the kana). gloss = Chinese gloss, glossEn = English gloss; a gloss is shown only
 *             when the interface language is not the language being taught. pos picks which rule sets form the row.
 *   sets      [{ id, pos, title/titleEn, short/shortEn (row column header), kcs[], prompt/promptEn, hint1/hint1En,
 *                classes, induce, items, use, edges }]
 *     classes [{ id, label/labelEn, rule/ruleEn, rewrite, exception?, noForm? }]
 *             rewrite = [[regex, replacement, alternative…], …]: the first regex that matches the base (and the kana
 *             reading) gives the form; every replacement in that entry is accepted, the first is shown. A class
 *             with no rewrite (English irregulars) takes the form from the item. exception = whole-word exception:
 *             words of this class go on the exception shelf and never count as evidence of applying the rule.
 *             noForm = nothing to type (zh: the word cannot reduplicate).
 *     induce  [{w, c}]  6–9 textbook words with their form (step 1: sort them by how they change).
 *     items   [{w, c, trap?, note?/noteEn?, form?, accept?}]  new words (none appear in induce). trap = the class the
 *             word looks like; traps are counted separately. form/accept override or add to the computed forms
 *             (accept = other spellings that are also right, e.g. dreamt, traveled).
 *     use     [{id, w, before, after, task/taskEn, accept?}]  put the derived form into a sentence (typed in the gap).
 *     edges   [{id, w, c, shown?, verdict, real?, note/noteEn}]  reverse half: the rule of class c is applied to w
 *             (or `shown` is given); the learner judges rule / break / both. verdict: rule = the rule's form is right;
 *             break = the rule does not work here (real = the right form); both = the rule's form and another are
 *             both in use. Every set mixes all three where the language has them.
 *   wug      (en only) [{id, pic, line1, line2, options[], answer}]  child version: made-up words, the child says the
 *             form aloud, an adult clicks what the child said (recorded as partner-judged, never as an answer).
 *   review   items a native-speaking teacher should check; they are not used in drills.
 * Interface-language text has an English twin (<field>En); target-language text is never translated.
 * All sentences are written for this pack; no textbook or test text is copied.
 */
KT_DATA["paradigm-apply-ja"] = {
  "id": "paradigm-apply-ja", "lang": "ja", "speech": "ja-JP",
  "title": "日语变形：把规则用到新词上", "titleEn": "Japanese inflection: apply the rule to new words",
  "subtitle": "先把学过的词按变法分组，再给没见过的词判类、写出形式。写错时看推导链在哪一步分叉。", "subtitleEn": "First sort words you know by how they change, then classify new words and type their forms. When a form is wrong, the derivation shows the step where you went off track.",
  "review": [
    "着る（穿）与切る（切）读音相同，语音合成读不出区别，页面靠汉字区分；请确认学习者在题目里能看到汉字",
    "嫌い（きらい）在口语中偶尔有人说成 *きらくない，这里按规范判为ナ形容词",
    "暇じゃない／暇ではない、静かじゃない／静かではない 两种都接受；没有区分语体",
    "勉強する 归入“三类／整词例外”一组，与 する 同列；如果教学上把 N＋する 单列一类，请调整 classes",
    "死ぬ 是唯一以ぬ结尾的常用动词，用作 む・ぶ・ぬ 组的例子；请确认在儿童或敏感场合是否合适"
  ],
  "lexicon": {
    "kaku": {"base": "書く", "read": "かく", "gloss": "写", "glossEn": "write", "pos": "v"},
    "nomu": {"base": "飲む", "read": "のむ", "gloss": "喝", "glossEn": "drink", "pos": "v"},
    "kau": {"base": "買う", "read": "かう", "gloss": "买", "glossEn": "buy", "pos": "v"},
    "matsu": {"base": "待つ", "read": "まつ", "gloss": "等", "glossEn": "wait", "pos": "v"},
    "yomu": {"base": "読む", "read": "よむ", "gloss": "读", "glossEn": "read", "pos": "v"},
    "asobu": {"base": "遊ぶ", "read": "あそぶ", "gloss": "玩", "glossEn": "play", "pos": "v"},
    "hanasu": {"base": "話す", "read": "はなす", "gloss": "说", "glossEn": "speak", "pos": "v"},
    "oyogu": {"base": "泳ぐ", "read": "およぐ", "gloss": "游泳", "glossEn": "swim", "pos": "v"},
    "taberu": {"base": "食べる", "read": "たべる", "gloss": "吃", "glossEn": "eat", "pos": "v"},
    "miru": {"base": "見る", "read": "みる", "gloss": "看", "glossEn": "see", "pos": "v"},
    "okiru": {"base": "起きる", "read": "おきる", "gloss": "起床", "glossEn": "get up", "pos": "v"},
    "suru": {"base": "する", "read": "する", "gloss": "做", "glossEn": "do", "pos": "v"},
    "kuru": {"base": "来る", "read": "くる", "gloss": "来", "glossEn": "come", "pos": "v"},
    "aruku": {"base": "歩く", "read": "あるく", "gloss": "走路", "glossEn": "walk", "pos": "v"},
    "kiku": {"base": "聞く", "read": "きく", "gloss": "听", "glossEn": "listen", "pos": "v"},
    "isogu": {"base": "急ぐ", "read": "いそぐ", "gloss": "赶紧", "glossEn": "hurry", "pos": "v"},
    "nugu": {"base": "脱ぐ", "read": "ぬぐ", "gloss": "脱", "glossEn": "take off", "pos": "v"},
    "kasu": {"base": "貸す", "read": "かす", "gloss": "借给", "glossEn": "lend", "pos": "v"},
    "kesu": {"base": "消す", "read": "けす", "gloss": "关掉", "glossEn": "switch off", "pos": "v"},
    "motsu": {"base": "持つ", "read": "もつ", "gloss": "拿", "glossEn": "hold", "pos": "v"},
    "tatsu": {"base": "立つ", "read": "たつ", "gloss": "站", "glossEn": "stand", "pos": "v"},
    "au": {"base": "会う", "read": "あう", "gloss": "见面", "glossEn": "meet", "pos": "v"},
    "arau": {"base": "洗う", "read": "あらう", "gloss": "洗", "glossEn": "wash", "pos": "v"},
    "yobu": {"base": "呼ぶ", "read": "よぶ", "gloss": "叫", "glossEn": "call", "pos": "v"},
    "erabu": {"base": "選ぶ", "read": "えらぶ", "gloss": "选", "glossEn": "choose", "pos": "v"},
    "yasumu": {"base": "休む", "read": "やすむ", "gloss": "休息", "glossEn": "rest", "pos": "v"},
    "sumu": {"base": "住む", "read": "すむ", "gloss": "住", "glossEn": "live", "pos": "v"},
    "shinu": {"base": "死ぬ", "read": "しぬ", "gloss": "死", "glossEn": "die", "pos": "v"},
    "tsukuru": {"base": "作る", "read": "つくる", "gloss": "做", "glossEn": "make", "pos": "v"},
    "okuru": {"base": "送る", "read": "おくる", "gloss": "寄", "glossEn": "send", "pos": "v"},
    "kaeru": {"base": "帰る", "read": "かえる", "gloss": "回家", "glossEn": "go home", "pos": "v"},
    "hairu": {"base": "入る", "read": "はいる", "gloss": "进", "glossEn": "enter", "pos": "v"},
    "shiru": {"base": "知る", "read": "しる", "gloss": "知道", "glossEn": "know", "pos": "v"},
    "kiruc": {"base": "切る", "read": "きる", "gloss": "切", "glossEn": "cut", "pos": "v"},
    "hashiru": {"base": "走る", "read": "はしる", "gloss": "跑", "glossEn": "run", "pos": "v"},
    "kiruw": {"base": "着る", "read": "きる", "gloss": "穿（上衣）", "glossEn": "wear (on the body)", "pos": "v"},
    "akeru": {"base": "開ける", "read": "あける", "gloss": "打开", "glossEn": "open", "pos": "v"},
    "oshieru": {"base": "教える", "read": "おしえる", "gloss": "教", "glossEn": "teach", "pos": "v"},
    "neru": {"base": "寝る", "read": "ねる", "gloss": "睡觉", "glossEn": "sleep", "pos": "v"},
    "deru": {"base": "出る", "read": "でる", "gloss": "出去", "glossEn": "go out", "pos": "v"},
    "kariru": {"base": "借りる", "read": "かりる", "gloss": "借（进来）", "glossEn": "borrow", "pos": "v"},
    "abiru": {"base": "浴びる", "read": "あびる", "gloss": "淋（浴）", "glossEn": "take (a shower)", "pos": "v"},
    "iku": {"base": "行く", "read": "いく", "gloss": "去", "glossEn": "go", "pos": "v"},
    "benkyou": {"base": "勉強する", "read": "べんきょうする", "gloss": "学习", "glossEn": "study", "pos": "v"},
    "aru": {"base": "ある", "read": "ある", "gloss": "有（物）", "glossEn": "there is (things)", "pos": "v"},
    "takai": {"base": "高い", "read": "たかい", "gloss": "贵；高", "glossEn": "expensive; high", "pos": "a"},
    "samui": {"base": "寒い", "read": "さむい", "gloss": "冷", "glossEn": "cold", "pos": "a"},
    "atsui": {"base": "暑い", "read": "あつい", "gloss": "热（天气）", "glossEn": "hot (weather)", "pos": "a"},
    "hiroi": {"base": "広い", "read": "ひろい", "gloss": "宽敞", "glossEn": "spacious", "pos": "a"},
    "tanoshii": {"base": "楽しい", "read": "たのしい", "gloss": "开心", "glossEn": "fun", "pos": "a"},
    "oishii": {"base": "おいしい", "read": "おいしい", "gloss": "好吃", "glossEn": "tasty", "pos": "a"},
    "chikai": {"base": "近い", "read": "ちかい", "gloss": "近", "glossEn": "near", "pos": "a"},
    "isogashii": {"base": "忙しい", "read": "いそがしい", "gloss": "忙", "glossEn": "busy", "pos": "a"},
    "muzukashii": {"base": "難しい", "read": "むずかしい", "gloss": "难", "glossEn": "difficult", "pos": "a"},
    "omoshiroi": {"base": "おもしろい", "read": "おもしろい", "gloss": "有意思", "glossEn": "interesting", "pos": "a"},
    "shizuka": {"base": "静か", "read": "しずか", "gloss": "安静", "glossEn": "quiet", "pos": "a"},
    "benri": {"base": "便利", "read": "べんり", "gloss": "方便", "glossEn": "convenient", "pos": "a"},
    "genki": {"base": "元気", "read": "げんき", "gloss": "精神；健康", "glossEn": "well, lively", "pos": "a"},
    "hima": {"base": "暇", "read": "ひま", "gloss": "有空", "glossEn": "free (not busy)", "pos": "a"},
    "kirei": {"base": "きれい", "read": "きれい", "gloss": "漂亮；干净", "glossEn": "pretty; clean", "pos": "a"},
    "kirai": {"base": "嫌い", "read": "きらい", "gloss": "讨厌", "glossEn": "dislike", "pos": "a"},
    "yuumei": {"base": "有名", "read": "ゆうめい", "gloss": "有名", "glossEn": "famous", "pos": "a"},
    "suki": {"base": "好き", "read": "すき", "gloss": "喜欢", "glossEn": "like", "pos": "a"},
    "shinsetsu": {"base": "親切", "read": "しんせつ", "gloss": "热心，亲切", "glossEn": "kind, helpful", "pos": "a"},
    "ii": {"base": "いい", "read": "いい", "gloss": "好", "glossEn": "good", "pos": "a"}
  },
  "sets": [
    {
      "id": "masu", "pos": "v", "title": "ます形", "titleEn": "masu form", "short": "ます形", "shortEn": "masu",
      "kcs": ["kt:ja-verb-groups"],
      "prompt": "写出它的ます形", "promptEn": "Write its masu form",
      "hint1": "它的辞书形最后一个假名是什么？如果是る，る前面那个音是い段或え段吗？就算是，也可能是一类。", "hint1En": "What is the last kana of its dictionary form? If it is る, is the sound before る an i- or e-sound? Even then it can still be Group 1.",
      "classes": [
        {"id": "g1", "label": "一类（五段）", "labelEn": "Group 1 (godan)", "rule": "词尾的う段音换成い段音，再加ます", "ruleEn": "change the final u-sound to its i-sound, then add ます",
          "rewrite": [["う$", "います"], ["く$", "きます"], ["ぐ$", "ぎます"], ["す$", "します"], ["つ$", "ちます"], ["ぬ$", "にます"], ["ぶ$", "びます"], ["む$", "みます"], ["る$", "ります"]]},
        {"id": "g2", "label": "二类（一段）", "labelEn": "Group 2 (ichidan)", "rule": "去掉る，加ます", "ruleEn": "drop る, add ます", "rewrite": [["る$", "ます"]]},
        {"id": "x", "label": "三类／整词例外", "labelEn": "Group 3 / whole-word exception", "rule": "する→します，来る→来ます（きます）", "ruleEn": "する→します, 来る→来ます (きます)", "exception": true,
          "rewrite": [["来る$", "来ます"], ["くる$", "きます"], ["する$", "します"]]}
      ],
      "induce": [{"w": "kaku", "c": "g1"}, {"w": "nomu", "c": "g1"}, {"w": "kau", "c": "g1"}, {"w": "taberu", "c": "g2"}, {"w": "miru", "c": "g2"}, {"w": "okiru", "c": "g2"}, {"w": "suru", "c": "x"}, {"w": "kuru", "c": "x"}],
      "items": [
        {"w": "aruku", "c": "g1"}, {"w": "isogu", "c": "g1"}, {"w": "kasu", "c": "g1"}, {"w": "motsu", "c": "g1"}, {"w": "au", "c": "g1"},
        {"w": "yobu", "c": "g1"}, {"w": "yasumu", "c": "g1"}, {"w": "shinu", "c": "g1"}, {"w": "tsukuru", "c": "g1"}, {"w": "okuru", "c": "g1"}, {"w": "iku", "c": "g1", "note": "行く的ます形是规则的：行きます。它只在て形、た形是例外。", "noteEn": "行く is regular in the masu form: 行きます. It is only irregular in the te- and ta-forms."},
        {"w": "kaeru", "c": "g1", "trap": "g2", "note": "帰る以る结尾、る前是え段，看上去像二类，其实是一类：帰ります。", "noteEn": "帰る ends in る with an e-sound before it, so it looks like Group 2, but it is Group 1: 帰ります."},
        {"w": "hairu", "c": "g1", "trap": "g2", "note": "入る是一类：入ります。", "noteEn": "入る is Group 1: 入ります."},
        {"w": "kiruc", "c": "g1", "trap": "g2", "note": "切る（切）是一类：切ります；同音的着る（穿）是二类：着ます。", "noteEn": "切る (cut) is Group 1: 切ります; 着る (wear), which sounds the same, is Group 2: 着ます."},
        {"w": "hashiru", "c": "g1", "trap": "g2", "note": "走る是一类：走ります。", "noteEn": "走る is Group 1: 走ります."},
        {"w": "kiruw", "c": "g2"}, {"w": "akeru", "c": "g2"}, {"w": "oshieru", "c": "g2"}, {"w": "neru", "c": "g2"}, {"w": "kariru", "c": "g2"}, {"w": "abiru", "c": "g2"},
        {"w": "benkyou", "c": "x", "note": "名词＋する 跟 する 一样变：勉強します。", "noteEn": "Noun + する changes like する: 勉強します."}
      ],
      "use": [
        {"id": "m1", "w": "yasumu", "before": "週末は家で", "after": "。", "task": "礼貌地说你周末做什么。", "taskEn": "Say politely what you do at the weekend."},
        {"id": "m2", "w": "kaeru", "before": "今日は早く", "after": "。", "task": "告诉同事你今天早点回家。", "taskEn": "Tell a colleague you are going home early today."},
        {"id": "m3", "w": "benkyou", "before": "毎日、日本語を", "after": "。", "task": "礼貌地说你每天做的事。", "taskEn": "Say politely what you do every day."},
        {"id": "m4", "w": "au", "before": "駅で友達に", "after": "。", "task": "说你接下来要见谁。", "taskEn": "Say who you are going to meet."}
      ],
      "edges": [
        {"id": "e-kaeru", "w": "kaeru", "c": "g2", "verdict": "break", "note": "帰る按二类变成 *帰ます 是错的。它是以る结尾的一类动词：帰ります。", "noteEn": "Treating 帰る as Group 2 gives *帰ます, which is wrong. It is a Group 1 verb ending in る: 帰ります."},
        {"id": "e-kiruw", "w": "kiruw", "c": "g2", "verdict": "rule", "note": "着る（穿）确实是二类：着ます。和它同音的切る（切）才是一类：切ります。", "noteEn": "着る (wear) really is Group 2: 着ます. Its sound-alike 切る (cut) is the Group 1 one: 切ります."},
        {"id": "e-kiruc", "w": "kiruc", "c": "g2", "verdict": "break", "note": "切る是一类：切ります。只看假名分不出，要记住这个词。", "noteEn": "切る is Group 1: 切ります. The kana alone cannot tell you; you have to know the word."},
        {"id": "e-kariru", "w": "kariru", "c": "g2", "verdict": "rule", "note": "借りる是二类：借ります。", "noteEn": "借りる is Group 2: 借ります."}
      ]
    },
    {
      "id": "te", "pos": "v", "title": "て形", "titleEn": "te-form", "short": "て形", "shortEn": "te",
      "kcs": ["kt:ja-te-form", "kt:ja-te-request"],
      "prompt": "写出它的て形", "promptEn": "Write its te-form",
      "hint1": "先判断是几类；一类的话，看辞书形最后一个假名：う・つ・る、む・ぶ・ぬ、く、ぐ、す 各走一条路。", "hint1En": "First decide the group. For Group 1, look at the last kana of the dictionary form: う・つ・る, む・ぶ・ぬ, く, ぐ and す each take their own path.",
      "classes": [
        {"id": "tte", "label": "一类 う・つ・る → って", "labelEn": "Group 1: う・つ・る → って", "rule": "词尾 う・つ・る 换成 って", "ruleEn": "final う, つ or る becomes って", "rewrite": [["う$", "って"], ["つ$", "って"], ["る$", "って"]]},
        {"id": "nde", "label": "一类 む・ぶ・ぬ → んで", "labelEn": "Group 1: む・ぶ・ぬ → んで", "rule": "词尾 む・ぶ・ぬ 换成 んで", "ruleEn": "final む, ぶ or ぬ becomes んで", "rewrite": [["む$", "んで"], ["ぶ$", "んで"], ["ぬ$", "んで"]]},
        {"id": "ite", "label": "一类 く → いて", "labelEn": "Group 1: く → いて", "rule": "词尾 く 换成 いて", "ruleEn": "final く becomes いて", "rewrite": [["く$", "いて"]]},
        {"id": "ide", "label": "一类 ぐ → いで", "labelEn": "Group 1: ぐ → いで", "rule": "词尾 ぐ 换成 いで", "ruleEn": "final ぐ becomes いで", "rewrite": [["ぐ$", "いで"]]},
        {"id": "shite", "label": "一类 す → して", "labelEn": "Group 1: す → して", "rule": "词尾 す 换成 して", "ruleEn": "final す becomes して", "rewrite": [["す$", "して"]]},
        {"id": "g2", "label": "二类 る → て", "labelEn": "Group 2: る → て", "rule": "去掉る，加て", "ruleEn": "drop る, add て", "rewrite": [["る$", "て"]]},
        {"id": "x", "label": "整词例外", "labelEn": "Whole-word exception", "rule": "する→して，来る→来て（きて），行く→行って", "ruleEn": "する→して, 来る→来て (きて), 行く→行って", "exception": true,
          "rewrite": [["行く$", "行って"], ["いく$", "いって"], ["来る$", "来て"], ["くる$", "きて"], ["する$", "して"]]}
      ],
      "induce": [{"w": "kau", "c": "tte"}, {"w": "matsu", "c": "tte"}, {"w": "yomu", "c": "nde"}, {"w": "asobu", "c": "nde"}, {"w": "kaku", "c": "ite"}, {"w": "oyogu", "c": "ide"}, {"w": "hanasu", "c": "shite"}, {"w": "taberu", "c": "g2"}, {"w": "kuru", "c": "x"}],
      "items": [
        {"w": "aruku", "c": "ite"}, {"w": "kiku", "c": "ite"}, {"w": "isogu", "c": "ide"}, {"w": "nugu", "c": "ide"}, {"w": "kasu", "c": "shite"}, {"w": "kesu", "c": "shite"},
        {"w": "motsu", "c": "tte"}, {"w": "tatsu", "c": "tte"}, {"w": "au", "c": "tte"}, {"w": "arau", "c": "tte"}, {"w": "tsukuru", "c": "tte"}, {"w": "okuru", "c": "tte"},
        {"w": "yobu", "c": "nde"}, {"w": "erabu", "c": "nde"}, {"w": "yasumu", "c": "nde"}, {"w": "sumu", "c": "nde"}, {"w": "shinu", "c": "nde"},
        {"w": "kaeru", "c": "tte", "trap": "g2", "note": "帰る是一类，る结尾走 って：帰って（不是 *帰て）。", "noteEn": "帰る is Group 1, so its final る takes って: 帰って (not *帰て)."},
        {"w": "hairu", "c": "tte", "trap": "g2", "note": "入る是一类：入って。", "noteEn": "入る is Group 1: 入って."},
        {"w": "kiruc", "c": "tte", "trap": "g2", "note": "切る（切）是一类：切って；着る（穿）是二类：着て。", "noteEn": "切る (cut) is Group 1: 切って; 着る (wear) is Group 2: 着て."},
        {"w": "hashiru", "c": "tte", "trap": "g2", "note": "走る是一类：走って。", "noteEn": "走る is Group 1: 走って."},
        {"w": "kiruw", "c": "g2"}, {"w": "akeru", "c": "g2"}, {"w": "neru", "c": "g2"}, {"w": "oshieru", "c": "g2"},
        {"w": "iku", "c": "x", "trap": "ite", "note": "行く以く结尾，按规则会是 *行いて，但它是例外：行って。", "noteEn": "行く ends in く, so the rule would give *行いて, but it is an exception: 行って."},
        {"w": "benkyou", "c": "x", "note": "名词＋する 跟 する 一样：勉強して。", "noteEn": "Noun + する goes like する: 勉強して."}
      ],
      "use": [
        {"id": "t1", "w": "isogu", "before": "時間がありません。", "after": "ください。", "task": "快来不及了，请对方快一点。", "taskEn": "You are running late. Ask the other person to hurry."},
        {"id": "t2", "w": "kasu", "before": "すみません、この傘を", "after": "ください。", "task": "外面下雨，向朋友借伞。", "taskEn": "It is raining. Ask a friend to lend you this umbrella."},
        {"id": "t3", "w": "akeru", "before": "暑いですね。窓を", "after": "ください。", "task": "房间很热，请人开窗。", "taskEn": "The room is hot. Ask someone to open the window."},
        {"id": "t4", "w": "hairu", "before": "どうぞ、中に", "after": "ください。", "task": "请客人进屋。", "taskEn": "Invite a guest to come inside."},
        {"id": "t5", "w": "kuru", "before": "明日、九時に駅に", "after": "ください。", "task": "请对方明天九点到车站来。", "taskEn": "Ask the other person to come to the station at nine tomorrow."}
      ],
      "edges": [
        {"id": "e-iku", "w": "iku", "c": "ite", "verdict": "break", "note": "行く 按“く→いて”会变成 *行いて，实际是 行って。这是 く 结尾动词里唯一的例外。", "noteEn": "By “く→いて”, 行く would give *行いて; the real form is 行って. It is the one exception among verbs ending in く."},
        {"id": "e-kiku", "w": "kiku", "c": "ite", "verdict": "rule", "note": "聞く 按规则就对：聞いて。例外只有 行く。", "noteEn": "聞く follows the rule: 聞いて. 行く is the only exception."},
        {"id": "e-kaeru-te", "w": "kaeru", "c": "g2", "verdict": "break", "note": "*帰て 是把帰る当成二类了。一类的る走 って：帰って。", "noteEn": "*帰て treats 帰る as Group 2. Group 1 る takes って: 帰って."},
        {"id": "e-okiru-te", "w": "okiru", "c": "g2", "verdict": "rule", "note": "起きる是二类：起きて。", "noteEn": "起きる is Group 2: 起きて."}
      ]
    },
    {
      "id": "ta", "pos": "v", "title": "た形", "titleEn": "ta-form (plain past)", "short": "た形", "shortEn": "ta",
      "kcs": ["kt:ja-plain-paradigm"],
      "prompt": "写出它的た形（普通体过去）", "promptEn": "Write its ta-form (plain past)",
      "hint1": "た形和て形的变法一样，只是て→た、で→だ。你还记得它的て形吗？", "hint1En": "The ta-form changes exactly like the te-form, with て→た and で→だ. Do you remember its te-form?",
      "classes": [
        {"id": "tte", "label": "一类 う・つ・る → った", "labelEn": "Group 1: う・つ・る → った", "rule": "词尾 う・つ・る 换成 った", "ruleEn": "final う, つ or る becomes った", "rewrite": [["う$", "った"], ["つ$", "った"], ["る$", "った"]]},
        {"id": "nde", "label": "一类 む・ぶ・ぬ → んだ", "labelEn": "Group 1: む・ぶ・ぬ → んだ", "rule": "词尾 む・ぶ・ぬ 换成 んだ", "ruleEn": "final む, ぶ or ぬ becomes んだ", "rewrite": [["む$", "んだ"], ["ぶ$", "んだ"], ["ぬ$", "んだ"]]},
        {"id": "ite", "label": "一类 く → いた", "labelEn": "Group 1: く → いた", "rule": "词尾 く 换成 いた", "ruleEn": "final く becomes いた", "rewrite": [["く$", "いた"]]},
        {"id": "ide", "label": "一类 ぐ → いだ", "labelEn": "Group 1: ぐ → いだ", "rule": "词尾 ぐ 换成 いだ", "ruleEn": "final ぐ becomes いだ", "rewrite": [["ぐ$", "いだ"]]},
        {"id": "shite", "label": "一类 す → した", "labelEn": "Group 1: す → した", "rule": "词尾 す 换成 した", "ruleEn": "final す becomes した", "rewrite": [["す$", "した"]]},
        {"id": "g2", "label": "二类 る → た", "labelEn": "Group 2: る → た", "rule": "去掉る，加た", "ruleEn": "drop る, add た", "rewrite": [["る$", "た"]]},
        {"id": "x", "label": "整词例外", "labelEn": "Whole-word exception", "rule": "する→した，来る→来た（きた），行く→行った", "ruleEn": "する→した, 来る→来た (きた), 行く→行った", "exception": true,
          "rewrite": [["行く$", "行った"], ["いく$", "いった"], ["来る$", "来た"], ["くる$", "きた"], ["する$", "した"]]}
      ],
      "induce": [{"w": "kau", "c": "tte"}, {"w": "matsu", "c": "tte"}, {"w": "yomu", "c": "nde"}, {"w": "kaku", "c": "ite"}, {"w": "oyogu", "c": "ide"}, {"w": "hanasu", "c": "shite"}, {"w": "taberu", "c": "g2"}, {"w": "suru", "c": "x"}],
      "items": [
        {"w": "aruku", "c": "ite"}, {"w": "kiku", "c": "ite"}, {"w": "isogu", "c": "ide"}, {"w": "kasu", "c": "shite"}, {"w": "motsu", "c": "tte"}, {"w": "au", "c": "tte"},
        {"w": "tsukuru", "c": "tte"}, {"w": "yobu", "c": "nde"}, {"w": "yasumu", "c": "nde"}, {"w": "shinu", "c": "nde"}, {"w": "erabu", "c": "nde"},
        {"w": "kaeru", "c": "tte", "trap": "g2", "note": "帰る是一类：帰った（不是 *帰た）。", "noteEn": "帰る is Group 1: 帰った (not *帰た)."},
        {"w": "hairu", "c": "tte", "trap": "g2", "note": "入る是一类：入った。", "noteEn": "入る is Group 1: 入った."},
        {"w": "hashiru", "c": "tte", "trap": "g2", "note": "走る是一类：走った。", "noteEn": "走る is Group 1: 走った."},
        {"w": "kiruw", "c": "g2"}, {"w": "akeru", "c": "g2"}, {"w": "kariru", "c": "g2"}, {"w": "deru", "c": "g2"},
        {"w": "iku", "c": "x", "trap": "ite", "note": "行く的た形同样是例外：行った（不是 *行いた）。", "noteEn": "行く is an exception in the ta-form too: 行った (not *行いた)."},
        {"w": "kuru", "c": "x", "note": "来る→来た，读 きた。", "noteEn": "来る→来た, read きた."}
      ],
      "use": [
        {"id": "a1", "w": "aruku", "before": "昨日、駅から家まで", "after": "。", "task": "用普通体告诉朋友你昨天做了什么。", "taskEn": "Tell a friend (plain style) what you did yesterday."},
        {"id": "a2", "w": "au", "before": "きのう、デパートで先生に", "after": "よ。", "task": "告诉朋友你昨天碰见了谁。", "taskEn": "Tell a friend who you ran into yesterday."},
        {"id": "a3", "w": "kariru", "before": "先週、図書館で本を三冊", "after": "。", "task": "说你上周借了什么。", "taskEn": "Say what you borrowed last week."},
        {"id": "a4", "w": "iku", "before": "日曜日、海に", "after": "。", "task": "说你星期天去了哪儿。", "taskEn": "Say where you went on Sunday."}
      ],
      "edges": [
        {"id": "e-iku-ta", "w": "iku", "c": "ite", "verdict": "break", "note": "行く的た形和て形一样是例外：行った。", "noteEn": "Like its te-form, 行く's ta-form is an exception: 行った."},
        {"id": "e-yomu-ta", "w": "yomu", "c": "nde", "verdict": "rule", "note": "読む按规则：読んだ。た形和て形的音便完全相同。", "noteEn": "読む follows the rule: 読んだ. The ta-form has exactly the same sound change as the te-form."},
        {"id": "e-kuru-ta", "w": "kuru", "c": "g2", "shown": "くた", "verdict": "break", "note": "来る不能当二类变：写成来た，但读 きた，不读 *くた。", "noteEn": "来る cannot be changed like Group 2: it is written 来た but read きた, never *くた."}
      ]
    },
    {
      "id": "nai", "pos": "v", "title": "ない形", "titleEn": "nai-form (plain negative)", "short": "ない形", "shortEn": "nai",
      "kcs": ["kt:ja-plain-paradigm"],
      "prompt": "写出它的ない形（普通体否定）", "promptEn": "Write its nai-form (plain negative)",
      "hint1": "一类把词尾换成あ段再加ない；词尾是う的时候换成わ，不是あ。", "hint1En": "Group 1 changes the final sound to its a-sound and adds ない; a final う becomes わ, not あ.",
      "classes": [
        {"id": "g1", "label": "一类（五段）", "labelEn": "Group 1 (godan)", "rule": "词尾换成あ段音再加ない（う→わ）", "ruleEn": "change the final sound to its a-sound and add ない (う→わ)",
          "rewrite": [["う$", "わない"], ["く$", "かない"], ["ぐ$", "がない"], ["す$", "さない"], ["つ$", "たない"], ["ぬ$", "なない"], ["ぶ$", "ばない"], ["む$", "まない"], ["る$", "らない"]]},
        {"id": "g2", "label": "二类（一段）", "labelEn": "Group 2 (ichidan)", "rule": "去掉る，加ない", "ruleEn": "drop る, add ない", "rewrite": [["る$", "ない"]]},
        {"id": "x", "label": "整词例外", "labelEn": "Whole-word exception", "rule": "する→しない，来る→来ない（こない），ある→ない", "ruleEn": "する→しない, 来る→来ない (こない), ある→ない", "exception": true,
          "rewrite": [["来る$", "来ない"], ["くる$", "こない"], ["する$", "しない"], ["^ある$", "ない"]]}
      ],
      "induce": [{"w": "kaku", "c": "g1"}, {"w": "nomu", "c": "g1"}, {"w": "matsu", "c": "g1"}, {"w": "hanasu", "c": "g1"}, {"w": "taberu", "c": "g2"}, {"w": "miru", "c": "g2"}, {"w": "suru", "c": "x"}, {"w": "kuru", "c": "x"}],
      "items": [
        {"w": "au", "c": "g1", "note": "う结尾变 わ：会わない（不是 *会あない）。", "noteEn": "A final う becomes わ: 会わない (not *会あない)."},
        {"w": "arau", "c": "g1", "note": "洗う→洗わない。", "noteEn": "洗う→洗わない."},
        {"w": "aruku", "c": "g1"}, {"w": "isogu", "c": "g1"}, {"w": "kasu", "c": "g1"}, {"w": "motsu", "c": "g1"}, {"w": "yobu", "c": "g1"}, {"w": "yasumu", "c": "g1"}, {"w": "tsukuru", "c": "g1"},
        {"w": "iku", "c": "g1", "note": "行く的ない形是规则的：行かない。", "noteEn": "行く is regular in the nai-form: 行かない."},
        {"w": "kaeru", "c": "g1", "trap": "g2", "note": "帰る是一类：帰らない（不是 *帰ない）。", "noteEn": "帰る is Group 1: 帰らない (not *帰ない)."},
        {"w": "hairu", "c": "g1", "trap": "g2", "note": "入る是一类：入らない。", "noteEn": "入る is Group 1: 入らない."},
        {"w": "shiru", "c": "g1", "trap": "g2", "note": "知る是一类：知らない。", "noteEn": "知る is Group 1: 知らない."},
        {"w": "hashiru", "c": "g1", "trap": "g2", "note": "走る是一类：走らない。", "noteEn": "走る is Group 1: 走らない."},
        {"w": "kiruw", "c": "g2"}, {"w": "akeru", "c": "g2"}, {"w": "oshieru", "c": "g2"}, {"w": "deru", "c": "g2"}, {"w": "abiru", "c": "g2"},
        {"w": "aru", "c": "x", "trap": "g1", "note": "ある按一类规则会是 *あらない，实际的否定就是 ない。", "noteEn": "By the Group 1 rule ある would give *あらない; its negative is simply ない."},
        {"w": "benkyou", "c": "x", "note": "勉強する→勉強しない。", "noteEn": "勉強する→勉強しない."}
      ],
      "use": [
        {"id": "n1", "w": "abiru", "before": "今日は疲れたから、シャワーを", "after": "。", "task": "用普通体说你今天不做的一件事。", "taskEn": "Say (plain style) one thing you are not doing today."},
        {"id": "n2", "w": "iku", "before": "日曜日は会社に", "after": "。", "task": "告诉朋友你星期天不去公司。", "taskEn": "Tell a friend you are not going to the office on Sunday."},
        {"id": "n3", "w": "shiru", "before": "あの人の名前は", "after": "。", "task": "告诉朋友你不知道那个人的名字。", "taskEn": "Tell a friend you do not know that person's name."},
        {"id": "n4", "w": "kaeru", "before": "今日は遅くまで仕事だから、早く", "after": "。", "task": "说你今天不会早回家。", "taskEn": "Say you will not go home early today."}
      ],
      "edges": [
        {"id": "e-aru", "w": "aru", "c": "g1", "verdict": "break", "note": "*あらない 不说。ある 的否定是 ない。", "noteEn": "Nobody says *あらない. The negative of ある is ない."},
        {"id": "e-au", "w": "au", "c": "g1", "verdict": "rule", "note": "会わない 是按规则来的：う 结尾换成 わ。", "noteEn": "会わない follows the rule: a final う becomes わ."},
        {"id": "e-kuru-nai", "w": "kuru", "c": "g2", "shown": "くない", "verdict": "break", "note": "来る 的否定写 来ない，读 こない，不读 *くない。", "noteEn": "The negative of 来る is written 来ない and read こない, never *くない."},
        {"id": "e-shiru", "w": "shiru", "c": "g2", "verdict": "break", "note": "*知ない 是把 知る 当成二类了。它是一类：知らない。", "noteEn": "*知ない treats 知る as Group 2. It is Group 1: 知らない."}
      ]
    },
    {
      "id": "adjneg", "pos": "a", "title": "形容词否定（普通体）", "titleEn": "Adjective negative (plain)", "short": "否定", "shortEn": "neg.",
      "kcs": ["kt:ja-plain-adjectives", "kt:ja-adjective-classes", "kt:ja-i-adjective-predicate"],
      "prompt": "写出它的普通体否定", "promptEn": "Write its plain negative",
      "hint1": "先判断它是イ形容词还是ナ形容词。光看最后一个字是不是い还不够。", "hint1En": "First decide whether it is an i-adjective or a na-adjective. Ending in い is not enough to tell.",
      "classes": [
        {"id": "i", "label": "イ形容词", "labelEn": "i-adjective", "rule": "词尾い换成く，再加ない", "ruleEn": "change the final い to く, then add ない", "rewrite": [["い$", "くない"]]},
        {"id": "na", "label": "ナ形容词", "labelEn": "na-adjective", "rule": "词干后加じゃない（或ではない）", "ruleEn": "add じゃない (or ではない) to the stem", "rewrite": [["$", "じゃない", "ではない"]]},
        {"id": "x", "label": "整词例外", "labelEn": "Whole-word exception", "rule": "いい→よくない", "ruleEn": "いい→よくない", "exception": true, "rewrite": [["^いい$", "よくない"]]}
      ],
      "induce": [{"w": "takai", "c": "i"}, {"w": "samui", "c": "i"}, {"w": "oishii", "c": "i"}, {"w": "shizuka", "c": "na"}, {"w": "benri", "c": "na"}, {"w": "genki", "c": "na"}, {"w": "ii", "c": "x"}],
      "items": [
        {"w": "atsui", "c": "i"}, {"w": "hiroi", "c": "i"}, {"w": "tanoshii", "c": "i"}, {"w": "chikai", "c": "i"}, {"w": "isogashii", "c": "i"}, {"w": "muzukashii", "c": "i"}, {"w": "omoshiroi", "c": "i"},
        {"w": "hima", "c": "na"}, {"w": "yuumei", "c": "na"}, {"w": "suki", "c": "na"}, {"w": "shinsetsu", "c": "na"},
        {"w": "kirei", "c": "na", "trap": "i", "note": "きれい 以い结尾，但它是ナ形容词：きれいじゃない（不是 *きれくない）。", "noteEn": "きれい ends in い, but it is a na-adjective: きれいじゃない (not *きれくない)."},
        {"w": "kirai", "c": "na", "trap": "i", "note": "嫌い（きらい）是ナ形容词：嫌いじゃない。", "noteEn": "嫌い (きらい) is a na-adjective: 嫌いじゃない."}
      ],
      "use": [
        {"id": "j1", "w": "hiroi", "before": "この部屋はあまり", "after": "。", "task": "用普通体说房间不太宽敞。", "taskEn": "Say (plain style) the room is not very spacious."},
        {"id": "j2", "w": "hima", "before": "ごめん、今日は", "after": "。", "task": "告诉朋友你今天没空。", "taskEn": "Tell a friend you are not free today."},
        {"id": "j3", "w": "kirei", "before": "この川の水はあまり", "after": "。", "task": "说这条河的水不太干净。", "taskEn": "Say the water in this river is not very clean."}
      ],
      "edges": [
        {"id": "e-ii", "w": "ii", "c": "i", "verdict": "break", "note": "*いくない 不说。いい 活用时词干变成 よ：よくない。", "noteEn": "Nobody says *いくない. When いい inflects, its stem becomes よ: よくない."},
        {"id": "e-kirei", "w": "kirei", "c": "i", "verdict": "break", "note": "きれい 是ナ形容词，*きれくない 是错的：きれいじゃない。", "noteEn": "きれい is a na-adjective, so *きれくない is wrong: きれいじゃない."},
        {"id": "e-takai", "w": "takai", "c": "i", "verdict": "rule", "note": "高い 按规则：高くない。", "noteEn": "高い follows the rule: 高くない."},
        {"id": "e-shizuka", "w": "shizuka", "c": "na", "verdict": "both", "real": ["静かじゃない", "静かではない"], "note": "静かじゃない 和 静かではない 都对：じゃ 是 では 的口语说法。", "noteEn": "静かじゃない and 静かではない are both right: じゃ is the spoken form of では."}
      ]
    },
    {
      "id": "adjpast", "pos": "a", "title": "形容词过去（普通体）", "titleEn": "Adjective past (plain)", "short": "过去", "shortEn": "past",
      "kcs": ["kt:ja-plain-adjectives", "kt:ja-adjective-classes", "kt:ja-i-adjective-past"],
      "prompt": "写出它的普通体过去形", "promptEn": "Write its plain past form",
      "hint1": "イ形容词自己变（い→かった）；ナ形容词靠后面的だ变（だった）。", "hint1En": "An i-adjective changes itself (い→かった); a na-adjective changes through だ (だった).",
      "classes": [
        {"id": "i", "label": "イ形容词", "labelEn": "i-adjective", "rule": "词尾い换成かった", "ruleEn": "change the final い to かった", "rewrite": [["い$", "かった"]]},
        {"id": "na", "label": "ナ形容词", "labelEn": "na-adjective", "rule": "词干后加だった", "ruleEn": "add だった to the stem", "rewrite": [["$", "だった"]]},
        {"id": "x", "label": "整词例外", "labelEn": "Whole-word exception", "rule": "いい→よかった", "ruleEn": "いい→よかった", "exception": true, "rewrite": [["^いい$", "よかった"]]}
      ],
      "induce": [{"w": "takai", "c": "i"}, {"w": "samui", "c": "i"}, {"w": "oishii", "c": "i"}, {"w": "shizuka", "c": "na"}, {"w": "benri", "c": "na"}, {"w": "genki", "c": "na"}],
      "items": [
        {"w": "atsui", "c": "i"}, {"w": "hiroi", "c": "i"}, {"w": "tanoshii", "c": "i"}, {"w": "chikai", "c": "i"}, {"w": "isogashii", "c": "i"}, {"w": "muzukashii", "c": "i"}, {"w": "omoshiroi", "c": "i"},
        {"w": "hima", "c": "na"}, {"w": "yuumei", "c": "na"}, {"w": "suki", "c": "na"}, {"w": "shinsetsu", "c": "na"},
        {"w": "kirei", "c": "na", "trap": "i", "note": "きれい 是ナ形容词：きれいだった（不是 *きれかった）。", "noteEn": "きれい is a na-adjective: きれいだった (not *きれかった)."},
        {"w": "kirai", "c": "na", "trap": "i", "note": "嫌い 是ナ形容词：嫌いだった。", "noteEn": "嫌い is a na-adjective: 嫌いだった."},
        {"w": "ii", "c": "x", "trap": "i", "note": "いい 的过去是 よかった（不是 *いかった）。", "noteEn": "The past of いい is よかった (not *いかった)."}
      ],
      "use": [
        {"id": "p1", "w": "tanoshii", "before": "旅行、すごく", "after": "。", "task": "用普通体告诉朋友旅行很开心。", "taskEn": "Tell a friend (plain style) the trip was great fun."},
        {"id": "p2", "w": "shizuka", "before": "昔、この町はとても", "after": "。", "task": "说这个小城以前很安静。", "taskEn": "Say this town used to be very quiet."},
        {"id": "p3", "w": "ii", "before": "昨日の天気は", "after": "？", "task": "问朋友昨天的天气好不好（普通体）。", "taskEn": "Ask a friend (plain style) whether the weather was good yesterday."}
      ],
      "edges": [
        {"id": "e-ii-p", "w": "ii", "c": "i", "verdict": "break", "note": "*いかった 不说：よかった。", "noteEn": "Nobody says *いかった: it is よかった."},
        {"id": "e-samui-p", "w": "samui", "c": "i", "verdict": "rule", "note": "寒い→寒かった，按规则。", "noteEn": "寒い→寒かった, by the rule."},
        {"id": "e-yuumei-p", "w": "yuumei", "c": "i", "shown": "有名かった", "verdict": "break", "note": "有名 是ナ形容词，过去是 有名だった。", "noteEn": "有名 is a na-adjective; its past is 有名だった."}
      ]
    }
  ]
};

KT_DATA["paradigm-apply-en"] = {
  "id": "paradigm-apply-en", "lang": "en", "speech": "en-US",
  "title": "英语词尾变化：把规则用到新词上", "titleEn": "English word endings: apply the rule to new words",
  "subtitle": "先把学过的词按变法分组，再给没见过的词判类、写出形式。写错时看推导链在哪一步分叉。", "subtitleEn": "First sort words you know by how they change, then classify new words and type their forms. When a form is wrong, the derivation shows the step where you went off track.",
  "review": [
    "dreamed/dreamt、learned/learnt、travelled/traveled 都接受；如果课堂只教一种拼写，请在 accept 里删掉另一种",
    "far 的比较级 farther / further 都接受",
    "quiet 的比较级 quieter / more quiet 都算对（边界题）；有的老师只接受 quieter",
    "fish 的复数（fish / fishes）没有放进练习，因为两种用法的区别不适合这个阶段",
    "wug 测试里的假词由浏览器朗读，读音需要试听；tass、gutch 的读法可能不稳定"
  ],
  "lexicon": {
    "book": {"base": "book", "gloss": "书", "pos": "n"}, "bus": {"base": "bus", "gloss": "公交车", "pos": "n"}, "box": {"base": "box", "gloss": "盒子", "pos": "n"},
    "baby": {"base": "baby", "gloss": "婴儿", "pos": "n"}, "knife": {"base": "knife", "gloss": "刀", "pos": "n"}, "man": {"base": "man", "gloss": "男人", "pos": "n"},
    "cat": {"base": "cat", "gloss": "猫", "pos": "n"}, "watchn": {"base": "watch", "gloss": "手表", "pos": "n"},
    "fox": {"base": "fox", "gloss": "狐狸", "pos": "n"}, "dish": {"base": "dish", "gloss": "盘子", "pos": "n"}, "lunch": {"base": "lunch", "gloss": "午饭", "pos": "n"},
    "glass": {"base": "glass", "gloss": "玻璃杯", "pos": "n"}, "city": {"base": "city", "gloss": "城市", "pos": "n"}, "party": {"base": "party", "gloss": "聚会", "pos": "n"},
    "story": {"base": "story", "gloss": "故事", "pos": "n"}, "key": {"base": "key", "gloss": "钥匙", "pos": "n"}, "toy": {"base": "toy", "gloss": "玩具", "pos": "n"},
    "leaf": {"base": "leaf", "gloss": "叶子", "pos": "n"}, "wolf": {"base": "wolf", "gloss": "狼", "pos": "n"}, "half": {"base": "half", "gloss": "一半", "pos": "n"},
    "roof": {"base": "roof", "gloss": "屋顶", "pos": "n"}, "chief": {"base": "chief", "gloss": "首领", "pos": "n"}, "potato": {"base": "potato", "gloss": "土豆", "pos": "n"},
    "tomato": {"base": "tomato", "gloss": "西红柿", "pos": "n"}, "photo": {"base": "photo", "gloss": "照片", "pos": "n"}, "piano": {"base": "piano", "gloss": "钢琴", "pos": "n"},
    "mouse": {"base": "mouse", "gloss": "老鼠", "pos": "n"}, "foot": {"base": "foot", "gloss": "脚", "pos": "n"}, "tooth": {"base": "tooth", "gloss": "牙齿", "pos": "n"},
    "sheep": {"base": "sheep", "gloss": "羊", "pos": "n"}, "person": {"base": "person", "gloss": "人", "pos": "n"}, "child": {"base": "child", "gloss": "孩子", "pos": "n"},
    "work": {"base": "work", "gloss": "工作", "pos": "v"}, "like": {"base": "like", "gloss": "喜欢", "pos": "v"}, "watch": {"base": "watch", "gloss": "看", "pos": "v"},
    "go": {"base": "go", "gloss": "去", "pos": "v"}, "study": {"base": "study", "gloss": "学习", "pos": "v"}, "wash": {"base": "wash", "gloss": "洗", "pos": "v"},
    "have": {"base": "have", "gloss": "有", "pos": "v"}, "play": {"base": "play", "gloss": "玩", "pos": "v"}, "read": {"base": "read", "gloss": "读", "pos": "v"},
    "cook": {"base": "cook", "gloss": "做饭", "pos": "v"}, "ride": {"base": "ride", "gloss": "骑", "pos": "v"}, "fix": {"base": "fix", "gloss": "修理", "pos": "v"},
    "push": {"base": "push", "gloss": "推", "pos": "v"}, "catch": {"base": "catch", "gloss": "抓住；赶上", "pos": "v"}, "miss": {"base": "miss", "gloss": "错过；想念", "pos": "v"},
    "carry": {"base": "carry", "gloss": "搬，拿", "pos": "v"}, "cry": {"base": "cry", "gloss": "哭", "pos": "v"}, "try": {"base": "try", "gloss": "尝试", "pos": "v"},
    "worry": {"base": "worry", "gloss": "担心", "pos": "v"}, "buy": {"base": "buy", "gloss": "买", "pos": "v"}, "enjoy": {"base": "enjoy", "gloss": "享受", "pos": "v"},
    "stay": {"base": "stay", "gloss": "待，停留", "pos": "v"}, "say": {"base": "say", "gloss": "说", "pos": "v"}, "be": {"base": "be", "gloss": "是", "pos": "v"},
    "do": {"base": "do", "gloss": "做", "pos": "v"}, "walk": {"base": "walk", "gloss": "走路", "pos": "v"}, "live": {"base": "live", "gloss": "住", "pos": "v"},
    "stop": {"base": "stop", "gloss": "停", "pos": "v"}, "clean": {"base": "clean", "gloss": "打扫", "pos": "v"}, "jump": {"base": "jump", "gloss": "跳", "pos": "v"},
    "open": {"base": "open", "gloss": "打开", "pos": "v"}, "visit": {"base": "visit", "gloss": "拜访", "pos": "v"}, "smile": {"base": "smile", "gloss": "微笑", "pos": "v"},
    "dance": {"base": "dance", "gloss": "跳舞", "pos": "v"}, "hope": {"base": "hope", "gloss": "希望", "pos": "v"}, "plan": {"base": "plan", "gloss": "计划", "pos": "v"},
    "drop": {"base": "drop", "gloss": "掉落", "pos": "v"}, "shop": {"base": "shop", "gloss": "购物", "pos": "v"}, "bring": {"base": "bring", "gloss": "带来", "pos": "v"},
    "eat": {"base": "eat", "gloss": "吃", "pos": "v"}, "dream": {"base": "dream", "gloss": "做梦", "pos": "v"}, "learn": {"base": "learn", "gloss": "学", "pos": "v"},
    "travel": {"base": "travel", "gloss": "旅行", "pos": "v"}, "make": {"base": "make", "gloss": "做，制作", "pos": "v"}, "write": {"base": "write", "gloss": "写", "pos": "v"},
    "run": {"base": "run", "gloss": "跑", "pos": "v"}, "lie": {"base": "lie", "gloss": "躺；说谎", "pos": "v"}, "sleep": {"base": "sleep", "gloss": "睡觉", "pos": "v"},
    "see": {"base": "see", "gloss": "看见", "pos": "v"}, "take": {"base": "take", "gloss": "拿", "pos": "v"}, "sit": {"base": "sit", "gloss": "坐", "pos": "v"},
    "get": {"base": "get", "gloss": "得到", "pos": "v"}, "put": {"base": "put", "gloss": "放", "pos": "v"}, "begin": {"base": "begin", "gloss": "开始", "pos": "v"},
    "die": {"base": "die", "gloss": "死", "pos": "v"}, "tie": {"base": "tie", "gloss": "系，绑", "pos": "v"}, "swim": {"base": "swim", "gloss": "游泳", "pos": "v"},
    "tall": {"base": "tall", "gloss": "高", "pos": "a"}, "cheap": {"base": "cheap", "gloss": "便宜", "pos": "a"}, "nice": {"base": "nice", "gloss": "好", "pos": "a"},
    "big": {"base": "big", "gloss": "大", "pos": "a"}, "easy": {"base": "easy", "gloss": "容易", "pos": "a"}, "expensive": {"base": "expensive", "gloss": "贵", "pos": "a"},
    "good": {"base": "good", "gloss": "好", "pos": "a"}, "hot": {"base": "hot", "gloss": "热", "pos": "a"}, "fast": {"base": "fast", "gloss": "快", "pos": "a"},
    "small": {"base": "small", "gloss": "小", "pos": "a"}, "warm": {"base": "warm", "gloss": "暖和", "pos": "a"}, "old": {"base": "old", "gloss": "老，旧", "pos": "a"},
    "slow": {"base": "slow", "gloss": "慢", "pos": "a"}, "new": {"base": "new", "gloss": "新", "pos": "a"}, "safe": {"base": "safe", "gloss": "安全", "pos": "a"},
    "wide": {"base": "wide", "gloss": "宽", "pos": "a"}, "large": {"base": "large", "gloss": "大", "pos": "a"}, "thin": {"base": "thin", "gloss": "薄；瘦", "pos": "a"},
    "wet": {"base": "wet", "gloss": "湿", "pos": "a"}, "sad": {"base": "sad", "gloss": "难过", "pos": "a"}, "happy": {"base": "happy", "gloss": "开心", "pos": "a"},
    "busy": {"base": "busy", "gloss": "忙", "pos": "a"}, "heavy": {"base": "heavy", "gloss": "重", "pos": "a"}, "early": {"base": "early", "gloss": "早", "pos": "a"},
    "beautiful": {"base": "beautiful", "gloss": "美丽", "pos": "a"}, "important": {"base": "important", "gloss": "重要", "pos": "a"}, "interesting": {"base": "interesting", "gloss": "有趣", "pos": "a"},
    "careful": {"base": "careful", "gloss": "小心", "pos": "a"}, "boring": {"base": "boring", "gloss": "无聊", "pos": "a"}, "bad": {"base": "bad", "gloss": "坏", "pos": "a"},
    "far": {"base": "far", "gloss": "远", "pos": "a"}, "quiet": {"base": "quiet", "gloss": "安静", "pos": "a"}
  },
  "sets": [
    {
      "id": "plural", "pos": "n", "title": "名词复数", "titleEn": "Plural nouns", "short": "复数", "shortEn": "plural",
      "kcs": ["kt:en-noun-plural", "kt:en-orth-inflection-spelling"],
      "prompt": "写出它的复数", "promptEn": "Write its plural",
      "hint1": "看最后一两个字母：是 s、x、ch、sh 吗？是 y 的话，y 前面是元音还是辅音？", "hint1En": "Look at the last one or two letters: is it s, x, ch or sh? If it is y, is the letter before y a vowel or a consonant?",
      "classes": [
        {"id": "s", "label": "加 -s", "labelEn": "add -s", "rule": "直接加 -s", "ruleEn": "just add -s", "rewrite": [["$", "s"]]},
        {"id": "es", "label": "加 -es", "labelEn": "add -es", "rule": "以 s、x、ch、sh 和部分 o 结尾：加 -es", "ruleEn": "after s, x, ch, sh and some words ending in o: add -es", "rewrite": [["$", "es"]]},
        {"id": "ies", "label": "辅音 + y → -ies", "labelEn": "consonant + y → -ies", "rule": "辅音字母后的 y 变成 i，再加 -es", "ruleEn": "y after a consonant becomes i, then add -es", "rewrite": [["y$", "ies"]]},
        {"id": "ves", "label": "-f / -fe → -ves", "labelEn": "-f / -fe → -ves", "rule": "词尾 f 或 fe 变成 v，再加 -es", "ruleEn": "a final f or fe becomes v, then add -es", "rewrite": [["fe?$", "ves"]]},
        {"id": "x", "label": "不规则（整词记）", "labelEn": "irregular (learn the whole word)", "rule": "不按规则变，整个词记住", "ruleEn": "does not follow a rule; learn the whole word", "exception": true}
      ],
      "induce": [{"w": "book", "c": "s"}, {"w": "cat", "c": "s"}, {"w": "bus", "c": "es"}, {"w": "box", "c": "es"}, {"w": "watchn", "c": "es"}, {"w": "baby", "c": "ies"}, {"w": "knife", "c": "ves"}, {"w": "man", "c": "x", "form": "men"}],
      "items": [
        {"w": "fox", "c": "es"}, {"w": "dish", "c": "es"}, {"w": "lunch", "c": "es"}, {"w": "glass", "c": "es"}, {"w": "potato", "c": "es"}, {"w": "tomato", "c": "es"},
        {"w": "city", "c": "ies"}, {"w": "party", "c": "ies"}, {"w": "story", "c": "ies"},
        {"w": "key", "c": "s", "trap": "ies", "note": "key 的 y 前面是元音 e，所以只加 -s：keys。", "noteEn": "In key the letter before y is the vowel e, so just add -s: keys."},
        {"w": "toy", "c": "s", "trap": "ies", "note": "toy 的 y 前面是元音 o：toys。", "noteEn": "In toy the letter before y is the vowel o: toys."},
        {"w": "photo", "c": "s", "trap": "es", "note": "photo 以 o 结尾，但只加 -s：photos。", "noteEn": "photo ends in o but just takes -s: photos."},
        {"w": "piano", "c": "s", "trap": "es", "note": "piano 只加 -s：pianos。", "noteEn": "piano just takes -s: pianos."},
        {"w": "roof", "c": "s", "trap": "ves", "note": "roof 以 f 结尾，但只加 -s：roofs。", "noteEn": "roof ends in f but just takes -s: roofs."},
        {"w": "chief", "c": "s", "trap": "ves", "note": "chief 只加 -s：chiefs。", "noteEn": "chief just takes -s: chiefs."},
        {"w": "leaf", "c": "ves"}, {"w": "wolf", "c": "ves"}, {"w": "half", "c": "ves"},
        {"w": "mouse", "c": "x", "form": "mice"}, {"w": "foot", "c": "x", "form": "feet"}, {"w": "tooth", "c": "x", "form": "teeth"},
        {"w": "sheep", "c": "x", "form": "sheep", "note": "sheep 单复数同形。", "noteEn": "sheep is the same in the singular and the plural."},
        {"w": "person", "c": "x", "form": "people", "note": "person 的复数一般用 people；*peoples 表示“很多人”是错的。", "noteEn": "The usual plural of person is people; *peoples for “many people” is wrong."}
      ],
      "use": [
        {"id": "u-pl1", "w": "potato", "before": "I need four", "after": "for the soup.", "task": "说做汤需要几个土豆。", "taskEn": "Say how many potatoes you need for the soup."},
        {"id": "u-pl2", "w": "dish", "before": "Can you wash the", "after": ", please?", "task": "请别人洗盘子。", "taskEn": "Ask someone to wash the dishes."},
        {"id": "u-pl3", "w": "child", "answer": ["children"], "before": "Two", "after": "are playing in the park.", "task": "说公园里有两个孩子在玩。", "taskEn": "Say two children are playing in the park."},
        {"id": "u-pl4", "w": "key", "before": "I can't find my", "after": ".", "task": "说你找不到钥匙了（不止一把）。", "taskEn": "Say you can't find your keys (more than one)."}
      ],
      "edges": [
        {"id": "e-key", "w": "key", "c": "ies", "verdict": "break", "real": ["keys"], "note": "-ies 只用在辅音 + y 后面。key 的 y 前是元音：keys。", "noteEn": "-ies is only for a consonant + y. In key the letter before y is a vowel: keys."},
        {"id": "e-city", "w": "city", "c": "ies", "verdict": "rule", "note": "city 是辅音 t + y：cities，按规则。", "noteEn": "city has the consonant t + y: cities, by the rule."},
        {"id": "e-sheep", "w": "sheep", "c": "s", "verdict": "break", "real": ["sheep"], "note": "sheep 复数不变：two sheep。", "noteEn": "sheep does not change: two sheep."},
        {"id": "e-chief", "w": "chief", "c": "ves", "verdict": "break", "real": ["chiefs"], "note": "不是所有 f 结尾的词都变 -ves：chiefs、roofs。", "noteEn": "Not every word ending in f takes -ves: chiefs, roofs."}
      ]
    },
    {
      "id": "third", "pos": "v", "title": "第三人称单数 -s", "titleEn": "Third person -s", "short": "he/she ___", "shortEn": "he/she ___",
      "kcs": ["kt:en-third-person-s", "kt:en-orth-inflection-spelling"],
      "prompt": "写出 he / she / it 后面的形式", "promptEn": "Write the form used after he / she / it",
      "hint1": "和名词复数的拼写规则一样：看最后的字母；y 前面是元音还是辅音？", "hint1En": "The spelling works like plural nouns: look at the last letters. Is the letter before y a vowel or a consonant?",
      "classes": [
        {"id": "s", "label": "加 -s", "labelEn": "add -s", "rule": "直接加 -s", "ruleEn": "just add -s", "rewrite": [["$", "s"]]},
        {"id": "es", "label": "加 -es", "labelEn": "add -es", "rule": "以 s、x、ch、sh、o 结尾：加 -es", "ruleEn": "after s, x, ch, sh, o: add -es", "rewrite": [["$", "es"]]},
        {"id": "ies", "label": "辅音 + y → -ies", "labelEn": "consonant + y → -ies", "rule": "辅音字母后的 y 变成 i，再加 -es", "ruleEn": "y after a consonant becomes i, then add -es", "rewrite": [["y$", "ies"]]},
        {"id": "x", "label": "不规则（整词记）", "labelEn": "irregular (learn the whole word)", "rule": "have→has，be→is", "ruleEn": "have→has, be→is", "exception": true}
      ],
      "induce": [{"w": "work", "c": "s"}, {"w": "like", "c": "s"}, {"w": "play", "c": "s"}, {"w": "watch", "c": "es"}, {"w": "go", "c": "es"}, {"w": "wash", "c": "es"}, {"w": "study", "c": "ies"}, {"w": "have", "c": "x", "form": "has"}],
      "items": [
        {"w": "read", "c": "s"}, {"w": "cook", "c": "s"}, {"w": "ride", "c": "s"}, {"w": "fix", "c": "es"}, {"w": "push", "c": "es"}, {"w": "catch", "c": "es"}, {"w": "miss", "c": "es"},
        {"w": "do", "c": "es", "note": "do 以 o 结尾：does。", "noteEn": "do ends in o: does."},
        {"w": "carry", "c": "ies"}, {"w": "cry", "c": "ies"}, {"w": "try", "c": "ies"}, {"w": "worry", "c": "ies"},
        {"w": "buy", "c": "s", "trap": "ies", "note": "buy 的 y 前是元音 u：buys。", "noteEn": "In buy the letter before y is the vowel u: buys."},
        {"w": "enjoy", "c": "s", "trap": "ies", "note": "enjoy 的 y 前是元音：enjoys。", "noteEn": "In enjoy the letter before y is a vowel: enjoys."},
        {"w": "stay", "c": "s", "trap": "ies", "note": "stay→stays。", "noteEn": "stay→stays."},
        {"w": "say", "c": "s", "trap": "ies", "note": "say→says，拼写按规则，读音变成 /sez/。", "noteEn": "say→says: the spelling is regular, but it is pronounced /sez/."},
        {"w": "be", "c": "x", "form": "is"}
      ],
      "use": [
        {"id": "u-3-1", "w": "ride", "before": "My sister", "after": "her bike to work.", "task": "说姐姐每天怎么上班。", "taskEn": "Say how your sister gets to work."},
        {"id": "u-3-2", "w": "worry", "before": "My mum", "after": "about everything.", "task": "说妈妈总是担心。", "taskEn": "Say your mum worries about everything."},
        {"id": "u-3-3", "w": "catch", "before": "Tom", "after": "the bus at eight.", "task": "说 Tom 几点赶公交。", "taskEn": "Say what time Tom catches the bus."},
        {"id": "u-3-4", "w": "fix", "before": "Our neighbour", "after": "old bikes.", "task": "说邻居的爱好。", "taskEn": "Say what your neighbour does as a hobby."}
      ],
      "edges": [
        {"id": "e-buy3", "w": "buy", "c": "ies", "verdict": "break", "real": ["buys"], "note": "元音 + y 只加 -s：buys。", "noteEn": "A vowel + y just takes -s: buys."},
        {"id": "e-try3", "w": "try", "c": "ies", "verdict": "rule", "note": "辅音 r + y：tries，按规则。", "noteEn": "Consonant r + y: tries, by the rule."},
        {"id": "e-have3", "w": "have", "c": "s", "verdict": "break", "real": ["has"], "note": "*haves 不说，要说 has。", "noteEn": "Nobody says *haves; it is has."}
      ]
    },
    {
      "id": "past", "pos": "v", "title": "过去式 -ed", "titleEn": "Past -ed", "short": "过去式", "shortEn": "past",
      "kcs": ["kt:en-orth-inflection-spelling", "kt:en-irregular-past"],
      "prompt": "写出它的过去式", "promptEn": "Write its past form",
      "hint1": "它是不是不规则动词？规则的话：以 e 结尾吗？最后是“一个短元音 + 一个辅音”而且重读吗？是辅音 + y 吗？", "hint1En": "Is it an irregular verb? If not: does it end in e? Does it end in one short stressed vowel + one consonant? Is it a consonant + y?",
      "classes": [
        {"id": "ed", "label": "加 -ed", "labelEn": "add -ed", "rule": "直接加 -ed", "ruleEn": "just add -ed", "rewrite": [["$", "ed"]]},
        {"id": "d", "label": "以 e 结尾：加 -d", "labelEn": "ends in e: add -d", "rule": "词尾是不发音的 e，只加 -d", "ruleEn": "after a silent e, just add -d", "rewrite": [["$", "d"]]},
        {"id": "dbl", "label": "双写末尾辅音 + -ed", "labelEn": "double the last consonant + -ed", "rule": "重读的短元音 + 一个辅音：双写这个辅音再加 -ed", "ruleEn": "a stressed short vowel + one consonant: double that consonant, then add -ed", "rewrite": [["(.)$", "$1$1ed"]]},
        {"id": "ied", "label": "辅音 + y → -ied", "labelEn": "consonant + y → -ied", "rule": "辅音字母后的 y 变成 i，再加 -ed", "ruleEn": "y after a consonant becomes i, then add -ed", "rewrite": [["y$", "ied"]]},
        {"id": "x", "label": "不规则（整词记）", "labelEn": "irregular (learn the whole word)", "rule": "不加 -ed，整个词记住", "ruleEn": "no -ed; learn the whole word", "exception": true}
      ],
      "induce": [{"w": "walk", "c": "ed"}, {"w": "watch", "c": "ed"}, {"w": "play", "c": "ed"}, {"w": "live", "c": "d"}, {"w": "like", "c": "d"}, {"w": "stop", "c": "dbl"}, {"w": "study", "c": "ied"}, {"w": "go", "c": "x", "form": "went"}],
      "items": [
        {"w": "clean", "c": "ed"}, {"w": "jump", "c": "ed"},
        {"w": "fix", "c": "ed", "trap": "dbl", "note": "x 永远不双写：fixed。", "noteEn": "x is never doubled: fixed."},
        {"w": "open", "c": "ed", "trap": "dbl", "note": "open 重音在前面，最后的音节不重读，不双写：opened。", "noteEn": "open is stressed on the first syllable; the last one is unstressed, so no doubling: opened."},
        {"w": "visit", "c": "ed", "trap": "dbl", "note": "visit 重音在 vis-，不双写：visited。", "noteEn": "visit is stressed on vis-, so no doubling: visited."},
        {"w": "stay", "c": "ed", "trap": "ied", "note": "元音 + y 只加 -ed：stayed。", "noteEn": "A vowel + y just takes -ed: stayed."},
        {"w": "enjoy", "c": "ed", "trap": "ied", "note": "enjoyed。", "noteEn": "enjoyed."},
        {"w": "dream", "c": "ed", "accept": ["dreamt"], "note": "dreamed 和 dreamt 都对（dreamt 英式更常见）。", "noteEn": "dreamed and dreamt are both right (dreamt is more common in British English)."},
        {"w": "learn", "c": "ed", "accept": ["learnt"], "note": "learned 和 learnt 都对。", "noteEn": "learned and learnt are both right."},
        {"w": "smile", "c": "d"}, {"w": "dance", "c": "d"}, {"w": "hope", "c": "d"},
        {"w": "plan", "c": "dbl"}, {"w": "drop", "c": "dbl"}, {"w": "shop", "c": "dbl"},
        {"w": "travel", "c": "dbl", "accept": ["traveled"], "note": "英式 travelled，美式 traveled，两种都对。", "noteEn": "British travelled, American traveled: both are right."},
        {"w": "carry", "c": "ied"}, {"w": "try", "c": "ied"}, {"w": "cry", "c": "ied"}, {"w": "worry", "c": "ied"},
        {"w": "buy", "c": "x", "form": "bought", "trap": "ed"},
        {"w": "bring", "c": "x", "form": "brought", "note": "bring 不跟 sing–sang 走：brought（不是 *brang）。", "noteEn": "bring does not follow sing–sang: brought (not *brang)."},
        {"w": "eat", "c": "x", "form": "ate"},
        {"w": "read", "c": "x", "form": "read", "note": "read 的过去式拼写不变，读音变成 /red/。", "noteEn": "read keeps its spelling in the past, but the sound changes to /red/."}
      ],
      "use": [
        {"id": "u-p1", "w": "clean", "before": "Yesterday we", "after": "the whole kitchen.", "task": "说昨天做了什么家务。", "taskEn": "Say what housework you did yesterday."},
        {"id": "u-p2", "w": "drop", "before": "Oh no, I", "after": "my phone in the water.", "task": "说刚才发生的一件倒霉事。", "taskEn": "Say what bad luck just happened."},
        {"id": "u-p3", "w": "buy", "before": "She", "after": "some bread on the way home.", "task": "说她回家路上买了什么。", "taskEn": "Say what she bought on the way home."},
        {"id": "u-p4", "w": "stay", "before": "It rained, so we", "after": "at home all day.", "task": "说下雨那天你们做了什么。", "taskEn": "Say what you did on the rainy day."}
      ],
      "edges": [
        {"id": "e-read", "w": "read", "c": "ed", "verdict": "break", "real": ["read"], "note": "*readed 不说。read 的过去式拼写不变，读 /red/。", "noteEn": "Nobody says *readed. The past of read is spelled read and said /red/."},
        {"id": "e-bring", "w": "bring", "c": "ed", "verdict": "break", "real": ["brought"], "note": "bring → brought，不跟 sing–sang 走。", "noteEn": "bring → brought; it does not follow sing–sang."},
        {"id": "e-walk", "w": "walk", "c": "ed", "verdict": "rule", "note": "walked，按规则。", "noteEn": "walked, by the rule."},
        {"id": "e-dream", "w": "dream", "c": "ed", "verdict": "both", "real": ["dreamed", "dreamt"], "note": "dreamed 和 dreamt 都在用。", "noteEn": "dreamed and dreamt are both in use."},
        {"id": "e-learn", "w": "learn", "c": "ed", "verdict": "both", "real": ["learned", "learnt"], "note": "learned 和 learnt 都在用（learnt 多见于英式）。", "noteEn": "learned and learnt are both in use (learnt mostly in British English)."},
        {"id": "e-play", "w": "play", "c": "ied", "verdict": "break", "real": ["played"], "note": "元音 + y 不变 i：played。", "noteEn": "A vowel + y does not change to i: played."},
        {"id": "e-travel", "w": "travel", "c": "dbl", "verdict": "both", "real": ["travelled", "traveled"], "note": "英式 travelled，美式 traveled。", "noteEn": "British travelled, American traveled."}
      ]
    },
    {
      "id": "ing", "pos": "v", "title": "-ing 形式", "titleEn": "-ing form", "short": "-ing", "shortEn": "-ing",
      "kcs": ["kt:en-orth-inflection-spelling", "kt:en-like-ing"],
      "prompt": "写出它的 -ing 形式", "promptEn": "Write its -ing form",
      "hint1": "以不发音的 e 结尾吗？以 ie 结尾吗？最后是“一个重读短元音 + 一个辅音”吗？y 永远保留。", "hint1En": "Does it end in a silent e? In ie? In one stressed short vowel + one consonant? A y always stays.",
      "classes": [
        {"id": "ing", "label": "加 -ing", "labelEn": "add -ing", "rule": "直接加 -ing（y 保留）", "ruleEn": "just add -ing (y stays)", "rewrite": [["$", "ing"]]},
        {"id": "drope", "label": "去 e + -ing", "labelEn": "drop e + -ing", "rule": "去掉不发音的 e，再加 -ing", "ruleEn": "drop the silent e, then add -ing", "rewrite": [["e$", "ing"]]},
        {"id": "dbl", "label": "双写末尾辅音 + -ing", "labelEn": "double the last consonant + -ing", "rule": "重读的短元音 + 一个辅音：双写这个辅音再加 -ing", "ruleEn": "a stressed short vowel + one consonant: double it, then add -ing", "rewrite": [["(.)$", "$1$1ing"]]},
        {"id": "ie", "label": "ie → -ying", "labelEn": "ie → -ying", "rule": "词尾 ie 变成 y，再加 -ing", "ruleEn": "a final ie becomes y, then add -ing", "rewrite": [["ie$", "ying"]]},
        {"id": "x", "label": "不规则（整词记）", "labelEn": "irregular (learn the whole word)", "rule": "（-ing 形式其实没有不规则的）", "ruleEn": "(no verb has an irregular -ing form)", "exception": true}
      ],
      "induce": [{"w": "play", "c": "ing"}, {"w": "cook", "c": "ing"}, {"w": "study", "c": "ing"}, {"w": "make", "c": "drope"}, {"w": "write", "c": "drope"}, {"w": "run", "c": "dbl"}, {"w": "swim", "c": "dbl"}, {"w": "lie", "c": "ie"}],
      "items": [
        {"w": "eat", "c": "ing"}, {"w": "sleep", "c": "ing"},
        {"w": "visit", "c": "ing", "trap": "dbl", "note": "visit 重音不在最后：visiting。", "noteEn": "visit is not stressed at the end: visiting."},
        {"w": "open", "c": "ing", "trap": "dbl", "note": "opening。", "noteEn": "opening."},
        {"w": "fix", "c": "ing", "trap": "dbl", "note": "x 不双写：fixing。", "noteEn": "x is never doubled: fixing."},
        {"w": "carry", "c": "ing", "note": "-ing 前 y 保留：carrying。", "noteEn": "y stays before -ing: carrying."},
        {"w": "see", "c": "ing", "trap": "drope", "note": "see 的 e 发音（ee），不去掉：seeing。", "noteEn": "The e in see is sounded (ee), so it stays: seeing."},
        {"w": "ride", "c": "drope"}, {"w": "smile", "c": "drope"}, {"w": "dance", "c": "drope"}, {"w": "take", "c": "drope"},
        {"w": "sit", "c": "dbl"}, {"w": "get", "c": "dbl"}, {"w": "put", "c": "dbl"}, {"w": "stop", "c": "dbl"},
        {"w": "begin", "c": "dbl", "note": "begin 重音在 -gin：beginning。", "noteEn": "begin is stressed on -gin: beginning."},
        {"w": "travel", "c": "dbl", "accept": ["traveling"], "note": "英式 travelling，美式 traveling。", "noteEn": "British travelling, American traveling."},
        {"w": "die", "c": "ie"}, {"w": "tie", "c": "ie"}
      ],
      "use": [
        {"id": "u-i1", "w": "dance", "before": "I love", "after": ".", "task": "说你喜欢的一件事。", "taskEn": "Say something you love doing."},
        {"id": "u-i2", "w": "swim", "before": "Do you like", "after": "in the sea?", "task": "问朋友喜不喜欢在海里游泳。", "taskEn": "Ask a friend if they like swimming in the sea."},
        {"id": "u-i3", "w": "get", "before": "She hates", "after": "up early.", "task": "说她讨厌早起。", "taskEn": "Say she hates getting up early."},
        {"id": "u-i4", "w": "cook", "before": "My dad enjoys", "after": "on Sundays.", "task": "说爸爸周日喜欢做什么。", "taskEn": "Say what your dad enjoys doing on Sundays."}
      ],
      "edges": [
        {"id": "e-see", "w": "see", "c": "drope", "verdict": "break", "real": ["seeing"], "note": "“去 e”只对不发音的 e：see 的 ee 发音，要写 seeing。", "noteEn": "“Drop e” is only for a silent e: the ee in see is sounded, so it is seeing."},
        {"id": "e-begin", "w": "begin", "c": "dbl", "verdict": "rule", "note": "begin 重音在后：beginning，按规则双写。", "noteEn": "begin is stressed at the end: beginning, doubled by the rule."},
        {"id": "e-visit", "w": "visit", "c": "dbl", "verdict": "break", "real": ["visiting"], "note": "visit 重音在前，不双写：visiting。", "noteEn": "visit is stressed at the start, so no doubling: visiting."},
        {"id": "e-study", "w": "study", "c": "ie", "shown": "studing", "verdict": "break", "real": ["studying"], "note": "-ing 前 y 不变：studying。", "noteEn": "Before -ing the y stays: studying."}
      ]
    },
    {
      "id": "comp", "pos": "a", "title": "形容词比较级", "titleEn": "Comparative adjectives", "short": "比较级", "shortEn": "comparative",
      "kcs": ["kt:en-comparatives", "kt:en-orth-inflection-spelling"],
      "prompt": "写出它的比较级", "promptEn": "Write its comparative",
      "hint1": "数一数音节：一个音节加 -er，长词前面加 more。再看拼写：e 结尾、短元音 + 辅音、辅音 + y。", "hint1En": "Count the syllables: one syllable takes -er, long words take more. Then check the spelling: ends in e, short vowel + consonant, consonant + y.",
      "classes": [
        {"id": "er", "label": "加 -er", "labelEn": "add -er", "rule": "单音节：直接加 -er", "ruleEn": "one syllable: just add -er", "rewrite": [["$", "er"]]},
        {"id": "r", "label": "以 e 结尾：加 -r", "labelEn": "ends in e: add -r", "rule": "词尾是 e，只加 -r", "ruleEn": "after a final e, just add -r", "rewrite": [["$", "r"]]},
        {"id": "dbl", "label": "双写末尾辅音 + -er", "labelEn": "double the last consonant + -er", "rule": "短元音 + 一个辅音：双写再加 -er", "ruleEn": "short vowel + one consonant: double it, then add -er", "rewrite": [["(.)$", "$1$1er"]]},
        {"id": "ier", "label": "辅音 + y → -ier", "labelEn": "consonant + y → -ier", "rule": "辅音后的 y 变成 i，再加 -er", "ruleEn": "y after a consonant becomes i, then add -er", "rewrite": [["y$", "ier"]]},
        {"id": "more", "label": "前面加 more", "labelEn": "put more in front", "rule": "两个音节以上（-y 结尾的除外）：more + 原形", "ruleEn": "two or more syllables (except most ending in -y): more + the adjective", "rewrite": [["^", "more "]]},
        {"id": "x", "label": "不规则（整词记）", "labelEn": "irregular (learn the whole word)", "rule": "good→better，bad→worse，far→farther/further", "ruleEn": "good→better, bad→worse, far→farther/further", "exception": true}
      ],
      "induce": [{"w": "tall", "c": "er"}, {"w": "cheap", "c": "er"}, {"w": "nice", "c": "r"}, {"w": "big", "c": "dbl"}, {"w": "hot", "c": "dbl"}, {"w": "easy", "c": "ier"}, {"w": "expensive", "c": "more"}, {"w": "good", "c": "x", "form": "better"}],
      "items": [
        {"w": "fast", "c": "er"}, {"w": "small", "c": "er"}, {"w": "warm", "c": "er"}, {"w": "old", "c": "er"},
        {"w": "slow", "c": "er", "trap": "dbl", "note": "w 不双写：slower。", "noteEn": "w is never doubled: slower."},
        {"w": "new", "c": "er", "trap": "dbl", "note": "newer。", "noteEn": "newer."},
        {"w": "safe", "c": "r"}, {"w": "wide", "c": "r"}, {"w": "large", "c": "r"},
        {"w": "thin", "c": "dbl"}, {"w": "wet", "c": "dbl"}, {"w": "sad", "c": "dbl"},
        {"w": "happy", "c": "ier"}, {"w": "busy", "c": "ier"}, {"w": "heavy", "c": "ier"}, {"w": "early", "c": "ier"},
        {"w": "beautiful", "c": "more"}, {"w": "important", "c": "more"}, {"w": "interesting", "c": "more"}, {"w": "careful", "c": "more"},
        {"w": "boring", "c": "more", "trap": "er", "note": "boring 是两个音节的 -ing 形容词：more boring（不是 *boringer）。", "noteEn": "boring is a two-syllable -ing adjective: more boring (not *boringer)."},
        {"w": "bad", "c": "x", "form": "worse", "trap": "dbl"},
        {"w": "far", "c": "x", "form": "farther", "accept": ["further"], "note": "farther 和 further 都对。", "noteEn": "farther and further are both right."}
      ],
      "use": [
        {"id": "u-c1", "w": "fast", "before": "My new phone is", "after": "than my old one.", "task": "比较新旧手机。", "taskEn": "Compare your new and old phones."},
        {"id": "u-c2", "w": "heavy", "before": "This bag is", "after": "than that one.", "task": "比较两个包。", "taskEn": "Compare two bags."},
        {"id": "u-c3", "w": "bad", "before": "The weather today is", "after": "than yesterday.", "task": "说今天天气比昨天差。", "taskEn": "Say today's weather is worse than yesterday's."},
        {"id": "u-c4", "w": "interesting", "before": "The museum was", "after": "than the park.", "task": "比较博物馆和公园。", "taskEn": "Compare the museum and the park."}
      ],
      "edges": [
        {"id": "e-cheap", "w": "cheap", "c": "more", "shown": "more cheaper", "verdict": "break", "real": ["cheaper"], "note": "-er 和 more 只用一个：cheaper。*more cheaper 是把两条规则叠在一起了。", "noteEn": "Use either -er or more, not both: cheaper. *more cheaper stacks two rules."},
        {"id": "e-good", "w": "good", "c": "er", "verdict": "break", "real": ["better"], "note": "*gooder 不说：better。", "noteEn": "Nobody says *gooder: better."},
        {"id": "e-big", "w": "big", "c": "dbl", "verdict": "rule", "note": "bigger，按规则双写。", "noteEn": "bigger, doubled by the rule."},
        {"id": "e-quiet", "w": "quiet", "c": "er", "verdict": "both", "real": ["quieter", "more quiet"], "note": "quiet 这样的双音节词，quieter 和 more quiet 都有人说。", "noteEn": "For two-syllable words like quiet, both quieter and more quiet are used."}
      ]
    }
  ],
  "wug": [
    {"id": "wug1", "pic": "blob", "line1": "This is a wug.", "line2": "Now there are two …", "options": ["wug", "wugs", "wuggies"], "answer": "wugs", "set": "plural"},
    {"id": "wug2", "pic": "spike", "line1": "This is a tass.", "line2": "Now there are two …", "options": ["tass", "tasses", "tassy"], "answer": "tasses", "set": "plural"},
    {"id": "wug3", "pic": "round", "line1": "This is a gutch.", "line2": "Now there are two …", "options": ["gutch", "gutchs", "gutches"], "answer": "gutches", "set": "plural"},
    {"id": "wug4", "pic": "blob", "line1": "Today he blicks.", "line2": "Yesterday he …", "options": ["blick", "blicked", "blacked"], "answer": "blicked", "set": "past"},
    {"id": "wug5", "pic": "spike", "line1": "Every day she ricks.", "line2": "Yesterday she …", "options": ["ricked", "rick", "racked"], "answer": "ricked", "set": "past"},
    {"id": "wug6", "pic": "round", "line1": "This man knows how to zib.", "line2": "Right now he is …", "options": ["zib", "zibbing", "zibbed"], "answer": "zibbing", "set": "ing"}
  ]
};

KT_DATA["paradigm-apply-zh"] = {
  "id": "paradigm-apply-zh", "lang": "zh", "speech": "zh-CN",
  "title": "汉语重叠与正反问：把格式用到新词上", "titleEn": "Chinese reduplication and A-not-A: apply the pattern to new words",
  "subtitle": "汉语的词不变形，但有几种固定的格式：动词重叠、形容词重叠、正反问。先给学过的词分组，再用到新词上。", "subtitleEn": "Chinese words do not inflect, but there are a few fixed patterns: verb reduplication, adjective reduplication and A-not-A questions. Sort words you know first, then apply the patterns to new words.",
  "review": [
    "聊天、见面 这类离合词的 ABAB 重叠（*聊天聊天、*见面见面）判为错，个别方言或口语里可能听到，请老师确认",
    "冰凉、通红、笔直 的 ABAB 重叠（冰凉冰凉）属于状态形容词，口语色彩较重，请确认是否适合当前学习者",
    "复杂、伟大、重要、危险 判为“不能重叠”；如有地区性用法请指出",
    "好吃不好吃／好不好吃、喜欢不喜欢／喜不喜欢 两种都接受",
    "单音节动词 AA 与 A一A 都接受（看看／看一看）"
  ],
  "lexicon": {
    "kan": {"base": "看", "glossEn": "look", "pos": "v"}, "shi4": {"base": "试", "glossEn": "try", "pos": "v"}, "chang": {"base": "尝", "glossEn": "taste", "pos": "v"},
    "xiuxi": {"base": "休息", "glossEn": "rest", "pos": "v"}, "jieshao": {"base": "介绍", "glossEn": "introduce", "pos": "v"}, "sanbu": {"base": "散步", "glossEn": "take a walk", "pos": "v"},
    "liaotian": {"base": "聊天", "glossEn": "chat", "pos": "v"}, "shi": {"base": "是", "glossEn": "be", "pos": "v"},
    "ting": {"base": "听", "glossEn": "listen", "pos": "v"}, "xiang": {"base": "想", "glossEn": "think", "pos": "v"}, "deng": {"base": "等", "glossEn": "wait", "pos": "v"},
    "wen": {"base": "问", "glossEn": "ask", "pos": "v"}, "zou": {"base": "走", "glossEn": "walk", "pos": "v"}, "shuo": {"base": "说", "glossEn": "say", "pos": "v"},
    "yanjiu": {"base": "研究", "glossEn": "look into", "pos": "v"}, "taolun": {"base": "讨论", "glossEn": "discuss", "pos": "v"}, "dasao": {"base": "打扫", "glossEn": "clean up", "pos": "v"},
    "zhunbei": {"base": "准备", "glossEn": "prepare", "pos": "v"}, "shoushi": {"base": "收拾", "glossEn": "tidy up", "pos": "v"}, "shangliang": {"base": "商量", "glossEn": "talk over", "pos": "v"},
    "bangmang": {"base": "帮忙", "glossEn": "help out", "pos": "v"}, "tiaowu": {"base": "跳舞", "glossEn": "dance", "pos": "v"}, "xizao": {"base": "洗澡", "glossEn": "take a bath", "pos": "v"},
    "jianmian": {"base": "见面", "glossEn": "meet up", "pos": "v"}, "youyong": {"base": "游泳", "glossEn": "swim", "pos": "v"},
    "zhidao": {"base": "知道", "glossEn": "know", "pos": "v"}, "zai": {"base": "在", "glossEn": "be at", "pos": "v"}, "you": {"base": "有", "glossEn": "have", "pos": "v"},
    "xing": {"base": "姓", "glossEn": "be surnamed", "pos": "v"}, "juede": {"base": "觉得", "glossEn": "feel, think", "pos": "v"},
    "da": {"base": "大", "glossEn": "big", "pos": "a"}, "man": {"base": "慢", "glossEn": "slow", "pos": "a"}, "ganjing": {"base": "干净", "glossEn": "clean", "pos": "a"},
    "gaoxing": {"base": "高兴", "glossEn": "happy", "pos": "a"}, "xuebai": {"base": "雪白", "glossEn": "snow-white", "pos": "a"}, "piaoliang": {"base": "漂亮", "glossEn": "pretty", "pos": "a"},
    "zhongyao": {"base": "重要", "glossEn": "important", "pos": "a"}, "chang2": {"base": "长", "glossEn": "long", "pos": "a"}, "hong": {"base": "红", "glossEn": "red", "pos": "a"},
    "gao": {"base": "高", "glossEn": "tall", "pos": "a"}, "xiao": {"base": "小", "glossEn": "small", "pos": "a"}, "qingchu": {"base": "清楚", "glossEn": "clear", "pos": "a"},
    "shufu": {"base": "舒服", "glossEn": "comfortable", "pos": "a"}, "renzhen": {"base": "认真", "glossEn": "serious, careful", "pos": "a"}, "jiandan": {"base": "简单", "glossEn": "simple", "pos": "a"},
    "kuaile": {"base": "快乐", "glossEn": "joyful", "pos": "a"}, "anjing": {"base": "安静", "glossEn": "quiet", "pos": "a"}, "mingbai": {"base": "明白", "glossEn": "clear", "pos": "a"},
    "bingliang": {"base": "冰凉", "glossEn": "ice-cold", "pos": "a"}, "tonghong": {"base": "通红", "glossEn": "bright red", "pos": "a"}, "bizhi": {"base": "笔直", "glossEn": "dead straight", "pos": "a"},
    "weida": {"base": "伟大", "glossEn": "great", "pos": "a"}, "fuza": {"base": "复杂", "glossEn": "complicated", "pos": "a"}, "weixian": {"base": "危险", "glossEn": "dangerous", "pos": "a"},
    "qu": {"base": "去", "glossEn": "go", "pos": "q"}, "haochi": {"base": "好吃", "glossEn": "tasty", "pos": "q"}, "xihuan": {"base": "喜欢", "glossEn": "like", "pos": "q"},
    "you3": {"base": "有", "glossEn": "have", "pos": "q"}, "mang": {"base": "忙", "glossEn": "busy", "pos": "q"}, "shi3": {"base": "是", "glossEn": "be", "pos": "q"},
    "lai": {"base": "来", "glossEn": "come", "pos": "q"}, "chi": {"base": "吃", "glossEn": "eat", "pos": "q"}, "mai": {"base": "买", "glossEn": "buy", "pos": "q"},
    "gui": {"base": "贵", "glossEn": "expensive", "pos": "q"}, "leng": {"base": "冷", "glossEn": "cold", "pos": "q"}, "xiang3": {"base": "想", "glossEn": "want to", "pos": "q"},
    "hui": {"base": "会", "glossEn": "can (learned skill)", "pos": "q"}, "renshi": {"base": "认识", "glossEn": "know (a person)", "pos": "q"}, "zhidao3": {"base": "知道", "glossEn": "know", "pos": "q"},
    "piaoliang3": {"base": "漂亮", "glossEn": "pretty", "pos": "q"}, "keyi": {"base": "可以", "glossEn": "may, can", "pos": "q"}, "fangbian": {"base": "方便", "glossEn": "convenient", "pos": "q"},
    "shufu3": {"base": "舒服", "glossEn": "comfortable", "pos": "q"}
  },
  "sets": [
    {
      "id": "vredup", "pos": "v", "title": "动词重叠", "titleEn": "Verb reduplication", "short": "重叠", "shortEn": "redup.",
      "kcs": ["kt:zh-verb-reduplication", "kt:zh-reduplication"],
      "prompt": "写出它的重叠形式（表示“……一下”）", "promptEn": "Write its reduplicated form (meaning “do it a little”)",
      "hint1": "数一数有几个字。两个字的话，它是“动词＋宾语”（像 散步）还是一个整体的动词（像 休息）？它是动作吗？", "hint1En": "Count the characters. If there are two, is it verb + object (like 散步) or one verb (like 休息)? Is it an action at all?",
      "classes": [
        {"id": "aa", "label": "单音节 AA（或 A一A）", "labelEn": "one syllable: AA (or A一A)", "rule": "单音节动词重叠：看→看看／看一看", "ruleEn": "repeat a one-syllable verb: 看→看看 / 看一看", "rewrite": [["^(.)$", "$1$1", "$1一$1"]]},
        {"id": "abab", "label": "双音节 ABAB", "labelEn": "two syllables: ABAB", "rule": "双音节动词整个重复：休息→休息休息", "ruleEn": "repeat the whole two-syllable verb: 休息→休息休息", "rewrite": [["^(..)$", "$1$1"]]},
        {"id": "aab", "label": "离合词 AAB", "labelEn": "separable verb: AAB", "rule": "动词＋宾语的词只重复动词：散步→散散步", "ruleEn": "for verb + object words, repeat only the verb: 散步→散散步", "rewrite": [["^(.)(.)$", "$1$1$2"]]},
        {"id": "none", "label": "不能重叠", "labelEn": "cannot reduplicate", "rule": "不表示动作的动词（是、有、在、知道……）不重叠", "ruleEn": "verbs that are not actions (是, 有, 在, 知道 …) do not reduplicate", "exception": true, "noForm": true}
      ],
      "induce": [{"w": "kan", "c": "aa"}, {"w": "shi4", "c": "aa"}, {"w": "chang", "c": "aa"}, {"w": "xiuxi", "c": "abab"}, {"w": "jieshao", "c": "abab"}, {"w": "sanbu", "c": "aab"}, {"w": "liaotian", "c": "aab"}, {"w": "shi", "c": "none"}],
      "items": [
        {"w": "ting", "c": "aa"}, {"w": "xiang", "c": "aa"}, {"w": "deng", "c": "aa"}, {"w": "wen", "c": "aa"}, {"w": "zou", "c": "aa"}, {"w": "shuo", "c": "aa"},
        {"w": "yanjiu", "c": "abab"}, {"w": "taolun", "c": "abab"}, {"w": "dasao", "c": "abab"}, {"w": "zhunbei", "c": "abab"}, {"w": "shoushi", "c": "abab"}, {"w": "shangliang", "c": "abab"},
        {"w": "bangmang", "c": "aab", "trap": "abab", "note": "帮忙 是“帮＋忙”，只重复动词：帮帮忙。", "noteEn": "帮忙 is 帮 + 忙 (verb + object), so only the verb repeats: 帮帮忙."},
        {"w": "tiaowu", "c": "aab", "trap": "abab", "note": "跳舞→跳跳舞。", "noteEn": "跳舞→跳跳舞."},
        {"w": "xizao", "c": "aab", "trap": "abab", "note": "洗澡→洗洗澡。", "noteEn": "洗澡→洗洗澡."},
        {"w": "jianmian", "c": "aab", "trap": "abab", "note": "见面→见见面。", "noteEn": "见面→见见面."},
        {"w": "youyong", "c": "aab"},
        {"w": "zhidao", "c": "none", "trap": "abab", "note": "知道 不是动作，不能重叠：*知道知道。", "noteEn": "知道 is not an action and does not reduplicate: *知道知道."},
        {"w": "zai", "c": "none"}, {"w": "you", "c": "none"}, {"w": "xing", "c": "none"},
        {"w": "juede", "c": "none", "trap": "abab", "note": "觉得 表示看法，不重叠。", "noteEn": "觉得 expresses an opinion and does not reduplicate."}
      ],
      "use": [
        {"id": "z-v1", "w": "ting", "before": "这首歌很好听，你", "after": "吧。", "task": "向朋友推荐一首歌。", "taskEn": "Recommend a song to a friend."},
        {"id": "z-v2", "w": "zou", "before": "吃完饭，我们出去", "after": "吧。", "task": "饭后提议出去走一走。", "taskEn": "Suggest going out for a little walk after the meal."},
        {"id": "z-v3", "w": "shangliang", "before": "这件事我们再", "after": "吧。", "task": "建议再商量一下。", "taskEn": "Suggest talking it over a bit more."},
        {"id": "z-v4", "w": "jianmian", "before": "你们俩应该", "after": "，好好聊一聊。", "task": "建议两个人见个面。", "taskEn": "Suggest that the two of them meet up."}
      ],
      "edges": [
        {"id": "e-shi", "w": "shi", "c": "aa", "verdict": "break", "real": ["—"], "note": "是 不表示动作，不能重叠：*是是。", "noteEn": "是 is not an action and cannot reduplicate: *是是."},
        {"id": "e-xiuxi", "w": "xiuxi", "c": "abab", "shown": "休休息息", "verdict": "break", "real": ["休息休息"], "note": "*休休息息 是把形容词的 AABB 用到了动词上。动词是 ABAB：休息休息。", "noteEn": "*休休息息 applies the adjective pattern AABB to a verb. Verbs take ABAB: 休息休息."},
        {"id": "e-kan", "w": "kan", "c": "aa", "verdict": "rule", "note": "看看，按规则。", "noteEn": "看看, by the rule."},
        {"id": "e-deng", "w": "deng", "c": "aa", "verdict": "both", "real": ["等等", "等一等"], "note": "等等 和 等一等 都对。", "noteEn": "等等 and 等一等 are both right."},
        {"id": "e-liaotian", "w": "liaotian", "c": "abab", "verdict": "break", "real": ["聊聊天"], "note": "聊天 是离合词，只重复动词：聊聊天。", "noteEn": "聊天 is a separable verb; only the verb repeats: 聊聊天."},
        {"id": "e-zhidao", "w": "zhidao", "c": "abab", "verdict": "break", "real": ["—"], "note": "知道 不能重叠。", "noteEn": "知道 cannot reduplicate."}
      ]
    },
    {
      "id": "aredup", "pos": "a", "title": "形容词重叠", "titleEn": "Adjective reduplication", "short": "重叠", "shortEn": "redup.",
      "kcs": ["kt:zh-reduplication"],
      "prompt": "写出它的重叠形式（描写，程度更深）", "promptEn": "Write its reduplicated form (descriptive, stronger)",
      "hint1": "数一数有几个字。两个字的话：它是一般形容词（干净），还是本身已经带着比喻的“状态形容词”（雪白＝像雪一样白）？", "hint1En": "Count the characters. If there are two: is it an ordinary adjective (干净), or a “state adjective” that already contains a comparison (雪白 = white as snow)?",
      "classes": [
        {"id": "aa", "label": "单音节 AA", "labelEn": "one syllable: AA", "rule": "单音节形容词重叠：大→大大", "ruleEn": "repeat a one-syllable adjective: 大→大大", "rewrite": [["^(.)$", "$1$1"]]},
        {"id": "aabb", "label": "双音节 AABB", "labelEn": "two syllables: AABB", "rule": "每个字各重复一次：干净→干干净净", "ruleEn": "repeat each character: 干净→干干净净", "rewrite": [["^(.)(.)$", "$1$1$2$2"]]},
        {"id": "abab", "label": "状态形容词 ABAB", "labelEn": "state adjective: ABAB", "rule": "带比喻的状态形容词整个重复：雪白→雪白雪白", "ruleEn": "repeat the whole state adjective: 雪白→雪白雪白", "rewrite": [["^(..)$", "$1$1"]]},
        {"id": "none", "label": "不能重叠", "labelEn": "cannot reduplicate", "rule": "有些形容词（伟大、重要、复杂……）不重叠", "ruleEn": "some adjectives (伟大, 重要, 复杂 …) do not reduplicate", "exception": true, "noForm": true}
      ],
      "induce": [{"w": "da", "c": "aa"}, {"w": "man", "c": "aa"}, {"w": "ganjing", "c": "aabb"}, {"w": "gaoxing", "c": "aabb"}, {"w": "piaoliang", "c": "aabb"}, {"w": "xuebai", "c": "abab"}, {"w": "zhongyao", "c": "none"}],
      "items": [
        {"w": "chang2", "c": "aa"}, {"w": "hong", "c": "aa"}, {"w": "gao", "c": "aa"}, {"w": "xiao", "c": "aa"},
        {"w": "qingchu", "c": "aabb"}, {"w": "shufu", "c": "aabb"}, {"w": "renzhen", "c": "aabb"}, {"w": "jiandan", "c": "aabb"}, {"w": "kuaile", "c": "aabb"}, {"w": "anjing", "c": "aabb"}, {"w": "mingbai", "c": "aabb"},
        {"w": "bingliang", "c": "abab", "trap": "aabb", "note": "冰凉＝像冰一样凉，是状态形容词：冰凉冰凉。", "noteEn": "冰凉 = cold as ice, a state adjective: 冰凉冰凉."},
        {"w": "tonghong", "c": "abab", "trap": "aabb", "note": "通红→通红通红。", "noteEn": "通红→通红通红."},
        {"w": "bizhi", "c": "abab", "trap": "aabb", "note": "笔直＝像笔一样直：笔直笔直。", "noteEn": "笔直 = straight as a pen: 笔直笔直."},
        {"w": "weida", "c": "none", "trap": "aabb", "note": "*伟伟大大 不说。", "noteEn": "Nobody says *伟伟大大."},
        {"w": "fuza", "c": "none", "trap": "aabb", "note": "*复复杂杂 不说。", "noteEn": "Nobody says *复复杂杂."},
        {"w": "weixian", "c": "none", "trap": "aabb", "note": "*危危险险 不说。", "noteEn": "Nobody says *危危险险."}
      ],
      "use": [
        {"id": "z-a1", "w": "chang2", "before": "她的头发", "after": "的，很好看。", "task": "描写一个人的头发。", "taskEn": "Describe someone's hair."},
        {"id": "z-a2", "w": "qingchu", "before": "老师把每个字都写得", "after": "的。", "task": "描写老师写的字。", "taskEn": "Describe how the teacher writes."},
        {"id": "z-a3", "w": "anjing", "before": "孩子们", "after": "地坐着看书。", "task": "描写孩子们看书的样子。", "taskEn": "Describe the children reading."}
      ],
      "edges": [
        {"id": "e-hen", "w": "ganjing", "c": "aabb", "shown": "很干干净净", "verdict": "break", "real": ["干干净净的", "很干净"], "note": "重叠后已经有程度的意思，不能再加 很：干干净净的／很干净。", "noteEn": "The reduplicated form already means “very”, so 很 cannot be added: 干干净净的 / 很干净."},
        {"id": "e-xuebai", "w": "xuebai", "c": "aabb", "verdict": "break", "real": ["雪白雪白"], "note": "雪白 是状态形容词，ABAB：雪白雪白。", "noteEn": "雪白 is a state adjective and takes ABAB: 雪白雪白."},
        {"id": "e-zhongyao", "w": "zhongyao", "c": "aabb", "verdict": "break", "real": ["—"], "note": "重要 不能重叠。", "noteEn": "重要 cannot reduplicate."},
        {"id": "e-ganjing", "w": "ganjing", "c": "aabb", "verdict": "rule", "note": "干干净净，按规则。", "noteEn": "干干净净, by the rule."}
      ]
    },
    {
      "id": "anota", "pos": "q", "title": "正反问 V不V", "titleEn": "A-not-A questions", "short": "正反问", "shortEn": "A-not-A",
      "kcs": ["kt:zh-affirmative-negative-question"],
      "prompt": "写出它的正反问形式", "promptEn": "Write its A-not-A form",
      "hint1": "几个字？两个字的可以只重复第一个字（喜不喜欢），也可以整个重复（喜欢不喜欢）。否定用 不 还是 没？", "hint1En": "How many characters? With two, you can repeat only the first (喜不喜欢) or the whole word (喜欢不喜欢). Is the negative 不 or 没?",
      "classes": [
        {"id": "one", "label": "单音节 A不A", "labelEn": "one syllable: A不A", "rule": "去→去不去", "ruleEn": "去→去不去", "rewrite": [["^(.)$", "$1不$1"]]},
        {"id": "two", "label": "双音节 A不AB／AB不AB", "labelEn": "two syllables: A不AB / AB不AB", "rule": "喜欢→喜不喜欢／喜欢不喜欢", "ruleEn": "喜欢→喜不喜欢 / 喜欢不喜欢", "rewrite": [["^(.)(.)$", "$1不$1$2", "$1$2不$1$2"]]},
        {"id": "x", "label": "整词例外", "labelEn": "whole-word exception", "rule": "有 的否定是 没有：有没有", "ruleEn": "the negative of 有 is 没有: 有没有", "exception": true, "rewrite": [["^有$", "有没有"]]}
      ],
      "induce": [{"w": "qu", "c": "one"}, {"w": "shi3", "c": "one"}, {"w": "mang", "c": "one"}, {"w": "haochi", "c": "two"}, {"w": "xihuan", "c": "two"}, {"w": "you3", "c": "x"}],
      "items": [
        {"w": "lai", "c": "one"}, {"w": "chi", "c": "one"}, {"w": "mai", "c": "one"}, {"w": "gui", "c": "one"}, {"w": "leng", "c": "one"}, {"w": "xiang3", "c": "one"}, {"w": "hui", "c": "one"},
        {"w": "renshi", "c": "two"}, {"w": "zhidao3", "c": "two"}, {"w": "piaoliang3", "c": "two"}, {"w": "keyi", "c": "two"}, {"w": "fangbian", "c": "two"}, {"w": "shufu3", "c": "two"}
      ],
      "use": [
        {"id": "z-q1", "w": "lai", "before": "你明天", "after": "？", "task": "问朋友明天来不来。", "taskEn": "Ask a friend whether they are coming tomorrow."},
        {"id": "z-q2", "w": "gui", "before": "这件衣服", "after": "？", "task": "问店员衣服贵不贵。", "taskEn": "Ask the shop assistant whether this item is expensive."},
        {"id": "z-q3", "w": "renshi", "before": "你", "after": "他？", "task": "问朋友认识不认识那个人。", "taskEn": "Ask a friend whether they know him."},
        {"id": "z-q4", "w": "keyi", "before": "这儿", "after": "拍照？", "task": "问这里能不能拍照。", "taskEn": "Ask whether you may take photos here."}
      ],
      "edges": [
        {"id": "e-you", "w": "you3", "c": "one", "verdict": "break", "real": ["有没有"], "note": "有 的否定是 没有：有没有，不说 *有不有。", "noteEn": "The negative of 有 is 没有: 有没有, never *有不有."},
        {"id": "e-xihuan", "w": "xihuan", "c": "two", "verdict": "both", "real": ["喜不喜欢", "喜欢不喜欢"], "note": "喜不喜欢 和 喜欢不喜欢 都对。", "noteEn": "喜不喜欢 and 喜欢不喜欢 are both right."},
        {"id": "e-qu", "w": "qu", "c": "one", "verdict": "rule", "note": "去不去，按规则。", "noteEn": "去不去, by the rule."},
        {"id": "e-ma", "w": "qu", "c": "one", "shown": "去不去吗", "verdict": "break", "real": ["去不去"], "note": "正反问本身就是问句，后面不再加 吗。", "noteEn": "An A-not-A form is already a question, so 吗 is not added."}
      ]
    }
  ]
};
