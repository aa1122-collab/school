import React from 'react';
import { BookOpen, MapPin, Phone, MessageCircle, Clock, Heart, ArrowUp, Navigation } from 'lucide-react';
import { MADRASA_INFO, COURSES } from '../data/madrasaData';

interface FooterProps {
  onOpenAdmissionModal: (courseTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissionModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Street 29 Zakariya Town Bosan Road Multan Pakistan')}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="bg-[#0A2647] text-slate-200 pt-16 pb-20 sm:pb-12 border-t border-slate-800 relative">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Madrasa Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A00] to-amber-500 flex items-center justify-center text-white shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-arabic-heading">
                  {MADRASA_INFO.nameUrdu}
                </h3>
                <p className="text-xs text-amber-300 font-modern-ui">
                  Kanz-ul-Ilm Islamic Education System
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-urdu-nastaliq">
              بچوں کو اسلامی تعلیم کے ساتھ بہترین جدید تعلیم فراہم کرنے کا قابلِ اعتماد ادارہ۔ جہاں صرف 2 سال میں مکمل حفظِ قرآن کے ساتھ عصری تعلیم اور اخلاقی تربیت دی جاتی ہے۔
            </p>

            <div className="p-3.5 bg-white/10 border border-white/15 rounded-xl space-y-1 shadow-md backdrop-blur-xs">
              <span className="text-xs text-amber-300 font-bold block">پرنسپل و نگرانِ ادارہ:</span>
              <p className="text-sm font-bold text-white">{MADRASA_INFO.principalUrdu}</p>
              <p className="text-[11px] text-slate-300">خادم القرآن و مربی، مدرسہ کنز العلم</p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              اہم لنکس
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  صفحہ اول (ہوم)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('two-year-hifz')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-orange-400 font-bold"
                >
                  2 سالہ حفظ ٹریک
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  تمام تعلیمی کورسز
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  ماحول و خصوصیات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  پرنسپل کا تعارف
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  اکثر پوچھے گئے سوالات
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              نمایاں شعبہ جات
            </h4>
            <ul className="space-y-2 text-xs">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onOpenAdmissionModal(c.titleUrdu)}
                    className="hover:text-amber-400 transition-colors cursor-pointer flex items-center justify-end gap-1.5 w-full text-right"
                  >
                    <span>{c.titleUrdu}</span>
                    <span className="text-[10px] text-amber-500/80 font-mono">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              رابطہ و پتہ
            </h4>

            <div className="space-y-3 text-xs">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{MADRASA_INFO.addressUrdu}</p>
                  <button
                    onClick={openGoogleMaps}
                    className="text-amber-400 hover:underline mt-1 flex items-center gap-1 cursor-pointer text-[11px]"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>گوگل میپس لوکیشن</span>
                  </button>
                </div>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${MADRASA_INFO.phone1}`}
                  className="text-white hover:text-amber-300 font-bold font-modern-ui text-sm"
                  dir="ltr"
                >
                  {MADRASA_INFO.phone1}
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${MADRASA_INFO.phone2}`}
                  className="text-white hover:text-amber-300 font-bold font-modern-ui text-sm"
                  dir="ltr"
                >
                  {MADRASA_INFO.phone2}
                </a>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-2.5 text-slate-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{MADRASA_INFO.timings}</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => onOpenAdmissionModal()}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#FF7A00] to-[#FF9E2C] hover:from-[#e06c00] hover:to-[#f09020] text-white rounded-xl font-bold text-xs transition-all shadow-md active:scale-98 cursor-pointer"
            >
              آن لائن داخلہ درخواست جمع کروائیں
            </button>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} مدرسہ کنز العلم اسلامک ایجوکیشن سسٹم، ملتان۔ جملہ حقوق محفوظ ہیں۔
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>اوپر جائیں</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
