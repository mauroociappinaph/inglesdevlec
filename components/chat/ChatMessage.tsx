import React from "react";
import { ChatMessage as ChatMessageType } from "../../types"; // Renombrar para evitar conflicto

interface ChatMessageProps {
  message: ChatMessageType;
  isLastMessage: boolean; // Para el scroll
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLastMessage }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && ( // Mostrar el avatar del bot solo si es un mensaje del bot
        <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-white font-bold flex-shrink-0">
          AI
        </div>
      )}
      <div
        className={`max-w-md lg:max-w-xl px-4 py-3 rounded-2xl ${
          isUser
            ? "bg-accent-yellow text-dark-text rounded-br-none"
            : "bg-primary-light text-light-text rounded-bl-none"
        }`}
      >
        <p className="text-sm" style={{ whiteSpace: "pre-wrap" }}>
          {message.text}
        </p>
      </div>
      {isLastMessage && <div />} {/* Placeholder para el scroll, se manejará en el componente padre */}
    </div>
  );
};