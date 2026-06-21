import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.03] bg-midnight/60 backdrop-blur-md px-6 sm:px-12 lg:px-20 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
         <img src="/tara-logo-light.svg" alt="TARA" className="h-4 w-auto"/>
        <span className="font-sans font-bold text-sm tracking-[0.2em] uppercase text-white">TARA</span>
        <span className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.02] text-[9px] font-mono tracking-normal text-tara-silver/60">v0.1.0</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest uppercase">
        <a href="#how-it-works" className="text-tara-silver hover:text-white transition-colors duration-200">
          How It Works
        </a>
        <a href="#examples" className="text-tara-silver hover:text-white transition-colors duration-200">
          Examples
        </a>
        <a 
          href="#explore" 
          className="hidden sm:inline-block px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white hover:text-midnight transition-all duration-200"
        >
          Begin an Exploration
        </a>
      </div>
    </nav>
  );
}