import React, { useState } from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Instagram,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Play
} from 'lucide-react';

interface InstagramHighlightsProps {
  lang: Language;
}

interface HighlightStory {
  id: string;
  name: { en: string; hi: string };
  icon: string;
  badge: string;
  image: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  views: string;
}

export const InstagramHighlights: React.FC<InstagramHighlightsProps> = ({ lang }) => {
  const [activeStory, setActiveStory] = useState<HighlightStory | null>(null);

  const highlights: HighlightStory[] = [
    {
      id: 'ac-practical',
      name: { en: 'AC Practical', hi: 'एसी प्रैक्टिकल' },
      icon: '❄️',
      badge: 'Live Bench',
      image: '/assets/aistudio/image_8b60c2a1.png',
      title: {
        en: 'Dual Inverter AC Live Practical & Gas Charging',
        hi: 'ड्यूल इन्वर्टर एसी लाइव प्रैक्टिकल व गैस चार्जिंग',
      },
      description: {
        en: 'Students practicing real R32/R410A refrigerant charging with digital micron vacuum pump and manifold gauges at Chandkheda workshop.',
        hi: 'चांदखेड़ा वर्कशॉप में छात्र डिजिटल माइक्रोन वैक्यूम पंप और मैनिफोल्ड गेज से R32 और R410A गैस चार्जिंग की लाइव ट्रेनिंग करते हुए।',
      },
      views: '58.2K',
    },
    {
      id: 'pcb-lab',
      name: { en: 'PCB Lab & DSO', hi: 'पीसीबी लैब' },
      icon: '⚡',
      badge: 'Component Level',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      title: {
        en: 'Inverter Motherboard Signal Tracing on Oscilloscope',
        hi: 'ऑसिलोस्कोप पर इन्वर्टर मदरबोर्ड सिग्नल ट्रेसिंग',
      },
      description: {
        en: 'Tracing 6-channel PWM waveform signals from MCU to IPM modules and diagnosing error codes with digital storage oscilloscopes.',
        hi: 'डिजिटल स्टोरेज ऑसिलोस्कोप से माइक्रोकंट्रोलर से आईपीएम तक जाने वाले 6-चैनल पीडब्लूएम सिग्नल्स और एरर कोड्स का सटीक डायग्नोसिस।',
      },
      views: '44.9K',
    },
    {
      id: 'fridge-repair',
      name: { en: 'Fridge Repair', hi: 'फ्रिज रिपेयरिंग' },
      icon: '🧊',
      badge: 'Frost Free',
      image: '/assets/aistudio/image_01394ba0.png',
      title: {
        en: 'Inverter Compressor & Defrost Timer Diagnostic',
        hi: 'इन्वर्टर कंप्रेसर और डिफ्रॉस्ट टाइमर डायग्नोसिस',
      },
      description: {
        en: 'Hands-on troubleshooting of double door frost-free cooling cabins, R600a isobutane charging, and inverter compressor driver cards.',
        hi: 'डबल डोर फ्रॉस्ट फ्री फ्रिज, R600a गैस की सुरक्षित चार्जिंग और इन्वर्टर कंप्रेसर ड्राइवर कार्ड की हैंड-ऑन रिपेयरिंग।',
      },
      views: '36.4K',
    },
    {
      id: 'washing-machine',
      name: { en: 'Washing Machine', hi: 'वॉशिंग मशीन' },
      icon: '🧺',
      badge: 'Direct Drive',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
      title: {
        en: 'Direct Drive DD Inverter Motor & Pulsator Repair',
        hi: 'डायरेक्ट ड्राइव डीडी इन्वर्टर मोटर व पल्सेटर रिपेयर',
      },
      description: {
        en: 'Front load & top load automatic machines: gearbox dismantling, water level pressure sensor calibration, and drain pump errors.',
        hi: 'फ्रंट लोड और टॉप लोड मशीनों का गियरबॉक्स खोलना, वाटर लेवल प्रेशर सेंसर और ड्रेन पंप एरर कोड्स को दूर करने की ट्रेनिंग।',
      },
      views: '31.8K',
    },
    {
      id: 'brazing-copper',
      name: { en: 'Copper Brazing', hi: 'कॉपर ब्रेजिंग' },
      icon: '🔥',
      badge: 'Zero Leak',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      title: {
        en: 'Oxygen-LPG Copper Pipe Brazing & Nitrogen Leak Test',
        hi: 'ऑक्सीजन-एलपीजी कॉपर पाइप ब्रेजिंग व नाइट्रोजन टेस्ट',
      },
      description: {
        en: 'Learning professional leak-free silver rod brazing, swaging, and testing up to 350 PSI nitrogen pressure.',
        hi: 'सिल्वर ब्रेजिंग रॉड से कॉपर पाइप्स जोड़ना, स्वाइजिंग और 350 PSI नाइट्रोजन प्रेशर पर लीकेज चेक करने की पक्की ट्रेनिंग।',
      },
      views: '49.1K',
    },
    {
      id: 'certificates',
      name: { en: 'Certificates', hi: 'सर्टिफिकेट्स' },
      icon: '📜',
      badge: 'ISO 9001',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      title: {
        en: 'Recognized Vocational Certification & Batch Convocation',
        hi: 'मान्यता प्राप्त वोकेशनल प्रमाण पत्र वितरण',
      },
      description: {
        en: 'Graduates receive ISO certified practical diplomas recognized across Gulf companies and multi-brand service centers.',
        hi: 'कोर्स पूरा होने पर छात्रों को दुबई और भारत भर की मल्टी-ब्रांड कंपनियों में मान्य आईएसओ प्रमाणित डिप्लोमा प्रदान किया जाता है।',
      },
      views: '52.7K',
    },
    {
      id: 'campus',
      name: { en: 'Chandkheda Lab', hi: 'चांदखेड़ा कैंपस' },
      icon: '📍',
      badge: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      title: {
        en: 'Modern Practical Bay at Samanvay Glorious, Chandkheda',
        hi: 'समन्वय ग्लोरियस, चांदखेड़ा में आधुनिक प्रैक्टिकल वर्कशॉप',
      },
      description: {
        en: 'Located near Bank of Baroda, Sneh Plaza Road, Tragad, Chandkheda. Visit anytime for a free 1-day demo session.',
        hi: 'बैंक ऑफ बड़ौदा के पास, स्नेह प्लाजा रोड, त्रागड़, चांदखेड़ा, अहमदाबाद। 1 दिन के फ्री डेमो के लिए कभी भी पधारें।',
      },
      views: '63.0K',
    },
  ];

  const handleNextStory = () => {
    if (!activeStory) return;
    const currentIndex = highlights.findIndex((h) => h.id === activeStory.id);
    const nextIndex = (currentIndex + 1) % highlights.length;
    setActiveStory(highlights[nextIndex]);
  };

  const handlePrevStory = () => {
    if (!activeStory) return;
    const currentIndex = highlights.findIndex((h) => h.id === activeStory.id);
    const prevIndex = (currentIndex - 1 + highlights.length) % highlights.length;
    setActiveStory(highlights[prevIndex]);
  };

  return (
    <div className="bg-slate-950 border-b border-slate-800/80 py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Bar Kicker */}
        <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
              </div>
            </div>
            <a
              href={INSTITUTE_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-black text-white hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <span>{INSTITUTE_INFO.socialLinks.instagramHandle}</span>
              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-black" title="Verified Institute">
                ✓
              </span>
            </a>
            <span className="text-slate-500 text-xs hidden sm:inline">•</span>
            <span className="text-[11px] text-slate-400 hidden sm:inline font-medium">
              {lang === 'hi' ? 'इंस्टाग्राम स्टोरी हाइलाइट्स (टैप करें)' : 'Instagram Story Highlights (Tap to View)'}
            </span>
          </div>

          <a
            href={INSTITUTE_INFO.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-[11px] font-extrabold shadow-sm transition-all"
          >
            <span>Follow</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Horizontal Scrollable Highlights Ring List */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {highlights.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveStory(item)}
              className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none cursor-pointer"
            >
              {/* Instagram Gradient Ring */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-200">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900 p-0.5 flex items-center justify-center border-2 border-slate-950 overflow-hidden">
                  <span className="text-2xl sm:text-3xl filter drop-shadow select-none group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* Story Title */}
              <span className="text-[11px] sm:text-xs font-bold text-slate-300 group-hover:text-white transition-colors max-w-[76px] truncate text-center">
                {item.name[lang]}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Instagram Story Popup Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Story Progress Bar */}
            <div className="p-3 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between gap-3 text-white absolute top-0 inset-x-0 z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 p-0.5 border border-pink-500 overflow-hidden flex items-center justify-center">
                  <img
                    src={INSTITUTE_INFO.logoUrl}
                    alt="BYD Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-white">{INSTITUTE_INFO.socialLinks.instagramHandle}</span>
                    <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-black">
                      ✓
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 block">{activeStory.badge} • Chandkheda</span>
                </div>
              </div>

              <button
                onClick={() => setActiveStory(null)}
                className="w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close Story"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Story Visual Image */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={activeStory.image}
                alt={activeStory.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Prev / Next Click Zones */}
              <button
                onClick={handlePrevStory}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                aria-label="Previous Story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextStory}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                aria-label="Next Story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-4 right-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-600/90 text-white text-[10px] font-black uppercase mb-1.5 shadow-sm">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  {activeStory.views} Views on Instagram
                </span>
                <h3 className="text-base font-black text-white drop-shadow-md leading-tight">
                  {activeStory.title[lang]}
                </h3>
              </div>
            </div>

            {/* Story Description & Actions */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed font-body-clean">
                {activeStory.description[lang]}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={INSTITUTE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram Reel</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? `नमस्ते BYD टेक्निकल, मुझे "${activeStory.title.hi}" के बारे में जानकारी और डेमो क्लास चाहिए।`
                      : `Hello BYD Technical, I want details regarding "${activeStory.title.en}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
