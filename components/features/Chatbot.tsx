import React from "react";
import { SendIcon, LoadingIcon } from "../ui/icons/index";
import StudioGuide from "../ui/StudioGuide";
import { ChatInput } from "../chat/ChatInput"; // Importar el nuevo componente ChatInput // Importar el nuevo componente ChatMessage
import { CHAT_CONSTANTS } from "../../constants/chat"; // Importar constantes

const Chatbot: React.FC = () => {
  const {
    messages,
    input,
    isLoading,
    messagesEndRef,
    setInput,
    handleSend,
    handleKeyPress,
  } = useChatbot(); // Usar el hook

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
            <ChatMessage
              key={index}
              message={msg}
              isLastMessage={index === messages.length - 1}
            />
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
        <ChatInput // Usar el nuevo componente ChatInput
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSendMessage={handleSend}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Chatbot;
