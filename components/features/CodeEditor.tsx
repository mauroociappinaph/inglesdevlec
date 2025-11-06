import React, { useState } from 'react';
import { contentService } from '../../backend/services';
import { LoadingIcon, SparklesIcon } from '../ui/icons/index';
import StudioGuide from '../ui/StudioGuide';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState(
`// Write some code here and get feedback on your comments!
function calculateTotal(items) {
  // this function will adding all items price
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    // adding item price to total
    total += items[i].price;
  }
  return total;
}`
  );
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetFeedback = async () => {
    setIsLoading(true);
    setFeedback('');
    try {
      const prompt = `
        As an expert in technical English for programmers, please review the following code. 
        Focus ONLY on the English used in comments and function/variable names. 
        Provide clear, concise feedback on how to improve the grammar, clarity, and style to be more professional.
        Suggest better alternatives for any awkward phrasing.
        Format your feedback as a list of suggestions.
        
        Code to review:
        \`\`\`
        ${code}
        \`\`\`
      `;
      const response = await contentService.sendMessage(prompt, '', 'FAST');
      setFeedback(response);
    } catch (error) {
      console.error("Failed to get feedback:", error);
      setFeedback("Sorry, an error occurred while generating feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
        <StudioGuide title="Guía de Estudio: Code Editor">
            <div>
                <h3 className="font-semibold text-white">Objetivo:</h3>
                <p>Aprender a escribir comentarios y nombres de variables/funciones claros, profesionales y gramaticalmente correctos.</p>
            </div>
            <div>
                <h3 className="font-semibold text-white">Cómo usar:</h3>
                <ul className="list-disc list-inside">
                    <li>Escribe un bloque de código con comentarios explicando su función.</li>
                    <li>Enfócate en explicar el "porqué", no solo el "qué".</li>
                    <li>Pide "Feedback" para recibir sugerencias y mejorar tu escritura técnica.</li>
                </ul>
            </div>
             <div>
                <h3 className="font-semibold text-white">Pro Tip:</h3>
                <p>Los buenos comentarios son para otros desarrolladores, no solo para ti. Practica como si le explicaras tu código a un nuevo miembro del equipo.</p>
            </div>
        </StudioGuide>
        <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="flex-1 flex flex-col">
            <h1 className="text-3xl font-bold text-white mb-2">Code Editor</h1>
            <p className="text-lg text-gray-400 mb-4">Get AI feedback on your technical English in code.</p>
            <div className="flex-1 flex flex-col bg-primary-medium rounded-xl border border-primary-light">
            <div className="bg-primary-dark p-2 rounded-t-xl border-b border-primary-light text-sm text-gray-400">
                / / your-code.js
            </div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full flex-1 p-4 bg-transparent text-light-text font-mono text-sm focus:outline-none resize-none"
                spellCheck="false"
            />
            </div>
            <button
            onClick={handleGetFeedback}
            disabled={isLoading}
            className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md transition disabled:bg-gray-600"
            >
            {isLoading ? <LoadingIcon /> : <SparklesIcon />}
            <span className="ml-2">{isLoading ? 'Getting Feedback...' : 'Get Feedback'}</span>
            </button>
        </div>

        <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-6 pt-16">AI Feedback</h2>
            <div className="flex-1 p-6 bg-primary-medium rounded-xl border border-primary-light overflow-y-auto">
            {feedback ? (
                <div className="prose prose-invert prose-sm max-w-none" style={{ whiteSpace: 'pre-wrap' }}>
                    {feedback}
                </div>
            ) : (
                <div className="text-gray-500 text-center pt-10">
                <p>Your feedback will appear here.</p>
                </div>
            )}
            </div>
        </div>
        </div>
    </div>
  );
};

export default CodeEditor;
