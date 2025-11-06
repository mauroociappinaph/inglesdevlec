import { QuizService } from './ai/quiz/QuizService';
import { FeedbackService } from './ai/feedback/FeedbackService';
import { ContentService } from './ai/content/ContentService';
import { AudioService } from './ai/audio/AudioService';
import { AnalyzerService } from './ai/analyzer/AnalyzerService';

export const quizService = new QuizService();
export const feedbackService = new FeedbackService();
export const contentService = new ContentService();
export const audioService = new AudioService();
export const analyzerService = new AnalyzerService();
