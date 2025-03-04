import { GrammarTopic } from '../types/grammar';

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'articles',
    title: 'Articles Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede articles (tanımlıklar), isimlerin belirsiz veya belirli olduğunu ifade etmek için kullanılır.',
          'İki tür tanımlık vardır: Belirsiz Tanımlıklar (A, An) ve Belirli Tanımlık (The).',
        ],
      },
      {
        type: 'examples',
        title: 'Tanımlık Türleri',
        items: ['A / An (Belirsiz Tanımlıklar)', 'The (Belirli Tanımlık)'],
      },
      {
        type: 'notes',
        title: '1. A / An Kullanımı',
        items: [
          'A ve An, sayılabilir ve tekil isimlerle kullanılır.',
          'A: Sessiz harf ile başlayan kelimelerle kullanılır. (a book, a cat, a university)',
          'An: Sesli harf ile başlayan kelimelerle kullanılır. (an apple, an elephant, an hour)',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I have a pen. (Ben bir kaleme sahibim.)',
          'She bought an orange. (O bir portakal aldı.)',
          'He is a university student. (O bir üniversite öğrencisi.)',
        ],
      },
      {
        type: 'notes',
        title: '2. The Kullanımı',
        items: [
          'The, belirli veya daha önce bahsedilmiş isimlerle kullanılır.',
          'Tek ve benzersiz şeylerden bahsederken kullanılır. (the sun, the moon, the Earth)',
          'Bir grubu veya kategoriyi temsil eden isimlerle kullanılabilir. (the rich, the poor, the elderly)',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I saw the dog you were talking about. (Senin bahsettiğin köpeği gördüm.)',
          'The sun is shining. (Güneş parlıyor.)',
          'She is reading the book I gave her. (Ona verdiğim kitabı okuyor.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Tanımlık Kullanılmayan Durumlar',
        items: [
          'İsimler genel anlamda kullanıldığında tanımlık almaz. (Dogs are friendly.)',
          'Öğünler, sporlar ve diller tanımlık almaz. (I have breakfast. / She speaks French.)',
          'Ünvanlar, sahip olunan unvan veya unvan + isim ile kullanılmaz. (President Biden / Doctor Smith)',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I love cats. (Ben kedileri severim.)',
          'We play football every Sunday. (Biz her pazar futbol oynarız.)',
          'She is learning Spanish. (O İspanyolca öğreniyor.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. A / An, yalnızca tekil ve sayılabilir isimlerle kullanılır.',
          '2. The, belirli nesneler veya daha önce bahsedilmiş isimler için kullanılır.',
          '3. Genel anlam taşıyan çoğul isimler ve özel isimler genellikle tanımlık almaz.',
          '4. İngilizcede belirli ses kurallarına dikkat edilerek a / an seçimi yapılır. (a university, an hour)',
        ],
      },
    ],
    tests: [],
  },

  {
    id: 'word-order',
    title: 'Word Order (Sözcük Dizimi) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede cümle yapısı genellikle Subject (Özne) + Verb (Fiil) + Object (Nesne) şeklindedir. Türkçede ise Özne + Nesne + Fiil sıralaması kullanılır. Bu temel farkı anlamak, doğru İngilizce cümle kurmanın anahtarıdır.',
          'Ayrıca, adverb (zarflar) cümle içinde belirli kurallara göre yerleştirilir. Zarflar, eylemin nasıl, ne zaman, ne sıklıkla veya nerede yapıldığını belirtir.',
        ],
      },
      {
        type: 'examples',
        title: 'Temel Cümle Yapısı (Basic Sentence Structure)',
        items: [
          'Subject + Verb + Object',
          'Subject + Verb + Adverb',
          'Subject + Adverb + Verb + Object',
        ],
      },
      {
        type: 'notes',
        title: '1. Temel Cümle Yapısı',
        items: [
          'İngilizcede cümleler genellikle Özne + Fiil + Nesne şeklinde kurulur.',
          'Türkçede ise Özne + Nesne + Fiil sıralaması kullanılır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I eat an apple. (Ben bir elma yerim.)',
          'She reads a book. (O bir kitap okur.)',
          'They play football. (Onlar futbol oynar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Adverbs of Manner (Durum Zarfları)',
        items: [
          'Durum zarfları, eylemin nasıl yapıldığını belirtir. İngilizcede genellikle fiilden sonra veya cümlenin sonunda kullanılır.',
          'Türkçede ise durum zarfları genellikle fiilden önce gelir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'She sings beautifully. (O güzelce şarkı söyler.)',
          'He drives carefully. (O dikkatlice araba sürer.)',
          'They speak loudly. (Onlar yüksek sesle konuşur.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Adverbs of Frequency (Sıklık Zarfları)',
        items: [
          'Sıklık zarfları, eylemin ne sıklıkla yapıldığını belirtir. İngilizcede genellikle özneden sonra, asıl fiilden önce kullanılır.',
          'Türkçede ise sıklık zarfları genellikle cümlenin başında veya fiilden önce gelir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I always drink tea. (Ben her zaman çay içerim.)',
          'They sometimes play football. (Onlar bazen futbol oynar.)',
          'She never arrives late. (O asla geç kalmaz.)',
        ],
      },
      {
        type: 'notes',
        title: '4. Adverbs of Time (Zaman Zarfları)',
        items: [
          'Zaman zarfları, eylemin ne zaman yapıldığını belirtir. İngilizcede genellikle cümlenin başında veya sonunda kullanılır.',
          'Türkçede de zaman zarfları benzer şekilde cümlenin başında veya sonunda kullanılır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Yesterday, I visited my grandmother. (Dün büyükannemi ziyaret ettim.)',
          'We will meet tomorrow. (Yarın buluşacağız.)',
          'She is leaving now. (O şimdi ayrılıyor.)',
        ],
      },
      {
        type: 'notes',
        title: '5. Adverbs of Place (Yer Zarfları)',
        items: [
          'Yer zarfları, eylemin nerede yapıldığını belirtir. İngilizcede genellikle fiilden sonra veya cümlenin sonunda kullanılır.',
          'Türkçede ise yer zarfları genellikle fiilden önce veya sonra gelir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'She is waiting here. (O burada bekliyor.)',
          'They went abroad. (Onlar yurtdışına gitti.)',
          'The children are playing outside. (Çocuklar dışarıda oynuyor.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. İngilizcede cümle yapısı genellikle Özne + Fiil + Nesne şeklindedir.',
          '2. Durum zarfları (adverbs of manner) genellikle fiilden sonra kullanılır.',
          '3. Sıklık zarfları (adverbs of frequency) özneden sonra, fiilden önce gelir.',
          '4. Zaman ve yer zarfları cümlenin başında veya sonunda kullanılabilir.',
        ],
      },
    ],
    tests: [],
  },
  {
    id: 'nouns',
    title: 'Nouns (İsimler) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede nouns yani isimler, insanları, hayvanları, yerleri, nesneleri, duyguları, düşünceleri ve kavramları ifade eden kelimelerdir. Türkçede olduğu gibi İngilizcede de isimler cümle içinde özne, nesne veya tamlama olarak kullanılır. İsimler, İngilizce dilbilgisinin temel taşlarından biridir ve doğru kullanımı cümle kurmak için çok önemlidir.',
        ],
      },
      {
        type: 'examples',
        title: 'Types of Nouns (İsim Türleri) ',
        items: [
          'Proper Nouns (Özel İsimler)',
          'Common Nouns (Cins İsimler)',
          'Countable and Uncountable Nouns (Sayılabilen ve Sayılamayan İsimler)',
          'Plural Nouns (Çoğul İsimler)',
          'Possessive Nouns (İyelik İsimler)',
        ],
      },
      {
        type: 'notes',
        title: '1. Proper Nouns (Özel İsimler)',
        items: [
          'Özel isimler, belirli bir kişi, yer veya şeyin adıdır. Her zaman büyük harfle başlarlar. ',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Ahmet is a good student. (Ahmet iyi bir öğrencidir.)',
          'I live in İstanbul. (Ben İstanbul’da yaşıyorum.)  ',
          'Mount Everest is the highest mountain. (Everest Dağı en yüksek dağdır.)  ',
        ],
      },
      {
        type: 'notes',
        title: '2. Common Nouns (Cins İsimler) ',
        items: [
          'Cins isimler, genel olarak herhangi bir kişi, yer veya nesneyi ifade eder. Küçük harfle başlarlar.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I have a dog. (Bir köpeğim var.)',
          'She bought a book. (O bir kitap aldı.)',
          'We went to the park. (Parka gittik.)',
        ],
      },
      {
        type: 'notes',
        title:
          '3. Countable and Uncountable Nouns (Sayılabilen ve Sayılamayan İsimler)  ',
        items: [
          'Özel isimler, belirli bir kişi, yer veya şeyin adıdır. Her zaman büyük harfle başlarlar. ',
        ],
      },
      {
        type: 'notes',
        title: 'Countable Nouns (Sayılabilen İsimler)  ',
        items: [
          'Sayabildiğimiz nesnelerdir. Hem tekil hem çoğul halleri vardır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I have two apples. (İki elmam var.)',
          'She has three cats. (Onun üç kedisi var.)',
        ],
      },
      {
        type: 'notes',
        title: 'Uncountable Nouns (Sayılamayan İsimler)',
        items: [
          'Sayamadığımız şeylerdir. Genellikle tekil olarak kullanılırlar.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I need some water. (Biraz suya ihtiyacım var.)  ',
          'She has a lot of patience. (Onun çok sabrı var.)   ',
        ],
      },
      {
        type: 'notes',
        title: '4. Plural Nouns (Çoğul İsimler)',
        items: [
          'İngilizcede çoğul isimler genellikle -s veya -es eklenerek oluşturulur.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Book → Books (Kitap → Kitaplar)',
          'Box → Boxes (Kutu → Kutular)',
          'Child → Children (Çocuk → Çocuklar) (Düzensiz çoğul)',
        ],
      },

      {
        type: 'notes',
        title: '5. Possessive Nouns (İyelik İsimleri)  ',
        items: [
          'İyelik isimleri, bir şeyin kime ait olduğunu gösterir. İyelik eki ’s veya sadece ’ ile oluşturulur.  ',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'This is Ahmet’s car. (Bu Ahmet’in arabası.) ',
          'The students’ books are on the table. (Öğrencilerin kitapları masanın üzerinde.)',
        ],
      },
      {
        type: 'usage',
        title: 'İsimlerin Cümle İçinde Kullanımı',
        items: [
          'İsimler, cümlede özne, nesne veya tamlayan olarak kullanılabilir.',
        ],
      },

      {
        type: 'keyRules',
        title: '1. Özne Olarak İsimler',
        items: [
          'The cat is sleeping. (Kedi uyuyor.) ',
          'My brother loves football. (Erkek kardeşim futbolu sever.) ',
        ],
      },
      {
        type: 'keyRules',
        title: '2. Nesne Olarak İsimler',
        items: [
          ' I bought a book. (Bir kitap aldım.)  ',
          ' She loves animals. (O hayvanları sever.) ',
        ],
      },
      {
        type: 'keyRules',
        title: '3. Tamlayan Olarak İsimler',
        items: [
          'This is my mother’s bag. (Bu annemin çantası.)',
          'The car’s color is red. (Arabanın rengi kırmızı.)  ',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips) ',
        items: [
          '1. Özel isimler her zaman büyük harfle başlar. ',
          '2. Sayılamayan isimlerle sayı kullanılmaz.    ',
          '3. Çoğul isimlerle “are” veya “some” kullanılır.    ',
          '4. İyelik isimlerinde ’s veya ’ kullanımına dikkat edin.   ',
        ],
      },

      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri ',
        items: [
          '1. The dog is barking. (Köpek havlıyor.) - Burada "dog" özne olarak kullanılmıştır.',
          '2. I bought a new phone. (Yeni bir telefon aldım.)  - Burada "phone" nesne olarak kullanılmıştır. ',
          '3. My sister’s bag is blue. (Kız kardeşimin çantası mavidir.)   - Burada "sister’s" iyelik ismi olarak kullanılmıştır.   ',
          '4. We need some milk. (Biraz süte ihtiyacımız var.)   - Burada "milk" sayılamayan bir isimdir.   ',
          '5. Children are playing in the park. (Çocuklar parkta oynuyor.)  - Burada "children" çoğul isim olarak kullanılmıştır.   ',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç  ',
        items: [
          'İsimler, İngilizcede cümle kurmanın temelidir. Özel isimler, cins isimler, sayılabilen ve sayılamayan isimler gibi türlerini öğrenmek, doğru cümleler kurmanızı sağlar. İsimlerin çoğul hallerini ve iyelik eklerini doğru kullanmak da önemlidir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak İngilizce isimleri kolayca öğrenebilirsiniz! 😊',
        ],
      },
    ],

    tests: [
      {
        id: 'nouns-1',
        title: 'Nouns - Test 1',
        description: 'İsimler konusuyla ilgili temel bilgileri test edin.',
        questions: [
          {
            id: '1',
            question:
              "Aşağıdakilerden hangisi 'Proper Noun' (Özel İsim) değildir?",
            options: ['paris', 'dog', 'ahmet', 'mount everest'],
            correctAnswer: 'dog',
          },
          {
            id: '2',
            question:
              "'I need some ______ for the soup.' Boşluğa hangisi gelmelidir?",
            options: ['apple', 'salt', 'books', 'cats'],
            correctAnswer: 'salt',
          },
          {
            id: '3',
            question:
              "Hangi cümlede 'Possessive Noun' (İyelik İsmi) kullanılmıştır?",
            options: [
              'The children are happy.',
              'This is Ayşe’s notebook.',
              'I bought three pens.',
              'Water is important.',
            ],
            correctAnswer: 'This is Ayşe’s notebook.',
          },
          {
            id: '4',
            question:
              "'The ______ are playing in the garden.' Boşluğa hangi çoğul isim gelir?",
            options: ['child', 'childs', 'children', 'childes'],
            correctAnswer: 'children',
          },
          {
            id: '5',
            question: "Hangisi 'Uncountable Noun' (Sayılamayan İsim) değildir?",
            options: ['rice', 'money', 'chair', 'happiness'],
            correctAnswer: 'chair',
          },
          {
            id: '6',
            question: "'I have two waters.' Cümlesi neden yanlıştır?",
            options: [
              "'Water' sayılabilen bir isimdir.",
              "'Water' sayılamayan bir isimdir.",
              "'Waters' yazılmalıdır.",
              "'Two' kullanılamaz.",
            ],
            correctAnswer: "'Water' sayılamayan bir isimdir.",
          },
          {
            id: '7',
            question: "'London' hangi isim türüne örnektir?",
            options: [
              'Common Noun',
              'Proper Noun',
              'Plural Noun',
              'Uncountable Noun',
            ],
            correctAnswer: 'Proper Noun',
          },
          {
            id: '8',
            question:
              "'The students’ projects' ifadesindeki iyelik eki nasıl oluşturulmuştur?",
            options: ['’s', 's’', '’', 's'],
            correctAnswer: 's’',
          },
          {
            id: '9',
            question:
              "'She has a lot of patience.' Cümlesinde 'patience' hangi isim türüdür?",
            options: [
              'Countable Noun',
              'Proper Noun',
              'Uncountable Noun',
              'Plural Noun',
            ],
            correctAnswer: 'Uncountable Noun',
          },
          {
            id: '10',
            question: "'Boxes' kelimesinin tekil hali nedir?",
            options: ['boxs', 'box', 'boxes', 'boxen'],
            correctAnswer: 'box',
          },
        ],
      },
      {
        id: 'nouns-2',
        title: 'Nouns - Test 2',
        description: 'İsimler konusunda ileri düzey bilgileri test edin.',
        questions: [
          {
            id: '1',
            question:
              "'I need to buy new ______ (shoe).' Boşluğa hangi çoğul isim gelir?",
            options: ['shoes', 'shoess', 'shoses', 'shoe'],
            correctAnswer: 'shoes',
          },
          {
            id: '2',
            question:
              "'This is my ______ (sister) bag.' Boşluğa hangi iyelik eki gelmelidir?",
            options: ['sisters', 'sister’s', 'sisters’', 'sister'],
            correctAnswer: 'sister’s',
          },
          {
            id: '3',
            question:
              "'Can you pass me the ______ (book) on the table?' Boşluğa hangisi gelir?",
            options: ['book', 'books', 'bookes', 'Both a and b'],
            correctAnswer: 'Both a and b',
          },
          {
            id: '4',
            question:
              "'We need some ______ (milk) for the cake.' Boşluğa hangisi gelir?",
            options: ['milks', 'milk', 'a milk', 'milkes'],
            correctAnswer: 'milk',
          },
          {
            id: '5',
            question:
              "'The ______ (city) of Rome is ancient.' Boşluğa hangi isim gelir?",
            options: ['city', 'cities', 'citys', 'cityes'],
            correctAnswer: 'city',
          },
          {
            id: '6',
            question: "'Love' hangi isim türüne örnektir?",
            options: [
              'Proper Noun',
              'Countable Noun',
              'Uncountable Noun',
              'Plural Noun',
            ],
            correctAnswer: 'Uncountable Noun',
          },
          {
            id: '7',
            question:
              "'I have three pen.' Cümlesini düzeltmek için hangi seçenek doğrudur?",
            options: [
              'three pens',
              'three pen',
              'three penses',
              'three pennes',
            ],
            correctAnswer: 'three pens',
          },
          {
            id: '8',
            question:
              "'This is the teachers office.' Cümlesini düzeltmek için hangi iyelik eki kullanılmalıdır?",
            options: ['teachers’s', 'teacher’s', 'teachers’', 'teacher'],
            correctAnswer: 'teacher’s',
          },
          {
            id: '9',
            question: 'Aşağıdakilerden hangisi sayılamayan isim değildir?',
            options: ['water', 'sugar', 'cat', 'happiness'],
            correctAnswer: 'cat',
          },
          {
            id: '10',
            question: "'Child' kelimesinin çoğulu nedir?",
            options: ['childs', 'children', 'childes', 'childies'],
            correctAnswer: 'children',
          },
        ],
      },
    ], // tests array kapatıldı
  },
  {
    id: 'pronoun',
    title: 'Pronouns (Zamirler) Nedir?',
    description: 'Daha fazlası için tıkla.',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede pronouns yani zamirler, isimlerin yerine kullanılan kelimelerdir. Zamirler, tekrar tekrar aynı ismi kullanmamızı engeller ve cümleleri daha akıcı hale getirir. Türkçede "ben, sen, o, bu, şu" gibi kelimeler zamirdir. İngilizcede de benzer mantıkla çalışırlar. Zamirleri öğrenmek, basit cümleler kurmak için çok önemlidir. ',
        ],
      },
      {
        type: 'examples',
        title: 'Zamir Türleri (Types of Pronouns)',
        items: [
          'Personal Pronouns (Kişi Zamirleri)  ',
          'Possessive Pronouns (İyelik Zamirleri)',
          'Reflexive Pronouns (Dönüşlü Zamirler)',
          'Demonstrative Pronouns (İşaret Zamirleri)',
          'Interrogative Pronouns (Soru Zamirleri)',
          'Indefinite Pronouns (Belgisiz Zamirler)',
        ],
      },
      {
        type: 'notes',
        title: '1. Personal Pronouns (Kişi Zamirleri)',
        items: [
          'Kişi zamirleri, insanların veya nesnelerin yerine kullanılır. Özne (cümlenin başında) veya nesne (cümlenin sonunda) olarak ikiye ayrılır.',
          'Türkçe - Özne Zamiri - Nesne Zami',
          'Ben - I - Me',
          'Sen - You - You ',
          'O (Erkek) - He - Him',
          'O (Kadın) - She - He',
          ' O (Cansız/Hayvan) - It - It  ',
          'Biz - We - Us  ',
          'Siz - You - You ',
          'Onlar - They - Them ',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'I am a teacher. (Ben bir öğretmenim.)',
          'She loves him. (O onu seviyor.)',
          'They are students. (Onlar öğrenci.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Possessive Pronouns (İyelik Zamirleri)',
        items: [
          'İyelik zamirleri, bir şeyin kime ait olduğunu gösterir. Türkçedeki "benim, senin, onun" gibi kelimelerdir.',
          'Türkçe - İyelik Zamiri - Örnek  ',
          'Benimki - Mine - This is mine. (Bu benimki.)',
          'Seninki - Yours - The book is yours. (Kitap seninki.)',
          'Onunki (Erkek) - His - The car is his. (Araba onunki.)',
          'Onunki (Kadın) - Hers - The bag is hers. (Çanta onunki.)',
          'Onunki (Cansız) - Its - The toy is its. (Oyuncak onunki.)',
          'Bizimki - Ours - The house is ours. (Ev bizimki.)',
          'Sizinki - Yours - The keys are yours. (Anahtarlar sizinki.)',
          'Onlarınki - Theirs - The money is theirs. (Para onlarınki.)',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'This phone is mine. (Bu telefon benim.) ',
          'Is this pen yours? (Bu kalem senin mi?)',
        ],
      },

      {
        type: 'notes',
        title: '3. Reflexive Pronouns (Dönüşlü Zamirler)',
        items: [
          'Dönüşlü zamirler, bir eylemin özneye geri döndüğünü gösterir. Türkçede "kendim, kendin" gibi kelimelerdir. ',
          'Türkçe - Dönüşlü Zamir',
          'Kendim - Myself',
          'Kendin - Yourself',
          'Kendisi (Erkek) - Himself',
          'Kendisi (Kadın) - Herself',
          'Kendisi (Cansız) - Itself',
          'Kendimiz - Ourselves',
          'Kendiniz - Yourselves',
          'Kendileri - Themselves',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'She cut herself. (O kendini kesti.)',
          'They enjoyed themselves. (Onlar kendileri eğlendi.)',
        ],
      },

      {
        type: 'notes',
        title: '4. Demonstrative Pronouns (İşaret Zamirleri)',
        items: [
          'İşaret zamirleri, bir nesneyi veya kişiyi işaret etmek için kullanılır. Türkçedeki "bu, şu, onlar" gibi kelimelerdir.  ',
          'Türkçe - Dönüşlü Zamir',
          'Kendim - Myself',
          'Kendin - Yourself',
          'Kendisi (Erkek) - Himself',
          'Kendisi (Kadın) - Herself',
          'Kendisi (Cansız) - Itself',
          'Kendimiz - Ourselves',
          'Kendiniz - Yourselves',
          'Kendileri - Themselves',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'She cut herself. (O kendini kesti.)',
          'They enjoyed themselves. (Onlar kendileri eğlendi.)',
        ],
      },
      {
        type: 'notes',
        title: '4. Demonstrative Pronouns (İşaret Zamirleri)',
        items: [
          'İşaret zamirleri, bir nesneyi veya kişiyi işaret etmek için kullanılır. Türkçedeki "bu, şu, onlar" gibi kelimelerdir.',
          ' This - Bu',
          ' That  - Şu',
          ' These - Bunlar',
          ' Those - Şunlar',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'This is my bag. (Bu benim çantam.)',
          'Those are my friends. (Şunlar benim arkadaşlarım.)',
        ],
      },
      {
        type: 'notes',
        title: '5. Interrogative Pronouns (Soru Zamirleri)',
        items: [
          'Soru zamirleri, soru sormak için kullanılan kelimelerdir. Türkçedeki "kim, ne, hangi" gibi kelimelere benzerler. İngilizcede en yaygın soru zamirleri şunlardır:',
          ' Kim -	Who	Kişiler için soru sormak.',
          ' Kime -Whom	Kime (resmi dilde kullanılır).',
          ' Kimin -	Whose	Sahiplik belirtmek için.',
          ' Ne -	What	Nesne ve eylem için',
          ' Hangi -	Which	Seçenekler arasında seçim yapmak için.',
        ],
      },
      {
        type: 'notes',
        title: 'Who (Kim)',
        items: ['Kişiler hakkında soru sorarken kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Who is your teacher? (Kim senin öğretmenin?)',
          'Who called you? (Seni kim aradı?)',
        ],
      },
      {
        type: 'notes',
        title: 'What (Ne)',
        items: ['Nesneler, eylemler veya genel bilgi için kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'What is this? (Ne bu?)',
          'What are you doing? (Ne yapıyorsun?)',
        ],
      },
      {
        type: 'notes',
        title: 'Which (Hangi)',
        items: ['Sınırlı seçenekler arasından seçim yaparken kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Which color do you prefer? (Hangi rengi tercih edersin?)',
          'Which book is yours? (Hangi kitap senin?)',
        ],
      },
      {
        type: 'notes',
        title: 'Whose (Kimin)',
        items: ['Bir şeyin kime ait olduğunu sormak için kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Whose bag is this? (Bu kimin çantası?)',
          'Whose keys are these? (Bunlar kimin anahtarları?)',
        ],
      },

      {
        type: 'notes',
        title: '6. Indefinite Pronouns (Belgisiz Zamirler)',
        items: [
          'Belgisiz zamirler, belirli olmayan kişi, nesne veya yerleri ifade eder. Türkçedeki "biri, herkes, hiçbir şey" gibi kelimelere benzerler. İngilizcede en yaygın belgisiz zamirler:',
          'Biri	Someone/Somebody	Olumlu cümlelerde belirsiz kişi.',
          'Herkes	Everyone/Everybody	Tüm insanlar için.',
          'Hiç kimse	No one/Nobody	Olumsuz anlam.',
          'Bir şey	Something	Olumlu cümlelerde belirsiz nesne.',
          'Hiçbir şey	Nothing	Olumsuz anlam.',
          'Her şey	Everything	Tüm şeyler için.',
          'Hiçbir yer  Nowhere	Olumsuz anlam.',
        ],
      },
      {
        type: 'notes',
        title: 'Someone/Somebody (Biri',
        items: ['Olumlu cümlelerde kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Someone is knocking the door. (Biri kapıyı çalıyor.)',
          'Can somebody help me? (Biri bana yardım edebilir mi?)',
        ],
      },
      {
        type: 'notes',
        title: 'Someone/Somebody (Biri',
        items: ['Olumlu cümlelerde kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Someone is knocking the door. (Biri kapıyı çalıyor.)',
          'Can somebody help me? (Biri bana yardım edebilir mi?)',
        ],
      },
      {
        type: 'notes',
        title: 'Anyone/Anybody (Hiç kimse/Herhangi biri)',
        items: ['Soru ve olumsuz cümlelerde kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: [
          'Is anyone here? (Burada hiç kimse var mı?)',
          'I don’t know anyone. (Hiç kimseyi tanımıyorum.)',
        ],
      },
      {
        type: 'notes',
        title: 'Everyone/Everybody (Herkes)',
        items: ['Tüm grup için kullanılır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: ['Everyone loves pizza. (Herkes pizzayı sever.)'],
      },
      {
        type: 'notes',
        title: 'No one/Nobody (Hiç kimse)',
        items: [
          'Olumsuz cümlelerde kullanılır. Cümle yapı olarak olumsuzluk ifade etmez fakat anlam olarak cümle olumsuzdur.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: ['Nobody came to the party. (Hiç kimse partiye gelmedi.)'],
      },
      {
        type: 'notes',
        title: 'No one/Nobody (Hiç kimse)',
        items: [
          'Olumsuz cümlelerde kullanılır. Cümle yapı olarak olumsuzluk ifade etmez fakat anlam olarak cümle olumsuzdur.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: ['Nobody came to the party. (Hiç kimse partiye gelmedi.)'],
      },
      {
        type: 'notes',
        title: 'Something (Bir şey)',
        items: ['Olumlu cümlelerde belirsiz nesne.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: ['I want to eat something. (Bir şey yemek istiyorum.)'],
      },
      {
        type: 'notes',
        title: 'Nothing (Hiçbir şey)',
        items: ['Olumsuz anlam taşır.'],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler',
        items: ['Nothing is impossible. (Hiçbir şey imkansız değil.)'],
      },

      {
        type: 'tips',
        title: 'İpuçları (Tips) ✨',
        items: [
          '1. "I" her zaman büyük harfle yazılır.',
          '2. "He" ve "she" sadece insanlar için kullanılır.',
          '3. "They" hem çoğul hem tek kişi için kullanılabilir.',
          '4. "Your" ve "you’re" karıştırmayın! ',
        ],
      },

      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri 📚',
        items: [
          '1. She is my sister. (O benim kız kardeşim.)',
          '2. Is this bag yours? (Bu çanta senin mi?)',
          '3. The cat washed itself. (Kedi kendini yaladı.)',
          '4. These are my keys. (Bunlar benim anahtarlarım.)',
          '5. Who is your teacher? (Kim senin öğretmenin?)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç  ',
        items: [
          'Zamirler, İngilizcede isimlerin yerine geçerek cümleleri kısa ve anlaşılır yapar. Kişi zamirleri, iyelik zamirleri ve diğer türleri öğrenmek, temel cümleler kurmanızı kolaylaştıracaktır. Yukarıdaki örnekleri pratik yaparak zamirleri rahatlıkla kullanabilirsiniz! 😊',
        ],
      },
    ],

    tests: [
      {
        "id": "pronouns-1",
        "title": "Pronouns - Test 1",
        "description": "Zamirler konusuyla ilgili temel ve orta düzey bilgileri test edin.",
        "questions": [
          {
            "id": "1",
            "question": "______ is a doctor. (O bir doktor.)",
            "options": ["He", "Him", "His"],
            "correctAnswer": "He"
          },
          {
            "id": "2",
            "question": "She gave ______ a present. (Bana bir hediye verdi.)",
            "options": ["I", "me", "my"],
            "correctAnswer": "me"
          },
          {
            "id": "3",
            "question": "This is ______ bag. (Bu onun çantası.)",
            "options": ["she", "her", "hers"],
            "correctAnswer": "her"
          },
          {
            "id": "4",
            "question": "______ are students. (Onlar öğrenci.)",
            "options": ["They", "Them", "Their"],
            "correctAnswer": "They"
          },
          {
            "id": "5",
            "question": "Can you help ______? (Bize yardım eder misin?)",
            "options": ["we", "us", "our"],
            "correctAnswer": "us"
          },
          {
            "id": "6",
            "question": "______ favorite color is blue. (Onun favori rengi mavi.)",
            "options": ["He", "His", "Him"],
            "correctAnswer": "His"
          },
          {
            "id": "7",
            "question": "The book belongs to ______. (Kitap bana ait.)",
            "options": ["I", "me", "my"],
            "correctAnswer": "me"
          },
          {
            "id": "8",
            "question": "______ is raining outside. (Dışarıda yağmur yağıyor.)",
            "options": ["It", "He", "They"],
            "correctAnswer": "It"
          },
          {
            "id": "9",
            "question": "______ am learning English. (Ben İngilizce öğreniyorum.)",
            "options": ["I", "Me", "My"],
            "correctAnswer": "I"
          },
          {
            "id": "10",
            "question": "Please give ______ the keys. (Bana anahtarları ver.)",
            "options": ["I", "me", "my"],
            "correctAnswer": "me"
          },
          {
            "id": "11",
            "question": "The car is ______. (Araba onların.)",
            "options": ["their", "theirs", "them"],
            "correctAnswer": "theirs"
          },
          {
            "id": "12",
            "question": "She cut ______ while cooking. (Yemek yaparken kendini kesti.)",
            "options": ["herself", "her", "she"],
            "correctAnswer": "herself"
          },
          {
            "id": "13",
            "question": "______ cookies are delicious! (Bu kurabiyeler lezzetli!)",
            "options": ["This", "These", "That"],
            "correctAnswer": "These"
          },
          {
            "id": "14",
            "question": "The cat washed ______. (Kedi kendini yaladı.)",
            "options": ["itself", "it", "its"],
            "correctAnswer": "itself"
          },
          {
            "id": "15",
            "question": "Is this pen ______? (Bu kalem senin mi?)",
            "options": ["your", "yours", "you"],
            "correctAnswer": "yours"
          }
        ]
      },
      {
        "id": "pronouns-2",
        "title": "Pronouns - Test 2",
        "description": "Zamirler konusunda orta ve ileri düzey bilgileri test edin.",
        "questions": [
          {
            "id": "1",
            "question": "______ flowers are beautiful. (Şu çiçekler güzel.)",
            "options": ["This", "These", "That"],
            "correctAnswer": "These"
          },
          {
            "id": "2",
            "question": "We organized the party ______. (Partiyi kendimiz organize ettik.)",
            "options": ["ourself", "ourselves", "us"],
            "correctAnswer": "ourselves"
          },
          {
            "id": "3",
            "question": "\"Whose phone is this?\" \"It’s ______.\"",
            "options": ["mine", "my", "me"],
            "correctAnswer": "mine"
          },
          {
            "id": "4",
            "question": "______ is my sister’s birthday today.",
            "options": ["This", "These", "That"],
            "correctAnswer": "This"
          },
          {
            "id": "5",
            "question": "They blamed ______ for the mistake. (Hata için kendilerini suçladılar.)",
            "options": ["themself", "themselves", "their"],
            "correctAnswer": "themselves"
          },
          {
            "id": "6",
            "question": "Neither of ______ knew the answer. (Hiçbiri cevabı bilmiyordu.)",
            "options": ["they", "them", "their"],
            "correctAnswer": "them"
          },
          {
            "id": "7",
            "question": "\"Who’s there?\" \"It’s ______.\"",
            "options": ["I", "me", "my"],
            "correctAnswer": "me"
          },
          {
            "id": "8",
            "question": "One should always respect ______. (Kişi her zaman kendine saygı duymalı.)",
            "options": ["himself", "oneself", "themselves"],
            "correctAnswer": "oneself"
          },
          {
            "id": "9",
            "question": "The decision is between you and ______. (Karar sen ve benim aramda.)",
            "options": ["I", "me", "myself"],
            "correctAnswer": "me"
          },
          {
            "id": "10",
            "question": "Those shoes are ______, not yours.",
            "options": ["my", "mine", "me"],
            "correctAnswer": "mine"
          },
          {
            "id": "11",
            "question": "\"I can’t find ______ keys.\" \"Are these ______?\"",
            "options": ["my / your", "mine / yours", "my / yours"],
            "correctAnswer": "my / yours"
          },
          {
            "id": "12",
            "question": "The teacher asked ______ to submit the essays. (Öğretmen onlara ve bana ödevleri teslim etmemizi söyledi.)",
            "options": ["they and I", "them and me", "them and I"],
            "correctAnswer": "them and me"
          },
          {
            "id": "13",
            "question": "\"______ is responsible here?\" \"It’s ______ duty.\"",
            "options": ["Whose / our", "Who’s / ours", "Whose / ours"],
            "correctAnswer": "Whose / our"
          },
          {
            "id": "14",
            "question": "She is taller than ______. (Benden daha uzun.)",
            "options": ["I", "me", "myself"],
            "correctAnswer": "me"
          },
          {
            "id": "15",
            "question": "\"The team celebrated ______ victory.\"",
            "options": ["its", "their", "them"],
            "correctAnswer": "its"
          }
        ]
      }
    ], // tests array kapatıldı
  },
  {
    id: 'verb',
    title: 'Verbs(Fiiler) Nedir?',
    description:
      'İngilizce fiillerin kullanımı ve çeşitleri hakkında detaylı bilgi edinin.',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede fiiller, bir eylemi veya durumu anlatan kelimelerdir. Fiiller, cümlelerin temel yapı taşlarıdır ve doğru kullanımı dil öğreniminde çok önemlidir.',
        ],
      },
      {
        type: 'notes',
        title: 'Fiil (Verb) Nedir?',
        items: ['Fiil, bir eylemi veya durumu anlatan kelimedir.'],
      },
      {
        type: 'examples',
        title: 'Örnekler',
        items: [
          'I eat. → Ben yerim. (eat = yemek)',
          'She runs. → O koşar. (run = koşmak)',
          'They sleep. → Onlar uyur. (sleep = uyumak)',
          'Türkçede fiillerin mastar hali “-mek / -mak” ekleri ile biter. İngilizce’de ise fiillerin temel hali yalındır:',
          'gitmek → go',
          'yazmak → write',
          'okumak → read',
        ],
      },
      {
        type: 'examples',
        title: '2. Fiil Çeşitleri',
        items: [
          'A) Düzenli (Regular) ve Düzensiz (Irregular) Fiiller',
          'B) Yardımcı Fiiller (Auxiliary Verbs)',
          'C) Modal Fiiller (Modal Verbs)',
        ],
      },
      {
        type: 'notes',
        title: 'A) Düzenli (Regular) ve Düzensiz (Irregular) Fiiller',
        items: [
          'İngilizce fiiller iki gruba ayrılır: Düzenli fiiller (regular verbs) ve düzensiz fiiller (irregular verbs).',
        ],
      },
      {
        type: 'examples',
        title: '🔹 Düzenli Fiiller (Regular Verbs)',
        items: [
          'Bu fiillerin geçmiş zaman halleri "-ed" takısı alarak oluşturulur.',
          'walk (yürümek) → walked (yürüdü)',
          'play (oynamak) → played (oynadı)',
          'want (istemek) → wanted (istedi)',
        ],
      },
      {
        type: 'examples',
        title: 'Düzensiz Fiiller (Irregular Verbs)',
        items: [
          'Bu fiillerin geçmiş zaman halleri farklıdır, "-ed" ekini almazlar.',
          'go (gitmek) → went (gitti)',
          'see (görmek) → saw (gördü)',
          'eat (yemek) → ate (yedi)',
        ],
      },
      {
        type: 'notes',
        title: 'B) Yardımcı Fiiller (Auxiliary Verbs)',
        items: [
          'Bazı fiiller tek başına bir anlam taşımaz, cümlenin zamanını ve anlamını değiştirmek için kullanılır. Bunlara yardımcı fiiller denir.',
          'be (am / is / are) → olmak',
          'do (do / does) → yapmak',
          'have (have / has) → sahip olmak',
        ],
      },
      {
        type: 'examples',
        title: 'Örnekler',
        items: [
          'I am happy. (Ben mutluyum.) → “am” burada yardımcı fiildir.',
          'Do you like tea? (Çay sever misin?) → “Do” burada soru yapmak için kullanılmıştır.',
        ],
      },
      {
        type: 'notes',
        title: 'C) Modal Fiiller (Modal Verbs)',
        items: [
          'Bu fiiller bir yetenek, zorunluluk, olasılık veya izin belirtir. En yaygın olanları:',
          'can (yapabilmek)',
          'must (zorunda olmak)',
          'should (yapmalı)',
          'may (olabilir)',
        ],
      },
      {
        type: 'examples',
        title: 'Örnekler',
        items: [
          'I can swim. (Ben yüzebilirim.)',
          'You must study. (Sen çalışmalısın.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Fiillerin Cümlede Kullanımı',
        items: [
          'İngilizce cümlede genellikle şu sıra takip edilir:',
          'Özne + Fiil + Nesne',
          '🔹 Olumlu Cümle: She reads a book. (O bir kitap okur.)',
          'Olumsuz Cümle: She does not read a book. (O bir kitap okumaz.)',
          'Soru Cümlesi: Does she read a book? (O bir kitap okur mu?)',
        ],
      },
      {
        type: 'examples',
        title: 'En Sık Kullanılan İngilizce Fiiller ve Türkçe Karşılıkları',
        items: [
          'be (olmak)',
          'have (sahip olmak)',
          'do (yapmak)',
          'go (gitmek)',
          'come (gelmek)',
          'see (görmek)',
          'want (istemek)',
          'get (almak)',
          'make (yapmak)',
          'know (bilmek)',
          'think (düşünmek)',
          'take (almak)',
          'use (kullanmak)',
          'find (bulmak)',
          'tell (söylemek)',
          'ask (sormak)',
          'work (çalışmak)',
          'seem (görünmek)',
          'feel (hissetmek)',
          'leave (ayrılmak)',
          'call (aramak)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'İngilizce fiillerin temel yapısını öğrendikten sonra zamanlara ve cümle yapılarına dikkat ederek pratik yapmalısın. Özellikle düzensiz fiilleri ezberlemek ve düzenli fiillerin "-ed" takısıyla çekimlendiğini bilmek başlangıç için çok önemlidir. Fiilleri kullanmayı öğrenmek, İngilizce cümle kurma yeteneğini geliştirmek için temel bir adımdır. Her gün birkaç yeni fiil öğrenerek pratik yapabilirsin! 🚀',
        ],
      },
    ],
    tests: [
      {
        id: 'verb-1',
        title: 'Verb - Test 1',
        description: "İngilizce'de en çok kullanılan fiilleri test edin.",
        questions: [
          {
            id: '1',
            question:
              "Aşağıdakilerden hangisi 'go' fiilinin Türkçe karşılığıdır?",
            options: ['gitmek', 'gelmek', 'olmak', 'sevmek'],
            correctAnswer: 'gitmek',
          },
          {
            id: '2',
            question:
              "Aşağıdakilerden hangisi 'come' fiilinin Türkçe karşılığıdır?",
            options: ['gitmek', 'gelmek', 'düşmek', 'koşmak'],
            correctAnswer: 'gelmek',
          },
          {
            id: '3',
            question:
              "Aşağıdakilerden hangisi 'see' fiilinin Türkçe karşılığıdır?",
            options: ['görmek', 'duymak', 'bakmak', 'hissetmek'],
            correctAnswer: 'görmek',
          },
          {
            id: '4',
            question:
              "Aşağıdakilerden hangisi 'hear' fiilinin Türkçe karşılığıdır?",
            options: ['dinlemek', 'konuşmak', 'duymak', 'okumak'],
            correctAnswer: 'duymak',
          },
          {
            id: '5',
            question:
              "Aşağıdakilerden hangisi 'eat' fiilinin Türkçe karşılığıdır?",
            options: ['yemek', 'içmek', 'uyumak', 'koşmak'],
            correctAnswer: 'yemek',
          },
          {
            id: '6',
            question:
              "Aşağıdakilerden hangisi 'drink' fiilinin Türkçe karşılığıdır?",
            options: ['koşmak', 'yürümek', 'içmek', 'konuşmak'],
            correctAnswer: 'içmek',
          },
          {
            id: '7',
            question:
              "Aşağıdakilerden hangisi 'run' fiilinin Türkçe karşılığıdır?",
            options: ['gülmek', 'koşmak', 'oturmak', 'bakmak'],
            correctAnswer: 'koşmak',
          },
          {
            id: '8',
            question:
              "Aşağıdakilerden hangisi 'sleep' fiilinin Türkçe karşılığıdır?",
            options: ['uyanmak', 'yemek', 'uyumak', 'gülmek'],
            correctAnswer: 'uyumak',
          },
          {
            id: '9',
            question:
              "Aşağıdakilerden hangisi 'read' fiilinin Türkçe karşılığıdır?",
            options: ['yazmak', 'okumak', 'çizmek', 'dinlemek'],
            correctAnswer: 'okumak',
          },
          {
            id: '10',
            question:
              "Aşağıdakilerden hangisi 'write' fiilinin Türkçe karşılığıdır?",
            options: ['yazmak', 'çizmek', 'silmek', 'karalamak'],
            correctAnswer: 'yazmak',
          },
        ],
      },
      {
        id: 'verb-2',
        title: 'Verbs - Test 2',
        description: "İngilizce'de en çok kullanılan fiilleri test edin.",
        questions: [
          {
            id: '1',
            question:
              "Aşağıdakilerden hangisi 'gitmek' fiilinin İngilizce karşılığıdır?",
            options: ['go', 'come', 'leave', 'stay'],
            correctAnswer: 'go',
          },
          {
            id: '2',
            question:
              "Aşağıdakilerden hangisi 'gelmek' fiilinin İngilizce karşılığıdır?",
            options: ['arrive', 'come', 'reach', 'enter'],
            correctAnswer: 'come',
          },
          {
            id: '3',
            question:
              "Aşağıdakilerden hangisi 'görmek' fiilinin İngilizce karşılığıdır?",
            options: ['see', 'look', 'watch', 'glance'],
            correctAnswer: 'see',
          },
          {
            id: '4',
            question:
              "Aşağıdakilerden hangisi 'duymak' fiilinin İngilizce karşılığıdır?",
            options: ['hear', 'listen', 'notice', 'perceive'],
            correctAnswer: 'hear',
          },
          {
            id: '5',
            question:
              "Aşağıdakilerden hangisi 'yemek' fiilinin İngilizce karşılığıdır?",
            options: ['eat', 'bite', 'swallow', 'consume'],
            correctAnswer: 'eat',
          },
          {
            id: '6',
            question:
              "Aşağıdakilerden hangisi 'içmek' fiilinin İngilizce karşılığıdır?",
            options: ['drink', 'sip', 'gulp', 'swallow'],
            correctAnswer: 'drink',
          },
          {
            id: '7',
            question:
              "Aşağıdakilerden hangisi 'koşmak' fiilinin İngilizce karşılığıdır?",
            options: ['run', 'jog', 'sprint', 'dash'],
            correctAnswer: 'run',
          },
          {
            id: '8',
            question:
              "Aşağıdakilerden hangisi 'uyumak' fiilinin İngilizce karşılığıdır?",
            options: ['sleep', 'nap', 'rest', 'doze'],
            correctAnswer: 'sleep',
          },
          {
            id: '9',
            question:
              "Aşağıdakilerden hangisi 'okumak' fiilinin İngilizce karşılığıdır?",
            options: ['read', 'study', 'review', 'scan'],
            correctAnswer: 'read',
          },
          {
            id: '10',
            question:
              "Aşağıdakilerden hangisi 'yazmak' fiilinin İngilizce karşılığıdır?",
            options: ['write', 'scribble', 'note', 'compose'],
            correctAnswer: 'write',
          },
        ],
      },
    ], // tests array kapatıldı
  },
  {
    id: 'adverbs',
    title: 'Adverbs (Zarflar / Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede adverbs (zarflar), fiilleri, sıfatları veya diğer zarfları niteleyen kelimelerdir.',
          'Zarflar genellikle nasıl, ne zaman, nerede ve ne kadar gibi sorulara cevap verir.',
          'Genellikle fiilden sonra veya cümlenin sonunda yer alır, ancak bazı zarflar cümlenin başında veya ortasında olabilir.',
        ],
      },
      {
        type: 'examples',
        title: 'Adverb Türleri',
        items: [
          'Manner Adverbs (Durum Zarfları) - quickly, slowly, well',
          'Time Adverbs (Zaman Zarfları) - now, yesterday, soon',
          'Place Adverbs (Yer Zarfları) - here, there, everywhere',
          'Degree Adverbs (Derece Zarfları) - very, too, quite',
        ],
      },
      {
        type: 'notes',
        title: '1. Manner Adverbs Kullanımı',
        items: [
          'Fiilin nasıl yapıldığını açıklar. Genellikle fiilden sonra gelir.',
          'Örnek: She speaks slowly. (O yavaşça konuşur.)',
          'Örnek: He writes beautifully. (O güzelce yazar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Time Adverbs Kullanımı',
        items: [
          'Eylemin ne zaman gerçekleştiğini belirtir.',
          'Örnek: I will call you tomorrow. (Seni yarın arayacağım.)',
          'Örnek: They met yesterday. (Onlar dün buluştular.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Place Adverbs Kullanımı',
        items: [
          'Eylemin nerede gerçekleştiğini belirtir.',
          'Örnek: She is waiting outside. (O dışarıda bekliyor.)',
          'Örnek: We looked everywhere for the keys. (Anahtarları her yerde aradık.)',
        ],
      },
      {
        type: 'notes',
        title: '4. Degree Adverbs Kullanımı',
        items: [
          'Eylemin veya sıfatın derecesini açıklar.',
          'Örnek: She is very tired. (O çok yorgun.)',
          'Örnek: He is too shy to talk. (O konuşamayacak kadar utangaç.)',
        ],
      },
    ],
    tests: [],
  },

  {
    id: 'adjectives',
    title: 'Adjectives (Sıfatlar / Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede adjectives (sıfatlar), isimleri veya zamirleri niteleyen kelimelerdir.',
          'Sıfatlar, bir şeyin nasıl olduğunu, kaç tane olduğunu veya hangi tür olduğunu açıklar.',
          'Genellikle isimlerden önce veya fiilden sonra kullanılabilirler.',
        ],
      },
      {
        type: 'examples',
        title: 'Adjective Türleri',
        items: [
          'Descriptive Adjectives (Tanımlayıcı Sıfatlar) - big, small, beautiful',
          'Quantitative Adjectives (Miktar Sıfatları) - some, many, few',
          'Demonstrative Adjectives (İşaret Sıfatları) - this, that, these, those',
          'Possessive Adjectives (İyelik Sıfatları) - my, your, his, her',
        ],
      },
      {
        type: 'notes',
        title: '1. Descriptive Adjectives Kullanımı',
        items: [
          'İsimleri tanımlamak için kullanılır.',
          'Örnek: She has a beautiful dress. (Onun güzel bir elbisesi var.)',
          'Örnek: The sky is blue. (Gökyüzü mavidir.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Quantitative Adjectives Kullanımı',
        items: [
          'Bir şeyin miktarını belirtir.',
          'Örnek: I have many books. (Benim birçok kitabım var.)',
          'Örnek: She drank some water. (O biraz su içti.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Demonstrative Adjectives Kullanımı',
        items: [
          'İsimleri işaret etmek için kullanılır.',
          'Örnek: This book is interesting. (Bu kitap ilginçtir.)',
          'Örnek: Those cars are expensive. (Şu arabalar pahalıdır.)',
        ],
      },
      {
        type: 'notes',
        title: '4. Possessive Adjectives Kullanımı',
        items: [
          'Bir şeyin kime ait olduğunu belirtir.',
          'Örnek: This is my bag. (Bu benim çantam.)',
          'Örnek: That is her house. (Şu onun evi.)',
        ],
      },
    ],
    tests: [],
  },
  {
    id: 'present-simple',
    title: 'Present Simple (Geniş Zaman / Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Present Simple (Geniş Zaman), genel gerçekleri, alışkanlıkları ve rutinleri anlatmak için kullanılır.',
          "Fiilin yalın hali kullanılır, ancak üçüncü tekil şahıslarda (he, she, it) fiile '-s' veya '-es' eklenir.",
          'Cümlede genellikle zaman zarfları kullanılır: always, usually, often, sometimes, never.',
        ],
      },
      {
        type: 'examples',
        title: 'Present Simple Kullanım Alanları',
        items: [
          'Genel Gerçekler - The sun rises in the east. (Güneş doğudan doğar.)',
          'Alışkanlıklar - She goes to the gym every day. (O her gün spor salonuna gider.)',
          "Rutinler - I wake up at 7 AM. (Ben sabah 7'de uyanırım.)",
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Özne + fiil (3. tekil şahıslarda -s veya -es eklenir).',
          'Örnek: She works in a bank. (O bir bankada çalışır.)',
          'Örnek: They play football on Sundays. (Onlar pazar günleri futbol oynar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Özne + do/does not + fiil (yalın halde).',
          'Örnek: He does not like coffee. (O kahve sevmez.)',
          'Örnek: We do not watch TV at night. (Biz gece televizyon izlemeyiz.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Do/Does + özne + fiil (yalın halde) + ?',
          'Örnek: Do you speak English? (Sen İngilizce konuşur musun?)',
          'Örnek: Does she like music? (O müzik sever mi?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Present Simple ile Kullanılan Sıklık Zarfları',
        items: [
          'Always (her zaman) - She always wakes up early. (O her zaman erken uyanır.)',
          "Usually (genellikle) - We usually eat lunch at 12. (Biz genellikle 12'de öğle yemeği yeriz.)",
          'Often (sıklıkla) - They often visit their grandparents. (Onlar sık sık büyükanne ve büyükbabalarını ziyaret ederler.)',
          'Sometimes (bazen) - He sometimes goes to the cinema. (O bazen sinemaya gider.)',
          'Occasionally (ara sıra) - She occasionally drinks coffee. (O ara sıra kahve içer.)',
          'Seldom (nadiren) - We seldom travel abroad. (Biz nadiren yurtdışına seyahat ederiz.)',
          'Rarely (çok nadir) - He rarely eats junk food. (O çok nadiren abur cubur yer.)',
          'Never (asla) - They never smoke. (Onlar asla sigara içmezler.)',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Present Continuous (Şimdiki Zaman), şu anda devam eden eylemleri, geçici durumları ve gelecekte kesinleşmiş planları anlatmak için kullanılır.',
          'Cümle yapısı: Özne + am/is/are + fiil(-ing)',
          'Cümlede genellikle şu zaman zarfları kullanılır: now, at the moment, currently, right now.',
        ],
      },
      {
        type: 'examples',
        title: 'Present Continuous Kullanım Alanları',
        items: [
          'Şu Anda Devam Eden Eylemler - She is reading a book. (O şu anda bir kitap okuyor.)',
          'Geçici Durumlar - I am staying at my friend’s house this week. (Bu hafta arkadaşımın evinde kalıyorum.)',
          'Gelecekte Kesinleşmiş Planlar - We are meeting him tomorrow. (Biz yarın onunla buluşuyoruz.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Özne + am/is/are + fiil(-ing).',
          'Örnek: She is studying English. (O İngilizce çalışıyor.)',
          'Örnek: They are watching a movie. (Onlar bir film izliyorlar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Özne + am/is/are not + fiil(-ing).',
          'Örnek: He is not sleeping now. (O şu anda uyumuyor.)',
          'Örnek: We are not playing football. (Biz futbol oynamıyoruz.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Am/Is/Are + özne + fiil(-ing) + ?',
          'Örnek: Is she studying? (O ders çalışıyor mu?)',
          'Örnek: Are they coming to the party? (Onlar partiye geliyor mu?)',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },

  {
    id: 'present-perfect',
    title: 'Present Perfect (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Present Perfect (Yakın Geçmiş Zaman), geçmişte belirli bir zamanda tamamlanmamış olayları veya etkisi hala devam eden olayları anlatmak için kullanılır.',
          'Bu zaman genellikle, olayın ne zaman gerçekleştiğinden çok, sonucunun veya etkisinin hala devam edip etmediğiyle ilgilenir.',
          'Cümle yapısı: Özne + have/has + fiilin 3. hali (past participle)',
          'Bu zaman genellikle şu zaman zarfları ile kullanılır: just (henüz), already (zaten), yet (henüz, olumsuz ve sorularda), ever (hiç), never (asla), for (boyunca), since (beridir).',
        ],
      },
      {
        type: 'examples',
        title: 'Present Perfect Kullanım Alanları',
        items: [
          "Deneyimler: I have visited Paris three times. (Paris'e üç kez gittim.)",
          'Yakın Zamanda Gerçekleşmiş Olaylar: She has just finished her homework. (O ödevini henüz bitirdi.)',
          'Etkisi Devam Eden Olaylar: They have lived here for ten years. (Onlar burada on yıldır yaşıyorlar.)',
          'Bilinmeyen Zamanlı Geçmiş Olaylar: Someone has stolen my bike! (Birisi bisikletimi çalmış!)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has + fiilin 3. hali',
          'Örnek: She has written a book. (O bir kitap yazdı.)',
          'Örnek: We have seen that movie before. (Biz o filmi daha önce gördük.)',
          'Örnek: They have traveled to many countries. (Onlar birçok ülkeye seyahat ettiler.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has not + fiilin 3. hali',
          "Örnek: He has not visited London. (O Londra'yı ziyaret etmedi.)",
          "Örnek: They haven't eaten yet. (Onlar henüz yemeğini yemedi.)",
          'Örnek: I haven’t finished my homework. (Ödevimi bitirmedim.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Have/Has + özne + fiilin 3. hali + ?',
          "Örnek: Have you ever been to Turkey? (Sen hiç Türkiye'ye gittin mi?)",
          'Örnek: Has she finished her project? (O projesini bitirdi mi?)',
          'Örnek: Have they moved to a new house? (Onlar yeni bir eve taşındı mı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Present Perfect ile Kullanılan Zaman Zarfları',
        items: [
          'Just (Henüz): Olayın çok kısa bir süre önce gerçekleştiğini belirtir. Örnek: I have just arrived home. (Henüz eve vardım.)',
          'Already (Zaten): Beklenenden daha erken gerçekleşmiş olaylar için kullanılır. Örnek: She has already finished her meal. (O yemeğini çoktan bitirdi.)',
          "Yet (Henüz): Olumsuz ve soru cümlelerinde kullanılır. Örnek: Has he arrived yet? (O, henüz geldi mi?) / I haven't done my homework yet. (Ödevimi henüz yapmadım.)",
          'Ever (Hiç): Hayatta bir deneyimi sorarken kullanılır. Örnek: Have you ever tried sushi? (Sen hiç suşi denedin mi?)',
          'Never (Asla): Daha önce hiç yapılmamış olayları ifade eder. Örnek: I have never seen such a beautiful place. (Böyle güzel bir yer hiç görmedim.)',
          'For (Boyunca): Belli bir süredir devam eden olaylar için kullanılır. Örnek: I have lived here for five years. (Burada beş yıldır yaşıyorum.)',
          "Since (Beridir): Belli bir zaman noktasından beri devam eden olayları anlatır. Örnek: They have worked here since 2010. (Onlar 2010'dan beri burada çalışıyorlar.)",
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'present-perfect-continuous',
    title: 'Present Perfect Continuous (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Present Perfect Continuous (Yakın Geçmiş Zamanda Devamlılık), geçmişte başlayıp şu ana kadar devam eden veya yeni bitmiş eylemleri anlatmak için kullanılır.',
          'Bu zaman, eylemin sürekliliğini vurgular ve genellikle eylemin ne kadar süredir devam ettiğiyle ilgilenir.',
          'Cümle yapısı: Özne + have/has been + fiil(-ing)',
          'Bu zaman genellikle şu zaman zarfları ile kullanılır: for (boyunca), since (beridir), all day (tüm gün), recently (son zamanlarda), lately (son zamanlarda).',
        ],
      },
      {
        type: 'examples',
        title: 'Present Perfect Continuous Kullanım Alanları',
        items: [
          'Geçmişte Başlayıp Şu Anda Devam Eden Eylemler: I have been studying for two hours. (İki saattir ders çalışıyorum.)',
          'Yeni Bitmiş Ancak Etkisi Devam Eden Eylemler: She has been cooking, so the kitchen is a mess. (O yemek yapıyordu, bu yüzden mutfak dağınık.)',
          'Geçmişte Başlayıp Şu Anda Tamamlanmış Eylemler: They have been working all day. (Onlar tüm gün çalıştılar.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has been + fiil(-ing)',
          'Örnek: I have been reading this book for hours. (Saatlerdir bu kitabı okuyorum.)',
          "Örnek: She has been working here since 2015. (O 2015'ten beri burada çalışıyor.)",
          'Örnek: They have been playing football all afternoon. (Onlar tüm öğleden sonra futbol oynuyorlar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has not been + fiil(-ing)',
          'Örnek: He has not been studying for the exam. (O sınav için çalışmıyor.)',
          "Örnek: We haven't been waiting for long. (Uzun süredir beklemiyoruz.)",
          "Örnek: They haven't been talking to each other lately. (Onlar son zamanlarda birbirleriyle konuşmuyorlar.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Have/Has + özne + been + fiil(-ing) + ?',
          'Örnek: Have you been working out lately? (Son zamanlarda egzersiz yapıyor musun?)',
          'Örnek: Has she been studying all night? (O tüm gece ders çalışıyor mu?)',
          'Örnek: Have they been traveling since last month? (Onlar geçen aydan beri seyahat ediyorlar mı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Present Perfect Continuous ile Kullanılan Zaman Zarfları',
        items: [
          'For (Boyunca): Belli bir süredir devam eden eylemler için kullanılır. Örnek: I have been studying for three hours. (Üç saattir ders çalışıyorum.)',
          "Since (Beridir): Belli bir zaman noktasından beri devam eden eylemler için kullanılır. Örnek: She has been working here since 2010. (O 2010'dan beri burada çalışıyor.)",
          'All day (Tüm gün): Eylemin tüm gün boyunca devam ettiğini belirtir. Örnek: They have been playing games all day. (Onlar tüm gün oyun oynuyorlar.)',
          'Recently (Son zamanlarda): Yakın zamanda devam eden eylemler için kullanılır. Örnek: I have been feeling tired recently. (Son zamanlarda kendimi yorgun hissediyorum.)',
          'Lately (Son zamanlarda): Yakın zamanda devam eden eylemler için kullanılır. Örnek: He has been working hard lately. (O son zamanlarda çok çalışıyor.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Present Perfect Continuous, eylemin sürekliliğini vurgular. Bu yüzden eylemin ne kadar süredir devam ettiği önemlidir.',
          '2. For ve since zaman zarfları, bu zamanla sıkça kullanılır. For belli bir süreyi, since ise belli bir zaman noktasını belirtir.',
          '3. Bu zaman, eylemin etkisinin hala devam ettiğini vurgular. Örneğin, I have been running dediğimizde, hala yorgun olduğumuzu ima edebiliriz.',
          '4. Present Perfect Continuous, genellikle geçici eylemler için kullanılır. Kalıcı durumlar için Present Perfect tercih edilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I have been learning English for two years. (İki yıldır İngilizce öğreniyorum.)',
          '2. She has been working on this project since last month. (O geçen aydan beri bu proje üzerinde çalışıyor.)',
          '3. We have been waiting for the bus for 30 minutes. (Otobüsü 30 dakikadır bekliyoruz.)',
          '4. Have you been exercising regularly? (Düzenli olarak egzersiz yapıyor musun?)',
          "5. They haven't been talking to each other lately. (Onlar son zamanlarda birbirleriyle konuşmuyorlar.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Present Perfect Continuous, geçmişte başlayıp şu ana kadar devam eden veya yeni bitmiş eylemleri anlatmak için kullanılır. Bu zaman, eylemin sürekliliğini vurgular ve genellikle for veya since gibi zaman zarflarıyla birlikte kullanılır. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu zamanı rahatlıkla kullanabilirsiniz! 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'past-simple',
    title: 'Past Simple (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Past Simple (Geçmiş Zaman), geçmişte tamamlanmış eylemleri anlatmak için kullanılır.',
          'Bu zaman, eylemin belirli bir zamanda gerçekleştiğini ve tamamlandığını vurgular.',
          'Cümle yapısı: Özne + fiil (V2) / Did + özne + fiil (V1) (olumsuz ve soru cümlelerinde)',
          "Bu zaman genellikle şu zaman zarfları ile kullanılır: yesterday (dün), last week (geçen hafta), in 1990 (1990'da), two days ago (iki gün önce).",
        ],
      },
      {
        type: 'examples',
        title: 'Past Simple Kullanım Alanları',
        items: [
          'Geçmişte Tamamlanmış Eylemler: I watched a movie yesterday. (Dün film izledim.)',
          "Belirli Bir Zaman Diliminde Gerçekleşmiş Eylemler: She visited Paris last summer. (O geçen yaz Paris'i ziyaret etti.)",
          "Olumsuz Eylemler: They didn't go to the party last night. (Onlar geçen gece partiye gitmediler.)",
          'Soru Cümlesi: Did you eat breakfast this morning? (Bu sabah kahvaltı yaptın mı?)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + fiil (V2)',
          'Örnek: I played football yesterday. (Dün futbol oynadım.)',
          'Örnek: She watched TV last night. (O geçen gece TV izledi.)',
          'Örnek: They visited their grandparents last weekend. (Onlar geçen hafta sonu büyükanne ve büyükbabalarını ziyaret ettiler.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + did not (didn't) + fiil (V1)",
          "Örnek: I didn't play football yesterday. (Dün futbol oynamadım.)",
          "Örnek: She didn't go to the party last night. (O geçen gece partiye gitmedi.)",
          "Örnek: They didn't visit their friends last weekend. (Onlar geçen hafta sonu arkadaşlarını ziyaret etmediler.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Did + özne + fiil (V1) + ?',
          'Örnek: Did you study for the exam yesterday? (Dün sınav için çalıştın mı?)',
          'Örnek: Did she call you last night? (O seni geçen gece aradı mı?)',
          'Örnek: Did they visit their friends last weekend? (Onlar geçen hafta sonu arkadaşlarını ziyaret ettiler mi?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Past Simple ile Kullanılan Zaman Zarfları',
        items: [
          'Yesterday (Dün): Geçmişteki bir günü ifade eder. Örnek: He studied English yesterday. (O dün İngilizce çalıştı.)',
          'Last (Geçen): Geçmişteki bir zaman dilimini ifade eder. Örnek: They went to the cinema last weekend. (Onlar geçen hafta sonu sinemaya gittiler.)',
          'Two days ago (İki gün önce): Geçmişteki bir tarihi ifade eder. Örnek: I met him two days ago. (Onunla iki gün önce buluştum.)',
          "In (Zaman dilimi): Belirli bir zaman dilimini ifade eder. Örnek: She was born in 1995. (O 1995'te doğdu.)",
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Past Simple, tamamlanmış eylemleri anlatır. Bu yüzden cümlede belirli bir zaman ifadesi olmalıdır.',
          '2. Olumlu cümlelerde fiilin ikinci hali (V2) kullanılır. Olumsuz ve soru cümlelerinde did yardımcı fiili kullanılır.',
          '3. Did kullanıldığında, fiil daima birinci hali (V1) ile gelir.',
          '4. Past Simple, geçmişteki alışkanlıkları anlatmak için de kullanılabilir. Örneğin: When I was a child, I played outside every day. (Çocukken her gün dışarıda oynardım.)',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I watched a movie yesterday. (Dün film izledim.)',
          '2. She visited her grandmother last weekend. (O geçen hafta sonu büyükannesini ziyaret etti.)',
          "3. They didn't go to the beach last summer. (Onlar geçen yaz plaja gitmediler.)",
          '4. Did you study for the test yesterday? (Dün sınav için çalıştın mı?)',
          '5. We played football last Saturday. (Geçen cumartesi futbol oynadık.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Past Simple, geçmişte tamamlanmış eylemleri anlatmak için kullanılır. Bu zamanı kullanırken cümlenin zamanını belirten bir ifade olması önemlidir. Yukarıdaki örnekleri ve ipuçlarını inceleyerek bu zamanı rahatlıkla kullanabilirsiniz! 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Past Continuous (Geçmiş Zaman Devamlı), geçmişte belirli bir zaman diliminde devam eden eylemleri anlatmak için kullanılır.',
          'Bu zaman, eylemin o dönemde devam ettiğini vurgular ve genellikle bir olayın ortasında ya da o sırada başka bir olayın gerçekleştiğini belirtir.',
          'Cümle yapısı: Özne + was/were + fiil(-ing)',
          "Bu zaman, genellikle şu zaman zarflarıyla kullanılır: while (iken), when (ne zaman), at that time (o sırada), all day (tüm gün), yesterday at 5 (dün saat 5'te).",
        ],
      },
      {
        type: 'examples',
        title: 'Past Continuous Kullanım Alanları',
        items: [
          "Geçmişte Devam Eden Eylemler: I was studying at 8 PM yesterday. (Dün saat 8'de ders çalışıyordum.)",
          'Bir Olayın Ortasında Başka Bir Olayın Gerçekleşmesi: She was watching TV when I called her. (Ben onu aradığımda o TV izliyordu.)',
          'Kısa Süreli Olaylar: They were playing football all day. (Onlar tüm gün futbol oynuyorlardı.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + was/were + fiil(-ing)',
          'Örnek: I was studying when you called me. (Beni aradığında ders çalışıyordum.)',
          "Örnek: She was reading a book at 10 PM. (O saat 10'da kitap okuyordu.)",
          'Örnek: We were watching a movie all night. (Biz tüm gece film izliyorduk.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + was/were not (wasn't/weren't) + fiil(-ing)",
          "Örnek: I wasn't studying when you called me. (Beni aradığında ders çalışmıyordum.)",
          "Örnek: She wasn't reading a book at 10 PM. (O saat 10'da kitap okumuyordu.)",
          "Örnek: They weren't playing football yesterday. (Onlar dün futbol oynamıyorlardı.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Was/Were + özne + fiil(-ing) + ?',
          'Örnek: Were you studying when I called you? (Ben seni aradığımda ders çalışıyor muydun?)',
          "Örnek: Was she reading a book at 10 PM? (O saat 10'da kitap okuyor muydu?)",
          'Örnek: Were they playing football yesterday? (Onlar dün futbol oynuyorlar mıydı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Past Continuous ile Kullanılan Zaman Zarfları',
        items: [
          'When (Ne zaman): Geçmişteki bir olayın tam zamanını ifade eder. Örnek: I was sleeping when you called. (Sen aradığında uyuyordum.)',
          'While (İken): Bir olayın başka bir olayla aynı anda gerçekleştiğini ifade eder. Örnek: They were eating dinner while I was watching TV. (Onlar akşam yemeği yerken ben TV izliyordum.)',
          'At that time (O sırada): Geçmişteki belirli bir zaman dilimini ifade eder. Örnek: At that time, we were working on the project. (O sırada projeyle çalışıyorduk.)',
          'All day (Tüm gün): Bir eylemin tüm gün boyunca devam ettiğini ifade eder. Örnek: She was studying all day. (O tüm gün ders çalışıyordu.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Past Continuous, genellikle geçmişteki sürekliliği vurgulamak için kullanılır.',
          '2. When ve while, geçmişte iki olayın aynı anda gerçekleşmesini ifade etmek için sıkça kullanılır.',
          '3. Bu zaman, bir olayın ortasında başka bir olayın gerçekleştiğini anlatmak için idealdir. Örneğin, I was cooking when the phone rang. (Telefon çaldığında yemek yapıyordum.)',
          '4. Past Continuous, geçmişteki geçici veya kısa süreli eylemleri anlatmak için de kullanılabilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I was studying when you called. (Sen aradığında ders çalışıyordum.)',
          "2. She was watching TV at 8 PM. (O saat 8'de TV izliyordu.)",
          "3. We weren't listening to music yesterday. (Biz dün müzik dinlemiyorduk.)",
          '4. Were you reading the book when I arrived? (Ben geldiğimde kitabı okuyor muyordun?)',
          '5. They were playing football all afternoon. (Onlar tüm öğleden sonra futbol oynuyorlardı.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Past Continuous, geçmişte bir olayın devam ettiğini veya başka bir olayın ortasında gerçekleştiğini anlatmak için kullanılır. Bu zamanı kullanırken, bir olayın süregeldiğini veya diğer bir olayla aynı anda olduğunu belirten zaman zarflarına dikkat edin. Yukarıdaki örnekleri ve ipuçlarını inceleyerek bu zamanı rahatlıkla kullanabilirsiniz! 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Past Perfect (Geçmiş Zamanın Mükemmeli), geçmişte belirli bir zaman diliminden önce tamamlanmış bir eylemi anlatmak için kullanılır.',
          'Bu zaman, bir olayın geçmişteki başka bir olaydan önce gerçekleştiğini ifade eder. Yani, bir şeyin tamamlandığını ve başka bir şeyin meydana geldiğini vurgular.',
          'Cümle yapısı: Özne + had + fiil(II.)',
          'Bu zaman, genellikle şu zaman zarflarıyla kullanılır: before (önce), after (sonra), by the time (…olduğunda), already (zaten), yet (henüz), just (hemen).',
        ],
      },
      {
        type: 'examples',
        title: 'Past Perfect Kullanım Alanları',
        items: [
          'Geçmişteki Bir Olaydan Önce Tamamlanan Eylemler: I had finished my homework before I went to bed. (Yatmadan önce ödevimi bitirmiştim.)',
          'Bir Olayın Diğerinden Önce Gerçekleşmesi: She had already left when I arrived. (Ben geldiğimde o zaten gitmişti.)',
          "Geçmişte Bir Süreç ve O Süreçten Önceki Bir Olay: They had lived in London before they moved to Paris. (Paris'e taşınmadan önce Londra'da yaşamışlardı.)",
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + had + fiil(II.)',
          "Örnek: I had studied English before I moved to the UK. (İngiltere'ye taşınmadan önce İngilizce çalışmıştım.)",
          "Örnek: She had finished her work before 6 PM. (O, saat 6'dan önce işini bitirmişti.)",
          'Örnek: They had eaten lunch when we arrived. (Biz geldiğimizde onlar öğle yemeğini yemişlerdi.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + had not (hadn't) + fiil(II.)",
          "Örnek: I hadn't finished my homework when my friend called. (Arkadaşım aradığında ödevimi bitirmemiştim.)",
          "Örnek: She hadn't left yet when I called her. (Ben onu aradığımda o henüz gitmemişti.)",
          "Örnek: They hadn't visited the museum before. (Onlar daha önce müzeyi ziyaret etmemişlerdi.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Had + özne + fiil(II.) + ?',
          'Örnek: Had you finished your homework before you went out? (Dışarı çıkmadan önce ödevini bitirmiş miydin?)',
          'Örnek: Had she eaten dinner when you arrived? (Sen geldiğinde o akşam yemeğini yemiş miydi?)',
          'Örnek: Had they visited the museum before? (Onlar daha önce müzeyi ziyaret etmişler miydi?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Past Perfect ile Kullanılan Zaman Zarfları',
        items: [
          'Before (Önce): Geçmişte bir olaydan önce gerçekleşen eylemler için kullanılır. Örnek: I had studied before the test. (Sınavdan önce çalışmıştım.)',
          'After (Sonra): Geçmişte bir olaydan sonra gerçekleşen eylemler için kullanılır. Örnek: She had left after I arrived. (Ben geldikten sonra gitmişti.)',
          'By the time (…olduğunda): Bir olayın başka bir olaydan önce tamamlanmış olduğunu belirtir. Örnek: By the time I got there, they had already left. (Ben oraya vardığımda onlar zaten gitmişti.)',
          'Already (Zaten): Geçmişte, belirli bir zaman noktasından önce tamamlanmış bir eylemi ifade eder. Örnek: She had already finished her lunch. (O, öğle yemeğini zaten bitirmişti.)',
          "Yet (Henüz): Olumsuz cümlelerde kullanılır ve tamamlanmamış bir eylemi ifade eder. Örnek: I hadn't finished my work yet. (İşimi henüz bitirmemiştim.)",
          'Just (Hemen): Bir eylemin hemen gerçekleştiğini belirtir. Örnek: They had just left when I called. (Ben aradığımda onlar tam gitmişlerdi.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Past Perfect, geçmişte bir olayın başka bir olaydan önce tamamlandığını anlatmak için kullanılır.',
          '2. Had yardımcı fiili, her zaman geçmişteki bir zaman diliminde kullanılır ve fiil ikinci haliyle gelir.',
          '3. Before ve after, zaman zarfları ile birlikte Past Perfect sıklıkla kullanılır.',
          '4. Bu zaman, geçmişteki olayları sıralamak ve birbirinden önce gerçekleşen eylemleri belirtmek için idealdir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I had completed the task before the meeting started. (Toplantı başlamadan önce görevi tamamlamıştım.)',
          '2. She had never visited the city before. (O, daha önce şehri hiç ziyaret etmemişti.)',
          '3. They had already left when I arrived. (Ben geldiğimde onlar zaten gitmişlerdi.)',
          '4. Had you done your homework by the time I called you? (Seni aradığımda ödevini yapmış mıydın?)',
          "5. He hadn't finished his work yet. (O, işini henüz bitirmemişti.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Past Perfect, geçmişteki bir olaydan önce tamamlanan eylemleri anlatmak için kullanılır. Bu zaman, olaylar arasında net bir sıralama yapmamıza olanak tanır. Before, after, already gibi zaman zarflarına dikkat ederek bu zamanı doğru şekilde kullanabilirsiniz! 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'past-perfect-continuous',
    title: 'Past Perfect Continuous (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Past Perfect Continuous (Geçmişte Mükemmel Süreklilik), geçmişte belirli bir zaman diliminden önce bir süre devam eden eylemleri anlatmak için kullanılır.',
          'Bu zaman, geçmişte bir noktadan önce bir eylemin devam etmekte olduğunu ve o eylemin ne kadar süreyle yapıldığını vurgular.',
          'Cümle yapısı: Özne + had + been + fiil-ing',
          'Bu zaman, genellikle şu zaman zarflarıyla kullanılır: for (süresince), since (…den beri), all day (bütün gün), how long (ne kadar süre).',
        ],
      },
      {
        type: 'examples',
        title: 'Past Perfect Continuous Kullanım Alanları',
        items: [
          'Geçmişte bir eylemin bir süre devam ettiğini anlatmak: I had been studying English for two hours when you called. (Sen aradığında iki saattir İngilizce çalışıyordum.)',
          'Geçmişteki bir noktadan önce bir eylemin devam ettiğini anlatmak: She had been working at the company for five years before she moved to another city. (O, başka bir şehre taşınmadan önce beş yıl boyunca şirkette çalışıyordu.)',
          'Geçmişte, başka bir olaydan önce bir eylemin bitmediğini vurgulamak: They had been waiting for the bus for 30 minutes when it finally arrived. (Nihayet otobüs geldiğinde 30 dakikadır otobüsü bekliyorlardı.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + had + been + fiil-ing',
          'Örnek: I had been reading for an hour when my friend arrived. (Arkadaşım geldiğinde bir saattir okuyordum.)',
          'Örnek: She had been working at the company for five years. (O, şirkette beş yıl boyunca çalışıyordu.)',
          'Örnek: They had been waiting for the bus for half an hour. (Yarım saattir otobüsü bekliyorlardı.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + had not (hadn't) + been + fiil-ing",
          "Örnek: I hadn't been studying when you called me. (Beni aradığında çalışmıyordum.)",
          "Örnek: She hadn't been working for a long time when she decided to change her career. (Kariyerini değiştirmeye karar verdiğinde uzun zamandır çalışmıyordu.)",
          "Örnek: They hadn't been waiting for long when the bus finally came. (Otobüs nihayet geldiğinde uzun süredir beklemiyorlardı.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Had + özne + been + fiil-ing + ?',
          'Örnek: Had you been studying when I called? (Ben seni aradığımda çalışıyor muydun?)',
          'Örnek: Had she been working at the company for a long time? (O, şirkette uzun zamandır çalışıyor muydu?)',
          'Örnek: Had they been waiting for the bus when it arrived? (Otobüs geldiğinde onlar otobüsü bekliyorlar mıydı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Past Perfect Continuous ile Kullanılan Zaman Zarfları',
        items: [
          'For (süresince): Eylemin ne kadar sürdüğünü belirtir. Örnek: I had been studying for two hours when you called. (Sen aradığında iki saattir çalışıyordum.)',
          "Since (…den beri): Bir eylemin başlangıç noktasını belirtir. Örnek: She had been working at the company since 2015. (O, 2015'ten beri şirkette çalışıyordu.)",
          'All day (bütün gün): Bütün gün süren bir eylemi ifade eder. Örnek: He had been working all day. (Bütün gün çalışıyordu.)',
          'How long (ne kadar süre): Eylemin süresini sorgulamak için kullanılır. Örnek: How long had you been waiting when the bus came? (Otobüs geldiğinde ne kadar süredir bekliyordun?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Past Perfect Continuous, geçmişteki bir eylemin başka bir eylemden önce bir süre devam ettiğini anlatmak için kullanılır.',
          '2. Had been yapısı, sürekli eylemleri anlatmak için Past Perfect Continuous cümlesinde gereklidir.',
          '3. For ve since, süre ve başlangıç noktalarını belirtirken yaygın olarak kullanılır.',
          '4. Bu zaman, bir eylemin ne kadar süre devam ettiğini vurgulamak için idealdir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I had been studying for two hours when you called. (Sen aradığında iki saattir çalışıyordum.)',
          '2. She had been working at the company for five years before she moved to another city. (O, başka bir şehre taşınmadan önce beş yıl boyunca şirkette çalışıyordu.)',
          '3. They had been waiting for the bus for 30 minutes when it finally arrived. (Nihayet otobüs geldiğinde 30 dakikadır otobüsü bekliyorlardı.)',
          '4. Had you been studying when I called? (Ben seni aradığımda çalışıyor muydun?)',
          "5. They hadn't been waiting for long when the bus came. (Otobüs geldiğinde onlar uzun süredir beklemiyorlardı.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Past Perfect Continuous, geçmişte bir eylemin ne kadar süreyle devam ettiğini anlatan bir zaman dilimidir. Bu zaman, geçmişteki eylemlerin süresini ve diğer olaylardan önceki devamlılıklarını belirtmek için idealdir. 😄',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'future-simple',
    title: 'Future Simple (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Future Simple (Gelecek Zaman), gelecekte yapılacak eylemleri ifade etmek için kullanılır.',
          'Bir olayın ya da eylemin gelecekte kesinlikle olacağı veya olma olasılığının yüksek olduğunu belirtmek için bu zaman kullanılır.',
          'Cümle yapısı:   Özne + will + fiil (temel hali)  ',
          'Bu zaman, planlanmamış, ani kararlar, tahminler ve gelecek hakkında genel ifadeler için uygundur.',
        ],
      },
      {
        type: 'examples',
        title: 'Future Simple Kullanım Alanları',
        items: [
          'Gelecekte yapılacak bir eylemi anlatmak: I will study for the exam tomorrow. (Yarın sınav için çalışacağım.)',
          'Bir tahmin yapmak: She will probably arrive late. (Muhtemelen geç gelecek.)',
          'Bir öneri veya teklif yapmak: I will help you with your homework. (Ödevinle sana yardım edeceğim.)',
          'Bir ani karar vermek: I will call her right now. (Şu anda onu arayacağım.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + will + fiil (temel hali)',
          'Örnek: I will go to the market later. (Sonra markete gideceğim.)',
          'Örnek: They will finish the project by next week. (Onlar, gelecek haftaya kadar projeyi bitirecekler.)',
          'Örnek: She will call you when she arrives. (O, vardığında seni arayacak.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + will not (won't) + fiil (temel hali)",
          "Örnek: I won't go to the party tonight. (Bu gece partiye gitmeyeceğim.)",
          "Örnek: He won't be able to attend the meeting tomorrow. (O, yarın toplantıya katılamayacak.)",
          "Örnek: We won't finish our homework before midnight. (Ödevimizi gece yarısından önce bitiremeyeceğiz.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Will + özne + fiil (temel hali) + ?',
          'Örnek: Will you go to the concert tomorrow? (Yarın konsere gidecek misin?)',
          'Örnek: Will they arrive on time? (Zamanında gelecekler mi?)',
          'Örnek: Will he help you with the project? (O, projeyle sana yardım edecek mi?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Future Simple ile Kullanılan Zaman Zarfları',
        items: [
          'Tomorrow (yarın): Eylemin yarın gerçekleşeceğini belirtir. Örnek: We will meet tomorrow. (Yarın buluşacağız.)',
          'Next (gelecek): Bir zaman dilimini belirtir. Örnek: I will see you next week. (Gelecek hafta seni göreceğim.)',
          'In the future (gelecekte): Gelecekte gerçekleşecek bir eylem hakkında konuşurken kullanılır. Örnek: In the future, I will travel the world. (Gelecekte dünyayı gezeceğim.)',
          'Soon (yakında): Bir eylemin yakın gelecekte yapılacağını belirtir. Örnek: I will call you soon. (Yakında seni arayacağım.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Will, gelecekteki herhangi bir eylemi ifade etmek için kullanılır. Ayrıca shall da bazı durumlarda kullanılabilir, ancak bu genellikle daha eski bir dil yapısıdır ve daha yaygın olan will tercih edilir.',
          '2. Gelecekteki eylemler için will kullanılırken fiil her zaman temel (saf) halde olmalıdır. Örneğin: will go, will do, will call.',
          "3. Won't, will not'un kısaltmasıdır ve olumsuz cümlelerde kullanılır.",
          '4. Soru cümlelerinde, özne ve fiil yer değiştirir ve fiil will ile başlar.',
          '5. Future Simple zamanının en yaygın kullanımı, ani kararlar, tahminler ve önerilerde yer alır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I will study for the exam tomorrow. (Yarın sınav için çalışacağım.)',
          '2. She will probably arrive late. (Muhtemelen geç gelecek.)',
          '3. I will help you with your homework. (Ödevinle sana yardım edeceğim.)',
          '4. We will meet tomorrow. (Yarın buluşacağız.)',
          '5. Will you go to the concert tomorrow? (Yarın konsere gidecek misin?)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Future Simple, gelecekte yapılacak eylemler veya tahminler hakkında konuşmak için yaygın olarak kullanılır. Gelecekle ilgili basit, kesin ya da olasılıklı eylemleri ifade etmek için idealdir.',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'future-continuous',
    title: 'Future Continuous (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Future Continuous (Gelecek Zaman Devamlı), gelecekte belirli bir zaman diliminde devam eden eylemleri ifade etmek için kullanılır.',
          'Bu zaman, gelecekte belli bir anda veya zaman diliminde o eylemin devam ediyor olacağını vurgular.',
          'Cümle yapısı: Özne + will be + fiil(-ing)',
          'Bu zaman, genellikle planlanmış eylemler, tahminler ya da gelecekteki belirli bir anda süren eylemleri anlatmak için kullanılır.',
        ],
      },
      {
        type: 'examples',
        title: 'Future Continuous Kullanım Alanları',
        items: [
          "Gelecekte belirli bir zamanda devam eden eylemler: I will be studying at 8 PM tomorrow. (Yarın saat 8'de ders çalışıyor olacağım.)",
          'Planlanmış aktiviteler: She will be meeting her friend this afternoon. (Bu öğleden sonra arkadaşıyla buluşuyor olacak.)',
          'Tahmin ve öngörü: They will be traveling during the summer vacation. (Yaz tatili boyunca seyahat ediyor olacaklar.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + will be + fiil(-ing)',
          'Örnek: I will be working on my project next week. (Gelecek hafta projem üzerinde çalışıyor olacağım.)',
          "Örnek: He will be watching the game at 9 PM. (Saat 9'da oyunu izliyor olacak.)",
          'Örnek: They will be staying at the hotel during the conference. (Konferans süresince otelde kalıyor olacaklar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + will not (won't) be + fiil(-ing)",
          "Örnek: I won't be attending the meeting tomorrow. (Yarınki toplantıya katılmıyor olacağım.)",
          "Örnek: She won't be working on that day. (O gün çalışmıyor olacak.)",
          "Örnek: They won't be watching the show tonight. (Bu gece şovu izlemiyor olacaklar.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Will + özne + be + fiil(-ing) + ?',
          'Örnek: Will you be studying at the library tomorrow? (Yarın kütüphanede ders çalışıyor olacak mısın?)',
          'Örnek: Will he be coming to the party? (Partiye geliyor olacak mı?)',
          'Örnek: Will they be traveling this summer? (Bu yaz seyahat ediyor olacaklar mı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Future Continuous ile Kullanılan Zaman Zarfları',
        items: [
          "At [belirli zaman]: Belirli bir zamanda devam eden eylemi ifade eder. Örnek: I will be working at 10 AM tomorrow. (Yarın saat 10'da çalışıyor olacağım.)",
          'This afternoon/tomorrow: Gelecekteki belirli bir günün öğleden sonrası veya tamamı için kullanılır. Örnek: She will be traveling tomorrow. (Yarın seyahat ediyor olacak.)',
          'All day/week: Bir gün veya hafta boyunca süren eylemleri belirtir. Örnek: They will be studying all day on Saturday. (Cumartesi günü tüm gün ders çalışıyor olacaklar.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Future Continuous, gelecekte belirli bir anda devam eden eylemleri anlatmak için kullanılır.',
          '2. Cümle yapısında will be + fiil(-ing) formu mutlaka yer almalıdır.',
          '3. Bu zaman, gelecekte planlanmış aktiviteler veya tahminler için idealdir.',
          '4. Zaman zarflarıyla desteklenerek eylemin ne zaman süreceği daha net ifade edilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          "1. I will be studying at 8 PM tomorrow. (Yarın saat 8'de ders çalışıyor olacağım.)",
          '2. She will be meeting her friend this afternoon. (Bu öğleden sonra arkadaşıyla buluşuyor olacak.)',
          "3. He won't be working on Saturday. (Cumartesi günü çalışmıyor olacak.)",
          '4. Will you be joining us for dinner? (Akşam yemeğine katılıyor olacak mısın?)',
          '5. They will be traveling during the summer vacation. (Yaz tatili boyunca seyahat ediyor olacaklar.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Future Continuous, gelecekte belli bir zaman diliminde devam eden eylemleri anlatmak için kullanılır. Zaman zarfları ile desteklendiğinde, hangi anda veya süre boyunca eylemin süreceği netleşir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu zamanı rahatlıkla kullanabilirsiniz! 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'future-perfect',
    title: 'Future Perfect (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Future Perfect, gelecekte belirli bir zaman noktasına kadar tamamlanmış olacak eylemleri ifade etmek için kullanılır.',
          'Bu zaman, gelecekteki bir olay gerçekleşmeden önce başka bir eylemin tamamlanmış olacağını vurgular.',
          'Cümle yapısı: Özne + will have + fiilin üçüncü hali (V3)',
          'Bu zaman, genellikle by, by the time, before gibi zaman zarflarıyla birlikte kullanılır.',
        ],
      },
      {
        type: 'examples',
        title: 'Future Perfect Kullanım Alanları',
        items: [
          "Gelecekte belirli bir zamana kadar tamamlanmış eylemler: I will have finished my homework by 9 PM. (Saat 9'a kadar ödevimi bitirmiş olacağım.)",
          'Gelecekteki bir olay gerçekleşmeden önce tamamlanmış eylemleri anlatmak: She will have left by the time we arrive. (Biz geldiğimizde o gitmiş olacak.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + will have + fiil (V3)',
          'Örnek: I will have completed the project by next week. (Gelecek haftaya kadar projeyi tamamlamış olacağım.)',
          'Örnek: They will have traveled to five countries by the end of the year. (Yıl sonunda beş ülkeyi gezmiş olacaklar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + will not have (won't have) + fiil (V3)",
          "Örnek: I won't have finished my work by the deadline. (Teslim tarihine kadar işimi bitirmiş olmayacağım.)",
          "Örnek: She won't have seen the movie by tomorrow. (Yarın kadar filmi izlememiş olacak.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Will + özne + have + fiil (V3) + ?',
          'Örnek: Will you have completed the assignment by Friday? (Cuma gününe kadar ödevi bitirmiş olacak mısın?)',
          'Örnek: Will they have arrived before the meeting starts? (Toplantı başlamadan önce varmış olacaklar mı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Future Perfect ile Kullanılan Zaman Zarfları',
        items: [
          "By (kadar): Eylemin tamamlanma zamanını belirtir. Örnek: I will have finished by 8 PM. (Saat 8'e kadar bitirmiş olacağım.)",
          'By the time (…olduğunda): Belirli bir zaman noktasına kadar gerçekleşmiş olmayı ifade eder. Örnek: By the time you arrive, I will have left. (Sen geldiğinde ben gitmiş olacağım.)',
          'Before (önce): Gelecekteki bir olaydan önce tamamlanmış eylemleri belirtir. Örnek: She will have completed the report before the meeting. (Toplantıdan önce raporu tamamlamış olacak.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Future Perfect, gelecekte bir eylemin tamamlanmış olacağını vurgular.',
          '2. Zaman zarfları, eylemin ne zamana kadar tamamlanmış olacağını netleştirir.',
          "3. 'Will have' yapısı, eylemin gelecekte tamamlanmış olacağını belirtirken, fiilin üçüncü hali (V3) kullanılır.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          "1. I will have finished my homework by 9 PM. (Saat 9'a kadar ödevimi bitirmiş olacağım.)",
          '2. She will have left by the time we arrive. (Biz geldiğimizde o gitmiş olacak.)',
          '3. They will have completed the project by next month. (Gelecek aya kadar projeyi tamamlamış olacaklar.)',
          '4. Will you have completed the assignment by Friday? (Cuma gününe kadar ödevi bitirmiş olacak mısın?)',
          '5. Will they have arrived before the meeting starts? (Toplantı başlamadan önce varmış olacaklar mı?)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Future Perfect, gelecekte belirli bir zaman noktasına kadar tamamlanmış eylemleri ifade etmek için kullanılır. Zaman zarfları ile desteklendiğinde, gelecekteki olaylar arasında net bir sıralama yapmanıza yardımcı olur. 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'future-perfect-continuous',
    title: 'Future Perfect Continuous (Tenses) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Future Perfect Continuous, gelecekte belirli bir zamana kadar devam eden eylemlerin, o ana kadar ne kadar süredir yapıldığını vurgulamak için kullanılır.',
          'Bu zaman, gelecekte bir nokta geldiğinde, devam eden eylemin belli bir süre boyunca sürmekte olduğunu belirtir.',
          'Cümle yapısı: Özne + will have been + fiil(-ing)',
          'Genellikle for (süre boyunca), since (den beri), by the time (…olduğunda) gibi zaman zarfları ile kullanılır.',
        ],
      },
      {
        type: 'examples',
        title: 'Future Perfect Continuous Kullanım Alanları',
        items: [
          "Gelecekte belirli bir zaman noktasına kadar devam eden eylemler: I will have been working for eight hours by 6 PM. (Saat 6'da sekiz saat çalışıyor olacağım.)",
          'Belirli bir süre boyunca süren eylemleri vurgulamak: She will have been studying English for two years by next month. (Gelecek ay itibarıyla iki yıldır İngilizce çalışıyor olacak.)',
          'Bir eylemin süresini belirtmek: They will have been traveling for a week when they reach their destination. (Hedeflerine vardıklarında bir haftadır seyahat ediyor olacaklar.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + will have been + fiil(-ing)',
          'Örnek: I will have been waiting for you for over an hour by the time you arrive. (Sen geldiğinde bir saatten fazla bekliyor olacağım.)',
          'Örnek: He will have been practicing the piano since morning. (Sabahdan beri piyano çalıyor olacak.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + will not have been (won't have been) + fiil(-ing)",
          "Örnek: I won't have been working long when you join the team. (Takıma katıldığında uzun süre çalışıyor olmayacağım.)",
          "Örnek: She won't have been studying for very long by the time the exam starts. (Sınav başladığında çok uzun süre çalışıyor olmayacak.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Will + özne + have been + fiil(-ing) + ?',
          'Örnek: Will you have been living in this city for five years by then? (O zamana kadar bu şehirde beş yıldır yaşıyor olacak mısın?)',
          'Örnek: Will they have been working on the project for a long time by the deadline? (Teslim tarihine kadar projede uzun süre çalışıyor olacaklar mı?)',
        ],
      },
      {
        type: 'notes',
        title: '4. Future Perfect Continuous ile Kullanılan Zaman Zarfları',
        items: [
          'For (süre boyunca): Eylemin ne kadar sürede gerçekleştiğini belirtir. Örnek: They will have been waiting for over two hours by then. (O zamana kadar iki saatten fazla bekliyor olacaklar.)',
          'Since (den beri): Eylemin başladığı noktayı ifade eder. Örnek: He will have been working since dawn. (Şafaktan beri çalışıyor olacak.)',
          'By the time (…olduğunda): Belirli bir zaman noktasına kadar devam eden eylemi belirtir. Örnek: By the time you arrive, I will have been cooking for an hour. (Sen geldiğinde bir saattir yemek yapıyor olacağım.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Future Perfect Continuous, gelecekte belirli bir noktaya kadar süren eylemleri ve bu eylemlerin devamlılık süresini vurgulamak için kullanılır.',
          "2. 'Will have been' yapısı mutlaka yer almalı ve fiil-ing formu kullanılmalıdır.",
          '3. Zaman zarfları, eylemin süresini netleştirmenize yardımcı olur; özellikle for ve since ifadeleri önemlidir.',
          '4. Bu zamanı, gelecekte planlanmış uzun süreli aktiviteler veya süreçleri anlatırken tercih edebilirsiniz.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          "1. I will have been working for eight hours by 6 PM. (Saat 6'da sekiz saat çalışıyor olacağım.)",
          '2. She will have been studying English for two years by next month. (Gelecek ay itibarıyla iki yıldır İngilizce çalışıyor olacak.)',
          '3. They will have been traveling for a week when they reach their destination. (Hedeflerine vardıklarında bir haftadır seyahat ediyor olacaklar.)',
          '4. Will you have been living in this city for five years by then? (O zamana kadar bu şehirde beş yıldır yaşıyor olacak mısın?)',
          '5. By the time you arrive, I will have been cooking for an hour. (Sen geldiğinde bir saattir yemek yapıyor olacağım.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Future Perfect Continuous, gelecekte belirli bir zamana kadar süren eylemlerin ne kadar süreyle devam ettiğini ifade eder. Bu zamanı kullanarak, gelecekteki bir noktada eylemin sürecini ve tamamlanma durumunu net bir şekilde anlatabilirsiniz. 😊',
        ],
      },
    ],
    tests: [{
      "id": "tenses-1",
      "title": "Tenses - Test 1 (Basic)",
      "description": "Basit zamanlar (Simple Tenses) ile ilgili temel bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ to school every day.",
          "options": ["go", "goes", "is going", "went"],
          "correctAnswer": "goes"
        },
        {
          "id": "2",
          "question": "I ______ a movie last night.",
          "options": ["watch", "watched", "am watching", "will watch"],
          "correctAnswer": "watched"
        },
        {
          "id": "3",
          "question": "They ______ football tomorrow.",
          "options": ["play", "played", "will play", "are playing"],
          "correctAnswer": "will play"
        },
        {
          "id": "4",
          "question": "He ______ coffee right now.",
          "options": ["drink", "drinks", "is drinking", "drank"],
          "correctAnswer": "is drinking"
        },
        {
          "id": "5",
          "question": "We ______ to Paris next month.",
          "options": ["travel", "traveled", "will travel", "are traveling"],
          "correctAnswer": "will travel"
        },
        {
          "id": "6",
          "question": "The sun ______ in the east.",
          "options": ["rise", "rises", "is rising", "rose"],
          "correctAnswer": "rises"
        },
        {
          "id": "7",
          "question": "I ______ my homework yesterday.",
          "options": ["finish", "finishes", "finished", "am finishing"],
          "correctAnswer": "finished"
        },
        {
          "id": "8",
          "question": "She ______ a book when I called her.",
          "options": ["reads", "read", "was reading", "has read"],
          "correctAnswer": "was reading"
        },
        {
          "id": "9",
          "question": "By next year, I ______ here for 5 years.",
          "options": ["work", "will work", "will have worked", "am working"],
          "correctAnswer": "will have worked"
        },
        {
          "id": "10",
          "question": "Water ______ at 100°C.",
          "options": ["boil", "boils", "is boiling", "boiled"],
          "correctAnswer": "boils"
        },
        {
          "id": "11",
          "question": "They ______ dinner when the phone rang.",
          "options": ["have", "had", "were having", "will have"],
          "correctAnswer": "were having"
        },
        {
          "id": "12",
          "question": "I ______ already ______ my breakfast.",
          "options": ["have / eaten", "had / eaten", "am / eating", "will / eat"],
          "correctAnswer": "have / eaten"
        },
        {
          "id": "13",
          "question": "She ______ to Italy three times.",
          "options": ["was", "has been", "had been", "is being"],
          "correctAnswer": "has been"
        },
        {
          "id": "14",
          "question": "By the time he arrived, we ______ the cake.",
          "options": ["eat", "ate", "had eaten", "will eat"],
          "correctAnswer": "had eaten"
        },
        {
          "id": "15",
          "question": "I ______ for you since 8 AM.",
          "options": ["wait", "waited", "have been waiting", "am waiting"],
          "correctAnswer": "have been waiting"
        },
        {
          "id": "16",
          "question": "He ______ his leg while he was skiing.",
          "options": ["breaks", "broke", "has broken", "was breaking"],
          "correctAnswer": "broke"
        },
        {
          "id": "17",
          "question": "They ______ in this house since 2010.",
          "options": ["live", "lived", "have lived", "will live"],
          "correctAnswer": "have lived"
        },
        {
          "id": "18",
          "question": "The train ______ at 9 PM every day.",
          "options": ["leave", "leaves", "is leaving", "left"],
          "correctAnswer": "leaves"
        },
        {
          "id": "19",
          "question": "I ______ my keys. Can you help me find them?",
          "options": ["lose", "lost", "have lost", "am losing"],
          "correctAnswer": "have lost"
        },
        {
          "id": "20",
          "question": "She ______ English for 2 hours every day.",
          "options": ["study", "studies", "is studying", "has studied"],
          "correctAnswer": "studies"
        }
      ]
    },
    {
      "id": "tenses-2",
      "title": "Tenses - Test 2 (Intermediate)",
      "description": "Sürekli ve perfect zamanlar ile ilgili bilgileri test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ TV when I entered the room.",
          "options": ["watches", "watched", "was watching", "has watched"],
          "correctAnswer": "was watching"
        },
        {
          "id": "2",
          "question": "By next summer, she ______ her degree.",
          "options": ["completes", "will complete", "will have completed", "is completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "3",
          "question": "I ______ this movie before.",
          "options": ["see", "saw", "have seen", "had seen"],
          "correctAnswer": "have seen"
        },
        {
          "id": "4",
          "question": "They ______ for hours when the car broke down.",
          "options": ["drive", "drove", "had been driving", "will drive"],
          "correctAnswer": "had been driving"
        },
        {
          "id": "5",
          "question": "The children ______ outside right now.",
          "options": ["play", "played", "are playing", "have played"],
          "correctAnswer": "are playing"
        },
        {
          "id": "6",
          "question": "She ______ her homework yet.",
          "options": ["didn’t finish", "hasn’t finished", "hadn’t finished", "doesn’t finish"],
          "correctAnswer": "hasn’t finished"
        },
        {
          "id": "7",
          "question": "I ______ a letter all morning.",
          "options": ["write", "wrote", "have written", "have been writing"],
          "correctAnswer": "have been writing"
        },
        {
          "id": "8",
          "question": "By the time you arrive, I ______ dinner.",
          "options": ["prepare", "will prepare", "will have prepared", "am preparing"],
          "correctAnswer": "will have prepared"
        },
        {
          "id": "9",
          "question": "He ______ in London since 2015.",
          "options": ["lives", "lived", "has been living", "will live"],
          "correctAnswer": "has been living"
        },
        {
          "id": "10",
          "question": "While I ______, the phone rang.",
          "options": ["cook", "cooked", "was cooking", "am cooking"],
          "correctAnswer": "was cooking"
        },
        {
          "id": "11",
          "question": "They ______ each other for 10 years.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "12",
          "question": "I ______ to the doctor if I feel worse.",
          "options": ["go", "will go", "would go", "went"],
          "correctAnswer": "will go"
        },
        {
          "id": "13",
          "question": "She ______ for a job since January.",
          "options": ["looks", "looked", "has been looking", "is looking"],
          "correctAnswer": "has been looking"
        },
        {
          "id": "14",
          "question": "By 2025, he ______ his novel.",
          "options": ["writes", "will write", "will have written", "is writing"],
          "correctAnswer": "will have written"
        },
        {
          "id": "15",
          "question": "The students ______ the exam when the bell rang.",
          "options": ["finish", "finished", "were finishing", "have finished"],
          "correctAnswer": "were finishing"
        },
        {
          "id": "16",
          "question": "We ______ the house before the guests arrived.",
          "options": ["clean", "cleaned", "had cleaned", "have cleaned"],
          "correctAnswer": "had cleaned"
        },
        {
          "id": "17",
          "question": "She ______ her keys twice this week.",
          "options": ["loses", "lost", "has lost", "had lost"],
          "correctAnswer": "has lost"
        },
        {
          "id": "18",
          "question": "I ______ for the bus when it started to rain.",
          "options": ["wait", "waited", "was waiting", "have waited"],
          "correctAnswer": "was waiting"
        },
        {
          "id": "19",
          "question": "They ______ the project by tomorrow.",
          "options": ["complete", "will complete", "will have completed", "are completing"],
          "correctAnswer": "will have completed"
        },
        {
          "id": "20",
          "question": "He ______ in this company for 5 years next month.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        }
      ]
    },
    {
      "id": "tenses-3",
      "title": "Tenses - Test 3 (Advanced)",
      "description": "Perfect Continuous ve karmaşık zaman kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "She ______ for 3 hours by the time the meeting starts.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "2",
          "question": "I realized I ______ my wallet at home.",
          "options": ["leave", "left", "had left", "have left"],
          "correctAnswer": "had left"
        },
        {
          "id": "3",
          "question": "They ______ each other since childhood.",
          "options": ["know", "knew", "have known", "had known"],
          "correctAnswer": "have known"
        },
        {
          "id": "4",
          "question": "By next week, she ______ here for a decade.",
          "options": ["works", "has worked", "will have been working", "is working"],
          "correctAnswer": "will have been working"
        },
        {
          "id": "5",
          "question": "He ______ exhausted because he ______ all day.",
          "options": ["is / has been running", "was / had been running", "has been / ran", "will be / runs"],
          "correctAnswer": "is / has been running"
        },
        {
          "id": "6",
          "question": "I ______ to visit Japan for years before I finally went.",
          "options": ["want", "wanted", "had wanted", "have wanted"],
          "correctAnswer": "had wanted"
        },
        {
          "id": "7",
          "question": "She ______ English for 2 hours before the exam.",
          "options": ["studies", "studied", "had been studying", "has studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "8",
          "question": "By the time he retires, he ______ 40 years in this job.",
          "options": ["spends", "will spend", "will have spent", "has spent"],
          "correctAnswer": "will have spent"
        },
        {
          "id": "9",
          "question": "The kids ______ TV all evening yesterday.",
          "options": ["watch", "watched", "were watching", "had been watching"],
          "correctAnswer": "were watching"
        },
        {
          "id": "10",
          "question": "I ______ here since I was born.",
          "options": ["live", "lived", "have been living", "had lived"],
          "correctAnswer": "have been living"
        },
        {
          "id": "11",
          "question": "She ______ to fix the computer for hours before she succeeded.",
          "options": ["tries", "tried", "had been trying", "has tried"],
          "correctAnswer": "had been trying"
        },
        {
          "id": "12",
          "question": "By 2030, scientists ______ a cure for cancer.",
          "options": ["find", "will find", "will have found", "are finding"],
          "correctAnswer": "will have found"
        },
        {
          "id": "13",
          "question": "He ______ the report when his boss called.",
          "options": ["writes", "wrote", "was writing", "had written"],
          "correctAnswer": "was writing"
        },
        {
          "id": "14",
          "question": "We ______ dinner by the time they arrive.",
          "options": ["finish", "will finish", "will have finished", "are finishing"],
          "correctAnswer": "will have finished"
        },
        {
          "id": "15",
          "question": "I ______ never ______ such a beautiful sunset before.",
          "options": ["have / seen", "had / seen", "will / see", "am / seeing"],
          "correctAnswer": "had / seen"
        },
        {
          "id": "16",
          "question": "They ______ for the exam all week, so they were ready.",
          "options": ["study", "studied", "had been studying", "have studied"],
          "correctAnswer": "had been studying"
        },
        {
          "id": "17",
          "question": "By the end of this month, I ______ this book.",
          "options": ["read", "will read", "will have read", "am reading"],
          "correctAnswer": "will have read"
        },
        {
          "id": "18",
          "question": "She ______ in Istanbul for 5 years before moving to Ankara.",
          "options": ["lives", "lived", "had lived", "has lived"],
          "correctAnswer": "had lived"
        },
        {
          "id": "19",
          "question": "He ______ his leg while he ______.",
          "options": ["breaks / runs", "broke / was running", "had broken / ran", "has broken / is running"],
          "correctAnswer": "broke / was running"
        },
        {
          "id": "20",
          "question": "I ______ English for 10 years by next year.",
          "options": ["teach", "have taught", "will have been teaching", "am teaching"],
          "correctAnswer": "will have been teaching"
        }
      ]
    }],
  },
  {
    id: 'can',
    title: 'Can (Modal Verb) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Can, yetenek, izin, olasılık ve kabiliyet bildirmek için kullanılan bir modal fiildir.',
          'Yetenek ifade ederken: I can swim. (Yüzebilirim.)',
          'İzin istemek veya vermek için: Can I borrow your pen? (Kalemini ödünç alabilir miyim?)',
          'Olasılık veya durum belirtmek için: It can be very hot in summer. (Yazın çok sıcak olabilir.)',
          "Cümle yapısında can'den sonra fiilin temel hali (bare infinitive) kullanılır.",
        ],
      },
      {
        type: 'examples',
        title: 'Can Kullanım Alanları',
        items: [
          'Yetenek: She can play the piano. (O, piyano çalabilir.)',
          'İzin istemek: Can I go to the party? (Partiye gidebilir miyim?)',
          'Olasılık: It can rain tomorrow. (Yarın yağmur yağabilir.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + can + fiil (temel hali)',
          'Örnek: I can speak English. (İngilizce konuşabilirim.)',
          'Örnek: They can solve the problem. (Sorunu çözebilirler.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + cannot (can't) + fiil (temel hali)",
          "Örnek: He can't drive a car. (O, araba süremez.)",
          "Örnek: We can't understand the lesson. (Dersi anlayamıyoruz.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Can + özne + fiil (temel hali) + ?',
          'Örnek: Can you help me? (Bana yardım edebilir misin?)',
          'Örnek: Can they come to the party? (Partiye gelebilirler mi?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Can kullanılırken, fiil her zaman temel haliyle gelir.',
          '2. Geçmişteki yetenek veya izin için could kullanılır; can sadece şimdiki veya genel durumları ifade eder.',
          "3. Olumlu, olumsuz ve soru cümlelerinde yapı aynıdır; sadece olumsuz cümlelerde cannot (can't) kullanılır.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I can swim. (Yüzebilirim.)',
          '2. She can speak three languages. (O, üç dil konuşabilir.)',
          '3. Can you help me? (Bana yardım edebilir misin?)',
          "4. He can't drive a car. (O, araba süremez.)",
          '5. They can solve the problem quickly. (Sorunu hızlıca çözebilirler.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "Can, İngilizcede yetenek, izin ve olasılık bildirmek için en temel modal fiillerden biridir. Cümle yapısında can'den sonra fiilin temel hali kullanılır. Yukarıdaki örnekleri inceleyerek can'ın farklı kullanım alanlarını öğrenebilirsiniz!",
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },

  {
    id: 'could',
    title: 'Could (Modal Verb) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Could, hem geçmişteki yetenekleri ifade etmek hem de kibarca rica etmek veya olasılık belirtmek için kullanılan bir modal fiildir.',
          'Geçmiş yetenek: Geçmişte bir şeyi yapabilme kapasitesini ifade eder. Örneğin: I could swim when I was a child. (Çocukken yüzebilirdim.)',
          'Kibar rica veya öneri: Kibarca bir istek veya öneride bulunurken kullanılır. Örneğin: Could you help me, please? (Bana yardım edebilir misin, lütfen?)',
          'Olasılık: Belirli bir durumun mümkün olduğunu ifade eder, özellikle geçmişteki durumlar için. Örneğin: It could be very cold tonight. (Bu gece çok soğuk olabilir.)',
          'Ayrıca, koşullu cümlelerde veya ihtimal bildirirken de kullanılabilir.',
        ],
      },
      {
        type: 'examples',
        title: 'Could Kullanım Alanları',
        items: [
          'Geçmişteki yetenek: She could run very fast when she was young. (Gençken çok hızlı koşabilirdi.)',
          'Kibar rica: Could you please open the window? (Pencereyi açar mısın, lütfen?)',
          'Olasılık: It could rain later this evening. (Bu akşam sonradan yağmur yağabilir.)',
          'Koşullu öneri: If you practiced more, you could become a great musician. (Daha fazla pratik yaparsan, harika bir müzisyen olabilirsin.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + could + fiil (temel hali)',
          'Örnek: I could play the guitar very well. (Gitarı çok iyi çalabilirdim.)',
          'Örnek: They could solve the puzzle easily. (Bulmacayı kolayca çözebilirlerdi.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + could not (couldn't) + fiil (temel hali)",
          "Örnek: He couldn't attend the meeting yesterday. (Dün toplantıya katılamadı.)",
          "Örnek: We couldn't understand the instructions. (Talimatları anlayamadık.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Could + özne + fiil (temel hali) + ?',
          'Örnek: Could you pass the salt? (Tuzu uzatabilir misin?)',
          'Örnek: Could they join us for dinner? (Akşam yemeğine bize katılabilirler mi?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Could, geçmişteki yetenekleri ifade etmek için 'can'ın geçmiş hali olarak kullanılır, ancak geçmişteki belirli koşullar altında da kullanılır.",
          '2. Kibarca rica ederken veya öneride bulunurken kullanmak, cümleye yumuşak bir ifade kazandırır.',
          '3. Olasılık belirtirken, özellikle geçmiş durumlar veya koşullara bağlı durumlarda tercih edilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I could swim when I was a child. (Çocukken yüzebilirdim.)',
          '2. Could you help me with my homework? (Ödevimde bana yardım edebilir misin?)',
          '3. It could be very noisy at the party. (Partide çok gürültülü olabilir.)',
          "4. She couldn't find her keys this morning. (Bu sabah anahtarlarını bulamadı.)",
          '5. If you practiced more, you could improve your skills. (Daha fazla pratik yaparsan, yeteneklerini geliştirebilirsin.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Could, İngilizcede geçmişteki yetenekleri, kibarca rica etme durumlarını ve olasılıkları ifade etmek için kullanılır. Yapısında, fiil her zaman temel haliyle gelir ve kullanıldığı bağlama göre farklı anlamlar kazanabilir. Yukarıdaki örnekleri inceleyerek could kullanımını pekiştirebilirsiniz! 😊',
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'could',
    title: 'Could (Modal Verb) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede Could, hem geçmişteki yetenekleri ifade etmek hem de kibarca rica etmek veya olasılık belirtmek için kullanılan bir modal fiildir.',
          'Geçmiş yetenek: Geçmişte bir şeyi yapabilme kapasitesini ifade eder. Örneğin: I could swim when I was a child. (Çocukken yüzebilirdim.)',
          'Kibar rica veya öneri: Kibarca bir istek veya öneride bulunurken kullanılır. Örneğin: Could you help me, please? (Bana yardım edebilir misin, lütfen?)',
          'Olasılık: Belirli bir durumun mümkün olduğunu ifade eder, özellikle geçmişteki durumlar için. Örneğin: It could be very cold tonight. (Bu gece çok soğuk olabilir.)',
          'Ayrıca, koşullu cümlelerde veya ihtimal bildirirken de kullanılabilir.',
        ],
      },
      {
        type: 'examples',
        title: 'Could Kullanım Alanları',
        items: [
          'Geçmişteki yetenek: She could run very fast when she was young. (Gençken çok hızlı koşabilirdi.)',
          'Kibar rica: Could you please open the window? (Pencereyi açar mısın, lütfen?)',
          'Olasılık: It could rain later this evening. (Bu akşam sonradan yağmur yağabilir.)',
          'Koşullu öneri: If you practiced more, you could become a great musician. (Daha fazla pratik yaparsan, harika bir müzisyen olabilirsin.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + could + fiil (temel hali)',
          'Örnek: I could play the guitar very well. (Gitarı çok iyi çalabilirdim.)',
          'Örnek: They could solve the puzzle easily. (Bulmacayı kolayca çözebilirlerdi.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + could not (couldn't) + fiil (temel hali)",
          "Örnek: He couldn't attend the meeting yesterday. (Dün toplantıya katılamadı.)",
          "Örnek: We couldn't understand the instructions. (Talimatları anlayamadık.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Could + özne + fiil (temel hali) + ?',
          'Örnek: Could you pass the salt? (Tuzu uzatabilir misin?)',
          'Örnek: Could they join us for dinner? (Akşam yemeğine bize katılabilirler mi?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Could, geçmişteki yetenekleri ifade etmek için 'can'ın geçmiş hali olarak kullanılır, ancak geçmişteki belirli koşullar altında da kullanılır.",
          '2. Kibarca rica ederken veya öneride bulunurken kullanmak, cümleye yumuşak bir ifade kazandırır.',
          '3. Olasılık belirtirken, özellikle geçmiş durumlar veya koşullara bağlı durumlarda tercih edilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I could swim when I was a child. (Çocukken yüzebilirdim.)',
          '2. Could you help me with my homework? (Ödevimde bana yardım edebilir misin?)',
          '3. It could be very noisy at the party. (Partide çok gürültülü olabilir.)',
          "4. She couldn't find her keys this morning. (Bu sabah anahtarlarını bulamadı.)",
          '5. If you practiced more, you could improve your skills. (Daha fazla pratik yaparsan, yeteneklerini geliştirebilirsin.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Could, İngilizcede geçmişteki yetenekleri, kibarca rica etme durumlarını ve olasılıkları ifade etmek için kullanılır. Yapısında, fiil her zaman temel haliyle gelir ve kullanıldığı bağlama göre farklı anlamlar kazanabilir. Yukarıdaki örnekleri inceleyerek could kullanımını pekiştirebilirsiniz! 😊',
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'may-maybe-might',
    title: 'May / Maybe / Might Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede may ve might modal fiilleri, olasılık, izin ve varsayım bildirmek için kullanılır.',
          'May, daha kesin veya yüksek olasılık durumlarını ifade ederken, izin isteme veya verme anlamında da kullanılır. Örneğin: May I come in? (İçeri girebilir miyim?)',
          'Might ise, olasılık belirtirken biraz daha belirsiz veya düşük bir ihtimali ifade eder. Örneğin: It might rain later. (Daha sonra yağmur yağabilir.)',
          "Maybe ise bir zarf olup, 'belki' anlamını taşır ve cümlenin başında veya sonunda kullanılır; modal fiil olarak kullanılmaz. Örneğin: Maybe I'll visit my friend this weekend. (Belki bu hafta sonu arkadaşıma gideceğim.)",
        ],
      },
      {
        type: 'examples',
        title: 'May, Maybe ve Might Kullanım Alanları',
        items: [
          'Olasılık ifade etmek: It may rain later. (Yağmur yağabilir.)',
          'Daha düşük olasılık: It might snow tomorrow. (Yarın kar yağabilir.)',
          'Kibarca izin istemek: May I borrow your pen? (Kalemini ödünç alabilir miyim?)',
          "Belirsizlik ifade eden zarf: Maybe I'll watch a movie tonight. (Belki bu gece film izlerim.)",
        ],
      },
      {
        type: 'notes',
        title: 'Önemli Notlar',
        items: [
          'May ve might: Her ikisi de olasılık bildirirken kullanılır; ancak may daha güçlü bir olasılığı, might ise daha düşük veya belirsiz bir ihtimali ifade eder.',
          'May ayrıca izin istemek veya vermek anlamında da kullanılır. Örneğin: May I use your phone?',
          "Maybe: Sadece bir zarf olup, cümleye 'belki' anlamı katar. Modal fiil değildir, bu nedenle yapı içinde herhangi bir yardımcı fiil ile kullanılmaz.",
          'Might bazen geçmişe yönelik varsayımlarda da kullanılabilir. Örneğin: He might have forgotten the meeting. (Toplantıyı unutmuş olabilir.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. May: Daha kesin ya da yüksek olasılıklı durumları ve izin istemeyi ifade etmek için kullanılır.',
          '2. Might: Daha belirsiz veya düşük olasılıklı durumlarda tercih edilir; geçmiş varsayımlarda da kullanılabilir.',
          "3. Maybe: Cümleye 'belki' anlamı katar; genellikle cümlenin başında veya sonunda yer alır.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. It may rain later. (Daha sonra yağmur yağabilir.)',
          '2. It might snow tomorrow. (Yarın kar yağabilir.)',
          '3. May I open the window? (Pencereyi açabilir miyim?)',
          "4. Maybe I'll visit my friend this weekend. (Belki bu hafta sonu arkadaşıma gideceğim.)",
          '5. He might have forgotten the meeting. (Toplantıyı unutmuş olabilir.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "May ve might modal fiilleri, olasılık ve izin bildirmek için kullanılırken, aralarındaki fark olasılığın kesinliğinde yatar. May daha güçlü veya kesin olasılıkları, might ise daha düşük veya belirsiz olasılıkları ifade eder. Maybe ise, cümleye 'belki' anlamı katan bir zarftır ve modal fiil değildir. Yukarıdaki örnekleri ve ipuçlarını inceleyerek bu farkları kavrayabilirsiniz!",
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'should',
    title: 'Should (Modal Verb) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede should, tavsiye, öneri, beklenti ve hafif zorunluluk bildirmek için kullanılan bir modal fiildir.',
          'Tavsiye veya öneri verirken: Birine ne yapması gerektiği konusunda nazikçe yol gösterir. Örneğin: You should study harder. (Daha çok çalışmalısın.)',
          'Beklenti veya varsayım bildirirken: Bir durumun doğru veya muhtemel olduğunu ifade eder. Örneğin: The train should arrive on time. (Tren zamanında varmalı.)',
          "Geçmişe yönelik eleştiri veya pişmanlık bildirmek için 'should have' kalıbı kullanılır. Örneğin: You should have told me earlier. (Bunu bana daha önce söylemeliydin.)",
          "Cümle yapısında should'den sonra fiilin temel hali (bare infinitive) gelir.",
        ],
      },
      {
        type: 'examples',
        title: 'Should Kullanım Alanları',
        items: [
          'Tavsiye: You should get some rest. (Biraz dinlenmelisin.)',
          'Öneri: We should try that new restaurant. (O yeni restoranı denemeliyiz.)',
          'Beklenti: They should be here by now. (Artık burada olmalılar.)',
          'Geçmiş pişmanlığı: I should have studied more for the exam. (Sınav için daha çok çalışmalıydım.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + should + fiil (temel hali)',
          'Örnek: She should apologize for her mistake. (Hatası için özür dilemeli.)',
          'Örnek: We should leave early to avoid traffic. (Trafikten kaçınmak için erken ayrılmalıyız.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + should not (shouldn't) + fiil (temel hali)",
          "Örnek: He shouldn't eat so much junk food. (Bu kadar abur cubur yememeli.)",
          "Örnek: You shouldn't worry too much about it. (Bu konuda çok fazla endişelenmemelisin.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Should + özne + fiil (temel hali) + ?',
          'Örnek: Should I call you later? (Seni sonra aramalı mıyım?)',
          'Örnek: Should we start the meeting now? (Toplantıya şimdi mi başlamalıyız?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Should, tavsiye verirken ve beklenti bildirirken sıklıkla kullanılır. Kişisel görüş veya öneri ifade ederken tercih edilir.',
          '2. Geçmişe yönelik eleştiri veya pişmanlık durumlarında should have + V3 yapısı kullanılır.',
          "3. Olumlu, olumsuz ve soru cümlelerinde yapıya dikkat edin; fiilin temel hali her zaman should'den sonra gelir.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. You should study harder. (Daha çok çalışmalısın.)',
          '2. The train should arrive on time. (Tren zamanında varmalı.)',
          '3. I should have called you yesterday. (Dün seni aramalıydım.)',
          '4. Should I bring my notebook? (Defterimi getirmeli miyim?)',
          "5. They shouldn't ignore the warning signs. (Uyarı işaretlerini görmezden gelmemeliler.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Should, tavsiye, öneri, beklenti ve hafif zorunlulukları ifade etmek için kullanılır. Özellikle günlük konuşmalarda ve yazışmalarda sıkça karşılaşacağınız bu modal fiilin yapısına ve kullanım alanlarına dikkat ederek, doğru ve etkili bir şekilde kullanabilirsiniz!',
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'would',
    title: 'Would (Modal Verb) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede would, çeşitli durumları ifade etmek için kullanılan çok yönlü bir modal fiildir.',
          'Koşul cümlelerinde, olası durumları veya hayali senaryoları ifade etmek için kullanılır. Örneğin: If I had more money, I would travel around the world. (Daha fazla param olsaydı, dünyayı gezerdim.)',
          'Kibar rica veya tekliflerde: Nazikçe bir istek veya öneride bulunurken kullanılır. Örneğin: Would you like a cup of tea? (Bir fincan çay ister misiniz?)',
          "Geçmişte alışkanlıkları anlatırken: Özellikle 'used to' gibi ifadelerin yerine veya geçmişte tekrar eden durumları anlatırken kullanılabilir. Örneğin: When I was young, I would visit my grandparents every summer. (Gençken her yaz büyükannemi ziyaret ederdim.)",
          'Gelecekteki olayların geçmişte öngörüsü ya da varsayımı için: Geçmişten bakıldığında gelecekle ilgili beklentileri ifade eder. Örneğin: He said he would finish the work by tomorrow. (Yarın işini bitireceğini söyledi.)',
        ],
      },
      {
        type: 'examples',
        title: 'Would Kullanım Alanları',
        items: [
          'Koşul Cümleleri: If it rained, I would stay at home. (Yağmur yağarsa evde kalırdım.)',
          'Nazik Rica: Would you please help me with this task? (Bu görevde bana yardım eder misiniz, lütfen?)',
          'Geçmiş Alışkanlık: They would always go for a walk after dinner. (Akşam yemeğinden sonra her zaman yürüyüşe çıkarlardı.)',
          'Gelecek Varsayımı: She promised that she would call me later. (Daha sonra beni arayacağını söz verdi.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + would + fiil (temel hali)',
          'Örnek: I would help you if I could. (Yardım edebilseydim sana yardım ederdim.)',
          'Örnek: He would travel more if he had time. (Zamanı olsaydı daha çok seyahat edebilirdi.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + would not (wouldn't) + fiil (temel hali)",
          "Örnek: I wouldn't do that if I were you. (Senin yerinde olsaydım bunu yapmazdım.)",
          "Örnek: They wouldn't agree to the proposal without changes. (Değişiklikler olmadan teklifi kabul etmezlerdi.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Would + özne + fiil (temel hali) + ?',
          'Örnek: Would you join us for dinner? (Bize akşam yemeğine katılır mısın?)',
          'Örnek: Would he help if you asked him? (Ona sorarsan yardım eder miydi?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Would, koşul cümlelerinde ve hayali senaryolarda sıkça kullanılır.',
          '2. Kibar istek, rica veya tekliflerde kullanarak cümleye nazik bir ifade kazandırabilirsiniz.',
          "3. Geçmişteki alışkanlıkları veya tekrarlanan durumları anlatırken 'would' kullanımı, o dönemin rutinlerine vurgu yapar.",
          "4. Olumsuz ve soru cümlelerinde yapı, olumlu cümlelerle aynı mantığı izler; sadece 'not' veya soru yapısı eklenir.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. If I had more money, I would travel around the world. (Daha fazla param olsaydı, dünyayı gezerdim.)',
          '2. Would you like a cup of tea? (Bir fincan çay ister misiniz?)',
          '3. When I was young, I would visit my grandparents every summer. (Gençken her yaz büyükannemi ziyaret ederdim.)',
          '4. He said he would finish the work by tomorrow. (Yarın işini bitireceğini söyledi.)',
          "5. I wouldn't do that if I were you. (Senin yerinde olsaydım bunu yapmazdım.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Would, koşul cümlelerinde, kibar rica veya tekliflerde ve geçmiş alışkanlıkları anlatırken kullanılan çok yönlü bir modal fiildir. Kullanım alanlarına dikkat ederek, farklı bağlamlarda doğru şekilde kullanmayı öğrenebilirsiniz!',
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'must',
    title: 'Must (Modal Verb) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'İngilizcede must, zorunluluk, gereklilik veya kuvvetli varsayım bildirmek için kullanılan bir modal fiildir.',
          'Zorunluluk/gereklilik ifade ederken: Bir şeyin yapılması gerektiğini belirtir. Örneğin: You must wear a helmet while riding a bike. (Bisiklet sürerken kask takmalısın.)',
          'Kuvvetli varsayım bildirirken: Bir durumun kesinlikle doğru olduğuna dair güçlü bir inancı ifade eder. Örneğin: She must be at home by now. (Artık evde olmalı.)',
          "Cümle yapısında must'ten sonra fiilin temel hali (bare infinitive) kullanılır.",
        ],
      },
      {
        type: 'examples',
        title: 'Must Kullanım Alanları',
        items: [
          'Zorunluluk: Students must submit their assignments on time. (Öğrenciler ödevlerini zamanında teslim etmeliler.)',
          'Gereklilik: You must follow the rules. (Kurallara uymalısın.)',
          'Kuvvetli varsayım: It must be very expensive. (Çok pahalı olmalı.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + must + fiil (temel hali)',
          'Örnek: I must finish this report by tomorrow. (Bu raporu yarına kadar bitirmeliyim.)',
          'Örnek: They must be very tired after the long journey. (Uzun yolculuktan sonra çok yorgun olmalılar.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + must not (mustn't) + fiil (temel hali)",
          'Örnek: You must not smoke in this area. (Bu alanda sigara içmemelisin.)',
          "Örnek: He mustn't forget to lock the door. (Kapıyı kilitlemeyi unutmamalı.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Must + özne + fiil (temel hali) + ? (Not: Soru formu, özellikle resmi ya da yazılı dilde kullanılır.)',
          'Örnek: Must I attend the meeting? (Toplantıya katılmalı mıyım?)',
          "Örnek: Must we complete the project by Friday? (Projeyi Cuma'ya kadar bitirmemiz mi gerekiyor?)",
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Must, kişisel zorunluluk veya dışsal kuralların getirdiği zorunluluğu ifade eder.',
          '2. Kuvvetli varsayım durumlarında, konuşanın duruma olan inancını belirtmek için kullanılır.',
          "3. Olumsuz yapıda must not (mustn't), kesin yasaklama veya tavsiye edilmeme anlamı taşır.",
          '4. Soru cümleleri, resmi bağlamlarda veya yazılı metinlerde daha yaygın olarak kullanılabilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. You must wear a helmet while riding a bike. (Bisiklet sürerken kask takmalısın.)',
          '2. Students must submit their assignments on time. (Öğrenciler ödevlerini zamanında teslim etmeliler.)',
          '3. She must be at home by now. (Artık evde olmalı.)',
          '4. I must finish this report by tomorrow. (Bu raporu yarına kadar bitirmeliyim.)',
          '5. Must I attend the meeting? (Toplantıya katılmalı mıyım?)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "Must, zorunluluk, gereklilik ve kuvvetli varsayım bildiren bir modal fiildir. Hem kişisel hem de dışsal kurallarla ilgili durumları ifade etmek için kullanılır. Yukarıdaki örnekleri inceleyerek, must'un farklı bağlamlarda nasıl kullanıldığını öğrenebilirsiniz!",
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'have_to',
    title: 'Have to (Modal Fiil) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Have to, bir şeyin yapılmasının zorunlu veya gerekli olduğunu ifade etmek için kullanılan bir yapıdır. :contentReference[oaicite:0]{index=0}',
          'Bu yapı, have fiilinin özneye göre çekimlenmiş hâliyle kullanılır ve ardından fiilin temel hali gelir.',
          'Örneğin: I have to study for the exam. (Sınav için çalışmam gerekiyor.)',
          "Olumsuz cümlelerde do not (don't) veya does not (doesn't) yardımcı fiilleri kullanılır.",
          "Örneğin: She doesn't have to work on weekends. (Hafta sonları çalışmak zorunda değil.)",
          'Soru cümlelerinde de do/does yardımcı fiilleri kullanılır.',
          'Örneğin: Do you have to leave early? (Erken gitmek zorunda mısın?)',
        ],
      },
      {
        type: 'examples',
        title: 'Have to Kullanım Alanları',
        items: [
          'Zorunluluk: We have to wear uniforms at school. (Okulda üniforma giymek zorundayız.)',
          "Gereklilik: You have to complete the assignment by Friday. (Ödevi Cuma'ya kadar tamamlamalısın.)",
          "İzin: They don't have to attend the meeting if they don't want to. (İstemiyorlarsa toplantıya katılmak zorunda değiller.)",
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has to + fiil (temel hali)',
          'Örnek: I have to finish this report by tomorrow. (Bu raporu yarına kadar bitirmeliyim.)',
          'Örnek: She has to take the bus to work. (İşe gitmek için otobüse binmek zorunda.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + do/does not (don't/doesn't) + have to + fiil (temel hali)",
          "Örnek: They don't have to bring their own lunch. (Kendi öğle yemeklerini getirmek zorunda değiller.)",
          "Örnek: He doesn't have to answer the question if he doesn't know it. (Bilmiyorsa soruyu yanıtlamak zorunda değil.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Do/Does + özne + have to + fiil (temel hali)?',
          'Örnek: Do you have to work on weekends? (Hafta sonları çalışmak zorunda mısın?)',
          'Örnek: Does she have to attend the seminar? (Seminere katılmak zorunda mı?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Have to, dışsal zorunlulukları ifade ederken kullanılır; yani bir otorite veya kural tarafından belirlenen gereklilikler.',
          '2. Must ise daha çok kişisel zorunluluk veya içsel gereklilikleri ifade etmek için kullanılır.',
          '3. Have to yapısı, do/does yardımcı fiilleriyle olumsuz ve soru cümlelerinde kullanılır.',
          "4. Have to'nun geçmiş zaman hâli had to şeklindedir.",
          '5. Have to yapısı, have got to ile benzer anlam taşır, ancak have to daha yaygın ve resmi bir kullanıma sahiptir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I have to study for the exam. (Sınav için çalışmam gerekiyor.)',
          "2. She doesn't have to work on weekends. (Hafta sonları çalışmak zorunda değil.)",
          '3. Do you have to leave early? (Erken gitmek zorunda mısın?)',
          '4. We have to wear uniforms at school. (Okulda üniforma giymek zorundayız.)',
          "5. They don't have to attend the meeting if they don't want to. (İstemiyorlarsa toplantıya katılmak zorunda değiller.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "Have to, dışsal zorunlulukları ifade etmek için kullanılan bir yapıdır. Olumlu, olumsuz ve soru cümlelerinde farklı yapılarla kullanılır. Yukarıdaki örnekleri inceleyerek, have to'nun farklı bağlamlarda nasıl kullanıldığını öğrenebilirsiniz!",
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },

  {
    id: 'ought_to',
    title: 'Ought to (Modal Fiil) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Ought to, bir şeyin yapılmasının doğru, uygun veya gerekli olduğunu ifade etmek için kullanılan bir modal fiildir. :contentReference[oaicite:0]{index=0}',
          'Bu yapı, should ile benzer anlam taşır ve genellikle tavsiye, zorunluluk veya beklenti bildirmek için kullanılır.',
          'Örneğin: You ought to apologize for your mistake. (Hatan için özür dilemelisin.)',
          "Olumsuz cümlelerde ought not to veya kısaca oughtn't to kullanılır.",
          'Örneğin: She ought not to be late for the meeting. (Toplantıya geç kalmamalı.)',
          'Soru cümlelerinde ise ought özneyle birlikte kullanılır.',
          'Örneğin: Ought I to bring a gift to the party? (Partiye hediye getirmeli miyim?)',
        ],
      },
      {
        type: 'examples',
        title: 'Ought to Kullanım Alanları',
        items: [
          "Tavsiye: You ought to see a doctor if you're feeling unwell. (Kendini kötü hissediyorsan doktora görünmelisin.)",
          'Zorunluluk: We ought to finish this project by the end of the week. (Bu projeyi hafta sonuna kadar bitirmeliyiz.)',
          'Beklenti: They ought to arrive by noon. (Öğlene kadar varmalılar.)',
          'Ahlaki yükümlülük: You ought to help those in need. (Muhtaçlara yardım etmelisin.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + ought to + fiil (temel hali)',
          'Örnek: We ought to respect our elders. (Büyüklerimize saygı göstermeliyiz.)',
          'Örnek: She ought to study harder for the exam. (Sınav için daha çok çalışmalı.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + ought not to (oughtn't to) + fiil (temel hali)",
          'Örnek: You ought not to speak loudly in the library. (Kütüphanede yüksek sesle konuşmamalısın.)',
          "Örnek: They oughtn't to waste food. (Yiyecek israf etmemeliler.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Ought + özne + to + fiil (temel hali)?',
          'Örnek: Ought I to call her before visiting? (Ziyaretten önce onu aramalı mıyım?)',
          'Örnek: Ought we to inform the authorities? (Yetkilileri bilgilendirmeli miyiz?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Ought to, should ile benzer anlam taşır, ancak daha resmi bir kullanıma sahiptir.',
          "2. Ought to yapısı, should'a göre daha az yaygın olup, özellikle resmi veya yazılı dilde tercih edilir.",
          "3. Olumsuz yapıda ought not to veya kısaca oughtn't to kullanılır.",
          "4. Ought to'nun geçmiş zaman hâli ought to have done şeklindedir ve geçmişte yapılması gereken ancak yapılmamış bir eylemi ifade eder.",
          '5. Ought to yapısı, have to veya must gibi zorunluluk bildiren modal fiillerle karıştırılmamalıdır; ought to daha çok tavsiye ve beklenti bildirirken, have to ve must daha güçlü zorunlulukları ifade eder.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. You ought to apologize for your mistake. (Hatan için özür dilemelisin.)',
          '2. She ought not to be late for the meeting. (Toplantıya geç kalmamalı.)',
          '3. Ought I to bring a gift to the party? (Partiye hediye getirmeli miyim?)',
          '4. We ought to respect our elders. (Büyüklerimize saygı göstermeliyiz.)',
          "5. They oughtn't to waste food. (Yiyecek israf etmemeliler.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "Ought to, bir şeyin yapılmasının doğru, uygun veya gerekli olduğunu ifade etmek için kullanılan bir modal fiildir. Olumlu, olumsuz ve soru cümlelerinde farklı yapılarla kullanılır. Yukarıdaki örnekleri inceleyerek, ought to'nun farklı bağlamlarda nasıl kullanıldığını öğrenebilirsiniz!",
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'need',
    title: 'Need (Modal Fiil) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Need, bir şeyin yapılmasının gerekli veya zorunlu olduğunu ifade etmek için kullanılan bir modal fiildir.',
          'Bu yapı, must ve have to ile benzer anlam taşır, ancak daha çok olumsuz cümlelerde kullanılır.',
          "Örneğin: You needn't worry about the exam. (Sınav hakkında endişelenmene gerek yok.)",
          "Olumsuz cümlelerde needn't veya kısaca need not kullanılır.",
          "Örneğin: She needn't attend the meeting. (Toplantıya katılmasına gerek yok.)",
          'Soru cümlelerinde ise need özneyle birlikte kullanılır.',
          'Örneğin: Need I explain this again? (Bunu tekrar açıklamam gerekir mi?)',
        ],
      },
      {
        type: 'examples',
        title: 'Need Kullanım Alanları',
        items: [
          'Zorunluluk: You need to submit the report by Friday. (Cevapları Cuma günü göndermeniz gerekir.)',
          "Olumsuz zorunluluk: You needn't bring any food; we've got plenty. (Herhangi bir yiyecek getirmenize gerek yok; bolca var.)",
          'Soru cümlesi: Need we bring our own laptops? (Kendi dizüstü bilgisayarlarımızı getirmeli miyiz?)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          "Cümle yapısı: Özne + needn't + fiil (temel hali)",
          "Örnek: You needn't worry about the exam. (Sınav hakkında endişelenmene gerek yok.)",
          "Örnek: She needn't attend the meeting. (Toplantıya katılmasına gerek yok.)",
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + needn't + fiil (temel hali)",
          "Örnek: You needn't bring any food; we've got plenty. (Herhangi bir yiyecek getirmenize gerek yok; bolca var.)",
          "Örnek: They needn't have left so early. (O kadar erken gitmelerine gerek yoktu.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Need + özne + fiil (temel hali)?',
          'Örnek: Need I explain this again? (Bunu tekrar açıklamam gerekir mi?)',
          'Örnek: Need we bring our own laptops? (Kendi dizüstü bilgisayarlarımızı getirmeli miyiz?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Need, must ve have to ile benzer anlam taşır, ancak daha çok olumsuz cümlelerde kullanılır.',
          "2. Olumsuz yapıda needn't veya kısaca need not kullanılır.",
          "3. Need'in geçmiş zaman hâli yoktur; geçmişteki zorunluluklar için had to kullanılır.",
          "4. Need'in soru cümlelerinde kullanımı daha yaygındır ve genellikle resmi bağlamlarda tercih edilir.",
          "5. Need'in olumlu cümlelerde kullanımı nadirdir ve genellikle resmi dilde görülür.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          "1. You needn't worry about the exam. (Sınav hakkında endişelenmene gerek yok.)",
          "2. She needn't attend the meeting. (Toplantıya katılmasına gerek yok.)",
          '3. Need I explain this again? (Bunu tekrar açıklamam gerekir mi?)',
          "4. You needn't bring any food; we've got plenty. (Herhangi bir yiyecek getirmenize gerek yok; bolca var.)",
          '5. Need we bring our own laptops? (Kendi dizüstü bilgisayarlarımızı getirmeli miyiz?)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "Need, bir şeyin yapılmasının gerekli veya zorunlu olduğunu ifade etmek için kullanılan bir modal fiildir. Olumsuz cümlelerde needn't veya kısaca need not kullanılırken, soru cümlelerinde need özneyle birlikte kullanılır. Yukarıdaki örnekleri inceleyerek, need'in farklı bağlamlarda nasıl kullanıldığını öğrenebilirsiniz!",
        ],
      },
    ],
    tests: [ {
      "id": "modals-1",
      "title": "Modals - Test 1 (Basic)",
      "description": "Temel düzey modal kullanımlarını test edin (can, must, should, may).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ swim here; it’s dangerous.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "She ______ speak French fluently.",
          "options": ["can", "must", "should", "may"],
          "correctAnswer": "can"
        },
        {
          "id": "3",
          "question": "We ______ finish the project today.",
          "options": ["must", "can", "may", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "4",
          "question": "______ I borrow your pen?",
          "options": ["May", "Must", "Should", "Would"],
          "correctAnswer": "May"
        },
        {
          "id": "5",
          "question": "You ______ eat vegetables for a healthy diet.",
          "options": ["should", "mustn’t", "can’t", "may"],
          "correctAnswer": "should"
        },
        {
          "id": "6",
          "question": "He ______ be at home; the lights are off.",
          "options": ["can’t", "must", "should", "may"],
          "correctAnswer": "can’t"
        },
        {
          "id": "7",
          "question": "______ you help me with this box?",
          "options": ["Can", "Must", "Should", "May"],
          "correctAnswer": "Can"
        },
        {
          "id": "8",
          "question": "Students ______ use phones during the exam.",
          "options": ["mustn’t", "should", "can", "may"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "You ______ see a doctor if you feel ill.",
          "options": ["should", "can’t", "must", "may not"],
          "correctAnswer": "should"
        },
        {
          "id": "10",
          "question": "It ______ rain later; take an umbrella.",
          "options": ["may", "must", "can’t", "should"],
          "correctAnswer": "may"
        }
      ]
    },
    {
      "id": "modals-2",
      "title": "Modals - Test 2 (Intermediate)",
      "description": "Orta düzey modal kullanımlarını test edin (could, would, might, have to).",
      "questions": [
        {
          "id": "1",
          "question": "______ you like some coffee?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "2",
          "question": "I ______ play the piano when I was young.",
          "options": ["could", "can", "must", "should"],
          "correctAnswer": "could"
        },
        {
          "id": "3",
          "question": "You ______ wear a seatbelt while driving.",
          "options": ["have to", "could", "might", "shouldn’t"],
          "correctAnswer": "have to"
        },
        {
          "id": "4",
          "question": "He ______ be the manager; he’s too young.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "5",
          "question": "______ you mind closing the window?",
          "options": ["Would", "Could", "Should", "Must"],
          "correctAnswer": "Would"
        },
        {
          "id": "6",
          "question": "We ______ hurry, or we’ll miss the bus.",
          "options": ["must", "could", "might", "shouldn’t"],
          "correctAnswer": "must"
        },
        {
          "id": "7",
          "question": "They ______ come to the party, but I’m not sure.",
          "options": ["might", "must", "should", "can’t"],
          "correctAnswer": "might"
        },
        {
          "id": "8",
          "question": "You ______ smoke here; it’s prohibited.",
          "options": ["mustn’t", "couldn’t", "might not", "shouldn’t"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "9",
          "question": "I ______ finish this report by tomorrow.",
          "options": ["have to", "could", "might", "should"],
          "correctAnswer": "have to"
        },
        {
          "id": "10",
          "question": "She ______ be at work; her car isn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        }
      ]
    },
    {
      "id": "modals-3",
      "title": "Modals - Test 3 (Advanced)",
      "description": "İleri düzey modal kullanımlarını test edin (should have, might have, must have).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ told me earlier!",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "2",
          "question": "The train ______ delayed due to the storm.",
          "options": ["might have been", "must be", "should be", "could be"],
          "correctAnswer": "might have been"
        },
        {
          "id": "3",
          "question": "He ______ forgotten the meeting.",
          "options": ["must have", "should have", "could", "might"],
          "correctAnswer": "must have"
        },
        {
          "id": "4",
          "question": "I ______ helped you if you had asked.",
          "options": ["could have", "should have", "must have", "might have"],
          "correctAnswer": "could have"
        },
        {
          "id": "5",
          "question": "They ______ arrived by now; it’s already noon.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "6",
          "question": "She ______ the answer, but she wasn’t sure.",
          "options": ["might have known", "must know", "should know", "could know"],
          "correctAnswer": "might have known"
        },
        {
          "id": "7",
          "question": "You ______ eaten so much; now you’re sick.",
          "options": ["shouldn’t have", "mustn’t have", "couldn’t have", "might not have"],
          "correctAnswer": "shouldn’t have"
        },
        {
          "id": "8",
          "question": "The keys ______ fallen out of my pocket.",
          "options": ["must have", "should have", "could have", "might have"],
          "correctAnswer": "must have"
        },
        {
          "id": "9",
          "question": "We ______ missed the flight; we left too late.",
          "options": ["might have", "must have", "should have", "could have"],
          "correctAnswer": "might have"
        },
        {
          "id": "10",
          "question": "He ______ the exam; he studied all night.",
          "options": ["must have passed", "should pass", "could pass", "might pass"],
          "correctAnswer": "must have passed"
        }
      ]
    },
    {
      "id": "modals-4",
      "title": "Modals - Test 4 (Expert)",
      "description": "Uzman düzey modal kullanımlarını test edin (ought to, needn’t, had better).",
      "questions": [
        {
          "id": "1",
          "question": "You ______ apologize for your mistake.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "2",
          "question": "We ______ have brought an umbrella; it’s not raining.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "3",
          "question": "You ______ check the oil before a long trip.",
          "options": ["had better", "must", "could", "might"],
          "correctAnswer": "had better"
        },
        {
          "id": "4",
          "question": "She ______ have called; I was waiting all day.",
          "options": ["ought to", "must", "could", "might"],
          "correctAnswer": "ought to"
        },
        {
          "id": "5",
          "question": "You ______ worry; everything is under control.",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        },
        {
          "id": "6",
          "question": "He ______ have told the truth; now he’s in trouble.",
          "options": ["should have", "must have", "could have", "might have"],
          "correctAnswer": "should have"
        },
        {
          "id": "7",
          "question": "You ______ touch that wire; it’s live!",
          "options": ["mustn’t", "needn’t", "couldn’t", "might not"],
          "correctAnswer": "mustn’t"
        },
        {
          "id": "8",
          "question": "We ______ leave now if we want to catch the train.",
          "options": ["had better", "ought to", "must", "could"],
          "correctAnswer": "had better"
        },
        {
          "id": "9",
          "question": "They ______ have arrived earlier; the traffic was terrible.",
          "options": ["couldn’t", "shouldn’t", "needn’t", "mustn’t"],
          "correctAnswer": "couldn’t"
        },
        {
          "id": "10",
          "question": "You ______ have paid; it was free!",
          "options": ["needn’t", "mustn’t", "shouldn’t", "couldn’t"],
          "correctAnswer": "needn’t"
        }
      ]
    },
    {
      "id": "modals-5",
      "title": "Modals - Test 5 (Master)",
      "description": "Karmaşık ve karışık modal kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ have been the one who took the keys; he wasn’t here.",
          "options": ["can’t", "must", "should", "might"],
          "correctAnswer": "can’t"
        },
        {
          "id": "2",
          "question": "You ______ have told me you were coming!",
          "options": ["might", "should", "could", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "3",
          "question": "The package ______ have been delivered by now.",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "4",
          "question": "I ______ rather stay home tonight.",
          "options": ["would", "could", "should", "might"],
          "correctAnswer": "would"
        },
        {
          "id": "5",
          "question": "She ______ as well quit if she hates the job.",
          "options": ["might", "could", "should", "must"],
          "correctAnswer": "might"
        },
        {
          "id": "6",
          "question": "You ______ have been more careful!",
          "options": ["should", "must", "could", "might"],
          "correctAnswer": "should"
        },
        {
          "id": "7",
          "question": "They ______ not have seen the sign; it was dark.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "8",
          "question": "He ______ have been lying; his story doesn’t add up.",
          "options": ["must", "should", "could", "might"],
          "correctAnswer": "must"
        },
        {
          "id": "9",
          "question": "We ______ have won if we had practiced more.",
          "options": ["could", "should", "must", "might"],
          "correctAnswer": "could"
        },
        {
          "id": "10",
          "question": "You ______ not have bothered; I already did it.",
          "options": ["need", "must", "should", "could"],
          "correctAnswer": "need"
        }
      ]
    }],
  },
  {
    id: 'present-simple-passive',
    title: 'Present Simple Passive (Şimdiki Zaman Pasif) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Present Simple Passive, İngilizcede genel gerçekleri, alışkanlıkları veya düzenli olarak yapılan eylemleri pasif formda ifade etmek için kullanılır.',
          'Pasif cümleler, öznenin eylemi değil, eylemin özneye yapıldığını vurgular.',
          'Cümle yapısı: Özne + am/is/are + fiil (past participle) + by + (etken özne - isteğe bağlı)',
        ],
      },
      {
        type: 'examples',
        title: 'Kullanım Örnekleri',
        items: [
          'Genel Gerçekler: English is spoken here. (Burada İngilizce konuşulur.)',
          'Alışkanlıklar: The mail is delivered every day. (Posta her gün teslim edilir.)',
          "Rutinler: Breakfast is eaten at 7 AM. (Kahvaltı sabah 7'de yenir.)",
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + am/is/are + fiil (past participle)',
          'Örnek: Books are read by students. (Öğrenciler tarafından kitaplar okunur.)',
          'Örnek: The cake is made by my mother. (Kek annem tarafından yapılır.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Cümle yapısı: Özne + am/is/are not + fiil (past participle)',
          "Örnek: This problem isn't solved by anyone. (Bu sorun kimse tarafından çözülmez.)",
          'Örnek: The window is not opened by him. (Pencere onun tarafından açılmaz.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Am/Is/Are + özne + fiil (past participle) + ?',
          'Örnek: Is English taught in your school? (Okulunuzda İngilizce öğretiliyor mu?)',
          'Örnek: Are the children taken to school by bus? (Çocuklar okula otobüsle götürülüyor mu?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Pasif cümlelerde, eylemi kimin yaptığı önemli değilse veya bilinmiyorsa, 'by + etken özne' kısmı kullanılmayabilir. Örneğin: The house is cleaned. (Ev temizlenir.)",
          "2. Fiillerin past participle hali (V3) kullanılır. Düzenli fiiller için bu '-ed' ekini alır, düzensiz fiiller için ise farklıdır.",
          '3. Pasif yapıyı kullanırken, öznenin durumunu veya eylemin sonucunu vurgulamak istersiniz.',
          '4. Present Simple Passive, genel doğrular, alışkanlıklar ve rutinler için kullanılır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. English is spoken here. (Burada İngilizce konuşulur.)',
          '2. The mail is delivered every day. (Posta her gün teslim edilir.)',
          "3. Breakfast is eaten at 7 AM. (Kahvaltı sabah 7'de yenir.)",
          '4. Is English taught in your school? (Okulunuzda İngilizce öğretiliyor mu?)',
          "5. This problem isn't solved by anyone. (Bu sorun kimse tarafından çözülmez.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Present Simple Passive, eylemin özne tarafından değil, özneye yapıldığını ifade etmek için kullanılır. Bu yapı, genel gerçekler, alışkanlıklar ve düzenli eylemler için idealdir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu yapıyı rahatlıkla kullanabilirsiniz!',
        ],
      },
    ],
    tests: [{
      "id": "passive-1",
      "title": "Passive Voice - Test 1 (Basic)",
      "description": "Temel düzey passive voice kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The book ______ by the students every year.",
          "options": ["reads", "is read", "read", "are read"],
          "correctAnswer": "is read"
        },
        {
          "id": "2",
          "question": "The letter ______ yesterday.",
          "options": ["sends", "sent", "was sent", "is sent"],
          "correctAnswer": "was sent"
        },
        {
          "id": "3",
          "question": "Coffee ______ in Brazil.",
          "options": ["grows", "is grown", "grew", "has grown"],
          "correctAnswer": "is grown"
        },
        {
          "id": "4",
          "question": "The car ______ by my father last week.",
          "options": ["fixed", "was fixed", "is fixed", "fixes"],
          "correctAnswer": "was fixed"
        },
        {
          "id": "5",
          "question": "English ______ all over the world.",
          "options": ["speaks", "is speaking", "is spoken", "spoken"],
          "correctAnswer": "is spoken"
        },
        {
          "id": "6",
          "question": "The cake ______ by Mary an hour ago.",
          "options": ["bakes", "baked", "was baked", "is baked"],
          "correctAnswer": "was baked"
        },
        {
          "id": "7",
          "question": "This room ______ every day.",
          "options": ["cleans", "is cleaned", "cleaned", "are cleaned"],
          "correctAnswer": "is cleaned"
        },
        {
          "id": "8",
          "question": "The keys ______ on the table.",
          "options": ["were left", "left", "are leave", "leaves"],
          "correctAnswer": "were left"
        },
        {
          "id": "9",
          "question": "The movie ______ by millions of people.",
          "options": ["watches", "is watched", "watched", "watching"],
          "correctAnswer": "is watched"
        },
        {
          "id": "10",
          "question": "The problem ______ by the teacher.",
          "options": ["solves", "solved", "was solved", "is solve"],
          "correctAnswer": "was solved"
        }
      ]
    },
    {
      "id": "passive-2",
      "title": "Passive Voice - Test 2 (Intermediate)",
      "description": "Orta düzey passive voice ve modal yapıları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The new bridge ______ next year.",
          "options": ["will build", "will be built", "is building", "built"],
          "correctAnswer": "will be built"
        },
        {
          "id": "2",
          "question": "The project ______ by tomorrow.",
          "options": ["must finish", "must be finished", "must finished", "must be finish"],
          "correctAnswer": "must be finished"
        },
        {
          "id": "3",
          "question": "The thief ______ by the police yesterday.",
          "options": ["was caught", "caught", "catches", "is caught"],
          "correctAnswer": "was caught"
        },
        {
          "id": "4",
          "question": "The homework ______ by the students.",
          "options": ["should do", "should be done", "should did", "should done"],
          "correctAnswer": "should be done"
        },
        {
          "id": "5",
          "question": "The message ______ yet.",
          "options": ["hasn't sent", "hasn't been sent", "hasn't send", "hasn't been send"],
          "correctAnswer": "hasn't been sent"
        },
        {
          "id": "6",
          "question": "The package ______ right now.",
          "options": ["is delivered", "is being delivered", "delivers", "delivered"],
          "correctAnswer": "is being delivered"
        },
        {
          "id": "7",
          "question": "The report ______ by the manager.",
          "options": ["must sign", "must be signed", "must signed", "must signing"],
          "correctAnswer": "must be signed"
        },
        {
          "id": "8",
          "question": "The mistake ______ by anyone.",
          "options": ["wasn't noticed", "wasn't notice", "didn't noticed", "not noticed"],
          "correctAnswer": "wasn't noticed"
        },
        {
          "id": "9",
          "question": "The concert ______ due to the rain.",
          "options": ["cancelled", "was cancelled", "is cancel", "cancels"],
          "correctAnswer": "was cancelled"
        },
        {
          "id": "10",
          "question": "The food ______ by the guests.",
          "options": ["is enjoying", "is enjoyed", "enjoys", "enjoyed"],
          "correctAnswer": "is enjoyed"
        }
      ]
    },
    {
      "id": "passive-3",
      "title": "Passive Voice - Test 3 (Advanced)",
      "description": "İleri düzey passive voice (perfect & continuous) kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The house ______ for years before it was sold.",
          "options": ["had been renovated", "renovated", "was renovating", "has renovated"],
          "correctAnswer": "had been renovated"
        },
        {
          "id": "2",
          "question": "The documents ______ when we arrived.",
          "options": ["were being signed", "signed", "are signing", "have signed"],
          "correctAnswer": "were being signed"
        },
        {
          "id": "3",
          "question": "The novel ______ into 20 languages so far.",
          "options": ["translated", "has been translated", "was translating", "translates"],
          "correctAnswer": "has been translated"
        },
        {
          "id": "4",
          "question": "The road ______ because of the snow.",
          "options": ["is closed", "has been closed", "closes", "closed"],
          "correctAnswer": "has been closed"
        },
        {
          "id": "5",
          "question": "The children ______ to the museum tomorrow.",
          "options": ["will be taken", "will take", "took", "are taking"],
          "correctAnswer": "will be taken"
        },
        {
          "id": "6",
          "question": "The cake ______ by the time we arrived.",
          "options": ["has been eaten", "had been eaten", "was eaten", "ate"],
          "correctAnswer": "had been eaten"
        },
        {
          "id": "7",
          "question": "The problem ______ right now.",
          "options": ["is being discussed", "discusses", "discussed", "has discussed"],
          "correctAnswer": "is being discussed"
        },
        {
          "id": "8",
          "question": "The movie ______ for an hour when the power went out.",
          "options": ["had been watched", "was watched", "has been watched", "watched"],
          "correctAnswer": "had been watched"
        },
        {
          "id": "9",
          "question": "The decision ______ by the committee next week.",
          "options": ["will announce", "will be announced", "announces", "is announced"],
          "correctAnswer": "will be announced"
        },
        {
          "id": "10",
          "question": "The car ______ by the mechanic when I called.",
          "options": ["was repaired", "was being repaired", "repaired", "has repaired"],
          "correctAnswer": "was being repaired"
        }
      ]
    },
    {
      "id": "passive-4",
      "title": "Passive Voice - Test 4 (Expert)",
      "description": "Karmaşık passive voice yapılarını ve istisnaları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ to attend the meeting.",
          "options": ["is supposed", "supposes", "supposed", "has supposed"],
          "correctAnswer": "is supposed"
        },
        {
          "id": "2",
          "question": "The story ______ to be true.",
          "options": ["believes", "is believed", "believed", "has believed"],
          "correctAnswer": "is believed"
        },
        {
          "id": "3",
          "question": "The president ______ to have resigned.",
          "options": ["reports", "is reported", "reported", "reporting"],
          "correctAnswer": "is reported"
        },
        {
          "id": "4",
          "question": "The thief ______ to be hiding in the forest.",
          "options": ["thinks", "is thought", "thought", "has thought"],
          "correctAnswer": "is thought"
        },
        {
          "id": "5",
          "question": "The old building ______ down last month.",
          "options": ["pulled", "was pulled", "pulls", "is pulled"],
          "correctAnswer": "was pulled"
        },
        {
          "id": "6",
          "question": "The results ______ until next week.",
          "options": ["won't announce", "won't be announced", "aren't announced", "don't announce"],
          "correctAnswer": "won't be announced"
        },
        {
          "id": "7",
          "question": "The song ______ by millions on social media.",
          "options": ["shared", "was shared", "is sharing", "shares"],
          "correctAnswer": "was shared"
        },
        {
          "id": "8",
          "question": "The patient ______ to a different hospital.",
          "options": ["has transferred", "has been transferred", "transferred", "is transfer"],
          "correctAnswer": "has been transferred"
        },
        {
          "id": "9",
          "question": "The prize ______ to the best participant.",
          "options": ["awards", "is awarded", "awarded", "has awarded"],
          "correctAnswer": "is awarded"
        },
        {
          "id": "10",
          "question": "The secret ______ for decades.",
          "options": ["kept", "has been kept", "was keeping", "keeps"],
          "correctAnswer": "has been kept"
        }
      ]
    }],
  },
  {
    id: 'past-simple-passive',
    title: 'Past Simple Passive (Geçmiş Zaman Pasif) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Past Simple Passive, İngilizcede geçmişte belirli bir zamanda gerçekleşmiş eylemleri pasif formda ifade etmek için kullanılır.',
          'Pasif cümleler, öznenin eylemi değil, eylemin özneye yapıldığını vurgular.',
          'Cümle yapısı: Özne + was/were + fiil (past participle) + by + (etken özne - isteğe bağlı)',
        ],
      },
      {
        type: 'examples',
        title: 'Kullanım Örnekleri',
        items: [
          'Geçmişte Tamamlanmış Eylemler: The cake was baked by my sister. (Kek kız kardeşim tarafından pişirildi.)',
          'Belirli Bir Zaman Diliminde Gerçekleşmiş Eylemler: The project was finished last week. (Proje geçen hafta tamamlandı.)',
          "Olumsuz Eylemler: The window wasn't opened by anyone. (Pencere kimse tarafından açılmadı.)",
          'Soru Cümlesi: Was the book read by you yesterday? (Kitap dün senin tarafından okundu mu?)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + was/were + fiil (past participle)',
          'Örnek: The cake was baked. (Kek pişirildi.)',
          'Örnek: They were invited to the party. (Onlar partiye davet edildi.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + was/were not (wasn't/weren't) + fiil (past participle)",
          "Örnek: The door wasn't locked by him. (Kapı onun tarafından kilitlenmedi.)",
          "Örnek: We weren't informed about the meeting. (Toplantı hakkında bilgilendirilmedik.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Was/Were + özne + fiil (past participle) + ?',
          'Örnek: Was the letter sent by you? (Mektup senin tarafından gönderildi mi?)',
          'Örnek: Were the dishes washed last night? (Tabaklar dün gece yıkandı mı?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Pasif cümlelerde, eylemi kimin yaptığı önemli değilse veya bilinmiyorsa, 'by + etken özne' kısmı kullanılmayabilir. Örneğin: The cake was baked. (Kek pişirildi.)",
          "2. Fiillerin past participle hali (V3) kullanılır. Düzenli fiiller için bu '-ed' ekini alır, düzensiz fiiller için ise farklıdır.",
          '3. Past Simple Passive, geçmişteki belirli bir zamanda veya dönemde gerçekleşen eylemleri anlatmak için kullanılır.',
          '4. Zaman ifadeleri (yesterday, last week) cümle içinde kullanılarak eylemin ne zaman gerçekleştiği belirtilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. The cake was baked by my sister. (Kek kız kardeşim tarafından pişirildi.)',
          '2. The project was finished last week. (Proje geçen hafta tamamlandı.)',
          "3. The window wasn't opened by anyone. (Pencere kimse tarafından açılmadı.)",
          '4. Was the book read by you yesterday? (Kitap dün senin tarafından okundu mu?)',
          '5. They were invited to the party. (Onlar partiye davet edildi.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Past Simple Passive, geçmişte tamamlanmış eylemleri pasif formda ifade etmek için kullanılır. Bu yapı, eylemin kimin tarafından yapıldığını önemsiz kılmak veya belirsiz bırakmak istediğinizde idealdir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu zamanı rahatlıkla kullanabilirsiniz!',
        ],
      },
    ],
    tests: [{
      "id": "passive-1",
      "title": "Passive Voice - Test 1 (Basic)",
      "description": "Temel düzey passive voice kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The book ______ by the students every year.",
          "options": ["reads", "is read", "read", "are read"],
          "correctAnswer": "is read"
        },
        {
          "id": "2",
          "question": "The letter ______ yesterday.",
          "options": ["sends", "sent", "was sent", "is sent"],
          "correctAnswer": "was sent"
        },
        {
          "id": "3",
          "question": "Coffee ______ in Brazil.",
          "options": ["grows", "is grown", "grew", "has grown"],
          "correctAnswer": "is grown"
        },
        {
          "id": "4",
          "question": "The car ______ by my father last week.",
          "options": ["fixed", "was fixed", "is fixed", "fixes"],
          "correctAnswer": "was fixed"
        },
        {
          "id": "5",
          "question": "English ______ all over the world.",
          "options": ["speaks", "is speaking", "is spoken", "spoken"],
          "correctAnswer": "is spoken"
        },
        {
          "id": "6",
          "question": "The cake ______ by Mary an hour ago.",
          "options": ["bakes", "baked", "was baked", "is baked"],
          "correctAnswer": "was baked"
        },
        {
          "id": "7",
          "question": "This room ______ every day.",
          "options": ["cleans", "is cleaned", "cleaned", "are cleaned"],
          "correctAnswer": "is cleaned"
        },
        {
          "id": "8",
          "question": "The keys ______ on the table.",
          "options": ["were left", "left", "are leave", "leaves"],
          "correctAnswer": "were left"
        },
        {
          "id": "9",
          "question": "The movie ______ by millions of people.",
          "options": ["watches", "is watched", "watched", "watching"],
          "correctAnswer": "is watched"
        },
        {
          "id": "10",
          "question": "The problem ______ by the teacher.",
          "options": ["solves", "solved", "was solved", "is solve"],
          "correctAnswer": "was solved"
        }
      ]
    },
    {
      "id": "passive-2",
      "title": "Passive Voice - Test 2 (Intermediate)",
      "description": "Orta düzey passive voice ve modal yapıları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The new bridge ______ next year.",
          "options": ["will build", "will be built", "is building", "built"],
          "correctAnswer": "will be built"
        },
        {
          "id": "2",
          "question": "The project ______ by tomorrow.",
          "options": ["must finish", "must be finished", "must finished", "must be finish"],
          "correctAnswer": "must be finished"
        },
        {
          "id": "3",
          "question": "The thief ______ by the police yesterday.",
          "options": ["was caught", "caught", "catches", "is caught"],
          "correctAnswer": "was caught"
        },
        {
          "id": "4",
          "question": "The homework ______ by the students.",
          "options": ["should do", "should be done", "should did", "should done"],
          "correctAnswer": "should be done"
        },
        {
          "id": "5",
          "question": "The message ______ yet.",
          "options": ["hasn't sent", "hasn't been sent", "hasn't send", "hasn't been send"],
          "correctAnswer": "hasn't been sent"
        },
        {
          "id": "6",
          "question": "The package ______ right now.",
          "options": ["is delivered", "is being delivered", "delivers", "delivered"],
          "correctAnswer": "is being delivered"
        },
        {
          "id": "7",
          "question": "The report ______ by the manager.",
          "options": ["must sign", "must be signed", "must signed", "must signing"],
          "correctAnswer": "must be signed"
        },
        {
          "id": "8",
          "question": "The mistake ______ by anyone.",
          "options": ["wasn't noticed", "wasn't notice", "didn't noticed", "not noticed"],
          "correctAnswer": "wasn't noticed"
        },
        {
          "id": "9",
          "question": "The concert ______ due to the rain.",
          "options": ["cancelled", "was cancelled", "is cancel", "cancels"],
          "correctAnswer": "was cancelled"
        },
        {
          "id": "10",
          "question": "The food ______ by the guests.",
          "options": ["is enjoying", "is enjoyed", "enjoys", "enjoyed"],
          "correctAnswer": "is enjoyed"
        }
      ]
    },
    {
      "id": "passive-3",
      "title": "Passive Voice - Test 3 (Advanced)",
      "description": "İleri düzey passive voice (perfect & continuous) kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The house ______ for years before it was sold.",
          "options": ["had been renovated", "renovated", "was renovating", "has renovated"],
          "correctAnswer": "had been renovated"
        },
        {
          "id": "2",
          "question": "The documents ______ when we arrived.",
          "options": ["were being signed", "signed", "are signing", "have signed"],
          "correctAnswer": "were being signed"
        },
        {
          "id": "3",
          "question": "The novel ______ into 20 languages so far.",
          "options": ["translated", "has been translated", "was translating", "translates"],
          "correctAnswer": "has been translated"
        },
        {
          "id": "4",
          "question": "The road ______ because of the snow.",
          "options": ["is closed", "has been closed", "closes", "closed"],
          "correctAnswer": "has been closed"
        },
        {
          "id": "5",
          "question": "The children ______ to the museum tomorrow.",
          "options": ["will be taken", "will take", "took", "are taking"],
          "correctAnswer": "will be taken"
        },
        {
          "id": "6",
          "question": "The cake ______ by the time we arrived.",
          "options": ["has been eaten", "had been eaten", "was eaten", "ate"],
          "correctAnswer": "had been eaten"
        },
        {
          "id": "7",
          "question": "The problem ______ right now.",
          "options": ["is being discussed", "discusses", "discussed", "has discussed"],
          "correctAnswer": "is being discussed"
        },
        {
          "id": "8",
          "question": "The movie ______ for an hour when the power went out.",
          "options": ["had been watched", "was watched", "has been watched", "watched"],
          "correctAnswer": "had been watched"
        },
        {
          "id": "9",
          "question": "The decision ______ by the committee next week.",
          "options": ["will announce", "will be announced", "announces", "is announced"],
          "correctAnswer": "will be announced"
        },
        {
          "id": "10",
          "question": "The car ______ by the mechanic when I called.",
          "options": ["was repaired", "was being repaired", "repaired", "has repaired"],
          "correctAnswer": "was being repaired"
        }
      ]
    },
    {
      "id": "passive-4",
      "title": "Passive Voice - Test 4 (Expert)",
      "description": "Karmaşık passive voice yapılarını ve istisnaları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ to attend the meeting.",
          "options": ["is supposed", "supposes", "supposed", "has supposed"],
          "correctAnswer": "is supposed"
        },
        {
          "id": "2",
          "question": "The story ______ to be true.",
          "options": ["believes", "is believed", "believed", "has believed"],
          "correctAnswer": "is believed"
        },
        {
          "id": "3",
          "question": "The president ______ to have resigned.",
          "options": ["reports", "is reported", "reported", "reporting"],
          "correctAnswer": "is reported"
        },
        {
          "id": "4",
          "question": "The thief ______ to be hiding in the forest.",
          "options": ["thinks", "is thought", "thought", "has thought"],
          "correctAnswer": "is thought"
        },
        {
          "id": "5",
          "question": "The old building ______ down last month.",
          "options": ["pulled", "was pulled", "pulls", "is pulled"],
          "correctAnswer": "was pulled"
        },
        {
          "id": "6",
          "question": "The results ______ until next week.",
          "options": ["won't announce", "won't be announced", "aren't announced", "don't announce"],
          "correctAnswer": "won't be announced"
        },
        {
          "id": "7",
          "question": "The song ______ by millions on social media.",
          "options": ["shared", "was shared", "is sharing", "shares"],
          "correctAnswer": "was shared"
        },
        {
          "id": "8",
          "question": "The patient ______ to a different hospital.",
          "options": ["has transferred", "has been transferred", "transferred", "is transfer"],
          "correctAnswer": "has been transferred"
        },
        {
          "id": "9",
          "question": "The prize ______ to the best participant.",
          "options": ["awards", "is awarded", "awarded", "has awarded"],
          "correctAnswer": "is awarded"
        },
        {
          "id": "10",
          "question": "The secret ______ for decades.",
          "options": ["kept", "has been kept", "was keeping", "keeps"],
          "correctAnswer": "has been kept"
        }
      ]
    }],
  },
  {
    id: 'future-simple-passive',
    title: 'Future Simple Passive (Gelecek Zaman Pasif) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Future Simple Passive, İngilizcede gelecekte yapılacak eylemleri pasif formda ifade etmek için kullanılır.',
          'Pasif cümleler, öznenin eylemi değil, eylemin özneye yapılacağını vurgular.',
          'Cümle yapısı: Özne + will be + fiil (past participle) + by + (etken özne - isteğe bağlı)',
        ],
      },
      {
        type: 'examples',
        title: 'Kullanım Örnekleri',
        items: [
          'Gelecekte Yapılacak Eylemler: The report will be finished by tomorrow. (Rapor yarına kadar tamamlanacak.)',
          'Bir Tahmin: The project will be completed next month. (Proje gelecek ay tamamlanacak.)',
          'Bir Öneri veya Teklif: The dinner will be cooked by me. (Akşam yemeği benim tarafımdan pişirilecek.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + will be + fiil (past participle)',
          'Örnek: The documents will be signed by the manager. (Belgeler müdür tarafından imzalanacak.)',
          'Örnek: The house will be cleaned. (Ev temizlenecek.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + will not be (won't be) + fiil (past participle)",
          "Örnek: The meeting won't be held tomorrow. (Toplantı yarın yapılmayacak.)",
          "Örnek: The book won't be read by everyone. (Kitap herkes tarafından okunmayacak.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Will + özne + be + fiil (past participle) + ?',
          'Örnek: Will the project be finished on time? (Proje zamanında tamamlanacak mı?)',
          'Örnek: Will the news be broadcast by the local channel? (Haberler yerel kanal tarafından yayınlanacak mı?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Pasif cümlelerde, eylemi kimin yapacağı önemli değilse veya bilinmiyorsa, 'by + etken özne' kısmı kullanılmayabilir. Örneğin: The report will be finished. (Rapor tamamlanacak.)",
          "2. Fiillerin past participle hali (V3) kullanılır. Düzenli fiiller için bu '-ed' ekini alır, düzensiz fiiller için ise farklıdır.",
          '3. Future Simple Passive, gelecekteki planlar, tahminler veya öneriler için kullanılır.',
          '4. Geleceği belirten zaman zarfları (tomorrow, next month) cümle içinde kullanılarak eylemin ne zaman gerçekleşeceği belirtilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. The report will be finished by tomorrow. (Rapor yarına kadar tamamlanacak.)',
          '2. The project will be completed next month. (Proje gelecek ay tamamlanacak.)',
          "3. The meeting won't be held tomorrow. (Toplantı yarın yapılmayacak.)",
          '4. Will the project be finished on time? (Proje zamanında tamamlanacak mı?)',
          '5. The dinner will be cooked by me. (Akşam yemeği benim tarafımdan pişirilecek.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Future Simple Passive, gelecekte gerçekleşecek eylemleri pasif formda ifade etmek için kullanılır. Bu yapı, eylemin kimin tarafından yapılacağının önemli olmadığı veya belirsiz olduğu durumlarda idealdir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu zamanı rahatlıkla kullanabilirsiniz!',
        ],
      },
    ],
    tests: [{
      "id": "passive-1",
      "title": "Passive Voice - Test 1 (Basic)",
      "description": "Temel düzey passive voice kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The book ______ by the students every year.",
          "options": ["reads", "is read", "read", "are read"],
          "correctAnswer": "is read"
        },
        {
          "id": "2",
          "question": "The letter ______ yesterday.",
          "options": ["sends", "sent", "was sent", "is sent"],
          "correctAnswer": "was sent"
        },
        {
          "id": "3",
          "question": "Coffee ______ in Brazil.",
          "options": ["grows", "is grown", "grew", "has grown"],
          "correctAnswer": "is grown"
        },
        {
          "id": "4",
          "question": "The car ______ by my father last week.",
          "options": ["fixed", "was fixed", "is fixed", "fixes"],
          "correctAnswer": "was fixed"
        },
        {
          "id": "5",
          "question": "English ______ all over the world.",
          "options": ["speaks", "is speaking", "is spoken", "spoken"],
          "correctAnswer": "is spoken"
        },
        {
          "id": "6",
          "question": "The cake ______ by Mary an hour ago.",
          "options": ["bakes", "baked", "was baked", "is baked"],
          "correctAnswer": "was baked"
        },
        {
          "id": "7",
          "question": "This room ______ every day.",
          "options": ["cleans", "is cleaned", "cleaned", "are cleaned"],
          "correctAnswer": "is cleaned"
        },
        {
          "id": "8",
          "question": "The keys ______ on the table.",
          "options": ["were left", "left", "are leave", "leaves"],
          "correctAnswer": "were left"
        },
        {
          "id": "9",
          "question": "The movie ______ by millions of people.",
          "options": ["watches", "is watched", "watched", "watching"],
          "correctAnswer": "is watched"
        },
        {
          "id": "10",
          "question": "The problem ______ by the teacher.",
          "options": ["solves", "solved", "was solved", "is solve"],
          "correctAnswer": "was solved"
        }
      ]
    },
    {
      "id": "passive-2",
      "title": "Passive Voice - Test 2 (Intermediate)",
      "description": "Orta düzey passive voice ve modal yapıları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The new bridge ______ next year.",
          "options": ["will build", "will be built", "is building", "built"],
          "correctAnswer": "will be built"
        },
        {
          "id": "2",
          "question": "The project ______ by tomorrow.",
          "options": ["must finish", "must be finished", "must finished", "must be finish"],
          "correctAnswer": "must be finished"
        },
        {
          "id": "3",
          "question": "The thief ______ by the police yesterday.",
          "options": ["was caught", "caught", "catches", "is caught"],
          "correctAnswer": "was caught"
        },
        {
          "id": "4",
          "question": "The homework ______ by the students.",
          "options": ["should do", "should be done", "should did", "should done"],
          "correctAnswer": "should be done"
        },
        {
          "id": "5",
          "question": "The message ______ yet.",
          "options": ["hasn't sent", "hasn't been sent", "hasn't send", "hasn't been send"],
          "correctAnswer": "hasn't been sent"
        },
        {
          "id": "6",
          "question": "The package ______ right now.",
          "options": ["is delivered", "is being delivered", "delivers", "delivered"],
          "correctAnswer": "is being delivered"
        },
        {
          "id": "7",
          "question": "The report ______ by the manager.",
          "options": ["must sign", "must be signed", "must signed", "must signing"],
          "correctAnswer": "must be signed"
        },
        {
          "id": "8",
          "question": "The mistake ______ by anyone.",
          "options": ["wasn't noticed", "wasn't notice", "didn't noticed", "not noticed"],
          "correctAnswer": "wasn't noticed"
        },
        {
          "id": "9",
          "question": "The concert ______ due to the rain.",
          "options": ["cancelled", "was cancelled", "is cancel", "cancels"],
          "correctAnswer": "was cancelled"
        },
        {
          "id": "10",
          "question": "The food ______ by the guests.",
          "options": ["is enjoying", "is enjoyed", "enjoys", "enjoyed"],
          "correctAnswer": "is enjoyed"
        }
      ]
    },
    {
      "id": "passive-3",
      "title": "Passive Voice - Test 3 (Advanced)",
      "description": "İleri düzey passive voice (perfect & continuous) kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The house ______ for years before it was sold.",
          "options": ["had been renovated", "renovated", "was renovating", "has renovated"],
          "correctAnswer": "had been renovated"
        },
        {
          "id": "2",
          "question": "The documents ______ when we arrived.",
          "options": ["were being signed", "signed", "are signing", "have signed"],
          "correctAnswer": "were being signed"
        },
        {
          "id": "3",
          "question": "The novel ______ into 20 languages so far.",
          "options": ["translated", "has been translated", "was translating", "translates"],
          "correctAnswer": "has been translated"
        },
        {
          "id": "4",
          "question": "The road ______ because of the snow.",
          "options": ["is closed", "has been closed", "closes", "closed"],
          "correctAnswer": "has been closed"
        },
        {
          "id": "5",
          "question": "The children ______ to the museum tomorrow.",
          "options": ["will be taken", "will take", "took", "are taking"],
          "correctAnswer": "will be taken"
        },
        {
          "id": "6",
          "question": "The cake ______ by the time we arrived.",
          "options": ["has been eaten", "had been eaten", "was eaten", "ate"],
          "correctAnswer": "had been eaten"
        },
        {
          "id": "7",
          "question": "The problem ______ right now.",
          "options": ["is being discussed", "discusses", "discussed", "has discussed"],
          "correctAnswer": "is being discussed"
        },
        {
          "id": "8",
          "question": "The movie ______ for an hour when the power went out.",
          "options": ["had been watched", "was watched", "has been watched", "watched"],
          "correctAnswer": "had been watched"
        },
        {
          "id": "9",
          "question": "The decision ______ by the committee next week.",
          "options": ["will announce", "will be announced", "announces", "is announced"],
          "correctAnswer": "will be announced"
        },
        {
          "id": "10",
          "question": "The car ______ by the mechanic when I called.",
          "options": ["was repaired", "was being repaired", "repaired", "has repaired"],
          "correctAnswer": "was being repaired"
        }
      ]
    },
    {
      "id": "passive-4",
      "title": "Passive Voice - Test 4 (Expert)",
      "description": "Karmaşık passive voice yapılarını ve istisnaları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ to attend the meeting.",
          "options": ["is supposed", "supposes", "supposed", "has supposed"],
          "correctAnswer": "is supposed"
        },
        {
          "id": "2",
          "question": "The story ______ to be true.",
          "options": ["believes", "is believed", "believed", "has believed"],
          "correctAnswer": "is believed"
        },
        {
          "id": "3",
          "question": "The president ______ to have resigned.",
          "options": ["reports", "is reported", "reported", "reporting"],
          "correctAnswer": "is reported"
        },
        {
          "id": "4",
          "question": "The thief ______ to be hiding in the forest.",
          "options": ["thinks", "is thought", "thought", "has thought"],
          "correctAnswer": "is thought"
        },
        {
          "id": "5",
          "question": "The old building ______ down last month.",
          "options": ["pulled", "was pulled", "pulls", "is pulled"],
          "correctAnswer": "was pulled"
        },
        {
          "id": "6",
          "question": "The results ______ until next week.",
          "options": ["won't announce", "won't be announced", "aren't announced", "don't announce"],
          "correctAnswer": "won't be announced"
        },
        {
          "id": "7",
          "question": "The song ______ by millions on social media.",
          "options": ["shared", "was shared", "is sharing", "shares"],
          "correctAnswer": "was shared"
        },
        {
          "id": "8",
          "question": "The patient ______ to a different hospital.",
          "options": ["has transferred", "has been transferred", "transferred", "is transfer"],
          "correctAnswer": "has been transferred"
        },
        {
          "id": "9",
          "question": "The prize ______ to the best participant.",
          "options": ["awards", "is awarded", "awarded", "has awarded"],
          "correctAnswer": "is awarded"
        },
        {
          "id": "10",
          "question": "The secret ______ for decades.",
          "options": ["kept", "has been kept", "was keeping", "keeps"],
          "correctAnswer": "has been kept"
        }
      ]
    }],
  },
  {
    id: 'present-perfect-passive',
    title: 'Present Perfect Passive (Yakın Geçmiş Zaman Pasif) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Present Perfect Passive, İngilizcede geçmişte başlayıp şimdiye kadar devam eden veya etkisi şu anda hala hissedilen eylemleri pasif formda ifade etmek için kullanılır.',
          'Pasif cümleler, öznenin eylemi değil, eylemin özneye yapıldığını vurgular.',
          'Cümle yapısı: Özne + have/has been + fiil (past participle) + by + (etken özne - isteğe bağlı)',
        ],
      },
      {
        type: 'examples',
        title: 'Kullanım Örnekleri',
        items: [
          'Yakın Zamanda Gerçekleşmiş Eylemler: The cake has been baked by my sister. (Kek kız kardeşim tarafından pişirilmiş.)',
          'Etkisi Devam Eden Olaylar: The road has been closed since last night. (Yol dün gece kapatılmış ve hala kapalı.)',
          'Bilinmeyen Zamanlı Geçmiş Olaylar: The window has been broken. (Pencere kırılmış.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has been + fiil (past participle)',
          'Örnek: The report has been finished. (Rapor bitirilmiş.)',
          'Örnek: They have been invited to the conference. (Konferansa davet edilmişler.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Cümle yapısı: Özne + have/has not been + fiil (past participle)',
          "Örnek: The proposal hasn't been accepted yet. (Teklif henüz kabul edilmemiş.)",
          "Örnek: We haven't been paid this month. (Bu ay maaşımız ödenmemiş.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Have/Has + özne + been + fiil (past participle) + ?',
          'Örnek: Has the cake been baked by your sister? (Kek kız kardeşin tarafından pişirilmiş mi?)',
          'Örnek: Have the tickets been sold out? (Biletler tükenmiş mi?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Pasif cümlelerde, eylemi kimin yaptığı önemli değilse veya bilinmiyorsa, 'by + etken özne' kısmı kullanılmayabilir. Örneğin: The cake has been baked. (Kek pişirilmiş.)",
          "2. Fiillerin past participle hali (V3) kullanılır. Düzenli fiiller için bu '-ed' ekini alır, düzensiz fiiller için ise farklıdır.",
          '3. Present Perfect Passive, eylemin ne zaman gerçekleştiğinden çok, etkisinin hala devam edip etmediğiyle ilgilenir.',
          '4. Zaman zarfları (just, already, yet) ile kullanılarak eylemin zamanı hakkında daha spesifik bilgi verilebilir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. The cake has been baked by my sister. (Kek kız kardeşim tarafından pişirilmiş.)',
          '2. The road has been closed since last night. (Yol dün gece kapatılmış ve hala kapalı.)',
          '3. The window has been broken. (Pencere kırılmış.)',
          '4. Has the cake been baked by your sister? (Kek kız kardeşin tarafından pişirilmiş mi?)',
          "5. The proposal hasn't been accepted yet. (Teklif henüz kabul edilmemiş.)",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Present Perfect Passive, geçmişte başlayıp şimdiye kadar devam eden veya etkisi hala devam eden eylemleri pasif formda ifade etmek için kullanılır. Bu yapı, eylemin kimin tarafından yapıldığını önemsiz kılmak veya bilinmeyenler için idealdir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu zamanı rahatlıkla kullanabilirsiniz!',
        ],
      },
    ],
    tests: [{
      "id": "passive-1",
      "title": "Passive Voice - Test 1 (Basic)",
      "description": "Temel düzey passive voice kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The book ______ by the students every year.",
          "options": ["reads", "is read", "read", "are read"],
          "correctAnswer": "is read"
        },
        {
          "id": "2",
          "question": "The letter ______ yesterday.",
          "options": ["sends", "sent", "was sent", "is sent"],
          "correctAnswer": "was sent"
        },
        {
          "id": "3",
          "question": "Coffee ______ in Brazil.",
          "options": ["grows", "is grown", "grew", "has grown"],
          "correctAnswer": "is grown"
        },
        {
          "id": "4",
          "question": "The car ______ by my father last week.",
          "options": ["fixed", "was fixed", "is fixed", "fixes"],
          "correctAnswer": "was fixed"
        },
        {
          "id": "5",
          "question": "English ______ all over the world.",
          "options": ["speaks", "is speaking", "is spoken", "spoken"],
          "correctAnswer": "is spoken"
        },
        {
          "id": "6",
          "question": "The cake ______ by Mary an hour ago.",
          "options": ["bakes", "baked", "was baked", "is baked"],
          "correctAnswer": "was baked"
        },
        {
          "id": "7",
          "question": "This room ______ every day.",
          "options": ["cleans", "is cleaned", "cleaned", "are cleaned"],
          "correctAnswer": "is cleaned"
        },
        {
          "id": "8",
          "question": "The keys ______ on the table.",
          "options": ["were left", "left", "are leave", "leaves"],
          "correctAnswer": "were left"
        },
        {
          "id": "9",
          "question": "The movie ______ by millions of people.",
          "options": ["watches", "is watched", "watched", "watching"],
          "correctAnswer": "is watched"
        },
        {
          "id": "10",
          "question": "The problem ______ by the teacher.",
          "options": ["solves", "solved", "was solved", "is solve"],
          "correctAnswer": "was solved"
        }
      ]
    },
    {
      "id": "passive-2",
      "title": "Passive Voice - Test 2 (Intermediate)",
      "description": "Orta düzey passive voice ve modal yapıları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The new bridge ______ next year.",
          "options": ["will build", "will be built", "is building", "built"],
          "correctAnswer": "will be built"
        },
        {
          "id": "2",
          "question": "The project ______ by tomorrow.",
          "options": ["must finish", "must be finished", "must finished", "must be finish"],
          "correctAnswer": "must be finished"
        },
        {
          "id": "3",
          "question": "The thief ______ by the police yesterday.",
          "options": ["was caught", "caught", "catches", "is caught"],
          "correctAnswer": "was caught"
        },
        {
          "id": "4",
          "question": "The homework ______ by the students.",
          "options": ["should do", "should be done", "should did", "should done"],
          "correctAnswer": "should be done"
        },
        {
          "id": "5",
          "question": "The message ______ yet.",
          "options": ["hasn't sent", "hasn't been sent", "hasn't send", "hasn't been send"],
          "correctAnswer": "hasn't been sent"
        },
        {
          "id": "6",
          "question": "The package ______ right now.",
          "options": ["is delivered", "is being delivered", "delivers", "delivered"],
          "correctAnswer": "is being delivered"
        },
        {
          "id": "7",
          "question": "The report ______ by the manager.",
          "options": ["must sign", "must be signed", "must signed", "must signing"],
          "correctAnswer": "must be signed"
        },
        {
          "id": "8",
          "question": "The mistake ______ by anyone.",
          "options": ["wasn't noticed", "wasn't notice", "didn't noticed", "not noticed"],
          "correctAnswer": "wasn't noticed"
        },
        {
          "id": "9",
          "question": "The concert ______ due to the rain.",
          "options": ["cancelled", "was cancelled", "is cancel", "cancels"],
          "correctAnswer": "was cancelled"
        },
        {
          "id": "10",
          "question": "The food ______ by the guests.",
          "options": ["is enjoying", "is enjoyed", "enjoys", "enjoyed"],
          "correctAnswer": "is enjoyed"
        }
      ]
    },
    {
      "id": "passive-3",
      "title": "Passive Voice - Test 3 (Advanced)",
      "description": "İleri düzey passive voice (perfect & continuous) kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The house ______ for years before it was sold.",
          "options": ["had been renovated", "renovated", "was renovating", "has renovated"],
          "correctAnswer": "had been renovated"
        },
        {
          "id": "2",
          "question": "The documents ______ when we arrived.",
          "options": ["were being signed", "signed", "are signing", "have signed"],
          "correctAnswer": "were being signed"
        },
        {
          "id": "3",
          "question": "The novel ______ into 20 languages so far.",
          "options": ["translated", "has been translated", "was translating", "translates"],
          "correctAnswer": "has been translated"
        },
        {
          "id": "4",
          "question": "The road ______ because of the snow.",
          "options": ["is closed", "has been closed", "closes", "closed"],
          "correctAnswer": "has been closed"
        },
        {
          "id": "5",
          "question": "The children ______ to the museum tomorrow.",
          "options": ["will be taken", "will take", "took", "are taking"],
          "correctAnswer": "will be taken"
        },
        {
          "id": "6",
          "question": "The cake ______ by the time we arrived.",
          "options": ["has been eaten", "had been eaten", "was eaten", "ate"],
          "correctAnswer": "had been eaten"
        },
        {
          "id": "7",
          "question": "The problem ______ right now.",
          "options": ["is being discussed", "discusses", "discussed", "has discussed"],
          "correctAnswer": "is being discussed"
        },
        {
          "id": "8",
          "question": "The movie ______ for an hour when the power went out.",
          "options": ["had been watched", "was watched", "has been watched", "watched"],
          "correctAnswer": "had been watched"
        },
        {
          "id": "9",
          "question": "The decision ______ by the committee next week.",
          "options": ["will announce", "will be announced", "announces", "is announced"],
          "correctAnswer": "will be announced"
        },
        {
          "id": "10",
          "question": "The car ______ by the mechanic when I called.",
          "options": ["was repaired", "was being repaired", "repaired", "has repaired"],
          "correctAnswer": "was being repaired"
        }
      ]
    },
    {
      "id": "passive-4",
      "title": "Passive Voice - Test 4 (Expert)",
      "description": "Karmaşık passive voice yapılarını ve istisnaları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ to attend the meeting.",
          "options": ["is supposed", "supposes", "supposed", "has supposed"],
          "correctAnswer": "is supposed"
        },
        {
          "id": "2",
          "question": "The story ______ to be true.",
          "options": ["believes", "is believed", "believed", "has believed"],
          "correctAnswer": "is believed"
        },
        {
          "id": "3",
          "question": "The president ______ to have resigned.",
          "options": ["reports", "is reported", "reported", "reporting"],
          "correctAnswer": "is reported"
        },
        {
          "id": "4",
          "question": "The thief ______ to be hiding in the forest.",
          "options": ["thinks", "is thought", "thought", "has thought"],
          "correctAnswer": "is thought"
        },
        {
          "id": "5",
          "question": "The old building ______ down last month.",
          "options": ["pulled", "was pulled", "pulls", "is pulled"],
          "correctAnswer": "was pulled"
        },
        {
          "id": "6",
          "question": "The results ______ until next week.",
          "options": ["won't announce", "won't be announced", "aren't announced", "don't announce"],
          "correctAnswer": "won't be announced"
        },
        {
          "id": "7",
          "question": "The song ______ by millions on social media.",
          "options": ["shared", "was shared", "is sharing", "shares"],
          "correctAnswer": "was shared"
        },
        {
          "id": "8",
          "question": "The patient ______ to a different hospital.",
          "options": ["has transferred", "has been transferred", "transferred", "is transfer"],
          "correctAnswer": "has been transferred"
        },
        {
          "id": "9",
          "question": "The prize ______ to the best participant.",
          "options": ["awards", "is awarded", "awarded", "has awarded"],
          "correctAnswer": "is awarded"
        },
        {
          "id": "10",
          "question": "The secret ______ for decades.",
          "options": ["kept", "has been kept", "was keeping", "keeps"],
          "correctAnswer": "has been kept"
        }
      ]
    }],
  },
  {
    id: 'past-perfect-passive',
    title: 'Past Perfect Passive (Geçmişte Mükemmel Pasif) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Past Perfect Passive, İngilizcede geçmişte belirli bir zamandan önce tamamlanmış eylemleri pasif formda ifade etmek için kullanılır.',
          'Pasif cümleler, öznenin eylemi değil, eylemin özneye yapıldığını vurgular.',
          'Cümle yapısı: Özne + had been + fiil (past participle) + by + (etken özne - isteğe bağlı)',
        ],
      },
      {
        type: 'examples',
        title: 'Kullanım Örnekleri',
        items: [
          'Geçmişteki Bir Olaydan Önce Tamamlanan Eylemler: The report had been finished by the time I arrived. (Ben geldiğimde rapor tamamlanmıştı.)',
          'Bir Olayın Diğerinden Önce Gerçekleşmesi: The cake had been baked before the guests arrived. (Misafirler gelmeden önce kek pişirilmişti.)',
          'Geçmişte Bir Süreç ve O Süreçten Önceki Bir Olay: The house had been cleaned before they moved in. (Onlar taşınmadan önce ev temizlenmişti.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + had been + fiil (past participle)',
          'Örnek: The email had been sent before the meeting started. (Toplantı başlamadan önce e-posta gönderilmişti.)',
          'Örnek: All the work had been done by the team. (Tüm işler takım tarafından yapılmıştı.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          "Cümle yapısı: Özne + had not been (hadn't been) + fiil (past participle)",
          "Örnek: The contract hadn't been signed when I left. (Ben ayrıldığımda sözleşme imzalanmamıştı.)",
          "Örnek: The windows hadn't been washed before the rain started. (Yağmur başlamadan önce pencereler yıkanmamıştı.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Had + özne + been + fiil (past participle) + ?',
          'Örnek: Had the report been finished before the deadline? (Rapor son tarihten önce tamamlanmış mıydı?)',
          'Örnek: Had the house been cleaned before they moved in? (Onlar taşınmadan önce ev temizlenmiş miydi?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Pasif cümlelerde, eylemi kimin yaptığı önemli değilse veya bilinmiyorsa, 'by + etken özne' kısmı kullanılmayabilir. Örneğin: The email had been sent. (E-posta gönderilmişti.)",
          "2. Fiillerin past participle hali (V3) kullanılır. Düzenli fiiller için bu '-ed' ekini alır, düzensiz fiiller için ise farklıdır.",
          '3. Past Perfect Passive, geçmişteki bir olaydan önce tamamlanmış eylemleri anlatır, bu yüzden genellikle zaman ifadeleri (before, by the time) ile kullanılır.',
          '4. Bu yapı, iki geçmiş olay arasında bir sıralama yapmak için kullanılır; bir olayın diğerinden önce tamamlandığını vurgular.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. The report had been finished by the time I arrived. (Ben geldiğimde rapor tamamlanmıştı.)',
          '2. The cake had been baked before the guests arrived. (Misafirler gelmeden önce kek pişirilmişti.)',
          "3. The contract hadn't been signed when I left. (Ben ayrıldığımda sözleşme imzalanmamıştı.)",
          '4. Had the report been finished before the deadline? (Rapor son tarihten önce tamamlanmış mıydı?)',
          '5. The house had been cleaned before they moved in. (Onlar taşınmadan önce ev temizlenmişti.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Past Perfect Passive, geçmişte belirli bir zamandan önce tamamlanmış eylemleri pasif formda ifade etmek için kullanılır. Bu yapı, olayların sıralamasını ve bir olayın diğerinden önce tamamlandığını belirtmek için idealdir. Yukarıdaki örnekleri inceleyerek ve pratik yaparak bu zamanı rahatlıkla kullanabilirsiniz!',
        ],
      },
    ],
    tests: [{
      "id": "passive-1",
      "title": "Passive Voice - Test 1 (Basic)",
      "description": "Temel düzey passive voice kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The book ______ by the students every year.",
          "options": ["reads", "is read", "read", "are read"],
          "correctAnswer": "is read"
        },
        {
          "id": "2",
          "question": "The letter ______ yesterday.",
          "options": ["sends", "sent", "was sent", "is sent"],
          "correctAnswer": "was sent"
        },
        {
          "id": "3",
          "question": "Coffee ______ in Brazil.",
          "options": ["grows", "is grown", "grew", "has grown"],
          "correctAnswer": "is grown"
        },
        {
          "id": "4",
          "question": "The car ______ by my father last week.",
          "options": ["fixed", "was fixed", "is fixed", "fixes"],
          "correctAnswer": "was fixed"
        },
        {
          "id": "5",
          "question": "English ______ all over the world.",
          "options": ["speaks", "is speaking", "is spoken", "spoken"],
          "correctAnswer": "is spoken"
        },
        {
          "id": "6",
          "question": "The cake ______ by Mary an hour ago.",
          "options": ["bakes", "baked", "was baked", "is baked"],
          "correctAnswer": "was baked"
        },
        {
          "id": "7",
          "question": "This room ______ every day.",
          "options": ["cleans", "is cleaned", "cleaned", "are cleaned"],
          "correctAnswer": "is cleaned"
        },
        {
          "id": "8",
          "question": "The keys ______ on the table.",
          "options": ["were left", "left", "are leave", "leaves"],
          "correctAnswer": "were left"
        },
        {
          "id": "9",
          "question": "The movie ______ by millions of people.",
          "options": ["watches", "is watched", "watched", "watching"],
          "correctAnswer": "is watched"
        },
        {
          "id": "10",
          "question": "The problem ______ by the teacher.",
          "options": ["solves", "solved", "was solved", "is solve"],
          "correctAnswer": "was solved"
        }
      ]
    },
    {
      "id": "passive-2",
      "title": "Passive Voice - Test 2 (Intermediate)",
      "description": "Orta düzey passive voice ve modal yapıları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The new bridge ______ next year.",
          "options": ["will build", "will be built", "is building", "built"],
          "correctAnswer": "will be built"
        },
        {
          "id": "2",
          "question": "The project ______ by tomorrow.",
          "options": ["must finish", "must be finished", "must finished", "must be finish"],
          "correctAnswer": "must be finished"
        },
        {
          "id": "3",
          "question": "The thief ______ by the police yesterday.",
          "options": ["was caught", "caught", "catches", "is caught"],
          "correctAnswer": "was caught"
        },
        {
          "id": "4",
          "question": "The homework ______ by the students.",
          "options": ["should do", "should be done", "should did", "should done"],
          "correctAnswer": "should be done"
        },
        {
          "id": "5",
          "question": "The message ______ yet.",
          "options": ["hasn't sent", "hasn't been sent", "hasn't send", "hasn't been send"],
          "correctAnswer": "hasn't been sent"
        },
        {
          "id": "6",
          "question": "The package ______ right now.",
          "options": ["is delivered", "is being delivered", "delivers", "delivered"],
          "correctAnswer": "is being delivered"
        },
        {
          "id": "7",
          "question": "The report ______ by the manager.",
          "options": ["must sign", "must be signed", "must signed", "must signing"],
          "correctAnswer": "must be signed"
        },
        {
          "id": "8",
          "question": "The mistake ______ by anyone.",
          "options": ["wasn't noticed", "wasn't notice", "didn't noticed", "not noticed"],
          "correctAnswer": "wasn't noticed"
        },
        {
          "id": "9",
          "question": "The concert ______ due to the rain.",
          "options": ["cancelled", "was cancelled", "is cancel", "cancels"],
          "correctAnswer": "was cancelled"
        },
        {
          "id": "10",
          "question": "The food ______ by the guests.",
          "options": ["is enjoying", "is enjoyed", "enjoys", "enjoyed"],
          "correctAnswer": "is enjoyed"
        }
      ]
    },
    {
      "id": "passive-3",
      "title": "Passive Voice - Test 3 (Advanced)",
      "description": "İleri düzey passive voice (perfect & continuous) kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The house ______ for years before it was sold.",
          "options": ["had been renovated", "renovated", "was renovating", "has renovated"],
          "correctAnswer": "had been renovated"
        },
        {
          "id": "2",
          "question": "The documents ______ when we arrived.",
          "options": ["were being signed", "signed", "are signing", "have signed"],
          "correctAnswer": "were being signed"
        },
        {
          "id": "3",
          "question": "The novel ______ into 20 languages so far.",
          "options": ["translated", "has been translated", "was translating", "translates"],
          "correctAnswer": "has been translated"
        },
        {
          "id": "4",
          "question": "The road ______ because of the snow.",
          "options": ["is closed", "has been closed", "closes", "closed"],
          "correctAnswer": "has been closed"
        },
        {
          "id": "5",
          "question": "The children ______ to the museum tomorrow.",
          "options": ["will be taken", "will take", "took", "are taking"],
          "correctAnswer": "will be taken"
        },
        {
          "id": "6",
          "question": "The cake ______ by the time we arrived.",
          "options": ["has been eaten", "had been eaten", "was eaten", "ate"],
          "correctAnswer": "had been eaten"
        },
        {
          "id": "7",
          "question": "The problem ______ right now.",
          "options": ["is being discussed", "discusses", "discussed", "has discussed"],
          "correctAnswer": "is being discussed"
        },
        {
          "id": "8",
          "question": "The movie ______ for an hour when the power went out.",
          "options": ["had been watched", "was watched", "has been watched", "watched"],
          "correctAnswer": "had been watched"
        },
        {
          "id": "9",
          "question": "The decision ______ by the committee next week.",
          "options": ["will announce", "will be announced", "announces", "is announced"],
          "correctAnswer": "will be announced"
        },
        {
          "id": "10",
          "question": "The car ______ by the mechanic when I called.",
          "options": ["was repaired", "was being repaired", "repaired", "has repaired"],
          "correctAnswer": "was being repaired"
        }
      ]
    },
    {
      "id": "passive-4",
      "title": "Passive Voice - Test 4 (Expert)",
      "description": "Karmaşık passive voice yapılarını ve istisnaları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ to attend the meeting.",
          "options": ["is supposed", "supposes", "supposed", "has supposed"],
          "correctAnswer": "is supposed"
        },
        {
          "id": "2",
          "question": "The story ______ to be true.",
          "options": ["believes", "is believed", "believed", "has believed"],
          "correctAnswer": "is believed"
        },
        {
          "id": "3",
          "question": "The president ______ to have resigned.",
          "options": ["reports", "is reported", "reported", "reporting"],
          "correctAnswer": "is reported"
        },
        {
          "id": "4",
          "question": "The thief ______ to be hiding in the forest.",
          "options": ["thinks", "is thought", "thought", "has thought"],
          "correctAnswer": "is thought"
        },
        {
          "id": "5",
          "question": "The old building ______ down last month.",
          "options": ["pulled", "was pulled", "pulls", "is pulled"],
          "correctAnswer": "was pulled"
        },
        {
          "id": "6",
          "question": "The results ______ until next week.",
          "options": ["won't announce", "won't be announced", "aren't announced", "don't announce"],
          "correctAnswer": "won't be announced"
        },
        {
          "id": "7",
          "question": "The song ______ by millions on social media.",
          "options": ["shared", "was shared", "is sharing", "shares"],
          "correctAnswer": "was shared"
        },
        {
          "id": "8",
          "question": "The patient ______ to a different hospital.",
          "options": ["has transferred", "has been transferred", "transferred", "is transfer"],
          "correctAnswer": "has been transferred"
        },
        {
          "id": "9",
          "question": "The prize ______ to the best participant.",
          "options": ["awards", "is awarded", "awarded", "has awarded"],
          "correctAnswer": "is awarded"
        },
        {
          "id": "10",
          "question": "The secret ______ for decades.",
          "options": ["kept", "has been kept", "was keeping", "keeps"],
          "correctAnswer": "has been kept"
        }
      ]
    }],
  },
  {
    id: 'modal-verbs-passive',
    title: 'Modal Verbs in Passive Voice (Pasif Yapıda Modal Fiiller) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Modal fiiller (can, could, may, might, must, should, would, shall, will) pasif yapıda kullanıldığında, eylemin yapılma olasılığı veya gerekliliğini ifade eder.',
          "Pasif yapıda, modal fiilden sonra 'be' ve fiilin past participle hali (V3) gelir.",
          'Cümle yapısı: Özne + modal fiil + be + fiil (past participle) + by + (etken özne - isteğe bağlı)',
        ],
      },
      {
        type: 'examples',
        title: 'Kullanım Örnekleri',
        items: [
          'Olasılık: The documents can be signed by anyone. (Belgeler herkes tarafından imzalanabilir.)',
          'İzin: This issue may be discussed later. (Bu konu daha sonra tartışılabilir.)',
          'Zorunluluk: The report must be finished by tomorrow. (Rapor yarına kadar bitirilmelidir.)',
          'Tavsiye: The problem should be solved immediately. (Sorun hemen çözülmelidir.)',
        ],
      },
      {
        type: 'notes',
        title: '1. Olumlu Cümleler',
        items: [
          'Cümle yapısı: Özne + modal fiil + be + fiil (past participle)',
          'Örnek: The cake can be baked tonight. (Kek bu gece pişirilebilir.)',
          'Örnek: The meeting might be postponed. (Toplantı ertelenebilir.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Olumsuz Cümleler',
        items: [
          'Cümle yapısı: Özne + modal fiil + not + be + fiil (past participle)',
          'Örnek: The letter cannot be sent today. (Mektup bugün gönderilemez.)',
          'Örnek: The window should not be opened. (Pencere açılmamalıdır.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Soru Cümleleri',
        items: [
          'Soru yapısı: Modal fiil + özne + be + fiil (past participle) + ?',
          'Örnek: Can the book be borrowed from the library? (Kitap kütüphaneden ödünç alınabilir mi?)',
          'Örnek: Should the report be completed by tomorrow? (Rapor yarına kadar tamamlanmalı mı?)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Pasif cümlelerde, eylemi kimin yaptığı önemli değilse veya bilinmiyorsa, 'by + etken özne' kısmı kullanılmayabilir. Örneğin: The project must be completed. (Proje tamamlanmalıdır.)",
          '2. Her modal fiilin anlamı pasif yapıda korunur; sadece yapının pasif haliyle ifade edilmesi gerekir.',
          '3. Modal fiillerin pasif yapıda kullanımı, eylemin olasılığını, iznini, zorunluluğunu veya tavsiyesini pasif formda ifade eder.',
          '4. Fiillerin past participle hali (V3) her zaman kullanılır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. The documents can be signed by anyone. (Belgeler herkes tarafından imzalanabilir.)',
          '2. This issue may be discussed later. (Bu konu daha sonra tartışılabilir.)',
          '3. The report must be finished by tomorrow. (Rapor yarına kadar bitirilmelidir.)',
          '4. The problem should be solved immediately. (Sorun hemen çözülmelidir.)',
          '5. Can the book be borrowed from the library? (Kitap kütüphaneden ödünç alınabilir mi?)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Modal fiillerin pasif yapıda kullanımı, eylemin olasılık, izin, zorunluluk veya tavsiye gibi farklı bağlamlarda pasif formda ifade edilmesini sağlar. Yukarıdaki örnekleri inceleyerek ve pratik yaparak, modal fiillerin pasif yapıda nasıl kullanılacağını öğrenebilirsiniz!',
        ],
      },
    ],
    tests: [{
      "id": "passive-1",
      "title": "Passive Voice - Test 1 (Basic)",
      "description": "Temel düzey passive voice kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The book ______ by the students every year.",
          "options": ["reads", "is read", "read", "are read"],
          "correctAnswer": "is read"
        },
        {
          "id": "2",
          "question": "The letter ______ yesterday.",
          "options": ["sends", "sent", "was sent", "is sent"],
          "correctAnswer": "was sent"
        },
        {
          "id": "3",
          "question": "Coffee ______ in Brazil.",
          "options": ["grows", "is grown", "grew", "has grown"],
          "correctAnswer": "is grown"
        },
        {
          "id": "4",
          "question": "The car ______ by my father last week.",
          "options": ["fixed", "was fixed", "is fixed", "fixes"],
          "correctAnswer": "was fixed"
        },
        {
          "id": "5",
          "question": "English ______ all over the world.",
          "options": ["speaks", "is speaking", "is spoken", "spoken"],
          "correctAnswer": "is spoken"
        },
        {
          "id": "6",
          "question": "The cake ______ by Mary an hour ago.",
          "options": ["bakes", "baked", "was baked", "is baked"],
          "correctAnswer": "was baked"
        },
        {
          "id": "7",
          "question": "This room ______ every day.",
          "options": ["cleans", "is cleaned", "cleaned", "are cleaned"],
          "correctAnswer": "is cleaned"
        },
        {
          "id": "8",
          "question": "The keys ______ on the table.",
          "options": ["were left", "left", "are leave", "leaves"],
          "correctAnswer": "were left"
        },
        {
          "id": "9",
          "question": "The movie ______ by millions of people.",
          "options": ["watches", "is watched", "watched", "watching"],
          "correctAnswer": "is watched"
        },
        {
          "id": "10",
          "question": "The problem ______ by the teacher.",
          "options": ["solves", "solved", "was solved", "is solve"],
          "correctAnswer": "was solved"
        }
      ]
    },
    {
      "id": "passive-2",
      "title": "Passive Voice - Test 2 (Intermediate)",
      "description": "Orta düzey passive voice ve modal yapıları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The new bridge ______ next year.",
          "options": ["will build", "will be built", "is building", "built"],
          "correctAnswer": "will be built"
        },
        {
          "id": "2",
          "question": "The project ______ by tomorrow.",
          "options": ["must finish", "must be finished", "must finished", "must be finish"],
          "correctAnswer": "must be finished"
        },
        {
          "id": "3",
          "question": "The thief ______ by the police yesterday.",
          "options": ["was caught", "caught", "catches", "is caught"],
          "correctAnswer": "was caught"
        },
        {
          "id": "4",
          "question": "The homework ______ by the students.",
          "options": ["should do", "should be done", "should did", "should done"],
          "correctAnswer": "should be done"
        },
        {
          "id": "5",
          "question": "The message ______ yet.",
          "options": ["hasn't sent", "hasn't been sent", "hasn't send", "hasn't been send"],
          "correctAnswer": "hasn't been sent"
        },
        {
          "id": "6",
          "question": "The package ______ right now.",
          "options": ["is delivered", "is being delivered", "delivers", "delivered"],
          "correctAnswer": "is being delivered"
        },
        {
          "id": "7",
          "question": "The report ______ by the manager.",
          "options": ["must sign", "must be signed", "must signed", "must signing"],
          "correctAnswer": "must be signed"
        },
        {
          "id": "8",
          "question": "The mistake ______ by anyone.",
          "options": ["wasn't noticed", "wasn't notice", "didn't noticed", "not noticed"],
          "correctAnswer": "wasn't noticed"
        },
        {
          "id": "9",
          "question": "The concert ______ due to the rain.",
          "options": ["cancelled", "was cancelled", "is cancel", "cancels"],
          "correctAnswer": "was cancelled"
        },
        {
          "id": "10",
          "question": "The food ______ by the guests.",
          "options": ["is enjoying", "is enjoyed", "enjoys", "enjoyed"],
          "correctAnswer": "is enjoyed"
        }
      ]
    },
    {
      "id": "passive-3",
      "title": "Passive Voice - Test 3 (Advanced)",
      "description": "İleri düzey passive voice (perfect & continuous) kullanımlarını test edin.",
      "questions": [
        {
          "id": "1",
          "question": "The house ______ for years before it was sold.",
          "options": ["had been renovated", "renovated", "was renovating", "has renovated"],
          "correctAnswer": "had been renovated"
        },
        {
          "id": "2",
          "question": "The documents ______ when we arrived.",
          "options": ["were being signed", "signed", "are signing", "have signed"],
          "correctAnswer": "were being signed"
        },
        {
          "id": "3",
          "question": "The novel ______ into 20 languages so far.",
          "options": ["translated", "has been translated", "was translating", "translates"],
          "correctAnswer": "has been translated"
        },
        {
          "id": "4",
          "question": "The road ______ because of the snow.",
          "options": ["is closed", "has been closed", "closes", "closed"],
          "correctAnswer": "has been closed"
        },
        {
          "id": "5",
          "question": "The children ______ to the museum tomorrow.",
          "options": ["will be taken", "will take", "took", "are taking"],
          "correctAnswer": "will be taken"
        },
        {
          "id": "6",
          "question": "The cake ______ by the time we arrived.",
          "options": ["has been eaten", "had been eaten", "was eaten", "ate"],
          "correctAnswer": "had been eaten"
        },
        {
          "id": "7",
          "question": "The problem ______ right now.",
          "options": ["is being discussed", "discusses", "discussed", "has discussed"],
          "correctAnswer": "is being discussed"
        },
        {
          "id": "8",
          "question": "The movie ______ for an hour when the power went out.",
          "options": ["had been watched", "was watched", "has been watched", "watched"],
          "correctAnswer": "had been watched"
        },
        {
          "id": "9",
          "question": "The decision ______ by the committee next week.",
          "options": ["will announce", "will be announced", "announces", "is announced"],
          "correctAnswer": "will be announced"
        },
        {
          "id": "10",
          "question": "The car ______ by the mechanic when I called.",
          "options": ["was repaired", "was being repaired", "repaired", "has repaired"],
          "correctAnswer": "was being repaired"
        }
      ]
    },
    {
      "id": "passive-4",
      "title": "Passive Voice - Test 4 (Expert)",
      "description": "Karmaşık passive voice yapılarını ve istisnaları test edin.",
      "questions": [
        {
          "id": "1",
          "question": "He ______ to attend the meeting.",
          "options": ["is supposed", "supposes", "supposed", "has supposed"],
          "correctAnswer": "is supposed"
        },
        {
          "id": "2",
          "question": "The story ______ to be true.",
          "options": ["believes", "is believed", "believed", "has believed"],
          "correctAnswer": "is believed"
        },
        {
          "id": "3",
          "question": "The president ______ to have resigned.",
          "options": ["reports", "is reported", "reported", "reporting"],
          "correctAnswer": "is reported"
        },
        {
          "id": "4",
          "question": "The thief ______ to be hiding in the forest.",
          "options": ["thinks", "is thought", "thought", "has thought"],
          "correctAnswer": "is thought"
        },
        {
          "id": "5",
          "question": "The old building ______ down last month.",
          "options": ["pulled", "was pulled", "pulls", "is pulled"],
          "correctAnswer": "was pulled"
        },
        {
          "id": "6",
          "question": "The results ______ until next week.",
          "options": ["won't announce", "won't be announced", "aren't announced", "don't announce"],
          "correctAnswer": "won't be announced"
        },
        {
          "id": "7",
          "question": "The song ______ by millions on social media.",
          "options": ["shared", "was shared", "is sharing", "shares"],
          "correctAnswer": "was shared"
        },
        {
          "id": "8",
          "question": "The patient ______ to a different hospital.",
          "options": ["has transferred", "has been transferred", "transferred", "is transfer"],
          "correctAnswer": "has been transferred"
        },
        {
          "id": "9",
          "question": "The prize ______ to the best participant.",
          "options": ["awards", "is awarded", "awarded", "has awarded"],
          "correctAnswer": "is awarded"
        },
        {
          "id": "10",
          "question": "The secret ______ for decades.",
          "options": ["kept", "has been kept", "was keeping", "keeps"],
          "correctAnswer": "has been kept"
        }
      ]
    }],
  },
  {
    id: 'if-clauses',
    title: 'If Clauses (Koşul Cümleleri) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          "İngilizcede 'if clauses' ya da koşul cümleleri, bir koşulun sonucunu ifade etmek için kullanılan cümle yapılarıdır.",
          'Bu yapılar, olayların gerçekleşme olasılığına göre farklı zamanlarda ve formlarda kullanılır.',
          "Genel olarak, iki bölümden oluşur: 'if clause' (koşul cümlesi) ve 'main clause' (ana cümle).",
        ],
      },
      {
        type: 'examples',
        title: 'Koşul Cümleleri Türleri',
        items: [
          'Zero Conditional (Genel Gerçekler)',
          'First Conditional (Mümkün Gelecek)',
          'Second Conditional (Hayali veya Olasılık Dışı Durumlar)',
          'Third Conditional (Geçmişte Olmayan Durumlar)',
          'Mixed Conditionals (Karışık Koşullar)',
        ],
      },
      {
        type: 'notes',
        title: 'Zero Conditional (Genel Gerçekler)',
        items: [
          'Kullanım: Genel gerçekler, bilimsel gerçekler veya her zaman doğru olan durumları ifade eder.',
          'Yapı: If + Present Simple, ... Present Simple',
          'Örnek: If you heat water, it boils. (Su ısıtırsan, kaynar.)',
        ],
      },
      {
        type: 'notes',
        title: 'First Conditional (Mümkün Gelecek)',
        items: [
          'Kullanım: Gelecekte gerçekleşme olasılığı olan durumları ifade eder.',
          'Yapı: If + Present Simple, ... will/can/may + infinitive',
          'Örnek: If it rains tomorrow, we will stay at home. (Yarın yağmur yağarsa, evde kalacağız.)',
        ],
      },
      {
        type: 'notes',
        title: 'Second Conditional (Hayali veya Olasılık Dışı Durumlar)',
        items: [
          'Kullanım: Mevcut durumla uyuşmayan, hayali veya olasılık dışı durumları ifade eder.',
          'Yapı: If + Past Simple, ... would/could/might + infinitive',
          'Örnek: If I were rich, I would travel around the world. (Zengin olsam, dünyayı gezerdim.)',
        ],
      },
      {
        type: 'notes',
        title: 'Third Conditional (Geçmişte Olmayan Durumlar)',
        items: [
          'Kullanım: Geçmişte gerçekleşmemiş durumları ve bu durumların olası sonuçlarını ifade eder.',
          'Yapı: If + Past Perfect, ... would/could/might have + past participle',
          'Örnek: If I had studied harder, I would have passed the exam. (Daha çok çalışmış olsaydım, sınavı geçerdim.)',
        ],
      },
      {
        type: 'notes',
        title: 'Mixed Conditionals (Karışık Koşullar)',
        items: [
          'Kullanım: Geçmiş ile şimdiki veya geleceği birleştiren durumları ifade eder.',
          'Yapılar: \n- If + Past Perfect, ... would/could/might + infinitive (Geçmişten şimdiki zamana)\n- If + Past Simple, ... would/could/might have + past participle (Şimdiki zamandan geçmişe)',
          'Örnekler: \n- If I had saved more money, I would be rich now. (Daha çok para biriktirmiş olsaydım, şimdi zengin olurdum.) - Geçmişten şimdiki zamana.\n- If I were taller, I could have played basketball professionally. (Daha uzun olsaydım, profesyonel olarak basketbol oynamış olabilirdim.) - Şimdiki zamandan geçmişe.',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          "1. Koşul cümlesi 'if' ile başlar ve genellikle virgülle ana cümleden ayrılır.",
          '2. Her koşul cümlesi türü, gerçekleşme olasılığına ve zaman dilimine göre farklı fiil zamanları kullanır.',
          "3. 'If' yerine bazen 'unless' (eğer ... değilse) kullanılabilir, ancak anlam tersine döner.",
          "4. Second ve Third Conditional yapılarda 'were' her zaman kullanılır; 'was' yerine.",
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. If you heat water, it boils. (Su ısıtırsan, kaynar.) - Zero Conditional',
          '2. If it rains tomorrow, we will stay at home. (Yarın yağmur yağarsa, evde kalacağız.) - First Conditional',
          '3. If I were rich, I would travel around the world. (Zengin olsam, dünyayı gezerdim.) - Second Conditional',
          '4. If I had studied harder, I would have passed the exam. (Daha çok çalışmış olsaydım, sınavı geçerdim.) - Third Conditional',
          '5. If I had saved more money, I would be rich now. (Daha çok para biriktirmiş olsaydım, şimdi zengin olurdum.) - Mixed Conditionals',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Koşul cümleleri, İngilizcede olayların gerçekleşme olasılığını ve sonuçlarını ifade etmek için kullanılan önemli yapılar. Yukarıdaki örnekleri ve yapıları inceleyerek, koşul cümlelerini doğru bir şekilde kullanmayı öğrenebilirsiniz!',
        ],
      },
    ],
    tests: [{
      "tests": [
        {
          "id": "if-clauses-1",
          "title": "If Clauses - Test 1 (Temel & Orta)",
          "description": "Temel ve orta düzey koşul cümlelerini test edin (Type 0, 1, 2).",
          "questions": [
            {
              "id": "1",
              "question": "If you heat water to 100°C, it ______.",
              "options": ["boil", "boils", "will boil", "would boil"],
              "correctAnswer": "boils"
            },
            {
              "id": "2",
              "question": "If it rains, we ______ the picnic.",
              "options": ["cancel", "cancels", "will cancel", "would cancel"],
              "correctAnswer": "will cancel"
            },
            {
              "id": "3",
              "question": "If I ______ you, I would apologize.",
              "options": ["am", "was", "were", "have been"],
              "correctAnswer": "were"
            },
            {
              "id": "4",
              "question": "She’ll pass the exam if she ______ hard.",
              "options": ["study", "studies", "studied", "will study"],
              "correctAnswer": "studies"
            },
            {
              "id": "5",
              "question": "If I had a million dollars, I ______ a house.",
              "options": ["buy", "bought", "will buy", "would buy"],
              "correctAnswer": "would buy"
            },
            {
              "id": "6",
              "question": "If you ______ ice, it melts.",
              "options": ["heat", "heated", "will heat", "would heat"],
              "correctAnswer": "heat"
            },
            {
              "id": "7",
              "question": "If he ______ late again, he’ll lose his job.",
              "options": ["arrive", "arrives", "arrived", "would arrive"],
              "correctAnswer": "arrives"
            },
            {
              "id": "8",
              "question": "If I ______ time, I would help you.",
              "options": ["have", "had", "will have", "would have"],
              "correctAnswer": "had"
            },
            {
              "id": "9",
              "question": "If you mix red and blue, you ______ purple.",
              "options": ["get", "gets", "got", "would get"],
              "correctAnswer": "get"
            },
            {
              "id": "10",
              "question": "If she ______ the bus, she’ll be late.",
              "options": ["miss", "misses", "missed", "would miss"],
              "correctAnswer": "misses"
            }
          ]
        },
        {
          "id": "if-clauses-2",
          "title": "If Clauses - Test 2 (İleri & Karmaşık)",
          "description": "İleri düzey koşul cümlelerini test edin (Type 3, Mixed Conditionals).",
          "questions": [
            {
              "id": "1",
              "question": "If she ______ harder, she would have passed.",
              "options": ["studied", "had studied", "has studied", "studies"],
              "correctAnswer": "had studied"
            },
            {
              "id": "2",
              "question": "If I ______ the train, I wouldn’t have been late.",
              "options": ["caught", "had caught", "catch", "would catch"],
              "correctAnswer": "had caught"
            },
            {
              "id": "3",
              "question": "If you ______ me, I would have helped you.",
              "options": ["asked", "had asked", "ask", "would ask"],
              "correctAnswer": "had asked"
            },
            {
              "id": "4",
              "question": "If I ______ you, I would have told the truth.",
              "options": ["am", "was", "were", "had been"],
              "correctAnswer": "were"
            },
            {
              "id": "5",
              "question": "If he ______ the instructions, he wouldn’t have failed.",
              "options": ["follows", "followed", "had followed", "would follow"],
              "correctAnswer": "had followed"
            },
            {
              "id": "6",
              "question": "If I were you, I ______ that job offer.",
              "options": ["accept", "accepted", "would accept", "would have accepted"],
              "correctAnswer": "would accept"
            },
            {
              "id": "7",
              "question": "If she hadn’t missed the flight, she ______ here now.",
              "options": ["is", "was", "would be", "would have been"],
              "correctAnswer": "would be"
            },
            {
              "id": "8",
              "question": "If they ______ the warning, the accident wouldn’t have happened.",
              "options": ["heed", "heeded", "had heeded", "would heed"],
              "correctAnswer": "had heeded"
            },
            {
              "id": "9",
              "question": "If I ______ the truth, I would never have trusted him.",
              "options": ["knew", "had known", "know", "would know"],
              "correctAnswer": "had known"
            },
            {
              "id": "10",
              "question": "If you hadn’t reminded me, I ______ the meeting.",
              "options": ["forget", "forgot", "would forget", "would have forgotten"],
              "correctAnswer": "would have forgotten"
            }
          ]
        }
      ]
    }],
  },
  {
    id: 'prepositions',
    title: 'Prepositions (Edatlar) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Prepositions (edatlar), İngilizcede isimler, zamirler veya fiillerle ilişki kurmak için kullanılan kelimelerdir.',
          'Edatlar, zaman, yer, yön, neden, araç ve yöntem gibi çeşitli ilişkileri ifade eder.',
          'En yaygın edatlar arasında in, on, at, by, with, for, from, to, of bulunur.',
        ],
      },
      {
        type: 'examples',
        title: 'Edat Türleri ve Kullanım Alanları',
        items: [
          'Zaman Edatları: in (yıl, ay, mevsim), on (gün, tarih), at (saat, tam zaman)',
          'Yer Edatları: in (içinde, şehirler, ülkeler), on (üstünde), at (nokta, adres)',
          'Yön Edatları: to (gideceği yer), from (çıktığı yer), into (içine)',
          'Araç ve Yöntem: by (araç ile), with (bir şey kullanarak)',
          'Neden ve Amacı İfade Eden Edatlar: for (için), because of (yüzünden)',
        ],
      },
      {
        type: 'notes',
        title: '1. Zaman Edatları',
        items: [
          "In: I will see you in December. (Seni Aralık'ta göreceğim.)",
          'On: We meet on Sunday. (Pazar günü buluşuyoruz.)',
          "At: The movie starts at 7 PM. (Film saat 7'de başlıyor.)",
        ],
      },
      {
        type: 'notes',
        title: '2. Yer Edatları',
        items: [
          "In: She lives in Ankara. (O Ankara'da yaşıyor.)",
          'On: The book is on the table. (Kitap masanın üzerinde.)',
          "At: I'll meet you at the station. (Seni istasyonda karşılayacağım.)",
        ],
      },
      {
        type: 'notes',
        title: '3. Yön Edatları',
        items: [
          'To: He is going to the market. (O pazara gidiyor.)',
          "From: I came from İstanbul. (İstanbul'dan geldim.)",
          'Into: She walked into the room. (O odaya girdi.)',
        ],
      },
      {
        type: 'notes',
        title: '4. Araç ve Yöntem Edatları',
        items: [
          'By: I travel by train. (Trenle seyahat ederim.)',
          'With: She writes with a pen. (O kalemle yazar.)',
        ],
      },
      {
        type: 'notes',
        title: '5. Neden ve Amaç Edatları',
        items: [
          'For: This gift is for you. (Bu hediye senin için.)',
          'Because of: The game was canceled because of the rain. (Oyun yağmur yüzünden iptal edildi.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Edatlarla ilgili kurallar bazen katı değildir; bağlam ve kullanım alışkanlıklarına göre değişebilir.',
          "2. 'In' ve 'on' edatlarının kullanımı, özellikle zaman ifadelerinde dikkat edilmesi gereken bir konudur. Genel olarak, daha büyük zaman dilimleri için 'in', belirli günler ve tarihler için 'on' kullanılır.",
          "3. 'At' genellikle tam zamanlar, noktalar veya spesifik yerler için kullanılır.",
          '4. Edatların öğrenilmesi pratik gerektirir; birçok edatın kullanımı dil hissiyle kavranır.',
          '5. İngilizcede, edatların ardından gelen isimler kesinlikle tekil olmalıdır ve herhangi bir makale veya zamir eklenmezse, bu isimler genellikle belirli olmayan tanımlıklardır.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          "1. I will see you in December. (Seni Aralık'ta göreceğim.)",
          '2. We meet on Sunday. (Pazar günü buluşuyoruz.)',
          "3. The movie starts at 7 PM. (Film saat 7'de başlıyor.)",
          "4. She lives in Ankara. (O Ankara'da yaşıyor.)",
          '5. He is going to the market. (O pazara gidiyor.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Edatlar, İngilizce cümleleri daha anlamlı ve bağlamsal olarak doğru hale getirmek için kullanılır. Birçok edatın kullanımı, dilin doğal akışı ve kural dışı örnekleriyle öğrenilir. Yukarıdaki örnekleri ve ipuçlarını kullanarak, edatların çeşitli kullanımlarını kavrayabilirsiniz!',
        ],
      },
    ],
    tests: [],
  },
  {
    id: 'prepositions-detailed',
    title: 'Prepositions (Edatlar) Detaylı Anlatım',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Prepositions (edatlar), İngilizcede isimler, zamirler veya fiillerle ilişki kurmak için kullanılan kelimelerdir.',
          'Edatlar, zaman, yer, yön ve hareket gibi çeşitli ilişkileri ifade eder. İşte bu ilişkilerin detaylı açıklamaları:',
        ],
      },
      {
        type: 'examples',
        title: 'Edat Türleri ve Kullanım Alanları',
        items: [
          'Time Prepositions (Zaman Edatları)',
          'Place Prepositions (Yer Edatları)',
          'Direction Prepositions (Yön Edatları)',
          'Prepositions of Movement (Hareket Edatları)',
        ],
      },
      {
        type: 'notes',
        title: 'Time Prepositions (Zaman Edatları)',
        items: [
          "In: Genel zaman dilimleri için kullanılır. Yıl, ay, mevsim, uzun süreler.\n- In December (Aralık'ta), in the morning (sabahleyin).",
          "On: Belirli günler, tarihler ve hafta günleri.\n- On Sunday (Pazar günü), on the 5th of June (Haziran'ın 5'inde).",
          "At: Tam zamanlar, saatler, belirli anlar.\n- At 5 PM (Saat 5'te), at night (gece).",
        ],
      },
      {
        type: 'notes',
        title: 'Place Prepositions (Yer Edatları)',
        items: [
          "In: Kapalı alanlar, şehirler, ülkeler, iç mekanlar.\n- In the room (odada), in Ankara (Ankara'da).",
          'On: Yüzeyler, üzerinde, sınırlar.\n- On the table (masanın üzerinde), on the border (sınırda).',
          'At: Belirli noktalar, adresler, küçük yerler.\n- At the station (istasyonunda), at school (okulda).',
        ],
      },
      {
        type: 'notes',
        title: 'Direction Prepositions (Yön Edatları)',
        items: [
          'To: Gidilen yer, hedef.\n- Going to the shop (mağazaya gitmek).',
          'Towards: Genel yön, yaklaşan hareket.\n- Walking towards the park (parka doğru yürümek).',
          'Into: Bir yerin içine girme.\n- Going into the house (eve girmek).',
        ],
      },
      {
        type: 'notes',
        title: 'Prepositions of Movement (Hareket Edatları)',
        items: [
          'Across: Bir yerden diğer tarafa geçmek.\n- Walk across the street (sokağı geçmek).',
          'Over: Üzerinden geçmek, bazen dikey olarak.\n- Jump over the fence (çit üzerinden atlamak).',
          'Through: İçinden geçmek, daha çok kapalı alanlar için.\n- Walk through the forest (ormanın içinden geçmek).',
          'Up: Yukarı doğru hareket.\n- Go up the stairs (merdivenlerden yukarı çıkmak).',
          'Down: Aşağı doğru hareket.\n- Go down the hill (tepeden aşağı inmek).',
          'Along: Bir yol boyunca hareket.\n- Walk along the river (nehir boyunca yürümek).',
          'Off: Üzerinden çıkmak, ayrılmak.\n- Get off the bus (otobüsten inmek).',
          'Out of: İçinden çıkmak.\n- Come out of the house (evden çıkmak).',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. Edatların kullanımı bağlama göre değişebilir; bu yüzden bağlam çok önemlidir.',
          '2. In, on, ve at gibi yer edatları, bazen zaman edatı olarak da kullanılabilir. Örneğin, in hem şehirler hem de aylar için kullanılır.',
          '3. Hareket edatları, fiziksel hareketi ifade ederken, yön edatları genellikle hedef veya yön belirtmek için kullanılır.',
          "4. İngilizce'de edatların kullanımı bazen mantıksal değildir ve öğrenme süreci pratik yapmayı gerektirir.",
          '5. Edatların ardından gelen isimler tekil olmalıdır ve genellikle belirli tanımlık almazlar.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. We meet in the park. (Parkta buluşuyoruz.) - Place Preposition',
          "2. I'll be there on Friday. (Cuma günü orada olacağım.) - Time Preposition",
          '3. The cat jumped into the box. (Kedi kutunun içine atladı.) - Direction Preposition',
          '4. He walked across the bridge. (Köprüyü geçti.) - Preposition of Movement',
          "5. She's arriving at 6 PM. (Saat 6'da geliyor.) - Time Preposition",
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Edatlar İngilizcede zaman, yer, yön ve hareket gibi ilişkileri kurmak için kullanılır. Her edatın spesifik kullanım alanları vardır ve dil öğrenme sürecinde edatların doğru kullanımı için bol pratik yapmak gerekir. Yukarıdaki örnekler ve ipuçları, edat kullanımını daha iyi anlamanıza yardımcı olabilir!',
        ],
      },
    ],
    tests: [],
  },

  {
    id: 'conjunctions',
    title: 'Conjunctions (Bağlaçlar) Nedir?',
    description: 'Daha fazlası için tıkla',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Conjunctions (bağlaçlar), İngilizcede cümlelerin veya cümle parçalarının bir araya getirilmesini sağlayan kelimeler veya kelime gruplarıdır.',
          'Bağlaçlar, farklı türlere ayrılır ve her biri farklı bir bağlama göre kullanılır.',
        ],
      },
      {
        type: 'examples',
        title: 'Bağlaç Türleri',
        items: [
          'Coordinating Conjunctions (Eşgüdümlü Bağlaçlar)',
          'Subordinating Conjunctions (Bağımlı Bağlaçlar)',
          'Correlative Conjunctions (İkilemli Bağlaçlar)',
        ],
      },
      {
        type: 'notes',
        title: '1. Coordinating Conjunctions (Eşgüdümlü Bağlaçlar)',
        items: [
          "Bu bağlaçlar, aynı önemdeki iki cümle veya cümle parçasını birbirine bağlar. En yaygın kullanılanlar and, but, or, nor, yet, so'dur.",
          'And: Ekleme yapar. - I like tea and coffee. (Çay ve kahve severim.)',
          "But: Zıtlığı ifade eder. - He is tall, but he can't reach the top shelf. (O uzun, ama üst rafa ulaşamaz.)",
          'Or: Seçenek sunar. - Would you like tea or coffee? (Çay mı istersin kahve mi?)',
          "Nor: Olumsuzluk ifade eder ve genellikle 'neither' ile birlikte kullanılır. - He didn't study, nor did he pass the exam. (Çalışmadı, sınavı da geçmedi.)",
          'Yet: Zıtlık veya beklenmedik durumları ifade eder. - She is rich, yet she lives simply. (Zengin, ama sade yaşar.)',
          'So: Sonuç belirtir. - It was raining, so we stayed inside. (Yağmur yağıyordu, bu yüzden içeride kaldık.)',
        ],
      },
      {
        type: 'notes',
        title: '2. Subordinating Conjunctions (Bağımlı Bağlaçlar)',
        items: [
          'Bu bağlaçlar, bir ana cümleye bağımlı olan yan cümleleri bağlar. Bağlaçlar, yan cümlenin anlamını belirler.',
          'Because: Nedeni belirtir. - She stayed home because she was sick. (Hastaydı, bu yüzden evde kaldı.)',
          'Although: Zıtlık içeren durumlar için. - Although it rained, we had a great time. (Yağmur yağmasına rağmen, harika vakit geçirdik.)',
          'If: Koşullu cümleler için. - If you study, you will pass the exam. (Çalışırsan, sınavı geçersin.)',
          'While: Eşzamanlılığı ifade eder. - While I was cooking, he was watching TV. (Ben yemek yaparken, o TV izliyordu.)',
          "Since: Zamansal veya nedensel ilişki kurar. - Since it's late, let's go home. (Geç olduğu için, eve gidelim.)",
          "Unless: Olumsuz koşul ifade eder. - I won't go unless you come with me. (Sen benimle gelmezsen gitmem.)",
          "After: Bir olayın diğerinden sonra gerçekleştiğini belirtir. - After we eat, we'll watch a movie. (Yemekten sonra film izleyeceğiz.)",
          'Before: Bir olayın diğerinden önce gerçekleştiğini belirtir. - Before you leave, turn off the lights. (Giderken ışıkları kapat.)',
          'When: Zaman belirtir. - When she arrived, we started the party. (O geldiğinde, parti başladı.)',
          'As: Eşzamanlılık veya neden belirtir. - As I was leaving, I saw her. (Ben ayrılırken onu gördüm.)',
        ],
      },
      {
        type: 'notes',
        title: '3. Correlative Conjunctions (İkilemli Bağlaçlar)',
        items: [
          'Bu bağlaçlar, genellikle çift olarak ve birlikte kullanılarak cümlelerde iki öğeyi bağlar.',
          'Either...or: Alternatif seçenek sunar. - You can either stay here or come with me. (Ya burada kalabilirsin ya da benimle gelebilirsin.)',
          'Neither...nor: Olumsuzluk ifade eder, ikisinin de olmadığını belirtir. - Neither John nor Mary could attend the party. (Ne John ne de Mary partiye katılamadı.)',
          'Both...and: İki şeyin birlikte olduğunu ifade eder. - Both the cat and the dog are sleeping. (Hem kedi hem köpek uyuyor.)',
          'Not only...but also: Hem...hem de anlamında kullanılır. - She can not only sing but also dance. (O, sadece şarkı söyleyebilir, aynı zamanda dans da edebilir.)',
          "Whether...or: Seçenek sunar, özellikle sorularda. - I don't know whether to laugh or cry. (Gülüp gülmeyeceğimi veya ağlayıp ağlamayacağımı bilmiyorum.)",
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları (Tips)',
        items: [
          '1. And, but ve or kullanılırken, cümlelerin arasına virgül koymak gerekebilir, özellikle cümleler uzunsa.',
          '2. Subordinating conjunctions ile başlayan yan cümleler, ana cümleden önce veya sonra gelebilir, ama ana cümleden önce gelirse virgülle ayrılır.',
          '3. Correlative conjunctions kullanırken, her iki bağlacın da aynı türde (isim, sıfat, zarf vb.) öğeleri bağladığından emin olun.',
          '4. Bağlaçların kullanımı, cümle yapısını belirler ve anlamı değiştirebilir; bu yüzden doğru bağlacı seçmek önemlidir.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. I like tea and coffee. (Çay ve kahve severim.) - Coordinating Conjunction',
          '2. She stayed home because she was sick. (Hastaydı, bu yüzden evde kaldı.) - Subordinating Conjunction',
          '3. You can either stay here or come with me. (Ya burada kalabilirsin ya da benimle gelebilirsin.) - Correlative Conjunction',
          '4. Although it rained, we had a great time. (Yağmur yağmasına rağmen, harika vakit geçirdik.) - Subordinating Conjunction',
          '5. Neither John nor Mary could attend the party. (Ne John ne de Mary partiye katılamadı.) - Correlative Conjunction',
          '6. He is rich, yet he lives simply. (Zengin, ama sade yaşar.) - Coordinating Conjunction',
          "7. Since it's late, let's go home. (Geç olduğu için, eve gidelim.) - Subordinating Conjunction",
          '8. Both the cat and the dog are sleeping. (Hem kedi hem köpek uyuyor.) - Correlative Conjunction',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          'Bağlaçlar, İngilizce cümlelerin doğru ve anlamlı bir şekilde birleştirilmesi için kullanılır. Her bağlaç türü, farklı bir bağlama göre kullanılır ve cümlelerin anlamını derinleştirir veya değiştirir. Yukarıdaki örnekleri ve ipuçlarını dikkate alarak, bağlaçların kullanımını öğrenebilirsiniz!',
        ],
      },
    ],
    tests: [],
  },
  {
    id: 'reported_speech',
    title: 'Dolaylı Anlatım (Reported Speech)',
    description:
      'Doğrudan ve dolaylı anlatım, zaman değişiklikleri, soru, emir ve isteklerin aktarımı',
    content: [
      {
        type: 'usage',
        title: 'Anlatım',
        items: [
          'Dolaylı Anlatım (Reported Speech), bir kişinin söylediği veya düşündüğü şeyleri, doğrudan alıntı yapmadan, kendi cümlelerimizle aktarmaktır.',
          'Bu, Doğrudan Anlatım (Direct Speech) ile karşılaştırıldığında, orijinal ifadeyi tırnak işaretleri olmadan ve genellikle zaman ve zamir değişiklikleri yaparak ifade etmeyi içerir.',
          'Örneğin: Doğrudan Anlatım: "I am going to the market," she said. Dolaylı Anlatım: She said that she was going to the market.',
        ],
      },
      {
        type: 'examples',
        title: 'Doğrudan ve Dolaylı Anlatım',
        items: [
          'Doğrudan Anlatım:',
          '- John: "I will finish my work tomorrow."',
          'Dolaylı Anlatım:',
          '- John said that he would finish his work the next day.',
          'Doğrudan Anlatım:',
          '- Mary: "I have seen that movie."',
          'Dolaylı Anlatım:',
          '- Mary said that she had seen that movie.',
        ],
      },
      {
        type: 'notes',
        title: 'Zaman Değişiklikleri (Tense Changes) ve Diğer Değişiklikler',
        items: [
          'Dolaylı anlatıma geçerken, genellikle zamanlarda bir geri çekilme (backshift) olur:',
          '- Present Simple → Past Simple: "I eat" → He said he ate.',
          '- Present Continuous → Past Continuous: "I am eating" → He said he was eating.',
          '- Present Perfect → Past Perfect: "I have eaten" → He said he had eaten.',
          '- Past Simple → Past Perfect: "I ate" → He said he had eaten.',
          'Ayrıca, zaman zarfları ve zamirlerde de değişiklikler yapılır:',
          '- now → then',
          '- today → that day',
          '- tomorrow → the next day',
          '- yesterday → the day before',
          '- I → he/she',
          '- my → his/her',
        ],
      },
      {
        type: 'notes',
        title: 'Soru Cümlelerinin Aktarımı (Reporting Questions)',
        items: [
          'Evet/Hayır soruları aktarılırken if veya whether kullanılır:',
          '- Doğrudan: "Are you coming?" he asked.',
          '- Dolaylı: He asked if I was coming.',
          'Wh- soruları aktarılırken soru kelimesi korunur:',
          '- Doğrudan: "Where are you going?" she asked.',
          '- Dolaylı: She asked where I was going.',
          'Not: Dolaylı sorularda cümle yapısı düz cümle formundadır; yardımcı fiil ve özne yer değiştirir.',
        ],
      },
      {
        type: 'notes',
        title: 'Emir ve İsteklerin Aktarımı (Reporting Commands and Requests)',
        items: [
          'Emirler ve istekler aktarılırken to + fiilin temel hali kullanılır:',
          '- Doğrudan: "Close the door," he said.',
          '- Dolaylı: He told me to close the door.',
          'Olumsuz emirlerde not to kullanılır:',
          '- Doğrudan: "Don\'t speak loudly," she said.',
          ' Dolaylı: She asked me not to speak loudly.',
          'Kullanılan yaygın fiiller: tell, ask, order, command, beg.',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları',
        items: [
          '1. Zaman Değişiklikleri: Eğer ana cümledeki fiil geçmiş zamandaysa, dolaylı anlatıma geçerken zamanları bir derece geçmişe çekin.',
          '2. Zamir Değişiklikleri: Konuşmacının ve dinleyicinin kim olduğuna bağlı olarak zamirleri değiştirin.',
          '3. Zaman Zarfları: Orijinal cümledeki zaman ifadelerini uygun şekilde güncelleyin.',
          '4. Soru Cümleleri: Dolaylı sorularda cümle yapısını düz cümle formuna getirin ve soru işaretini kaldırın.',
          '5. Emir ve İstekler: to + fiilin temel hali yapısını kullanarak emir ve istekleri aktarın.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. Doğrudan: "I am learning English," she said.',
          '   Dolaylı: She said that she was learning English.',
          '   Türkçe: O, İngilizce öğrendiğini söyledi.',
          '2. Doğrudan: "We have finished our homework," they said.',
          '   Dolaylı: They said that they had finished their homework.',
          '   Türkçe: Onlar, ödevlerini bitirdiklerini söylediler.',
          '3. Doğrudan: "Will you come to the party?" he asked.',
          '   Dolaylı: He asked if I would come to the party.',
          '   Türkçe: O, benim partiye gelip gelmeyeceğimi sordu.',
          '4. Doğrudan: "Where did you buy this book?" she asked.',
          '   Dolaylı: She asked where I had bought that book.',
          '   Türkçe: O, bu kitabı nereden aldığımı sordu.',
          '5. Doğrudan: "Please open the window," he said.',
          '   Dolaylı: He asked me to open the window.',
          '   Türkçe: O, penceriyi açmamı rica etti.',
        ],
      },
    ],
    tests: [],
  },
  {
    id: 'gerunds_and_infinitives',
    title: 'Gerunds ve Infinitives (Fiilimsiler)',
    description:
      "Gerund'ların ve infinitive'lerin kullanımı, gerund'ların özne ve nesne olarak kullanımı, 'to' ile ve 'to' olmadan kullanılan infinitive'ler, ve gerund veya infinitive ile takip edilen fiiller",
    content: [
      {
        type: 'usage',
        title: 'Gerund ve Infinitive Nedir?',
        items: [
          "Gerund: Fiilin '-ing' takısı almış hali olup, cümlede isim (noun) olarak kullanılır. Örneğin, 'swimming' kelimesi 'swim' fiilinin gerund halidir.",
          "Infinitive: Fiilin 'to' ile birlikte kullanılan temel (yalın) halidir. Örneğin, 'to swim' bir infinitive'dir.",
        ],
      },
      {
        type: 'examples',
        title: "Gerund'ların Özne ve Nesne Olarak Kullanımı",
        items: [
          'Özne Olarak:',
          '- Swimming is good for your health. (Yüzme sağlığınız için iyidir.)',
          '- Reading helps you learn new things. (Okuma, yeni şeyler öğrenmenize yardımcı olur.)',
          'Nesne Olarak:',
          '- She enjoys dancing. (O, dans etmekten hoşlanır.)',
          '- They discussed going to the new restaurant. (Onlar, yeni restorana gitmeyi tartıştılar.)',
        ],
      },
      {
        type: 'notes',
        title: "Infinitive'lerin 'to' ile ve 'to' olmadan Kullanımı",
        items: [
          "'To' ile Kullanılan Infinitive'ler:",
          '- I want to eat dinner now. (Şimdi akşam yemeği yemek istiyorum.)',
          '- They decided to go to the concert. (Onlar, konsere gitmeye karar verdiler.)',
          "'To' Olmadan Kullanılan Infinitive'ler:",
          '- Let her speak. (Bırakın o konuşsun.)',
          '- We must finish our work. (İşimizi bitirmeliyiz.)',
          "Not: 'Let', 'make', 'help', 'hear', 'see', 'feel' gibi fiillerden sonra ve 'modals' (can, must, should, vb.) ile birlikte kullanılan infinitive'ler 'to' olmadan kullanılır.",
        ],
      },
      {
        type: 'notes',
        title: 'Gerund veya Infinitive ile Takip Edilen Fiiller',
        items: [
          'Bazı fiiller sadece gerund ile, bazıları sadece infinitive ile, bazıları ise her ikisiyle de (anlam değişikliği olmadan veya anlam değişikliği ile) kullanılabilir.',
          'Sadece Gerund ile Kullanılan Fiiller:',
          '- enjoy: She enjoys reading books. (O, kitap okumaktan hoşlanır.)',
          '- avoid: They avoid eating late at night. (Onlar, gece geç saatte yemek yemekten kaçınırlar.)',
          'Sadece Infinitive ile Kullanılan Fiiller:',
          '- hope: I hope to see you soon. (Umarım seni yakında görürüm.)',
          '- plan: We plan to travel next summer. (Gelecek yaz seyahat etmeyi planlıyoruz.)',
          'Her İkisiyle de Kullanılan Fiiller (Anlam Değişikliği Olmadan):',
          '- begin: He began working/to work at the company last year. (O, geçen yıl şirkette çalışmaya başladı.)',
          '- start: They started learning/to learn Spanish. (Onlar, İspanyolca öğrenmeye başladılar.)',
          'Her İkisiyle de Kullanılan Fiiller (Anlam Değişikliği ile):',
          '- remember: I remember locking the door. (Kapıyı kilitlediğimi hatırlıyorum.) / Remember to lock the door. (Kapıyı kilitlemeyi unutma.)',
          '- stop: She stopped smoking. (O, sigara içmeyi bıraktı.) / She stopped to smoke. (O, sigara içmek için durdu.)',
        ],
      },
      {
        type: 'tips',
        title: 'İpuçları',
        items: [
          '1. Ezberleme: Hangi fiillerin gerund, hangilerinin infinitive ile kullanıldığını ezberlemek faydalı olacaktır.',
          '2. Anlam Değişiklikleri: Bazı fiillerin gerund veya infinitive ile kullanıldığında anlamlarının değişebileceğini unutmayın.',
          '3. Pratik: Gerund ve infinitive kullanımlarını pekiştirmek için bol bol pratik yapın.',
        ],
      },
      {
        type: 'keyRules',
        title: 'Örnek Cümleler ve Türkçe Çevirileri',
        items: [
          '1. Gerund Özne Olarak:',
          '   - Running is a good way to stay fit. (Koşmak formda kalmanın iyi bir yoludur.)',
          '2. Gerund Nesne Olarak:',
          '   - They enjoy playing chess. (Onlar satranç oynamaktan hoşlanırlar.)',
          "3. Infinitive 'to' ile:",
          '   - She wants to learn French. (O, Fransızca öğrenmek istiyor.)',
          "4. Infinitive 'to' olmadan:",
          '   - I can swim very well. (Çok iyi yüzebilirim.)',
          '5. Anlam Değişikliği Olan Fiil:',
          '   - He forgot meeting her before. (Onunla daha önce tanıştığını unuttu.)',
          '   - He forgot to meet her. (Onunla buluşmayı unuttu.)',
        ],
      },
      {
        type: 'tips',
        title: 'Sonuç',
        items: [
          "Gerund'lar ve infinitive'ler, İngilizce'de fiilimsilerin kullanımını anlamak için önemlidir. Farklı fiillerin hangi yapılarla kullanıldığını öğrenmek ve bu kullanımları pratikle pekiştirmek, dil becerilerinizi geliştirmenize yardımcı olacaktır.",
        ],
      },
    ],
    tests: [],
  },

  // grammarTopics nesnesi kapatıldı
];
