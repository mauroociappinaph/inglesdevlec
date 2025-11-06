import { Type } from "@google/genai";

export const QUIZ_SCHEMA = {
    type: Type.OBJECT,
    properties: {
      quiz: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            questionText: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["questionText", "options", "correctAnswer", "explanation"]
        }
      }
    },
    required: ["quiz"]
};
