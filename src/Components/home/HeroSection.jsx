import React, { useEffect, useState } from "react";

const ConstructionHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F9F8F6]">
      {/* 1. THE VIDEO LAYER */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl">
          {/* Label with your Gold accent */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#C5A880]" />
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">
              Aesthetics of Permanence
            </span>
            <div className="w-12 h-[1px] bg-[#C5A880]" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tighter mb-8">
            Sculpting <span className="italic font-light">Space</span> <br />
            Defining <span className="text-[#C5A880]">Time.</span>
          </h1>

          <p className="max-w-xl mx-auto mb-10 text-lg text-white/80 font-light leading-relaxed">
            Architecture is a dialogue between Earth and Sky. We curate
            environments that resonate with silent luxury and technical mastery.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group flex items-center gap-8 bg-white px-8 py-4 transition-all duration-500 hover:bg-[#C5A880] hover:text-white">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-900 group-hover:text-white">
                Start Project
              </span>
            </button>
            <button className="text-[10px] uppercase tracking-[0.4em] font-bold text-white border-b border-white/30 pb-2 hover:border-[#C5A880] transition-colors">
              View Folio
            </button>
          </div>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C5A880] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default ConstructionHero;
