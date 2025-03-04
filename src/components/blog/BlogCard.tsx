import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const getCategoryStyle = (category: string) => {
    switch(category) {
      case 'exam': return 'bg-blue-500/20 text-blue-400';
      case 'practice': return 'bg-emerald-500/20 text-emerald-400';
      case 'listening': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-pink-500/20 text-pink-400';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'exam': return 'Sınavlar';
      case 'practice': return 'Pratik';
      case 'listening': return 'Dinleme';
      default: return category;
    }
  };

  return (
    <Link 
      to={`/blog/${post.id}`}
      className={`group relative overflow-hidden transition-all duration-300 ${
        featured 
          ? 'flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-xl rounded-2xl'
          : 'bg-white/10 backdrop-blur-xl rounded-2xl hover:transform hover:scale-[1.02]'
      }`}
    >
      <div className={`relative ${featured ? 'md:w-1/2' : 'aspect-video w-full'}`}>
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
      </div>
      
      <div className={`${featured ? 'md:w-1/2' : ''} p-6`}>
        <div className="mb-4 flex flex-wrap gap-2">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getCategoryStyle(post.category)}`}>
            {getCategoryName(post.category)}
          </span>
          {post.tags.slice(0, 2).map(tag => (
            <span key={tag} className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white/80">
              {tag}
            </span>
          ))}
        </div>

        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-white mb-3 line-clamp-2`}>
          {post.title}
        </h3>
        
        <p className="text-white/80 mb-4 line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <span className="text-sm font-medium">Devamını Oku</span>
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}