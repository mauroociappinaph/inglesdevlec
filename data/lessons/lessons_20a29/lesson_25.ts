import { LessonData } from '../../../types';

export const lesson_25: LessonData = {
    id: 'possessive-adjectives',
    title: "Lección 25: Adjetivos Posesivos (It's vs. Its)",
    description: "Clarify the difference between 'it's' and 'its' and master possessive adjectives.",
    introduction: {
        text: "It's vs. its is one of the most common mistakes in English writing. This lesson will clarify this rule and review all possessive adjectives, helping you to write more professional and accurate technical documentation and messages.",
        objectives: [
            "Understand the crucial difference between 'it's' (it is) and 'its' (possessive).",
            "Review and use possessive adjectives like my, your, his, her, and its.",
            "Distinguish between possessive adjectives and the possessive 's."
        ],
    },
    grammar: [
        {
            title: "Crucial Tip: It's vs. Its",
            content: [
                "These two words sound the same but have completely different meanings. Confusing them is a very common error.",
                "<strong>It's</strong> is a contraction (a short form) of '<strong>it is</strong>' or '<strong>it has</strong>'. Think of the apostrophe as a placeholder for the missing letter 'i'.",
                "<code><strong>It's</strong> sunny today. &rarr; <strong>It is</strong> sunny today.</code>",
                "<code><strong>It's</strong> a critical bug. &rarr; <strong>It is</strong> a critical bug.</code>",
                "<strong>Its</strong> is a possessive adjective. It means 'su' when something belongs to an animal, object, or concept (an 'it'). There is no apostrophe.",
                "<code>The dog is in <strong>its</strong> house.</code>",
                "<code>The API is great, but <strong>its</strong> documentation is confusing. (The documentation belongs to the API).</code>"
            ],
            quickCheck: {
                question: "Complete the sentence: 'The application is crashing. ___ a problem with ___ memory management.'",
                correctAnswer: "It's / its",
                explanation: "The first blank means 'It is a problem', and the second means 'the memory management of the application'."
            }
        },
        {
            title: "Review of Possessive Adjectives",
            content: [
                "These words always come before a noun to show who owns it.",
                "<ul><li><strong>my</strong> book &rarr; <strong>my</strong> code</li><li><strong>your</strong> shoes &rarr; <strong>your</strong> ticket</li><li><strong>his</strong> sandwich &rarr; <strong>his</strong> commit</li><li><strong>her</strong> house &rarr; <strong>her</strong> design</li><li><strong>its</strong> door &rarr; <strong>its</strong> performance</li><li><strong>our</strong> team &rarr; <strong>our</strong> sprint</li><li><strong>their</strong> project &rarr; <strong>their</strong> servers</li></ul>",
                "Remember, these are different from the possessive 's, which is used for specific nouns (e.g., 'Anna's sister', 'the developer's laptop')."
            ],
            quickCheck: {
                question: "How would you say 'el código de David'?",
                options: ["His code", "David's code", "Both are correct"],
                correctAnswer: "Both are correct",
                explanation: "'His code' is correct if we already know we're talking about David. 'David's code' is also correct and more specific.",
                inputType: 'select'
            }
        }
    ],
    keyPhrases: [
        { original: "It's a fast server.", translation: "Es un servidor rápido.", techContext: "Describing a server's quality (It's = It is)." },
        { original: "I like its speed.", translation: "Me gusta su velocidad.", techContext: "Referring to the speed that belongs to the server (its = possessive)." },
        { original: "The framework has its own state management library.", translation: "El framework tiene su propia librería de manejo de estado.", techContext: "Describing a feature that belongs to a framework." }
    ],
    keyWords: [
        { word: 'It\'s (It is)', translation: 'Es / Está', example: 'It\'s ready for deployment.' },
        { word: 'Its', translation: 'Su (de una cosa)', example: 'The library is popular due to its simplicity.' },
        { word: 'My / Your', translation: 'Mi / Tu, Su', example: 'My pull request is waiting for your review.' },
        { word: 'His / Her', translation: 'Su (de él) / Su (de ella)', example: 'His logic is correct, and her design is beautiful.' },
        { word: 'Our / Their', translation: 'Nuestro / Su (de ellos)', example: 'Our team will help their team with the migration.' }
    ],
    phrasalVerbs: [
        { verb: 'take on', translation: 'asumir', example: 'Our team will take on its maintenance from next month.' },
        { verb: 'pass on', translation: 'transmitir / pasar', example: "Please pass on my feedback to the component's original developer." }
    ],
    reading: {
        title: "Read this project update email:",
        text: "<p>Hi Team,</p><p>Quick update on the new feature. It's almost complete. The backend is finished, but its test coverage is still a bit low. Maria is working on her part, and her progress is great. David needs to merge his changes. Our goal is to deploy by Friday.</p><p>Thanks,<br/>Alex</p>",
        questions: ["What is almost complete?", "What does 'its' refer to when it says 'its test coverage'?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "How is the new server?" },
            { speaker: "Developer", line: "It's performing well. Its response time is under 100 milliseconds. My tests are all passing." },
            { speaker: "Manager", line: "Great. What about Sarah's component?" },
            { speaker: "Developer", line: "Her component is also ready. It's very efficient." }
        ],
        correctAnswers: ["It's", "Its", "My", "Her", "It's"],
        dialogue: "Developer: \"__BLANK__ performing well. __BLANK__ response time is under 100 milliseconds. __BLANK__ tests are all passing.\"<br/>Manager: \"Great. What about Sarah's component?\"<br/>Developer: \"__BLANK__ component is also ready. __BLANK__ very efficient.\""
    },
    speaking: {
        scenario: "You are talking to a colleague about a new software library. Describe one thing you like about it. Start by saying 'It's...' and then mention one of its features using 'its'."
    },
    writing: {
        title: "Write a short comment on a ticket.",
        scenario: "You have just fixed a bug. Write a short comment explaining the problem. Use 'it's' and 'its' in your explanation.",
        guidance: {
            title: "Example:",
            points: ["\"Fixed the bug. It's a style issue in the main component. Its 'z-index' was too low, causing it to appear behind the navigation bar.\""]
        }
    },
    summary: {
        points: [
            "<strong>It's</strong> = It is / It has. (Contraction)",
            "<strong>Its</strong> = Shows possession for an object or animal. (No apostrophe)",
            "Use <strong>my, your, his, her, its, our, their</strong> before a noun to show ownership."
        ]
    }
};