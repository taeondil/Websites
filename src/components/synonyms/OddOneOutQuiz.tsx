import React, { useState, useMemo } from 'react';
import { useSynonymStore } from '../../store/synonymStore';
import { Trophy, Target, BarChart3 } from 'lucide-react';

export function OddOneOutQuiz() {
  const { 
    words,
    currentQuestionIndex,
    score,
    generateOddOneOutQuestion,
    nextQuestion,
    addPoint,
    endQuiz
  } = useSynonymStore();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Memoize question to prevent re-shuffling on each render
  const question = useMemo(() => generateOddOneOutQuestion(), [currentQuestionIndex, words]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === question.oddOne;
    if (isCorrect) {
      addPoint();
    }

    setTimeout(() => {
      if (currentQuestionIndex < words.length - 1) {
        setSelectedAnswer(null);
        setShowResult(false);
        nextQuestion();
      } else {
        setIsQuizComplete(true);
      }
    }, 1500);
  };

  if (isQuizComplete || currentQuestionIndex >= words.length) {
    const percentage = Math.round((score / words.length) * 100);
    
    return (
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-emerald-500/20 rounded-full mb-4">
            <Trophy className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Quiz Tamamlandı!</h2>
          <p className="text-xl font-medium text-emerald-400">
            Başarı: {percentage}%
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">{score}</div>
            <div className="text-white/60 text-sm">Doğru Cevap</div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">{words.length}</div>
            <div className="text-white/60 text-sm">Toplam Soru</div>
          </div>
        </div>

        <button
          onClick={() => {
            setIsQuizComplete(false);
            endQuiz();
          }}
          className="w-full p-4 rounded-xl bg-emerald-500 text-white font-medium 
                   hover:bg-emerald-600 transition-all duration-300"
        >
          Yeni Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-2">{question.word}</h3>
        <p className="text-white/60">Farklı olanı bulun</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={`${currentQuestionIndex}-${index}`}
            onClick={() => handleAnswer(option)}
            disabled={showResult}
            className={`p-4 rounded-xl text-left transition-all duration-300 ${
              showResult
                ? option === question.oddOne && selectedAnswer === option
                  ? 'bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500'
                  : option === selectedAnswer
                    ? 'bg-red-500/20 text-red-400 ring-2 ring-red-500'
                    : option === question.oddOne
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-indigo-900/30 text-white/60'
                : 'bg-indigo-900/30 hover:bg-indigo-800/40 text-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="text-center text-white/60">
        Soru {currentQuestionIndex + 1}/{words.length}
      </div>
    </div>
  );
}