export const SCRAMBLE_WORDS = [
  // 4 harfli
  'book', 'time', 'life', 'work', 'home', 'love', 'mind', 'hope', 'soul', 'rain',
  'fire', 'wind', 'star', 'moon', 'tree', 'bird', 'fish', 'door', 'road', 'food',
  'hand', 'foot', 'song', 'game', 'idea', 'wall', 'city', 'park', 'lake', 'hill',
  'sand', 'wave', 'leaf', 'root', 'ship', 'boat', 'card', 'play', 'film', 'note',
  'gold', 'dark', 'blue', 'gray', 'beam', 'path', 'rock', 'ring', 'edge', 'mist',

  // 5 harfli
  'happy', 'world', 'peace', 'dream', 'smile', 'heart', 'light', 'music', 'dance',
  'water', 'earth', 'cloud', 'beach', 'ocean', 'river', 'house', 'phone', 'table',
  'chair', 'fruit', 'grass', 'stone', 'metal', 'paper', 'color', 'shape', 'sound',
  'voice', 'smoke', 'frost', 'storm', 'field', 'grain', 'bread', 'juice', 'candy',
  'sugar', 'honey', 'spice', 'flame', 'candle', 'mirror', 'window', 'guitar',
  'spine', 'crisp', 'flock', 'clock', 'flute', 'pride', 'sword', 'storm', 'spore',

  // 6 harfli
  'nature', 'family', 'friend', 'school', 'garden', 'summer', 'winter', 'spring',
  'flower', 'forest', 'bridge', 'street', 'window', 'coffee', 'pencil', 'camera',
  'planet', 'animal', 'insect', 'shadow', 'breeze', 'valley', 'desert', 'island',
  'village', 'market', 'guitar', 'violin', 'piano', 'artist', 'writer', 'doctor',
  'engine', 'rocket', 'spaceship', 'castle', 'palace', 'temple', 'church', 'mosque',
  'mystic', 'sacred', 'silver', 'motion', 'arcade', 'statue', 'fabric', 'dynamo',

  // 7-8 harfli
  'freedom', 'harmony', 'journey', 'morning', 'evening', 'rainbow', 'sunrise',
  'dolphin', 'butterfly', 'mountain', 'learning', 'teaching', 'thinking', 'dreaming',
  'sunshine', 'moonlight', 'starlight', 'darkness', 'daylight', 'universe',
  'adventure', 'discovery', 'history', 'culture', 'tradition', 'language', 'science',
  'technology', 'medicine', 'architecture', 'sculpture', 'painting', 'literature',
  'philosophy', 'mathematics', 'chemistry', 'biology', 'astronomy', 'geography',
  'photography', 'cinema', 'theater', 'orchestra', 'festival', 'celebration',
  'strategy', 'symmetry', 'galactic', 'alchemy', 'spectrum', 'velocity', 'horizon',

  // 9+ harfli
  'imagination', 'inspiration', 'creativity', 'curiosity', 'exploration', 'innovation',
  'communication', 'collaboration', 'friendship', 'happiness', 'kindness', 'generosity',
  'intelligence', 'wisdom', 'knowledge', 'experience', 'challenge', 'opportunity',
  'environment', 'sustainability', 'conservation', 'biodiversity', 'ecosystem', 'climate',
  'evolution', 'revolution', 'transformation', 'renaissance', 'enlightenment', 'civilization',
  'architecture', 'engineering', 'mathematics', 'astrophysics', 'biotechnology', 'nanotechnology',
  'artificial intelligence', 'machine learning', 'data science', 'quantum mechanics', 'relativity',
  'neuroscience', 'cryptography', 'cosmology', 'theoretical physics', 'cognitive science',
  'psychology', 'anthropology', 'archaeology', 'linguistics', 'sociology', 'cybersecurity',
  'biochemistry', 'robotics', 'automation', 'metaphysics', 'hypothesis', 'bioinformatics'
];

export function getRandomScrambleWord(): string {
  const randomIndex = Math.floor(Math.random() * SCRAMBLE_WORDS.length);
  return SCRAMBLE_WORDS[randomIndex];
}