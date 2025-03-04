import React, { useState } from 'react';

interface MultipleChoiceProps {
  exercise: {
    question: string;
    options?: string[];
    answer: string;
  };
  onCorrect: () => void;
  onWrong: () => void;
  isAnswered: boolean;
}

export function MultipleChoice({ exercise, onCorrect, onWrong, isAnswered }: MultipleChoiceProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
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
      
      <div className="space-y-3">
        {exercise.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={showResult || isAnswered}
            className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
              showResult || isAnswered
                ? option === exercise.answer
                  ? 'bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500'
                  : option === selectedAnswer
                    ? 'bg-red-500/20 text-red-400 ring-2 ring-red-500'
                    : 'bg-white/10 text-white/60'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}