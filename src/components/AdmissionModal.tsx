import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, Send, Sparkles, BookOpen } from 'lucide-react';
import { COURSES, MADRASA_INFO } from '../data/madrasaData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'حفظ القرآن الکریم',
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setSelectedCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp prefilled message
    const waText = 
`*نئی داخلہ درخواست - مدرسہ کنز العلم ایجوکیشن سسٹم*
---------------------------------------
👤 *والد / سرپرست کا نام:* ${parentName}
📱 *رابطہ نمبر:* ${phone}
🧒 *طالب علم کا نام:* ${studentName}
🎂 *عمر:* ${studentAge} سال
📚 *خواہش مند کورس:* ${selectedCourse}
📝 *اضافی معلومات:* ${notes || 'کوئی نہیں'}
---------------------------------------
برائے مہربانی داخلہ ٹیسٹ اور فیس کی تفصیلات سے آگاہ فرمائیں۔`;

    // Open WhatsApp with populated message
    const encodedText = encodeURIComponent(waText);
    window.open(`https://wa.me/${MADRASA_INFO.whatsappFormatted1}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
    
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setParentName('');
    setPhone('');
    setStudentName('');
    setStudentAge('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-right text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#0A2647] font-arabic-heading">
              درخواست موصول ہو گئی ہے!
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-urdu-nastaliq">
              آپ کی داخلہ تفصیلات واٹس ایپ پر منتقل کر دی گئی ہیں۔ مدرسہ کی انتظامیہ جلد آپ سے رابطہ کرے گی۔ آپ خود بھی نیچے دیے گئے نمبرز پر کال کر سکتے ہیں۔
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-right">
              <div className="flex justify-between text-xs text-slate-600">
                <span className="font-bold text-slate-900">{parentName}</span>
                <span>والد کا نام:</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span className="font-bold text-slate-900">{studentName} ({studentAge} سال)</span>
                <span>بچے کا نام:</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span className="font-bold text-orange-600">{selectedCourse}</span>
                <span>منتخب کورس:</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${MADRASA_INFO.phone1}`}
                className="flex-1 py-3 bg-gradient-to-r from-[#FF7A00] to-amber-500 hover:from-amber-400 hover:to-[#FF7A00] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {MADRASA_INFO.phone1}</span>
              </a>

              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs cursor-pointer transition-colors"
              >
                مکمل ہوا
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div>
            {/* Header */}
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>آن لائن داخلہ انکوائری 2026-2027</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2647] font-arabic-heading">
                داخلہ فارم و فیس کی معلومات
              </h3>
              <p className="text-xs text-slate-500">
                براہِ کرم بنیادی معلومات درج کریں۔ ہمارے نمائندے فوری رہنمائی فراہم کریں گے۔
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* Parent Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 text-xs">
                  والد / سرپرست کا نام *
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: محمد احمد"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all bg-white text-slate-900 placeholder-slate-400 text-right"
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 text-xs">
                  موبائل / واٹس ایپ نمبر *
                </label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="0302-1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all bg-white text-slate-900 placeholder-slate-400 text-left font-mono"
                />
              </div>

              {/* Student Name & Age */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">
                    بچے کا نام *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: حمزہ احمد"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all bg-white text-slate-900 placeholder-slate-400 text-right"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">
                    بچے کی عمر (سال) *
                  </label>
                  <input
                    type="number"
                    min="4"
                    max="20"
                    required
                    placeholder="مثال: 9"
                    value={studentAge}
                    onChange={(e) => setStudentAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all bg-white text-slate-900 placeholder-slate-400 text-right"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 text-xs">
                  مطلوبہ تعلیمی شعبہ / کورس *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all bg-white text-slate-900 text-right font-medium"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.titleUrdu} className="bg-white text-slate-900">
                      {course.titleUrdu} ({course.duration})
                    </option>
                  ))}
                  <option value="صرف 2 سالہ حفظ القرآن فاسٹ ٹریک" className="bg-white text-slate-900">صرف 2 سالہ حفظ القرآن فاسٹ ٹریک</option>
                  <option value="عصری اسکول تعلیم مع حفظ" className="bg-white text-slate-900">عصری اسکول تعلیم مع حفظ</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 text-xs">
                  کوئی سوال یا سابقہ تعلیم (اختیاری)
                </label>
                <textarea
                  rows={2}
                  placeholder="مثال: بچے نے ناظرہ پڑھا ہوا ہے، فیس اور ہاسٹل کے بارے میں جاننا ہے..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all bg-white text-slate-900 placeholder-slate-400 text-right resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#FF7A00] to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-bold text-sm shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>درخواست واٹس ایپ پر ارسال کریں</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-slate-400">
                  🔒 آپ کی تمام تر معلومات مکمل صیغہ راز میں رکھی جاتی ہیں
                </span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
