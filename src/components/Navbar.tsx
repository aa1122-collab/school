import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, BookOpen, Clock, MapPin, Sparkles } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';

interface NavbarProps {
  onOpenAdmissionModal: (courseTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissionModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`السلام علیکم! میں مدرسہ کنز العلم میں داخلے کے حوالے سے معلومات حاصل کرنا چاہتا ہوں۔ برائے مہربانی تفصیلات فراہم فرمائیں۔`);
    window.open(`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Notification Bar (Urdu & English) */}
      <div className="bg-[#0A2647] text-slate-200 py-1.5 px-4 text-xs font-medium border-b border-blue-950/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF7A00] to-[#FFB347] text-white px-2.5 py-0.5 rounded-full font-bold text-[11px] shadow-sm animate-pulse">
              <Sparkles className="w-3 h-3" />
              داخلہ جاری ہے • Admission Open
            </span>
            <span className="hidden sm:inline-block text-slate-200">
              بچوں کو اسلامی تعلیم کے ساتھ بہترین جدید عصری تعلیم فراہم کریں
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-200">
            <a 
              href={`tel:${MADRASA_INFO.phone1}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors text-amber-400 font-semibold"
              dir="ltr"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{MADRASA_INFO.phone1}</span>
            </a>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>بوسن روڈ ملتان</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Right Brand Identity (RTL Start) */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A00] via-amber-500 to-[#0A2647] flex items-center justify-center text-white shadow-md shadow-orange-500/20 ring-2 ring-orange-200">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-[#0A2647] font-arabic-heading tracking-wide">
                  {MADRASA_INFO.nameUrdu}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-wider font-modern-ui">
                Kanz-ul-Ilm Islamic Education System Multan
              </span>
            </div>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-slate-700 text-sm">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#FF7A00] transition-colors cursor-pointer py-1"
            >
              صفحہ اول
            </button>
            <button 
              onClick={() => scrollToSection('two-year-hifz')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1 font-bold text-orange-600 flex items-center gap-1"
            >
              <span>2 سالہ حفظ ٹریک</span>
              <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold">خصوصی</span>
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="hover:text-[#FF7A00] transition-colors cursor-pointer py-1"
            >
              کورسز و نصاب
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="hover:text-[#FF7A00] transition-colors cursor-pointer py-1"
            >
              خصوصیات و ماحول
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-[#FF7A00] transition-colors cursor-pointer py-1"
            >
              پرنسپل کا پیغام
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#FF7A00] transition-colors cursor-pointer py-1"
            >
              رابطہ و پتہ
            </button>
          </nav>

          {/* Left Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm shadow-green-900/20 active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>واٹس ایپ</span>
            </button>

            <button
              onClick={() => onOpenAdmissionModal()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9E2C] hover:from-[#e06c00] hover:to-[#f09020] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-orange-500/25 transition-all active:scale-98 cursor-pointer"
            >
              <span>آن لائن داخلہ فارم</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href={`tel:${MADRASA_INFO.phone1}`}
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0A2647] font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{MADRASA_INFO.phone1}</span>
            </a>
            <a
              href={`tel:${MADRASA_INFO.phone2}`}
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0A2647] font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{MADRASA_INFO.phone2}</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800 border-t border-slate-100 pt-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              صفحہ اول
            </button>
            <button
              onClick={() => scrollToSection('two-year-hifz')}
              className="text-right py-2 px-3 rounded-lg bg-orange-50 text-orange-700 font-bold flex items-center justify-between"
            >
              <span>👉 صرف 2 سال میں حافظ قرآن</span>
              <span className="text-xs bg-orange-200 text-orange-900 px-2 py-0.5 rounded-full">اہم</span>
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              کورسز و نصاب
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              خصوصیات و ماحول
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              پرنسپل کا پیغام
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              رابطہ و لوکیشن
            </button>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#FF7A00] to-[#FF9E2C] text-white font-bold rounded-xl text-center shadow-md shadow-orange-500/20"
            >
              آن لائن داخلہ فارم پُر کریں
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>براہِ راست واٹس ایپ پر بات کریں</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
