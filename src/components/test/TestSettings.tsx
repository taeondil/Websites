import React, { useState } from 'react';
import { CheckCircle2, Clock, Shuffle } from 'lucide-react'; // Shuffle ikonu eklendi
import { useTestStore } from '../../store/testStore';

function TestSettings() {
  const { setTestType, setTimerSettings, setRandomizeOrder } = useTestStore();
  const [selectedOption, setSelectedOption] = useState<string>('multiple');
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timePerQuestion, setTimePerQuestion] = useState(30);
  const [randomizeOrderEnabled, setRandomizeOrderEnabled] = useState(false); // Yeni state

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setTestType(value as 'multiple' | 'written' | 'matching');
  };

  const handleTimerChange = (enabled: boolean) => {
    setTimerEnabled(enabled);
    setTimerSettings(enabled, timePerQuestion);
  };

  const handleTimeChange = (value: number) => {
    setTimePerQuestion(value);
    setTimerSettings(timerEnabled, value);
  };

  const handleRandomizeOrderChange = (enabled: boolean) => {
    setRandomizeOrderEnabled(enabled);
    setRandomizeOrder(enabled);
  };

  const options = [
    { id: 'multiple', label: 'Çoktan Seçmeli', description: 'Verilen kelimeye ait doğru tanımı seçin' },
    { id: 'written', label: 'Yazılı', description: 'Kelimenin tanımını yazarak cevaplayın (Bu alanda fonatik çalışmasıda yapabilirsiniz.)' },
    { id: 'matching', label: 'Eşleştirme', description: 'Kelimeleri tanımlarıyla eşleştirin' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Test Ayarları</h2>
      
      <div className="space-y-3">
        {options.map((option) => (
          <label 
            key={option.id}
            className={`flex items-start space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
              selectedOption === option.id 
                ? 'bg-indigo-800/50 ring-2 ring-emerald-500/50' 
                : 'bg-indigo-900/30 hover:bg-indigo-900/40'
            }`}
          >
            <input
              type="radio"
              name="testType"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={(e) => handleOptionChange(e.target.value)}
              className="hidden"
            />
            <div className={`w-6 h-6 rounded-full border-2 transition-colors flex items-center justify-center ${
              selectedOption === option.id 
                ? 'border-emerald-500 bg-emerald-500/20' 
                : 'border-emerald-500/50'
            }`}>
              <CheckCircle2 
                className={`w-5 h-5 text-emerald-500 transition-opacity ${
                  selectedOption === option.id ? 'opacity-100' : 'opacity-0'
                }`} 
              />
            </div>
            <div>
              <span className="text-white font-medium block mb-1">{option.label}</span>
              <span className="text-white/60 text-sm">{option.description}</span>
            </div>
          </label>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-white mb-10" />
            <span className="text-white font-medium mb-10">Süre Sınırı</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer mb-10">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={timerEnabled}
              onChange={(e) => handleTimerChange(e.target.checked)}
            />
            <div className="w-11 h-6 bg-indigo-900/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>

        {timerEnabled && (
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="5"
              max="300"
              value={timePerQuestion}
              onChange={(e) => handleTimeChange(Number(e.target.value))}
              className="w-24 px-3 py-2 bg-indigo-900/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <span className="text-white/60">saniye</span>
          </div>
        )}
      </div>

      {/* Rastgele Sıralama Butonu */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shuffle className="w-5 h-5 text-white mb-10" />
            <span className="text-white font-medium mb-10">Rastgele Sırala</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer mb-10">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={randomizeOrderEnabled}
              onChange={(e) => handleRandomizeOrderChange(e.target.checked)}
            />
            <div className="w-11 h-6 bg-indigo-900/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default TestSettings;