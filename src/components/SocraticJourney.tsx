import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  num: string;
  title: string;
  description: string;
}

const StepCard = ({ num, title, description }: StepCardProps) => (
  <motion.div 
    whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
    className="p-8 rounded-xl border border-white/[0.04] bg-midnight-card/40 backdrop-blur transition-all duration-300 flex flex-col justify-between h-72"
  >
    <div className="flex justify-between items-start">
      <span className="font-mono text-xs text-tara-silver/40 tracking-widest">{num}</span>
      <div className="w-1.5 h-1.5 rounded-full bg-tara-cyan/30" />
    </div>
    <div className="space-y-3">
      <h3 className="text-lg font-sans font-medium text-white tracking-wide">{title}</h3>
      <p className="text-xs sm:text-sm text-tara-silver font-light leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function SocraticJourney() {
  const steps = [
    { num: 'STEP 01', title: 'Question', description: 'You enter a topic you want to master or an idea you find confusing. TARA reviews your input to isolate exactly where your baseline knowledge leaves off.' },
    { num: 'STEP 02', title: 'Reflection', description: 'TARA responds with a single, clear question. Instead of giving a direct answer, it challenges your assumptions and prompts you to explain the idea in your own words.' },
    { num: 'STEP 03', title: 'Understanding', description: 'As you explain, you clarify your own thinking. TARA acts as a sounding board, continuously organizing your inputs to patch any holes in your logic.' },
    { num: 'STEP 04', title: 'Growth', description: 'You end the session with a practical, structured overview of the topic that you created yourself. The knowledge becomes an active, permanent part of your mind.' }
  ];

  return (
    <section id="how-it-works" className="w-full min-h-screen bg-midnight-void py-32 px-6 sm:px-12 lg:px-20 flex flex-col justify-center border-b border-white/[0.02]">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        
        <div className="max-w-xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-epic text-tara-cyan">How TARA Works</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">The Four Steps of a Session</h2>
          <p className="text-sm text-tara-silver font-light leading-relaxed">
            A practical, step-by-step loop designed to transition your mind from basic curiosity to complete clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              num={step.num}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}