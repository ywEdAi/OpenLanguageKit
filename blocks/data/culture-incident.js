/* Data packs for blocks/culture-incident.html (prim:culture-incident).
 * One pack per language: KT_DATA["culture-incident-<lang>"] = <strict JSON>;
 * incident: id, title/titleEn, kcs, child?, people {a,b: {name, role/roleEn}}, rel {setting/settingEn, up, close, formal: 0..2},
 *   lines [{who:"a"|"b", text} | {who:"n", narr/narrEn}], problem [line indexes; first = where it starts], react (line index of the reaction),
 *   cat wording|register|topic|implicature|none, why/whyEn, variant/variantEn ("others might respond like this"),
 *   inner {a/aEn, b/bEn} (hidden monologues), rewrite {line, purpose/purposeEn, options [{kind good|politeOnly|avoid|other|over,
 *   text | act/actEn, reply?, why/whyEn}], features/featuresEn}.
 * All incidents are invented; companies and places are fictional. Everything a native teacher might dispute is listed in review.
 */
KT_DATA["culture-incident-en"] = {
 "id": "culture-incident-en",
 "lang": "en",
 "speech": "en-GB",
 "title": "文化情境判读（英语）",
 "titleEn": "Critical incidents (English)",
 "subtitle": "读一段小误会，找出从哪一句开始不对劲，判断原因，再改写那一句。每件事只讲这两个人、这个场合。",
 "subtitleEn": "Read a small misunderstanding, find the line where it starts to go wrong, work out why, then rewrite that line. Each incident is about these two people in this setting.",
 "incidents": [
  {
   "id": "salary-chat",
   "title": "茶水间问工资",
   "titleEn": "Asking about pay in the office kitchen",
   "kcs": [
    "kt:en-soc-small-talk"
   ],
   "people": {
    "a": {
     "name": "Megan",
     "role": "设计组的同事",
     "roleEn": "A colleague from the design team"
    },
    "b": {
     "name": "Wei",
     "role": "刚入职一周的新同事",
     "roleEn": "A colleague in his first week"
    }
   },
   "rel": {
    "setting": "公司茶水间，休息时间",
    "settingEn": "The office kitchen, on a break",
    "up": 0,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "Wei 入职第一周。茶水间里，设计组的 Megan 和他聊了起来。",
     "narrEn": "Wei's first week at a new job. In the kitchen, Megan from the design team starts chatting."
    },
    {
     "who": "a",
     "text": "So, how are you finding it so far?"
    },
    {
     "who": "b",
     "text": "Very good, thank you. Everyone is very kind."
    },
    {
     "who": "a",
     "text": "Oh, that's great to hear. The team's lovely."
    },
    {
     "who": "b",
     "text": "How much do they pay you here? Is it more than at your last job?"
    },
    {
     "who": "a",
     "text": "Oh — ha, um… it's fine, I guess. Anyway, I'd better get back to my desk."
    }
   ],
   "problem": [
    4
   ],
   "react": 5,
   "cat": "topic",
   "why": "说法和语法都没问题，问题在话题：在这类职场闲谈里，刚认识的同事之间问工资，常常让人不知道怎么接。可以聊工作本身、经历、周末。",
   "whyEn": "The words and grammar are fine; the problem is the topic. In this kind of workplace small talk, asking a colleague you have just met about pay often leaves them unsure how to answer. Talk about the work itself, experience or the weekend instead.",
   "variant": "也有人会大方地说个大概，尤其是比较熟、或者所在行业公开谈薪的时候；但对刚认识的人，这是冒险的话题。",
   "variantEn": "Some people will happily give a rough figure, especially once they know you or in fields where pay is openly discussed; but with someone you have just met it is a risky topic.",
   "inner": {
    "a": "工资这种事我连好朋友都不太聊。刚认识就问，我不知道该怎么回答，只想赶快结束这段对话。",
    "aEn": "I hardly discuss pay even with close friends. From someone I've just met, I didn't know what to say, so I just wanted to end the conversation.",
    "b": "我只是想表示关心，顺便了解这家公司待遇怎么样。以前的公司里，同事之间偶尔也会聊这个。",
    "bEn": "I only wanted to show interest and get a feel for the company. At my last job, colleagues sometimes talked about it."
   },
   "rewrite": {
    "line": 4,
    "purpose": "和新同事继续聊下去，了解这份工作",
    "purposeEn": "keep chatting with a new colleague and learn about the job",
    "options": [
     {
      "kind": "good",
      "text": "How long have you been on the design team?",
      "reply": "Almost three years now. It's a good place to learn."
     },
     {
      "kind": "good",
      "text": "What's the best thing about working here, would you say?",
      "reply": "Honestly? The people. And the Friday lunches."
     },
     {
      "kind": "politeOnly",
      "text": "Sorry, may I ask how much they pay you here, please?",
      "why": "加了 sorry、please，问的还是工资。",
      "whyEn": "Sorry and please are added, but it is still a question about pay."
     },
     {
      "kind": "avoid",
      "act": "不再说话，笑一笑回到座位上",
      "actEn": "Say nothing more, smile and go back to your desk",
      "why": "话题是不问了，可是和同事聊下去的目的也没了。",
      "whyEn": "The topic is gone, but so is the chance to keep talking."
     },
     {
      "kind": "other",
      "text": "Megan, how much do they pay you here?",
      "why": "加了称呼，话题没变。",
      "whyEn": "A name is added, but the topic is the same."
     }
    ],
    "features": [
     "换了话题：不问钱，问工作本身、经历或感受",
     "还是在和对方聊下去：问一个对方好回答的问题",
     "语气轻松，适合茶水间"
    ],
    "featuresEn": [
     "A different topic: not money, but the work, experience or feelings",
     "Still keeps the chat going: a question that is easy to answer",
     "A light tone that fits a kitchen chat"
    ]
   }
  },
  {
   "id": "would-you-mind",
   "title": "Would you mind…? 答 Yes",
   "titleEn": "Answering Yes to Would you mind…?",
   "kcs": [
    "kt:en-soc-softening"
   ],
   "people": {
    "a": {
     "name": "Tom",
     "role": "合租的室友",
     "roleEn": "A flatmate"
    },
    "b": {
     "name": "Lin",
     "role": "合租的室友",
     "roleEn": "A flatmate"
    }
   },
   "rel": {
    "setting": "合租的公寓，厨房里",
    "settingEn": "A shared flat, in the kitchen",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "合租的室友 Tom 在厨房碰到 Lin。",
     "narrEn": "Lin's flatmate Tom runs into her in the kitchen."
    },
    {
     "who": "a",
     "text": "Hey Lin, would you mind if I borrowed your bike tomorrow? Mine's got a flat tyre."
    },
    {
     "who": "b",
     "text": "Yes."
    },
    {
     "who": "a",
     "text": "Oh — okay, no worries. I'll get the bus."
    },
    {
     "who": "b",
     "text": "…The bus?"
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "wording",
   "why": "Would you mind…? 问的是“你介意吗？”，回答 Yes 字面上就是“介意”。想答应要说 No, not at all. 或 Sure, go ahead.（Sure 一般不会被理解成介意）。",
   "whyEn": "Would you mind…? asks “do you object?”, so a bare Yes literally means “I do”. To say yes to the request, use No, not at all. or Sure, go ahead. (Sure is not usually heard as objecting).",
   "variant": "很多人会结合语气和动作来理解，单说 Yes 时也可能追问一句 Is that a yes?；最容易误会的是只有一个词、没有动作配合的时候。",
   "variantEn": "Many people read tone and actions too, and may ask Is that a yes?; the misunderstanding is most likely with a single word and nothing else to go on.",
   "inner": {
    "a": "她说 Yes，那就是介意吧。有点失望，但不能勉强她。",
    "aEn": "She said yes, so she does mind. A bit disappointing, but I won't push.",
    "b": "我是想说“可以啊”，他为什么要去坐公交？",
    "bEn": "I meant “sure”. Why is he taking the bus?"
   },
   "rewrite": {
    "line": 2,
    "purpose": "答应把自行车借给 Tom",
    "purposeEn": "agree to lend Tom the bike",
    "options": [
     {
      "kind": "good",
      "text": "No, not at all. Go ahead — the key's on the hook.",
      "reply": "Brilliant, thanks Lin!"
     },
     {
      "kind": "good",
      "text": "Sure, go ahead.",
      "reply": "Thanks, you're a star."
     },
     {
      "kind": "politeOnly",
      "text": "Yes, please.",
      "why": "加了 please，还是 Yes，字面上仍然是“介意”，听起来更奇怪。",
      "whyEn": "Please is added, but it is still Yes, literally “I mind”, and it sounds odder."
     },
     {
      "kind": "avoid",
      "text": "Hmm, maybe. Let me think.",
      "why": "本来想答应，这样说他会以为你不太愿意。",
      "whyEn": "You meant yes; this makes it sound as if you would rather not."
     },
     {
      "kind": "other",
      "text": "Yes, Tom.",
      "why": "加了名字，Yes 的问题还在。",
      "whyEn": "A name is added, but the Yes problem remains."
     }
    ],
    "features": [
     "用 No / Not at all 或 Sure, go ahead 表示“不介意”",
     "明确答应，不含糊",
     "可以加一句具体的话，比如钥匙在哪儿"
    ],
    "featuresEn": [
     "No / Not at all, or Sure, go ahead, to mean “I don't mind”",
     "A clear yes, not a vague one",
     "Optionally something concrete, like where the key is"
    ]
   }
  },
  {
   "id": "call-me-rachel",
   "title": "老师说“叫我 Rachel”",
   "titleEn": "“Just call me Rachel”",
   "kcs": [
    "kt:en-soc-politeness-basic"
   ],
   "people": {
    "a": {
     "name": "Rachel Hughes",
     "role": "成人夜校的英语老师",
     "roleEn": "An English teacher at an adult evening class"
    },
    "b": {
     "name": "Zhou",
     "role": "夜校学生",
     "roleEn": "A student in the class"
    }
   },
   "rel": {
    "setting": "成人夜校，第一节课",
    "settingEn": "An adult evening class, first lesson",
    "up": 1,
    "close": 0,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "成人夜校第一节课，老师在做自我介绍。",
     "narrEn": "First lesson of an adult evening class. The teacher introduces herself."
    },
    {
     "who": "a",
     "text": "Hi everyone, I'm Rachel Hughes. Please just call me Rachel."
    },
    {
     "who": "b",
     "text": "OK. Teacher, can I ask a question?"
    },
    {
     "who": "a",
     "text": "Of course! And honestly — Rachel's fine."
    },
    {
     "who": "b",
     "text": "Yes, Teacher."
    },
    {
     "who": "a",
     "text": "Okay, okay. Go ahead."
    }
   ],
   "problem": [
    2,
    4
   ],
   "react": 3,
   "cat": "register",
   "why": "英语里 teacher 一般不用作称呼。成人班上老师已经说了 call me Rachel，就叫 Rachel；不确定时可以用 Ms Hughes（姓）。",
   "whyEn": "In English, teacher is not normally used as a form of address. When the teacher of an adult class says call me Rachel, call her Rachel; if unsure, use Ms Hughes (the surname).",
   "variant": "也有老师觉得被叫 Teacher 挺可爱，并不在意；在一些国家的英语学校里，学生叫 Teacher 很普遍，老师也习惯了。",
   "variantEn": "Some teachers find being called Teacher sweet and do not mind at all; in English schools in some countries it is common and teachers are used to it.",
   "inner": {
    "a": "我说过叫我 Rachel 就好。被叫 Teacher 有点像回到小学，也有点距离感。不过他是好意，我不介意。",
    "aEn": "I said Rachel is fine. Being called Teacher feels a bit like primary school, and a bit distant. But he means well; I don't mind.",
    "b": "直接叫老师的名字太不尊重了，叫“老师”才礼貌。",
    "bEn": "Calling a teacher by her first name feels disrespectful; “Teacher” is the polite way."
   },
   "rewrite": {
    "line": 2,
    "purpose": "礼貌地问老师能不能提问",
    "purposeEn": "politely ask whether you may ask a question",
    "options": [
     {
      "kind": "good",
      "text": "Rachel, can I ask a question?",
      "reply": "Of course, go ahead."
     },
     {
      "kind": "good",
      "text": "Sorry, Rachel — could I ask something?",
      "reply": "Sure, what is it?"
     },
     {
      "kind": "politeOnly",
      "text": "Excuse me, Teacher, could I please ask a question?",
      "why": "加了 excuse me 和 please，称呼没改。",
      "whyEn": "Excuse me and please are added; the form of address is unchanged."
     },
     {
      "kind": "avoid",
      "act": "不问了，下课自己查",
      "actEn": "Don't ask; look it up after class",
      "why": "称呼的问题躲开了，问题也没问成。",
      "whyEn": "The address problem is avoided, and so is the question."
     },
     {
      "kind": "other",
      "text": "Teacher, can I ask you a question about the homework?",
      "why": "内容更具体了，称呼还是 Teacher。",
      "whyEn": "The question is more specific, but the address is still Teacher."
     }
    ],
    "features": [
     "按老师说的叫 Rachel（或用 Ms Hughes）",
     "不用 Teacher 作称呼",
     "还是在礼貌地请求提问"
    ],
    "featuresEn": [
     "Calls her Rachel as she asked (or Ms Hughes)",
     "Does not use Teacher as a form of address",
     "Still politely asks to ask a question"
    ]
   }
  },
  {
   "id": "propaganda",
   "title": "社团里的“宣传”",
   "titleEn": "“Propaganda” at a club meeting",
   "kcs": [
    "kt:en-false-friends"
   ],
   "people": {
    "a": {
     "name": "Kate",
     "role": "学生社团的主席",
     "roleEn": "The chair of a student society"
    },
    "b": {
     "name": "Chen",
     "role": "社团新成员",
     "roleEn": "A new committee member"
    }
   },
   "rel": {
    "setting": "学生社团开会，大家轮流自我介绍",
    "settingEn": "A student society meeting; everyone introduces themselves",
    "up": 0,
    "close": 0,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "学生社团在筹备文化节，新成员轮流介绍自己负责什么。",
     "narrEn": "A student society is planning a culture festival. New committee members say what they are in charge of."
    },
    {
     "who": "a",
     "text": "Great, thanks Priya. Chen, what are you looking after?"
    },
    {
     "who": "b",
     "text": "I'm in charge of propaganda for the festival."
    },
    {
     "who": "a",
     "text": "Propaganda? Ha — okay… so, posters and things?"
    },
    {
     "who": "b",
     "text": "Yes. Posters and social media."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "wording",
   "why": "中文的“宣传”不等于英语的 propaganda：propaganda 多指带有误导性的政治宣传。活动推广说 publicity 或 promotion。",
   "whyEn": "Chinese 宣传 is not English propaganda, which usually means misleading political messaging. For an event, say publicity or promotion.",
   "variant": "知道中文“宣传”的人一般能猜出意思，有人会当成好笑的口误；但在正式的工作邮件里，误会会更大。",
   "variantEn": "People who know the Chinese word can usually guess the meaning, and some will treat it as a funny slip; in a formal work email it would cause more confusion.",
   "inner": {
    "a": "Propaganda 让我想到政府的政治宣传，用在文化节上像个奇怪的玩笑。我猜他不是这个意思，但还是愣了一下。",
    "aEn": "Propaganda makes me think of government political messaging; for a festival it sounds like an odd joke. I guessed he didn't mean that, but it threw me.",
    "b": "“宣传”就是 propaganda，词典里有。我负责海报和社交媒体。",
    "bEn": "宣传 is propaganda; it's in the dictionary. I'm doing the posters and social media."
   },
   "rewrite": {
    "line": 2,
    "purpose": "说清楚自己负责文化节的推广",
    "purposeEn": "say that you are doing the festival's publicity",
    "options": [
     {
      "kind": "good",
      "text": "I'm in charge of publicity for the festival.",
      "reply": "Perfect — we need someone on that."
     },
     {
      "kind": "good",
      "text": "I'm looking after promotion: posters and social media.",
      "reply": "Great, thanks Chen."
     },
     {
      "kind": "politeOnly",
      "text": "Sorry, I'm in charge of propaganda for the festival, please.",
      "why": "加了 sorry、please，用错的词还在。",
      "whyEn": "Sorry and please are added; the wrong word is still there."
     },
     {
      "kind": "avoid",
      "act": "只说名字，不说自己负责什么",
      "actEn": "Give only your name and not what you do",
      "why": "大家不知道你负责什么，目的没达到。",
      "whyEn": "Nobody learns what you are doing, so the point is lost."
     },
     {
      "kind": "other",
      "text": "Good afternoon, everyone. I am responsible for the propaganda of the festival.",
      "why": "说得更正式了，但 propaganda 没换。",
      "whyEn": "More formal, but propaganda is still there."
     }
    ],
    "features": [
     "把 propaganda 换成 publicity / promotion",
     "说清楚负责什么（海报、社交媒体）",
     "语气和别人的自我介绍一样轻松"
    ],
    "featuresEn": [
     "Replaces propaganda with publicity / promotion",
     "Says what you do (posters, social media)",
     "As relaxed as the others' introductions"
    ]
   }
  },
  {
   "id": "bus-stop",
   "title": "邻居的冷淡回答",
   "titleEn": "A neighbour's short reply",
   "kcs": [
    "kt:en-soc-small-talk"
   ],
   "people": {
    "a": {
     "name": "Dan",
     "role": "住在隔壁的邻居",
     "roleEn": "The next-door neighbour"
    },
    "b": {
     "name": "Yu",
     "role": "邻居",
     "roleEn": "A neighbour"
    }
   },
   "rel": {
    "setting": "星期一早上的公交站",
    "settingEn": "A bus stop on Monday morning",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "星期一早上，Yu 在公交站碰到隔壁的 Dan。平时两人常聊几句。",
     "narrEn": "Monday morning. Yu meets Dan from next door at the bus stop. They usually have a chat."
    },
    {
     "who": "b",
     "text": "Morning, Dan! Did you have a good weekend?"
    },
    {
     "who": "a",
     "text": "Mm. Fine, thanks."
    },
    {
     "who": "b",
     "text": "We went to the lake. The weather was amazing."
    },
    {
     "who": "a",
     "text": "Right."
    },
    {
     "who": "n",
     "narr": "车来了，Dan 坐到了后排。",
     "narrEn": "The bus comes and Dan sits at the back."
    }
   ],
   "problem": [
    2
   ],
   "react": 4,
   "cat": "none",
   "why": "Yu 的话没有问题。Dan 平时会聊，今天回答短是因为他自己的事。一次冷淡的回答说明不了“这里的人都这样”。",
   "whyEn": "Yu said nothing wrong. Dan usually chats; today's short answers are about his own day. One cool reply does not show that “people here are all like that”.",
   "variant": "如果一个人总是这样回答，也许他就是不爱聊天；那也是个人习惯，不是一种文化。",
   "variantEn": "If someone always answers like this, they may just not enjoy chatting; that is a personal habit, not a culture.",
   "inner": {
    "a": "我妈周末住院了，我一夜没睡，现在只想安静一会儿。跟 Yu 没关系。",
    "aEn": "My mum went into hospital at the weekend and I didn't sleep. I just want some quiet. It's nothing to do with Yu.",
    "b": "是我说错了什么吗？是不是这里的人周一早上都不想聊天？",
    "bEn": "Did I say something wrong? Do people here never want to chat on Monday mornings?"
   },
   "rewrite": {
    "line": 3,
    "purpose": "和邻居打个招呼",
    "purposeEn": "greet the neighbour",
    "options": [
     {
      "kind": "good",
      "act": "不用改：打过招呼就好，看对方不想聊，就少说几句",
      "actEn": "No change: the greeting was fine; if they don't want to chat, say less"
     },
     {
      "kind": "good",
      "text": "You look tired — hope everything's okay.",
      "reply": "Thanks. Long weekend. Tell you another time."
     },
     {
      "kind": "over",
      "text": "Sorry, sorry, did I say something wrong? I'm so sorry.",
      "why": "你没有做错什么，一再道歉反而让对方更累。",
      "whyEn": "You did nothing wrong; repeated apologies only add to his load."
     },
     {
      "kind": "over",
      "text": "Good morning, Mr Dan. How do you do?",
      "why": "把称呼和问候改得很正式，像第一次见面，没有必要。",
      "whyEn": "Making it very formal, as if you had just met, is unnecessary."
     }
    ],
    "features": [
     "这里不需要改说法",
     "可以看对方的状态少说一点，或者表示关心",
     "不把一次冷淡当成自己说错了，也不当成“他们都这样”"
    ],
    "featuresEn": [
     "Nothing here needs changing",
     "Read their mood: say less, or show concern",
     "Don't take one cool reply as your mistake or as “they're all like that”"
    ]
   }
  },
  {
   "id": "cv-details",
   "title": "简历上的照片和年龄",
   "titleEn": "Photo and age on a CV",
   "kcs": [
    "kt:en-skill-write-cv-cover"
   ],
   "people": {
    "a": {
     "name": "Sam",
     "role": "大学就业指导室的顾问",
     "roleEn": "A careers adviser at the university"
    },
    "b": {
     "name": "Mei",
     "role": "准备投简历的学生",
     "roleEn": "A student about to apply for a job"
    }
   },
   "rel": {
    "setting": "大学就业指导室",
    "settingEn": "The university careers office",
    "up": 1,
    "close": 0,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "Mei 请就业顾问 Sam 看她要投给 Northfield Studio（虚构的公司）的英文简历。",
     "narrEn": "Mei asks careers adviser Sam to look at the English CV she will send to Northfield Studio (a fictional company)."
    },
    {
     "who": "a",
     "text": "Thanks, Mei. Let's have a look at the top section."
    },
    {
     "who": "b",
     "text": "Mei Lin · Female · Age 23 · Single · Height 165 cm · [photo]"
    },
    {
     "who": "a",
     "text": "Hmm. For this job I'd take most of that out, actually."
    },
    {
     "who": "b",
     "text": "Why? Isn't more information better?"
    },
    {
     "who": "a",
     "text": "Some employers might even set it aside because of that."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "topic",
   "why": "在英国、美国等很多英语国家，招聘时不应因年龄、婚姻、性别、外貌筛选人，简历通常不写这些，也不放照片；写了，招聘方可能为了避免歧视嫌疑而不看。",
   "whyEn": "In many English-speaking countries such as the UK and the US, employers should not select by age, marital status, sex or looks, so CVs usually leave these out and have no photo; including them can make an employer set the CV aside to avoid any suggestion of bias.",
   "variant": "在一些国家和行业（比如演员、部分欧洲国家）放照片很常见；各地要求不同，投之前看招聘启事和当地习惯。",
   "variantEn": "In some countries and fields (acting, some European countries) a photo is normal; requirements vary, so check the job advert and local practice.",
   "inner": {
    "a": "这些信息和能不能做好工作无关，招聘方通常也不想看到，免得被说歧视。我希望她把作品放在最前面。",
    "aEn": "None of this shows whether she can do the job, and employers usually don't want it, to avoid any suggestion of bias. I'd rather her portfolio came first.",
    "b": "在国内投简历都要写这些，写全了显得认真。",
    "bEn": "Back home a CV includes all this; filling it in shows you are thorough."
   },
   "rewrite": {
    "line": 2,
    "purpose": "让招聘方看到自己是合适的人选",
    "purposeEn": "show the employer you are a good fit",
    "options": [
     {
      "kind": "good",
      "text": "Mei Lin · mei.lin@example.com · Portfolio: meilin-design.example",
      "reply": "Much better. Now your skills come first."
     },
     {
      "kind": "politeOnly",
      "text": "Dear Sir or Madam — Female · Age 23 · Single · Height 165 cm · [photo]",
      "why": "加了客套的称呼，敏感信息都还在。",
      "whyEn": "A polite greeting is added, but the personal details are all still there."
     },
     {
      "kind": "avoid",
      "act": "开头什么个人信息都不写，连联系方式也删掉",
      "actEn": "Leave out everything personal, contact details included",
      "why": "招聘方联系不上你。",
      "whyEn": "The employer cannot contact you."
     },
     {
      "kind": "other",
      "text": "MEI LIN · FEMALE · AGE 23 · SINGLE · [photo]",
      "why": "只改了格式，内容没变。",
      "whyEn": "Only the formatting changed, not the content."
     }
    ],
    "features": [
     "去掉年龄、婚姻、性别、身高和照片",
     "保留姓名和联系方式",
     "把最能证明能力的内容放在前面"
    ],
    "featuresEn": [
     "Removes age, marital status, sex, height and photo",
     "Keeps name and contact details",
     "Puts the strongest evidence of skill first"
    ]
   }
  },
  {
   "id": "come-over-sometime",
   "title": "“改天来吃饭”",
   "titleEn": "“Come over for dinner sometime”",
   "kcs": [
    "kt:en-soc-small-talk"
   ],
   "people": {
    "a": {
     "name": "Helen",
     "role": "住在同一栋楼的邻居",
     "roleEn": "A neighbour in the same building"
    },
    "b": {
     "name": "Hao",
     "role": "刚搬来的住户",
     "roleEn": "A new resident"
    }
   },
   "rel": {
    "setting": "公寓楼的楼道里，第一次见面",
    "settingEn": "The stairwell of a block of flats; first meeting",
    "up": 0,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "Hao 刚搬来，在楼道里第一次碰到邻居 Helen。",
     "narrEn": "Hao has just moved in and meets his neighbour Helen in the stairwell for the first time."
    },
    {
     "who": "a",
     "text": "Welcome to the building! You must come over for dinner sometime."
    },
    {
     "who": "b",
     "text": "Thank you! When? Is Saturday okay? What time?"
    },
    {
     "who": "a",
     "text": "Oh! Um — Saturday's… let me check and get back to you."
    },
    {
     "who": "n",
     "narr": "那一周 Helen 没再提起。Hao 不知道星期六还去不去。",
     "narrEn": "Helen didn't mention it again that week. Hao wasn't sure whether Saturday was on."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "implicature",
   "why": "在这里 come over sometime 是表示欢迎的友好话，还不是具体的邀请；真正的邀请通常会有具体时间。热情回应就好，等对方再提。",
   "whyEn": "Here come over sometime is a friendly welcome, not yet a real invitation; a real one usually comes with a time. Respond warmly and let them bring it up again.",
   "variant": "也有人说这句是认真的，过几天就会来约时间；对方再提起时，就可以定下来。",
   "variantEn": "Some people do mean it and will come back with a date in a few days; when they raise it again, you can fix a time.",
   "inner": {
    "a": "我是真心欢迎他，这句是友好的话，还没想好哪天。被追问日子和时间，有点措手不及。",
    "aEn": "I meant the welcome, but it was a friendly line; I hadn't planned a day. Being asked for a day and time caught me off guard.",
    "b": "她邀请我了，我得马上把时间定下来，不然显得不重视。",
    "bEn": "She invited me, so I should fix a time right away, or it looks like I don't care."
   },
   "rewrite": {
    "line": 2,
    "purpose": "热情回应邻居的欢迎",
    "purposeEn": "respond warmly to the welcome",
    "options": [
     {
      "kind": "good",
      "text": "Thank you, that's really kind! And let me know if you ever need anything.",
      "reply": "Will do. Lovely to meet you, Hao."
     },
     {
      "kind": "good",
      "text": "Oh, I'd love that! Thanks for the welcome.",
      "reply": "Any time. See you around!"
     },
     {
      "kind": "politeOnly",
      "text": "Thank you very much! Please tell me when — Saturday, please?",
      "why": "加了 please，还是在追问具体时间。",
      "whyEn": "Please is added, but it still presses for a date."
     },
     {
      "kind": "avoid",
      "act": "笑一笑，什么都不说就进门",
      "actEn": "Smile, say nothing and go inside",
      "why": "对方的欢迎没有得到回应。",
      "whyEn": "The welcome gets no response."
     },
     {
      "kind": "other",
      "text": "Thanks, Helen! When? Saturday?",
      "why": "加了名字，还是在追问时间。",
      "whyEn": "A name is added, but it still presses for a time."
     }
    ],
    "features": [
     "热情地谢谢对方",
     "不追问具体日期，等对方再提",
     "可以回一句同样友好的话"
    ],
    "featuresEn": [
     "Thanks them warmly",
     "Doesn't press for a date; lets them raise it",
     "Can add something equally friendly"
    ]
   }
  },
  {
   "id": "cookie",
   "title": "不吃饼干",
   "titleEn": "Saying no to a cookie",
   "kcs": [
    "kt:en-soc-politeness-basic"
   ],
   "people": {
    "a": {
     "name": "Lily",
     "role": "同学",
     "roleEn": "A classmate"
    },
    "b": {
     "name": "Arjun",
     "role": "新同学",
     "roleEn": "A new classmate"
    }
   },
   "rel": {
    "setting": "课间，教室里",
    "settingEn": "Break time, in the classroom",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "课间，Lily 拿出一袋饼干。",
     "narrEn": "At break, Lily takes out a bag of cookies."
    },
    {
     "who": "a",
     "text": "Do you want a cookie, Arjun?"
    },
    {
     "who": "b",
     "text": "No."
    },
    {
     "who": "a",
     "text": "Oh… okay."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "wording",
   "why": "只说 No，Lily 不知道为什么，会以为 Arjun 不喜欢她。可以说 No, thank you，再说原因。",
   "whyEn": "With just No, Lily doesn't know why and may think Arjun doesn't like her. Say No, thank you and give the reason.",
   "variant": "有的同学听到 No 也不在意；说上 thank you 和原因，大家都更舒服。",
   "variantEn": "Some children won't mind a plain No; with thank you and a reason, everyone feels better.",
   "inner": {
    "a": "他是不是不喜欢我？",
    "aEn": "Doesn't he like me?",
    "b": "我对坚果过敏，饼干里可能有坚果。我不是不喜欢 Lily。",
    "bEn": "I'm allergic to nuts and the cookies might have some. I do like Lily."
   },
   "rewrite": {
    "line": 2,
    "purpose": "不吃饼干，但让 Lily 知道你不是不喜欢她",
    "purposeEn": "say no to the cookie but let Lily know you still like her",
    "options": [
     {
      "kind": "good",
      "text": "No, thank you. I can't eat nuts.",
      "reply": "Oh! Do you want an apple slice instead?"
     },
     {
      "kind": "good",
      "text": "No, thanks, Lily. I'm allergic to nuts.",
      "reply": "Okay! I'll remember."
     },
     {
      "kind": "politeOnly",
      "text": "No, please.",
      "why": "加了 please，还是没有谢谢、没有原因，听起来也怪。",
      "whyEn": "Please is added, but there is still no thanks or reason, and it sounds odd."
     },
     {
      "kind": "avoid",
      "act": "什么也不说，走开",
      "actEn": "Say nothing and walk away",
      "why": "Lily 会更难过。",
      "whyEn": "Lily would feel worse."
     }
    ],
    "features": [
     "说 thank you",
     "说出原因（对坚果过敏）"
    ],
    "featuresEn": [
     "Says thank you",
     "Gives the reason (a nut allergy)"
    ]
   },
   "child": true
  }
 ],
 "review": [
  "salary-chat：问工资在英语职场闲谈里的冒险程度因国家、行业、年龄而不同",
  "would-you-mind：单说 Yes 是否真的会被理解成“介意”；Yes, sure 的理解",
  "call-me-rachel：Ms + 名 的用法（美国幼儿园常见）；英国学校的 Miss 不在本题",
  "cv-details：各国关于简历照片、年龄的习惯和法规只做了概括，投递前应查当地要求",
  "come-over-sometime：这句是客套还是真的邀请，因人而异；本题只是一种可能",
  "bus-stop、cookie：内心独白中的原因是虚构的",
  "所有 cat、rel 刻度和改写选项的 kind 是编写者判断，需要母语教师逐条核对"
 ],
 "reviewEn": [
  "salary-chat: how risky pay is as a topic varies by country, field and age",
  "would-you-mind: whether a bare Yes is really heard as “I mind”; how Yes, sure is heard",
  "call-me-rachel: Ms + first name (common in US pre-schools); the British school usage Miss is not covered",
  "cv-details: CV photo and age conventions and laws are only summarised; check local requirements before applying",
  "come-over-sometime: whether this is a ritual phrase or a real invitation varies; this is one possibility",
  "bus-stop, cookie: the reasons in the inner monologues are invented",
  "Every cat, relationship scale and rewrite kind is the author's judgement and needs checking item by item by a native-speaker teacher"
 ]
};
KT_DATA["culture-incident-ja"] = {
 "id": "culture-incident-ja",
 "lang": "ja",
 "speech": "ja-JP",
 "title": "文化情境判读（日语）",
 "titleEn": "Critical incidents (Japanese)",
 "subtitle": "读一段小误会，找出从哪一句开始不对劲，判断原因，再改写那一句。每件事只讲这两个人、这个场合。",
 "subtitleEn": "Read a small misunderstanding, find the line where it starts to go wrong, work out why, then rewrite that line. Each incident is about these two people in this setting.",
 "incidents": [
  {
   "id": "my-mother",
   "title": "对老师说“私のお母さん”",
   "titleEn": "Saying 私のお母さん to a teacher",
   "kcs": [
    "kt:ja-soc-uchi-soto"
   ],
   "people": {
    "a": {
     "name": "山本先生",
     "role": "指导教员",
     "roleEn": "Her supervisor"
    },
    "b": {
     "name": "陳",
     "role": "留学生",
     "roleEn": "An international student"
    }
   },
   "rel": {
    "setting": "大学研究室",
    "settingEn": "A university lab",
    "up": 2,
    "close": 1,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "研究室で、留学生の陳さんが指導教員の山本先生と話している。",
     "narrEn": "In the lab, Chen, an international student, is talking to her supervisor, Professor Yamamoto."
    },
    {
     "who": "b",
     "text": "先生、来週、私のお母さんが日本に来ます。"
    },
    {
     "who": "a",
     "text": "ああ、お母様が。それはよかったですね。"
    },
    {
     "who": "b",
     "text": "はい。お母さんは東京を見たいと言っています。"
    },
    {
     "who": "a",
     "text": "（少し笑って）そうですか。"
    }
   ],
   "problem": [
    1,
    3
   ],
   "react": 2,
   "cat": "register",
   "why": "对外人（老师、同事、客户）说自己的家人要用“母”“父”，不加さん；“お母さん”用来称呼对方的母亲，或在家里叫妈妈。成年人对老师说“私のお母さん”，听起来像小孩子。",
   "whyEn": "To outsiders (teachers, colleagues, clients) you refer to your own family as 母 and 父, without さん; お母さん is for someone else's mother, or for calling your mum at home. An adult saying 私のお母さん to a teacher sounds childlike.",
   "variant": "关系很近、气氛随便时，也有成年人说“うちのお母さん”；老师多半能理解，只是会觉得有点孩子气。",
   "variantEn": "In close, casual settings some adults do say うちのお母さん; the teacher will understand, but it sounds a little childish.",
   "inner": {
    "a": "她把自己的母亲叫“お母さん”，听起来像小孩子说话。我换成“お母様”回了一句，算是轻轻提醒。",
    "aEn": "She calls her own mother お母さん, which sounds like a child. I answered with お母様 as a gentle hint.",
    "b": "“お母さん”就是妈妈，很礼貌啊。老师为什么笑？",
    "bEn": "お母さん means mum, and it's polite. Why is the professor smiling?"
   },
   "rewrite": {
    "line": 1,
    "purpose": "告诉老师妈妈下周来日本",
    "purposeEn": "tell the professor your mother is coming next week",
    "options": [
     {
      "kind": "good",
      "text": "先生、来週、母が日本に来ます。",
      "reply": "そうですか。お母様と東京を回るんですか。"
     },
     {
      "kind": "good",
      "text": "先生、来週、母が中国から来るんです。",
      "reply": "それはいいですね。どこか案内するんですか。"
     },
     {
      "kind": "politeOnly",
      "text": "先生、すみませんが、来週、私のお母さんが日本に来られます。",
      "why": "加了すみません，还给自己的妈妈用了尊敬语“来られます”，更不对。",
      "whyEn": "すみません is added, and 来られます honours your own mother, which makes it worse."
     },
     {
      "kind": "avoid",
      "act": "不提妈妈要来的事",
      "actEn": "Don't mention your mother's visit",
      "why": "要说的事没说。",
      "whyEn": "What you meant to say goes unsaid."
     },
     {
      "kind": "other",
      "text": "山本さん、来週、私のお母さんが日本に来ます。",
      "why": "改的是对老师的称呼（而且更不合适），母亲的说法没改。",
      "whyEn": "It changes how you address the professor (for the worse), not how you refer to your mother."
     }
    ],
    "features": [
     "对外人说自己的母亲用“母”",
     "不加さん，也不给自己家人用尊敬语",
     "保留要说的事：下周来日本"
    ],
    "featuresEn": [
     "Uses 母 for your own mother when talking to an outsider",
     "No さん and no honorifics for your own family",
     "Keeps the message: she is coming next week"
    ]
   }
  },
  {
   "id": "chotto",
   "title": "“土曜日はちょっと……”",
   "titleEn": "“Saturday's a bit…”",
   "kcs": [
    "kt:ja-str-implicature",
    "kt:ja-accept-refuse-invitation"
   ],
   "people": {
    "a": {
     "name": "佐藤",
     "role": "同事",
     "roleEn": "A colleague"
    },
    "b": {
     "name": "王",
     "role": "同事",
     "roleEn": "A colleague"
    }
   },
   "rel": {
    "setting": "公司午休",
    "settingEn": "Lunch break at the office",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "会社の昼休み。王さんが同僚の佐藤さんを映画に誘う。",
     "narrEn": "Lunch break. Wang invites his colleague Sato to a film."
    },
    {
     "who": "b",
     "text": "佐藤さん、土曜日、一緒に映画を見に行きませんか。"
    },
    {
     "who": "a",
     "text": "土曜日ですか。土曜日はちょっと……"
    },
    {
     "who": "b",
     "text": "ちょっと、何ですか？じゃあ、日曜日はどうですか。"
    },
    {
     "who": "a",
     "text": "日曜日も、ちょっと……。また今度。"
    }
   ],
   "problem": [
    3
   ],
   "react": 4,
   "cat": "implicature",
   "why": "“土曜日はちょっと……”后面省掉的是“不方便”，已经是拒绝了。追问理由会让对方为难；可以说“そうですか、じゃあ、また今度”，把下次留给对方提。",
   "whyEn": "土曜日はちょっと…… leaves out “isn't convenient”: it is already a no. Asking why puts the other person on the spot; say そうですか、じゃあ、また今度 and leave the next time to them.",
   "variant": "也有人说“ちょっと……”是真的在想时间，接着会说“日曜日なら大丈夫です”；对方主动提出别的日子时，就可以接着约。",
   "variantEn": "Some people do say ちょっと…… while thinking and then offer 日曜日なら大丈夫です; when they suggest another day themselves, go ahead and fix it.",
   "inner": {
    "a": "我说“ちょっと……”就是去不了，不想说理由。被追问，又被约星期天，只好再拒绝一次，有点累。",
    "aEn": "ちょっと…… meant I can't go, and I didn't want to explain. Being pressed and then asked about Sunday meant refusing again, which was tiring.",
    "b": "“ちょっと”是“一点”吧？话没说完，我得问清楚。星期六不行，星期天总可以。",
    "bEn": "Doesn't ちょっと mean “a little”? The sentence wasn't finished, so I should ask. If Saturday's no good, Sunday must be."
   },
   "rewrite": {
    "line": 3,
    "purpose": "回应对方，保持关系，把下次的机会留着",
    "purposeEn": "respond, keep things friendly and leave the door open",
    "options": [
     {
      "kind": "good",
      "text": "そうですか。じゃあ、また今度。",
      "reply": "はい、また誘ってください。"
     },
     {
      "kind": "good",
      "text": "あ、そうですか。じゃあ、また時間があるときに。",
      "reply": "ありがとうございます。ぜひ。"
     },
     {
      "kind": "politeOnly",
      "text": "すみません、ちょっと、何ですか？日曜日はいかがでしょうか。",
      "why": "加了すみません、换成いかがでしょうか，还是在追问、再约。",
      "whyEn": "すみません and いかがでしょうか are added, but you still press and re-invite."
     },
     {
      "kind": "avoid",
      "act": "不说话，转身走开",
      "actEn": "Say nothing and turn away",
      "why": "冷场了，关系受影响。",
      "whyEn": "An awkward silence that hurts the relationship."
     },
     {
      "kind": "other",
      "text": "佐藤様、ちょっと、何ですか？",
      "why": "改了称呼（还用了对同事不合适的様），追问没改。",
      "whyEn": "The form of address changes (to 様, odd for a colleague), but the pressing doesn't."
     }
    ],
    "features": [
     "接受对方的拒绝，不问理由",
     "不马上换个日子再约",
     "用“また今度”之类留个以后的机会"
    ],
    "featuresEn": [
     "Accepts the no without asking why",
     "Doesn't immediately suggest another day",
     "Leaves a future chance with また今度 or similar"
    ]
   }
  },
  {
   "id": "weather",
   "title": "“今日も暑いですね”",
   "titleEn": "“Hot again today, isn't it?”",
   "kcs": [
    "kt:ja-fn-weather-talk"
   ],
   "people": {
    "a": {
     "name": "小林",
     "role": "住在隔壁的邻居",
     "roleEn": "The next-door neighbour"
    },
    "b": {
     "name": "張",
     "role": "邻居",
     "roleEn": "A neighbour"
    }
   },
   "rel": {
    "setting": "早上，公寓的电梯里",
    "settingEn": "Morning, in the lift of a block of flats",
    "up": 0,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "朝、マンションのエレベーターで、隣の部屋の小林さんに会った。",
     "narrEn": "Morning. In the lift, Zhang meets Kobayashi from next door."
    },
    {
     "who": "a",
     "text": "おはようございます。今日も暑いですね。"
    },
    {
     "who": "b",
     "text": "いいえ、今日は二十八度です。昨日は三十一度でしたから、今日のほうが涼しいです。"
    },
    {
     "who": "a",
     "text": "あ……そうですか。"
    },
    {
     "who": "n",
     "narr": "エレベーターの中は、しばらく静かだった。",
     "narrEn": "The lift stayed quiet for a while."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "implicature",
   "why": "邻居之间的天气话多是寒暄，不是在讨论气温；用“そうですね”“暑いですね”接一句就好，哪怕你觉得没那么热。",
   "whyEn": "Weather talk between neighbours is mostly a greeting, not a discussion of temperatures; reply with そうですね or 暑いですね, even if you don't find it that hot.",
   "variant": "熟一点的人也会说“でも、昨日よりはましですね”接着聊；问题不在于不同意，而在于把寒暄当成要纠正的信息。",
   "variantEn": "People who know each other may say でも、昨日よりはましですね and chat on; the problem isn't disagreeing, it's treating a greeting as a claim to correct.",
   "inner": {
    "a": "“今日も暑いですね”只是打个招呼，等对方说一句“そうですね”就好。被纠正温度，我不知道怎么接。",
    "aEn": "今日も暑いですね was just a greeting; I expected そうですね. Being corrected on the temperature left me with nothing to say.",
    "b": "她说暑い，可是今天比昨天凉快，我告诉她准确的信息。",
    "bEn": "She said it was hot, but today is cooler than yesterday, so I gave her the facts."
   },
   "rewrite": {
    "line": 2,
    "purpose": "回应邻居的招呼",
    "purposeEn": "respond to the neighbour's greeting",
    "options": [
     {
      "kind": "good",
      "text": "おはようございます。本当に、暑いですね。",
      "reply": "ねえ。お水、たくさん飲まないとね。"
     },
     {
      "kind": "good",
      "text": "そうですね。でも、昨日よりは少しましですね。",
      "reply": "あ、そうですね。風もありますしね。"
     },
     {
      "kind": "politeOnly",
      "text": "すみません、いいえ、今日は二十八度でございます。",
      "why": "加了すみません、でございます，还是在纠正温度。",
      "whyEn": "すみません and でございます are added, but it still corrects the temperature."
     },
     {
      "kind": "avoid",
      "act": "看手机，不回答",
      "actEn": "Look at your phone and don't reply",
      "why": "招呼没有得到回应。",
      "whyEn": "The greeting gets no response."
     },
     {
      "kind": "other",
      "text": "小林様、いいえ、今日は二十八度です。",
      "why": "改了称呼，纠正温度的问题还在。",
      "whyEn": "The address changes; the correcting doesn't."
     }
    ],
    "features": [
     "先用“そうですね”或重复对方的话接住寒暄",
     "不纠正、不报数据",
     "想多聊可以再加一句轻松的话"
    ],
    "featuresEn": [
     "Takes up the greeting with そうですね or by echoing it",
     "No correcting, no figures",
     "Adds something light if you want to chat"
    ]
   }
  },
  {
   "id": "plain-to-boss",
   "title": "对课长用普通体",
   "titleEn": "Plain style to a section chief",
   "kcs": [
    "kt:ja-style-awareness"
   ],
   "people": {
    "a": {
     "name": "木村課長",
     "role": "课长，比刘大几岁，很随和",
     "roleEn": "The section chief, a few years older than Liu, easy-going"
    },
    "b": {
     "name": "劉",
     "role": "新员工",
     "roleEn": "A new employee"
    }
   },
   "rel": {
    "setting": "办公室，旁边还有别的同事",
    "settingEn": "The office, with other colleagues nearby",
    "up": 1,
    "close": 1,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "職場。木村課長は劉さんより少し年上で、気さくな人だ。",
     "narrEn": "At work. Section chief Kimura is a little older than Liu and easy-going."
    },
    {
     "who": "a",
     "text": "劉さん、この資料、明日までにまとめてもらえる？"
    },
    {
     "who": "b",
     "text": "うん、わかった。明日までね。"
    },
    {
     "who": "a",
     "text": "……うん。よろしくね。"
    },
    {
     "who": "n",
     "narr": "あとで、先輩がそっと声をかけた。「課長には『はい、わかりました』のほうがいいよ。」",
     "narrEn": "Later a senior colleague quietly said: “With the chief, はい、わかりました is better.”"
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "register",
   "why": "上司用普通体说话，不等于下属也可以用普通体。语体看双方的关系：回答上司一般用です・ます，至少说“はい、わかりました”。",
   "whyEn": "A boss speaking in plain style does not mean you can answer in plain style. Style follows the relationship: answer a boss with です・ます, at least はい、わかりました.",
   "variant": "有的公司、有的上司真的不在意，私下吃饭时也可能随便一些；在工作场合，尤其有别人在的时候，用です・ます比较稳妥。",
   "variantEn": "In some workplaces, with some bosses, it really doesn't matter, and things may be looser over dinner; at work, especially with others around, です・ます is the safe choice.",
   "inner": {
    "a": "我对下属说话随便，是想让大家放松；可下属用“うん、わかった”回我，在同事面前听着有点没分寸。",
    "aEn": "I talk casually so people can relax; but うん、わかった from a junior, in front of others, feels a bit out of line.",
    "b": "课长跟我说普通体，我也用普通体回答，显得亲近。",
    "bEn": "The chief used plain style with me, so I answered the same way to sound friendly."
   },
   "rewrite": {
    "line": 2,
    "purpose": "答应明天前整理好资料",
    "purposeEn": "agree to have the material ready by tomorrow",
    "options": [
     {
      "kind": "good",
      "text": "はい、わかりました。明日までにまとめます。",
      "reply": "ありがとう、助かる。"
     },
     {
      "kind": "good",
      "text": "はい、承知しました。",
      "reply": "よろしくね。"
     },
     {
      "kind": "politeOnly",
      "text": "すみません、うん、わかった。明日までね。",
      "why": "加了すみません，语体还是普通体。",
      "whyEn": "すみません is added; the style is still plain."
     },
     {
      "kind": "avoid",
      "act": "点点头，不说话",
      "actEn": "Nod and say nothing",
      "why": "课长不确定你是不是答应了。",
      "whyEn": "The chief can't be sure you agreed."
     },
     {
      "kind": "other",
      "text": "うん、わかった、木村課長。",
      "why": "加了称呼，语体没改。",
      "whyEn": "A title is added; the style is unchanged."
     }
    ],
    "features": [
     "回答上司用です・ます（はい、わかりました）",
     "明确答应，说出“明天之前”",
     "不必用很重的敬语"
    ],
    "featuresEn": [
     "Answers a boss with です・ます (はい、わかりました)",
     "A clear yes, with “by tomorrow”",
     "No need for heavy honorifics"
    ]
   }
  },
  {
   "id": "gift-price",
   "title": "送礼时说价钱",
   "titleEn": "Mentioning the price of a gift",
   "kcs": [
    "kt:ja-fn-gifts",
    "kt:ja-soc-manners"
   ],
   "people": {
    "a": {
     "name": "鈴木",
     "role": "寄宿家庭的妈妈",
     "roleEn": "The host mother"
    },
    "b": {
     "name": "李",
     "role": "以前寄宿过的留学生",
     "roleEn": "A student who used to stay with her"
    }
   },
   "rel": {
    "setting": "寄宿家庭的家里",
    "settingEn": "The host family's home",
    "up": 1,
    "close": 1,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "留学生の李さんが、お世話になったホストファミリーの鈴木さんの家に、お礼の品を持ってきた。",
     "narrEn": "Li, an international student, brings a thank-you gift to Mrs Suzuki, her former host mother."
    },
    {
     "who": "b",
     "text": "これ、どうぞ。中国のお茶です。"
    },
    {
     "who": "a",
     "text": "まあ、ありがとうございます。"
    },
    {
     "who": "b",
     "text": "とても高いお茶ですよ。一つ五千円です。"
    },
    {
     "who": "a",
     "text": "え……そんな、悪いですね……。"
    }
   ],
   "problem": [
    3
   ],
   "react": 4,
   "cat": "topic",
   "why": "送礼时说出价钱、强调贵，会让对方觉得要还一份差不多的礼，变成负担。可以说是家乡的东西、自己喜欢的东西，或者“ほんの気持ちです”。",
   "whyEn": "Stating the price or stressing that a gift is expensive makes the receiver feel they owe something of equal value. Say it is from your home town, something you like, or ほんの気持ちです.",
   "variant": "也有人会轻松地问一句“高かったでしょう”，熟人之间提一句也不一定失礼；但主动报价钱，大多数场合不太合适。",
   "variantEn": "Some people will lightly say 高かったでしょう, and between close friends a mention is not always rude; but volunteering the price rarely fits.",
   "inner": {
    "a": "收到礼物很高兴，可一听这么贵，觉得欠了很大的人情，下次得回一份差不多的，心里有点负担。",
    "aEn": "I was happy to get it, but hearing the price made me feel I owe her something just as expensive. It's a weight.",
    "b": "我想让她知道我很重视这份感谢，所以特意买了好茶。",
    "bEn": "I wanted her to know how grateful I am, so I bought good tea on purpose."
   },
   "rewrite": {
    "line": 3,
    "purpose": "让对方知道这是用心挑的",
    "purposeEn": "let her know you chose it with care",
    "options": [
     {
      "kind": "good",
      "text": "私の故郷のお茶で、私が一番好きなお茶なんです。",
      "reply": "まあ、うれしい。大事にいただきますね。"
     },
     {
      "kind": "good",
      "text": "ほんの気持ちです。いつもありがとうございます。",
      "reply": "こちらこそ。ありがとうございます。"
     },
     {
      "kind": "politeOnly",
      "text": "すみません、とても高いお茶でございます。一つ五千円です。",
      "why": "换成了でございます，价钱还在说。",
      "whyEn": "でございます is used, but the price is still stated."
     },
     {
      "kind": "avoid",
      "act": "什么都不说，把茶放下就走",
      "actEn": "Say nothing, put the tea down and leave",
      "why": "礼物的心意没有说出来。",
      "whyEn": "The thought behind the gift goes unsaid."
     },
     {
      "kind": "other",
      "text": "鈴木様、とても高いお茶ですよ。",
      "why": "改了称呼，还在强调贵。",
      "whyEn": "The address changes; the stress on cost doesn't."
     }
    ],
    "features": [
     "不说价钱、不强调贵",
     "说出这份礼物的心意或来历",
     "可以加一句感谢"
    ],
    "featuresEn": [
     "No price, no stress on cost",
     "Says where it comes from or what it means to you",
     "Can add a thank-you"
    ]
   }
  },
  {
   "id": "allergy",
   "title": "“好きじゃないです”",
   "titleEn": "“I don't like it”",
   "kcs": [
    "kt:ja-fn-restaurant-needs"
   ],
   "people": {
    "a": {
     "name": "中村",
     "role": "前辈同事",
     "roleEn": "A senior colleague"
    },
    "b": {
     "name": "リン",
     "role": "新员工",
     "roleEn": "A new employee"
    }
   },
   "rel": {
    "setting": "公司的欢迎会，居酒屋",
    "settingEn": "A welcome party at an izakaya",
    "up": 1,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "会社の歓迎会。居酒屋で、先輩の中村さんが料理を取り分けてくれる。",
     "narrEn": "A welcome party at an izakaya. Nakamura, a senior colleague, is serving food."
    },
    {
     "who": "a",
     "text": "リンさん、このエビフライ、おいしいよ。どうぞ。"
    },
    {
     "who": "b",
     "text": "あ、私はエビが好きじゃないです。"
    },
    {
     "who": "a",
     "text": "そう？ちょっとだけでも食べてみて。おいしいから。"
    },
    {
     "who": "n",
     "narr": "リンさんは困ってしまった。",
     "narrEn": "Lin didn't know what to do."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "wording",
   "why": "“好きじゃない”说的是口味，对方会以为可以劝你尝一点；不能吃要说清楚：“エビアレルギーがあるので、食べられないんです”。",
   "whyEn": "好きじゃない is about taste, so the other person may think it's fine to coax you; if you can't eat it, say so: エビアレルギーがあるので、食べられないんです.",
   "variant": "知道你过敏后，大多数人会马上不再劝，还会帮你看别的菜里有没有虾。",
   "variantEn": "Once they know it's an allergy, most people stop at once and even check other dishes for prawns.",
   "inner": {
    "a": "我以为她只是不喜欢，想让她尝一点，说不定会喜欢。",
    "aEn": "I thought she just didn't like it, and that if she tried a bit she might.",
    "b": "我对虾过敏，吃了会起疹子。我已经说了不吃，为什么还让我吃？",
    "bEn": "I'm allergic to prawns; they give me a rash. I said no, so why push me?"
   },
   "rewrite": {
    "line": 2,
    "purpose": "不吃虾，并让对方明白为什么",
    "purposeEn": "decline the prawns and make the reason clear",
    "options": [
     {
      "kind": "good",
      "text": "すみません、エビアレルギーがあるので、食べられないんです。",
      "reply": "あ、そうなんだ！じゃあ、これは大丈夫？エビ、入ってないよ。"
     },
     {
      "kind": "good",
      "text": "ありがとうございます。でも、エビはアレルギーで食べられないんです。",
      "reply": "そうか、ごめんね。気をつけるね。"
     },
     {
      "kind": "politeOnly",
      "text": "すみません、私はエビがあまり好きじゃないです。",
      "why": "加了すみません，说的还是“不喜欢”。",
      "whyEn": "すみません is added, but it still says “don't like”."
     },
     {
      "kind": "avoid",
      "act": "接过来放在盘子边上，不吃也不说",
      "actEn": "Take it, leave it on the side, say nothing",
      "why": "对方不知道原因，可能还会再劝。",
      "whyEn": "They don't know why and may coax you again."
     },
     {
      "kind": "other",
      "text": "中村さん、エビ、好きじゃないです。",
      "why": "加了称呼，还是“不喜欢”。",
      "whyEn": "A name is added; it is still “don't like”."
     }
    ],
    "features": [
     "说清楚是“不能吃”（アレルギー），不是不喜欢",
     "说出原因",
     "可以先道谢或说すみません，接住对方的好意"
    ],
    "featuresEn": [
     "Says you can't eat it (an allergy), not that you dislike it",
     "Gives the reason",
     "Can thank them first, acknowledging the kindness"
    ]
   }
  },
  {
   "id": "no-reply",
   "title": "邻居没回招呼",
   "titleEn": "A neighbour who didn't say good morning",
   "kcs": [
    "kt:ja-soc-manners"
   ],
   "people": {
    "a": {
     "name": "住户",
     "role": "同一栋楼的年轻人",
     "roleEn": "A young man from the same building"
    },
    "b": {
     "name": "周",
     "role": "住户",
     "roleEn": "A resident"
    }
   },
   "rel": {
    "setting": "早上，公寓的垃圾站",
    "settingEn": "Morning, at the building's rubbish point",
    "up": 0,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "朝、ゴミを出しに行ったら、同じマンションの若い男の人とすれ違った。",
     "narrEn": "Taking out the rubbish in the morning, Zhou passes a young man from the same building."
    },
    {
     "who": "b",
     "text": "おはようございます。"
    },
    {
     "who": "a",
     "text": "……"
    },
    {
     "who": "n",
     "narr": "男の人は、そのまま歩いていった。",
     "narrEn": "The man walks on without a word."
    }
   ],
   "problem": [
    2
   ],
   "react": 2,
   "cat": "none",
   "why": "对方没回应，不一定是不礼貌，也不一定是因为你是外国人：这次他戴着耳机，根本没听见。一次没回应说明不了什么。",
   "whyEn": "No reply doesn't have to mean rudeness, or that it's because you're foreign: this time he had earphones in and didn't hear. One missed greeting proves nothing.",
   "variant": "也有住户确实不太和邻居打招呼，各家习惯不同；下次照常打招呼就好。",
   "variantEn": "Some residents really don't greet neighbours much; habits differ from person to person. Just greet as usual next time.",
   "inner": {
    "a": "（戴着耳机在听广播，根本没听到有人打招呼。）",
    "aEn": "(Listening to the radio on earphones; didn't hear anything.)",
    "b": "是不是这里的人不喜欢外国人？以后还要不要打招呼？",
    "bEn": "Do people here not like foreigners? Should I stop saying hello?"
   },
   "rewrite": {
    "line": 1,
    "purpose": "和邻居打招呼",
    "purposeEn": "greet the neighbour",
    "options": [
     {
      "kind": "good",
      "act": "不用改：下次见面照样打招呼",
      "actEn": "No change: greet him again next time"
     },
     {
      "kind": "over",
      "text": "すみません！おはようございます！聞こえましたか？",
      "why": "追上去大声确认，没有必要，反而尴尬。",
      "whyEn": "Chasing him to check is unnecessary and awkward."
     },
     {
      "kind": "avoid",
      "act": "以后不再跟这栋楼的人打招呼",
      "actEn": "Stop greeting people in the building",
      "why": "因为一次没回应就不打招呼，反而会让关系变冷。",
      "whyEn": "Giving up after one missed reply would cool things for real."
     },
     {
      "kind": "over",
      "text": "おはようございます。私は中国から来た周と申します。どうぞよろしくお願いいたします。",
      "why": "擦肩而过时做正式的自我介绍，太重了。",
      "whyEn": "A formal self-introduction while passing by is too much."
     }
    ],
    "features": [
     "这里不需要改说法",
     "打招呼没有错，下次照常",
     "不把一次没回应当成“他们都这样”"
    ],
    "featuresEn": [
     "Nothing here needs changing",
     "The greeting was right; do it again next time",
     "Don't read one missed reply as “they're all like that”"
    ]
   }
  },
  {
   "id": "eraser",
   "title": "还橡皮",
   "titleEn": "Giving back an eraser",
   "kcs": [
    "kt:ja-soc-manners"
   ],
   "people": {
    "a": {
     "name": "ゆうと",
     "role": "同学",
     "roleEn": "A classmate"
    },
    "b": {
     "name": "ミン",
     "role": "同学",
     "roleEn": "A classmate"
    }
   },
   "rel": {
    "setting": "教室里",
    "settingEn": "In the classroom",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "b",
     "text": "ゆうとくん、消しゴム、貸して。"
    },
    {
     "who": "a",
     "text": "いいよ。はい。"
    },
    {
     "who": "n",
     "narr": "授業が終わって、ミンさんは消しゴムをゆうとくんの机にぽんと置いた。",
     "narrEn": "After class, Min drops the eraser on Yuto's desk."
    },
    {
     "who": "b",
     "text": "はい。"
    },
    {
     "who": "a",
     "text": "……"
    }
   ],
   "problem": [
    3
   ],
   "react": 4,
   "cat": "wording",
   "why": "借东西还回去的时候，要说“ありがとう”。只说“はい”，ゆうと会觉得你不领情。",
   "whyEn": "When you give back something you borrowed, say ありがとう. With only はい, Yuto may feel you aren't grateful.",
   "variant": "有的同学不在意；说一声谢谢，大家都更开心。",
   "variantEn": "Some children won't mind; saying thanks makes everyone happier.",
   "inner": {
    "a": "借给她了，还回来时连“谢谢”都没说，有点不开心。",
    "aEn": "I lent it to her, and she didn't even say thanks. I'm a bit upset.",
    "b": "我还给他了呀。",
    "bEn": "But I gave it back."
   },
   "rewrite": {
    "line": 3,
    "purpose": "把橡皮还给ゆうと",
    "purposeEn": "give the eraser back to Yuto",
    "options": [
     {
      "kind": "good",
      "text": "ありがとう！",
      "reply": "どういたしまして。"
     },
     {
      "kind": "good",
      "text": "消しゴム、ありがとう。",
      "reply": "うん、またいつでもね。"
     },
     {
      "kind": "politeOnly",
      "text": "はい、どうぞ。",
      "why": "“どうぞ”是给别人东西时说的，还是没说谢谢。",
      "whyEn": "どうぞ is for offering something; there's still no thank-you."
     },
     {
      "kind": "avoid",
      "act": "放在桌上就跑开",
      "actEn": "Put it on the desk and run off",
      "why": "ゆうと还是不知道你很感谢。",
      "whyEn": "Yuto still doesn't know you're grateful."
     }
    ],
    "features": [
     "说“ありがとう”",
     "把橡皮还给对方"
    ],
    "featuresEn": [
     "Says ありがとう",
     "Gives the eraser back"
    ]
   },
   "child": true
  }
 ],
 "review": [
  "my-mother：成年人说“うちのお母さん”的接受程度",
  "chotto：“ちょっと……”有时只是在想，归为拒绝可能有争议",
  "weather：用“昨日よりはましですね”接话是否自然",
  "plain-to-boss：对年轻、随和的上司用普通体的接受度因公司而异",
  "gift-price：“ほんの気持ちです”“つまらないものですが”等送礼套话在年轻人中的使用情况",
  "allergy：エビフライ劝人尝一点是否典型；“エビアレルギー”的说法",
  "所有 cat、rel 刻度和改写选项的 kind 是编写者判断，需要母语教师逐条核对"
 ],
 "reviewEn": [
  "my-mother: how acceptable うちのお母さん is from adults",
  "chotto: ちょっと…… is sometimes just thinking; classing it as a refusal may be disputed",
  "weather: whether 昨日よりはましですね is a natural reply",
  "plain-to-boss: whether plain style to a young, easy-going boss is accepted varies by workplace",
  "gift-price: how much younger people still use ほんの気持ちです / つまらないものですが",
  "allergy: whether coaxing someone to try a prawn is typical; the phrase エビアレルギー",
  "Every cat, relationship scale and rewrite kind is the author's judgement and needs checking item by item by a native-speaker teacher"
 ]
};
KT_DATA["culture-incident-zh"] = {
 "id": "culture-incident-zh",
 "lang": "zh",
 "speech": "zh-CN",
 "title": "文化情境判读（汉语）",
 "titleEn": "Critical incidents (Mandarin)",
 "subtitle": "读一段小误会，找出从哪一句开始不对劲，判断原因，再改写那一句。每件事只讲这两个人、这个场合。",
 "subtitleEn": "Read a small misunderstanding, find the line where it starts to go wrong, work out why, then rewrite that line. Each incident is about these two people in this setting.",
 "incidents": [
  {
   "id": "gaitian",
   "title": "“改天请你吃饭”",
   "titleEn": "“I'll treat you to dinner some day”",
   "kcs": [
    "kt:zh-str-implicature"
   ],
   "people": {
    "a": {
     "name": "小周",
     "role": "同事",
     "roleEn": "A colleague"
    },
    "b": {
     "name": "马克",
     "role": "同事",
     "roleEn": "A colleague"
    }
   },
   "rel": {
    "setting": "帮同事搬完家",
    "settingEn": "After helping a colleague move house",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "马克帮同事小周搬了家。搬完以后：",
     "narrEn": "Mark has helped his colleague Xiao Zhou move house. Afterwards:"
    },
    {
     "who": "a",
     "text": "今天太谢谢你了！改天请你吃饭。"
    },
    {
     "who": "b",
     "text": "好啊！哪天？明天晚上可以吗？几点？在哪儿？"
    },
    {
     "who": "a",
     "text": "啊……明天啊……明天我得收拾东西，我们再约吧。"
    },
    {
     "who": "n",
     "narr": "后来小周一直没再提，马克有点失望。",
     "narrEn": "Xiao Zhou never mentioned it again, and Mark felt let down."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "implicature",
   "why": "“改天请你吃饭”在这里主要是表示感谢，还不是具体的约定。可以先接受谢意，比如“不客气，应该的”；如果对方真想请，会再来约时间。",
   "whyEn": "Here 改天请你吃饭 mainly expresses thanks; it is not yet a firm plan. Accept the thanks first, e.g. 不客气，应该的; if they really want to treat you, they'll come back with a time.",
   "variant": "也有人说了就会真的约，过几天会问你哪天有空，这时就可以定时间；熟朋友之间也可以开玩笑说“那我等着啊”。",
   "variantEn": "Some people do follow up and ask when you're free, and then you can fix a time; between good friends you can joke 那我等着啊.",
   "inner": {
    "a": "我是真心感谢他，“改天请你吃饭”是在表示谢意，还没想好哪天。被一连问几个问题，有点措手不及。",
    "aEn": "I really am grateful; 改天请你吃饭 was my way of saying thanks, and I hadn't picked a day. Being hit with questions caught me off guard.",
    "b": "他请我吃饭，我得把时间定下来，不然就忘了。",
    "bEn": "He's inviting me, so I should fix the time or it'll be forgotten."
   },
   "rewrite": {
    "line": 2,
    "purpose": "回应小周的感谢",
    "purposeEn": "respond to Xiao Zhou's thanks",
    "options": [
     {
      "kind": "good",
      "text": "不客气，应该的！你先好好收拾吧。",
      "reply": "好，那改天见！"
     },
     {
      "kind": "good",
      "text": "哈哈，好啊，那我等着！不着急。",
      "reply": "一定一定！"
     },
     {
      "kind": "politeOnly",
      "text": "不好意思，请问是哪天？明天晚上可以吗？",
      "why": "加了“不好意思”“请问”，还是在追问时间。",
      "whyEn": "不好意思 and 请问 are added, but it still presses for a time."
     },
     {
      "kind": "avoid",
      "act": "什么也不说，转身就走",
      "actEn": "Say nothing and leave",
      "why": "对方的感谢没有得到回应。",
      "whyEn": "The thanks get no response."
     },
     {
      "kind": "other",
      "text": "周先生，哪天？明天晚上可以吗？",
      "why": "改了称呼（对同事叫“周先生”也太正式），还是在追问。",
      "whyEn": "The address changes (周先生 is too formal for a colleague); the pressing doesn't."
     }
    ],
    "features": [
     "先接受对方的谢意",
     "不追问具体时间",
     "可以轻松地留个以后的机会"
    ],
    "featuresEn": [
     "Accepts the thanks first",
     "Doesn't press for a time",
     "Can lightly leave the door open"
    ]
   }
  },
  {
   "id": "compliment",
   "title": "被夸中文说得好",
   "titleEn": "Being praised for your Chinese",
   "kcs": [
    "kt:zh-soc-face-modesty"
   ],
   "people": {
    "a": {
     "name": "林阿姨",
     "role": "朋友的妈妈",
     "roleEn": "A friend's mother"
    },
    "b": {
     "name": "安娜",
     "role": "第一次来做客的留学生",
     "roleEn": "A student visiting for the first time"
    }
   },
   "rel": {
    "setting": "朋友家里，吃饭前",
    "settingEn": "A friend's home, before dinner",
    "up": 1,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "安娜第一次去中国朋友小林家做客，林阿姨在厨房做饭。",
     "narrEn": "Anna is visiting her friend Xiao Lin's home for the first time. Xiao Lin's mother is cooking."
    },
    {
     "who": "a",
     "text": "安娜，你中文说得真好啊！"
    },
    {
     "who": "b",
     "text": "对，我说得很好。我们班我说得最好，HSK 五级我考了很高的分。"
    },
    {
     "who": "a",
     "text": "哦……是吗，真厉害。"
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "implicature",
   "why": "“你中文说得真好”常常是客气的鼓励，让客人放松，不一定是在评价水平。回应一般谦虚一点，或者简单说谢谢；接着自夸、跟别人比，会让对方不知道怎么接。",
   "whyEn": "你中文说得真好 is often a friendly encouragement to put a guest at ease, not an assessment. A modest reply or a simple thank-you fits; going on to boast and compare yourself with others leaves them with nothing to say.",
   "variant": "现在很多年轻人被夸也直接说“谢谢”，完全没问题；“哪里哪里”有些人觉得有点老派。问题不在于说谢谢，而在于自夸。",
   "variantEn": "Many young people now just say 谢谢, which is perfectly fine, and some find 哪里哪里 old-fashioned. The issue is not thanking but boasting.",
   "inner": {
    "a": "我只是想夸夸她，让她放松一点。她一下子说了这么多自己多厉害，我有点不知道怎么接。",
    "aEn": "I just wanted to say something nice and help her relax. When she listed how good she is, I didn't know how to answer.",
    "b": "她夸我，我就告诉她我真的学得很好，这样她会更放心跟我说话。",
    "bEn": "She praised me, so I told her I really am good; then she'll feel easy talking to me."
   },
   "rewrite": {
    "line": 2,
    "purpose": "回应林阿姨的夸奖",
    "purposeEn": "respond to the compliment",
    "options": [
     {
      "kind": "good",
      "text": "哪里哪里，还差得远呢。",
      "reply": "真的说得很好！来，尝尝这个。"
     },
     {
      "kind": "good",
      "text": "谢谢阿姨！我还在学呢。",
      "reply": "慢慢来，已经很好了。"
     },
     {
      "kind": "politeOnly",
      "text": "谢谢您。对，我说得很好，我们班我说得最好。",
      "why": "加了“谢谢您”，后面还是在自夸。",
      "whyEn": "谢谢您 is added, but the boasting follows."
     },
     {
      "kind": "avoid",
      "act": "不回答，低头玩手机",
      "actEn": "Don't answer; look at your phone",
      "why": "对方的好意没有回应。",
      "whyEn": "The kindness gets no response."
     },
     {
      "kind": "other",
      "text": "林女士，对，我说得很好。",
      "why": "改了称呼（在家里叫“林女士”太正式），自夸还在。",
      "whyEn": "The address changes (林女士 is too formal at home); the boasting stays."
     }
    ],
    "features": [
     "谢谢或谦虚一下（谢谢、哪里哪里、还差得远）",
     "不自夸，不跟别人比",
     "可以顺着话题聊下去"
    ],
    "featuresEn": [
     "Thanks or a modest reply (谢谢, 哪里哪里, 还差得远)",
     "No boasting or comparing",
     "Can carry the conversation on"
    ]
   }
  },
  {
   "id": "qingming",
   "title": "“清明节快乐”",
   "titleEn": "“Happy Qingming!”",
   "kcs": [
    "kt:zh-soc-culture-customs"
   ],
   "people": {
    "a": {
     "name": "小王",
     "role": "中国朋友",
     "roleEn": "A Chinese friend"
    },
    "b": {
     "name": "大卫",
     "role": "留学生",
     "roleEn": "An international student"
    }
   },
   "rel": {
    "setting": "给朋友发消息",
    "settingEn": "Messaging a friend",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "四月初，大卫给朋友小王发了一条消息。",
     "narrEn": "Early April. David sends his friend Xiao Wang a message."
    },
    {
     "who": "b",
     "text": "小王，清明节快乐！放假去哪儿玩？"
    },
    {
     "who": "a",
     "text": "哈哈……谢谢。我回老家扫墓。"
    },
    {
     "who": "b",
     "text": "扫墓？"
    }
   ],
   "problem": [
    1
   ],
   "react": 2,
   "cat": "wording",
   "why": "清明节是扫墓、纪念去世亲人的节日，一般不说“快乐”。可以问“清明放假有什么安排？”，也有人说“清明安康”。",
   "whyEn": "Qingming is for tending graves and remembering family who have died, so 快乐 is not usually said. Ask 清明放假有什么安排？; some people say 清明安康.",
   "variant": "现在不少年轻人清明放假也会出去玩，有人对“清明节快乐”只是一笑而过；但对要去扫墓的人，还是别说“快乐”。",
   "variantEn": "Many young people also travel over the Qingming holiday, and some just laugh off 清明节快乐; but to someone going to tend graves, avoid 快乐.",
   "inner": {
    "a": "清明节是祭祖、扫墓的日子，说“快乐”有点怪，不过我知道他是好意，就笑一下。",
    "aEn": "Qingming is for honouring ancestors at their graves; 快乐 is odd, but I know he means well, so I just laughed.",
    "b": "中国的节日不都说“节日快乐”吗？",
    "bEn": "Don't you say 节日快乐 for every Chinese festival?"
   },
   "rewrite": {
    "line": 1,
    "purpose": "问候朋友、问放假的安排",
    "purposeEn": "greet your friend and ask about the holiday",
    "options": [
     {
      "kind": "good",
      "text": "小王，清明放假有什么安排？",
      "reply": "我回老家扫墓，你呢？"
     },
     {
      "kind": "good",
      "text": "小王，清明安康！放假回家吗？",
      "reply": "对，回老家扫墓。"
     },
     {
      "kind": "politeOnly",
      "text": "小王，祝您清明节快乐！",
      "why": "加了“祝”“您”，“快乐”还在。",
      "whyEn": "祝 and 您 are added, but 快乐 is still there."
     },
     {
      "kind": "avoid",
      "act": "不发消息了",
      "actEn": "Don't send the message",
      "why": "问候和问安排都没了。",
      "whyEn": "Both the greeting and the question are lost."
     },
     {
      "kind": "other",
      "text": "王先生，清明节快乐！",
      "why": "改了称呼（对朋友太正式），“快乐”没改。",
      "whyEn": "The address changes (too formal for a friend); 快乐 doesn't."
     }
    ],
    "features": [
     "不说清明节“快乐”",
     "保留问候和问放假安排",
     "语气和原来一样亲切"
    ],
    "featuresEn": [
     "Doesn't say 快乐 for Qingming",
     "Keeps the greeting and the question about plans",
     "Just as warm as before"
    ]
   }
  },
  {
   "id": "xiaojie",
   "title": "叫服务员“小姐”",
   "titleEn": "Calling a waitress 小姐",
   "kcs": [
    "kt:zh-soc-address-terms",
    "kt:zh-soc-varieties"
   ],
   "people": {
    "a": {
     "name": "服务员",
     "role": "饭馆的服务员，四十多岁",
     "roleEn": "A waitress in her forties"
    },
    "b": {
     "name": "艾米",
     "role": "留学生",
     "roleEn": "An international student"
    }
   },
   "rel": {
    "setting": "一家小饭馆，人很多",
    "settingEn": "A small, busy restaurant",
    "up": 0,
    "close": 0,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "一家小饭馆，人很多。艾米想再要一碗米饭。服务员是一位四十多岁的阿姨。",
     "narrEn": "A busy little restaurant. Amy wants another bowl of rice. The waitress is in her forties."
    },
    {
     "who": "b",
     "text": "小姐！小姐！再来一碗米饭。"
    },
    {
     "who": "a",
     "text": "（皱了一下眉）……好，等一下。"
    }
   ],
   "problem": [
    1
   ],
   "react": 2,
   "cat": "register",
   "why": "在中国大陆很多地方，现在用“小姐”叫服务员不太合适，有时会让人想到不好的意思；可以叫“服务员”，对年纪大一点的女士叫“阿姨”，也可以直接说“你好，麻烦……”。",
   "whyEn": "In much of mainland China, calling a waitress 小姐 is now awkward and can carry an unpleasant connotation; use 服务员, call an older woman 阿姨, or just say 你好，麻烦…….",
   "variant": "在台湾、香港，或者一些酒店里，“小姐”是很普通的礼貌称呼，对方不会在意；称呼习惯地区差别很大。",
   "variantEn": "In Taiwan, Hong Kong and some hotels, 小姐 is an ordinary polite term and nobody minds; forms of address vary a lot by region.",
   "inner": {
    "a": "在这儿，“小姐”这个叫法有时让人联想到不好的意思，而且我都四十多了。叫我“服务员”或者“阿姨”都行。",
    "aEn": "Round here 小姐 can suggest something unpleasant, and I'm in my forties. 服务员 or 阿姨 would be fine.",
    "b": "课本上说“小姐”是对女士的礼貌称呼。",
    "bEn": "My textbook said 小姐 is a polite way to address a woman."
   },
   "rewrite": {
    "line": 1,
    "purpose": "叫服务员，再要一碗米饭",
    "purposeEn": "call the waitress and ask for more rice",
    "options": [
     {
      "kind": "good",
      "text": "服务员，麻烦再来一碗米饭。",
      "reply": "好嘞，马上来！"
     },
     {
      "kind": "good",
      "text": "阿姨，麻烦再来一碗米饭，谢谢！",
      "reply": "好，马上！"
     },
     {
      "kind": "politeOnly",
      "text": "小姐，麻烦您，请再来一碗米饭，谢谢。",
      "why": "加了“麻烦您”“请”“谢谢”，称呼没改。",
      "whyEn": "麻烦您, 请 and 谢谢 are added; the address is unchanged."
     },
     {
      "kind": "avoid",
      "act": "不要米饭了",
      "actEn": "Go without the rice",
      "why": "称呼的问题躲开了，米饭也没要到。",
      "whyEn": "The address problem is avoided, and so is the rice."
     },
     {
      "kind": "other",
      "text": "小姐，我还要一碗米饭。",
      "why": "换了说法，称呼还是“小姐”。",
      "whyEn": "The wording changes; the address is still 小姐."
     }
    ],
    "features": [
     "换掉“小姐”：用“服务员”“阿姨”，或者直接说“你好”",
     "还是在要一碗米饭",
     "可以加“麻烦”“谢谢”，但光加这些不够"
    ],
    "featuresEn": [
     "Replaces 小姐 with 服务员, 阿姨 or just 你好",
     "Still asks for a bowl of rice",
     "麻烦 and 谢谢 can be added, but they are not enough alone"
    ]
   }
  },
  {
   "id": "clock",
   "title": "给爷爷送钟",
   "titleEn": "A clock for Grandpa",
   "kcs": [
    "kt:zh-soc-culture-customs"
   ],
   "people": {
    "a": {
     "name": "小陈",
     "role": "中国朋友",
     "roleEn": "A Chinese friend"
    },
    "b": {
     "name": "汤姆",
     "role": "留学生",
     "roleEn": "An international student"
    }
   },
   "rel": {
    "setting": "去朋友家给爷爷祝寿的路上",
    "settingEn": "On the way to a friend's grandfather's birthday",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "汤姆要和朋友小陈一起去给小陈的爷爷过八十岁生日。他精心挑了一个漂亮的座钟。",
     "narrEn": "Tom is going with his friend Xiao Chen to her grandfather's 80th birthday. He has chosen a beautiful clock."
    },
    {
     "who": "a",
     "text": "你带什么礼物了？"
    },
    {
     "who": "b",
     "text": "我买了一个钟，送给爷爷，祝他长寿！"
    },
    {
     "who": "a",
     "text": "啊？送钟……这个……要不我们换个礼物吧。"
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "topic",
   "why": "汉语里“送钟”听起来像“送终”（为临终的老人送别），给老人祝寿时尤其忌讳。可以换别的礼物，比如茶叶、水果、保暖的衣物。",
   "whyEn": "In Chinese 送钟 (giving a clock) sounds like 送终 (attending a dying elder), so a clock is especially avoided as a birthday gift for an older person. Choose something else, such as tea, fruit or warm clothing.",
   "variant": "年轻人或者不讲究的家庭可能一笑了之；也有人会象征性地收一块钱，当成“买”而不是“送”。各家讲究的程度不同。",
   "variantEn": "Younger people or less traditional families may laugh it off; some pay a token coin so it counts as buying, not receiving. Families differ in how much this matters.",
   "inner": {
    "a": "“送钟”和“送终”同音，给老人过生日送钟，很多老人会觉得不吉利。我知道汤姆是好意，不想让爷爷不高兴。",
    "aEn": "送钟 sounds like 送终; many older people would find a clock unlucky on their birthday. I know Tom means well, and I don't want Grandpa upset.",
    "b": "钟很漂亮，能用很多年，正好表示长寿。",
    "bEn": "The clock is beautiful and will last for years: perfect for long life."
   },
   "rewrite": {
    "line": 2,
    "purpose": "给爷爷带一份祝寿的礼物",
    "purposeEn": "bring a birthday gift for Grandpa",
    "options": [
     {
      "kind": "good",
      "text": "我买了一些好茶叶，送给爷爷，祝他健康长寿！",
      "reply": "太好了，爷爷最喜欢喝茶！"
     },
     {
      "kind": "good",
      "text": "我带了一条暖和的围巾给爷爷，祝他生日快乐、身体健康！",
      "reply": "爷爷肯定喜欢！"
     },
     {
      "kind": "politeOnly",
      "text": "不好意思，我买了一个钟，请爷爷收下，祝他长寿！",
      "why": "加了“不好意思”“请”，送的还是钟。",
      "whyEn": "不好意思 and 请 are added; it's still a clock."
     },
     {
      "kind": "avoid",
      "act": "什么都不带，空手去",
      "actEn": "Bring nothing",
      "why": "去祝寿的心意没有表达出来。",
      "whyEn": "The birthday wishes have nothing to carry them."
     },
     {
      "kind": "other",
      "text": "我买了一个时钟，送给您爷爷。",
      "why": "换了个词，送的还是钟；问题在礼物本身。",
      "whyEn": "A different word, but still a clock; the gift itself is the issue."
     }
    ],
    "features": [
     "换一份礼物，不送钟",
     "保留祝寿的心意和祝福的话",
     "礼物适合老人"
    ],
    "featuresEn": [
     "A different gift, not a clock",
     "Keeps the birthday wishes",
     "A gift that suits an older person"
    ]
   }
  },
  {
   "id": "lunch",
   "title": "“不了，我今天带饭了”",
   "titleEn": "“No thanks, I brought lunch today”",
   "kcs": [
    "kt:zh-str-implicature"
   ],
   "people": {
    "a": {
     "name": "小刘",
     "role": "同事",
     "roleEn": "A colleague"
    },
    "b": {
     "name": "萨拉",
     "role": "同事",
     "roleEn": "A colleague"
    }
   },
   "rel": {
    "setting": "中午，办公室",
    "settingEn": "Lunchtime at the office",
    "up": 0,
    "close": 1,
    "formal": 0
   },
   "lines": [
    {
     "who": "n",
     "narr": "中午，萨拉问同事小刘要不要一起去食堂吃饭。",
     "narrEn": "At lunchtime Sarah asks her colleague Xiao Liu to come to the canteen."
    },
    {
     "who": "b",
     "text": "小刘，一起去吃饭吧？"
    },
    {
     "who": "a",
     "text": "不了，我今天带饭了。"
    },
    {
     "who": "b",
     "text": "哦……好吧。"
    },
    {
     "who": "n",
     "narr": "萨拉一个人去了食堂。",
     "narrEn": "Sarah goes to the canteen alone."
    }
   ],
   "problem": [
    2
   ],
   "react": 3,
   "cat": "none",
   "why": "小刘说的就是字面意思：她带了饭。有具体理由、语气平常，不是委婉拒绝；不要把每一次“不”都当成言外之意。",
   "whyEn": "Xiao Liu meant exactly what she said: she brought lunch. A concrete reason in a normal tone is not a hidden refusal; not every “no” has a meaning behind it.",
   "variant": "如果对方每次都找理由、从不提下次，那也许是不想去；但一次说“带饭了”，就是带饭了。",
   "variantEn": "If someone always has a reason and never suggests another time, they may not want to go; but one 带饭了 just means she brought lunch.",
   "inner": {
    "a": "我今天真的带了饭，正在微波炉里热着呢。明天可以一起去。",
    "aEn": "I really did bring lunch; it's heating in the microwave. Tomorrow we could go together.",
    "b": "她是不是在委婉地拒绝我？是不是这里的人不喜欢跟外国同事一起吃饭？",
    "bEn": "Is she politely turning me down? Do people here not like eating with foreign colleagues?"
   },
   "rewrite": {
    "line": 3,
    "purpose": "回应同事",
    "purposeEn": "respond to your colleague",
    "options": [
     {
      "kind": "good",
      "text": "好，那明天一起吧！",
      "reply": "好啊，明天一起！"
     },
     {
      "kind": "good",
      "act": "不用改：“哦，好吧”也可以",
      "actEn": "No change: 哦，好吧 is fine"
     },
     {
      "kind": "over",
      "text": "对不起，对不起，是我不好，打扰你了。",
      "why": "你没有做错什么，不用道歉。",
      "whyEn": "You did nothing wrong; no apology needed."
     },
     {
      "kind": "over",
      "text": "你是不是不想跟我吃饭？你到底是什么意思？",
      "why": "把字面意思当成言外之意来追问，会让对方莫名其妙。",
      "whyEn": "Probing for a hidden meaning that isn't there will puzzle her."
     }
    ],
    "features": [
     "这里不需要改说法",
     "可以约下一次",
     "不把一次“不了”当成言外之意，也不当成“他们都这样”"
    ],
    "featuresEn": [
     "Nothing here needs changing",
     "You can suggest another time",
     "Don't read one 不了 as a hidden meaning or as “they're all like that”"
    ]
   }
  },
  {
   "id": "teacher-name",
   "title": "直接叫老师的名字",
   "titleEn": "Calling the teacher by her name",
   "kcs": [
    "kt:zh-soc-address-terms"
   ],
   "people": {
    "a": {
     "name": "王老师",
     "role": "老师",
     "roleEn": "The teacher"
    },
    "b": {
     "name": "杰克",
     "role": "新来的小朋友",
     "roleEn": "A new pupil"
    }
   },
   "rel": {
    "setting": "上课的时候",
    "settingEn": "During a lesson",
    "up": 2,
    "close": 0,
    "formal": 1
   },
   "lines": [
    {
     "who": "n",
     "narr": "上课的时候，新来的杰克想去厕所。老师叫王丽。",
     "narrEn": "During a lesson, Jack, who is new, needs the toilet. The teacher's name is Wang Li."
    },
    {
     "who": "b",
     "text": "王丽，我可以去厕所吗？"
    },
    {
     "who": "a",
     "text": "……可以，去吧。"
    },
    {
     "who": "n",
     "narr": "同学们都笑了，杰克不知道为什么。",
     "narrEn": "The other children laugh, and Jack doesn't know why."
    }
   ],
   "problem": [
    1
   ],
   "react": 2,
   "cat": "wording",
   "why": "在中国的学校里，学生叫老师“王老师”或者“老师”，不叫名字。",
   "whyEn": "In Chinese schools, pupils call a teacher 王老师 or just 老师, not by name.",
   "variant": "老师知道杰克是新来的，不会生气；以后叫“王老师”就好。",
   "variantEn": "The teacher knows Jack is new and won't be cross; next time he can say 王老师.",
   "inner": {
    "a": "他直接叫我的名字，听着有点没礼貌，不过他刚来，还不知道。",
    "aEn": "He used my name, which sounds a bit rude, but he's new and doesn't know yet.",
    "b": "以前学校的老师让我们叫名字。",
    "bEn": "At my old school the teacher told us to use her name."
   },
   "rewrite": {
    "line": 1,
    "purpose": "问老师能不能去厕所",
    "purposeEn": "ask the teacher if you may go to the toilet",
    "options": [
     {
      "kind": "good",
      "text": "王老师，我可以去厕所吗？",
      "reply": "可以，快去快回。"
     },
     {
      "kind": "good",
      "text": "老师，我可以去一下厕所吗？",
      "reply": "去吧。"
     },
     {
      "kind": "politeOnly",
      "text": "王丽，请问我可以去厕所吗？谢谢。",
      "why": "加了“请问”“谢谢”，还是叫名字。",
      "whyEn": "请问 and 谢谢 are added, but it still uses her name."
     },
     {
      "kind": "avoid",
      "act": "憋着，不去了",
      "actEn": "Hold it and don't go",
      "why": "想去厕所的事没解决。",
      "whyEn": "You still need the toilet."
     }
    ],
    "features": [
     "叫“王老师”或者“老师”，不叫名字",
     "还是在问能不能去厕所"
    ],
    "featuresEn": [
     "Says 王老师 or 老师, not her name",
     "Still asks to go to the toilet"
    ]
   },
   "child": true
  }
 ],
 "review": [
  "compliment：“哪里哪里”是否显得老派；直接说“谢谢”在多大程度上已经通行",
  "qingming：“清明安康”是近年的说法，接受度有争议",
  "xiaojie：“小姐”的含义地区差别大（大陆多地 vs 台湾、香港）",
  "clock：送钟的忌讳程度、象征性收一块钱的做法因家庭和地区而异",
  "gaitian：“改天请你吃饭”是客套还是真的约，因人而异",
  "所有 cat、rel 刻度和改写选项的 kind 是编写者判断，需要母语教师逐条核对"
 ],
 "reviewEn": [
  "compliment: whether 哪里哪里 sounds old-fashioned; how far a plain 谢谢 is now the norm",
  "qingming: 清明安康 is a recent phrase and its acceptance is debated",
  "xiaojie: what 小姐 implies varies widely by region (much of the mainland vs Taiwan, Hong Kong)",
  "clock: how strongly the clock taboo is held, and the token-coin practice, vary by family and region",
  "gaitian: whether 改天请你吃饭 is ritual or a real plan varies by person",
  "Every cat, relationship scale and rewrite kind is the author's judgement and needs checking item by item by a native-speaker teacher"
 ]
};
