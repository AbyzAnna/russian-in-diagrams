window.GRADES = window.GRADES || {};
window.GRADES[11] = {
  grade: 11,
  book: "Russian Language, Grade 11",
  bookRu: "Русский язык. 11 класс",
  authors: "E. E. Dolbik et al.",
  year: 2021,
  pdf: "https://mgouor.by/wp-content/uploads/2024/01/rus_yaz_11kl_dolbik_bel_rus_2021.pdf",
  level: "Advanced",
  intro: "Grade 11 reviews Russian syntax and punctuation as a whole. The focus is on syntax norms (how to build phrases and sentences correctly, for example which case a word needs) and on the system of punctuation marks. You also learn how to write a short essay in Russian.",
  glossary: [
    { ru: "норма", en: "norm", hint: "the accepted, correct way to say or write something, as recorded in dictionaries" },
    { ru: "управление", en: "government", hint: "one word requires a certain case from another: оплатить проезд (accusative), согласно приказу (dative)" },
    { ru: "согласование", en: "agreement", hint: "words match in gender, number and case: новая книга, новые книги" },
    { ru: "подлежащее", en: "subject", hint: "who or what the sentence is about: <i>Поезд</i> пришёл (The train arrived)" },
    { ru: "сказуемое", en: "predicate", hint: "what is said about the subject, usually the verb: Поезд <i>пришёл</i>" },
    { ru: "однородные члены", en: "parallel (homogeneous) parts of a sentence", hint: "words with the same role, joined by и, или or commas: хлеб и молоко" },
    { ru: "обособленный член", en: "set-off phrase", hint: "a phrase marked off by commas on both sides, like a participle or adverbial participle phrase" },
    { ru: "вводное слово", en: "parenthetical word", hint: "a word that shows the speaker's attitude and is not part of the grammar: наверное (probably), к счастью (luckily)" },
    { ru: "деепричастие", en: "adverbial participle", hint: "a verb form like English '-ing' in 'Having finished, we left': закончив работу" },
    { ru: "сложносочинённое предложение (ССП)", en: "compound sentence", hint: "equal clauses joined by и, а, но: Солнце село, и стало прохладно" },
    { ru: "сложноподчинённое предложение (СПП)", en: "complex sentence", hint: "a main clause plus a dependent clause with что, когда, который: Я знаю, что ты прав" },
    { ru: "бессоюзное сложное предложение (БСП)", en: "conjunctionless compound sentence", hint: "clauses joined with no conjunction, only by meaning and punctuation: Я понял: мы опоздали" },
    { ru: "прямая речь / косвенная речь", en: "direct speech / indirect (reported) speech", hint: "«Я приду», — сказал он. / Он сказал, что придёт." },
    { ru: "тире", en: "dash", hint: "the long dash (—), used much more often in Russian than in English" },
    { ru: "тезис", en: "thesis", hint: "the main idea that an essay argues for" }
  ],
  sections: [
    {
      title: "Review: the Russian language in general",
      titleRu: "Повторение. Общие сведения о языке",
      topics: [
        {
          id: "g11-normy",
          title: "Norms of standard Russian",
          ru: "Нормы русского литературного языка",
          paras: "§ 2",
          summary: "A <b>norm</b> (норма) is the accepted, correct way to use words, forms and sentence patterns. Norms are grouped by level of language: sounds, words, grammar, writing.",
          diagram: {
            type: "tree",
            root: {
              label: "Norms of standard Russian (нормы литературного языка)",
              children: [
                { label: "Pronunciation (орфоэпические)", note: "sounds and stress: звони́т, краси́вее" },
                { label: "Lexical (лексические)", note: "choosing the right word: надеть пальто (put on a coat), одеть ребёнка (dress a child)" },
                {
                  label: "Grammatical (грамматические)",
                  children: [
                    { label: "Morphological (морфологические)", note: "word forms: много туфель (many shoes), пара носков (a pair of socks)" },
                    { label: "Syntactic (синтаксические)", note: "phrases and sentences: согласно приказу (according to the order)" }
                  ]
                },
                {
                  label: "Writing (правописные)",
                  note: "only for written language",
                  children: [
                    { label: "Spelling (орфографические)", note: "how words are spelled" },
                    { label: "Punctuation (пунктуационные)", note: "punctuation marks" }
                  ]
                }
              ]
            }
          },
          explain: [
            "A <b>language norm</b> (языковая норма) is a rule that society accepts for pronunciation, word choice, word forms and sentence building. Norms are recorded in dictionaries and reference books. English has the same idea: 'between you and I' is heard, but 'between you and me' is the standard form.",
            "Norms are grouped by level. <b>Pronunciation norms</b> (орфоэпические) cover sounds and stress. <b>Lexical norms</b> (лексические) cover the choice of word. <b>Grammatical norms</b> cover word forms (morphological) and the structure of phrases and sentences (syntactic).",
            "Written language also has <b>spelling norms</b> (орфографические) and <b>punctuation norms</b> (пунктуационные). In grade 11 the main focus is on syntax and punctuation."
          ],
          rule: "Not sure what is correct? Check a dictionary: a pronunciation dictionary, an explanatory dictionary or a grammar dictionary.",
          examples: [
            { text: "звон<u>и́</u>т, нач<u>а́</u>ть, катал<u>о́</u>г", tr: "(he) rings / calls, to begin, catalogue", note: "pronunciation norm: where the stress falls" },
            { text: "<mark>надеть</mark> куртку, <mark>одеть</mark> сестру", tr: "to put on a jacket, to dress (one's) sister", note: "lexical norm: надеть = put something on yourself; одеть = dress someone else" },
            { text: "много <mark>туфель</mark>, пара <mark>носков</mark>", tr: "many shoes, a pair of socks", note: "morphological norm: the correct genitive plural forms" },
            { text: "<mark>согласно</mark> расписани<u>ю</u>", tr: "according to the timetable", note: "syntactic norm: согласно needs the dative case" }
          ],
          mistakes: [
            { wrong: "зво́нит", right: "звони́т", why: "In the forms of звонить (to ring, to call) the stress falls on the ending: звони́т, звони́шь, звоня́т." },
            { wrong: "ложит в портфель", right: "кладёт в портфель", why: "The verb ложить is not used in standard Russian. 'Puts (into the bag)' is кладёт." }
          ],
          quiz: [
            { q: "Which norm is broken in «согласно приказа директора» (according to the director's order)?", options: ["pronunciation", "lexical", "syntactic"], answer: 2, why: "The preposition согласно needs the dative case: согласно приказу. Which case a word requires is a syntactic norm." },
            { q: "Which norm decides the stress in the word «каталог» (catalogue)?", options: ["pronunciation", "morphological", "punctuation"], answer: 0, why: "Sounds and stress are pronunciation norms: катало́г." }
          ]
        },
        {
          id: "g11-funkcii-yazyka",
          title: "Functions of language. Language and society",
          ru: "Функции языка. Язык и общество",
          paras: "§ 4–5",
          summary: "Language is a tool for communication, for thinking and for learning about the world. It also names things, expresses feelings and keeps contact between people.",
          diagram: {
            type: "compare",
            rows: [
              ["Function", "What language does", "Example"],
              ["Communicative (коммуникативная)", "lets people talk and share information", "Передай, пожалуйста, учебник. (Pass me the textbook, please.)"],
              ["Thinking (мыслительная)", "helps us form and express thoughts", "Мы думаем при помощи слов и предложений. (We think with words and sentences.)"],
              ["Cognitive, or accumulative (познавательная, аккумулятивная)", "helps us learn about the world; stores and passes on a people's experience", "словари, книги, пословицы (dictionaries, books, proverbs)"],
              ["Naming (номинативная)", "gives names to things, qualities, actions", "смартфон, вдохновение, бежать (smartphone, inspiration, to run)"],
              ["Emotive, or expressive (эмотивная)", "expresses feelings and mood", "Как же здорово! (How great!)"],
              ["Phatic (фатическая)", "starts and keeps contact", "Привет! Как дела? (Hi! How are you?)"]
            ]
          },
          explain: [
            "The textbook names three <b>main functions</b> of language. <b>Communicative</b> (коммуникативная): language is how people communicate. <b>Thinking</b> (мыслительная): language is a key form of thought. <b>Cognitive</b> (познавательная): through language we form ideas about the world and keep knowledge.",
            "There are other functions too: <b>naming</b> (номинативная), <b>emotive</b> (эмотивная, expressing feelings) and <b>phatic</b> (фатическая, keeping contact, like English 'How are you?' when nobody expects a real answer). Usually one sentence does several jobs at once.",
            "Language is closely tied to thinking: a thought takes shape in words. It is also tied to society: it changes together with it. New words appear, and old ones go out of use.",
            "Russian linguistics separates <b>язык</b> (language) and <b>речь</b> (speech). Язык is the system of signs and rules. Речь is the use of that system in a real situation, spoken or written."
          ],
          examples: [
            { text: "Сегодня в 15.00 состоится классный час.", tr: "Today at 3 p.m. there will be a class meeting.", note: "communicative function: giving information" },
            { text: "Доброе утро! Как спалось?", tr: "Good morning! Did you sleep well?", note: "phatic function: keeping contact" },
            { text: "Ура, мы победили!", tr: "Hooray, we won!", note: "emotive function: expressing a feeling" }
          ],
          quiz: [
            { q: "Which function is the main one in «Доброе утро! Как спалось?» (Good morning! Did you sleep well?)", options: ["cognitive", "phatic", "naming"], answer: 1, why: "The goal is not to give new information but to make and keep contact. That is the phatic function." },
            { q: "Which function is also called 'accumulative'?", options: ["communicative", "emotive", "cognitive"], answer: 2, why: "Accumulative means 'storing up': language stores and passes on knowledge and experience. That is the cognitive function." }
          ]
        }
      ]
    },
    {
      title: "Phrases and the simple sentence",
      titleRu: "Словосочетание и простое предложение",
      topics: [
        {
          id: "g11-upravlenie",
          title: "Phrases: which case a word requires",
          ru: "Словосочетание: синтаксическая норма",
          paras: "§ 9",
          summary: "In a phrase the main word requires a certain case (and sometimes a preposition) from the dependent word. Using the wrong case or preposition is a grammar mistake.",
          diagram: {
            type: "compare",
            rows: [
              ["Correct", "Wrong", "Why"],
              ["оплатить проезд (pay the fare)", "оплатить за проезд", "оплатить + accusative, no preposition"],
              ["заплатить за проезд (pay for the fare)", "заплатить проезд", "заплатить за + accusative"],
              ["согласно приказу (according to the order)", "согласно приказа", "согласно + dative"],
              ["благодаря другу (thanks to a friend), вопреки совету (despite the advice)", "благодаря друга, вопреки совета", "благодаря, вопреки + dative"],
              ["по приезде (on arrival), по окончании (on finishing)", "по приезду, по окончанию", "по meaning 'after' + prepositional"],
              ["уделять внимание учёбе (pay attention to studies)", "уделять внимание на учёбу", "уделять + dative, but обращать внимание на + accusative"]
            ]
          },
          explain: [
            "A <b>phrase</b> (словосочетание) has a main word and a dependent word. They can be linked in three ways: <b>agreement</b> (согласование), where the words match: новая книга (a new book); <b>government</b> (управление), where the main word requires a case: читать книгу (read a book); and <b>adjoining</b> (примыкание), where the dependent word does not change: читать вслух (read aloud).",
            "Most mistakes are in <b>government</b>. Words with similar meanings can require different forms. English has the same problem: you 'pay the bill' but 'pay for the meal'. Russian: <i>оплатить что</i> (оплатить проезд, no preposition, accusative), but <i>заплатить за что</i> (заплатить за проезд). Also <i>уделять внимание чему</i> (dative), but <i>обращать внимание на что</i> (на + accusative); both mean 'pay attention to'.",
            "The prepositions <i>согласно</i> (according to), <i>благодаря</i> (thanks to) and <i>вопреки</i> (despite) take the <b>dative</b>: <i>согласно правилам, благодаря помощи</i>. The preposition <i>по</i> meaning 'after, upon' takes the <b>prepositional</b>: <i>по прибытии</i> (upon arrival), <i>по завершении</i> (upon completion)."
          ],
          rule: "Оплатить what (no preposition), заплатить for what (за). Согласно, благодаря, вопреки + dative. По приезде = after arriving.",
          examples: [
            { text: "<mark>оплатить</mark> покупк<u>у</u>", tr: "to pay for a purchase", note: "accusative, no preposition (unlike English 'pay for')" },
            { text: "<mark>заплатить</mark> <u>за</u> покупку", tr: "to pay for a purchase", note: "preposition за + accusative" },
            { text: "<mark>согласно</mark> график<u>у</u>, <mark>вопреки</mark> прогноз<u>у</u>", tr: "according to the schedule, despite the forecast", note: "dative case" },
            { text: "<mark>по</mark> окончани<u>и</u> школы", tr: "after finishing school", note: "по + prepositional, meaning 'after'" }
          ],
          mistakes: [
            { wrong: "согласно расписания", right: "согласно расписанию", why: "Согласно (according to) is used only with the dative case." },
            { wrong: "по приезду домой", right: "по приезде домой", why: "When по means 'after', it takes the prepositional case. (По приезде домой = after getting home.)" },
            { wrong: "оплатить за услуги", right: "оплатить услуги / заплатить за услуги", why: "Two patterns are mixed: оплатить что and заплатить за что. Both mean 'pay for the services'." }
          ],
          quiz: [
            { q: "Which one is correct?", options: ["оплатить за обед", "заплатить за обед", "оплатить за билет"], answer: 1, why: "Заплатить за + accusative, but оплатить + accusative with no preposition: оплатить обед, оплатить билет." },
            { q: "Choose the correct form: «по ... каникул» (after the holidays end)", options: ["окончанию", "окончание", "окончании"], answer: 2, why: "По meaning 'after' takes the prepositional case: по окончании." },
            { q: "Choose the correct form: «согласно ...» (according to the court's decision)", options: ["решению суда", "решения суда", "решением суда"], answer: 0, why: "Согласно takes only the dative case: согласно решению." }
          ]
        },
        {
          id: "g11-poryadok-slov",
          title: "Types of simple sentences. Word order",
          ru: "Виды простых предложений. Порядок слов",
          paras: "§ 10",
          summary: "Russian word order is free, but not random: new and important information usually comes at the end. Logical stress marks the key word.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Direct order", "Inverted order (инверсия)"],
              ["Subject and predicate", "subject before the verb: Поезд пришёл. (The train arrived.)", "verb before the subject: Пришёл поезд. (A train arrived.)"],
              ["Agreeing adjective", "before the noun: дремучий лес (a dense forest)", "after the noun: лес дремучий"],
              ["Object", "after the verb: Брат купил книгу. (My brother bought the book.)", "before the verb: Книгу купил брат. (It was my brother who bought the book.)"],
              ["Where you find it", "scientific and official style", "fiction, everyday speech, journalism"]
            ]
          },
          explain: [
            "Simple sentences are classified by purpose (statements, questions, requests or commands), by intonation (exclamatory or not), by main parts (with both subject and predicate, or with only one main part), by extra parts (extended or bare) and by completeness (complete or <b>incomplete</b>, where a part is left out because it is clear from context).",
            "Because Russian endings show who does what, word order is free to do another job: it shows what is <b>known</b> and what is <b>new</b>. Known information comes first, new information last. English often does this with articles: <i>В класс вошла учительница</i> = 'A teacher came into the classroom' (new: who came in); <i>Учительница вошла в класс</i> = 'The teacher came into the classroom' (new: where she went). Russian has no articles, so word order does this work.",
            "<b>Logical stress</b> (логическое ударение) marks the most important word. In speech you stress it with your voice. In writing you usually put it at the end of the sentence."
          ],
          examples: [
            { text: "Завтра в Минск едет <mark>наш класс</mark>.", tr: "Tomorrow it is our class that is going to Minsk.", note: "key point: who is going" },
            { text: "Завтра наш класс едет <mark>в Минск</mark>.", tr: "Tomorrow our class is going to Minsk.", note: "key point: where" },
            { text: "Наш класс едет в Минск <mark>завтра</mark>.", tr: "Our class is going to Minsk tomorrow.", note: "key point: when" }
          ],
          quiz: [
            { q: "In «В комнату вошла учительница» (A teacher came into the room), which word carries the new information?", options: ["комнату", "вошла", "учительница"], answer: 2, why: "New information usually comes at the end of a Russian sentence." },
            { q: "What is инверсия?", options: ["inverted (reversed) word order", "repeating a word", "leaving out a part of the sentence"], answer: 0, why: "Inversion changes the usual word order, for example the verb comes before the subject." },
            { q: "Which sentence is incomplete (неполное)?", options: ["Светает. (It is getting light.)", "— Куда ты идёшь? — В библиотеку. (Where are you going? To the library.)", "Ночь была тихой. (The night was quiet.)"], answer: 1, why: "The answer «В библиотеку» leaves out the subject and the verb; they are clear from the question. «Светает» is a complete sentence with one main part." }
          ]
        },
        {
          id: "g11-soglasovanie-skazuemogo",
          title: "Verb agreement with 'five students'",
          ru: "Сказуемое при подлежащем «пять учеников»",
          paras: "§ 11.2",
          summary: "When the subject is a number plus a noun (пять учеников, five students), the verb can be singular or plural. The choice depends on the meaning.",
          diagram: {
            type: "flow",
            title: "Singular or plural verb?",
            steps: [
              { q: "Does the number end in 'one' (21, 31, 101: двадцать один, тридцать один)?", yes: "Singular: «Двадцать один ученик пришёл». (Twenty-one students came.)", no: null },
              { q: "Is there a word like все (all), эти (these), данные (the given)?", yes: "Plural: «Все пять учеников пришли». (All five students came.)", no: null },
              { q: "Does the verb mean being, existing or time passing (было, прошло, осталось, исполнилось)?", yes: "Singular, neuter: «Прошло пять лет». (Five years passed.) «В классе было двадцать учеников». (There were twenty students in the class.)", no: null },
              { q: "Is the subject people, each acting actively on their own?", yes: "Plural: «Пять учеников ответили у доски». (Five students answered at the board.)", no: "Singular is better: «На столе лежало пять книг». (Five books lay on the table.)" }
            ]
          },
          explain: [
            "First, a reminder: in Russian, numbers change the case of the noun. After 2, 3, 4 you use the genitive singular, after 5 and up the genitive plural: <i>два стола</i> (two tables), <i>пять столов</i> (five tables). The same goes for words like <i>много</i> (many), <i>несколько</i> (several), <i>большинство</i> (most): <i>несколько книг, большинство ребят</i>. When such a group is the subject, the verb can be <b>singular or plural</b>. In English it is always plural ('five students came'), so this needs attention.",
            "Use the <b>plural</b> when you want to show that each person acts actively and separately: <i>Пять учеников ответили на вопросы</i> (Five students answered the questions). The plural is required if there is a word like <i>все</i> (all), <i>эти</i> (these), <i>данные</i> (the given): <i>Все пять учеников пришли</i>.",
            "Use the <b>singular</b> (in the past tense, the neuter form, ending in -о) when the things are not alive, or when the verb means being, existing or time passing: <i>Прошло два года</i> (Two years passed). <i>В зале было сто мест</i> (The hall had a hundred seats). With <i>большинство</i> (majority), <i>меньшинство</i> (minority), <i>ряд</i> (a number of), <i>часть</i> (part) the singular is also usual: <i>Большинство учеников сдало зачёт</i>.",
            "If the number ends in <i>один</i> (one), the verb and the noun are singular: <i>Двадцать один ученик пришёл</i> (Twenty-one students came; literally 'twenty-one student came')."
          ],
          rule: "People acting, each on their own: plural. Being, time, amount: singular (neuter in the past). Number ending in 'one': singular.",
          examples: [
            { text: "Пять учеников <u>пришли</u> на консультацию.", tr: "Five students came to the tutorial.", note: "each came on their own: an active action" },
            { text: "В классе <u>было</u> двадцать пять учеников.", tr: "There were twenty-five students in the class.", note: "being, amount: singular neuter" },
            { text: "<mark>Все</mark> десять участников <u>получили</u> дипломы.", tr: "All ten participants received certificates.", note: "все requires the plural" },
            { text: "Тридцать один человек <u>принял</u> участие в олимпиаде.", tr: "Thirty-one people took part in the competition.", note: "number ending in один: singular" },
            { text: "<mark>Большинство</mark> учеников <u>сдало</u> зачёт.", tr: "Most of the students passed the test.", note: "with большинство the singular is usual" }
          ],
          mistakes: [
            { wrong: "Прошли два года.", right: "Прошло два года.", why: "The verb is about time passing, so it is singular neuter. (Two years passed.)" },
            { wrong: "Двадцать один ученик пришли.", right: "Двадцать один ученик пришёл.", why: "The number ends in один, so the verb is singular." }
          ],
          quiz: [
            { q: "Choose: «Все четыре окна ... открыты» (All four windows were open).", options: ["было", "были"], answer: 1, why: "With все (all) the verb is plural." },
            { q: "Which sentence is correct? (Three weeks passed.)", options: ["Прошли три недели.", "Прошла три недели.", "Прошло три недели."], answer: 2, why: "The verb is about time passing: singular, neuter." },
            { q: "Choose: «Двадцать один студент ...» (Twenty-one students passed the exam.)", options: ["сдали экзамен", "сдал экзамен"], answer: 1, why: "With a number ending in один the verb is singular." }
          ]
        },
        {
          id: "g11-tire-podlezhashchee",
          title: "The dash between subject and predicate",
          ru: "Тире между подлежащим и сказуемым",
          paras: "§ 11.3, § 12",
          summary: "Russian drops the verb 'to be' in the present tense. In writing, a dash (тире) often marks that gap, when both main parts are nouns in the nominative, numbers or infinitives.",
          diagram: {
            type: "flow",
            title: "Do you need a dash between subject and predicate?",
            steps: [
              { q: "Is there a не (not) before the predicate?", yes: "No dash: «Бедность не порок». (Poverty is no vice.)", no: null },
              { q: "Is the predicate joined by как, будто, словно, точно (like, as if)?", yes: "Usually no dash: «Пруд как зеркало». (The pond is like a mirror.)", no: null },
              { q: "Is the subject a personal pronoun (я, ты, он...)?", yes: "No dash: «Я ученик». (I am a student.)", no: null },
              { q: "Is there это, вот, значит, это значит before the predicate?", yes: "Put the dash before that word: «Книга — это источник знаний». (A book is a source of knowledge.)", no: null },
              { q: "Are both main parts a noun in the nominative, a number or an infinitive (in any combination)?", yes: "Dash: «Минск — столица Беларуси» (Minsk is the capital of Belarus), «Дважды два — четыре» (Two times two is four), «Наша цель — учиться» (Our goal is to learn).", no: "No dash: «Небо голубое» (The sky is blue): the predicate is an adjective." }
            ]
          },
          explain: [
            "The <b>predicate</b> (сказуемое) can be a simple verb (<i>читает</i>, reads), a verb plus an infinitive (<i>хочу читать</i>, I want to read) or a linking verb plus a noun or adjective (<i>был учителем</i>, was a teacher; <i>стал взрослым</i>, became an adult). In the present tense the linking verb 'to be' is usually left out: Russian says 'Minsk capital of Belarus'. In writing a <b>dash</b> sometimes stands in that place.",
            "Put a dash when the subject and predicate are nouns in the nominative, numbers or infinitives, in any combination: <i>Минск — столица Беларуси. Дважды два — четыре. Наша цель — учиться.</i> A dash also goes before <i>это</i> (this is), <i>вот</i> (here is), <i>значит</i> (means): <i>Жить — значит творить</i> (To live means to create).",
            "Usually there is no dash if the subject is a personal pronoun, if the predicate has <i>не</i> (not) or a comparison word (<i>как, будто</i>): <i>Я ученик. Бедность не порок. Пруд как зеркало.</i> There is also no dash when the predicate is an adjective: <i>Небо голубое.</i>"
          ],
          rule: "Noun + noun (nominative), number + number, infinitive + infinitive: dash. With не, как, or я/ты/он as the subject: no dash.",
          examples: [
            { text: "Дружба <u>—</u> великая сила.", tr: "Friendship is a great force.", note: "noun + noun" },
            { text: "Жить <u>—</u> Родине служить.", tr: "To live is to serve your Motherland.", note: "infinitive + infinitive (a saying)" },
            { text: "Шестью пять <u>—</u> тридцать.", tr: "Six times five is thirty.", note: "number + number" },
            { text: "<mark>Он</mark> студент.", tr: "He is a student.", note: "subject is a pronoun: no dash" },
            { text: "Смелость <mark>не</mark> безрассудство.", tr: "Courage is not recklessness.", note: "не before the predicate: no dash" }
          ],
          mistakes: [
            { wrong: "Я — ученик одиннадцатого класса.", right: "Я ученик одиннадцатого класса.", why: "The subject is a personal pronoun, so no dash is needed (unless you want special emphasis). (I am an eleventh-grade student.)" },
            { wrong: "Берёза — красивая.", right: "Берёза красивая.", why: "The predicate is an adjective, so there is no dash. (The birch is beautiful.)" }
          ],
          quiz: [
            { q: "Which sentence needs a dash?", options: ["Он (?) мой друг. (He is my friend.)", "Полоцк (?) древний город. (Polotsk is an ancient town.)", "Озеро (?) как зеркало. (The lake is like a mirror.)"], answer: 1, why: "Subject and predicate are both nouns in the nominative: Полоцк — древний город." },
            { q: "Why is there no dash in «Смелость не безрассудство» (Courage is not recklessness)?", options: ["the predicate is an adjective", "the subject is a pronoun", "there is не before the predicate"], answer: 2, why: "Не before the predicate removes the dash." }
          ]
        },
        {
          id: "g11-vtorostepennye",
          title: "Secondary parts: 'two big tables', appositions",
          ru: "Второстепенные члены: «два больших стола», приложение",
          paras: "§ 13",
          summary: "After два, три, четыре (two, three, four) an adjective goes in the genitive or the nominative plural, depending on the noun's gender. With a name in quotation marks, the verb agrees with the general word (газета, журнал).",
          diagram: {
            type: "compare",
            rows: [
              ["Case", "Adjective form", "Example"],
              ["Masculine noun, adjective between number and noun", "genitive plural", "два больших стола (two big tables)"],
              ["Neuter noun, adjective between number and noun", "genitive plural", "три новых окна (three new windows)"],
              ["Feminine noun, adjective between number and noun", "usually nominative plural", "две большие комнаты (two big rooms)"],
              ["Adjective before the number", "nominative plural, any gender", "последние два дня (the last two days), каждые три часа (every three hours)"]
            ]
          },
          explain: [
            "The secondary parts of a sentence are: the <b>attribute</b> (определение, describes a noun), the <b>apposition</b> (приложение, a noun that renames another noun: <i>город-герой</i>, hero city), the <b>object</b> (дополнение) and the <b>adverbial</b> (обстоятельство: place, time, reason, purpose, manner and others).",
            "An <b>infinitive</b> can be any secondary part: an object (<i>попросил помочь</i>, asked to help), an attribute (<i>желание учиться</i>, the wish to learn) or an adverbial of purpose (<i>пришёл посоветоваться</i>, came to ask for advice). English uses 'to + verb' in the same ways.",
            "After <i>два, три, четыре</i> the noun is genitive singular (<i>два стола</i>). But an adjective between the number and a <b>masculine or neuter</b> noun goes in the <b>genitive plural</b>: <i>два больших стола</i>. With a <b>feminine</b> noun the <b>nominative plural</b> is more common: <i>две большие комнаты</i>. If the adjective comes before the number, it is nominative plural: <i>последние два дня</i>.",
            "If a general word like <i>газета</i> (newspaper) has a name in quotation marks, the verb agrees with the general word: <i>Газета «Звязда» опубликовала статью</i> (The newspaper Zvyazda published an article; the verb is feminine like газета). The name in quotation marks does not change its case: <i>в журнале «Маладосць»</i> (in the magazine Maladost). City names usually do change: <i>в городе Минске</i> (in the city of Minsk)."
          ],
          examples: [
            { text: "два <u>новых</u> учебника", tr: "two new textbooks", note: "masculine noun: genitive plural adjective" },
            { text: "две <u>новые</u> тетради", tr: "two new notebooks", note: "feminine noun: nominative plural adjective" },
            { text: "<u>последние</u> три урока", tr: "the last three lessons", note: "adjective before the number: nominative plural" },
            { text: "Газета «Звязда» <u>опубликовала</u> статью.", tr: "The newspaper Zvyazda published an article.", note: "the verb agrees with газета (feminine)" },
            { text: "Он пришёл <mark>посоветоваться</mark>.", tr: "He came to ask for advice.", note: "infinitive as an adverbial of purpose" }
          ],
          mistakes: [
            { wrong: "два новые стола", right: "два новых стола", why: "With a masculine noun the adjective is genitive plural. (two new tables)" },
            { wrong: "Газета «Известия» опубликовали статью.", right: "Газета «Известия» опубликовала статью.", why: "The verb agrees with the general word газета (feminine singular), not with the plural-looking name Izvestia." }
          ],
          quiz: [
            { q: "Choose: «три ... дерева» (three tall trees)", options: ["высокие", "высоких", "высоким"], answer: 1, why: "Дерево (tree) is neuter, so the adjective is genitive plural." },
            { q: "Choose: «Журнал «Юность» ... новый номер» (The magazine Yunost released a new issue)", options: ["выпустила", "выпустило", "выпустил"], answer: 2, why: "The verb agrees with журнал (magazine, masculine), not with the name." },
            { q: "What role does the infinitive play in «Он пришёл посоветоваться» (He came to ask for advice)?", options: ["adverbial of purpose", "object", "subject"], answer: 0, why: "Came why, for what purpose? To ask for advice. That is an adverbial of purpose." }
          ]
        }
      ]
    },
    {
      title: "Simple sentences with extra elements",
      titleRu: "Простое осложнённое предложение",
      topics: [
        {
          id: "g11-odnorodnye",
          title: "Parallel parts of a sentence: getting them right",
          ru: "Однородные члены: синтаксическая норма",
          paras: "§ 15–16",
          summary: "Parallel (homogeneous) parts must belong to the same group of meaning, fit the shared word grammatically, and stand right after each half of a double conjunction.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "О и О.", example: "Мы купили хлеб и молоко.", caption: "We bought bread and milk. A single и (and): no comma." },
              { scheme: "О, О и О.", example: "В саду росли яблони, груши и сливы.", caption: "Apple, pear and plum trees grew in the garden. Comma between items without a conjunction; never a comma before the last и." },
              { scheme: "и О, и О.", example: "И в школе, и дома нас поддерживали.", caption: "Both at school and at home we were supported. Repeated и: comma before the second и." },
              { scheme: "не только О, но и О.", example: "Он читал не только книги, но и журналы.", caption: "He read not only books but also magazines. The double conjunction stands right before the parallel words." },
              { scheme: "О, но О.", example: "Река неширокая, но глубокая.", caption: "The river is narrow but deep. Contrast: comma before но (but)." }
            ]
          },
          explain: [
            "<b>Parallel parts</b> (однородные члены) answer the same question and relate to the same word, like 'bread and milk' in 'We bought bread and milk'. There are rules (a <b>syntax norm</b>) for using them correctly.",
            "1) They must be from the same group of meaning. Do not join a general word and a specific one: <i>груши и фрукты</i> ('pears and fruit') is wrong, because pears are fruit. 2) If two verbs require different cases, they cannot share one object. <i>Любить</i> (to love) takes the accusative, <i>гордиться</i> (to be proud of) takes the instrumental, so not <i>люблю и горжусь школой</i>, but <i>люблю свою школу и горжусь ею</i>. English has a similar rule: 'interested and proud of the school' is wrong, because it is 'interested in' but 'proud of'.",
            "3) Each half of a double conjunction (<i>не только... но и</i>, not only... but also; <i>как... так и</i>, both... and) goes right before the parallel words. Not <i>Он не только читал книги, но и журналы</i>, but <i>Он читал не только книги, но и журналы</i>. Careful English follows the same rule. 4) Do not join a sentence part and a whole clause as parallel: not <i>Я знаю его имя и где он живёт</i> ('I know his name and where he lives').",
            "Parallel parts help style. <b>Repeating the conjunction</b> (многосоюзие: <i>и..., и..., и...</i>) slows the sentence down and stresses each item. <b>Leaving out conjunctions</b> (бессоюзие) gives a fast rhythm."
          ],
          examples: [
            { text: "Я <mark>люблю</mark> музыку и <mark>увлекаюсь</mark> ею.", tr: "I love music and I am keen on it.", note: "each verb has its own object in its own case" },
            { text: "Он читал <mark>не только</mark> книги, <mark>но и</mark> журналы.", tr: "He read not only books but also magazines.", note: "the double conjunction stands before the parallel words" },
            { text: "И солнце, и ветер, и море радовали нас.", tr: "The sun, the wind and the sea all made us happy.", note: "repeated conjunction (многосоюзие)" }
          ],
          mistakes: [
            { wrong: "Я люблю и горжусь своей школой.", right: "Я люблю свою школу и горжусь ею.", why: "Любить что? (accusative) Гордиться чем? (instrumental) The verbs require different cases. (I love my school and am proud of it.)" },
            { wrong: "На рынке продавали груши и фрукты.", right: "На рынке продавали груши и яблоки.", why: "Pears are also fruit: you cannot join a specific and a general idea. (They sold pears and apples at the market.)" },
            { wrong: "Я знаю его имя и где он живёт.", right: "Я знаю, как его зовут и где он живёт.", why: "A sentence part and a clause cannot be parallel. (I know what his name is and where he lives.)" }
          ],
          quiz: [
            { q: "Which sentence is correct? (I value friendship and treasure it.)", options: ["Я ценю и дорожу дружбой.", "Я ценю и дорожу дружбу.", "Я ценю дружбу и дорожу ею."], answer: 2, why: "Ценить takes the accusative, дорожить takes the instrumental. Each verb needs its own object." },
            { q: "Where is the double conjunction placed wrongly?", options: ["Он знает не только английский, но и французский.", "Он не только знает английский, но и французский.", "Она поёт как в хоре, так и одна."], answer: 1, why: "The parallel words are английский and французский, so не только must stand before английский." },
            { q: "What is wrong with «Мама купила яблоки и фрукты» (Mum bought apples and fruit)?", options: ["a specific and a general idea are joined", "there should be a comma before и", "the verbs require different cases"], answer: 0, why: "Apples are part of 'fruit', so they cannot be parallel parts." }
          ]
        },
        {
          id: "g11-obosoblennye-vvodnye",
          title: "Set-off phrases, parenthetical words, forms of address",
          ru: "Обособленные члены, вводные слова, обращения",
          paras: "§ 17–18",
          summary: "Set-off phrases, parenthetical words and remarks, and forms of address are marked off by punctuation on both sides.",
          diagram: {
            type: "cards",
            items: [
              { title: "Set-off attribute (обособленное определение)", text: "usually a participle phrase after the noun", example: "Дорога, ведущая к лесу, заросла травой. (The road leading to the forest was overgrown with grass.)" },
              { title: "Set-off apposition (обособленное приложение)", text: "explains a noun by naming it another way", example: "Мой друг, ученик 11 класса, победил в олимпиаде. (My friend, an 11th-grader, won the competition.)" },
              { title: "Set-off adverbial (обособленное обстоятельство)", text: "usually an adverbial participle phrase", example: "Закончив работу, мы пошли домой. (Having finished work, we went home.)" },
              { title: "Clarifying part (уточняющий член)", text: "makes what was said more precise", example: "Внизу, у реки, горел костёр. (Down below, by the river, a fire was burning.)" },
              { title: "Parenthetical word (вводное слово)", text: "shows the speaker's attitude; not a part of the sentence", example: "К счастью, дождь закончился. (Luckily, the rain stopped.)" },
              { title: "Inserted remark (вставная конструкция)", text: "an extra comment, in brackets or between dashes", example: "Мой брат (он старше меня) учится в Минске. (My brother (he is older than me) studies in Minsk.)" },
              { title: "Form of address (обращение)", text: "names the person you are speaking to", example: "Друзья, поспешим! (Friends, let's hurry!)" }
            ]
          },
          explain: [
            "<b>Set-off parts</b> (обособленные члены) are marked by intonation in speech and by commas in writing. They can be attributes, appositions, adverbials, objects or clarifying parts. Russian sets them off much more strictly than English does.",
            "<b>Rule for adverbial participle phrases</b> (деепричастный оборот): the action of the adverbial participle and the action of the main verb must be done by the same person. English has the same rule, and breaking it gives a 'dangling participle'. Wrong: <i>Подъезжая к станции, у меня слетела шляпа</i> ('Approaching the station, my hat flew off'). In a sentence with no subject, such a phrase is possible only with an infinitive: <i>Читая книгу, нужно делать заметки</i> (When reading a book, one should take notes).",
            "<b>Rule for participle phrases</b> (причастный оборот): the noun must not stand inside the phrase. Wrong: <i>сидящий мальчик на скамейке</i>. Right: <i>мальчик, сидящий на скамейке</i> or <i>сидящий на скамейке мальчик</i> (the boy sitting on the bench).",
            "<b>Parenthetical words</b> (вводные слова) are not parts of the sentence. You can remove them and the meaning stays: <i>Он, наверное, придёт</i> (He will probably come). The same words can also be real parts of a sentence: <i>Задача кажется трудной</i> (The task seems difficult), with no commas. A <b>form of address</b> (обращение) is not a part of the sentence either."
          ],
          examples: [
            { text: "<mark>Подойдя к дому</mark><u>,</u> я увидел свет в окне.", tr: "Coming up to the house, I saw a light in the window.", note: "the same person came up and saw" },
            { text: "Ты<u>,</u> <mark>кажется</mark><u>,</u> устал.", tr: "You seem to be tired. (literally: You, it seems, are tired.)", note: "parenthetical word: commas on both sides" },
            { text: "Задача <mark>кажется</mark> трудной.", tr: "The task seems difficult.", note: "part of the predicate: no commas" }
          ],
          mistakes: [
            { wrong: "Прочитав книгу, мне захотелось написать отзыв.", right: "Прочитав книгу, я захотел написать отзыв.", why: "The adverbial participle and the main verb must describe actions of the same person. (Having read the book, I wanted to write a review.)" },
            { wrong: "сидящий мальчик на скамейке", right: "мальчик, сидящий на скамейке", why: "The noun cannot stand inside the participle phrase. (the boy sitting on the bench)" }
          ],
          quiz: [
            { q: "Where is the adverbial participle phrase used wrongly?", options: ["Прочитав книгу, я написал отзыв.", "Прочитав книгу, мне захотелось написать отзыв.", "Прочитав книгу, нужно написать отзыв."], answer: 1, why: "'I' read, but the wish is expressed with 'мне' (to me), so the actions do not belong to the same subject. The third option is fine because it has an infinitive." },
            { q: "In which sentence is «кажется» (seems) a parenthetical word?", options: ["Задача кажется трудной.", "Мне кажется странным его молчание.", "Ты, кажется, устал."], answer: 2, why: "In the first two sentences кажется is part of the predicate. In the third you can remove it without losing the meaning." },
            { q: "How are inserted remarks usually marked?", options: ["with quotation marks", "with brackets or dashes", "with a colon"], answer: 1, why: "Inserted remarks go in brackets or between a pair of dashes." }
          ]
        }
      ]
    },
    {
      title: "Complex sentences. Reported speech",
      titleRu: "Сложное предложение. Чужая речь",
      topics: [
        {
          id: "g11-tipy-slozhnyh",
          title: "Types of complex sentences. Compound sentences",
          ru: "Типы сложных предложений. ССП",
          paras: "§ 19–20, 24",
          summary: "The clauses of a multi-clause sentence are joined by conjunctions (coordinating or subordinating) or with no conjunction, only by intonation.",
          diagram: {
            type: "tree",
            root: {
              label: "Multi-clause sentence (сложное предложение)",
              children: [
                {
                  label: "With conjunctions (союзные)",
                  children: [
                    { label: "Compound (сложносочинённое, ССП)", note: "equal clauses; и (and), а, но (but), или (or), однако (however), зато (but on the other hand)" },
                    { label: "Complex (сложноподчинённое, СПП)", note: "main and dependent clause; что (that), чтобы (so that), когда (when), если (if), который (which), где (where)" }
                  ]
                },
                { label: "Without conjunctions (бессоюзное, БСП)", note: "joined by intonation; marks , ; : —" },
                { label: "Mixed (с разными видами связи)", note: "coordination, subordination and no conjunction in one sentence" }
              ]
            }
          },
          explain: [
            "A multi-clause sentence (сложное предложение) has two or more parts, and each has its own subject and predicate. The parts are linked by meaning and intonation.",
            "In a <b>compound sentence</b> (ССП) the clauses are equal, as in English 'The sun set, and it got cool'. The conjunctions can join (<i>и, да</i>: and; <i>ни... ни</i>: neither... nor), contrast (<i>а, но, однако, зато</i>: but, however) or give a choice (<i>или, либо</i>: or; <i>то... то</i>: now... now).",
            "Russian puts a comma before the conjunction between clauses, even when they are short (English often skips it). There is no comma if the clauses share a <b>common secondary part</b> or a common dependent clause: <i>Утром выпал снег и подморозило</i> (In the morning it snowed and froze; утром belongs to both clauses).",
            "A <b>mixed</b> sentence uses both conjunctions and no-conjunction links: <i>Начался дождь, и мы поняли, что прогулка отменяется</i> (It started raining, and we understood that the walk was cancelled)."
          ],
          examples: [
            { text: "Солнце село<u>,</u> и стало прохладно.", tr: "The sun set, and it got cool.", note: "compound sentence (ССП)" },
            { text: "Я знаю<u>,</u> что ты придёшь.", tr: "I know that you will come.", note: "complex sentence (СПП)" },
            { text: "Наступила осень<u>:</u> листья пожелтели.", tr: "Autumn had come: the leaves had turned yellow.", note: "no conjunction (БСП)" },
            { text: "<mark>Утром</mark> выпал снег и подморозило.", tr: "In the morning it snowed and froze.", note: "common secondary part: no comma" }
          ],
          quiz: [
            { q: "«Пошёл дождь, и мы вернулись домой» (It started raining, and we went back home). This sentence is", options: ["complex (СПП)", "compound (ССП)", "without conjunctions (БСП)"], answer: 1, why: "Two equal clauses are joined by the coordinating conjunction и." },
            { q: "Why is there no comma in «Через минуту поезд остановился и пассажиры вышли» (A minute later the train stopped and the passengers got off)?", options: ["the clauses share the secondary part «через минуту»", "it is a simple sentence with two verbs", "there is never a comma before и"], answer: 0, why: "There are two clauses (поезд остановился, пассажиры вышли), but they share the adverbial через минуту (a minute later)." }
          ]
        },
        {
          id: "g11-spp",
          title: "Complex sentences and their norms",
          ru: "Сложноподчинённое предложение и его норма",
          paras: "§ 21–22",
          summary: "In a complex sentence (СПП) the dependent clause relies on the main clause. With several dependent clauses, the links can be parallel-same, parallel-different or chained.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], (что ...).", example: "Я знаю, что ты прав.", caption: "I know that you are right. Object clause." },
              { scheme: "[ , (в котором ...), ].", example: "Город, в котором я родился, стоит на реке.", caption: "The town where I was born stands on a river. Relative clause inside the main clause." },
              { scheme: "(Когда ...), [ ].", example: "Когда наступила весна, растаял снег.", caption: "When spring came, the snow melted. Time clause before the main clause." },
              { scheme: "[ ], (как ...) и (что ...).", example: "Я помню, как мы встретились и что ты сказал.", caption: "I remember how we met and what you said. Same-type clauses: no comma before a single и." },
              { scheme: "[ ], (что ...), (которую ...).", example: "Я знаю, что ты прочитал книгу, которую я дал.", caption: "I know that you read the book that I gave you. Chained clauses." },
              { scheme: "(Когда ...), [ ], (что ...).", example: "Когда я вернулся, мама сказала, что звонил друг.", caption: "When I came back, Mum said that a friend had called. Different clauses on one main clause." }
            ]
          },
          explain: [
            "Dependent clauses can be <b>relative</b> (определительные, answer 'which one?'), <b>object clauses</b> (изъяснительные, answer case questions like 'what?') or <b>adverbial</b> (обстоятельственные: when? where? why? what for? on what condition? and others).",
            "With several dependent clauses there are three patterns. <b>Same-type</b> (однородное): clauses of one kind depend on the same word. <b>Parallel</b> (параллельное): clauses of different kinds depend on one main clause. <b>Chained</b> (последовательное): one dependent clause depends on another.",
            "<b>Norms for complex sentences</b>: 1) do not repeat <i>что</i> (that) without need: not <i>Он сказал, что если успеет, что придёт</i>, but <i>Он сказал, что если успеет, то придёт</i> (He said that if he had time, he would come); 2) do not put <i>что</i> together with the particle <i>ли</i> (whether): not <i>Я спросил, что придёт ли он</i>, but <i>Я спросил, придёт ли он</i> (I asked whether he would come); 3) put <i>который</i> (which, who) right next to the noun it refers to.",
            "A dependent clause is always marked off by commas on both sides. This is different from English, where 'I know that you are right' has no comma. Between same-type clauses joined by a single <i>и</i> there is no comma."
          ],
          examples: [
            { text: "Я спросил<u>,</u> <mark>придёт ли</mark> он.", tr: "I asked whether he would come.", note: "ли (whether) without что" },
            { text: "Он сказал<u>,</u> что если успеет<u>,</u> <mark>то</mark> придёт.", tr: "He said that if he had time, he would come.", note: "что and если meet: use то, not a second что" },
            { text: "Мы увидели <mark>дом</mark><u>,</u> <mark>который</mark> стоял на холме.", tr: "We saw a house that stood on a hill.", note: "который next to the noun it refers to" }
          ],
          mistakes: [
            { wrong: "Он сказал, что если успеет, что придёт.", right: "Он сказал, что если успеет, то придёт.", why: "Что is repeated for no reason." },
            { wrong: "Я спросил, что придёт ли он.", right: "Я спросил, придёт ли он.", why: "The particle ли already works as the conjunction 'whether', so что is extra." },
            { wrong: "Я прочитал книгу брата, которая лежала на столе.", right: "Я прочитал лежавшую на столе книгу брата.", why: "Которая stands far from the word it describes, so the meaning is unclear. (I read my brother's book that was lying on the table.)" }
          ],
          quiz: [
            { q: "What is the scheme of «Я знаю, что ты прав» (I know that you are right)?", options: ["(что ...), [ ].", "[ ], и [ ].", "[ ], (что ...)."], answer: 2, why: "The main clause comes first, then the dependent clause with что." },
            { q: "Which sentence is correct?", options: ["Он обещал, что если успеет, то придёт.", "Он обещал, что если успеет, что придёт.", "Он спросил, что придёт ли брат."], answer: 0, why: "The second has an extra что; in the third что cannot be used together with ли." },
            { q: "What type of link is in «Я помню, как мы гуляли и как шёл снег» (I remember how we walked and how it snowed)?", options: ["chained", "same-type", "parallel (different kinds)"], answer: 1, why: "Two clauses of the same kind answer the same question and depend on the same word помню (I remember)." }
          ]
        },
        {
          id: "g11-bsp",
          title: "Compound sentences without conjunctions",
          ru: "Бессоюзное сложное предложение",
          paras: "§ 23",
          summary: "In a sentence without conjunctions (БСП), the punctuation mark between clauses depends on the meaning: a list, a reason, an explanation, a result or a contrast.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], [ ].", example: "Светило солнце, пели птицы.", caption: "The sun was shining, birds were singing. A list: comma." },
              { scheme: "[ ]; [ ].", example: "Ветер утих, волны успокоились; над морем взошла луна.", caption: "The wind died down, the waves calmed; the moon rose over the sea. Parts far apart in meaning or with commas inside: semicolon." },
              { scheme: "[ ]: [ ].", example: "Мне не спалось: за окном шумел ветер.", caption: "I couldn't sleep: the wind was howling outside. Reason (you can add потому что, because): colon." },
              { scheme: "[ ]: [ ].", example: "Я понял: мы опоздали.", caption: "I realised: we were late. Content or explanation (you can add что, that, or а именно, namely): colon." },
              { scheme: "[ ] — [ ].", example: "Лес рубят — щепки летят.", caption: "When you cut down a forest, chips fly. Result (you can add поэтому, so): dash." },
              { scheme: "[ ] — [ ].", example: "Я звал — он не пришёл.", caption: "I called, but he didn't come. Contrast (you can add а or но, but): dash." }
            ]
          },
          explain: [
            "In a <b>БСП</b> the clauses are linked only by meaning and intonation, with no conjunction. To choose the mark, try adding a suitable conjunction in your head.",
            "A <b>comma</b> or a <b>semicolon</b> is used for a list of events. Use a semicolon if the clauses are long, already contain commas, or are only loosely connected in meaning.",
            "A <b>colon</b> is used if the second clause gives a reason (<i>потому что</i>, because), explains the first one (<i>а именно</i>, namely) or completes it (<i>что</i>, that). English uses the colon in a similar way, but less often.",
            "A <b>dash</b> is used if the second clause is a result or conclusion (<i>поэтому</i>, so), if the clauses contrast (<i>а, но</i>, but), if the first clause gives a time or condition (<i>когда</i>, when; <i>если</i>, if), and for a quick change of events. English rarely uses a dash for these meanings, so this is very Russian."
          ],
          rule: "Colon = потому что (because), а именно (namely), что (that). Dash = поэтому (so), а / но (but), если (if), когда (when).",
          examples: [
            { text: "Я не пошёл гулять<u>:</u> на улице шёл дождь.", tr: "I didn't go out: it was raining outside.", note: "reason" },
            { text: "Кончил дело <u>—</u> гуляй смело.", tr: "Business first, then pleasure. (literally: Finished the work, go out and have fun.)", note: "condition or time (если кончил, if you have finished)" },
            { text: "Прислушиваюсь<u>:</u> где-то звенит ручей.", tr: "I listen: somewhere a stream is babbling.", note: "completion (I listen and hear that...)" }
          ],
          quiz: [
            { q: "Which mark is needed: «Я не пошёл гулять (?) на улице шёл дождь» (I didn't go out, it was raining)?", options: ["dash", "semicolon", "colon"], answer: 2, why: "The second clause gives the reason: you can add потому что (because)." },
            { q: "Which mark is needed: «Кончил дело (?) гуляй смело»?", options: ["dash", "colon", "comma"], answer: 0, why: "The first clause is a condition or time: 'if you have finished the work'. In that case use a dash." },
            { q: "What is the scheme of «Я знаю: ты справишься» (I know: you will manage)?", options: ["[ ] — [ ].", "[ ]: [ ].", "[ ], (что ...)."], answer: 1, why: "There is no conjunction, and the second clause completes the first (I know what?), so a colon is used." }
          ]
        },
        {
          id: "g11-chuzhaya-rech",
          title: "Reporting other people's words",
          ru: "Чужая речь и способы её передачи",
          paras: "§ 25",
          summary: "Someone else's words can be given as direct speech, indirect speech, a quotation or a reference to the source. Each way has its own rules.",
          diagram: {
            type: "compare",
            rows: [
              ["Method", "How it reports", "Example"],
              ["Direct speech (прямая речь)", "word for word, from the speaker's point of view, with their intonation", "«Я приду завтра», — сказал Миша. ('I'll come tomorrow,' said Misha.)"],
              ["Indirect speech (косвенная речь)", "as a dependent clause, from the author's point of view", "Миша сказал, что придёт завтра. (Misha said he would come tomorrow.)"],
              ["Quotation (цитата)", "word for word, exactly, in quotation marks, with the author named", "Как писал Пушкин, «привычка свыше нам дана». (As Pushkin wrote, 'habit is given to us from above'.)"],
              ["Reference to the source (ссылка на источник)", "with a parenthetical phrase; only the meaning is given", "По словам Миши, он придёт завтра. (According to Misha, he will come tomorrow.)"]
            ]
          },
          explain: [
            "The main patterns of direct speech are: <i>А: «П».</i> <i>«П», — а.</i> <i>«П?» — а.</i> <i>«П, — а, — п».</i> Here А stands for the author's words and П for the direct speech; a small letter means that part starts with a lower-case letter. Note the differences from English: Russian uses «» quotation marks, and a dash comes before the author's words: <i>«Иду», — сказал он</i> ('I'm coming,' he said).",
            "In <b>indirect speech</b> the pronouns and the person of the verb change: <i>Оля сказала: «Я устала»</i> becomes <i>Оля сказала, что она устала</i> (Olya said that she was tired). Unlike English, Russian does <b>not</b> shift the tense back: <i>Миша сказал, что придёт</i> keeps the future ('Misha said he will come', while English says 'would'). A question is reported with the particle <i>ли</i> (whether): <i>Учитель спросил, готовы ли мы</i> (The teacher asked whether we were ready).",
            "Do not mix direct and indirect speech: <i>Он сказал, что я опоздаю</i> is wrong if he is talking about himself. Right: <i>Он сказал, что опоздает</i> (He said he would be late).",
            "If a quotation becomes part of your own sentence, it goes in quotation marks and starts with a small letter. Missing words in a quotation are shown with three dots (...)."
          ],
          examples: [
            { text: "Мама сказала<u>:</u> «Вернусь вечером».", tr: "Mum said, 'I'll be back in the evening.'", note: "pattern А: «П»." },
            { text: "«Вернусь вечером»<u>, —</u> сказала мама.", tr: "'I'll be back in the evening,' said Mum.", note: "pattern «П», — а." },
            { text: "Мама сказала, <mark>что вернётся</mark> вечером.", tr: "Mum said that she would be back in the evening.", note: "indirect speech; Russian keeps the future tense" },
            { text: "Учитель спросил, <mark>готовы ли</mark> мы к уроку.", tr: "The teacher asked whether we were ready for the lesson.", note: "indirect question with ли" }
          ],
          mistakes: [
            { wrong: "Он сказал, что я опоздаю. (about himself)", right: "Он сказал, что опоздает.", why: "In indirect speech the person changes: the speaker's 'I' becomes 'he'." },
            { wrong: "Она спросила, что знаю ли я дорогу.", right: "Она спросила, знаю ли я дорогу.", why: "An indirect question starts with ли and no что. (She asked whether I knew the way.)" }
          ],
          quiz: [
            { q: "Where is the direct speech punctuated correctly? ('I'm ready,' answered Petya.)", options: ["«Я готов». — ответил Петя.", "«Я готов», — ответил Петя.", "«Я готов, — ответил Петя.»"], answer: 1, why: "Pattern «П», — а: after the closing quotation mark comes a comma and a dash, and the author's words start with a small letter." },
            { q: "How do you report Оля сказала: «Я устала» (Olya said, 'I'm tired') as indirect speech?", options: ["Оля сказала, что она устала.", "Оля сказала, что я устала.", "Оля сказала, что «я устала»."], answer: 0, why: "In indirect speech я (I) becomes она (she)." }
          ]
        }
      ]
    },
    {
      title: "Punctuation",
      titleRu: "Пунктуация",
      topics: [
        {
          id: "g11-sistema-znakov",
          title: "Punctuation as a system. What the marks do",
          ru: "Пунктуация как система. Функции знаков",
          paras: "§ 26–27",
          summary: "Punctuation marks show the structure, meaning and intonation of a sentence. By function they either separate or set off.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Separating marks (отделяющие)", "Setting-off marks (выделяющие)"],
              ["Which marks", "single: . ? ! ... , ; : —", "in pairs: two commas, two dashes, brackets, quotation marks"],
              ["What they do", "separate sentences, parallel parts, clauses, direct speech from the author's words", "mark off on both sides: set-off phrases, parenthetical words, forms of address, clauses in the middle, quotations"],
              ["Example", "Светало, пели птицы. (It was getting light, birds were singing.)", "Ребята, услышав звонок, вышли из класса. (Hearing the bell, the children left the classroom.)"],
              ["How to check", "the mark stands between two equal elements", "you can remove the marked part and the sentence still works"]
            ]
          },
          explain: [
            "Russian punctuation is based on three principles. <b>Grammatical</b>: marks show the structure of the sentence (this is one reason Russian has more commas than English). <b>Meaning</b>: marks show the sense (<i>Казнить нельзя, помиловать</i>, a famous example like English 'Let's eat, Grandma!'). <b>Intonation</b>: marks help show pauses and tone.",
            "By function, marks either <b>separate</b> or <b>set off</b>. Setting-off marks come in pairs. If the marked part is at the beginning or end of the sentence, the second mark of the pair is not written: <i>Услышав звонок, ребята вышли</i> (Hearing the bell, the children went out).",
            "<b>End-of-sentence marks</b> are the full stop, the question mark, the exclamation mark and the three dots (многоточие). The three dots show an unfinished thought, hesitation or a pause."
          ],
          examples: [
            { text: "Казнить нельзя<u>,</u> помиловать.", tr: "Execution is not allowed: pardon (him).", note: "meaning principle: the person is pardoned" },
            { text: "Казнить<u>,</u> нельзя помиловать.", tr: "Execute (him): pardon is not allowed.", note: "meaning principle: the person is executed" },
            { text: "Ходить <u>—</u> долго не мог. / Ходить долго <u>—</u> не мог.", tr: "Walk: he couldn't for a long time. / Walk for long: he couldn't.", note: "the place of the dash changes the meaning" },
            { text: "Утром<u>,</u> <mark>как обычно</mark><u>,</u> я делал зарядку.", tr: "In the morning, as usual, I did my exercises.", note: "a pair of setting-off commas" }
          ],
          quiz: [
            { q: "What do the commas do in «Мы, конечно, поможем» (We will, of course, help)?", options: ["separate", "set off", "end the sentence"], answer: 1, why: "Two commas mark off the parenthetical word конечно (of course) on both sides." },
            { q: "Which mark is never a setting-off mark?", options: ["comma", "dash", "semicolon"], answer: 2, why: "The semicolon only separates clauses or parallel parts. Commas and dashes can come in pairs." },
            { q: "What do three dots at the end of a sentence show?", options: ["an unfinished thought", "a question", "a list"], answer: 0, why: "Three dots show that the thought is not finished: a pause or hesitation." }
          ]
        },
        {
          id: "g11-zapyataya-i-ili",
          title: "Commas with и (and) and или (or)",
          ru: "Запятая при союзах «и», «или»",
          paras: "§ 28.1–28.2",
          summary: "There is no comma before a single и between parallel parts. With repeated conjunctions and between clauses of a compound sentence, a comma is used.",
          diagram: {
            type: "flow",
            title: "Comma before и (или)?",
            steps: [
              { q: "Is it a set phrase («ни свет ни заря», at the crack of dawn; «и день и ночь», day and night; «ни то ни сё», neither one thing nor the other)?", yes: "No comma: «Он работал и день и ночь». (He worked day and night.)", no: null },
              { q: "Is и, или, ни or либо repeated before the parallel parts?", yes: "Comma before the second and later conjunctions: «И в лесу, и в поле было тихо» (It was quiet both in the forest and in the field), «Ни ветра, ни дождя» (Neither wind nor rain).", no: null },
              { q: "Does a single conjunction join clauses of a compound sentence (each with its own subject and predicate)?", yes: "Comma: «Солнце село, и стало прохладно» (The sun set, and it got cool). But no comma if the clauses share a secondary part.", no: "The single conjunction joins parallel parts: no comma: «Мы купили хлеб и молоко» (We bought bread and milk)." }
            ]
          },
          explain: [
            "First decide what the conjunction joins: parallel parts or the clauses of a compound sentence. To do this, find the subjects and predicates.",
            "Before a <b>single</b> <i>и, или, либо, да</i> (да here means 'and') between parallel parts there is no comma: <i>Чай или кофе?</i> (Tea or coffee?). Russian never uses an 'Oxford comma' before the last и in a list.",
            "With <b>repeated</b> conjunctions (<i>и... и</i>, both... and; <i>или... или</i>, either... or; <i>ни... ни</i>, neither... nor; <i>то... то</i>, now... now) put a comma before the second and later conjunctions. Set phrases are the exception: <i>ни рыба ни мясо</i> (neither fish nor fowl), <i>и смех и грех</i> (funny and sad at the same time).",
            "If parallel parts are joined <b>in pairs</b>, put a comma between the pairs: <i>Мальчики и девочки, учителя и родители собрались в зале</i> (Boys and girls, teachers and parents gathered in the hall)."
          ],
          examples: [
            { text: "<mark>Ни</mark> ветер<u>,</u> <mark>ни</mark> дождь не остановили туристов.", tr: "Neither the wind nor the rain stopped the hikers.", note: "repeated conjunction" },
            { text: "Он ушёл ни свет ни заря.", tr: "He left at the crack of dawn.", note: "set phrase: no commas" },
            { text: "Зазвенел звонок<u>,</u> и ученики вышли из класса.", tr: "The bell rang, and the students left the classroom.", note: "clauses of a compound sentence" },
            { text: "<mark>Вечером</mark> пошёл дождь и подул ветер.", tr: "In the evening it started raining and the wind rose.", note: "shared secondary part: no comma" }
          ],
          quiz: [
            { q: "Where is a comma needed in place of (?)", options: ["Он ушёл ни свет (?) ни заря.", "Ни ветер (?) ни дождь не остановили туристов.", "Я куплю хлеб (?) и молоко."], answer: 1, why: "Ни is repeated before parallel parts. «Ни свет ни заря» is a set phrase, and «хлеб и молоко» is joined by a single и." },
            { q: "Why is there no comma in «Вечером пошёл дождь и подул ветер» (In the evening it rained and the wind rose)?", options: ["they are parallel parts", "the clauses share the secondary part «вечером»", "it is a set phrase"], answer: 1, why: "There are two clauses, but вечером (in the evening) belongs to both of them." }
          ]
        },
        {
          id: "g11-zapyataya-kak",
          title: "Commas with как (like, as)",
          ru: "Запятая в конструкциях с «как»",
          paras: "§ 28.4",
          summary: "Put a comma before как if the phrase is a comparison ('like') or if как starts a dependent clause. In other cases there is often no comma.",
          diagram: {
            type: "flow",
            title: "Comma before как?",
            steps: [
              { q: "Is it «как и» (just as), «не кто иной, как» (none other than), «не что иное, как» (nothing other than) or the double conjunction «как... так и» (both... and)?", yes: "Comma: «Как и вчера, шёл дождь» (As yesterday, it was raining), «Это был не кто иной, как наш учитель» (It was none other than our teacher), «как в городе, так и в деревне» (both in the city and in the village).", no: null },
              { q: "Does как mean 'as, in the role of'?", yes: "No comma: «Он выступил как свидетель». (He spoke as a witness.)", no: null },
              { q: "Is it a set phrase, part of the predicate, or is there не, почти, совсем, именно (not, almost, quite, exactly) before как?", yes: "No comma: «белый как снег» (white as snow), «Пруд как зеркало» (The pond is like a mirror), «Он вёл себя совсем как взрослый» (He behaved just like an adult).", no: null },
              { q: "Is the phrase a comparison (= like) or does как start a dependent clause?", yes: "Comma: «Снег, как пух, лежал на ветках» (The snow lay on the branches like down), «Я видел, как падал снег» (I saw the snow falling).", no: "No comma: the phrase answers 'how?' and works like an adverb: «Мы жили как родные» (We lived like family)." }
            ]
          },
          explain: [
            "A <b>comparison phrase</b> with <i>как</i> (like) is usually set off by commas: <i>Глаза, как звёзды, сияли</i> (The eyes shone like stars). Phrases with <i>будто, словно, точно</i> (as if, like) work the same way.",
            "English helps here: when <i>как</i> means 'as' (in the role of), there is no comma: <i>Я говорю как друг</i> (I am speaking as a friend). Also no comma if the phrase is a set expression (<i>как по маслу</i>, smoothly, literally 'as if on butter'; <i>как снег на голову</i>, out of the blue), if it is part of the predicate (<i>Сад как море</i>, The garden is like a sea), or if there is <i>не, почти, совсем, именно, точно</i> before it.",
            "Always put a comma before <i>как</i> in <i>как и</i>, <i>не кто иной, как</i>, <i>не что иное, как</i>, and in a complex sentence when <i>как</i> starts a dependent clause (<i>Я видел, как он ушёл</i>, I saw him leave)."
          ],
          examples: [
            { text: "Вода<u>,</u> <mark>как зеркало</mark><u>,</u> отражала облака.", tr: "The water reflected the clouds like a mirror.", note: "comparison phrase" },
            { text: "Я пришёл к тебе <mark>как друг</mark>.", tr: "I came to you as a friend.", note: "как = as, in the role of: no comma" },
            { text: "Работа шла <mark>как по маслу</mark>.", tr: "The work went smoothly.", note: "set phrase: no comma" },
            { text: "Это было не что иное<u>,</u> как шутка.", tr: "It was nothing other than a joke.", note: "the phrase не что иное, как" }
          ],
          mistakes: [
            { wrong: "Он выступил, как свидетель.", right: "Он выступил как свидетель.", why: "Как means 'as, in the role of'; it is not a comparison. (He spoke as a witness.)" },
            { wrong: "Снег как пух лежал на ветках.", right: "Снег, как пух, лежал на ветках.", why: "A comparison phrase is set off by commas. (The snow lay on the branches like down.)" }
          ],
          quiz: [
            { q: "Which sentence needs commas around the как phrase?", options: ["Я пришёл как друг.", "Снег как белое покрывало лежал на полях.", "Платок был белый как снег."], answer: 1, why: "«Как белое покрывало» (like a white blanket) is a comparison. In the first sentence как means 'as', and the third is a set phrase." },
            { q: "Is a comma needed when как means 'as, in the role of'?", options: ["no", "yes", "a dash is needed"], answer: 0, why: "A phrase meaning 'in the role of' is not a comparison and is not set off." },
            { q: "Where is a comma before как needed?", options: ["Он вёл себя совсем как ребёнок.", "Сад как море.", "Это был не кто иной как директор."], answer: 2, why: "In «не кто иной, как» (none other than) there is always a comma." }
          ]
        },
        {
          id: "g11-znaki-prepinaniya",
          title: "Semicolon, colon, dash, quotation marks, brackets",
          ru: "Точка с запятой, двоеточие, тире, кавычки, скобки",
          paras: "§ 29–34",
          summary: "Each punctuation mark has its own jobs. You need to know where it goes and what it tells the reader.",
          diagram: {
            type: "cards",
            items: [
              { title: "Semicolon (точка с запятой)", text: "between long parallel parts and between clauses, especially when they already contain commas", example: "Ветер утих, волны улеглись; над морем стало тихо. (The wind died down, the waves settled; the sea went quiet.)" },
              { title: "Colon (двоеточие)", text: "after a summarising word before a list; in a БСП for a reason or explanation; before direct speech", example: "В саду росли цветы: розы, астры, пионы. (Flowers grew in the garden: roses, asters, peonies.)" },
              { title: "Dash (тире)", text: "between subject and predicate; after a list before a summarising word; in a БСП; in an incomplete sentence", example: "Розы, астры, пионы — всё цвело в саду. (Roses, asters, peonies: everything was in bloom in the garden.)" },
              { title: "Hyphen (дефис)", text: "with a one-word apposition after a common noun", example: "город-герой (hero city), студент-медик (medical student), but река Неман (the Neman River)" },
              { title: "Quotation marks (кавычки)", text: "direct speech, quotations, titles, words used in an unusual or ironic sense", example: "роман «Война и мир» (the novel War and Peace)" },
              { title: "Brackets (скобки)", text: "inserted remarks, explanations", example: "Он (я это знал) не опоздает. (He (I knew it) won't be late.)" },
              { title: "Combined marks (сочетание знаков)", text: "when two marks meet, write both or one in a fixed order", example: "«Ты придёшь?» — спросил он. ('Will you come?' he asked.)" }
            ]
          },
          explain: [
            "The <b>semicolon</b> (точка с запятой) is stronger than a comma but weaker than a full stop. Use it when the parts of a sentence are long and already contain commas.",
            "The <b>colon</b> (двоеточие) warns: an explanation, a list or a reason is coming. Before a list, use a colon only after a summarising word (like <i>цветы</i>, flowers, or <i>всё</i>, everything). The <b>dash</b> (тире) marks a missing word, a conclusion, a sudden change of events or a contrast.",
            "<b>Quotation marks</b> (кавычки, in Russian usually «») and <b>brackets</b> (скобки) always come in pairs and mark off part of the text. If a closing quotation mark meets a comma or a dash, the comma or dash goes after the quotation mark: <i>«Иди», — сказал он</i> ('Go,' he said). This is the opposite of usual English style, where the comma goes inside.",
            "A <b>hyphen</b> (дефис) joins a one-word apposition to a common noun: <i>девочка-подросток</i> (teenage girl), <i>мастер-ювелир</i> (master jeweller). With a proper name there is usually no hyphen: <i>река Неман</i> (the Neman River), <i>учитель Петров</i> (Petrov the teacher)."
          ],
          examples: [
            { text: "На столе лежали <mark>учебники</mark><u>:</u> алгебра, физика, история.", tr: "There were textbooks on the table: algebra, physics, history.", note: "colon after the summarising word учебники (textbooks)" },
            { text: "Алгебра, физика, история <u>—</u> <mark>все</mark> учебники лежали на столе.", tr: "Algebra, physics, history: all the textbooks were on the table.", note: "dash before the summarising word" },
            { text: "Мы прочитали рассказ «Муму» и стихи Есенина.", tr: "We read the story Mumu and poems by Yesenin.", note: "quotation marks for a title" }
          ],
          mistakes: [
            { wrong: "На столе лежали: книги, тетради, ручки.", right: "На столе лежали книги, тетради, ручки.", why: "There is no summarising word, so no colon is needed. (Books, notebooks and pens lay on the table.)" },
            { wrong: "студент медик", right: "студент-медик", why: "A one-word apposition after a common noun takes a hyphen." }
          ],
          quiz: [
            { q: "What is wrong in «На столе лежали: книги, тетради, ручки»?", options: ["the colon is not needed", "there should be dashes instead of commas", "nothing, it is correct"], answer: 0, why: "Before a list, a colon is used only after a summarising word." },
            { q: "Which mark goes after a list, before a summarising word?", options: ["colon", "semicolon", "dash"], answer: 2, why: "When the summarising word comes after the list, a dash goes before it." },
            { q: "Which spelling is correct? (medical student)", options: ["студент медик", "студент-медик", "студент — медик"], answer: 1, why: "A one-word apposition after a common noun takes a hyphen." }
          ]
        }
      ]
    },
    {
      title: "Essay",
      titleRu: "Эссе",
      topics: [
        {
          id: "g11-esse",
          title: "How to write an essay",
          ru: "Как написать эссе",
          paras: "Приложение 6",
          summary: "An essay (эссе) is a short piece of writing where you argue freely and personally about a problem. It is built on reasoning: thesis, arguments, conclusion.",
          diagram: {
            type: "steps",
            title: "Essay plan",
            items: [
              "Read the topic and find the problem: what do you need to argue about?",
              "Write your thesis: your main idea in one or two sentences.",
              "Introduction: lead into the topic (a question, a quotation, a real-life story) and state your thesis.",
              "Main part: 2–3 arguments, each with an example from literature, history or life. Start each new argument in a new paragraph.",
              "Conclusion: a final point that returns to the thesis.",
              "Check the text: logic, links between paragraphs, repeated words, spelling and punctuation."
            ]
          },
          explain: [
            "An <b>essay</b> (эссе) is a short piece of writing in which the author gives a personal opinion on a problem. What matters most: your own position, a free structure and lively language.",
            "The type of text is <b>reasoning</b> (рассуждение). It follows a pattern: <b>thesis</b> (тезис, what I am proving), <b>arguments</b> (аргументы, why I think so), <b>conclusion</b> (вывод, what follows from it). This is close to the argumentative essay taught in English-speaking schools.",
            "An argument is not a retelling. An example from a book or from life is there to support the thesis, so after the example explain what it proves.",
            "Link the parts with parenthetical words and transitions: <i>во-первых</i> (firstly), <i>во-вторых</i> (secondly), <i>например</i> (for example), <i>кроме того</i> (besides), <i>следовательно</i> (therefore), <i>таким образом</i> (thus). Remember that in Russian these words are set off by commas."
          ],
          rule: "Thesis, arguments with examples, conclusion. Each part in its own paragraph.",
          examples: [
            { text: "Тема: «Нужно ли читать классику?» Тезис: <mark>классика учит понимать людей</mark>.", tr: "Topic: 'Should we read the classics?' Thesis: the classics teach us to understand people.", note: "the thesis briefly answers the question in the topic" },
            { text: "<mark>Во-первых</mark>, ... <mark>Например</mark>, ... <mark>Таким образом</mark>, ...", tr: "Firstly, ... For example, ... Thus, ...", note: "linking words, each followed by a comma" },
            { text: "Этот пример <mark>показывает</mark>, что ...", tr: "This example shows that ...", note: "an explanation after the example links it to the thesis" }
          ],
          mistakes: [
            { wrong: "Подробный пересказ сюжета романа вместо аргумента.", right: "Короткий пример и объяснение, что он доказывает.", why: "A detailed retelling of the novel's plot is not an argument. Give a short example and explain what it proves." },
            { wrong: "Вывод о другом, чем тезис.", right: "Вывод повторяет и уточняет тезис.", why: "A conclusion about something other than the thesis breaks the essay. The conclusion should repeat and sharpen the thesis, answering the question from the introduction." }
          ],
          quiz: [
            { q: "Which type of text is an essay based on?", options: ["narration (повествование)", "reasoning (рассуждение)", "description (описание)"], answer: 1, why: "In an essay the author proves an idea: thesis, arguments, conclusion." },
            { q: "What is a thesis (тезис)?", options: ["an example from a book", "the main idea the author argues for", "a short retelling of a text"], answer: 1, why: "The thesis is the main idea, and the arguments support it." },
            { q: "How is an essay different from an ordinary school argument piece?", options: ["a free structure and a clearly personal position", "it must retell a text", "it has no conclusion"], answer: 0, why: "An essay allows a free structure and a personal view, but it still has a conclusion." }
          ]
        }
      ]
    }
  ]
};
