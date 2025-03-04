import { wordsByLength } from './wordsByLength';

export function getWordsByLength(length: number) {
  return wordsByLength[length] || [];
}

export function getRandomWord(length: number) {
  const words = getWordsByLength(length);
  if (words.length === 0) return '';
  return words[Math.floor(Math.random() * words.length)];
}