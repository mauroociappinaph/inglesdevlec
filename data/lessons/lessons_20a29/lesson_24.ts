import { LessonData } from '../../../types';

export const lesson_24: LessonData = {
    id: 'possessives',
    title: "Lección 24: Showing Possession ('s and my/your/his)",
    description: "Learn to express ownership of code, components, and ideas.",
    introduction: {
        text: "In tech, ownership is key. We talk about 'my code', 'the team's API', or 'the component's state'. This lesson covers the two main ways to show possession in English, which are essential for clear communication in a development team.",
        objectives: [
            "Use possessive determiners (my, your, his, her, its, our, their).",
            "Use the possessive 's to show ownership.",
            "Apply these rules to technical subjects."
        ],
    },
    grammar: [
        {
            title: "Possessive Determiners (my, your, his...)",
            content: [
                "These words come before a noun and show who it belongs to. They are very common.",
                "<ul><li><strong>My</strong> code is ready for review.</li><li>Is this <strong>your</strong> laptop?</li><li><strong>Her</strong> framework is very performant.</li><li><strong>Our</strong> team's API is well-documented.</li></ul>",
            ],
            quickCheck: {
                question: "Complete: 'The server is offline. ___ CPU usage is at 100%.'",
                options: ["It's", "Its"],
                correctAnswer: "Its",
                explanation: "'Its' is possessive (belongs to it). 'It's' is a contraction of 'it is'.",
                inputType: "select"
            }
        },
        {
            title: "The Possessive 's",
            content: [
                "To show that a thing belongs to a person or a specific noun, add <strong>'s</strong>.",
                "In Spanish, you say 'the laptop of the developer'. In English, you say 'the developer<strong>'s</strong> laptop'. The owner comes first.",
                "<code>This is Anna<strong>'s</strong> doll. &rarr; This is the developer<strong>'s</strong> code.</code>",
                "<code>Is that Paul<strong>'s</strong> phone? &rarr; What is the framework<strong>'s</strong> main advantage?</code>",
            ],
            quickCheck: {
                question: "How do you say 'la arquitectura de la API del equipo' in English?",
                correctAnswer: "the team's API architecture",
                explanation: "The owner ('the team') comes first, followed by 's."
            }
        }
    ],
    keyPhrases: [
        { original: "This is the developer's laptop.", translation: "Este es el portátil del desarrollador.", techContext: "Identifying ownership of hardware." },
        { original: "Her framework's performance is impressive.", translation: "El rendimiento de su framework es impresionante.", techContext: "Talking about the characteristics of a specific technology someone chose or built." },
        { original: "Our team's API architecture is based on microservices.", translation: "La arquitectura de la API de nuestro equipo se basa en microservicios.", techContext: "Describing a collective team ownership." }
    ],
    keyWords: [
        { word: "developer's code", translation: 'el código del desarrollador', example: 'The developer\'s code was clean and well-commented.' },
        { word: "server's response", translation: 'la respuesta del servidor', example: 'The server\'s response was slower than expected.' },
        { word: "API's documentation", translation: 'la documentación de la API', example: 'The API\'s documentation is very easy to follow.' },
        { word: "database owner", translation: 'el propietario de la base de datos', example: 'You need to ask the database owner for permission.' },
    ],
    phrasalVerbs: [
        { verb: 'belong to', translation: 'pertenecer a', example: 'This API key belongs to the production environment.' },
        { verb: 'hand over', translation: 'entregar', example: "He will hand over the project's responsibilities to the new team lead." }
    ],
    reading: {
        title: "Read this code review comment:",
        text: "<p><strong>@lead_dev:</strong> \"Hi Maria, thanks for this. Your code is very clear. However, I think this change might affect David's new feature. Can you check if it's compatible with his module's logic? Also, remember to update our team's documentation.\"</p>",
        questions: ["Whose code is clear?", "Whose feature might be affected?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Anna", line: "Is this your code or mine?" },
            { speaker: "Luis", line: "It's mine. I wrote it yesterday." },
            { speaker: "Anna", line: "Okay. I need to check its compatibility with the team's new library." },
            { speaker: "Luis", line: "Good idea. David's task depends on this, so let's be careful." }
        ],
        correctAnswers: ["your", "mine", "team's", "David's"],
        dialogue: "Anna: \"Is this __BLANK__ code or __BLANK__?\"<br/>Luis: \"It's mine. I wrote it yesterday.\"<br/>Anna: \"Okay. I need to check its compatibility with the __BLANK__ new library.\"<br/>Luis: \"Good idea. __BLANK__ task depends on this, so let's be careful.\""
    },
    speaking: {
        scenario: "You are in a pair programming session. You want to ask your colleague, John, to look at the code on his computer. How do you ask him? (e.g., 'John, can I see...')"
    },
    writing: {
        title: "Write a short Slack message.",
        scenario: "You have found a bug in a component that your colleague Anna built. Write a short message to her, mentioning the component by name.",
        guidance: {
            title: "Example:",
            points: ["\"Hi Anna, I think I found a small bug in your new button component's styling on mobile.\""],
        }
    },
    summary: {
        points: [
            "Use possessive determiners like 'my', 'your', 'her', 'our' before a noun.",
            "Use 's after a noun to show ownership (e.g., 'the user's profile').",
            "Be careful with 'its' (possessive) vs. 'it's' (it is)."
        ]
    }
};