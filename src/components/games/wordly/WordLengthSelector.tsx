import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface WordLengthSelectorProps {
  onSelect: (length: number) => void;
}

export function WordLengthSelector({ onSelect }: WordLengthSelectorProps) {
  const lengths = [4, 5, 6, 7, 8];

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/images/logo.png" 
            alt="Taeondil Logo" 
            className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
          />
          <div className="text-white font-bold text-2xl group-hover:text-emerald-400 transition-colors">
            TAEONDİL
          </div>
        </Link>
        <Link 
          to="/game"
          className="text-white/80 hover:text-white transition-colors"
        >
          Geri Dön
        </Link>
      </div>

      <div className="text-center space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Kelime Uzunluğu</h2>
          <p className="text-white/80">Oynamak istediğiniz kelime uzunluğunu seçin</p>
        </div>

        <div className="flex justify-center gap-4">
          {lengths.map((length) => (
            <motion.button
              key={length}
              onClick={() => onSelect(length)}
              className="w-16 h-16 bg-white/10 rounded-xl text-white text-xl font-bold hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {length}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}