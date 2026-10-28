import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Instagram,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Video,
  Users,
  ShieldCheck,
  Star,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Play
} from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#060c1a]">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/aistudio/image_83e41965.png"
          alt="Technical Education Future"
          className="w-full h-full object-cover object-center opacity-40 pointer-events-none select-none transition-opacity duration-300"
          style={{ opacity: 0.4 }}
        />
        {/* Deep contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/95 via-[#060c1a]/85 to-[#060c1a]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a] via-transparent to-[#060c1a]/70 pointer-events-none" />
        
        {/* Instagram Pink & Red Glow Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Calls to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Instagram Verified Pill & Campus Kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href={INSTITUTE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold hover:border-pink-400 transition-colors group"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>{INSTITUTE_INFO.socialLinks.instagramHandle}</span>
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-black">
                  ✓
                </span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Chandkheda, Ahmedabad</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-editorial">
              {lang === 'hi' ? (
                <>
                  <span className="font-devanagari-display">सीखने की कोई सीमा नहीं</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#f05a28]">
                    100% प्रैक्टिकल ट्रेनिंग
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
              {/* Button 1: Instagram Profile */}
              <a
                href={INSTITUTE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-pink-600/30 transition-all transform hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>{lang === 'hi' ? 'इंस्टाग्राम रील्स देखें' : 'Watch Instagram Reels'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Button 2: Explore Courses */}
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f05a28] hover:bg-[#d94817] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-900/30 transition-all uppercase tracking-wide group"
              >
                <span>{lang === 'hi' ? 'कोर्सेज देखें' : 'Practical Courses'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Button 3: Free Demo Booking */}
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{lang === 'hi' ? '1-दिन फ्री डेमो क्लास' : 'Book Free Demo'}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Live Practical</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Chandkheda Workshop</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9★ Google (450+ Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instagram Style Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 p-5 shadow-2xl overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/20 blur-2xl rounded-full pointer-events-none" />

              {/* Top Profile Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-pink-500 shadow-md shrink-0 overflow-hidden flex items-center justify-center">
                    <img
                      src={INSTITUTE_INFO.logoUrl}
                      alt="BYD Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-black text-white">{INSTITUTE_INFO.socialLinks.instagramHandle}</h3>
                      <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-black">
                        ✓
                      </span>
                    </div>
                    <span className="text-[11px] text-pink-400 font-bold block">
                      B.Y.D Technical & Training
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      "BUILD YOUR DREAMS"
                    </span>
                  </div>
                </div>

                <a
                  href={INSTITUTE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-colors"
                >
                  Follow
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 py-3 border-b border-slate-800 text-center">
                <div>
                  <span className="text-base font-black text-white block">100+</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Reels</span>
                </div>
                <div>
                  <span className="text-base font-black text-white block">5,000+</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Students</span>
                </div>
                <div>
                  <span className="text-base font-black text-emerald-400 block">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Practical</span>
                </div>
              </div>

              {/* Featured Reel Card Preview */}
              <div className="mt-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800">
                <img
                  src="/assets/aistudio/image_e10e3466.png"
                  alt="AC Practical Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-amber-300 flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  54.3K Views
                </div>

                <div className="absolute bottom-2.5 inset-x-3 text-left">
                  <span className="text-[10px] font-extrabold text-pink-400 uppercase">
                    Featured Workshop Reel
                  </span>
                  <p className="text-xs font-bold text-white line-clamp-1 leading-snug">
                    Dual Inverter AC Gas Charging & PCB Live Tracing
                  </p>
                </div>
              </div>

              {/* Card Footer Direct Actions */}
              <div className="mt-4 pt-2 grid grid-cols-2 gap-2">
                <a
                  href={INSTITUTE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Open Instagram</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs text-center flex items-center justify-center gap-1.5"
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
