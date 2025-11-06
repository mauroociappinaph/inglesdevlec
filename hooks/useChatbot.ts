import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "../types";
import { contentService } from "../server/services/services";
import { CHAT_CONSTANTS } from "../constants/chat";

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
  const [messages, setMessages] = useState<ChatMessage[]>([
    CHAT_CONSTANTS.INITIAL_MESSAGE,
  ]);
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