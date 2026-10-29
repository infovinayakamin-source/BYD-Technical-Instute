import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  MapPin,
  Wrench,
  Cpu,
  Award,
  Zap,
  Building2
} from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#060c1a]">
      {/* Background Graphic & Workshop Imagery */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/aistudio/image_83e41965.png"
          alt="BYD Technical Education Campus"
          className="w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-300"
          style={{ opacity: 0.45 }}
        />
        {/* Deep contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/95 via-[#060c1a]/85 to-[#060c1a]/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a] via-transparent to-[#060c1a]/70 pointer-events-none" />
        
        {/* Subtle royal blue & amber glow */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Calls to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Campus Kicker Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/15 backdrop-blur-md border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Chandkheda, Ahmedabad Campus</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>100% Live Bench Practical</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-editorial">
              {lang === 'hi' ? (
                <>
                  <span className="font-devanagari-display">तकनीकी शिक्षा से</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#f05a28]">
                    आत्मनिर्भर भविष्य
                  </span>
                </>
              ) : (
                <>
                  Because Learning
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#f05a28]">
                    Has No Borders
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl font-normal leading-relaxed font-body-clean">
              {lang === 'hi'
                ? 'बी.वाई.डी. टेक्निकल एंड ट्रेनिंग इंस्टीट्यूट (चांदखेड़ा, अहमदाबाद) — इन्वर्टर एसी, पीसीबी कार्ड, फ्रिज, वॉशिंग मशीन व होम अप्लायंसेज पर 100% लाइव बेंच प्रैक्टिकल सीखें और अपना खुद का रिपेयरिंग सेंटर या गल्फ जॉब बनाएं।'
                : 'B.Y.D Technical & Training Institute — Master Split AC, Inverter AC, PCB board soldering, double door refrigerator, and automatic washing machine repairing with 100% live workshop equipment.'}
            </p>

            {/* Three Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Button 1: Explore Courses */}
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f05a28] hover:bg-[#d94817] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-900/30 transition-all uppercase tracking-wide group"
              >
                <span>{lang === 'hi' ? 'सभी कोर्सेज देखें' : 'Explore Programs'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Button 2: Free Demo Booking */}
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{lang === 'hi' ? '1-दिन फ्री डेमो क्लास' : 'Book Free Demo'}</span>
              </a>

              {/* Button 3: Call Campus */}
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-blue-900/40 hover:bg-blue-800/60 text-blue-200 text-xs sm:text-sm font-bold border border-blue-700/50 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>{INSTITUTE_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Govt. Recognized Certification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>100% Live Bench Practical</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9★ Google Business (450+ Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Institutional Trust & Practical Highlights Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 p-6 sm:p-7 shadow-2xl overflow-hidden group">
              {/* Decorative Subtle Blue Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/20 blur-2xl rounded-full pointer-events-none" />

              {/* Institute Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-white p-1.5 border border-slate-700 shadow-md shrink-0 flex items-center justify-center">
                  <img
                    src={INSTITUTE_INFO.logoUrl}
                    alt="BYD Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-black text-white">BYD Technical Institute</h3>
                    <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-black">
                      ✓
                    </span>
                  </div>
                  <span className="text-xs text-orange-400 font-bold block">
                    BUILD YOUR DREAMS • CHANDKHEDA
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    ISO 9001:2015 Certified Vocational Campus
                  </span>
                </div>
              </div>

              {/* 4 Feature Pillars */}
              <div className="py-4 space-y-3.5 border-b border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0 text-[#f05a28] mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">
                      {lang === 'hi' ? 'लाइव इन्वर्टर एसी व पीसीबी लैब' : 'Live Inverter AC & PCB Lab'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {lang === 'hi'
                        ? 'माइक्रोस्कोप, डीएसओ ऑसिलोस्कोप और मल्टी-ब्रांड टेस्ट बेंच।'
                        : 'Hands-on practice on real inverter motherboards & oscilloscopes.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 mt-0.5">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">
                      {lang === 'hi' ? 'पर्सनल टूलकिट एवं ब्रेजिंग अभ्यास' : 'Personal Toolkit & Brazing Practice'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {lang === 'hi'
                        ? 'कॉपर फ्लेयरिंग, नाइट्रोजन टेस्टिंग व गैस चार्जिंग का व्यक्तिगत अभ्यास।'
                        : 'Individual practice with vacuum pumps, manifold gauges & brazing.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">
                      {lang === 'hi' ? '100% जॉब व बिजनेस सेटअप सपोर्ट' : '100% Job & Business Setup'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {lang === 'hi'
                        ? 'अर्बन कंपनी ऑनबोर्डिंग, होलसेल स्पेयर पार्ट्स कांटेक्ट व आजीवन बैकअप।'
                        : 'Wholesale spare parts vendor tie-ups and lifetime technical guidance.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Direct CTA */}
              <div className="mt-5 pt-1 grid grid-cols-2 gap-2.5">
                <a
                  href="#apply"
                  className="py-2.5 px-4 rounded-xl bg-[#f05a28] hover:bg-[#d94817] text-white font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-orange-950/40 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'डेमो क्लास बुक करें' : 'Book Free Demo'}</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition-all"
                >
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
