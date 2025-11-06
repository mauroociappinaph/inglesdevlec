import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "../types";
import { contentService } from "../server/services/services";
import { CHAT_CONSTANTS } from "../constants/chat";

const CHAT_HISTORY_KEY = "chatbotHistory";
const MAX_MESSAGES_TO_PERSIST = 50; // Límite de mensajes a guardar

interface UseChatbotReturn {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  error: string | null; // Nuevo estado de error
  messagesEndRef: React.RefObject<HTMLDivElement>;
  setInput: (value: string) => void;
  handleSend: () => Promise<void>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  clearChat: () => void;
}

export const useChatbot = (): UseChatbotReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    // Cargar historial desde localStorage al inicializar
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
      if (savedHistory) {
        try {
          const parsedHistory: ChatMessage[] = JSON.parse(savedHistory);
          // Asegurarse de que el primer mensaje sea el inicial del bot si el historial está vacío o corrupto
          if (parsedHistory.length === 0 || parsedHistory[0].sender !== "bot") {
            return [CHAT_CONSTANTS.INITIAL_MESSAGE];
          }
          return parsedHistory;
        } catch (e) {
          console.error("Failed to parse chat history from localStorage", e);
          return [CHAT_CONSTANTS.INITIAL_MESSAGE];
        }
      }
    }
    return [CHAT_CONSTANTS.INITIAL_MESSAGE];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Nuevo estado de error
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Guardar historial en localStorage cada vez que los mensajes cambian
  useEffect(() => {
    if (typeof window !== "undefined") {
      const historyToSave = messages.slice(Math.max(messages.length - MAX_MESSAGES_TO_PERSIST, 0));
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(historyToSave));
    }
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage: ChatMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null); // Limpiar errores anteriores al enviar un nuevo mensaje

    try {
      const systemInstruction = CHAT_CONSTANTS.SYSTEM_INSTRUCTION;

      const botResponse = await contentService.sendMessage(
        input,
        systemInstruction,
        "FAST"
      );
      const botMessage: ChatMessage = { sender: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Sorry, I'm having trouble connecting. Please try again later."); // Establecer el error
      // No añadir un mensaje de error al chat aquí, se mostrará con el componente ErrorMessage
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }, [handleSend]);

  const clearChat = useCallback(() => {
    setMessages([CHAT_CONSTANTS.INITIAL_MESSAGE]);
    setInput("");
    setIsLoading(false);
    setError(null); // Limpiar el error al limpiar el chat
  }, []);

  return {
    messages,
    input,
    isLoading,
    error, // Exportar el estado de error
    messagesEndRef,
    setInput,
    handleSend,
    handleKeyPress,
    clearChat,
  };