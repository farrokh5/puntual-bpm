import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ProblemSection } from './components/ProblemSection/ProblemSection';
import { ValueProposition } from './components/ValueProposition/ValueProposition';
import { WhyPuntual } from './components/WhyPuntual/WhyPuntual';
import { WhatIsBPM } from './components/WhatIsBPM/WhatIsBPM';
import { TechnologyIntegration } from './components/TechnologyIntegration/TechnologyIntegration';
import { Methodology } from './components/Methodology/Methodology';
import { CaseStudies } from './components/CaseStudies/CaseStudies';
import { BusinessOutcomes } from './components/BusinessOutcomes/BusinessOutcomes';
import { FinalCTA } from './components/FinalCTA/FinalCTA';
import { PlatformArchitecture } from './components/PlatformArchitecture/PlatformArchitecture';
import { ScheduleCallForm } from './components/ScheduleCallForm/ScheduleCallForm';
import { Footer } from './components/Footer/Footer';
import { useActiveSection } from './hooks';

const SECTION_IDS = ['hero', 'problem', 'offer', 'why-puntual', 'what-is-bpm', 'platform', 'technology', 'process', 'cases', 'outcomes', 'contact', 'schedule-call'];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  const trackedActiveSection = useActiveSection(SECTION_IDS);

  const handleNavigate = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  }, []);

  const handlePrimaryCtaClick = useCallback((sectionId: string) => {
    handleNavigate(sectionId);
  }, [handleNavigate]);

  const handleSecondaryCtaClick = useCallback(() => {
    handleNavigate('contact');
  }, [handleNavigate]);

  React.useEffect(() => {
    setActiveSection(trackedActiveSection);
  }, [trackedActiveSection]);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-surface-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main id="main-content" className="pt-16">
        <Hero onCtaClick={handlePrimaryCtaClick} />
        <ProblemSection />
        <ValueProposition />
        <WhyPuntual />
        <WhatIsBPM />
        <PlatformArchitecture />
        <TechnologyIntegration />
        <Methodology />
        <CaseStudies />
        <BusinessOutcomes />
        <FinalCTA
          onPrimaryCtaClick={handlePrimaryCtaClick}
          onSecondaryCtaClick={handleSecondaryCtaClick}
        />
        {/* Formulario de agenda de llamada */}
        <ScheduleCallForm />
      </main>

      <Footer />

      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-white dark:bg-surface-950 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                <path d="M7 7l5 5 5-5" />
              </svg>
            </div>
            <motion.span
              className="font-display text-lg font-semibold text-surface-900 dark:text-white"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Puntual BPM
            </motion.span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;