import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'instagram' | 'twitter';
  content: string;
  imageUrl?: string;
  date: string;
  likes: number;
  comments: number;
  link: string;
}

const DEMO_POSTS: SocialPost[] = [
  {
    id: '1',
    platform: 'twitter',
    content: 'İlginç Fun Fact bilgiler ile karşınızdayız! 🌟',
    date: '2024-03-19',
    imageUrl: 'https://i.hizliresim.com/8c5kyci.png?_gl=1*d16pdf*_ga*MTMyMzA4NzEwMi4xNzMxOTYzMTk5*_ga_M9ZRXYS2YN*MTc0MDI2NzQwMS4xNi4xLjE3NDAyNjc4NjcuNDMuMC4w',

    likes: 89,
    comments: 12,
    link: 'https://twitter.com'
  },
  {
    id: '2',
    platform: 'instagram',
    content: 'İngilizce ile ilgili Idiomler 💬',
    imageUrl: 'https://i.hizliresim.com/iiw53et.jpg?_gl=1*1yxh7bq*_ga*MTMyMzA4NzEwMi4xNzMxOTYzMTk5*_ga_M9ZRXYS2YN*MTc0MDI2NzQwMS4xNi4xLjE3NDAyNjgyMTUuNDAuMC4w',
    date: '2024-03-18',
    likes: 243,
    comments: 45,
    link: 'https://instagram.com'
  }, {
    id: '3',
    platform: 'twitter',
    content: 'Günlük Olarak Paylaşılan Kelime Soruları 💬',
    date: '2024-02-21',
    imageUrl: 'https://i.hizliresim.com/7ms7qas.png?_gl=1*fnxnbd*_ga*MTMyMzA4NzEwMi4xNzMxOTYzMTk5*_ga_M9ZRXYS2YN*MTc0MDI2NzQwMS4xNi4xLjE3NDAyNjgwNDcuNDAuMC4w',

    likes: 89,
    comments: 12,
    link: 'https://twitter.com'
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function SocialFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % DEMO_POSTS.length);
      }, AUTOPLAY_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + DEMO_POSTS.length) % DEMO_POSTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DEMO_POSTS.length);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Sosyal Medyada <span className="text-emerald-400">Taeondil</span>
      </h2>

      <div 
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => {
                const postIndex = (currentIndex + i) % DEMO_POSTS.length;
                const post = DEMO_POSTS[postIndex];

                return (
                  <a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    {post.imageUrl && (
                      <div className="relative h-48">
                        <img
                          src={post.imageUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          {post.platform === 'instagram' ? (
                            <Instagram className="w-6 h-6 text-white" />
                          ) : (
                            <Twitter className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      {!post.imageUrl && (
                        <div className="flex justify-end mb-4">
                          {post.platform === 'instagram' ? (
                            <Instagram className="w-6 h-6 text-white" />
                          ) : (
                            <Twitter className="w-6 h-6 text-white" />
                          )}
                        </div>
                      )}
                      <p className="text-white/90 mb-4">{post.content}</p>
                      <div className="flex items-center justify-between text-white/60 text-sm">
                        <span>{formatDate(post.date)}</span>
                        <div className="flex items-center space-x-4">
                          <span>❤️ {post.likes}</span>
                          <span>💬 {post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {DEMO_POSTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}