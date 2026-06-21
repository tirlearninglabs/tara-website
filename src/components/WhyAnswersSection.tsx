import React from 'react';

export default function WhyAnswersSection() {
  return (
    <section id="why-tara" className="w-full min-h-screen bg-midnight py-32 px-6 sm:px-12 lg:px-20 flex items-center border-b border-white/[0.02]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-xs uppercase tracking-epic text-tara-amber">
            Why TARA
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-sans text-white leading-tight">
            Why Answers Are <br />
            <span className="font-serif italic text-tara-platinum">Not Enough.</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/10" />
        </div>

        <div className="lg:col-span-7 space-y-8 text-tara-silver font-light text-base sm:text-lg leading-relaxed">
          <p>
            Standard AI chatbots and search engines treat learning like an unneeded step. They give you immediate, generic text summaries that make you feel like you learned something—until you try to explain it to someone else.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 pt-4">
            <div className="p-6 rounded-xl border border-white/[0.03] bg-white/[0.01]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2 font-semibold">AI Chatbots & Search</h4>
              <p className="text-xs leading-relaxed">Give you copy-paste summaries instantly. Your brain skims the data without real effort, leading to shallow retention and quick forgetting.</p>
            </div>
            <div className="p-6 rounded-xl border border-tara-cyan/20 bg-tara-cyan/[0.01]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-tara-cyan mb-2 font-semibold">The TARA Alternative</h4>
              <p className="text-xs leading-relaxed">Asks targeted, interactive questions based on your input. It forces you to construct your own mental model, building deep, permanent recall.</p>
            </div>
          </div>

          <p className="text-base">
            TARA works because it doesn't do the thinking for you. It serves as an active conversational partner, helping you discover blind spots in your reasoning and patch them in real-time.
          </p>
        </div>

      </div>
    </section>
  );
}