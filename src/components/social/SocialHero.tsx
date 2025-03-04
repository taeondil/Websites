// SocialHero.tsx
import React from 'react';
import { motion } from 'framer-motion';

export function SocialHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-24"
    >
      <h1 className="text-6xl font-bold text-white mb-6">
        Sosyal Medyada <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Taeondil</span>
      </h1>
      <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
        İngilizce öğrenme maceranıza eşlik edecek eğlenceli içerikler, interaktif videolar 
        ve güncel paylaşımlar için sosyal medya hesaplarımızı takip etmeyi unutmayın!
      </p>
    </motion.div>
  );
}