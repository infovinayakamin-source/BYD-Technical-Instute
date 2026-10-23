import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS } from '../data/instituteData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'hi'
              ? 'विद्यार्थियों एवं अभिभावकों के मुख्य प्रश्न'
              : 'Common Questions & Clear Answers'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'एडमिशन, हॉस्टल, प्रैक्टिकल ट्रेनिंग और नौकरी से जुड़े सभी सवालों के जवाब यहाँ पढ़ें।'
              : 'Get complete clarity regarding admissions, hostel living, course eligibility, and placement.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base font-extrabold text-white">
                    {faq.question[lang]}
                  </span>
                  <div className="p-1 rounded-full bg-slate-800 shrink-0 text-red-500">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in slide-in-from-top-2 duration-150">
                    <p>{faq.answer[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold text-white">
              {lang === 'hi' ? 'कोई अन्य सवाल रह गया है?' : 'Still have more questions?'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'hi'
                ? 'हमारे टेक्निकल ट्रेनर से सीधे व्हाट्सएप या फोन पर बात करें।'
                : 'Chat with our instructor directly on WhatsApp or call our campus desk.'}
            </p>
          </div>

          <a
            href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
              lang === 'hi'
                ? 'नमस्ते, मुझे BYD टेक्निकल इंस्टीट्यूट के बारे में एक सवाल पूछना है।'
                : 'Hello, I have a question regarding BYD Technical Institute.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर पूछें' : 'Ask on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
