/* Data packs for blocks/clause-constraint.html (prim:clause-constraint): clause-constraint-en, clause-constraint-ja,
 * clause-constraint-zh.
 *
 * Pack format
 *   types       { <typeId>: {label, labelEn, icon} }  what kind of clause a card is (request, intention, past fact …;
 *               for zh: which correlative it carries). Rows of the learner's constraint table.
 *   conns       [{ id, form, label?, labelEn?, re, partner?, choice?, noWill? }]  connective forms. Columns of the table.
 *               re = regular expression that finds the connective in a sentence the learner types (mode 3);
 *               partner = regex that must appear after it (zh 就／才／也／都); choice = regex the zh 不管 clause must
 *               contain (a question word, V不V, 还是 …); noWill = English: the connective's own clause may not
 *               contain will / 'll / won't (future in the main clause only).
 *   cats        { <catId>: {label, labelEn} }  the locked reasons in mode 2 (后句类型 / 时态与时间 / 主语 / 都成立但意思不同;
 *               zh uses its own: 关联词搭配 / 前句性质 / 就才也的位置).
 *   frames      [{ id, kc, conn, before, after?, hint3?/hint3En?, cards: [{id, text, type, ok, why?/whyEn?, note?/noteEn?}] }]
 *               mode 1: the sentence frame is before + [slot] + after, with the connective fixed; each card is tried in
 *               the slot. why = the constraint the card breaks (shown when it bounces back). Each pack has frames
 *               whose surface pattern breaks (と + past discovery, 安ければ買います, I don't know when he will …).
 *   swaps       [{ id, kc?, a, b, cat, note/noteEn }]  mode 2: sentence a works; in b the connective is swapped.
 *               cat = why b fails, or "both" when both work but mean different things.
 *   tasks       [{ id, kc, task/taskEn, allowed: [connId], need?, whyNot?/whyNotEn?, model }]  mode 3: the learner
 *               writes the whole sentence. The page finds the connective (conns[].re) and the ending type (ends);
 *               it passes only if the connective is in `allowed` and the ending is of type `need`. The learner may
 *               correct the detected type; a corrected type is recorded as self-report.
 *   ends        [{ type, re }]  regexes for the ending of the main clause (request, intention, suggestion …).
 *   review      items a native-speaking teacher should check; not used in drills.
 * Interface-language text has an English twin (<field>En); target-language text is never translated.
 * All sentences were written for this pack.
 */
KT_DATA["clause-constraint-ja"] = {
  "id": "clause-constraint-ja", "lang": "ja", "speech": "ja-JP",
  "title": "日语连接形式：后句能接什么", "titleEn": "Japanese connectives: what may follow",
  "subtitle": "と、たら、ば、て、たとたん、からには……都能译成“如果／因为／一……就”，但它们对后句的限制不一样。前句不动，一张张试后句。", "subtitleEn": "と, たら, ば, て, たとたん, からには … can all be translated as “if / because / as soon as”, but each limits what the next clause may be. Keep the first clause and try the next clauses one by one.",
  "review": [
    "駅に着けば、電話してください 判为不自然（ば 的前句是动作时后句一般不接请求）；有母语者可以接受，请确认",
    "駅に着くと、バスが止まっていた（と 接过去的发现）判为对",
    "たら 后接说话人自己过去的意志动作（*駅に着いたら、電話しました）没有放进练习，因为判断有分歧",
    "音楽を聞くように／聞くために 的主语限制题没有绑定到本原语的知识点，只作对照"
  ],
  "types": {
    "req": {"label": "请求", "labelEn": "request", "icon": "🙏"},
    "will": {"label": "意志／打算", "labelEn": "intention", "icon": "🎯"},
    "inv": {"label": "劝诱", "labelEn": "invitation", "icon": "🤝"},
    "past": {"label": "已发生的事", "labelEn": "past event", "icon": "⏮"},
    "fact": {"label": "规律／恒常的事", "labelEn": "regular fact", "icon": "🔁"},
    "feel": {"label": "感受／评价", "labelEn": "feeling / judgement", "icon": "💬"},
    "neg": {"label": "否定／做不到", "labelEn": "negative / cannot", "icon": "🚫"},
    "habit": {"label": "习惯", "labelEn": "habit", "icon": "🗓"},
    "contra": {"label": "与预期相反", "labelEn": "against expectation", "icon": "↩"},
    "expect": {"label": "与预期一致", "labelEn": "as expected", "icon": "→"},
    "partial": {"label": "部分否定", "labelEn": "partial negation", "icon": "≠"},
    "full": {"label": "全面断定", "labelEn": "blanket statement", "icon": "＝"},
    "state": {"label": "持续状态", "labelEn": "ongoing state", "icon": "〰"},
    "once": {"label": "一次性动作", "labelEn": "one-off action", "icon": "•"}
  },
  "conns": [
    {"id": "totan", "form": "たとたん", "re": "とたん"},
    {"id": "karaniwa", "form": "からには", "re": "からには"},
    {"id": "monoda", "form": "ものだから", "re": "(もの|もん)(だ|です)?(から|で)[、，,]"},
    {"id": "naikotoniwa", "form": "ないことには", "re": "ないことには"},
    {"id": "tokorode", "form": "たところで", "re": "[たっだ]ところで"},
    {"id": "towaie", "form": "とはいえ", "re": "とはいえ"},
    {"id": "karatoitte", "form": "からといって", "re": "からといって"},
    {"id": "kotodashi", "form": "ことだし", "re": "ことだし"},
    {"id": "uchiwa", "form": "うちは", "re": "うちは"},
    {"id": "tara", "form": "たら", "re": "[たっだ]ら[、，,]?"},
    {"id": "nara", "form": "なら", "re": "なら[、，,]"},
    {"id": "ba", "form": "ば", "re": "ば[、，,]"},
    {"id": "to", "form": "と", "re": "[うくぐすつぬぶむるい]と[、，,]"},
    {"id": "te", "form": "て（原因）", "formEn": "て (cause)", "re": "[てで][、，,]"},
    {"id": "kara", "form": "から", "re": "から[、，,]"},
    {"id": "node", "form": "ので", "re": "ので[、，,]"}
  ],
  "cats": {
    "type": {"label": "不成立：后句类型受限（请求、意志、劝诱……）", "labelEn": "Fails: the next clause is a type this form does not allow (request, intention …)"},
    "tense": {"label": "不成立：时态或前后时间关系不对", "labelEn": "Fails: the tense or the time order does not fit"},
    "subject": {"label": "不成立：前后主语受限", "labelEn": "Fails: the subjects do not fit this form"},
    "both": {"label": "两个都成立，只是意思不同", "labelEn": "Both work, but they mean different things"}
  },
  "frames": [
    {"id": "f-to", "kc": "kt:ja-conditional-to", "conn": "to", "before": "駅に着くと、", "after": "。",
      "hint3": "可以：このボタンを押すと、水が出ます。　不可以：*駅に着くと、電話してください。", "hint3En": "OK: このボタンを押すと、水が出ます。 Not OK: *駅に着くと、電話してください。",
      "cards": [
        {"id": "c1", "text": "電話してください", "type": "req", "ok": false, "why": "と 后面不能接请求（改用 たら：駅に着いたら、電話してください）", "whyEn": "と cannot be followed by a request (use たら: 駅に着いたら、電話してください)"},
        {"id": "c2", "text": "改札の前に大きな地図があります", "type": "fact", "ok": true},
        {"id": "c3", "text": "一緒にお昼を食べましょう", "type": "inv", "ok": false, "why": "と 后面不能接劝诱", "whyEn": "と cannot be followed by an invitation"},
        {"id": "c4", "text": "迎えに行くつもりです", "type": "will", "ok": false, "why": "と 后面不能接说话人的意志或打算", "whyEn": "と cannot be followed by the speaker's intention"},
        {"id": "c5", "text": "バスがもう止まっていた", "type": "past", "ok": true, "note": "叙述过去时，と 可以接“一看，发现……”这样的已然事实。", "noteEn": "When narrating the past, と can be followed by something you found had happened."}
      ]},
    {"id": "f-tara", "kc": "kt:ja-conditional-family", "conn": "tara", "before": "駅に着いたら、", "after": "。",
      "hint3": "たら 的后句可以接请求、意志、劝诱。", "hint3En": "After たら the next clause may be a request, an intention or an invitation.",
      "cards": [
        {"id": "c1", "text": "電話してください", "type": "req", "ok": true},
        {"id": "c2", "text": "迎えに行くつもりです", "type": "will", "ok": true},
        {"id": "c3", "text": "一緒にお昼を食べましょう", "type": "inv", "ok": true},
        {"id": "c4", "text": "友達が待っていた", "type": "past", "ok": true, "note": "たら 也能接过去的发现：到了车站一看，朋友在等。", "noteEn": "たら can also be followed by a past discovery: when I got to the station, my friend was waiting."}
      ]},
    {"id": "f-ba-state", "kc": "kt:ja-conditional-family", "conn": "ba", "before": "安ければ、", "after": "。",
      "hint3": "前句是状态（安い）时，ば 的后句可以接意志：安ければ買います。", "hint3En": "When the first clause is a state (安い), ば may be followed by an intention: 安ければ買います。",
      "cards": [
        {"id": "c1", "text": "買います", "type": "will", "ok": true, "note": "前句是状态谓语，ば 后接意志可以。", "noteEn": "The first clause is a state, so ば may be followed by an intention."},
        {"id": "c2", "text": "二つ買いましょう", "type": "inv", "ok": true},
        {"id": "c3", "text": "たくさんの人が買います", "type": "fact", "ok": true}
      ]},
    {"id": "f-ba-act", "kc": "kt:ja-conditional-family", "conn": "ba", "before": "駅に着けば、", "after": "。",
      "cards": [
        {"id": "c1", "text": "すぐにわかります", "type": "fact", "ok": true},
        {"id": "c2", "text": "電話してください", "type": "req", "ok": false, "why": "ば 的前句是动作时，后句一般不接请求（改用 たら）", "whyEn": "When the first clause of ば is an action, it is not usually followed by a request (use たら)"},
        {"id": "c3", "text": "バスがすぐ来ます", "type": "fact", "ok": true}
      ]},
    {"id": "f-te", "kc": "kt:ja-te-cause", "conn": "te", "before": "雨が降って、", "after": "。",
      "hint3": "可以：雨が降って、試合が中止になりました。　不可以：*雨が降って、傘を貸してください。", "hint3En": "OK: 雨が降って、試合が中止になりました。 Not OK: *雨が降って、傘を貸してください。",
      "cards": [
        {"id": "c1", "text": "傘を貸してください", "type": "req", "ok": false, "why": "表示原因的 て 后面不能接请求（改用 から：雨が降っているから、傘を貸してください）", "whyEn": "Causal て cannot be followed by a request (use から: 雨が降っているから、傘を貸してください)"},
        {"id": "c2", "text": "試合が中止になりました", "type": "past", "ok": true},
        {"id": "c3", "text": "困りました", "type": "feel", "ok": true},
        {"id": "c4", "text": "家で映画を見ましょう", "type": "inv", "ok": false, "why": "表示原因的 て 后面不能接劝诱", "whyEn": "Causal て cannot be followed by an invitation"}
      ]},
    {"id": "f-totan", "kc": "kt:ja-totan", "conn": "totan", "before": "家に帰ったとたん、", "after": "。",
      "hint3": "可以：部屋に入ったとたん、電気が消えた。　不可以：*帰ったとたん、シャワーを浴びるつもりです。", "hint3En": "OK: 部屋に入ったとたん、電気が消えた。 Not OK: *帰ったとたん、シャワーを浴びるつもりです。",
      "cards": [
        {"id": "c1", "text": "雨が降り出した", "type": "past", "ok": true},
        {"id": "c2", "text": "シャワーを浴びるつもりです", "type": "will", "ok": false, "why": "たとたん 后面接意外发生的事，不接自己的打算", "whyEn": "たとたん is followed by something unexpected that happened, not by your own plan"},
        {"id": "c3", "text": "電話が鳴った", "type": "past", "ok": true},
        {"id": "c4", "text": "すぐ寝てください", "type": "req", "ok": false, "why": "たとたん 后面不接请求", "whyEn": "たとたん is not followed by a request"},
        {"id": "c5", "text": "毎日コーヒーを飲みます", "type": "habit", "ok": false, "why": "たとたん 说的是一次意外，习惯性的“一……就”用 とすぐ", "whyEn": "たとたん is about one unexpected moment; for a habit use とすぐ"}
      ]},
    {"id": "f-karaniwa", "kc": "kt:ja-karaniwa", "conn": "karaniwa", "before": "日本に来たからには、", "after": "。",
      "cards": [
        {"id": "c1", "text": "一度は富士山に登りたい", "type": "will", "ok": true},
        {"id": "c2", "text": "日本語をしっかり勉強するつもりだ", "type": "will", "ok": true},
        {"id": "c3", "text": "毎日雨が降った", "type": "past", "ok": false, "why": "からには 后面要接决心、义务或要求，不接客观发生的事", "whyEn": "からには is followed by a resolution, duty or demand, not by something that simply happened"},
        {"id": "c4", "text": "日本の習慣を学ぶべきだ", "type": "will", "ok": true}
      ]},
    {"id": "f-monoda", "kc": "kt:ja-monodakara", "conn": "monoda", "before": "時間がなかったものですから、", "after": "。",
      "cards": [
        {"id": "c1", "text": "朝ご飯を食べられませんでした", "type": "past", "ok": true},
        {"id": "c2", "text": "急いでください", "type": "req", "ok": false, "why": "ものだから 是辩解的理由，后面不接请求或命令（改用 から）", "whyEn": "ものだから gives an excuse; it is not followed by a request or an order (use から)"},
        {"id": "c3", "text": "タクシーで来てしまいました", "type": "past", "ok": true}
      ]},
    {"id": "f-naikoto", "kc": "kt:ja-adv-koto-required", "conn": "naikotoniwa", "before": "実際に使ってみないことには、", "after": "。",
      "cards": [
        {"id": "c1", "text": "よくわかりません", "type": "neg", "ok": true},
        {"id": "c2", "text": "よくわかります", "type": "fact", "ok": false, "why": "ないことには 后面要接否定或“做不到”", "whyEn": "ないことには must be followed by a negative or “cannot”"},
        {"id": "c3", "text": "何とも言えません", "type": "neg", "ok": true}
      ]},
    {"id": "f-tokorode", "kc": "kt:ja-adv-tokoro-futile", "conn": "tokorode", "before": "今から急いだところで、", "after": "。",
      "cards": [
        {"id": "c1", "text": "間に合わないだろう", "type": "neg", "ok": true},
        {"id": "c2", "text": "間に合った", "type": "past", "ok": false, "why": "たところで 后面要接否定或“白费力气”的结果", "whyEn": "たところで must be followed by a negative or futile result"},
        {"id": "c3", "text": "もう遅い", "type": "feel", "ok": true}
      ]},
    {"id": "f-towaie", "kc": "kt:ja-towaie", "conn": "towaie", "before": "春とはいえ、", "after": "。",
      "cards": [
        {"id": "c1", "text": "朝晩はまだ寒い", "type": "contra", "ok": true},
        {"id": "c2", "text": "暖かい日が多い", "type": "expect", "ok": false, "why": "とはいえ 后面要接和前项预期相反的事；“春天暖和”正是预期之内", "whyEn": "とはいえ must be followed by something against what the first part leads you to expect; a warm spring is just what you expect"},
        {"id": "c3", "text": "コートはまだ手放せない", "type": "contra", "ok": true}
      ]},
    {"id": "f-karatoitte", "kc": "kt:ja-kara-toitte", "conn": "karatoitte", "before": "日本人だからといって、", "after": "。",
      "cards": [
        {"id": "c1", "text": "敬語が上手だとは限らない", "type": "partial", "ok": true},
        {"id": "c2", "text": "敬語が上手なわけではない", "type": "partial", "ok": true},
        {"id": "c3", "text": "みんな敬語が上手だ", "type": "full", "ok": false, "why": "からといって 后面要接部分否定（とは限らない、わけではない）", "whyEn": "からといって must be followed by a partial negation (とは限らない, わけではない)"}
      ]},
    {"id": "f-uchiwa", "kc": "kt:ja-uchi-duration", "conn": "uchiwa", "before": "体が元気なうちは、", "after": "。",
      "cards": [
        {"id": "c1", "text": "毎日歩いて通勤するつもりだ", "type": "state", "ok": true, "note": "“只要还……就一直……”：后句是持续或习惯。", "noteEn": "“As long as … I will keep …”: the next clause is ongoing or a habit."},
        {"id": "c2", "text": "一度海外旅行をした", "type": "once", "ok": false, "why": "うちは 后面要接持续或习惯的状态；一次性的动作用 うちに（元気なうちに、一度海外旅行がしたい）", "whyEn": "うちは must be followed by an ongoing state or habit; a one-off action takes うちに (元気なうちに、一度海外旅行がしたい)"},
        {"id": "c3", "text": "仕事を続けたい", "type": "state", "ok": true}
      ]},
    {"id": "f-kotodashi", "kc": "kt:ja-adv-koto-reason", "conn": "kotodashi", "before": "雨もやんだことだし、", "after": "。",
      "cards": [
        {"id": "c1", "text": "そろそろ出かけようか", "type": "inv", "ok": true},
        {"id": "c2", "text": "道が乾いた", "type": "past", "ok": false, "why": "ことだし 后面要接提议或决定，不接客观的结果", "whyEn": "ことだし must be followed by a proposal or decision, not by an objective result"},
        {"id": "c3", "text": "散歩に行くことにした", "type": "will", "ok": true}
      ]}
  ],
  "swaps": [
    {"id": "s1", "kc": "kt:ja-conditional-to", "a": "駅に着いたら、電話してください。", "b": "駅に着くと、電話してください。", "cat": "type", "note": "と 后面不能接请求。", "noteEn": "と cannot be followed by a request."},
    {"id": "s2", "kc": "kt:ja-monodakara", "a": "時間がないから、急いでください。", "b": "時間がないものだから、急いでください。", "cat": "type", "note": "ものだから 是辩解，后面不接请求。", "noteEn": "ものだから is an excuse and is not followed by a request."},
    {"id": "s3", "kc": "kt:ja-totan", "a": "家に帰ったとき、電話が鳴った。", "b": "家に帰ったとたん、電話が鳴った。", "cat": "both", "note": "两个都对。とたん 强调“刚一……就”、出乎意料。", "noteEn": "Both are right. とたん stresses “the very moment … ” and surprise."},
    {"id": "s4", "kc": "kt:ja-conditional-family", "a": "京都に行くなら、新幹線が便利ですよ。", "b": "京都に行ったら、新幹線が便利ですよ。", "cat": "tense", "note": "たら 表示“到了京都以后”，可坐新干线是去之前的事；出发前的建议用 なら。", "noteEn": "たら means “after you get to Kyoto”, but taking the shinkansen happens before that; advice before setting off uses なら."},
    {"id": "s5", "kc": "kt:ja-conditional-family", "a": "このボタンを押すと、水が出ます。", "b": "このボタンを押したら、水が出ます。", "cat": "both", "note": "两个都对。と 说的是每次都这样的规律；たら 更像在说这一次。", "noteEn": "Both are right. と states a rule that always holds; たら sounds more like this one time."},
    {"id": "s6", "kc": "kt:ja-conditional-family", "a": "仕事が終わったら、飲みに行こう。", "b": "仕事が終わるなら、飲みに行こう。", "cat": "tense", "note": "なら 不表示时间先后；“下班以后”要用 たら。", "noteEn": "なら does not express “after”; for “once work is over” use たら."},
    {"id": "s7", "kc": "kt:ja-te-cause", "a": "雨が降って、試合が中止になりました。", "b": "雨が降って、試合を中止しましょう。", "cat": "type", "note": "表示原因的 て 后面不接劝诱。", "noteEn": "Causal て is not followed by an invitation."},
    {"id": "s8", "a": "子どもにもわかるように、ゆっくり話します。", "b": "子どもにもわかるために、ゆっくり話します。", "cat": "subject", "note": "ために 要求前后主语相同（而且是自己能控制的动作）；“孩子能听懂”的主语是孩子，所以用 ように。", "noteEn": "ために needs the same subject in both clauses (and a controllable action); the one who understands is the child, so use ように."}
  ],
  "tasks": [
    {"id": "t1", "kc": "kt:ja-conditional-to", "task": "请朋友到了车站以后给你打电话。整句写出来。", "taskEn": "Ask a friend to call you after they get to the station. Write the whole sentence.", "allowed": ["tara"], "need": "req",
      "whyNot": "と 和动作性的 ば 后面不接请求；这里用 たら。", "whyNotEn": "と and action-type ば are not followed by a request; use たら here.", "model": "駅に着いたら、電話してください。"},
    {"id": "t2", "kc": "kt:ja-conditional-family", "task": "朋友说下周要去京都。出发前给他一个建议（比如坐新干线）。整句写出来。", "taskEn": "A friend is going to Kyoto next week. Give advice for before the trip (e.g. take the shinkansen). Write the whole sentence.", "allowed": ["nara"], "need": "advice",
      "whyNot": "建议是出发前的事，用 なら；たら 意思是“到了京都以后”。", "whyNotEn": "The advice is for before the trip, so use なら; たら means “after you get to Kyoto”.", "model": "京都に行くなら、新幹線が便利ですよ。"},
    {"id": "t3", "kc": "kt:ja-te-cause", "task": "雨下得很大，请同学把伞借给你，并说明原因。整句写出来。", "taskEn": "It is pouring. Ask a classmate to lend you an umbrella and give the reason. Write the whole sentence.", "allowed": ["kara", "node"], "need": "req",
      "whyNot": "表示原因的 て 和 ものだから 后面都不接请求；用 から 或 ので。", "whyNotEn": "Neither causal て nor ものだから can be followed by a request; use から or ので.", "model": "雨が強いので、傘を貸してください。"}
  ],
  "ends": [
    {"type": "req", "re": "(て|で)(ください|下さい|くれませんか|くれる|もらえませんか|ね)[。！？!?]*$"},
    {"type": "inv", "re": "(ませんか|ましょう|ましょうか|よう|おう)[。！？!?]*$"},
    {"type": "advice", "re": "(がいいですよ|がいいです|がいいよ|がいい|ほうがいいです|ほうがいい|といいですよ|といいです|便利ですよ|便利です|おすすめです|おすすめですよ)[。！？!?]*$"},
    {"type": "will", "re": "(つもりです|つもりだ|たいです|たい|ます)[。！？!?]*$"}
  ],
  "endTypes": {"advice": {"label": "建议", "labelEn": "advice"}}
};

KT_DATA["clause-constraint-en"] = {
  "id": "clause-constraint-en", "lang": "en", "speech": "en-US",
  "title": "英语时间与条件从句：从句里能用什么", "titleEn": "English time and condition clauses: what the clause allows",
  "subtitle": "when、as soon as、until、if、in case……引出的从句说将来时用一般现在时；in case 不是 if。主句不动，一张张试从句。", "subtitleEn": "Clauses with when, as soon as, until, if, in case … use the present simple for the future, and in case is not if. Keep the main clause and try the clauses one by one.",
  "review": [
    "I don't know when he arrives（时刻表式现在时）没有放进练习，因为是否自然取决于语境",
    "In case it rains, take an umbrella 判为对（以防万一的准备）"
  ],
  "types": {
    "pres": {"label": "一般现在时", "labelEn": "present simple", "icon": "▶"},
    "perf": {"label": "现在完成时", "labelEn": "present perfect", "icon": "✔"},
    "will": {"label": "will 将来", "labelEn": "will future", "icon": "⏭"},
    "past": {"label": "过去时", "labelEn": "past", "icon": "⏮"},
    "req": {"label": "祈使／请求", "labelEn": "imperative / request", "icon": "🙏"},
    "so": {"label": "加 so", "labelEn": "with so", "icon": "➕"},
    "prep": {"label": "预防的准备", "labelEn": "precaution", "icon": "☂"},
    "result": {"label": "条件的结果", "labelEn": "result of a condition", "icon": "➡"}
  },
  "conns": [
    {"id": "assoonas", "form": "as soon as", "re": "\\bas soon as\\b", "noWill": true},
    {"id": "aslongas", "form": "as long as", "re": "\\b(as long as|provided( that)?)\\b", "noWill": true},
    {"id": "incase", "form": "in case", "re": "\\bin case\\b", "noWill": true},
    {"id": "until", "form": "until", "re": "\\b(until|till)\\b", "noWill": true},
    {"id": "unless", "form": "unless", "re": "\\bunless\\b", "noWill": true},
    {"id": "when", "form": "when", "re": "\\bwhen\\b", "noWill": true},
    {"id": "if", "form": "if", "re": "\\bif\\b", "noWill": true},
    {"id": "know-when", "form": "know when", "label": "know when（宾语从句）", "labelEn": "know when (noun clause)", "re": "(?!)"}
  ],
  "cats": {
    "type": {"label": "不成立：从句或主句的类型不对（例如 in case 不是 if）", "labelEn": "Fails: the clause is the wrong kind (e.g. in case is not if)"},
    "tense": {"label": "不成立：时态或前后时间关系不对", "labelEn": "Fails: the tense or the time order does not fit"},
    "subject": {"label": "不成立：前后主语受限", "labelEn": "Fails: the subjects do not fit this form"},
    "both": {"label": "两个都成立，只是意思不同", "labelEn": "Both work, but they mean different things"}
  },
  "frames": [
    {"id": "f-asap", "kc": "kt:en-time-clauses", "conn": "assoonas", "before": "I'll call you as soon as", "after": ".",
      "hint3": "可以：I'll call you as soon as I get home.　不可以：*I'll call you as soon as I will get home.", "hint3En": "OK: I'll call you as soon as I get home. Not OK: *I'll call you as soon as I will get home.",
      "cards": [
        {"id": "c1", "text": "I get home", "type": "pres", "ok": true},
        {"id": "c2", "text": "I will get home", "type": "will", "ok": false, "why": "时间从句说将来的事用一般现在时，不用 will", "whyEn": "A time clause about the future uses the present simple, not will"},
        {"id": "c3", "text": "I've finished work", "type": "perf", "ok": true, "note": "现在完成时强调先做完。", "noteEn": "The present perfect stresses finishing first."},
        {"id": "c4", "text": "I got home", "type": "past", "ok": false, "why": "主句是将来，从句不用过去时", "whyEn": "The main clause is about the future, so the clause is not in the past"}
      ]},
    {"id": "f-if", "kc": "kt:en-first-conditional", "conn": "if", "before": "If it", "after": ", we'll stay at home.",
      "cards": [
        {"id": "c1", "text": "rains", "type": "pres", "ok": true},
        {"id": "c2", "text": "will rain", "type": "will", "ok": false, "why": "if 从句说将来可能的事用一般现在时，不用 will", "whyEn": "An if clause about a possible future uses the present simple, not will"},
        {"id": "c3", "text": "is raining", "type": "pres", "ok": true},
        {"id": "c4", "text": "rained", "type": "past", "ok": false, "why": "主句是 will，if 从句不用过去时（过去时属于另一种条件句）", "whyEn": "With will in the main clause, the if clause is not in the past (the past belongs to another kind of conditional)"}
      ]},
    {"id": "f-if-main", "kc": "kt:en-first-conditional", "conn": "if", "before": "If you see Tom,", "after": ".",
      "cards": [
        {"id": "c1", "text": "tell him to call me", "type": "req", "ok": true, "note": "条件句的主句可以是祈使句。", "noteEn": "The main clause of a conditional can be an imperative."},
        {"id": "c2", "text": "you can give him this book", "type": "result", "ok": true},
        {"id": "c3", "text": "so tell him to call me", "type": "so", "ok": false, "why": "英语条件句的主句前不加 so（中文“如果……就”的“就”不翻成 so）", "whyEn": "English does not put so before the main clause of a conditional (the Chinese 就 is not so)"}
      ]},
    {"id": "f-until", "kc": "kt:en-time-clauses", "conn": "until", "before": "We won't start dinner until", "after": ".",
      "cards": [
        {"id": "c1", "text": "everyone is here", "type": "pres", "ok": true},
        {"id": "c2", "text": "everyone will be here", "type": "will", "ok": false, "why": "until 从句说将来用一般现在时", "whyEn": "An until clause about the future uses the present simple"},
        {"id": "c3", "text": "everyone has arrived", "type": "perf", "ok": true}
      ]},
    {"id": "f-incase", "kc": "kt:en-conditional-alternatives", "conn": "incase", "before": "Take an umbrella in case", "after": ".",
      "cards": [
        {"id": "c1", "text": "it rains", "type": "pres", "ok": true},
        {"id": "c2", "text": "it will rain", "type": "will", "ok": false, "why": "in case 从句用一般现在时", "whyEn": "An in case clause uses the present simple"},
        {"id": "c3", "text": "it gets cold later", "type": "pres", "ok": true}
      ]},
    {"id": "f-incase-main", "kc": "kt:en-conditional-alternatives", "conn": "incase", "before": "In case it rains,", "after": ".",
      "hint3": "可以：Take an umbrella in case it rains.（以防）　不可以：*In case it rains, the match will be cancelled.（要说“如果”用 if）", "hint3En": "OK: Take an umbrella in case it rains. (precaution) Not OK: *In case it rains, the match will be cancelled. (for “if” use if)",
      "cards": [
        {"id": "c1", "text": "take an umbrella", "type": "prep", "ok": true},
        {"id": "c2", "text": "the match will be cancelled", "type": "result", "ok": false, "why": "in case 是“以防万一”：后面是提前做的准备，不是条件的结果；“如果下雨比赛就取消”用 if", "whyEn": "in case means “as a precaution”: the other clause is something you prepare beforehand, not the result of a condition; for “if it rains, the match is cancelled” use if"},
        {"id": "c3", "text": "we'll stay at home", "type": "result", "ok": false, "why": "这是条件的结果，要用 if：If it rains, we'll stay at home.", "whyEn": "This is the result of a condition, so use if: If it rains, we'll stay at home."},
        {"id": "c4", "text": "I've packed a raincoat for you", "type": "prep", "ok": true}
      ]},
    {"id": "f-aslong", "kc": "kt:en-conditional-alternatives", "conn": "aslongas", "before": "You can borrow my laptop as long as", "after": ".",
      "cards": [
        {"id": "c1", "text": "you bring it back by Friday", "type": "pres", "ok": true},
        {"id": "c2", "text": "you will bring it back by Friday", "type": "will", "ok": false, "why": "as long as 从句用一般现在时", "whyEn": "An as long as clause uses the present simple"},
        {"id": "c3", "text": "so you bring it back by Friday", "type": "so", "ok": false, "why": "中文“只要……就”的“就”不能翻成 so 加在这里", "whyEn": "The Chinese 就 in 只要……就 cannot become so here"}
      ]},
    {"id": "f-knowwhen", "kc": "kt:en-time-clauses", "conn": "know-when", "before": "I don't know when", "after": ".",
      "hint3": "这里 when 问的是“什么时候”，整个从句是 know 的宾语，不是时间从句。", "hint3En": "Here when asks “at what time”; the clause is the object of know, not a time clause.",
      "cards": [
        {"id": "c1", "text": "he will arrive", "type": "will", "ok": true, "note": "这不是时间从句，而是 know 的宾语（问的是时间），可以用 will。", "noteEn": "This is not a time clause but the object of know (it asks about a time), so will is fine."},
        {"id": "c2", "text": "he arrived", "type": "past", "ok": true},
        {"id": "c3", "text": "the next train will leave", "type": "will", "ok": true}
      ]}
  ],
  "swaps": [
    {"id": "s1", "kc": "kt:en-time-clauses", "a": "I'll wait here until you come back.", "b": "I'll wait here as soon as you come back.", "cat": "tense", "note": "until 是“一直等到”；as soon as 是“一……就”，不能配“一直等”。", "noteEn": "until means “all the time up to”; as soon as means “the moment that”, which does not fit “wait”."},
    {"id": "s2", "kc": "kt:en-conditional-alternatives", "a": "Take an umbrella in case it rains.", "b": "Take an umbrella if it rains.", "cat": "both", "note": "两个都对，意思不同：in case 是现在就带上以防下雨；if 是下雨了才带。", "noteEn": "Both are right but mean different things: in case = take it now, just in case; if = take it only if it rains."},
    {"id": "s3", "kc": "kt:en-first-conditional", "a": "We'll go out when the rain stops.", "b": "We'll go out if the rain stops.", "cat": "both", "note": "两个都对：when 认为雨一定会停；if 不确定会不会停。", "noteEn": "Both are right: when assumes the rain will stop; if is not sure that it will."},
    {"id": "s4", "kc": "kt:en-conditional-alternatives", "a": "If it rains, we'll stay at home.", "b": "In case it rains, we'll stay at home.", "cat": "type", "note": "in case 不是 if：它引出的是“为了以防”，待在家是条件的结果，不是提前的准备。", "noteEn": "in case is not if: it introduces a precaution, and staying at home is the result of a condition, not a preparation."},
    {"id": "s5", "kc": "kt:en-time-clauses", "a": "As soon as I get home, I'll call you.", "b": "Until I get home, I'll call you.", "cat": "tense", "note": "until 要配持续的动作（I'll wait until…），“打电话”是一下子的动作。", "noteEn": "until needs an ongoing action (I'll wait until …); calling is a one-off action."},
    {"id": "s6", "kc": "kt:en-time-clauses", "a": "I won't leave until you arrive.", "b": "I won't leave when you arrive.", "cat": "both", "note": "两个都合语法，意思不同：前者是“你到了我才走”，后者是“你到的时候我不走”。", "noteEn": "Both are grammatical but mean different things: the first is “I'll leave only after you arrive”, the second “I won't be leaving at the moment you arrive”."}
  ],
  "tasks": [
    {"id": "t1", "kc": "kt:en-time-clauses", "task": "朋友要来你的城市。请他一到车站就给你打电话。整句写出来。", "taskEn": "A friend is coming to your city. Ask them to call you as soon as they get to the station. Write the whole sentence.", "allowed": ["assoonas", "when"], "need": "req",
      "whyNot": "要说“一到……就”，用 as soon as 或 when。", "whyNotEn": "For “the moment you get there”, use as soon as or when.", "model": "Please call me as soon as you get to the station."},
    {"id": "t2", "kc": "kt:en-first-conditional", "task": "明天可能下雨。说如果下雨你们打算怎么做。整句写出来。", "taskEn": "It may rain tomorrow. Say what you will do if it rains. Write the whole sentence.", "allowed": ["if"], "need": "will",
      "whyNot": "这里说的是条件和结果，用 if。", "whyNotEn": "This is a condition and its result, so use if.", "model": "If it rains tomorrow, we'll stay at home."},
    {"id": "t3", "kc": "kt:en-conditional-alternatives", "task": "同事要出门，看起来要下雨。提醒他带上伞，以防下雨。整句写出来。", "taskEn": "A colleague is going out and it looks like rain. Tell them to take an umbrella just in case. Write the whole sentence.", "allowed": ["incase"], "need": "req",
      "whyNot": "if 的意思是“下雨了才带”；现在就带上以防万一要用 in case。", "whyNotEn": "if would mean “take it only if it rains”; taking it now just in case needs in case.", "model": "Take an umbrella in case it rains."}
  ],
  "ends": [
    {"type": "req", "re": "(\\b(please|can you|could you|would you|don't forget to|remember to)\\b|^(call|take|bring|tell|send|text|wait|come|ring|phone|let|give)\\b)"},
    {"type": "will", "re": "(\\bwill\\b|'ll\\b|\\bwon't\\b|\\bgoing to\\b)"}
  ]
};

KT_DATA["clause-constraint-zh"] = {
  "id": "clause-constraint-zh", "lang": "zh", "speech": "zh-CN",
  "title": "汉语关联词：后一分句要配什么", "titleEn": "Chinese correlatives: what the second clause needs",
  "subtitle": "只要……就、只有……才、一……就、即使……也、不管……都、既然……就：前一分句选好了，后一分句就有固定的搭配和位置。", "subtitleEn": "只要……就, 只有……才, 一……就, 即使……也, 不管……都, 既然……就: once the first clause is chosen, the second clause has a fixed partner word and position.",
  "review": [
    "不管……也 与 不管……都 都判为对",
    "即使下雨，我们就不去了 判为不对（即使 要配 也）",
    "虽然明天下雨 判为前句性质不对（即使 才引出假设）；在已有天气预报的语境下也许能说"
  ],
  "types": {
    "jiu": {"label": "主语＋就＋结果", "labelEn": "subject + 就 + result", "icon": "就"},
    "cai": {"label": "主语＋才＋结果", "labelEn": "subject + 才 + result", "icon": "才"},
    "ye": {"label": "主语＋也＋结果", "labelEn": "subject + 也 + result", "icon": "也"},
    "dou": {"label": "主语＋都＋结果", "labelEn": "subject + 都 + result", "icon": "都"},
    "pos": {"label": "就／才／也 在主语前", "labelEn": "就 / 才 / 也 before the subject", "icon": "↔"},
    "bare": {"label": "没有关联副词", "labelEn": "no partner word", "icon": "∅"},
    "suoyi": {"label": "所以／但是……", "labelEn": "所以 / 但是 …", "icon": "＋"}
  },
  "conns": [
    {"id": "zhiyao", "form": "只要", "re": "只要", "partner": "就"},
    {"id": "zhiyou", "form": "只有", "re": "只有", "partner": "才"},
    {"id": "yi", "form": "一……就", "re": "一[^，。,]{1,8}就", "partner": "就"},
    {"id": "jishi", "form": "即使", "re": "即使|哪怕", "partner": "也"},
    {"id": "buguan", "form": "不管", "re": "不管|无论", "partner": "[都也]", "choice": "(什么|谁|怎么|哪|多|还是|几|(.)不\\2|(.)没\\3)"},
    {"id": "jiran", "form": "既然", "re": "既然", "partner": "就|也|还|为什么"},
    {"id": "suiran", "form": "虽然", "re": "虽然", "partner": "但|可是|还是"},
    {"id": "yinwei", "form": "因为", "re": "因为", "partner": "所以"}
  ],
  "cats": {
    "pair": {"label": "不成立：关联词搭配不对", "labelEn": "Fails: the correlative pair does not match"},
    "premise": {"label": "不成立：前一分句的性质不对（假设／事实／已知前提）", "labelEn": "Fails: the first clause is the wrong kind (hypothesis / fact / known premise)"},
    "both": {"label": "两个都成立，只是意思不同", "labelEn": "Both work, but they mean different things"}
  },
  "frames": [
    {"id": "f-zhiyao", "kc": "kt:zh-zhiyao-jiu", "conn": "zhiyao", "before": "只要每天练习，", "after": "。",
      "hint3": "可以：只要努力，你就能学好。　不可以：*只要努力，你才能学好。", "hint3En": "OK: 只要努力，你就能学好。 Not OK: *只要努力，你才能学好。",
      "cards": [
        {"id": "c1", "text": "你的口语就会进步", "type": "jiu", "ok": true},
        {"id": "c2", "text": "你的口语才会进步", "type": "cai", "ok": false, "why": "只要 配 就，不配 才", "whyEn": "只要 pairs with 就, not 才"},
        {"id": "c3", "text": "就你的口语会进步", "type": "pos", "ok": false, "why": "就 放在后一分句的主语后面", "whyEn": "就 goes after the subject of the second clause"}
      ]},
    {"id": "f-zhiyou", "kc": "kt:zh-zhiyao-jiu", "conn": "zhiyou", "before": "只有拿到签证，", "after": "。",
      "cards": [
        {"id": "c1", "text": "你才能去中国留学", "type": "cai", "ok": true},
        {"id": "c2", "text": "你就能去中国留学", "type": "jiu", "ok": false, "why": "只有 配 才，不配 就", "whyEn": "只有 pairs with 才, not 就"},
        {"id": "c3", "text": "才你能去中国留学", "type": "pos", "ok": false, "why": "才 放在后一分句的主语后面", "whyEn": "才 goes after the subject of the second clause"}
      ]},
    {"id": "f-yi", "kc": "kt:zh-yi-jiu", "conn": "yi", "before": "他一到家，", "after": "。",
      "cards": [
        {"id": "c1", "text": "就睡觉了", "type": "jiu", "ok": true},
        {"id": "c2", "text": "睡觉了", "type": "bare", "ok": false, "why": "一……就 的后一分句要有 就", "whyEn": "The second clause of 一……就 needs 就"},
        {"id": "c3", "text": "就给我打电话了", "type": "jiu", "ok": true},
        {"id": "c4", "text": "所以睡觉了", "type": "suoyi", "ok": false, "why": "一 配 就，不配 所以", "whyEn": "一 pairs with 就, not 所以"}
      ]},
    {"id": "f-yi2", "kc": "kt:zh-yi-jiu", "conn": "yi", "before": "老师一进教室，", "after": "。",
      "cards": [
        {"id": "c1", "text": "大家就不说话了", "type": "jiu", "ok": true, "note": "两个分句主语不同：就 放在第二个主语后面。", "noteEn": "The two clauses have different subjects: 就 goes after the second subject."},
        {"id": "c2", "text": "就大家不说话了", "type": "pos", "ok": false, "why": "就 放在后一分句的主语（大家）后面", "whyEn": "就 goes after the subject of the second clause (大家)"}
      ]},
    {"id": "f-jishi", "kc": "kt:zh-jishi-ye", "conn": "jishi", "before": "即使明天下雨，", "after": "。",
      "hint3": "可以：即使下雨，比赛也照常进行。　不可以：*即使下雨，但是比赛照常进行。", "hint3En": "OK: 即使下雨，比赛也照常进行。 Not OK: *即使下雨，但是比赛照常进行。",
      "cards": [
        {"id": "c1", "text": "我们也要去", "type": "ye", "ok": true},
        {"id": "c2", "text": "但是我们要去", "type": "suoyi", "ok": false, "why": "即使 配 也，不配 但是", "whyEn": "即使 pairs with 也, not 但是"},
        {"id": "c3", "text": "也我们要去", "type": "pos", "ok": false, "why": "也 放在后一分句的主语后面", "whyEn": "也 goes after the subject of the second clause"},
        {"id": "c4", "text": "我们就不去了", "type": "jiu", "ok": false, "why": "即使 表示“结果不受影响”，要配 也；说“下雨就不去”用 如果……就", "whyEn": "即使 means “the result does not change” and needs 也; for “if it rains we won't go” use 如果……就"}
      ]},
    {"id": "f-buguan", "kc": "kt:zh-buguan-dou", "conn": "buguan", "before": "不管天气怎么样，", "after": "。",
      "cards": [
        {"id": "c1", "text": "他都去跑步", "type": "dou", "ok": true},
        {"id": "c2", "text": "他也去跑步", "type": "ye", "ok": true, "note": "不管 也可以配 也。", "noteEn": "不管 can also pair with 也."},
        {"id": "c3", "text": "他去跑步", "type": "bare", "ok": false, "why": "不管 的后一分句要有 都（或 也）", "whyEn": "The second clause after 不管 needs 都 (or 也)"}
      ]},
    {"id": "f-jiran", "kc": "kt:zh-jiran-jiu", "conn": "jiran", "before": "既然你已经来了，", "after": "。",
      "cards": [
        {"id": "c1", "text": "就多住几天吧", "type": "jiu", "ok": true},
        {"id": "c2", "text": "所以多住几天吧", "type": "suoyi", "ok": false, "why": "既然 配 就，不配 所以", "whyEn": "既然 pairs with 就, not 所以"},
        {"id": "c3", "text": "就你多住几天吧", "type": "pos", "ok": false, "why": "就 放在主语（你）后面", "whyEn": "就 goes after the subject (你)"},
        {"id": "c4", "text": "你就多住几天吧", "type": "jiu", "ok": true}
      ]}
  ],
  "swaps": [
    {"id": "s1", "kc": "kt:zh-zhiyao-jiu", "a": "只要努力，就能成功。", "b": "只有努力，才能成功。", "cat": "both", "note": "两个都对，意思不同：只要 是“有这个条件就够了”，只有 是“非这个条件不可”。", "noteEn": "Both are right but mean different things: 只要 = this condition is enough; 只有 = nothing but this condition will do."},
    {"id": "s2", "kc": "kt:zh-jishi-ye", "a": "虽然他昨天病了，但是还是来上课了。", "b": "即使他昨天病了，他也来上课了。", "cat": "premise", "note": "即使 引出假设；“他昨天病了”是已经发生的事实，要用 虽然。", "noteEn": "即使 introduces a hypothesis; “he was ill yesterday” is a fact, so use 虽然."},
    {"id": "s3", "kc": "kt:zh-jiran-jiu", "a": "因为我感冒了，所以没来上课。", "b": "既然我感冒了，就没来上课。", "cat": "premise", "note": "既然 以双方已知的事实为前提，后面接建议或推断；说明对方不知道的原因用 因为。", "noteEn": "既然 starts from a fact both people already know and leads to a suggestion or inference; to explain a reason the listener does not know, use 因为."},
    {"id": "s4", "kc": "kt:zh-zhiyao-jiu", "a": "只要你来，我们就开始。", "b": "只要你来，我们才开始。", "cat": "pair", "note": "只要 配 就，不配 才。", "noteEn": "只要 pairs with 就, not 才."},
    {"id": "s5", "kc": "kt:zh-buguan-dou", "a": "不管谁来，我都欢迎。", "b": "即使谁来，我也欢迎。", "cat": "premise", "note": "即使 后面是一个具体的假设，不能是“谁”这样的任指；任指要用 不管。", "noteEn": "即使 is followed by one specific hypothesis, not an “anyone” word like 谁; for “whoever” use 不管."},
    {"id": "s6", "kc": "kt:zh-buguan-dou", "a": "虽然天气很冷，他还是去跑步。", "b": "不管天气很冷，他都去跑步。", "cat": "premise", "note": "不管 后面要有选择或疑问（多冷、冷不冷），不能是普通陈述“很冷”。", "noteEn": "不管 needs a choice or question word after it (多冷, 冷不冷), not a plain statement like 很冷."},
    {"id": "s7", "kc": "kt:zh-yi-jiu", "a": "他一到家就睡觉了。", "b": "他到家的时候睡觉了。", "cat": "both", "note": "两个都能说，意思不同：一……就 强调紧接着发生。", "noteEn": "Both can be said, with different meanings: 一……就 stresses that one thing follows the other immediately."}
  ],
  "tasks": [
    {"id": "t1", "kc": "kt:zh-jiran-jiu", "task": "朋友已经到了北京，你劝他多玩几天。整句写出来。", "taskEn": "Your friend has already arrived in Beijing. Urge them to stay a few more days. Write the whole sentence.", "allowed": ["jiran"], "need": "sugg",
      "whyNot": "前提是双方都知道的事实，后面是建议：用 既然……就……吧。", "whyNotEn": "The premise is a fact you both know and the second part is a suggestion: use 既然……就……吧.", "model": "既然你已经来了，就多玩几天吧。"},
    {"id": "t2", "kc": "kt:zh-zhiyao-jiu", "task": "告诉孩子：作业做完了才能看电视，别的条件都不行。整句写出来。", "taskEn": "Tell a child: only once the homework is done may they watch TV, nothing else will do. Write the whole sentence.", "allowed": ["zhiyou"],
      "whyNot": "“唯一的条件”要用 只有……才。", "whyNotEn": "“The only condition” needs 只有……才.", "model": "只有做完作业，你才能看电视。"},
    {"id": "t3", "kc": "kt:zh-buguan-dou", "task": "通知大家：明天下不下雨，比赛都照常进行。整句写出来。", "taskEn": "Tell everyone: rain or no rain tomorrow, the match goes ahead. Write the whole sentence.", "allowed": ["buguan"],
      "whyNot": "“无论什么条件结果都一样”用 不管／无论……都。", "whyNotEn": "“Whatever happens, the result is the same” needs 不管 / 无论……都.", "model": "不管明天下不下雨，比赛都照常进行。"},
    {"id": "t4", "kc": "kt:zh-yi-jiu", "task": "说你的一个习惯：每次喝咖啡都睡不着。整句写出来。", "taskEn": "Describe a habit: every time you drink coffee you can't sleep. Write the whole sentence.", "allowed": ["yi"],
      "whyNot": "“只要一出现就必然”用 一……就。", "whyNotEn": "“Whenever this happens, that follows” needs 一……就.", "model": "我一喝咖啡就睡不着。"}
  ],
  "ends": [
    {"type": "sugg", "re": "(吧|请[^。]*|好不好|怎么样)[。！？!?]*$"}
  ],
  "endTypes": {"sugg": {"label": "建议", "labelEn": "suggestion"}}
};
