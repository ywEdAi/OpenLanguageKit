/* Data packs for blocks/template-write.html (prim:template-write): template-write-en, -ja, -zh.
 * Every identity, school, address and e-mail address is made up (addresses use invented place names; e-mail uses the
 * reserved example domain). The page tells learners not to type their own real details.
 *
 * Pack format
 *   id, lang, speech, title/titleEn, subtitle/subtitleEn, kcs[]
 *   templates [{id, kind ("form" | "note" | "chat" | "email": sets the look), kc, label/labelEn,
 *     card {role/roleEn, to/toEn, want/wantEn, facts [{k, kEn, v, vEn}]}   the situation card (interface language)
 *     head, sub      target-language heading / instruction line printed on the template; chat: head = contact name,
 *                    incoming = the message being answered; email: toLine ["To:", address]
 *     inputs  [{id, label, hint (target language), type ("line" | "text"), wide?}]
 *     units   [{id, input, name/nameEn, rules [...], soft?, self?, ask/askEn (hint 1), why/whyEn (hint 2: what this part
 *              needs and who reads it), ex (hint 3: the same part filled in for someone else), fix/fixEn (the reader's
 *              view of the problem, shown when the check fails)}]
 *             One unit = one checked part (a form box, or one element of a message). Each unit is one evidence item.
 *     preview {from, subject?, chars}  for messages: show what a phone notification would show
 *     model   target-language model text (shown after the learner's own judgement; never before the first draft)
 *     cannot/cannotEn  what the page cannot judge here}]
 *   rewrites [{id, base (template id), kc, kind, head, label/labelEn, card, units (input "text"), model, diff/diffEn}]
 *             step 3: the same matter for another reader. No hints, no constraints shown. Identical to the first
 *             version (the learner's own, else the base model) = not passed.
 *   Rules (deterministic; the first failing rule gives the verdict):
 *     {"req": true}                        must not be empty                         → missing
 *     {"blank": ["N/A", …]}                must be empty or one of these (reverse)   → blank
 *     {"eq": [...], "swap": [...]}         equals one value (case, spaces and dots ignored); a swap value → place
 *     {"upper": true}                      no lower-case letters                     → format
 *     {"kata": true}                       katakana only                             → format
 *     {"date": {y, m, d}, "fmt": "dmy" | "ymd"}  numeric date in that order; ambiguous or era years are explained
 *     {"bad": [[wrong, right], …]}         wrong character form or homophone         → format
 *     {"order": [big, …, small]}           parts present, in this order              → format
 *     {"has": [[alternatives], …], "where": "start" | "end" | "first", "n": 2}
 *                                          each group needs one alternative (Latin words match whole words);
 *                                          present elsewhere → format; absent → missing (soft unit → "the page
 *                                          cannot judge", self-check against the model)
 *     {"not": [...]}                       none of these may appear                  → format
 *     {"only": [...]}                      the whole text may not be just one of these → content
 *     {"max": n} / {"min": n}              length in characters
 *     "warn": true on any rule             shown as a note, does not fail
 *   self: true units have no machine check; the learner self-checks against the model (self-report, never scored).
 *   review  items a native teacher should check.
 */
KT_DATA["template-write-en"] = {
  "id": "template-write-en", "lang": "en", "speech": "en-GB",
  "title": "按真实格式填写（英语）", "titleEn": "Writing on real templates (English)",
  "subtitle": "报名表、便条、聊天消息、给老师的邮件。先按情境卡写，再逐栏判断，最后看读的人看到的是什么。", "subtitleEn": "An enrolment form, a note, a chat message and an e-mail to a teacher. Write from the situation card, judge each part yourself, then see what the reader sees.",
  "kcs": ["kt:en-skill-write-forms", "kt:en-skill-write-messages"],
  "templates": [
    {"id": "en-form", "kind": "form", "kc": "kt:en-skill-write-forms", "label": "报名表", "labelEn": "Enrolment form",
     "card": {"role": "你是陈晓雨（Chen Xiaoyu），中国人。", "roleEn": "You are Chen Xiaoyu, from China.",
              "to": "Brightwater 夜校（虚构）", "toEn": "Brightwater Evening Classes (made up)",
              "want": "报名周二晚上的西班牙语初级班。", "wantEn": "Sign up for the Tuesday evening Spanish class for beginners.",
              "facts": [{"k": "姓", "kEn": "Family name", "v": "陈（Chen）", "vEn": "Chen"},
                        {"k": "名", "kEn": "Given name", "v": "晓雨（Xiaoyu）", "vEn": "Xiaoyu"},
                        {"k": "出生日期", "kEn": "Born", "v": "2001 年 9 月 14 日", "vEn": "14 September 2001"},
                        {"k": "国籍", "kEn": "Country", "v": "中国", "vEn": "China"},
                        {"k": "课程", "kEn": "Course", "v": "Spanish for Beginners（周二晚上）", "vEn": "Spanish for Beginners (Tuesday evening)"},
                        {"k": "以前在这里上过课吗", "kEn": "Studied here before?", "v": "没有", "vEn": "No"}]},
     "head": "BRIGHTWATER EVENING CLASSES · Enrolment form", "sub": "Please write in CAPITAL LETTERS.",
     "inputs": [{"id": "sur", "label": "SURNAME", "type": "line"}, {"id": "first", "label": "FIRST NAME(S)", "type": "line"},
                {"id": "dob", "label": "DATE OF BIRTH", "hint": "DD/MM/YYYY", "type": "line"}, {"id": "nat", "label": "NATIONALITY", "type": "line"},
                {"id": "course", "label": "COURSE", "type": "line", "wide": true}, {"id": "prev", "label": "PREVIOUS STUDENT NUMBER", "hint": "if you have one", "type": "line"},
                {"id": "office", "label": "FOR OFFICE USE ONLY", "type": "line"}],
     "units": [
       {"id": "sur", "input": "sur", "name": "姓（Surname）", "nameEn": "Surname", "rules": [{"req": true}, {"eq": ["CHEN"], "swap": ["XIAOYU"]}, {"upper": true}],
        "ask": "学校按哪个名字把你排进名单？", "askEn": "Which of your names will the school sort the class list by?", "why": "Surname 是姓（家族的名字），全部大写。", "whyEn": "Surname = family name, in capitals.", "ex": "SURNAME: MORENO", "fix": "处理表格的人会按这一格找你的姓。", "fixEn": "The person processing the form reads this box as your family name."},
       {"id": "first", "input": "first", "name": "名（First name）", "nameEn": "First name", "rules": [{"req": true}, {"eq": ["XIAOYU"], "swap": ["CHEN"]}, {"upper": true}],
        "ask": "老师上课会叫你哪个名字？", "askEn": "Which name will the teacher call you in class?", "why": "First name 是名，不是姓；全部大写。", "whyEn": "First name = given name, not family name; in capitals.", "ex": "FIRST NAME(S): LUCIA", "fix": "老师会用这一格的名字叫你。", "fixEn": "The teacher will call you by the name in this box."},
       {"id": "dob", "input": "dob", "name": "出生日期", "nameEn": "Date of birth", "rules": [{"req": true}, {"date": {"y": 2001, "m": 9, "d": 14}, "fmt": "dmy"}],
        "ask": "读表的人会先读到日还是月？", "askEn": "Will the reader take the first number as the day or the month?", "why": "格子下面写着 DD/MM/YYYY：两位日、两位月、四位年，用斜线隔开。", "whyEn": "The box says DD/MM/YYYY: two-digit day, two-digit month, four-digit year, with slashes.", "ex": "DATE OF BIRTH: 03/11/1998", "fix": "日期顺序不清楚，读的人可能把月和日弄反。", "fixEn": "If the order is unclear, the reader may swap the day and the month."},
       {"id": "nat", "input": "nat", "name": "国籍", "nameEn": "Nationality", "rules": [{"req": true}, {"eq": ["CHINESE", "CHINA"]}, {"upper": true}],
        "ask": "这一格问的是国家，还是你是哪国人？", "askEn": "Does this box ask for a country, or what you are?", "why": "Nationality 通常写形容词 CHINESE；写 CHINA 多数表格也能接受。全部大写。", "whyEn": "Nationality usually takes the adjective, CHINESE; CHINA is accepted on most forms. In capitals.", "ex": "NATIONALITY: BRAZILIAN"},
       {"id": "course", "input": "course", "name": "课程", "nameEn": "Course", "rules": [{"req": true}, {"has": [["spanish"], ["beginner", "beginners"]]}, {"upper": true}],
        "ask": "学校要从这一格知道把你分到哪个班。", "askEn": "From this box the school decides which class to put you in.", "why": "写课程名（语言和级别），全部大写。", "whyEn": "Write the course name (language and level), in capitals.", "ex": "COURSE: ITALIAN FOR BEGINNERS (THURSDAY)", "fix": "学校不知道把你分到哪个班。", "fixEn": "The school will not know which class to put you in."},
       {"id": "prev", "input": "prev", "name": "以前的学号（没有就不填）", "nameEn": "Previous student number (only if you have one)", "rules": [{"blank": ["N/A", "NONE", "-", "NO"]}],
        "ask": "你在这里有过学号吗？", "askEn": "Have you ever had a student number here?", "why": "if you have one = 有才填。没有就留空，或写 N/A。", "whyEn": "if you have one = only if you have one. Otherwise leave it blank or write N/A.", "ex": "PREVIOUS STUDENT NUMBER: N/A", "fix": "学校会去找一个不存在的学号。", "fixEn": "The school would look for a number that does not exist."},
       {"id": "office", "input": "office", "name": "工作人员填写栏", "nameEn": "Office-use box", "rules": [{"blank": ["N/A", "-"]}],
        "ask": "这一格是谁填的？", "askEn": "Who fills in this box?", "why": "FOR OFFICE USE ONLY = 由工作人员填，你留空。", "whyEn": "FOR OFFICE USE ONLY = staff fill it in; leave it blank.", "ex": "（空）", "fix": "这一格是工作人员用的。", "fixEn": "This box is for the staff."}],
     "model": "SURNAME: CHEN\nFIRST NAME(S): XIAOYU\nDATE OF BIRTH: 14/09/2001\nNATIONALITY: CHINESE\nCOURSE: SPANISH FOR BEGINNERS (TUESDAY)\nPREVIOUS STUDENT NUMBER: N/A\nFOR OFFICE USE ONLY: (blank)",
     "cannot": "页面判断不了：拼写是否完全正确（只核对情境卡上的信息）。", "cannotEn": "The page cannot check every spelling; it only checks the details on the card."},
    {"id": "en-note", "kind": "note", "kc": "kt:en-skill-write-messages", "label": "给家人的便条", "labelEn": "Note to your family",
     "card": {"role": "你是陈晓雨（Xiaoyu）。", "roleEn": "You are Xiaoyu.", "to": "妈妈（Mum），她回家会看到冰箱上的便条", "toEn": "Mum, who will see the note on the fridge",
              "want": "告诉她：你在朋友 Lily 家，晚上 8 点回来。", "wantEn": "Tell her you are at your friend Lily's house and will be back at 8 in the evening."},
     "inputs": [{"id": "note", "type": "text"}],
     "units": [
       {"id": "greet", "input": "note", "name": "写给谁", "nameEn": "Who it is for", "rules": [{"has": [["mum", "mom", "mummy", "mother"]], "where": "start"}],
        "ask": "家里别人看到这张便条，知道是写给谁的吗？", "askEn": "If someone else at home sees it, will they know who it is for?", "why": "便条第一行写给谁，后面加逗号，例如 Mum,", "whyEn": "Start with who it is for, then a comma, e.g. Mum,", "ex": "Dad,\nGone to the gym. Back at 6.\nAnna", "fix": "开头没写给谁。", "fixEn": "It does not start with who it is for."},
       {"id": "where", "input": "note", "name": "你在哪儿", "nameEn": "Where you are", "rules": [{"has": [["lily", "lily's"]]}],
        "ask": "妈妈最想知道什么？", "askEn": "What does Mum most want to know?", "why": "写清楚在哪儿：I'm at Lily's (house).", "whyEn": "Say where you are: I'm at Lily's (house).", "ex": "I'm at Tom's.", "fix": "妈妈不知道你在哪儿。", "fixEn": "Mum does not know where you are."},
       {"id": "when", "input": "note", "name": "几点回来", "nameEn": "When you will be back", "rules": [{"has": [["8", "eight", "8pm", "8 pm", "8 p.m.", "8.00", "8:00", "8 o'clock"]]}],
        "ask": "妈妈什么时候该开始担心？", "askEn": "When should Mum start to worry?", "why": "写回来的时间：Back at 8.", "whyEn": "Give the time you will be back: Back at 8.", "ex": "Back at 6.", "fix": "妈妈不知道你几点回来。", "fixEn": "Mum does not know when you will be back."},
       {"id": "sign", "input": "note", "name": "署名", "nameEn": "Your name at the end", "rules": [{"has": [["xiaoyu"]], "where": "end"}],
        "ask": "妈妈怎么知道是谁写的？", "askEn": "How will Mum know who wrote it?", "why": "最后写自己的名字，前面可以加 Love,", "whyEn": "End with your name; you can put Love, before it.", "ex": "Love,\nAnna", "fix": "收件人看到的是：谁写的？", "fixEn": "What the reader sees: who wrote this?"},
       {"id": "plain", "input": "note", "name": "不用写正式信件的部分", "nameEn": "No formal letter parts", "rules": [{"not": ["dear madam", "dear mother", "yours sincerely", "yours faithfully", "i am writing"]}],
        "ask": "这是给谁的、贴在哪儿的？", "askEn": "Who is it for, and where will it be?", "why": "家里的便条不需要正式信件的开头和结尾；越短越好。", "whyEn": "A note at home needs no formal letter opening or ending; short is best.", "ex": "Dad,\nGone to the gym. Back at 6.\nAnna", "fix": "给家人的便条写成了正式信件。", "fixEn": "The note to your family reads like a formal letter."},
       {"id": "len", "input": "note", "name": "长度", "nameEn": "Length", "rules": [{"max": 160}],
        "why": "便条一般两三句。", "whyEn": "A note is usually two or three short sentences.", "fix": "便条太长了。", "fixEn": "The note is too long."}],
     "model": "Mum,\nI'm at Lily's house. Back at 8.\nLove,\nXiaoyu",
     "cannot": "页面判断不了：句子语法和标点是否正确。", "cannotEn": "The page cannot check grammar or punctuation."},
    {"id": "en-chat", "kind": "chat", "kc": "kt:en-skill-write-messages", "label": "给朋友的聊天消息", "labelEn": "Chat message to a friend",
     "card": {"role": "你是陈晓雨（Xiaoyu）。你和朋友 Sam 约了 7 点在电影院门口见。", "roleEn": "You are Xiaoyu. You are meeting your friend Sam outside the cinema at 7.",
              "to": "朋友 Sam", "toEn": "Your friend Sam", "want": "告诉他你会晚到 20 分钟，请他先进去，不用等你。", "wantEn": "Tell him you will be 20 minutes late and he should go in without you."},
     "head": "Sam", "incoming": "See you at 7 outside the cinema!",
     "inputs": [{"id": "msg", "type": "text"}],
     "units": [
       {"id": "open", "input": "msg", "name": "直接说事", "nameEn": "Get straight to the point", "rules": [{"not": ["are you there", "r u there", "you there", "u there"]}],
        "ask": "Sam 读到第一句时，能不能马上知道出了什么事？", "askEn": "Can Sam tell from the first line what has happened?", "why": "聊天消息不用先问“在吗”（Are you there?），直接说事。", "whyEn": "Do not open with “Are you there?”: say what it is about.", "ex": "Hi! Running 10 mins late, sorry!", "fix": "“Are you there?”之后对方还得等你下一条。", "fixEn": "After “Are you there?” the reader has to wait for your next message."},
       {"id": "late", "input": "msg", "name": "前两句说出你会晚到", "nameEn": "Say you are late in the first two sentences", "rules": [{"has": [["late", "20 minutes", "twenty minutes", "20 mins", "20 min", "7:20", "7.20"]], "where": "first", "n": 2}], "soft": true,
        "ask": "Sam 的手机通知只显示开头。开头说了什么？", "askEn": "Sam's phone shows only the beginning. What does it say?", "why": "要紧的事放在最前面：I'm running late / I'll be 20 minutes late.", "whyEn": "Put the main news first: I'm running late / I'll be 20 minutes late.", "ex": "Sorry, I'm running 10 minutes late.", "fix": "通知里看不到你会晚到。", "fixEn": "The notification does not show that you are late."},
       {"id": "mins", "input": "msg", "name": "晚多久", "nameEn": "How late", "rules": [{"has": [["20", "twenty", "7:20", "7.20"]]}],
        "ask": "Sam 要等你多久？", "askEn": "How long will Sam wait?", "why": "说清楚晚多久，例如 20 minutes。", "whyEn": "Say how late, e.g. 20 minutes.", "ex": "about 10 minutes late", "fix": "Sam 不知道要等多久。", "fixEn": "Sam does not know how long to wait."},
       {"id": "ask", "input": "msg", "name": "请他先进去", "nameEn": "Ask him to go in", "rules": [{"has": [["go in", "start without me", "don't wait", "dont wait", "go ahead", "without me"]]}], "soft": true,
        "ask": "Sam 读完要做什么？", "askEn": "What should Sam do after reading it?", "why": "写出你要他做的事：Go in without me.", "whyEn": "Say what you want him to do: Go in without me.", "ex": "Order without me!", "fix": "Sam 不知道该等你还是先进去。", "fixEn": "Sam does not know whether to wait or go in."},
       {"id": "plain", "input": "msg", "name": "不用写信件格式", "nameEn": "No letter format", "rules": [{"not": ["dear sam", "yours sincerely", "best regards", "kind regards", "i am writing"]}],
        "ask": "这是给谁的、用什么发的？", "askEn": "Who is it for, and how is it sent?", "why": "给朋友的聊天消息不用 Dear 和 Best regards。", "whyEn": "A chat message to a friend needs no Dear or Best regards.", "ex": "Hi! Running 10 mins late, sorry!", "fix": "给朋友的消息写得像正式邮件。", "fixEn": "The message to a friend reads like a formal e-mail."},
       {"id": "len", "input": "msg", "name": "长度", "nameEn": "Length", "rules": [{"max": 200}], "why": "聊天消息一两句就够。", "whyEn": "One or two sentences are enough.", "fix": "太长了。", "fixEn": "Too long."}],
     "preview": {"from": "Xiaoyu", "chars": 50},
     "model": "Sorry Sam, I'm running 20 minutes late. Go in without me – see you inside!",
     "cannot": "页面判断不了：语气是否自然、语法是否正确。", "cannotEn": "The page cannot judge whether it sounds natural or whether the grammar is right."},
    {"id": "en-email", "kind": "email", "kc": "kt:en-skill-write-messages", "label": "给老师的邮件", "labelEn": "E-mail to a teacher",
     "card": {"role": "你是陈晓雨（Chen Xiaoyu），在 Ms Helen Park 老师的周三晚班上课。", "roleEn": "You are Chen Xiaoyu, a student in Ms Helen Park's Wednesday evening class.",
              "to": "Ms Helen Park 老师", "toEn": "Your teacher, Ms Helen Park", "want": "你发烧了，这周三不能去上课。告诉她，并问作业是什么。", "wantEn": "You have a fever and cannot come to class this Wednesday. Tell her, and ask what the homework is."},
     "toLine": ["To:", "h.park@college.example"],
     "inputs": [{"id": "subj", "label": "Subject:", "type": "line"}, {"id": "body", "type": "text"}],
     "units": [
       {"id": "subj", "input": "subj", "name": "主题", "nameEn": "Subject line", "rules": [{"req": true}, {"has": [["absence", "absent", "class", "wednesday", "homework", "ill", "sick", "fever", "miss", "missing"]]}], "soft": true,
        "ask": "老师在收件箱里只看到主题，知道这封是什么事吗？", "askEn": "From the subject alone, can the teacher tell what this is about?", "why": "主题用几个词说明是什么事，例如 Absence on Wednesday。", "whyEn": "A few words saying what it is about, e.g. Absence on Wednesday.", "ex": "Subject: Late for Monday's class", "fix": "主题是空的或看不出是什么事。", "fixEn": "The subject is empty or does not say what it is about."},
       {"id": "greet", "input": "body", "name": "称呼", "nameEn": "Greeting", "rules": [{"not": ["dear ms helen", "dear ms. helen", "dear mrs helen", "dear helen park", "dear teacher"]}, {"has": [["dear ms park", "dear mrs park", "dear miss park", "hello ms park", "hi ms park", "dear helen"]], "where": "start"}],
        "ask": "你平时怎么称呼这位老师？", "askEn": "How do you address this teacher in class?", "why": "Dear + Ms + 姓：Dear Ms Park,（不是 Dear Ms Helen，也不用 Dear Teacher）", "whyEn": "Dear + Ms + family name: Dear Ms Park, (not Dear Ms Helen, and not Dear Teacher)", "ex": "Dear Mr Evans,", "fix": "称呼不对，老师读来会觉得别扭。", "fixEn": "The greeting is off; it will read oddly to the teacher."},
       {"id": "self", "input": "body", "name": "开头说你是谁", "nameEn": "Say who you are near the start", "rules": [{"has": [["xiaoyu", "chen"]], "where": "first", "n": 2}],
        "ask": "老师有几十个学生，她怎么知道是谁写的？", "askEn": "The teacher has dozens of students. How will she know who is writing?", "why": "第一句说你是谁、哪个班：This is Chen Xiaoyu from your Wednesday evening class.", "whyEn": "First line: who you are and which class.", "ex": "This is Marco Rossi from your Monday class.", "fix": "老师读到一半还不知道是谁写的。", "fixEn": "Halfway through, the teacher still does not know who is writing."},
       {"id": "news", "input": "body", "name": "前几句说出不能来", "nameEn": "Say early that you cannot come", "rules": [{"has": [["can't come", "cannot come", "won't be able", "will not be able", "miss", "not be in class", "can't attend", "cannot attend", "won't be in", "absent", "can't make it", "not able to come", "won't come"]], "where": "first", "n": 3}], "soft": true,
        "ask": "老师最需要知道的是什么？", "askEn": "What does the teacher most need to know?", "why": "要紧的事放在前面：I can't come to class this Wednesday.", "whyEn": "Put the main news early: I can't come to class this Wednesday.", "ex": "I'm afraid I can't come to class on Monday.", "fix": "通知里看不到你不能来。", "fixEn": "The notification does not show that you cannot come."},
       {"id": "ask", "input": "body", "name": "问作业", "nameEn": "Ask about the homework", "rules": [{"has": [["homework"]]}],
        "ask": "老师读完要为你做什么？", "askEn": "What should the teacher do for you after reading?", "why": "写出请求：Could you tell me what the homework is?", "whyEn": "Make the request: Could you tell me what the homework is?", "ex": "Could you send me the handout?", "fix": "老师不知道你要她做什么。", "fixEn": "The teacher does not know what you want her to do."},
       {"id": "style", "input": "body", "name": "不用聊天缩写", "nameEn": "No chat abbreviations", "rules": [{"not": ["thx", "u", "pls", "plz", "cu", "gonna", "wanna", "love,"]}],
        "ask": "这是写给谁的？", "askEn": "Who is this for?", "why": "给老师的邮件不用 u、thx、pls 这类缩写。", "whyEn": "No u, thx, pls in an e-mail to a teacher.", "ex": "Thank you,", "fix": "对老师用了聊天缩写。", "fixEn": "Chat abbreviations in a message to a teacher."},
       {"id": "close", "input": "body", "name": "结尾和署名", "nameEn": "Closing and your name", "rules": [{"has": [["best wishes", "kind regards", "best regards", "many thanks", "thank you", "thanks", "regards", "yours sincerely", "best"]], "where": "end"}, {"has": [["xiaoyu", "chen"]], "where": "end"}],
        "ask": "邮件怎么结束？", "askEn": "How does the e-mail end?", "why": "结尾一句客气话 + 全名：Thank you, / Best wishes, Chen Xiaoyu", "whyEn": "A polite closing + your full name: Thank you, / Best wishes, Chen Xiaoyu", "ex": "Best wishes,\nMarco Rossi", "fix": "邮件没有结尾或没有署名。", "fixEn": "No closing or no name at the end."}],
     "preview": {"from": "Chen Xiaoyu", "subject": "subj", "chars": 70},
     "model": "Dear Ms Park,\nThis is Chen Xiaoyu from your Wednesday evening class. I have a fever, so I can't come to class this Wednesday. Could you tell me what the homework is?\nThank you,\nChen Xiaoyu",
     "cannot": "页面判断不了：请求是否够客气、语法是否正确。", "cannotEn": "The page cannot judge whether the request is polite enough or whether the grammar is right."}
  ],
  "rewrites": [
    {"id": "en-rw-friend", "base": "en-email", "kc": "kt:en-skill-write-messages", "kind": "chat", "label": "给老师的邮件 → 给同学的消息", "labelEn": "E-mail to the teacher → message to a classmate",
     "card": {"role": "同一件事：你发烧了，周三没去上课。", "roleEn": "Same situation: you had a fever and missed class on Wednesday.", "to": "同班同学 Tom", "toEn": "Tom, a classmate", "want": "发消息问他作业是什么。", "wantEn": "Message him to ask what the homework is."},
     "units": [
       {"id": "greet", "input": "text", "name": "开头", "nameEn": "Opening", "rules": [{"has": [["hi", "hey", "hello", "tom"]], "where": "start"}], "fix": "给同学的消息可以用 Hi Tom 开头。", "fixEn": "A message to a classmate can start with Hi Tom."},
       {"id": "plain", "input": "text", "name": "不用正式邮件的称呼和结尾", "nameEn": "No formal e-mail greeting or closing", "rules": [{"not": ["dear", "kind regards", "yours sincerely", "best regards", "i am writing to"]}], "fix": "给同学写得像给老师的邮件。", "fixEn": "It reads like the e-mail to the teacher."},
       {"id": "ask", "input": "text", "name": "问作业", "nameEn": "Ask about the homework", "rules": [{"has": [["homework"]]}], "fix": "Tom 不知道你要他告诉你什么。", "fixEn": "Tom does not know what you want from him."},
       {"id": "len", "input": "text", "name": "长度", "nameEn": "Length", "rules": [{"max": 220}], "fix": "太长了。", "fixEn": "Too long."}],
     "model": "Hi Tom, I was ill and missed class on Wednesday. What's the homework? Thanks!",
     "diff": "两版差在：称呼（Dear Ms Park → Hi Tom）、要不要自报姓名、请求的说法（Could you tell me…? → What's the homework?）、结尾（Thank you, Chen Xiaoyu → Thanks!）。", "diffEn": "The differences: the greeting (Dear Ms Park → Hi Tom), whether you say who you are, the request (Could you tell me…? → What's the homework?), the ending (Thank you, Chen Xiaoyu → Thanks!)."},
    {"id": "en-rw-teacher", "base": "en-chat", "kc": "kt:en-skill-write-messages", "kind": "email", "label": "给朋友的消息 → 给老师的邮件", "labelEn": "Message to a friend → e-mail to a teacher",
     "card": {"role": "同一件事：你会晚到 20 分钟。这次是周三晚上的课。", "roleEn": "Same situation: you will be 20 minutes late. This time it is your Wednesday evening class.", "to": "Ms Helen Park 老师", "toEn": "Your teacher, Ms Helen Park", "want": "告诉她你会晚到 20 分钟。", "wantEn": "Tell her you will be 20 minutes late."},
     "units": [
       {"id": "greet", "input": "text", "name": "称呼", "nameEn": "Greeting", "rules": [{"has": [["dear ms park", "hello ms park", "hi ms park", "ms park", "dear helen"]], "where": "start"}], "fix": "给老师要用 Dear Ms Park 这样的称呼。", "fixEn": "A teacher needs a greeting like Dear Ms Park."},
       {"id": "late", "input": "text", "name": "前几句说出会晚到", "nameEn": "Say early that you will be late", "rules": [{"has": [["late", "20 minutes", "twenty minutes"]], "where": "first", "n": 3}], "soft": true, "fix": "开头看不到你会晚到。", "fixEn": "The start does not say you will be late."},
       {"id": "style", "input": "text", "name": "不用聊天说法", "nameEn": "No chat style", "rules": [{"not": ["are you there", "gonna", "u", "cu", "thx", "go in without me", "see you inside"]}], "fix": "还留着给朋友的说法。", "fixEn": "Some of the message to your friend is still there."},
       {"id": "sign", "input": "text", "name": "署名", "nameEn": "Your name at the end", "rules": [{"has": [["xiaoyu", "chen"]], "where": "end"}], "fix": "老师不知道是谁写的。", "fixEn": "The teacher does not know who wrote it."}],
     "model": "Dear Ms Park,\nThis is Chen Xiaoyu. I'm sorry, but I'll be about 20 minutes late for class today because my bus is late.\nBest wishes,\nChen Xiaoyu",
     "diff": "两版差在：称呼（Sam → Dear Ms Park）、要自报姓名、加一句理由和道歉、去掉“先进去”、加正式结尾和全名。", "diffEn": "The differences: greeting (Sam → Dear Ms Park), saying who you are, a reason and an apology, no “go in without me”, a polite closing and your full name."}
  ],
  "review": [
    "en-email：称呼接受 Dear Helen；有的老师介意，有的不介意，请老师按自己课堂的习惯确认",
    "en-form：NATIONALITY 接受 CHINA（多数表格可接受，但标准是 CHINESE）",
    "en-email：Ms 后面是否加点（Ms. Park）英美习惯不同，页面两种都接受",
    "en-chat：只按词表认“晚到”“先进去”；换了说法（如 I'll be there at 7:20）会记为页面判断不了、要自评"
  ]
};

KT_DATA["template-write-ja"] = {
  "id": "template-write-ja", "lang": "ja", "speech": "ja-JP",
  "title": "按真实格式填写（日语）", "titleEn": "Writing on real templates (Japanese)",
  "subtitle": "申请表、留言便条、给朋友的消息、给老师的邮件。先按情境卡写，再逐栏判断，最后看读的人看到的是什么。", "subtitleEn": "An application form, a memo, a message to a friend and an e-mail to a teacher. Write from the situation card, judge each part yourself, then see what the reader sees.",
  "kcs": ["kt:ja-skill-write-forms-memo", "kt:ja-skill-write-messages"],
  "templates": [
    {"id": "ja-form", "kind": "form", "kc": "kt:ja-skill-write-forms-memo", "label": "日语班申请表", "labelEn": "Japanese class application form",
     "card": {"role": "你是刘明，中国人。在留卡上名字的汉字是「劉 明」，读作 りゅう めい。", "roleEn": "You are Liu Ming, from China. On your residence card your name is written 劉 明, read りゅう めい.",
              "to": "ことり町国际交流中心（虚构）", "toEn": "Kotori Town International Centre (made up)",
              "want": "报名星期六上午的日语初级班。", "wantEn": "Apply for the Saturday morning beginners' Japanese class.",
              "facts": [{"k": "名字（在留卡）", "kEn": "Name (residence card)", "v": "劉 明"}, {"k": "名字的读法", "kEn": "Reading of the name", "v": "りゅう めい"},
                        {"k": "出生日期", "kEn": "Born", "v": "1998 年 4 月 5 日", "vEn": "5 April 1998"}, {"k": "国籍", "kEn": "Nationality", "v": "中国", "vEn": "China"},
                        {"k": "住址（按英文习惯从小到大写的）", "kEn": "Address (written small to large, the English way)", "v": "ひまわりハイツ 203, さくら台 2-5-1, ことり町"},
                        {"k": "想上的班", "kEn": "Class", "v": "土曜日 初級クラス"}]},
     "head": "日本語教室 申込書", "sub": "ことり町国際交流センター",
     "inputs": [{"id": "name", "label": "氏名", "hint": "在留カードと同じ字で", "type": "line"}, {"id": "kana", "label": "フリガナ", "type": "line"},
                {"id": "dob", "label": "生年月日（西暦）", "type": "line"}, {"id": "nat", "label": "国籍", "type": "line"},
                {"id": "addr", "label": "住所", "type": "line", "wide": true}, {"id": "cls", "label": "希望クラス", "type": "line"},
                {"id": "office", "label": "※事務局記入欄", "type": "line"}],
     "units": [
       {"id": "name", "input": "name", "name": "氏名", "nameEn": "Name", "rules": [{"req": true}, {"bad": [["刘", "劉"]]}, {"eq": ["劉明"], "swap": ["明劉"]}],
        "ask": "窗口的人会拿这一栏和什么证件对照？", "askEn": "What document will the office compare this box with?", "why": "和在留卡上的字形一样：劉，不是简体的刘。姓在前。", "whyEn": "The same characters as on the residence card: 劉, not the simplified 刘. Family name first.", "ex": "氏名：張 偉", "fix": "和证件上的字对不上，窗口可能要你重写。", "fixEn": "It does not match the ID; the office may ask you to rewrite it."},
       {"id": "kana", "input": "kana", "name": "フリガナ", "nameEn": "フリガナ (reading)", "rules": [{"req": true}, {"kata": true}, {"eq": ["リュウメイ"]}],
        "ask": "栏名是片假名写的“フリガナ”还是平假名的“ふりがな”？", "askEn": "Is the label フリガナ in katakana or ふりがな in hiragana?", "why": "栏名是フリガナ就用片假名写读音：リュウ メイ。", "whyEn": "If the label is フリガナ, write the reading in katakana: リュウ メイ.", "ex": "フリガナ：チョウ イ", "fix": "读音的写法不符合这一栏的要求。", "fixEn": "The reading is not written the way this box asks."},
       {"id": "dob", "input": "dob", "name": "生年月日", "nameEn": "Date of birth", "rules": [{"req": true}, {"date": {"y": 1998, "m": 4, "d": 5}, "fmt": "ymd"}],
        "ask": "栏名括号里写的是什么？", "askEn": "What does the label say in brackets?", "why": "西暦 = 公历年份。按 年→月→日 写：1998年4月5日。", "whyEn": "西暦 = Western calendar year. Write year → month → day: 1998年4月5日.", "ex": "生年月日（西暦）：2001年11月23日", "fix": "日期的写法会让窗口的人看错或看不懂。", "fixEn": "The date is written in a way the office may misread."},
       {"id": "nat", "input": "nat", "name": "国籍", "nameEn": "Nationality", "rules": [{"req": true}, {"eq": ["中国", "中華人民共和国"]}],
        "why": "写国名：中国。", "whyEn": "Write the country: 中国.", "ex": "国籍：ベトナム"},
       {"id": "addr", "input": "addr", "name": "住所", "nameEn": "Address", "rules": [{"req": true}, {"order": ["ことり町", "さくら台", "ひまわりハイツ"]}, {"has": [["203"]]}],
        "ask": "日本的地址从哪一级开始写？", "askEn": "Where does a Japanese address start?", "why": "日本的地址从大到小写：町 → 地区和番地 → 楼名 → 房间号。", "whyEn": "Japanese addresses go from large to small: town → district and number → building → room.", "ex": "住所：ことり町 みなと台 1-8-3 コーポみなと 105", "fix": "顺序是英文习惯，邮递员要从后往前读。", "fixEn": "The order is the English one; the postman has to read it backwards."},
       {"id": "cls", "input": "cls", "name": "希望クラス", "nameEn": "Class wanted", "rules": [{"req": true}, {"has": [["土曜"], ["初級"]]}],
        "why": "写清楚哪一天、哪个级别：土曜日 初級クラス。", "whyEn": "Say which day and which level: 土曜日 初級クラス.", "ex": "希望クラス：水曜日 中級", "fix": "中心不知道把你分到哪个班。", "fixEn": "The centre will not know which class to put you in."},
       {"id": "office", "input": "office", "name": "事务局填写栏", "nameEn": "Office-use box", "rules": [{"blank": ["なし", "-", "—"]}],
        "ask": "栏名前面的 ※ 和“事務局”是什么意思？", "askEn": "What do the ※ and 事務局 in the label mean?", "why": "事務局記入欄 = 由工作人员填写，你留空。", "whyEn": "事務局記入欄 = filled in by the staff; leave it blank.", "ex": "（空）", "fix": "这一栏是工作人员用的。", "fixEn": "This box is for the staff."}],
     "model": "氏名：劉 明\nフリガナ：リュウ メイ\n生年月日（西暦）：1998年4月5日\n国籍：中国\n住所：ことり町 さくら台 2-5-1 ひまわりハイツ 203\n希望クラス：土曜日 初級クラス\n※事務局記入欄：（空）",
     "cannot": "页面判断不了：汉字写得是否端正、地址里的番地是否完全一样（只核对顺序和房间号）。", "cannotEn": "The page cannot judge handwriting, or check every part of the address (only the order and the room number)."},
    {"id": "ja-memo", "kind": "note", "kc": "kt:ja-skill-write-forms-memo", "label": "给同事的便条", "labelEn": "Memo to a colleague",
     "card": {"role": "你是刘明，同事叫你“劉さん”。", "roleEn": "You are Liu Ming; your colleagues call you 劉さん.", "to": "同事田中，他回来会看到桌上的便条", "toEn": "Your colleague Tanaka, who will find the memo on his desk",
              "want": "告诉他你去银行了，2 点半回来。", "wantEn": "Tell him you have gone to the bank and will be back at half past two."},
     "inputs": [{"id": "memo", "type": "text"}],
     "units": [
       {"id": "to", "input": "memo", "name": "写给谁", "nameEn": "Who it is for", "rules": [{"has": [["田中さん", "田中様"]], "where": "start"}],
        "ask": "桌上的便条，谁拿起来都知道是给谁的吗？", "askEn": "Anyone who picks it up: will they know who it is for?", "why": "开头写收件人：田中さんへ", "whyEn": "Start with the reader: 田中さんへ", "ex": "鈴木さんへ", "fix": "开头没写给谁。", "fixEn": "It does not start with who it is for."},
       {"id": "what", "input": "memo", "name": "去哪儿了", "nameEn": "Where you went", "rules": [{"has": [["銀行"]]}],
        "why": "写清楚去哪儿：銀行に行きます。", "whyEn": "Say where: 銀行に行きます.", "ex": "郵便局に行きます。", "fix": "田中不知道你去哪儿了。", "fixEn": "Tanaka does not know where you went."},
       {"id": "when", "input": "memo", "name": "几点回来", "nameEn": "When you will be back", "rules": [{"has": [["2時半", "2:30", "14:30", "二時半", "2時30分", "14時半", "14時30分", "午後2時半"]]}],
        "why": "写回来的时间：2時半に戻ります。", "whyEn": "Give the time: 2時半に戻ります.", "ex": "3時に戻ります。", "fix": "田中不知道你几点回来。", "fixEn": "Tanaka does not know when you will be back."},
       {"id": "sign", "input": "memo", "name": "署名", "nameEn": "Your name", "rules": [{"not": ["劉さん"]}, {"has": [["劉"]], "where": "end"}],
        "ask": "自己的名字后面要不要加さん？", "askEn": "Do you add さん after your own name?", "why": "最后写自己的名字，不加さん：劉", "whyEn": "End with your own name, without さん: 劉", "ex": "李", "fix": "在自己名字后面加さん，或者没署名。", "fixEn": "さん after your own name, or no name at all."},
       {"id": "plain", "input": "memo", "name": "不用信件的套话", "nameEn": "No letter formulas", "rules": [{"not": ["拝啓", "敬具", "お世話になっております"]}],
        "why": "桌上的便条不需要信件的开头和结尾。", "whyEn": "A desk memo needs no letter opening or closing.", "ex": "鈴木さんへ　郵便局に行きます。3時に戻ります。李", "fix": "便条写成了正式信件。", "fixEn": "The memo reads like a formal letter."},
       {"id": "len", "input": "memo", "name": "长度", "nameEn": "Length", "rules": [{"max": 80}], "why": "便条两三句。", "whyEn": "Two or three short sentences.", "fix": "太长了。", "fixEn": "Too long."}],
     "model": "田中さんへ\n銀行に行きます。2時半に戻ります。\n劉",
     "cannot": "页面判断不了：句子的语法和语体。", "cannotEn": "The page cannot judge grammar or register."},
    {"id": "ja-chat", "kind": "chat", "kc": "kt:ja-skill-write-messages", "label": "给朋友的消息", "labelEn": "Message to a friend",
     "card": {"role": "你是刘明。你和朋友ゆき约了 6 点在车站检票口见，然后一起去咖啡店。", "roleEn": "You are Liu Ming. You are meeting your friend Yuki at the station gates at 6, then going to a café.",
              "to": "朋友ゆき", "toEn": "Your friend Yuki", "want": "告诉她你会晚 10 分钟，请她先进店。", "wantEn": "Tell her you will be 10 minutes late and she should go into the café first."},
     "head": "ゆき", "incoming": "じゃ、6時に改札でね！",
     "inputs": [{"id": "msg", "type": "text"}],
     "units": [
       {"id": "late", "input": "msg", "name": "开头就说会晚到", "nameEn": "Say you are late at the start", "rules": [{"has": [["遅れ", "おくれ"]], "where": "first", "n": 2}], "soft": true,
        "ask": "ゆき的手机通知只显示开头。开头说了什么？", "askEn": "Yuki's phone shows only the beginning. What does it say?", "why": "要紧的事先说：ごめん、10分遅れる。", "whyEn": "Main news first: ごめん、10分遅れる。", "ex": "ごめん、5分遅れる！", "fix": "通知里看不到你会晚到。", "fixEn": "The notification does not show that you are late."},
       {"id": "mins", "input": "msg", "name": "晚多久", "nameEn": "How late", "rules": [{"has": [["10分", "十分", "10ぷん", "じゅっぷん"]]}],
        "why": "说清楚晚多久：10分。", "whyEn": "Say how late: 10分.", "ex": "5分遅れる", "fix": "ゆき不知道要等多久。", "fixEn": "Yuki does not know how long to wait."},
       {"id": "ask", "input": "msg", "name": "请她先进店", "nameEn": "Ask her to go in first", "rules": [{"has": [["先に", "入ってて", "入っていて", "待ってて", "待っていて", "はいってて"]]}], "soft": true,
        "why": "写出你要她做的事：先に店に入ってて。", "whyEn": "Say what you want her to do: 先に店に入ってて。", "ex": "先に注文してて！", "fix": "ゆき不知道该等你还是先进去。", "fixEn": "Yuki does not know whether to wait or go in."},
       {"id": "plain", "input": "msg", "name": "给朋友不用这么正式", "nameEn": "Not too formal for a friend", "rules": [{"not": ["拝啓", "敬具", "お世話になっております", "申し訳ございません", "よろしくお願いいたします"]}],
        "ask": "这是给谁的？", "askEn": "Who is this for?", "why": "朋友之间用简体，直接说事。", "whyEn": "Between friends: plain style, straight to the point.", "ex": "ごめん、5分遅れる！先に注文してて。", "fix": "给朋友的消息写得像商务邮件。", "fixEn": "The message to a friend reads like a business e-mail."},
       {"id": "len", "input": "msg", "name": "长度", "nameEn": "Length", "rules": [{"max": 100}], "fix": "太长了。", "fixEn": "Too long."}],
     "preview": {"from": "劉 明", "chars": 30},
     "model": "ごめん、10分遅れる！先に店に入ってて。",
     "cannot": "页面判断不了：简体用得对不对、语气自然不自然。", "cannotEn": "The page cannot judge whether the plain style is right or whether it sounds natural."},
    {"id": "ja-email", "kind": "email", "kc": "kt:ja-skill-write-messages", "label": "给老师的邮件", "labelEn": "E-mail to a teacher",
     "card": {"role": "你是二年级的刘明（劉），山田老师的学生。", "roleEn": "You are Liu Ming (劉), a second-year student of Yamada-sensei.",
              "to": "山田老师", "toEn": "Yamada-sensei, your teacher", "want": "你发烧了，明天的课要请假。告诉老师，并请老师告诉你作业。", "wantEn": "You have a fever and will miss tomorrow's class. Tell the teacher and ask about the homework."},
     "toLine": ["宛先：", "yamada@school.example"],
     "inputs": [{"id": "subj", "label": "件名：", "type": "line"}, {"id": "body", "type": "text"}],
     "units": [
       {"id": "subj", "input": "subj", "name": "件名", "nameEn": "Subject line", "rules": [{"req": true}, {"has": [["欠席", "休み", "授業", "お休み"]]}], "soft": true,
        "ask": "老师只看件名，知道是什么事吗？", "askEn": "From the subject alone, can the teacher tell what this is about?", "why": "件名写明什么事：明日の授業の欠席について（劉）", "whyEn": "Say what it is about: 明日の授業の欠席について（劉）", "ex": "件名：レポートの提出について（張）", "fix": "件名是空的或看不出是什么事。", "fixEn": "The subject is empty or does not say what it is about."},
       {"id": "greet", "input": "body", "name": "称呼", "nameEn": "Greeting", "rules": [{"not": ["山田先生様", "山田様先生", "先生あなた"]}, {"has": [["山田先生"]], "where": "start"}],
        "ask": "“先生”本身是不是已经是敬称？", "askEn": "Is 先生 already an honorific?", "why": "开头写“山田先生”，不再加“様”。", "whyEn": "Start with 山田先生; do not add 様.", "ex": "佐藤先生", "fix": "敬称重叠或没有称呼。", "fixEn": "Double honorific, or no greeting."},
       {"id": "self", "input": "body", "name": "开头自报姓名", "nameEn": "Say who you are near the start", "rules": [{"has": [["劉"]], "where": "first", "n": 3}],
        "ask": "老师怎么知道是谁写的？", "askEn": "How will the teacher know who is writing?", "why": "称呼和问候之后马上自报：二年の劉です。", "whyEn": "Right after the greeting, say who you are: 二年の劉です。", "ex": "一年の張です。", "fix": "老师读到一半还不知道是谁写的。", "fixEn": "Halfway through, the teacher still does not know who is writing."},
       {"id": "news", "input": "body", "name": "前几句说出要请假", "nameEn": "Say early that you will be absent", "rules": [{"has": [["休み", "欠席", "休ませて"]], "where": "first", "n": 4}], "soft": true,
        "ask": "老师最需要知道的是什么？", "askEn": "What does the teacher most need to know?", "why": "要紧的事放前面：熱があるので、明日の授業を休みます。", "whyEn": "Main news early: 熱があるので、明日の授業を休みます。", "ex": "体調が悪いので、今日の授業を欠席します。", "fix": "开头看不到你要请假。", "fixEn": "The start does not say you will be absent."},
       {"id": "ask", "input": "body", "name": "问作业", "nameEn": "Ask about the homework", "rules": [{"has": [["宿題"]]}, {"not": ["教えてください"], "warn": true}],
        "ask": "老师读完要为你做什么？请求的说法够客气吗？", "askEn": "What should the teacher do for you? Is the request polite enough?", "why": "写出请求。对老师用～ていただけないでしょうか 比～てください 客气。", "whyEn": "Make the request. For a teacher, ～ていただけないでしょうか is politer than ～てください.", "ex": "資料を送っていただけないでしょうか。", "fix": "老师不知道你要她做什么。", "fixEn": "The teacher does not know what you want."},
       {"id": "close", "input": "body", "name": "结尾", "nameEn": "Closing", "rules": [{"not": ["了解です"]}, {"has": [["よろしくお願いします", "よろしくお願いいたします"]], "where": "end"}],
        "why": "最后写：よろしくお願いいたします。", "whyEn": "End with: よろしくお願いいたします。", "ex": "よろしくお願いいたします。\n張", "fix": "邮件没有结尾的客气话。", "fixEn": "No polite closing."}],
     "preview": {"from": "劉 明", "subject": "subj", "chars": 40},
     "model": "山田先生\nこんにちは。二年の劉です。\n熱があるので、明日の授業を休みます。\nすみませんが、宿題を教えていただけないでしょうか。\nよろしくお願いいたします。\n劉",
     "cannot": "页面判断不了：敬语用得对不对、整体语体是否合适（～てください 只提醒，不判错）。", "cannotEn": "The page cannot judge honorifics or overall register (～てください is flagged as a note, not marked wrong)."}
  ],
  "rewrites": [
    {"id": "ja-rw-friend", "base": "ja-email", "kc": "kt:ja-skill-write-messages", "kind": "chat", "label": "给老师的邮件 → 给同学的消息", "labelEn": "E-mail to the teacher → message to a classmate",
     "card": {"role": "同一件事：你发烧了，明天的课要请假。", "roleEn": "Same situation: you have a fever and will miss tomorrow's class.", "to": "同学ゆき", "toEn": "Yuki, a classmate", "want": "告诉她，并请她之后告诉你作业。", "wantEn": "Tell her, and ask her to let you know the homework later."},
     "units": [
       {"id": "plain", "input": "text", "name": "不用对老师的说法", "nameEn": "No teacher-style phrases", "rules": [{"not": ["山田先生", "お願いいたします", "いただけないでしょうか", "拝啓"]}], "fix": "给同学写得像给老师的邮件。", "fixEn": "It reads like the e-mail to the teacher."},
       {"id": "ask", "input": "text", "name": "问作业", "nameEn": "Ask about the homework", "rules": [{"has": [["宿題"]]}], "fix": "ゆき不知道你要她做什么。", "fixEn": "Yuki does not know what you want."},
       {"id": "len", "input": "text", "name": "长度", "nameEn": "Length", "rules": [{"max": 120}], "fix": "太长了。", "fixEn": "Too long."}],
     "model": "ゆき、ごめん、熱があって明日休むね。宿題、あとで教えてくれる？",
     "diff": "两版差在：称呼（山田先生 → ゆき）、语体（です・ます → 简体）、请求（教えていただけないでしょうか → 教えてくれる？）、结尾（よろしくお願いいたします → 不用）。", "diffEn": "The differences: greeting (山田先生 → ゆき), style (です・ます → plain), request (教えていただけないでしょうか → 教えてくれる？), closing (よろしくお願いいたします → none)."},
    {"id": "ja-rw-teacher", "base": "ja-chat", "kc": "kt:ja-skill-write-messages", "kind": "email", "label": "给朋友的消息 → 给老师的消息", "labelEn": "Message to a friend → message to a teacher",
     "card": {"role": "同一件事：你会晚到 10 分钟。这次是山田老师的课。", "roleEn": "Same situation: you will be 10 minutes late. This time it is Yamada-sensei's class.", "to": "山田老师", "toEn": "Yamada-sensei", "want": "告诉老师你会晚 10 分钟。", "wantEn": "Tell the teacher you will be 10 minutes late."},
     "units": [
       {"id": "greet", "input": "text", "name": "称呼", "nameEn": "Greeting", "rules": [{"not": ["山田先生様"]}, {"has": [["山田先生"]], "where": "start"}], "fix": "给老师要先写“山田先生”。", "fixEn": "Start with 山田先生."},
       {"id": "late", "input": "text", "name": "说出会晚到", "nameEn": "Say you will be late", "rules": [{"has": [["遅れ", "遅刻"]], "where": "first", "n": 3}], "soft": true, "fix": "开头看不到你会晚到。", "fixEn": "The start does not say you will be late."},
       {"id": "style", "input": "text", "name": "不用朋友之间的说法", "nameEn": "No friend-style phrases", "rules": [{"not": ["ごめん", "遅れる！", "入ってて", "先に"]}], "fix": "还留着给朋友的说法。", "fixEn": "Some of the friend message is still there."},
       {"id": "sign", "input": "text", "name": "自报姓名", "nameEn": "Your name", "rules": [{"has": [["劉"]]}], "fix": "老师不知道是谁。", "fixEn": "The teacher does not know who it is."}],
     "model": "山田先生\n二年の劉です。電車が遅れているので、授業に10分ほど遅れます。申し訳ありません。\n劉",
     "diff": "两版差在：称呼、自报姓名、です・ます体、说明理由、用“申し訳ありません”道歉，不再请对方“先进去”。", "diffEn": "The differences: greeting, saying who you are, です・ます style, a reason, an apology with 申し訳ありません, and no “go in first”."}
  ],
  "review": [
    "ja-form：在留卡上中国人名字的汉字写法（劉 而不是 刘）按 kt:ja-skill-write-forms-memo 的常见错误处理，请确认",
    "ja-form：劉 明 的フリガナ 只接受 リュウ メイ（日语音读）；有人用接近汉语的 リウ ミン，请老师判断是否也该接受",
    "ja-email：～てください 只作为提醒，不判错；～ていただけないでしょうか 是否对学生来说过于郑重，请老师确认",
    "ja-memo：只认 2時半 等列出的时间写法",
    "ja-chat：“十分”既可读じゅっぷん也可读じゅうぶん（足够），这里按时间处理"
  ]
};

KT_DATA["template-write-zh"] = {
  "id": "template-write-zh", "lang": "zh", "speech": "zh-CN",
  "title": "按真实格式填写（中文）", "titleEn": "Writing on real templates (Chinese)",
  "subtitle": "报名表、请假条、给朋友的短信、回复老师。先按情境卡写，再逐栏判断，最后看读的人看到的是什么。", "subtitleEn": "An application form, a leave note, a text to a friend and a reply to a teacher. Write from the situation card, judge each part yourself, then see what the reader sees.",
  "kcs": ["kt:zh-skill-write-basic", "kt:zh-skill-write-messages"],
  "templates": [
    {"id": "zh-form", "kind": "form", "kc": "kt:zh-skill-write-basic", "label": "汉语班报名表", "labelEn": "Chinese class application form",
     "card": {"role": "你是 Anna Smith，美国人，中文名“安娜”，女。", "roleEn": "You are Anna Smith, American, Chinese name 安娜, female.",
              "to": "星河语言中心（虚构）", "toEn": "Xinghe Language Centre (made up)", "want": "报名周末口语班。", "wantEn": "Sign up for the weekend speaking class.",
              "facts": [{"k": "中文名", "kEn": "Chinese name", "v": "安娜"}, {"k": "护照上的出生日期", "kEn": "Date of birth on your passport", "v": "03/07/2002（美国写法：月/日/年）", "vEn": "03/07/2002 (US style: month/day/year)"},
                        {"k": "国籍", "kEn": "Nationality", "v": "美国", "vEn": "USA"}, {"k": "学校", "kEn": "School", "v": "东方大学（虚构）", "vEn": "东方大学 (made up)"},
                        {"k": "想报的班", "kEn": "Class", "v": "周末口语班", "vEn": "周末口语班 (weekend speaking class)"}]},
     "head": "星河语言中心 · 汉语学习班报名表", "sub": "请用中文填写。",
     "inputs": [{"id": "name", "label": "姓名", "type": "line"}, {"id": "sex", "label": "性别", "type": "line"},
                {"id": "nat", "label": "国籍", "type": "line"}, {"id": "dob", "label": "出生日期", "hint": "____年__月__日", "type": "line"},
                {"id": "school", "label": "学校", "type": "line"}, {"id": "cls", "label": "报名班级", "type": "line"},
                {"id": "office", "label": "以下由工作人员填写", "type": "line", "wide": true}],
     "units": [
       {"id": "name", "input": "name", "name": "姓名", "nameEn": "Name", "rules": [{"req": true}, {"eq": ["安娜"]}],
        "why": "表上要求用中文填写：写中文名。", "whyEn": "The form asks for Chinese: write your Chinese name.", "ex": "姓名：马克", "fix": "和情境卡上的中文名不一样。", "fixEn": "Not the Chinese name on the card."},
       {"id": "sex", "input": "sex", "name": "性别", "nameEn": "Sex", "rules": [{"req": true}, {"eq": ["女"]}], "why": "写“男”或“女”。", "whyEn": "Write 男 or 女.", "ex": "性别：男"},
       {"id": "nat", "input": "nat", "name": "国籍", "nameEn": "Nationality", "rules": [{"req": true}, {"bad": [["美國", "美国"]]}, {"eq": ["美国"]}],
        "why": "写国名的简体字：美国。", "whyEn": "Write the country in simplified characters: 美国.", "ex": "国籍：法国"},
       {"id": "dob", "input": "dob", "name": "出生日期", "nameEn": "Date of birth", "rules": [{"req": true}, {"date": {"y": 2002, "m": 3, "d": 7}, "fmt": "ymd"}],
        "ask": "护照上的 03/07/2002 是几月几号？中文表格按什么顺序写？", "askEn": "What date is 03/07/2002 on your US passport? What order does a Chinese form use?", "why": "中文按 年→月→日 写：2002年3月7日。美国写法是 月/日/年。", "whyEn": "Chinese order is year → month → day: 2002年3月7日. The US order is month/day/year.", "ex": "出生日期：1999年11月4日", "fix": "工作人员可能把月和日看反。", "fixEn": "The staff may swap the month and the day."},
       {"id": "school", "input": "school", "name": "学校", "nameEn": "School", "rules": [{"req": true}, {"bad": [["東", "东"], ["學", "学"], ["東方", "东方"]]}, {"eq": ["东方大学"]}],
        "why": "用规范简体字：东方大学（不是日本汉字或繁体的“東”）。", "whyEn": "Use standard simplified characters: 东方大学 (not 東).", "ex": "学校：南海大学", "fix": "字形和规范简体字不一样。", "fixEn": "The character forms are not standard simplified ones."},
       {"id": "cls", "input": "cls", "name": "报名班级", "nameEn": "Class", "rules": [{"req": true}, {"has": [["口语"], ["周末"]]}],
        "why": "写清楚哪个班：周末口语班。", "whyEn": "Say which class: 周末口语班.", "ex": "报名班级：周三晚上汉字班", "fix": "中心不知道把你分到哪个班。", "fixEn": "The centre will not know which class to put you in."},
       {"id": "office", "input": "office", "name": "工作人员填写栏", "nameEn": "Office-use box", "rules": [{"blank": ["无", "-", "—"]}],
        "ask": "“以下由工作人员填写”是谁填？", "askEn": "Who fills in the part “以下由工作人员填写”?", "why": "工作人员填，你留空。", "whyEn": "The staff do; leave it blank.", "ex": "（空）", "fix": "这一栏是工作人员用的。", "fixEn": "This box is for the staff."}],
     "model": "姓名：安娜\n性别：女\n国籍：美国\n出生日期：2002年3月7日\n学校：东方大学\n报名班级：周末口语班\n以下由工作人员填写：（空）",
     "cannot": "页面判断不了：手写汉字的笔画和笔顺。", "cannotEn": "The page cannot judge handwritten strokes or stroke order."},
    {"id": "zh-note", "kind": "note", "kc": "kt:zh-skill-write-messages", "label": "请假条", "labelEn": "Leave note",
     "card": {"role": "你是安娜，王老师班上的学生。", "roleEn": "You are 安娜, a student in 王老师's class.", "to": "王老师", "toEn": "Your teacher, 王老师",
              "want": "你今天发烧了，不能去上课，写一张请假条。今天是 5 月 12 日。", "wantEn": "You have a fever today and cannot go to class. Write a leave note. Today is 12 May."},
     "inputs": [{"id": "note", "type": "text"}],
     "units": [
       {"id": "greet", "input": "note", "name": "称呼", "nameEn": "Greeting", "rules": [{"has": [["王老师"]], "where": "start"}],
        "ask": "这张条是写给谁的？谁拿到都看得出来吗？", "askEn": "Who is it for? Will anyone who picks it up see that?", "why": "第一行写称呼：王老师：", "whyEn": "First line: the greeting, 王老师：", "ex": "李老师：", "fix": "开头没写给谁。", "fixEn": "It does not start with who it is for."},
       {"id": "reason", "input": "note", "name": "事由", "nameEn": "Reason", "rules": [{"has": [["发烧", "生病", "不舒服", "感冒", "病了"]]}], "soft": true,
        "why": "写为什么请假：我今天发烧了。", "whyEn": "Say why: 我今天发烧了。", "ex": "我家里有急事。", "fix": "老师不知道你为什么不来。", "fixEn": "The teacher does not know why you are absent."},
       {"id": "ask", "input": "note", "name": "请假", "nameEn": "The request", "rules": [{"has": [["请假", "不能去上课", "不能上课", "不能来上课", "去不了", "来不了"]]}], "soft": true,
        "why": "写清楚要做什么：不能去上课，想请一天假。", "whyEn": "Say what you are asking: 不能去上课，想请一天假。", "ex": "明天不能去上课，想请一天假。", "fix": "老师不知道你要请假。", "fixEn": "The teacher does not know you are asking for leave."},
       {"id": "chars", "input": "note", "name": "同音字和字形", "nameEn": "Homophones and character forms", "rules": [{"bad": [["在来", "再来"], ["在见", "再见"], ["発", "发"], ["焼", "烧"], ["病気", "生病"]]}],
        "why": "拼音输入法容易选错同音字；日本汉字要换成简体字。", "whyEn": "Pinyin input picks wrong homophones easily; Japanese kanji forms must become simplified ones.", "ex": "明天再来。", "fix": "有错字。", "fixEn": "There is a wrong character."},
       {"id": "sign", "input": "note", "name": "署名和日期", "nameEn": "Name and date", "rules": [{"has": [["安娜"]], "where": "end"}, {"has": [["5月12日", "5月12号", "5.12", "5/12", "五月十二日"]], "where": "end"}],
        "ask": "老师怎么知道是谁、哪天写的？", "askEn": "How will the teacher know who wrote it and when?", "why": "最后写：学生：安娜，下面写日期 5月12日。", "whyEn": "End with: 学生：安娜, and the date, 5月12日.", "ex": "学生：马克\n3月8日", "fix": "收件人看到的是：谁写的？哪天的？", "fixEn": "What the reader sees: who wrote this, and when?"}],
     "model": "王老师：\n您好！我今天发烧了，不能去上课，想请一天假。\n学生：安娜\n5月12日",
     "cannot": "页面判断不了：语气是否礼貌、句子是否通顺。", "cannotEn": "The page cannot judge politeness or whether the sentences read well."},
    {"id": "zh-sms", "kind": "chat", "kc": "kt:zh-skill-write-messages", "label": "给朋友的短信", "labelEn": "Text to a friend",
     "card": {"role": "你是安娜。你和朋友小林约了明天下午两点在图书馆门口见。", "roleEn": "You are 安娜. You are meeting your friend 小林 at the library entrance at 2 tomorrow afternoon.",
              "to": "朋友小林", "toEn": "Your friend 小林", "want": "你两点有事，想改到三点，还在图书馆门口。发短信告诉他。", "wantEn": "You are busy at 2 and want to change to 3, same place. Text him."},
     "head": "小林", "incoming": "明天下午两点，图书馆门口见！",
     "inputs": [{"id": "msg", "type": "text"}],
     "units": [
       {"id": "open", "input": "msg", "name": "直接说事", "nameEn": "Get straight to the point", "rules": [{"not": ["在吗", "在不在"]}],
        "ask": "小林看到第一句，能马上知道什么事吗？", "askEn": "Can 小林 tell from the first line what it is about?", "why": "不用先问“在吗”，直接说事。", "whyEn": "Do not open with 在吗; say what it is about.", "ex": "小王，我晚十分钟到！", "fix": "“在吗”之后对方还要等你下一条。", "fixEn": "After 在吗 the reader has to wait for your next message."},
       {"id": "time", "input": "msg", "name": "前两句说出新时间", "nameEn": "New time in the first two sentences", "rules": [{"has": [["三点", "3点", "3:00", "15:00", "十五点"]], "where": "first", "n": 2}],
        "ask": "通知里只看得到开头，新时间在里面吗？", "askEn": "Only the start shows in the notification. Is the new time there?", "why": "把要改的时间放在前面：我们改到三点吧。", "whyEn": "Put the new time first: 我们改到三点吧。", "ex": "我们改到四点吧？", "fix": "开头看不到新时间。", "fixEn": "The new time is not at the start."},
       {"id": "place", "input": "msg", "name": "地点", "nameEn": "Place", "rules": [{"has": [["图书馆"]]}], "why": "说清楚还在哪儿见。", "whyEn": "Say where you will meet.", "ex": "还在食堂门口见。", "fix": "小林不知道在哪儿等。", "fixEn": "小林 does not know where to wait."},
       {"id": "chars", "input": "msg", "name": "同音字", "nameEn": "Homophones", "rules": [{"bad": [["在见", "再见"], ["在来", "再来"], ["已经在", "已经再"]]}],
        "why": "“再见”的“再”和“在”同音，拼音输入法常选错。", "whyEn": "再 in 再见 sounds like 在; pinyin input often picks the wrong one.", "ex": "明天见！", "fix": "有同音错字。", "fixEn": "A homophone is wrong."},
       {"id": "plain", "input": "msg", "name": "给朋友不用书信格式", "nameEn": "No letter format for a friend", "rules": [{"not": ["尊敬的", "此致", "敬礼"]}],
        "why": "朋友之间的短信不用“尊敬的”“此致敬礼”。", "whyEn": "No 尊敬的 or 此致敬礼 in a text to a friend.", "ex": "小王，我晚十分钟到！", "fix": "给朋友的短信写成了正式书信。", "fixEn": "The text to a friend reads like a formal letter."},
       {"id": "len", "input": "msg", "name": "长度", "nameEn": "Length", "rules": [{"max": 60}], "fix": "太长了。", "fixEn": "Too long."}],
     "preview": {"from": "安娜", "chars": 20},
     "model": "小林，明天我两点有事，我们改到三点吧？还在图书馆门口见。",
     "cannot": "页面判断不了：语气是否自然。", "cannotEn": "The page cannot judge whether it sounds natural."},
    {"id": "zh-reply", "kind": "chat", "kc": "kt:zh-skill-write-messages", "label": "回复老师的消息", "labelEn": "Reply to a teacher",
     "card": {"role": "你是安娜。王老师给你发了一条消息。", "roleEn": "You are 安娜. 王老师 has sent you a message.", "to": "王老师", "toEn": "王老师",
              "want": "回复老师：你知道了。", "wantEn": "Reply that you have got the message."},
     "head": "王老师", "incoming": "安娜，明天的口语课改到下午两点，教室不变。",
     "inputs": [{"id": "msg", "type": "text"}],
     "units": [
       {"id": "notbare", "input": "msg", "name": "不只回一个字", "nameEn": "More than one word", "rules": [{"req": true}, {"only": ["嗯", "哦", "好", "嗯嗯", "哦哦", "收到", "好的", "ok"]}],
        "ask": "老师收到一个“嗯”，会怎么想？", "askEn": "What will the teacher think on getting just 嗯?", "why": "对老师只回“嗯”“哦”显得冷淡，要说完整一点。", "whyEn": "Replying 嗯 or 哦 to a teacher feels cold; say a little more.", "ex": "李老师，好的，我知道了，谢谢您！", "fix": "只回一个字，对老师显得冷淡。", "fixEn": "A one-word reply feels cold to a teacher."},
       {"id": "greet", "input": "msg", "name": "称呼", "nameEn": "Greeting", "rules": [{"has": [["王老师", "老师"]], "where": "start"}],
        "why": "先称呼“王老师”。", "whyEn": "Start with 王老师.", "ex": "李老师，", "fix": "没有称呼老师。", "fixEn": "The teacher is not addressed."},
       {"id": "ack", "input": "msg", "name": "说明你知道了", "nameEn": "Say you have got it", "rules": [{"has": [["知道了", "好的", "收到", "明白了", "没问题"]]}], "soft": true,
        "why": "说清楚你知道了：好的，我知道了。", "whyEn": "Say you have got it: 好的，我知道了。", "ex": "好的，我知道了。", "fix": "老师不确定你看到了没有。", "fixEn": "The teacher cannot be sure you saw it."},
       {"id": "thanks", "input": "msg", "name": "语气", "nameEn": "Tone", "self": true, "rules": [],
        "why": "可以加“谢谢老师”“谢谢您”。语气是否合适，页面判断不了。", "whyEn": "You can add 谢谢老师 or 谢谢您. The page cannot judge tone."}],
     "preview": {"from": "安娜", "chars": 20},
     "model": "王老师，好的，我知道了。明天下午两点见，谢谢您！",
     "cannot": "页面判断不了：语气是否礼貌。", "cannotEn": "The page cannot judge politeness."}
  ],
  "rewrites": [
    {"id": "zh-rw-friend", "base": "zh-note", "kc": "kt:zh-skill-write-messages", "kind": "chat", "label": "请假条 → 给同学的短信", "labelEn": "Leave note → text to a classmate",
     "card": {"role": "同一件事：你今天发烧了，没去上课。", "roleEn": "Same situation: you have a fever and missed class today.", "to": "同学小林", "toEn": "小林, a classmate", "want": "发短信问他老师留了什么作业。", "wantEn": "Text him to ask what homework the teacher gave."},
     "units": [
       {"id": "greet", "input": "text", "name": "开头", "nameEn": "Opening", "rules": [{"has": [["小林"]], "where": "start"}], "fix": "开头叫他的名字。", "fixEn": "Start with his name."},
       {"id": "plain", "input": "text", "name": "不用请假条的格式", "nameEn": "No leave-note format", "rules": [{"not": ["学生：", "此致", "敬礼", "您好"]}], "fix": "给同学写得像请假条。", "fixEn": "It reads like the leave note."},
       {"id": "ask", "input": "text", "name": "问作业", "nameEn": "Ask about the homework", "rules": [{"has": [["作业"]]}], "fix": "小林不知道你要他告诉你什么。", "fixEn": "小林 does not know what you want."},
       {"id": "len", "input": "text", "name": "长度", "nameEn": "Length", "rules": [{"max": 80}], "fix": "太长了。", "fixEn": "Too long."}],
     "model": "小林，我今天发烧了，没去上课。老师留了什么作业？能告诉我吗？谢谢！",
     "diff": "两版差在：称呼（王老师：您好！→ 小林）、不用“请假”和署名日期、请求变成问同学。", "diffEn": "The differences: greeting (王老师：您好！→ 小林), no 请假 and no signature or date, and the request becomes a question to a classmate."},
    {"id": "zh-rw-teacher", "base": "zh-sms", "kc": "kt:zh-skill-write-messages", "kind": "chat", "label": "给朋友的短信 → 给老师的消息", "labelEn": "Text to a friend → message to a teacher",
     "card": {"role": "同一件事：你两点有事，想把见面改到三点。这次是和王老师约的答疑时间。", "roleEn": "Same situation: you are busy at 2 and want to change to 3. This time the meeting is office hours with 王老师.", "to": "王老师", "toEn": "王老师", "want": "请老师把时间改到三点。", "wantEn": "Ask the teacher to move it to 3."},
     "units": [
       {"id": "greet", "input": "text", "name": "称呼", "nameEn": "Greeting", "rules": [{"has": [["王老师"]], "where": "start"}], "fix": "给老师要先称呼“王老师”。", "fixEn": "Start with 王老师."},
       {"id": "you", "input": "text", "name": "对老师用“您”", "nameEn": "Use 您 to the teacher", "rules": [{"has": [["您"]]}], "fix": "对老师一般用“您”。", "fixEn": "Use 您 with a teacher."},
       {"id": "self", "input": "text", "name": "自报姓名", "nameEn": "Say who you are", "rules": [{"has": [["安娜"]]}], "fix": "老师不知道是谁。", "fixEn": "The teacher does not know who it is."},
       {"id": "time", "input": "text", "name": "新时间", "nameEn": "The new time", "rules": [{"has": [["三点", "3点", "3:00", "15:00"]]}], "fix": "老师不知道改到几点。", "fixEn": "The teacher does not know the new time."},
       {"id": "plain", "input": "text", "name": "不用朋友之间的说法", "nameEn": "No friend-style phrases", "rules": [{"not": ["在吗", "小林"]}], "fix": "还留着给朋友的说法。", "fixEn": "Some of the friend text is still there."}],
     "model": "王老师，您好！我是安娜。明天下午两点我有课，见面的时间能改到三点吗？谢谢您！",
     "diff": "两版差在：称呼和问候（小林 → 王老师，您好）、自报姓名、用“您”、说明原因、改成询问（能……吗？）。", "diffEn": "The differences: greeting (小林 → 王老师，您好), saying who you are, 您, a reason, and asking (能……吗？) instead of proposing."}
  ],
  "review": [
    "zh-form：出生日期接受 2002年3月7日、2002-03-07、2002/3/7、2002.3.7；不接受汉字数字写法（二〇〇二年三月七日），请老师确认是否要接受",
    "zh-note：请假条格式（称呼、正文、署名、日期）按通行写法；“学生：安娜”的署名形式是否必须，请老师确认（页面只要求结尾有“安娜”和日期）",
    "zh-reply：“好的”“收到”单独回复是否算冷淡，请老师确认（页面把只回“好的”也算作只回一个词）",
    "zh-note、zh-sms：字形和同音字只核对列出的几组（在/再、発/发、焼/烧、東/东 等）"
  ]
};
