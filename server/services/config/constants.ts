// Access the API key from the global window object set by config.js
export const API_KEY = (window as any).APP_CONFIG?.API_KEY;

if (!API_KEY || API_KEY.includes("PASTE_YOUR_GEMINI_API_KEY_HERE") || API_KEY.includes("PEGA_AQUÍ_TU_CLAVE_DE_API_DE_GEMINI")) {
  throw new Error("API_KEY is not configured. Please create a config.js file and add your Gemini API key. See README.md for instructions.");
}


export const MODELS = {
  FAST: "gemini-2.5-flash",
  PRO: "gemini-2.5-pro",
  TTS: "gemini-2.5-flash-preview-tts",
} as const;

export const CONFIG = {
  THINKING_BUDGET: 32768,
  CACHE_TTL_MS: 30_000,
  QUIZ_QUESTION_COUNT: 5,
  TONE_OPTIONS_COUNT: 4,
} as const;