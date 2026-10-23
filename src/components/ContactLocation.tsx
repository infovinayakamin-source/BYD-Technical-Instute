import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  Train,
  Bus,
  CheckCircle2,
  MessageCircle,
  Building
} from 'lucide-react';

interface ContactLocationProps {
  lang: Language;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-20 bg-slate-900/80 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            {lang === 'hi' ? 'कैंपस लोकेशन एवं संपर्क' : 'Visit Our Chandkheda Campus'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'hi'
              ? 'चांदखेड़ा, अहमदाबाद में हमारा संस्थान'
              : 'Our Campus in Chandkheda, Ahmedabad'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'अहमदाबाद रेलवे स्टेशन, बस स्टैंड या गांधीनगर से आसानी से पहुंचे। कैंपस में आकर लाइव लैब्स देखें।'
              : 'Easily accessible from Ahmedabad Kalupur station, Sabarmati junction, and Gandhinagar highway.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">
                    {lang === 'hi' ? 'संस्थान का पूरा पता (Campus Address)' : 'Campus Location'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-medium">
                    <strong className="text-red-400">BYD Technical & Training Institute</strong>
                    <br />
                    {INSTITUTE_INFO.address[lang]}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-red-400" />
                      Near Bank of Baroda
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      Opp. Kilo Kulture
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-extrabold text-white">
                    {lang === 'hi' ? 'हेल्पलाइन एवं फोन' : 'Helpline & Inquiries'}
                  </h3>
                  <div className="mt-2 space-y-1">
                    <a
                      href={`tel:${INSTITUTE_INFO.phone}`}
                      className="text-base font-black text-red-400 hover:underline block"
                    >
                      {INSTITUTE_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-400">
                      {lang === 'hi' ? 'अतिरिक्त संपर्क:' : 'Landline/Alt:'} {INSTITUTE_INFO.alternatePhone}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                        lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Working Hours */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white">Email Address</h3>
                    <a
                      href={`mailto:${INSTITUTE_INFO.email}`}
                      className="text-xs text-slate-300 hover:text-red-400 font-medium block mt-1"
                    >
                      {INSTITUTE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white">
                      {lang === 'hi' ? 'संस्थान का समय (Timings)' : 'Operating Hours'}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      {INSTITUTE_INFO.hours[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Card with direct link to GMB */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex-1 flex flex-col">
              {/* Map Action Top Bar */}
              <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold text-white">
                    Google Maps: BYD Technical And Training Institute
                  </span>
                </div>
                <a
                  href={INSTITUTE_INFO.socialLinks.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-black transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'गूगल मैप में रास्ता देखें' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Map Visual iframe */}
              <div className="relative flex-1 min-h-[380px] w-full bg-slate-900">
                <iframe
                  title="BYD Technical Institute Location Chandkheda"
                  src={INSTITUTE_INFO.socialLinks.googleMapsEmbed}
                  className="w-full h-full border-0 absolute inset-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[0.9]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlaid location card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-slate-950/95 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-black text-red-400">BYD Institute Chandkheda</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Shop No 1, Samanvay Glorious, Sneh Plaza Rd, opp. Kilo Kulture, near Bank of Baroda, Tragad, Chandkheda
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Hostel: On-campus</span>
                    <a
                      href={INSTITUTE_INFO.socialLinks.googleBusiness}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 font-bold hover:underline"
                    >
                      4.9★ Google Business Link →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
