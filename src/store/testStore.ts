import { create } from 'zustand';

type TestType = 'multiple' | 'written' | 'matching';

interface TestStore {
  testType: TestType;
  isTestStarted: boolean;
  currentQuestionIndex: number;
  score: number;
  timerEnabled: boolean;
  timePerQuestion: number;
  remainingTime: number | null;
  randomizeOrder: boolean; // Yeni state
  setTestType: (type: TestType) => void;
  setTimerSettings: (enabled: boolean, time: number) => void;
  setRandomizeOrder: (enabled: boolean) => void; // Yeni fonksiyon
  startTest: () => void;
  endTest: () => void;
  nextQuestion: () => void;
  addPoint: () => void;
  updateRemainingTime: (time: number) => void;
}

// Varsayılan değerleri ayrı bir obje olarak tanımlayalım
const defaultState = {
  testType: 'multiple' as TestType,
  isTestStarted: false,
  currentQuestionIndex: 0,
  score: 0,
  timerEnabled: false,
  timePerQuestion: 30,
  remainingTime: null,
  randomizeOrder: false, // Varsayılan değer
};

export const useTestStore = create<TestStore>((set) => ({
  ...defaultState, // Başlangıç değerlerini ayarla

  setTestType: (type) => set({ testType: type }),
  
  setTimerSettings: (enabled, time) => set({ 
    timerEnabled: enabled, 
    timePerQuestion: time 
  }),

  setRandomizeOrder: (enabled) => set({ randomizeOrder: enabled }), // Yeni fonksiyon

  startTest: () => set({ 
    isTestStarted: true, 
    currentQuestionIndex: 0, 
    score: 0,
    remainingTime: null
  }),

  endTest: () => set({ ...defaultState }), // Tüm değerleri varsayılana döndür

  nextQuestion: () => set((state) => ({ 
    currentQuestionIndex: state.currentQuestionIndex + 1,
    remainingTime: state.timerEnabled ? state.timePerQuestion : null
  })),

  addPoint: () => set((state) => ({ score: state.score + 1 })),
  
  updateRemainingTime: (time) => set({ remainingTime: time })
}));