import { LessonData } from '../../../types';

export const lesson_35: LessonData = {
    id: 'future-plans-going-to',
    title: 'Lección 35: Expressing Future Plans with "Be Going To"',
    description: "Discuss roadmaps, releases, and project plans with confidence.",
    introduction: {
        text: "Planning is everything in tech. 'Be going to' is the perfect structure for talking about firm plans, decisions that have already been made, and future actions you are certain about. It's the language of roadmaps, sprint commitments, and project timelines.",
        objectives: [
            "Use 'be going to' to express future plans and intentions.",
            "Form positive, negative, and question sentences with 'be going to'.",
            "Apply this structure to talk about deployments, updates, and learning goals."
        ],
    },
    grammar: [
        {
            title: "Using 'Be Going To' for Plans",
            content: [
                "We use <strong>'be going to'</strong> to talk about future plans that have already been decided.",
                "<strong>Structure:</strong> Subject + am/is/are + going to + [base verb].",
                "<code>We <strong>are going to deploy</strong> the update tomorrow. (The decision is made).</code>",
                "<code>I<strong>'m going to learn</strong> TypeScript next month. (This is my plan).</code>",
                "<code>The system <strong>is going to restart</strong> after the patch. (This is scheduled).</code>",
                "<strong>Negative:</strong> <code>We <strong>are not going to</strong> release it this week.</code>",
                "<strong>Question:</strong> <code><strong>Are</strong> you <strong>going to</strong> refactor this component?</code>"
            ],
            quickCheck: {
                question: "Complete: 'Our team ___ going to start a new sprint on Monday.'",
                options: ["is", "are"],
                correctAnswer: "is",
                explanation: "'Team' is a singular noun, so we use 'is'.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "We're going to launch the beta version next quarter.", translation: "Vamos a lanzar la versión beta el próximo trimestre.", techContext: "Communicating a major milestone from the company roadmap." },
        { original: "I'm not going to merge this pull request until the tests pass.", translation: "No voy a fusionar este pull request hasta que pasen las pruebas.", techContext: "Stating a firm decision based on a team rule." },
        { original: "What are you going to work on next?", translation: "¿En qué vas a trabajar después?", techContext: "A common question in a stand-up meeting or a 1-on-1." }
    ],
    keyWords: [
        { word: 'Plan / Schedule', translation: 'Plan / Programación', example: 'What is the schedule? What are we going to do?' },
        { word: 'Deploy / Release', translation: 'Desplegar / Lanzar', example: 'We are going to release the new version at midnight.' },
        { word: 'Train (an AI)', translation: 'Entrenar (una IA)', example: 'They are going to train a new model with the updated dataset.' },
        { word: 'Update', translation: 'Actualizar', example: 'She is going to update the documentation.' }
    ],
    phrasalVerbs: [
        { verb: 'get started on', translation: 'empezar a trabajar en', example: 'I\'m going to get started on the refactoring tomorrow morning.' },
        { verb: 'move on to', translation: 'pasar a (la siguiente tarea)', example: 'After I finish this, I\'m going to move on to the next ticket.' }
    ],
    reading: {
        title: "Read this project roadmap excerpt:",
        text: "<p><strong>Project Phoenix: Q3 Roadmap</strong></p><p>In July, we are going to redesign the user dashboard. After that, the backend team is going to build the new reporting API in August. We are not going to add any new features in September; instead, we are going to focus on improving performance and stability before the public launch in Q4.</p>",
        questions: ["What is going to happen in July?", "What is the team NOT going to do in September?"]
    },
    listening: {
        title: "Practice: Complete the Sentences",
        dialogueTurns: [
            { speaker: "First", line: "I am going to push a new commit." },
            { speaker: "Second", line: "They are going to launch the beta soon." }
        ],
        correctAnswers: ["am", "are"],
        dialogue: "1. I __BLANK__ going to push a new commit.<br/>2. They __BLANK__ going to launch the beta soon."
    },
    speaking: {
        scenario: "It's the daily stand-up meeting. Your team lead asks, 'What are your plans for today?' Explain what you are going to do. Use 'be going to'."
    },
    writing: {
        title: "AI Mini-Challenge: State Your Plans",
        scenario: "Write two sentences about your future plans related to your work or learning. Use 'be going to'.",
        guidance: {
            title: "Examples:",
            points: [
                "\"Next week, I'm going to learn how to use Docker.\"",
                "\"My AI assistant is going to summarize all these reports for me tomorrow.\""
            ]
        }
    },
    summary: {
        points: [
            "Use <strong>'be going to'</strong> for plans and intentions that are already decided.",
            "The structure is always <strong>'am/is/are' + 'going to' + [base verb]</strong>.",
            "It's the perfect way to talk about your company's roadmap or your personal learning goals."
        ]
    }
};