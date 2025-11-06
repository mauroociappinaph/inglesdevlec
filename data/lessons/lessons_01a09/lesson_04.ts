import { LessonData } from '../../../types';

export const lesson_04: LessonData = {
    id: 'describing',
    title: 'Lección 4: Describing Things',
    description: 'Use adjectives and plurals to describe technical objects.',
    introduction: {
        text: "As a developer, you constantly need to describe things: a UI, a bug, a server. Using adjectives and plurals correctly is fundamental to communicating clearly.",
        objectives: ["Learn to form basic plurals.", "Understand the correct placement of adjectives."],
    },
    grammar: [
        {
            title: "Adjective Placement",
            content: ["In English, the adjective (describing word) <strong class='text-sky-400'>always</strong> comes before the noun.", "Correct: a <span class='text-yellow-300'>blue</span> <span class='text-teal-300'>button</span> (NOT a button blue)."],
            quickCheck: {
                question: "Put the words in order: 'fast / a / API'",
                correctAnswer: "a fast API",
                explanation: "The adjective 'fast' must come before the noun 'API'."
            }
        }
    ],
    keyPhrases: [
         { original: "The new enterprise licenses are very expensive!", translation: "¡Las nuevas licencias empresariales son muy caras!", techContext: "Describing the cost or complexity of a tool." }
    ],
    keyWords: [
        { word: 'Layout', translation: 'Diseño / Disposición', example: 'The layout of the new dashboard is very clean.' },
        { word: 'Component', translation: 'Componente', example: 'We can reuse this button component across the app.' },
    ],
    phrasalVerbs: [
        { verb: 'point out', translation: 'Señalar / Indicar', example: 'Can you point out the specific line of code that is causing the issue?' },
        { verb: 'set up', translation: 'Configurar / Instalar', example: 'I need to set up my new development environment.' },
    ],
    reading: {
        title: "Read this pull request comment:",
        text: "<p><strong>@johndev:</strong> \"Looks good. I have one suggestion: the new buttons are very small. On mobile, they could be difficult to tap. Can we make them larger?\"</p>",
        questions: ["What is the problem the developer points out?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev 1", line: "I need a new monitor." },
            { speaker: "Dev 2", line: "This one looks good. How much is it?" },
            { speaker: "Dev 1", line: "Wow, the 4K monitors are very expensive!" }
        ],
        correctAnswers: ["new", "How much", "expensive"],
        dialogue: "Dev 1: \"I need a __BLANK__ monitor.\"<br/>Dev 2: \"This one looks good. __BLANK__ is it?\"<br/>Dev 1: \"Wow, the 4K monitors are very __BLANK__!\""
    },
    speaking: {
        scenario: "You are in a meeting discussing a new design. Describe one element you like (e.g., 'the clean layout') and one element you think needs improvement (e.g., 'the small font size')."
    },
    writing: {
        title: "Write a short bug report title.",
        scenario: "You found a bug. Write a simple, one-sentence title for the bug report that describes the problem clearly.",
        guidance: { title: "Example:", points: ["\"The user login button is not visible on small screens.\" (This is better than \"Button broken\")."] }
    },
    summary: {
        points: ["To make most nouns plural, add -s.", "Adjectives always go before the noun they describe."]
    }
};