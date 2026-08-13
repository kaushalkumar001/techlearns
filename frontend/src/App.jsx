import React, { useState, useEffect } from 'react';
import PageSkeleton from './components/skeletons/PageSkeleton';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyWeExistSection from './components/WhyWeExistSection';
import InfrastructureStats from './components/InfrastructureStats';
import TechlearnsDifference from './components/TechlearnsDifference';
import CELWheelSection from './components/CELWheelSection';
import EngineeringPipeline from './components/EngineeringPipeline';
import ProgramsSection from './components/ProgramsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CareerDiagnosticModal from './components/CareerDiagnosticModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (courseName = '') => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#612D92] selection:text-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Fixed Top Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Sections */}
      <main className="w-full overflow-x-hidden">
        {/* Exact Hero Section with Badges, Image & Marquee Strip */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* Why We Exist Comparison */}
        <WhyWeExistSection />

        {/* Infrastructure & Stats */}
        <InfrastructureStats />

        {/* The Techlearns Difference */}
        <TechlearnsDifference />

        {/* Interactive CEL Wheel System */}
        <CELWheelSection />

        {/* Engineering Pipeline Pathways */}
        <EngineeringPipeline onOpenModal={handleOpenModal} />

        {/* Programs Catalog */}
        <ProgramsSection onOpenModal={handleOpenModal} />

        {/* FAQs */}
        <FAQSection />

        {/* Final CTA Banner */}
        <CTASection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Career Diagnostic Modal */}
      <CareerDiagnosticModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultCourse={selectedCourse}
      />
    </div>
  );
}
