/* Data packs for blocks/slot-order.html (prim:slot-order): slot-order-en, slot-order-ja, slot-order-zh.
 *
 * Pack format
 *   slots      { <slotId>: {label, labelEn, color} }  named slots on the sentence track; color = t0…t4 (palette).
 *   rules      [{ id, a, b, types?, frontOk?, text, textEn }]  one ordering rule: every chunk whose slot is in `a` must come
 *              before every chunk whose slot is in `b` ("*" = any slot not in the other list). `types` limits the
 *              rule to sentences of those types (stmt, yn, wh, emb, inv, exist, pron, lihe …); no `types` = all.
 *              frontOk = slots that may open the sentence without breaking this rule (English time phrases).
 *              The page uses the rules to name what an order breaks; they are also the options in 判句.
 *   l1         {label, labelEn}  the name of the contrast track (the learner's other language), e.g. 中文语序.
 *   sentences  [{ id, kc, type, chunks: [[text, slotId], …] in the standard order, end?, alt?: [[i, …]],
 *                 free?: [[i, …]], l1?: [i, …], gloss?/glossEn?, note?/noteEn? }]
 *              alt = other complete orders that are also right; free = groups of chunk indices whose order among
 *              themselves does not matter (Japanese case-marked phrases). l1 = the order the contrast language
 *              would use (indices; chunks it has no slot for are left out). gloss is shown only when the interface
 *              language is not the language being taught.
 *   judge      [{ id, kc, text, verdict: ok | bad | alt, rule?, base?, note/noteEn }]  step 2: is this order right?
 *              bad names the broken rule; alt = also right, but emphasis or information changes (base = the
 *              neutral order shown beside it). Every pack has at least a quarter alt items and one sentence that
 *              looks like the contrast language's order but is right.
 *   own        { prompt/promptEn, sep, min, checks: { <slotId>: {re, why, whyEn} } }  step 3: the learner writes a
 *              sentence, cuts it into chunks with `sep`, and labels them. Labels are spot-checked against `re`
 *              (a controlled word list as a regular expression, case-insensitive); the page says it cannot judge
 *              the grammar of the sentence itself.
 *   review     items a native-speaking teacher should check; not used in drills.
 * Interface-language text has an English twin (<field>En); target-language text is never translated.
 * All sentences were written for this pack.
 */
KT_DATA["slot-order-en"] = {
  "id": "slot-order-en", "lang": "en", "speech": "en-US", "joiner": " ",
  "title": "英语语序槽位", "titleEn": "English word-order slots",
  "subtitle": "词都认识，顺序却总按中文走？先自己排，再看每个词块属于哪个槽，哪条位置规则被违反了。", "subtitleEn": "You know all the words, but the order keeps following your first language? Order them yourself first, then see which slot each chunk belongs to and which position rule was broken.",
  "review": [
    "You are a student? 这类陈述语序问句在口语中可以说（升调表示惊讶或确认），页面按书面问句判为不对，并在说明里注明",
    "We went yesterday to the cinema 判为不对（中性语序是地点在前、时间在后）；有老师认为只是不自然",
    "Never have I seen … 等否定倒装属正式书面语，C1 才要求"
  ],
  "l1": {"label": "中文语序", "labelEn": "Chinese order"},
  "slots": {
    "MAIN": {"label": "主句", "labelEn": "main clause", "color": "t0"},
    "Q": {"label": "疑问词／if", "labelEn": "question word / if", "color": "t4"},
    "NADV": {"label": "否定副词", "labelEn": "negative adverb", "color": "t4"},
    "AUX": {"label": "助动词／be", "labelEn": "auxiliary / be", "color": "t3"},
    "S": {"label": "主语", "labelEn": "subject", "color": "t1"},
    "V": {"label": "动词", "labelEn": "verb", "color": "t2"},
    "O": {"label": "宾语", "labelEn": "object", "color": "t1"},
    "C": {"label": "表语", "labelEn": "complement", "color": "t1"},
    "M": {"label": "方式", "labelEn": "manner", "color": "t0"},
    "P": {"label": "地点", "labelEn": "place", "color": "t3"},
    "T": {"label": "时间", "labelEn": "time", "color": "t2"}
  },
  "rules": [
    {"id": "sv", "a": ["S"], "b": ["V", "O", "C"], "types": ["stmt", "emb"], "text": "陈述句（和间接疑问句）：主语在动词前", "textEn": "Statements (and embedded questions): the subject comes before the verb"},
    {"id": "vo", "a": ["V"], "b": ["O"], "text": "宾语跟在动词后面", "textEn": "The object follows the verb"},
    {"id": "aux-s", "a": ["AUX"], "b": ["S"], "types": ["yn", "wh", "inv"], "text": "问句（和否定词提前的句子）：助动词／be 放在主语前", "textEn": "Questions (and sentences that start with a negative word): the auxiliary / be goes before the subject"},
    {"id": "s-aux", "a": ["S"], "b": ["AUX"], "types": ["stmt", "emb"], "text": "陈述句和间接疑问句：主语在助动词／be 前（不倒装）", "textEn": "Statements and embedded questions: the subject comes before the auxiliary / be (no inversion)"},
    {"id": "q-first", "a": ["Q", "NADV"], "b": ["S", "AUX", "V", "O", "C", "P", "T"], "text": "疑问词（或否定副词）放在问句／从句最前面", "textEn": "The question word (or negative adverb) goes first in its question or clause"},
    {"id": "main-first", "a": ["MAIN"], "b": "*", "text": "间接疑问句：主句在前，问的内容在后", "textEn": "Embedded questions: the main clause first, the question after it"},
    {"id": "vp-adv", "a": ["V", "O", "C"], "b": ["M", "P", "T"], "types": ["stmt"], "frontOk": ["T"], "text": "方式、地点、时间状语一般放在动词（和宾语）后面", "textEn": "Manner, place and time phrases usually go after the verb (and its object)"},
    {"id": "mpt", "a": ["M", "P"], "b": ["T"], "types": ["stmt"], "frontOk": ["T"], "text": "句末的次序：方式—地点—时间", "textEn": "At the end of the sentence: manner – place – time"}
  ],
  "sentences": [
    {"id": "e1", "kc": "kt:en-word-order-svo", "type": "stmt", "chunks": [["I", "S"], ["eat", "V"], ["lunch", "O"], ["at home", "P"], ["on Sundays", "T"]], "end": ".", "alt": [[4, 0, 1, 2, 3]], "l1": [0, 4, 3, 1, 2], "gloss": "我星期天在家吃午饭。"},
    {"id": "e2", "kc": "kt:en-adverbial-phrases", "type": "stmt", "chunks": [["She", "S"], ["studies", "V"], ["English", "O"], ["at the library", "P"], ["every evening", "T"]], "end": ".", "alt": [[4, 0, 1, 2, 3]], "l1": [0, 4, 3, 1, 2], "gloss": "她每天晚上在图书馆学英语。"},
    {"id": "e3", "kc": "kt:en-adverbial-phrases", "type": "stmt", "chunks": [["We", "S"], ["walked", "V"], ["slowly", "M"], ["to the station", "P"], ["yesterday", "T"]], "end": ".", "alt": [[4, 0, 1, 2, 3]], "l1": [0, 4, 2, 1, 3], "gloss": "我们昨天慢慢地走到车站。"},
    {"id": "e4", "kc": "kt:en-word-order-svo", "type": "stmt", "chunks": [["My brother", "S"], ["plays", "V"], ["football", "O"], ["in the park", "P"], ["after school", "T"]], "end": ".", "alt": [[4, 0, 1, 2, 3]], "l1": [0, 4, 3, 1, 2], "gloss": "我弟弟放学后在公园踢足球。"},
    {"id": "e5", "kc": "kt:en-adverbial-phrases", "type": "stmt", "chunks": [["They", "S"], ["met", "V"], ["their teacher", "O"], ["at the station", "P"], ["last week", "T"]], "end": ".", "alt": [[4, 0, 1, 2, 3]], "l1": [0, 4, 3, 1, 2], "gloss": "他们上周在车站碰见了老师。"},
    {"id": "e6", "kc": "kt:en-be-questions", "type": "yn", "chunks": [["Are", "AUX"], ["you", "S"], ["a student", "C"]], "end": "?", "l1": [1, 0, 2], "gloss": "你是学生吗？", "note": "口语里升调说 You are a student? 也能听到（表示惊讶或确认），但书面问句要把 be 放到主语前。", "noteEn": "In speech, You are a student? with rising intonation is heard (surprise or checking), but a written question puts be before the subject."},
    {"id": "e7", "kc": "kt:en-be-questions", "type": "yn", "chunks": [["Is", "AUX"], ["your sister", "S"], ["at home", "P"]], "end": "?", "l1": [1, 0, 2], "gloss": "你姐姐在家吗？"},
    {"id": "e8", "kc": "kt:en-do-questions", "type": "yn", "chunks": [["Does", "AUX"], ["your father", "S"], ["drive", "V"], ["to work", "P"]], "end": "?", "l1": [1, 2, 3], "gloss": "你爸爸开车上班吗？"},
    {"id": "e9", "kc": "kt:en-wh-questions", "type": "wh", "chunks": [["Where", "Q"], ["do", "AUX"], ["you", "S"], ["live", "V"]], "end": "?", "l1": [2, 3, 0], "gloss": "你住在哪儿？"},
    {"id": "e10", "kc": "kt:en-wh-questions", "type": "wh", "chunks": [["What time", "Q"], ["does", "AUX"], ["the shop", "S"], ["open", "V"]], "end": "?", "l1": [2, 0, 3], "gloss": "商店几点开门？"},
    {"id": "e11", "kc": "kt:en-wh-questions", "type": "wh", "chunks": [["What", "Q"], ["is", "AUX"], ["your name", "S"]], "end": "?", "l1": [2, 1, 0], "gloss": "你叫什么名字？"},
    {"id": "e12", "kc": "kt:en-embedded-questions", "type": "emb", "chunks": [["Can you tell me", "MAIN"], ["where", "Q"], ["the station", "S"], ["is", "AUX"]], "end": "?", "l1": [0, 2, 3, 1], "gloss": "你能告诉我车站在哪儿吗？", "note": "嵌进句子里的问题用陈述语序：where the station is，不是 *where is the station。", "noteEn": "A question inside a sentence uses statement order: where the station is, not *where is the station."},
    {"id": "e13", "kc": "kt:en-embedded-questions", "type": "emb", "chunks": [["Do you know", "MAIN"], ["what time", "Q"], ["the film", "S"], ["starts", "V"]], "end": "?", "l1": [0, 2, 1, 3], "gloss": "你知道电影几点开始吗？"},
    {"id": "e14", "kc": "kt:en-reported-questions", "type": "emb", "chunks": [["She asked me", "MAIN"], ["where", "Q"], ["I", "S"], ["lived", "V"]], "end": ".", "l1": [0, 2, 3, 1], "gloss": "她问我住在哪儿。"},
    {"id": "e15", "kc": "kt:en-reported-questions", "type": "emb", "chunks": [["He asked", "MAIN"], ["if", "Q"], ["I", "S"], ["was", "AUX"], ["tired", "C"]], "end": ".", "gloss": "他问我累不累。"},
    {"id": "e16", "kc": "kt:en-negative-inversion", "type": "inv", "chunks": [["Never", "NADV"], ["have", "AUX"], ["I", "S"], ["seen", "V"], ["such a mess", "O"]], "end": ".", "l1": [2, 0, 1, 3, 4], "gloss": "我从没见过这么乱的样子。"},
    {"id": "e17", "kc": "kt:en-subject-questions", "type": "wh", "chunks": [["Who", "Q"], ["called", "V"], ["you", "O"]], "end": "?", "l1": [0, 1, 2], "gloss": "谁给你打的电话？", "note": "问主语时疑问词就是主语，不用 did。", "noteEn": "When the question word is the subject, there is no did."}
  ],
  "judge": [
    {"id": "j1", "kc": "kt:en-adverbial-phrases", "text": "I every day at home study English.", "verdict": "bad", "rule": "vp-adv", "note": "这是中文的顺序。英语把地点、时间放在动词和宾语后面：I study English at home every day.", "noteEn": "This is Chinese order. English puts place and time after the verb and object: I study English at home every day."},
    {"id": "j2", "kc": "kt:en-adverbial-phrases", "text": "I study English at home every day.", "verdict": "ok", "note": "中性语序：动词—宾语—地点—时间。", "noteEn": "Neutral order: verb – object – place – time."},
    {"id": "j3", "kc": "kt:en-adverbial-phrases", "text": "Every day I study English at home.", "verdict": "alt", "base": "I study English at home every day.", "note": "时间短语放到句首也对，只是把“每天”提出来当话头。", "noteEn": "Moving the time phrase to the front is also right; it just puts “every day” forward as the starting point."},
    {"id": "j4", "kc": "kt:en-word-order-svo", "text": "Sometimes I walk to school.", "verdict": "alt", "base": "I sometimes walk to school.", "note": "看上去像中文语序，但 sometimes 可以放句首，意思基本不变。", "noteEn": "It looks like Chinese order, but sometimes can go first; the meaning hardly changes."},
    {"id": "j5", "kc": "kt:en-be-questions", "text": "You are a student?", "verdict": "bad", "rule": "aux-s", "note": "书面问句要倒装：Are you a student? 口语里升调说 You are a student? 表示惊讶或确认，不是普通问句。", "noteEn": "A written question inverts: Are you a student? In speech, You are a student? with rising intonation shows surprise or checking; it is not an ordinary question."},
    {"id": "j6", "kc": "kt:en-wh-questions", "text": "Where you do live?", "verdict": "bad", "rule": "aux-s", "note": "助动词 do 放在主语前：Where do you live?", "noteEn": "The auxiliary do goes before the subject: Where do you live?"},
    {"id": "j7", "kc": "kt:en-embedded-questions", "text": "Can you tell me where is the station?", "verdict": "bad", "rule": "s-aux", "note": "间接疑问句不倒装：Can you tell me where the station is?", "noteEn": "An embedded question does not invert: Can you tell me where the station is?"},
    {"id": "j8", "kc": "kt:en-embedded-questions", "text": "Can you tell me where the station is?", "verdict": "ok", "note": "陈述语序，对。", "noteEn": "Statement order: right."},
    {"id": "j9", "kc": "kt:en-adverbial-phrases", "text": "Yesterday we went to the cinema.", "verdict": "alt", "base": "We went to the cinema yesterday.", "note": "时间放句首也对，常用来换一个话题或接上文。", "noteEn": "Time at the front is also right; it is often used to start a new topic or link to what came before."},
    {"id": "j10", "kc": "kt:en-adverbial-phrases", "text": "We went yesterday to the cinema.", "verdict": "bad", "rule": "mpt", "note": "时间不放在动词和地点之间：We went to the cinema yesterday.", "noteEn": "Time does not go between the verb and the place: We went to the cinema yesterday."},
    {"id": "j11", "kc": "kt:en-negative-inversion", "text": "Never I have seen such a mess.", "verdict": "bad", "rule": "aux-s", "note": "否定副词放句首时要倒装：Never have I seen such a mess.", "noteEn": "A negative adverb at the front needs inversion: Never have I seen such a mess."},
    {"id": "j12", "kc": "kt:en-subject-questions", "text": "Who called you?", "verdict": "ok", "note": "问主语，不用 did。", "noteEn": "A subject question: no did."},
    {"id": "j13", "kc": "kt:en-reported-questions", "text": "She asked me where did I live.", "verdict": "bad", "rule": "s-aux", "note": "转述的问题用陈述语序，不加 did：She asked me where I lived.", "noteEn": "A reported question uses statement order without did: She asked me where I lived."},
    {"id": "j14", "kc": "kt:en-adverbial-phrases", "text": "On Saturdays, we play tennis in the park.", "verdict": "alt", "base": "We play tennis in the park on Saturdays.", "note": "时间放句首也对。", "noteEn": "Time at the front is also right."}
  ],
  "own": {
    "prompt": "写一句关于你这周的话，至少有三种槽位（比如 主语、动词、地点、时间）。用 / 把词块隔开，例如：I / played / tennis / in the park / on Monday", "promptEn": "Write one sentence about your week with at least three kinds of slot (e.g. subject, verb, place, time). Separate the chunks with /, for example: I / played / tennis / in the park / on Monday",
    "sep": "/", "min": 3, "type": "stmt",
    "checks": {
      "T": {"re": "\\b(today|yesterday|tomorrow|tonight|morning|afternoon|evening|night|week|weekend|month|year|monday|tuesday|wednesday|thursday|friday|saturday|sunday|mondays|tuesdays|wednesdays|thursdays|fridays|saturdays|sundays|ago|every|always|usually|often|sometimes|never|o'clock|once|twice|\\d+ ?(am|pm)|at \\d|later|soon|now|then)\\b", "why": "时间槽里要有时间词（today、on Monday、at 7、every day……）", "whyEn": "A time slot needs a time word (today, on Monday, at 7, every day …)"},
      "P": {"re": "^(at|in|on|to|from|near|into|outside|inside|around|by)\\b|^(home|there|here|abroad|downtown)$", "why": "地点槽要以 at / in / on / to … 开头，或者是 home、there 这样的词", "whyEn": "A place slot starts with at / in / on / to … or is a word like home or there"},
      "S": {"re": "^(i|you|he|she|it|we|they|my \\w+|our \\w+|his \\w+|her \\w+|their \\w+|the \\w+|[a-z]+)$", "why": "主语槽应是一个代词或名词短语", "whyEn": "A subject slot should be a pronoun or a noun phrase"}
    }
  }
};

KT_DATA["slot-order-zh"] = {
  "id": "slot-order-zh", "lang": "zh", "speech": "zh-CN", "joiner": "",
  "title": "汉语语序槽位", "titleEn": "Chinese word-order slots",
  "subtitle": "汉语把时间、地点、方式放在动词前，把时段、次数、结果放在动词后。先自己排，再看每个词块属于哪个槽。", "subtitleEn": "Chinese puts time, place and manner before the verb, and duration, frequency and results after it. Order the chunks yourself first, then see which slot each one belongs to.",
  "review": [
    "他去过上海两次／他去过两次上海 都判为对（处所宾语，次数前后都可以）",
    "一本书在桌子上放着 判为违反存现句规则；在特定语境里（确指的书）可以说“那本书在桌子上放着”，题目已用“一本”表示不确指",
    "我们是都学生 这类错误对母语者来说很明显，对学习者是典型错误"
  ],
  "l1": {"label": "英语语序", "labelEn": "English order"},
  "slots": {
    "TOP": {"label": "话题", "labelEn": "topic", "color": "t0"},
    "S": {"label": "主语", "labelEn": "subject", "color": "t1"},
    "T": {"label": "时间", "labelEn": "time", "color": "t2"},
    "ADV": {"label": "副词（也、都、没……）", "labelEn": "adverb (也, 都, 没 …)", "color": "t0"},
    "P": {"label": "处所（在……）", "labelEn": "place (在 …)", "color": "t3"},
    "M": {"label": "方式（坐……）", "labelEn": "manner (坐 …)", "color": "t0"},
    "BI": {"label": "比较对象（比……／跟……）", "labelEn": "compared with (比 … / 跟 …)", "color": "t3"},
    "BA": {"label": "把＋宾语", "labelEn": "把 + object", "color": "t1"},
    "V": {"label": "动词／形容词", "labelEn": "verb / adjective", "color": "t2"},
    "V2": {"label": "第二个动作（目的）", "labelEn": "second action (purpose)", "color": "t2"},
    "DUR": {"label": "时段／次数", "labelEn": "duration / frequency", "color": "t4"},
    "O": {"label": "宾语", "labelEn": "object", "color": "t1"},
    "Q": {"label": "疑问词", "labelEn": "question word", "color": "t4"},
    "C": {"label": "补语（得……）", "labelEn": "complement (得 …)", "color": "t3"}
  },
  "rules": [
    {"id": "tp-v", "a": ["T", "P", "M"], "b": ["V", "V2", "O"], "types": ["stmt", "qo", "pron", "yy"], "text": "时间、处所、方式放在动词前", "textEn": "Time, place and manner go before the verb"},
    {"id": "t-p", "a": ["T"], "b": ["P"], "text": "先说时间，再说处所", "textEn": "Time first, then place"},
    {"id": "adv-v", "a": ["S"], "b": ["ADV"], "text": "也、都、没 这类副词放在主语后面", "textEn": "Adverbs like 也, 都, 没 go after the subject"},
    {"id": "adv-v2", "a": ["ADV"], "b": ["V", "BA", "O"], "text": "副词放在动词（或把）前面", "textEn": "Adverbs go before the verb (or 把)"},
    {"id": "v-dur", "a": ["V"], "b": ["DUR"], "text": "时段、次数放在动词后面", "textEn": "Duration and frequency go after the verb"},
    {"id": "pron-dur", "a": ["O"], "b": ["DUR"], "types": ["pron"], "text": "宾语是代词时，放在次数前面（见过他一次）", "textEn": "A pronoun object goes before the frequency (见过他一次)"},
    {"id": "q-stay", "a": ["V"], "b": ["Q"], "types": ["qo"], "text": "疑问词留在答句里那个词的位置，不提到句首", "textEn": "The question word stays where the answer would be; it does not move to the front"},
    {"id": "v1-v2", "a": ["M", "V"], "b": ["V2"], "text": "连动：先说怎么去、去哪儿，再说去做什么", "textEn": "Serial verbs: first how / where you go, then what you go to do"},
    {"id": "bi-yy", "a": ["BI"], "b": ["ADV"], "types": ["yy"], "text": "A 跟 B 一样＋形容词：“跟B”放在“一样”前面", "textEn": "A 跟 B 一样 + adjective: 跟 B comes before 一样"},
    {"id": "bi-a", "a": ["BI"], "b": ["V", "DUR"], "text": "比较：A 比 B＋形容词（＋差多少）", "textEn": "Comparison: A 比 B + adjective (+ by how much)"},
    {"id": "v-c", "a": ["V"], "b": ["C"], "text": "补语跟在动词后面（说得很好）", "textEn": "A complement follows the verb (说得很好)"},
    {"id": "ba-v", "a": ["BA"], "b": ["V"], "text": "把字句：把＋宾语 在动词前", "textEn": "把 sentences: 把 + object comes before the verb"},
    {"id": "exist", "a": ["P"], "b": ["V", "O"], "types": ["exist"], "text": "存现句：处所在句首，出现的东西在动词后", "textEn": "Existential sentences: the place first, the thing that exists after the verb"}
  ],
  "sentences": [
    {"id": "z1", "kc": "kt:zh-time-word-order", "type": "stmt", "chunks": [["我", "S"], ["明天", "T"], ["在家", "P"], ["学习", "V"], ["汉语", "O"]], "end": "。", "alt": [[1, 0, 2, 3, 4]], "l1": [0, 3, 4, 2, 1], "glossEn": "I'll study Chinese at home tomorrow."},
    {"id": "z2", "kc": "kt:zh-zai-location", "type": "stmt", "chunks": [["他", "S"], ["每天", "T"], ["在公司", "P"], ["吃", "V"], ["午饭", "O"]], "end": "。", "alt": [[1, 0, 2, 3, 4]], "l1": [0, 3, 4, 2, 1], "glossEn": "He eats lunch at the office every day."},
    {"id": "z3", "kc": "kt:zh-adverbs-basic", "type": "stmt", "chunks": [["我们", "S"], ["也", "ADV"], ["喜欢", "V"], ["看电影", "O"]], "end": "。", "glossEn": "We like watching films too."},
    {"id": "z4", "kc": "kt:zh-adverbs-basic", "type": "stmt", "chunks": [["他们", "S"], ["都", "ADV"], ["是", "V"], ["学生", "O"]], "end": "。", "l1": [0, 2, 1, 3], "glossEn": "They are all students."},
    {"id": "z5", "kc": "kt:zh-transport-zuo", "type": "stmt", "chunks": [["我", "S"], ["每天", "T"], ["坐地铁", "M"], ["去公司", "V"]], "end": "。", "alt": [[1, 0, 2, 3]], "l1": [0, 3, 2, 1], "glossEn": "I go to the office by underground every day."},
    {"id": "z6", "kc": "kt:zh-lian-dong", "type": "stmt", "chunks": [["我", "S"], ["去图书馆", "V"], ["看书", "V2"]], "end": "。", "glossEn": "I'm going to the library to read."},
    {"id": "z7", "kc": "kt:zh-wh-questions", "type": "qo", "chunks": [["你", "S"], ["叫", "V"], ["什么名字", "Q"]], "end": "？", "l1": [2, 0, 1], "glossEn": "What's your name?", "note": "答句“我叫王明”里“王明”在哪儿，问句里“什么名字”就在哪儿。", "noteEn": "Wherever 王明 sits in the answer 我叫王明, 什么名字 sits in the question."},
    {"id": "z8", "kc": "kt:zh-wh-questions", "type": "qo", "chunks": [["你", "S"], ["明天", "T"], ["去", "V"], ["哪儿", "Q"]], "end": "？", "alt": [[1, 0, 2, 3]], "l1": [3, 0, 2, 1], "glossEn": "Where are you going tomorrow?"},
    {"id": "z9", "kc": "kt:zh-duration-complement", "type": "stmt", "chunks": [["我", "S"], ["在北京", "P"], ["住了", "V"], ["三年", "DUR"]], "end": "。", "l1": [0, 2, 1, 3], "glossEn": "I lived in Beijing for three years."},
    {"id": "z10", "kc": "kt:zh-frequency-complement", "type": "pron", "chunks": [["我", "S"], ["见过", "V"], ["他", "O"], ["一次", "DUR"]], "end": "。", "glossEn": "I've met him once.", "note": "宾语是代词，放在次数前：见过他一次。", "noteEn": "The object is a pronoun, so it goes before the frequency: 见过他一次."},
    {"id": "z11", "kc": "kt:zh-bi-comparison", "type": "stmt", "chunks": [["他", "S"], ["比我", "BI"], ["高", "V"], ["一点儿", "DUR"]], "end": "。", "l1": [0, 3, 2, 1], "glossEn": "He is a bit taller than me."},
    {"id": "z12", "kc": "kt:zh-yiyang", "type": "yy", "chunks": [["我", "S"], ["跟你", "BI"], ["一样", "ADV"], ["高", "V"]], "end": "。", "glossEn": "I'm as tall as you."},
    {"id": "z13", "kc": "kt:zh-degree-complement-de", "type": "stmt", "chunks": [["他", "S"], ["汉语", "TOP"], ["说得", "V"], ["很好", "C"]], "end": "。", "alt": [[1, 0, 2, 3]], "glossEn": "He speaks Chinese very well."},
    {"id": "z14", "kc": "kt:zh-existential-sentences", "type": "exist", "chunks": [["桌子上", "P"], ["放着", "V"], ["一本书", "O"]], "end": "。", "l1": [2, 1, 0], "glossEn": "There is a book on the table."},
    {"id": "z15", "kc": "kt:zh-ba-sentence", "type": "stmt", "chunks": [["我", "S"], ["把作业", "BA"], ["做完了", "V"]], "end": "。", "l1": [0, 2, 1], "glossEn": "I've finished my homework."},
    {"id": "z16", "kc": "kt:zh-ba-sentence", "type": "stmt", "chunks": [["我", "S"], ["还没", "ADV"], ["把作业", "BA"], ["做完", "V"]], "end": "。", "glossEn": "I haven't finished my homework yet.", "note": "否定的 没 放在 把 前面。", "noteEn": "The negative 没 goes before 把."},
    {"id": "z17", "kc": "kt:zh-topic-comment", "type": "stmt", "chunks": [["这本书", "TOP"], ["我", "S"], ["看过", "V"]], "end": "。", "glossEn": "This book, I've read it."}
  ],
  "judge": [
    {"id": "zj1", "kc": "kt:zh-time-word-order", "text": "我学习汉语在家明天。", "verdict": "bad", "rule": "tp-v", "note": "这是英语的顺序。汉语把时间、处所放在动词前：我明天在家学习汉语。", "noteEn": "This is English order. Chinese puts time and place before the verb: 我明天在家学习汉语."},
    {"id": "zj2", "kc": "kt:zh-time-word-order", "text": "明天我在家学习汉语。", "verdict": "alt", "base": "我明天在家学习汉语。", "note": "时间词放在主语前也对，“明天”成了话头。", "noteEn": "Putting the time word before the subject is also right; 明天 becomes the starting point."},
    {"id": "zj3", "kc": "kt:zh-adverbs-basic", "text": "我们是都学生。", "verdict": "bad", "rule": "adv-v2", "note": "都 放在动词 是 前面：我们都是学生。", "noteEn": "都 goes before the verb 是: 我们都是学生."},
    {"id": "zj4", "kc": "kt:zh-transport-zuo", "text": "我去公司坐地铁。", "verdict": "bad", "rule": "tp-v", "note": "怎么去 放在 去哪儿 前面：我坐地铁去公司。", "noteEn": "How you go comes before where you go: 我坐地铁去公司."},
    {"id": "zj5", "kc": "kt:zh-wh-questions", "text": "什么你叫？", "verdict": "bad", "rule": "q-stay", "note": "疑问词不提到句首：你叫什么？", "noteEn": "The question word does not move to the front: 你叫什么？"},
    {"id": "zj6", "kc": "kt:zh-duration-complement", "text": "我三年住在北京。", "verdict": "bad", "rule": "v-dur", "note": "时段放在动词后：我在北京住了三年。", "noteEn": "Duration goes after the verb: 我在北京住了三年."},
    {"id": "zj7", "kc": "kt:zh-time-word-order", "text": "我每天学习两个小时。", "verdict": "ok", "note": "“每天”是时间点，放动词前；“两个小时”是时段，放动词后。", "noteEn": "每天 is a point in time, so it goes before the verb; 两个小时 is a duration, so it goes after."},
    {"id": "zj8", "kc": "kt:zh-time-word-order", "text": "我学习两个小时每天。", "verdict": "bad", "rule": "tp-v", "note": "时段在动词后没错，可“每天”要放在动词前：我每天学习两个小时。", "noteEn": "The duration after the verb is fine, but 每天 must go before the verb: 我每天学习两个小时."},
    {"id": "zj9", "kc": "kt:zh-frequency-complement", "text": "他去过上海两次。", "verdict": "alt", "base": "他去过两次上海。", "note": "宾语是地名时，次数放在前后都可以。", "noteEn": "When the object is a place name, the frequency can go before or after it."},
    {"id": "zj10", "kc": "kt:zh-frequency-complement", "text": "我见过一次他。", "verdict": "bad", "rule": "pron-dur", "note": "代词宾语放在次数前：我见过他一次。", "noteEn": "A pronoun object goes before the frequency: 我见过他一次."},
    {"id": "zj11", "kc": "kt:zh-existential-sentences", "text": "一本书在桌子上放着。", "verdict": "bad", "rule": "exist", "note": "说“有一本不确指的书”时用存现句：桌子上放着一本书。", "noteEn": "To say an unspecified book is there, use the existential order: 桌子上放着一本书."},
    {"id": "zj12", "kc": "kt:zh-topic-comment", "text": "这本书我看过。", "verdict": "alt", "base": "我看过这本书。", "note": "已知的宾语可以提到句首当话题，强调“这本书”。", "noteEn": "A known object can move to the front as the topic, putting 这本书 in focus."},
    {"id": "zj13", "kc": "kt:zh-ba-sentence", "text": "我把作业没做完。", "verdict": "bad", "rule": "adv-v2", "note": "否定词 没 放在 把 前面：我没把作业做完。", "noteEn": "The negative 没 goes before 把: 我没把作业做完."},
    {"id": "zj14", "kc": "kt:zh-bi-comparison", "text": "他比我高一点儿。", "verdict": "ok", "note": "差量 一点儿 放在形容词后面。", "noteEn": "The amount 一点儿 goes after the adjective."}
  ],
  "own": {
    "prompt": "写一句关于你这周的话，至少有三种槽位（比如 主语、时间、处所、动词）。用 / 把词块隔开，例如：我 / 星期六 / 在公园 / 跑步", "promptEn": "Write one sentence about your week with at least three kinds of slot (e.g. subject, time, place, verb). Separate the chunks with /, for example: 我 / 星期六 / 在公园 / 跑步",
    "sep": "/", "min": 3, "type": "stmt",
    "checks": {
      "T": {"re": "(今天|明天|昨天|后天|前天|每天|天天|早上|上午|中午|下午|晚上|夜里|星期|周末|礼拜|月|年|点|号|时候|现在|以前|以后|刚才|最近|常常|经常)", "why": "时间槽里要有时间词（明天、星期六、八点……）", "whyEn": "A time slot needs a time word (明天, 星期六, 八点 …)"},
      "P": {"re": "^(在|到|从|往)", "why": "处所槽要以 在 / 到 / 从 / 往 开头", "whyEn": "A place slot starts with 在 / 到 / 从 / 往"},
      "DUR": {"re": "(次|遍|趟|下|小时|分钟|天|年|个月|星期)", "why": "时段／次数槽里要有 次、遍、小时、天 这类词", "whyEn": "A duration / frequency slot needs a word like 次, 遍, 小时 or 天"}
    }
  }
};

KT_DATA["slot-order-ja"] = {
  "id": "slot-order-ja", "lang": "ja", "speech": "ja-JP", "joiner": "",
  "title": "日语语序槽位", "titleEn": "Japanese word-order slots",
  "subtitle": "日语最硬的规则只有一条：谓语在句末。带着格助词的词块可以换位置，换了以后强调会变。", "subtitleEn": "Japanese has one hard rule: the predicate goes last. Chunks that carry their particles can move around, and moving them changes the emphasis.",
  "review": [
    "お茶を私は飲みます、デパートで昨日靴を買いました 判为“换了位置也对”；请确认语感上是否自然",
    "会話中の倒置（知っていますか、会議が何時に始まるか）在口语里常见，页面按书面语判为不对，并在说明里注明",
    "大阪のほうが東京より暑いです 与 東京より大阪のほうが暑いです 判为意思基本相同",
    "三つのりんご（数量词在名词前）没有放进判句，因为它与 りんごを三つ 的区别涉及语感，待老师确认",
    "私は毎日電車で会社に行きます 的前四个词块任意顺序都判为对（谓语在句末即可）；有些顺序语法上成立但不自然"
  ],
  "l1": {"label": "中文语序", "labelEn": "Chinese order"},
  "slots": {
    "TOP": {"label": "主题（～は）", "labelEn": "topic (～は)", "color": "t0"},
    "S": {"label": "主语（～が）", "labelEn": "subject (～が)", "color": "t1"},
    "T": {"label": "时间", "labelEn": "time", "color": "t2"},
    "P": {"label": "地点（～で／～に）", "labelEn": "place (～で / ～に)", "color": "t3"},
    "M": {"label": "方式（～で）", "labelEn": "means (～で)", "color": "t0"},
    "COMP": {"label": "比较（～より）", "labelEn": "comparison (～より)", "color": "t3"},
    "MOD": {"label": "修饰语", "labelEn": "modifier", "color": "t0"},
    "O": {"label": "宾语（～を）", "labelEn": "object (～を)", "color": "t1"},
    "NUM": {"label": "数量", "labelEn": "number", "color": "t4"},
    "Q": {"label": "疑问词", "labelEn": "question word", "color": "t4"},
    "QUOTE": {"label": "引用（～と）", "labelEn": "quote (～と)", "color": "t3"},
    "EMB": {"label": "嵌入问句（～か）", "labelEn": "embedded question (～か)", "color": "t3"},
    "N": {"label": "名词谓语", "labelEn": "noun predicate", "color": "t1"},
    "V": {"label": "谓语（句末）", "labelEn": "predicate (last)", "color": "t2"}
  },
  "rules": [
    {"id": "pred-last", "a": "*", "b": ["V"], "text": "谓语放在句末", "textEn": "The predicate goes at the end of the sentence"},
    {"id": "n-desu", "a": ["N", "Q"], "b": ["V"], "text": "名词谓语：名词在前，です在后", "textEn": "Noun predicate: the noun first, then です"},
    {"id": "o-num", "a": ["O"], "b": ["NUM"], "text": "数量词在“名词＋を”后面、动词前面（水を二つ）", "textEn": "A number goes after “noun + を” and before the verb (水を二つ)"},
    {"id": "mod-n", "a": ["MOD"], "b": ["O", "S", "TOP"], "text": "修饰语（包括从句）放在名词前面", "textEn": "Modifiers (clauses too) go before the noun"},
    {"id": "quote-v", "a": ["QUOTE"], "b": ["V"], "text": "引用的内容加と，放在 言う／聞く 前面", "textEn": "The quoted content takes と and goes before 言う / 聞く"},
    {"id": "q-pred", "a": ["TOP"], "b": ["Q"], "types": ["q"], "text": "疑问词放在谓语的位置，不当主题（～はだれですか）", "textEn": "The question word sits in the predicate, not as the topic (～はだれですか)"}
  ],
  "sentences": [
    {"id": "n1", "kc": "kt:ja-copula", "type": "stmt", "chunks": [["私は", "TOP"], ["学生", "N"], ["です", "V"]], "end": "。", "l1": [0, 2, 1], "gloss": "我是学生。", "glossEn": "I am a student."},
    {"id": "n2", "kc": "kt:ja-polite-verb", "type": "stmt", "chunks": [["毎朝", "T"], ["お茶を", "O"], ["飲みます", "V"]], "end": "。", "free": [[0, 1]], "l1": [0, 2, 1], "gloss": "每天早上喝茶。", "glossEn": "I drink tea every morning."},
    {"id": "n3", "kc": "kt:ja-noun-request", "type": "stmt", "chunks": [["水を", "O"], ["二つ", "NUM"], ["ください", "V"]], "end": "。", "l1": [2, 1, 0], "gloss": "请给我两杯水。", "glossEn": "Two glasses of water, please."},
    {"id": "n4", "kc": "kt:ja-location-existence", "type": "stmt", "chunks": [["机の上に", "P"], ["本が", "S"], ["あります", "V"]], "end": "。", "free": [[0, 1]], "l1": [0, 2, 1], "gloss": "桌子上有书。", "glossEn": "There is a book on the desk."},
    {"id": "n5", "kc": "kt:ja-polite-verb", "type": "stmt", "chunks": [["昨日", "T"], ["デパートで", "P"], ["靴を", "O"], ["買いました", "V"]], "end": "。", "free": [[0, 1, 2]], "l1": [0, 1, 3, 2], "gloss": "昨天在百货商店买了鞋。", "glossEn": "I bought shoes at the department store yesterday."},
    {"id": "n6", "kc": "kt:ja-demonstrative-questions", "type": "q", "chunks": [["あの人は", "TOP"], ["だれ", "Q"], ["ですか", "V"]], "end": "。", "l1": [0, 2, 1], "gloss": "那个人是谁？", "glossEn": "Who is that person?"},
    {"id": "n7", "kc": "kt:ja-quotation", "type": "stmt", "chunks": [["彼は", "TOP"], ["来週帰ると", "QUOTE"], ["言いました", "V"]], "end": "。", "l1": [0, 2, 1], "gloss": "他说下周回来。", "glossEn": "He said he would go back next week."},
    {"id": "n8", "kc": "kt:ja-comparison", "type": "stmt", "chunks": [["東京より", "COMP"], ["大阪のほうが", "S"], ["暑いです", "V"]], "end": "。", "free": [[0, 1]], "gloss": "大阪比东京热。", "glossEn": "Osaka is hotter than Tokyo."},
    {"id": "n9", "kc": "kt:ja-embedded-question", "type": "stmt", "chunks": [["会議が", "S"], ["何時に始まるか", "EMB"], ["知っていますか", "V"]], "end": "。", "l1": [2, 0, 1], "gloss": "你知道会议几点开始吗？", "glossEn": "Do you know what time the meeting starts?"},
    {"id": "n10", "kc": "kt:ja-polite-verb", "type": "stmt", "chunks": [["私は", "TOP"], ["毎日", "T"], ["電車で", "M"], ["会社に", "P"], ["行きます", "V"]], "end": "。", "free": [[0, 1, 2, 3]], "l1": [0, 1, 2, 4, 3], "gloss": "我每天坐电车去公司。", "glossEn": "I go to the office by train every day."},
    {"id": "n11", "kc": "kt:ja-particle-function", "type": "stmt", "chunks": [["昨日買った", "MOD"], ["本を", "O"], ["読みました", "V"]], "end": "。", "l1": [2, 0, 1], "gloss": "读了昨天买的书。", "glossEn": "I read the book I bought yesterday."},
    {"id": "n12", "kc": "kt:ja-yori-comparison", "type": "stmt", "chunks": [["バスより", "COMP"], ["電車のほうが", "S"], ["速いです", "V"]], "end": "。", "free": [[0, 1]], "gloss": "电车比公交车快。", "glossEn": "The train is faster than the bus."}
  ],
  "judge": [
    {"id": "nj1", "kc": "kt:ja-polite-verb", "text": "私は飲みますお茶を。", "verdict": "bad", "rule": "pred-last", "note": "这是中文的顺序。动词放在句末：私はお茶を飲みます。", "noteEn": "This is Chinese order. The verb goes last: 私はお茶を飲みます."},
    {"id": "nj2", "kc": "kt:ja-particle-function", "text": "お茶を私は飲みます。", "verdict": "alt", "base": "私はお茶を飲みます。", "note": "助词把角色标好了，换位置也对；把“お茶を”提前，强调的是喝的东西。", "noteEn": "The particles mark the roles, so the order can change; moving お茶を forward puts the drink in focus."},
    {"id": "nj3", "kc": "kt:ja-noun-request", "text": "ください、メニューを。", "verdict": "bad", "rule": "pred-last", "note": "请求的ください放在最后：メニューをください。", "noteEn": "ください goes last in a request: メニューをください."},
    {"id": "nj4", "kc": "kt:ja-comparison", "text": "大阪のほうが東京より暑いです。", "verdict": "alt", "base": "東京より大阪のほうが暑いです。", "note": "より和のほうが两块都带着助词，换位置意思基本不变。", "noteEn": "より and のほうが both carry their particles, so swapping them hardly changes the meaning."},
    {"id": "nj5", "kc": "kt:ja-location-existence", "text": "机の上に本があります。", "verdict": "ok", "note": "从地点说起：“桌子上有书”。", "noteEn": "Starting from the place: there is a book on the desk."},
    {"id": "nj6", "kc": "kt:ja-location-existence", "text": "本は机の上にあります。", "verdict": "alt", "base": "机の上に本があります。", "note": "也对，但信息不同：书是已知的话题，说的是“书在桌子上”。", "noteEn": "Also right, but the information differs: the book is the known topic, and the sentence says where it is."},
    {"id": "nj7", "kc": "kt:ja-quotation", "text": "彼は言いました、来週帰ります。", "verdict": "bad", "rule": "quote-v", "note": "引用内容加と，放在言う前面：彼は来週帰ると言いました。", "noteEn": "The quote takes と and goes before 言う: 彼は来週帰ると言いました."},
    {"id": "nj8", "kc": "kt:ja-embedded-question", "text": "会議が何時に始まるか知っていますか。", "verdict": "ok", "note": "嵌入问句在主句动词前。", "noteEn": "The embedded question comes before the main verb."},
    {"id": "nj9", "kc": "kt:ja-embedded-question", "text": "知っていますか、会議が何時に始まるか。", "verdict": "bad", "rule": "pred-last", "note": "书面语里主句动词放在句末。口语里会听到这种倒装，但不是常规语序。", "noteEn": "In writing the main verb goes last. You may hear this inversion in speech, but it is not the normal order."},
    {"id": "nj10", "kc": "kt:ja-particle-function", "text": "デパートで昨日靴を買いました。", "verdict": "alt", "base": "昨日デパートで靴を買いました。", "note": "时间和地点都可以先说；先说的那个更像话头。", "noteEn": "Either time or place can come first; whichever comes first is more like the starting point."},
    {"id": "nj11", "kc": "kt:ja-demonstrative-questions", "text": "だれはあの人ですか。", "verdict": "bad", "rule": "q-pred", "note": "疑问词不当主题：あの人はだれですか。", "noteEn": "A question word is not the topic: あの人はだれですか."},
    {"id": "nj12", "kc": "kt:ja-copula", "text": "私は学生です。", "verdict": "ok", "note": "です在句末。", "noteEn": "です goes last."}
  ],
  "own": {
    "prompt": "写一句关于你这周的话，至少有三种槽位（比如 主题、时间、地点、谓语）。用 / 把词块隔开，例如：私は / 土曜日に / 公園で / 走りました", "promptEn": "Write one sentence about your week with at least three kinds of slot (e.g. topic, time, place, predicate). Separate the chunks with /, for example: 私は / 土曜日に / 公園で / 走りました",
    "sep": "/", "min": 3, "type": "stmt",
    "checks": {
      "T": {"re": "(今日|明日|昨日|毎日|毎朝|毎晩|朝|昼|夜|晩|週末|曜日|時|月|年|今週|来週|先週|今朝|今晩|いつも|よく|ときどき)", "why": "时间槽里要有时间词（昨日、土曜日、七時……）", "whyEn": "A time slot needs a time word (昨日, 土曜日, 七時 …)"},
      "P": {"re": "(で|に|へ|から|まで)$", "why": "地点槽要以 で／に／へ／から／まで 结尾", "whyEn": "A place slot ends in で / に / へ / から / まで"},
      "O": {"re": "を$", "why": "宾语槽要以 を 结尾", "whyEn": "An object slot ends in を"},
      "TOP": {"re": "は$", "why": "主题槽要以 は 结尾", "whyEn": "A topic slot ends in は"},
      "S": {"re": "が$", "why": "主语（が）槽要以 が 结尾", "whyEn": "A subject (が) slot ends in が"}
    }
  }
};
