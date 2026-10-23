import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Facebook,
  Instagram,
  MapPin,
  Star,
  ExternalLink,
  CheckCircle,
  Video,
  Users,
  Compass,
  Sparkles
} from 'lucide-react';

interface SocialHubProps {
  lang: Language;
}

export const SocialHub: React.FC<SocialHubProps> = ({ lang }) => {
  return (
    <section id="social-connect" className="py-16 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'hi' ? 'हमारे ऑफिशियल सोशल मीडिया पेजेस' : 'Official Verified Channels'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {lang === 'hi'
              ? 'सोशल मीडिया व गूगल पर हमारे साथ जुड़ें'
              : 'Connect With Us on Facebook, Instagram & Google'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'हमारे डेली प्रैक्टिकल रील्स, वीडियो, छात्र समीक्षाएं और संस्थान की लाइव लोकेशन देखें।'
              : 'Explore our daily practical training videos, student projects, hostel life, and verified Google reviews.'}
          </p>
        </div>

        {/* 3 Prominent Cards for FB, IG, GMB */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Facebook Page Card */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 border border-blue-900/40 p-6 flex flex-col justify-between shadow-xl hover:border-blue-500/50 transition-all group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 fill-blue-400" />
                </div>
                <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-500/20">
                  <CheckCircle className="w-3 h-3" />
                  Official Page
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                BYD Technical Institute-Chandkheda
              </h3>
              <p className="text-xs text-blue-300/80 font-medium mt-0.5">Ahmedabad, Gujarat</p>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                {lang === 'hi'
                  ? 'फेसबुक पर हमारे नवीनतम बैच अपडेट्स, तकनीकी शिक्षा टिप्स, जॉब वैकेंसी और संस्थान की गतिविधियां देखें।'
                  : 'Follow our Facebook page for course announcements, technician tips, job openings, and live campus updates.'}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-blue-400" />
                  Video Updates
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  Student Community
                </span>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a
                href={INSTITUTE_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all"
              >
                <span>{lang === 'hi' ? 'फेसबुक पेज पर जाएं' : 'Visit Facebook Page'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Instagram Page Card */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 border border-pink-900/40 p-6 flex flex-col justify-between shadow-xl hover:border-pink-500/50 transition-all group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-pink-600/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 group-hover:scale-110 transition-transform flex items-center justify-center shrink-0 shadow-md">
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 bg-pink-500/10 text-pink-400 text-xs font-bold px-2.5 py-1 rounded-full border border-pink-500/20">
                  <CheckCircle className="w-3 h-3" />
                  @byd_technical_institute
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                B.Y.D Technical & Training
              </h3>
              <p className="text-xs text-pink-300/80 font-medium mt-0.5">
                "Because Learning Has No Borders"
              </p>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                {lang === 'hi'
                  ? 'इंस्टाग्राम पर हमारे डेली प्रैक्टिकल वर्कशॉप रील्स, हॉस्टल फैसिलिटी (₹4,999/माह), और एसी-फ्रिज रिपेयरिंग के लाइव डेमो देखें।'
                  : 'Watch our viral practical reels, student live troubleshooting, hostel facilities, and hands-on AC/fridge diploma demos.'}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-pink-400" />
                  Practical Reels
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Hostel @ ₹4,999
                </span>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a
                href={INSTITUTE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/25 transition-all"
              >
                <span>{lang === 'hi' ? 'इंस्टाग्राम पर फॉलो करें' : 'Follow on Instagram'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3. Google My Business / Google Maps Card */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 border border-amber-900/40 p-6 flex flex-col justify-between shadow-xl hover:border-amber-500/50 transition-all group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 bg-amber-500/15 px-2.5 py-1 rounded-full border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-black text-amber-300">4.9★ Google Business</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                BYD Technical And Training Institute
              </h3>
              <p className="text-xs text-amber-300/80 font-medium mt-0.5">
                Chandkheda, Ahmedabad
              </p>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                {lang === 'hi'
                  ? 'गूगल मैप्स पर संस्थान का सत्यापित पता देखें, आसान दिशा-निर्देश (Directions) पाएं और पूर्व छात्रों की असली समीक्षाएं पढ़ें।'
                  : 'Find our verified Google My Business profile, get driving directions to our Chandkheda center, and read genuine student reviews.'}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  Google Maps Verified
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  450+ Reviews
                </span>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a
                href={INSTITUTE_INFO.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all"
              >
                <span>{lang === 'hi' ? 'गूगल मैप्स पर देखें' : 'View on Google Maps'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
