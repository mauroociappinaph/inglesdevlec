import { LessonData } from '../../../types';

export const lesson_27: LessonData = {
    id: 'take-care-of',
    title: "Lección 27: 'Take care' vs 'Take care of'",
    description: "Aprende la diferencia entre responsabilidad ('of') y precaución.",
    introduction: {
        text: "En el mundo tecnológico, la claridad es crucial. Una pequeña preposición como 'of' puede cambiar completamente el significado de una frase. Esta lección se centra en la diferencia vital entre 'take care of' (asumir una responsabilidad) y 'take care' (una advertencia o despedida), dos frases que usarás constantemente al hablar de tus tareas y al colaborar con tu equipo.",
        objectives: [
            "Diferenciar entre 'take care of' para responsabilidades y 'take care' para precauciones.",
            "Aplicar 'take care of' en contextos como mantenimiento de servidores, gestión de bugs y ownership de código.",
            "Usar 'take care' para dar advertencias importantes, especialmente al trabajar en entornos de producción."
        ],
    },
    grammar: [
        {
            title: "'To take care of' + [algo/alguien] = Encargarse de",
            content: [
                "Esta frase significa 'ser responsable de', 'gestionar' o 'manejar' una tarea o un sistema. Siempre necesita un objeto después de 'of'.",
                "<code>I <strong>take care of</strong> the server maintenance.</code>",
                "<code>She <strong>takes care of</strong> the user authentication module.</code>",
                "<code>Our DevOps team <strong>takes care of</strong> all deployments.</code>"
            ],
            quickCheck: {
                question: "Tu tarea es arreglar los bugs del login. ¿Cómo lo dices?",
                options: ["I take care of the login bugs.", "I take care the login bugs."],
                correctAnswer: "I take care of the login bugs.",
                explanation: "Necesitas 'of' para indicar de qué te encargas.",
                inputType: "select"
            }
        },
        {
            title: "'To take care' = Tener cuidado / Cuidarse",
            content: [
                "Esta frase se usa sola o con 'with'/'when' para dar una orden, advertencia o una despedida amistosa. Significa 'sé cuidadoso' o 'cuídate'.",
                "<code><strong>Take care</strong> when you modify the production database!</code>",
                "<code>The system is very fragile, so please <strong>take care</strong>.</code>",
                "<code>Okay, talk to you tomorrow. <strong>Take care!</strong></code>"
            ],
            quickCheck: {
                question: "Te despides de un colega al final del día. ¿Qué dices?",
                options: ["Take care of!", "Take care!"],
                correctAnswer: "Take care!",
                explanation: "Como despedida amistosa, se usa 'Take care' solo.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "I'll take care of this bug ticket.", translation: "Yo me encargo de este ticket de bug.", techContext: "Asumiendo responsabilidad por una tarea específica." },
        { original: "Who takes care of the CI/CD pipeline?", translation: "¿Quién se encarga del pipeline de CI/CD?", techContext: "Preguntando por la persona o equipo responsable de un sistema." },
        { original: "Take care not to expose any user data.", translation: "Ten cuidado de no exponer ningún dato de usuario.", techContext: "Una advertencia de seguridad crítica durante el desarrollo." }
    ],
    keyWords: [
        { word: 'Responsibility', translation: 'Responsabilidad', example: 'It\'s my responsibility to take care of the database backups.' },
        { word: 'Caution', translation: 'Precaución', example: 'You must proceed with caution. Take care with every step.' },
        { word: 'Maintenance', translation: 'Mantenimiento', example: 'He takes care of the weekly server maintenance.' }
    ],
    phrasalVerbs: [
        { verb: 'look after', translation: 'cuidar de / encargarse de', example: 'Can you look after the servers while I\'m on vacation?' },
        { verb: 'watch out for', translation: 'tener cuidado con', example: 'Watch out for null pointers when you refactor this legacy code.' }
    ],
    reading: {
        title: "Lee esta conversación en Slack:",
        text: "<p><strong>Manager:</strong> \"Team, the main database is running slow. Who can take care of investigating the issue?\"</p><p><strong>You:</strong> \"I can take care of it. I'll start by checking the query logs.\"</p><p><strong>Manager:</strong> \"Great, thanks. Take care, that's the production database, so be very cautious with any changes.\"</p>",
        questions: ["What responsibility does 'You' accept?", "What warning does the manager give?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Anna", line: "Who takes care of the front-end deployments?" },
            { speaker: "Luis", line: "Maria usually takes care of that." },
            { speaker: "Anna", line: "Okay, I'll ask her. Thanks and take care!" }
        ],
        correctAnswers: ["takes care of", "of that", "take care"],
        dialogue: "Anna: \"Who __BLANK__ the front-end deployments?\"<br/>Luis: \"Maria usually takes care __BLANK__.\"<br/>Anna: \"Okay, I'll ask her. Thanks and __BLANK__!\""
    },
    speaking: {
        scenario: "Tu manager te asigna una nueva tarea: ser el responsable de revisar todos los pull requests de los desarrolladores junior. Explica que aceptarás la tarea y luego da un consejo a un colega junior sobre qué tener cuidado al crear un PR."
    },
    writing: {
        title: "Write a handover note.",
        scenario: "You are going on vacation. Write a short Slack message to your team explaining who will be responsible for your main tasks while you are away.",
        guidance: {
            title: "Example:",
            points: ["\"Hi Team, I'll be on vacation next week. While I'm away, Alex will take care of any urgent bug fixes. Please take care not to merge any major changes to the main branch without his approval.\""]
        }
    },
    summary: {
        points: [
            "<strong>'take care of' + [objeto]</strong> = Ser responsable de algo (una tarea).",
            "<strong>'take care'</strong> = Sé cuidadoso / Cuídate (una precaución o despedida).",
            "Uno tiene que ver con la <strong>tarea</strong>, el otro con la <strong>precaución</strong>."
        ]
    }
};