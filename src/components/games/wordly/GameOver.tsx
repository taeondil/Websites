import React, { useEffect, useState } from 'react';
import { Trophy, XCircle, RotateCcw, Book } from 'lucide-react';
import { translateWord } from '../../../utils/translate';

interface GameOverProps {
  status: 'won' | 'lost' | 'playing';
  targetWord: string;
  attempts: number;
  onPlayAgain: () => void;
}

export function GameOver({ status, targetWord, attempts, onPlayAgain }: GameOverProps) {
  const [translation, setTranslation] = useState<string>('');

  useEffect(() => {
    const getTranslation = async () => {
      const translated = await translateWord(targetWord);
      setTranslation(translated);
    };
    getTranslation();
  }, [targetWord]);

  if (status === 'playing') return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center animate-fade-in">
        {status === 'won' ? (
          <>
            <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tebrikler!</h2>
            <p className="text-gray-600 mb-4">
              Kelimeyi {attempts} denemede buldunuz
            </p>
          </>
        ) : (
          <>
            <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Üzgünüm!</h2>
            <p className="text-gray-600 mb-2">
              Doğru kelime: <span className="font-medium text-gray-900">{targetWord.toUpperCase()}</span>
            </p>
          </>
        )}

        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
            <Book className="w-5 h-5" />
            <span className="font-medium">Kelimenin Anlamı</span>
          </div>
          <p className="text-gray-700">
            {translation || 'Çeviri yükleniyor...'}
          </p>
        </div>

        <button
          onClick={onPlayAgain}
          className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Tekrar Oyna</span>
        </button>
      </div>
    </div>
  );
}