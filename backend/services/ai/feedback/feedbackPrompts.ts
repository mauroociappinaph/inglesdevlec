import { sanitizeText } from '../../../utils';

export function buildGenericFeedbackPrompt(type: "writing" | "speaking" | "interview", context: string, response: string): string {
    const prompts = {
      writing: `Analyze this written response for grammar, clarity, vocabulary, and task completion.`,
      speaking: `Analyze this spoken response for pronunciation, fluency, and natural phrasing.`,
      interview: `Evaluate STAR method usage, confidence, technical accuracy, and professionalism.`
    };

    return `
As an expert English coach for developers, ${prompts[type]}
Provide actionable feedback with specific improvements. Use markdown formatting.

Context: "${sanitizeText(context)}"
User Response: "${response}"
`;
}

export function buildReadingAnswerPrompt(contextText: string, question: string, userAnswer: string): string {
    return `
Evaluate if this answer is correct based on the context (be flexible with grammar for B1-B2 learners).

Context: "${sanitizeText(contextText)}"
Question: "${question}"
User Answer: "${userAnswer}"
`;
}

export function buildDebateFeedbackPrompt(scenario: string, userResponse: string): string {
    return `
Analyze this response for tone, clarity, grammar, and diplomacy in a professional context.

Scenario: "${sanitizeText(scenario)}"
Response: "${userResponse}"
`;
}

export function buildPronunciationFeedbackPrompt(originalPhrase: string, userAttempt: string): string {
     return `
Compare pronunciation accuracy between original and user's phonetic attempt. Provide a simple 'accuracy' rating ('Good', 'Almost there', 'Needs practice') and one constructive 'tip'.

Original: "${originalPhrase}"
Attempt: "${userAttempt}"
`;
}
