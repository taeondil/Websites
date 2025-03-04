import React, { useEffect } from 'react';
import type { PodcastEpisode } from '../../types/podcast';
import { X, FileDown, Calendar, Clock } from 'lucide-react';
import { exportTranscriptToPdf } from '../../utils/pdfExport/transcriptExport';

interface PodcastPlayerProps {
  episode: PodcastEpisode;
  onClose: () => void;
}

export function PodcastPlayer({ episode, onClose }: PodcastPlayerProps) {
  useEffect(() => {
    // Otomatik oynatma için iframe yüklenir
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.src = episode.spotifyUrl;
    }
  }, [episode]);

  const handleExportTranscript = async () => {
    try {
      await exportTranscriptToPdf(episode);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Bir hata oluştu');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-emerald-900/90 to-teal-900/90 backdrop-blur-xl w-full max-w-4xl rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-white mb-2">{episode.title}</h2>
          <div className="flex items-center gap-4 text-emerald-200/60 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(episode.date).toLocaleDateString('tr-TR')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Spotify Player */}
          <div className="w-full bg-black/20 rounded-xl overflow-hidden">
            <iframe
              src={episode.spotifyUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
              allowFullScreen
            />
          </div>

          {/* Description */}
          <div className="text-emerald-100/80">{episode.description}</div>

          {/* Transcript */}
          {episode.transcript && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Transcript</h3>
                <button
                  onClick={handleExportTranscript}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 
                           text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>PDF İndir</span>
                </button>
              </div>
              <div className="bg-emerald-500/10 backdrop-blur-md rounded-xl p-6 max-h-60 overflow-y-auto custom-scrollbar">
                <p className="text-emerald-100/90 whitespace-pre-line leading-relaxed">
                  {episode.transcript}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}