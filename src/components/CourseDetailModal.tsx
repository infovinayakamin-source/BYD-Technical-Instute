import React from 'react';
import { Course, Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  X,
  Clock,
  Award,
  CheckCircle2,
  Wrench,
  DollarSign,
  TrendingUp,
  GraduationCap,
  MessageCircle,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  lang: Language;
  onClose: () => void;
  onSelectCourseForAdmission: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  lang,
  onClose,
  onSelectCourseForAdmission,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* If course has uploaded assets, show 100% opacity banner */}
        {course.image && course.image.startsWith('/assets/') && (
          <div className={`relative w-full h-48 sm:h-64 flex items-center justify-center border-b border-slate-700 overflow-hidden ${
            course.id === 'ac-inverter-master' ? 'bg-gradient-to-b from-white via-slate-50 to-slate-100 p-3' : 'bg-slate-950'
          }`}>
            <img
              src={course.image}
              alt={course.title[lang]}
              className={`h-full w-full opacity-100 ${
                course.id === 'ac-inverter-master'
                  ? 'object-contain object-center'
                  : 'object-cover object-center'
              }`}
              style={{ opacity: 1 }}
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-black text-white border border-slate-700 transition-colors z-20 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Header with technical gradient banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#0b2464] via-[#0e2c7a] to-[#071740] shrink-0 border-b border-blue-900/60">
          {/* Close button (only shown here if not already rendered above) */}
          {(!course.image || !course.image.startsWith('/assets/')) && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-slate-300 hover:text-white border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Badges and title inside header */}
          <div className="pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-[#f05a28] text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
                {course.badge[lang]}
              </span>
              <span className="bg-black/50 text-emerald-400 border border-emerald-500/30 font-bold text-xs px-3 py-1 rounded-full">
                100% Practical Workshop
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight font-heading">
              {course.title[lang]}
            </h2>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'hi' ? 'अवधि (Duration)' : 'Duration'}
              </span>
              <p className="text-sm font-bold text-white mt-1">{course.duration[lang]}</p>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'hi' ? 'स्तर (Level)' : 'Skill Level'}
              </span>
              <p className="text-sm font-bold text-white mt-1">{course.level[lang]}</p>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-blue-400" />
                {lang === 'hi' ? 'जॉब सैलरी' : 'Job Salary'}
              </span>
              <p className="text-xs font-bold text-emerald-400 mt-1">{course.expectedSalary[lang]}</p>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                {lang === 'hi' ? 'दुकान / बिजनेस' : 'Own Business'}
              </span>
              <p className="text-xs font-bold text-amber-400 mt-1">₹50,000+ / mo</p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {lang === 'hi' ? 'कोर्स विवरण' : 'Course Overview'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              {course.shortDesc[lang]}
            </p>
          </div>

          {/* Module-by-Module Syllabus */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {lang === 'hi' ? 'विस्तृत प्रैक्टिकल सिलेबस' : 'Detailed Practical Modules'}
            </h3>
            <div className="space-y-3">
              {course.syllabus.map((mod, idx) => (
                <div key={idx} className="bg-slate-950/60 rounded-xl p-4 border border-slate-800">
                  <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center justify-center font-black">
                      {idx + 1}
                    </span>
                    {mod.module[lang]}
                  </h4>
                  <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {mod.topics[lang].map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Tools You Will Master */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
              <Wrench className="w-4 h-4" />
              {lang === 'hi' ? 'लैब में सिखाए जाने वाले मुख्य टूल्स' : 'Tools You Will Master in Lab'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.toolsLearned[lang].map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5"
                >
                  <Wrench className="w-3 h-3 text-red-400" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>{lang === 'hi' ? 'हॉस्टल उपलब्ध:' : 'Hostel Available:'}</span>{' '}
            <strong className="text-white">₹{INSTITUTE_INFO.hostelFeeMonthly}/mo (भोजन सहित)</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                (lang === 'hi'
                  ? `नमस्ते BYD टेक्निकल, मुझे "${course.title.hi}" का सिलेबस व फीस जानना है।`
                  : `Hello BYD Technical, please send syllabus & fee details for "${course.title.en}".`)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onSelectCourseForAdmission(course.id);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f05a28] to-[#ea580c] text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-900/30 hover:from-[#ea580c] hover:to-[#c2410c] transition-all font-heading uppercase"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'hi' ? 'डेमो क्लास के लिए चुनें' : 'Select for Demo Class'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
