import { LessonData } from '../../../types';

export const lesson_33: LessonData = {
    id: 'data-handling-pronouns',
    title: "Lección 33: Using 'Any', 'Anything' & Object Pronouns",
    description: "Handle data, requests, and digital object references with precision.",
    introduction: {
        text: "When interacting with systems, APIs, or AI, you constantly refer to data and objects. This lesson teaches you how to use 'any' and 'anything' to talk about the absence of data, and how to use object pronouns (it, them, us) to refer to digital objects clearly and efficiently.",
        objectives: [
            "Use 'any' and 'anything' in questions and negative statements about data.",
            "Use object pronouns (me, you, him, her, it, us, them) correctly after verbs and prepositions.",
            "Apply these structures to data handling, API requests, and system interactions."
        ],
    },
    grammar: [
        {
            title: "Using 'Any' and 'Anything'",
            content: [
                "We use <strong>'any'</strong> and <strong>'anything'</strong> in questions and negative sentences to refer to an unspecified amount or thing.",
                "<strong>Negative:</strong> Used to express a lack or absence of something.",
                "<code>I checked the logs, but I don't see <strong>any</strong> errors.</code>",
                "<code>The query did not return <strong>anything</strong>.</code>",
                "<strong>Questions:</strong> Used to ask if something exists.",
                "<code>Do you have <strong>any</strong> user data for this ID?</code>",
            ],
            quickCheck: {
                question: "Complete: 'The function works, but it doesn't return ___ value.'",
                options: ["any", "some"],
                correctAnswer: "any",
                explanation: "We use 'any' in negative sentences to indicate an absence of something.",
                inputType: "select"
            }
        },
        {
            title: "Object Pronouns (me, you, him, her, it, us, them)",
            content: [
                "Object pronouns replace a noun and receive the action of a verb. They are essential for avoiding repetition.",
                "<ul><li>The server sent the <strong>file</strong>. &rarr; The server sent <strong>it</strong>.</li><li>Please show the <strong>logs</strong> to the team. &rarr; Please show <strong>them</strong> to <strong>us</strong>.</li></ul>",
                "<code>Please send the report to <strong>me</strong>.</code>",
                "<code>The AI can process the data for <strong>you</strong>.</code>",
                "<code>We are testing with the new servers tomorrow. &rarr; We are testing with <strong>them</strong> tomorrow.</code>"
            ],
             quickCheck: {
                question: "How do you rewrite 'Upload the files and share the files with the team' to be more efficient?",
                correctAnswer: "Upload the files and share them with us.",
                explanation: "'them' replaces 'the files' and 'us' replaces 'the team' to avoid repetition."
            }
        }
    ],
    keyPhrases: [
        { original: "I don’t have any notifications.", translation: "No tengo ninguna notificación.", techContext: "Checking for updates in a system or application." },
        { original: "Did the API return any data?", translation: "¿La API devolvió algún dato?", techContext: "Asking about the result of a network request." },
        { original: "Please upload the logs and send them to me.", translation: "Por favor, sube los logs y envíamelos.", techContext: "Making a clear request for data sharing." }
    ],
    keyWords: [
        { word: 'Dataset', translation: 'Conjunto de datos', example: 'Does the AI have any data in its dataset?' },
        { word: 'Variable', translation: 'Variable', example: 'The function returns a variable. Please print it to the console.' },
        { word: 'Request', translation: 'Solicitud', example: 'Send the request to the server and show me its output.' },
        { word: 'File', translation: 'Archivo', example: 'Please upload it and share it with us.' },
        { word: 'Upload', translation: 'Subir', example: 'Can you upload the files for them?' },
        { word: 'Output', translation: 'Salida / Resultado', example: 'The script did not produce any output.' }
    ],
    phrasalVerbs: [
        { verb: 'send back', translation: 'devolver', example: 'If there are any errors, the server will send them back in the response.' },
        { verb: 'pass to', translation: 'pasar a', example: 'Fetch the data and then pass it to the rendering component.' }
    ],
    reading: {
        title: "Read this API documentation snippet:",
        text: "<p><strong>GET /users/{id}</strong></p><p>This endpoint retrieves a user object. If a user with the specified ID exists, the server returns the user object. If it does not find any user, it returns a 404 error with an empty body. It will not return anything in the response body on failure.</p>",
        questions: ["What does the server return if it doesn't find any user?", "What pronoun is used to refer to the server?"]
    },
    listening: {
        title: "Practice: Complete the Sentences",
        dialogueTurns: [
            { speaker: "First", line: "Do you have any new commits?" },
            { speaker: "Second", line: "Please upload the files and share them with us." }
        ],
        correctAnswers: ["any", "them"],
        dialogue: "1. Do you have __BLANK__ new commits?<br/>2. Please upload the files and share __BLANK__ with us."
    },
    speaking: {
        scenario: "You have run a database query and it produced no results. Your colleague asks you if you found anything. How do you respond?"
    },
    writing: {
        title: "AI Mini-Challenge: Developer & AI Assistant",
        scenario: "Write a short dialogue where a developer asks an AI assistant if there are any results from a data analysis task. The AI should respond that there aren't any, and then ask the developer to provide it with a new dataset.",
        guidance: {
            title: "Example Dialogue:",
            points: [
                "<strong>Developer:</strong> \"Do you have any results for me?\"",
                "<strong>AI:</strong> \"I'm sorry, I don't have anything yet. The previous dataset was empty. Can you provide me with a new one?\""
            ]
        }
    },
    summary: {
        points: [
            "Use <strong>'any'</strong> or <strong>'anything'</strong> in questions and negative sentences to talk about absence or existence.",
            "Use object pronouns (me, you, it, us, them) <strong>after a verb or preposition</strong> to refer to people or objects without repetition."
        ]
    }
};