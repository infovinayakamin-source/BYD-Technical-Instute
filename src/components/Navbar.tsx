import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Globe,
  Phone,
  MessageCircle,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Database,
  Award,
  HelpCircle,
  Clock,
  Facebook,
  Instagram
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenLeadsModal: () => void;
  leadCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenLeadsModal,
  leadCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', en: 'HOME', hi: 'होम' },
    { href: '#courses', en: 'PRACTICAL COURSES', hi: 'कोर्सेज' },
    { href: '#reels', en: 'INSTAGRAM REELS', hi: 'इंस्टाग्राम रील्स' },
    { href: '#gallery', en: 'LAB GALLERY', hi: 'प्रैक्टिकल लैब' },
    { href: '#about', en: 'ABOUT BYD', hi: 'संस्थान परिचय' },
    { href: '#reviews', en: 'REVIEWS', hi: 'समीक्षाएं' },
    { href: '#contact', en: 'CONTACT', hi: 'संपर्क' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg">
      {/* Upper Header Tier */}
      <div className="bg-[#081329] text-white border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Official Institute Logo + Name + Accreditations */}
          <a href="#home" className="flex items-center gap-3 sm:gap-3.5 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-1 shadow-md border border-white/90 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden">
              <img
                src={INSTITUTE_INFO.logoUrl}
                alt="BYD Technical & Training Institute Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors font-heading leading-tight">
                {lang === 'hi' ? 'बी.वाई.डी. टेक्निकल इंस्टीट्यूट' : 'BYD Technical & Training Institute'}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-300 tracking-wider uppercase font-subheading mt-0.5">
                <span className="text-[#f05a28] font-black">BUILD YOUR DREAMS</span>
                <span>•</span>
                <span className="text-pink-400 font-extrabold">@byd_technical_institute</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline text-emerald-300">CHANDKHEDA, AHMEDABAD</span>
              </div>
            </div>
          </a>

          {/* Right: Top Action Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Instagram Handle Pill */}
            <a
              href={INSTITUTE_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-[11px] font-extrabold shadow-sm transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow on Instagram</span>
            </a>

            {/* Grievance / WhatsApp Help Pill */}
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#d97706] hover:bg-[#b45309] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'हेल्पडेस्क' : 'Help Desk'}</span>
            </a>

            {/* Admission 2026-27 Bright Orange CTA Button (Exact AIT Style) */}
            <a
              href="#apply"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-md bg-gradient-to-r from-[#f05a28] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-xs sm:text-sm font-black shadow-md transition-all uppercase tracking-wide transform hover:scale-105"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'hi' ? 'एडमिशन 2026' : 'Admission 2026'}</span>
            </a>

            {/* Single Circular Language Button for Both Languages (हिंदी & English) */}
            <button
              type="button"
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0f2d7c] via-[#0b2464] to-[#081844] border-2 border-[#f05a28] hover:border-amber-400 shadow-md hover:shadow-orange-500/30 active:scale-95 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer select-none group shrink-0 focus:outline-none focus:ring-2 focus:ring-orange-400"
              title={
                lang === 'hi'
                  ? 'वर्तमान भाषा: हिंदी • इंग्लिश में बदलने के लिए क्लिक करें'
                  : 'Current language: English • Click to switch to हिंदी'
              }
              aria-label={`Language switch: currently ${lang === 'hi' ? 'Hindi' : 'English'}. Click to toggle.`}
            >
              {/* Mini corner Globe Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f05a28] text-white flex items-center justify-center shadow-xs border border-white/60">
                <Globe className="w-2.5 h-2.5" />
              </span>

              {/* Both languages inside the single circle */}
              <div className="flex flex-col items-center justify-center leading-none">
                <span
                  className={`text-[11px] font-black tracking-tight transition-all ${
                    lang === 'hi'
                      ? 'text-amber-300 font-extrabold scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  हिंदी
                </span>

                <span className="w-5 h-[1px] bg-white/30 my-0.5 group-hover:bg-amber-400/50 transition-colors" />

                <span
                  className={`text-[9px] font-black uppercase tracking-wider transition-all ${
                    lang === 'en'
                      ? 'text-amber-300 font-extrabold scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  ENG
                </span>
              </div>

              {/* Active Indicator Dot */}
              <span
                className={`absolute -bottom-0.5 w-2 h-2 rounded-full border border-white ${
                  lang === 'hi' ? 'bg-[#f05a28]' : 'bg-emerald-400'
                }`}
              />
            </button>

            {/* Admin Lead button for institute owner */}
            {leadCount > 0 && (
              <button
                onClick={onOpenLeadsModal}
                className="hidden xl:flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                title="Admin Leads Manager"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span className="bg-[#f05a28] text-white text-[10px] px-1.5 rounded-full font-bold">
                  {leadCount}
                </span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Lower Navigation Tier (Exact AIT Crisp White Sub-Navbar) */}
      <div className="bg-white border-b border-slate-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-slate-700 hover:text-[#0b2464] transition-colors py-3 hover:border-b-2 hover:border-[#0b2464] tracking-wide font-heading uppercase"
                >
                  {lang === 'hi' ? link.hi : link.en}
                </a>
              ))}
            </nav>

            {/* Right Sub-nav Social Icons & Quick Action Links */}
            <div className="flex items-center gap-3">
              {/* Facebook & Instagram Icons in Menu Section */}
              <div className="flex items-center gap-1.5 border-r border-slate-200 pr-3">
                <a
                  href={INSTITUTE_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs group"
                  title="Official Facebook Page"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={INSTITUTE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs group"
                  title="Official Instagram Profile"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <a
                href="#apply"
                className="px-3.5 py-1.5 rounded-md bg-[#0b2464] hover:bg-[#071740] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-xs"
              >
                {lang === 'hi' ? 'फ्री डेमो क्लास' : 'Book Free Demo'}
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 text-white">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex flex-col">
                <span className="text-xs text-white font-black flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#f05a28]" />
                  {lang === 'hi' ? 'भाषा (Language)' : 'Language'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {lang === 'hi' ? 'सर्कल बटन दबाकर भाषा बदलें' : 'Tap circle button to switch'}
                </span>
              </div>

              {/* Single Circular Language Button for Both Languages */}
              <button
                type="button"
                onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#0f2d7c] via-[#0b2464] to-[#081844] border-2 border-[#f05a28] shadow-md flex flex-col items-center justify-center cursor-pointer select-none active:scale-95 transition-all"
                aria-label="Toggle language"
                title="भाषा बदलें (हिंदी / English)"
              >
                <div className="flex flex-col items-center justify-center leading-none">
                  <span
                    className={`text-[11px] font-black transition-all ${
                      lang === 'hi'
                        ? 'text-amber-300 scale-110 font-extrabold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                        : 'text-slate-400'
                    }`}
                  >
                    हिंदी
                  </span>
                  <span className="w-5 h-[1px] bg-white/30 my-0.5" />
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider transition-all ${
                      lang === 'en'
                        ? 'text-amber-300 scale-110 font-extrabold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                        : 'text-slate-400'
                    }`}
                  >
                    ENG
                  </span>
                </div>

                <span
                  className={`absolute -bottom-0.5 w-2 h-2 rounded-full border border-white ${
                    lang === 'hi' ? 'bg-[#f05a28]' : 'bg-emerald-400'
                  }`}
                />
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-sm font-bold text-slate-200 hover:text-amber-400 border-b border-slate-800/60 uppercase"
              >
                <span>{lang === 'hi' ? link.hi : link.en}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-lg bg-gradient-to-r from-[#f05a28] to-[#ea580c] text-white font-extrabold uppercase shadow-lg shadow-orange-600/30 text-xs"
              >
                {lang === 'hi' ? 'फ्री डेमो क्लास बुक करें' : 'Book Free Demo Class'}
              </a>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 text-slate-100 font-semibold text-xs border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
                </a>
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={INSTITUTE_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600/20 text-blue-300 font-semibold text-xs border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Facebook</span>
                </a>
                <a
                  href={INSTITUTE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-pink-600/20 text-pink-300 font-semibold text-xs border border-pink-500/30 hover:bg-pink-600/30 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
