import { LessonData } from '../../../types';

export const lesson_34: LessonData = {
    id: 'superlatives-tech',
    title: 'Lección 34: Superlatives in Tech: "-est" vs. "the most"',
    description: "Compare systems, tools, and models to find the best.",
    introduction: {
        text: "After comparing two things, the next step is to say which one is number one. Superlatives are used to single out an item as having the most of a certain quality. In tech, you'll use them to talk about the fastest server, the easiest framework, or the most powerful AI model.",
        objectives: [
            "Form superlative adjectives using '-est' and 'the most'.",
            "Understand the difference between comparatives (better) and superlatives (the best).",
            "Apply superlatives to compare performance, speed, and efficiency in technology."
        ],
    },
    grammar: [
        {
            title: "Forming Superlatives",
            content: [
                "Superlatives compare one thing to all others in a group. We almost always use <strong>'the'</strong> before a superlative.",
                "For short (1-syllable) adjectives, add <strong>'-est'</strong>:",
                "<code>fast &rarr; the fast<strong>est</strong></code>",
                "For longer (2+ syllable) adjectives, use <strong>'the most'</strong> or <strong>'the least'</strong>:",
                "<code>powerful &rarr; <strong>the most</strong> powerful</code>",
                "Adjectives ending in '-y' change to <strong>'-iest'</strong>:",
                "<code>easy &rarr; the eas<strong>iest</strong></code>",
            ],
            quickCheck: {
                question: "Complete: 'This is ___ (reliable) server in our entire infrastructure.'",
                options: ["the reliablest", "the most reliable"],
                correctAnswer: "the most reliable",
                explanation: "'Reliable' is a long adjective, so we use 'the most'.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "This framework is the easiest to learn.", translation: "Este framework es el más fácil de aprender.", techContext: "Recommending a tool for beginners." },
        { original: "He’s the most experienced developer on the team.", translation: "Él es el desarrollador con más experiencia del equipo.", techContext: "Identifying the go-to person for a difficult problem." },
        { original: "Our new AI system is the fastest so far.", translation: "Nuestro nuevo sistema de IA es el más rápido hasta ahora.", techContext: "Highlighting a key achievement in a project update." },
        { original: "GPT-4 is one of the smartest models right now.", translation: "GPT-4 es uno de los modelos más inteligentes en este momento.", techContext: "Discussing the state of the art in AI." }
    ],
    keyWords: [
        { word: 'Performance', translation: 'Rendimiento', example: 'We are aiming for the best possible performance.' },
        { word: 'Efficient', translation: 'Eficiente', example: 'The bubble sort is not the most efficient algorithm.' },
        { word: 'Fast / Smart', translation: 'Rápido / Inteligente', example: 'We need the fastest chip and the smartest AI.' },
        { word: 'Reliable', translation: 'Fiable / Confiable', example: 'This is the most reliable database for our use case.' }
    ],
    phrasalVerbs: [
        { verb: 'stand out as', translation: 'destacar como', example: 'This library stands out as the best option for performance.' },
        { verb: 'end up with', translation: 'terminar con', example: 'If we follow this path, we will end up with the most complex solution.' }
    ],
    reading: {
        title: "Read this product review:",
        text: "<p>\"We tested three cloud providers. Provider A was the cheapest. Provider B had the fastest network. However, Provider C was the most balanced option overall. It offered the best documentation and the most flexible API, making it the easiest choice for our development team.\"</p>",
        questions: ["Which provider was the fastest?", "Which provider was the most balanced?"]
    },
    listening: {
        title: "Practice: Complete the Sentences",
        dialogueTurns: [
            { speaker: "First", line: "This laptop is the most powerful in our office." },
            { speaker: "Second", line: "ChatGPT is the smartest model I've tested." }
        ],
        correctAnswers: ["the most powerful", "the smartest"],
        dialogue: "1. This laptop is __BLANK__ in our office.<br/>2. ChatGPT is __BLANK__ model I’ve tested."
    },
    speaking: {
        scenario: "Your manager asks for your opinion on the best tool for a specific task (e.g., 'What's the best code editor for web development?'). Give your opinion using a superlative and provide one reason."
    },
    writing: {
        title: "AI Mini-Challenge: Make Superlative Comparisons",
        scenario: "Write two sentences comparing technologies you know. Use a superlative in each sentence.",
        guidance: {
            title: "Examples:",
            points: [
                "\"For mobile development, Flutter is often the fastest way to build for both iOS and Android.\"",
                "\"VS Code is the most popular code editor among web developers.\""
            ]
        }
    },
    summary: {
        points: [
            "Use <strong>'the' + adjective + '-est'</strong> for short adjectives (e.g., 'the fastest').",
            "Use <strong>'the most' + adjective</strong> for long adjectives (e.g., 'the most powerful').",
            "Superlatives compare one thing to all others in a group."
        ]
    }
};