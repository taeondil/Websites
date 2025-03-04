import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface TrueFalseProps {
  exercise: {
    question: string;
    answer: boolean;
  };
  onCorrect: () => void;
  onWrong: () => void;
  isAnswered: boolean;
}

export function TrueFalse({ exercise, onCorrect, onWrong, isAnswered }: TrueFalseProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: boolean) => {
    if (showResult || isAnswered) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === exercise.answer) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-white">{exercise.question}</h4>
      
      <div className="flex space-x-4">
        {[true, false].map((option) => (
          <button
            key={option.toString()}
            onClick={() => handleAnswer(option)}
            disabled={showResult || isAnswered}
            className={`flex-1 p-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 ${
              showResult || isAnswered
                ? option === exercise.answer
                  ? 'bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500'
                  : option === selectedAnswer
                    ? 'bg-red-500/20 text-red-400 ring-2 ring-red-500'
                    : 'bg-white/10 text-white/60'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            {option ? (
              <Check className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
            <span>{option ? 'Doğru' : 'Yanlış'}</span>
          </button>
        ))}
      </div>
    </div>
  );
}