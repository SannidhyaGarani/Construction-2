import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const PageHero = ({ title, subtitle, backgroundImage, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={`relative h-[65vh] md:h-[75vh] w-full bg-[#050505] overflow-hidden ${className}`}>
      {/* --- Film Grain & Noise Overlay --- */}
      <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* --- Cinematic Background --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[8000ms] ease-out scale-110 ${
            isLoaded ? 'opacity-40 scale-100 rotate-0' : 'opacity-0 scale-125 rotate-1'
          }`}
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        {/* Deep Onyx Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/80 to-[#050505]" />
      </div>

      {/* --- Architectural Data HUD --- */}
      <div className="absolute inset-0 z-10 pointer-events-none border-x border-white/5 mx-6 md:mx-16">
        <div className="absolute top-12 left-0 flex flex-col gap-2">
          <span className="text-[8px] font-mono text-[#C5A880]/40 tracking-[0.5em] uppercase">Coord_28.6139° N, 77.2090° E</span>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>
        <div className="absolute bottom-12 right-0 origin-bottom-right -rotate-90">
          <span className="text-[8px] font-mono text-white/20 tracking-[0.5em] uppercase whitespace-nowrap">Archelon_Digital_Archive_v.02</span>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-30 h-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-16">
        <div className="max-w-5xl">
          <div className={`overflow-hidden transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-[#C5A880] font-bold mb-6">
              {subtitle}
            </span>
          </div>

          <h1 className="font-serif text-[12vw] md:text-[7vw] leading-[0.85] text-white tracking-tighter">
            <Reveal delay={0.6}>
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "italic font-light text-neutral-500" : ""}>
                  {word}{' '}
                </span>
              ))}
            </Reveal>
          </h1>
        </div>
      </div>

      {/* Ultra-thin Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-40" />
    </section>
  );
};

export default PageHero;