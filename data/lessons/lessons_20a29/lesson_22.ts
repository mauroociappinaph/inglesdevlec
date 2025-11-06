import { LessonData } from '../../../types';

export const lesson_22: LessonData = {
    id: 'used-to-would',
    title: "Lección 22: Talking About Past Habits ('Used to' vs. 'Would')",
    description: "Learn the difference between 'used to' and 'would' for past habits.",
    introduction: { 
        text: "When talking about your past experience, using 'used to' and 'would' correctly makes your English sound much more natural. This lesson explains the key differences and how to use them in a professional tech context.", 
        objectives: [
            "Understand when to use 'used to' for past habits and states.",
            "Learn to use 'would' for repeated past actions.",
            "Form correct negative and question sentences with 'used to'."
        ] 
    },
    grammar: [
        { 
            title: "Using 'Used to'", 
            content: [
                "Use <strong class='text-sky-400'>'used to'</strong> for past habits OR past states (situations) that are no longer true.",
                "<strong>Habit:</strong> 'I <span class='text-teal-300'>used to write</span> all my code in vanilla JavaScript.'",
                "<strong>State:</strong> 'This company <span class='text-teal-300'>used to be</span> a small startup.'",
                "<strong>Negative:</strong> Use <strong class='text-red-400'>didn't use to</strong>. Note that 'use' has no 'd'. 'We <span class='text-red-400'>didn't use to</span> have automated tests.'",
                "<strong>Question:</strong> Use <strong class='text-yellow-300'>Did ... use to?</strong> Again, no 'd'. '<span class='text-yellow-300'>Did</span> you <span class='text-yellow-300'>use to</span> work with PHP?'"
            ],
            quickCheck: {
                question: "Which sentence is correct?",
                options: ["I didn't used to like TypeScript.", "I didn't use to like TypeScript."],
                correctAnswer: "I didn't use to like TypeScript.",
                explanation: "In negative sentences, we use 'didn't use to' (without the 'd').",
                inputType: "select"
            }
        },
        {
            title: "Using 'Would'",
            content: [
                "Use <strong class='text-sky-400'>'would'</strong> ONLY for repeated past actions or habits. It is more descriptive and common in storytelling.",
                "<strong>Action:</strong> 'When I was a junior developer, I <span class='text-teal-300'>would ask</span> my mentor for help every day.'",
                "You CANNOT use 'would' for past states. It sounds very strange.",
                "<strong>Incorrect:</strong> 'I <s class='text-red-400'>would be</s> a junior developer.' (Correct: I <strong class='text-green-400'>used to be</strong> a junior developer.)"
            ],
             quickCheck: {
                question: "Complete: 'Before CI/CD, we ___ manually deploy the code every Friday.'",
                options: ["used to", "would", "Both are correct"],
                correctAnswer: "Both are correct",
                explanation: "'Deploying' is a repeated action, so both 'used to' and 'would' are grammatically correct here.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "We used to deploy manually, but now we have a CI/CD pipeline.", translation: "Solíamos desplegar manualmente, pero ahora tenemos un pipeline de CI/CD.", techContext: "Comparing a past process with the current, improved one." },
        { original: "Before we had microservices, the whole application would go down if one part failed.", translation: "Antes de que tuviéramos microservicios, toda la aplicación se caía si una parte fallaba.", techContext: "Describing a recurring problem in a past system architecture." }
    ],
    keyWords: [
        { word: 'Legacy', translation: 'Legado / Antiguo', example: 'We used to support a legacy system written in COBOL.' },
        { word: 'Previous', translation: 'Previo / Anterior', example: 'In my previous job, we would have sprint planning meetings on Mondays.' }
    ],
    phrasalVerbs: [
        { verb: 'phase out', translation: 'Eliminar gradualmente', example: 'We used to use jQuery, but we decided to phase it out in favor of React.' },
        { verb: 'stick with', translation: 'Quedarse con / Seguir con', example: 'Although the new framework was tempting, we decided to stick with what we knew.' }
    ],
    reading: {
        title: "Read this developer's reflection on their career:",
        text: "<p>\"When I started my career, I used to think that knowing one programming language was enough. Every day, I would write code in Java and I was happy. I didn't use to read tech blogs or follow new trends. Now, I understand that the industry changes constantly. It's funny to think how different things used to be.\"</p>",
        questions: [ "What did the developer use to think?", "What would the developer do every day?" ]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "This old system is so slow." },
            { speaker: "Dev2", line: "I know. Before the migration, we used to get complaints every day." },
            { speaker: "Dev1", line: "Really?" },
            { speaker: "Dev2", line: "Yes. The database would lock up, and we would have to restart the server manually." }
        ],
        correctAnswers: [ "used to get", "would lock up", "would have to" ],
        dialogue: "Dev2: \"...we __BLANK__ complaints every day.\"<br/>Dev1: \"Really?\"<br/>Dev2: \"Yes. The database __BLANK__, and we __BLANK__ restart the server manually.\""
    },
    speaking: {
        scenario: "An interviewer asks you: 'Tell me about a technology you used to work with but don't anymore.' Describe the technology and why you stopped using it."
    },
    writing: {
        title: "Write a short paragraph about your past skills.",
        scenario: "Write two or three sentences describing your programming habits or skills when you were first starting to learn to code.",
        guidance: { title: "Example:", points: [ "When I started learning, I used to write all my HTML and CSS in one file. I didn't use to know about separate stylesheets. Every time I wanted to change a color, I would search through the whole document." ] }
    },
    summary: {
        points: [ "Use 'used to' for past habits AND past states that are no longer true.", "Use 'would' ONLY for repeated past actions, not states.", "For negatives and questions, always use 'didn't use to' and 'Did you use to?' (without the 'd')." ]
    }
};