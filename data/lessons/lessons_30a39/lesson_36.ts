import { LessonData } from '../../../types';

export const lesson_36: LessonData = {
    id: 'future-will-vs-going-to',
    title: 'Lección 36: The Future in Tech: "Will" vs. "Be Going To"',
    description: "Learn to discuss plans, predictions, and spontaneous decisions in a tech context.",
    introduction: {
        text: "In the fast-paced world of technology, talking about the future is essential. You might be discussing a project roadmap (a plan), predicting an AI's output (a prediction), or making a quick decision during a crisis (a spontaneous action). This lesson clarifies the difference between 'be going to' and 'will', two key structures for talking about the future, each with a specific role in professional tech communication.",
        objectives: [
            "Use 'be going to' for pre-decided plans and intentions (roadmaps, sprints).",
            "Use 'will' for predictions and spontaneous decisions made at the moment of speaking.",
            "Confidently switch between both forms in a professional context."
        ],
    },
    grammar: [
        {
            title: "'Be Going To' for Plans and Intentions",
            content: [
                "We use <strong>'be going to'</strong> for future plans that have already been decided before the moment of speaking. It's the language of roadmaps, schedules, and personal goals.",
                "<strong>Structure:</strong> Subject + am/is/are + going to + [base verb].",
                "<code>Next quarter, we <strong>are going to migrate</strong> the database. (It's on the roadmap).</code>",
                "<code>I<strong>'m going to refactor</strong> this component tomorrow. (It's my plan for the day).</code>"
            ],
            quickCheck: {
                question: "Your team has decided to adopt TypeScript for the next project. How do you state this plan? 'We ___ adopt TypeScript.'",
                options: ["will", "are going to"],
                correctAnswer: "are going to",
                explanation: "It's a pre-decided plan.",
                inputType: "select"
            }
        },
        {
            title: "'Will' for Predictions and Spontaneous Decisions",
            content: [
                "We use <strong>'will'</strong> in two main situations:",
                "<strong>1. Predictions:</strong> For opinions about the future, often with 'I think', 'I believe', or 'probably'. AI and data analysis often involve predictions.",
                "<strong>2. Spontaneous Decisions:</strong> For decisions made at the moment of speaking. It's an unplanned, immediate reaction or offer.",
                "<strong>Structure:</strong> Subject + will + [base verb].",
                "<code>Prediction: I think this update <strong>will improve</strong> performance.</code>",
                "<code>Spontaneous: (The build fails) Oh no. I<strong>'ll check</strong> the logs immediately.</code>"
            ],
             quickCheck: {
                question: "A critical bug is just reported in the production environment. What is your immediate reaction? 'I ___ a look.'",
                options: ["will take", "am going to take"],
                correctAnswer: "will take",
                explanation: "It's a spontaneous decision made in reaction to new information.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "The roadmap says we're going to launch in Q4.", translation: "La hoja de ruta dice que vamos a lanzar en el cuarto trimestre.", techContext: "Stating a firm plan from a project document." },
        { original: "The build failed? Okay, I'll investigate.", translation: "¿Falló la compilación? De acuerdo, lo investigaré.", techContext: "Making a spontaneous decision in response to a problem." },
        { original: "Based on the data, I predict the system will handle the traffic.", translation: "Basado en los datos, predigo que el sistema manejará el tráfico.", techContext: "Making a data-driven prediction." },
        { original: "I'm going to learn about Kubernetes this weekend.", translation: "Voy a aprender sobre Kubernetes este fin de semana.", techContext: "Stating a personal learning intention." }
    ],
    keyWords: [
        { word: 'Prediction', translation: 'Predicción', example: "The AI's prediction will likely be accurate." },
        { word: 'Roadmap', translation: 'Hoja de ruta', example: "We are going to follow the roadmap for this quarter." },
        { word: 'Spontaneous', translation: 'Espontáneo', example: "It was a spontaneous offer; I'll help him now." },
        { word: 'Intention', translation: 'Intención', example: "My intention is clear: I'm going to finish this feature today." }
    ],
    phrasalVerbs: [
        { verb: 'carry out', translation: 'llevar a cabo', example: 'We will carry out the server maintenance at midnight.' },
        { verb: 'roll out', translation: 'desplegar / lanzar gradualmente', example: 'The company is going to roll out the update to 10% of users first.' }
    ],
    reading: {
        title: "Read this stand-up meeting dialogue:",
        text: "<p><strong>Manager:</strong> \"Anna, what's your plan for today?\"<br/><strong>Anna:</strong> \"I'm going to finish the unit tests for the payment module.\"<br/><strong>Manager:</strong> \"Great. Luis?\"<br/><strong>Luis:</strong> \"I'm going to start on the new reporting feature.\"<br/><em>(An alert pops up)</em><br/><strong>Manager:</strong> \"Hold on, production server CPU is at 99%! Luis, forget the feature for now.\"<br/><strong>Luis:</strong> \"Understood. I'll look into it immediately. I'll check the active processes first.\"</p>",
        questions: ["What was Anna's original plan?", "Why did Luis's plan change, and what was his spontaneous decision?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "What are your plans for the weekend?" },
            { speaker: "Dev2", line: "I'm going to try to build a small project with the new AI API." },
            { speaker: "Dev1", line: "Sounds cool! I think it will be a great learning experience." },
            { speaker: "Dev2", line: "The documentation looks a bit confusing, though." },
            { speaker: "Dev1", line: "Don't worry, if you have any problems, I'll help you." }
        ],
        correctAnswers: ["am going to", "will be", "will help"],
        dialogue: "Dev2: \"I __BLANK__ try to build a small project...\"<br/>Dev1: \"Sounds cool! I think it __BLANK__ a great learning experience.\"<br/>...<br/>Dev1: \"Don't worry, if you have any problems, I __BLANK__ you.\""
    },
    speaking: {
        scenario: "Your manager asks about your main task for tomorrow. Explain your plan using 'be going to'. Then, imagine they tell you that a colleague is sick and needs help with an urgent task. Offer your help using 'will'."
    },
    writing: {
        title: "AI Mini-Challenge: Plans and Predictions",
        scenario: "Write a short paragraph with two parts: 1. Describe one professional skill you are going to learn in the next six months. 2. Make one prediction about how you think AI will change software development in the next five years.",
        guidance: {
            title: "Example:",
            points: [
                "\"I'm going to get a certification in cloud architecture this year. I think AI assistants will write most of the boilerplate code for us in the future.\""
            ]
        }
    },
    summary: {
        points: [
            "Use <strong>'be going to'</strong> for plans, intentions, and decisions made <strong>before</strong> speaking (The Roadmap).",
            "Use <strong>'will'</strong> for spontaneous decisions made <strong>at the moment</strong> of speaking (The Reaction).",
            "Use <strong>'will'</strong> for predictions and opinions about the future (The Crystal Ball)."
        ]
    }
};