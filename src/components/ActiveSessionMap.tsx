import React from 'react';

export default function ActiveSessionMap() {
  return (
    <section id="examples" className="w-full min-h-screen bg-midnight py-32 px-6 sm:px-12 lg:px-20 flex items-center border-b border-white/[0.02]">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-epic text-tara-amber">Examples</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              A Conversation <br />
              <span className="font-serif italic text-tara-platinum">With TARA.</span>
            </h2>
          </div>
          
          <p className="text-sm sm:text-base font-light text-tara-silver leading-relaxed">
            See how TARA handles a natural question from a student. Instead of dropping an essay or reading out a pre-made encyclopedia answer, TARA encourages curiosity and guides the student to figure out the scientific principles step by step.
          </p>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] space-y-3">
            <h5 className="font-mono text-xs text-tara-cyan uppercase font-semibold tracking-wider">Why Teachers and Parents Love It</h5>
            <p className="text-xs text-tara-silver font-light leading-relaxed">
              When students get instant answers, they forget them instantly. When they walk through a Socratic conversation, they build a structural understanding that sticks with them for life.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 w-full rounded-2xl border border-white/[0.04] bg-midnight-void/60 shadow-2xl overflow-hidden backdrop-blur">
          <div className="px-6 py-4 border-b border-white/[0.03] bg-white/[0.01] flex items-center justify-between font-mono text-[10px] tracking-wider text-tara-silver">
            <span>LIVE EXCERPT // ELEMENTARY NATURAL SCIENCES</span>
            <span className="text-tara-cyan uppercase font-semibold tracking-widest">Active Dialogue</span>
          </div>
          
          <div className="p-8 space-y-6 text-xs sm:text-sm">
            
            <div className="space-y-2">
              <div className="font-mono text-tara-silver font-bold uppercase tracking-wider text-[10px]">[ STUDENT ]</div>
              <p className="text-white/90 font-light leading-relaxed font-sans bg-white/[0.01] p-4 rounded border border-white/[0.02]">
                "Why is the sky blue? Is it because it reflects the ocean?"
              </p>
            </div>

            <div className="space-y-2 border-l border-tara-amber/40 pl-4">
              <div className="font-mono text-tara-amber font-bold uppercase tracking-wider text-[10px]">[ TARA ]</div>
              <div className="space-y-3 font-sans text-tara-silver font-light leading-relaxed text-sm">
                <p>
                  That is a very smart guess! A lot of people think it is a reflection of the ocean water. But let's look closer at how light works. 
                </p>
                <p>
                  Sunlight looks white to our eyes, but it's actually made up of a mix of all the colors of the rainbow traveling together in waves. Some color waves are long and lazy (like red), while other color waves are short, small, and choppy (like blue).
                </p>
                <p className="text-white font-medium">
                  When all these colors crash into the gases in Earth's dusty atmosphere, which waves do you think get bounced around and scattered across the sky more easily—the big long waves, or the tiny choppy waves?
                </p>
                <p className="text-[11px] font-mono text-tara-cyan italic tracking-wide mt-3">
                  → Waiting for student path response. Notice how the user has to process the scale of waves to uncover the concept...
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}