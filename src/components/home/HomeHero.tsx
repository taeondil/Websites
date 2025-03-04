import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogFeed } from '../blog/BlogFeed';

export function HomeHero() {
  return (
    <div className="space-y-24">
      <div className="relative mb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="/public/images/background.png" 
            alt="Background" 
            className="w-full h-full object-cover rounded-3xl"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-700/80 to-purple-800/80 rounded-3xl" />
        </div>

        {/* Content */}
        <div className="relative py-24 px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Kelime Öğreniminin
            <span className="block text-emerald-400">En Eğlenceli</span>
            Adresi
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Çeşitli test modları ve İngilizce ile alakalı bir çok oyun ile kelime öğrenme ve pratik yapmak 
            artık daha eğlenceli ve daha kolay.
          </p>
          
          <Link 
            to="/test"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 
                     text-white px-8 py-4 rounded-full text-lg font-medium 
                     hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 
                     transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Hemen Başla</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Blog Feed Section */}
      <BlogFeed />
    </div>
  );
}