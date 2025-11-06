import React, { memo } from "react"; // Importar memo
import { XCircleIcon } from "../ui/icons";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = memo<ErrorMessageProps>(({ message }) => { // Envolver en memo
  return (
    <div className="flex items-center justify-center p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-300 text-sm">
      <XCircleIcon className="w-5 h-5 mr-2" />
      <span>{message}</span>
    </div>
  );
};