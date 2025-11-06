import React, { useState } from 'react';
import { analyzerService } from '../../backend/services';
import { UploadIcon, LinkIcon, LoadingIcon, SparklesIcon } from '../ui/icons/index';
import StudioGuide from '../ui/StudioGuide';

const DocumentationAnalyzer: React.FC = () => {
  const [documentContent, setDocumentContent] = useState('');
  const [analysis, setAnalysis] = useState<{ summary: string; vocab: { term: string; definition: string }[], examples: string[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setDocumentContent(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleAnalyze = async () => {
    if (!documentContent.trim()) {
      setError('Please upload a file or paste content to analyze.');
      return;
    }
    setIsLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const result = await analyzerService.analyzeDocument(documentContent);
      setAnalysis(result);
    } catch (err) {
      console.error("Analysis failed:", err);
      setError('Failed to analyze the document. The content might be too complex or the service is unavailable.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <StudioGuide title="Guía de Estudio: Docs Analyzer">
            <div>
                <h3 className="font-semibold text-white">Objetivo:</h3>
                <p>Mejorar tu comprensión lectora y vocabulario técnico analizando documentación real.</p>
            </div>
            <div>
                <h3 className="font-semibold text-white">Cómo usar:</h3>
                <ul className="list-disc list-inside">
                    <li>Busca documentación técnica online (ej: de React, Docker, o una librería que uses).</li>
                    <li>Pega el texto o sube el archivo.</li>
                    <li>Haz clic en "Analyze" para obtener un resumen, vocabulario clave y ejemplos.</li>
                </ul>
            </div>
             <div>
                <h3 className="font-semibold text-white">Pro Tip:</h3>
                <p>Analiza documentación de una tecnología que estés aprendiendo. Esto refuerza tus habilidades técnicas y de inglés al mismo tiempo.</p>
            </div>
        </StudioGuide>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Documentation Analyzer</h1>
      <p className="text-lg text-gray-400 mb-8">Upload or paste documentation to get summaries, key vocabulary, and examples.</p>
      
      <div className="bg-primary-medium p-6 rounded-xl border border-primary-light shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">Input Document</h2>
        <textarea
          value={documentContent}
          onChange={(e) => setDocumentContent(e.target.value)}
          placeholder="Paste your documentation here..."
          className="w-full h-48 p-4 bg-primary-dark border border-primary-light rounded-md text-light-text font-mono text-sm focus:ring-2 focus:ring-accent-yellow focus:outline-none"
        />
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
          <label className="flex-1 w-full sm:w-auto cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-primary-light hover:bg-gray-600 text-white rounded-md transition">
            <UploadIcon />
            <span className="ml-2">Upload File</span>
            <input type="file" className="hidden" onChange={handleFileChange} accept=".txt,.md,.html" />
          </label>
          <button 
            onClick={handleAnalyze} 
            disabled={isLoading || !documentContent.trim()}
            className="flex-1 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md transition disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? <LoadingIcon /> : <SparklesIcon />}
            <span className="ml-2">{isLoading ? 'Analyzing...' : 'Analyze Document'}</span>
          </button>
        </div>
        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>

      {analysis && (
        <div className="mt-8 bg-primary-medium p-6 rounded-xl border border-primary-light animate-fade-in">
          <h2 className="text-2xl font-semibold text-white mb-6">Analysis Results</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-accent-pink mb-3">Summary</h3>
            <p className="text-light-text whitespace-pre-wrap">{analysis.summary}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-accent-pink mb-3">Key Vocabulary</h3>
            <ul className="space-y-3">
              {analysis.vocab.map((v, i) => (
                <li key={i} className="p-3 bg-primary-dark/50 rounded-md border border-primary-light">
                  <strong className="text-white">{v.term}:</strong> 
                  <span className="text-gray-400 ml-2">{v.definition}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-accent-pink mb-3">Usage Examples</h3>
             <div className="p-4 bg-primary-dark/50 rounded-md border border-primary-light font-mono text-sm text-accent-yellow whitespace-pre-wrap">
                {analysis.examples.join('\n\n')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentationAnalyzer;
