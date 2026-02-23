import React from 'react';
import Reveal from '../../Components/Reveal';

const services = [
  { t: 'Architectural Planning', d: 'Feasibility-led layouts, proportioned massing, and complete IFC documentation.' },
  { t: 'Construction Delivery', d: 'Disciplined execution with verified materials and accountable site supervision.' },
  { t: 'Façade & Elevation', d: 'Contextual facades with balanced materiality and long-term maintenance in mind.' },
  { t: 'Interior Architecture', d: 'Cohesive, durable interiors with efficient detailing and timeless palettes.' },
  { t: 'Structural Coordination', d: 'Engineering collaboration for safe, efficient structures and clear shop drawings.' },
  { t: 'Regulatory Approvals', d: 'Municipal submissions, compliance documentation, and systematic follow‑through.' },
];

const ServicesSection = () => {

  return (
    <section className="py-24 md:py-40 bg-[#050505] text-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <Reveal>
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#C5A880]" />
                <span className="uppercase tracking-[0.4em] text-xs font-semibold text-[#C5A880]">
                  Capabilities
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white">
                Designing with <br />
                <span className="italic text-neutral-500 font-light">Purpose.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-neutral-400 text-lg font-light leading-relaxed border-l border-neutral-800 pl-6 pb-2">
              A comprehensive approach to the built environment, from initial conceptual sketch to final laying of stone.
            </p>
          </Reveal>
        </div>

        {/* Services Bento/Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1} side="bottom">
              <div className="group relative bg-[#0F0F0F] border border-neutral-800/50 p-10 md:p-14 hover:bg-[#141414] transition-all duration-700 overflow-hidden rounded-sm">
                
                {/* Background Number Watermark */}
                <span className="absolute -bottom-4 -right-2 font-serif text-[8rem] text-white/[0.02] group-hover:text-white/[0.04] group-hover:-translate-y-4 transition-all duration-700 pointer-events-none select-none leading-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white transition-colors duration-500 group-hover:text-[#C5A880]">
                      {s.t}
                    </h3>
                    <p className="text-neutral-400 font-light leading-relaxed max-w-md text-sm md:text-base">
                      {s.d}
                    </p>
                  </div>
                  
                  {/* Premium Interactive Element */}
                  <div className="mt-12 flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="uppercase tracking-[0.2em] text-[10px] font-semibold text-[#C5A880]">Explore</span>
                    <div className="w-0 h-[1px] bg-[#C5A880] group-hover:w-16 transition-all duration-700 ease-in-out" />
                  </div>
                </div>

                {/* Subtle Top Border Glow */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A880] to-transparent group-hover:w-full transition-all duration-1000 ease-out" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
