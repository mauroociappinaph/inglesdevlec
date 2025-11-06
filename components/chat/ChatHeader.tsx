import React, { memo } from "react"; // Importar memo
import { XIcon } from "../ui/icons"; // Importar XIcon

interface ChatHeaderProps {
  title: string;
  subtitle: string;
  onClearChat: () => void; // Nuevo prop
}

export const ChatHeader = memo<ChatHeaderProps>(({ title, subtitle, onClearChat }) => { // Envolver en memo
  return (
    <div className="flex items-center justify-between p-4 border-b border-primary-light"> {/* Añadido justify-between */}
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
      <button
        onClick={onClearChat}
        className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-primary-light transition-colors"
        aria-label="Clear chat"
        type="button"
      >
        <XIcon />
      </button>
    </div>
  );
};