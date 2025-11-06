import { LessonData } from '../../../types';

export const lesson_17: LessonData = {
    id: 'places',
    title: 'Lección 17: Describing Places',
    description: 'Practice describing your city, office, or remote work setup.',
    introduction: { text: "You'll often need to describe places to your colleagues, from giving directions to the office to recommending a lunch spot. This lesson gives you the language to do so clearly.", objectives: ["Review 'Wh-' questions for places.", "Learn vocabulary for offices and cities."] },
    grammar: [{ title: "Asking 'Wh-' Questions (Review)", content: ["Remember the structure: <div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'><span class='text-sky-400'>Where</span> <span class='text-teal-300'>do</span> <span class='text-yellow-300'>you</span> <span class='text-purple-300'>live</span>?</div>"] }],
    keyPhrases: [{ original: "Do you come to the office often, or do you work mostly remotely?", translation: "¿Vienes a la oficina a menudo, o trabajas mayormente en remoto?", techContext: "A common question to understand a colleague's work habits." }],
    keyWords: [
        { word: 'Headquarters', translation: 'Sede central', example: 'Our company\'s headquarters is located in San Francisco.' },
        { word: 'Venue', translation: 'Lugar / Sede (de un evento)', example: 'The conference venue has great Wi-Fi.' },
    ],
    phrasalVerbs: [
        { verb: 'commute to', translation: 'Desplazarse a (trabajo)', example: 'I used to commute to the office every day, but now I work from home.' },
        { verb: 'drop by', translation: 'Pasarse / Visitar', example: 'Feel free to drop by my desk if you have any questions.' },
    ],
    reading: {
        title: "Read this information snippet from a company's \"Careers\" page:",
        text: "<p>Our headquarters is located in the heart of Silicon Valley. We also have a large engineering office in Austin. For many roles, we offer the option to work fully remotely.</p>",
        questions: ["Where is the company's main office?", "What does the company offer for \"many roles\"?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Colleague 1", line: "I live in a small city, but it's very nice." },
            { speaker: "Colleague 2", line: "Cool. Do you come to the main office often?" },
            { speaker: "Colleague 1", line: "Yes, I'm at the airport now. See you at the train station!" }
        ],
        correctAnswers: ["city", "often", "station"],
        dialogue: "Colleague 1: \"I live in a small __BLANK__, but it's very nice.\"<br/>Colleague 2: \"Cool. Do you come to the main office __BLANK__?\"<br/>Colleague 1: \"Yes, I'm at the airport now. See you at the train __BLANK__!\""
    },
    speaking: {
        scenario: "A colleague is visiting your city for a conference and asks for a recommendation. Describe your favorite place in your city (e.g., a park, a cafe, a museum)."
    },
    writing: {
        title: "Write directions to your desk.",
        scenario: "A new team member is starting in your office. Write a short, simple Slack message telling them how to find your desk.",
        guidance: { title: "Example:", points: ["\"Hi [Name], welcome! My desk is on the second floor, next to the window. You'll see a big blue monitor.\""] }
    },
    summary: {
        points: ["Use 'at' for specific locations (at the airport).", "Use 'in' for larger areas (in a city)."]
    }
};