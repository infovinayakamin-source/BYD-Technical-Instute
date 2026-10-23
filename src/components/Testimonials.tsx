import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TESTIMONIALS, INSTITUTE_INFO } from '../data/instituteData';
import {
  Star,
  Quote,
  MapPin,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Users,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate featured alumni testimonial (like the 3s indicator in AIT screenshot)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex] || TESTIMONIALS[0];

  return (
    <section id="reviews" className="py-20 bg-slate-50 text-slate-800 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag and Title (Exact AIT Style) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0f2f7d] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'hi' ? 'पूर्व छात्रों की आवाज़' : 'Student Voices'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            {lang === 'hi' ? (
              <>
                <span className="font-devanagari-display">हमारे छात्रों की</span>{' '}
                <span className="text-[#0f2f7d]">सफलता और अनुभव</span>
              </>
            ) : (
              <>
                What Our{' '}
                <span className="text-[#0f2f7d] font-editorial">Students Say</span>
              </>
            )}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base font-body-clean">
            {lang === 'hi'
              ? 'जानिए कि कैसे बी.वाई.डी. इंस्टीट्यूट से प्रैक्टिकल ट्रेनिंग लेकर छात्रों ने अपना करियर संवारा।'
              : 'Hear from our alumni about their practical learning and career experiences at BYD Institute.'}
          </p>
        </div>

        {/* Featured Spotlight Card (Exact AIT "Dhvani Bhatt" Style from screenshot) */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl max-w-3xl mx-auto text-center overflow-hidden">
          {/* Subtle decorative corners matching AIT design */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-50 rounded-tr-3xl -z-0" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Circular Monogram Avatar in Golden Ring (Zero Image) */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-orange-500 to-blue-600 shadow-md mb-4 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0b2464] to-[#071740] flex items-center justify-center text-white font-black text-xl sm:text-2xl font-heading border-2 border-white tracking-wider">
                {activeTestimonial.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
            </div>

            {/* 5 Golden Stars */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              {activeTestimonial.name}
            </h3>

            {/* Course & Batch */}
            <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-0.5 font-subheading">
              {activeTestimonial.courseTaken[lang]} • {activeTestimonial.city}
            </p>

            {/* Quote in Italics */}
            <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed italic max-w-2xl font-body-clean">
              "{activeTestimonial.review[lang]}"
            </p>

            {/* Certified Alumnus Pill (Exact AIT Style) */}
            <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0f2f7d] text-xs font-bold font-subheading">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'hi' ? 'बी.वाई.डी. प्रमाणित पूर्व छात्र' : 'BYD Certified Alumnus'}</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-600 font-extrabold">{activeTestimonial.currentStatus[lang]}</span>
            </div>
          </div>
        </div>

        {/* Carousel Indicators & Timer (Exact AIT Style) */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#0f2f7d]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
            3s
          </span>
        </div>

        {/* Google Reviews Direct Link */}
        <div className="mt-12 text-center">
          <a
            href={INSTITUTE_INFO.socialLinks.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>
              {lang === 'hi'
                ? 'गूगल मैप्स पर 4.9★ सभी 450+ समीक्षाएं पढ़ें'
                : 'Read all 450+ reviews on Google Business (4.9★)'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>

      </div>
    </section>
  );
};
