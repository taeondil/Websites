import React, { useState } from 'react';
import { useWordStore } from '../../store/wordStore';
import { Trash2, Edit2, X, Check } from 'lucide-react';

interface EditingWord {
  id: string;
  term: string;
  definition: string;
}

function WordList() {
  const { words, removeWord, updateWord, clearWords } = useWordStore();
  const [editingWord, setEditingWord] = useState<EditingWord | null>(null);

  const handleEdit = (word: EditingWord) => {
    setEditingWord(word);
  };

  const handleSaveEdit = () => {
    if (editingWord) {
      updateWord(editingWord.id, editingWord.term, editingWord.definition);
      setEditingWord(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingWord(null);
  };

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
              {editingWord?.id === word.id ? (
                <div className="flex-1 flex items-center p-2 space-x-2">
                  <input
                    value={editingWord.term}
                    onChange={(e) => setEditingWord({
                      ...editingWord,
                      term: e.target.value
                    })}
                    className="flex-1 bg-indigo-800/50 text-white p-2 rounded-lg"
                    placeholder="Kelime"
                  />
                  <input
                    value={editingWord.definition}
                    onChange={(e) => setEditingWord({
                      ...editingWord,
                      definition: e.target.value
                    })}
                    className="flex-1 bg-indigo-800/50 text-white p-2 rounded-lg"
                    placeholder="Tanım"
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="p-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="p-2 text-red-400 hover:text-red-300"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 p-4 text-white">
                    <span className="font-medium">{word.term}</span>
                  </div>
                  <div className="flex-1 p-4 bg-emerald-500/80">
                    <span className="font-medium text-white">{word.definition}</span>
                  </div>
                  <div className="flex items-center px-4 space-x-2">
                    <button
                      onClick={() => handleEdit(word)}
                      className="p-1 text-white/70 hover:text-white transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => removeWord(word.id)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WordList;