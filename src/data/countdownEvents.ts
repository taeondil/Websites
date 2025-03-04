import { CountdownEvent } from '../types/countdown';

export const countdownEvents: CountdownEvent[] = [
  {
    id: '1',
    title: 'YÖKDİL/1',
    description: 'Yükseköğretim Kurumları Yabancı Dil Sınavı - İlkbahar Dönemi',
    date: '2025-02-16T07:00:00.000Z',
    color: 'from-blue-400 to-blue-600',
    details: {
      location: 'Türkiye Geneli',
      duration: '180 dakika',
      questionCount: '80 Soru',
      fee: '750 TL',
      requirements: [
        'Başvuru Tarihleri: 03.01.2025 11:00 / 09.01.2025 23:59',
        'Geç Başvuru Günü: 16.01.2025 - 16.01.2025 23:59',
        'Sonuç Tarihi: 06.03.2025'
      ],
      notes: 'Adaylar sınav başlama saatinden en az 1 saat önce sınav yerinde hazır bulunmalıdır.'
    }
  },
  {
    id: '2',
    title: 'YDS/1',
    description: 'Yabancı Dil Bilgisi Seviye Tespit Sınavı - İlkbahar Dönemi',
    date: '2025-03-09T07:00:00.000Z',
    color: 'from-emerald-400 to-emerald-600',
    details: {
      location: 'Türkiye Geneli',
      duration: '180 dakika',
      questionCount: '80 Soru',
      fee: '750 TL',
      requirements: [
        'Başvuru Tarihleri: 22.01.2025 11:00 / 29.01.2025 23:59',
        'Geç Başvuru Günü: 07.02.2025 / 07.02.2025 23:59',
        'Sonuç Tarihi: 04.04.2025'
      ],
      notes: 'Sınav sonuçları ÖSYM\'nin https://sonuc.osym.gov.tr adresinden açıklanacaktır.'
    }
  },
  {
    id: '3',
    title: 'YKS/YDT',
    description: 'Yükseköğretim Kurumları Sınavı - Yabancı Dil Testi',
    date: '2025-06-22T07:00:00.000Z',
    color: 'from-violet-400 to-violet-600',
    details: {
      location: 'Türkiye Geneli',
      duration: '120 dakika',
      questionCount: '80 Soru',
      fee: '450 TL',
      requirements: [
        'Başvuru Tarihleri: 06.02.2025 14:45 / 03.03.2025 23:59',
        'Geç Başvuru Günü: 11.03.2025 / 13.03.2025 23:59',
        'Sonuç Tarihi: 22.07.2025'
      ],
      notes: 'YDT\'ye girmek isteyen adaylar, TYT sınavına da girmek zorundadır.'
    }
  },
  {
    id: '4',
    title: 'YÖKDİL/2',
    description: 'Yükseköğretim Kurumları Yabancı Dil Sınavı - Sonbahar Dönemi',
    date: '2025-07-27T07:00:00.000Z',
    color: 'from-rose-400 to-rose-600',
    details: {
      location: 'Türkiye Geneli',
      duration: '180 dakika',
      questionCount: '80 Soru',
      fee: '750 TL',
      requirements: [
        'Başvuru Tarihleri: 11.06.2025 / 18.06.2025',
        'Geç Başvuru Günü: 25.06.2025 / 25.06.2025 23:59',
        'Sonuç Tarihi: 15.08.2025'
      ],
      notes: 'Adaylar sınav başlama saatinden en az 1 saat önce sınav yerinde hazır bulunmalıdır.'
    }
  },
  {
    id: '5',
    title: 'YDS/2',
    description: 'Yabancı Dil Bilgisi Seviye Tespit Sınavı - Sonbahar Dönemi',
    date: '2025-11-16T07:00:00.000Z',
    color: 'from-amber-400 to-amber-600',
    details: {
      location: 'Türkiye Geneli',
      duration: '180 dakika',
      questionCount: '80 Soru',
      fee: '750 TL',
      requirements: [
        'Başvuru Tarihleri: 30.09.2025 / 08.10.2025',
        'Geç Başvuru Günü: 15.10.2025 / 15.10.2025 23:59',
        'Sonuç Tarihi: 05.12.2025'
      ],
      notes: 'Sınav sonuçları ÖSYM\'nin https://sonuc.osym.gov.tr adresinden açıklanacaktır.'
    }
  },
  {
    id: '6',
    title: 'E-TEP',
    description: 'Electronic Test of English Proficiency',
    date: '0000-00-00T00:00:00.000Z',
    color: 'from-cyan-400 to-cyan-600',
    details: {
      location: 'Türkiye Geneli',
      duration: '240 dakika',
      questionCount:'4 Bölümden Oluşmaktadır',
      fee: 'Belirtilmedi TL',
      requirements: [
        'E-TEP (Electronic Test of English Proficiency), Türkiye\'de ÖSYM tarafından geliştirilen ve İngilizce dil yeterliliğini dört temel beceri üzerinden (okuma, dinleme, yazma, konuşma) ölçen bir sınavdır. Bu sınav, TOEFL ve IELTS gibi uluslararası geçerliliği olan sınavlara alternatif olarak tasarlanmıştır. E-TEP, yalnızca dilbilgisi veya okuma odaklı geleneksel sınavların aksine, adayların gerçek hayatta İngilizceyi kullanma becerilerini kapsamlı bir şekilde değerlendirmeyi hedefler ',
        'Toplam süre pilot uygulamada 240 dakika (4 saat) olarak belirlenmiş olsa da, ileride 3 saate indirilmesi planlanmaktadır ',
        '2025 Yılında uygulamaya başlanması ön görülmektedir.'
      ],
      notes: 'Yeni gelen bu sistem şu anda pilot uygulama aşamasındadır. Sınavın detayları ve uygulama tarihi henüz belirlenmemiştir.'
    }
  },
];