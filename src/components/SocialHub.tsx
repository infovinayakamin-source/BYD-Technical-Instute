import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Facebook,
  Instagram,
  Star,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Users,
  MessageCircle
} from 'lucide-react';

interface SocialHubProps {
  lang: Language;
}

export const SocialHub: React.FC<SocialHubProps> = ({ lang }) => {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'आधिकारिक सोशल मीडिया व समीक्षाएं' : 'Official Channels & Reviews'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
            {lang === 'hi' ? 'BYD टेक्निकल से सीधे जुड़ें' : 'Connect with BYD Technical Institute'}
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            {lang === 'hi'
              ? 'हमारे फेसबुक पेज, इंस्टाग्राम और गूगल बिजनेस प्रोफाइल पर छात्रों के लाइव रिव्यू और वर्कशॉप अपडेट्स देखें।'
              : 'Follow our official verified channels for daily workshop photos, student feedback, and live batches in Ahmedabad.'}
          </p>
        </div>

        {/* 3 Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Facebook */}
          <a
            href={INSTITUTE_INFO.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-blue-500/50 hover:bg-slate-850 transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Facebook className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Official Page
              </span>
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              {INSTITUTE_INFO.socialLinks.facebookHandle}
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'संस्थान के लाइव बैच, दीक्षांत समारोह, छात्र प्लेसमेंट और नवीनतम अपडेट्स।'
                : 'Follow official Facebook updates, student batch announcements, and campus activities.'}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Verified Community
              </span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Visit Page <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* Card 2: Instagram */}
          <a
            href={INSTITUTE_INFO.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-pink-500/50 hover:bg-slate-850 transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                Instagram Profile
              </span>
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
              {INSTITUTE_INFO.socialLinks.instagramHandle}
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'लाइव एसी फॉल्ट ट्रेसिंग, पीसीबी रिपेयरिंग और वर्कशॉप प्रैक्टिकल वीडियो।'
                : 'Watch hands-on bench repair demos, live inverter circuit troubleshooting, and daily campus highlights.'}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-pink-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                Live Practical Reels
              </span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Follow Us <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* Card 3: Google Business */}
          <a
            href={INSTITUTE_INFO.socialLinks.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-amber-500/50 hover:bg-slate-850 transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                4.9 ★ (450+ Reviews)
              </span>
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              Google Maps & Reviews
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'चांदखेड़ा कैंपस का सटीक पता, ड्राइविंग डायरेक्शन और सफल छात्रों के रेटिंग रिव्यू।'
                : 'Verified Google Business profile with genuine student reviews and Chandkheda location map.'}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Chandkheda, Ahmedabad
              </span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View on Maps <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
