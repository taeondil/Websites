import React, { useState, useMemo } from 'react';
import { useWordStore } from '../../../store/wordStore';
import { useTestStore } from '../../../store/testStore';

function MultipleChoice({ word }) {
  const { words } = useWordStore();
  const { currentQuestionIndex, nextQuestion, addPoint } = useTestStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const options = useMemo(() => {
    const otherDefinitions = words
      .filter(w => w.id !== word.id)
      .map(w => w.definition)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    return [...otherDefinitions, word.definition]
      .sort(() => Math.random() - 0.5);
  }, [word, words]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === word.definition) {
      addPoint();
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setShowResult(false);
      nextQuestion();
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-2">{word.term}</h3>
        <p className="text-white/60">Doğru tanımı seçin</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            className={`p-4 rounded-xl text-left transition-all duration-300 ${
              showResult
                ? option === word.definition
                  ? 'bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500'
                  : option === selectedAnswer
                    ? 'bg-red-500/20 text-red-400 ring-2 ring-red-500'
                    : 'bg-indigo-900/30 text-white/60'
                : 'bg-indigo-900/30 hover:bg-indigo-800/40 text-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MultipleChoice;