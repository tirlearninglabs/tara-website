import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 sm:px-12 lg:px-20 z-50 bg-gradient-to-b from-midnight-void via-midnight-void/80 to-transparent backdrop-blur-[2px]"
    >
      <div className="flex items-center">
        <span className="font-serif text-2xl tracking-epic text-white font-light">tara</span>
        <div className="ml-3 hidden sm:flex items-center px-2 py-0.5 rounded border border-white/10 text-[9px] font-mono uppercase tracking-widest text-tara-silver/70 bg-white/5">
          Companion v1.0
        </div>
      </div>

      <nav className="flex items-center gap-8 md:gap-12">
        <a href="#methodology" className="text-xs font-mono tracking-widest text-tara-silver hover:text-white transition-colors duration-300">
          METHODOLOGY
        </a>
        <a href="#understanding" className="text-xs font-mono tracking-widest text-tara-silver hover:text-white transition-colors duration-300">
          JOURNAL
        </a>
        <motion.a
          href="#explore"
          whileHover={{ scale: 1.02, backgroundColor: '#FFFFFF', color: '#05070B' }}
          className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-mono tracking-wider text-white bg-midnight-card/80 backdrop-blur transition-all duration-300 shadow-xl"
        >
          Begin an Exploration
        </motion.a>
      </nav>
    </motion.header>
  );
}