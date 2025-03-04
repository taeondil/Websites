import React, { useState, useMemo } from 'react';
import { useWordStore } from '../../../store/wordStore';
import { useTestStore } from '../../../store/testStore';
import { ArrowRight, Check, X, Trophy } from 'lucide-react';

interface Card {
  id: string;
  content: string;
  type: 'term' | 'definition';
  isMatched: boolean;
}

interface Selection {
  termId: string;
  definitionId: string;
  term: string;
  definition: string;
}

function MatchingGame({ words }) {
  const { addPoint } = useTestStore();
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [currentSelection, setCurrentSelection] = useState<Selection | null>(null);
  const [selections, setSelections] = useState<Selection[]>([]);
  const [showResults, setShowResults] = useState(false);

  const { terms, definitions } = useMemo(() => {
    const orderedTerms = words.map(word => ({
      id: word.id,
      content: word.term,
      type: 'term' as const,
      isMatched: selections.some(s => s.termId === word.id)
    }));

    const shuffledDefinitions = [...words]
      .sort(() => Math.random() - 0.5)
      .map(word => ({
        id: word.id,
        content: word.definition,
        type: 'definition' as const,
        isMatched: selections.some(s => s.definitionId === word.id)
      }));

    return {
      terms: orderedTerms,
      definitions: shuffledDefinitions
    };
  }, [words, selections]);

  const handleCardClick = (card: Card) => {
    if (showResults || card.isMatched) return;

    if (card.type === 'term') {
      setSelectedCard(card);
      setCurrentSelection(prev => ({
        termId: card.id,
        definitionId: prev?.definitionId || '',
        term: card.content,
        definition: prev?.definition || ''
      }));
    } else {
      if (!selectedCard) return;

      setSelections(prev => [...prev, {
        termId: selectedCard.id,
        definitionId: card.id,
        term: selectedCard.content,
        definition: card.content
      }]);

      setSelectedCard(null);
      setCurrentSelection(null);
    }
  };

  const handleComplete = () => {
    setShowResults(true);

    const correctMatches = selections.filter(
      selection => selection.termId === selection.definitionId
    ).length;

    for (let i = 0; i < correctMatches; i++) {
      addPoint();
    }
  };

  const isSelectionComplete = selections.length === words.length;

  if (showResults) {
    const totalScore = selections.filter(
      selection => selection.termId === selection.definitionId
    ).length;
    const totalWords = words.length;
    const percentage = Math.round((totalScore / totalWords) * 100);

    return (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="inline-block p-4 bg-emerald-500/20 rounded-full mb-4">
            <Trophy className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Tamamlandı!</h2>
          <p className="text-emerald-400 text-xl">Başarı: {percentage}%</p>
        </div>

        <div className="bg-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Sonuçlar</h3>
          <ul className="list-disc list-inside space-y-2">
            {selections.map((selection, index) => (
              <li key={index} className="text-white">
                <span className="font-semibold">{selection.term}</span> → {selection.definition} {selection.termId === selection.definitionId ? (
                  <Check className="inline-block w-4 h-4 text-emerald-400 ml-2" />
                ) : (
                  <span className="text-red-400 ml-2">Yanlış</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Eşleştirme Oyunu</h3>
        <p className="text-white/60">Tüm kelimeler gösteriliyor</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white/80 text-center mb-4">Kelimeler</h4>
          <div className="space-y-3">
            {terms.map((term) => (
              <button
                key={`term-${term.id}`}
                onClick={() => handleCardClick(term)}
                disabled={term.isMatched || showResults}
                className={`w-full p-4 rounded-xl text-center transition-all duration-300 ${
                  term.isMatched
                    ? 'bg-indigo-800/50 text-white/70'
                    : selectedCard?.id === term.id
                    ? 'bg-indigo-800/50 ring-2 ring-emerald-500/50 text-white'
                    : 'bg-indigo-900/30 hover:bg-indigo-800/40 text-white'
                }`}
              >
                {term.content}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white/80 text-center mb-4">Tanımlar</h4>
          <div className="space-y-3">
            {definitions.map((definition) => (
              <button
                key={`definition-${definition.id}`}
                onClick={() => handleCardClick(definition)}
                disabled={definition.isMatched || showResults || !selectedCard}
                className={`w-full p-4 rounded-xl text-center transition-all duration-300 ${
                  definition.isMatched
                    ? 'bg-indigo-800/50 text-white/70'
                    : 'bg-indigo-900/30 hover:bg-indigo-800/40 text-white'
                }`}
              >
                {definition.content}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedCard && (
        <div className="text-center text-white/60">
          <p>Seçilen kelime: {selectedCard.content}</p>
          <p>Lütfen eşleşen tanımı seçin</p>
        </div>
      )}

      {isSelectionComplete && !showResults && (
        <div className="flex justify-center">
          <button
            onClick={handleComplete}
            className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all duration-300"
          >
            Kontrol Et
          </button>
        </div>
      )}
    </div>
  );
}

export default MatchingGame;