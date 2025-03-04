import React from 'react';
import { Play, Heart, MessageCircle, Share2 } from 'lucide-react';
import { TikTokPost } from './types';

interface TikTokCardProps {
  post: TikTokPost;
}

export function TikTokCard({ post }: TikTokCardProps) {
  return (
    <div className="relative group">
      <div className="aspect-[9/16] rounded-xl overflow-hidden bg-black/20 backdrop-blur-lg">
        <div className="relative w-full h-full">
          <img 
            src={post.thumbnailUrl} 
            alt={post.description}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
          </div>

          {/* Stats */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm mb-2 line-clamp-2">{post.description}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-white" />
                <span className="text-white text-sm">{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-white text-sm">{post.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share2 className="w-4 h-4 text-white" />
                <span className="text-white text-sm">{post.shares}</span>
              </div>
            </div>
          </div>

          {/* Effect Badge */}
          {post.effect && (
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
              <span className="text-white text-xs">✨ {post.effect}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}