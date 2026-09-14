import React from 'react';
import { Phone, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Heart, Award, ArrowLeft } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';
import studentImage from '../assets/images/madrasa_student_1789365542944.jpg';

interface HeroProps {
  onOpenAdmissionModal: (courseTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissionModal }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`السلام علیکم! میں مدرسہ کنز العلم ایجوکیشن سسٹم ملتان میں داخلے کی معلومات حاصل کرنا چاہتا ہوں۔ براہِ کرم رہنمائی فرمائیں۔`);
    window.open(`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0c2340] bg-deep-navy-grid pt-10 pb-20 lg:pt-14 lg:pb-28 border-b border-slate-800 text-white shadow-2xl">
      {/* Radiant Glowing Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Right Golden/Orange Halo */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#FF7A00]/25 via-amber-500/15 to-transparent blur-3xl" />
        {/* Bottom-Left Cyan/Sky Deep Glow */}
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-transparent blur-3xl" />
        {/* Center Subdued Radiant Burst */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hadith & Admission Banner */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-black/20 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-ping" />
            <span className="font-arabic-heading text-base sm:text-lg font-bold text-amber-200">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </span>
            <span className="text-xs text-amber-300/80 hidden sm:inline">(تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے - الحدیث)</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>داخلہ جاری ہے • ADMISSION OPEN 2026-2027</span>
          </div>
        </div>

        {/* Hero Grid: Content (Right in RTL) & Student Image (Left in RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Content Column (7 cols in desktop) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Big Madrasa Heading in Urdu */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-arabic-heading leading-tight tracking-normal">
                <span className="block text-slate-200">مدرسہ</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#FF9E2C] via-[#FF7A00] to-amber-300">
                  کنز العلم
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 text-white">
                  اسلامک ایجوکیشن سسٹم
                </span>
              </h1>

              {/* Subheading / Tagline */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-200 font-urdu-nastaliq leading-relaxed pt-2">
                &ldquo;بچوں کو اسلامی تعلیم کے ساتھ بہترین جدید تعلیم فراہم کریں&rdquo;
              </p>
            </div>

            {/* Parent Investment Motto */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-right shadow-xl">
              <p className="text-slate-100 font-medium text-sm sm:text-base leading-relaxed">
                جہاں اپنے بچوں کو اسکول کی تعلیم کے ساتھ بہترین <span className="font-bold text-amber-400">حافظِ قرآن</span> بنا کر عالمِ آخرت کے لیے دائمی سرمایہ کاری کر سکتے ہیں۔
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-200 font-semibold">
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  صرف 2 سال میں مکمل حفظ
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  مار پیٹ سے پاک شفقت والا ماحول
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  کمپیوٹر و عصری تعلیم
                </span>
              </div>
            </div>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#2E7D32] hover:bg-[#236327] text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>واٹس ایپ پر رابطہ کریں</span>
              </button>

              <a
                href={`tel:${MADRASA_INFO.phone1}`}
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF7A00] to-[#FF9E2C] hover:from-[#e06c00] hover:to-[#f09020] text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-orange-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer border border-orange-300/30"
                dir="ltr"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {MADRASA_INFO.phone1}</span>
              </a>

              <button
                onClick={() => onOpenAdmissionModal()}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>داخلہ فارم</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>24/7 CCTV کیمرہ نگرانی</span>
              </div>
              <span className="text-slate-500">•</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>شفقت و اخلاقی تربیت</span>
              </div>
              <span className="text-slate-500">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>مستند قراء و اساتذہ</span>
              </div>
            </div>

          </div>

          {/* Student Image Column (5 cols in desktop, visually on the left side) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Decorative Card Container with Glow & Gradient Border */}
            <div className="relative w-full max-w-md">
              
              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF7A00]/50 via-amber-400/40 to-sky-500/30 rounded-3xl blur-2xl opacity-70" />
              
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border-4 border-amber-400/60 ring-4 ring-white/10">
                <img
                  src={studentImage}
                  alt="طالب علم مدرسہ کنز العلم ملتان"
                  className="w-full h-auto object-cover object-center max-h-[500px]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Image Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081b30] via-[#081b30]/85 to-transparent p-5 text-white text-right">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#FF7A00] text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                      داخلہ اوپن 2026
                    </span>
                    <span className="font-arabic-heading text-lg font-bold text-amber-300">
                      طالب علم، کنز العلم
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 mt-1.5 font-medium">
                    قرآن کی تلاوت، خوش الحان قراءت اور باوقار اخلاق کی عملی تصویر
                  </p>
                </div>
              </div>

              {/* Floating Trust Badge 1 (Top Left) - Perfectly Formatted & Sized */}
              <div className="absolute -top-5 -left-4 bg-[#0A2647]/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-amber-400/70 p-2.5 px-3.5 text-right hidden sm:flex items-center gap-3 animate-bounce duration-1000 z-20">
                <div className="flex flex-col items-center justify-center min-w-[48px] px-2.5 py-1.5 rounded-xl bg-gradient-to-b from-amber-500/25 to-orange-500/20 border border-amber-400/50 shadow-inner">
                  <span className="text-xl font-extrabold text-amber-300 leading-none">2</span>
                  <span className="text-[11px] font-bold text-amber-200 mt-0.5 whitespace-nowrap">سال</span>
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight font-arabic-heading">
                    حفظِ قرآن ٹریک
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-amber-100/80 whitespace-nowrap">
                    منظم اور سائنسی شیڈول
                  </p>
                </div>
              </div>

              {/* Floating Trust Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 bg-[#0A2647]/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-emerald-400/70 p-2.5 px-3.5 text-right hidden sm:flex items-center gap-3 z-20">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight font-arabic-heading">
                    محفوظ و باحفاظت کیمپس
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-emerald-200/80 whitespace-nowrap">
                    CCTV نگرانی + پرسکون ماحول
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
