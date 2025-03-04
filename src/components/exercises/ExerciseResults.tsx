import React from 'react';
import { Trophy, Target, BarChart3, Clock, ArrowRight } from 'lucide-react';

interface ExerciseResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onBack: () => void;
}

export function ExerciseResults({ score, totalQuestions, onRetry, onBack }: ExerciseResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

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
        <h2 className="text-3xl font-bold text-white mb-2">Alıştırmalar Tamamlandı!</h2>
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
            {score}/{totalQuestions}
          </div>
          <div className="text-white/60 text-sm">Doğru Cevap</div>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white mb-1">{totalQuestions}</div>
          <div className="text-white/60 text-sm">Soru</div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all duration-300"
        >
          Tekrar Dene
        </button>
        <button
          onClick={onBack}
          className="px-8 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
}