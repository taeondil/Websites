import { create } from 'zustand';

export interface Word {
  id: string;
  term: string;
  definition: string;
}

interface WordStore {
  words: Word[];
  addWords: (newWords: Omit<Word, 'id'>[]) => void;
  removeWord: (id: string) => void;
  updateWord: (id: string, term: string, definition: string) => void;
  clearWords: () => void;
}

export const useWordStore = create<WordStore>((set) => ({
  words: [],
  addWords: (newWords) => set((state) => ({
    words: [...state.words, ...newWords.map(word => ({
      ...word,
      id: crypto.randomUUID()
    }))]
  })),
  removeWord: (id) => set((state) => ({
    words: state.words.filter(word => word.id !== id)
  })),
  updateWord: (id, term, definition) => set((state) => ({
    words: state.words.map(word => 
      word.id === id ? { ...word, term, definition } : word
    )
  })),
  clearWords: () => set({ words: [] })
}));