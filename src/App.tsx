import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyTrainWithUs from './components/WhyTrainWithUs';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import MembershipCta from './components/MembershipCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string>('Strength & Muscle Building');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (programTitle: string) => {
    setSelectedProgram(programTitle);
    scrollToSection('contact');
  };

  const handleJoinClick = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-zinc-100 font-sans selection:bg-red-600 selection:text-white pb-16 md:pb-0">
      {/* Top Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onJoinClick={handleJoinClick}
          onExplorePrograms={() => scrollToSection('programs')}
        />

        {/* About Section */}
        <About onLearnMoreClick={() => scrollToSection('programs')} />

        {/* Why Train With Us (6 Feature Cards) */}
        <WhyTrainWithUs />

        {/* Programs (4 Premium Program Cards) */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* Gallery Section */}
        <Gallery />

        {/* Membership CTA Section */}
        <MembershipCta onContactClick={handleJoinClick} />

        {/* Contact & Location Section */}
        <ContactSection selectedProgramTitle={selectedProgram} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar onInquireClick={handleJoinClick} />
    </div>
  );
}
