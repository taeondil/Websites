import React from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseSection } from '../../components/exercises/ExerciseSection';
import { contentItems } from '../../data/content';
import { Navigation } from '../../components/common/Navigation';

export function ReadingPage() {
  const { id } = useParams();
  const content = contentItems.find(item => item.id === id && item.type === 'reading');

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
        <h1 className="text-3xl font-bold text-white mb-8">{content.title}</h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="prose prose-invert max-w-none">
            {content.content?.split('\n').map((paragraph, index) => (
              <p key={index} className="text-white/90 mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Alıştırmalar</h2>
        <ExerciseSection exercises={content.exercises} />
      </div>
    </div>
  );
}