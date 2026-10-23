import React, { useState, useEffect } from 'react';
import { AdmissionInquiry, Language } from '../types';
import { COURSES, INSTITUTE_INFO } from '../data/instituteData';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Sparkles,
  Phone,
  User,
  MapPin,
  Home,
  Clock,
  CheckCircle2,
  MessageCircle,
  FileText,
  ShieldCheck,
  Send
} from 'lucide-react';

interface AdmissionFormProps {
  lang: Language;
  preSelectedCourseId: string;
  onLeadAdded: () => void;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({
  lang,
  preSelectedCourseId,
  onLeadAdded,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [courseId, setCourseId] = useState(preSelectedCourseId || 'ac-inverter-master');
  const [hostelRequired, setHostelRequired] = useState(false);
  const [preferredBatch, setPreferredBatch] = useState('morning');
  const [submitted, setSubmitted] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<AdmissionInquiry | null>(null);

  useEffect(() => {
    if (preSelectedCourseId) {
      setCourseId(preSelectedCourseId);
    }
  }, [preSelectedCourseId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const selectedCourseObj = COURSES.find((c) => c.id === courseId);
    const courseTitle = selectedCourseObj ? selectedCourseObj.title[lang] : courseId;

    const newInquiry: AdmissionInquiry = {
      id: 'lead_' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      courseId,
      courseName: courseTitle,
      city: city.trim() || 'Ahmedabad/Outstation',
      hostelRequired,
      preferredBatch,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    // Store in browser localStorage
    try {
      const existing = localStorage.getItem('byd_institute_leads');
      const leads: AdmissionInquiry[] = existing ? JSON.parse(existing) : [];
      leads.unshift(newInquiry);
      localStorage.setItem('byd_institute_leads', JSON.stringify(leads));
      onLeadAdded();
    } catch (err) {
      console.error('Error saving lead:', err);
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dc2626', '#ef4444', '#f87171', '#ffffff'],
      });
    } catch (err) {
      // ignore
    }

    setSubmittedInquiry(newInquiry);
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    if (!submittedInquiry) return '#';
    const msg =
      lang === 'hi'
        ? `*नया एडमिशन / डेमो क्लास आवेदन - BYD इंस्टीट्यूट*\n` +
          `👤 नाम: ${submittedInquiry.name}\n` +
          `📞 मोबाइल: ${submittedInquiry.phone}\n` +
          `📍 शहर/राज्य: ${submittedInquiry.city}\n` +
          `🛠️ कोर्स: ${submittedInquiry.courseName}\n` +
          `🏠 हॉस्टल चाहिए?: ${submittedInquiry.hostelRequired ? 'हाँ (₹4,999/माह)' : 'नहीं'}\n` +
          `⏰ पसंदीदा बैच: ${submittedInquiry.preferredBatch}\n\n` +
          `कृपया मुझे डेमो क्लास का समय व फीस की जानकारी भेजें। धन्यवाद!`
        : `*New Demo Class & Admission Inquiry - BYD Institute*\n` +
          `👤 Name: ${submittedInquiry.name}\n` +
          `📞 Phone: ${submittedInquiry.phone}\n` +
          `📍 City/State: ${submittedInquiry.city}\n` +
          `🛠️ Course: ${submittedInquiry.courseName}\n` +
          `🏠 Hostel Required?: ${submittedInquiry.hostelRequired ? 'Yes (₹4,999/mo)' : 'No'}\n` +
          `⏰ Preferred Batch: ${submittedInquiry.preferredBatch}\n\n` +
          `Please share admission dates, fee structure & demo class slot. Thank you!`;

    return `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="apply" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header Banner (AIT Deep Navy & Orange Theme) */}
          <div className="bg-gradient-to-r from-[#0b2464] via-[#0f2f7d] to-[#071740] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-blue-900/60">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#f05a28] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-xs font-subheading">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                {lang === 'hi' ? 'सीमित सीटें • फ्री रजिस्ट्रेशन' : 'Limited Seats • Free Demo Registration'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                {lang === 'hi'
                  ? 'फ्री डेमो क्लास एवं एडमिशन फॉर्म'
                  : 'Book Free Demo Class & Admission'}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-body-clean">
                {lang === 'hi'
                  ? 'चांदखेड़ा, अहमदाबाद कैंपस में 1 दिन का फ्री प्रैक्टिकल डेमो क्लास लेकर खुद तय करें।'
                  : 'Experience 1-day free practical workshop at our Chandkheda campus before finalizing.'}
              </p>
            </div>

            <div className="hidden sm:block shrink-0 bg-white/10 p-4 rounded-2xl backdrop-blur-sm text-center border border-white/20">
              <span className="text-xs font-bold text-amber-300 block font-subheading">Hostel Seat</span>
              <span className="text-xl font-black text-white font-heading">₹{INSTITUTE_INFO.hostelFeeMonthly}</span>
              <span className="text-[10px] text-blue-200 block">per month (Food + Stay)</span>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {lang === 'hi' ? 'आवेदन सफलतापूर्वक प्राप्त हुआ!' : 'Application Submitted Successfully!'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto mt-2">
                    {lang === 'hi'
                      ? `धन्यवाद ${name}! आपकी इंक्वायरी दर्ज कर ली गई है। हमारी टीम आपसे जल्द संपर्क करेगी। तुरंत जवाब पाने के लिए नीचे दिए गए बटन से अपने आवेदन की कॉपी व्हाट्सएप पर भेजें:`
                      : `Thank you ${name}! Your inquiry has been registered. For immediate slot confirmation, please send your application directly to our instructor on WhatsApp:`}
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-300">
                  <p>
                    <strong className="text-white">{lang === 'hi' ? 'छात्र का नाम:' : 'Name:'}</strong> {submittedInquiry?.name}
                  </p>
                  <p>
                    <strong className="text-white">{lang === 'hi' ? 'मोबाइल नंबर:' : 'Phone:'}</strong> {submittedInquiry?.phone}
                  </p>
                  <p>
                    <strong className="text-white">{lang === 'hi' ? 'चुना गया कोर्स:' : 'Course:'}</strong> {submittedInquiry?.courseName}
                  </p>
                  <p>
                    <strong className="text-white">{lang === 'hi' ? 'हॉस्टल आवश्यकता:' : 'Hostel:'}</strong>{' '}
                    {submittedInquiry?.hostelRequired ? (lang === 'hi' ? 'हाँ (₹4,999/माह)' : 'Yes (₹4,999/mo)') : (lang === 'hi' ? 'नहीं' : 'No')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{lang === 'hi' ? 'व्हाट्सएप पर आवेदन भेजें' : 'Send Application on WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setCity('');
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold border border-slate-700"
                  >
                    {lang === 'hi' ? 'दूसरा फॉर्म भरें' : 'Submit Another Application'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'hi' ? 'आपका पूरा नाम (Full Name) *' : 'Full Name *'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'hi' ? 'उदा. राहुल प्रजापति' : 'e.g. Rahul Prajapati'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'hi' ? 'मोबाइल नंबर / व्हाट्सएप *' : 'Mobile / WhatsApp Number *'}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'hi' ? '10 अंकों का मोबाइल नंबर' : '10-digit mobile number'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* City & State */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'hi' ? 'आपका शहर / जिला व राज्य' : 'Your City / District & State'}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? 'उदा. अहमदाबाद / मेहसाणा / सूरत / राजस्थान' : 'e.g. Ahmedabad, Surat, Rajasthan'}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  {/* Select Course */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'hi' ? 'इच्छित कोर्स चुनें *' : 'Select Desired Course *'}</span>
                    </label>
                    <select
                      value={courseId}
                      onChange={(e) => setCourseId(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title[lang]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Batch and Hostel Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {/* Preferred Batch */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'hi' ? 'पसंदीदा बैच समय' : 'Preferred Batch Time'}</span>
                    </label>
                    <select
                      value={preferredBatch}
                      onChange={(e) => setPreferredBatch(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="morning">
                        {lang === 'hi' ? 'सुबह का बैच (8:00 AM - 11:00 AM)' : 'Morning Batch (8:00 AM - 11:00 AM)'}
                      </option>
                      <option value="afternoon">
                        {lang === 'hi' ? 'दोपहर का बैच (12:00 PM - 3:00 PM)' : 'Afternoon Batch (12:00 PM - 3:00 PM)'}
                      </option>
                      <option value="evening">
                        {lang === 'hi' ? 'शाम का बैच (4:00 PM - 7:00 PM)' : 'Evening Batch (4:00 PM - 7:00 PM)'}
                      </option>
                      <option value="weekend">
                        {lang === 'hi' ? 'रविवार वीकेंड स्पेशल बैच (कामकाजी लोगों के लिए)' : 'Sunday Special Weekend Batch (Working Technicians)'}
                      </option>
                    </select>
                  </div>

                  {/* Hostel Checkbox */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'hi' ? 'हॉस्टल सुविधा चाहिए?' : 'Hostel Facility Needed?'}</span>
                    </label>
                    <div
                      onClick={() => setHostelRequired(!hostelRequired)}
                      className={`cursor-pointer flex items-center justify-between p-3 rounded-xl border transition-all ${
                        hostelRequired
                          ? 'bg-red-500/15 border-red-500 text-red-200'
                          : 'bg-slate-950 border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={hostelRequired}
                          onChange={() => {}}
                          className="accent-red-600 w-4 h-4 rounded cursor-pointer"
                        />
                        <span className="text-xs font-bold">
                          {lang === 'hi' ? 'हाँ, हॉस्टल व भोजन चाहिए (₹4,999/माह)' : 'Yes, need Hostel & Food (₹4,999/mo)'}
                        </span>
                      </div>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold">
                        Food + Stay
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f05a28] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-black text-sm sm:text-base shadow-xl shadow-orange-900/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-heading uppercase"
                  >
                    <Send className="w-5 h-5 text-amber-200" />
                    <span>{lang === 'hi' ? 'फ्री डेमो क्लास के लिए अभी सबमिट करें' : 'Submit for Free Demo Class'}</span>
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>
                      {lang === 'hi'
                        ? 'आपकी जानकारी 100% सुरक्षित है। कोई स्पैम कॉल नहीं।'
                        : 'Your details are 100% confidential. No spam.'}
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
