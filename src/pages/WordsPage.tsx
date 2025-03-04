import React, { useState } from 'react';
import { Navigation } from '../components/common/Navigation';
import { useWordStore } from '../store/wordStore';
import { useNavigate } from 'react-router-dom';
import { BookMarked, ArrowRight, Plus, Search, ArrowLeft } from 'lucide-react';

const LEVELS = [
  { id: 'a1', name: 'A1', color: 'from-green-400 to-green-600' },
  { id: 'a2', name: 'A2', color: 'from-emerald-400 to-emerald-600' },
  { id: 'b1', name: 'B1', color: 'from-cyan-400 to-cyan-600' },
  { id: 'b2', name: 'B2', color: 'from-blue-400 to-blue-600' },
  { id: 'c1', name: 'C1', color: 'from-violet-400 to-violet-600' },
  { id: 'c2', name: 'C2', color: 'from-fuchsia-400 to-fuchsia-600' }
];

interface WordList {
  id: string;
  title: string;
  description: string;
  level: string;
  words: Array<{ term: string; definition: string }>;
}

// Örnek kelime listesi
const SAMPLE_LISTS: WordList[] = [
  
    {
      id: '1',
      title: 'Temel Günlük Kelimeler',
      description: 'Günlük hayatta en sık kullanılan temel kelimeler',
      level: 'a1',
      words: [
        { term: 'hello', definition: 'merhaba' },
        { term: 'goodbye', definition: 'hoşça kal' },
        { term: 'please', definition: 'lütfen' },
        { term: 'thank you', definition: 'teşekkür ederim' },
        { term: 'sorry', definition: 'özür dilerim' },
        { term: 'excuse me', definition: 'affedersiniz' },
        { term: 'good morning', definition: 'günaydın' },
        { term: 'good afternoon', definition: 'iyi günler' },
        { term: 'good night', definition: 'iyi geceler' },
        { term: 'yes', definition: 'evet' },
        { term: 'no', definition: 'hayır' },
        { term: 'okay', definition: 'tamam' },
        { term: 'welcome', definition: 'hoş geldiniz' },
        { term: 'fine', definition: 'iyi' },
        { term: 'maybe', definition: 'belki' },
        { term: 'how', definition: 'nasıl' },
        { term: 'what', definition: 'ne' },
        { term: 'when', definition: 'ne zaman' },
        { term: 'where', definition: 'nerede' },
        { term: 'why', definition: 'neden' },
        { term: 'repeat', definition: 'tekrar et' },
        { term: 'stop', definition: 'dur' },
        { term: 'help', definition: 'yardım' },
        { term: 'friend', definition: 'arkadaş' },
        { term: 'home', definition: 'ev' }
      ]
    },
    {
      id: '2',
      title: 'Tanışma Kelimeleri',
      description: 'Kendini tanıtma ve başkalarını tanıma ile ilgili temel kelimeler',
      level: 'a1',
      words: [
        { term: 'name', definition: 'isim' },
        { term: 'age', definition: 'yaş' },
        { term: 'surname', definition: 'soyadı' },
        { term: 'first name', definition: 'ad' },
        { term: 'last name', definition: 'soyad' },
        { term: 'hello', definition: 'merhaba' },
        { term: 'hi', definition: 'selam' },
        { term: 'nice to meet you', definition: 'tanıştığımıza memnun oldum' },
        { term: 'how are you?', definition: 'nasılsın?' },
        { term: 'I am fine', definition: 'iyiyim' },
        { term: "what's your name?", definition: 'ismin ne?' },
        { term: 'my name is...', definition: 'benim adım...' },
        { term: 'where are you from?', definition: 'nerelisin?' },
        { term: 'I am from...', definition: '...lıyım' },
        { term: 'friend', definition: 'arkadaş' },
        { term: 'colleague', definition: 'iş arkadaşı' },
        { term: 'family', definition: 'aile' },
        { term: 'married', definition: 'evli' },
        { term: 'single', definition: 'bekar' },
        { term: 'student', definition: 'öğrenci' },
        { term: 'teacher', definition: 'öğretmen' },
        { term: 'nice', definition: 'güzel' },
        { term: 'welcome', definition: 'hoş geldin' },
        { term: 'goodbye', definition: 'güle güle' },
        { term: 'see you', definition: 'görüşürüz' }
      ]
    },
    {
      id: '3',
      title: 'Ev ile İlgili Kelimeler',
      description: 'Ev, oda ve ev eşyaları ile ilgili temel kelimeler',
      level: 'a1',
      words: [
        { term: 'house', definition: 'ev' },
        { term: 'apartment', definition: 'daire' },
        { term: 'room', definition: 'oda' },
        { term: 'door', definition: 'kapı' },
        { term: 'window', definition: 'pencere' },
        { term: 'bed', definition: 'yatak' },
        { term: 'table', definition: 'masa' },
        { term: 'chair', definition: 'sandalye' },
        { term: 'kitchen', definition: 'mutfak' },
        { term: 'bathroom', definition: 'banyo' },
        { term: 'toilet', definition: 'tuvalet' },
        { term: 'living room', definition: 'oturma odası' },
        { term: 'bedroom', definition: 'yatak odası' },
        { term: 'garden', definition: 'bahçe' },
        { term: 'roof', definition: 'çatı' },
        { term: 'floor', definition: 'zemin' },
        { term: 'wall', definition: 'duvar' },
        { term: 'ceiling', definition: 'tavan' },
        { term: 'lamp', definition: 'lamba' },
        { term: 'cupboard', definition: 'dolap' },
        { term: 'sink', definition: 'lavabo' },
        { term: 'mirror', definition: 'ayna' },
        { term: 'closet', definition: 'gardırop' },
        { term: 'sofa', definition: 'kanepe' },
        { term: 'stairs', definition: 'merdiven' }
      ]
    },
    {
      id: '4',
      title: 'İş ile İlgili Kelimeler',
      description: 'İş, ofis ve meslek ile ilgili temel kelimeler',
      level: 'a1',
      words: [
        { term: 'work', definition: 'iş' },
        { term: 'job', definition: 'meslek' },
        { term: 'office', definition: 'ofis' },
        { term: 'boss', definition: 'patron' },
        { term: 'employee', definition: 'çalışan' },
        { term: 'meeting', definition: 'toplantı' },
        { term: 'computer', definition: 'bilgisayar' },
        { term: 'email', definition: 'e-posta' },
        { term: 'desk', definition: 'masa' },
        { term: 'phone', definition: 'telefon' },
        { term: 'report', definition: 'rapor' },
        { term: 'project', definition: 'proje' },
        { term: 'task', definition: 'görev' },
        { term: 'break', definition: 'ara' },
        { term: 'salary', definition: 'maaş' },
        { term: 'colleague', definition: 'iş arkadaşı' },
        { term: 'team', definition: 'takım' },
        { term: 'manager', definition: 'yönetici' },
        { term: 'file', definition: 'dosya' },
        { term: 'clock', definition: 'saat' },
        { term: 'paper', definition: 'kağıt' },
        { term: 'pen', definition: 'kalem' },
        { term: 'printer', definition: 'yazıcı' },
        { term: 'letter', definition: 'mektup' },
        { term: 'folder', definition: 'klasör' }
      ]
    },
    {
      id: '5',
      title: 'Okul ile İlgili Kelimeler',
      description: 'Okul, sınıf ve eğitim ile ilgili temel kelimeler',
      level: 'a1',
      words: [
        { term: 'school', definition: 'okul' },
        { term: 'teacher', definition: 'öğretmen' },
        { term: 'student', definition: 'öğrenci' },
        { term: 'class', definition: 'sınıf' },
        { term: 'lesson', definition: 'ders' },
        { term: 'book', definition: 'kitap' },
        { term: 'pencil', definition: 'kurşun kalem' },
        { term: 'pen', definition: 'kalem' },
        { term: 'notebook', definition: 'defter' },
        { term: 'desk', definition: 'masa' },
        { term: 'chair', definition: 'sandalye' },
        { term: 'board', definition: 'tahta' },
        { term: 'homework', definition: 'ödev' },
        { term: 'test', definition: 'sınav' },
        { term: 'quiz', definition: 'kısa sınav' },
        { term: 'library', definition: 'kütüphane' },
        { term: 'bag', definition: 'çanta' },
        { term: 'eraser', definition: 'silgi' },
        { term: 'ruler', definition: 'cetvel' },
        { term: 'marker', definition: 'işaretleyici' },
        { term: 'chalk', definition: 'tebeşir' },
        { term: 'art', definition: 'resim' },
        { term: 'science', definition: 'fen' },
        { term: 'computer', definition: 'bilgisayar' },
        { term: 'uniform', definition: 'üniforma' }
      ]
    },
    {
      id: '6',
      title: 'Temel Sıfatlar',
      description: 'Günlük hayatta kullanılan temel sıfatlar',
      level: 'a1',
      words: [
        { term: 'big', definition: 'büyük' },
        { term: 'small', definition: 'küçük' },
        { term: 'good', definition: 'iyi' },
        { term: 'bad', definition: 'kötü' },
        { term: 'happy', definition: 'mutlu' },
        { term: 'sad', definition: 'üzgün' },
        { term: 'new', definition: 'yeni' },
        { term: 'old', definition: 'eski' },
        { term: 'fast', definition: 'hızlı' },
        { term: 'slow', definition: 'yavaş' },
        { term: 'hot', definition: 'sıcak' },
        { term: 'cold', definition: 'soğuk' },
        { term: 'tall', definition: 'uzun' },
        { term: 'short', definition: 'kısa' },
        { term: 'easy', definition: 'kolay' },
        { term: 'hard', definition: 'zor' },
        { term: 'clean', definition: 'temiz' },
        { term: 'dirty', definition: 'kirli' },
        { term: 'light', definition: 'hafif' },
        { term: 'heavy', definition: 'ağır' },
        { term: 'beautiful', definition: 'güzel' },
        { term: 'ugly', definition: 'çirkin' },
        { term: 'loud', definition: 'gürültülü' },
        { term: 'quiet', definition: 'sessiz' },
        { term: 'full', definition: 'dolu' }
      ]
    },
    {
      id: '7',
      title: 'Temel Zarflar',
      description: 'Günlük hayatta kullanılan temel zarflar',
      level: 'a1',
      words: [
        { term: 'slowly', definition: 'yavaşça' },
        { term: 'quickly', definition: 'hızlıca' },
        { term: 'well', definition: 'iyi' },
        { term: 'badly', definition: 'kötü' },
        { term: 'here', definition: 'burada' },
        { term: 'there', definition: 'orada' },
        { term: 'always', definition: 'her zaman' },
        { term: 'never', definition: 'asla' },
        { term: 'sometimes', definition: 'bazen' },
        { term: 'often', definition: 'sık sık' },
        { term: 'now', definition: 'şimdi' },
        { term: 'then', definition: 'sonra' },
        { term: 'today', definition: 'bugün' },
        { term: 'tomorrow', definition: 'yarın' },
        { term: 'yesterday', definition: 'dün' },
        { term: 'early', definition: 'erken' },
        { term: 'late', definition: 'geç' },
        { term: 'very', definition: 'çok' },
        { term: 'really', definition: 'gerçekten' },
        { term: 'almost', definition: 'neredeyse' },
        { term: 'exactly', definition: 'tam olarak' },
        { term: 'maybe', definition: 'belki' },
        { term: 'alone', definition: 'yalnız' },
        { term: 'outside', definition: 'dışarıda' },
        { term: 'inside', definition: 'içeride' }
      ]
    },
    {
      id: '8',
      title: 'Temel Fiiller',
      description: 'Günlük hayatta sık kullanılan temel fiiller',
      level: 'a1',
      words: [
        { term: 'eat', definition: 'yemek' },
        { term: 'drink', definition: 'içmek' },
        { term: 'go', definition: 'gitmek' },
        { term: 'come', definition: 'gelmek' },
        { term: 'see', definition: 'görmek' },
        { term: 'look', definition: 'bakmak' },
        { term: 'run', definition: 'koşmak' },
        { term: 'walk', definition: 'yürümek' },
        { term: 'sleep', definition: 'uyumak' },
        { term: 'wake', definition: 'uyanmak' },
        { term: 'read', definition: 'okumak' },
        { term: 'write', definition: 'yazmak' },
        { term: 'speak', definition: 'konuşmak' },
        { term: 'listen', definition: 'dinlemek' },
        { term: 'play', definition: 'oynamak' },
        { term: 'work', definition: 'çalışmak' },
        { term: 'study', definition: 'ders çalışmak' },
        { term: 'learn', definition: 'öğrenmek' },
        { term: 'love', definition: 'sevmek' },
        { term: 'like', definition: 'hoşlanmak' },
        { term: 'buy', definition: 'satın almak' },
        { term: 'sell', definition: 'satmak' },
        { term: 'open', definition: 'açmak' },
        { term: 'close', definition: 'kapatmak' },
        { term: 'call', definition: 'aramak' }
      ]
    },
    {
      id: '9',
      title: 'Temel İsimler',
      description: 'Günlük hayatta kullanılan temel isimler',
      level: 'a1',
      words: [
        { term: 'man', definition: 'adam' },
        { term: 'woman', definition: 'kadın' },
        { term: 'child', definition: 'çocuk' },
        { term: 'boy', definition: 'oğlan' },
        { term: 'girl', definition: 'kız' },
        { term: 'father', definition: 'baba' },
        { term: 'mother', definition: 'anne' },
        { term: 'brother', definition: 'erkek kardeş' },
        { term: 'sister', definition: 'kız kardeş' },
        { term: 'friend', definition: 'arkadaş' },
        { term: 'teacher', definition: 'öğretmen' },
        { term: 'student', definition: 'öğrenci' },
        { term: 'book', definition: 'kitap' },
        { term: 'pen', definition: 'kalem' },
        { term: 'car', definition: 'araba' },
        { term: 'bus', definition: 'otobüs' },
        { term: 'train', definition: 'tren' },
        { term: 'city', definition: 'şehir' },
        { term: 'country', definition: 'ülke' },
        { term: 'water', definition: 'su' },
        { term: 'food', definition: 'yemek' },
        { term: 'apple', definition: 'elma' },
        { term: 'table', definition: 'masa' },
        { term: 'chair', definition: 'sandalye' },
        { term: 'tree', definition: 'ağaç' }
      ]
    },
    {
      id: '1',
      title: 'Temel Günlük Kelimeler',
      description: 'Günlük hayatta sıkça karşılaşılan, A2 seviyesine uygun temel kelimeler',
      level: 'a2',
      words: [
        { term: 'morning', definition: 'sabah' },
        { term: 'afternoon', definition: 'öğleden sonra' },
        { term: 'evening', definition: 'akşam' },
        { term: 'nighttime', definition: 'gece vakti' },
        { term: 'soon', definition: 'yakında' },
        { term: 'later', definition: 'sonra' },
        { term: 'weekend', definition: 'hafta sonu' },
        { term: 'holiday', definition: 'tatil' },
        { term: 'dinner', definition: 'akşam yemeği' },
        { term: 'lunch', definition: 'öğle yemeği' },
        { term: 'breakfast', definition: 'kahvaltı' },
        { term: 'snack', definition: 'atıştırmalık' },
        { term: 'receipt', definition: 'fiş' },
        { term: 'order', definition: 'sipariş' },
        { term: 'menu', definition: 'menü' },
        { term: 'coffee shop', definition: 'kahve dükkanı' },
        { term: 'bus stop', definition: 'otobüs durağı' },
        { term: 'station', definition: 'istasyon' },
        { term: 'road', definition: 'yol' },
        { term: 'crosswalk', definition: 'yaya geçidi' },
        { term: 'city', definition: 'şehir' },
        { term: 'neighborhood', definition: 'mahalle' },
        { term: 'apartment', definition: 'apartman' },
        { term: 'building', definition: 'bina' },
        { term: 'elevator', definition: 'asansör' }
      ]
    },
    {
      id: '2',
      title: 'Tanışma Kelimeleri',
      description: 'Kişisel bilgileri paylaşma ve tanışma süreçlerinde kullanılan A2 seviyesine uygun ifadeler',
      level: 'a2',
      words: [
        { term: 'greeting', definition: 'selamlama' },
        { term: 'introduction', definition: 'tanıtım' },
        { term: 'first impression', definition: 'ilk izlenim' },
        { term: 'occupation', definition: 'meslek' },
        { term: 'job title', definition: 'iş unvanı' },
        { term: 'hobby', definition: 'hobi' },
        { term: 'interest', definition: 'ilgi' },
        { term: 'residence', definition: 'ikamet' },
        { term: 'address', definition: 'adres' },
        { term: 'contact', definition: 'iletişim' },
        { term: 'phone number', definition: 'telefon numarası' },
        { term: 'email', definition: 'e-posta' },
        { term: 'nationality', definition: 'milliyet' },
        { term: 'marital status', definition: 'medeni durum' },
        { term: 'single', definition: 'bekar' },
        { term: 'divorced', definition: 'boşanmış' },
        { term: 'engaged', definition: 'nişanlı' },
        { term: 'experience', definition: 'deneyim' },
        { term: 'conversation', definition: 'sohbet' },
        { term: 'social', definition: 'sosyal' },
        { term: 'common interests', definition: 'ortak ilgi alanları' },
        { term: 'background', definition: 'geçmiş' },
        { term: 'personality', definition: 'kişilik' },
        { term: 'friendship', definition: 'arkadaşlık' },
        { term: 'acquaintance', definition: 'tanıdık' }
      ]
    },
    {
      id: '3',
      title: 'Temel Sıfatlar',
      description: 'A2 seviyesinde günlük hayatta ve tanışmalarda kullanılan temel sıfatlar',
      level: 'a2',
      words: [
        { term: 'comfortable', definition: 'rahat' },
        { term: 'expensive', definition: 'pahalı' },
        { term: 'cheap', definition: 'ucuz' },
        { term: 'interesting', definition: 'ilginç' },
        { term: 'boring', definition: 'sıkıcı' },
        { term: 'delicious', definition: 'lezzetli' },
        { term: 'beautiful', definition: 'güzel' },
        { term: 'ugly', definition: 'çirkin' },
        { term: 'modern', definition: 'modern' },
        { term: 'old-fashioned', definition: 'eski tarz' },
        { term: 'friendly', definition: 'dostane' },
        { term: 'polite', definition: 'nazik' },
        { term: 'noisy', definition: 'gürültülü' },
        { term: 'quiet', definition: 'sessiz' },
        { term: 'clean', definition: 'temiz' },
        { term: 'messy', definition: 'dağınık' },
        { term: 'bright', definition: 'parlak' },
        { term: 'dark', definition: 'karanlık' },
        { term: 'warm', definition: 'ılık' },
        { term: 'cold', definition: 'soğuk' },
        { term: 'fast', definition: 'hızlı' },
        { term: 'slow', definition: 'yavaş' },
        { term: 'tasty', definition: 'lezzetli' },
        { term: 'sweet', definition: 'tatlı' },
        { term: 'sour', definition: 'ekşi' }
      ]
    },
    {
      id: '4',
      title: 'Temel Zarflar',
      description: 'A2 seviyesinde kullanılan, cümlelere anlam katan temel zarflar',
      level: 'a2',
      words: [
        { term: 'frequently', definition: 'sık sık' },
        { term: 'occasionally', definition: 'arada sırada' },
        { term: 'generally', definition: 'genel olarak' },
        { term: 'usually', definition: 'genellikle' },
        { term: 'constantly', definition: 'sürekli' },
        { term: 'briefly', definition: 'kısaca' },
        { term: 'seriously', definition: 'ciddi şekilde' },
        { term: 'loudly', definition: 'yüksek sesle' },
        { term: 'quietly', definition: 'sessizce' },
        { term: 'happily', definition: 'mutlu bir şekilde' },
        { term: 'sadly', definition: 'üzgünce' },
        { term: 'rapidly', definition: 'hızla' },
        { term: 'carefully', definition: 'dikkatlice' },
        { term: 'easily', definition: 'kolayca' },
        { term: 'hardly', definition: 'neredeyse hiç' },
        { term: 'recently', definition: 'son zamanlarda' },
        { term: 'eventually', definition: 'nihayetinde' },
        { term: 'suddenly', definition: 'aniden' },
        { term: 'indeed', definition: 'gerçekten' },
        { term: 'probably', definition: 'muhtemelen' },
        { term: 'certainly', definition: 'kesinlikle' },
        { term: 'simply', definition: 'sadece' },
        { term: 'actually', definition: 'aslında' },
        { term: 'precisely', definition: 'tam olarak' },
        { term: 'totally', definition: 'tamamen' }
      ]
    },
    {
      id: '5',
      title: 'Temel Fiiller',
      description: 'Günlük yaşamda sıkça kullanılan A2 seviyesinde temel fiiller',
      level: 'a2',
      words: [
        { term: 'understand', definition: 'anlamak' },
        { term: 'know', definition: 'bilmek' },
        { term: 'remember', definition: 'hatırlamak' },
        { term: 'forget', definition: 'unutmak' },
        { term: 'meet', definition: 'buluşmak' },
        { term: 'decide', definition: 'karar vermek' },
        { term: 'choose', definition: 'seçmek' },
        { term: 'change', definition: 'değiştirmek' },
        { term: 'explain', definition: 'açıklamak' },
        { term: 'suggest', definition: 'önermek' },
        { term: 'enjoy', definition: 'keyif almak' },
        { term: 'watch', definition: 'izlemek' },
        { term: 'wait', definition: 'beklemek' },
        { term: 'start', definition: 'başlamak' },
        { term: 'finish', definition: 'bitirmek' },
        { term: 'try', definition: 'denemek' },
        { term: 'need', definition: 'ihtiyaç duymak' },
        { term: 'prefer', definition: 'tercih etmek' },
        { term: 'ask', definition: 'sormak' },
        { term: 'answer', definition: 'cevaplamak' },
        { term: 'believe', definition: 'inanmak' },
        { term: 'feel', definition: 'hissetmek' },
        { term: 'talk', definition: 'konuşmak' },
        { term: 'drive', definition: 'sürmek' },
        { term: 'return', definition: 'dönmek' }
      ]
    },
    {
      id: '6',
      title: 'Temel İsimler',
      description: 'Günlük hayatta kullanılan, A2 seviyesine uygun temel isimler',
      level: 'a2',
      words: [
        { term: 'computer', definition: 'bilgisayar' },
        { term: 'bottle', definition: 'şişe' },
        { term: 'curtain', definition: 'perde' },
        { term: 'key', definition: 'anahtar' },
        { term: 'wallet', definition: 'cüzdan' },
        { term: 'shirt', definition: 'gömlek' },
        { term: 'trousers', definition: 'pantolon' },
        { term: 'shoes', definition: 'ayakkabı' },
        { term: 'bag', definition: 'çanta' },
        { term: 'market', definition: 'pazar' },
        { term: 'restaurant', definition: 'restoran' },
        { term: 'store', definition: 'mağaza' },
        { term: 'park', definition: 'park' },
        { term: 'street', definition: 'sokak' },
        { term: 'road', definition: 'yol' },
        { term: 'building', definition: 'bina' },
        { term: 'kitchen', definition: 'mutfak' },
        { term: 'bathroom', definition: 'banyo' },
        { term: 'bedroom', definition: 'yatak odası' },
        { term: 'living room', definition: 'oturma odası' },
        { term: 'library', definition: 'kütüphane' },
        { term: 'university', definition: 'üniversite' },
        { term: 'office', definition: 'ofis' },
        { term: 'hospital', definition: 'hastane' },
        { term: 'magazine', definition: 'dergi' }
      ]
    },
    {
      "id": "1",
      "title": "Temel Fiiller",
      "description": "Günlük hayatta kullanılan temel fiiller",
      "level": "b1",
      "words": [
        { "term": "achieve", "definition": "başarmak" },
        { "term": "admire", "definition": "hayran olmak" },
        { "term": "afford", "definition": "parası yetmek" },
        { "term": "agree", "definition": "katılmak" },
        { "term": "apologize", "definition": "özür dilemek" },
        { "term": "arrange", "definition": "düzenlemek" },
        { "term": "arrive", "definition": "varmak" },
        { "term": "ask", "definition": "sormak" },
        { "term": "believe", "definition": "inanmak" },
        { "term": "borrow", "definition": "ödünç almak" },
        { "term": "break", "definition": "kırmak" },
        { "term": "build", "definition": "inşa etmek" },
        { "term": "buy", "definition": "satın almak" },
        { "term": "catch", "definition": "yakalamak" },
        { "term": "choose", "definition": "seçmek" },
        { "term": "climb", "definition": "tırmanmak" },
        { "term": "collect", "definition": "toplamak" },
        { "term": "complain", "definition": "şikayet etmek" },
        { "term": "cook", "definition": "pişirmek" },
        { "term": "cry", "definition": "ağlamak" },
        { "term": "decide", "definition": "karar vermek" },
        { "term": "describe", "definition": "tanımlamak" },
        { "term": "discover", "definition": "keşfetmek" },
        { "term": "enjoy", "definition": "zevk almak" },
        { "term": "explain", "definition": "açıklamak" }
      ]
    },
    {
      "id": "2",
      "title": "Temel Sıfatlar",
      "description": "Günlük hayatta kullanılan temel sıfatlar",
      "level": "b1",
      "words": [
        { "term": "accurate", "definition": "doğru" },
        { "term": "active", "definition": "aktif" },
        { "term": "amazing", "definition": "şaşırtıcı" },
        { "term": "angry", "definition": "kızgın" },
        { "term": "anxious", "definition": "endişeli" },
        { "term": "awful", "definition": "korkunç" },
        { "term": "beautiful", "definition": "güzel" },
        { "term": "boring", "definition": "sıkıcı" },
        { "term": "brave", "definition": "cesur" },
        { "term": "bright", "definition": "parlak" },
        { "term": "calm", "definition": "sakin" },
        { "term": "careful", "definition": "dikkatli" },
        { "term": "cheap", "definition": "ucuz" },
        { "term": "clean", "definition": "temiz" },
        { "term": "clear", "definition": "açık" },
        { "term": "comfortable", "definition": "rahat" },
        { "term": "confident", "definition": "kendinden emin" },
        { "term": "confused", "definition": "kafası karışık" },
        { "term": "crazy", "definition": "çılgın" },
        { "term": "creative", "definition": "yaratıcı" },
        { "term": "curious", "definition": "meraklı" },
        { "term": "dangerous", "definition": "tehlikeli" },
        { "term": "dark", "definition": "karanlık" },
        { "term": "delicious", "definition": "lezzetli" },
        { "term": "different", "definition": "farklı" }
      ]
    },
    {
      "id": "3",
      "title": "Temel Zarflar",
      "description": "Günlük hayatta kullanılan temel zarflar",
      "level": "b1",
      "words": [
        { "term": "absolutely", "definition": "kesinlikle" },
        { "term": "actually", "definition": "aslında" },
        { "term": "almost", "definition": "neredeyse" },
        { "term": "already", "definition": "zaten" },
        { "term": "anyway", "definition": "her neyse" },
        { "term": "approximately", "definition": "yaklaşık" },
        { "term": "badly", "definition": "kötü bir şekilde" },
        { "term": "carefully", "definition": "dikkatlice" },
        { "term": "certainly", "definition": "kesinlikle" },
        { "term": "clearly", "definition": "açıkça" },
        { "term": "completely", "definition": "tamamen" },
        { "term": "constantly", "definition": "sürekli" },
        { "term": "correctly", "definition": "doğru bir şekilde" },
        { "term": "easily", "definition": "kolayca" },
        { "term": "especially", "definition": "özellikle" },
        { "term": "eventually", "definition": "sonunda" },
        { "term": "exactly", "definition": "tam olarak" },
        { "term": "extremely", "definition": "son derece" },
        { "term": "fairly", "definition": "oldukça" },
        { "term": "finally", "definition": "nihayet" },
        { "term": "frequently", "definition": "sık sık" },
        { "term": "generally", "definition": "genellikle" },
        { "term": "hardly", "definition": "neredeyse hiç" },
        { "term": "immediately", "definition": "hemen" },
        { "term": "luckily", "definition": "şans eseri" }
      ]
    },
    {
      "id": "4",
      "title": "Yiyecek ve İçecek",
      "description": "Yiyecek ve içeceklerle ilgili kelimeler",
      "level": "b1",
      "words": [
        { "term": "apple", "definition": "elma" },
        { "term": "banana", "definition": "muz" },
        { "term": "bread", "definition": "ekmek" },
        { "term": "butter", "definition": "tereyağı" },
        { "term": "cheese", "definition": "peynir" },
        { "term": "chicken", "definition": "tavuk" },
        { "term": "coffee", "definition": "kahve" },
        { "term": "cucumber", "definition": "salatalık" },
        { "term": "egg", "definition": "yumurta" },
        { "term": "fish", "definition": "balık" },
        { "term": "flour", "definition": "un" },
        { "term": "fruit", "definition": "meyve" },
        { "term": "garlic", "definition": "sarımsak" },
        { "term": "honey", "definition": "bal" },
        { "term": "ice cream", "definition": "dondurma" },
        { "term": "juice", "definition": "meyve suyu" },
        { "term": "lemon", "definition": "limon" },
        { "term": "meat", "definition": "et" },
        { "term": "milk", "definition": "süt" },
        { "term": "onion", "definition": "soğan" },
        { "term": "orange", "definition": "portakal" },
        { "term": "pasta", "definition": "makarna" },
        { "term": "potato", "definition": "patates" },
        { "term": "rice", "definition": "pirinç" },
        { "term": "salad", "definition": "salata" }
      ]
    },
    {
      "id": "5",
      "title": "Seyahat ve Ulaşım",
      "description": "Seyahat ve ulaşımla ilgili kelimeler",
      "level": "b1",
      "words": [
        { "term": "airport", "definition": "havaalanı" },
        { "term": "arrival", "definition": "varış" },
        { "term": "baggage", "definition": "bagaj" },
        { "term": "boarding pass", "definition": "biniş kartı" },
        { "term": "bus station", "definition": "otobüs terminali" },
        { "term": "cab", "definition": "taksi" },
        { "term": "check-in", "definition": "giriş işlemi" },
        { "term": "customs", "definition": "gümrük" },
        { "term": "delay", "definition": "gecikme" },
        { "term": "departure", "definition": "kalkış" },
        { "term": "destination", "definition": "varış yeri" },
        { "term": "flight", "definition": "uçuş" },
        { "term": "gate", "definition": "kapı" },
        { "term": "guide", "definition": "rehber" },
        { "term": "hotel", "definition": "otel" },
        { "term": "luggage", "definition": "bagaj" },
        { "term": "passport", "definition": "pasaport" },
        { "term": "platform", "definition": "peron" },
        { "term": "reservation", "definition": "rezervasyon" },
        { "term": "suitcase", "definition": "valiz" },
        { "term": "ticket", "definition": "bilet" },
        { "term": "tourist", "definition": "turist" },
        { "term": "train", "definition": "tren" },
        { "term": "travel", "definition": "seyahat" },
        { "term": "visa", "definition": "vize" }
      ]
    },
    {
      "id": "6",
      "title": "Sağlık ve Tıp",
      "description": "Sağlık ve tıpla ilgili kelimeler",
      "level": "b1",
      "words": [
        { "term": "ache", "definition": "ağrı" },
        { "term": "ambulance", "definition": "ambulans" },
        { "term": "appointment", "definition": "randevu" },
        { "term": "bandage", "definition": "bandaj" },
        { "term": "blood", "definition": "kan" },
        { "term": "bone", "definition": "kemik" },
        { "term": "cough", "definition": "öksürük" },
        { "term": "dentist", "definition": "dişçi" },
        { "term": "diet", "definition": "diyet" },
        { "term": "doctor", "definition": "doktor" },
        { "term": "emergency", "definition": "acil durum" },
        { "term": "fever", "definition": "ateş" },
        { "term": "headache", "definition": "baş ağrısı" },
        { "term": "health", "definition": "sağlık" },
        { "term": "hospital", "definition": "hastane" },
        { "term": "illness", "definition": "hastalık" },
        { "term": "injury", "definition": "yaralanma" },
        { "term": "medicine", "definition": "ilaç" },
        { "term": "nurse", "definition": "hemşire" },
        { "term": "pain", "definition": "ağrı" },
        { "term": "patient", "definition": "hasta" },
        { "term": "pharmacy", "definition": "eczane" },
        { "term": "prescription", "definition": "reçete" },
        { "term": "sick", "definition": "hasta" },
        { "term": "symptom", "definition": "belirti" }
      ]
    },
    {
      "id": "7",
      "title": "İş ve Kariyer",
      "description": "İş ve kariyerle ilgili kelimeler",
      "level": "b1",
      "words": [
        { "term": "application", "definition": "başvuru" },
        { "term": "boss", "definition": "patron" },
        { "term": "career", "definition": "kariyer" },
        { "term": "colleague", "definition": "iş arkadaşı" },
        { "term": "company", "definition": "şirket" },
        { "term": "contract", "definition": "sözleşme" },
        { "term": "customer", "definition": "müşteri" },
        { "term": "employee", "definition": "çalışan" },
        { "term": "employer", "definition": "işveren" },
        { "term": "experience", "definition": "deneyim" },
        { "term": "interview", "definition": "mülakat" },
        { "term": "job", "definition": "iş" },
        { "term": "manager", "definition": "yönetici" },
        { "term": "meeting", "definition": "toplantı" },
        { "term": "office", "definition": "ofis" },
        { "term": "promotion", "definition": "terfi" },
        { "term": "qualification", "definition": "nitelik" },
        { "term": "resign", "definition": "istifa etmek" },
        { "term": "salary", "definition": "maaş" },
        { "term": "skill", "definition": "beceri" },
        { "term": "staff", "definition": "personel" },
        { "term": "training", "definition": "eğitim" },
        { "term": "unemployed", "definition": "işsiz" },
        { "term": "work", "definition": "iş" },
        { "term": "worker", "definition": "işçi" }
      ]
    },
    {
      "id": "8",
      "title": "Eğitim",
      "description": "Eğitimle ilgili kelimeler",
      "level": "b1",
      "words": [
        { "term": "assignment", "definition": "ödev" },
        { "term": "book", "definition": "kitap" },
        { "term": "classroom", "definition": "sınıf" },
        { "term": "course", "definition": "kurs" },
        { "term": "degree", "definition": "derece" },
        { "term": "diploma", "definition": "diploma" },
        { "term": "exam", "definition": "sınav" },
        { "term": "grade", "definition": "not" },
        { "term": "homework", "definition": "ev ödevi" },
        { "term": "knowledge", "definition": "bilgi" },
        { "term": "language", "definition": "dil" },
        { "term": "lecture", "definition": "ders" },
        { "term": "lesson", "definition": "ders" },
        { "term": "library", "definition": "kütüphane" },
        { "term": "mark", "definition": "not" },
        { "term": "note", "definition": "not" },
        { "term": "professor", "definition": "profesör" },
        { "term": "project", "definition": "proje" },
        { "term": "pupil", "definition": "öğrenci" },
        { "term": "question", "definition": "soru" },
        { "term": "research", "definition": "araştırma" },
        { "term": "school", "definition": "okul" },
        { "term": "student", "definition": "öğrenci" },
        { "term": "study", "definition": "çalışma" },
        { "term": "teacher", "definition": "öğretmen" }
      ]
    },
    
      {
        "id": "1",
        "title": "Fiiller",
        "description": "İngilizce B2 seviyesinde fiiller",
        "level": "b2",
        "words": [
          { "term": "Achieve", "definition": "başarmak" },
          { "term": "Analyze", "definition": "analiz etmek" },
          { "term": "Communicate", "definition": "iletişim kurmak" },
          { "term": "Concentrate", "definition": "konsantre olmak" },
          { "term": "Contribute", "definition": "katkıda bulunmak" },
          { "term": "Develop", "definition": "geliştirmek" },
          { "term": "Encourage", "definition": "teşvik etmek" },
          { "term": "Establish", "definition": "kurmak" },
          { "term": "Evaluate", "definition": "değerlendirmek" },
          { "term": "Expand", "definition": "genişletmek" },
          { "term": "Improve", "definition": "geliştirmek" },
          { "term": "Influence", "definition": "etkilemek" },
          { "term": "Investigate", "definition": "araştırmak" },
          { "term": "Manage", "definition": "yönetmek" },
          { "term": "Organize", "definition": "organize etmek" },
          { "term": "Participate", "definition": "katılmak" },
          { "term": "Predict", "definition": "tahmin etmek" },
          { "term": "Solve", "definition": "çözmek" },
          { "term": "Suggest", "definition": "önermek" },
          { "term": "Support", "definition": "desteklemek" }
        ]
      },
      {
        "id": "2",
        "title": "İsimler",
        "description": "İngilizce B2 seviyesinde isimler",
        "level": "b2",
        "words": [
          { "term": "Analysis", "definition": "analiz" },
          { "term": "Benefit", "definition": "fayda" },
          { "term": "Challenge", "definition": "meydan okuma" },
          { "term": "Decision", "definition": "karar" },
          { "term": "Environment", "definition": "çevre" },
          { "term": "Evidence", "definition": "kanıt" },
          { "term": "Factor", "definition": "faktör" },
          { "term": "Goal", "definition": "hedef" },
          { "term": "Impact", "definition": "etki" },
          { "term": "Issue", "definition": "sorun" },
          { "term": "Knowledge", "definition": "bilgi" },
          { "term": "Method", "definition": "yöntem" },
          { "term": "Opportunity", "definition": "fırsat" },
          { "term": "Process", "definition": "süreç" },
          { "term": "Resource", "definition": "kaynak" },
          { "term": "Risk", "definition": "risk" },
          { "term": "Strategy", "definition": "strateji" },
          { "term": "Success", "definition": "başarı" },
          { "term": "Trend", "definition": "eğilim" },
          { "term": "Value", "definition": "değer" }
        ]
      },
      {
        "id": "3",
        "title": "Sıfatlar",
        "description": "İngilizce B2 seviyesinde sıfatlar",
        "level": "b2",
        "words": [
          { "term": "Accurate", "definition": "doğru" },
          { "term": "Complex", "definition": "karmaşık" },
          { "term": "Effective", "definition": "etkili" },
          { "term": "Efficient", "definition": "verimli" },
          { "term": "Essential", "definition": "temel" },
          { "term": "Flexible", "definition": "esnek" },
          { "term": "Global", "definition": "küresel" },
          { "term": "Innovative", "definition": "yenilikçi" },
          { "term": "Logical", "definition": "mantıklı" },
          { "term": "Practical", "definition": "pratik" },
          { "term": "Reliable", "definition": "güvenilir" },
          { "term": "Relevant", "definition": "ilgili" },
          { "term": "Significant", "definition": "önemli" },
          { "term": "Stable", "definition": "istikrarlı" },
          { "term": "Suitable", "definition": "uygun" },
          { "term": "Sustainable", "definition": "sürdürülebilir" },
          { "term": "Unique", "definition": "benzersiz" },
          { "term": "Valuable", "definition": "değerli" },
          { "term": "Various", "definition": "çeşitli" },
          { "term": "Visible", "definition": "görünür" }
        ]
      },
      {
        "id": "4",
        "title": "Zarflar",
        "description": "İngilizce B2 seviyesinde zarflar",
        "level": "b2",
        "words": [
          { "term": "Accurately", "definition": "doğru bir şekilde" },
          { "term": "Clearly", "definition": "açıkça" },
          { "term": "Completely", "definition": "tamamen" },
          { "term": "Effectively", "definition": "etkili bir şekilde" },
          { "term": "Efficiently", "definition": "verimli bir şekilde" },
          { "term": "Gradually", "definition": "yavaş yavaş" },
          { "term": "Highly", "definition": "oldukça" },
          { "term": "Immediately", "definition": "hemen" },
          { "term": "Initially", "definition": "başlangıçta" },
          { "term": "Naturally", "definition": "doğal olarak" },
          { "term": "Officially", "definition": "resmen" },
          { "term": "Precisely", "definition": "kesinlikle" },
          { "term": "Properly", "definition": "uygun şekilde" },
          { "term": "Rapidly", "definition": "hızla" },
          { "term": "Regularly", "definition": "düzenli olarak" },
          { "term": "Relatively", "definition": "nispeten" },
          { "term": "Significantly", "definition": "önemli ölçüde" },
          { "term": "Simply", "definition": "basitçe" },
          { "term": "Totally", "definition": "tamamen" },
          { "term": "Usually", "definition": "genellikle" }
        ]
      },
      {
        "id": "5",
        "title": "Mühendislik Terimleri",
        "description": "Mühendislikle ilgili terimler",
        "level": "b2",
        "words": [
          { "term": "Blueprint", "definition": "plan" },
          { "term": "Circuit", "definition": "devre" },
          { "term": "Design", "definition": "tasarım" },
          { "term": "Efficiency", "definition": "verimlilik" },
          { "term": "Engine", "definition": "motor" },
          { "term": "Innovation", "definition": "yenilik" },
          { "term": "Material", "definition": "malzeme" },
          { "term": "Mechanism", "definition": "mekanizma" },
          { "term": "Prototype", "definition": "prototip" },
          { "term": "Simulation", "definition": "simülasyon" },
          { "term": "Structure", "definition": "yapı" },
          { "term": "System", "definition": "sistem" },
          { "term": "Technology", "definition": "teknoloji" },
          { "term": "Tool", "definition": "araç" },
          { "term": "Voltage", "definition": "voltaj" },
          { "term": "Workshop", "definition": "atölye" },
          { "term": "Algorithm", "definition": "algoritma" },
          { "term": "Automation", "definition": "otomasyon" },
          { "term": "Calibration", "definition": "kalibrasyon" },
          { "term": "Fabrication", "definition": "üretim" }
        ]
      },
      {
        "id": "6",
        "title": "Tıp Terimleri",
        "description": "Tıpla ilgili terimler",
        "level": "b2",
        "words": [
          { "term": "Anatomy", "definition": "anatomi" },
          { "term": "Diagnosis", "definition": "teşhis" },
          { "term": "Prescription", "definition": "reçete" },
          { "term": "Surgery", "definition": "ameliyat" },
          { "term": "Symptom", "definition": "belirti" },
          { "term": "Therapy", "definition": "terapi" },
          { "term": "Vaccine", "definition": "aşı" },
          { "term": "Antibiotic", "definition": "antibiyotik" },
          { "term": "Biopsy", "definition": "biyopsi" },
          { "term": "Chronic", "definition": "kronik" },
          { "term": "Disinfectant", "definition": "dezenfektan" },
          { "term": "Epidemic", "definition": "salgın" },
          { "term": "Hormone", "definition": "hormon" },
          { "term": "Immunity", "definition": "bağışıklık" },
          { "term": "Infection", "definition": "enfeksiyon" },
          { "term": "Inflammation", "definition": "iltihaplanma" },
          { "term": "Pharmacy", "definition": "eczane" },
          { "term": "Rehabilitation", "definition": "rehabilitasyon" },
          { "term": "Sterilization", "definition": "sterilizasyon" },
          { "term": "Transplant", "definition": "nakil" }
        ]
      },
      {
        "id": "7",
        "title": "Bilgisayar Bilimi Terimleri",
        "description": "Bilgisayar bilimiyle ilgili terimler",
        "level": "b2",
        "words": [
          { "term": "Algorithm", "definition": "algoritma" },
          { "term": "Database", "definition": "veritabanı" },
          { "term": "Encryption", "definition": "şifreleme" },
          { "term": "Firewall", "definition": "güvenlik duvarı" },
          { "term": "Hardware", "definition": "donanım" },
          { "term": "Interface", "definition": "arayüz" },
          { "term": "Network", "definition": "ağ" },
          { "term": "Programming", "definition": "programlama" },
          { "term": "Software", "definition": "yazılım" },
          { "term": "Virus", "definition": "virüs" },
          { "term": "Artificial Intelligence", "definition": "yapay zeka" },
          { "term": "Cloud Computing", "definition": "bulut bilişim" },
          { "term": "Cybersecurity", "definition": "siber güvenlik" },
          { "term": "Data Mining", "definition": "veri madenciliği" },
          { "term": "Debugging", "definition": "hata ayıklama" },
          { "term": "Machine Learning", "definition": "makine öğrenmesi" },
          { "term": "Operating System", "definition": "işletim sistemi" },
          { "term": "Server", "definition": "sunucu" },
          { "term": "User Experience", "definition": "kullanıcı deneyimi" },
          { "term": "Virtual Reality", "definition": "sanal gerçeklik" }
        ]
      },
      {
        "id": "8",
        "title": "Finans Terimleri",
        "description": "Finansla ilgili terimler",
        "level": "b2",
        "words": [
          { "term": "Asset", "definition": "varlık" },
          { "term": "Budget", "definition": "bütçe" },
          { "term": "Capital", "definition": "sermaye" },
          { "term": "Debt", "definition": "borç" },
          { "term": "Dividend", "definition": "temettü" },
          { "term": "Equity", "definition": "özsermaye" },
          { "term": "Inflation", "definition": "enflasyon" },
          { "term": "Interest", "definition": "faiz" },
          { "term": "Investment", "definition": "yatırım" },
          { "term": "Liability", "definition": "yükümlülük" },
          { "term": "Loan", "definition": "kredi" },
          { "term": "Mortgage", "definition": "ipotek" },
          { "term": "Profit", "definition": "kar" },
          { "term": "Revenue", "definition": "gelir" },
          { "term": "Stock", "definition": "hisse senedi" },
          { "term": "Tax", "definition": "vergi" },
          { "term": "Transaction", "definition": "işlem" },
          { "term": "Wealth", "definition": "servet" },
          { "term": "Bankruptcy", "definition": "iflas" },
          { "term": "Cryptocurrency", "definition": "kripto para" }
        ]
      },
      {
        "id": "9",
        "title": "Hukuk Terimleri",
        "description": "Hukukla ilgili terimler",
        "level": "b2",
        "words": [
          { "term": "Contract", "definition": "sözleşme" },
          { "term": "Court", "definition": "mahkeme" },
          { "term": "Crime", "definition": "suç" },
          { "term": "Defendant", "definition": "sanık" },
          { "term": "Evidence", "definition": "delil" },
          { "term": "Judge", "definition": "yargıç" },
          { "term": "Jury", "definition": "jüri" },
          { "term": "Law", "definition": "yasa" },
          { "term": "Lawyer", "definition": "avukat" },
          { "term": "Legal", "definition": "yasal" },
          { "term": "Legislation", "definition": "mevzuat" },
          { "term": "Litigation", "definition": "dava" },
          { "term": "Offense", "definition": "suç" },
          { "term": "Plaintiff", "definition": "davacı" },
          { "term": "Prosecutor", "definition": "savcı" },
          { "term": "Sentence", "definition": "ceza" },
          { "term": "Trial", "definition": "duruşma" },
          { "term": "Verdict", "definition": "karar" },
          { "term": "Witness", "definition": "tanık" },
          { "term": "Appeal", "definition": "temyiz" }
        ]
      },
      
        {
          "id": "1",
          "title": "Fiiller",
          "description": "İngilizce C1 seviyesinde fiiller",
          "level": "c1",
          "words": [
            { "term": "Accomplish", "definition": "başarmak" },
            { "term": "Adapt", "definition": "uyum sağlamak" },
            { "term": "Advocate", "definition": "savunmak" },
            { "term": "Comprehend", "definition": "anlamak" },
            { "term": "Convey", "definition": "iletmek" },
            { "term": "Deduce", "definition": "sonuç çıkarmak" },
            { "term": "Devise", "definition": "tasarlamak" },
            { "term": "Enhance", "definition": "geliştirmek" },
            { "term": "Facilitate", "definition": "kolaylaştırmak" },
            { "term": "Illuminate", "definition": "aydınlatmak" },
            { "term": "Implement", "definition": "uygulamak" },
            { "term": "Infer", "definition": "çıkarım yapmak" },
            { "term": "Integrate", "definition": "entegre etmek" },
            { "term": "Optimize", "definition": "optimize etmek" },
            { "term": "Perceive", "definition": "algılamak" },
            { "term": "Resolve", "definition": "çözmek" },
            { "term": "Sustain", "definition": "sürdürmek" },
            { "term": "Synthesize", "definition": "sentezlemek" },
            { "term": "Transform", "definition": "dönüştürmek" },
            { "term": "Validate", "definition": "doğrulamak" }
          ]
        },
        {
          "id": "2",
          "title": "İsimler",
          "description": "İngilizce C1 seviyesinde isimler",
          "level": "c1",
          "words": [
            { "term": "Ambiguity", "definition": "belirsizlik" },
            { "term": "Catalyst", "definition": "katalizör" },
            { "term": "Consensus", "definition": "uzlaşı" },
            { "term": "Constraint", "definition": "kısıtlama" },
            { "term": "Criterion", "definition": "kriter" },
            { "term": "Discrepancy", "definition": "tutarsızlık" },
            { "term": "Disposition", "definition": "eğilim" },
            { "term": "Diversification", "definition": "çeşitlendirme" },
            { "term": "Framework", "definition": "çerçeve" },
            { "term": "Hierarchy", "definition": "hiyerarşi" },
            { "term": "Implication", "definition": "etki" },
            { "term": "Initiative", "definition": "girişim" },
            { "term": "Integrity", "definition": "bütünlük" },
            { "term": "Paradigm", "definition": "paradigma" },
            { "term": "Perspective", "definition": "perspektif" },
            { "term": "Prerequisite", "definition": "ön koşul" },
            { "term": "Spectrum", "definition": "spektrum" },
            { "term": "Subsidy", "definition": "sübvansiyon" },
            { "term": "Synthesis", "definition": "sentez" },
            { "term": "Validity", "definition": "geçerlilik" }
          ]
        },
        {
          "id": "3",
          "title": "Sıfatlar",
          "description": "İngilizce C1 seviyesinde sıfatlar",
          "level": "c1",
          "words": [
            { "term": "Ambiguous", "definition": "belirsiz" },
            { "term": "Coherent", "definition": "tutarlı" },
            { "term": "Comprehensive", "definition": "kapsamlı" },
            { "term": "Conducive", "definition": "elverişli" },
            { "term": "Consistent", "definition": "tutarlı" },
            { "term": "Crucial", "definition": "kritik" },
            { "term": "Elusive", "definition": "zor anlaşılır" },
            { "term": "Feasible", "definition": "uygulanabilir" },
            { "term": "Inevitable", "definition": "kaçınılmaz" },
            { "term": "Intricate", "definition": "karmaşık" },
            { "term": "Obsolete", "definition": "modası geçmiş" },
            { "term": "Plausible", "definition": "makul" },
            { "term": "Pragmatic", "definition": "pragmatik" },
            { "term": "Redundant", "definition": "gereksiz" },
            { "term": "Robust", "definition": "sağlam" },
            { "term": "Subtle", "definition": "ince" },
            { "term": "Tangible", "definition": "somut" },
            { "term": "Ubiquitous", "definition": "her yerde bulunan" },
            { "term": "Versatile", "definition": "çok yönlü" },
            { "term": "Viable", "definition": "uygulanabilir" }
          ]
        },
        {
          "id": "4",
          "title": "Zarflar",
          "description": "İngilizce C1 seviyesinde zarflar",
          "level": "c1",
          "words": [
            { "term": "Allegedly", "definition": "iddiaya göre" },
            { "term": "Coincidentally", "definition": "tesadüfen" },
            { "term": "Consecutively", "definition": "ardışık olarak" },
            { "term": "Deliberately", "definition": "kasten" },
            { "term": "Exclusively", "definition": "yalnızca" },
            { "term": "Hypothetically", "definition": "varsayımsal olarak" },
            { "term": "Inadvertently", "definition": "istemeden" },
            { "term": "Inevitably", "definition": "kaçınılmaz olarak" },
            { "term": "Inherently", "definition": "doğası gereği" },
            { "term": "Intentionally", "definition": "kasten" },
            { "term": "Ostensibly", "definition": "görünüşte" },
            { "term": "Predominantly", "definition": "ağırlıklı olarak" },
            { "term": "Presumably", "definition": "muhtemelen" },
            { "term": "Spontaneously", "definition": "kendiliğinden" },
            { "term": "Subsequently", "definition": "daha sonra" },
            { "term": "Supposedly", "definition": "sözde" },
            { "term": "Tactfully", "definition": "incelikle" },
            { "term": "Thoroughly", "definition": "tamamen" },
            { "term": "Unanimously", "definition": "oybirliğiyle" },
            { "term": "Virtually", "definition": "neredeyse" }
          ]
        },
        {
          "id": "5",
          "title": "Mimarlık Terimleri",
          "description": "Mimarlıkla ilgili terimler",
          "level": "c1",
          "words": [
            { "term": "Aesthetic", "definition": "estetik" },
            { "term": "Blueprint", "definition": "plan" },
            { "term": "Cantilever", "definition": "konsol" },
            { "term": "Facade", "definition": "cephe" },
            { "term": "Foundation", "definition": "temel" },
            { "term": "Infrastructure", "definition": "altyapı" },
            { "term": "Landmark", "definition": "simge yapı" },
            { "term": "Modular", "definition": "modüler" },
            { "term": "Perspective", "definition": "perspektif" },
            { "term": "Renovation", "definition": "yenileme" },
            { "term": "Skyscraper", "definition": "gökdelen" },
            { "term": "Symmetry", "definition": "simetri" },
            { "term": "Urbanization", "definition": "kentleşme" },
            { "term": "Zoning", "definition": "bölgeleme" },
            { "term": "Atrium", "definition": "avlu" },
            { "term": "Balustrade", "definition": "korkuluk" },
            { "term": "Cornice", "definition": "saçak" },
            { "term": "Fenestration", "definition": "pencere düzeni" },
            { "term": "Parapet", "definition": "parapet" },
            { "term": "Veranda", "definition": "veranda" }
          ]
        },
        {
          "id": "6",
          "title": "Psikoloji Terimleri",
          "description": "Psikolojiyle ilgili terimler",
          "level": "c1",
          "words": [
            { "term": "Behavior", "definition": "davranış" },
            { "term": "Cognition", "definition": "biliş" },
            { "term": "Consciousness", "definition": "bilinç" },
            { "term": "Empathy", "definition": "empati" },
            { "term": "Neurosis", "definition": "nevroz" },
            { "term": "Perception", "definition": "algı" },
            { "term": "Psychosis", "definition": "psikoz" },
            { "term": "Stimulus", "definition": "uyaran" },
            { "term": "Therapy", "definition": "terapi" },
            { "term": "Trauma", "definition": "travma" },
            { "term": "Ambivalence", "definition": "ikilem" },
            { "term": "Conditioning", "definition": "koşullanma" },
            { "term": "Dissociation", "definition": "ayrışma" },
            { "term": "Introspection", "definition": "iç gözlem" },
            { "term": "Mindfulness", "definition": "bilinçli farkındalık" },
            { "term": "Neuroplasticity", "definition": "nöroplastisite" },
            { "term": "Resilience", "definition": "direnç" },
            { "term": "Schema", "definition": "şema" },
            { "term": "Subliminal", "definition": "bilinçaltı" },
            { "term": "Synapse", "definition": "sinaps" }
          ]
        },
        {
          "id": "7",
          "title": "Havacılık Terimleri",
          "description": "Havacılıkla ilgili terimler",
          "level": "c1",
          "words": [
            { "term": "Altitude", "definition": "irtifa" },
            { "term": "Cockpit", "definition": "kokpit" },
            { "term": "Fuselage", "definition": "gövde" },
            { "term": "Hangar", "definition": "hangar" },
            { "term": "Jetlag", "definition": "jetlag" },
            { "term": "Runway", "definition": "pist" },
            { "term": "Turbulence", "definition": "türbülans" },
            { "term": "Airspace", "definition": "hava sahası" },
            { "term": "ATC (Air Traffic Control)", "definition": "hava trafik kontrol" },
            { "term": "Cabin", "definition": "kabin" },
            { "term": "Flaps", "definition": "kanatçık" },
            { "term": "Glide", "definition": "süzülme" },
            { "term": "Hull", "definition": "gövde" },
            { "term": "Navigation", "definition": "navigasyon" },
            { "term": "Propeller", "definition": "pervaneli" },
            { "term": "Radar", "definition": "radar" },
            { "term": "Stall", "definition": "stall" },
            { "term": "Thrust", "definition": "itiş" },
            { "term": "Vortex", "definition": "girdap" },
            { "term": "Yaw", "definition": "yalpa" }
          ]
        },
        {
          "id": "8",
          "title": "Çevre Bilimi Terimleri",
          "description": "Çevre bilimiyle ilgili terimler",
          "level": "c1",
          "words": [
            { "term": "Biodiversity", "definition": "biyolojik çeşitlilik" },
            { "term": "Carbon footprint", "definition": "karbon ayak izi" },
            { "term": "Deforestation", "definition": "ormansızlaşma" },
            { "term": "Ecosystem", "definition": "ekosistem" },
            { "term": "Greenhouse effect", "definition": "sera etkisi" },
            { "term": "Habitat", "definition": "habitat" },
            { "term": "Pollution", "definition": "kirlilik" },
            { "term": "Renewable energy", "definition": "yenilenebilir enerji" },
            { "term": "Sustainability", "definition": "sürdürülebilirlik" },
            { "term": "Conservation", "definition": "koruma" },
            { "term": "Erosion", "definition": "erozyon" },
            { "term": "Fossil fuels", "definition": "fosil yakıtlar" },
            { "term": "Ozone layer", "definition": "ozon tabakası" },
            { "term": "Pesticide", "definition": "pestisit" },
            { "term": "Recycling", "definition": "geri dönüşüm" },
            { "term": "Solar power", "definition": "güneş enerjisi" },
            { "term": "Waste management", "definition": "atık yönetimi" },
            { "term": "Wetland", "definition": "sulak alan" },
            { "term": "Climate change", "definition": "iklim değişikliği" },
            { "term": "Composting", "definition": "kompostlama" }
          ]
        },
        
          {
            "id": "1",
            "title": "Fiiller",
            "description": "İngilizce C2 seviyesinde fiiller",
            "level": "c2",
            "words": [
              { "term": "Abate", "definition": "azaltmak" },
              { "term": "Concur", "definition": "aynı fikirde olmak" },
              { "term": "Elucidate", "definition": "açıklamak" },
              { "term": "Exacerbate", "definition": "kötüleştirmek" },
              { "term": "Extrapolate", "definition": "tahmin etmek" },
              { "term": "Garner", "definition": "toplamak" },
              { "term": "Impute", "definition": "yüklemek" },
              { "term": "Mitigate", "definition": "hafifletmek" },
              { "term": "Perpetuate", "definition": "sürdürmek" },
              { "term": "Precipitate", "definition": "hızlandırmak" },
              { "term": "Reconcile", "definition": "uzlaştırmak" },
              { "term": "Rescind", "definition": "iptal etmek" },
              { "term": "Subsume", "definition": "kapsamak" },
              { "term": "Transpire", "definition": "meydana gelmek" },
              { "term": "Undermine", "definition": "baltalamak" },
              { "term": "Usurp", "definition": "gaspetmek" },
              { "term": "Venerate", "definition": "saygı göstermek" },
              { "term": "Vindicate", "definition": "aklamak" },
              { "term": "Wane", "definition": "azalmak" },
              { "term": "Wield", "definition": "kullanmak" }
            ]
          },
          {
            "id": "2",
            "title": "İsimler",
            "description": "İngilizce C2 seviyesinde isimler",
            "level": "c2",
            "words": [
              { "term": "Adulation", "definition": "aşırı övgü" },
              { "term": "Antithesis", "definition": "zıtlık" },
              { "term": "Candor", "definition": "açık sözlülük" },
              { "term": "Disparity", "definition": "eşitsizlik" },
              { "term": "Euphemism", "definition": "örtmece" },
              { "term": "Exigency", "definition": "aciliyet" },
              { "term": "Fortitude", "definition": "metanet" },
              { "term": "Impetus", "definition": "itici güç" },
              { "term": "Largesse", "definition": "cömertlik" },
              { "term": "Levity", "definition": "hafiflik" },
              { "term": "Myriad", "definition": "sayısız" },
              { "term": "Ostentation", "definition": "gösteriş" },
              { "term": "Penchant", "definition": "eğilim" },
              { "term": "Precursor", "definition": "öncü" },
              { "term": "Quintessence", "definition": "öz" },
              { "term": "Reprieve", "definition": "erteleme" },
              { "term": "Sycophant", "definition": "dalkavuk" },
              { "term": "Tirade", "definition": "uzun eleştiri" },
              { "term": "Vicissitude", "definition": "değişkenlik" },
              { "term": "Zenith", "definition": "doruk" }
            ]
          },
          {
            "id": "3",
            "title": "Sıfatlar",
            "description": "İngilizce C2 seviyesinde sıfatlar",
            "level": "c2",
            "words": [
              { "term": "Abstruse", "definition": "anlaşılması zor" },
              { "term": "Bellicose", "definition": "savaşçı" },
              { "term": "Complacent", "definition": "kayıtsız" },
              { "term": "Contentious", "definition": "tartışmalı" },
              { "term": "Deleterious", "definition": "zararlı" },
              { "term": "Esoteric", "definition": "gizli" },
              { "term": "Flippant", "definition": "ciddiyetsiz" },
              { "term": "Garrulous", "definition": "geveze" },
              { "term": "Insidious", "definition": "sinsi" },
              { "term": "Intransigent", "definition": "uzlaşmaz" },
              { "term": "Meticulous", "definition": "titiz" },
              { "term": "Nefarious", "definition": "kötü niyetli" },
              { "term": "Obtuse", "definition": "anlayışsız" },
              { "term": "Perfunctory", "definition": "üstünkörü" },
              { "term": "Pragmatic", "definition": "pragmatik" },
              { "term": "Quixotic", "definition": "hayalperest" },
              { "term": "Recalcitrant", "definition": "inatçı" },
              { "term": "Spurious", "definition": "sahte" },
              { "term": "Taciturn", "definition": "suskun" },
              { "term": "Volatile", "definition": "uçucu" }
            ]
          },
          {
            "id": "4",
            "title": "Zarflar",
            "description": "İngilizce C2 seviyesinde zarflar",
            "level": "c2",
            "words": [
              { "term": "Assiduously", "definition": "özenle" },
              { "term": "Concomitantly", "definition": "eşzamanlı olarak" },
              { "term": "Consequentially", "definition": "sonuç olarak" },
              { "term": "Didactically", "definition": "öğretici bir şekilde" },
              { "term": "Egregiously", "definition": "aşırı derecede" },
              { "term": "Indubitably", "definition": "şüphesiz" },
              { "term": "Ineffably", "definition": "tarifsiz bir şekilde" },
              { "term": "Intrinsically", "definition": "özünde" },
              { "term": "Ostensibly", "definition": "görünüşte" },
              { "term": "Perfidiously", "definition": "haince" },
              { "term": "Profligately", "definition": "savurganca" },
              { "term": "Querulously", "definition": "huysuzca" },
              { "term": "Resolutely", "definition": "kararlı bir şekilde" },
              { "term": "Sedulously", "definition": "özenle" },
              { "term": "Sporadically", "definition": "seyrek olarak" },
              { "term": "Superficially", "definition": "yüzeysel olarak" },
              { "term": "Tenaciously", "definition": "inatla" },
              { "term": "Unabashedly", "definition": "utanmadan" },
              { "term": "Voraciously", "definition": "açgözlü bir şekilde" },
              { "term": "Wryly", "definition": "alaycı bir şekilde" }
            ]
          },
          
          {
            "id": "6",
            "title": "Uluslararası İlişkiler Terimleri",
            "description": "Uluslararası ilişkilerle ilgili terimler",
            "level": "c2",
            "words": [
              { "term": "Diplomacy", "definition": "diplomasi" },
              { "term": "Sovereignty", "definition": "egemenlik" },
              { "term": "Geopolitics", "definition": "jeopolitik" },
              { "term": "Sanction", "definition": "yaptırım" },
              { "term": "Embargo", "definition": "ambargo" },
              { "term": "Treaty", "definition": "antlaşma" },
              { "term": "Alliance", "definition": "ittifak" },
              { "term": "Hegemony", "definition": "hegemonya" },
              { "term": "Bilateralism", "definition": "ikili ilişkiler" },
              { "term": "Multilateralism", "definition": "çok taraflılık" },
              { "term": "Nonproliferation", "definition": "yayılmama" },
              { "term": "Peacekeeping", "definition": "barışı koruma" },
              { "term": "Soft power", "definition": "yumuşak güç" },
              { "term": "Hard power", "definition": "sert güç" },
              { "term": "Realpolitik", "definition": "realpolitik" },
              { "term": "Détente", "definition": "yumuşama" },
              { "term": "Proxy war", "definition": "vekalet savaşı" },
              { "term": "Globalization", "definition": "küreselleşme" },
              { "term": "Nationalism", "definition": "milliyetçilik" },
              { "term": "Supranationalism", "definition": "uluslarüstücülük" }
            ]
          },
          
          {
            "id": "8",
            "title": "Edebiyat Terimleri",
            "description": "Edebiyatla ilgili terimler",
            "level": "c2",
            "words": [
              { "term": "Allegory", "definition": "alegori" },
              { "term": "Archetype", "definition": "arketip" },
              { "term": "Catharsis", "definition": "katarsis" },
              { "term": "Dystopia", "definition": "distopya" },
              { "term": "Epiphany", "definition": "epifani" },
              { "term": "Foil", "definition": "karşıt karakter" },
              { "term": "Hubris", "definition": "kibir" },
              { "term": "Irony", "definition": "ironi" },
              { "term": "Juxtaposition", "definition": "yan yana koyma" },
              { "term": "Metafiction", "definition": "meta kurgu" },
              { "term": "Motif", "definition": "motif" },
              { "term": "Paradox", "definition": "paradoks" },
              { "term": "Parody", "definition": "parodi" },
              { "term": "Satire", "definition": "hiciv" },
              { "term": "Soliloquy", "definition": "monolog" },
              { "term": "Symbolism", "definition": "sembolizm" },
              { "term": "Trope", "definition": "edebi motif" },
              { "term": "Verisimilitude", "definition": "gerçeklik izlenimi" },
              { "term": "Bildungsroman", "definition": "olgunlaşma romanı" },
              { "term": "Stream of consciousness", "definition": "bilinç akışı" }
            ]
          }
        
  
];

export default function WordsPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedList, setSelectedList] = useState<WordList | null>(null);
  const { addWords } = useWordStore();
  const navigate = useNavigate();

  const filteredLists = SAMPLE_LISTS.filter(list => 
    (!selectedLevel || list.level === selectedLevel) &&
    (list.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     list.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleStudyList = (list: WordList) => {
    addWords(list.words);
    navigate('/test');
  };

  // Eğer bir liste seçilmişse, o listenin detaylarını göster
  if (selectedList) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <Navigation />
        
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={() => setSelectedList(null)}
            className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kelime Listelerine Dön</span>
          </button>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedList.title}</h2>
                <p className="text-white/80">{selectedList.description}</p>
              </div>
              <span className={`px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
                LEVELS.find(l => l.id === selectedList.level)?.color
              } text-white`}>
                {LEVELS.find(l => l.id === selectedList.level)?.name}
              </span>
            </div>

            <div className="grid gap-4 mb-8">
              {selectedList.words.map((word, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-white/60">{index + 1}.</span>
                    <span className="text-white font-medium">{word.term}</span>
                  </div>
                  <span className="text-white/80">{word.definition}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleStudyList(selectedList)}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Çalışmaya Başla</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <BookMarked className="w-8 h-8 text-white" />
            <h1 className="text-4xl font-bold text-white">Kelime Listeleri</h1>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Kelime listesi ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-white placeholder-white/60 flex-1 ml-2"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedLevel(null)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              !selectedLevel 
                ? 'bg-white text-blue-600' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Tümü
          </button>
          {LEVELS.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedLevel === level.id
                  ? 'bg-white text-blue-600'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLists.map((list) => {
            const level = LEVELS.find(l => l.id === list.level);
            return (
              <div
                key={list.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${level?.color} text-white`}>
                    {level?.name}
                  </span>
                  <span className="text-white/60 text-sm">
                    {list.words.length} kelime
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{list.title}</h3>
                <p className="text-white/80 mb-6">{list.description}</p>

                <button
                  onClick={() => setSelectedList(list)}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Kelimeleri Görüntüle</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}