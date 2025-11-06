import React from "react";

interface ChatHeaderProps {
  title: string;
  subtitle: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="p-4 border-b border-primary-light">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};