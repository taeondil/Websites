import React from 'react';
import { HomeHeader } from '../components/home/HomeHeader';
import { HomeHero } from '../components/home/HomeHero';
import { HomeFeatures } from '../components/home/HomeFeatures';
import { DailyWord } from '../components/home/DailyWord';
import { useDailyWord } from '../hooks/useDailyWord';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Sayfa yüklenirken hata oluştu:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Bir şeyler yanlış gitti. Lütfen sayfayı yenileyin.</div>;
    }

    return this.props.children;
  }
}

const HomePage = () => {
  const dailyWord = useDailyWord();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 
                      flex flex-col safe-padding">
        <HomeHeader />

        <main className="flex-1 container mx-auto px-6 py-12">
          <HomeHero />
          
          <div className="my-16">
            <DailyWord
              word={dailyWord.word}
              pronunciation={dailyWord.pronunciation}
              meaning={dailyWord.meaning}
              example={dailyWord.example}
              type={dailyWord.type}
            />
          </div>
          
          <HomeFeatures />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default HomePage;