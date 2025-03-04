import React from 'react';
import { Play, Calendar, Clock, ArrowRight } from 'lucide-react';
import type { PodcastEpisode } from '../../types/podcast';

interface PodcastCardProps {
  episode: PodcastEpisode;
  onSelect: (episode: PodcastEpisode) => void;
  featured?: boolean;
}

export function PodcastCard({ episode, onSelect, featured = false }: PodcastCardProps) {
  return (
    <div 
      className={`group relative overflow-hidden transition-all duration-300 ${
        featured 
          ? 'flex flex-col md:flex-row gap-6'
          : 'bg-gradient-to-r from-white/10 to-purple-500/20 backdrop-blur-xl rounded-2xl hover:transform hover:scale-[1.02]'
      }`}
    >
      <div className={`relative ${featured ? 'md:w-1/2' : 'aspect-video w-full'}`}>
        <img 
          src={episode.imageUrl} 
          alt={episode.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
        
        {/* Play Button Overlay */}
        <button
          onClick={() => onSelect(episode)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full 
                         flex items-center justify-center transform scale-90 group-hover:scale-100 
                         transition-all shadow-lg">
            <Play className="w-8 h-8 text-white fill-current ml-1" />
          </div>
        </button>
      </div>
      
      <div className={`${featured ? 'md:w-1/2' : ''} p-6`}>
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-white mb-3 line-clamp-2`}>
          {episode.title}
        </h3>
        <p className="text-white/80 mb-4 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(episode.date).toLocaleDateString('tr-TR')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{episode.duration}</span>
            </div>
          </div>
          <button
            onClick={() => onSelect(episode)}
            className="flex items-center gap-1 text-gray-800 hover:text-white transition-colors group mb-4"  
          >
            <span className="text-2xl font-semibold">Dinle</span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}