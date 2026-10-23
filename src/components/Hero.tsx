import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  GraduationCap,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Video,
  Users,
  ShieldCheck,
  Star,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Modern High-Tech Deep Navy Gradient Background (Zero Image) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#06122d] via-[#0b2464] to-[#040d21]">
        {/* Subtle geometric light orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#f05a28]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      </div>

      {/* Content Container (Exact AIT Hero Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle Tag / Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>
              {lang === 'hi'
                ? 'चांदखेड़ा, अहमदाबाद • 100% प्रैक्टिकल वोकेशनल ट्रेनिंग'
                : 'Chandkheda, Ahmedabad • 100% Practical Vocational Excellence'}
            </span>
          </div>

          {/* Large Editorial Headline (Exact AIT "Ignite Innovation Together" Style) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-editorial">
            {lang === 'hi' ? (
              <>
                <span className="font-devanagari-display">तकनीकी शिक्षा से</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-amber-200">
                  आत्मनिर्भर भविष्य
                </span>
              </>
            ) : (
              <>
                Ignite Innovation
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-amber-200">
                  Together
                </span>
              </>
            )}
          </h1>

          {/* Subtitle (Exact AIT Style) */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed font-body-clean">
            {lang === 'hi'
              ? 'गुजरात के अग्रणी प्रैक्टिकल ट्रेनिंग संस्थान में अनुभवी ट्रेनर्स के साथ इन्वर्टर एसी, पीसीबी, फ्रिज व आधुनिक अप्लायंसेज पर 100% लाइव काम सीखें और खुद का आत्मनिर्भर करियर व सर्विस सेंटर बनाएं।'
              : 'Collaborate with bright minds in a future-ready learning environment designed to spark creativity, practical engineering skills, and real-world appliance repair solutions.'}
          </p>

          {/* Three Action Buttons (Exact AIT Style: Orange Alumni pill, Orange Explore button, Glass Tour button) */}
          <div className="pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Button 1: Global Alumni Network (Solid Orange Pill) */}
            <a
              href="#reviews"
              className="px-5 py-3 rounded-full bg-[#f05a28] hover:bg-[#d94817] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-900/30 transition-all uppercase tracking-wide transform hover:scale-105"
            >
              {lang === 'hi' ? '5000+ सफल पूर्व छात्र (Alumni)' : 'Global Alumni Network'}
            </a>

            {/* Button 2: Explore Programs -> (Orange Rounded Button with Arrow) */}
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-900/40 transition-all uppercase tracking-wide group"
            >
              <span>{lang === 'hi' ? 'सभी कोर्सेज देखें' : 'Explore Programs'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Button 3: Virtual Tour / Demo (Glass/Dark Outline Pill) */}
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/30 transition-all"
            >
              <Video className="w-4 h-4 text-amber-300" />
              <span>{lang === 'hi' ? '1-दिन का फ्री डेमो' : 'Virtual Tour'}</span>
            </a>
          </div>

          {/* Trust Highlights Row */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'hi' ? 'हॉस्टल व भोजन ₹4,999/माह' : 'Hostel & Food @ ₹4,999/mo'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>{lang === 'hi' ? '100% लाइव लैब प्रैक्टिकल' : '100% Live Bench Practical'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{lang === 'hi' ? '4.9★ गूगल रेटिंग' : '4.9★ Google Business'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
