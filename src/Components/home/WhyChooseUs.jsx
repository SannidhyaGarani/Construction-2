import React from 'react';
import Reveal from '../../Components/Reveal';

const points = [
  { code: 'QLTY-01', title: 'Assured Quality', desc: 'Verified materials and audited checkpoints at each stage of the lifecycle.' },
  { code: 'TRNS-02', title: 'Transparent Delivery', desc: 'Real-time milestone tracking and accountable project handovers.' },
  { code: 'PORT-03', title: 'Proven Portfolio', desc: 'Flagship assets across Tier‑1 cities defined by structural integrity.' },
  { code: 'SPEC-04', title: 'Specialist Team', desc: 'A collective of architects and engineers with deep vertical expertise.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6] overflow-hidden relative border-t border-black/[0.03]">
      
      {/* BACKGROUND ARCHITECTURAL GRID - SOFT LIGHT GRAY GUIDES */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* EDITORIAL COLUMN */}
          <div className="lg:w-1/3">
            <Reveal>
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-[#C5A880]">
                  The Standard
                </span>
                <div className="h-[1px] w-12 bg-neutral-200" />
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] text-neutral-900 mb-10 tracking-tighter">
                Disciplined <br />
                <span className="italic text-neutral-500 font-light">Execution.</span>
              </h2>
              <p className="text-neutral-600 font-light text-lg leading-relaxed border-l border-[#C5A880]/60 pl-8">
                We orchestrate complex developments through a rigorous framework of design-led thinking and technical precision.
              </p>
            </Reveal>
          </div>

          {/* MODULAR GRID - CLEAN BORDERS ON BONE WHITE */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-px bg-black/[0.03] border border-black/[0.03]">
            {points.map((p, i) => (
              <div 
                key={p.code} 
                className="group bg-white p-10 md:p-14 hover:bg-[#FDFDFD] transition-all duration-700 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
              >
                <Reveal delay={i * 0.1}>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 group-hover:text-[#C5A880] transition-colors">
                      {p.code}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-[#C5A880] group-hover:bg-[#C5A880]/5 transition-all">
                      <div className="w-1 h-1 bg-neutral-300 group-hover:bg-[#C5A880] rounded-full" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-3xl text-neutral-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light tracking-wide italic">
                    {p.desc}
                  </p>
                </Reveal>
                
                {/* DECORATIVE CORNER - SOFT GOLD HIGHLIGHT */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#C5A880]/0 group-hover:w-4 group-hover:h-4 group-hover:border-[#C5A880]/40 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;