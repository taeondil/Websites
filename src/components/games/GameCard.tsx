import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface GameCardProps {
  game: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    path: string;
    isNew?: boolean;
    isComingSoon?: boolean;
  };
}

export function GameCard({ game }: GameCardProps) {
  const CardWrapper = game.isComingSoon ? 'div' : Link;
  const wrapperProps = game.isComingSoon ? {} : { to: game.path };

  return (
    <CardWrapper
      {...wrapperProps}
      className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 ${
        game.isComingSoon 
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:transform hover:scale-105 hover:bg-white/20'
      }`}
    >
      {game.isNew && (
        <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
          Yeni!
        </span>
      )}

      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${game.color} mb-4`}>
        <game.icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
      <p className="text-white/80">{game.description}</p>

      {game.isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 backdrop-blur-sm">
          <span className="text-white font-medium">Çok Yakında!</span>
        </div>
      )}
    </CardWrapper>
  );
}