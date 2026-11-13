/* Data packs for blocks/variety-map.html (prim:variety-map): variety-map-en, variety-map-ja, variety-map-zh.
 *
 * Pack format
 *   sets  [{ id, label/labelEn, kcs, lang?, varieties, cards, settings, keep, markers? }]  one "variety set" each
 *         (British / American; 共通語 / 関西方言; Japanese / simplified / traditional character forms; 简体 / 繁体;
 *         mainland / Taiwan / Hong Kong words). The page shows one set at a time (?group=<id> or the bar's selector).
 *     varieties  [{id, label, labelEn}]  the columns. Two more columns are always added (not for children):
 *                "common" (used in all of them) and "error" (looks like a variety but is a mistake) — reverse half.
 *     cards      [{id, g, t, v, key, kc?, note?/noteEn?}]  step 1. g = meaning group (cards of one group are the same
 *                meaning in different varieties; hint 3 shows the group as a table). v = variety id | common | error.
 *                key = the part that decides the variety, marked after placing (or with hint 2). Cards never carry a
 *                label such as "British:" — the learner must judge by spelling, words or character forms.
 *     settings   [{id, kc, scene/sceneEn, items: [{t, ans, react/reactEn}]}]  step 2. ans = accepted judgements among
 *                best | ok | odd | error; react = how a listener or reader in that setting would take it.
 *                Settings mix formal and informal for each variety so that a variety is never read as a register.
 *     keep       step 3, one of
 *                {id, kc, kind: "rewrite", task/taskEn, target, need, text}  the learner rewrites `text` into the
 *                  target variety; the page finds forms from `markers` and passes only if no form of another variety
 *                  or an error is left and at least `need` target-variety forms are present;
 *                {id, kc, kind: "slots", task/taskEn, parts: [string | {id, opts, ans, one2many?, why/whyEn}]}
 *                  choose the form in each gap; one2many = a character with several counterparts (发 → 髮 / 發), which
 *                  always appear in pairs in the same text so a mechanical one-to-one conversion fails.
 *     markers    { <varietyId or "error">: [regex] }  controlled list for the rewrite check (en only).
 *   review/reviewEn  items a native-speaking teacher should check; not used in drills.
 * Interface-language text has an English twin (<field>En); target-language text is never translated.
 * Synthesised speech is not used for accents or dialects: browser voices cannot produce them faithfully.
 * All sentences were written for this pack.
 */
KT_DATA["variety-map-en"] = {
  "id": "variety-map-en", "lang": "en",
  "title": "英式和美式英语", "titleEn": "British and American English",
  "subtitle": "同一个意思，英式和美式的说法、拼写不一样。两种都对，要做的是认出来、按场合选、同一篇里不混用。", "subtitleEn": "The same meaning can be worded or spelled differently in British and American English. Both are correct: recognise them, choose for the setting, and do not mix them in one text.",
  "sets": [{
    "id": "gbus", "label": "英式／美式", "labelEn": "British / American", "kcs": ["kt:en-soc-varieties"],
    "varieties": [{"id": "gb", "label": "英式", "labelEn": "British"}, {"id": "us", "label": "美式", "labelEn": "American"}],
    "cards": [
      {"id": "colour-gb", "g": "colour", "t": "What colour is your new car?", "v": "gb", "key": "colour", "kc": "kt:en-soc-varieties"},
      {"id": "colour-us", "g": "colour", "t": "What color is your new car?", "v": "us", "key": "color", "kc": "kt:en-soc-varieties"},
      {"id": "centre-gb", "g": "centre", "t": "Let's meet in the city centre at six.", "v": "gb", "key": "centre", "kc": "kt:en-soc-varieties"},
      {"id": "centre-us", "g": "centre", "t": "Let's meet downtown at six.", "v": "us", "key": "downtown", "kc": "kt:en-soc-varieties"},
      {"id": "flat-gb", "g": "flat", "t": "They rent a small flat near the station.", "v": "gb", "key": "flat", "kc": "kt:en-soc-varieties"},
      {"id": "flat-us", "g": "flat", "t": "They rent a small apartment near the station.", "v": "us", "key": "apartment", "kc": "kt:en-soc-varieties", "note": "英国也说 apartment，多指较高档或度假用的公寓；普通的“一套房”英式说 flat。", "noteEn": "British English uses apartment too, mostly for upmarket or holiday flats; an ordinary one is a flat."},
      {"id": "lift-gb", "g": "lift", "t": "Take the lift to the fourth floor.", "v": "gb", "key": "lift", "kc": "kt:en-soc-varieties"},
      {"id": "lift-us", "g": "lift", "t": "Take the elevator to the fourth floor.", "v": "us", "key": "elevator", "kc": "kt:en-soc-varieties"},
      {"id": "holiday-gb", "g": "holiday", "t": "We're going on holiday in August.", "v": "gb", "key": "on holiday", "kc": "kt:en-soc-varieties"},
      {"id": "holiday-us", "g": "holiday", "t": "We're going on vacation in August.", "v": "us", "key": "on vacation", "kc": "kt:en-soc-varieties"},
      {"id": "queue-gb", "g": "queue", "t": "There was a long queue outside the bakery.", "v": "gb", "key": "queue", "kc": "kt:en-soc-varieties"},
      {"id": "queue-us", "g": "queue", "t": "There was a long line outside the bakery.", "v": "us", "key": "line", "kc": "kt:en-soc-varieties"},
      {"id": "mobile-gb", "g": "mobile", "t": "I'll call you on my mobile.", "v": "gb", "key": "mobile", "kc": "kt:en-soc-varieties"},
      {"id": "mobile-us", "g": "mobile", "t": "I'll call you on my cell phone.", "v": "us", "key": "cell phone", "kc": "kt:en-soc-varieties"},
      {"id": "travel-gb", "g": "travel", "t": "She travelled across Canada by train.", "v": "gb", "key": "travelled", "kc": "kt:en-soc-varieties"},
      {"id": "travel-us", "g": "travel", "t": "She traveled across Canada by train.", "v": "us", "key": "traveled", "kc": "kt:en-soc-varieties"},
      {"id": "weekend-gb", "g": "weekend", "t": "What are you doing at the weekend?", "v": "gb", "key": "at the weekend", "kc": "kt:en-soc-varieties"},
      {"id": "weekend-us", "g": "weekend", "t": "What are you doing on the weekend?", "v": "us", "key": "on the weekend", "kc": "kt:en-soc-varieties"},
      {"id": "rubbish-gb", "g": "rubbish", "t": "Could you take the rubbish out?", "v": "gb", "key": "rubbish", "kc": "kt:en-soc-varieties"},
      {"id": "rubbish-us", "g": "rubbish", "t": "Could you take the trash out?", "v": "us", "key": "trash", "kc": "kt:en-soc-varieties"},
      {"id": "got-gb", "g": "have", "t": "Have you got a pen?", "v": "gb", "key": "Have you got", "kc": "kt:en-soc-varieties", "note": "偏英式；美国人也能懂。", "noteEn": "Mainly British; Americans understand it."},
      {"id": "got-common", "g": "have", "t": "Do you have a pen?", "v": "common", "key": "Do you have", "kc": "kt:en-soc-varieties", "note": "英美都这样说。", "noteEn": "Used in both."},
      {"id": "eat-us", "g": "eat", "t": "Did you eat yet?", "v": "us", "key": "Did you eat yet", "kc": "kt:en-soc-varieties", "note": "美式口语里很自然，不是错误。", "noteEn": "Natural in spoken American English; not a mistake."},
      {"id": "eat-common", "g": "eat", "t": "Have you eaten yet?", "v": "common", "key": "Have you eaten", "kc": "kt:en-soc-varieties", "note": "英美都这样说。", "noteEn": "Used in both."},
      {"id": "museum-common", "g": "museum", "t": "The museum opens at nine.", "v": "common", "key": "", "kc": "kt:en-soc-varieties", "note": "没有任何变体标记，英美通用。", "noteEn": "No variety marker at all; used in both."},
      {"id": "colorfull-err", "g": "colour", "t": "The sunset was very colorfull.", "v": "error", "key": "colorfull", "kc": "kt:en-soc-varieties", "note": "拼写错误：英式 colourful，美式 colorful，都只有一个 l。", "noteEn": "Misspelling: British colourful, American colorful, both with one l at the end."},
      {"id": "onlast-err", "g": "weekend", "t": "We went to the theatre on last weekend.", "v": "error", "key": "on last weekend", "kc": "kt:en-soc-varieties", "note": "错误：last weekend 前面不加介词，英美都一样。", "noteEn": "Mistake: no preposition before last weekend, in either variety."},
      {"id": "dohavegot-err", "g": "have", "t": "Do you have got a pen?", "v": "error", "key": "Do you have got", "kc": "kt:en-soc-varieties", "note": "错误：把 Have you got…? 和 Do you have…? 拼在了一起。", "noteEn": "Mistake: Have you got …? and Do you have …? blended into one."}
    ],
    "settings": [
      {"id": "uk-email", "kc": "kt:en-soc-varieties", "scene": "你在伦敦工作，给一家英国公司写正式邮件。", "sceneEn": "You work in London and are writing a formal email to a British company.", "items": [
        {"t": "Please find the revised colour chart attached.", "ans": ["best"], "react": "很自然，对方不会多想。", "reactEn": "Natural; the reader will not notice anything."},
        {"t": "Please find the revised color chart attached.", "ans": ["ok"], "react": "完全能懂，只是看得出是美式拼写。", "reactEn": "Perfectly clear; the reader just sees American spelling."},
        {"t": "The colour chart is attached; the color codes are on page 2.", "ans": ["odd"], "react": "同一封信里 colour 和 color 都有，看起来不仔细。", "reactEn": "colour and color in the same email look careless."},
        {"t": "The sunset photo is very colorfull.", "ans": ["error"], "react": "这是拼写错误，不是哪一种变体。", "reactEn": "This is a spelling mistake, not a variety."}]},
      {"id": "us-chat", "kc": "kt:en-soc-varieties", "scene": "你在纽约，给同事发一条随意的消息约午饭。", "sceneEn": "You are in New York, sending a colleague a casual message about lunch.", "items": [
        {"t": "Did you eat yet? Want to grab lunch?", "ans": ["best"], "react": "很地道的美式口语。", "reactEn": "Natural spoken American English."},
        {"t": "Have you eaten yet? Want to grab lunch?", "ans": ["best", "ok"], "react": "也很自然，英美都这样说。", "reactEn": "Also natural; both varieties say this."},
        {"t": "Shall we queue for the lift and go down?", "ans": ["ok"], "react": "能懂，但听起来很英式。", "reactEn": "Understood, but it sounds very British."},
        {"t": "Do you have got time for lunch?", "ans": ["error"], "react": "这是错误的句子，不是英式说法。", "reactEn": "This is an ungrammatical sentence, not a British form."}]},
      {"id": "us-notice", "kc": "kt:en-soc-varieties", "scene": "美国一个城市的政府要发一份正式通知。", "sceneEn": "A city government in the US is publishing a formal notice.", "items": [
        {"t": "Residents may park in the lot behind the community center.", "ans": ["best"], "react": "标准的美式正式写法。美式英语一样可以很正式。", "reactEn": "Standard formal American writing. American English can be just as formal."},
        {"t": "Residents may park in the car park behind the community centre.", "ans": ["ok"], "react": "能懂，但对美国读者来说是英式说法，不是“更正式”。", "reactEn": "Understood, but for American readers it is British wording, not “more formal”."},
        {"t": "Residents may park in the lot behind the community centre.", "ans": ["odd"], "react": "美式用词配英式拼写，混在一起显得不统一。", "reactEn": "American wording with British spelling: an inconsistent mix."}]},
      {"id": "uk-chat", "kc": "kt:en-soc-varieties", "scene": "你和一个英国朋友在网上随便聊天。", "sceneEn": "You are chatting casually online with a British friend.", "items": [
        {"t": "What are you up to at the weekend?", "ans": ["best"], "react": "很自然的英式口语。英式英语一样可以很随意。", "reactEn": "Natural casual British English. British English can be just as casual."},
        {"t": "What are you up to on the weekend?", "ans": ["ok"], "react": "能懂，听得出美式的味道。", "reactEn": "Understood; it sounds a little American."},
        {"t": "What did you do on last weekend?", "ans": ["error"], "react": "这是错误，不是变体。", "reactEn": "A mistake, not a variety."}]}
    ],
    "keep": [
      {"id": "to-gb", "kc": "kt:en-soc-varieties", "kind": "rewrite", "target": "gb", "need": 4,
       "task": "这段话要发给英国的房东。把它改成全英式，同一个地方换成对应的说法，不要删掉。", "taskEn": "This text is going to a landlord in Britain. Make it all British: change each place to its counterpart; do not delete it.",
       "text": "This summer I'm going on holiday with my family. We'll stay in an apartment near the city center and travel around by train. I've packed my favourite jacket."},
      {"id": "to-us", "kc": "kt:en-soc-varieties", "kind": "rewrite", "target": "us", "need": 4,
       "task": "这段话要登在美国的学校网站上。把它改成全美式，同一个地方换成对应的说法，不要删掉。", "taskEn": "This text will appear on an American school website. Make it all American: change each place to its counterpart; do not delete it.",
       "text": "Last weekend our class had a party in a neighbor's flat. Everyone helped to take the rubbish out afterwards, and the colours of the decorations were great."}
    ],
    "markers": {
      "gb": ["\\bcolours?\\b", "\\bcolourful\\b", "\\bcentres?\\b", "\\btravelled\\b", "\\btravelling\\b", "\\bflats?\\b", "\\bholidays?\\b", "\\bqueues?\\b", "\\bmobile phones?\\b", "\\bfavourites?\\b", "\\bneighbours?\\b", "\\brubbish\\b", "\\bbiscuits?\\b", "\\bat the weekend\\b"],
      "us": ["\\bcolors?\\b", "\\bcolorful\\b", "\\bcenters?\\b", "\\btraveled\\b", "\\btraveling\\b", "\\bapartments?\\b", "\\bvacations?\\b", "\\bcell ?phones?\\b", "\\bfavorites?\\b", "\\bneighbors?\\b", "\\btrash\\b", "\\bcookies?\\b", "\\bon the weekend\\b", "\\bdowntown\\b"],
      "error": ["\\bcolou?rfull\\b", "\\bdo you have got\\b", "\\bon last weekend\\b"]
    }
  }],
  "review": [
    "-ise／-ize 没有放进练习：英国也有用 -ize 的（牛津拼写），organize 不能算美式专用",
    "apartment 在英国也用（多指高档或度假公寓），这里按“普通的一套房”判为美式",
    "line（排队）、cookie 在英国也越来越常见，这里按传统分布判",
    "on the weekend 在英国年轻人中也常见，这里判为美式",
    "flat、holiday 在改写检查里按标记词计数；flat 作形容词（a flat tyre）时会被误认成英式标记",
    "kt:en-orth-vowel-patterns 的英美 r 音对照需要真人录音，浏览器合成语音做不到，没有放进来"
  ],
  "reviewEn": [
    "-ise / -ize is left out: British English also uses -ize (Oxford spelling), so organize is not American-only",
    "apartment is used in Britain too (mostly upmarket or holiday flats); scored as American for an ordinary flat",
    "line (a queue) and cookie are increasingly common in Britain; scored by their traditional distribution",
    "on the weekend is common among young British speakers too; scored as American",
    "flat and holiday are counted as markers in the rewrite check; flat as an adjective (a flat tyre) would be misread as a British marker",
    "The British / American r contrast of kt:en-orth-vowel-patterns needs human recordings; browser voices cannot do it, so it is not included"
  ]
};

KT_DATA["variety-map-ja"] = {
  "id": "variety-map-ja", "lang": "ja",
  "title": "日语的变体：关西方言和日本字形", "titleEn": "Japanese varieties: Kansai dialect and Japanese character forms",
  "subtitle": "两组对照：共通语和关西方言（以认出来、听懂为主，不要求说方言）；日本字形和中文简体、繁体（写日语时只用日本字形）。", "subtitleEn": "Two sets: standard Japanese and Kansai dialect (mainly recognising and understanding, not speaking it); Japanese character forms versus simplified and traditional Chinese (write Japanese only with the Japanese forms).",
  "sets": [
    {"id": "dialect", "label": "共通語／関西方言", "labelEn": "Standard / Kansai", "kcs": ["kt:ja-soc-dialects"], "lang": "ja",
     "varieties": [{"id": "std", "label": "共通語", "labelEn": "Standard Japanese"}, {"id": "kansai", "label": "関西方言", "labelEn": "Kansai dialect"}],
     "cards": [
       {"id": "ikanai", "g": "neg", "t": "明日は行かない。", "v": "std", "key": "行かない", "kc": "kt:ja-soc-dialects"},
       {"id": "ikahen", "g": "neg", "t": "明日は行かへん。", "v": "kansai", "key": "へん", "kc": "kt:ja-soc-dialects", "note": "～へん＝～ない，是否定，不是过去式。", "noteEn": "～へん = ～ない: a negative, not a past tense."},
       {"id": "hontou", "g": "really", "t": "本当に？", "v": "std", "key": "本当", "kc": "kt:ja-soc-dialects"},
       {"id": "honma", "g": "really", "t": "ほんまに？", "v": "kansai", "key": "ほんま", "kc": "kt:ja-soc-dialects"},
       {"id": "dame", "g": "nogood", "t": "それはだめだよ。", "v": "std", "key": "だめ", "kc": "kt:ja-soc-dialects"},
       {"id": "akan", "g": "nogood", "t": "それはあかんで。", "v": "kansai", "key": "あかん", "kc": "kt:ja-soc-dialects"},
       {"id": "iitenki", "g": "copula", "t": "今日はいい天気だ。", "v": "std", "key": "だ", "kc": "kt:ja-soc-dialects"},
       {"id": "eetenki", "g": "copula", "t": "今日はええ天気や。", "v": "kansai", "key": "ええ", "kc": "kt:ja-soc-dialects", "note": "ええ＝いい，や＝だ。", "noteEn": "ええ = いい, や = だ."},
       {"id": "ikura", "g": "price", "t": "これ、いくら？", "v": "std", "key": "いくら", "kc": "kt:ja-soc-dialects"},
       {"id": "nanbo", "g": "price", "t": "これ、なんぼ？", "v": "kansai", "key": "なんぼ", "kc": "kt:ja-soc-dialects"},
       {"id": "kaerareta", "g": "honor", "t": "先生はもう帰られました。", "v": "std", "key": "帰られました", "kc": "kt:ja-soc-dialects"},
       {"id": "kaerahatta", "g": "honor", "t": "先生、もう帰らはったで。", "v": "kansai", "key": "はった", "kc": "kt:ja-soc-dialects", "note": "～はる 是关西的轻敬语，不是过度尊敬。", "noteEn": "～はる is a light Kansai honorific, not excessive respect."},
       {"id": "nnda", "g": "explain", "t": "ちょっと用事があるんだ。", "v": "std", "key": "んだ", "kc": "kt:ja-soc-dialects"},
       {"id": "nenn", "g": "explain", "t": "ちょっと用事があるねん。", "v": "kansai", "key": "ねん", "kc": "kt:ja-soc-dialects"},
       {"id": "ohayou", "g": "greet", "t": "おはようございます。", "v": "common", "key": "", "kc": "kt:ja-soc-dialects", "note": "关西人在礼貌场合也这样说。", "noteEn": "Kansai speakers say this too in polite situations."},
       {"id": "taberuhen", "g": "neg", "t": "そんなにたくさん食べるへん。", "v": "error", "key": "食べるへん", "kc": "kt:ja-soc-dialects", "note": "错误：へん 不接在辞书形后面；关西方言说「食べへん」或「食べひん」。", "noteEn": "Mistake: へん does not attach to the dictionary form; Kansai says 食べへん or 食べひん."},
       {"id": "ikahennai", "g": "neg", "t": "明日は行かへんない。", "v": "error", "key": "へんない", "kc": "kt:ja-soc-dialects", "note": "错误：へん 已经是否定，后面不能再加 ない。", "noteEn": "Mistake: へん is already negative; ない cannot be added on top."}
     ],
     "settings": [
       {"id": "osaka-friends", "kc": "kt:ja-soc-dialects", "scene": "你在大阪朋友家吃饭，大家都说关西话。你想夸菜好吃。", "sceneEn": "You are eating at a friend's home in Osaka; everyone speaks Kansai dialect. You want to say the food is good.", "items": [
         {"t": "これ、すごくおいしいね！", "ans": ["best"], "react": "很自然。外国朋友说共通语，大家完全不觉得奇怪。", "reactEn": "Natural. A foreign friend speaking standard Japanese surprises nobody."},
         {"t": "これ、ほんまにおいしいわ！", "ans": ["best", "ok"], "react": "朋友们会很高兴，也可能笑着说“关西话学得不错嘛”。", "reactEn": "Your friends will be pleased, and may laugh and say your Kansai is coming along."},
         {"t": "これ、おいしいへん。", "ans": ["error"], "react": "大家听不懂你想说“好吃”还是“不好吃”：へん 不能直接接在形容词后面。", "reactEn": "Nobody can tell whether you mean tasty or not: へん cannot attach straight to an adjective."}]},
       {"id": "osaka-client", "kc": "kt:ja-soc-dialects", "scene": "你在大阪的公司，向客户正式介绍新产品。", "sceneEn": "At a company in Osaka, you formally present a new product to a client.", "items": [
         {"t": "こちらが新しい商品でございます。", "ans": ["best"], "react": "得体的正式说法。", "reactEn": "Appropriately formal."},
         {"t": "こちらが新しい商品です。", "ans": ["best", "ok"], "react": "礼貌，没有问题。", "reactEn": "Polite and fine."},
         {"t": "これが新しい商品やねん。", "ans": ["odd"], "react": "客户能懂，但在正式场合太随便了。关西的公司在正式场合一般也用共通语的敬语。", "reactEn": "The client understands, but it is far too casual for a formal setting. Kansai companies normally use standard polite Japanese there too."}]},
       {"id": "tokyo-teacher", "kc": "kt:ja-soc-dialects", "scene": "你在东京，给老师写邮件说明天不能去。", "sceneEn": "You are in Tokyo, emailing your teacher that you cannot come tomorrow.", "items": [
         {"t": "明日は伺えません。申し訳ありません。", "ans": ["best"], "react": "得体。", "reactEn": "Appropriate."},
         {"t": "明日は行けへんです。", "ans": ["odd"], "react": "老师能懂，但给老师的邮件里用方言显得不得体。", "reactEn": "The teacher understands, but dialect in an email to a teacher seems out of place."},
         {"t": "明日は行かへんない。", "ans": ["error"], "react": "这是错误的形式，不是方言。", "reactEn": "This is a wrong form, not dialect."}]}
     ],
     "keep": [
       {"id": "to-std", "kc": "kt:ja-soc-dialects", "kind": "slots", "task": "大阪的朋友留了言，你要把意思转告东京的同事。全部换成共通语。", "taskEn": "A friend in Osaka left you a message; pass it on to a colleague in Tokyo. Put it all into standard Japanese.",
        "parts": ["ごめん、明日は", {"id": "a", "opts": ["行かない", "行かへん"], "ans": "行かない", "why": "行かへん 是关西方言。", "whyEn": "行かへん is Kansai dialect."}, "。", {"id": "b", "opts": ["本当に", "ほんまに"], "ans": "本当に", "why": "ほんま 是关西方言。", "whyEn": "ほんま is Kansai dialect."}, "用事がある", {"id": "c", "opts": ["んだ", "ねん"], "ans": "んだ", "why": "ねん 是关西方言。", "whyEn": "ねん is Kansai dialect."}, "。また", {"id": "d", "opts": ["連絡する", "連絡するわ"], "ans": "連絡する", "why": "句末的「わ」在这里是关西男女都用的语气；共通语里一般不加。", "whyEn": "Final わ here is the Kansai particle used by everyone; standard Japanese would leave it out."}, "ね。"]}
     ]},
    {"id": "kanji", "label": "日本字形／简体／繁体", "labelEn": "Japanese / simplified / traditional forms", "kcs": ["kt:ja-kanji-n4", "kt:ja-kanji-n3"], "lang": "ja",
     "varieties": [{"id": "jp", "label": "日本字形", "labelEn": "Japanese form"}, {"id": "jian", "label": "中文简体", "labelEn": "Simplified Chinese"}, {"id": "fan", "label": "繁体", "labelEn": "Traditional Chinese"}],
     "cards": [
       {"id": "eki-jp", "g": "eki", "t": "駅", "v": "jp", "key": "駅", "kc": "kt:ja-kanji-n4"},
       {"id": "eki-jian", "g": "eki", "t": "驿", "v": "jian", "key": "驿", "kc": "kt:ja-kanji-n4"},
       {"id": "eki-fan", "g": "eki", "t": "驛", "v": "fan", "key": "驛", "kc": "kt:ja-kanji-n4"},
       {"id": "uru-jp", "g": "uru", "t": "売", "v": "jp", "key": "売", "kc": "kt:ja-kanji-n4"},
       {"id": "uru-jian", "g": "uru", "t": "卖", "v": "jian", "key": "卖", "kc": "kt:ja-kanji-n4"},
       {"id": "uru-fan", "g": "uru", "t": "賣", "v": "fan", "key": "賣", "kc": "kt:ja-kanji-n4"},
       {"id": "raku-jp", "g": "raku", "t": "楽", "v": "jp", "key": "楽", "kc": "kt:ja-kanji-n4"},
       {"id": "raku-jian", "g": "raku", "t": "乐", "v": "jian", "key": "乐", "kc": "kt:ja-kanji-n4"},
       {"id": "raku-fan", "g": "raku", "t": "樂", "v": "fan", "key": "樂", "kc": "kt:ja-kanji-n4"},
       {"id": "hen-jp", "g": "hen", "t": "変", "v": "jp", "key": "変", "kc": "kt:ja-kanji-n3"},
       {"id": "hen-jian", "g": "hen", "t": "变", "v": "jian", "key": "变", "kc": "kt:ja-kanji-n3"},
       {"id": "hen-fan", "g": "hen", "t": "變", "v": "fan", "key": "變", "kc": "kt:ja-kanji-n3"},
       {"id": "zu-jp", "g": "zu", "t": "図", "v": "jp", "key": "図", "kc": "kt:ja-kanji-n3"},
       {"id": "zu-jian", "g": "zu", "t": "图", "v": "jian", "key": "图", "kc": "kt:ja-kanji-n3"},
       {"id": "zu-fan", "g": "zu", "t": "圖", "v": "fan", "key": "圖", "kc": "kt:ja-kanji-n3"},
       {"id": "tan-jp", "g": "tan", "t": "単", "v": "jp", "key": "単", "kc": "kt:ja-kanji-n3"},
       {"id": "tan-jian", "g": "tan", "t": "单", "v": "jian", "key": "单", "kc": "kt:ja-kanji-n3"},
       {"id": "tan-fan", "g": "tan", "t": "單", "v": "fan", "key": "單", "kc": "kt:ja-kanji-n3"},
       {"id": "ki-jp", "g": "ki", "t": "気", "v": "jp", "key": "気", "kc": "kt:ja-kanji-n4"},
       {"id": "ki-jian", "g": "ki", "t": "气", "v": "jian", "key": "气", "kc": "kt:ja-kanji-n4"},
       {"id": "ki-fan", "g": "ki", "t": "氣", "v": "fan", "key": "氣", "kc": "kt:ja-kanji-n4"},
       {"id": "jinkou", "g": "same", "t": "人口", "v": "common", "key": "", "kc": "kt:ja-kanji-n4", "note": "三种写法完全相同。", "noteEn": "Written the same way in all three."},
       {"id": "nihon", "g": "same", "t": "日本", "v": "common", "key": "", "kc": "kt:ja-kanji-n4", "note": "三种写法完全相同。", "noteEn": "Written the same way in all three."},
       {"id": "tanoshii-err", "g": "raku", "t": "乐しい", "v": "error", "key": "乐", "kc": "kt:ja-kanji-n4", "note": "错误：日语词里混进了简体字，应写「楽しい」。", "noteEn": "Mistake: a simplified character inside a Japanese word; write 楽しい."},
       {"id": "toshokan-err", "g": "zu", "t": "図书館", "v": "error", "key": "书", "kc": "kt:ja-kanji-n3", "note": "错误：三种字形混在一个词里；日语写「図書館」。", "noteEn": "Mistake: three systems mixed in one word; Japanese writes 図書館."}
     ],
     "settings": [
       {"id": "ja-report", "kc": "kt:ja-kanji-n3", "scene": "你在日本的大学交一份日语报告。", "sceneEn": "You are handing in a report in Japanese at a Japanese university.", "items": [
         {"t": "駅前の様子が大きく変わった。", "ans": ["best"], "react": "全是日本字形，没有问题。", "reactEn": "All Japanese forms; fine."},
         {"t": "駅前の様子が大きく变わった。", "ans": ["odd"], "react": "老师能看懂，但「变」是简体字，混在日语里会被当成写错的字。", "reactEn": "The teacher can read it, but 变 is simplified Chinese; in Japanese it will be marked as a miswritten character."},
         {"t": "驛前の樣子が大きく變わった。", "ans": ["odd"], "react": "能看懂，但这是繁体（旧字体），现代日语报告里不用。", "reactEn": "Readable, but these are traditional (old) forms, not used in a modern Japanese report."},
         {"t": "图书館で資料を探した。", "ans": ["error"], "react": "一个词里混了几种字形，这是错误，不是变体。", "reactEn": "Several systems in one word: a mistake, not a variety."}]},
       {"id": "zh-friend", "kc": "kt:ja-kanji-n4", "scene": "你用中文给上海的朋友发消息，说车站在哪儿。", "sceneEn": "You are messaging a friend in Shanghai in Chinese, saying where the station is.", "items": [
         {"t": "车站就在图书馆旁边。", "ans": ["best"], "react": "简体中文，很自然。", "reactEn": "Natural simplified Chinese."},
         {"t": "车站就在図书馆旁边。", "ans": ["odd"], "react": "朋友能猜出来，但「図」是日本字形，混在中文里显得奇怪。", "reactEn": "Your friend can guess, but 図 is a Japanese form and looks odd in Chinese."}]}
     ],
     "keep": [
       {"id": "kanji-slots-1", "kc": "kt:ja-kanji-n4", "kind": "slots", "task": "这是一段日语。每个空都选日本字形。", "taskEn": "This is Japanese. Choose the Japanese form in every gap.",
        "parts": [{"id": "a", "opts": ["驿", "駅", "驛"], "ans": "駅"}, "の近くの", {"id": "b", "opts": ["図", "图", "圖"], "ans": "図"}, "書館で、", {"id": "c", "opts": ["楽", "乐", "樂"], "ans": "楽"}, "しい本を借りました。本を", {"id": "d", "opts": ["卖", "賣", "売"], "ans": "売"}, "っている店も", {"id": "e", "opts": ["變", "変", "变"], "ans": "変"}, "わりました。"]},
       {"id": "kanji-slots-2", "kc": "kt:ja-kanji-n3", "kind": "slots", "task": "这是一段日语。每个空都选日本字形。", "taskEn": "This is Japanese. Choose the Japanese form in every gap.",
        "parts": [{"id": "a", "opts": ["気", "气", "氣"], "ans": "気"}, "をつけて、", {"id": "b", "opts": ["單", "単", "单"], "ans": "単"}, "語の", {"id": "c", "opts": ["発", "发", "發"], "ans": "発", "why": "「発」是日本字形，中文简体是「发」，繁体是「發」。", "whyEn": "発 is the Japanese form; simplified Chinese 发, traditional 發."}, "音を", {"id": "d", "opts": ["练", "練", "鍊"], "ans": "練", "why": "日语写「練習」；「练」是简体，「鍊」是另一个字（锻炼金属）。", "whyEn": "Japanese writes 練習; 练 is simplified, and 鍊 is a different character (refining metal)."}, "習しましょう。"]}
     ]}
  ],
  "review": [
    "关西方言的「ほんまにおいしいわ」由学习者说出时，接受“最合适”和“也可以”两种判断",
    "おおきに、めっちゃ 没有放进练习：前者在今天的使用场合有限，后者已经在关西以外的年轻人中普及",
    "「行かへん」「行かひん」「行けへん」的地区差异（京都、大阪等）没有区分",
    "「また連絡するわ」的 わ：关西男女都用；东京女性用语里也有 わ，这里只按关西语气说明",
    "日本字形卡片：歩／步 没有放进练习，因为简体和繁体都写「步」",
    "关西话的语音（音高）判断需要真人录音，浏览器合成语音读出来是共通语的音调，所以方言题不放音"
  ],
  "reviewEn": [
    "For ほんまにおいしいわ said by a learner, both “best” and “also fine” are accepted",
    "おおきに and めっちゃ are left out: the first is limited in today's use, the second has spread among young people outside Kansai",
    "Regional differences such as 行かへん / 行かひん / 行けへん (Kyoto, Osaka …) are not distinguished",
    "わ in また連絡するわ: used by everyone in Kansai; Tokyo women's speech also has わ, but only the Kansai reading is explained",
    "Character cards: 歩 / 步 is left out because simplified and traditional both write 步",
    "Judging Kansai pitch needs human recordings; synthesised voices read with standard pitch, so the dialect items have no audio"
  ]
};

KT_DATA["variety-map-zh"] = {
  "id": "variety-map-zh", "lang": "zh",
  "title": "汉语的变体：简繁字形和两岸三地用语", "titleEn": "Chinese varieties: simplified / traditional and regional words",
  "subtitle": "两组对照：简体和繁体（注意一个简体字对应几个繁体字）；大陆、台湾、香港的常见用语。这些都不是“错误的中文”，要做的是认出来、按场合选、同一篇里不混用。", "subtitleEn": "Two sets: simplified and traditional characters (watch for one simplified character with several traditional ones); common words in mainland China, Taiwan and Hong Kong. None of these is “wrong Chinese”: recognise them, choose for the setting, and do not mix them in one text.",
  "sets": [
    {"id": "script", "label": "简体／繁体", "labelEn": "Simplified / traditional", "kcs": ["kt:zh-soc-varieties"], "lang": "zh",
     "varieties": [{"id": "jian", "label": "简体", "labelEn": "Simplified"}, {"id": "fan", "label": "繁体", "labelEn": "Traditional"}],
     "cards": [
       {"id": "toufa-jian", "g": "fa", "t": "头发", "v": "jian", "key": "发", "kc": "kt:zh-soc-varieties"},
       {"id": "toufa-fan", "g": "fa", "t": "頭髮", "v": "fan", "key": "髮", "kc": "kt:zh-soc-varieties", "note": "头发的“发”繁体是「髮」。", "noteEn": "发 in “hair” is 髮 in traditional."},
       {"id": "fazhan-jian", "g": "fa", "t": "发展", "v": "jian", "key": "发", "kc": "kt:zh-soc-varieties"},
       {"id": "fazhan-fan", "g": "fa", "t": "發展", "v": "fan", "key": "發", "kc": "kt:zh-soc-varieties", "note": "发展的“发”繁体是「發」。", "noteEn": "发 in “develop” is 發 in traditional."},
       {"id": "yihou-jian", "g": "hou", "t": "以后", "v": "jian", "key": "后", "kc": "kt:zh-soc-varieties"},
       {"id": "yihou-fan", "g": "hou", "t": "以後", "v": "fan", "key": "後", "kc": "kt:zh-soc-varieties"},
       {"id": "huanghou", "g": "hou", "t": "皇后", "v": "common", "key": "后", "kc": "kt:zh-soc-varieties", "note": "“皇后”的“后”在繁体里也是「后」，简繁相同。", "noteEn": "后 in “empress” is 后 in traditional too: the same in both."},
       {"id": "ganbei-jian", "g": "gan", "t": "干杯", "v": "jian", "key": "干", "kc": "kt:zh-soc-varieties"},
       {"id": "ganbei-fan", "g": "gan", "t": "乾杯", "v": "fan", "key": "乾", "kc": "kt:zh-soc-varieties"},
       {"id": "ganbu-jian", "g": "gan", "t": "干部", "v": "jian", "key": "干", "kc": "kt:zh-soc-varieties"},
       {"id": "ganbu-fan", "g": "gan", "t": "幹部", "v": "fan", "key": "幹", "kc": "kt:zh-soc-varieties"},
       {"id": "xuexi-jian", "g": "xue", "t": "学习", "v": "jian", "key": "学习", "kc": "kt:zh-soc-varieties"},
       {"id": "xuexi-fan", "g": "xue", "t": "學習", "v": "fan", "key": "學習", "kc": "kt:zh-soc-varieties"},
       {"id": "renkou", "g": "same", "t": "人口", "v": "common", "key": "", "kc": "kt:zh-soc-varieties", "note": "简繁相同。", "noteEn": "The same in both."},
       {"id": "toufa-err", "g": "fa", "t": "頭發", "v": "error", "key": "發", "kc": "kt:zh-soc-varieties", "note": "错误：头发的“发”繁体是「髮」，「發」是发展的发。机械地一对一转换就会出这个错。", "noteEn": "Mistake: 发 in “hair” is 髮; 發 is the 发 of “develop”. A one-to-one conversion produces this error."},
       {"id": "huanghou-err", "g": "hou", "t": "皇後", "v": "error", "key": "後", "kc": "kt:zh-soc-varieties", "note": "错误：“皇后”在繁体里仍写「后」。", "noteEn": "Mistake: “empress” is still 皇后 in traditional."},
       {"id": "tianqi-err", "g": "qi", "t": "天気", "v": "error", "key": "気", "kc": "kt:zh-soc-varieties", "note": "这是日本字形，不是简体也不是繁体：简体「天气」，繁体「天氣」。", "noteEn": "This is a Japanese form, neither simplified nor traditional: simplified 天气, traditional 天氣."}
     ],
     "settings": [
       {"id": "tw-poster", "kc": "kt:zh-soc-varieties", "scene": "你给台湾读者做一张理发店的海报。", "sceneEn": "You are making a poster for a hair salon, for readers in Taiwan.", "items": [
         {"t": "本店剪髮八折，歡迎光臨。", "ans": ["best"], "react": "繁体，用字正确，台湾读者看着很自然。", "reactEn": "Traditional characters, correctly chosen; natural for readers in Taiwan."},
         {"t": "本店剪发八折，欢迎光临。", "ans": ["odd", "ok"], "react": "大多数台湾读者能看懂简体，但给台湾做的海报用简体，会显得没为读者考虑。", "reactEn": "Most readers in Taiwan can read simplified, but a poster for Taiwan in simplified looks as if the reader was not considered."},
         {"t": "本店剪發八折，歡迎光臨。", "ans": ["error"], "react": "「剪發」用错了字：头发的“发”是「髮」。这是错误，不是变体。", "reactEn": "剪發 uses the wrong character: hair is 髮. A mistake, not a variety."}]},
       {"id": "cn-notice", "kc": "kt:zh-soc-varieties", "scene": "你给北京一所学校写通知。", "sceneEn": "You are writing a notice for a school in Beijing.", "items": [
         {"t": "明天下午以后，请同学们把头发扎起来。", "ans": ["best"], "react": "简体，自然。", "reactEn": "Simplified; natural."},
         {"t": "明天下午以後，請同學們把頭髮紮起來。", "ans": ["ok", "odd"], "react": "能看懂，但大陆学校的通知用繁体会显得不合常规。", "reactEn": "Readable, but a notice in traditional characters is unusual for a school in mainland China."},
         {"t": "明天下午以後，请同学们把头发扎起来。", "ans": ["odd"], "react": "简繁混在一句里，看起来很乱。", "reactEn": "Simplified and traditional mixed in one sentence: it looks messy."}]}
     ],
     "keep": [
       {"id": "fa-hou", "kc": "kt:zh-soc-varieties", "kind": "slots", "task": "为台湾读者把这句话转成繁体。别的字已经转好了，选出每个空的繁体字。", "taskEn": "Convert this sentence into traditional characters for readers in Taiwan. The other characters are done; choose the traditional character for each gap.",
        "parts": ["她把頭", {"id": "a", "opts": ["發", "髮"], "ans": "髮", "one2many": true, "why": "头发的“发”是「髮」。", "whyEn": "发 in “hair” is 髮."}, "剪短了，以", {"id": "b", "opts": ["后", "後"], "ans": "後", "one2many": true, "why": "以后的“后”是「後」（时间、方位）。", "whyEn": "后 in “later” is 後 (time, position)."}, "要專心", {"id": "c", "opts": ["髮", "發"], "ans": "發", "one2many": true, "why": "发展的“发”是「發」。", "whyEn": "发 in “develop” is 發."}, "展事業。"]},
       {"id": "gan-hou", "kc": "kt:zh-soc-varieties", "kind": "slots", "task": "为台湾读者把这句话转成繁体。选出每个空的繁体字。", "taskEn": "Convert this sentence into traditional characters for readers in Taiwan. Choose the traditional character for each gap.",
        "parts": ["大家", {"id": "a", "opts": ["幹", "乾", "干"], "ans": "乾", "one2many": true, "why": "干杯的“干”是「乾」（干燥的干）。", "whyEn": "干 in “cheers” is 乾 (as in “dry”)."}, "杯以", {"id": "b", "opts": ["後", "后"], "ans": "後", "one2many": true, "why": "以后的“后”是「後」。", "whyEn": "后 in “later” is 後."}, "，", {"id": "c", "opts": ["乾", "干", "幹"], "ans": "幹", "one2many": true, "why": "干部的“干”是「幹」（能干的干）。", "whyEn": "干 in “cadre” is 幹 (as in “capable”)."}, "部們講起了皇", {"id": "d", "opts": ["後", "后"], "ans": "后", "one2many": true, "why": "皇后的“后”繁体仍是「后」。", "whyEn": "后 in “empress” stays 后 in traditional."}, "的故事。"]}
     ]},
    {"id": "terms", "label": "大陆／台湾／香港用语", "labelEn": "Mainland / Taiwan / Hong Kong words", "kcs": ["kt:zh-soc-varieties"], "lang": "zh",
     "varieties": [{"id": "cn", "label": "大陆", "labelEn": "Mainland China"}, {"id": "tw", "label": "台湾", "labelEn": "Taiwan"}, {"id": "hk", "label": "香港", "labelEn": "Hong Kong"}],
     "cards": [
       {"id": "taxi-cn", "g": "taxi", "t": "我们坐出租车去吧。", "v": "cn", "key": "出租车", "kc": "kt:zh-soc-varieties"},
       {"id": "taxi-tw", "g": "taxi", "t": "我们坐计程车去吧。", "v": "tw", "key": "计程车", "kc": "kt:zh-soc-varieties"},
       {"id": "taxi-hk", "g": "taxi", "t": "我们坐的士去吧。", "v": "hk", "key": "的士", "kc": "kt:zh-soc-varieties", "note": "“的士”来自粤语，大陆南方口语也说“打的”。", "noteEn": "的士 comes from Cantonese; southern mainland speech also says 打的."},
       {"id": "bus-cn", "g": "bus", "t": "我每天坐公交车上班。", "v": "cn", "key": "公交车", "kc": "kt:zh-soc-varieties"},
       {"id": "bus-tw", "g": "bus", "t": "我每天坐公车上班。", "v": "tw", "key": "公车", "kc": "kt:zh-soc-varieties"},
       {"id": "bus-hk", "g": "bus", "t": "我每天坐巴士上班。", "v": "hk", "key": "巴士", "kc": "kt:zh-soc-varieties"},
       {"id": "soft-cn", "g": "soft", "t": "这个软件很好用。", "v": "cn", "key": "软件", "kc": "kt:zh-soc-varieties"},
       {"id": "soft-tw", "g": "soft", "t": "这个软体很好用。", "v": "tw", "key": "软体", "kc": "kt:zh-soc-varieties"},
       {"id": "net-cn", "g": "net", "t": "今天网络有点慢。", "v": "cn", "key": "网络", "kc": "kt:zh-soc-varieties"},
       {"id": "net-tw", "g": "net", "t": "今天网路有点慢。", "v": "tw", "key": "网路", "kc": "kt:zh-soc-varieties"},
       {"id": "print-cn", "g": "print", "t": "我把报告打印出来了。", "v": "cn", "key": "打印", "kc": "kt:zh-soc-varieties"},
       {"id": "print-tw", "g": "print", "t": "我把报告列印出来了。", "v": "tw", "key": "列印", "kc": "kt:zh-soc-varieties"},
       {"id": "video-cn", "g": "video", "t": "他发了一段视频给我。", "v": "cn", "key": "视频", "kc": "kt:zh-soc-varieties"},
       {"id": "video-tw", "g": "video", "t": "他传了一段影片给我。", "v": "tw", "key": "影片", "kc": "kt:zh-soc-varieties"},
       {"id": "quality-cn", "g": "quality", "t": "这家店的东西质量很好。", "v": "cn", "key": "质量", "kc": "kt:zh-soc-varieties"},
       {"id": "quality-tw", "g": "quality", "t": "这家店的东西品质很好。", "v": "tw", "key": "品质", "kc": "kt:zh-soc-varieties", "note": "大陆也说“品质”，但日常更常说“质量”。", "noteEn": "The mainland also says 品质, but 质量 is more usual in everyday speech."},
       {"id": "phone-common", "g": "phone", "t": "我的手机没电了。", "v": "common", "key": "手机", "kc": "kt:zh-soc-varieties", "note": "两岸三地都常说“手机”。", "noteEn": "手机 is common in all three places."},
       {"id": "net-err", "g": "net", "t": "今天网落有点慢。", "v": "error", "key": "网落", "kc": "kt:zh-soc-varieties", "note": "错别字：大陆写“网络”，台湾写“网路”，没有“网落”。", "noteEn": "Miswritten: mainland 网络, Taiwan 网路; there is no 网落."}
     ],
     "settings": [
       {"id": "beijing-colleague", "kc": "kt:zh-soc-varieties", "scene": "你在北京，跟同事说文件的事。", "sceneEn": "You are in Beijing, talking to a colleague about a document.", "items": [
         {"t": "我把文件打印好了。", "ans": ["best"], "react": "很自然。", "reactEn": "Natural."},
         {"t": "我把文件列印好了。", "ans": ["ok"], "react": "同事能懂，会觉得你说话带台湾味。", "reactEn": "Your colleague understands and notices a Taiwanese touch."},
         {"t": "我把文件打印好了，网落有点慢，晚点发你。", "ans": ["error"], "react": "“网落”是错别字，不是哪个地方的说法。", "reactEn": "网落 is a miswritten word, not a regional form."}]},
       {"id": "taipei-way", "kc": "kt:zh-soc-varieties", "scene": "你在台北街头，问路人怎么去搭车。", "sceneEn": "You are on a street in Taipei, asking a passer-by how to catch a ride.", "items": [
         {"t": "请问，计程车在哪里搭？", "ans": ["best"], "react": "很自然。", "reactEn": "Natural."},
         {"t": "请问，出租车在哪里坐？", "ans": ["ok"], "react": "对方能懂，听得出你是从大陆来的。", "reactEn": "Understood; they can tell you are from the mainland."},
         {"t": "请问，在哪里坐巴士？", "ans": ["ok", "best"], "react": "能懂。台湾也说“巴士”，尤其是长途或观光巴士；市内公交多说“公车”。", "reactEn": "Understood. Taiwan also says 巴士, especially for coaches and tour buses; city buses are mostly 公车."}]}
     ],
     "keep": [
       {"id": "tw-terms", "kc": "kt:zh-soc-varieties", "kind": "slots", "task": "这段话要发给台湾的朋友（用繁体）。每个空都选台湾的说法，全段保持一致。", "taskEn": "This message goes to a friend in Taiwan (in traditional characters). Choose the Taiwan word in every gap and keep the whole text consistent.",
        "parts": ["我用新的", {"id": "a", "opts": ["軟件", "軟體"], "ans": "軟體", "why": "台湾说「軟體」。", "whyEn": "Taiwan says 軟體."}, "剪了一段", {"id": "b", "opts": ["影片", "視頻"], "ans": "影片", "why": "台湾说「影片」。", "whyEn": "Taiwan says 影片."}, "，等一下坐", {"id": "c", "opts": ["出租車", "計程車"], "ans": "計程車", "why": "台湾说「計程車」。", "whyEn": "Taiwan says 計程車."}, "去你家，順便把說明", {"id": "d", "opts": ["列印", "打印"], "ans": "列印", "why": "台湾说「列印」。", "whyEn": "Taiwan says 列印."}, "給你。"]}
     ]}
  ],
  "review": [
    "“的士”判为香港；大陆南方口语也常用（打的）",
    "“巴士”在台湾的长途、观光车也用，问路题里接受“最合适”和“也可以”",
    "“品质”大陆也用，这里按日常最常见的分布判为台湾",
    "台湾的用语卡片用简体书写，让学习者按用词而不是按字形判断",
    "方言（粤语、吴语等）和“垃圾 lājī／lèsè”这类读音差异需要真人录音，没有放进来",
    "繁体题只按台湾的用字；香港繁体个别字形（如「着／著」的用法）不同，没有区分"
  ],
  "reviewEn": [
    "的士 is scored as Hong Kong; it is also common in southern mainland speech (打的)",
    "巴士 is also used in Taiwan for coaches and tour buses; the asking-the-way item accepts “best” and “also fine”",
    "品质 is used on the mainland too; scored as Taiwan by its usual everyday distribution",
    "Taiwan word cards are written in simplified characters so the learner judges by the word, not the script",
    "Dialects (Cantonese, Wu …) and reading differences such as 垃圾 lājī / lèsè need human recordings and are not included",
    "Traditional-character items follow Taiwan usage; a few Hong Kong character preferences (e.g. 着 / 著) are not distinguished"
  ]
};
