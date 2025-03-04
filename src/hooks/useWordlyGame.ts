import { useState, useCallback } from 'react';
import { getRandomWord, getWordsByLength } from '../data/words/index';

async function isValidWord(word: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.ok;
  } catch (error) {
    console.error('Error checking word validity:', error);
    return false;
  }
}

export function useWordlyGame() {
  const [wordLength, setWordLength] = useState<number | null>(null);
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'waiting' | 'playing' | 'won' | 'lost'>('waiting');
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startGame = useCallback((length: number) => {
    setWordLength(length);
    const newWord = getRandomWord(length);
    setTargetWord(newWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setError(null);
  }, []);

  const handleKeyPress = useCallback((key: string) => {
    if (gameStatus !== 'playing' || !wordLength) return;

    setCurrentGuess(current => {
      if (key === 'backspace') {
        return current.slice(0, -1);
      }
      if (current.length < wordLength && key !== 'enter') {
        return current + key;
      }
      return current;
    });
  }, [gameStatus, wordLength]);

  const handleSubmit = useCallback(async () => {
    // Eğer oyun bitmişse veya kelime uzunluğu ayarlanmamışsa işlem yapma
    if (gameStatus !== 'playing' || !wordLength || isChecking) return;

    // Eğer tahmin kelime uzunluğuna eşit değilse işlem yapma
    if (currentGuess.length !== wordLength) return;

    setIsChecking(true);
    setError(null);

    try {
      const isValid = await isValidWord(currentGuess);
      
      if (!isValid) {
        setError('Geçerli bir İngilizce kelime değil!');
        setIsChecking(false);
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);
      setCurrentGuess('');
      setError(null);

      // Doğru tahmin edildi mi kontrol et
      if (currentGuess === targetWord) {
        setGameStatus('won');
      } 
      // Son hak kullanıldı mı kontrol et
      else if (newGuesses.length >= 6) {
        setGameStatus('lost');
        setCurrentGuess(''); // Son hakkı kullandıktan sonra input'u temizle
      }
    } catch (err) {
      setError('Bir hata oluştu, lütfen tekrar deneyin.');
    } finally {
      setIsChecking(false);
    }
  }, [currentGuess, guesses, targetWord, gameStatus, wordLength, isChecking]);

  const resetGame = useCallback(() => {
    setWordLength(null);
    setTargetWord('');
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('waiting');
    setError(null);
  }, []);

  return {
    targetWord,
    currentGuess,
    guesses,
    gameStatus,
    error,
    isChecking,
    handleKeyPress,
    handleSubmit,
    resetGame,
    startGame,
  };
}