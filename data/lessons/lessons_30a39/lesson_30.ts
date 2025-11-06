import { LessonData } from '../../../types';

export const lesson_30: LessonData = {
    id: 'requests-instructions-pronouns',
    title: 'Lección 30: Requests, Instructions & Object Pronouns',
    description: "Learn how to ask, command, and refer to things effectively.",
    introduction: {
        text: "In a tech team, clear communication is everything. This lesson teaches you three fundamental skills: how to politely ask for information, how to give clear instructions (to a colleague or an AI), and how to use object pronouns to avoid repetition. Mastering these makes your daily interactions much smoother.",
        objectives: [
            "Form polite questions to request information or help.",
            "Use imperatives (commands) to give clear instructions.",
            "Correctly use object pronouns (me, you, him, her, it, us, them) after a verb."
        ],
    },
    grammar: [
        {
            title: "Asking for Information",
            content: [
                "To make a polite request, you can start your question with 'Can...?', 'Could...?', or 'Do you know...?'.",
                "<ul><li><strong>Can I ask you</strong> a question?</li><li><strong>Can you send me</strong> the error logs?</li><li><strong>Do you know</strong> the API key?</li></ul>"
            ],
            quickCheck: {
                question: "How do you politely ask a colleague for the project documentation?",
                options: ["Give me the documentation.", "Can you send me the documentation?"],
                correctAnswer: "Can you send me the documentation?",
                explanation: "'Can you...?' is a polite and standard way to make a request.",
                inputType: "select"
            }
        },
        {
            title: "Giving Instructions (Imperatives)",
            content: [
                "To give a direct command or instruction, use the base form of the verb. This is called the imperative.",
                "<code><strong>Check</strong> your code! / <strong>Please deploy</strong> the update.</code>",
                "<code><strong>Don't close</strong> the terminal! / <strong>Please do not</strong> push to the main branch.</code>",
                "You use imperatives when talking to an AI assistant:",
                "<code>AI, <strong>show me</strong> the results. / Gemini, <strong>translate</strong> this for me.</code>"
            ],
            quickCheck: {
                question: "Complete the instruction: 'Please ___ (upload) your files to the shared drive.'",
                correctAnswer: "upload",
                explanation: "For imperatives, we use the base form of the verb."
            }
        },
        {
            title: "Object Pronouns",
            content: [
                "Object pronouns receive the action of the verb. They come <strong>after</strong> the verb.",
                "<ul><li>Subject: I &rarr; Object: <strong>me</strong> (e.g., She helped <strong>me</strong>.)</li><li>Subject: You &rarr; Object: <strong>you</strong> (e.g., I'll call <strong>you</strong>.)</li><li>Subject: He &rarr; Object: <strong>him</strong> (e.g., The manager told <strong>him</strong>.)</li><li>Subject: She &rarr; Object: <strong>her</strong> (e.g., Can you ask <strong>her</strong>?)</li><li>Subject: It &rarr; Object: <strong>it</strong> (e.g., I'll test <strong>it</strong> later.)</li><li>Subject: We &rarr; Object: <strong>us</strong> (e.g., The system notified <strong>us</strong>.)</li><li>Subject: They &rarr; Object: <strong>them</strong> (e.g., I sent <strong>them</strong> the credentials.)</li></ul>"
            ],
            quickCheck: {
                question: "Correct the error: 'Can you send I the error logs?'",
                correctAnswer: "Can you send me the error logs?",
                explanation: "After the verb 'send', you need the object pronoun 'me', not the subject pronoun 'I'."
            }
        }
    ],
    keyPhrases: [
        { original: "Please send me the API documentation.", translation: "Por favor, envíame la documentación de la API.", techContext: "A common request between developers." },
        { original: "Don't restart the server!", translation: "¡No reinicies el servidor!", techContext: "An urgent instruction during a critical process." },
        { original: "The AI model helps us debug faster.", translation: "El modelo de IA nos ayuda a depurar más rápido.", techContext: "Describing how a tool benefits the team." },
        { original: "He fixed it this morning.", translation: "Él lo arregló esta mañana.", techContext: "Giving a status update about a bug ('it')." }
    ],
    keyWords: [
        { word: 'Request / Ask', translation: 'Solicitar / Preguntar', example: 'Can I ask you for a code review?' },
        { word: 'Instruction', translation: 'Instrucción', example: 'Follow the instructions in the README file.' },
        { word: 'Verify', translation: 'Verificar', example: 'Please verify your email address.' },
        { word: 'Send / Receive', translation: 'Enviar / Recibir', example: 'Did you receive the email I sent you?' }
    ],
    phrasalVerbs: [
        { verb: 'send over', translation: 'enviar (algo)', example: 'Can you send over the requirements document?' },
        { verb: 'get back to', translation: 'responder a / contactar de nuevo a', example: "I don't have the answer now, but I'll get back to you this afternoon." }
    ],
    reading: {
        title: "Read this Slack conversation:",
        text: "<p><strong>@senior_dev:</strong> \"Hi Alex. Can you test the new feature for me?\"</p><p><strong>@alex:</strong> \"Sure. Please send me the link to the test environment.\"</p><p><strong>@senior_dev:</strong> \"Here it is. Let me know if you find any issues.\"</p><p><strong>@alex:</strong> \"Will do. I'll get back to you with feedback.\"</p>",
        questions: ["What does the senior dev ask Alex to do?", "What does Alex ask for?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "Can you deploy the update for us?" },
            { speaker: "Developer", line: "Yes, but first, please send me the final approval." },
            { speaker: "Manager", line: "Okay, I'm sending it to you now." }
        ],
        correctAnswers: ["us", "me", "it"],
        dialogue: "Manager: \"Can you deploy the update for __BLANK__?\"<br/>Developer: \"Yes, but first, please send __BLANK__ the final approval.\"<br/>Manager: \"Okay, I'm sending __BLANK__ to you now.\""
    },
    speaking: {
        scenario: "You are stuck on a difficult bug. Ask a senior developer on your team for help. Politely ask them to look at your code with you."
    },
    writing: {
        title: "AI Mini-Challenge: Write a Dialogue",
        scenario: "Write a short dialogue between a developer and an AI assistant. The developer should give at least one command (imperative) and the AI should respond using an object pronoun (like 'it', 'them', or 'you').",
        guidance: {
            title: "Example Dialogue:",
            points: [
                "<strong>Developer:</strong> \"AI, can you show me the test results?\"",
                "<strong>AI:</strong> \"Of course! I am sending them to you now.\""
            ]
        }
    },
    summary: {
        points: [
            "Use <strong>'Can you...?'</strong> for polite requests.",
            "Use the <strong>base verb</strong> for instructions (e.g., 'Check your code').",
            "Object pronouns (me, you, it, us, them, etc.) always go <strong>after</strong> the verb."
        ]
    }
};