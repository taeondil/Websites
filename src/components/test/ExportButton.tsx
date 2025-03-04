import React, { useState, useRef, useEffect } from 'react';
import { FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';
import { Word } from '../../store/wordStore';

interface ExportButtonProps {
  words: Word[];
}

export function ExportButton({ words }: ExportButtonProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExport = async (includeAnswers: boolean) => {
    try {
      if (words.length === 0) {
        alert('Dışa aktarılacak kelime bulunamadı.');
        return;
      }

      exportToPdf(words, { includeAnswers });
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Export failed:', error);
      alert(error instanceof Error ? error.message : 'Dışa aktarma sırasında bir hata oluştu.');
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
        disabled={words.length === 0}
      >
        <FileDown className="w-5 h-5" />
        <span>PDF'e Aktar</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-10">
          <button
            onClick={() => handleExport(false)}
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Sadece Sorular
          </button>
          <button
            onClick={() => handleExport(true)}
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Sorular ve Cevap Anahtarı
          </button>
        </div>
      )}
    </div>
  );
}