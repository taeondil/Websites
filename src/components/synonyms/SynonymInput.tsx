import React, { useState } from 'react';
import { useSynonymStore } from '../../store/synonymStore';
import { AlertCircle } from 'lucide-react';

export function SynonymInput() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { addWords } = useSynonymStore();

  const handleSave = () => {
    setError('');
    try {
      if (!input.trim()) {
        setError('Lütfen kelime listesi girin');
        return;
      }

      const lines = input.trim().split('\n');
      for (const line of lines) {
        if (!line.includes(':')) {
          setError('Her satır "kelime: eşanlamlı1,eşanlamlı2,eşanlamlı3" formatında olmalıdır');
          return;
        }

        const [word, synonyms] = line.split(':');
        if (!word.trim() || !synonyms.trim()) {
          setError('Kelime veya eş anlamlılar boş olamaz');
          return;
        }

        if (!synonyms.includes(',')) {
          setError('En az 2 eş anlamlı kelime girilmelidir');
          return;
        }
      }

      addWords(input);
      setInput('');
      setError('');
    } catch (err) {
      setError('Geçersiz format');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <h3 className="text-white text-xl font-semibold mb-4">Eş Anlamlı Kelime Listesi Oluştur</h3>
      
      <div className="bg-indigo-900/30 rounded-xl p-4 mb-4">
        <div className="text-white/80 space-y-1 text-sm">
          <p className="font-medium text-emerald-400 mb-2">Örnek Format:</p>
          <p>happy: joyful,cheerful,glad</p>
          <p>smart: intelligent,clever,bright</p>
          <p>big: large,huge,enormous</p>
        </div>
      </div>

      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-48 mt-4 p-4 rounded-xl bg-indigo-900/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300"
        placeholder="Her satıra bir kelime ve eş anlamlılarını yazın..."
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