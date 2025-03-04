import React from 'react';
import { BookOpen, Volume2, Star } from 'lucide-react';

interface DailyWordProps {
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  type: string;
}

export function DailyWord({ word, pronunciation, meaning, example, type }: DailyWordProps) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <h2 className="text-xl text-white/80">Günün Kelimesi</h2>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-4xl font-bold text-white">{word}</h3>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors group">
              <Volume2 className="w-6 h-6 text-white/80 group-hover:text-white" />
            </button>
          </div>
        </div>
        <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
          {type}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-white/60 mb-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Okunuş</span>
          </div>
          <p className="text-white text-lg">{pronunciation}</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-white/60 mb-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Anlam</span>
          </div>
          <p className="text-white text-lg">{meaning}</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-white/60 mb-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Örnek Cümle</span>
          </div>
          <p className="text-white text-lg italic">"{example}"</p>
        </div>
      </div>
    </div>
  );
}