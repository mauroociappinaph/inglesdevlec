
export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export type LessonId = 'greetings' | 'information' | 'work' | 'describing' | 'routine' | 'preferences' | 'greetings-formal' | 'studies' | 'debate' | 'planning' | 'family' | 'places' | 'routines-he-she' | 'contractions' | 'preferences-questions' | 'favors' | 'negative-contractions' | 'storytelling' | 'plurals' | 'present-continuous' | 'feelings-pronunciation' | 'demonstratives' | 'tricky-verbs' | 'plurals-y' | 'used-to-would' | 'comparatives' | 'possessives' | 'possessive-adjectives' | 'present-simple-vs-continuous' | 'take-care-of' | 'look-vs-see' | 'comparatives-superlatives' | 'requests-instructions-pronouns' | 'phrasal-verbs-movement' | 'obligation-have-to' | 'data-handling-pronouns' | 'superlatives-tech' | 'future-plans-going-to' | 'future-will-vs-going-to' | null;


// DATA STRUCTURES FOR REUSABLE LESSONS
export interface QuickCheckData {
    question: string;
    correctAnswer: string;
    explanation: string;
    options?: string[];
    inputType?: 'text' | 'select';
}

export interface GrammarCardData {
    title: string;
    content: string[]; // Array of paragraphs, supports basic HTML for styling
    quickCheck?: QuickCheckData;
}

export interface VocabItem {
    word: string;
    translation: string;
    example: string;
}

export interface PhrasalVerbItem {
    verb: string;
    translation: string;
    example: string;
}

export interface KeyPhraseData {
    original: string;
    translation: string;
    techContext: string;
    pronunciationPractice?: boolean;
}

export interface ReadingData {
    title: string;
    text: string; // Supports basic HTML
    questions: string[];
}

export interface ListeningData {
    title: string;
    dialogueTurns: { speaker: string; line: string }[];
    correctAnswers: string[];
    dialogue: string; // Dialogue with __BLANK__ placeholders
}

export interface WritingData {
    title: string;
    scenario: string; // Supports basic HTML
    guidance?: {
        title: string;
        points: string[];
    } | string;
}

export interface LessonData {
    id: LessonId;
    title: string;
    description: string;
    introduction: {
        text: string;
        objectives: string[];
    };
    grammar: GrammarCardData[];
    keyPhrases?: KeyPhraseData[];
    keyWords?: VocabItem[];
    phrasalVerbs?: PhrasalVerbItem[];
    reading?: ReadingData;
    listening?: ListeningData;
    speaking?: {
        scenario: string;
    };
    writing?: WritingData;
    summary?: {
        points: string[];
    };
}

// For the new dynamic quiz feature
export interface QuizQuestion {
    questionText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

// FIX: Added missing type definitions for feedback from geminiService.
export interface ReadingAnswerFeedback {
  isCorrect: boolean;
  explanation: string;
}

export interface DebateFeedback {
  overallImpression: string;
  feedbackPoints: {
    category: 'Tone' | 'Grammar' | 'Clarity' | 'Diplomacy' | 'Suggestion';
    feedback: string;
  }[];
}

export interface ToneExample {
  tone: 'Informal' | 'Direct' | 'Diplomatic' | 'Formal';
  example: string;
}

export interface PronunciationFeedback {
  accuracy: 'Good' | 'Almost there' | 'Needs practice';
  tip: string;
}


// Centralized Web Speech API type definitions
export interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}
export interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}
export interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}
export interface SpeechRecognitionAlternative {
  readonly transcript: string;
}
export interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
}
export interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start(): void;
  stop(): void;
  abort(): void;
}
export interface SpeechRecognitionStatic {
  new (): SpeechRecognition;
}
declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionStatic;
    webkitSpeechRecognition: SpeechRecognitionStatic;
  }
}