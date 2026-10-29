import React, { useState } from 'react';
import { Language } from '../types';
import { Calculator, TrendingUp, IndianRupee, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface EarningCalculatorProps {
  lang: Language;
}

interface CourseConfig {
  id: string;
  name: { en: string; hi: string };
  defaultCallsPerDay: number;
  defaultAvgFee: number;
  minFee: number;
  maxFee: number;
}

const COURSES_CONFIG: CourseConfig[] = [
  {
    id: 'ac-inverter',
    name: {
      en: 'Inverter AC & HVAC Technician',
      hi: 'इन्वर्टर एसी एवं एचवीएसी टेक्नीशियन',
    },
    defaultCallsPerDay: 4,
    defaultAvgFee: 850,
    minFee: 500,
    maxFee: 2500,
  },
  {
    id: 'refrigerator',
    name: {
      en: 'Refrigerator & Deep Freezer',
      hi: 'रेफ्रिजरेटर एवं डीप फ्रीजर',
    },
    defaultCallsPerDay: 3,
    defaultAvgFee: 650,
    minFee: 400,
    maxFee: 1800,
  },
  {
    id: 'washing-machine',
    name: {
      en: 'Automatic Washing Machine',
      hi: 'ऑटोमैटिक वॉशिंग मशीन',
    },
    defaultCallsPerDay: 3,
    defaultAvgFee: 750,
    minFee: 450,
    maxFee: 2000,
  },
  {
    id: 'ro-purifier',
    name: {
      en: 'RO Water Purifier & AMC',
      hi: 'आरओ वाटर प्यूरीफायर एवं एएमसी',
    },
    defaultCallsPerDay: 5,
    defaultAvgFee: 550,
    minFee: 350,
    maxFee: 1500,
  },
  {
    id: 'geyser',
    name: {
      en: 'Electric & Gas Geyser',
      hi: 'इलेक्ट्रिक एवं गैस गीजर',
    },
    defaultCallsPerDay: 4,
    defaultAvgFee: 600,
    minFee: 400,
    maxFee: 1500,
  },
];

export const EarningCalculator: React.FC<EarningCalculatorProps> = ({ lang }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('ac-inverter');
  const selectedConfig = COURSES_CONFIG.find((c) => c.id === selectedCourseId) || COURSES_CONFIG[0];

  const [callsPerDay, setCallsPerDay] = useState<number>(selectedConfig.defaultCallsPerDay);
  const [avgFeePerCall, setAvgFeePerCall] = useState<number>(selectedConfig.defaultAvgFee);
  const [workingDays, setWorkingDays] = useState<number>(25);

  const handleCourseChange = (id: string) => {
    setSelectedCourseId(id);
    const cfg = COURSES_CONFIG.find((c) => c.id === id);
    if (cfg) {
      setCallsPerDay(cfg.defaultCallsPerDay);
      setAvgFeePerCall(cfg.defaultAvgFee);
    }
  };

  const dailyEarnings = callsPerDay * avgFeePerCall;
  const monthlyEarnings = dailyEarnings * workingDays;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'करियर व इनकम कैलकुलेटर' : 'Technician ROI & Income Estimator'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            {lang === 'hi' ? (
              <>
                कोर्स के बाद आप <span className="text-[#f05a28]">हर महीने कितना</span> कमा सकते हैं?
              </>
            ) : (
              <>
                Calculate Your <span className="text-[#f05a28]">Monthly Technician</span> Earnings
              </>
            )}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'hi'
              ? 'प्रैक्टिकल ट्रेनिंग के बाद स्वयं की दुकान या फील्ड सर्विसिंग से होने वाली शुद्ध आय का अनुमान लगाएं।'
              : 'Estimate your monthly take-home earnings as a certified technician or service center owner.'}
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            
            {/* Step 1: Select Field */}
            <div className="mb-6">
              <label className="text-xs font-black uppercase text-slate-400 tracking-wider block mb-2.5">
                {lang === 'hi' ? '1. रिपेयरिंग फील्ड चुनें:' : '1. Select Appliance Specialization:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {COURSES_CONFIG.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => handleCourseChange(course.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                      selectedCourseId === course.id
                        ? 'bg-[#f05a28] text-white shadow-md shadow-orange-600/30'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {course.name[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Calls Per Day */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300">
                  {lang === 'hi' ? 'प्रतिदिन सर्विस कॉल्स:' : 'Service Calls Per Day:'}
                </span>
                <span className="text-sm font-black text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-lg border border-amber-400/20">
                  {callsPerDay} {lang === 'hi' ? 'कॉल्स' : 'calls / day'}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={callsPerDay}
                onChange={(e) => setCallsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f05a28]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1 call</span>
                <span>5 calls</span>
                <span>10 calls</span>
              </div>
            </div>

            {/* Slider 2: Average Fee Per Call */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300">
                  {lang === 'hi' ? 'औसत कमाई प्रति विजिट:' : 'Average Earnings Per Visit:'}
                </span>
                <span className="text-sm font-black text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-lg border border-emerald-400/20">
                  ₹{avgFeePerCall.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={2500}
                step={50}
                value={avgFeePerCall}
                onChange={(e) => setAvgFeePerCall(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>₹300 (Basic check)</span>
                <span>₹1,200 (Service/Gas)</span>
                <span>₹2,500 (Major PCB/Repair)</span>
              </div>
            </div>

            {/* Slider 3: Working Days */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300">
                  {lang === 'hi' ? 'महीने में कार्य दिवस:' : 'Working Days Per Month:'}
                </span>
                <span className="text-sm font-black text-blue-400 bg-blue-400/10 px-2.5 py-0.5 rounded-lg border border-blue-400/20">
                  {workingDays} {lang === 'hi' ? 'दिन' : 'days'}
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={30}
                value={workingDays}
                onChange={(e) => setWorkingDays(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>15 days (Part-time)</span>
                <span>25 days (Standard)</span>
                <span>30 days (Peak Season)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0a2356] via-[#081b43] to-[#040e24] border-2 border-blue-500/40 rounded-3xl p-7 text-center shadow-2xl relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'अनुमानित मासिक कमाई' : 'Projected Monthly Income'}</span>
            </div>

            {/* Big Main Counter */}
            <div className="my-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight block">
                ₹{monthlyEarnings.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-blue-200 mt-1 block">
                {lang === 'hi' ? 'प्रति माह शुद्ध आय (Estimated Take-Home)' : 'per month net earnings'}
              </span>
            </div>

            {/* Small Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-blue-800/60 text-left">
              <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">
                  {lang === 'hi' ? 'दैनिक कमाई' : 'Daily Earnings'}
                </span>
                <span className="text-base font-black text-amber-300 block">
                  ₹{dailyEarnings.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">
                  {lang === 'hi' ? 'वार्षिक क्षमता' : 'Annual Potential'}
                </span>
                <span className="text-base font-black text-emerald-300 block">
                  ₹{(yearlyEarnings / 100000).toFixed(2)} Lakhs
                </span>
              </div>
            </div>

            {/* Benefits Checkpoints */}
            <div className="space-y-2 text-left text-xs text-slate-200 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'hi' ? 'कोर्स फीस केवल 1-2 महीने में वसूल' : 'Course fee recovers in 1-2 months'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'hi' ? 'अर्बन कंपनी / लोकल शॉप डायरेक्ट सपोर्ट' : 'Direct Urban Company & Local tie-ups'}</span>
              </div>
            </div>

            {/* Action CTA */}
            <a
              href="#apply"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#f05a28] hover:bg-[#d94817] text-white font-extrabold text-sm shadow-xl shadow-orange-900/40 transition-all transform hover:scale-105"
            >
              <span>{lang === 'hi' ? 'प्रैक्टिकल ट्रेनिंग के लिए अप्लाई करें' : 'Enroll for Practical Training'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
