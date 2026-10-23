import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import { Phone, MessageCircle, GraduationCap } from 'lucide-react';

interface FloatingActionsProps {
  lang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40 group">
        <a
          href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
            lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all border-2 border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {lang === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat with Instructor'}
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${INSTITUTE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>{lang === 'hi' ? 'कॉल करें' : 'Call'}</span>
        </a>

        <a
          href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
            lang === 'hi' ? INSTITUTE_INFO.whatsappMessageHi : INSTITUTE_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#apply"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#f05a28] to-[#ea580c] text-white font-black text-xs shadow-md shadow-orange-900/30 active:scale-95 transition-transform font-heading uppercase"
        >
          <GraduationCap className="w-4 h-4" />
          <span>{lang === 'hi' ? 'डेमो क्लास' : 'Demo'}</span>
        </a>
      </div>
    </>
  );
};
