import React, { useState } from 'react';
import { GameBoard } from './GameBoard';
import { Keyboard } from './Keyboard';
import { GameHeader } from './GameHeader';
import { WordLengthSelector } from './WordLengthSelector';
import { useWordlyGame } from '../../../hooks/useWordlyGame';
import { GameRules } from './GameRules';
import { GameOver } from './GameOver';
import { AlertCircle } from 'lucide-react';

export default function WordlyGame() {
  const [selectedLength, setSelectedLength] = useState<number | null>(null);
  const {
    currentGuess,
    guesses,
    gameStatus,
    error,
    isChecking,
    handleKeyPress,
    handleSubmit,
    resetGame,
    targetWord,
    startGame,
  } = useWordlyGame();

  const [showRules, setShowRules] = useState(false);

  const handleLengthSelect = (length: number) => {
    setSelectedLength(length);
    startGame(length);
  };

  if (!selectedLength) {
    return <WordLengthSelector onSelect={handleLengthSelect} />;
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
      <GameHeader onShowRules={() => setShowRules(true)} />
      
      <div className="max-w-sm mx-auto my-8">
        <GameBoard
          currentGuess={currentGuess}
          guesses={guesses}
          targetWord={targetWord}
          wordLength={selectedLength}
        />
      </div>

      {error && (
        <div className="flex items-center justify-center space-x-2 text-red-400 mb-4">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-8">
        <Keyboard
          guesses={guesses}
          targetWord={targetWord}
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit}
          disabled={gameStatus !== 'playing' || isChecking}
        />
      </div>

      {gameStatus !== 'playing' && (
        <GameOver
          status={gameStatus}
          targetWord={targetWord}
          attempts={guesses.length}
          onPlayAgain={() => {
            setSelectedLength(null);
            resetGame();
          }}
        />
      )}

      <GameRules isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}