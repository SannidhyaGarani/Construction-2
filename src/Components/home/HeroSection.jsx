import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center">
      
      {/* --- Background Layer: Subtle Grid & Depth --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
      </div>

      {/* --- Main Image Pane (Asymmetrical) --- */}
      <div 
        className={`absolute right-0 top-0 h-full w-full lg:w-[55%] transition-all duration-[2s] ease-out z-0 ${
          isLoaded ? 'opacity-40 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-20'
        }`}
      >
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')" }}
        />
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* --- Content Overlay --- */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center h-full">
        
        {/* Technical Metadata (Vertical) */}
        <div className={`absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="rotate-90 origin-center text-[9px] uppercase tracking-[1em] text-[#C5A880] font-bold whitespace-nowrap">
            ESTABLISHED MMIV
          </span>
          <div className="h-32 w-[1px] bg-neutral-800" />
          <span className="rotate-90 origin-center text-[9px] uppercase tracking-[1em] text-neutral-600 whitespace-nowrap">
            HQ // GURUGRAM
          </span>
        </div>

        <div className="max-w-4xl">
          {/* Accent Badge */}
          <div className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
              Architectural Excellence
            </span>
          </div>

          {/* Massive Headline with staggered reveal */}
          <h1 className="font-serif text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] text-white tracking-tighter mb-10">
            <span className="block overflow-hidden pb-2">
              <span className={`block transition-all duration-[1.5s] ease-out ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                PRECISION.
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className={`block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] to-neutral-600 transition-all duration-[1.5s] delay-300 ease-out ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                PURPOSE.
              </span>
            </span>
          </h1>

          {/* Subtext with a "technical" feel */}
          <div className={`grid md:grid-cols-2 gap-8 items-start transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-neutral-400 text-sm md:text-lg font-light leading-relaxed border-l border-[#C5A880]/30 pl-6">
              Archelon Developments orchestrates high-value assets where structural integrity meets refined aesthetic discipline. We don't just build; we curate landmarks.
            </p>
            
            <div className="flex flex-col gap-6 pt-2">
              <div className="flex items-center gap-8">
                <Link 
                  to="/contact" 
                  className="group relative flex items-center gap-4 bg-[#C5A880] text-[#050505] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500"
                >
                  Start Inquiry
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>

                <Link 
                  to="/gallery"
                  className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-1 hover:border-[#C5A880] transition-all duration-500"
                >
                  Work Archive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Decorative Bottom Bar (The "Coordinates") --- */}
      <div className={`absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] text-neutral-600">
          <div>
            <span className="block text-[#C5A880] mb-1">Status</span>
            <span className="text-neutral-400">Available for Commission</span>
          </div>
          <div className="hidden md:block">
            <span className="block text-[#C5A880] mb-1">Focus</span>
            <span className="text-neutral-400">Luxury Residential // Corporate</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 rotate-90 mb-8 origin-bottom">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A880] to-transparent" />
        </div>
      </div>

      {/* Subtle Side-Frame */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-white/5 z-30" />
    </section>
  );
};

export default HeroSection;