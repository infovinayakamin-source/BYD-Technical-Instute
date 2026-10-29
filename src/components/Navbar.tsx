import React, { useState, useEffect, useRef } from 'react';
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
  Instagram,
  ChevronDown,
  Check,
  Languages
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
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#home', en: 'HOME', hi: 'होम' },
    { href: '#courses', en: 'PRACTICAL COURSES', hi: 'कोर्सेज' },
    { href: '#facilities', en: 'FACILITIES', hi: 'सुविधाएं' },
    { href: '#calculator', en: 'EARNING CALCULATOR', hi: 'कमाई कैलकुलेटर' },
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
                <span className="text-blue-300 font-extrabold">ISO 9001:2015</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline text-emerald-300">CHANDKHEDA, AHMEDABAD</span>
              </div>
            </div>
          </a>

          {/* Right: Top Action Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Helpline Call */}
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-700/60 text-[11px] font-extrabold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{INSTITUTE_INFO.phoneDisplay}</span>
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

            {/* Executive International Language Switcher with Floating Menu */}
            <div className="relative shrink-0" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="relative flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-b from-[#0f285d] to-[#091838] hover:from-[#153477] hover:to-[#0f2452] border border-amber-400/50 hover:border-amber-400 text-white shadow-md shadow-blue-950/50 transition-all duration-200 cursor-pointer select-none group"
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
                aria-label="Select Language"
              >
                {/* Glowing emblem icon */}
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f05a28] to-amber-500 text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Languages className="w-3.5 h-3.5" />
                </div>

                {/* Current Language Name */}
                <span className="text-xs sm:text-sm font-black tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {lang === 'hi' ? 'हिंदी' : 'English'}
                </span>

                {/* Dropdown Chevron */}
                <ChevronDown
                  className={`w-3.5 h-3.5 text-amber-300 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Floating Menu Popover */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-800 flex items-center justify-between mb-1">
                    <span>{lang === 'hi' ? 'भाषा का चयन करें' : 'Select Language'}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  {/* Hindi Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setLang('hi');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl transition-all text-left cursor-pointer ${
                      lang === 'hi'
                        ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/40 text-white'
                        : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#f05a28] border border-orange-500/30 flex items-center justify-center font-black text-sm">
                        अ
                      </div>
                      <div>
                        <span className="text-xs font-black block text-white">हिंदी</span>
                        <span className="text-[10px] text-slate-400 block">Hindi (Official)</span>
                      </div>
                    </div>
                    {lang === 'hi' && (
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                    )}
                  </button>

                  {/* English Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl transition-all text-left cursor-pointer mt-1 ${
                      lang === 'en'
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/40 text-white'
                        : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-black text-xs">
                        EN
                      </div>
                      <div>
                        <span className="text-xs font-black block text-white">English</span>
                        <span className="text-[10px] text-slate-400 block">International</span>
                      </div>
                    </div>
                    {lang === 'en' && (
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                    )}
                  </button>
                </div>
              )}
            </div>

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
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-[#f05a28] flex items-center justify-center border border-orange-500/30">
                  <Globe className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="text-xs text-white font-bold block">
                    {lang === 'hi' ? 'भाषा (Language)' : 'Select Language'}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {lang === 'hi' ? 'वेबसाइट की भाषा बदलें' : 'Switch site language'}
                  </span>
                </div>
              </div>

              {/* Premium Segmented Toggle for Mobile */}
              <div className="inline-flex p-1 rounded-full bg-slate-950 border border-amber-400/40 shadow-inner">
                <button
                  type="button"
                  onClick={() => setLang('hi')}
                  className={`px-3 py-1.5 rounded-full text-xs font-black transition-all ${
                    lang === 'hi'
                      ? 'bg-gradient-to-r from-[#f05a28] to-[#ea580c] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-black transition-all ${
                    lang === 'en'
                      ? 'bg-gradient-to-r from-[#f05a28] to-[#ea580c] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
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
