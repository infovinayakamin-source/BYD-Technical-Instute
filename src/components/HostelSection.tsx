import React from 'react';
import { Language } from '../types';
import { HOSTEL_DETAILS, INSTITUTE_INFO } from '../data/instituteData';
import {
  Home,
  Utensils,
  Bed,
  Wifi,
  Zap,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Clock
} from 'lucide-react';

interface HostelSectionProps {
  lang: Language;
}

export const HostelSection: React.FC<HostelSectionProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-blue-400" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="hostel" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual highlights of the hostel */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-6 border border-orange-500/30 shadow-2xl">
              {/* Highlight Price Tag */}
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-[#f05a28] to-[#ea580c] text-white font-black px-4 py-1.5 rounded-full shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 font-subheading">
                <Sparkles className="w-4 h-4 fill-white" />
                {lang === 'hi' ? 'केवल ₹4,999 / महीना' : 'Only ₹4,999 / Month'}
              </div>

              {/* Feature highlight banner (Zero Image) */}
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-gradient-to-br from-[#0b2464] via-slate-900 to-[#071740] p-6 flex flex-col justify-between border border-blue-900/50">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#f05a28] flex items-center justify-center border border-orange-500/30">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white font-heading">
                    {lang === 'hi' ? 'BYD छात्र हॉस्टल सुविधा' : 'BYD Student Hostel'}
                  </h3>
                  <p className="text-xs text-blue-200">
                    {lang === 'hi'
                      ? 'सुरक्षित, स्वच्छ एवं शांत वातावरण — 3 समय शुद्ध भोजन सहित'
                      : 'Clean, safe, study-friendly environment with 3 daily home-cooked meals'}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-white pt-3 border-t border-white/10">
                  <span className="bg-black/60 px-2.5 py-1 rounded-md font-bold text-slate-300">
                    Chandkheda, Ahmedabad
                  </span>
                  <span className="bg-emerald-500 text-slate-950 font-black px-2.5 py-1 rounded-md">
                    {lang === 'hi' ? 'भोजन सहित' : 'With Food'}
                  </span>
                </div>
              </div>

              {/* Summary badge banner */}
              <div className="mt-5 space-y-2.5 text-xs text-slate-200">
                <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <Utensils className="w-4 h-4 text-red-400 shrink-0" />
                  <span>
                    <strong className="text-white font-bold">{lang === 'hi' ? '3 समय शुद्ध भोजन:' : '3 Home Meals:'}</strong>{' '}
                    {lang === 'hi' ? 'सुबह नाश्ता, दोपहर का भोजन और रात का ताजा खाना' : 'Daily hygienic breakfast, lunch & dinner'}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>
                    <strong className="text-white font-bold">{lang === 'hi' ? 'कैंपस से दूरी:' : 'Location:'}</strong>{' '}
                    {lang === 'hi' ? 'संस्थान से केवल 2 मिनट की पैदल दूरी पर' : '2 minutes walking distance from BYD Institute'}
                  </span>
                </div>
              </div>

              {/* Student quote */}
              <div className="mt-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-200/90 italic">
                "{lang === 'hi'
                  ? 'मैं राजस्थान से आया था। हॉस्टल का माहौल एकदम घर जैसा है, खाना बहुत स्वादिष्ट है और पढ़ाई के लिए शांत वातावरण है।'
                  : 'I came from Rajasthan. The hostel felt just like home, hygienic food and perfect study atmosphere.'}"
                <span className="block mt-1 font-bold text-red-300 not-italic">— Amit Saini (Student)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Content, Amenities list */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Home className="w-3.5 h-3.5" />
              {lang === 'hi' ? 'बाहर के छात्रों के लिए विशेष सुविधा' : 'Outstation Student Accommodation'}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'hi' ? (
                <>
                  हॉस्टल एवं भोजन सुविधा —{' '}
                  <span className="text-red-400">घर जैसा आराम व सुरक्षा</span>
                </>
              ) : (
                <>
                  Hostel & Food Facility —{' '}
                  <span className="text-red-400">Affordable & Secure Stay</span>
                </>
              )}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'hi'
                ? 'गुजरात के विभिन्न जिलों और पूरे भारत (राजस्थान, यूपी, बिहार, एमपी, आदि) से आने वाले छात्रों के लिए BYD टेक्निकल इंस्टीट्यूट ने आधुनिक, स्वच्छ और सुरक्षित हॉस्टल की व्यवस्था की है। केवल ₹4,999 प्रति माह में रहने और 3 समय के खाने की पूरी सुविधा उपलब्ध है।'
                : 'For students coming from outside Ahmedabad or other states across India, BYD Technical Institute offers clean, disciplined, and secure hostel lodging right next to the campus at an all-inclusive fee of ₹4,999/month with nutritious food.'}
            </p>

            {/* Grid of 6 Amenities */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HOSTEL_DETAILS.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white">
                      {item.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {item.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f05a28] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-900/30 transition-all font-heading uppercase"
              >
                {lang === 'hi' ? 'हॉस्टल सीट अभी बुक करें' : 'Reserve Hostel Seat'}
              </a>

              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'hi'
                    ? 'नमस्ते BYD इंस्टीट्यूट, मुझे हॉस्टल की फोटो और सीट की उपलब्धता जाननी है।'
                    : 'Hello BYD Institute, I would like to inquire about hostel seat availability and photos.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'hi' ? 'हॉस्टल इंक्वायरी व्हाट्सएप' : 'WhatsApp Hostel Inquiry'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
