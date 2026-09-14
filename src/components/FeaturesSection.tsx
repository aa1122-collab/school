import React from 'react';
import { 
  BookMarked, Heart, Award, Scale, Smile, CheckCircle2, 
  Video, ShieldCheck, Sparkles, Check 
} from 'lucide-react';
import { FEATURES, STATS } from '../data/madrasaData';
import { Feature } from '../types';

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookMarked':
        return <BookMarked className="w-6 h-6 text-amber-600" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-orange-600" />;
      case 'Balance':
        return <Scale className="w-6 h-6 text-emerald-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-teal-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>والدین کا بھرپور اعتماد • WHY PARENTS TRUST US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2647] font-arabic-heading tracking-wide">
            مدرسہ کنز العلم کی <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-amber-500">امتیازی خصوصیات</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            ہم روایتی سختی کے بجائے نبوی اسلوب پر پیار، محبت اور سائنسی طریقہ کار سے بچوں کی علمی و اخلاقی تربیت کرتے ہیں۔
          </p>
        </div>

        {/* 4 Trust Stats Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 text-center shadow-xs border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <span className="block text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-arabic-heading tracking-tight mb-1 group-hover:scale-105 transition-transform">
                {stat.numberUrdu}
              </span>
              <p className="font-bold text-slate-800 text-sm leading-snug">
                {stat.labelUrdu}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase font-modern-ui">
                {stat.labelEnglish}
              </p>
            </div>
          ))}
        </div>

        {/* Bullet-Style Modern Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {FEATURES.map((feature: Feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 group"
            >
              {/* Feature Icon */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-orange-50 border border-slate-200 group-hover:border-orange-200 flex items-center justify-center shrink-0 shadow-xs transition-colors">
                {getFeatureIcon(feature.iconName)}
              </div>

              {/* Text info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-orange-600 transition-colors font-arabic-heading">
                    {feature.titleUrdu}
                  </h3>
                  <span className="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md font-semibold">
                    {feature.category}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {feature.subtitleUrdu}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Zero Corporal Punishment & Safety Guarantee Card */}
        <div className="mt-12 bg-gradient-to-r from-[#0A2647] via-[#0E3A6D] to-[#0A2647] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3 text-right">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>والدین کے لیے تسلی بخش ضمانت</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-arabic-heading text-white">
                مار پیٹ اور بدتہذیبی سے 100% پاک، پرسکون ماحول
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                ہمارے نزدیک ہر بچہ ایک قیمتی امانت ہے۔ سختی اور خوف کے بجائے محبت، تشویق اور انفرادی توجہ سے بچے کا ذہن کھولا جاتا ہے تاکہ وہ خوشی سے مسجد اور مدرسہ آئے۔
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-amber-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  روزانہ ذاتی ڈائری فیڈ بیک
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  والدین سے ماہانہ مشاورتی میٹنگ
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  کیمرہ مانیٹرنگ اسکرین نگران کے دفتر میں
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#FF7A00] via-amber-400 to-emerald-400 p-1 flex items-center justify-center shadow-2xl">
                <div className="w-full h-full bg-[#0A2647] rounded-full flex flex-col items-center justify-center text-center p-4">
                  <span className="text-3xl font-black text-amber-300">100%</span>
                  <span className="text-xs font-bold text-white mt-1">محفوظ و پرسکون</span>
                  <span className="text-[10px] text-slate-300">طرزِ تدریس</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
