import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../Components/Reveal';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-40 md:py-56 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Cinematic Texture Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architecture" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          
          <div className="max-w-4xl">
            <Reveal>
              <span className="text-[10px] uppercase tracking-[0.8em] text-[#C5A880] font-bold block mb-12">
                Final Commission // 2026
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-serif text-6xl md:text-9xl text-white leading-[0.85] tracking-tighter">
                Built to <span className="italic text-neutral-500">Endure.</span> <br />
                Defined by <span className="text-[#C5A880]">Form.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="flex-shrink-0">
            <Link
              to="/contact"
              className="group relative flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#C5A880]/30 hover:bg-[#C5A880] transition-all duration-1000 ease-in-out overflow-hidden"
            >
              {/* Spinning Text Effect (Optional logic but simplified here) */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:rotate-90 transition-transform duration-1000">
                 <ArrowUpRight size={48} strokeWidth={1} className="text-[#C5A880] group-hover:text-[#050505] transition-colors" />
              </div>
              
              <span className="absolute bottom-10 uppercase text-[9px] tracking-[0.3em] font-bold text-white group-hover:text-[#050505] transition-colors">
                Enquire
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-8">
          <Reveal delay={0.6}>
            <p className="text-neutral-500 font-light text-sm max-w-sm leading-relaxed">
              We respond to all project inquiries within 48 hours with a preliminary feasibility outlook.
            </p>
          </Reveal>
          
          <div className="flex gap-16">
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-widest text-neutral-600 font-bold">New Business</span>
              <span className="block text-white font-serif text-lg">studio@archelon.com</span>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Press</span>
              <span className="block text-white font-serif text-lg">press@archelon.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;