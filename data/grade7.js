window.GRADES = window.GRADES || {};
window.GRADES[7] = {
  grade: 7,
  book: "Russian Language, Grade 7",
  bookRu: "Русский язык. 7 класс",
  authors: "T. N. Volynets, F. M. Litvinko, E. E. Dolbik et al.",
  year: 2020,
  pdf: "https://mgouor.by/wp-content/uploads/2023/10/rus_yaz_7kl_volinec_rus_bel_2020.pdf",
  level: "Intermediate",
  intro: "Grade 7 is the year of the Russian verb and its two special forms: the participle (a verb used like an adjective) and the verbal adverb (a verb used like an adverb). After that come adverbs, the small \"helper\" words (prepositions, conjunctions, particles) and interjections. For a learner, these topics explain many long written sentences, spelling choices like Н or НН and НЕ or НИ, and where Russians put commas.",
  glossary: [
    { ru: "часть речи", en: "part of speech", hint: "a word class: noun, verb, adjective, adverb and so on" },
    { ru: "вид глагола", en: "verb aspect", hint: "perfective (сделать: finish doing) or imperfective (делать: be doing, do often)" },
    { ru: "переходный глагол", en: "transitive verb", hint: "a verb with a direct object in the accusative case without a preposition: читать книгу (to read a book)" },
    { ru: "возвратный глагол", en: "reflexive verb", hint: "a verb ending in -ся or -сь: умываться (to wash oneself)" },
    { ru: "инфинитив", en: "infinitive", hint: "the dictionary form of a verb, ending in -ть, -ти, -чь: читать (to read)" },
    { ru: "наклонение", en: "mood", hint: "indicative (real action), conditional (with бы), imperative (a request or order)" },
    { ru: "спряжение", en: "conjugation", hint: "how a verb changes for person and number; Russian has two patterns, I and II" },
    { ru: "причастие", en: "participle", hint: "a verb form that works like an adjective: читающий (who is reading)" },
    { ru: "причастный оборот", en: "participle phrase", hint: "a participle with the words that depend on it: читающий книгу (reading a book)" },
    { ru: "деепричастие", en: "verbal adverb (gerund)", hint: "an unchangeable verb form for an extra action: читая (while reading)" },
    { ru: "наречие", en: "adverb", hint: "an unchangeable word that tells how, where, when: быстро (quickly)" },
    { ru: "предлог", en: "preposition", hint: "a helper word before a noun: в (in), на (on), без (without)" },
    { ru: "союз", en: "conjunction", hint: "a word that joins words or clauses: и (and), но (but), если (if)" },
    { ru: "частица", en: "particle", hint: "a small word that adds meaning or builds forms: не (not), бы (would), ли (whether)" },
    { ru: "междометие", en: "interjection", hint: "a word that shows feeling without naming it: ах (oh), ура (hooray)" }
  ],
  sections: [
    {
      title: "Review of Grade 6",
      titleRu: "Повторение изученного в 6 классе",
      topics: [
        {
          id: "g7-chasti-rechi",
          title: "Parts of speech and spelling",
          ru: "Части речи и их правописание",
          paras: "§ 1–2",
          summary: "Every Russian word belongs to a part of speech (noun, verb, adverb and so on). Many spelling rules depend on it, so the first step is always: what kind of word is this?",
          diagram: {
            type: "tree",
            root: {
              label: "Parts of speech (части речи)",
              children: [
                {
                  label: "Independent (самостоятельные)",
                  note: "name things, qualities, actions, amounts; answer questions; can be parts of the sentence",
                  children: [
                    { label: "Noun, adjective, numeral, pronoun (существительное, прилагательное, числительное, местоимение)" },
                    { label: "Verb (глагол)", note: "special forms: participle (причастие), verbal adverb (деепричастие)" },
                    { label: "Adverb (наречие)" }
                  ]
                },
                {
                  label: "Helper words (служебные)",
                  note: "answer no question, are not parts of the sentence",
                  children: [
                    { label: "Preposition (предлог)" },
                    { label: "Conjunction (союз)" },
                    { label: "Particle (частица)" }
                  ]
                },
                { label: "Interjection (междометие)", note: "shows feelings and urges without naming them" }
              ]
            }
          },
          explain: [
            "<b>Independent parts of speech</b> (самостоятельные части речи) name something: a thing, a quality, an amount, an action. You can ask a question about them, and in a sentence they play a role such as subject or object.",
            "<b>Helper words</b> (служебные части речи): prepositions, conjunctions and particles. They name nothing. They link words and clauses or add a shade of meaning, like English \"in\", \"and\", \"not\".",
            "Many Russian spelling rules depend on the part of speech. For example, <b>не</b> (not) is written as a separate word with verbs, but often joined to nouns and adjectives. The soft sign <b>ь</b> after ж, ш, ч, щ is written in infinitives like беречь (to take care of), but not in short adjectives like свеж (fresh)."
          ],
          rule: "First decide the part of speech, then choose the spelling rule.",
          examples: [
            { text: "береч<u>ь</u> (verb), but свеж (short adjective)", tr: "to take care of; fresh", note: "ь after ж, ш, ч, щ depends on the part of speech" },
            { text: "<u>не</u> знать, but <u>не</u>вежда", tr: "not to know; an ignorant person", note: "не with a verb: separate; with a noun: joined" },
            { text: "дочь, but шалаш", tr: "daughter; hut", note: "feminine nouns of the 3rd declension have ь, masculine nouns of the 2nd declension do not" }
          ],
          mistakes: [
            { wrong: "лицом свежь", right: "лицом свеж", why: "Свеж (fresh-faced) is a short adjective. Short adjectives never take ь after ж, ш, ч, щ." }
          ],
          quiz: [
            {
              q: "Which one is a helper part of speech?",
              options: ["adverb (наречие)", "particle (частица)", "interjection (междометие)", "pronoun (местоимение)"],
              answer: 1,
              why: "The helper parts of speech are prepositions, conjunctions and particles. An interjection is neither independent nor a helper word."
            },
            {
              q: "Which word needs ь at the end?",
              options: ["могуч.. (mighty)", "стереч.. (to guard)", "шалаш.. (hut)"],
              answer: 1,
              why: "Стеречь is an infinitive, so it ends in ь after ч. Могуч is a short adjective and шалаш is a masculine noun: no ь."
            }
          ]
        }
      ]
    },
    {
      title: "Text and styles of speech",
      titleRu: "Текст. Стили речи",
      topics: [
        {
          id: "g7-tekst-stili",
          title: "Text and styles of speech",
          ru: "Текст и стили речи",
          paras: "§ 3–4",
          summary: "A text is two or more sentences joined by one topic and one main idea. Every text has a style, and the style depends on where, with whom and why we speak.",
          diagram: {
            type: "cards",
            items: [
              { title: "Conversational (разговорный)", text: "Everyday talk. Aim: share thoughts and feelings. Simple words, incomplete sentences.", example: "Ты куда? В магазин, за хлебом. (Where are you going? To the shop, for bread.)" },
              { title: "Scientific (научный)", text: "Science and study. Aim: give exact knowledge. Terms, long sentences.", example: "Причастие обозначает признак предмета по действию. (A participle describes a thing by an action.)" },
              { title: "Official (официально-деловой)", text: "Documents, laws, applications. Aim: give exact information. Fixed formulas.", example: "Прошу освободить меня от занятий в связи с болезнью. (I request to be excused from classes due to illness.)" },
              { title: "Journalistic (публицистический)", text: "Newspapers, TV, public life. Aim: inform and persuade. Evaluative words, calls to action.", example: "Сохраним наши леса для будущих поколений! (Let's save our forests for future generations!)" },
              { title: "Literary (художественный)", text: "Literature. Aim: create an image, share feelings. Epithets, metaphors, similes.", example: "Лес, точно терем расписной, лиловый, золотой, багряный. (The forest, like a painted tower, lilac, gold, crimson.)" }
            ]
          },
          explain: [
            "A <b>text</b> (текст) has a topic (what is it about?) and a main idea (what does the author want to say?). A good text keeps to one topic, its sentences are linked, they go in a logical order, and the text feels complete.",
            "Sentences can be linked in two ways. In a <b>chain link</b> (цепная связь), each sentence builds on the one before, so you cannot remove any of them. In a <b>parallel link</b> (параллельная связь), all sentences develop the first one and stand side by side. <b>Linking tools</b>: pronouns, synonyms, antonyms, repeated words, words with the same root, conjunctions, the same word order.",
            "A <b>style of speech</b> (стиль речи) is chosen by the situation. Each style has its own <b>sphere</b> (where it is used), <b>function</b> (why) and <b>language tools</b> (what words and sentences).",
            "The <b>journalistic style</b> serves public life and the media. Its main jobs are to inform and to persuade. It uses evaluative words, social and political terms, and words in a figurative sense."
          ],
          rule: "Chain link: each sentence holds on to the previous one. Parallel link: sentences stand side by side and develop the first one. The sphere and the aim tell you the style.",
          examples: [
            { text: "У нас живёт кот. <mark>Он</mark> любит спать на окне.", tr: "We have a cat. He likes to sleep on the windowsill.", note: "chain link, tool: the pronoun он (he)" },
            { text: "Наступила осень. <mark>Пожелтели</mark> листья. <mark>Опустели</mark> поля.", tr: "Autumn came. The leaves turned yellow. The fields became empty.", note: "parallel link, same word order: verb first, then subject" },
            { text: "Глагол имеет категории вида, наклонения, времени.", tr: "The verb has the categories of aspect, mood and tense.", note: "scientific style: terms" },
            { text: "Справка выдана для предъявления по месту требования.", tr: "This certificate is issued for presentation where required.", note: "official style: fixed phrases" }
          ],
          quiz: [
            {
              q: "What linking tool is used in «Я купил книгу. Она оказалась интересной» (I bought a book. It turned out to be interesting)?",
              options: ["a repeated word", "a pronoun", "an antonym"],
              answer: 1,
              why: "The pronoun она (it, literally \"she\") replaces книга (book) from the first sentence. This is a chain link."
            },
            {
              q: "Which text has a parallel link?",
              options: ["Утро было ясным. Ясное небо радовало нас. (The morning was clear. The clear sky made us happy.)", "Зазвенел звонок. Ученики вошли в класс. Он был светлым. (The bell rang. The pupils entered the classroom. It was bright.)", "Шумит лес. Плещет река. Кричат чайки. (The forest rustles. The river splashes. Gulls cry.)"],
              answer: 2,
              why: "The sentences do not depend on each other and are built the same way: verb first, then subject."
            },
            {
              q: "Which style uses evaluative words and tries to influence readers through newspapers or TV?",
              options: ["scientific", "journalistic", "official"],
              answer: 1,
              why: "Informing and persuading are the main functions of the journalistic style."
            }
          ]
        }
      ]
    },
    {
      title: "The verb",
      titleRu: "Глагол",
      topics: [
        {
          id: "g7-glagol-priznaki",
          title: "Verbs: aspect, transitivity, reflexive verbs, infinitive",
          ru: "Глагол: вид, переходность, возвратность, инфинитив",
          paras: "§ 5–8",
          summary: "A verb names an action or a state. Some of its features never change: aspect, transitivity, being reflexive or not, and conjugation. Knowing them helps you pick the right verb and the right case after it.",
          diagram: {
            type: "tree",
            root: {
              label: "Fixed features of a verb",
              children: [
                {
                  label: "Aspect (вид)",
                  children: [
                    { label: "Perfective (совершенный)", note: "что сделать? (what to do to the end?), finished action: решить (to solve)" },
                    { label: "Imperfective (несовершенный)", note: "что делать? (what to do?), ongoing action: решать (to be solving)" }
                  ]
                },
                {
                  label: "Transitivity (переходность)",
                  children: [
                    { label: "Transitive (переходный)", note: "noun in the accusative, no preposition: читать книгу (to read a book)" },
                    { label: "Intransitive (непереходный)", note: "no such object: идти в школу (to go to school)" }
                  ]
                },
                {
                  label: "Reflexive or not (возвратность)",
                  children: [
                    { label: "Reflexive (возвратный)", note: "has -ся (-сь): умываться (to wash oneself)" },
                    { label: "Non-reflexive (невозвратный)", note: "no -ся (-сь): умывать (to wash someone)" }
                  ]
                }
              ]
            }
          },
          explain: [
            "<b>Aspect</b> (вид). Most Russian verbs come in pairs. A <b>perfective</b> verb answers что сделать? and shows a finished, one-time result: решить (to solve, get it done). An <b>imperfective</b> verb answers что делать? and shows an action in progress or a repeated action: решать (to be solving, to solve often). English shows this with tenses (\"was solving\" vs \"solved\"); Russian shows it with the verb itself.",
            "A <b>transitive</b> verb (переходный) passes its action to an object. The object is a noun or pronoun in the accusative case with no preposition: рисовать картину (to paint a picture). With negation, or when the object means \"some of\", the genitive case is possible: не видел снега (didn't see any snow), выпить воды (to drink some water). All other verbs are <b>intransitive</b>.",
            "<b>Reflexive</b> verbs (возвратные) end in <b>-ся</b> after a consonant or <b>-сь</b> after a vowel. All reflexive verbs are intransitive: they cannot take a direct object.",
            "The <b>infinitive</b> (инфинитив) names the action without tense, person or number, like English \"to read\". It ends in <b>-ть, -ти, -чь</b>: читать (to read), нести (to carry), беречь (to take care of)."
          ],
          rule: "Transitive verb: you can put a noun in the accusative right after it, with no preposition (вижу кого? что? I see whom? what?).",
          examples: [
            { text: "<mark>построить</mark> дом", tr: "to build a house (and finish it)", note: "perfective, transitive" },
            { text: "<mark>строить</mark> дом", tr: "to be building a house", note: "imperfective, transitive" },
            { text: "<mark>гулять</mark> в парке", tr: "to walk in the park", note: "intransitive: в парке has a preposition" },
            { text: "одевать<u>ся</u>, оделас<u>ь</u>", tr: "to get dressed; (she) got dressed", note: "reflexive: -ся after a consonant, -сь after a vowel" }
          ],
          mistakes: [
            { wrong: "мыться: переходный", right: "мыться: непереходный", why: "Мыться (to wash oneself) is reflexive, and reflexive verbs are always intransitive." }
          ],
          quiz: [
            {
              q: "Which verb is transitive?",
              options: ["думать о будущем (to think about the future)", "писать письмо (to write a letter)", "смеяться громко (to laugh loudly)"],
              answer: 1,
              why: "Письмо is a noun in the accusative with no preposition. О будущем has a preposition, and смеяться has -ся."
            },
            {
              q: "What aspect is прочитать (to read through)?",
              options: ["imperfective", "perfective", "it has no aspect"],
              answer: 1,
              why: "It answers что сделать? and means a finished action."
            },
            {
              q: "Which word is an infinitive?",
              options: ["беречь", "бережёт", "берёг"],
              answer: 0,
              why: "Беречь (to take care of) ends in -чь. Бережёт is present tense (he takes care), берёг is past tense (he took care)."
            }
          ]
        },
        {
          id: "g7-nakloneniya",
          title: "Moods of the verb",
          ru: "Наклонения глагола",
          paras: "§ 9–12",
          summary: "Mood shows how an action relates to reality: it really happens, it could happen under some condition, or someone asks for it. Russian has three moods.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Indicative (изъявительное)", "Conditional (условное)", "Imperative (повелительное)"],
              ["Meaning", "an action that was, is or will be real", "a wished-for action, or one possible under a condition", "a request, order or advice"],
              ["How it is formed", "has tense forms", "infinitive stem + -л- + particle бы (б)", "present or future stem + -и or no suffix; plural + -те"],
              ["Changes for", "tense, person, number; gender in the past", "number, and gender in the singular", "number"],
              ["Example", "читаю, читал, буду читать (I read, I read [past], I will read)", "читал бы, прочитала бы (would read)", "читай, читайте, напиши (read!, read! [plural or polite], write!)"]
            ]
          },
          explain: [
            "In the <b>indicative mood</b> (изъявительное наклонение) the verb describes something that really happened, is happening or will happen. Only this mood has tenses.",
            "The <b>conditional mood</b> (условное наклонение) is like English \"would\". It is made from the infinitive stem + <b>-л-</b> (the past tense form) + the particle <b>бы (б)</b>. The particle is a separate word: пошёл бы (would go), сказала б (would say). There is no tense: я пошёл бы can mean \"I would go\" or \"I would have gone\".",
            "The <b>imperative mood</b> (повелительное наклонение) gives an order or a request. In the plural, and when you speak politely to one person, add <b>-те</b>. Forms with the particles пусть, пускай (let), давай (let's), да also urge: пусть читает (let him read), давай споём (let's sing).",
            "In the imperative, <b>ь</b> is written after ж, ш, ч: режь (cut!), спрячь (hide!). Exception: ляг, лягте (lie down!)."
          ],
          rule: "Has a tense: indicative. Has бы: conditional. A request or order: imperative.",
          examples: [
            { text: "Я <mark>пойду</mark> в кино.", tr: "I will go to the cinema.", note: "indicative, future tense" },
            { text: "Я <mark>пошёл бы</mark> в кино, если бы не дождь.", tr: "I would go to the cinema if it weren't for the rain.", note: "conditional" },
            { text: "<mark>Пойдёмте</mark> в кино!", tr: "Let's go to the cinema! (to several people)", note: "imperative, plural" },
            { text: "выпиш<u>и</u>те (imperative) and выпиш<u>е</u>те (indicative, future)", tr: "write out! / you will write out", note: "tell them apart by meaning: same sound, different spelling" }
          ],
          mistakes: [
            { wrong: "ляжь на диван", right: "ляг на диван", why: "The imperative of лечь (to lie down) is ляг, лягте, with no ь." },
            { wrong: "Завтра вы выпишите слова.", right: "Завтра вы выпишете слова.", why: "This means \"Tomorrow you will write out the words\": indicative, future tense. The verb is conjugation I, so the ending is -ете." }
          ],
          quiz: [
            {
              q: "What mood is the verb in «Я бы помог тебе» (I would help you)?",
              options: ["indicative", "conditional", "imperative"],
              answer: 1,
              why: "A form in -л with the particle бы describes an action possible under a condition."
            },
            {
              q: "Which verb is in the imperative mood?",
              options: ["Вы напишете диктант. (You will write a dictation.)", "Напишите диктант! (Write a dictation!)", "Вы написали диктант. (You wrote a dictation.)"],
              answer: 1,
              why: "Напишите is a request: stem + -и + -те."
            }
          ]
        },
        {
          id: "g7-spryazhenie",
          title: "Verb conjugation. Mixed and impersonal verbs",
          ru: "Спряжение глаголов. Разноспрягаемые и безличные глаголы",
          paras: "§ 13–15",
          summary: "By their personal endings, Russian verbs fall into conjugation I and conjugation II. When the ending is unstressed and you can't hear the vowel, you find the conjugation from the infinitive.",
          diagram: {
            type: "flow",
            title: "How to find the conjugation and spell the ending",
            steps: [
              { q: "Is it хотеть (to want), бежать (to run), or a verb made from them with a prefix?", yes: "Mixed conjugation: хочешь, хочет, but хотим, хотят; бежишь, бежит, but бегут", no: null },
              { q: "Is the personal ending stressed?", yes: "Go by the ending: -ёшь, -ёт, -ут (-ют) is conjugation I; -ишь, -ит, -ат (-ят) is conjugation II", no: null },
              { q: "Does the infinitive end in -ить (except брить, стелить)?", yes: "Conjugation II: строишь, строят (you build, they build)", no: null },
              { q: "Is it one of the 11 exceptions: гнать, держать, дышать, слышать, смотреть, видеть, ненавидеть, обидеть, терпеть, вертеть, зависеть?", yes: "Conjugation II: видишь, видят (you see, they see)", no: "Conjugation I: читаешь, читают (you read, they read); бреешь, стелешь (you shave, you spread)" }
            ]
          },
          explain: [
            "Changing a verb for person and number is called <b>conjugation</b> (спряжение). <b>Conjugation I</b> verbs have the endings -ешь, -ет, -ем, -ете, -ут (-ют). <b>Conjugation II</b> verbs have -ишь, -ит, -им, -ите, -ат (-ят).",
            "In speech, an unstressed е and и sound almost the same, so this is mostly a spelling problem. If the ending is unstressed, look at the <b>infinitive</b>. Verbs in -ить are conjugation II. Learn the exceptions by heart: брить (to shave) and стелить (to spread) are conjugation I, and 11 verbs in -еть and -ать are conjugation II.",
            "The <b>mixed</b> verbs (разноспрягаемые) хотеть (to want) and бежать (to run) take conjugation I endings in some forms and conjugation II endings in others.",
            "<b>Impersonal</b> verbs (безличные) describe something that happens by itself, with no one doing it: светает (it is getting light), морозит (it is freezing), нездоровится (one feels unwell). Like English \"it is raining\", they have no real subject, and in Russian there is not even an \"it\": the subject is impossible."
          ],
          rule: "Unstressed ending: look at the infinitive. -ить means conjugation II (except брить, стелить), plus the 11 exceptions.",
          examples: [
            { text: "стро<u>и</u>шь, стро<u>я</u>т", tr: "you build, they build", note: "строить ends in -ить: conjugation II" },
            { text: "колыш<u>е</u>тся", tr: "it sways", note: "колыхаться: not -ить, not an exception, so conjugation I" },
            { text: "держ<u>и</u>шь, держ<u>а</u>т", tr: "you hold, they hold", note: "держать: an exception, conjugation II" },
            { text: "бре<u>е</u>шь, стел<u>е</u>шь", tr: "you shave, you spread", note: "брить, стелить: conjugation I" },
            { text: "<mark>Вечереет</mark>.", tr: "Evening is coming.", note: "impersonal verb" }
          ],
          mistakes: [
            { wrong: "они борятся", right: "они борются", why: "Бороться (to fight) does not end in -ить and is not an exception, so it is conjugation I: -ются." },
            { wrong: "ты видешь", right: "ты видишь", why: "Видеть (to see) is one of the 11 conjugation II exceptions." }
          ],
          quiz: [
            {
              q: "Which letter goes in «кле..шь» (you glue, from клеить)?",
              options: ["е", "и"],
              answer: 1,
              why: "Клеить ends in -ить, so it is conjugation II: клеишь."
            },
            {
              q: "Which verb is conjugation II?",
              options: ["слушать (to listen)", "слышать (to hear)", "брить (to shave)"],
              answer: 1,
              why: "Слышать is on the list of 11 exceptions. Слушать and брить are conjugation I."
            },
            {
              q: "Which verb is impersonal?",
              options: ["знобит (one feels shivery)", "читает (reads)", "бежит (runs)"],
              answer: 0,
              why: "Знобит describes a state with no one doing it: a subject is impossible."
            }
          ]
        },
        {
          id: "g7-glagol-suffiksy",
          title: "How verbs are formed. Vowels in verb suffixes. Verb analysis",
          ru: "Словообразование глаголов. Гласные в суффиксах. Разбор глагола",
          paras: "§ 16–18",
          summary: "Should a verb be spelled with -ова- (-ева-) or -ыва- (-ива-)? Check the \"I\" form of the present or future tense.",
          diagram: {
            type: "morph",
            words: [
              { parts: [ { t: "рас", k: "prefix" }, { t: "сказ", k: "root" }, { t: "ыва", k: "suffix" }, { t: "ть", k: "suffix" } ], caption: "рассказываю (I tell): -ываю, so the infinitive has -ыва-" },
              { parts: [ { t: "у", k: "prefix" }, { t: "велич", k: "root" }, { t: "ива", k: "suffix" }, { t: "ть", k: "suffix" } ], caption: "увеличиваю (I enlarge): -иваю, so -ива-" },
              { parts: [ { t: "бесед", k: "root" }, { t: "ова", k: "suffix" }, { t: "ть", k: "suffix" } ], caption: "беседую (I talk): -ую, so -ова-" },
              { parts: [ { t: "гор", k: "root" }, { t: "ева", k: "suffix" }, { t: "ть", k: "suffix" } ], caption: "горюю (I grieve): -юю, so -ева-" }
            ]
          },
          explain: [
            "Russian makes new verbs in several ways: with a <b>prefix</b> (писать to write → переписать to rewrite), with a <b>suffix</b> (белый white → белеть to turn white), with a <b>prefix and a suffix together</b> (бежать to run → разбежаться to run off in all directions), with a <b>postfix</b> -ся (мыть to wash → мыться to wash oneself).",
            "This is a spelling rule. Put the verb in the \"I\" form (1st person singular). If it ends in <b>-ываю (-иваю)</b>, the infinitive and past tense have <b>-ыва- (-ива-)</b>. If it ends in <b>-ую (-юю)</b>, they have <b>-ова- (-ева-)</b>.",
            "These verbs are spelled with <b>-ева-</b> even though their \"I\" form is -еваю: продлевать (to extend), затмевать (to eclipse), застревать (to get stuck), увещевать (to admonish), сомневаться (to doubt), намереваться (to intend), разевать (to open wide). Learn them by heart.",
            "<b>How to analyse a verb</b>: part of speech and infinitive; fixed features (aspect, transitivity, reflexive or not, conjugation); changing features (mood, tense, person, number, gender); role in the sentence."
          ],
          rule: "-ую (-юю) → -ова- (-ева-). -ываю (-иваю) → -ыва- (-ива-).",
          examples: [
            { text: "команд<u>ова</u>ть", tr: "to command", note: "командую (I command)" },
            { text: "опазд<u>ыва</u>ть", tr: "to be late", note: "опаздываю (I am late)" },
            { text: "завед<u>ова</u>ть", tr: "to be in charge of", note: "заведую (I am in charge)" },
            { text: "прод<u>лева</u>ть", tr: "to extend", note: "learn by heart: продлеваю (I extend)" },
            { text: "<mark>Смеётся</mark>: глагол, н. ф. смеяться; несов. в., неперех., возвр., I спр.; изъяв. накл., наст. вр., 3-е л., ед. ч.; сказуемое.", tr: "(He) laughs: verb, infinitive смеяться (to laugh); imperfective, intransitive, reflexive, conjugation I; indicative mood, present tense, 3rd person, singular; predicate.", note: "a model written analysis, in the abbreviations Russian schools use" }
          ],
          mistakes: [
            { wrong: "заведывать", right: "заведовать", why: "The \"I\" form is заведую, so the suffix is -ова-." },
            { wrong: "проповедывать", right: "проповедовать", why: "Проповедую (I preach), so -ова-." }
          ],
          quiz: [
            {
              q: "How do you spell «выкорч..вать пень» (to uproot a stump)?",
              options: ["выкорчевать", "выкорчивать"],
              answer: 0,
              why: "Выкорчую (I will uproot) ends in -ую, so the suffix is -ева-."
            },
            {
              q: "Which feature of a verb can change?",
              options: ["aspect", "conjugation", "mood"],
              answer: 2,
              why: "Mood changes (читаю I read, читал бы would read, читай read!), but aspect and conjugation stay the same for a given verb."
            }
          ]
        }
      ]
    },
    {
      title: "The participle",
      titleRu: "Причастие",
      topics: [
        {
          id: "g7-prichastie",
          title: "Participles and participle phrases",
          ru: "Причастие и причастный оборот",
          paras: "§ 19–20",
          summary: "A participle (причастие) is a special verb form that describes a noun by an action, like English \"the reading boy\" or \"the fallen leaves\". A participle with its dependent words forms a participle phrase, and Russians put commas around it in some positions.",
          diagram: {
            type: "steps",
            title: "How to find a participle phrase and punctuate it",
            items: [
              "Find the participle: it answers какой? (which?), что делающий? (doing what?), что сделавший? (having done what?)",
              "Find the words that depend on the participle. The participle and these words together are the participle phrase.",
              "Find the noun it describes: the noun from which you ask the question to the participle.",
              "Phrase comes after the noun: put commas around it.",
              "Phrase comes before the noun: no commas."
            ]
          },
          explain: [
            "A <b>participle</b> (причастие) is half verb, half adjective. Like a verb, it has aspect, tense, can be reflexive and transitive. Like an adjective, it answers какой? (which?), changes for gender, number and case, and agrees with its noun: читающий мальчик (a reading boy), читающая девочка (a reading girl).",
            "In a sentence, a full participle is usually an <b>attribute</b>: it describes a noun.",
            "A <b>participle phrase</b> (причастный оборот) is a participle with its dependent words: опавшие с деревьев (fallen from the trees). The whole phrase counts as one part of the sentence. English often uses a relative clause here: \"the leaves that fell from the trees\".",
            "If the phrase comes <b>after</b> the noun, it is set off with commas. If it comes <b>before</b> the noun, there are no commas."
          ],
          rule: "Noun, phrase, ... : commas. Phrase + noun: no commas.",
          examples: [
            { text: "<mark>Листья</mark>, <u>опавшие с деревьев</u>, шуршали под ногами.", tr: "The leaves that had fallen from the trees rustled underfoot.", note: "phrase after the noun: commas" },
            { text: "<u>Опавшие с деревьев</u> <mark>листья</mark> шуршали под ногами.", tr: "The leaves that had fallen from the trees rustled underfoot.", note: "phrase before the noun: no commas" },
            { text: "Мы смотрели на <mark>реку</mark>, <u>сверкающую на солнце</u>.", tr: "We looked at the river sparkling in the sun.", note: "phrase at the end: only one comma, before it" }
          ],
          mistakes: [
            { wrong: "Смеющиеся, от радости дети бежали.", right: "Смеющиеся от радости дети бежали.", why: "\"The children, laughing with joy, ran.\" The phrase comes before the noun дети (children), so no commas." }
          ],
          quiz: [
            {
              q: "Which sentence needs commas?",
              options: ["Покрытый снегом лес молчал.", "Лес покрытый снегом молчал.", "Покрытый лес молчал."],
              answer: 1,
              why: "The phrase покрытый снегом (covered with snow) comes after лес (forest), so it needs commas: Лес, покрытый снегом, молчал."
            },
            {
              q: "Which feature does a participle have that an adjective does not?",
              options: ["gender", "case", "tense"],
              answer: 2,
              why: "A participle gets tense and aspect from the verb. Adjectives also have gender and case."
            }
          ]
        },
        {
          id: "g7-prichastiya-obrazovanie",
          title: "Active and passive participles and how they are formed",
          ru: "Действительные и страдательные причастия, их образование",
          paras: "§ 21–27",
          summary: "An active participle describes someone who does the action (the reading boy). A passive participle describes something the action is done to (the read book). Each type has its own suffixes, and the suffix tells you which one you see.",
          diagram: {
            type: "morph",
            words: [
              { parts: [ { t: "чит", k: "root" }, { t: "а", k: "suffix" }, { t: "ющ", k: "suffix" }, { t: "ий", k: "ending" } ], caption: "читающий (reading): active, present, -ущ- (-ющ-) from conjugation I verbs" },
              { parts: [ { t: "сид", k: "root" }, { t: "ящ", k: "suffix" }, { t: "ий", k: "ending" } ], caption: "сидящий (sitting): active, present, -ащ- (-ящ-) from conjugation II verbs" },
              { parts: [ { t: "чит", k: "root" }, { t: "а", k: "suffix" }, { t: "вш", k: "suffix" }, { t: "ий", k: "ending" } ], caption: "читавший (who was reading): active, past, -вш-, -ш-" },
              { parts: [ { t: "чит", k: "root" }, { t: "а", k: "suffix" }, { t: "ем", k: "suffix" }, { t: "ый", k: "ending" } ], caption: "читаемый (being read): passive, present, -ем- (conj. I), -им- (conj. II)" },
              { parts: [ { t: "про", k: "prefix" }, { t: "чит", k: "root" }, { t: "а", k: "suffix" }, { t: "нн", k: "suffix" }, { t: "ый", k: "ending" } ], caption: "прочитанный (read, finished): passive, past, -нн-, -енн-, -т-" }
            ]
          },
          explain: [
            "An <b>active</b> participle (действительное): the noun does the action itself, ученик, читающий книгу (a pupil reading a book). A <b>passive</b> participle (страдательное): the action is done to the noun, книга, читаемая учеником (a book being read by the pupil). This is like English \"reading\" vs \"read\".",
            "<b>Present</b> participles are made from the present-tense stem. If the verb is conjugation I, write <b>-ущ- (-ющ-)</b> and <b>-ем-</b>. If it is conjugation II, write <b>-ащ- (-ящ-)</b> and <b>-им-</b>: колыш<u>ущ</u>ийся (swaying, conj. I), стро<u>ящ</u>ийся (being built, conj. II).",
            "<b>Past</b> participles are made from the infinitive stem: active ones with <b>-вш-, -ш-</b>, passive ones with <b>-нн-, -енн-, -т-</b>. Before -вш- keep the same vowel as in the infinitive: увид<u>е</u>ть (to see) → увид<u>е</u>вший (who saw). If the verb ends in -ать (-ять), the а (я) also stays before -нн-: посе<u>я</u>ть (to sow) → посе<u>я</u>нный (sown). If it ends in -ить or -еть, write -енн-: увидеть → увид<u>енн</u>ый (seen).",
            "Only passive participles have a <b>short form</b>: прочитан, прочитана, прочитано, прочитаны (is read, has been read). In a sentence, a short participle is the predicate, like English \"The letter is written\"."
          ],
          rule: "The vowel in a present participle suffix depends on the verb's conjugation.",
          examples: [
            { text: "бор<u>ющ</u>ийся", tr: "fighting", note: "бороться: conjugation I, so -ющ-" },
            { text: "дыш<u>ащ</u>ий", tr: "breathing", note: "дышать: an exception, conjugation II, so -ащ-" },
            { text: "люб<u>им</u>ый", tr: "loved, favourite", note: "любить: conjugation II, so -им-" },
            { text: "увид<u>е</u>вший, but кле<u>и</u>вший", tr: "who saw; who glued", note: "same vowel as in the infinitive: увидеть, клеить" },
            { text: "Письмо <mark>написано</mark>.", tr: "The letter is written.", note: "short passive participle as the predicate" }
          ],
          mistakes: [
            { wrong: "колышащийся", right: "колышущийся", why: "Колыхаться (to sway) is conjugation I, so the suffix is -ущ-." },
            { wrong: "стелящийся", right: "стелющийся", why: "Стелить (to spread) is an exception: conjugation I, so -ющ-." }
          ],
          quiz: [
            {
              q: "Which participle is passive?",
              options: ["рисующий (drawing)", "нарисованный (drawn)", "рисовавший (who was drawing)"],
              answer: 1,
              why: "Нарисованный: the action is done to the thing, suffix -нн-."
            },
            {
              q: "How do you spell «дрож..щий от холода» (shivering from the cold)?",
              options: ["дрожащий", "дрожущий"],
              answer: 0,
              why: "Дрожать: они дрожат (they shiver), conjugation II, so the suffix is -ащ-."
            },
            {
              q: "Which stem is прочитавший (who has read) made from?",
              options: ["the present-tense stem", "the infinitive stem"],
              answer: 1,
              why: "Past participles are made from the infinitive stem: прочита-ть → прочита-вш-ий."
            }
          ]
        },
        {
          id: "g7-n-nn-prichastiya",
          title: "Н and НН in participles and verbal adjectives",
          ru: "Н и НН в причастиях и отглагольных прилагательных",
          paras: "§ 28",
          summary: "This is a spelling rule: it doesn't change pronunciation much, but it matters in writing. Full passive participles have НН, short ones have one Н. Adjectives made from imperfective verbs have one Н.",
          diagram: {
            type: "flow",
            title: "Н or НН in words made from verbs",
            steps: [
              { q: "Is the word in the short form (что сделано? каково? what has been done? what is it like?)", yes: "Short participle: one Н (окна вымыты, the windows are washed). Short adjective: as many as in the full form (девочка воспитанна, the girl is well-mannered)", no: null },
              { q: "Is it made from a perfective verb (usually it has a prefix other than не-)?", yes: "НН: брошенный мяч (a thrown ball), сложенный конверт (a folded envelope). Exception: смышлёный (clever)", no: null },
              { q: "Does it have dependent words?", yes: "НН: жаренная на масле рыба (fish fried in oil), недавно крашенный пол (a recently painted floor)", no: null },
              { q: "Does the verb end in -овать, -евать?", yes: "НН: маринованный (pickled), корчёванный (uprooted). Exceptions: кованый (forged), жёваный (chewed)", no: null },
              { q: "Is it an exception: желанный, нежданный, негаданный, невиданный, неслыханный, нечаянный, чеканный, медленный, священный?", yes: "НН", no: "One Н: жареная рыба (fried fish), некошеный луг (an unmown meadow), рваный платок (a torn scarf)" }
            ]
          },
          explain: [
            "<b>НН</b> is written in full passive participles: when the word has dependent words, when it is made from a perfective verb, or from a verb in -овать, -евать.",
            "<b>One Н</b> is written in short passive participles (сочинение написано, the essay is written) and in <b>verbal adjectives</b> (отглагольные прилагательные). These are adjectives made from imperfective verbs, used with no dependent words: варёный картофель (boiled potatoes). They describe a lasting quality, not an action.",
            "The prefix <b>не-</b> does not change the choice: некошеный луг (an unmown meadow, one Н), but не кошенный вовремя луг (a meadow not mown in time, НН, because there are dependent words).",
            "A <b>short adjective</b> keeps the same number of Н as its full form: путаное объяснение (a confused explanation) → объяснение путано; рассеянная девочка (an absent-minded girl) → девочка рассеянна."
          ],
          rule: "Prefix, dependent word, or -ова-/-ева-: НН. Short participle: Н.",
          examples: [
            { text: "сушё<u>н</u>ые ягоды, высуше<u>нн</u>ые ягоды, суше<u>нн</u>ые на солнце ягоды", tr: "dried berries; dried-out berries; berries dried in the sun", note: "one Н; НН (prefix); НН (dependent words)" },
            { text: "кваше<u>н</u>ая капуста, but маринова<u>нн</u>ые огурцы", tr: "sauerkraut; pickled cucumbers", note: "-ова- gives НН" },
            { text: "ране<u>н</u>ый боец, ране<u>нн</u>ый в плечо боец", tr: "a wounded soldier; a soldier wounded in the shoulder", note: "without and with dependent words" },
            { text: "Задача реше<u>н</u>а.", tr: "The problem is solved.", note: "short participle: one Н" }
          ],
          mistakes: [
            { wrong: "кованный сундук", right: "кованый сундук", why: "Кованый (forged, iron-bound) is an exception with one Н. But: кованный серебром сундук (a chest bound with silver), with a dependent word." },
            { wrong: "некошенный луг", right: "некошеный луг", why: "Косить (to mow) is imperfective, there are no dependent words, and the prefix не- doesn't count. So one Н." },
            { wrong: "Задача решенна.", right: "Задача решена.", why: "Short passive participles always have one Н." }
          ],
          quiz: [
            {
              q: "Where is one Н written?",
              options: ["краше..ый забор (a painted fence)", "покраше..ый забор (a painted fence)", "краше..ый вчера забор (a fence painted yesterday)"],
              answer: 0,
              why: "Крашеный: imperfective, no prefix, no dependent words."
            },
            {
              q: "Where is НН written?",
              options: ["жаре..ая картошка (fried potatoes)", "газирова..ая вода (sparkling water)", "плете..ая корзина (a woven basket)"],
              answer: 1,
              why: "Газировать (to carbonate) ends in -овать, so НН."
            },
            {
              q: "How do you spell «Поля засея..ы» (The fields are sown)?",
              options: ["засеяны", "засеянны"],
              answer: 0,
              why: "This is a short passive participle (what was done? they were sown), so one Н."
            }
          ]
        },
        {
          id: "g7-ne-s-prichastiyami",
          title: "НЕ with participles. Participle analysis",
          ru: "НЕ с причастиями. Разбор причастия",
          paras: "§ 29–30",
          summary: "Is не (not, un-) joined to the participle or written apart? With a full participle that stands alone, it is joined. With dependent words or a short participle, it is separate.",
          diagram: {
            type: "cards",
            items: [
              { title: "Joined: the word doesn't exist without НЕ", text: "There is no such word without не.", example: "ненавидящий взгляд (a hating look)" },
              { title: "Joined: full form, no dependent words", text: "The participle stands alone.", example: "непрочитанная книга (an unread book)" },
              { title: "Separate: dependent words", text: "The participle has words that explain it.", example: "не прочитанная мной книга (a book not read by me)" },
              { title: "Separate: short participle", text: "A short form is always written apart from не.", example: "книга не прочитана (the book has not been read)" },
              { title: "Separate: contrast", text: "There is a contrast with the conjunction а (but rather).", example: "не прочитанная, а пролистанная книга (a book not read but skimmed)" }
            ]
          },
          explain: [
            "With full participles, <b>не</b> is written <b>joined</b> if the participle has no dependent words, or if the word is never used without не. It works like English \"un-\": непрочитанная книга (an unread book).",
            "<b>Не</b> is written <b>separately</b> if the participle has dependent words, if there is a contrast with the conjunction а (but rather), and always with short participles.",
            "<b>How to analyse a participle</b>: part of speech (a special form of the verb), which verb it comes from, base form (nominative, singular, masculine); active or passive, tense, aspect, reflexive or not, full or short form, number, gender, case; role in the sentence."
          ],
          rule: "A dependent word or a short form: НЕ is written separately.",
          examples: [
            { text: "<u>не</u>скошенная трава", tr: "unmown grass", note: "no dependent words: joined" },
            { text: "<u>не</u> скошенная вовремя трава", tr: "grass not mown in time", note: "dependent word вовремя (in time): separate" },
            { text: "Трава <u>не</u> скошена.", tr: "The grass has not been mown.", note: "short participle: separate" },
            { text: "<u>не</u>годующий зритель", tr: "an indignant viewer", note: "not used without не: joined" }
          ],
          mistakes: [
            { wrong: "незамеченная никем ошибка", right: "не замеченная никем ошибка", why: "\"A mistake noticed by no one\": the dependent word никем (by no one) makes не separate." },
            { wrong: "Работа незакончена.", right: "Работа не закончена.", why: "\"The work is not finished\": with short participles не is written separately." }
          ],
          quiz: [
            {
              q: "Where is НЕ written separately?",
              options: ["(не)решённая задача (an unsolved problem)", "(не)решённая учеником задача (a problem not solved by the pupil)", "(не)навидящий взгляд (a hating look)"],
              answer: 1,
              why: "There is a dependent word: учеником (by the pupil)."
            },
            {
              q: "How do you write «Письмо (не)отправлено» (The letter has not been sent)?",
              options: ["joined", "separately"],
              answer: 1,
              why: "Отправлено is a short participle, so не is written separately."
            }
          ]
        }
      ]
    },
    {
      title: "The verbal adverb",
      titleRu: "Деепричастие",
      topics: [
        {
          id: "g7-deeprichastie",
          title: "Verbal adverbs and verbal adverb phrases",
          ru: "Деепричастие и деепричастный оборот",
          paras: "§ 31–35",
          summary: "A verbal adverb (деепричастие) is a special verb form that never changes and shows an extra action, like English \"while reading\" or \"having read\". With its dependent words it forms a phrase that always takes commas.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Participle (причастие)", "Verbal adverb (деепричастие)"],
              ["Meaning", "a quality of a thing, given by an action", "an extra action"],
              ["Questions", "какой? что делающий? что сделавший? (which? doing what? having done what?)", "что делая? что сделав? (doing what? having done what?)"],
              ["Changes for", "gender, number, case", "does not change"],
              ["Suffixes", "-ущ-(-ющ-), -ащ-(-ящ-), -вш-, -ш-, -ем-, -им-, -нн-, -енн-, -т-", "-а (-я) for imperfective; -в, -вши, -ши for perfective"],
              ["Role in the sentence", "attribute (describes a noun)", "adverbial (describes the verb)"],
              ["Example", "мальчик, читающий книгу (a boy reading a book)", "читал, улыбаясь (was reading, smiling)"]
            ]
          },
          explain: [
            "A <b>verbal adverb</b> (деепричастие, often called a gerund) combines features of a verb (aspect, transitivity, reflexive or not) and of an adverb (it never changes, it explains a verb, it works as an adverbial).",
            "<b>Imperfective</b> verbal adverbs come from the present-tense stem + <b>-а (-я)</b>: читают → читая (reading), кричат → крича (shouting). They mean \"while doing\". <b>Perfective</b> ones come from the infinitive stem + <b>-в, -вши, -ши</b>: прочитать → прочитав (having read), умыться → умывшись (having washed), принести → принёсши (having brought). They mean \"having done\".",
            "A <b>verbal adverb phrase</b> (деепричастный оборот) is always set off with commas, wherever it stands. The extra action must belong to the same person as the main action, that is, to the subject. English has the same rule: \"Arriving at the station, my hat flew off\" is wrong in both languages.",
            "<b>Не</b> is written separately with verbal adverbs: не зная (not knowing), не спросив (without asking). It is joined only in words that don't exist without не: негодуя (being indignant), ненавидя (hating). <b>Analysis</b>: part of speech, base form (infinitive); aspect, transitivity, reflexive or not; role in the sentence."
          ],
          rule: "A verbal adverb phrase always takes commas. НЕ with verbal adverbs is written separately.",
          examples: [
            { text: "<u>Возвращаясь домой</u>, мы встретили друга.", tr: "Returning home, we met a friend.", note: "phrase at the start: comma after it" },
            { text: "Ребята, <u>громко смеясь</u>, вышли из класса.", tr: "The kids, laughing loudly, left the classroom.", note: "phrase in the middle: commas on both sides" },
            { text: "сказать <u>не</u> подумав", tr: "to say without thinking", note: "не with a verbal adverb: separate" },
            { text: "<u>не</u>доумевая", tr: "being puzzled", note: "not used without не: joined" }
          ],
          mistakes: [
            { wrong: "Подъезжая к станции, у меня слетела шляпа.", right: "Подъезжая к станции, я потерял шляпу.", why: "\"Approaching the station, my hat flew off\": the hat was not approaching the station. The extra action must belong to the subject: \"Approaching the station, I lost my hat.\"" },
            { wrong: "Он шёл не оглядываясь, и тихо пел.", right: "Он шёл, не оглядываясь, и тихо пел.", why: "\"He walked without looking back and sang quietly.\" A verbal adverb phrase needs commas on both sides." }
          ],
          quiz: [
            {
              q: "Which word is a verbal adverb?",
              options: ["игравший", "играя", "играет"],
              answer: 1,
              why: "Играя (playing, while playing) answers что делая? and never changes. Игравший (who was playing) is a participle, играет (plays) is an ordinary verb."
            },
            {
              q: "What aspect is нарисовав (having drawn)?",
              options: ["perfective", "imperfective"],
              answer: 0,
              why: "It answers что сделав? and is made from нарисовать with the suffix -в."
            },
            {
              q: "Which sentence is built correctly?",
              options: ["Прочитав книгу, она мне понравилась. (Having read the book, it pleased me.)", "Прочитав книгу, я вернул её в библиотеку. (Having read the book, I returned it to the library.)", "Гуляя по лесу, начался дождь. (Walking in the forest, the rain started.)"],
              answer: 1,
              why: "Only here the same person read and returned the book: the subject я (I)."
            }
          ]
        }
      ]
    },
    {
      title: "The adverb",
      titleRu: "Наречие",
      topics: [
        {
          id: "g7-narechie",
          title: "Adverbs: meaning groups, comparison, formation",
          ru: "Наречие: разряды, степени сравнения, образование",
          paras: "§ 36–40",
          summary: "An adverb (наречие) never changes. It describes an action, a quality, or sometimes a thing. By meaning, adverbs fall into groups: manner, degree, place, time, cause, purpose.",
          diagram: {
            type: "cards",
            items: [
              { title: "Manner (образа действия)", text: "как? каким образом? (how? in what way?)", example: "быстро, по-новому, кувырком (quickly, in a new way, head over heels)" },
              { title: "Degree (меры и степени)", text: "сколько? насколько? в какой степени? (how much? to what degree?)", example: "очень, слишком, едва, чересчур (very, too, barely, too much)" },
              { title: "Place (места)", text: "где? куда? откуда? (where? where to? where from?)", example: "впереди, туда, издалека (ahead, there, from far away)" },
              { title: "Time (времени)", text: "когда? как долго? с каких пор? до каких пор? (when? how long? since when? until when?)", example: "вчера, долго, издавна, всегда (yesterday, for a long time, since long ago, always)" },
              { title: "Cause (причины)", text: "почему? отчего? (why? for what reason?)", example: "сгоряча, сослепу, отчего-то (in the heat of the moment, because of poor sight, for some reason)" },
              { title: "Purpose (цели)", text: "зачем? для чего? (what for?)", example: "назло, нарочно, невзначай (out of spite, on purpose, by chance)" }
            ]
          },
          explain: [
            "An <b>adverb</b> (наречие) never changes its form. It usually explains a verb (бежать <i>быстро</i>, to run quickly), an adjective (<i>очень</i> красивый, very beautiful) or another adverb (<i>совсем</i> рано, quite early). In a sentence it is most often an adverbial.",
            "Adverbs in -о, -е made from quality adjectives have <b>degrees of comparison</b>, like English \"fast, faster, fastest\". Comparative: simple (быстр<u>ее</u> faster, тише quieter) and compound (более быстро more quickly, менее быстро less quickly). The superlative is usually compound: быстрее всех (fastest of all), лучше всего (best of all).",
            "Adverbs are made from many parts of speech: from adjectives (тихий quiet → тихо quietly, новый new → по-новому in a new way), from nouns (зима winter → зимой in winter), from numerals (два two → вдвоём the two of us together), from pronouns (мой my → по-моему in my opinion), from verbs and verbal adverbs (лежать to lie → лёжа lying down).",
            "<b>How to analyse an adverb</b>: part of speech, meaning group; degree of comparison (if it has one); role in the sentence."
          ],
          rule: "To find the meaning group, ask a question from the main word to the adverb.",
          examples: [
            { text: "говорить <mark>громко</mark>", tr: "to speak loudly", note: "manner (как? how?)" },
            { text: "<mark>слишком</mark> громко", tr: "too loudly", note: "degree" },
            { text: "сделать <mark>назло</mark>", tr: "to do something out of spite", note: "purpose (зачем? what for?)" },
            { text: "Он бегает <mark>быстрее</mark> брата.", tr: "He runs faster than his brother.", note: "simple comparative of an adverb" }
          ],
          mistakes: [
            { wrong: "более быстрее", right: "быстрее / более быстро", why: "Don't mix the simple and compound comparative, just as English doesn't say \"more faster\"." }
          ],
          quiz: [
            {
              q: "Which group does the adverb in «сказать сгоряча» (to say in the heat of the moment) belong to?",
              options: ["manner", "cause", "purpose"],
              answer: 1,
              why: "Said why? Сгоряча (out of hot temper). It is an adverb of cause."
            },
            {
              q: "In which sentence is лучше (better) a comparative adverb?",
              options: ["Этот рисунок лучше. (This drawing is better.)", "Сегодня он пел лучше, чем вчера. (Today he sang better than yesterday.)", "Лучший рисунок висит у окна. (The best drawing hangs by the window.)"],
              answer: 1,
              why: "Sang how? Better: the word explains a verb. In the first sentence лучше describes a noun, so it is an adjective."
            }
          ]
        },
        {
          id: "g7-narechiya-ne-nn",
          title: "Н and НН in adverbs, НЕ with adverbs, НЕ and НИ in negative adverbs",
          ru: "Н и НН, НЕ с наречиями, НЕ и НИ в отрицательных наречиях",
          paras: "§ 41–43",
          summary: "Mostly spelling rules. An adverb in -о (-е) has as many Н as its adjective. НЕ with these adverbs follows the same rules as with adjectives. In negative adverbs, write НЕ when stressed and НИ when unstressed.",
          diagram: {
            type: "flow",
            title: "How to write НЕ with an adverb in -о (-е)",
            steps: [
              { q: "Is the word never used without НЕ?", yes: "Joined: небрежно (carelessly), нелепо (absurdly)", no: null },
              { q: "Is there a contrast with the conjunction а (but rather)?", yes: "Separate: не громко, а тихо (not loudly but quietly)", no: null },
              { q: "Are there words like далеко не, вовсе не, ничуть не, нисколько не (far from, not at all)?", yes: "Separate: вовсе не весело (not at all fun)", no: null },
              { q: "Can you find a synonym without НЕ?", yes: "Joined: недалеко (not far = близко, near), невесело (not merrily = грустно, sadly)", no: "Separate" }
            ]
          },
          explain: [
            "<b>Н and НН</b>. An adverb in -о (-е) has as many Н as the adjective it comes from: ветреный (windy) → ветрено, туманный (foggy) → туманно, взволнованный (excited) → взволнованно.",
            "<b>НЕ with adverbs in -о (-е)</b> is joined if the word is never used without не, or if you can replace it with a synonym without не, like English \"unkindly\" = \"cruelly\". It is separate when there is a contrast with а (but rather) and after далеко не, вовсе не, ничуть не (far from, not at all).",
            "<b>Negative adverbs</b> (нигде nowhere, некуда there is nowhere to go, никогда never, незачем there is no point) are made from question adverbs with the prefixes не- and ни-. Stressed: write <b>не</b>. Unstressed: write <b>ни</b>. So н<u>е</u>где (there is nowhere, stress on не), but н<u>и</u>где (nowhere, stress on где). Note the meaning too: не- words mean \"there is no place / time / reason to\", ни- words go with a negated verb."
          ],
          rule: "Не is stressed, ни is unstressed: некогда отдыхать (there is no time to rest), никогда не отдыхает (never rests).",
          examples: [
            { text: "песча<u>н</u>ый → песча<u>н</u>о", tr: "sandy → sandily", note: "one Н, as in the adjective" },
            { text: "неожида<u>нн</u>ый → неожида<u>нн</u>о", tr: "unexpected → unexpectedly", note: "НН, as in the adjective" },
            { text: "<u>не</u>интересно, but <u>не</u> интересно, а скучно", tr: "uninteresting; not interesting but boring", note: "joined; separate with a contrast" },
            { text: "н<u>е</u>куда спешить, н<u>и</u>куда не спешит", tr: "there is no need to hurry anywhere; (he) is not hurrying anywhere", note: "stressed не, unstressed ни" }
          ],
          mistakes: [
            { wrong: "нигде было сесть", right: "негде было сесть", why: "\"There was nowhere to sit.\" The stress falls on the prefix, so write не." },
            { wrong: "вовсе неплохо", right: "вовсе не плохо", why: "\"Not bad at all.\" After вовсе не, ничуть не, далеко не, не is written separately." }
          ],
          quiz: [
            {
              q: "Where do you write НИ?",
              options: ["н..откуда ждать помощи (there is nowhere to expect help from)", "н..откуда не было слышно (nothing could be heard from anywhere)", "н..когда отдохнуть (there is no time to rest)"],
              answer: 1,
              why: "Ниоткуда: the stress is not on the prefix, so ни."
            },
            {
              q: "How do you write «Он ответил (не)уверенно, а робко» (He answered not confidently but timidly)?",
              options: ["joined", "separately"],
              answer: 1,
              why: "There is a contrast with а, so не is separate."
            },
            {
              q: "How many Н are in «ветре..о» (windy)?",
              options: ["one", "two"],
              answer: 0,
              why: "The adjective ветреный has one Н, so the adverb ветрено does too."
            }
          ]
        },
        {
          id: "g7-narechiya-defis",
          title: "Vowels at the end of adverbs. Hyphens, joined and separate spelling, Ь",
          ru: "Гласные на конце наречий. Дефис, слитное и раздельное написание, Ь",
          paras: "§ 44–47",
          summary: "Spelling rules for adverbs. The last vowel depends on the prefix. A hyphen goes after по- with -ому, -ему, -ски, -ьи, after в- (во-) with -ых, -их, and with кое-, -то, -либо, -нибудь.",
          diagram: {
            type: "tree",
            root: {
              label: "Spelling adverbs",
              children: [
                {
                  label: "Last vowel",
                  children: [
                    { label: "из-, до-, с- → -а", note: "издавна (since long ago), досуха (until dry), слева (on the left)" },
                    { label: "в-, на-, за- → -о", note: "вправо (to the right), налево (to the left), засветло (before dark)" }
                  ]
                },
                {
                  label: "Hyphen",
                  children: [
                    { label: "по- + -ому, -ему, -ски, -ьи", note: "по-новому (in a new way), по-дружески (in a friendly way), по-лисьи (like a fox)" },
                    { label: "в-, во- + -ых, -их", note: "во-первых (firstly), в-третьих (thirdly)" },
                    { label: "кое-, -то, -либо, -нибудь", note: "кое-как (somehow, carelessly), где-то (somewhere), куда-нибудь (anywhere)" }
                  ]
                },
                {
                  label: "Joined or separate",
                  children: [
                    { label: "Joined: prefix + adjective or adverb", note: "вкратце (briefly), издалека (from afar), навсегда (forever)" },
                    { label: "Separate: preposition + noun", note: "без устали (tirelessly), на бегу (on the run), с налёту (at a swoop)" }
                  ]
                },
                {
                  label: "Ь after ж, ш, ч, щ",
                  children: [
                    { label: "Written", note: "вскачь (at a gallop), настежь (wide open), прочь (away)" },
                    { label: "Not written", note: "уж (already), замуж (into marriage), невтерпёж (unbearable)" }
                  ]
                }
              ]
            }
          },
          explain: [
            "<b>The last vowel</b>. If an adverb is made with the prefixes <b>из-, до-, с-</b>, it ends in <b>а</b>: досыта (to one's fill), снова (again). If it is made with <b>в-, на-, за-</b>, it ends in <b>о</b>: влево (to the left), наглухо (tightly), затемно (while it is still dark). In speech, the unstressed ending sounds the same, so you need the rule for writing.",
            "<b>With a hyphen</b> you write adverbs with по- and the suffixes -ому, -ему, -ски, -ьи (по-хорошему in a good way, по-братски like brothers, по-волчьи like a wolf), with в- (во-) and -ых (-их) (во-вторых, secondly), and with кое- and -то, -либо, -нибудь.",
            "Tell an adverb from a preposition + adjective: работать <b>по-новому</b> (to work in a new way, answers как? how?), but ехать <b>по новому</b> шоссе (to drive along the new highway, answers по какому? along which?).",
            "<b>Ь after ж, ш, ч, щ</b> is written at the end of adverbs: сплошь (all over), наотмашь (with a wide swing). Exceptions: уж, замуж, невтерпёж."
          ],
          rule: "из-, до-, с- → а; в-, на-, за- → о.",
          examples: [
            { text: "добел<u>а</u>, справ<u>а</u>", tr: "(heated) until white; on the right", note: "prefixes до-, с-" },
            { text: "запросто, насух<u>о</u>", tr: "without ceremony; dry", note: "prefixes за-, на-" },
            { text: "по<u>-</u>осеннему, but по осеннему лесу", tr: "in an autumn way; through the autumn forest", note: "adverb vs. preposition + adjective" },
            { text: "наотмаш<u>ь</u>, but уж", tr: "with a wide swing; already", note: "ь at the end of adverbs after ж, ш, ч, щ" }
          ],
          mistakes: [
            { wrong: "во первых", right: "во-первых", why: "Prefix во- + suffix -ых: hyphen. Во-первых (firstly) is a parenthetical word, so it is also set off with commas." },
            { wrong: "по-моему мнению", right: "по моему мнению; по-моему, он прав", why: "По моему мнению (in my opinion, literally \"according to my opinion\"): a preposition + pronoun, separate. По-моему alone, with no noun, is an adverb: hyphen." }
          ],
          quiz: [
            {
              q: "Which letter ends the adverb «издавн..» (since long ago)?",
              options: ["а", "о"],
              answer: 0,
              why: "The prefix из- needs а at the end: издавна."
            },
            {
              q: "Which one needs a hyphen?",
              options: ["(по)новому мосту (along the new bridge)", "(по)новому решить (to solve in a new way)", "(по)весеннему лесу (through the spring forest)"],
              answer: 1,
              why: "Solve how? In a new way: an adverb. The others are a preposition + adjective."
            },
            {
              q: "Which word has no Ь at the end?",
              options: ["настеж..", "замуж..", "вскач.."],
              answer: 1,
              why: "Замуж is an exception, like уж and невтерпёж."
            }
          ]
        }
      ]
    },
    {
      title: "Helper parts of speech",
      titleRu: "Служебные части речи",
      topics: [
        {
          id: "g7-predlog",
          title: "Prepositions: types and spelling",
          ru: "Предлог: разряды и правописание",
          paras: "§ 48–52",
          summary: "A preposition (предлог) is a helper word that links words in a phrase, like English \"in\", \"because of\". Prepositions made from other words must be told apart from the words they came from, because they are spelled differently.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Derived preposition", "Noun with a preposition"],
              ["в течение", "в течение дня (during the day; ends in е)", "в течении реки (in the current of the river)"],
              ["в продолжение", "в продолжение урока (throughout the lesson; ends in е)", "в продолжении романа (in the sequel to the novel)"],
              ["вследствие", "вследствие дождя (due to the rain; one word, ends in е)", "в следствии по делу (in the investigation of the case)"],
              ["навстречу", "выйти навстречу гостю (to go out to meet a guest)", "прийти на встречу с друзьями (to come to a meeting with friends)"],
              ["насчёт", "спросить насчёт поездки (to ask about the trip)", "положить деньги на счёт (to put money into an account)"]
            ]
          },
          explain: [
            "<b>Helper parts of speech</b> have no meaning of their own and are not parts of the sentence. They link words or add shades of meaning.",
            "By origin, prepositions are <b>basic</b> (непроизводные: в in, на on, без without, для for, из-за because of, from behind) or <b>derived</b> (производные), made from other words: from nouns (ввиду in view of, вследствие due to), adverbs (около near, вдоль along), verbal adverbs (благодаря thanks to, спустя after). By structure they are <b>simple</b> (над above, кроме except) or <b>compound</b> (несмотря на despite, в отличие от unlike).",
            "Test: a derived preposition can be replaced by another preposition: в течение дня = во время дня (during the day), вследствие дождя = из-за дождя (because of the rain). With a real noun you can ask a question and add an adjective: в (быстром) течении реки (in the (fast) current of the river).",
            "The prepositions <b>благодаря, согласно, вопреки</b> (thanks to, according to, despite) take the dative case: согласно расписани<u>ю</u> (according to the timetable), благодаря друг<u>у</u> (thanks to a friend)."
          ],
          rule: "в течение, в продолжение, вследствие: ending е.",
          examples: [
            { text: "в течени<u>е</u> недели", tr: "during the week", note: "derived preposition" },
            { text: "вследстви<u>е</u> болезни", tr: "due to illness", note: "derived preposition, one word" },
            { text: "<u>из-за</u> угла, <u>из-под</u> стола", tr: "from around the corner; from under the table", note: "double prepositions take a hyphen" },
            { text: "согласно приказ<u>у</u>", tr: "according to the order", note: "dative case" }
          ],
          mistakes: [
            { wrong: "в течении часа", right: "в течение часа", why: "\"Within an hour\": a derived preposition of time, ending е." },
            { wrong: "согласно приказа", right: "согласно приказу", why: "Согласно (according to) takes the dative case." }
          ],
          quiz: [
            {
              q: "Which one is a derived preposition?",
              options: ["в течени.. реки (in the river's current)", "в течени.. года (during the year)", "в быстром течени.. (in a fast current)"],
              answer: 1,
              why: "В течение года = во время года (during the year): a preposition, ending е."
            },
            {
              q: "Which preposition is basic (not derived)?",
              options: ["около (near)", "из-за (because of)", "благодаря (thanks to)"],
              answer: 1,
              why: "Из-за is not made from another part of speech. Около comes from an adverb, благодаря from a verbal adverb."
            }
          ]
        },
        {
          id: "g7-soyuz",
          title: "Conjunctions: types and spelling",
          ru: "Союз: разряды и правописание",
          paras: "§ 53–55",
          summary: "A conjunction (союз) joins words of the same type or parts of a complex sentence, like English \"and\", \"but\", \"because\". Conjunctions are coordinating or subordinating.",
          diagram: {
            type: "tree",
            root: {
              label: "Conjunctions (союзы)",
              children: [
                {
                  label: "Coordinating (сочинительные)",
                  note: "join equal parts",
                  children: [
                    { label: "Joining (соединительные)", note: "и, да (= и), ни... ни, тоже, также, не только... но и (and, neither... nor, also, not only... but also)" },
                    { label: "Contrasting (противительные)", note: "а, но, да (= но), однако, зато (and/but, but, however, but then)" },
                    { label: "Choice (разделительные)", note: "или, либо, то... то, не то... не то (or, either, now... now, whether... or)" },
                    { label: "Explaining (пояснительные)", note: "то есть, а именно (that is, namely)" }
                  ]
                },
                {
                  label: "Subordinating (подчинительные)",
                  note: "attach a dependent clause",
                  children: [
                    { label: "что, чтобы, если, хотя, потому что, так как, как будто (that, in order to, if, although, because, since, as if)" }
                  ]
                }
              ]
            }
          },
          explain: [
            "A <b>conjunction</b> (союз) joins words of the same type in a sentence and parts of a complex sentence. It can also link sentences in a text.",
            "By structure, conjunctions are <b>simple</b> (и, а, если, чтобы) or <b>compound</b> (потому что because, так как since, как будто as if). By meaning, they are <b>coordinating</b> (join equal parts) or <b>subordinating</b> (attach a dependent clause).",
            "The conjunctions <b>тоже, также</b> (also), <b>зато</b> (but then), <b>чтобы</b> (in order to) are one word. Tell them apart from a pronoun or adverb + particle: <b>то же</b> (the same), <b>так же</b> (in the same way), <b>за то</b> (for that), <b>что бы</b> (what would). Test: in the two-word version you can drop же or бы and keep the meaning. The conjunction тоже can be replaced by и (too).",
            "The compound conjunctions <b>потому что, так как, несмотря на то что</b> are written as separate words."
          ],
          rule: "You can drop же or бы: write separately. You can't: write as one word.",
          examples: [
            { text: "Я <u>тоже</u> приду.", tr: "I will come too.", note: "conjunction (= и я приду, and I will come)" },
            { text: "Мы купили <u>то же</u>, что и вчера.", tr: "We bought the same as yesterday.", note: "pronoun то + particle же" },
            { text: "Я пришёл, <u>чтобы</u> помочь.", tr: "I came to help.", note: "conjunction: бы cannot be dropped" },
            { text: "<u>Что бы</u> ещё почитать?", tr: "What else could I read?", note: "pronoun что + particle бы: you can say что почитать? (what to read?)" }
          ],
          mistakes: [
            { wrong: "Он то же пошёл в кино.", right: "Он тоже пошёл в кино.", why: "\"He also went to the cinema.\" You can say и он пошёл (he too went), so it is the conjunction тоже: one word." },
            { wrong: "по тому что", right: "потому что", why: "In the conjunction потому что (because), потому is one word and что is separate." }
          ],
          quiz: [
            {
              q: "Where is it written as one word?",
              options: ["Он (за)то и наказан. (That's what he was punished for.)", "Дождь, (за)то тепло. (It's raining, but it's warm.)", "Спасибо (за)то, что пришёл. (Thanks for coming.)"],
              answer: 1,
              why: "Here зато is a conjunction: you can replace it with но (but). In the other sentences it is the preposition за + the pronoun то."
            },
            {
              q: "Which conjunction is subordinating?",
              options: ["однако (however)", "либо (or)", "если (if)"],
              answer: 2,
              why: "Если attaches a dependent clause of condition. Однако and либо are coordinating."
            }
          ]
        },
        {
          id: "g7-chastica",
          title: "Particles: types, spelling, НЕ and НИ",
          ru: "Частица: разряды, правописание, НЕ и НИ",
          paras: "§ 56–59",
          summary: "A particle (частица) is a small word that adds a shade of meaning or helps build verb forms. НЕ means \"not\". НИ usually makes a negation stronger, like English \"not a single\" or \"neither... nor\".",
          diagram: {
            type: "flow",
            title: "НЕ or НИ",
            steps: [
              { q: "Do you need to strengthen a negation that is already there (не было ни облачка, there wasn't a single cloud)?", yes: "НИ: ни души (not a soul), ни капли (not a drop)", no: null },
              { q: "Is the particle repeated with a list of words in a negative sentence?", yes: "НИ... НИ: не было ни ветра, ни дождя (there was neither wind nor rain)", no: null },
              { q: "Is it a clause meaning \"-ever\": кто бы ни, что ни, как ни, куда ни (whoever, whatever, however, wherever)?", yes: "НИ: Куда ни посмотришь, везде снег. (Wherever you look, there is snow everywhere.)", no: null },
              { q: "Is it an exclamation or question with только: где только не, чего только не?", yes: "НЕ: Где я только не был! (Where haven't I been!)", no: "НЕ: ordinary negation: не знаю (I don't know), не он (not him)" }
            ]
          },
          explain: [
            "A <b>particle</b> (частица) is not a part of the sentence on its own. Particles are <b>form-building</b> (бы, б, да, давай, пусть, пускай: they make conditional and imperative forms, like English \"would\" and \"let\") or <b>meaning</b> particles.",
            "Meaning particles include: negative (не, ни), question (ли whether, разве really?, неужели is it possible that?), pointing (вот here is, вон there is), emphasis (даже even, ведь after all, же), limiting (только, лишь only), comparison (словно, будто as if), exclamation (что за what a, ну и what a) and others.",
            "The particles <b>бы, ли, же</b> are separate words: сделал бы (would do), знал ли (whether he knew), он же (he is the one). The particles <b>-то, -ка, -либо, -нибудь, кое-</b> take a hyphen: кто-то (someone), скажи-ка (go on, tell me).",
            "Two <b>не</b> in one sentence make a positive meaning: не могу не сказать (I can't help saying = I must say). Unlike English, Russian also uses double negatives normally: никто не пришёл (nobody came, literally \"nobody not came\")."
          ],
          rule: "НЕ negates. НИ strengthens a negation and is repeated with a list of words.",
          examples: [
            { text: "Я <u>не</u> знаю этого человека.", tr: "I don't know this person.", note: "negation" },
            { text: "На небе <u>ни</u> облачка.", tr: "There isn't a single cloud in the sky.", note: "stronger negation" },
            { text: "Как <u>ни</u> старался, не успел.", tr: "However hard he tried, he didn't make it.", note: "\"-ever\" meaning in a clause" },
            { text: "Чего только <u>не</u> было на ярмарке!", tr: "What wasn't there at the fair!", note: "exclamation with только" },
            { text: "пошёл <u>бы</u>, скажи<u>-ка</u>", tr: "would go; go on, tell me", note: "бы separate, -ка with a hyphen" }
          ],
          mistakes: [
            { wrong: "Кто не придёт, всем рады.", right: "Кто ни придёт, всем рады.", why: "\"Whoever comes is welcome.\" A clause with the \"-ever\" meaning takes ни." },
            { wrong: "Где он только ни бывал!", right: "Где он только не бывал!", why: "\"Where hasn't he been!\" An exclamation with только takes не." }
          ],
          quiz: [
            {
              q: "Where do you write НИ?",
              options: ["Я н.. мог н.. улыбнуться. (I couldn't help smiling.)", "Сколько н.. спрашивай, он молчит. (However much you ask, he is silent.)", "Кто н.. мечтал о путешествиях? (Who hasn't dreamed of travelling?)"],
              answer: 1,
              why: "Сколько ни спрашивай (however much you ask): the \"-ever\" meaning in a clause."
            },
            {
              q: "Which particle is form-building?",
              options: ["даже (even)", "пусть (let)", "ли (whether)"],
              answer: 1,
              why: "Пусть makes an imperative form: пусть поёт (let him sing)."
            },
            {
              q: "How do you write «скажи(ка)» (go on, tell me)?",
              options: ["as one word", "separately", "with a hyphen"],
              answer: 2,
              why: "The particle -ка takes a hyphen: скажи-ка."
            }
          ]
        }
      ]
    },
    {
      title: "The interjection",
      titleRu: "Междометие",
      topics: [
        {
          id: "g7-mezhdometie",
          title: "Interjections and sound-imitating words",
          ru: "Междометие и звукоподражательные слова",
          paras: "§ 60",
          summary: "An interjection (междометие) is a special word that never changes and expresses a feeling or an urge without naming it, like English \"oh!\" or \"hey!\". It is neither an independent part of speech nor a helper word.",
          diagram: {
            type: "cards",
            items: [
              { title: "Express feelings", text: "joy, surprise, fear, regret", example: "ах, ой, ура, увы, ого (ah, oh, hooray, alas, wow)" },
              { title: "Express urges", text: "orders, calls, commands, calling animals", example: "эй, тс-с, марш, брысь, цып-цып (hey, shh, march, shoo [to a cat], here chick-chick)" },
              { title: "Politeness formulas", text: "greetings, goodbyes, thanks", example: "здравствуйте, привет, спасибо, пока (hello, hi, thank you, bye)" },
              { title: "Derived", text: "came from independent words", example: "батюшки, караул, господи (good heavens, help!, oh Lord)" },
              { title: "Sound imitations (not interjections)", text: "copy sounds of animals and nature, express no feeling", example: "мяу, ква-ква, тик-так (meow, croak-croak, tick-tock)" }
            ]
          },
          explain: [
            "An <b>interjection</b> (междометие) never changes and is not a part of the sentence. It shows a feeling or the speaker's will but does not name it: <i>ах</i> (ah!) instead of the word восхищение (admiration), <i>эй</i> (hey!) instead of призыв (a call).",
            "Interjections are <b>basic</b> (ах, ну, ой) or <b>derived</b>, made from independent words (батюшки, literally \"fathers\", means \"good heavens\"; караул, literally \"guard\", means \"help!\").",
            "<b>Sound imitations</b> (звукоподражания) are different from interjections: they copy sounds but express no feelings.",
            "Interjections and sound imitations made of repeated parts take a <b>hyphen</b>: ай-ай-ай (tut-tut), ого-го (whoa). An interjection is usually separated by a comma or followed by an exclamation mark."
          ],
          rule: "An interjection shows a feeling but doesn't name it. Repeated parts take a hyphen.",
          examples: [
            { text: "<mark>Ах</mark>, какой чудесный вечер!", tr: "Ah, what a wonderful evening!", note: "feeling: admiration" },
            { text: "<mark>Эй</mark>, подожди меня!", tr: "Hey, wait for me!", note: "urge: a call" },
            { text: "Лягушки квакают: ква<u>-</u>ква.", tr: "The frogs croak: croak-croak.", note: "sound imitation, with a hyphen" }
          ],
          quiz: [
            {
              q: "Which word is not an interjection?",
              options: ["увы (alas)", "мяу (meow)", "эй (hey)"],
              answer: 1,
              why: "Мяу copies a sound, not a feeling: it is a sound imitation."
            },
            {
              q: "Is an interjection a part of the sentence?",
              options: ["yes, usually an adverbial", "no", "yes, a predicate"],
              answer: 1,
              why: "Interjections are not parts of the sentence."
            }
          ]
        }
      ]
    }
  ]
};
