import React from 'react';
import Reveal from '../../Components/Reveal';

const BrandIntro = () => {
 

  return (
    <section className="relative py-24 md:py-40 bg-[#0A0A0A] text-white overflow-hidden">
      
      {/* Immersive Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A880] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Content: The Narrative */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="uppercase tracking-[0.3em] text-[11px] font-semibold text-neutral-400">
                  Our Practice
                </span>
                <div className="w-24 h-[1px] bg-neutral-800" />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] mb-12 tracking-tight">
                Building with <br />
                <span className="italic text-[#C5A880] font-light">Discipline & Intent.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="max-w-2xl flex flex-col md:flex-row gap-8 md:gap-12">
                <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed flex-1">
                  Established in 2001, <span className="text-white font-medium">Archelon Developments</span> operates across Tier‑1 cities in India, delivering assets defined by technical precision and material integrity.
                </p>
                <p className="text-sm text-neutral-500 font-light leading-relaxed flex-1 pt-1 md:border-l border-neutral-800 md:pl-8">
                  Our methodology balances feasibility and aesthetics—transparent reporting, accountable supervision, and coordination that relentlessly protects long-term value.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Content: The Distinction Cards (Overlapping Editorial Style) */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            
            {/* Founder Card */}
            <Reveal delay={0.6} side="right">
              <div className="relative z-10 bg-[#121212] border border-neutral-800 p-10 shadow-2xl backdrop-blur-sm">
                <div className="uppercase tracking-[0.3em] text-[10px] text-[#C5A880] mb-6 font-semibold">The Visionary</div>
                <div className="font-serif text-3xl md:text-4xl text-white mb-2">
                  Aarav <br /> Mehta
                </div>
                <div className="text-neutral-500 italic text-sm">Principal Founder</div>
              </div>
            </Reveal>

            {/* Experience Card - Overlapping */}
            <Reveal delay={0.8} side="bottom">
              <div className="absolute -bottom-16 -left-8 md:-left-16 lg:-left-24 z-20 bg-[#C5A880] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="uppercase tracking-[0.3em] text-[10px] text-black/60 mb-2 font-bold">Expertise</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-6xl md:text-7xl text-[#050505]">30</span>
                  <span className="font-serif text-3xl text-[#050505]">+</span>
                </div>
                <div className="font-sans text-sm text-[#050505] mt-2 font-medium tracking-wide">Years of Excellence</div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* Bottom Stat Bar - Minimalist High-End */}
        <div className="mt-40 pt-10 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
           <Reveal delay={0.2} side="bottom">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">Presence</span>
              <span className="text-base text-neutral-200 font-light">Mumbai • Pune • Gurugram</span>
           </Reveal>
           <Reveal delay={0.3} side="bottom">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">Projects</span>
              <span className="text-base text-neutral-200 font-light">120+ Assets Delivered</span>
           </Reveal>
           <Reveal delay={0.4} side="bottom" className="col-span-2 md:col-span-1">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">Focus Sectors</span>
              <span className="text-base text-[#C5A880] font-light">Residential • Corporate • Industrial</span>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
