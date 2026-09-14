import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyInfoBanner } from './components/KeyInfoBanner';
import { SpecialHighlight } from './components/SpecialHighlight';
import { CoursesSection } from './components/CoursesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { TrustAndFaqSection } from './components/TrustAndFaqSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { StickyContactBar } from './components/StickyContactBar';
import { AdmissionModal } from './components/AdmissionModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultCourse, setModalDefaultCourse] = useState('حفظ القرآن الکریم');

  const handleOpenAdmissionModal = (courseTitle?: string) => {
    if (courseTitle) {
      setModalDefaultCourse(courseTitle);
    }
    setIsModalOpen(true);
  };

  const handleCloseAdmissionModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#FF7A00] selection:text-white overflow-x-hidden w-full max-w-full" dir="rtl">
      {/* Navigation */}
      <Navbar onOpenAdmissionModal={handleOpenAdmissionModal} />

      {/* Main Content Sections */}
      <main className="flex-1 overflow-x-hidden w-full">
        {/* Hero Section */}
        <Hero onOpenAdmissionModal={handleOpenAdmissionModal} />

        {/* Key Info Banner */}
        <KeyInfoBanner />

        {/* Special Highlight: 2-Year Hifz Track */}
        <SpecialHighlight onOpenAdmissionModal={handleOpenAdmissionModal} />

        {/* Courses Section */}
        <CoursesSection onOpenAdmissionModal={handleOpenAdmissionModal} />

        {/* Features & Safe Environment */}
        <FeaturesSection />

        {/* About Section with Principal message & Campus */}
        <AboutSection onOpenAdmissionModal={() => handleOpenAdmissionModal('ملاقات و کیمپس وزٹ')} />

        {/* Trust & FAQs */}
        <TrustAndFaqSection />

        {/* Final Conversion Call to Action */}
        <CallToAction onOpenAdmissionModal={handleOpenAdmissionModal} />
      </main>

      {/* Footer */}
      <Footer onOpenAdmissionModal={handleOpenAdmissionModal} />

      {/* Floating & Sticky Contact Elements */}
      <StickyContactBar />

      {/* Interactive Admission Inquiry Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={handleCloseAdmissionModal}
        defaultCourse={modalDefaultCourse}
      />
    </div>
  );
}
