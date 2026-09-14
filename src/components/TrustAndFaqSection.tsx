import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, MADRASA_INFO } from '../data/madrasaData';

export const TrustAndFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
            <span>والدین کے عمومی سوالات • FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2647] font-arabic-heading">
            داخلے سے متعلق <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-amber-500">اہم سوالات و جوابات</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            اگر آپ کا کوئی اور سوال ہے تو ہمارے نمائندے سے فوری رابطہ کر سکتے ہیں
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 hover:border-orange-300 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-right p-4 sm:p-5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-arabic-heading text-[#0A2647]">
                    {faq.questionUrdu}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 border border-slate-200 transition-transform ${isOpen ? 'rotate-180 text-orange-600 border-orange-300' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-slate-50/80 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-urdu-nastaliq">
                    {faq.answerUrdu}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 bg-gradient-to-r from-[#0A2647] via-[#0E3A6D] to-[#0A2647] rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl text-white">
          <div className="text-right space-y-1">
            <h4 className="font-bold text-white text-base font-arabic-heading">کیا آپ کا کوئی سوال ابھی باقی ہے؟</h4>
            <p className="text-xs text-slate-300">ہمارے پرنسپل صاحب خود کال پر آپ کے تمام خدشات دور فرمائیں گے۔</p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${MADRASA_INFO.phone1}`}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-amber-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{MADRASA_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${encodeURIComponent('السلام علیکم! میں مدرسہ کنز العلم کے بارے میں کچھ مزید پوچھنا چاہتا ہوں۔')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>واٹس ایپ چیٹ</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
