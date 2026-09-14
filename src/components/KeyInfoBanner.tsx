import React, { useState } from 'react';
import { MapPin, Phone, UserCheck, Clock, Navigation, MessageCircle, Copy, Check, Sparkles, ShieldCheck, ArrowLeft } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';

export const KeyInfoBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Street 29 Zakariya Town Bosan Road Multan Pakistan')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('گلی نمبر 29، زکریا ٹاؤن، بوسن روڈ، ملتان (Street # 29, Zakariya Town, Bosan Road, Multan)');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = (phone: string, text?: string) => {
    const defaultMsg = text || 'السلام علیکم! میں مدرسہ کنز العلم میں داخلے اور کیمپس وزٹ کے بارے میں معلومات چاہتا ہوں۔';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="key-info" className="relative -mt-8 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Card with Light Elegant Theme */}
      <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200 p-5 sm:p-8 lg:p-10 overflow-hidden text-slate-900">
        
        {/* Subtle Decorative Background Geometry */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

        {/* Section Top Header & Trust Ribbon */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF7A00] animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-orange-600 font-modern-ui">
                CAMPUS ACCESS & VERIFIED DIRECT CONTACT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2647] font-arabic-heading">
              کیمپس لوکیشن، براہِ راست رابطہ و رہنمائی
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              کیمپس وزٹ و کالز ہمہ وقت اوپن
            </span>
          </div>
        </div>

        {/* 3 Core Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* CARD 1: ADDRESS & MAPS */}
          <div className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 text-[11px] font-bold px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>مرکزی لوکیشن ملتان</span>
                </span>

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-amber-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                  <Navigation className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <span className="text-xs font-bold text-slate-500 block mb-1">
                مدرسہ کا تصدیق شدہ پتہ:
              </span>

              {/* Urdu Address */}
              <h3 className="font-extrabold text-[#0A2647] text-lg sm:text-xl font-arabic-heading leading-snug">
                گلی نمبر 29، زکریا ٹاؤن، بوسن روڈ، ملتان
              </h3>

              {/* English Subtitle */}
              <p className="text-xs text-slate-500 mt-2 font-modern-ui font-medium">
                Street # 29, Zakariya Town, Bosan Road, Multan
              </p>

              {/* Highlights */}
              <div className="mt-3 bg-white p-2.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>بوسن روڈ سے چند منٹ کی آسان رسائی</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  پرسکون، کشادہ اور محفوظ رہائشی ماحول
                </div>
              </div>
            </div>

            {/* Actions for Card 1 */}
            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button
                onClick={openGoogleMaps}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF9E2C] hover:from-[#e06c00] hover:to-[#f09020] text-white text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-md shadow-orange-500/20 transition-all active:scale-98 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>گوگل میپس پر لوکیشن</span>
              </button>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold py-2.5 px-3 rounded-xl transition-all cursor-pointer"
                title="پتہ کاپی کریں"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">کاپی ہو گیا!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>کاپی پتہ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CARD 2: PHONE NUMBERS & WHATSAPP HUB */}
          <div className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-[11px] font-bold px-3 py-1 rounded-full">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>داخلہ ہیلپ لائن و واٹس ایپ</span>
                </span>

                <div className="w-11 h-11 rounded-2xl bg-[#0A2647] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
              </div>

              <span className="text-xs font-bold text-slate-500 block mb-1">
                براہِ راست کال یا واٹس ایپ میسج کریں:
              </span>

              {/* Number 1 Row */}
              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs mb-2.5 flex items-center justify-between gap-2">
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">پرنسپل ہیلپ لائن (نمبر 1)</span>
                  <a
                    href={`tel:${MADRASA_INFO.phone1}`}
                    className="font-extrabold text-[#0A2647] hover:text-orange-600 text-base font-modern-ui tracking-wider transition-colors"
                    dir="ltr"
                  >
                    {MADRASA_INFO.phone1}
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`tel:${MADRASA_INFO.phone1}`}
                    className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-[#0A2647] hover:text-white transition-all border border-blue-200"
                    title="Call this number"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleWhatsApp(MADRASA_INFO.whatsappFormatted1)}
                    className="p-2 rounded-lg bg-green-50 text-green-700 hover:bg-[#2E7D32] hover:text-white transition-all border border-green-200 cursor-pointer"
                    title="WhatsApp this number"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>

              {/* Number 2 Row */}
              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex items-center justify-between gap-2">
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">داخلہ انکوائری (نمبر 2)</span>
                  <a
                    href={`tel:${MADRASA_INFO.phone2}`}
                    className="font-extrabold text-[#0A2647] hover:text-orange-600 text-base font-modern-ui tracking-wider transition-colors"
                    dir="ltr"
                  >
                    {MADRASA_INFO.phone2}
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`tel:${MADRASA_INFO.phone2}`}
                    className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-[#0A2647] hover:text-white transition-all border border-blue-200"
                    title="Call this number"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleWhatsApp(MADRASA_INFO.whatsappFormatted2)}
                    className="p-2 rounded-lg bg-green-50 text-green-700 hover:bg-[#2E7D32] hover:text-white transition-all border border-green-200 cursor-pointer"
                    title="WhatsApp this number"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions for Card 2 */}
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>صبح 7:00 تا شام 7:00</span>
              </div>
              <button
                onClick={() => handleWhatsApp(MADRASA_INFO.whatsappFormatted1)}
                className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>فوری چیٹ شروع کریں</span>
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 3: LEADERSHIP & PRINCIPAL */}
          <div className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>قیادت و ادارتی سرپرستی</span>
                </span>

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
              </div>

              {/* Principal Details with Distinguished Badge */}
              <div className="flex items-center gap-3.5 mb-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase block">
                    پرنسپل و نگرانِ اعلیٰ
                  </span>
                  <h3 className="font-extrabold text-[#0A2647] text-lg font-arabic-heading leading-tight">
                    {MADRASA_INFO.principalUrdu}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    خادم القرآن و مربی، مدرسہ کنز العلم
                  </p>
                </div>
              </div>

              {/* Trust Notes */}
              <div className="space-y-1.5 text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>طلباء کی انفرادی اخلاقی و حفظ نگرانی</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  والدین کے ساتھ براہِ راست میٹنگ و مکمل شفافیت
                </div>
              </div>
            </div>

            {/* Actions for Card 3 */}
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                onClick={() => handleWhatsApp(MADRASA_INFO.whatsappFormatted1, 'السلام علیکم قاری عبدالباسط صاحب! میں مدرسہ میں ملاقات کا وقت طے کرنا چاہتا ہوں۔')}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md shadow-green-900/15 transition-all active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>پرنسپل صاحب سے براہِ راست رابطہ</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
