import React from 'react';

interface AudioProgressProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export function AudioProgress({ currentTime, duration, onSeek }: AudioProgressProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div className="w-full space-y-2">
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden group">
        <div
          className="absolute left-0 top-0 h-full bg-emerald-500 rounded-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={(e) => onSeek(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ left: `${progress}%`, transform: `translateX(-50%) translateY(-50%)` }}
        />
      </div>
      <div className="flex justify-between text-sm text-white/60">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}