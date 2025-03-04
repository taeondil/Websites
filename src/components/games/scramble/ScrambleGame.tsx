import React, { useEffect, useState } from 'react';
import { useScrambleGame } from '../../../hooks/useScrambleGame';
import { GameHeader } from '../GameHeader';
import { motion } from 'framer-motion';
import { AlertCircle, Trophy, RotateCcw } from 'lucide-react';
import { GameRules } from './GameRules';

export default function ScrambleGame() {
  const [showRules, setShowRules] = useState(false);
  
  const {
    scrambledWord,
    word,
    guess,
    score,
    isLoading,
    error,
    gameStatus,
    setGuess,
    checkGuess,
    loadNewWord,
  } = useScrambleGame();

  useEffect(() => {
    loadNewWord();
  }, [loadNewWord]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim() || gameStatus !== 'playing') return;
    checkGuess();
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
      <GameHeader onShowRules={() => setShowRules(true)} />

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Kelime Karıştırma</h2>
          <p className="text-white/60">Karışık harflerden doğru kelimeyi bulun</p>
          <div className="text-emerald-400 font-medium mt-2">Skor: {score}</div>
        </div>

        {error ? (
          <div className="flex items-center justify-center space-x-2 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        ) : isLoading ? (
          <div className="text-center text-white/60">Kelime yükleniyor...</div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white/10 rounded-2xl p-8 text-center">
              <motion.div
                key={scrambledWord}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold text-white tracking-wider"
              >
                {scrambledWord}
              </motion.div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={guess}
                onChange={(e) => gameStatus === 'playing' && setGuess(e.target.value)}
                disabled={gameStatus !== 'playing'}
                className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-center text-xl"
                placeholder="Tahmininizi yazın..."
              />

              {gameStatus === 'playing' ? (
                <button
                  type="submit"
                  disabled={!guess.trim()}
                  className="w-full p-4 rounded-xl bg-emerald-500 text-white font-medium 
                           hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed 
                           transition-all duration-300"
                >
                  Kontrol Et
                </button>
              ) : (
                <div className="space-y-4">
                  <div className={`flex items-center justify-center space-x-2 ${
                    gameStatus === 'won' ? 'text-emerald-400' : 'text-red-400'
                  } p-4 rounded-xl ${
                    gameStatus === 'won' ? 'bg-emerald-500/10' : 'bg-red-500/10'
                  }`}>
                    {gameStatus === 'won' ? (
                      <>
                        <Trophy className="w-5 h-5" />
                        <span>Tebrikler! Doğru bildiniz!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>Yanlış cevap! Doğru kelime: {word}</span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={loadNewWord}
                    className="w-full p-4 rounded-xl bg-indigo-500 text-white font-medium 
                             hover:bg-indigo-600 transition-all duration-300 flex items-center 
                             justify-center space-x-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Yeni Kelime</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
      
      <GameRules isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}