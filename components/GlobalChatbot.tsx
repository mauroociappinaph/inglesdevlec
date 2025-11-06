

import React, { useState, useRef, useEffect } from 'react';
// FIX: Corrected the import path for icons.
import { ChatIcon, SendIcon, LoadingIcon, XCircleIcon as CloseIcon } from './icons/index';
// FIX: getQuickHelp is not exported directly. It is part of contentService.
// FIX: Corrected import path for geminiService.
import { contentService } from '../backend/services';
import { ChatMessage } from '../types';

const GlobalChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if(isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);
    
    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setMessages([{ sender: 'bot', text: "Need a quick translation or an example? Just type a word or phrase below!"}]);
        }
    }, [isOpen, messages.length]);


    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // FIX: getQuickHelp is not exported directly. It is part of contentService.
            const botResponse = await contentService.getQuickHelp(input);
            const botMessage: ChatMessage = { sender: 'bot', text: botResponse };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error getting quick help:", error);
            const errorMessage: ChatMessage = { sender: 'bot', text: "Sorry, I'm having trouble connecting." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };
    
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-accent-pink text-white p-4 rounded-full shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-accent-yellow transition-transform transform hover:scale-110 z-50"
                aria-label="Toggle Quick Help Chat"
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-primary-medium rounded-xl shadow-2xl border border-primary-light flex flex-col animate-fade-in z-50">
                    <div className="p-4 border-b border-primary-light">
                        <h2 className="text-lg font-semibold text-white">Quick Help</h2>
                        <p className="text-sm text-gray-400">Translate & Get Examples</p>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                         {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs px-3 py-2 rounded-xl prose prose-invert prose-sm ${msg.sender === 'user' ? 'bg-accent-yellow text-dark-text rounded-br-none' : 'bg-primary-light text-light-text rounded-bl-none'}`}
                                 dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2 justify-start">
                                <div className="px-3 py-2 rounded-xl bg-primary-light">
                                    <LoadingIcon />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-2 border-t border-primary-light">
                        <div className="flex items-center bg-primary-dark rounded-lg p-1">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="e.g., legacy code"
                                className="flex-1 bg-transparent text-light-text placeholder-gray-500 focus:outline-none px-2 text-sm"
                                disabled={isLoading}
                                autoFocus
                            />
                            <button onClick={handleSend} disabled={isLoading || !input.trim()} className="p-2 rounded-md bg-accent-pink text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors">
                                <SendIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GlobalChatbot;