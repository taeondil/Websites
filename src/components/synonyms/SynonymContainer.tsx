import React from 'react';
import { useSynonymStore } from '../../store/synonymStore';
import { SynonymList } from './SynonymList';
import { SynonymInput } from './SynonymInput';
import { OddOneOutQuiz } from './OddOneOutQuiz';

export function SynonymContainer() {
  const { words, isQuizStarted, startQuiz } = useSynonymStore();

  return (
    <div className="w-full">
      {isQuizStarted ? (
        <OddOneOutQuiz />
      ) : (
        <>
          <div className="flex justify-end mb-8">
            {words.length > 0 && (
              <button
                onClick={startQuiz}
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 animate-fade-in shadow-lg hover:scale-105"
              >
                Quiz'e Başla
              </button>
            )}
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <SynonymList />
            <SynonymInput />
          </div>
        </>
      )}
    </div>
  );
}