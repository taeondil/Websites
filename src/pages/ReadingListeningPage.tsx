import React, { useState } from 'react';
import { BookOpen, Headphones } from 'lucide-react';
import { contentItems } from '../data/content';
import { ContentCard } from '../components/content/ContentCard';
import { Navigation } from '../components/common/Navigation';

export default function ReadingListeningPage() {
  const [activeTab, setActiveTab] = useState<'reading' | 'listening'>('reading');
  const filteredContent = contentItems.filter(item => item.type === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <Navigation />
      
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12">Okuma ve Dinleme</h1>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <button 
            onClick={() => setActiveTab('reading')}
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-4 transition-all duration-300 ${
              activeTab === 'reading' ? 'ring-2 ring-emerald-500' : ''
            }`}
          >
            <div className="flex items-center space-x-3 text-white">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">Okuma</h2>
            </div>
            <p className="text-white/80 text-left">
              Farklı seviyelerde İngilizce okuma parçaları ile okuma ve anlama becerilerinizi geliştirin.
            </p>
          </button>

          <button 
            onClick={() => setActiveTab('listening')}
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-4 transition-all duration-300 ${
              activeTab === 'listening' ? 'ring-2 ring-emerald-500' : ''
            }`}
          >
            <div className="flex items-center space-x-3 text-white">
              <Headphones className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">Dinleme</h2>
            </div>
            <p className="text-white/80 text-left">
              Çeşitli konularda dinleme egzersizleri ile dinleme ve anlama yeteneklerinizi ilerletin.
            </p>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredContent.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}