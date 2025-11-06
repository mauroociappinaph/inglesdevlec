import { LessonData } from '../../../types';

export const lesson_23: LessonData = {
    id: 'comparatives',
    title: 'Lección 23: Tech Comparatives',
    description: 'Learn how to compare technologies, frameworks, and hardware.',
    introduction: {
        text: "In tech, we constantly compare things: which database is faster? Is this framework more efficient? This lesson teaches you how to make these comparisons clearly.",
        objectives: [
            "Form comparative adjectives (-er and more/less).",
            "Use 'than' to compare two things.",
            "Apply comparatives to technical contexts."
        ],
    },
    grammar: [
        {
            title: 'Forming Comparatives',
            content: [
                "To compare two things, we change the adjective. The structure is: <strong>Comparative Adjective + than</strong>.",
                "For short (1-syllable) adjectives, add <strong>-er</strong>: <br/><div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>fast &rarr; fast<span class='text-accent-pink'>er</span> than</div>",
                "For longer (2+ syllable) adjectives, use <strong>more</strong> or <strong>less</strong>: <br/><div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>powerful &rarr; <span class='text-accent-pink'>more</span> powerful than</div>",
                "Some 2-syllable adjectives ending in -y change to -ier: <br/><div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>easy &rarr; eas<span class='text-accent-pink'>ier</span> than</div>",
            ],
            quickCheck: {
                question: "Complete the sentence: 'This algorithm is ___ efficient than the old one.'",
                options: ["efficienter", "more efficient"],
                correctAnswer: "more efficient",
                explanation: "'Efficient' is a long adjective, so we use 'more'.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "My computer is faster than yours.", translation: "Mi computadora es más rápida que la tuya.", techContext: "Comparing hardware performance." },
        { original: "Python is easier than C++ for beginners.", translation: "Python es más fácil que C++ para principiantes.", techContext: "Comparing the difficulty of programming languages." },
        { original: "React is more popular than Angular right now.", translation: "React es más popular que Angular en este momento.", techContext: "Discussing the popularity of frameworks." },
        { original: "This AI algorithm is more advanced than the previous one.", translation: "Este algoritmo de IA es más avanzado que el anterior.", techContext: "Comparing versions of software or algorithms." }
    ],
    keyWords: [
        { word: 'faster than', translation: 'más rápido que', example: 'Our new server is faster than the old one.' },
        { word: 'slower than', translation: 'más lento que', example: 'The build process is slower than before.' },
        { word: 'easier than', translation: 'más fácil que', example: 'Using this library is easier than writing it from scratch.' },
        { word: 'bigger than', translation: 'más grande que', example: 'The log file is bigger than I expected.' },
        { word: 'more expensive than', translation: 'más caro que', example: 'The enterprise license is more expensive than the standard one.' },
        { word: 'more powerful than', translation: 'más poderoso que', example: 'This GPU is more powerful than the previous model.' },
        { word: 'more efficient than', translation: 'más eficiente que', example: 'A hash map is more efficient than a linear search for this task.' },
        { word: 'more secure than', translation: 'más seguro que', example: 'Using prepared statements is more secure than string concatenation for SQL queries.' }
    ],
    phrasalVerbs: [
        { verb: 'stack up against', translation: 'compararse con', example: 'How does our new UI library stack up against Material UI?' },
        { verb: 'stand out from', translation: 'destacar de', example: 'Its performance makes this database stand out from the competition.' }
    ],
    reading: {
        title: "Read this team chat about choosing a database:",
        text: "<p><strong>Anna:</strong> For the new microservice, should we use Postgres or MongoDB?</p><p><strong>Luis:</strong> I think Postgres is a better option. It's more stable for relational data.</p><p><strong>Anna:</strong> True, but isn't MongoDB easier to scale for our use case?</p><p><strong>Luis:</strong> It can be, but our data structure is more complex than a simple document store. Postgres will be safer in the long run.</p>",
        questions: ["Why does Luis think Postgres is a better option?", "What advantage of MongoDB does Anna mention?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Alex", line: "I need a new laptop for development." },
            { speaker: "Maria", line: "The new MacBook is more powerful, but the ThinkPad is much cheaper." },
            { speaker: "Alex", line: "True. The ThinkPad is also lighter than the MacBook, which is good for travel." }
        ],
        correctAnswers: ["more powerful", "cheaper", "lighter than"],
        dialogue: "Alex: \"I need a new laptop for development.\"<br/>Maria: \"The new MacBook is __BLANK__, but the ThinkPad is much __BLANK__.\"<br/>Alex: \"True. The ThinkPad is also __BLANK__ the MacBook, which is good for travel.\""
    },
    speaking: {
        scenario: "Your team is discussing two cloud providers, AWS and Google Cloud. Explain which one you think is better for your project and give one comparative reason (e.g., 'I think AWS is better because its documentation is more complete than Google Cloud's.')."
    },
    writing: {
        title: "Write a short comment on a Pull Request.",
        scenario: "You have refactored a function. Write a short comment explaining why your new version is better than the old one. Use at least one comparative.",
        guidance: {
            title: "Example:",
            points: ["\"I've refactored the `getUserData` function. The new implementation is simpler and more efficient than the previous one because it makes fewer database calls.\""]
        }
    },
    summary: {
        points: [
            "Use '-er' for short adjectives (fast -> faster).",
            "Use 'more' for long adjectives (powerful -> more powerful).",
            "Always use 'than' when making the comparison between two things."
        ]
    }
};