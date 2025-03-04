import React from 'react';
import { ScrollText, GamepadIcon, BookOpen, Mic, GraduationCap, Timer, BookMarked, BookText } from 'lucide-react';
import { HomeFeatureCard } from './HomeFeatureCard';

export function HomeFeatures() {
  const features = [
    {
      to: '/words',
      icon: BookMarked,
      title: 'Kelimeler',
      description: 'Seviyene uygun kelime listelerini incele ve test oluştur. A1\'den C2\'ye kadar tüm seviyelerde kelime hazineni geliştir.',
      delay: 0,
      iconColor: 'pink-400'
    },
    {
      to: '/test',
      icon: ScrollText,
      title: 'Test',
      description: 'Kendi kelime listenizi yükleyerek kolayca test oluşturabilirsiniz. Bu alanda fonetik çalışmaları da yapabilirsiniz.',
      delay: 100,
      iconColor: 'emerald-400'
    },
    {
      to: '/game',
      icon: GamepadIcon,
      title: 'Oyun',
      description: 'Eğer eğlenerek öğrenmek istiyorsanız, bu bölümdeki oyunlar tam size göre.',
      delay: 200,
      iconColor: 'blue-400'
    },
    {
      to: '/reading-listening',
      icon: BookOpen,
      title: 'Okuma / Dinleme',
      description: 'Farklı seviyeler için hazırlanmış İngilizce okuma ve dinleme pratiği için içerikler burada.',
      delay: 300,
      iconColor: 'purple-400'
    },
    {
      to: '/podcast',
      icon: Mic,
      title: 'Podcast',
      description: 'İngilizce öğrenme yolculuğunuzda size eşlik edecek podcast bölümlerimizi dinleyin.',
      delay: 400,
      iconColor: 'green-400'
    },
    {
      to: '/grammar',
      icon: GraduationCap,
      title: 'Dil Bilgisi',
      description: 'İngilizce dil bilgisi konularını öğrenin ve kendinizi test edin.',
      delay: 500,
      iconColor: 'yellow-400'
    },
    {
      to: '/blog',
      icon: BookText,
      title: 'Blog',
      description: 'İngilizce öğrenme ipuçları, stratejiler ve ilham verici içerikler.',
      delay: 600,
      iconColor: 'red-400'
    },
    {
      to: '/countdown',
      icon: Timer,
      title: 'Sınav Takvimi',
      description: 'Yaklaşan sınavları takip edin ve hazırlıklarınızı planlayın.',
      delay: 700,
      iconColor: 'indigo-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <HomeFeatureCard key={feature.to} {...feature} />
      ))}
    </div>
  );
}