import { LessonData } from '../../../types';

export const lesson_31: LessonData = {
    id: 'phrasal-verbs-movement',
    title: 'Lección 31: Navigating Interfaces with Phrasal Verbs',
    description: "Learn to give and understand directions in digital environments using phrasal verbs like 'scroll down' and 'log in'.",
    introduction: {
        text: "When working with software, websites, or AI, you're constantly moving through digital spaces. Phrasal verbs of movement and direction are the 'GPS' of technical English. This lesson will teach you how to give and follow instructions clearly, whether you're guiding a user, pair programming, or interacting with a chatbot.",
        objectives: [
            "Understand how particles (up, down, in, out) give verbs direction.",
            "Master common phrasal verbs for navigating digital interfaces.",
            "Practice giving and following instructions in tech scenarios."
        ],
    },
    grammar: [
        {
            title: "Key Phrasal Verbs for Navigation",
            content: [
                "A phrasal verb combines a main verb with a particle (a small word like 'up', 'down', 'in', 'out'). The particle often gives the verb a literal sense of direction, which is very useful for digital spaces.",
                `<ul>
                    <li><strong>go to:</strong> Navigate to a destination. <code>Go to the settings page.</code></li>
                    <li><strong>go back (to):</strong> Return. <code>Click here to go back to the homepage.</code></li>
                    <li><strong>scroll up / scroll down:</strong> Move the view vertically. <code>Scroll down to read the comments.</code></li>
                    <li><strong>log in / log out:</strong> Enter or exit a secure system. <code>You need to log in to see your profile.</code></li>
                    <li><strong>turn on / turn off:</strong> Activate or deactivate a feature or device. <code>Please turn on notifications.</code></li>
                    <li><strong>back up:</strong> Create a copy of data. <code>Don't forget to back up your work.</code></li>
                    <li><strong>look up:</strong> Search for specific information. <code>I'll look up the user's ID in the database.</code></li>
                </ul>`
            ],
            quickCheck: {
                question: "To see the footer of a long webpage, you need to ___.",
                options: ["scroll up", "scroll down"],
                correctAnswer: "scroll down",
                explanation: "'Down' indicates moving towards the bottom of the page.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "Please scroll down to the 'API Keys' section.", translation: "Por favor, desplázate hacia abajo hasta la sección 'API Keys'.", techContext: "Giving a clear instruction to find something on a webpage." },
        { original: "I can't log in; can you reset my password?", translation: "No puedo iniciar sesión; ¿puedes restablecer mi contraseña?", techContext: "A common user support request." },
        { original: "The chatbot looked up the information in its knowledge base.", translation: "El chatbot buscó la información en su base de conocimientos.", techContext: "Describing an AI's action of searching for data." },
        { original: "Go back to the dashboard and click on the 'Analytics' tab.", translation: "Vuelve al panel de control y haz clic en la pestaña 'Analytics'.", techContext: "Guiding a user through a software interface." }
    ],
    keyWords: [
        { word: 'Navigate', translation: 'Navegar', example: 'Use the sidebar to navigate between sections.' },
        { word: 'Interface', translation: 'Interfaz', example: 'The new user interface is very clean.' },
        { word: 'Dashboard', translation: 'Panel de control', example: 'All the main stats are on the dashboard.' },
        { word: 'Log in / Log out', translation: 'Iniciar / Cerrar sesión', example: 'Your session will automatically log out after 30 minutes.' },
        { word: 'Back up', translation: 'Copia de seguridad', example: 'A daily back up of the database is essential.' }
    ],
    phrasalVerbs: [
        { verb: 'go into', translation: 'entrar en', example: 'Don’t go into the admin panel without permission.' },
        { verb: 'click on', translation: 'hacer clic en', example: 'Click on the "Save" button to apply your changes.' },
        { verb: 'zoom in / zoom out', translation: 'acercar / alejar', example: 'You can zoom in on the design mockup to see more detail.' }
    ],
    reading: {
        title: "Read this snippet from a user guide:",
        text: "<p>\"To start, log in with your email and password. Once you are in, go to the main dashboard. From there, you can click on 'Projects' to see your work. If you scroll down, you will see the activity feed. To exit, click your profile icon and select 'Log out'.\"</p>",
        questions: ["What is the first step?", "How do you exit the application?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Support", line: "First, please log in to your account." },
            { speaker: "User", line: "Okay, I'm in." },
            { speaker: "Support", line: "Great. Now, go to the 'Settings' page and scroll down. Do you see the 'Notifications' section?" },
            { speaker: "User", line: "Yes." },
            { speaker: "Support", line: "Please turn on email notifications there." }
        ],
        correctAnswers: ["log in", "go to", "scroll down", "turn on"],
        dialogue: "Support: \"First, please __BLANK__ to your account.\"<br/>User: \"Okay, I'm in.\"<br/>Support: \"Great. Now, __BLANK__ the 'Settings' page and __BLANK__. Do you see the 'Notifications' section?\"<br/>User: \"Yes.\"<br/>Support: \"Please __BLANK__ email notifications there.\""
    },
    speaking: {
        scenario: "You are on a video call, sharing your screen with a new team member. Guide them on how to find the project repository on GitHub. Use at least two phrasal verbs from the lesson."
    },
    writing: {
        title: "AI Mini-Challenge: Guiding a User",
        scenario: "Write a short dialogue where a user asks an AI assistant how to change their profile picture. The AI should guide them using at least two phrasal verbs from this lesson.",
        guidance: {
            title: "Example Dialogue:",
            points: [
                "<strong>User:</strong> \"How can I change my profile picture?\"",
                "<strong>AI:</strong> \"Of course. First, go to your profile page. Then, scroll down and click on the 'Edit Profile' button.\""
            ]
        }
    },
    summary: {
        points: [
            "Phrasal verbs like 'scroll down', 'log in', and 'go back' are essential for giving clear instructions in a digital environment.",
            "The particle (up, in, back, etc.) gives the verb a clear direction.",
            "Use these verbs to make your technical communication more natural and precise."
        ]
    }
};