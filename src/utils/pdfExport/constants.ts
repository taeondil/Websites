// constants.ts - Renk paletini ve fontları güncelle
export const PDF_COLORS = {
  primary: { r: 16, g: 163, b: 127 },   // Modern yeşil
  secondary: { r: 99, g: 102, b: 241 }, // Mor
  text: { r: 31, g: 41, b: 55 },       // Koyu gri
  background: { r: 249, g: 250, b: 251 }, // Açık arkaplan
  accent: { r: 255, g: 105, b: 97 }    // Vurgu rengi
} as const;

// pdfExport.ts - Ana düzenlemeler
import jsPDF from 'jspdf';
import type { Word } from '../store/wordStore';
import { PDF_COLORS } from './constants';

// A4 boyutu için sabitler (mm cinsinden)
const A4_WIDTH = 210;
const A4_HEIGHT = 297;
const MARGIN = 15;

export function exportToPdf(words: Word[], options: ExportOptions = {}) {
  try {
    // A4 boyutunda PDF oluştur
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    });

    // Modern başlık sayfası
    doc.setFillColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
    doc.rect(0, 0, A4_WIDTH, 40, 'F');
    
    // Logo (örnek olarak metin kullanılmıştır)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255);
    doc.text("TAEONDIL", A4_WIDTH/2, 25, { align: 'center' });

    // Ana içerik
    let yPos = 60;
    const QUESTION_SPACING = 25;

    words.forEach((word, index) => {
      // Yeni sayfa kontrolü
      if(yPos > A4_HEIGHT - 30) {
        doc.addPage();
        yPos = MARGIN;
      }

      // Soru numarası
      doc.setFontSize(14);
      doc.setTextColor(PDF_COLORS.primary.r, PDF_COLORS.primary.g, PDF_COLORS.primary.b);
      doc.text(`${index + 1}.`, MARGIN, yPos);

      // Kelime
      doc.setFontSize(12);
      doc.setTextColor(PDF_COLORS.text.r, PDF_COLORS.text.g, PDF_COLORS.text.b);
      doc.text(word.term, MARGIN + 10, yPos);

      // Seçenekler
      const options = generateRandomOptions(word.definition, words);
      options.forEach((option, i) => {
        const optionY = yPos + 8 + (i * 6);
        
        // Modern seçenek kutucukları
        doc.setFillColor(PDF_COLORS.background.r, PDF_COLORS.background.g, PDF_COLORS.background.b);
        doc.roundedRect(MARGIN + 15, optionY - 2, A4_WIDTH - (MARGIN*2 + 15), 5, 2, 2, 'F');
        
        // Seçenek metni
        doc.setFontSize(10);
        doc.setTextColor(PDF_COLORS.text.r, PDF_COLORS.text.g, PDF_COLORS.text.b);
        doc.text(`${LETTERS[i]}. ${option}`, MARGIN + 18, optionY);
      });

      yPos += QUESTION_SPACING;
    });

    // Cevap anahtarı
    if(options.includeAnswers) {
      doc.addPage();
      // Modern cevap anahtarı tasarımı...
    }

    doc.save('modern-test.pdf');
  } catch(error) {
    console.error('Hata:', error);
    throw new Error('PDF oluşturma başarısız oldu');
  }
}