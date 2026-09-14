import React from 'react';
import { Sparkles, Calendar, BookOpen, Mic, Award, CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { MADRASA_INFO } from '../data/madrasaData';

interface SpecialHighlightProps {
  onOpenAdmissionModal: (courseTitle?: string) => void;
}

export const SpecialHighlight: React.FC<SpecialHighlightProps> = ({ onOpenAdmissionModal }) => {
  return (
    <section id="two-year-hifz" className="py-16 sm:py-20 bg-gradient-to-br from-[#0A2647] via-[#0E3A6D] to-[#0A2647] text-white relative overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF7A00] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute inset-0 bg-islamic-pattern-dark" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrast Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FFB347] text-white font-extrabold px-5 py-2 rounded-full text-sm sm:text-base shadow-lg shadow-orange-500/30">
            <Sparkles className="w-4 h-4" />
            <span>خصوصی سنگِ میل • SPECIAL FAST TRACK</span>
          </div>
        </div>

        {/* Big Bold Typography Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-arabic-heading leading-tight">
            👉 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB347] via-amber-300 to-white">
              صرف 2 سال میں حافظ قرآن بنائیں
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-200 font-urdu-nastaliq leading-loose font-semibold max-w-3xl mx-auto">
            &ldquo;ادارہ ہذا سے حفظ کرنے والا حافظِ قرآن ہونے کے ساتھ ساتھ بہترین قاری اور خطیب بھی ہوگا&rdquo;
          </p>
        </div>

        {/* 4 Steps / Pillars of the 2-Year Program */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Pillar 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#FFB347] flex items-center justify-center mb-4 ring-1 ring-[#FFB347]/30">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#FFB347] uppercase tracking-wider block mb-1">
              مرحلہ 1 (پہلے 3 ماہ)
            </span>
            <h3 className="text-lg font-bold text-white mb-2">بنیادی تجوید و ناظرہ</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              مخارجِ حروف کی پختگی، درست اعراب اور تلاوت میں روانی تاکہ حفظ کی بنیاد مضبوط ترین ہو۔
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 ring-1 ring-emerald-400/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              مرحلہ 2 (ماہ 4 تا 20)
            </span>
            <h3 className="text-lg font-bold text-white mb-2">روزانہ منظم حفظ ٹریک</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              روزانہ نیا سبق، گزشتہ 5 پارے سبقی اور پرانی منزل کا سخت روزمرہ جائزہ تاکہ پارے فولاد کی طرح یاد ہوں۔
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4 ring-1 ring-amber-300/30">
              <Mic className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
              مرحلہ 3 (ساتھ ساتھ)
            </span>
            <h3 className="text-lg font-bold text-white mb-2">قراءت، حسنِ صوت و خطابت</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              صرف حافظ نہیں بلکہ محراب و منبر کا روشن چراغ! ہفتہ وار تقریری و تلاوتی مشق سے اعتماد میں اضافہ۔
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center mb-4 ring-1 ring-sky-300/30">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block mb-1">
              مرحلہ 4 (آخری 4 ماہ)
            </span>
            <h3 className="text-lg font-bold text-white mb-2">مکمل دور، امتحانات و دستار</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              مکمل 30 پاروں کی منزل کے روزانہ 2-3 پارے سنانا، وفاق المدارس طرز کے ٹیسٹ اور پروقار تقریبِ دستاربندی۔
            </p>
          </div>

        </div>

        {/* Action Callout inside Highlight Section */}
        <div className="mt-10 bg-gradient-to-r from-white/10 via-white/15 to-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-right space-y-1">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-arabic-heading">
              محدود نشستیں — نئے سیشن میں اپنے بچے کا داخلہ یقینی بنائیں
            </h4>
            <p className="text-sm text-amber-200">
              انفرادی توجہ کی خاطر ہر کلاس میں طلباء کی تعداد مخصوص رکھی جاتی ہے۔
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAdmissionModal('حفظ القرآن (2 سالہ فاسٹ ٹریک)')}
              className="bg-gradient-to-r from-[#FF7A00] to-[#FF9E2C] hover:from-[#e06c00] hover:to-[#f09020] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>2 سالہ حفظ کے لیے اپلائی کریں</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <a
              href={`tel:${MADRASA_INFO.phone1}`}
              className="bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{MADRASA_INFO.phone1}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
