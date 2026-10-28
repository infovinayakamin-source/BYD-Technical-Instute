import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO, COURSES } from '../data/instituteData';
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Database,
  Download,
  Navigation
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenLeadsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenLeadsModal }) => {
  return (
    <footer className="bg-[#0b2464] text-white pt-16 pb-8 border-t-4 border-[#f05a28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid (Exact AIT Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Col 1: Brand & About (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-md border border-white/90 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={INSTITUTE_INFO.logoUrl}
                  alt="BYD Technical & Training Institute Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-black text-white block font-heading leading-tight">
                  {lang === 'hi' ? 'बी.वाई.डी. टेक्निकल एंड ट्रेनिंग इंस्टीट्यूट' : 'BYD Technical & Training Institute'}
                </span>
                <span className="text-xs text-amber-300 font-bold block font-subheading">
                  Excellence in Education Since 2018
                </span>
              </div>
            </div>

            <p className="text-xs text-blue-100 leading-relaxed font-body-clean">
              {lang === 'hi'
                ? 'गुजरात का प्रतिष्ठित 100% प्रैक्टिकल वोकेशनल ट्रेनिंग संस्थान। अत्याधुनिक लैब्स और अनुभवी ट्रेनर्स के साथ युवाओं को आत्मनिर्भर बनाना हमारा लक्ष्य है।'
                : 'A premier institute providing quality technical & vocational training with state-of-the-art laboratory infrastructure and highly experienced faculty.'}
            </p>

            {/* Social Icon Circles (Exact AIT Style) */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={INSTITUTE_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/60 hover:bg-[#1877f2] text-white flex items-center justify-center border border-white/20 transition-colors shadow-xs"
                title="Official Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>

              <a
                href={INSTITUTE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/60 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 text-white flex items-center justify-center border border-white/20 transition-colors shadow-xs"
                title="Official Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={INSTITUTE_INFO.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/60 hover:bg-[#ea580c] text-white flex items-center justify-center border border-white/20 transition-colors shadow-xs"
                title="Google My Business Profile"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-4 font-heading border-b border-blue-900 pb-2">
              🔗 {lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100 font-medium font-subheading">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>›</span> <span>{lang === 'hi' ? 'संस्थान परिचय' : 'About Us'}</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>›</span> <span>{lang === 'hi' ? 'विश्वस्तरीय सुविधाएं' : 'Facilities'}</span>
                </a>
              </li>
              <li>
                <a href="#hostel" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>›</span> <span>{lang === 'hi' ? 'हॉस्टल एवं मेस' : 'Hostel & Mess'}</span>
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>›</span> <span>{lang === 'hi' ? 'प्लेसमेंट सहायता' : 'Placements'}</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>›</span> <span>{lang === 'hi' ? 'लैब गैलरी' : 'Lab Gallery'}</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>›</span> <span>{lang === 'hi' ? 'छात्र समीक्षाएं' : 'Student Voices'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-4 font-heading border-b border-blue-900 pb-2">
              🎓 {lang === 'hi' ? 'कोर्सेज एवं विभाग' : 'Programs'}
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100 font-medium font-subheading">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1 line-clamp-1">
                    <span>›</span> <span>{c.title[lang]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Google Map (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white font-heading border-b border-blue-900 pb-2">
              📍 {lang === 'hi' ? 'संपर्क एवं मैप (Find Us)' : 'Contact & Find Us'}
            </h3>

            {/* Direct Phone Numbers with Blue Circles (Exact AIT Style) */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-200 block uppercase font-bold">For Admissions</span>
                  <a href={`tel:${INSTITUTE_INFO.phone}`} className="font-extrabold text-white hover:text-amber-300">
                    {INSTITUTE_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-200 block uppercase font-bold">General Inquiry</span>
                  <a href={`tel:${INSTITUTE_INFO.alternatePhone}`} className="font-extrabold text-white hover:text-amber-300">
                    {INSTITUTE_INFO.alternatePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                  <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-200 block uppercase font-bold">Email Address</span>
                  <a href={`mailto:${INSTITUTE_INFO.email}`} className="text-blue-100 hover:text-amber-300 font-medium">
                    {INSTITUTE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Mini Map Card (Exact AIT Find Us embed) */}
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-md h-28 bg-slate-900 group">
              <iframe
                title="BYD Institute Map Location"
                src={INSTITUTE_INFO.socialLinks.googleMapsEmbed}
                className="w-full h-full border-0 filter brightness-90 group-hover:brightness-100 transition-all pointer-events-none"
                loading="lazy"
              />
              <a
                href={INSTITUTE_INFO.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center gap-1.5 text-white text-xs font-black transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-300" />
                <span>{lang === 'hi' ? 'गूगल मैप में खोलें →' : 'Open in Maps →'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Campus Address & Download Brochure Banner (Exact AIT Bottom Bar Style) */}
        <div className="bg-[#071740] rounded-2xl p-4 sm:p-5 border border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 shadow-inner">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#f05a28]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                {lang === 'hi' ? 'कैंपस का पता:' : 'Campus Address:'}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {INSTITUTE_INFO.address[lang]}
              </p>
            </div>
          </div>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f05a28] hover:bg-[#d94817] text-white font-black text-xs sm:text-sm shadow-md transition-all uppercase tracking-wider shrink-0 transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'hi' ? 'ब्रोशर डाउनलोड करें' : 'Download Brochure'}</span>
          </a>
        </div>

        {/* Bottom Copyright & Admin Shortcut */}
        <div className="pt-4 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200">
          <p>
            © {new Date().getFullYear()} Ahmedabad Technical & Training Institute (BYD). All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLeadsModal}
              className="text-blue-300 hover:text-white transition-colors flex items-center gap-1"
              title="Admin Inquiries Portal"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Admin Leads</span>
            </button>
            <span>•</span>
            <span className="text-blue-300">
              ISO 9001:2015 Certified Technical Education
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
