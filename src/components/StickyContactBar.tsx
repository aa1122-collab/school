import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';

export const StickyContactBar: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent('السلام علیکم! میں مدرسہ کنز العلم میں اپنے بچے کے داخلے کی بابت بات کرنا چاہتا ہوں۔');
    window.open(`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Desktop & Mobile WhatsApp Widget (Bottom Left in RTL) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-900 shadow-xl border border-slate-700 text-amber-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={handleWhatsApp}
          className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-green-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            واٹس ایپ رابطہ
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar (Only visible on small screens to maximize conversions) */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-[#07172b]/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 sm:hidden flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${MADRASA_INFO.phone1}`}
          className="flex-1 bg-gradient-to-r from-[#FF7A00] to-amber-500 text-slate-950 py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-md"
          dir="ltr"
        >
          <Phone className="w-4 h-4 text-slate-950" />
          <span>Call Now</span>
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </button>
      </div>
    </>
  );
};
