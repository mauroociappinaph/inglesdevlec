import express from 'express';
import cors from 'cors';
import { quizService, feedbackService } from './services';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/api/quiz', async (req, res) => {
  try {
    const { topic, level } = req.body;
    const quiz = await quizService.generateModuleQuiz(topic, level);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

app.post('/api/feedback/interview', async (req, res) => {
  try {
    const { question, answer } = req.body;
    const feedback = await feedbackService.getInterviewFeedback(question, answer);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get interview feedback' });
  }
});

app.post('/api/feedback/speaking', async (req, res) => {
  try {
    const { scenario, transcribedText } = req.body;
    const feedback = await feedbackService.getSpeakingFeedback(scenario, transcribedText);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get speaking feedback' });
  }
});

app.post('/api/feedback/pronunciation', async (req, res) => {
  try {
    const { phrase, textToAnalyze } = req.body;
    const feedback = await feedbackService.getPronunciationFeedback(phrase, textToAnalyze);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get pronunciation feedback' });
  }
});

app.post('/api/feedback/debate', async (req, res) => {
  try {
    const { scenario, response } = req.body;
    const feedback = await feedbackService.getDebateFeedback(scenario, response);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get debate feedback' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
