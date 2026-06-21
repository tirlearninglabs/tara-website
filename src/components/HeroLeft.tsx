import React from 'react';
import { motion } from 'framer-motion';

interface HeroLeftProps {
  alignmentScore: number;
}

export default function HeroLeft({ alignmentScore }: HeroLeftProps) {
  return (
    <div className="w-full max-w-xl space-y-8">
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-[11px] font-mono tracking-wider text-tara-silver"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-tara-cyan" />
          What is TARA?
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight leading-[1.15] text-white"
        >
          Helping learners think, <br />
          <span className="font-serif italic font-normal text-tara-platinum">explore and grow.</span>
        </motion.h1>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg sm:text-base lg:text-lg font-light text-tara-silver leading-relaxed"
      >
        TARA is an interactive learning companion that guides you through reflection, exploration, and structured questioning. Instead of handing you instant, automated answers, it helps you build lasting personal understanding.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-white/[0.05] py-6 my-2"
      >
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-white">What it does</h4>
          <p className="text-xs text-tara-silver font-light mt-1">Breaks down complex topics into clear, interactive dialogue loops.</p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-white">Why use it</h4>
          <p className="text-xs text-tara-silver font-light mt-1">To master difficult ideas, bypass shallow summaries, and retain what you read.</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <a 
          href="#explore"
          className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white text-midnight-void font-mono text-xs font-semibold tracking-widest uppercase transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
        >
          Start with a Question
        </a>
        <a 
          href="#how-it-works" 
          className="group flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase text-tara-silver hover:text-white transition-colors duration-300"
        >
          See How TARA Works
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </motion.div>

      <div className="pt-4 flex items-center gap-4">
        <div className="flex flex-col shrink-0">
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Visual Metaphor</span>
          <span className="text-xs font-mono text-tara-silver/60 mt-0.5">
            {alignmentScore > 0.8 ? 'Perspective Achieved' : 'Aligning Perspective'}
          </span>
        </div>
        <div className="flex-1 h-[1px] bg-white/5 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-tara-cyan to-tara-amber"
            animate={{ width: `${alignmentScore * 100}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          />
        </div>
      </div>
    </div>
  );
}