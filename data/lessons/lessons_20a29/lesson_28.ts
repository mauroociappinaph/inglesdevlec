import { LessonData } from '../../../types';

export const lesson_28: LessonData = {
    id: 'look-vs-see',
    title: "Lesson 28: 'Look' vs. 'See': Intentional Action vs. Passive Perception",
    description: "Learn when to use 'look' (active) versus 'see' (passive).",
    introduction: {
        text: "In English, 'look' and 'see' are related to sight, but they are not the same. 'See' is the passive sense of noticing something with your eyes. 'Look' is an active, intentional action. Understanding this difference is crucial in contexts like pair programming and code reviews, where you need to be precise about your actions.",
        objectives: [
            "Differentiate between 'see' as passive perception and 'look' as an active action.",
            "Use 'look' with prepositions like 'at', 'for', and 'into'.",
            "Apply these verbs correctly in technical communication."
        ],
    },
    grammar: [
        {
            title: "'See': Passive Perception",
            content: [
                "<strong>'See'</strong> is about what comes to your eyes without trying. It's the ability to notice something.",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>I opened the file and I <span class='text-teal-300'>see</span> an error on line 50.</div>",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>Did you <span class='text-teal-300'>see</span> my message on Slack?</div>",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>I <span class='text-teal-300'>see</span> what you mean. (Also used for understanding)</div>"
            ],
            quickCheck: {
                question: "You're reading an email and you notice a typo. What is the most natural way to say it?",
                options: ["I am looking at a typo.", "I see a typo."],
                correctAnswer: "I see a typo.",
                explanation: "You noticed it passively while reading, so 'see' is correct.",
                inputType: "select"
            }
        },
        {
            title: "'Look': Active and Intentional Action",
            content: [
                "<strong>'Look'</strong> is the action of directing your eyes towards something on purpose. It is often followed by a preposition.",
                "<ul><li><strong>look at:</strong> to direct your eyes to something. 'Can you <span class='text-accent-pink'>look at</span> my screen?'</li><li><strong>look for:</strong> to search for something. 'I'm <span class='text-accent-pink'>looking for</span> the documentation.'</li><li><strong>look into:</strong> to investigate. 'We need to <span class='text-accent-pink'>look into</span> this performance issue.'</li></ul>"
            ],
            quickCheck: {
                question: "You need help with a bug. How do you ask a colleague to examine your code?",
                options: ["Can you see my code?", "Can you look at my code?"],
                correctAnswer: "Can you look at my code?",
                explanation: "You are asking them to perform an active, intentional action.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "Please look at this line of code.", translation: "Por favor, mira esta línea de código.", techContext: "Directing someone's attention during pair programming or a code review." },
        { original: "I don't see the problem here.", translation: "No veo el problema aquí.", techContext: "Stating that you have reviewed something but have not passively noticed an issue." },
        { original: "I'm looking for a solution online.", translation: "Estoy buscando una solución en línea.", techContext: "Describing the active process of searching for an answer." },
        { original: "Let me see... ah, I see it now.", translation: "A ver... ah, ya lo veo.", techContext: "A common phrase when you are about to investigate, and then you passively notice the answer." }
    ],
    keyWords: [
        { word: 'Perception', translation: 'Percepción', example: 'My perception is that the UI is slow, but I don\'t see the cause yet.' },
        { word: 'Intention', translation: 'Intención', example: 'My intention is to look at the bug tomorrow.' },
        { word: 'Glance', translation: 'Vistazo', example: 'I took a quick glance at the code, but I need to look at it more closely.' }
    ],
    phrasalVerbs: [
        { verb: 'look over', translation: 'revisar por encima', example: 'Can you quickly look over my pull request before I merge it?' },
        { verb: 'look into', translation: 'investigar', example: 'The security team will look into the vulnerability.' },
        { verb: 'look up', translation: 'buscar (información)', example: 'I had to look up the correct syntax for that method.' }
    ],
    reading: {
        title: "Read this Slack conversation between two developers:",
        text: "<p><strong>Alex:</strong> \"Hey, can you look at my code? I'm getting a weird error.\"</p><p><strong>Maria:</strong> \"Sure, share your screen.\"</p><p><strong>Alex:</strong> \"Okay, do you see the console output on the right?\"</p><p><strong>Maria:</strong> \"Yes, I see it. Hmm. Let me look at the function on line 25. Ah, I see the problem. You're mutating the state directly.\"</p>",
        questions: ["What does Alex ask Maria to do first?", "What does Maria 'see' after looking at the code?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Anna", line: "I'm looking for the project requirements document." },
            { speaker: "Luis", line: "Let me see... I think I saw it in the shared drive. Look in the 'Project Alpha' folder." }
        ],
        correctAnswers: ["looking for", "see", "saw", "Look"],
        dialogue: "Anna: \"I'm __BLANK__ the project requirements document.\"<br/>Luis: \"Let me __BLANK__... I think I __BLANK__ it in the shared drive. __BLANK__ in the 'Project Alpha' folder.\""
    },
    speaking: {
        scenario: "You are in a virtual meeting. Ask a colleague to direct their attention to a specific part of a document you are sharing on your screen."
    },
    writing: {
        title: "Write a bug report comment.",
        scenario: "You have been assigned a bug. Write a short comment on the ticket to say that you will start investigating it.",
        guidance: {
            title: "Example:",
            points: ["\"Assigned to me. I will start looking into this issue today.\""]
        }
    },
    summary: {
        points: [
            "<strong>See</strong> is a passive sense: you notice things without trying.",
            "<strong>Look</strong> is an active verb: you intentionally direct your eyes to something.",
            "<strong>Look</strong> is often followed by a preposition (at, for, into, over) that changes its specific meaning."
        ]
    }
};