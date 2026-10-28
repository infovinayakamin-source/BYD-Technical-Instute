import React, { useState } from 'react';
import { GalleryItem, Language } from '../types';
import { GALLERY_ITEMS, INSTITUTE_INFO } from '../data/instituteData';
import {
  Wrench,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Instagram,
  Sparkles,
  Award,
  X,
  Layers
} from 'lucide-react';

interface LabGalleryProps {
  lang: Language;
}

export const LabGallery: React.FC<LabGalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedStation, setSelectedStation] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', en: 'All Workstations', hi: 'सभी वर्कशॉप्स' },
    { id: 'lab', en: 'Practical Labs', hi: 'प्रैक्टिकल लैब्स' },
    { id: 'students', en: 'Student Batches', hi: 'छात्र वर्कशॉप' },
    { id: 'tools', en: 'Modern Toolkits', hi: 'आधुनिक टूल्स' },
    { id: 'certificates', en: 'Certifications', hi: 'प्रमाण पत्र वितरण' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const getStationIcon = (category: string) => {
    switch (category) {
      case 'lab':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'students':
        return <Wrench className="w-6 h-6 text-blue-400" />;
      case 'tools':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      case 'certificates':
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            {lang === 'hi' ? 'चांदखेड़ा कैंपस एवं वर्कशॉप्स' : 'Campus & Lab Experience'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            {lang === 'hi'
              ? 'लाइव प्रैक्टिकल लैब और वर्कशॉप स्टेशन'
              : 'Our Real Practical Workshops in Action'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'देखें कैसे हमारे छात्र असली एसी, फ्रिज, वॉशिंग मशीन और पीसीबी बोर्ड पर अपने हाथों से काम करना सीखते हैं।'
              : 'See how students work with real test instruments, recovery machines, vacuum manifolds, and circuit testers.'}
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#f05a28] text-white shadow-lg shadow-orange-600/30 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {lang === 'hi' ? cat.hi : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Workstations Grid (Zero Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedStation(item)}
              className="group relative rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-[#0a1e4a]/40 to-slate-900 border border-slate-800 hover:border-[#f05a28]/60 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStationIcon(item.category)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0b2464] border border-blue-500/30 text-blue-200">
                    Chandkheda Lab
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                  {item.title[lang]}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% Practical
                </span>
                <span className="text-[#f05a28] font-bold group-hover:translate-x-1 transition-transform">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Reels Link Banner */}
        <div className="mt-12 text-center">
          <a
            href={INSTITUTE_INFO.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-pink-500/30 text-slate-200 text-xs sm:text-sm font-bold shadow-lg hover:border-pink-500 transition-all group"
          >
            <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>
              {lang === 'hi'
                ? 'हमारे इंस्टाग्राम @byd_technical_institute पर 100+ प्रैक्टिकल वीडियो और रील्स देखें'
                : 'Watch 100+ practical demo reels on our Instagram @byd_technical_institute'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Detail Modal (Zero Image) */}
      {selectedStation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedStation(null)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStation(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-[#f05a28] flex items-center justify-center mb-4 border border-orange-500/30">
              {getStationIcon(selectedStation.category)}
            </div>

            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0b2464] border border-blue-500/30 text-blue-200 inline-block mb-2">
              Chandkheda Technical Campus
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              {selectedStation.title[lang]}
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {selectedStation.description[lang]}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Live Equipment & Safety Protocol
              </span>
              <button
                onClick={() => setSelectedStation(null)}
                className="px-4 py-1.5 rounded-lg bg-[#f05a28] text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
