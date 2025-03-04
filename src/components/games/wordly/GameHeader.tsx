import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameHeaderProps {
  onShowRules: () => void;
}

export function GameHeader({ onShowRules }: GameHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/images/logo.png" 
            alt="Taeondil Logo" 
            className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
          />
          <div className="text-white font-bold text-2xl group-hover:text-emerald-400 transition-colors">
            TAEONDİL
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link 
          to="/game"
          className="text-white/80 hover:text-white transition-colors"
        >
          Geri Dön
        </Link>
        <button
          onClick={onShowRules}
          className="p-2 text-white/80 hover:text-white transition-colors"
        >
          <HelpCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}