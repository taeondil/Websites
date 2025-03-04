// AnimatedSocialCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedSocialCardProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  delay?: number;
}

export function AnimatedSocialCard({ platform, username, url, icon, delay = 0 }: AnimatedSocialCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center space-x-6 hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      <div className="p-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {platform}
        </h3>
        <p className="text-white/80 mt-1">{username}</p>
      </div>
    </motion.a>
  );
}