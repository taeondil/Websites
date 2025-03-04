import React, { useState, useRef } from 'react';
import { Navigation } from '../components/common/Navigation';
import { grammarTopics } from '../data/grammar';
import { Book, CheckCircle2, Dot, ArrowRight, Trophy, ChevronRight, Target, BarChart3, Star, Download } from 'lucide-react';
import type { GrammarTest, GrammarTopic, ContentSection } from '../types/grammar';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// CSS stilleri
const styles = `
  .grid-paper {
    background-color: #f5f5dc;
    background-image: linear-gradient(90deg, rgba(200, 200, 200, 0.1) 1px, transparent 1px),
                      linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .highlight {
    background-color: #ffff99;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .grammar-content {
    font-family: 'Georgia', serif;
    color: #4a4a4a;
    line-height: 1.6;
  }
`;

export default function GrammarPage() {
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [selectedTest, setSelectedTest] = useState<GrammarTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  

  // Konu seçme fonksiyonu
  const handleTopicSelect = (topic: GrammarTopic) => {
    setSelectedTopic(topic);
    setSelectedTest(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  // Test başlatma fonksiyonu
  const handleStartTest = (test: GrammarTest) => {
    setSelectedTest(test);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  // Cevap verme fonksiyonu
  const handleAnswer = (answer: string) => {
    if (!selectedTest) return;

    setAnswers(prev => ({
      ...prev,
      [selectedTest.questions[currentQuestionIndex].id]: answer
    }));

    if (currentQuestionIndex < selectedTest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  // Skor hesaplama fonksiyonu
  const calculateScore = () => {
    if (!selectedTest) return 0;
    let correct = 0;
    selectedTest.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / selectedTest.questions.length) * 100;
  };

  // Konulara geri dönme fonksiyonu
  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setSelectedTest(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  // Testlere geri dönme fonksiyonu
  const handleBackToTests = () => {
    setSelectedTest(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  // İçerik render etme fonksiyonu
  const renderGrammarContent = (sections: ContentSection[]) => {
    return sections.map((section, index) => {
      switch (section.type) {
        case 'usage':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-gray-700">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg highlight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

        case 'formation':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4">
                    <code className="text-lg font-mono text-pink-600">{item}</code>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'examples':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((example, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{i + 1}</span>
                    </div>
                    <span className="text-lg text-gray-700">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'timeExpressions':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">{section.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {section.items.map((expression, i) => (
                  <div key={i} className="bg-emerald-500/20 rounded-lg p-3">
                    <span className="text-gray-700">{expression}</span>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'keyRules':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-orange-600 mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((rule, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex-shrink-0 flex items-center justify-center">
                      <Dot className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex-grow">
                      <p className="text-lg text-gray-700">{rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'notes':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-green-600 mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((notes, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex-grow">
                      <p className="text-lg text-gray-700">{notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'tips':
          return (
            <div key={index} className="grid-paper p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((tips, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex-grow">
                      <p className="text-lg text-gray-700">{tips}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

        default:
          return (
            <p key={index} className="grammar-content text-gray-700 mb-4">
              {section.items.join('\n')}
            </p>
          );
      }
    });
  };

  // Filtrelenmiş konular
  const filteredTopics = grammarTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Seçili test sonuçlarını göster
  if (selectedTest && showResults) {
    const score = calculateScore();
    const percentage = Math.round(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <style>{styles}</style>
        <Navigation />
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={handleBackToTests}
            className="text-white hover:text-emerald-400 transition-colors mb-8 flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Testlere Dön</span>
          </button>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-emerald-500/20 rounded-full mb-4">
                <Trophy className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Test Tamamlandı!</h2>
              <p className={`text-xl font-medium ${percentage >= 70 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                {percentage >= 70 ? 'Tebrikler!' : 'Biraz daha çalışmalısın!'}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{percentage}%</div>
                <div className="text-white/60 text-sm">Başarı</div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  {Object.values(answers).filter((answer, index) =>
                    answer === selectedTest.questions[index].correctAnswer
                  ).length}/{selectedTest.questions.length}
                </div>
                <div className="text-white/60 text-sm">Doğru Cevap</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Cevaplarınız</h3>
              {selectedTest.questions.map((question, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6">
                  <p className="text-white mb-4">{question.question}</p>
                  <div className="grid gap-2">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-4 rounded-lg ${
                          option === question.correctAnswer
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : option === answers[question.id]
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-white/5 text-white/60'
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleBackToTests}
              className="w-full mt-8 p-4 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all duration-300"
            >
              Yeni Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Seçili testi göster
  if (selectedTest) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <style>{styles}</style>
        <Navigation />
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={handleBackToTests}
            className="text-white hover:text-emerald-400 transition-colors mb-8 flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Testlere Dön</span>
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">{selectedTest.title}</h2>
                <div className="text-white/60">
                  Soru {currentQuestionIndex + 1}/{selectedTest.questions.length}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-indigo-900/30 rounded-xl p-6">
                  <p className="text-xl text-white">
                    {selectedTest.questions[currentQuestionIndex].question}
                  </p>
                </div>

                <div className="grid gap-4">
                  {selectedTest.questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Seçili konuyu göster
  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <style>{styles}</style>
        <Navigation />
        <div className="container mx-auto px-6 py-12" ref={contentRef}>
          <button
            onClick={handleBackToTopics}
            className="text-white hover:text-emerald-400 transition-colors mb-8 flex items-center gap-2 print:hidden"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Tüm Konular</span>
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedTopic.title}</h2>
                
              </div>
              <div className="prose prose-invert max-w-none">
                {renderGrammarContent(selectedTopic.content)}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Konu Testleri</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedTopic.tests.map((test) => (
                  <button
                    key={test.id}
                    onClick={() => handleStartTest(test)}
                    className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 text-left group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{test.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{test.description}</p>
                    <div className="flex items-center text-emerald-400 text-sm">
                      <span>Teste Başla</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Ana sayfa (konu listesi)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <style>{styles}</style>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Dil Bilgisi</h1>
        <p className="text-white/80 mb-12">
          İngilizce dil bilgisi konularını öğrenin ve kendinizi test edin
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Konu ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleTopicSelect(topic)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-left hover:bg-white/20 transition-all duration-300 h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-emerald-500/20 rounded-xl w-fit">
                  <Book className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
                  <p className="text-white/80">{topic.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}