import { LessonData } from '../../../types';

export const lesson_01: LessonData = {
    id: 'greetings',
    title: 'Lección 1: Greetings & Introductions',
    description: 'Learn the essentials for a professional first interaction.',
    introduction: {
        text: "First impressions matter, especially in a professional environment. Knowing how to greet people and introduce yourself confidently is the first step to building strong working relationships.",
        objectives: ["Learn basic greetings and introductions.", "Understand how to form simple questions and negative sentences."],
    },
    grammar: [
        {
            title: 'Asking Questions (to be vs. other verbs)',
            content: [
                "With 'to be' (is, am, are), invert the subject and verb:",
                "<code>You <strong>are</strong> a developer. &rarr; <strong>Are</strong> you a developer?</code>",
                "With all other verbs, add 'Do' or 'Does' at the beginning:",
                "<code>You <strong>work</strong> here. &rarr; <strong>Do</strong> you <strong>work</strong> here?</code>"
            ],
            quickCheck: {
                question: "Turn this statement into a question: \"She is a project manager.\"",
                options: ["Is she a project manager?", "Does she is a project manager?"],
                correctAnswer: "Is she a project manager?",
                explanation: "With 'is', we just invert the subject ('she') and the verb ('is').",
                inputType: "select"
            }
        },
        {
            title: "Making Negative Sentences",
            content: [
                "With 'to be', just add <strong>'not'</strong> after the verb:",
                "<code>I <strong>am</strong> a manager. &rarr; I <strong>am not</strong> a manager.</code>",
                "With all other verbs, add <strong>'do not'</strong> (or <strong>'don't'</strong>) before the verb:",
                "<code>I <strong>know</strong> JavaScript. &rarr; I <strong>do not know</strong> JavaScript.</code>"
            ],
             quickCheck: {
                question: "Make this sentence negative: \"I speak Python.\"",
                options: ["I not speak Python.", "I do not speak Python."],
                correctAnswer: "I do not speak Python.",
                explanation: "For verbs other than 'to be', we add 'do not' before the verb.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "Good morning, Anna!", translation: "¡Buenos días, Anna!", techContext: "A simple, friendly greeting for a colleague in a team chat or meeting." },
        { original: "My name is Luis.", translation: "Me llamo Luis.", techContext: "The most basic way to give your name." },
        { original: "Nice to meet you.", translation: "Mucho gusto.", techContext: "An essential and friendly phrase when meeting someone for the first time." }
    ],
    keyWords: [
        { word: 'Greeting', translation: 'Saludo', example: 'A friendly greeting is important in the team chat.' },
        { word: 'Introduction', translation: 'Presentación', example: 'Please prepare a brief introduction for the new client.' },
        { word: 'Colleague', translation: 'Colega', example: 'My colleague will help you with the deployment.' },
    ],
    phrasalVerbs: [
        { verb: 'meet up', translation: 'Reunirse / Encontrarse', example: 'Let\'s meet up after the stand-up to discuss the bug.' },
        { verb: 'get to know', translation: 'Conocer a alguien', example: 'We have a team lunch every Friday to get to know each other better.' },
    ],
    reading: {
        title: "Read this introductory chat message:",
        text: "<p><strong>Sarah:</strong> Hi everyone! My name is Sarah, and I'm the new UX designer. I am from Canada. It's great to be here. Nice to meet you all!</p><p><strong>David:</strong> Welcome, Sarah! I'm David, a backend developer. Nice to meet you too. Are you familiar with our design system?</p>",
        questions: ["What is Sarah's role on the team?", "How does David form his question to Sarah?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Maria", line: "Hi, I'm Maria. What's your name?" },
            { speaker: "Luis", line: "My name is Luis. I am from Mexico." },
            { speaker: "Maria", line: "Nice to meet you, Luis." }
        ],
        correctAnswers: ["name", "from", "Nice"],
        dialogue: "Maria: \"Hi, I'm Maria. What's your __BLANK__?\"<br/>Luis: \"My name is Luis. I am __BLANK__ Mexico.\"<br/>Maria: \"__BLANK__ to meet you, Luis.\""
    },
    speaking: {
        scenario: "It's your first day on a new team. In the daily stand-up meeting (via video call), the manager asks you to introduce yourself. What do you say?"
    },
    writing: {
        title: "Write a short introductory Slack message.",
        scenario: "It's your first day at a new remote job. Write a message to post in your team's #general channel to introduce yourself.",
        guidance: {
            title: "Tips:",
            points: [
                "Start with a friendly greeting. (e.g., \"Hi everyone!\")",
                "State your name and your new role. (e.g., \"My name is [Your Name], and I'm the new frontend developer.\")",
                "Add a friendly closing. (e.g., \"I'm really excited to be here!\")"
            ]
        }
    },
    summary: {
        points: [
            "To make a question with 'to be', swap the subject and verb: \"You are...\" &rarr; \"Are you...?\"",
            "For other verbs, add 'Do' at the start: \"You speak...\" &rarr; \"Do you speak...?\"",
            "A simple, friendly introduction is always a great start!"
        ]
    }
};