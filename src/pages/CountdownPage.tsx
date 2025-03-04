import React from 'react';
import { Navigation } from '../components/common/Navigation';
import { CountdownSection } from '../components/countdown/CountdownSection';

export default function CountdownPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Sınav Takvimi</h1>
        <p className="text-white/80 mb-12">
          Yaklaşan sınavlar için geri sayım
        </p>
        <CountdownSection />
      </div>
    </div>
  );
}