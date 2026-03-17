import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#F9F8F6] overflow-hidden flex items-center pt-28 md:pt-32 lg:pt-0">

      {/* 🔥 TOP GRADIENT FOR HEADER VISIBILITY */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-20 pointer-events-none" />

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        
        {/* subtle glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 border border-[#C5A880]/10 rounded-full animate-pulse" />
      </div>

      {/* --- IMAGE PANEL --- */}
      <div 
        className={`absolute right-6 top-28 bottom-12 w-full lg:w-[45%] transition-all duration-[2.2s] z-10 hidden lg:block ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'
        }`}
      >
        <div className="relative h-full w-full overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-white">
          
          <div 
            className={`h-full w-full bg-cover bg-center transition-transform duration-[10s] ease-out ${
              isLoaded ? 'scale-100' : 'scale-110'
            }`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600607687940-47a04b629571?q=80&w=2000&auto=format&fit=crop')",
            }}
          />

          {/* 🔥 DARK OVERLAY FOR CONTRAST */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6]/60 to-transparent" />
        </div>

        {/* FLOATING CARD */}
        <div className="absolute bottom-12 -left-12 bg-white/90 backdrop-blur-md p-6 border border-neutral-100 shadow-xl hidden xl:block z-20">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] mb-1 font-bold">
            Featured Project
          </p>
          <p className="text-sm font-serif italic text-neutral-800">
            The Obsidian Villa, 2024
          </p>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-16">
        <div className="max-w-3xl">

          {/* LABEL */}
          <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-12 h-[1px] bg-[#C5A880]" />
            <span className="text-[11px] uppercase tracking-[0.5em] text-neutral-500 font-medium">
              Aesthetics of Permanence
            </span>
          </div>

          {/* TITLE */}
          <h1 className="font-serif text-[13vw] md:text-[7vw] lg:text-[6vw] leading-[0.9] text-neutral-900 tracking-tight mb-12">
            <span className="block overflow-hidden">
              <span className={`block transition-all duration-[1.8s] ${
                isLoaded ? 'translate-y-0' : 'translate-y-full'
              }`}>
                Sculpting <span className="italic font-light">Space</span>
              </span>
            </span>
            <span className="block overflow-hidden -mt-2">
              <span className={`block transition-all duration-[1.8s] delay-300 ${
                isLoaded ? 'translate-y-0' : 'translate-y-full'
              }`}>
                Defining <span className="text-[#C5A880]">Time.</span>
              </span>
            </span>
          </h1>

          {/* BOTTOM GRID */}
          <div className={`grid md:grid-cols-12 gap-10 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="md:col-span-7">
              <p className="text-neutral-500 text-base md:text-lg font-light leading-relaxed max-w-md">
                Architecture is a dialogue between Earth and Sky. We curate environments that resonate with silent luxury and technical mastery.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col justify-end gap-6">
              <Link 
                to="/contact" 
                className="group w-full flex items-center justify-between border-b border-neutral-900 pb-4 hover:border-[#C5A880] transition-all duration-500"
              >
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-neutral-900">
                  Start Project
                </span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <div className="flex gap-8">
                <Link to="/gallery" className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-[#C5A880]">
                  View Folio
                </Link>
                <Link to="/about" className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-[#C5A880]">
                  The Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:right-12 lg:translate-x-0 flex flex-col items-center gap-4">
        <div className="relative w-[1px] h-16 bg-neutral-200 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C5A880] animate-[scroll_2s_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;