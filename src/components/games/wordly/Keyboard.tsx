import React from 'react';
import { motion } from 'framer-motion';
import { Delete } from 'lucide-react';

interface KeyboardProps {
  guesses: string[];
  targetWord: string;
  onKeyPress: (key: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export function Keyboard({ guesses, targetWord, onKeyPress, onSubmit, disabled }: KeyboardProps) {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace']
  ];

  const getKeyState = (key: string): 'correct' | 'present' | 'absent' | 'unused' => {
    if (key === 'enter' || key === 'backspace') return 'unused';

    for (const guess of guesses) {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === key) {
          if (targetWord[i] === key) return 'correct';
          if (targetWord.includes(key)) return 'present';
          return 'absent';
        }
      }
    }
    return 'unused';
  };

  return (
    <div className="max-w-3xl mx-auto space-y-2">
      {rows.map((row, rowIndex) => (
        <div 
          key={rowIndex} 
          className="flex justify-center gap-1.5"
          style={{ 
            paddingLeft: rowIndex === 1 ? '20px' : '0',
            paddingRight: rowIndex === 1 ? '20px' : '0'
          }}
        >
          {row.map((key) => (
            <Key
              key={key}
              value={key}
              state={getKeyState(key)}
              onClick={() => {
                if (key === 'enter') onSubmit();
                else onKeyPress(key);
              }}
              disabled={disabled}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

interface KeyProps {
  value: string;
  state: 'correct' | 'present' | 'absent' | 'unused';
  onClick: () => void;
  disabled?: boolean;
}

function Key({ value, state, onClick, disabled }: KeyProps) {
  const isSpecial = value === 'enter' || value === 'backspace';
  
  const baseClasses = "rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  const sizeClasses = isSpecial ? "w-16 px-2 py-4" : "w-9 h-12";
  
  const stateClasses = {
    correct: "bg-emerald-500 text-white hover:bg-emerald-600",
    present: "bg-yellow-500 text-white hover:bg-yellow-600",
    absent: "bg-gray-500 text-white hover:bg-gray-600",
    unused: "bg-white/20 text-white hover:bg-white/30"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95";

  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses} ${stateClasses[state]} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {value === 'backspace' ? (
        <Delete className="w-5 h-5" />
      ) : value === 'enter' ? (
        'Enter'
      ) : (
        value.toUpperCase()
      )}
    </motion.button>
  );
}