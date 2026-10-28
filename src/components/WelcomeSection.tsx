import React from 'react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';
import {
  Eye,
  Target,
  Check,
  ShieldCheck,
  Award,
  Users,
  Cpu,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { StatCounterCard } from './StatCounterCard';

interface WelcomeSectionProps {
  lang: Language;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Welcome Story & 4 Stat Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0b2b6b] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'hi' ? 'स्थापना 2018 • चांदखेड़ा, अहमदाबाद' : 'Since 2018 • Chandkheda, Ahmedabad'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-heading">
              {lang === 'hi' ? (
                <>
                  <span className="font-devanagari-display">स्वागत है</span>{' '}
                  <span className="text-[#0f2f7d] underline decoration-[#f05a28] decoration-4 underline-offset-4">बी.वाई.डी.</span>{' '}
                  <span className="font-devanagari-display">टेक्निकल इंस्टीट्यूट में</span>
                </>
              ) : (
                <>
                  Welcome to{' '}
                  <span className="text-[#0f2f7d] font-editorial underline decoration-[#f05a28] decoration-4 underline-offset-4">
                    BYD Technical
                  </span>{' '}
                  Institute
                </>
              )}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-body-clean">
              <p>
                {lang === 'hi' ? (
                  <>
                    <strong className="text-slate-900 font-semibold">BYD Technical & Training Institute (चांदखेड़ा, अहमदाबाद)</strong> की स्थापना गुजरात एवं देशभर के युवाओं को अत्याधुनिक इलेक्ट्रॉनिक्स, इनवर्टर एसी, पीसीबी और होम अप्लायंसेज में 100% रोजगारपरक एवं प्रायोगिक प्रशिक्षण देने के उद्देश्य से की गई थी।
                  </>
                ) : (
                  <>
                    <strong className="text-slate-900 font-semibold">BYD Technical & Training Institute (Chandkheda, Ahmedabad)</strong> was established to empower youth with industry-grade technical craftsmanship in Inverter ACs, PCB electronics, and modern smart appliances.
                  </>
                )}
              </p>
              <p>
                {lang === 'hi' ? (
                  <>
                    हमारा संस्थान <strong className="text-slate-900">ISO 9001:2015 प्रमाणित</strong> एवं एमएसएमई पंजीकृत है। हम किताबी थ्योरी के स्थान पर लाइव टेस्ट बेंच, माइक्रोस्कोप, ऑसिलोस्कोप और असली अप्लायंसेज पर स्वयं हाथ से रिपेयरिंग सिखाते हैं ताकि प्रत्येक विद्यार्थी ट्रेनिंग पूरी करते ही ₹35,000 - ₹90,000+ प्रतिमाह कमा सके या स्वयं का सर्विस सेंटर खोल सके।
                  </>
                ) : (
                  <>
                    Our institute is an <strong className="text-slate-900">ISO 9001:2015 certified</strong> practical center. Rather than rote textbook theory, our master instructors train students on live diagnostic benches, digital storage oscilloscopes, and real customer appliances so graduates can earn high income or start their own service franchise immediately.
                  </>
                )}
              </p>
            </div>

            {/* 4 Animated Metric Cards with Smooth Count-Up Motion & Hover Effects */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <StatCounterCard
                target={100}
                suffix="%"
                label={lang === 'hi' ? 'लाइव प्रैक्टिकल' : 'Practical Lab'}
                textColor="#0f2f7d"
                accentColor="#2563eb"
                gradientFrom="from-[#0f2f7d]"
                gradientTo="to-blue-500"
                delay={0}
                duration={1600}
              />

              <StatCounterCard
                target={10}
                suffix="+"
                label={lang === 'hi' ? 'कोर्स एवं अप्लायंस' : 'Programs'}
                textColor="#f05a28"
                accentColor="#f05a28"
                gradientFrom="from-[#f05a28]"
                gradientTo="to-amber-500"
                delay={150}
                duration={1200}
              />

              <StatCounterCard
                target={15}
                suffix="+"
                label={lang === 'hi' ? 'वर्ष अनुभवी ट्रेनर्स' : 'Expert Faculty'}
                textColor="#0f2f7d"
                accentColor="#1d4ed8"
                gradientFrom="from-[#0f2f7d]"
                gradientTo="to-blue-400"
                delay={300}
                duration={1400}
              />

              <StatCounterCard
                target={5000}
                suffix="+"
                label={lang === 'hi' ? 'प्रशिक्षित छात्र' : 'Technicians'}
                textColor="#059669"
                accentColor="#10b981"
                gradientFrom="from-emerald-600"
                gradientTo="to-teal-400"
                delay={450}
                duration={1900}
              />
            </div>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Govt. MSME Reg.</span>
              </div>
              <div className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
                <Users className="w-4 h-4 text-amber-600" />
                <span>100% Job / Shop Help</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Vision & Mission Cards (Exact AIT Style) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Our Vision Card (Solid Royal Navy/Blue with subtle circle decoration) */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0f2f7d] text-white p-7 sm:p-8 shadow-xl shadow-blue-900/15 group hover:shadow-2xl transition-all">
              {/* Decorative background watermark circle */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-200 uppercase tracking-widest block">
                      Aspiration & Goal
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                      {lang === 'hi' ? 'हमारा विज़न (Our Vision)' : 'Our Vision'}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-blue-50 leading-relaxed italic font-body-clean">
                  {lang === 'hi'
                    ? '"गुजरात एवं संपूर्ण भारत का ऐसा अग्रणी वोकेशनल संस्थान बनना, जो हर युवा को उच्चस्तरीय प्रायोगिक कौशल प्रदान कर आत्मनिर्भर बनाए और समाज को कुशल, ईमानदार एवं सक्षम इंजीनियर व उद्यमी दे सके।"'
                    : '"To become Gujarat’s premier technical institution that fosters excellence in hands-on appliance engineering, research, and empowers every youth to excel in industry and launch successful ventures."'}
                </p>
              </div>
            </div>

            {/* Our Mission Card (Solid Radiant Orange with checkmarks) */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f05a28] to-[#e04715] text-white p-7 sm:p-8 shadow-xl shadow-orange-900/15 group hover:shadow-2xl transition-all">
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-black/10 blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-orange-100 uppercase tracking-widest block">
                      Core Commitment
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                      {lang === 'hi' ? 'हमारा मिशन (Our Mission)' : 'Our Mission'}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-white/95 font-medium font-body-clean">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white text-[#f05a28] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>
                      {lang === 'hi'
                        ? '100% लाइव इनवर्टर एसी, पीसीबी और होम अप्लायंसेज पर त्रुटिरहित प्रैक्टिकल ट्रेनिंग देना।'
                        : 'Develop a culture of 100% hands-on practical competence on live multi-brand inverter electronics.'}
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white text-[#f05a28] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>
                      {lang === 'hi'
                        ? 'अत्याधुनिक डायग्नोस्टिक टूल्स एवं ऑसिलोस्कोप से सर्किट लेवल फॉल्ट सुधारना सिखाना।'
                        : 'Equip every student with mastery over digital oscilloscopes, SMD rework, and precision diagnostic tools.'}
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white text-[#f05a28] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>
                      {lang === 'hi'
                        ? 'कोर्स पूरा होते ही 100% जॉब प्लेसमेंट अथवा स्वयं की रिपेयरिंग शॉप शुरू करने में पूर्ण सहयोग देना।'
                        : 'Empower graduates with 100% job placement, lifetime technical backup, and complete business setup support.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
