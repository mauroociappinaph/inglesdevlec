import React, { useState, memo, useEffect } from 'react';
import { ChatMessage as ChatMessageType } from '../../types';
import { CopyIcon } from '../ui/icons';
import { Toast } from '../ui/Toast';

interface ChatMessageProps {
  message: ChatMessageType;
  isLastMessage: boolean;
}

export const ChatMessage = memo<ChatMessageProps>(({ message, isLastMessage }) => {
  const isUser = message.sender === 'user';
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setShowToast(true);
    } catch (err) {
      console.error('Failed to copy message:', err);
      // Aquí podrías mostrar un toast de error
      setShowToast(true);
    }
  };

  return (
    <>
      <div className={`flex items-end gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-accent-pink flex items-center justify-center text-white font-bold flex-shrink-0">
            AI
          </div>
        )}
        <div
          className={`group relative max-w-md lg:max-w-xl px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-accent-yellow text-dark-text rounded-br-none'
              : 'bg-primary-light text-light-text rounded-bl-none'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
          {!isUser && (
            <button
              onClick={handleCopy}
              disabled={copied}
              className={`absolute top-1 right-1 p-1 rounded-md bg-primary-dark/50 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                copied ? 'opacity-100 !bg-green-600 text-white' : ''
              }`}
              aria-label="Copy message"
              title="Copy message"
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <CopyIcon />
              )}
            </button>
          )}
        </div>
      </div>

      {showToast && <Toast message="Message copied!" onClose={() => setShowToast(false)} />}
    </>
  );
});

ChatMessage.displayName = 'ChatMessage';
