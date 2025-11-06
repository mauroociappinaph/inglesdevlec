import { useState, useRef, useEffect, useCallback } from "react";
import { ChatMessage } from "../types";
import { contentService } from "../server/services/services";
import { CHAT_CONSTANTS } from "../constants/chat";

interface UseChatbotReturn {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  setInput: (value: string) => void;
  handleSend: () => Promise<void>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  clearChat: () => void; // Nueva función
}

export const useChatbot = (): UseChatbotReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    CHAT_CONSTANTS.INITIAL_MESSAGE,
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

    try {
      const systemInstruction = CHAT_CONSTANTS.SYSTEM_INSTRUCTION;

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
  }, [input, isLoading]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }, [handleSend]);

  const clearChat = useCallback(() => { // Nueva función
    setMessages([CHAT_CONSTANTS.INITIAL_MESSAGE]);
    setInput("");
    setIsLoading(false);
  }, []);

  return {
    messages,
    input,
    isLoading,
    messagesEndRef,
    setInput,
    handleSend,
    handleKeyPress,
    clearChat, // Exportar la nueva función
  };