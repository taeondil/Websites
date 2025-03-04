import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { AudioProgress } from './AudioProgress';

interface AudioPlayerProps {
  audioUrl: string;
  onEnded?: () => void;
}

export function AudioPlayer({ audioUrl, onEnded }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      onEnded?.();
    });

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', () => {
        setIsPlaying(false);
        onEnded?.();
      });
    };
  }, [onEnded]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.error('Audio playback failed');
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleRestart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    if (!isPlaying) {
      audioRef.current.play().catch(() => {
        console.error('Audio playback failed');
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button
            onClick={handleRestart}
            className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
        
        <button
          onClick={toggleMute}
          className="p-3 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      <AudioProgress
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />

      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}