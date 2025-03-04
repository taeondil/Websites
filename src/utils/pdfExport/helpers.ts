import type { Word } from '../../store/wordStore';

export function generateRandomOptions(correctAnswer: string, allWords: Word[]): string[] {
  const otherDefinitions = allWords
    .filter(word => word.definition !== correctAnswer)
    .map(word => word.definition);
  
  const wrongAnswers = otherDefinitions
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  return [...wrongAnswers, correctAnswer]
    .sort(() => Math.random() - 0.5);
}

export function encodeTurkishChars(text: string): string {
  const turkishChars: Record<string, string> = {
    'ğ': 'g', 'Ğ': 'G',
    'ü': 'u', 'Ü': 'U',
    'ş': 's', 'Ş': 'S',
    'ı': 'i', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ç': 'c', 'Ç': 'C'
  };

  return text.replace(/[ğĞüÜşŞıİöÖçÇ]/g, char => turkishChars[char] || char);
}