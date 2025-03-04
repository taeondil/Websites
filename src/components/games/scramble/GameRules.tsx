import React from 'react';
import { X } from 'lucide-react';

interface GameRulesProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameRules({ isOpen, onClose }: GameRulesProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nasıl Oynanır?</h2>
        
        <div className="space-y-4 text-gray-600">
          <p>
              Sizlere verilen karışık harflerden doğru İngilizce kelimeyi bulmaya çallışın.
          </p>
          
          <div>
            <p className="font-medium text-gray-900 mb-2">İpuçları:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-emerald-500 font-medium">Sadece tek bir deneme hakkınız var</span> 
              </li>
              <li>
                <span className="text-emerald-500 font-medium">Süre kısıtlaması yok</span> 
              </li>
              <li>
                <span className="text-emerald-500 font-medium">Eğer bir hata ile karşılaşırsanız yeniden başlatmayı deneyin</span> 
              </li>
            </ul>
          </div>

          <p>
            Bir sorun ya da eksiklik fark ederseniz lütfen bize bildirin.
          </p>
        </div>
      </div>
    </div>
  );
}