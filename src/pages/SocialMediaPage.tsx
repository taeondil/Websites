// SocialMediaPage.tsx
import React from 'react';
import { Navigation } from '../components/common/Navigation';
import { AnimatedSocialCard } from '../components/social/AnimatedSocialCard';
import { VideoGrid } from '../components/social/VideoGrid';
import { SocialHero } from '../components/social/SocialHero';
import { SocialFeed } from '../components/social/SocialFeed';
import { TikTokFeed } from '../components/social/TikTokFeed/TikTokFeed';
import { socialAccounts } from '../data/socialAccounts';
import { featuredVideos } from '../data/featuredVideos';
import { motion } from 'framer-motion';

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Sosyal Medya</h1>
        
        {/* Sosyal Medya Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialAccounts.map((account) => (
            <a
              key={account.platform}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl border border-white/20">
                <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                  <img
                    src={account.icon}
                    alt={account.platform}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{account.platform}</h2>
                <p className="text-gray-300 text-sm text-center">{account.username}</p>
                <p className="text-gray-400 text-xs text-center mt-2">{account.description}</p>
              </div>
            </a>
          ))}
        </div>

        <SocialHero />

        {/* Sosyal Medya Feed'i */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-28"
        >
          <SocialFeed />
        </motion.div>

        {/* TikTok Feed'i */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-28"
        >
          <TikTokFeed />
        </motion.div>

        {/* Öne Çıkan İçerikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            FARKLI İÇERİKLER <span className="text-cyan-400">İÇİN</span>
          </h2>
          <VideoGrid videos={featuredVideos} />
        </motion.div>
      </div>
    </div>
  );
}