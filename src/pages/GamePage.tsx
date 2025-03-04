import React from 'react';
import { Navigation } from '../components/common/Navigation';
import { GameCard } from '../components/games/GameCard';
import { Brain, Sparkles, Shuffle, PersonStanding, Key } from 'lucide-react';

export default function GamePage() {
  const games = [
    {
      id: 'wordly',
      title: 'Wordly',
      description: '5 harfli kelimeleri tahmin etmeye çalıştığınız eğlenceli bir kelime oyunu.',
      icon: Sparkles,
      color: 'from-emerald-400 to-emerald-600',
      path: '/game/wordly',
      isNew: true,
    },
    {
      id: 'scramble',
      title: 'Kelime Karıştırma',
      description: 'Karışık harflerden doğru kelimeyi bulun.',
      icon: Shuffle,
      color: 'from-blue-400 to-blue-600',
      path: '/game/scramble',
      isNew: true,
    },
    {
      id: 'hangman',
      title: 'Adam Asmaca',
      description: 'Kelimeyi tahmin etmeye çalışın, adam asılmadan önce!',
      icon: PersonStanding,
      color: 'from-yellow-400 to-orange-600',
      path: '/game/hangman',
      isNew: true,
    },
   
    {
      id: 'coming-soon',
      title: 'Yakında',
      description: 'Yeni oyunlar çok yakında burada olacak!',
      icon: Brain,
      color: 'from-gray-400 to-gray-600',
      path: '',
      isComingSoon: true,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Oyunlar</h1>
        <p className="text-white/80 mb-12">
          Eğlenceli oyunlarla İngilizce öğrenmeye devam edin
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}