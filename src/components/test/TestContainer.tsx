import React, { useEffect, useState } from 'react';
import { useTestStore } from '../../store/testStore';
import { useWordStore } from '../../store/wordStore';
import MultipleChoice from './questions/MultipleChoice';
import WrittenAnswer from './questions/WrittenAnswer';
import MatchingGame from './questions/MatchingGame';
import Timer from './Timer';
import { ExportButton } from './ExportButton';
import { Trophy, Target, Clock, ArrowRight, BarChart3, XCircle } from 'lucide-react';

function TestContainer() {
  const { 
    testType, 
    isTestStarted, 
    currentQuestionIndex, 
    score,
    timerEnabled,
    timePerQuestion,
    randomizeOrder, // Yeni state
    startTest, 
    endTest,
    updateRemainingTime
  } = useTestStore();
  const { words, clearWords } = useWordStore();
  const [shuffledWords, setShuffledWords] = useState(words); // Yeni state

  useEffect(() => {
    if (isTestStarted && randomizeOrder) {
      // Kelimeleri rastgele sırala
      const shuffled = [...words].sort(() => Math.random() - 0.5);
      setShuffledWords(shuffled);
    } else {
      setShuffledWords(words);
    }
  }, [isTestStarted, randomizeOrder, words]);

  useEffect(() => {
    if (isTestStarted && timerEnabled) {
      updateRemainingTime(timePerQuestion);
    }
  }, [isTestStarted, currentQuestionIndex]);

  const handleFinishTest = () => {
    endTest();
    clearWords();
  };

  if (!isTestStarted) {
    return (
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Test Hazır!</h2>
        <p className="text-white/60">
          {words.length} kelimelik bir test oluşturuldu.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={startTest}
            className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all duration-300"
          >
            Teste Başla
          </button>
        </div>
      </div>
    );
  }

  if (currentQuestionIndex >= words.length) {
    const percentage = Math.round((score / words.length) * 100);
    const getPerformanceMessage = () => {
      if (percentage >= 90) return "Mükemmel!";
      if (percentage >= 70) return "Çok İyi!";
      if (percentage >= 50) return "İyi!";
      return "Daha fazla pratik yapmalısın!";
    };

    const getPerformanceColor = () => {
      if (percentage >= 90) return "text-emerald-400";
      if (percentage >= 70) return "text-blue-400";
      if (percentage >= 50) return "text-yellow-400";
      return "text-red-400";
    };

    return (
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-emerald-500/20 rounded-full mb-4">
            <Trophy className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Test Tamamlandı!</h2>
          <p className={`text-xl font-medium ${getPerformanceColor()}`}>
            {getPerformanceMessage()}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">{percentage}%</div>
            <div className="text-white/60 text-sm">Başarı</div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">
              {score}/{words.length}
            </div>
            <div className="text-white/60 text-sm">Doğru Cevap</div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">{words.length}</div>
            <div className="text-white/60 text-sm">Soru</div>
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-white">Kelime Listesi</h3>
          </div>
          <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
            {words.map((word, index) => (
              <div 
                key={word.id}
                className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl"
              >
                <span className="text-white/60">{index + 1}.</span>
                <span className="text-white font-medium">{word.term}</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
                <span className="text-white/80">{word.definition}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleFinishTest}
            className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Yeni Test</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div className="text-white/60">
          Soru {currentQuestionIndex + 1}/{words.length}
        </div>
        <div className="flex items-center space-x-4">
          {timerEnabled && <Timer />}
          <div className="text-emerald-400 font-medium">
            Skor: {score}
          </div>
          <ExportButton words={words} />
          <button
            onClick={handleFinishTest}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-all duration-300"
          >
            <XCircle className="w-5 h-5" />
            <span>Testi Bitir</span>
          </button>
        </div>
      </div>

      {testType === 'multiple' && <MultipleChoice word={shuffledWords[currentQuestionIndex]} />}
      {testType === 'written' && <WrittenAnswer word={shuffledWords[currentQuestionIndex]} />}
      {testType === 'matching' && <MatchingGame words={shuffledWords} />}
    </div>
  );
}

export default TestContainer;