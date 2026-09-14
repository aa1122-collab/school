export interface Course {
  id: string;
  titleUrdu: string;
  titleEnglish: string;
  badge: string;
  duration: string;
  iconName: string;
  descriptionUrdu: string;
  highlights: string[];
  category: 'quran' | 'modern' | 'skills';
}

export interface Feature {
  id: string;
  titleUrdu: string;
  subtitleUrdu: string;
  iconName: string;
  category: string;
}

export interface FaqItem {
  questionUrdu: string;
  answerUrdu: string;
  category: string;
}

export interface ContactInfo {
  nameUrdu: string;
  nameEnglish: string;
  principalUrdu: string;
  teacherTitleUrdu: string;
  addressUrdu: string;
  addressEnglish: string;
  phone1: string;
  phone2: string;
  whatsappFormatted1: string;
  whatsappFormatted2: string;
  googleMapsQuery: string;
  timings: string;
}
