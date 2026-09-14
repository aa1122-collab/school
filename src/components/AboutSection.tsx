import React from 'react';
import { Award, Heart, CheckCircle2, Phone, MessageCircle, Quote, ShieldAlert, BookOpen } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';

interface AboutSectionProps {
  onOpenAdmissionModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAdmissionModal }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${encodeURIComponent('السلام علیکم قاری صاحب! میں مدرسہ کنز العلم میں داخلے کے لیے معلومات حاصل کرنا چاہتا ہوں۔')}`, '_blank');
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            قیادت و نگرانی • LEADERSHIP & TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2647] font-arabic-heading">
            پرنسپل کا پیغام اور <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-amber-500">تعلیمی وژن</span>
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            ایک تجربہ کار استاد اور شفیق مربی کا مخلصانہ پیغام والدین کے نام
          </p>
        </div>

        {/* Main Grid: Teacher Portrait & Trust Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {/* Leadership Crest & Accreditation Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white p-7 text-center space-y-5">
                
                {/* Floating Verified Accreditation Pill */}
                <div className="relative inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>پرنسپل و نگرانِ اعلیٰ کا باضابطہ پیغام</span>
                </div>

                {/* Distinguished Central Crest Emblem */}
                <div className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-[#FF7A00] to-amber-500 p-0.5 shadow-lg shadow-orange-500/20 flex items-center justify-center">
                  <div className="w-full h-full rounded-[22px] bg-[#0A2647] flex flex-col items-center justify-center p-2 text-center text-white">
                    <BookOpen className="w-9 h-9 text-amber-300 mb-1" />
                    <span className="text-[10px] font-black text-amber-200 tracking-wider font-modern-ui uppercase">
                      KANZ-UL-ILM
                    </span>
                  </div>
                </div>

                {/* Leader Name & Dignified Title */}
                <div className="relative space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-orange-600 tracking-wide uppercase">
                    خادم القرآن و مربی
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-arabic-heading text-[#0A2647]">
                    {MADRASA_INFO.principalUrdu}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    پرنسپل، مدرسہ کنز العلم اسلامک ایجوکیشن سسٹم، ملتان
                  </p>
                </div>

                {/* Hadith Banner inside card */}
                <div className="relative bg-orange-50/70 border border-orange-200 rounded-2xl p-3.5 space-y-1">
                  <p className="font-arabic-heading text-sm text-[#0A2647] font-bold" dir="rtl">
                    &ldquo;خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-600">
                    &rdquo;تم میں سے بہترین وہ ہے جس نے قرآن سیکھا اور سکھایا&ldquo;
                  </p>
                </div>

                {/* Key Qualifications */}
                <div className="relative grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center">
                    <span className="text-orange-600 font-bold block text-xs">15+ سال</span>
                    <span className="text-slate-600">تدریسی خدمات</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center">
                    <span className="text-emerald-700 font-bold block text-xs">ماہر تجوید</span>
                    <span className="text-slate-600">و فنِ خطابت</span>
                  </div>
                </div>

              </div>

              {/* Trust Sub-Badge */}
              <div className="mt-4 w-full bg-white border border-slate-200 rounded-2xl p-3 flex items-center justify-between text-xs text-slate-700 font-semibold shadow-sm">
                <span>شفاف و معیاری دینی ماحول</span>
                <span className="text-emerald-700 font-extrabold">باقاعدہ انفرادی نگرانی</span>
              </div>

            </div>
          </div>

          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-right">
            
            <div className="inline-flex items-center gap-2 text-[#0A2647] bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xs">
              <Quote className="w-4 h-4 rotate-180 text-orange-500" />
              <span>&ldquo;ہر طالب علم ہمارے لیے اولاد کی طرح قیمتی ہے&rdquo;</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2647] font-arabic-heading leading-snug">
              دین اور دنیا کی متوازن تربیت — ہمارا مشن
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-loose font-urdu-nastaliq">
              عزیز والدین! ہمارا مشن محض چند کتابیں پڑھانا یا لفظی یاد کروانا نہیں، بلکہ بچے کے دل میں محبتِ الٰہی، اطاعتِ رسول ﷺ اور باوقار اخلاق کی شمع روشن کرنا ہے۔ ہم نے مدرسہ کنز العلم کی بنیاد اس سوچ پر رکھی ہے کہ ہمارا طالب علم قرآن مجید کا پختہ حافظ بھی ہو، بہترین لہجے کا قاری بھی ہو، پراعتماد خطیب بھی ہو اور جدید دنیا کے تقاضوں کے مطابق عصری علوم اور کمپیوٹر سے بھی بخوبی واقف ہو۔
            </p>

            {/* 3 Pillars of Teacher Guarantee */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">انفرادی توجہ اور ذہنی استعداد کا احترام</h4>
                  <p className="text-xs text-slate-600 mt-0.5">ہر بچے کا یاد کرنے کا انداز الگ ہوتا ہے۔ ہم بچے کی رفتار اور صلاحیت کو سمجھ کر نرمی سے سکھاتے ہیں۔</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">اخلاق اور ڈسپلن پر خاص محنت</h4>
                  <p className="text-xs text-slate-600 mt-0.5">بڑوں کا احترام، چھوٹوں سے شفقت، جھوٹ اور بدکلامی سے اجتناب کی عملی مشق کروائی جاتی ہے۔</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <Award className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">والدین سے مستقل رابطہ اور ہفتہ وار فیڈ بیک</h4>
                  <p className="text-xs text-slate-600 mt-0.5">بچے کی روزانہ کی پیش رفت اور حاضری کا مکمل ریکارڈ والدین کے ساتھ شیئر کیا جاتا ہے۔</p>
                </div>
              </div>
            </div>

            {/* Principal Contact Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>پرنسپل صاحب سے واٹس ایپ گفتگو</span>
              </button>

              <a
                href={`tel:${MADRASA_INFO.phone1}`}
                className="bg-white hover:bg-slate-50 text-[#0A2647] border border-slate-300 px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-xs"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>{MADRASA_INFO.phone1}</span>
              </a>

              <button
                onClick={onOpenAdmissionModal}
                className="bg-gradient-to-r from-[#FF7A00] to-amber-500 hover:from-amber-500 hover:to-[#FF7A00] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md shadow-orange-500/20 active:scale-98 cursor-pointer"
              >
                ملاقات کا وقت طے کریں
              </button>
            </div>

          </div>

        </div>

        {/* Campus Environment Preview Card */}
        <div className="mt-10 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-64 md:h-full relative">
              <img
                src="/src/assets/images/madrasa_facility_1789365582112.jpg"
                alt="مدرسہ کنز العلم کا تعلیمی ہال"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 bg-[#0A2647]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                کیمپس کی جھلک
              </div>
            </div>
            
            <div className="md:col-span-7 p-6 sm:p-8 text-right space-y-3">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
                محفوظ و منظم تعلیمی ہال
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#0A2647] font-arabic-heading">
                صاف ستھرا، روشن اور پرسکون تدریسی ماحول
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                مدرسہ کنز العلم میں جدید تدریسی رحل، صاف ستھرے کارپٹس، روشن ہوادار کمرے اور مکمل کیمرہ سیکیورٹی کا اہتمام ہے۔ آپ کسی بھی وقت مدرسہ تشریف لا کر خود دیکھ سکتے ہیں۔
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-500 flex items-center justify-end gap-3">
                <span className="text-orange-600">📍 بوسن روڈ ملتان</span>
                <span>•</span>
                <span>⏰ صبح 7:00 تا شام 7:00</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
