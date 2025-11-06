import { LessonData } from '../../../types';

export const lesson_02: LessonData = {
    id: 'information',
    title: 'Lección 2: Asking for Information',
    description: 'Master how to ask for specific information.',
    introduction: {
        text: "In any job, asking for information is a daily activity. This lesson focuses on the grammar and phrases you need to handle these common situations smoothly and professionally.",
        objectives: ["Learn how to form 'Wh-' questions.", "Practice asking for information politely."],
    },
    grammar: [
        {
            title: "Asking 'Wh-' Questions",
            content: [
                "To ask for specific information, use 'Wh-' words like What, Where, When, etc., plus the auxiliary verb 'do' or 'does'.",
                "<code><strong>Where do</strong> you <strong>work</strong>?</code>"
            ],
            quickCheck: {
                question: "Unscramble: 'your team / what / use / does / tech stack?'",
                correctAnswer: "What tech stack does your team use?",
                explanation: "The structure is Wh-word + does + subject + verb."
            }
        }
    ],
    keyPhrases: [
        { original: "What is your last name?", translation: "¿Cuál es tu apellido?", techContext: "When setting up an account: \"What's your GitHub username?\"" },
        { original: "I speak Spanish and English.", translation: "Yo hablo español e inglés.", techContext: "\"I code in Python and JavaScript.\"" }
    ],
    keyWords: [
        { word: 'Information', translation: 'Información', example: 'I need more information about the API endpoint.' },
        { word: 'Requirement', translation: 'Requisito', example: 'What are the requirements for this new feature?' },
    ],
    phrasalVerbs: [
        { verb: 'look up', translation: 'Buscar (información)', example: 'I need to look up the documentation for this library.' },
        { verb: 'fill out', translation: 'Rellenar (un formulario)', example: 'Please fill out the form to request a new laptop.' },
    ],
    reading: {
        title: "Read this short email asking for information:",
        text: "<p><strong>Subject:</strong> Question about the new API</p><p>Hi Ben,</p><p>I have a quick question. What is the correct endpoint to fetch a user's profile?</p><p>Thanks,<br/>Alex</p>",
        questions: ["What is the main piece of information Alex asks for?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Alex", line: "Excuse me, what is your last name?" },
            { speaker: "Ben", line: "My last name is Turner." },
            { speaker: "Alex", line: "Got it. Do you speak Spanish?" },
            { speaker: "Ben", line: "No, only English. Well, see you later!" }
        ],
        correctAnswers: ["last name", "speak", "later"],
        dialogue: "Alex: \"Excuse me, what is your __BLANK__?\"<br/>Ben: \"My last name is Turner.\"<br/>Alex: \"Got it. Do you __BLANK__ Spanish?\"<br/>Ben: \"No, only English. Well, see you __BLANK__!\""
    },
    speaking: {
        scenario: "You are in a virtual meeting with a new client. You need to ask for their email address to send them a document. How do you ask for this information politely?"
    },
    writing: {
        title: "Write a short Slack message to a colleague.",
        scenario: "You need to know which version of a library the project is using. Write a short, polite message to a senior developer on your team to ask for this information.",
        guidance: {
            title: "Example:",
            points: ["Hi [Name], quick question for you. Do you know which version of React we are using on the main project? Thanks!"]
        }
    },
    summary: {
        points: [
            "Use \"Wh-\" words (What, Where, etc.) to ask for specific information.",
            "Always use an auxiliary verb like 'do' or 'does' in \"Wh-\" questions with most verbs."
        ]
    }
};