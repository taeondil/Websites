import React from 'react';
import { useSynonymStore } from '../../store/synonymStore';
import { Trash2 } from 'lucide-react';

export function SynonymList() {
  const { words, clearWords } = useSynonymStore();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">KELİME LİSTEN</h2>
        {words.length > 0 && (
          <button
            onClick={clearWords}
            className="flex items-center space-x-2 text-red-300 hover:text-red-400 transition-colors"
          >
            <Trash2 size={18} />
            <span>Listeyi Temizle</span>
          </button>
        )}
      </div>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {words.length === 0 ? (
          <div className="text-center py-8 text-white/60">
            Henüz kelime eklenmemiş. Sağdaki form ile kelime ekleyebilirsiniz.
          </div>
        ) : (
          words.map((word) => (
            <div 
              key={word.id}
              className="flex rounded-xl overflow-hidden animate-fade-in shadow-lg bg-indigo-900/80"
            >
              <div className="flex-1 p-4 text-white">
                <span className="font-medium">{word.word}</span>
              </div>
              <div className="flex-[2] p-4 bg-emerald-500/80">
                <span className="font-medium text-white">
                  {word.synonyms.join(', ')}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}