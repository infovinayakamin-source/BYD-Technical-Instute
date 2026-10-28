import React, { useState } from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Instagram,
  Play,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Volume2,
  X,
  Send
} from 'lucide-react';

interface InstagramReelsSectionProps {
  lang: Language;
}

interface ReelItem {
  id: string;
  title: { en: string; hi: string };
  category: string;
  image: string;
  views: string;
  likes: string;
  comments: string;
  caption: { en: string; hi: string };
  tags: string[];
}

export const InstagramReelsSection: React.FC<InstagramReelsSectionProps> = ({ lang }) => {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  const reels: ReelItem[] = [
    {
      id: 'reel-1',
      title: {
        en: 'Dual Inverter AC R32 Gas Charging & Vacuum Process',
        hi: 'ड्यूल इन्वर्टर एसी R32 गैस चार्जिंग एवं वैक्यूमिंग प्रोसेस',
      },
      category: 'Inverter AC',
      image: '/assets/aistudio/image_8b60c2a1.png',
      views: '54.3K',
      likes: '3.4K',
      comments: '182',
      caption: {
        en: 'See how our students independently connect digital manifold gauges, pull 500-micron deep vacuum, and charge R-32 refrigerant by exact weight.',
        hi: 'देखें कैसे हमारे छात्र खुद डिजिटल मैनिफोल्ड गेज लगाते हैं, 500 माइक्रोन गहरा वैक्यूम करते हैं और वजन से R-32 गैस भरते हैं।',
      },
      tags: ['#InverterAC', '#GasCharging', '#BYDInstitute', '#Ahmedabad'],
    },
    {
      id: 'reel-2',
      title: {
        en: 'Live DSO Signal Tracing on Inverter AC PCB Motherboard',
        hi: 'इन्वर्टर एसी पीसीबी मदरबोर्ड पर लाइव ऑसिलोस्कोप टेस्टिंग',
      },
      category: 'PCB Electronics',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      views: '68.9K',
      likes: '5.1K',
      comments: '247',
      caption: {
        en: 'Oscilloscope PWM waveform testing from Microcontroller to IPM module. Component-level soldering and error code debugging at our Chandkheda lab.',
        hi: 'माइक्रोकंट्रोलर से आईपीएम तक जाने वाले पीडब्लूएम सिग्नल्स की ऑसिलोस्कोप जांच और एसएमडी सोल्डरिंग तकनीक।',
      },
      tags: ['#PCBRepairing', '#Electronics', '#Oscilloscope', '#BYDChandkheda'],
    },
    {
      id: 'reel-3',
      title: {
        en: 'Direct Drive Washing Machine Motor & Bearing Replacement',
        hi: 'डायरेक्ट ड्राइव वॉशिंग मशीन मोटर एवं ड्रम बेयरिंग रिपेयर',
      },
      category: 'Washing Machine',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
      views: '41.2K',
      likes: '2.8K',
      comments: '139',
      caption: {
        en: 'Complete drum dismantling, hall sensor testing, and fixing high vibration noise in fully automatic inverter washing machines.',
        hi: 'पूरी वॉशिंग मशीन का ड्रम खोलना, हॉल सेंसर चेकिंग और तेज आवाज व वाइब्रेशन की समस्या का 100% समाधान।',
      },
      tags: ['#WashingMachineRepair', '#DirectDrive', '#TechnicianSkills'],
    },
    {
      id: 'reel-4',
      title: {
        en: 'Inverter Refrigerator R600a Flammable Gas Charging Safety',
        hi: 'इन्वर्टर फ्रिज R600a गैस की सुरक्षित चार्जिंग तकनीक',
      },
      category: 'Refrigeration',
      image: '/assets/aistudio/image_01394ba0.png',
      views: '37.8K',
      likes: '2.4K',
      comments: '115',
      caption: {
        en: 'Step-by-step safety guidelines for handling flammable isobutane R600a gas, lock ring pliers, flushing capillaries, and driver inverter compressor testing.',
        hi: 'R600a ज्वलनशील गैस के साथ काम करने के सुरक्षा नियम, कैपिलरी फ्लशिंग और इन्वर्टर कंप्रेसर चेकिंग।',
      },
      tags: ['#FridgeRepair', '#R600a', '#Chandkheda', '#AhmedabadTechnical'],
    },
    {
      id: 'reel-5',
      title: {
        en: 'Student Hands-on Silver Rod Copper Brazing Workshop',
        hi: 'छात्रों द्वारा सिल्वर रॉड से लाइव कॉपर पाइप ब्रेजिंग',
      },
      category: 'Hands-on Skill',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      views: '49.7K',
      likes: '3.9K',
      comments: '194',
      caption: {
        en: 'Zero-leak copper pipe joining using oxygen-LPG torch, swaging, and 300+ PSI pressure hold test for heavy-duty commercial installations.',
        hi: 'सिल्वर ब्रेजिंग रॉड से कॉपर पाइप्स को मजबूत और लीकेज-फ्री जोड़ना और नाइट्रोजन से प्रेशर टेस्ट करना।',
      },
      tags: ['#Brazing', '#HVACTraining', '#PracticalSkills', '#Vocational'],
    },
    {
      id: 'reel-6',
      title: {
        en: 'Proud Batch Convocation & Gulf Job Selection Ceremony',
        hi: 'सफल बैच दीक्षांत समारोह एवं गल्फ जॉब सिलेक्शन',
      },
      category: 'Certification',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      views: '62.4K',
      likes: '4.7K',
      comments: '228',
      caption: {
        en: 'Honoring our trained students receiving ISO certified vocational diplomas and congratulating candidates placed in Dubai HVAC companies.',
        hi: 'सफलतापूर्वक ट्रेनिंग पूरी करने वाले छात्रों को सर्टिफिकेट वितरण और दुबई की कंपनियों में सिलेक्ट हुए छात्रों का सम्मान।',
      },
      tags: ['#Placement', '#GulfJobs', '#CertifiedTechnician', '#BYD'],
    },
  ];

  return (
    <section id="reels" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 via-rose-500/15 to-purple-500/15 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>{lang === 'hi' ? '@byd_technical_institute रील्स' : 'Viral Instagram Practical Reels'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            {lang === 'hi' ? (
              <>
                देखें हमारे{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                  लाइव प्रैक्टिकल रील्स
                </span>
              </>
            ) : (
              <>
                Watch Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                  Live Practical Reels
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'हमारे इंस्टाग्राम @byd_technical_institute पर 100+ प्रैक्टिकल वीडियो, लाइव फॉल्ट ट्रबलशूटिंग और छात्रों के काम करने का असली तरीका देखें।'
              : 'Explore real hands-on bench sessions, circuit tracing, and technician troubleshooting straight from our Chandkheda workshop.'}
          </p>

          {/* Quick Instagram Profile Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={INSTITUTE_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-pink-600/30 hover:scale-105 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{lang === 'hi' ? 'इंस्टाग्राम पर फॉलो करें' : 'Follow @byd_technical_institute'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? 'फ्री डेमो क्लास बुक करें' : 'Book Free Demo Session'}</span>
            </a>
          </div>
        </div>

        {/* 6 Instagram Reel Style Vertical Cards (9:16 aspect ratio feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-pink-500/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-600/20 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Visual with Gradient Overlay */}
              <div className="relative aspect-[4/5] sm:aspect-[9/11] w-full bg-slate-950 overflow-hidden">
                <img
                  src={reel.image}
                  alt={reel.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/40" />

                {/* Top Instagram Header in Card */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between text-white z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-black uppercase text-pink-300">
                    <Instagram className="w-3 h-3 text-pink-400" />
                    {reel.category}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-extrabold text-amber-300">
                    <Play className="w-3 h-3 fill-amber-300" />
                    {reel.views}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 text-white flex items-center justify-center shadow-2xl shadow-pink-600/50 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 inset-x-4 space-y-2 z-10">
                  <h3 className="text-base sm:text-lg font-black text-white leading-snug drop-shadow-md group-hover:text-amber-300 transition-colors font-heading">
                    {reel.title[lang]}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-rose-400 font-bold">
                        <Heart className="w-3.5 h-3.5 fill-rose-500" />
                        {reel.likes}
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {reel.comments}
                      </span>
                    </div>

                    <span className="text-[11px] font-black text-pink-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Watch Reel</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-4 bg-slate-900 border-t border-slate-800/80">
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {reel.caption[lang]}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {reel.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] text-pink-400 font-semibold bg-pink-500/10 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-pink-950/30 to-slate-900 border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 shrink-0 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Instagram className="w-7 h-7 text-pink-400" />
              </div>
            </div>
            <div>
              <span className="text-xs font-black uppercase text-pink-400 tracking-wider block">
                Official Instagram Page
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white font-heading">
                @byd_technical_institute • 100% Practical Vocational Excellence
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {lang === 'hi'
                  ? 'नए वीडियो, स्टूडेंट रिपेयर टेस्ट और जॉब अपडेट्स सबसे पहले देखने के लिए हमें इंस्टाग्राम पर फॉलो करें।'
                  : 'Follow us on Instagram to watch daily student live practicals, troubleshooting reels, and batch admissions.'}
              </p>
            </div>
          </div>

          <a
            href={INSTITUTE_INFO.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-pink-600/30 transition-all flex items-center gap-2 transform hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            <span>{lang === 'hi' ? 'इंस्टाग्राम प्रोफाइल खोलें' : 'Open Instagram Profile'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Reel Detail Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-pink-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-white">{INSTITUTE_INFO.socialLinks.instagramHandle}</span>
                    <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-black">
                      ✓
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">{selectedReel.category} • Chandkheda</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedReel(null)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Media */}
            <div className="relative w-full h-72 sm:h-80 bg-slate-950 overflow-hidden flex items-center justify-center">
              <img
                src={selectedReel.image}
                alt={selectedReel.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <a
                href={INSTITUTE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 hover:bg-black/20 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
                <span className="text-xs font-black text-white bg-black/70 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                  {lang === 'hi' ? 'इंस्टाग्राम पर पूरा रील देखें →' : 'Watch Full Reel on Instagram →'}
                </span>
              </a>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-extrabold bg-pink-600/90 px-2.5 py-1 rounded-md">
                  {selectedReel.views} Views
                </span>
                <span className="font-semibold text-rose-300 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  {selectedReel.likes} Likes
                </span>
              </div>
            </div>

            {/* Content & Action Buttons */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg font-black text-white font-heading">
                  {selectedReel.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-body-clean">
                  {selectedReel.caption[lang]}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={INSTITUTE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-pink-600/25"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'इंस्टाग्राम पर रील देखें' : 'Watch on Instagram'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? `नमस्ते BYD टेक्निकल, मुझे "${selectedReel.title.hi}" वाले कोर्स की फीस व डेमो क्लास की जानकारी चाहिए।`
                      : `Hello BYD Technical, I want details regarding "${selectedReel.title.en}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप इंक्वायरी' : 'WhatsApp Inquiry'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
