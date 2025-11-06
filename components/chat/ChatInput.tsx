import React, { memo } from "react"; // Importar memo
// ...
export const ChatInput = memo(({ input, isLoading, onInputChange, onSendMessage, onKeyPress }) => { // Envolver en memo
  return (
    <div className="p-4 border-t border-primary-light bg-primary-medium rounded-b-xl">
      <div className="flex items-center bg-primary-dark rounded-lg p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder={CHAT_CONSTANTS.PLACEHOLDERS.INPUT}
          className="flex-1 bg-transparent text-light-text placeholder-gray-500 focus:outline-none px-2"
          disabled={isLoading}
        />
        <button
          onClick={onSendMessage}
          disabled={isLoading || !input.trim()}
          className="p-2 rounded-md bg-accent-pink text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};