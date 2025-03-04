import React from 'react';
import { motion } from 'framer-motion';
import { VideoCard } from './VideoCard';
import type { Video } from '../../types/social';

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <VideoCard {...video} />
        </motion.div>
      ))}
    </div>
  );
}