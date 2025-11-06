import { LessonData } from '../../../types';

export const lesson_29: LessonData = {
    id: 'comparatives-superlatives',
    title: 'Lección 29: Comparatives & Superlatives in Tech',
    description: "Master comparisons to describe which tool is faster, easier, or the most powerful.",
    introduction: {
        text: "In tech, comparing tools, performance, and models is a daily task. This lesson covers the key rules for comparatives and superlatives, including important spelling changes, so you can make accurate comparisons about technology.",
        objectives: [
            "Learn spelling rules for comparatives/superlatives (doubling consonants, -y to -i).",
            "Understand when to use -er/-est vs. more/most.",
            "Apply these rules to compare AI models, code performance, and tools."
        ],
    },
    grammar: [
        {
            title: "Rules for Short Adjectives (-er / -est)",
            content: [
                "For most one-syllable adjectives, add <strong>-er</strong> (comparative) and <strong>-est</strong> (superlative).",
                "If the adjective ends in consonant-vowel-consonant (CVC), double the last consonant:",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>big &rarr; bigg<span class='text-accent-pink'>er</span> &rarr; the bigg<span class='text-accent-pink'>est</span> (e.g., AI models are getting bigger)</div>",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>hot &rarr; hott<span class='text-accent-pink'>er</span> &rarr; the hott<span class='text-accent-pink'>est</span> (e.g., The server is running hotter than usual)</div>",
                "If the adjective ends in <strong>-y</strong>, change 'y' to 'i' and add -er/-est:",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>easy &rarr; eas<span class='text-accent-pink'>ier</span> &rarr; the eas<span class='text-accent-pink'>iest</span> (e.g., This interface is easier to use)</div>",
                "<div class='p-2 bg-primary-dark/50 rounded-md font-mono text-sm'>busy &rarr; bus<span class='text-accent-pink'>ier</span> &rarr; the bus<span class='text-accent-pink'>iest</span> (e.g., Developers are busier during launches)</div>",
            ],
            quickCheck: {
                question: "Complete: 'Writing clean code makes debugging much ___ (easy).'",
                correctAnswer: "easier",
                explanation: "For adjectives ending in -y, we change 'y' to 'i' and add -er."
            }
        },
        {
            title: "Rules for Long Adjectives (more / most)",
            content: [
                "For adjectives with two or more syllables (except those ending in -y), use <strong>more</strong> (comparative) and <strong>the most</strong> (superlative).",
                "<strong>Comparative:</strong> 'This GPU is <span class='text-teal-300'>more powerful</span> than the old one.'",
                "<strong>Superlative:</strong> 'This is <span class='text-teal-300'>the most efficient</span> algorithm we have.'",
                "Common tech adjectives that follow this rule: powerful, efficient, responsive, user-friendly, complex, popular."
            ],
            quickCheck: {
                question: "Complete: 'This is ___ (complex) component in the entire application.'",
                correctAnswer: "the most complex",
                explanation: "'Complex' is a long adjective, and we are comparing it to all others, so we use the superlative 'the most'."
            }
        }
    ],
    keyPhrases: [
        { original: "AI models are getting bigger and smarter.", translation: "Los modelos de IA se están volviendo más grandes e inteligentes.", techContext: "Describing the trend in AI development." },
        { original: "My code runs smoother after the refactoring.", translation: "Mi código se ejecuta más fluidamente después de la refactorización.", techContext: "Comparing code performance before and after an improvement." },
        { original: "This is the fastest build time I've ever seen.", translation: "Este es el tiempo de compilación más rápido que he visto.", techContext: "Highlighting a key achievement in a project update." }
    ],
    keyWords: [
        { word: 'Performance', translation: 'Rendimiento', example: 'We need to choose the solution with the best performance.' },
        { word: 'Efficiency', translation: 'Eficiencia', example: 'The new algorithm is more efficient with memory.' },
        { word: 'Responsive', translation: 'Adaptable / Responsivo', example: 'The new UI is much more responsive on mobile devices.' },
        { word: 'Lightweight', translation: 'Ligero', example: 'Alpine.js is a lighter framework than Angular.' }
    ],
    phrasalVerbs: [
        { verb: 'speed up', translation: 'acelerar', example: 'We added an index to speed up the database queries.' },
        { verb: 'slim down', translation: 'reducir / adelgazar', example: 'We need to slim down the Docker image to make it smaller.' }
    ],
    reading: {
        title: "Read this tech blog excerpt:",
        text: "<p>\"When choosing a framework, developers often look for the easiest one to learn. Framework A is certainly easier than Framework B for beginners. However, Framework B is more powerful and has a bigger community. For large-scale applications, the most important factor is often long-term stability.\"</p>",
        questions: ["Which framework is easier for beginners?", "Which framework is more powerful?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Alex", line: "Which programming language is the best?" },
            { speaker: "Maria", line: "It depends. Python is easier than Java for data science." },
            { speaker: "Alex", line: "And which one is faster?" },
            { speaker: "Maria", line: "Generally, Java is faster than Python, but Python has the biggest community." }
        ],
        correctAnswers: ["best", "easier than", "faster", "biggest"],
        dialogue: "Alex: \"Which programming language is the __BLANK__?\"<br/>Maria: \"It depends. Python is __BLANK__ Java for data science.\"<br/>Alex: \"And which one is __BLANK__?\"<br/>Maria: \"Generally, Java is faster than Python, but Python has the __BLANK__ community.\""
    },
    speaking: {
        scenario: "Compare two AI models you know (like Gemini and ChatGPT). Use at least one comparative (e.g., 'X is better than Y for...') and one superlative (e.g., 'Y is the easiest to use for beginners'). Record your answer."
    },
    writing: {
        title: "Write a short comparison for your team.",
        scenario: "Your team is choosing between two libraries, 'LibA' and 'LibB'. Write two sentences for your team's Slack channel, comparing them. Use a comparative and a superlative.",
        guidance: {
            title: "Example:",
            points: ["\"I've tested both. LibA is easier to set up than LibB. However, I think LibB is the most powerful option for our long-term goals.\""]
        }
    },
    summary: {
        points: [
            "For short adjectives, use <strong>-er/-est</strong>. Remember to double the consonant for CVC words (big -> bigger).",
            "For adjectives ending in -y, change it to <strong>-ier/-iest</strong> (easy -> easier).",
            "For long adjectives, use <strong>more / the most</strong> (e.g., more powerful)."
        ]
    }
};