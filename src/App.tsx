import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import WhyAnswersSection from './components/WhyAnswersSection';
import SocraticJourney from './components/SocraticJourney';
import ActiveSessionMap from './components/ActiveSessionMap';
import ClosingCTA from './components/ClosingCTA';
import HeroCanvas from "./components/HeroCanvas";

export default function App() {
  const [alignmentScore, setAlignmentScore] = useState(0.1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0.1, scrollY / (windowHeight * 1.2)));
      setAlignmentScore(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-midnight text-white selection:bg-tara-cyan/20">
      <Navbar />

      {/* PREMIUM EDITORIAL HERO CONTAINER */}
      <header className="relative w-full min-h-screen flex items-center pt-24 pb-12 px-6 sm:px-12 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
          
          {/* Content Side: Fully Restored to original clean sizing */}
          <div className="w-full lg:max-w-xl z-20">
            <HeroLeft alignmentScore={alignmentScore} />
          </div>

          {/* Right 3D Visual Side: Explicit sizing container for WebGL Viewport */}
          <div className="w-full h-[320px] sm:h-[420px] lg:w-[700px] xl:w-[800px] lg:h-[650px] relative flex items-center justify-center z-10">
            <div className="absolute inset-0 w-full h-full min-h-[400px]">
              <HeroCanvas />
            </div>
          </div>

        </div>
      </header>

      {/* SECTIONS */}
      <main className="relative z-20">
        <WhyAnswersSection />
        <SocraticJourney />
        <ActiveSessionMap />
        <ClosingCTA />
      </main>

      <footer className="w-full py-8 text-center font-mono text-[10px] text-tara-silver/20 tracking-wider bg-midnight-void">
        © {new Date().getFullYear()} TARA PLATFORM // BUILT FOR MEANINGFUL REASONING
      </footer>
    </div>
  );
}