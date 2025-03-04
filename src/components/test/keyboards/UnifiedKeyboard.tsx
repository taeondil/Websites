import React from 'react';
import { Delete } from 'lucide-react';

interface UnifiedKeyboardProps {
  onKeyClick: (key: string) => void;
  onBackspace: () => void;
}

export function UnifiedKeyboard({ onKeyClick, onBackspace }: UnifiedKeyboardProps) {
  // Regular keyboard characters
  const qwertyKeys = {
    row1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    row2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    row3: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  };

  // Phonetic characters grouped by type
  const phoneticKeys = {
    vowels: ['æ', 'ʌ', 'ɑ', 'ə', 'ɜ', 'ɪ', 'ʊ', 'u', 'ɔ', 'ɛ'],
    consonants: ['ŋ', 'θ', 'ð', 'ʃ', 'ʒ', 'dʒ', 'ɡ', 'g', 'ɹ'],
    special: [':']
  };

  const isPhonetic = (key: string) => {
    return [...phoneticKeys.vowels, ...phoneticKeys.consonants, ...phoneticKeys.special].includes(key);
  };

  return (
    <div className="space-y-6">
      {/* Regular QWERTY keyboard section */}
      <div className="space-y-2">
        <h5 className="text-white/60 text-sm font-medium mb-2 text-center">İngilizce Karakterler</h5>
        {Object.values(qwertyKeys).map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="flex justify-center gap-1.5"
          >
            {row.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onKeyClick(key)}
                className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-100 hover:bg-blue-500/30 
                         transition-all duration-300 flex items-center justify-center text-lg font-medium
                         active:transform active:scale-95"
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Phonetic characters section */}
      <div className="space-y-4">
        <h5 className="text-white/60 text-sm font-medium mb-2 text-center">Fonetik Karakterler</h5>
        
        {/* Vowels */}
        <div className="space-y-2">
          <div className="flex justify-center gap-1.5">
            {phoneticKeys.vowels.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onKeyClick(key)}
                className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-100 hover:bg-purple-500/30 
                         transition-all duration-300 flex items-center justify-center text-lg font-medium
                         active:transform active:scale-95"
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Consonants */}
        <div className="space-y-2">
          <div className="flex justify-center gap-1.5 flex-wrap">
            {phoneticKeys.consonants.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onKeyClick(key)}
                className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-100 hover:bg-emerald-500/30 
                         transition-all duration-300 flex items-center justify-center text-lg font-medium
                         active:transform active:scale-95"
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Special characters */}
        <div className="space-y-2">
          <div className="flex justify-center gap-1.5">
            {phoneticKeys.special.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onKeyClick(key)}
                className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-100 hover:bg-amber-500/30 
                         transition-all duration-300 flex items-center justify-center text-lg font-medium
                         active:transform active:scale-95"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Backspace button */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={onBackspace}
          className="w-24 h-12 rounded-xl bg-red-500/20 text-red-100 hover:bg-red-500/30 
                   transition-all duration-300 flex items-center justify-center gap-2
                   active:transform active:scale-95"
        >
          <Delete className="w-5 h-5" />
          <span>Sil</span>
        </button>
      </div>
    </div>
  );
}