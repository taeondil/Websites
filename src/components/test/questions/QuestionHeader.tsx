import React from 'react';
import { Sparkles } from 'lucide-react';

interface QuestionHeaderProps {
  score: number;
  remainingTime: number | null;
}

export function QuestionHeader({ score, remainingTime }: QuestionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Sparkles className="w-6 h-6 text-indigo-400" />
        <h3 className="text-3xl font-bold text-white">Fonetik Tahmin</h3>
      </div>
      <div className="flex items-center justify-center space-x-4 text-white/60">
        <span>Skor: {score}</span>
        {remainingTime !== null && <span>Süre: {remainingTime}s</span>}
      </div>
    </div>
  );
}