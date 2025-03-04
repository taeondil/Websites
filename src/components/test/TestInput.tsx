import React, { useState } from 'react';
import { useWordStore } from '../../store/wordStore';
import { AlertCircle } from 'lucide-react';

function TestInput() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { addWords } = useWordStore();

  const handleSave = () => {
    setError('');
    const lines = input.trim().split('\n');
    const newWords = [];

    for (const line of lines) {
      if (!line.trim()) continue;
      
      const parts = line.split(':');
      if (parts.length !== 2) {
        setError('Hatalı format! Her satır "kelime : tanım" şeklinde olmalıdır.');
        return;
      }

      const term = parts[0].trim();
      const definition = parts[1].trim();
      
      if (!term || !definition) {
        setError('Kelime veya tanım boş olamaz!');
        return;
      }

      newWords.push({ term, definition });
    }

    if (newWords.length > 0) {
      addWords(newWords);
      setInput('');
      setError('');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <h3 className="text-white text-xl font-semibold mb-4">Kelime Listesi Oluştur</h3>
      
      <div className="bg-indigo-900/30 rounded-xl p-4 mb-4">
        <div className="text-white/80 space-y-1 text-sm">
          <p className="font-medium text-emerald-400 mb-2">Örnek Format:</p>
          <p>book : kitap</p>
          <p>computer : bilgisayar</p>
          <p>language : dil</p>
        </div>
      </div>

      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-48 mt-4 p-4 rounded-xl bg-indigo-900/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300"
        placeholder="Her satıra bir kelime:tanım ikilisi yazın..."
      />

      {error && (
        <div className="mt-3 text-red-300 flex items-center space-x-2">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <button 
        onClick={handleSave}
        className="mt-4 bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-600 transition-all duration-300 w-full flex items-center justify-center space-x-2"
      >
        <span>Listeye Ekle</span>
      </button>
    </div>
  );
}

export default TestInput;