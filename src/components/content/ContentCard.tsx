import React from 'react';
import { ChevronRight, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentItem, levelColors } from '../../types/content';

interface ContentCardProps {
  item: ContentItem;
}

export function ContentCard({ item }: ContentCardProps) {
  return (
    <Link 
      to={`/${item.type}/${item.id}`} 
      className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-48">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`${levelColors[item.level]} px-3 py-1 rounded-full text-sm font-medium text-white`}>
            {item.level}
          </span>
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-white flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{item.duration}</span>
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : ''}`} />
              ))}
            </div>
          </div>
          <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-white/20 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}