import React, { useState } from 'react';
import { Course, Language } from '../types';
import { COURSES, INSTITUTE_INFO } from '../data/instituteData';
import { CourseDetailModal } from './CourseDetailModal';
import {
  Wrench,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Download,
  GraduationCap,
  MessageCircle,
  Wind,
  Refrigerator,
  Zap,
  Cpu,
  Radio,
  Droplets,
  Layers
} from 'lucide-react';

interface CourseCatalogProps {
  lang: Language;
  onSelectCourseForAdmission: (courseId: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  lang,
  onSelectCourseForAdmission,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const categories = [
    { id: 'all', en: 'All Technical Courses', hi: 'सभी टेक्निकल कोर्स' },
    { id: 'ac-hvac', en: 'AC & HVAC', hi: 'एसी एवं एचवीएसी' },
    { id: 'refrigeration', en: 'Refrigerator & Deep Freezer', hi: 'फ्रिज एवं डीप फ्रीजर' },
    { id: 'appliances', en: 'Home Appliances (Washing, RO, Geyser)', hi: 'होम अप्लायंसेज (वॉशिंग, आरओ, गीजर)' },
    { id: 'electronics', en: 'Inverter PCB Card Repair', hi: 'इन्वर्टर पीसीबी कार्ड' },
    { id: 'electrical', en: 'House Wiring & Industrial', hi: 'हाउस वायरिंग' },
  ];

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSES
      : COURSES.filter((c) => c.category === selectedCategory);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-amber-400" />;
      case 'Refrigerator':
        return <Refrigerator className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'Flame':
        return <Sparkles className="w-5 h-5 text-orange-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-indigo-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            {lang === 'hi' ? '100% प्रैक्टिकल वोकेशनल कोर्सेस' : 'Job-Oriented Practical Courses'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            {lang === 'hi'
              ? 'अपनी पसंद का टेक्निकल हुनर चुनें'
              : 'Choose Your High-Income Technical Course'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-body-clean">
            {lang === 'hi'
              ? 'किताबी थ्योरी नहीं, बल्कि असली मशीनों पर 100% प्रैक्टिकल। 15 दिन से 2 महीने में सीखकर खुद की दुकान या नौकरी शुरू करें।'
              : 'No boring textbooks. Learn directly on real home appliances and inverter equipment in Chandkheda labs.'}
          </p>

          {/* Category Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all font-subheading ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b2464] text-white shadow-lg shadow-blue-900/40 border-2 border-[#f05a28] scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {lang === 'hi' ? cat.hi : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-blue-500/40 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Header: For courses with uploaded institute assets, display the image at 100% opacity */}
              {course.image && course.image.startsWith('/assets/') ? (
                <div className="relative bg-slate-900 border-b border-slate-700 overflow-hidden flex flex-col justify-between">
                  {/* Course Image with 100% opacity */}
                  <div className="relative w-full h-56 flex items-center justify-center overflow-hidden group bg-slate-950">
                    <img
                      src={course.image}
                      alt={course.title[lang]}
                      className="w-full h-full opacity-100 select-none object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      style={{ opacity: 1 }}
                    />
                    {/* Top Row Badges */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
                      <span className="bg-[#f05a28] text-white font-black text-[11px] px-2.5 py-1 rounded-md shadow-lg uppercase tracking-wide">
                        {course.badge[lang]}
                      </span>
                      <span className="bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                        <CheckCircle2 className="w-3 h-3" />
                        100% Practical
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 z-10">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/90 text-[#f05a28] flex items-center justify-center border border-slate-700 shadow-md">
                        {getCourseIcon(course.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Duration & Location bar */}
                  <div className="bg-[#0b2464] px-4 py-2 border-t border-blue-900/50 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/50 px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {course.duration[lang]}
                    </span>
                    <span className="bg-black/50 px-2.5 py-1 rounded-md font-semibold text-amber-300 text-[11px]">
                      Chandkheda Lab
                    </span>
                  </div>
                </div>
              ) : (
                /* Card Technical Header for other courses */
                <div className="relative p-5 bg-gradient-to-br from-[#0e2763] via-[#081840] to-slate-900 border-b border-slate-800 flex flex-col justify-between min-h-[160px]">
                  {/* Top Row: Icon + Badges */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#f05a28] flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform shadow-md">
                      {getCourseIcon(course.iconName)}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="bg-[#f05a28] text-white font-black text-[11px] px-2.5 py-1 rounded-md shadow-md uppercase tracking-wide">
                        {course.badge[lang]}
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        100% Practical
                      </span>
                    </div>
                  </div>

                  {/* Duration & Level Bottom */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/50 px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {course.duration[lang]}
                    </span>
                    <span className="bg-black/50 px-2.5 py-1 rounded-md font-semibold text-amber-300 text-[11px]">
                      Chandkheda Lab
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Icon */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 shrink-0 mt-0.5">
                      {getCourseIcon(course.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-red-400 transition-colors leading-snug">
                      {course.title[lang]}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {course.shortDesc[lang]}
                  </p>

                  {/* Key Syllabus Bullet Points */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <p className="text-[11px] font-bold text-red-400/90 uppercase tracking-wider mb-2">
                      {lang === 'hi' ? 'मुख्य प्रैक्टिकल टॉपिक्स:' : 'Key Hands-on Topics:'}
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {course.keyTopics[lang].slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Earning Potential Strip */}
                  <div className="mt-4 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {lang === 'hi' ? 'जॉब / बिजनेस कमाई' : 'Earning Potential'}
                      </span>
                      <span className="font-extrabold text-red-400">
                        {course.expectedSalary[lang].split('(')[0]}
                      </span>
                    </div>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Bottom Buttons */}
                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 text-center"
                  >
                    {lang === 'hi' ? 'पूरा सिलेबस देखें' : 'View Syllabus'}
                  </button>

                  <button
                    onClick={() => onSelectCourseForAdmission(course.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#f05a28] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-xs font-black transition-all shadow-md shadow-orange-900/30 text-center font-heading uppercase"
                  >
                    {lang === 'hi' ? 'डेमो क्लास लें' : 'Join Demo'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Course Catalog (AIT Navy and Orange Theme) */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#071330] via-slate-900 to-[#0a1e4a] border border-blue-900/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              {lang === 'hi'
                ? 'क्या आप समझ नहीं पा रहे कि कौन सा कोर्स आपके लिए बेस्ट है?'
                : 'Need Guidance Choosing the Right Technical Course?'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl font-body-clean">
              {lang === 'hi'
                ? 'हमारे अनुभवी करियर काउंसलर से फ्री में बात करें। हम आपकी योग्यता, बजट और लक्ष्य के अनुसार सही कोर्स का सुझाव देंगे।'
                : 'Talk directly with our senior instructors for personalized career guidance based on your background and goals.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="px-5 py-3 rounded-xl bg-[#f05a28] hover:bg-[#d94817] text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-900/40 transition-all font-heading uppercase"
            >
              {lang === 'hi' ? 'काउंसलर से बात करें' : 'Call Counselor Now'}
            </a>
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                lang === 'hi' ? 'नमस्ते, मुझे कोर्स सिलेक्शन में गाइडेंस चाहिए।' : 'Hello, I need guidance for course selection.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={activeCourseModal}
        lang={lang}
        onClose={() => setActiveCourseModal(null)}
        onSelectCourseForAdmission={onSelectCourseForAdmission}
      />
    </section>
  );
};
