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
    <section className="py-24 md:py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">
      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#C5A880 1px, transparent 1px), linear-gradient(90deg, #C5A880 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Editorial Column */}
          <div className="lg:w-1/3">
            <Reveal>
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-[#C5A880]">
                  The Standard
                </span>
                <div className="h-[1px] w-12 bg-neutral-800" />
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] text-white mb-10 tracking-tighter">
                Disciplined <br />
                <span className="italic text-neutral-600 font-light">Execution.</span>
              </h2>
              <p className="text-neutral-500 font-light text-lg leading-relaxed border-l border-[#C5A880]/30 pl-8">
                We orchestrate complex developments through a rigorous framework of design-led thinking and technical precision.
              </p>
            </Reveal>
          </div>

          {/* Modular Grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {points.map((p, i) => (
              <div 
                key={p.code} 
                className="group bg-[#050505] p-10 md:p-14 hover:bg-neutral-900/30 transition-all duration-700 relative overflow-hidden"
              >
                <Reveal delay={i * 0.1}>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-600 group-hover:text-[#C5A880] transition-colors">
                      {p.code}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#C5A880] transition-all">
                      <div className="w-1 h-1 bg-neutral-800 group-hover:bg-[#C5A880] rounded-full" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-3xl text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light tracking-wide italic">
                    {p.desc}
                  </p>
                </Reveal>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#C5A880]/0 group-hover:w-4 group-hover:h-4 group-hover:border-[#C5A880]/50 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;