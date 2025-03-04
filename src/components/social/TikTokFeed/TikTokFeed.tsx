import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TikTokCard } from './TikTokCard';
import { DEMO_TIKTOK_POSTS } from './data';

export function TikTokFeed() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;
  const totalPages = Math.ceil(DEMO_TIKTOK_POSTS.length / postsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const currentPosts = DEMO_TIKTOK_POSTS.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        TikTok'ta <span className="text-emerald-400">Effektlerimiz</span>
      </h2>
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
      Sende Dene ve Bizi Etiketlemeyi Unutma
        </h2>
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-[9/16] rounded-xl overflow-hidden bg-black/20 backdrop-blur-lg cursor-pointer"
              onClick={() => handleClick(post.url)}
            >
              <TikTokCard post={post} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPage ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}