import { Type } from "@google/genai";

export const BOOLEAN_FEEDBACK_SCHEMA = {
    type: Type.OBJECT,
    properties: {
      isCorrect: { type: Type.BOOLEAN },
      explanation: { type: Type.STRING }
    },
    required: ["isCorrect", "explanation"]
};

export const DEBATE_FEEDBACK_SCHEMA = {
    type: Type.OBJECT,
    properties: {
      overallImpression: { type: Type.STRING },
      feedbackPoints: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            category: { 
              type: Type.STRING, 
              enum: ["Tone", "Grammar", "Clarity", "Diplomacy", "Suggestion"] 
            },
            feedback: { type: Type.STRING }
          },
          required: ["category", "feedback"]
        }
      }
    },
    required: ["overallImpression", "feedbackPoints"]
};

export const PRONUNCIATION_SCHEMA = {
    type: Type.OBJECT,
    properties: {
      accuracy: { 
        type: Type.STRING, 
        enum: ["Good", "Almost there", "Needs practice"] 
      },
      tip: { type: Type.STRING }
    },
    required: ["accuracy", "tip"]
};
