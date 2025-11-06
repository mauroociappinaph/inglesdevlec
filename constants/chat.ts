export const CHAT_CONSTANTS = {
  SYSTEM_INSTRUCTION: `You are a helpful AI assistant for programmers learning technical English.
      Your goal is to explain technical terms, phrasal verbs, and simulate professional conversations like interviews or code reviews.
      Keep your responses concise, clear, and contextually relevant to a software development environment.`,
  INITIAL_MESSAGE: {
    sender: "bot" as const,
    text: "Hello! I'm your AI English assistant. Ask me anything about technical vocabulary, simulate an interview, or practice a code review.",
  },
  PLACEHOLDERS: {
    INPUT: "Ask me to explain 'to refactor'...",
  },
};