import React, { useState } from 'react';
import { Language } from '../types';
import { COURSES } from '../data/instituteData';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Briefcase,
  Store,
  Plane,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface EarningCalculatorProps {
  lang: Language;
}

export const EarningCalculator: React.FC<EarningCalculatorProps> = ({ lang }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('ac-inverter-master');
  const [careerType, setCareerType] = useState<'business' | 'job' | 'gulf'>('business');
  const [callsPerDay, setCallsPerDay] = useState<number>(4);

  // Rate metrics based on course and career type
  const getCalculation = () => {
    let baseRate = 800; // avg service charge per call
    let partsMarginPerCall = 350;

    if (selectedCourseId === 'ac-inverter-master') {
      baseRate = 950;
      partsMarginPerCall = 600;
    } else if (selectedCourseId === 'pcb-circuit-inverter') {
      baseRate = 1200;
      partsMarginPerCall = 800;
    } else if (selectedCourseId === 'washing-machine-specialist') {
      baseRate = 750;
      partsMarginPerCall = 450;
    } else if (selectedCourseId === 'refrigerator-deep-freezer') {
      baseRate = 700;
      partsMarginPerCall = 500;
    } else if (selectedCourseId === 'ro-water-purifier') {
      baseRate = 600;
      partsMarginPerCall = 550;
    } else if (selectedCourseId === 'house-wiring-electrical') {
      baseRate = 1100;
      partsMarginPerCall = 400;
    } else if (selectedCourseId === 'geyser-water-heater') {
      baseRate = 650;
      partsMarginPerCall = 400;
    }

    if (careerType === 'business') {
      const dailyGross = (baseRate + partsMarginPerCall) * callsPerDay;
      const monthlyTotal = dailyGross * 26; // 26 working days
      const daysToRecover = 14;
      return {
        monthlyMin: Math.round(monthlyTotal * 0.8),
        monthlyMax: Math.round(monthlyTotal * 1.15),
        avgPerCall: baseRate + partsMarginPerCall,
        daysToRecover,
        noteEn: 'Based on 26 working days in own repair shop / freelance service center in India',
        noteHi: '26 कार्य दिवसों के आधार पर (अपनी दुकान या फ्रीलांस सर्विस सेंटर)',
      };
    } else if (careerType === 'job') {
      let monthlyBase = 28000;
      if (selectedCourseId === 'ac-inverter-master') monthlyBase = 32000;
      if (selectedCourseId === 'pcb-circuit-inverter') monthlyBase = 40000;
      if (selectedCourseId === 'ro-water-purifier') monthlyBase = 25000;

      const incentive = callsPerDay * 80 * 26;
      const total = monthlyBase + incentive;
      return {
        monthlyMin: Math.round(total * 0.9),
        monthlyMax: Math.round(total * 1.1),
        avgPerCall: 0,
        daysToRecover: 22,
        noteEn: 'Fixed company monthly salary + field service commission and incentives',
        noteHi: 'कंपनी का फिक्स मासिक वेतन + फील्ड इंसेंटिव एवं कमीशन',
      };
    } else {
      // Gulf / Dubai jobs
      let monthlyAed = 3200; // ~72,000 INR
      if (selectedCourseId === 'ac-inverter-master') monthlyAed = 3800; // ~85,000 INR
      if (selectedCourseId === 'pcb-circuit-inverter') monthlyAed = 4200; // ~95,000 INR

      const inrValue = monthlyAed * 23;
      return {
        monthlyMin: Math.round(inrValue * 0.92),
        monthlyMax: Math.round(inrValue * 1.08),
        avgPerCall: 0,
        daysToRecover: 10,
        noteEn: 'Free accommodation, medical insurance & visa usually provided by Gulf employers',
        noteHi: 'दुबई/सऊदी कंपनियों में मुफ्त रहना, वीजा और मेडिकल सुविधा साथ में मिलती है',
      };
    }
  };

  const result = getCalculation();

  return (
    <section id="calculator" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            {lang === 'hi' ? 'कमाई एवं फीस वसूली कैलकुलेटर' : 'Career ROI & Income Calculator'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'hi'
              ? 'कोर्स करने के बाद आप कितना कमाएंगे?'
              : 'Calculate Your Monthly Technical Earnings'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'अपना मनपसंद कोर्स और करियर मोड चुनें और देखें कि आपकी लगाई फीस 15-20 दिनों में कैसे वसूल हो जाती है।'
              : 'Explore realistic earnings based on field service charges, spare parts margins, and job roles.'}
          </p>
        </div>

        {/* Interactive Box */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Course */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'hi' ? '1. टेक्निकल कोर्स चुनें:' : '1. Select Course:'}
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:outline-none focus:border-red-500"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Career Path */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'hi' ? '2. करियर विकल्प चुनें:' : '2. Select Career Path:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCareerType('business')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      careerType === 'business'
                        ? 'bg-[#f05a28]/20 border-[#f05a28] text-orange-200 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Store className="w-5 h-5 mx-auto mb-1 text-[#f05a28]" />
                    <span className="text-xs block">
                      {lang === 'hi' ? 'खुद की दुकान' : 'Own Business'}
                    </span>
                  </button>

                  <button
                    onClick={() => setCareerType('job')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      careerType === 'job'
                        ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Briefcase className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                    <span className="text-xs block">
                      {lang === 'hi' ? 'कंपनी जॉब' : 'Company Job'}
                    </span>
                  </button>

                  <button
                    onClick={() => setCareerType('gulf')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      careerType === 'gulf'
                        ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Plane className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                    <span className="text-xs block">
                      {lang === 'hi' ? 'विदेश (Gulf Job)' : 'Gulf / Dubai'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Slider: Daily Calls (if business or job) */}
              {careerType !== 'gulf' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    <span>
                      {careerType === 'business'
                        ? lang === 'hi' ? 'प्रति दिन सर्विस कॉल:' : 'Daily Service Calls:'
                        : lang === 'hi' ? 'प्रति दिन फील्ड विजिट:' : 'Daily Field Visits:'}
                    </span>
                    <span className="text-base text-red-400 font-black">
                      {callsPerDay} {lang === 'hi' ? 'कॉल / दिन' : 'calls/day'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={callsPerDay}
                    onChange={(e) => setCallsPerDay(Number(e.target.value))}
                    className="w-full accent-[#f05a28] cursor-pointer h-2 bg-slate-950 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-body-clean">
                    <span>1 (Part-time)</span>
                    <span>4 (Normal full-day)</span>
                    <span>8 (Peak season rush)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-blue-900/60 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-2xl rounded-full" />

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-subheading">
                {lang === 'hi' ? 'अनुमानित मासिक आमदनी' : 'Estimated Monthly Income'}
              </span>

              {/* Big Earning Number */}
              <div className="my-3">
                <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent font-heading">
                  ₹{result.monthlyMin.toLocaleString('en-IN')} - ₹{result.monthlyMax.toLocaleString('en-IN')}
                </span>
                <span className="block text-xs text-slate-400 mt-1">
                  {lang === 'hi' ? 'प्रति महीना (Per Month)' : 'Every Month'}
                </span>
              </div>

              {/* Payback period badge */}
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full my-2 font-subheading">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === 'hi'
                    ? `कोर्स फीस मात्र ${result.daysToRecover} दिनों में वसूल!`
                    : `Course fees recovered in ~${result.daysToRecover} days of work!`}
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-3 italic leading-relaxed font-body-clean">
                {lang === 'hi' ? result.noteHi : result.noteEn}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="#apply"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#f05a28] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-900/30 transition-all font-heading uppercase"
                >
                  <span>{lang === 'hi' ? 'कमाई शुरू करें — अभी अप्लाई करें' : 'Start Earning — Apply Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
