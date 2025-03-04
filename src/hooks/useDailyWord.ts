import { useState, useEffect } from 'react';
import { dailyWords, DailyWord } from '../data/dailyWords';

export function useDailyWord() {
  const [currentWord, setCurrentWord] = useState<DailyWord>(() => {
    // İlk render'da random bir kelime seç
    const randomIndex = Math.floor(Math.random() * dailyWords.length);
    return dailyWords[randomIndex];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Her interval'da yeni random kelime seç
      const randomIndex = Math.floor(Math.random() * dailyWords.length);
      setCurrentWord(dailyWords[randomIndex]);
    }, 10000); // 10 saniye

    return () => clearInterval(interval);
  }, []);

  return currentWord;
}