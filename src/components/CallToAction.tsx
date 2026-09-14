import React from 'react';
import { Phone, MessageCircle, Sparkles, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';

interface CallToActionProps {
  onOpenAdmissionModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenAdmissionModal }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${encodeURIComponent('السلام علیکم! میں اپنے بچے کا داخلہ مدرسہ کنز العلم میں کروانا چاہتا ہوں۔ براہِ مہربانی فیس اور کلاس کے اوقات سے آگاہ فرمائیں۔')}`, '_blank');
  };

  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-br from-[#FF7A00] via-[#FF8F1F] to-[#E65100] text-white relative overflow-hidden">
      
      {/* Subtle Background Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>داخلے کھلے ہیں — محدود نشستیں</span>
        </div>

        {/* Big Conversion Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-arabic-heading leading-tight tracking-normal">
          &ldquo;اپنے بچے کا مستقبل روشن بنائیں&rdquo;
        </h2>

        {/* Sub-copy */}
        <p className="text-base sm:text-xl text-orange-50 font-urdu-nastaliq leading-loose max-w-3xl mx-auto">
          قرآن کی لازوال برکات کے ساتھ عصری تعلیم کا تحفہ دیجیے۔ آج ہی کال کریں یا واٹس ایپ کے ذریعے پرنسپل صاحب سے براہِ راست رابطہ کریں۔
        </p>

        {/* Big Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          
          {/* Call Now Button */}
          <a
            href={`tel:${MADRASA_INFO.phone1}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-[#0A2647] hover:bg-[#06182e] text-white py-4 px-8 rounded-2xl font-black text-base shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            dir="ltr"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call: {MADRASA_INFO.phone1}</span>
          </a>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-[#2E7D32] hover:bg-[#256629] text-white py-4 px-8 rounded-2xl font-black text-base shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>واٹس ایپ رابطہ</span>
          </button>
        </div>

        {/* Secondary Online Form Trigger */}
        <div className="pt-2">
          <button
            onClick={onOpenAdmissionModal}
            className="inline-flex items-center gap-2 text-white/95 hover:text-white underline underline-offset-4 text-sm font-bold cursor-pointer transition-opacity"
          >
            <span>یا آن لائن داخلہ فارم کے ذریعے معلومات حاصل کریں</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Micro Guarantees */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-orange-100 font-semibold">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            فوری جوابی کال یا واٹس ایپ میسج
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            بوسن روڈ پر مرکزی و پرسکون مقام
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            انتظامیہ سے براہِ راست رابطہ
          </span>
        </div>

      </div>
    </section>
  );
};
