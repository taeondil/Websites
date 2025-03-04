// Word categories and their corresponding 5-letter words
interface WordCategory {
  name: string;
  words: string[];
}

export const WORD_CATEGORIES: WordCategory[] = [
  {
    name: 'Animals',
    words: [
      'tiger', 'snake', 'eagle', 'horse', 'sheep',
      'whale', 'zebra', 'mouse', 'panda', 'koala',
      'camel', 'shark', 'goose', 'llama', 'puppy'
    ]
  },
  {
    name: 'Food & Drinks',
    words: [
      'apple', 'bread', 'candy', 'donut', 'grape',
      'juice', 'lemon', 'peach', 'pizza', 'salad',
      'sushi', 'toast', 'water', 'honey', 'pasta'
    ]
  },
  {
    name: 'Nature',
    words: [
      'beach', 'cloud', 'earth', 'flame', 'grass',
      'ocean', 'plant', 'river', 'storm', 'water',
      'woods', 'bloom', 'frost', 'shore', 'stone'
    ]
  },
  {
    name: 'Household',
    words: [
      'chair', 'clock', 'couch', 'floor', 'light',
      'phone', 'plate', 'shelf', 'table', 'towel',
      'brush', 'glass', 'knife', 'spoon', 'watch'
    ]
  },
  {
    name: 'Emotions',
    words: [
      'happy', 'angry', 'brave', 'proud', 'quiet',
      'smile', 'laugh', 'peace', 'worry', 'dream',
      'trust', 'faith', 'grace', 'sweet', 'bliss'
    ]
  }
];

// Flatten all words into a single array for the game
export const WORDS = WORD_CATEGORIES.reduce<string[]>(
  (allWords, category) => [...allWords, ...category.words],
  []
);