import jsPDF from 'jspdf';
import type { Word } from '../../store/wordStore';
import { PDF_COLORS, LETTERS } from './constants';
import { generateRandomOptions, encodeTurkishChars } from './helpers';

interface ExportOptions {
  includeAnswers?: boolean;
}

export function exportToPdf(words: Word[], options: ExportOptions = {}) {
  if (!words || words.length === 0) {
    throw new Error('Disa aktarilacak kelime bulunamadi.');
  }

  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Logo ve başlık sayfası
    const logoImg = new Image();
    logoImg.src = '/images/logo.png';
    
    doc.addImage(logoImg, 'PNG', pageWidth / 2 - 20, 30, 40, 40);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
    doc.text('TAEONDIL', pageWidth / 2, 90, { align: 'center' });
    
    doc.setFontSize(24);
    doc.text('KELIME TESTI', pageWidth / 2, 110, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(PDF_COLORS.textLight.r, PDF_COLORS.textLight.g, PDF_COLORS.textLight.b);
    doc.text(`Toplam ${words.length} Soru`, pageWidth / 2, 130, { align: 'center' });
    
    const date = new Date().toLocaleDateString('en-US');
    doc.setFontSize(12);
    doc.text(date, pageWidth / 2, 150, { align: 'center' });

    // Sorular için yeni sayfa
    doc.addPage();

    let yPosition = 30;
    const lineHeight = 35;

    words.forEach((word, index) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = 30;
      }

      // Soru numarası ve kelime
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
      doc.text(`${index + 1}.`, 20, yPosition);
      doc.setTextColor(PDF_COLORS.text.r, PDF_COLORS.text.g, PDF_COLORS.text.b);
      doc.text(encodeTurkishChars(word.term), 35, yPosition);
      
      // Şıklar
      const options = generateRandomOptions(word.definition, words);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(PDF_COLORS.optionText.r, PDF_COLORS.optionText.g, PDF_COLORS.optionText.b);
      
      options.forEach((option, idx) => {
        const optionY = yPosition + (idx * 7) + 6;
        
        doc.setFillColor(PDF_COLORS.optionBg.r, PDF_COLORS.optionBg.g, PDF_COLORS.optionBg.b);
        doc.roundedRect(35, optionY - 4, pageWidth - 70, 6, 1, 1, 'F');
        
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
        doc.text(LETTERS[idx], 40, optionY);
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(PDF_COLORS.optionText.r, PDF_COLORS.optionText.g, PDF_COLORS.optionText.b);
        doc.text(encodeTurkishChars(option), 50, optionY);
      });

      yPosition += lineHeight;
    });

    // Cevap anahtarı
    if (options.includeAnswers) {
      doc.addPage();
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
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
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
        doc.text(`${index + 1}.`, xPosition, currentY);
        
        const options = generateRandomOptions(word.definition, words);
        const correctLetterIndex = options.findIndex(opt => opt === word.definition);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(PDF_COLORS.text.r, PDF_COLORS.text.g, PDF_COLORS.text.b);
        doc.text(LETTERS[correctLetterIndex], xPosition + 10, currentY);

        currentY += 8;
      });
    }

    doc.save('kelime-testi.pdf');
  } catch (error) {
    console.error('PDF export error:', error);
    throw new Error('PDF dosyasi olusturulurken bir hata olustu. Lutfen tekrar deneyin.');
  }
}