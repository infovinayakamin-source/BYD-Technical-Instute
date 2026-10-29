import React from 'react';
import { Language } from '../types';
import {
  FlaskConical,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  MonitorPlay,
  Wrench,
  ArrowRight,
  CalendarCheck,
  Star
} from 'lucide-react';

interface FacilitiesSectionProps {
  lang: Language;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ lang }) => {
  const facilities = [
    {
      num: 1,
      icon: FlaskConical,
      color: 'blue',
      badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      tagText: { en: '25+ Live Workstations', hi: '25+ लाइव वर्कस्टेशन' },
      title: {
        en: 'Advanced Laboratories',
        hi: 'अत्याधुनिक प्रैक्टिकल लैब्स'
      },
      desc: {
        en: 'Each technical bay is furnished with cutting-edge tools designed to meet the demands of live appliance & inverter PCB testing, micro-soldering, and oscilloscope tracing.',
        hi: 'प्रत्येक लैब में इन्वर्टर एसी, फ्रिज, वॉशिंग मशीन और लाइव पीसीबी के लिए आधुनिक डिजिटल ऑसिलोस्कोप, माइक्रोस्कोप, एसएमडी रीवर्क स्टेशन और टेस्ट बंचेस उपलब्ध हैं।'
      }
    },
    {
      num: 2,
      icon: ShieldCheck,
      color: 'emerald',
      badgeBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      tagText: { en: 'Live Testing Stations', hi: 'लाइव टेस्टिंग स्टेशन' },
      title: {
        en: 'Testing Bays & Diagnostic Stations',
        hi: 'लाइव टेस्टिंग बे एवं डायग्नोस्टिक सेंटर'
      },
      desc: {
        en: 'Spacious air-conditioned workshops equipped with precision digital multimeters, electronic leak detectors, vacuum stations, and continuous power backup.',
        hi: 'वातानुकूलित आधुनिक लैब्स, डिजिटल मल्टीमीटर्स, इलेक्ट्रॉनिक लीक डिटेक्टर्स, वैक्यूम स्टेशन्स और अनवरत पावर बैकअप के साथ व्यावहारिक प्रशिक्षण सुविधा।'
      }
    },
    {
      num: 3,
      icon: GraduationCap,
      color: 'purple',
      badgeBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      tagText: { en: '15+ Yrs Industry Instructors', hi: '15+ वर्ष अनुभवी ट्रेनर्स' },
      title: {
        en: 'Well-Experienced Faculty',
        hi: 'अनुभवी एवं मास्टर ट्रेनर्स'
      },
      desc: {
        en: 'The institute boasts master technical trainers with 15+ years of live field repairing and service franchise expertise, ensuring one-on-one personal guidance.',
        hi: '15+ वर्षों से फील्ड में काम कर चुके विशेषज्ञ ट्रेनर्स द्वारा हर छात्र पर व्यक्तिगत ध्यान देकर सर्किट डायग्राम से लेकर कंपोनेंट लेवल रिपेयरिंग का गहरा अभ्यास।'
      }
    },
    {
      num: 4,
      icon: Briefcase,
      color: 'teal',
      badgeBg: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
      tagText: { en: '100% Placement / Shop Setup', hi: '100% जॉब व दुकान सहायता' },
      title: {
        en: 'Excellent Placement Cell',
        hi: '100% प्लेसमेंट एवं स्टार्टअप सेल'
      },
      desc: {
        en: 'Direct hiring tie-ups with leading multi-brand service centers, AC franchises, and complete guidance for students opening their own independent electronics repair shops.',
        hi: 'मल्टी-ब्रांड सर्विस सेंटर्स में सीधी नौकरी के अवसर और अपना स्वयं का रिपेयरिंग सेंटर खोलने के लिए टूलकिट, स्पेयर पार्ट्स डीलर नेटवर्क व बिजनेस गाइडेंस।'
      }
    },
    {
      num: 5,
      icon: MonitorPlay,
      color: 'indigo',
      badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
      tagText: { en: 'Smart Circuit Displays', hi: 'स्मार्ट सर्किट स्क्रीन' },
      title: {
        en: 'Smart Interactive Classrooms',
        hi: 'स्मार्ट डिजिटल क्लासरूम'
      },
      desc: {
        en: 'Technology-enhanced classrooms with 4K circuit schematics projection, real-time waveform monitors, and digital error code diagnostics for rapid troubleshooting.',
        hi: 'डिजिटल स्क्रीन और 4K सर्किट प्रोजेक्टर के जरिए जटिल इन्वर्टर पीसीबी सर्किट्स, माइक्रोकंट्रोलर पिनआउट्स और एरर कोड्स को सरलता से समझना।'
      }
    },
    {
      num: 6,
      icon: Wrench,
      color: 'orange',
      badgeBg: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
      tagText: { en: 'Lifetime Technical Support', hi: 'लाइफटाइम टेक्निकल बैकअप' },
      title: {
        en: 'Full Toolkits & Lifetime Backup',
        hi: 'टूलकिट एवं लाइफटाइम सपोर्ट'
      },
      desc: {
        en: 'Hands-on training with professional multimeters, manifold gauges, flaring tools, and vacuum pumps, backed by lifetime instructor helpline for field challenges.',
        hi: 'ट्रेनिंग के बाद जब भी आप फील्ड में किसी कठिन एसी या पीसीबी फॉल्ट में अटकें, हमारे मास्टर ट्रेनर्स से फोन या वीडियो कॉल पर लाइफटाइम समाधान पाएं।'
      }
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag and Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0f2f7d] text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>{lang === 'hi' ? 'विश्वस्तरीय सुविधाएं' : 'Premium Facilities'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            {lang === 'hi' ? (
              <>
                <span className="font-devanagari-display">विश्वस्तरीय</span>{' '}
                <span className="text-[#0f2f7d]">सुविधाएं एवं लैब्स</span>
              </>
            ) : (
              <>
                World-Class{' '}
                <span className="text-[#0f2f7d] font-editorial">Facilities</span>
              </>
            )}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base font-body-clean">
            {lang === 'hi'
              ? 'हम आपके तकनीकी हुनर और उज्ज्वल भविष्य के लिए सर्वोत्कृष्ट प्रैक्टिकल वातावरण प्रदान करते हैं।'
              : 'We provide a world-class environment for your academic, practical and career growth.'}
          </p>
        </div>

        {/* 6 Clean Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.num}
                className="relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Decorative corner arc */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-3xl -z-0 group-hover:bg-blue-100 transition-colors" />

                {/* Number Badge Top-Right */}
                <span className="absolute top-4 right-5 text-xs font-black text-blue-600/80 font-heading">
                  {fac.num}
                </span>

                <div className="relative z-10 space-y-4">
                  {/* Colored Rounded Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 ${
                      fac.color === 'blue'
                        ? 'bg-blue-600 text-white'
                        : fac.color === 'emerald'
                        ? 'bg-emerald-600 text-white'
                        : fac.color === 'purple'
                        ? 'bg-purple-600 text-white'
                        : fac.color === 'teal'
                        ? 'bg-teal-600 text-white'
                        : fac.color === 'indigo'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-orange-500 text-white'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#0f2f7d] transition-colors">
                    {fac.title[lang]}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-clean">
                    {fac.desc[lang]}
                  </p>
                </div>

                {/* Bottom Metric Pill and Arrow */}
                <div className="relative z-10 pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 font-subheading">
                    {fac.tagText[lang]}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule a Campus Tour Call to Action */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-3 font-medium">
            {lang === 'hi'
              ? 'क्या आप हमारे चांदखेड़ा, अहमदाबाद कैंपस को प्रत्यक्ष देखना चाहते हैं?'
              : 'Want to explore our Chandkheda campus in person?'}
          </p>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0f2f7d] hover:bg-[#0c235b] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="w-5 h-5 text-orange-400" />
            <span>{lang === 'hi' ? 'कैंपस विजिट व फ्री डेमो शेड्यूल करें' : 'Schedule a Campus Tour & Free Demo'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
