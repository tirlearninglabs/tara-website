import React, { useState } from 'react';

export default function ClosingCTA() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      window.location.href = `https://tara.tirlabs.in/explore?q=${encodeURIComponent(inputValue)}`;
    }
  };

  return (
    <section id="explore" className="w-full min-h-[85vh] bg-midnight-void py-32 px-6 sm:px-12 lg:px-20 flex items-center relative">
      <div className="max-w-3xl mx-auto w-full text-center space-y-10 relative z-10">
        
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-epic text-tara-amber">Start Exploring</span>
          <h2 className="text-4xl sm:text-5xl font-light font-sans tracking-tight text-white">
            Start with a question. <br />
            <span className="font-serif italic text-tara-platinum">Leave with understanding.</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-tara-silver font-light max-w-xl mx-auto leading-relaxed">
          Enter any topic, theme, or concept you find challenging. TARA will build an interactive dialogue environment optimized for your speed.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-4">
          <div className="relative flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl border border-white/[0.05] bg-midnight-card/60 backdrop-blur-md shadow-2xl focus-within:border-white/20 transition-all duration-300">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What topic do you want to break down right now?"
              className="w-full bg-transparent px-5 py-4 text-white text-sm font-light placeholder-tara-silver/30 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 px-8 py-4 rounded-xl bg-white text-midnight-void font-mono text-xs font-bold tracking-widest uppercase hover:bg-tara-platinum transition-transform active:scale-[0.97]"
            >
              Begin Exploration
            </button>
          </div>
        </form>

        <div className="pt-4 flex justify-center gap-8 text-[10px] font-mono text-tara-silver/40 tracking-wider uppercase">
          <span>✦ Free exploration</span>
          <span>✦ No accounts needed</span>
          <span>✦ Pure learning</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <div className="w-[600px] h-[600px] rounded-full border border-white animate-[spin_200s_linear_infinite]" />
      </div>
    </section>
  );
}