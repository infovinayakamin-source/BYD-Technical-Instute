/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, FontTheme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { SocialHub } from './components/SocialHub';
import { CourseCatalog } from './components/CourseCatalog';
import { EarningCalculator } from './components/EarningCalculator';
import { PlacementSection } from './components/PlacementSection';
import { LabGallery } from './components/LabGallery';
import { Testimonials } from './components/Testimonials';
import { AdmissionForm } from './components/AdmissionForm';
import { ContactLocation } from './components/ContactLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AdminLeadsModal } from './components/AdminLeadsModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('byd_lang');
    return (saved as Language) || 'hi';
  });

  const [fontTheme, setFontTheme] = useState<FontTheme>(() => {
    const saved = localStorage.getItem('byd_font_theme');
    return (saved as FontTheme) || 'editorial';
  });

  const [preSelectedCourseId, setPreSelectedCourseId] = useState<string>('ac-inverter-master');
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('byd_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('byd_font_theme', fontTheme);
  }, [fontTheme]);

  const refreshLeadCount = () => {
    try {
      const stored = localStorage.getItem('byd_institute_leads');
      if (stored) {
        const parsed = JSON.parse(stored);
        setLeadCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    refreshLeadCount();
  }, []);

  const handleSelectCourseForAdmission = (courseId: string) => {
    setPreSelectedCourseId(courseId);
    // Smooth scroll to admission form
    const elem = document.getElementById('apply');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute font family class based on user choice
  const getFontThemeClass = () => {
    switch (fontTheme) {
      case 'indian':
        return 'font-devanagari-display';
      case 'modern':
        return 'font-heading';
      case 'academic':
        return 'font-editorial';
      case 'editorial':
      default:
        return 'font-editorial';
    }
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans pb-16 lg:pb-0 ${getFontThemeClass()}`}>
      {/* Main Sticky Navbar (AIT Two-Tier Header: Deep Navy Top + Crisp White Sub-Navbar) */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
        leadCount={leadCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (BYD Technical Institute - "तकनीकी शिक्षा से आत्मनिर्भर भविष्य") */}
        <Hero lang={lang} />

        {/* 2. Welcome to BYD Institute (Story, 4 Animated Motion Stats, Vision & Mission) */}
        <WelcomeSection lang={lang} />

        {/* 3. Modern Technical Facilities (6 Numbered Diagnostic Bay Cards & Tour) */}
        <FacilitiesSection lang={lang} />

        {/* 4. Official Social Channels & Verified Student Reviews (Facebook, Instagram, Google Maps) */}
        <SocialHub lang={lang} />

        {/* 5. 100% Practical Vocational Course Catalog (With all 5 real workshop images) */}
        <CourseCatalog
          lang={lang}
          onSelectCourseForAdmission={handleSelectCourseForAdmission}
        />

        {/* 6. Interactive Technician Career Earning & ROI Calculator */}
        <EarningCalculator lang={lang} />

        {/* 7. 100% Placement & Business Setup Ecosystem */}
        <PlacementSection lang={lang} />

        {/* 8. Real Campus & Practical Lab Workstations Gallery */}
        <LabGallery lang={lang} />

        {/* 9. Student Voices & Success Stories (Alumni Reviews) */}
        <Testimonials lang={lang} />

        {/* 10. Free Demo Class & Admission Registration Form */}
        <AdmissionForm
          lang={lang}
          preSelectedCourseId={preSelectedCourseId}
          onLeadAdded={refreshLeadCount}
        />

        {/* 11. Chandkheda Campus Location, Directions & Operating Hours */}
        <ContactLocation lang={lang} />

        {/* 12. Frequently Asked Questions */}
        <FaqSection lang={lang} />
      </main>

      {/* Comprehensive AIT Deep Navy Blue Footer with Map & Quick Links */}
      <Footer
        lang={lang}
        onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
      />

      {/* Floating Action Bars for Mobile & Desktop */}
      <FloatingActions lang={lang} />

      {/* Admin Leads Management Modal */}
      <AdminLeadsModal
        isOpen={isLeadsModalOpen}
        onClose={() => {
          setIsLeadsModalOpen(false);
          refreshLeadCount();
        }}
        lang={lang}
      />
    </div>
  );
}
