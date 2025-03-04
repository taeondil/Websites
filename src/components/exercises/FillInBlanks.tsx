import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface FillInBlanksProps {
  exercise: {
    question: string;
    answer: string;
  };
  onCorrect: () => void;
  onWrong: () => void;
  isAnswered: boolean;
}

export function FillInBlanks({ exercise, onCorrect, onWrong, isAnswered }: FillInBlanksProps) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim() || showResult || isAnswered) return;
    
    const isCorrect = answer.toLowerCase().trim() === exercise.answer.toLowerCase().trim();
    setShowResult(true);
    
    if (isCorrect) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-white">{exercise.question}</h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={answer}
          onChange={(e) => !showResult && !isAnswered && setAnswer(e.target.value)}
          disabled={showResult || isAnswered}
          className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/40 
                   focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          placeholder="Cevabınızı yazın..."
        />

        {(showResult || isAnswered) && (
          <div className={`flex items-center space-x-2 ${
            answer.toLowerCase().trim() === exercise.answer.toLowerCase().trim()
              ? 'text-emerald-400'
              : 'text-red-400'
          } p-4 rounded-xl ${
            answer.toLowerCase().trim() === exercise.answer.toLowerCase().trim()
              ? 'bg-emerald-500/10'
              : 'bg-red-500/10'
          }`}>
            <Check className="w-5 h-5" />
            <span>
              {answer.toLowerCase().trim() === exercise.answer.toLowerCase().trim()
                ? 'Doğru cevap!'
                : `Yanlış cevap. Doğru cevap: ${exercise.answer}`}
            </span>
          </div>
        )}

        {!showResult && !isAnswered && (
          <button
            type="submit"
            disabled={!answer.trim()}
            className="w-full p-4 rounded-xl bg-emerald-500 text-white font-medium 
                     hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed 
                     transition-all duration-300"
          >
            Kontrol Et
          </button>
        )}
      </form>
    </div>
  );
}