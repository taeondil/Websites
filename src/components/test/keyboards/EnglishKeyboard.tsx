import React from 'react';
import { Delete } from 'lucide-react';

interface EnglishKeyboardProps {
  onKeyClick: (key: string) => void;
  onBackspace: () => void;
}

export function EnglishKeyboard({ onKeyClick, onBackspace }: EnglishKeyboardProps) {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="space-y-2">
      {rows.map((row, rowIndex) => (
        <div 
          key={rowIndex} 
          className="flex justify-center gap-2"
          style={{ marginLeft: rowIndex === 1 ? '20px' : rowIndex === 2 ? '40px' : '0px' }}
        >
          {row.map((key) => (
            <button
              key={key}
              type="button" // Prevent form submission
              onClick={() => onKeyClick(key)}
              className="w-12 h-12 rounded-xl bg-indigo-100/20 text-indigo-100 hover:bg-indigo-100/30 
                       transition-all duration-300 flex items-center justify-center text-lg font-medium
                       active:transform active:scale-95"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <button
          type="button" // Prevent form submission
          onClick={onBackspace}
          className="w-24 h-12 rounded-xl bg-indigo-100/20 text-indigo-100 hover:bg-indigo-100/30 
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