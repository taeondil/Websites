import { Document, Paragraph, TextRun, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';
import type { Word } from '../store/wordStore';

interface ExportOptions {
  includeAnswers?: boolean;
}

export async function exportToWord(words: Word[], options: ExportOptions = {}) {
  if (!words || words.length === 0) {
    throw new Error('Dışa aktarılacak kelime bulunamadı.');
  }

  try {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: "Kelime Testi",
            heading: 1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: `Toplam Soru Sayısı: ${words.length}`,
            spacing: { before: 400, after: 400 },
          }),
          ...words.flatMap((word, index) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${index + 1}. ${word.term}`,
                  bold: true,
                }),
              ],
              spacing: { before: 200 },
            }),
            ...(options.includeAnswers ? [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Cevap: ${word.definition}`,
                    color: "666666",
                  }),
                ],
                indent: { left: 720 },
                spacing: { after: 200 },
              }),
            ] : []),
          ]),
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "kelime-testi.docx");
  } catch (error) {
    console.error('Word export error:', error);
    throw new Error('Word dosyası oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
  }
}