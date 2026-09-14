import { Course, Feature, FaqItem, ContactInfo } from '../types';

export const MADRASA_INFO: ContactInfo = {
  nameUrdu: 'مدرسہ کنز العلم ایجوکیشن سسٹم',
  nameEnglish: 'Madarsa Kanz-ul-Ilm Islamic Education System',
  principalUrdu: 'قاری عبدالباسط حسین',
  teacherTitleUrdu: 'خادم القرآن قاری عبدالباسط حسین (پرنسپل و نگرانِ اعلیٰ)',
  addressUrdu: 'گلی نمبر 29، زکریا ٹاؤن، بوسن روڈ، ملتان',
  addressEnglish: 'Street # 29, Zakariya Town, Bosan Road, Multan',
  phone1: '0302-1758350',
  phone2: '0329-2521377',
  whatsappFormatted1: '923021758350',
  whatsappFormatted2: '923292521377',
  googleMapsQuery: 'Bosan+Road+Multan+Street+29',
  timings: 'صبح 7:00 بجے تا شام 7:00 بجے (داخلہ اوپن)',
};

export const COURSES: Course[] = [
  {
    id: 'hifz-quran',
    titleUrdu: 'حفظ القرآن الکریم',
    titleEnglish: 'Hifz-ul-Quran (2-Year Fast Track)',
    badge: 'خصوصی پیشکش - صرف 2 سال',
    duration: '2 سال',
    iconName: 'BookOpenCheck',
    descriptionUrdu: 'منظم سائنسی طریقہ تدریس کے تحت صرف 2 سال میں حفظ قرآن مکمل کروائیں۔ روزانہ سبق، سبقی اور منزل کا سخت جائزہ۔',
    highlights: [
      'صرف 2 سال میں مکمل حفظ کا مصدقہ ٹریک',
      'روزانہ حفظ کی نگرانی اور ماہانہ رپورٹ',
      'پختہ یاداشت اور حفظ منزل کا خاص اہتمام'
    ],
    category: 'quran'
  },
  {
    id: 'tajweed-quran',
    titleUrdu: 'تجوید القرآن و قراءت',
    titleEnglish: 'Tajweed-ul-Quran & Qirat',
    badge: 'مستند لہجہ',
    duration: 'مستقل تربیت',
    iconName: 'Sparkles',
    descriptionUrdu: 'عربی مخارج، صفاتِ حروف اور تجوید کے مستند اصولوں کے عین مطابق تلاوتِ قرآن کی مشق۔',
    highlights: [
      'حروف کے درست مخارج کی انفرادی مشق',
      'عربی قراءت کے خوش الحان اسالیب',
      'حسنِ صوت اور تلاوت کی خصوصی کلاسز'
    ],
    category: 'quran'
  },
  {
    id: 'khitabat',
    titleUrdu: 'فنِ خطابت و بیان',
    titleEnglish: 'Art of Khitabat (Islamic Oratory)',
    badge: 'قیادت و اعتماد',
    duration: 'ہفتہ وار تربیت',
    iconName: 'Mic',
    descriptionUrdu: 'طلباء میں اسٹیج پر اعتماد کے ساتھ اظہارِ خیال، خطبہ اور دینی بیانات پیش کرنے کی مکمل عملی تربیت۔',
    highlights: [
      'طلباء کو بہترین قاری کے ساتھ بہترین خطیب بنانا',
      'اسٹیج فیئر ختم کرنا اور پراعتماد گفتگو',
      'ہفتہ وار بزمِ ادب اور تقریری مقابلے'
    ],
    category: 'skills'
  },
  {
    id: 'asri-taleem',
    titleUrdu: 'عصری و جدید تعلیم',
    titleEnglish: 'Contemporary School Academics',
    badge: 'دین + دنیا',
    duration: 'روزانہ',
    iconName: 'GraduationCap',
    descriptionUrdu: 'حفظ کے ساتھ ساتھ اسکول کے مضامین (انگریزی، ریاضی، سائنس، اردو) کی ماہر اساتذہ کے زیرِ نگرانی معیاری تعلیم۔',
    highlights: [
      'حفظ کے دوران اسکول کی پڑھائی کا حرج نہیں ہوتا',
      'انگریزی بول چال اور ریاضی پر خصوصی توجہ',
      'اسکول امتحانات کی باقاعدہ تیاری'
    ],
    category: 'modern'
  },
  {
    id: 'arabic-speaking',
    titleUrdu: 'عربی لہجہ و تجویدی مشق',
    titleEnglish: 'Arabic Language & Accent Mastery',
    badge: 'مستند عربی',
    duration: 'ماہانہ تربیتی سیشن',
    iconName: 'Languages',
    descriptionUrdu: 'قرآنی عربی کے الفاظ کا فہم، روزمرہ عربی لہجے کی پریکٹس اور مخارجِ حروف کی باریک بینی۔',
    highlights: [
      'فصیح عربی تلفظ کی مشق',
      'قرآنی الفاظ کا آسان ترجمہ و فہم',
      'عربی قراء کے طرز پر تلاوت کی تربیت'
    ],
    category: 'quran'
  },
  {
    id: 'art-of-speaking',
    titleUrdu: 'آرٹ آف سپیکنگ',
    titleEnglish: 'Art of Public Speaking & Communication',
    badge: 'پرسنالٹی گرومنگ',
    duration: 'ہفتہ وار ورکشاپس',
    iconName: 'Users',
    descriptionUrdu: 'طلباء کی شخصیت سازی، گفتگو کا سلیقہ، دوسروں کی بات سننا اور مؤثر دلائل کے ساتھ بات پہنچانے کا ہنر۔',
    highlights: [
      'اخلاق و باوقار گفتگو کے آداب',
      'انٹرویو اور معاشرتی گفتگو کی مہارت',
      'قیادتی صلاحیتوں کو اجاگر کرنا'
    ],
    category: 'skills'
  },
  {
    id: 'computer-hafiz',
    titleUrdu: 'کمپیوٹر حافظ کورس',
    titleEnglish: 'Computer Literacy for Huffaz',
    badge: 'ڈیجیٹل مہارت',
    duration: 'بنیادی تا ایڈوانس',
    iconName: 'Laptop',
    descriptionUrdu: 'حفظ کرنے والے طلباء کو جدید کمپیوٹر، ٹائپنگ، بنیادی سافٹ ویئر اور انٹرنیٹ کے مثبت استعمال سے روشناس کروانا۔',
    highlights: [
      'مدرسہ کی جدید کمپیوٹر لیب میں پریکٹیکل',
      'اردو، عربی اور انگلش ٹائپنگ کی مہارت',
      'ڈیجیٹل دور میں اسلامی علوم کی ترویج'
    ],
    category: 'modern'
  },
  {
    id: 'competitions',
    titleUrdu: 'عالمی مقابلوں میں شرکت کی تیاری',
    titleEnglish: 'National & Global Qirat Competitions',
    badge: 'اعزازات و انعامات',
    duration: 'خصوصی تربیتی کیمپ',
    iconName: 'Trophy',
    descriptionUrdu: 'قومی و بین الاقوامی سطح کے حسنِ قرآت اور حفظ مقابلوں میں اعزاز حاصل کرنے کے لیے خصوصی رہنمائی۔',
    highlights: [
      'عالمی معیار کی قراءت کے قواعد',
      'پروفیشنل مقابلہ جاتی ججز کے معیار پر تیاری',
      'پوزیشن ہولڈر طلباء کے لیے اسناد اور انعامات'
    ],
    category: 'skills'
  },
  {
    id: 'masnoon-duain',
    titleUrdu: 'نماز، مسنون دعائیں و ضروری مسائل',
    titleEnglish: 'Daily Prayers, Masnoon Supplications & Fiqh',
    badge: 'عملی زندگی',
    duration: 'روزانہ معمول',
    iconName: 'HeartHandshake',
    descriptionUrdu: 'نماز روزمرہ کی مسنون دعائیں بمع ترجمہ اور طہارت و عبادات کے بنیادی فقہی مسائل سے مکمل آگاہی۔',
    highlights: [
      'نماز باجماعت کی پابندی اور درست طریقہ',
      'صبح و شام کی مسنون دعائیں یاد کروانا',
      'روزمرہ حلال و حرام اور اخلاقی مسائل کی تعلیم'
    ],
    category: 'quran'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    titleUrdu: 'قرآن و حدیث کے اصولوں کے مطابق تعلیم',
    subtitleUrdu: 'خالصتاً سنتِ نبوی اور اسلاف کے منہج پر مبنی شفاف اور مستند دینی تعلیم۔',
    iconName: 'BookMarked',
    category: 'تعلیم'
  },
  {
    id: 'f2',
    titleUrdu: 'سیرتِ رسول ﷺ کی تعلیم و تربیت',
    subtitleUrdu: 'حضور اکرم ﷺ کی حیات طیبہ کے روشن اسوہ سے طلباء کی فکری اور عملی زندگی کی رہنمائی۔',
    iconName: 'Heart',
    category: 'تربیت'
  },
  {
    id: 'f3',
    titleUrdu: 'ماہر، شفیق و تجربہ کار اساتذہ',
    subtitleUrdu: 'مستند قراء اور دین شناس اساتذہ کرام جو بچوں کو اپنی اولاد کی طرح شفقت سے پڑھاتے ہیں۔',
    iconName: 'Award',
    category: 'اساتذہ'
  },
  {
    id: 'f4',
    titleUrdu: 'دینی و عصری تعلیم کا متوازن امتزاج',
    subtitleUrdu: 'جہاں قرآن مجید کی لازوال روشنی ہے وہیں اسکول کے تمام مضامین میں نمایاں کامیابی کی ضمانت۔',
    iconName: 'Balance',
    category: 'نصاب'
  },
  {
    id: 'f5',
    titleUrdu: 'اچھا اخلاق، کردار سازی اور مار پیٹ سے پاک ماحول',
    subtitleUrdu: 'طلباء کی عزتِ نفس کی حفاظت، شفقت و محبت سے تربیت، اور بدتہذیبی و سختی سے مکمل پرہیز۔',
    iconName: 'Smile',
    category: 'ماحول'
  },
  {
    id: 'f6',
    titleUrdu: 'صاف ستھرا، پرسکون اور روشن تعلیمی ماحول',
    subtitleUrdu: 'کشادہ کلاس رومز، فلٹر شدہ پینے کا پانی اور بچوں کی صحت و صفائی کا اعلیٰ معیار۔',
    iconName: 'CheckCircle2',
    category: 'سہولیات'
  },
  {
    id: 'f7',
    titleUrdu: '24/7 CCTV کیمرہ سیکیورٹی مانیٹرنگ',
    subtitleUrdu: 'والدین کا مکمل اعتماد — تمام کلاس رومز اور راہداریوں میں کیمروں کے ذریعے نگرانی کا انتظام۔',
    iconName: 'Video',
    category: 'تحفظ'
  },
  {
    id: 'f8',
    titleUrdu: 'صحیح عقائد و اعمال کی مثالی تربیت',
    subtitleUrdu: 'افراط و تفریط سے پاک، اعتدال پسند، محبِ وطن اور باعمل مسلمان نوجوان تیار کرنا۔',
    iconName: 'ShieldCheck',
    category: 'عقائد'
  }
];

export const FAQS: FaqItem[] = [
  {
    questionUrdu: 'کیا 2 سال میں حفظ مکمل کرنا واقعی ممکن ہے؟',
    answerUrdu: 'جی ہاں، ہمارے پاس خصوصی مرتب کردہ 2 سالہ سائنسی شیڈول ہے جس میں حفظِ قرآن کے لیے روزانہ مقررہ مقدار میں سبق، سبقی اور منزل کا سخت جائزہ لیا جاتا ہے۔ ہر طالب علم کی ذہنی استعداد کے مطابق انفرادی توجہ دی جاتی ہے۔',
    category: 'حفظ'
  },
  {
    questionUrdu: 'کیا حفظ کے ساتھ اسکول کی تعلیم بھی جاری رکھی جا سکتی ہے؟',
    answerUrdu: 'بالکل! ہمارا بنیادی مقصد ہی یہی ہے کہ بچہ اسکول کی تعلیم کے ساتھ ساتھ حفظ کرے۔ ہمارے پاس عصری مضامین (انگریزی، ریاضی، سائنس، اردو) کی روزانہ کلاسز کا خصوصی وقت مقرر ہے تاکہ بچے کی دنیاوی تعلیم بھی متاثر نہ ہو۔',
    category: 'اسکول'
  },
  {
    questionUrdu: 'طلباء کی اخلاقی تربیت اور نگرانی کے لیے کیا اقدامات ہیں؟',
    answerUrdu: 'ہمارے ہاں مار پیٹ کی سخت ممانعت ہے۔ اساتذہ کرام شفقت و محبت سے پڑھاتے ہیں۔ تمام کلاس رومز میں 24 گھنٹے CCTV مانیٹرنگ موجود ہے اور پرنسپل صاحب خود روزانہ کی بنیاد پر تدریسی اور اخلاقی عمل کی نگرانی کرتے ہیں۔',
    category: 'تربیت'
  },
  {
    questionUrdu: 'داخلے کا طریقہ کار کیا ہے؟',
    answerUrdu: 'داخلہ کے لیے آپ ہمارے فون نمبرز (0302-1758350 یا 0329-2521377) پر کال یا واٹس ایپ کر سکتے ہیں، یا براہِ راست مدرسہ تشریف لا کر پرنسپل قاری عبدالباسط حسین صاحب سے ملاقات کر سکتے ہیں۔ ویب سائٹ پر موجود فارم کے ذریعے بھی آن لائن رابطہ کیا جا سکتا ہے۔',
    category: 'داخلہ'
  },
  {
    questionUrdu: 'مدرسہ کا درست پتہ کہاں ہے؟',
    answerUrdu: 'مدرسہ گلی نمبر 29، زکریا ٹاؤن، بوسن روڈ، ملتان میں واقع ہے۔ یہ پرسکون، محفوظ اور مرکزی رہائشی علاقہ ہے جہاں تک رسائی انتہائی آسان ہے۔',
    category: 'پتہ'
  }
];

export const STATS = [
  { numberUrdu: '100%', labelUrdu: 'مار پیٹ سے پاک ماحول', labelEnglish: 'Zero Corporal Punishment' },
  { numberUrdu: '2 سال', labelUrdu: 'خصوصی حفظ ٹریک', labelEnglish: 'Hifz Fast Track' },
  { numberUrdu: '24/7', labelUrdu: 'CCTV مانیٹرنگ سیکیورٹی', labelEnglish: 'Full Security Coverage' },
  { numberUrdu: '100%', labelUrdu: 'تجوید اور قراءت پر توجہ', labelEnglish: 'Authentic Pronunciation' },
];
