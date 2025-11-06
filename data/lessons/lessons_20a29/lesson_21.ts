import { LessonData } from '../../../types';

export const lesson_21: LessonData = {
    id: 'plurals-y',
    title: "Lección 21: Formando Plurales (final en -y)",
    description: "Learn the rule for pluralizing nouns ending in -y.",
    introduction: { 
        text: "This lesson covers a specific but very important rule for forming plurals. It applies to many common words in technology, such as 'library', 'dependency', 'repository', and 'directory'. Mastering this rule will make your technical writing much more accurate.", 
        objectives: [
            "Learn the 'y' to 'ies' pluralization rule.",
            "Apply this rule to common technical nouns."
        ] 
    },
    grammar: [
        { 
            title: "Plurals for Nouns Ending in '-y'", 
            content: [
                "The rule depends on the letter before the '-y'.",
                "If a noun ends in a <strong class='text-yellow-300'>consonant + y</strong>, you change the 'y' to an 'i' and add '-es'.",
                "<ul><li>librar<strong class='text-yellow-300'>y</strong> &rarr; librar<strong class='text-sky-400'>ies</strong></li><li>dependenc<strong class='text-yellow-300'>y</strong> &rarr; dependenc<strong class='text-sky-400'>ies</strong></li><li>repositor<strong class='text-yellow-300'>y</strong> &rarr; repositor<strong class='text-sky-400'>ies</strong></li></ul>",
                "If a noun ends in a <strong class='text-teal-300'>vowel + y</strong>, you just add '-s'.",
                 "<ul><li>k<strong class='text-teal-300'>ey</strong> &rarr; k<strong class='text-sky-400'>eys</strong></li><li>d<strong class='text-teal-300'>ay</strong> &rarr; d<strong class='text-sky-400'>ays</strong></li></ul>"
            ],
            quickCheck: {
                question: "What is the correct plural of 'dependency'?",
                correctAnswer: "dependencies",
                explanation: "The word ends in a consonant ('c') + 'y', so we change 'y' to 'ies'."
            }
        }
    ],
    keyPhrases: [
        { original: "We need to update the dependencies in this project.", translation: "Necesitamos actualizar las dependencias en este proyecto.", techContext: "A very common task for any software developer." },
        { original: "This service has proxies in multiple countries.", translation: "Este servicio tiene proxies en varios países.", techContext: "Discussing the global infrastructure of a system." }
    ],
    keyWords: [
        { word: 'Library', translation: 'Biblioteca', example: 'This project uses several open-source libraries.' },
        { word: 'Dependency', translation: 'Dependencia', example: 'You must install all the project dependencies before running the application.' },
        { word: 'Repository', translation: 'Repositorio', example: 'Our company has multiple code repositories on GitHub.' }
    ],
    phrasalVerbs: [
        { verb: 'rely on', translation: 'Confiar en / Depender de', example: 'This function relies on several external libraries.' },
        { verb: 'sort through', translation: 'Clasificar / Revisar', example: 'I need to sort through the log directories to find the error.' }
    ],
    reading: {
        title: "Read this developer's comment on a pull request:",
        text: "<p>\"I've updated the dependencies for all the front-end libraries in our repositories. I had to check multiple directories to find the correct configuration files. This should resolve the security vulnerabilities.\"</p>",
        questions: [ "What did the developer update?", "What did this update resolve?" ]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "Are all the project dependencies up to date?" },
            { speaker: "Developer", line: "No, we have two libraries with known security vulnerabilities." },
            { speaker: "Manager", line: "Okay, please prioritize updating those libraries immediately." }
        ],
        correctAnswers: [ "dependencies", "libraries", "vulnerabilities" ],
        dialogue: "Manager: \"Are all the project __BLANK__ up to date?\"<br/>Developer: \"No, we have two __BLANK__ with known security __BLANK__.\"<br/>Manager: \"Okay, please prioritize updating those immediately.\""
    },
    speaking: {
        scenario: "You are explaining to a new developer that a project is complex because it has many external libraries and dependencies. How would you say this?"
    },
    writing: {
        title: "Write a short commit message.",
        scenario: "You have just updated all the outdated libraries in a project. Write a commit message explaining what you did.",
        guidance: { title: "Example:", points: [ "chore: update project dependencies and third-party libraries" ] }
    },
    summary: {
        points: [ "For nouns ending in a consonant + 'y', change the 'y' to 'i' and add '-es'.", "For nouns ending in a vowel + 'y', just add '-s'.", "This rule is very common for tech words like 'library', 'dependency', and 'repository'." ]
    }
};