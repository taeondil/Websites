import jsPDF from 'jspdf';
import type { Word } from '../store/wordStore';

interface ExportOptions {
  includeAnswers?: boolean;
}

function generateRandomOptions(correctAnswer: string, allWords: Word[]): string[] {
  const otherDefinitions = allWords
    .filter(word => word.definition !== correctAnswer)
    .map(word => word.definition);
  
  const wrongAnswers = otherDefinitions
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  return [...wrongAnswers, correctAnswer]
    .sort(() => Math.random() - 0.5);
}

export function exportToPdf(words: Word[], options: ExportOptions = {}) {
  if (!words || words.length === 0) {
    throw new Error('Dışa aktarılacak kelime bulunamadı.');
  }

  try {
    const doc = new jsPDF();
    const letters = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'İ', 'J', 'K','L', 'M', 'N', 'O','Ö', 'P', 'R', 'S','Ş', 'T', 'U', 'Ü','V', 'Y', 'Z'];
    
    // Başlık Sayfası
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text('WORD TEST', doc.internal.pageSize.width / 2, 80, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(107, 114, 128); // gray-500
    doc.text(`Toplam ${words.length} Soru`, doc.internal.pageSize.width / 2, 100, { align: 'center' });
    
    // Tarih
    const date = new Date().toLocaleDateString('tr-TR');
    doc.setFontSize(12);
    doc.text(date, doc.internal.pageSize.width / 2, 120, { align: 'center' });

    // Sorular için yeni sayfa
    doc.addPage();

    let yPosition = 30;
    const pageHeight = doc.internal.pageSize.height;
    const lineHeight = 35;
    const pageWidth = doc.internal.pageSize.width;

    words.forEach((word, index) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = 30;
      }

      // Soru numarası ve kelime
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(37, 99, 235); // blue-600
      doc.text(`${index + 1}.`, 20, yPosition);
      doc.setTextColor(31, 41, 55); // gray-800
      doc.text(word.term, 35, yPosition);
      
      // Şıklar
      const options = generateRandomOptions(word.definition, words);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(55, 65, 81); // gray-700
      
      options.forEach((option, idx) => {
        const optionY = yPosition + (idx * 7) + 6;
        
        // Şık için dikdörtgen çiz
        doc.setFillColor(249, 250, 251); // gray-50
        doc.roundedRect(35, optionY - 4, pageWidth - 70, 6, 1, 1, 'F');
        
        // Şık harfi
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(37, 99, 235); // blue-600
        doc.text(letters[idx], 40, optionY);
        
        // Şık metni
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(55, 65, 81); // gray-700
        doc.text(option, 50, optionY);
      });

      yPosition += lineHeight;

      // Her sayfanın altına "Taeondil" yazısını ekle
      if (yPosition > pageHeight - 40 || index === words.length - 1) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(10);
        doc.setTextColor(107, 114, 128); // gray-500
        doc.text('Taeondil', pageWidth / 2, pageHeight - 10, { align: 'center' });
      }
    });

    // Cevap anahtarı
    if (options.includeAnswers) {
      doc.addPage();
      
      // Cevap anahtarı başlığı
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(37, 99, 235); // blue-600
      doc.text('CEVAP ANAHTARI', pageWidth / 2, 30, { align: 'center' });

      const columns = 4;
      const itemsPerColumn = Math.ceil(words.length / columns);
      let currentColumn = 0;
      let currentY = 50;

      words.forEach((word, index) => {
        if (index > 0 && index % itemsPerColumn === 0) {
          currentColumn++;
          currentY = 50;
        }

        const xPosition = 20 + (currentColumn * ((pageWidth - 40) / columns));
        
        // Soru numarası ve cevap
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(37, 99, 235); // blue-600
        doc.text(`${index + 1}.`, xPosition, currentY);
        
        // Doğru cevap
        const options = generateRandomOptions(word.definition, words);
        const correctLetterIndex = options.findIndex(opt => opt === word.definition);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(55, 65, 81); // gray-700
        doc.text(letters[correctLetterIndex], xPosition + 10, currentY);

        currentY += 8;
      });

      // Cevap anahtarı sayfasının altına "Taeondil" yazısını ekle
      doc.setFont('lexend', 'italic','bold');
      doc.setFontSize(20);
      doc.setTextColor(107, 114, 128); // black-500
      doc.text('www.taeondil.com', pageWidth / 2, pageHeight - 10, { align: 'center' });
    }

    doc.save('kelime-testi.pdf');
  } catch (error) {
    console.error('PDF export error:', error);
    throw new Error('PDF dosyası oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
  }
} 