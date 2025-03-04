import React, { useState, useEffect } from 'react';
import { useTestStore } from '../store/testStore';
import { useWordStore } from '../store/wordStore';
import { useSynonymStore } from '../store/synonymStore';
import WordList from '../components/test/WordList';
import TestSettings from '../components/test/TestSettings';
import TestInput from '../components/test/TestInput';
import TestContainer from '../components/test/TestContainer';
import { Navigation } from '../components/common/Navigation';
import { Book, BookOpenCheck } from 'lucide-react';
import { SynonymContainer } from '../components/synonyms/SynonymContainer';

function TestPage() {
  const { isTestStarted, startTest } = useTestStore();
  const { words } = useWordStore();
  const { resetStore } = useSynonymStore();
  const [selectedMode, setSelectedMode] = useState<'normal' | 'synonyms' | null>(null);

  useEffect(() => {
    if (selectedMode !== 'synonyms') {
      resetStore();
    }
  }, [selectedMode, resetStore]);

  if (!selectedMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <Navigation />
        
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold text-white mb-12">TEST</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => setSelectedMode('normal')}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-left hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-white/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Kelime Çalışması</h3>
                  <p className="text-white/80">
                    Kendi kelime listenizi oluşturun ve farklı test modlarıyla çalışın.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedMode('synonyms')}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-left hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-white/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <BookOpenCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Eş Anlamlı Kelimeler</h3>
                  <p className="text-white/80">
                    Kelimelerin eş anlamlılarını öğrenin ve pratik yapın.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedMode === 'synonyms') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <Navigation />
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-6xl font-bold text-white">EŞ ANLAMLILAR</h1>
            <button
              onClick={() => setSelectedMode(null)}
              className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              Mod Seç
            </button>
          </div>
          
          <SynonymContainer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <Navigation />
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-6xl font-bold text-white">KELİME TESTİ</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedMode(null)}
              className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              Mod Seç
            </button>
            {!isTestStarted && words.length > 0 && (
              <button
                onClick={startTest}
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 animate-fade-in shadow-lg hover:scale-105"
              >
                Testi Başlat
              </button>
            )}
          </div>
        </div>
        
        {isTestStarted ? (
          <TestContainer />
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            <WordList />
            <div className="space-y-8">
              <TestInput />
              <TestSettings />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestPage;