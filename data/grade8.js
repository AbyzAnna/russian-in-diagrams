window.GRADES = window.GRADES || {};
window.GRADES[8] = {
  grade: 8,
  book: "Russian Language, Grade 8",
  bookRu: "Русский язык. 8 класс",
  authors: "L. A. Murina et al.",
  year: 2024,
  pdf: "https://e-padruchnik.adu.by/books/russkij-jazyk/Rus_jaz_Murina_8kl_2024.pdf",
  level: "Intermediate",
  intro: "Grade 8 is about the simple sentence: how words join into phrases, what the main and secondary parts of a sentence are, and where Russian puts commas, dashes and colons. Russian punctuation follows grammar much more strictly than English punctuation, so once you can see the structure of a sentence, you can punctuate it correctly. The topics follow the order of the Grade 8 textbook.",
  glossary: [
    { ru: "словосочетание", en: "phrase (word combination)", hint: "a main word plus a word that depends on it: читать книгу (to read a book)" },
    { ru: "грамматическая основа", en: "grammatical core", hint: "the subject and predicate together, or the single main part of a one-part sentence" },
    { ru: "подлежащее", en: "subject", hint: "answers кто? что? (who? what?); underlined with one line" },
    { ru: "сказуемое", en: "predicate", hint: "says what the subject does or is; underlined with two lines" },
    { ru: "связка", en: "linking verb (copula)", hint: "быть, стать, являться: like English 'be', 'become'; быть is usually dropped in the present tense" },
    { ru: "определение", en: "attribute", hint: "describes a noun: какой? чей? (what kind? whose?)" },
    { ru: "приложение", en: "apposition", hint: "a noun that gives another name to a noun: река Нёман (the river Neman)" },
    { ru: "дополнение", en: "object", hint: "a noun or pronoun in an oblique case: читать книгу (read a book)" },
    { ru: "обстоятельство", en: "adverbial", hint: "says where, when, how, why something happens" },
    { ru: "односоставное предложение", en: "one-part sentence", hint: "a sentence with only one main part: Светает. (It is getting light.)" },
    { ru: "однородные члены", en: "homogeneous parts (a list)", hint: "words that answer the same question and depend on the same word" },
    { ru: "обобщающее слово", en: "generalizing word", hint: "a word that names the whole list: все, всё, цветы" },
    { ru: "обращение", en: "direct address", hint: "the name of the person you speak to: Мама, я пришёл." },
    { ru: "вводное слово", en: "parenthetical word", hint: "a word showing the speaker's attitude: конечно (of course), к сожалению (unfortunately)" },
    { ru: "обособление", en: "setting off (with commas)", hint: "marking a secondary part with commas and intonation" }
  ],
  sections: [
    {
      title: "Review",
      titleRu: "Повторение изученного",
      topics: [
        {
          id: "g8-chasti-rechi",
          title: "Parts of speech and spelling",
          ru: "Части речи и правописание",
          paras: "Повторение: части речи",
          summary: "Russian words fall into independent parts of speech and function words. Knowing the part of speech often tells you how to spell a word, for example whether не (not) is written together with it or separately.",
          diagram: {
            type: "tree",
            root: {
              label: "Parts of speech (части речи)",
              children: [
                {
                  label: "Independent (самостоятельные)",
                  note: "answer a question, can be parts of a sentence",
                  children: [
                    { label: "Noun-like (именные)", children: [ { label: "Noun (существительное)" }, { label: "Adjective (прилагательное)" }, { label: "Numeral (числительное)" }, { label: "Pronoun (местоимение)" } ] },
                    { label: "Verb and its forms", children: [ { label: "Verb (глагол)" }, { label: "Participle (причастие)" }, { label: "Adverbial participle (деепричастие)" } ] },
                    { label: "Adverb (наречие)" }
                  ]
                },
                {
                  label: "Function words (служебные)",
                  note: "answer no question, are never parts of a sentence",
                  children: [ { label: "Preposition (предлог)" }, { label: "Conjunction (союз)" }, { label: "Particle (частица)" } ]
                },
                { label: "Interjection (междометие)", note: "expresses feelings or urges: ах, эй" }
              ]
            }
          },
          explain: [
            "<b>Independent</b> parts of speech name things, qualities, numbers and actions. They answer a question (кто? что? какой? что делать? = who? what? what kind? to do what?) and can be parts of a sentence.",
            "<b>Function words</b>: prepositions, conjunctions and particles. They link words or add a shade of meaning, like English 'in', 'and', 'only'. They are never parts of a sentence on their own.",
            "Spelling often depends on the part of speech. With verbs and adverbial participles, <b>не</b> (not) is written <b>separately</b>: <i>не знал</i> (didn't know). With nouns, adjectives and adverbs in -о, не is written <b>together</b> if the word does not exist without не, or if you can replace it with a synonym that has no не: <i>невысокий = низкий</i> (low). This is a spelling rule: it doesn't change pronunciation, but it matters in writing."
          ],
          rule: "To choose the spelling, first find the part of speech.",
          examples: [
            { text: "<u>не</u> знал, <u>не</u> зная", tr: "didn't know, not knowing", note: "verb and adverbial participle: written separately" },
            { text: "<u>не</u>правда, <u>не</u>высокий, <u>не</u>далеко", tr: "untruth, not tall, not far", note: "can be replaced by a synonym: ложь (lie), низкий (low), близко (near)" },
            { text: "<u>не</u>настье, <u>не</u>годовать", tr: "bad weather, to be indignant", note: "these words don't exist without не: written together" }
          ],
          mistakes: [
            { wrong: "ненаписал", right: "не написал", why: "With verbs, не is written separately: не написал (didn't write)." },
            { wrong: "не навидеть", right: "ненавидеть", why: "There is no verb навидеть, so не is written together: ненавидеть (to hate)." }
          ],
          quiz: [
            { q: "Which part of speech is a function word?", options: ["adverb (наречие)", "particle (частица)", "adverbial participle (деепричастие)"], answer: 1, why: "A particle answers no question and is never a part of the sentence." },
            { q: "How do you write (не)смотря под ноги (not looking at one's feet)?", options: ["together", "separately"], answer: 1, why: "Смотря is an adverbial participle, and не is written separately with it." },
            { q: "How do you write (не)большой дом (a small house)?", options: ["together", "separately"], answer: 0, why: "It can be replaced by a synonym without не: маленький (small). So it is written together: небольшой." }
          ]
        },
        {
          id: "g8-tekst-stili",
          title: "Text and styles of speech",
          ru: "Текст и стили речи",
          paras: "Текст. Стили речи",
          summary: "A text is a group of sentences joined by one topic and one main idea. The style you choose depends on where you speak or write and why.",
          diagram: {
            type: "compare",
            rows: [
              ["Style", "Where it is used", "Purpose", "Features"],
              ["Conversational (разговорный)", "talking with family and friends", "share thoughts and feelings", "simple words, incomplete sentences"],
              ["Scientific (научный)", "textbooks, articles", "give exact knowledge", "terms, precision, logic"],
              ["Official (официально-деловой)", "documents, laws", "inform, give instructions", "set phrases, no imagery"],
              ["Journalistic (публицистический)", "newspapers, speeches", "inform and persuade", "opinions, calls to action, vivid words"],
              ["Literary (художественный)", "fiction, poetry", "create images, stir feelings", "figures of speech, imagery"]
            ]
          },
          explain: [
            "A <b>text</b> (текст) has a topic (what it is about) and a main idea (what the author wants to say). A big topic splits into <b>subtopics</b> (микротемы), and each one usually gets its own paragraph.",
            "By type, a text can be <b>narration</b> (повествование: what happened?), <b>description</b> (описание: what is it like?) or <b>reasoning</b> (рассуждение: why?).",
            "The <b>style</b> (стиль речи) depends on the situation, just as in English. A note to a friend and a request to the head teacher say the same thing with very different words."
          ],
          rule: "Topic: what the text is about. Main idea: why it was written.",
          examples: [
            { text: "Ну, я побежал, пока!", tr: "Well, I'm off, bye!", note: "conversational style" },
            { text: "Подлежащее и сказуемое образуют грамматическую основу предложения.", tr: "The subject and the predicate form the grammatical core of a sentence.", note: "scientific style" },
            { text: "Прошу освободить меня от занятий 12 мая.", tr: "I request to be excused from classes on 12 May.", note: "official style" }
          ],
          quiz: [
            { q: "What style is a phone's user manual?", options: ["literary", "official", "conversational"], answer: 1, why: "A manual tells you exactly what to do, in standard wording." },
            { q: "Which type of text answers the question 'why?' (почему?)", options: ["narration", "description", "reasoning"], answer: 2, why: "Reasoning proves an idea and explains causes." }
          ]
        }
      ]
    },
    {
      title: "The phrase",
      titleRu: "Словосочетание",
      topics: [
        {
          id: "g8-slovosochetanie",
          title: "Phrases and how words are linked",
          ru: "Словосочетание. Виды связи",
          paras: "Словосочетание",
          summary: "A phrase (словосочетание) is two or more independent words linked by meaning and grammar. One word is the main word, the other depends on it. Russian has three ways to link them.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Agreement (согласование)", "Government (управление)", "Adjoining (примыкание)"],
              ["How they are linked", "the dependent word takes the same gender, number and case as the main word", "the main word requires a certain case from the dependent word", "the dependent word never changes; the link is by meaning only"],
              ["Dependent word", "adjective, participle, ordinal number, pronoun", "noun or pronoun in an oblique case", "adverb, adverbial participle, infinitive, possessive его, её, их (his, her, their)"],
              ["When the main word changes", "the dependent word changes too", "the dependent word stays the same", "the dependent word stays the same"],
              ["Example", "новая книга, новой книги (a new book)", "читать книгу, читал книгу (read a book)", "читать вслух, решил читать (read aloud, decided to read)"]
            ]
          },
          explain: [
            "Ask a question from the <b>main</b> word to the <b>dependent</b> one: <i>читать</i> (что?) <i>книгу</i> = to read (what?) a book. The main word is <i>читать</i>.",
            "To find the type of link, change the main word. If the dependent word changes with it, it is <b>agreement</b>. If it keeps its case, it is <b>government</b>. If the dependent word cannot change at all, it is <b>adjoining</b>. English mostly uses word order for this; Russian uses endings.",
            "These are <b>not</b> phrases: a subject with its predicate (<i>солнце светит</i>, the sun shines), an independent word with a function word (<i>под столом</i>, under the table; <i>будет читать</i>, will read), a list (<i>мама и папа</i>, mum and dad), and idioms."
          ],
          rule: "Changes with the main word: agreement. Case stays fixed: government. Word never changes: adjoining.",
          examples: [
            { text: "<mark>зимний</mark> вечер", tr: "a winter evening", note: "agreement: зимнего вечера (of a winter evening)" },
            { text: "гордиться <mark>сыном</mark>", tr: "to be proud of one's son", note: "government: гордился сыном, always the instrumental case" },
            { text: "говорить <mark>тихо</mark>", tr: "to speak quietly", note: "adjoining: an adverb" },
            { text: "<mark>его</mark> портфель", tr: "his school bag", note: "adjoining: possessive его never changes" }
          ],
          mistakes: [
            { wrong: "ветер дует (the wind blows) is a phrase", right: "it is a grammatical core", why: "A subject and a predicate do not form a phrase." }
          ],
          quiz: [
            { q: "What is the link in вернулся домой (came back home)?", options: ["agreement", "government", "adjoining"], answer: 2, why: "Домой (home) is an adverb, and adverbs don't change." },
            { q: "What is the link in письмо другу (a letter to a friend)?", options: ["agreement", "government", "adjoining"], answer: 1, why: "Change the main word: письма другу. The dative case of другу stays." },
            { q: "Which is NOT a phrase?", options: ["светлая комната", "птицы улетели", "войти в дом"], answer: 1, why: "Птицы улетели (the birds flew away) is a subject plus a predicate." }
          ]
        }
      ]
    },
    {
      title: "The simple sentence",
      titleRu: "Простое предложение",
      topics: [
        {
          id: "g8-vidy-predlozheniy",
          title: "Sentence types by purpose and intonation",
          ru: "Виды предложений по цели высказывания и интонации",
          paras: "Простое предложение",
          summary: "By purpose, a sentence can tell, ask or urge. By intonation, it can be exclamatory or not. This works much like English.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Statement (повествовательное)", "Question (вопросительное)", "Request or command (побудительное)"],
              ["Purpose", "to tell", "to ask", "to make someone act"],
              ["End mark", "full stop", "question mark", "full stop"],
              ["Not exclamatory", "Наступила осень. (Autumn has come.)", "Ты придёшь завтра? (Will you come tomorrow?)", "Закрой окно. (Close the window.)"],
              ["Exclamatory", "Какая чудесная осень! (What a lovely autumn!)", "Неужели ты придёшь?! (Are you really coming?!)", "Скорее закрой окно! (Close the window, quick!)"]
            ]
          },
          explain: [
            "The <b>purpose</b> (цель высказывания) is why we say the sentence: to tell, to ask, or to ask someone to do something.",
            "Any of the three types can be <b>exclamatory</b> (восклицательное) if it is said with strong feeling. Then it ends with an exclamation mark.",
            "A question said with strong feeling gets two marks: <b>?!</b>"
          ],
          rule: "Purpose: tell, ask, urge. Intonation: with strong feeling or calm.",
          examples: [
            { text: "Завтра будет контрольная.", tr: "There will be a test tomorrow.", note: "statement, not exclamatory" },
            { text: "Помогите!", tr: "Help!", note: "request, exclamatory" },
            { text: "Где мой учебник?", tr: "Where is my textbook?", note: "question, not exclamatory" }
          ],
          quiz: [
            { q: "What type is «Давайте пойдём в парк» (Let's go to the park)?", options: ["statement", "question", "request"], answer: 2, why: "The speaker is urging others to act." },
            { q: "Can a statement be exclamatory?", options: ["yes", "no"], answer: 0, why: "Yes, if it is said with strong feeling: Как хорошо в лесу! (How lovely it is in the forest!)" }
          ]
        },
        {
          id: "g8-osnova-poryadok",
          title: "Grammatical core, word order, logical stress",
          ru: "Грамматическая основа. Порядок слов. Логическое ударение",
          paras: "Простое предложение",
          summary: "The grammatical core is the subject and predicate, or a single main part. Russian word order is freer than English: it can be direct or inverted, and stress in the voice marks the most important word.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Direct order", "Inverted order (инверсия)"],
              ["Subject and predicate", "Поезд пришёл. (The train arrived.)", "Пришёл поезд."],
              ["Attribute", "Наступил тихий вечер. (A quiet evening came.)", "Наступил вечер тихий."],
              ["Object", "Я прочитал книгу. (I read the book.)", "Книгу я прочитал."],
              ["Where it is used", "ordinary neutral speech", "literature and conversation, to bring out a word"]
            ]
          },
          explain: [
            "The <b>grammatical core</b> (грамматическая основа) is made of the main parts. A <b>two-part</b> sentence (двусоставное) has a subject and a predicate. A <b>one-part</b> sentence (односоставное) has only one main part.",
            "A sentence is <b>bare</b> (нераспространённое) if it has only the main parts (<i>Дети играют.</i> The children are playing.) and <b>extended</b> (распространённое) if it also has secondary parts (<i>Дети весело играют во дворе.</i> The children are playing happily in the yard.).",
            "In <b>direct</b> order the subject comes before the predicate, an agreeing adjective comes before its noun, and an object comes after the verb. If the order is changed, it is <b>inversion</b>. Because Russian endings show who does what, inversion does not change the basic meaning the way it would in English.",
            "<b>Logical stress</b> (логическое ударение) means saying the most important word louder. It changes the meaning: <i><mark>Я</mark> пойду в кино</i> (I will go to the cinema, not you) and <i>Я пойду <mark>в кино</mark></i> (to the cinema, not the theatre)."
          ],
          examples: [
            { text: "<mark>Птицы</mark> <mark>улетели</mark>.", tr: "The birds flew away.", note: "two-part, bare" },
            { text: "<mark>Морозно</mark>.", tr: "It's frosty.", note: "one-part: one main part, no 'it' needed" },
            { text: "Шумит <mark>за окном</mark> дождь.", tr: "Rain is pattering outside the window.", note: "inverted order: predicate before subject" }
          ],
          quiz: [
            { q: "What is the word order in «Медленно плыли по небу облака» (Clouds floated slowly across the sky)?", options: ["direct", "inverted"], answer: 1, why: "The predicate плыли (floated) comes before the subject облака (clouds)." },
            { q: "Which sentence is extended?", options: ["Ветер стих.", "Ночью ветер стих.", "Светает."], answer: 1, why: "It has a secondary part: ночью (at night)." }
          ]
        }
      ]
    },
    {
      title: "The two-part sentence",
      titleRu: "Двусоставное предложение",
      topics: [
        {
          id: "g8-podlezhashchee",
          title: "The subject",
          ru: "Подлежащее",
          paras: "Главные члены предложения",
          summary: "The subject (подлежащее) names who or what the sentence is about. It answers кто? (who?) or что? (what?).",
          diagram: {
            type: "cards",
            items: [
              { title: "Noun in the nominative", text: "the most common case", example: "<u>Ветер</u> гонит листья. (The wind drives the leaves.)" },
              { title: "Pronoun in the nominative", text: "personal, question, indefinite pronouns and others", example: "<u>Мы</u> вернулись. <u>Кто</u> пришёл? (We came back. Who has come?)" },
              { title: "Numeral", text: "a cardinal or collective number", example: "<u>Трое</u> ушли вперёд. (Three went ahead.)" },
              { title: "Adjective or participle", text: "used as a noun", example: "<u>Дежурный</u> открыл класс. (The pupil on duty opened the classroom.)" },
              { title: "Infinitive", text: "the dictionary form of a verb", example: "<u>Курить</u> вредно. (Smoking is harmful.)" },
              { title: "Fixed word group", text: "quantity, togetherness, a name", example: "<u>Брат с сестрой</u> ушли. <u>Несколько учеников</u> заболели. (Brother and sister left. Several pupils fell ill.)" }
            ]
          },
          explain: [
            "The <b>subject</b> answers <i>кто? что?</i> (who? what?). In Russian schools it is underlined with one line.",
            "Usually it is a noun or a pronoun in the <b>nominative</b> case (именительный падеж, the dictionary form). But another part of speech can be the subject if it names a thing or person.",
            "An infinitive can be the subject, where English often uses an -ing form: <i>Курить вредно</i> (Smoking is harmful).",
            "A whole word group that can't be split can be the subject: <i>Северный Ледовитый океан</i> (the Arctic Ocean), <i>двое друзей</i> (two friends), <i>один из нас</i> (one of us), <i>мама с дочкой</i> (mother and daughter, literally 'mother with daughter')."
          ],
          rule: "The subject is always in the nominative case, or it is an infinitive.",
          examples: [
            { text: "<u>Пятеро учеников</u> ушли.", tr: "Five pupils left.", note: "collective numeral + noun: one subject" },
            { text: "<u>Учиться</u> всегда пригодится.", tr: "Learning will always come in handy.", note: "infinitive" },
            { text: "<u>Кто-то</u> постучал.", tr: "Someone knocked.", note: "indefinite pronoun" }
          ],
          mistakes: [
            { wrong: "Мне холодно (I'm cold): the subject is мне", right: "there is no subject", why: "Мне is in the dative case ('to me'), so it can't be the subject. This is an impersonal sentence. English needs a subject here; Russian does not." }
          ],
          quiz: [
            { q: "What is the subject in «Дружить с ним приятно» (It's nice to be friends with him)?", options: ["a noun", "an infinitive", "an adverb"], answer: 1, why: "The subject is дружить (to be friends), an infinitive." },
            { q: "Find the subject: «Отец с сыном пошли на рыбалку» (Father and son went fishing).", options: ["отец", "отец с сыном", "сыном"], answer: 1, why: "The predicate пошли is plural: both of them act, so it is one fixed group." }
          ]
        },
        {
          id: "g8-skazuemoe",
          title: "Types of predicate",
          ru: "Виды сказуемых",
          paras: "Главные члены предложения",
          summary: "The predicate (сказуемое) can be a simple verb predicate, a compound verb predicate, or a compound nominal predicate.",
          diagram: {
            type: "tree",
            root: {
              label: "Predicate (сказуемое)",
              children: [
                { label: "Simple verb predicate", note: "one verb in any mood or tense", children: [ { label: "Он читает. Я буду читать. Читал бы. (He reads. I will read. He would read.)" } ] },
                {
                  label: "Compound",
                  children: [
                    { label: "Compound verb predicate", note: "helper verb, or должен, рад, готов (must, glad, ready) + infinitive", children: [ { label: "начал читать, хочу петь, должен прийти (began to read, want to sing, must come)" } ] },
                    { label: "Compound nominal predicate", note: "linking verb + noun, adjective, numeral or participle", children: [ { label: "был врачом, стал взрослым, будет весело (was a doctor, grew up, it will be fun)" } ] }
                  ]
                }
              ]
            }
          },
          explain: [
            "A <b>simple verb predicate</b> is one verb in any tense or mood. The future <i>буду читать</i> (I will read) is also simple, because it is one form of one verb, like English 'will read'.",
            "A <b>compound verb predicate</b> has two parts: a helper verb (<i>начать</i> to begin, <i>продолжать</i> to continue, <i>хотеть</i> to want, <i>мочь</i> can, <i>уметь</i> to know how) or the short adjectives <i>должен, рад, готов, обязан</i> (must, glad, ready, obliged), plus an infinitive that carries the main meaning.",
            "A <b>compound nominal predicate</b> has a linking verb (<i>быть</i> to be, <i>стать</i> to become, <i>являться</i> to be, <i>казаться</i> to seem) and a noun or adjective part. In the present tense the link <i>быть</i> is usually dropped. Russian has no 'is' here: <i>Брат студент</i> = My brother is a student."
          ],
          rule: "One verb: simple. Verb + infinitive: compound verb. Link + noun or adjective: compound nominal.",
          examples: [
            { text: "Дети <u>будут рисовать</u>.", tr: "The children will draw.", note: "simple verb predicate (future tense)" },
            { text: "Я <u>рад помочь</u> тебе.", tr: "I'm glad to help you.", note: "compound verb predicate" },
            { text: "Ночь <u>была тёплой</u>.", tr: "The night was warm.", note: "compound nominal predicate" },
            { text: "Море <u>спокойно</u>.", tr: "The sea is calm.", note: "compound nominal with a dropped link (no 'is')" }
          ],
          mistakes: [
            { wrong: "буду учить (I will learn) is a compound verb predicate", right: "it is a simple verb predicate", why: "Буду учить is the future tense of one verb." }
          ],
          quiz: [
            { q: "What predicate is in «Он начал готовиться к экзамену» (He began to prepare for the exam)?", options: ["simple verb", "compound verb", "compound nominal"], answer: 1, why: "Начал готовиться: helper verb + infinitive." },
            { q: "What predicate is in «Погода стала холодной» (The weather turned cold)?", options: ["simple verb", "compound verb", "compound nominal"], answer: 2, why: "Стала is the linking verb, холодной (cold) is the adjective part." },
            { q: "What predicate is in «Завтра мы поедем на экскурсию» (Tomorrow we will go on a trip)?", options: ["simple verb", "compound verb", "compound nominal"], answer: 0, why: "Поедем is one verb." }
          ]
        },
        {
          id: "g8-tire",
          title: "The dash between subject and predicate",
          ru: "Тире между подлежащим и сказуемым",
          paras: "Тире между подлежащим и сказуемым",
          summary: "Russian has no 'is' in the present tense. Where English says 'is', Russian sometimes puts a dash. It does so when both the subject and the predicate are nouns in the nominative, numbers or infinitives.",
          diagram: {
            type: "flow",
            title: "Do you need a dash between subject and predicate?",
            steps: [
              { q: "Is the subject a personal pronoun (я, ты, он, мы...)?", yes: "No dash: Я ученик. (I am a pupil.)", no: null },
              { q: "Is there не (not) or как, будто, словно, точно (like, as if) before the predicate?", yes: "Usually no dash: Бедность не порок. (Poverty is no vice.) Пруд как зеркало. (The pond is like a mirror.)", no: null },
              { q: "Is there a parenthetical word, an adverb or a particle between them?", yes: "Usually no dash: Брат теперь студент. (My brother is a student now.)", no: null },
              { q: "Is there это, вот, значит (this, here, means) before the predicate?", yes: "Dash before these words: Учиться — вот моя цель. (To learn: that is my goal.)", no: null },
              { q: "Are both main parts nouns in the nominative, numbers or infinitives (in any mix)?", yes: "Dash: Минск — столица Беларуси. (Minsk is the capital of Belarus.)", no: "No dash: Небо голубое. (The sky is blue.)" }
            ]
          },
          explain: [
            "In a compound nominal predicate the link <i>быть</i> (to be) is usually missing in the present tense. In some sentences a <b>dash</b> (тире) stands in its place, roughly where English puts 'is'.",
            "Put a dash if both main parts are nouns in the nominative, numbers or infinitives: noun + noun, number + number, infinitive + infinitive, noun + infinitive, and so on.",
            "No dash if the subject is a personal pronoun, if the predicate is an adjective, or if there is <i>не</i>, a comparison word (<i>как</i>, like), a parenthetical word or an adverb before the predicate."
          ],
          rule: "Noun + noun, number + number, infinitive + infinitive: dash. Personal pronoun or adjective: no dash.",
          examples: [
            { text: "Берёза <u>—</u> символ России.", tr: "The birch is a symbol of Russia.", note: "noun (nom.) + noun (nom.)" },
            { text: "Дважды два <u>—</u> четыре.", tr: "Two times two is four.", note: "numbers" },
            { text: "Жизнь прожить <u>—</u> не поле перейти.", tr: "Living a life is not like crossing a field. (proverb)", note: "infinitives; the dash stays even though there is не" },
            { text: "Она отличница.", tr: "She is a straight-A student.", note: "personal pronoun: no dash" },
            { text: "Наш город, конечно, красивый.", tr: "Our town is, of course, beautiful.", note: "adjective: no dash" }
          ],
          mistakes: [
            { wrong: "Мой брат — высокий.", right: "Мой брат высокий.", why: "The predicate высокий (tall) is an adjective, so no dash." },
            { wrong: "Он — мой друг.", right: "Он мой друг.", why: "The subject он (he) is a personal pronoun, so no dash." }
          ],
          quiz: [
            { q: "Where do you need a dash?", options: ["Мы_ ученики восьмого класса.", "Нёман_ большая река.", "Озеро_ глубокое."], answer: 1, why: "Нёман (the Neman) and река (river) are both nouns in the nominative." },
            { q: "Do you need a dash in «Наша задача_ хорошо учиться» (Our task is to study well)?", options: ["yes", "no"], answer: 0, why: "Noun + infinitive: put a dash." },
            { q: "Why is there no dash in «Ты как солнышко» (You are like the sun)?", options: ["the subject is a pronoun and there is как", "the predicate is a verb", "there is no predicate"], answer: 0, why: "A personal pronoun and the comparison word как (like): no dash." }
          ]
        },
        {
          id: "g8-opredelenie-prilozhenie",
          title: "Attribute and apposition",
          ru: "Определение и приложение",
          paras: "Второстепенные члены предложения",
          summary: "An attribute (определение) describes a noun. An apposition (приложение) is a special attribute: a noun that gives another name to a noun.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Agreeing attribute (согласованное)", "Non-agreeing attribute (несогласованное)", "Apposition (приложение)"],
              ["What it is", "adjective, participle, ordinal number, pronoun", "noun in an oblique case, adverb, infinitive, possessive его, её, их", "a noun in the same case as the noun it describes"],
              ["Link", "agreement", "government or adjoining", "agreement in case"],
              ["Example", "<u>синее</u> море (the blue sea)", "платье <u>в горошек</u> (a polka-dot dress), кофе <u>по-турецки</u> (Turkish coffee)", "город-<u>герой</u> (hero city), река <u>Нёман</u> (the river Neman)"]
            ]
          },
          explain: [
            "An <b>attribute</b> answers <i>какой? чей?</i> (what kind? whose?). In Russian schools it is underlined with a wavy line.",
            "An <b>agreeing</b> attribute changes with its noun: <i>синее море, синего моря</i> (the blue sea, of the blue sea). A <b>non-agreeing</b> one does not change: <i>платье в горошек, платья в горошек</i>.",
            "An <b>apposition</b> gives the thing a second name: <i>старик-сторож</i> (the old watchman), <i>журнал «Вожатый»</i> (the magazine Vozhaty).",
            "A one-word apposition is joined with a <b>hyphen</b> if both words are common nouns (<i>девочка-подросток</i>, teenage girl) or if a proper name comes before a common noun (<i>Москва-река</i>, the Moskva River). If the common noun comes first, there is no hyphen: <i>река Москва</i>. This is a spelling rule: it matters in writing only."
          ],
          rule: "Hyphen: common noun + common noun. No hyphen: common noun + proper name.",
          examples: [
            { text: "<u>мамина</u> сумка", tr: "mum's bag", note: "agreeing attribute" },
            { text: "желание <u>учиться</u>", tr: "the wish to learn", note: "non-agreeing attribute (infinitive)" },
            { text: "лётчик<u>-</u>испытатель", tr: "test pilot", note: "apposition with a hyphen" },
            { text: "газета «Звязда»", tr: "the newspaper Zvyazda", note: "a title in quotation marks, no hyphen" }
          ],
          mistakes: [
            { wrong: "город-Минск", right: "город Минск", why: "The common noun город (city) comes before the proper name, so no hyphen." }
          ],
          quiz: [
            { q: "What kind of attribute is in дом напротив (the house opposite)?", options: ["agreeing", "non-agreeing"], answer: 1, why: "Напротив (opposite) is an adverb; it doesn't change with the main word." },
            { q: "Where do you need a hyphen?", options: ["озеро Нарочь", "город_Гродно", "учитель_математик"], answer: 2, why: "Both are common nouns: учитель-математик (maths teacher)." },
            { q: "What part of the sentence is Нарочь in озеро Нарочь (Lake Naroch)?", options: ["apposition", "object", "adverbial"], answer: 0, why: "Нарочь gives the lake a second name, so it is an apposition." }
          ]
        },
        {
          id: "g8-dopolnenie-obstoyatelstvo",
          title: "Object and adverbial",
          ru: "Дополнение и обстоятельство",
          paras: "Второстепенные члены предложения",
          summary: "An object (дополнение) names a thing and answers the questions of the oblique cases. An adverbial (обстоятельство) tells where, when, how or why something happens.",
          diagram: {
            type: "cards",
            items: [
              { title: "Place", text: "где? куда? откуда? (where? where to? where from?)", example: "жить <u>в деревне</u> (live in a village)" },
              { title: "Time", text: "когда? как долго? с каких пор? (when? how long? since when?)", example: "вернуться <u>вечером</u> (come back in the evening)" },
              { title: "Manner", text: "как? каким образом? (how? in what way?)", example: "говорить <u>шёпотом</u> (speak in a whisper)" },
              { title: "Measure and degree", text: "сколько? в какой степени? (how much? to what degree?)", example: "<u>очень</u> устал, прочитал <u>дважды</u> (very tired, read twice)" },
              { title: "Cause", text: "почему? отчего? (why?)", example: "опоздать <u>из-за дождя</u> (be late because of the rain)" },
              { title: "Purpose", text: "зачем? с какой целью? (what for?)", example: "прийти <u>за советом</u> (come for advice)" },
              { title: "Condition", text: "при каком условии? (on what condition?)", example: "<u>при желании</u> успеешь (if you want to, you'll make it)" },
              { title: "Concession", text: "несмотря на что? (in spite of what?)", example: "гулять <u>несмотря на мороз</u> (go for a walk despite the frost)" }
            ]
          },
          explain: [
            "An <b>object</b> answers the questions of the oblique cases (<i>кого? чего? кому? чем? о чём?</i> = whom? of what? to whom? with what? about what?). In Russian schools it is underlined with a dashed line.",
            "An object is <b>direct</b> if it is in the accusative case without a preposition after a transitive verb (<i>читать книгу</i>, read a book), or in the genitive after a negated verb (<i>не взял книги</i>, didn't take the book). All other objects are <b>indirect</b>.",
            "An <b>adverbial</b> is underlined with a dash-dot line. You find its type by the question it answers.",
            "The same words with a preposition can be different parts of the sentence. Ask the question from the main word: <i>смотреть</i> (на что?) <i>на реку</i> = look (at what?) at the river: object; <i>жить</i> (где?) <i>на реке</i> = live (where?) on the river: adverbial."
          ],
          examples: [
            { text: "Я написал <u>письмо</u>.", tr: "I wrote a letter.", note: "direct object" },
            { text: "Мы гордимся <u>победой</u>.", tr: "We are proud of the victory.", note: "indirect object" },
            { text: "<u>От радости</u> он закричал.", tr: "He shouted for joy.", note: "adverbial of cause" }
          ],
          quiz: [
            { q: "What is в лес in «Мы пошли в лес» (We went to the forest)?", options: ["object", "adverbial of place", "attribute"], answer: 1, why: "Пошли (куда? where to?) в лес: adverbial of place." },
            { q: "What adverbial is in «Он пришёл за книгой» (He came for a book)?", options: ["place", "purpose", "cause"], answer: 1, why: "Пришёл (зачем? what for?) за книгой: adverbial of purpose." },
            { q: "Which object is direct?", options: ["думать о друге", "не видел реки", "помогать маме"], answer: 1, why: "Genitive after a negated verb (didn't see the river): a direct object." }
          ]
        }
      ]
    },
    {
      title: "One-part and incomplete sentences",
      titleRu: "Односоставные и неполные предложения",
      topics: [
        {
          id: "g8-odnosostavnye",
          title: "Types of one-part sentences",
          ru: "Виды односоставных предложений",
          paras: "Односоставные предложения",
          summary: "A one-part sentence has only one main part. English almost always needs a subject ('it', 'they', 'you'), but Russian often does without one. There are five types.",
          diagram: {
            type: "tree",
            root: {
              label: "One-part sentences (односоставные)",
              children: [
                {
                  label: "Main part: predicate",
                  children: [
                    { label: "Definite-personal (определённо-личные)", note: "verb in the 1st or 2nd person or imperative: the doer is clear", children: [ { label: "Люблю грозу в начале мая. (I love a storm in early May.)" } ] },
                    { label: "Indefinite-personal (неопределённо-личные)", note: "verb in the 3rd person plural or past plural: the doer is unknown", children: [ { label: "В дверь постучали. (Someone knocked at the door.)" } ] },
                    { label: "Generalized-personal (обобщённо-личные)", note: "the action applies to anyone", children: [ { label: "Цыплят по осени считают. (Don't count your chickens before they hatch.)" } ] },
                    { label: "Impersonal (безличные)", note: "there is no doer and can't be one", children: [ { label: "Светает. Мне холодно. (It's getting light. I'm cold.)" } ] }
                  ]
                },
                {
                  label: "Main part: subject",
                  children: [
                    { label: "Nominative (назывные)", note: "name a thing or a scene", children: [ { label: "Ночь. Тишина. (Night. Silence.)" } ] }
                  ]
                }
              ]
            }
          },
          explain: [
            "A <b>one-part</b> sentence has one main part. A second one is not needed: the meaning is clear without it.",
            "In <b>definite-personal</b> sentences the doer is the speaker or the listener, and the verb ending shows who it is (<i>Иду домой.</i> I'm going home. <i>Читайте внимательно.</i> Read carefully.). In <b>indefinite-personal</b> sentences the doer is unknown or unimportant, like English 'they' or the passive (<i>Мне подарили книгу.</i> I was given a book.).",
            "<b>Generalized-personal</b> sentences state a truth for everyone, like English 'you' meaning 'anyone'. They are often proverbs: <i>Без труда не вытащишь и рыбку из пруда.</i> (Without effort you can't even pull a fish out of a pond.)",
            "In <b>impersonal</b> sentences an action or state happens by itself, where English uses an empty 'it': <i>Вечереет.</i> (It's getting dark.) <i>Мне грустно.</i> (I feel sad.) <i>Нельзя опаздывать.</i> (You mustn't be late.) In <b>nominative</b> sentences the main part is a subject in the nominative: <i>Зима. Мороз.</i> (Winter. Frost.)"
          ],
          rule: "You can add я, ты, мы, вы (I, you, we): definite-personal. You can add они (they): indefinite-personal. You can't add anyone: impersonal.",
          examples: [
            { text: "<u>Пишу</u> тебе письмо.", tr: "I'm writing you a letter.", note: "definite-personal (я пишу)" },
            { text: "Об этом <u>сообщили</u> по радио.", tr: "It was announced on the radio.", note: "indefinite-personal" },
            { text: "На улице <u>темнеет</u>.", tr: "It's getting dark outside.", note: "impersonal" },
            { text: "<u>Весна</u>!", tr: "Spring!", note: "nominative" }
          ],
          mistakes: [
            { wrong: "«Ветром сорвало крышу» (The wind tore off the roof): two-part, subject ветром", right: "impersonal", why: "Ветром is in the instrumental case ('by the wind'), so it is an object. There is no subject, even though English needs one." }
          ],
          quiz: [
            { q: "What type is «Меня позвали к доске» (I was called to the board)?", options: ["definite-personal", "indefinite-personal", "impersonal"], answer: 1, why: "Позвали is past plural, and who called is not said." },
            { q: "What type is «Морозит» (It's freezing)?", options: ["impersonal", "nominative", "definite-personal"], answer: 0, why: "The action happens by itself; there is no doer." },
            { q: "What type is «Берегите природу» (Take care of nature)?", options: ["definite-personal", "indefinite-personal", "nominative"], answer: 0, why: "An imperative verb: the doer is clear, вы (you)." }
          ]
        },
        {
          id: "g8-nepolnye",
          title: "Incomplete sentences",
          ru: "Неполные предложения",
          paras: "Неполные предложения",
          summary: "In an incomplete sentence a part is left out, but it is easy to restore from the context or situation. English does the same: 'I took the rod, and he the net.'",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], а [ — ].", example: "Брат взял удочку, а я — сачок.", caption: "My brother took the rod, and I the net. The verb взял (took) is left out; there is a pause, so a dash marks the gap." },
              { scheme: "— [ ... ]? — [ ... ].", example: "— Куда ты идёшь? — В библиотеку.", caption: "'Where are you going?' 'To the library.' In dialogue the answer is incomplete: subject and verb are left out." },
              { scheme: "[ ], а [ ].", example: "Мне купили книгу, а сестре куклу.", caption: "They bought me a book, and my sister a doll. The verb купили is left out; no pause, so no dash." }
            ]
          },
          explain: [
            "An <b>incomplete</b> sentence (неполное) is not the same as a one-part sentence. In an incomplete sentence a part that the structure needs is missing. You can bring it back from the next sentence or from the situation.",
            "Incomplete sentences are common in <b>dialogue</b> and in longer sentences, to avoid repeating the same word.",
            "If you pause where the missing part (usually the verb) would be, put a <b>dash</b>: <i>Мы сели в автобус, а они — в трамвай.</i> (We got on the bus, and they on the tram.)"
          ],
          rule: "If the missing word is easy to restore from the context, the sentence is incomplete.",
          examples: [
            { text: "Мне нравится математика, а сестре <u>—</u> литература.", tr: "I like maths, and my sister, literature.", note: "the verb нравится (is pleasing) is left out" },
            { text: "— Ты сделал уроки? — Сделал.", tr: "'Have you done your homework?' 'I have.'", note: "the subject я (I) and the object уроки (homework) are left out" }
          ],
          mistakes: [
            { wrong: "Светает (It's getting light) is an incomplete sentence", right: "it is a one-part impersonal sentence", why: "Nothing is left out here; the structure doesn't need a second main part." }
          ],
          quiz: [
            { q: "Which sentence is incomplete?", options: ["Вечереет.", "— Кто пришёл? — Петя.", "Тишина."], answer: 1, why: "In the answer Петя (Petya) the verb пришёл (came) is left out; it is clear from the question." },
            { q: "Do you need a dash in «Я заказал суп_ а друг_ салат» (I ordered soup, and my friend a salad)?", options: ["no, commas are enough", "yes, after друг, where the verb is missing", "yes, after суп"], answer: 1, why: "After друг the verb заказал is missing and there is a pause: Я заказал суп, а друг — салат." }
          ]
        }
      ]
    },
    {
      title: "Homogeneous parts of the sentence",
      titleRu: "Однородные члены предложения",
      topics: [
        {
          id: "g8-odnorodnye",
          title: "Lists and their punctuation",
          ru: "Однородные члены и знаки препинания при них",
          paras: "Однородные члены предложения",
          summary: "Homogeneous parts (однородные члены) are the items of a list: they answer the same question and depend on the same word. Whether you need a comma between them depends on the conjunction. Russian rules here are strict, with no optional commas.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "О, О, О.", example: "В саду росли яблони, груши, сливы.", caption: "Apple, pear and plum trees grew in the garden. No conjunctions: commas between all items." },
              { scheme: "О и О.", example: "Мы читали и писали.", caption: "We read and wrote. A single и (and): no comma." },
              { scheme: "О, О и О.", example: "Купили хлеб, молоко и сыр.", caption: "We bought bread, milk and cheese. и before the last item: no comma before и (never an 'Oxford comma')." },
              { scheme: "О, но О.", example: "Маленький, но смелый.", caption: "Small but brave. Contrast words а, но, однако (but, however): always a comma." },
              { scheme: "и О, и О, и О.", example: "И дождь, и ветер, и холод не остановили нас.", caption: "Neither rain nor wind nor cold stopped us. Repeated и: comma before the second и and after." },
              { scheme: "не только О, но и О.", example: "Он знает не только английский, но и немецкий.", caption: "He knows not only English but also German. Double conjunction: comma before the second part." },
              { scheme: "О и О, О и О.", example: "Старые и малые, мужчины и женщины вышли на улицу.", caption: "Old and young, men and women came out into the street. Pairs: comma between the pairs." }
            ]
          },
          explain: [
            "<b>Homogeneous parts</b> answer the same question, depend on the same word and play the same role in the sentence. They are joined by list intonation or by conjunctions.",
            "Any part of the sentence can form a list: subjects, predicates, objects, attributes, adverbials.",
            "Adjectives are <b>not homogeneous</b> if they describe a thing from different sides: <i>большой каменный дом</i> (a big stone house: size and material). No comma between them, as in English. Homogeneous adjectives describe the same side: <i>красные, жёлтые, оранжевые листья</i> (red, yellow, orange leaves).",
            "These are not lists and take no commas: <i>взял да и ушёл</i> (just up and left), <i>пойду посмотрю</i> (I'll go and look), and set phrases like <i>ни рыба ни мясо</i> (neither fish nor fowl), <i>и смех и грех</i> (funny and sad at once)."
          ],
          rule: "Single и: no comma. А, но: always a comma. Repeated и: comma before the second one.",
          examples: [
            { text: "Небо было чистым<u>,</u> но холодным.", tr: "The sky was clear but cold.", note: "contrast word но (but)" },
            { text: "Ни звука<u>,</u> ни шороха не было слышно.", tr: "Not a sound, not a rustle could be heard.", note: "repeated ни (neither/nor)" },
            { text: "Мы гуляли в парке или сидели дома.", tr: "We walked in the park or stayed at home.", note: "single или (or): no comma" }
          ],
          mistakes: [
            { wrong: "Он сел, и задумался.", right: "Он сел и задумался.", why: "He sat down and fell to thinking. A single и between two predicates: no comma." },
            { wrong: "Высокий, кирпичный дом.", right: "Высокий кирпичный дом.", why: "A tall brick house. The adjectives are not homogeneous: height and material." }
          ],
          quiz: [
            { q: "Where do you need a comma?", options: ["Мы пели_ и танцевали.", "Мы пели_ но не танцевали.", "Мы пели_ или танцевали."], answer: 1, why: "Always put a comma before но (but)." },
            { q: "What is the scheme of «И в поле, и в лесу было тихо» (It was quiet both in the field and in the forest)?", options: ["О и О.", "и О, и О.", "О, О."], answer: 1, why: "и is repeated before each item." },
            { q: "Are the adjectives homogeneous in «старый деревянный мост» (an old wooden bridge)?", options: ["yes, a comma is needed", "no, no comma"], answer: 1, why: "Age and material are different sides of the thing." }
          ]
        },
        {
          id: "g8-obobshchayushchie",
          title: "Generalizing words with lists",
          ru: "Обобщающие слова при однородных членах",
          paras: "Однородные члены предложения",
          summary: "A generalizing word (обобщающее слово) names the whole group that the list then spells out. Before the list Russian puts a colon, after it a dash.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "◯: О, О, О.", example: "В корзине были грибы: белые, подосиновики, лисички.", caption: "There were mushrooms in the basket: ceps, aspen boletes, chanterelles. ◯ is the generalizing word; it comes before the list, so a colon." },
              { scheme: "О, О, О — ◯.", example: "Белые, подосиновики, лисички — всё было в корзине.", caption: "Ceps, aspen boletes, chanterelles: everything was in the basket. The generalizing word comes after the list, so a dash." },
              { scheme: "◯: О, О, О — ...", example: "Все грибы: белые, подосиновики, лисички — лежали в корзине.", caption: "All the mushrooms (ceps, boletes, chanterelles) lay in the basket. A list in the middle: colon before it, dash after it." }
            ]
          },
          explain: [
            "A <b>generalizing word</b> has a wider meaning than the items of the list and plays the same role in the sentence. It is often <i>все</i> (all), <i>всё</i> (everything), <i>везде, всюду</i> (everywhere), <i>всегда</i> (always), <i>никто</i> (nobody), <i>ничто</i> (nothing), <i>нигде</i> (nowhere), or a group name (<i>цветы</i> flowers, <i>предметы</i> objects).",
            "If the generalizing word comes <b>before</b> the list, put a <b>colon</b> after it. English does the same.",
            "If the generalizing word comes <b>after</b> the list, put a <b>dash</b> before it.",
            "If the generalizing word is followed by <i>как-то, а именно, например</i> (namely, for example), put a comma before these words and a colon after them: <i>Мы изучали части речи, а именно: существительное, прилагательное, глагол.</i> (We studied parts of speech, namely: the noun, the adjective, the verb.)"
          ],
          rule: "Word in front: colon. Word after: dash.",
          examples: [
            { text: "<mark>Везде</mark><u>:</u> в поле, в лесу, у реки<u> —</u> лежал снег.", tr: "Everywhere (in the field, in the forest, by the river) there was snow.", note: "colon and dash" },
            { text: "Карандаши, ручки, тетради<u> —</u> <mark>всё</mark> лежало на столе.", tr: "Pencils, pens, exercise books: everything lay on the table.", note: "generalizing word after the list" },
            { text: "На клумбе росли <mark>цветы</mark><u>:</u> розы, астры, пионы.", tr: "Flowers grew in the flowerbed: roses, asters, peonies.", note: "generalizing word before the list" }
          ],
          mistakes: [
            { wrong: "Ручки, тетради, книги: всё было новым.", right: "Ручки, тетради, книги — всё было новым.", why: "Pens, exercise books, books: everything was new. The generalizing word всё comes after the list, so a dash." }
          ],
          quiz: [
            { q: "Which mark is needed: «В лесу растут деревья_ ели, сосны, берёзы» (Trees grow in the forest: firs, pines, birches)?", options: ["dash", "colon", "comma"], answer: 1, why: "The generalizing word деревья (trees) comes before the list." },
            { q: "Which mark is needed: «Мама, папа, бабушка_ все пришли на праздник» (Mum, Dad, Grandma: all came to the party)?", options: ["colon", "dash", "nothing"], answer: 1, why: "The generalizing word все (all) comes after the list." }
          ]
        }
      ]
    },
    {
      title: "Direct address, parenthetical words and insertions",
      titleRu: "Обращение, вводные слова и вставные конструкции",
      topics: [
        {
          id: "g8-obrashchenie",
          title: "Direct address",
          ru: "Обращение",
          paras: "Обращение",
          summary: "Direct address (обращение) names the person you are speaking to. As in English, it is set off with commas, and it is not a part of the sentence.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "Обр., ... .", example: "Мама, я пришёл.", caption: "Mum, I'm home. Address at the start: a comma after it." },
              { scheme: "Обр.! ... .", example: "Друзья! Поздравляю вас с праздником.", caption: "Friends! Happy holiday to you. Said with strong feeling: an exclamation mark." },
              { scheme: "..., обр., ... .", example: "Скажи, Петя, который час.", caption: "Tell me, Petya, what time it is. Address in the middle: commas on both sides." },
              { scheme: "..., обр.?", example: "Ты пойдёшь с нами, Аня?", caption: "Are you coming with us, Anya? Address at the end: a comma before it." }
            ]
          },
          explain: [
            "Direct address is usually a noun in the <b>nominative</b> case. It can be one word (<i>Оля</i>, Olya) or extended (<i>Дорогая Оля</i>, Dear Olya; <i>Мой милый друг</i>, My dear friend).",
            "Direct address is <b>not a part of the sentence</b>, so it is not underlined.",
            "The interjection <b>о</b> (O) before an address takes no comma: <i>О Родина моя!</i> (O my homeland!) Other interjections (<i>эй</i> hey, <i>ой</i> oh) are set off: <i>Эй, Петя, иди сюда!</i> (Hey, Petya, come here!)",
            "Don't mix up address and subject: <i>Аня, читай</i> (Anya, read: address) and <i>Аня читает</i> (Anya is reading: subject)."
          ],
          rule: "Direct address is set off by punctuation on both sides, wherever it stands.",
          examples: [
            { text: "Здравствуй<u>,</u> <mark>милая бабушка</mark>!", tr: "Hello, dear Grandma!", note: "extended address" },
            { text: "<mark>О море</mark>, как ты прекрасно!", tr: "O sea, how beautiful you are!", note: "о takes no comma" },
            { text: "Не грусти<u>,</u> <mark>друг</mark><u>,</u> всё наладится.", tr: "Don't be sad, my friend, everything will be fine.", note: "address in the middle" }
          ],
          mistakes: [
            { wrong: "Ребята пойдёмте в кино!", right: "Ребята, пойдёмте в кино!", why: "Guys, let's go to the cinema! Ребята is direct address, so it needs a comma after it." }
          ],
          quiz: [
            { q: "Which sentence has direct address?", options: ["Ученики пишут диктант.", "Ученики, пишите диктант.", "Я вижу учеников."], answer: 1, why: "'Pupils, write the dictation': the speaker is asking the pupils to act. Here ученики is not the subject." },
            { q: "How many commas are needed: «Скажи Оля ты готова к уроку?» (Tell me, Olya, are you ready for the lesson?)", options: ["one", "two", "none"], answer: 1, why: "Оля is in the middle and is set off on both sides: Скажи, Оля, ты готова к уроку?" }
          ]
        },
        {
          id: "g8-vvodnye",
          title: "Parenthetical words and insertions",
          ru: "Вводные слова и вставные конструкции",
          paras: "Вводные слова и вставные конструкции",
          summary: "Parenthetical words (вводные слова) show how the speaker feels about what is said, like English 'of course', 'unfortunately', 'in my opinion'. They are not parts of the sentence and are set off with commas.",
          diagram: {
            type: "cards",
            items: [
              { title: "Certainty", text: "the speaker is sure", example: "конечно, безусловно, разумеется (of course, certainly, naturally)" },
              { title: "Uncertainty", text: "the speaker is not sure", example: "кажется, вероятно, может быть (it seems, probably, maybe)" },
              { title: "Feelings", text: "joy, regret, surprise", example: "к счастью, к сожалению, к удивлению (luckily, unfortunately, surprisingly)" },
              { title: "Source", text: "whose words these are", example: "по-моему, по словам врача, говорят (in my opinion, according to the doctor, they say)" },
              { title: "Order of ideas", text: "how the parts connect", example: "во-первых, итак, следовательно (firstly, so, therefore)" },
              { title: "Way of saying", text: "how the idea is put", example: "словом, иначе говоря, одним словом (in short, in other words, in a word)" },
              { title: "Appeal to the listener", text: "to get attention", example: "видишь ли, послушай, представьте (you see, listen, imagine)" }
            ]
          },
          explain: [
            "You can remove a <b>parenthetical word</b> and the meaning stays the same. You can't ask a question to it, and it is not a part of the sentence.",
            "Parenthetical words are set off with <b>commas</b>: <i>Завтра, кажется, будет дождь.</i> (It will rain tomorrow, it seems.) In English these commas are sometimes optional; in Russian they are required.",
            "These words are <b>never</b> parenthetical and never take commas: <i>вдруг</i> (suddenly), <i>вряд ли</i> (hardly), <i>даже</i> (even), <i>будто</i> (as if), <i>именно</i> (exactly), <i>почти</i> (almost), <i>якобы</i> (supposedly), <i>приблизительно</i> (approximately), <i>всё-таки</i> (still).",
            "<b>Insertions</b> (вставные конструкции) add an extra comment said in passing. They go in <b>brackets</b> or between <b>dashes</b>, as in English: <i>Мой брат (он старше меня на три года) учится в университете.</i> (My brother (he is three years older than me) studies at university.)"
          ],
          rule: "Remove the word: same meaning, no question fits? It is parenthetical. Set it off with commas.",
          examples: [
            { text: "Он<u>,</u> <mark>к сожалению</mark><u>,</u> опоздал.", tr: "Unfortunately, he was late.", note: "parenthetical (feeling)" },
            { text: "<mark>Во-первых</mark><u>,</u> надо выучить правило.", tr: "Firstly, you need to learn the rule.", note: "order of ideas" },
            { text: "Задача <mark>казалась</mark> трудной.", tr: "The problem seemed difficult.", note: "here казалась is part of the predicate, not parenthetical" },
            { text: "Летом (это было в июле) мы ездили на море.", tr: "In the summer (it was in July) we went to the seaside.", note: "insertion in brackets" }
          ],
          mistakes: [
            { wrong: "Он, вряд ли, придёт.", right: "Он вряд ли придёт.", why: "He is unlikely to come. Вряд ли (hardly) is never parenthetical." },
            { wrong: "Он конечно прав.", right: "Он, конечно, прав.", why: "He is, of course, right. Конечно (of course) is parenthetical and needs commas." }
          ],
          quiz: [
            { q: "Which sentence has a parenthetical word?", options: ["Мы вдруг увидели зайца.", "Мы, наверное, увидим зайца.", "Мы даже увидели зайца."], answer: 1, why: "Наверное (probably) shows uncertainty. Вдруг (suddenly) and даже (even) are never parenthetical." },
            { q: "What does по-моему (in my opinion) express?", options: ["source", "order of ideas", "feelings"], answer: 0, why: "It shows whose opinion it is." },
            { q: "How are insertions marked?", options: ["with quotation marks", "with brackets or dashes", "with a colon"], answer: 1, why: "Insertions go in brackets or between dashes." }
          ]
        }
      ]
    },
    {
      title: "Set-off parts of the sentence",
      titleRu: "Обособленные члены предложения",
      topics: [
        {
          id: "g8-obosoblennye-opredeleniya",
          title: "Set-off attributes and appositions",
          ru: "Обособленные определения и приложения",
          paras: "Обособленные члены предложения",
          summary: "Some attributes and appositions are set off (обособлены) with commas and intonation. Whether they are depends on their position and on the word they describe, not on meaning alone as in English.",
          diagram: {
            type: "flow",
            title: "Do you set off an agreeing attribute with commas?",
            steps: [
              { q: "Does it describe a personal pronoun (я, ты, он, мы...)?", yes: "Always set off: Усталые, мы вернулись домой. (Tired, we went home.)", no: null },
              { q: "Does it come after its noun, and is it a participle phrase or two single adjectives?", yes: "Set off: Дорога, ведущая к лесу, была узкой. (The road leading to the forest was narrow.) Ночь, тёплая и тихая, опустилась на город. (Night, warm and quiet, fell on the town.)", no: null },
              { q: "Does it come before its noun but give a reason?", yes: "Set off: Утомлённые дорогой, туристы быстро уснули. (Tired from the road, the tourists soon fell asleep: because they were tired.)", no: "Not set off: Ведущая к лесу дорога была узкой. (The road leading to the forest was narrow.)" }
            ]
          },
          explain: [
            "<b>Setting off</b> (обособление) means marking a secondary part with intonation; in writing, with commas.",
            "A <b>participle phrase</b> (причастный оборот: a participle with its own dependent words) is set off if it comes <b>after</b> its noun: <i>Листья, сорванные ветром, кружились.</i> (The leaves torn off by the wind were whirling.) Before the noun it is usually not set off: <i>Сорванные ветром листья кружились.</i> Note: English uses commas here only for extra information; Russian uses them whenever the phrase follows the noun.",
            "<b>Appositions</b> are set off if they describe a personal pronoun (<i>Он, опытный врач, сразу понял причину.</i> He, an experienced doctor, saw the cause at once.) or if they are extended and come after a noun (<i>Мой сосед, учитель истории, часто рассказывает о прошлом.</i> My neighbour, a history teacher, often talks about the past.).",
            "An apposition with <b>как</b> (as) is set off if it gives a reason: <i>Как старший, он отвечал за младших.</i> (As the eldest, he was responsible for the younger ones.)"
          ],
          rule: "Phrase after the noun or with a personal pronoun: commas. Phrase before the noun: no commas.",
          examples: [
            { text: "Мальчик<u>,</u> <mark>увлечённый книгой</mark><u>,</u> не слышал звонка.", tr: "The boy, absorbed in his book, didn't hear the bell.", note: "participle phrase after the noun" },
            { text: "<mark>Увлечённый книгой</mark> мальчик не слышал звонка.", tr: "The boy absorbed in his book didn't hear the bell.", note: "before the noun: no commas" },
            { text: "Минск<u>,</u> <mark>столица Беларуси</mark><u>,</u> красив весной.", tr: "Minsk, the capital of Belarus, is beautiful in spring.", note: "extended apposition" }
          ],
          mistakes: [
            { wrong: "Освещённая солнцем, поляна сверкала.", right: "Освещённая солнцем поляна сверкала.", why: "The sunlit glade sparkled. The phrase comes before the noun and gives no reason, so no comma." }
          ],
          quiz: [
            { q: "Which sentence needs commas?", options: ["Покрытые снегом деревья стояли неподвижно.", "Деревья покрытые снегом стояли неподвижно.", "Покрытые снегом сосны и ели стояли неподвижно."], answer: 1, why: "The participle phrase покрытые снегом (covered with snow) comes after the noun деревья (trees)." },
            { q: "Do you set it off: «Взволнованная она не могла говорить» (Upset, she couldn't speak)?", options: ["yes", "no"], answer: 0, why: "The attribute describes the personal pronoun она (she): Взволнованная, она не могла говорить." },
            { q: "Where is the apposition set off?", options: ["река Свислочь", "Мой друг, отличный шахматист, победил в турнире.", "город-герой"], answer: 1, why: "'My friend, an excellent chess player, won the tournament': an extended apposition after the noun." }
          ]
        },
        {
          id: "g8-obosoblennye-obstoyatelstva",
          title: "Set-off adverbials and clarifying parts",
          ru: "Обособленные обстоятельства и уточняющие члены",
          paras: "Обособленные члены предложения",
          summary: "Adverbial participle phrases and single adverbial participles are usually set off with commas. Clarifying parts explain another word more precisely and are set off too.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Set off", "Not set off"],
              ["Adverbial participle phrase", "Он шёл, <u>глядя под ноги</u>. (He walked, looking at his feet.)", "an idiom: работать <u>спустя рукава</u> (to work carelessly)"],
              ["Single adverbial participle", "<u>Улыбаясь</u>, она вошла. (Smiling, she came in.)", "close to an adverb: читать <u>лёжа</u> (read lying down), ехать <u>стоя</u> (ride standing)"],
              ["Phrase with несмотря на (despite)", "<u>Несмотря на дождь</u>, мы пошли гулять. (Despite the rain, we went for a walk.)", "no such case: always set off"],
              ["Clarifying part", "<u>Внизу, под горой</u>, шумела река. (Below, at the foot of the hill, a river roared.)", "if it doesn't clarify: Внизу шумела река. (A river roared below.)"]
            ]
          },
          explain: [
            "An <b>adverbial participle</b> (деепричастие) is a verb form like English '-ing' in 'Smiling, she came in'. An adverbial participle phrase is <b>always</b> set off, wherever it stands: <i>Закончив работу, мы ушли. Мы ушли, закончив работу.</i> (Having finished work, we left. We left after finishing work.)",
            "A <b>single</b> adverbial participle is usually set off too. It is not set off if it works like an adverb and answers <i>как?</i> (how?): <i>сидел молча</i> (sat in silence), <i>читал лёжа</i> (read lying down). Idioms are not set off either: <i>сломя голову</i> (at breakneck speed), <i>засучив рукава</i> (rolling up one's sleeves, i.e. working hard).",
            "An adverbial with <b>несмотря на</b> (despite) is always set off.",
            "A <b>clarifying part</b> (уточняющий член) comes after the word it clarifies and makes it more exact: place, time, manner. Most often adverbials are clarified: <i>Завтра, в шесть часов, начнётся концерт.</i> (Tomorrow, at six o'clock, the concert will begin.) It may start with <i>то есть, именно, особенно, даже, в том числе, например</i> (that is, namely, especially, even, including, for example): <i>Все, в том числе и я, пришли вовремя.</i> (Everyone, including me, came on time.)"
          ],
          rule: "Adverbial participle phrase: always in commas. Idiom: no commas.",
          examples: [
            { text: "<mark>Прочитав книгу</mark><u>,</u> я вернул её в библиотеку.", tr: "Having read the book, I returned it to the library.", note: "adverbial participle phrase" },
            { text: "Он бежал <mark>сломя голову</mark>.", tr: "He ran at breakneck speed.", note: "idiom: not set off" },
            { text: "Летом<u>,</u> <mark>в июле</mark><u>,</u> мы ездили к бабушке.", tr: "In the summer, in July, we went to see Grandma.", note: "clarifying adverbial of time" }
          ],
          mistakes: [
            { wrong: "Он работал, не покладая рук.", right: "Он работал не покладая рук.", why: "He worked tirelessly. Не покладая рук is an idiom, so no comma." },
            { wrong: "Выйдя на улицу я увидел друга.", right: "Выйдя на улицу, я увидел друга.", why: "Going out into the street, I saw a friend. An adverbial participle phrase is set off." }
          ],
          quiz: [
            { q: "Where do you need a comma?", options: ["Он слушал_ затаив дыхание (idiom).", "Сделав уроки_ я пошёл гулять.", "Она сидела_ молча."], answer: 1, why: "Сделав уроки (having done my homework) is an adverbial participle phrase, so it is set off." },
            { q: "Which part clarifies in «Вдали, у самого горизонта, виднелся лес» (In the distance, right at the horizon, a forest could be seen)?", options: ["вдали", "у самого горизонта", "лес"], answer: 1, why: "У самого горизонта (right at the horizon) says where exactly вдали (in the distance) is." },
            { q: "Do you set it off: «Несмотря на усталость мы продолжали путь» (Despite being tired, we went on)?", options: ["yes", "no"], answer: 0, why: "Phrases with несмотря на (despite) are always set off." }
          ]
        }
      ]
    }
  ]
};
