import React from 'react';
import { motion } from 'framer-motion';

interface GameBoardProps {
  currentGuess: string;
  guesses: string[];
  targetWord: string;
  wordLength: number;
}

export function GameBoard({ currentGuess, guesses, targetWord, wordLength }: GameBoardProps) {
  // Toplam tahmin hakkı
  const MAX_ATTEMPTS = 6;
  
  // Kalan boş satır sayısını hesapla
  const emptyRows = Math.max(0, MAX_ATTEMPTS - (guesses.length + 1));
  
  // Mevcut tahmin için boş bir dizi oluştur
  const currentRow = currentGuess.padEnd(wordLength, '').split('');
  
  // Dinamik olarak hücre boyutunu ayarla
  const getCellSize = () => {
    if (wordLength <= 5) return 'w-14 h-14';
    if (wordLength === 6) return 'w-12 h-12';
    if (wordLength === 7) return 'w-10 h-10';
    return 'w-9 h-9'; // 8 harf için
  };

  // Dinamik olarak font boyutunu ayarla
  const getFontSize = () => {
    if (wordLength <= 5) return 'text-2xl';
    if (wordLength === 6) return 'text-xl';
    if (wordLength === 7) return 'text-lg';
    return 'text-base'; // 8 harf için
  };
  
  return (
    <div className="grid gap-2">
      {/* Önceki tahminler */}
      {guesses.map((guess, i) => (
        <Row 
          key={i} 
          word={guess} 
          targetWord={targetWord} 
          isRevealed={true} 
          wordLength={wordLength}
          cellSize={getCellSize()}
          fontSize={getFontSize()}
        />
      ))}
      
      {/* Mevcut tahmin satırı - sadece oyun devam ediyorsa ve maksimum tahmin sayısına ulaşılmadıysa göster */}
      {guesses.length < MAX_ATTEMPTS && (
        <Row 
          word={currentRow.join('')} 
          targetWord={targetWord} 
          isRevealed={false} 
          wordLength={wordLength}
          cellSize={getCellSize()}
          fontSize={getFontSize()}
        />
      )}
      
      {/* Boş satırlar */}
      {Array.from({ length: emptyRows }).map((_, i) => (
        <Row 
          key={`empty-${i}`} 
          word="" 
          targetWord={targetWord} 
          isRevealed={false} 
          wordLength={wordLength}
          cellSize={getCellSize()}
          fontSize={getFontSize()}
        />
      ))}
    </div>
  );
}

interface RowProps {
  word: string;
  targetWord: string;
  isRevealed: boolean;
  wordLength: number;
  cellSize: string;
  fontSize: string;
}

function Row({ word, targetWord, isRevealed, wordLength, cellSize, fontSize }: RowProps) {
  // Kelimeyi wordLength uzunluğuna tamamla
  const letters = word.padEnd(wordLength, ' ').split('');

  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${wordLength}, minmax(0, 1fr))` }}>
      {letters.map((letter, i) => (
        <Cell
          key={i}
          letter={letter}
          state={getCellState(letter, i, targetWord, isRevealed)}
          isRevealed={isRevealed}
          cellSize={cellSize}
          fontSize={fontSize}
        />
      ))}
    </div>
  );
}

interface CellProps {
  letter: string;
  state: 'correct' | 'present' | 'absent' | 'empty';
  isRevealed: boolean;
  cellSize: string;
  fontSize: string;
}

function Cell({ letter, state, isRevealed, cellSize, fontSize }: CellProps) {
  const baseClasses = `${cellSize} border-2 rounded-lg flex items-center justify-center ${fontSize} font-bold uppercase transition-all duration-300`;
  
  const stateClasses = {
    correct: "bg-emerald-500 border-emerald-600 text-white",
    present: "bg-yellow-500 border-yellow-600 text-white",
    absent: "bg-gray-500 border-gray-600 text-white",
    empty: letter ? "bg-white/20 border-white/30 text-white" : "border-white/30"
  };

  return (
    <motion.div
      className={`${baseClasses} ${stateClasses[state]}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {letter !== ' ' && letter}
    </motion.div>
  );
}

function getCellState(letter: string, index: number, targetWord: string, isRevealed: boolean): CellProps['state'] {
  if (!isRevealed || letter === ' ') return 'empty';
  if (letter === targetWord[index]) return 'correct';
  if (targetWord.includes(letter)) return 'present';
  return 'absent';
}