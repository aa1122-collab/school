import React, { useState } from 'react';
import { 
  BookOpenCheck, Sparkles, Mic, GraduationCap, Languages, 
  Users, Laptop, Trophy, HeartHandshake, CheckCircle2, ArrowLeft 
} from 'lucide-react';
import { COURSES } from '../data/madrasaData';
import { Course } from '../types';

interface CoursesSectionProps {
  onOpenAdmissionModal: (courseTitle?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenAdmissionModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'quran' | 'modern' | 'skills'>('all');

  const filteredCourses = selectedCategory === 'all'
    ? COURSES
    : COURSES.filter(course => course.category === selectedCategory);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Mic':
        return <Mic className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Languages':
        return <Languages className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return <BookOpenCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Decorative Glow Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>جامع تعلیمی شعبہ جات • COURSES & CURRICULUM</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2647] font-arabic-heading tracking-wide">
            ہمارے خصوصی <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-amber-500">کورسز و تعلیمی شعبے</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            مدرسہ کنز العلم میں قرآنِ کریم کے حفظ اور تجوید کے ساتھ ساتھ جدید عصری تعلیم، کمپیوٹر اسکلز اور پبلک سپیکنگ کی مکمل تربیت دی جاتی ہے۔
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0A2647] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              تمام شعبہ جات ({COURSES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('quran')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === 'quran'
                  ? 'bg-gradient-to-r from-[#FF7A00] to-amber-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              حفظ و تجوید القرآن
            </button>
            <button
              onClick={() => setSelectedCategory('modern')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === 'modern'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              عصری و کمپیوٹر تعلیم
            </button>
            <button
              onClick={() => setSelectedCategory('skills')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === 'skills'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              خطابت، اعتماد و مقابلے
            </button>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Card Top Row: Badge & Duration */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-orange-50 border border-orange-200 text-orange-700 font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                    {course.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                    {course.duration}
                  </span>
                </div>

                {/* Course Icon & Titles */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#FF7A00] group-hover:text-white transition-all shadow-xs">
                    {getCourseIcon(course.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2647] font-arabic-heading group-hover:text-orange-600 transition-colors">
                      {course.titleUrdu}
                    </h3>
                    <p className="text-xs text-slate-500 font-modern-ui">
                      {course.titleEnglish}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {course.descriptionUrdu}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-3">
                  {course.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <button
                onClick={() => onOpenAdmissionModal(course.titleUrdu)}
                className="relative z-10 w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0A2647] text-slate-800 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xs"
              >
                <span>اس کورس کے لیے داخلہ معلومات</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Courses */}
        <div className="mt-12 bg-gradient-to-r from-[#0A2647] via-[#0E3A6D] to-[#0A2647] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>مفت کونسلنگ و مشاورت</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-arabic-heading text-white">
              کیا آپ اپنے بچے کی عمر اور قابلیت کے مطابق رہنمائی چاہتے ہیں؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              ہمارے ماہر تعلیمی مشیران سے مفت مشورہ حاصل کریں اور صحیح کلاس کا انتخاب کریں۔
            </p>
          </div>
          <button
            onClick={() => onOpenAdmissionModal('مفت تعلیمی مشاورت')}
            className="bg-gradient-to-r from-[#FF7A00] to-amber-400 hover:from-amber-400 hover:to-[#FF7A00] text-slate-950 font-black px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-500/30 shrink-0 cursor-pointer active:scale-98"
          >
            مفت مشورہ حاصل کریں
          </button>
        </div>

      </div>
    </section>
  );
};
