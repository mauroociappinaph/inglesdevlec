export const buildComplexExplanationPrompt = (topic: string) => `
Explain "${topic}" clearly for a B2-level programmer.
Use analogies, simple code examples, and break down complex concepts.
`;

export const buildGrammarExplanationPrompt = (topic: string) => `
Provide a detailed explanation of "${topic}" for professional English.
Include formality levels, punctuation rules, and workplace examples.
Format with markdown.
`;

export const buildDebateScenarioPrompt = () => `
Create a 1-2 sentence workplace scenario requiring diplomatic response.
Vary context (code reviews, architecture, planning) and formality.
Return only the scenario.
`;

export const buildInterviewQuestionPrompt = () => `
Generate one concise software developer interview question (behavioral or technical).
Return only the question.
`;

export const buildToneExamplesPrompt = () => `
Generate 4 examples of disagreeing with a risky framework choice.
One for each tone: Informal, Direct, Diplomatic, Formal.
`;

export const buildQuickHelpPrompt = (text: string) => `
For "${text}" provide:
1. **Translation:** Spanish
2. **Definition:** Simple English
3. **Example:** Software context

Format with markdown.
`;
