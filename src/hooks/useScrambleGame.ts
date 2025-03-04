import { useState, useCallback } from 'react';
import { getRandomScrambleWord } from '../data/words/scrambleWords';

function scrambleWord(word: string): string {
  const letters = word.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  // Eğer karıştırılmış kelime orijinal kelimeyle aynıysa tekrar karıştır
  const scrambled = letters.join('');
  if (scrambled === word) {
    return scrambleWord(word);
  }
  return scrambled;
}

export function useScrambleGame() {
  const [word, setWord] = useState<string>('');
  const [scrambledWord, setScrambledWord] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const loadNewWord = useCallback(() => {
    setIsLoading(true);
    setError(null);
    try {
      const newWord = getRandomScrambleWord();
      setWord(newWord);
      setScrambledWord(scrambleWord(newWord));
      setGuess('');
      setGameStatus('playing');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const checkGuess = useCallback(() => {
    if (guess.toLowerCase() === word.toLowerCase()) {
      setScore(prev => prev + 1);
      setGameStatus('won');
    } else {
      setGameStatus('lost');
    }
  }, [guess, word]);

  return {
    word,
    scrambledWord,
    guess,
    score,
    isLoading,
    error,
    gameStatus,
    setGuess,
    checkGuess,
    loadNewWord,
  };
}