import { create } from 'zustand';
import { SynonymWord, OddOneOutQuestion } from '../types/synonym';

interface SynonymStore {
  words: SynonymWord[];
  currentQuestionIndex: number;
  score: number;
  isQuizStarted: boolean;
  addWords: (input: string) => void;
  startQuiz: () => void;
  endQuiz: () => void;
  nextQuestion: () => void;
  addPoint: () => void;
  clearWords: () => void;
  resetStore: () => void; // Yeni eklenen fonksiyon
  generateOddOneOutQuestion: () => OddOneOutQuestion;
}

// Başlangıç durumu için ayrı bir obje
const initialState = {
  words: [],
  currentQuestionIndex: 0,
  score: 0,
  isQuizStarted: false,
};

export const useSynonymStore = create<SynonymStore>((set, get) => ({
  ...initialState,

  addWords: (input: string) => {
    const lines = input.trim().split('\n');
    const newWords: SynonymWord[] = lines.map(line => {
      const [word, synonymsStr] = line.split(':').map(s => s.trim());
      const synonyms = synonymsStr.split(',').map(s => s.trim());
      return {
        id: crypto.randomUUID(),
        word,
        synonyms
      };
    });
    set({ words: newWords });
  },

  startQuiz: () => set({ isQuizStarted: true, currentQuestionIndex: 0, score: 0 }),
  
  endQuiz: () => set({ isQuizStarted: false, currentQuestionIndex: 0, score: 0 }),
  
  nextQuestion: () => set(state => ({ 
    currentQuestionIndex: state.currentQuestionIndex + 1 
  })),
  
  addPoint: () => set(state => ({ score: state.score + 1 })),
  
  clearWords: () => set({ words: [] }),

  // Yeni eklenen resetStore fonksiyonu
  resetStore: () => set(initialState),

  generateOddOneOutQuestion: () => {
    const { words, currentQuestionIndex } = get();
    const currentWord = words[currentQuestionIndex];
    
    if (!currentWord) {
      throw new Error('No word available');
    }

    const synonymsForQuestion = [...currentWord.synonyms]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const otherWords = words.filter(w => w.id !== currentWord.id);
    const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
    
    if (!randomWord) {
      throw new Error('Not enough words for quiz');
    }

    const oddOne = randomWord.synonyms[Math.floor(Math.random() * randomWord.synonyms.length)];

    const options = [...synonymsForQuestion, oddOne]
      .sort(() => Math.random() - 0.5);

    return {
      word: currentWord.word,
      options,
      oddOne
    };
  }
}));