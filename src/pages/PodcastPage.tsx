import React, { useState } from 'react';
import { Navigation } from '../components/common/Navigation';
import { PodcastCard } from '../components/podcast/PodcastCard';
import { PodcastPlayer } from '../components/podcast/PodcastPlayer';
import { podcastEpisodes } from '../data/podcasts';
import type { PodcastEpisode } from '../types/podcast';
import { Mic, Sparkles, Search } from 'lucide-react';

export default function PodcastPage() {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(null);
  const [activeTab, setActiveTab] = useState<'spotify' | 'youtube'>('spotify');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tab: 'spotify' | 'youtube') => {
    setActiveTab(tab);
  };

  // Arama işlevi (sadece title kısmında arama yapar)
  const filteredEpisodes = podcastEpisodes.filter((episode) =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white/10 to-purple-500/30 backdrop-blur-lg p-8 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0" />
          <div className="relative flex flex-col sm:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center transform -rotate-6 shadow-2xl">
              <Mic className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Taeondil Podcast</h1>
              <p className="text-white/90 text-lg sm:text-xl max-w-3xl leading-relaxed">
                İngilizce öğrenme yolculuğunuzda size eşlik edecek, ilham verici ve eğitici podcast bölümleri.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Bölüm ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white placeholder-white/60 flex-1 ml-2"
            />
          </div>
        </div>

        

        {/* Episode Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map((episode) => (
              <PodcastCard
                key={episode.id}
                episode={episode}
                onSelect={setSelectedEpisode}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-white/80 py-8">
              Aradığınız kriterlere uygun bölüm bulunamadı.
            </div>
          )}
        </div>
      </div>

      {selectedEpisode && (
        <PodcastPlayer
          episode={selectedEpisode}
          onClose={() => setSelectedEpisode(null)}
        />
      )}
    </div>
  );
}