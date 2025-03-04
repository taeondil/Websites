import React from 'react';
import { Check, X } from 'lucide-react';

interface ResultMessageProps {
  isCorrect: boolean;
  correctAnswer: string;
}

export function ResultMessage({ isCorrect, correctAnswer }: ResultMessageProps) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${
      isCorrect ? 'text-emerald-400' : 'text-red-400'
    } p-4 rounded-xl ${
      isCorrect ? 'bg-emerald-500/10' : 'bg-red-500/10'
    }`}>
      {isCorrect ? <Check size={20} /> : <X size={20} />}
      <span>{isCorrect ? 'Doğru!' : `Doğru cevap: ${correctAnswer}`}</span>
    </div>
  );
}