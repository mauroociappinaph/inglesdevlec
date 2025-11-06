import { LessonData } from '../../../types';

export const lesson_20: LessonData = {
    id: 'tricky-verbs',
    title: "Lección 20: Verbos Engañosos ('It is', 'Do' vs. 'Make')",
    description: "Master tricky verbs like 'do' vs 'make' and weather expressions.",
    introduction: { 
        text: "Some English verbs can be confusing for Spanish speakers. This lesson focuses on two common tricky areas: using 'It is' for general situations and weather, and knowing the difference between 'do' and 'make'. Mastering these will make your English sound much more natural.", 
        objectives: [
            "Learn to use 'It is' (It's) for weather and general statements.", 
            "Understand the core difference between 'do' (for actions/tasks) and 'make' (for creating/producing)."
        ] 
    },
    grammar: [
        { 
            title: "Expressions with 'It is' / 'It's'", 
            content: [
                "In English, you need to use 'It is' or 'It's' for general statements about weather, time, or situations where there is no other subject.",
                "<code>Weather: <strong>It's</strong> cold in the server room. (NOT 'Is cold...')</code>",
                "<code>Situations: <strong>It's</strong> a known bug. / <strong>It's</strong> important to write tests.</code>"
            ],
            quickCheck: {
                question: "How do you say 'Hoy hace frío' in English?",
                correctAnswer: "It is cold today",
                explanation: "We need to use 'It is' as the subject for weather."
            }
        },
        {
            title: "'Do' vs. 'Make'",
            content: [
                "This is a common point of confusion. Here's a simple guide:",
                "Use <strong>make</strong> when you are creating, building, or producing something. It's about the result.",
                "<ul><li>make a decision</li><li>make a mistake</li><li>make a component</li><li>make a pull request</li></ul>",
                "Use <strong>do</strong> for actions, tasks, and activities. It's about the process.",
                "<ul><li>do your work</li><li>do a code review</li><li>do your best</li><li>do a task</li></ul>"
            ],
            quickCheck: {
                question: "Complete: 'I need to ___ a decision about the database.'",
                options: ["do", "make"],
                correctAnswer: "make",
                explanation: "A decision is something you create or produce, so we use 'make'.",
                inputType: 'select'
            }
        }
    ],
    keyPhrases: [
        { original: "It is cold today.", translation: "Hoy hace frío.", techContext: "It's cold in the office today." },
        { original: "He makes dinner.", translation: "Él hace la cena.", techContext: "She makes excellent UI components." },
        { original: "I do my homework.", translation: "Yo hago mi tarea.", techContext: "I need to do the code review for this ticket." }
    ],
    keyWords: [
        { word: 'Decision', translation: 'Decisión', example: 'We need to make a decision about the architecture.' },
        { word: 'Mistake', translation: 'Error', example: 'It\'s okay to make a mistake, as long as you learn from it.' },
        { word: 'Task', translation: 'Tarea', example: 'What tasks do you have to do today?' }
    ],
    phrasalVerbs: [
        { verb: 'do over', translation: 'Hacer de nuevo / Rehacer', example: 'This code has too many bugs; you need to do it over.' },
        { verb: 'make up for', translation: 'Compensar', example: 'To make up for the delay, we will work extra hard this week.' }
    ],
    reading: {
        title: "Read this project manager's update:",
        text: "<p>\"Team, it's important that we make a decision today. We need to do the final testing on the new feature. John, can you do that? Maria, can you make a new build for the QA team? Let's do our best to finish this sprint strong.\"</p>",
        questions: [ "What does the team need to 'make'?", "What does John have to 'do'?" ]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "What are you working on?" },
            { speaker: "Dev2", line: "I'm trying to do this task, but it's difficult." },
            { speaker: "Dev1", line: "Did you make any progress?" },
            { speaker: "Dev2", line: "Yes, but I think I made a mistake somewhere." },
            { speaker: "Dev1", line: "It's okay, we can fix it." }
        ],
        correctAnswers: [ "do", "make", "made", "It's" ],
        dialogue: "Dev1: \"What are you working on?\"<br/>Dev2: \"I'm trying to __BLANK__ this task, but it's difficult.\"<br/>Dev1: \"Did you __BLANK__ any progress?\"<br/>Dev2: \"Yes, but I think I __BLANK__ a mistake somewhere.\"<br/>Dev1: \"__BLANK__ okay, we can fix it.\""
    },
    speaking: {
        scenario: "Your manager asks what you did yesterday. Describe one task you did and one thing you made. (e.g., 'I did the code reviews, and I made a new component for the profile page.')"
    },
    writing: {
        title: "Write a short to-do list for tomorrow.",
        scenario: "Write two or three bullet points for your tasks for tomorrow, using 'do' or 'make' where appropriate.",
        guidance: { title: "Example:", points: [ "- Do the code review for ticket #123", "- Make a new branch for the new feature", "- Have a meeting with the design team" ] }
    },
    summary: {
        points: [ "Use 'It is' or 'It's' for weather and general situations.", "Use 'make' for creating or producing something (the result).", "Use 'do' for general actions and tasks (the process)." ]
    }
};