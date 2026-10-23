import React from 'react';
import { Language } from '../types';
import { PLACEMENT_PARTNERS, INSTITUTE_INFO } from '../data/instituteData';
import {
  Briefcase,
  Store,
  Award,
  CheckCircle2,
  TrendingUp,
  Building2,
  Users,
  Compass,
  Headphones,
  ArrowRight
} from 'lucide-react';

interface PlacementSectionProps {
  lang: Language;
}

export const PlacementSection: React.FC<PlacementSectionProps> = ({ lang }) => {
  const steps = [
    {
      num: '01',
      title: { en: 'Zero-Level to Master Practical', hi: 'जीरो लेवल से मास्टर प्रैक्टिकल' },
      desc: {
        en: 'Hands-on practice on real appliances with zero prior electrical knowledge needed.',
        hi: 'बिना किसी पूर्व अनुभव के असली मशीनों पर स्क्रूड्राइवर और टूल्स से सीधे काम सीखें।',
      },
    },
    {
      num: '02',
      title: { en: 'Live Fault Simulation', hi: 'लाइव फॉल्ट डायग्नोसिस' },
      desc: {
        en: 'Troubleshoot simulated real-world defects: gas leaks, inverter board errors, sensor failures.',
        hi: 'गैस लीकेज, इन्वर्टर एरर कोड और सर्किट बोर्ड की खराबी को खुद पकड़ना और ठीक करना सीखें।',
      },
    },
    {
      num: '03',
      title: { en: 'Recognized Certification', hi: 'सर्टिफिकेशन एवं इंटरव्यू तैयारी' },
      desc: {
        en: 'Get ISO certified vocational diploma recognized across Indian and Gulf service centers.',
        hi: 'मान्यता प्राप्त प्रमाण पत्र और कंपनियों के तकनीकी इंटरव्यू की पूरी तैयारी।',
      },
    },
    {
      num: '04',
      title: { en: 'Direct Placement or Own Shop', hi: '100% जॉब या खुद की दुकान' },
      desc: {
        en: 'Direct interviews with top brands or wholesale tools & spare parts setup for own shop.',
        hi: 'बड़ी कंपनियों में सीधी नौकरी या अपनी दुकान खोलने के लिए होलसेल स्पेयर पार्ट्स व ग्राहक गाइडेंस।',
      },
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            {lang === 'hi' ? '100% रोजगार एवं बिजनेस इकोसिस्टम' : 'Career & Startup Support'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'hi'
              ? 'कोर्स से लेकर पहली कमाई तक पूरा साथ'
              : 'From Learning to First Earning: 100% Support'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'हमारा लक्ष्य सिर्फ आपको सिखाना नहीं, बल्कि एक सफल टेक्नीशियन या आत्मनिर्भर बिजनेसमैन बनाना है।'
              : 'Our mission goes beyond classes — we ensure you get high-paying job offers or launch your own profitable service agency.'}
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative hover:border-amber-500/40 transition-colors shadow-lg"
            >
              <span className="text-4xl font-black text-slate-800 font-heading block mb-3">
                {s.num}
              </span>
              <h3 className="text-base font-extrabold text-white mb-2">
                {s.title[lang]}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {s.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Big Cards: Company Jobs vs Own Business */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Job Placement */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'hi' ? 'कंपनियों में 100% जॉब प्लेसमेंट' : 'Top Brand Placement Network'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {lang === 'hi'
                  ? 'हमारे छात्र भारत की शीर्ष एसी व इलेक्ट्रॉनिक्स कंपनियों (LG, Samsung, Voltas, Daikin, Blue Star, Urban Company) और दुबई, कतर, ओमान के सर्विस नेटवर्क में काम कर रहे हैं।'
                  : 'Our students work with authorized brand centers across India and overseas HVAC contractors in Dubai and Gulf countries.'}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {PLACEMENT_PARTNERS.map((partner, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-900 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {lang === 'hi'
                  ? 'शुरुआती वेतन: ₹25,000 - ₹50,000 / महीना'
                  : 'Starting package: ₹25,000 - ₹50,000 / month'}
              </span>
            </div>
          </div>

          {/* Card 2: Own Service Center */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#f05a28] flex items-center justify-center mb-4">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                {lang === 'hi' ? 'अपनी दुकान व सर्विस सेंटर खोलने में पूरी मदद' : 'Own Business & Service Center Setup'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-body-clean">
                {lang === 'hi'
                  ? 'यदि आप खुद का मालिक बनना चाहते हैं, तो हम आपको होलसेल रेट पर टूल्स व स्पेयर पार्ट्स की डायरेक्ट डीलर लिस्ट, विजिटिंग कार्ड व पंपलेट डिजाइन, और अर्बन कंपनी व जस्टडायल पर वेंडर रजिस्ट्रेशन कराने में पूरा सहयोग देते हैं।'
                  : 'If you want to be your own boss, we provide direct wholesale spare parts contacts, tool procurement kits, and vendor registration on Urban Company.'}
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-300 font-subheading">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>{lang === 'hi' ? 'होलसेल स्पेयर पार्ट्स डीलर कांटेक्ट' : 'Direct wholesale spare parts dealer contacts'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>{lang === 'hi' ? 'शुरुआती टूलकिट सिलेक्शन गाइडेंस' : 'Guidance on choosing essential repair tools'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>{lang === 'hi' ? 'लाइफटाइम टेक्निकल फोन व वीडियो कॉल सपोर्ट' : 'Lifetime technical phone & video backup support'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-400 font-bold flex items-center gap-1.5 font-subheading">
              <TrendingUp className="w-4 h-4" />
              <span>
                {lang === 'hi'
                  ? 'कमाई: ₹50,000 से ₹1,00,000+ प्रति माह खुद की दुकान में'
                  : 'Earning: ₹50,000 - ₹1,00,000+ per month in own business'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
