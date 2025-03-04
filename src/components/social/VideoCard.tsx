// VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  id: string;
  platform: 'youtube' | 'tiktok';
  url: string;
  title: string;
  thumbnail: string;
}

export function VideoCard({ url, title, thumbnail, platform }: VideoCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="aspect-video relative group">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-cyan-400/90 hover:bg-cyan-300 rounded-full text-slate-900 font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"/>
            </svg>
            <span>İzle</span>
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-cyan-400/20 text-cyan-300">
          {platform}
        </span>
      </div>
    </div>
  );
}