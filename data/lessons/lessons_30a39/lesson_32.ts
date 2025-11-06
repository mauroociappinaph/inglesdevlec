import { LessonData } from '../../../types';

export const lesson_32: LessonData = {
    id: 'obligation-have-to',
    title: 'Lección 32: Expressing Obligation with "Have To"',
    description: "Learn to express necessity and requirements in a tech environment.",
    introduction: {
        text: "In tech, tasks are often not optional. You have to follow requirements, meet deadlines, and perform specific actions. This lesson focuses on 'have to', the most common way to express obligation and necessity in professional English, especially when talking about your work.",
        objectives: [
            "Use 'have to' to talk about necessary tasks and obligations.",
            "Form positive, negative, and question sentences with 'have to'.",
            "Apply this structure in contexts like development, system maintenance, and AI tasks."
        ],
    },
    grammar: [
        {
            title: "Using 'Have To' for Obligation",
            content: [
                "We use <strong>'have to'</strong> to say that something is necessary or required, often because of a rule, a responsibility, or an external factor.",
                "<strong>Structure:</strong> Subject + have/has to + [base verb]. The verb that follows is always in its simple form (no '-s', '-ing', etc.).",
                "<code>We <strong>have to deploy</strong> the update today. (It's a deadline).</code>",
                "<code>She <strong>has to test</strong> her features locally. (It's a team rule).</code>",
                "❌ Incorrect: <s class='text-red-400'>We have to going home.</s><br/>✅ Correct: We <strong>have to go</strong> home.",
            ],
            quickCheck: {
                question: "Complete: 'A developer ___ to write clean code.'",
                options: ["has", "have"],
                correctAnswer: "has",
                explanation: "We use 'has' for 'he', 'she', or 'it' (a single developer).",
                inputType: "select"
            }
        },
        {
            title: "'Don't Have To': No Obligation",
            content: [
                "The negative form, <strong>'don't have to'</strong> or <strong>'doesn't have to'</strong>, means something is NOT necessary. There is no obligation.",
                "<code>You <strong>don't have to restart</strong> the server after every small change.</code>",
                "<code>He <strong>doesn't have to</strong> attend the meeting; it's optional.</code>",
                "<strong>'Must' vs. 'Have to':</strong> 'Must' often implies a personal, strong obligation from the speaker. 'Have to' usually refers to an external obligation (a rule, a law, a boss's order). In everyday tech conversation, 'have to' is much more common."
            ],
             quickCheck: {
                question: "Which sentence means the action is optional?",
                options: ["You don't have to update the dependencies.", "You have to update the dependencies."],
                correctAnswer: "You don't have to update the dependencies.",
                explanation: "'Don't have to' means there is no obligation.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "I have to check the logs before pushing the code.", translation: "Tengo que revisar los logs antes de subir el código.", techContext: "Describing a mandatory step in the development workflow." },
        { original: "We have to train the AI model again with the new data.", translation: "Tenemos que volver a entrenar el modelo de IA con los nuevos datos.", techContext: "Stating a necessary action in a machine learning project." },
        { original: "Do we have to support Internet Explorer?", translation: "¿Tenemos que dar soporte a Internet Explorer?", techContext: "Asking about project requirements and scope." }
    ],
    keyWords: [
        { word: 'Requirement', translation: 'Requisito', example: 'We have to meet all the project requirements.' },
        { word: 'Obligation', translation: 'Obligación', example: "It's our obligation to protect user data." },
        { word: 'Deploy', translation: 'Desplegar', example: 'You have to deploy the changes to the staging server first.' },
        { word: 'Update', translation: 'Actualizar', example: 'I have to update my local dependencies.' },
        { word: 'Backup', translation: 'Hacer copia de seguridad', example: 'The system has to perform a full backup every night.' },
        { word: 'Debug', translation: 'Depurar', example: 'She has to debug the code to find the memory leak.' },
        { word: 'Run tests', translation: 'Ejecutar pruebas', example: 'Before creating a pull request, you have to run all the tests.' }
    ],
    phrasalVerbs: [
        { verb: 'comply with', translation: 'cumplir con', example: 'All new code has to comply with our style guide.' },
        { verb: 'stick to', translation: 'apegarse a / seguir', example: 'We have to stick to the project timeline to meet the deadline.' }
    ],
    reading: {
        title: "Read this project requirement from a ticket:",
        text: "<p><strong>Acceptance Criteria:</strong> Before merging, the developer has to write unit tests for the new component. The tests have to cover at least 90% of the code. The developer also has to update the documentation. The designer does not have to approve the final colors, as they are already defined in the style guide.</p>",
        questions: ["What are two things the developer has to do?", "What is something the designer does not have to do?"]
    },
    listening: {
        title: "Practice: Complete the Sentences",
        dialogueTurns: [
            { speaker: "First", line: "We have to fix the bug before the demo." },
            { speaker: "Second", line: "I have to send the report to the manager." },
            { speaker: "Third", line: "They don’t have to deploy the model again." }
        ],
        correctAnswers: ["have", "have", "don't"],
        dialogue: "1. We __BLANK__ to fix the bug before the demo.<br/>2. I __BLANK__ to send the report to the manager.<br/>3. They __BLANK__ have to deploy the model again."
    },
    speaking: {
        scenario: "A junior developer asks you if they can merge their code directly to the main branch. Explain that they can't. Tell them what they have to do first (e.g., 'You have to create a pull request and get it reviewed.')."
    },
    writing: {
        title: "AI Mini-Challenge: Developer & AI Assistant",
        scenario: "Write a short dialogue between a developer and an AI assistant. The developer asks about a necessary task, and the AI responds using 'have to'.",
        guidance: {
            title: "Example Dialogue:",
            points: [
                "<strong>Developer:</strong> \"Do I have to update all the dependencies for this project?\"",
                "<strong>AI:</strong> \"Yes, you have to install the latest version of React to fix a security vulnerability.\""
            ]
        }
    },
    summary: {
        points: [
            "Use <strong>'have to' + [base verb]</strong> to express that something is necessary or a rule.",
            "Use <strong>'don't/doesn't have to'</strong> to say something is NOT necessary.",
            "In questions, use <strong>'Do/Does... have to?'</strong> (e.g., 'Do I have to...?')."
        ]
    }
};