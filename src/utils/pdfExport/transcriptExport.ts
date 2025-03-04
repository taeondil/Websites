import jsPDF from 'jspdf';
import type { PodcastEpisode } from '../../types/podcast';

export function exportTranscriptToPdf(episode: PodcastEpisode) {
  if (!episode.transcript) {
    throw new Error('Bu bölüm için transcript bulunmuyor.');
  }

  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    const lineHeight = 7;

    // Başlık
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(episode.title, pageWidth / 2, 20, { align: 'center' });

    // Tarih ve süre
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(
      `${new Date(episode.date).toLocaleDateString('tr-TR')} • ${episode.duration}`,
      pageWidth / 2,
      30,
      { align: 'center' }
    );

    // Transcript metni
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(
      episode.transcript,
      pageWidth - 2 * margin
    );

    let yPosition = 50;
    splitText.forEach((line: string) => {
      if (yPosition > doc.internal.pageSize.height - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    doc.save(`${episode.title.toLowerCase().replace(/\s+/g, '-')}-transcript.pdf`);
  } catch (error) {
    console.error('PDF export error:', error);
    throw new Error('PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
  }
}