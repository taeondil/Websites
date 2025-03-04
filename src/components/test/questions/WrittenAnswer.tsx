import React, { useState } from 'react';
import { useWordStore } from '../../../store/wordStore';
import { useTestStore } from '../../../store/testStore';
import { Check, X, Sparkles } from 'lucide-react';
import { UnifiedKeyboard } from '../keyboards/UnifiedKeyboard';
import { QuestionHeader } from './QuestionHeader';
import { ResultMessage } from './ResultMessage';

function WrittenAnswer({ word }) {
  const { words } = useWordStore();
  const { currentQuestionIndex, nextQuestion, addPoint, remainingTime } = useTestStore();
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleKeyboardInput = (key: string) => {
    if (!showResult) {
      setInputValue(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    if (!showResult) {
      setInputValue(prev => prev.slice(0, -1));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showResult) {
      setInputValue(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || showResult) return;
    
    const isAnswerCorrect = inputValue.toLowerCase().trim() === word.definition.toLowerCase().trim();
    setIsCorrect(isAnswerCorrect);
    setShowResult(true);

    if (isAnswerCorrect) {
      addPoint();
    }

    setTimeout(() => {
      setInputValue('');
      setShowResult(false);
      nextQuestion();
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 animate-fade-in">
      <QuestionHeader score={0} remainingTime={remainingTime} />

      <div className="bg-white/10 rounded-2xl p-8 text-center mb-8">
        <h2 className="text-4xl font-bold text-white">{word.term}</h2>
        <p className="text-white/60 mt-2">Yukarıdaki kelimenin fonetik yazılışını tahmin edin</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
            disabled={showResult}
            className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/40 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-center text-xl"
            placeholder="Fonetik yazılışı buraya gelecek..."
          />
        </div>
        
        <div className="space-y-6">
          <div className="animate-fade-in">
            <h4 className="text-center text-white/80 mb-4">Karakterler</h4>
            <UnifiedKeyboard onKeyClick={handleKeyboardInput} onBackspace={handleBackspace} />
          </div>
        </div>

        {showResult && (
          <ResultMessage isCorrect={isCorrect} correctAnswer={word.definition} />
        )}

        {!showResult && (
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-full p-4 rounded-xl bg-indigo-500 text-white font-medium 
                     hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed 
                     transition-all duration-300"
          >
            Kontrol Et
          </button>
        )}
      </form>
    </div>
  );
}

export default WrittenAnswer;