import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../../types";
import { contentService } from "../../server/services/services";
import { SendIcon, LoadingIcon } from "../ui/icons/index";
import StudioGuide from "../ui/StudioGuide";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I'm your AI English assistant. Ask me anything about technical vocabulary, simulate an interview, or practice a code review.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage: ChatMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const systemInstruction = `You are a helpful AI assistant for programmers learning technical English.
      Your goal is to explain technical terms, phrasal verbs, and simulate professional conversations like interviews or code reviews.
      Keep your responses concise, clear, and contextually relevant to a software development environment.`;

      const botResponse = await contentService.sendMessage(
        input,
        systemInstruction,
        "FAST"
      );
      const botMessage: ChatMessage = { sender: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        sender: "bot",
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <StudioGuide title="Guía de Estudio: AI Chatbot">
        <div>
          <h3 className="font-semibold text-white">Objetivo:</h3>
          <p>
            Practicar conversaciones espontáneas y obtener explicaciones rápidas
            de términos técnicos.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Cómo usar:</h3>
          <ul className="list-disc list-inside">
            <li>Escribe cualquier pregunta sobre inglés para programadores.</li>
            <li>Pide definiciones (ej: "What does 'legacy code' mean?").</li>
            <li>
              Simula escenarios (ej: "Let's role-play a stand-up meeting.").
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Pro Tip:</h3>
          <p>
            Usa el chatbot para prácticas diarias y rápidas. Esto te ayudará a
            construir confianza sin presión.
          </p>
        </div>
      </StudioGuide>
      <div className="flex flex-col flex-1 h-full bg-primary-medium rounded-xl border border-primary-light shadow-2xl">
        <div className="p-4 border-b border-primary-light">
          <h2 className="text-xl font-semibold text-white">AI Chatbot</h2>
          <p className="text-sm text-gray-400">
            Practice real-world tech conversations
          </p>
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-white font-bold flex-shrink-0">
                  AI
                </div>
              )}
              <div
                className={`max-w-md lg:max-w-xl px-4 py-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-accent-yellow text-dark-text rounded-br-none"
                    : "bg-primary-light text-light-text rounded-bl-none"
                }`}
              >
                <p className="text-sm" style={{ whiteSpace: "pre-wrap" }}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-white font-bold flex-shrink-0 animate-pulse">
                AI
              </div>
              <div className="px-4 py-3 rounded-2xl bg-primary-light">
                <LoadingIcon />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-primary-light bg-primary-medium rounded-b-xl">
          <div className="flex items-center bg-primary-dark rounded-lg p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me to explain 'to refactor'..."
              className="flex-1 bg-transparent text-light-text placeholder-gray-500 focus:outline-none px-2"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-md bg-accent-pink text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
