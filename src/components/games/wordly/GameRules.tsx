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
            5 harfli gizli kelimeyi 6 denemede bulmanız gerekiyor.
          </p>
          
          <div>
            <p className="font-medium text-gray-900 mb-2">İpuçları:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-emerald-500 font-medium">Yeşil</span> - Harf doğru yerde
              </li>
              <li>
                <span className="text-yellow-500 font-medium">Sarı</span> - Harf kelimede var ama yanlış yerde
              </li>
              <li>
                <span className="text-gray-500 font-medium">Gri</span> - Harf kelimede yok
              </li>
            </ul>
          </div>

          <p>
            Her tahmin geçerli bir kelime olmalıdır. Enter tuşuna basarak tahmininizi gönderebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}