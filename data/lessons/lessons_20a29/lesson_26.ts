import { LessonData } from '../../../types';

export const lesson_26: LessonData = {
    id: 'present-simple-vs-continuous',
    title: "Lección 26: Acción vs. Rutina (Presente Simple y Continuo)",
    description: "Aprende cuándo decir 'I code' (hábito) vs. 'I am coding' (ahora).",
    introduction: {
        text: "En el trabajo, es crucial diferenciar entre las tareas que haces habitualmente y lo que estás haciendo en este preciso momento. Esta lección te enseña a usar el Presente Simple para rutinas y el Presente Continuo para acciones en progreso, una distinción clave para las reuniones diarias (stand-ups) y las actualizaciones de estado.",
        objectives: [
            "Identificar la diferencia entre una acción habitual y una acción en progreso.",
            "Formar oraciones en Presente Simple para describir rutinas.",
            "Formar oraciones en Presente Continuo para describir acciones actuales."
        ],
    },
    grammar: [
        {
            title: 'Presente Continuo: Lo que está pasando AHORA',
            content: [
                "Usamos el Presente Continuo (am/is/are + verbo-ing) para hablar de acciones que ocurren en el momento en que hablamos.",
                "<strong>Estructura:</strong> Sujeto + am/is/are + [verbo]-ing.",
                "<code>I <strong>am fixing</strong> a bug right now.</code>",
                "<code>She <strong>is deploying</strong> the app at the moment.</code>",
                "Palabras clave comunes: <strong>now, right now, at the moment</strong>."
            ],
            quickCheck: {
                question: "Tu colega te pregunta qué haces. Estás escribiendo código en este instante. ¿Qué dices?",
                options: ["I write code.", "I am writing code."],
                correctAnswer: "I am writing code.",
                explanation: "La acción está sucediendo ahora, por lo que usamos el Presente Continuo.",
                inputType: "select"
            }
        },
        {
            title: 'Presente Simple: Tu rutina y hábitos',
            content: [
                "Usamos el Presente Simple para hablar de hábitos, rutinas, hechos o tareas regulares.",
                "<strong>Estructura:</strong> Sujeto + [verbo base] (-s para he/she/it).",
                "<code>I <strong>test</strong> my code before every commit.</code>",
                "<code>He <strong>deploys</strong> new updates every week.</code>",
                "Palabras clave comunes: <strong>every day, always, usually, on Fridays</strong>."
            ],
            quickCheck: {
                question: "Describe una tarea que haces todas las semanas.",
                options: ["I am attending the team meeting.", "I attend the team meeting every week."],
                correctAnswer: "I attend the team meeting every week.",
                explanation: "Es una rutina, por lo que usamos el Presente Simple.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "I am debugging a critical issue right now.", translation: "Estoy depurando un problema crítico en este momento.", techContext: "Informando sobre una tarea urgente y actual en una reunión." },
        { original: "She writes documentation for all new features.", translation: "Ella escribe documentación para todas las nuevas funcionalidades.", techContext: "Describiendo una de sus responsabilidades habituales." },
        { original: "We are having our daily stand-up meeting.", translation: "Estamos teniendo nuestra reunión diaria.", techContext: "Explicando por qué no puedes responder a un mensaje en este momento." },
        { original: "He usually works on the API, but this week he is helping with the front-end.", translation: "Él normalmente trabaja en la API, pero esta semana está ayudando con el front-end.", techContext: "Comparando una rutina con una acción temporal." }
    ],
    keyWords: [
        { word: 'to debug', translation: 'depurar', example: 'I spend most of my day debugging legacy code.' },
        { word: 'to deploy', translation: 'desplegar', example: 'The CI/CD pipeline deploys the new version automatically.' },
        { word: 'to test', translation: 'probar', example: 'She is testing the payment gateway now.' },
        { word: 'to commit', translation: 'hacer commit / confirmar cambios', example: 'I commit my changes at the end of each day.' },
    ],
    phrasalVerbs: [
        { verb: 'work on', translation: 'trabajar en', example: 'Right now, I am working on ticket #451.' },
        { verb: 'run into', translation: 'toparse con / encontrar', example: 'I am running into a strange error with the database connection.' },
    ],
    reading: {
        title: "Lee esta actualización de estado en Slack:",
        text: "<p><strong>@dev_anna:</strong> \"Good morning team! Quick update: Today, I am working on the new user authentication feature. I am implementing the password reset flow right now. I usually handle bug fixes on Mondays, but this feature is our top priority this week.\"</p>",
        questions: ["What is Anna working on today?", "What does she usually do on Mondays?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "Hi Alex, what are you working on?" },
            { speaker: "Alex", line: "Hi! At the moment, I'm debugging a problem with the cache. I usually work on new features on Tuesdays, but this bug is critical." }
        ],
        correctAnswers: ["are you working", "I'm debugging", "work"],
        dialogue: "Manager: \"Hi Alex, what __BLANK__ on?\"<br/>Alex: \"Hi! At the moment, __BLANK__ a problem with the cache. I usually __BLANK__ on new features on Tuesdays, but this bug is critical.\""
    },
    speaking: {
        scenario: "Es tu reunión diaria. Tu jefe de equipo pregunta: 'What are you working on today?'. Responde explicando tu tarea principal para hoy (Presente Continuo) y una tarea que haces regularmente (Presente Simple)."
    },
    writing: {
        title: "Write a short status update for Slack.",
        scenario: "Write a short message to your team channel explaining what you are doing right now and what your main goal for the day is.",
        guidance: {
            title: "Example:",
            points: ["\"Morning all! I'm currently investigating the slow API response times. My goal today is to find the bottleneck.\""]
        }
    },
    summary: {
        points: [
            "Usa el <strong>Presente Continuo (I am doing)</strong> para acciones que suceden AHORA o son temporales.",
            "Usa el <strong>Presente Simple (I do)</strong> para rutinas, hábitos y hechos.",
            "En una actualización de estado, a menudo usarás ambos: 'I usually do X, but today I am doing Y'."
        ]
    }
};