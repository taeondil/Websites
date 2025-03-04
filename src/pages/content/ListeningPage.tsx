import React from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseSection } from '../../components/exercises/ExerciseSection';
import { contentItems } from '../../data/content';
import { Navigation } from '../../components/common/Navigation';
import { AudioPlayer } from '../../components/audio/AudioPlayer';

export function ListeningPage() {
  const { id } = useParams();
  const content = contentItems.find(item => item.id === id && item.type === 'listening');

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <Navigation backTo="/reading-listening" />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">İçerik bulunamadı</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <Navigation backTo="/reading-listening" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">{content.title}</h1>
          
          <div className="mb-12">
            <AudioPlayer 
              audioUrl={`/audio/${content.audioFile}`}
            />
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Alıştırmalar</h2>
          <ExerciseSection exercises={content.exercises} />
        </div>
      </div>
    </div>
  );
}