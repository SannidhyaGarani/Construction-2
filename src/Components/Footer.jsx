import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-32 relative overflow-hidden">
      
      {/* Structural Accent Element - A very subtle vertical line grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="max-w-[1440px] mx-auto h-full border-x border-white flex justify-between">
          <div className="w-[1px] h-full bg-white ml-[25%]" />
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white mr-[25%]" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* --- Hero Footer Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 pb-24 border-b border-white/5">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A880] font-bold block mb-10">
              The Art of Built Environment
            </span>
            {/* LARGE PREMIUM LOGO */}
            <div className="flex flex-col gap-2">
                <img 
                    src="img/logos.png" 
                    alt="Create Space Architects" 
                    className="h-20 md:h-28 w-auto object-contain brightness-110"
                />
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <Link 
              to="/contact" 
              className="group flex items-center justify-between gap-12 bg-white/[0.03] border border-white/10 p-10 md:p-14 hover:border-[#C5A880]/50 transition-all duration-700 relative overflow-hidden"
            >
              {/* Hover Background Fill */}
              <div className="absolute inset-0 bg-[#C5A880] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              
              <div className="relative z-10 space-y-3">
                <span className="block uppercase text-[10px] tracking-[0.4em] text-[#C5A880] group-hover:text-[#050505] font-bold transition-colors duration-500">
                    Collaborate
                </span>
                <span className="block text-3xl md:text-4xl font-serif text-white group-hover:text-[#050505] transition-colors duration-500">
                    Start Your Legacy
                </span>
              </div>
              <div className="relative z-10 w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-[#050505] rounded-full transition-all duration-500 transform group-hover:rotate-45">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-[#050505]">
                    <path d="M4.16663 15.8333L15.8333 4.16663M15.8333 4.16663H7.49996M15.8333 4.16663V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* --- Information Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20">
          
          {/* Identity */}
          <div className="space-y-8">
            <img 
              src="img/logos.png" 
              alt="Create Space Logo" 
              className="h-12 w-auto object-contain opacity-90"
            />
            <p className="text-neutral-500 text-sm leading-relaxed font-light max-w-[260px]">
              Crafting architectural narratives that balance brutalist precision with organic warmth. Creating spaces that breathe.
            </p>
            <div className="flex gap-8">
              {['Instagram','LinkedIn','Pinterest'].map((name, i) => (
                <Link key={i} to="#" className="relative text-neutral-500 hover:text-white transition-colors duration-500 text-xs uppercase tracking-widest group">
                  {name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Directory */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Directory</h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-neutral-400 hover:text-white text-[13px] tracking-wide font-light transition-all duration-500 flex items-center gap-0 hover:gap-4 group">
                    <div className="w-0 h-[1px] bg-[#C5A880] group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Expertise</h4>
            <ul className="space-y-5 text-neutral-500 text-[13px] font-light tracking-wide">
              <li className="hover:text-white transition-colors duration-500 cursor-default">Luxury Residential</li>
              <li className="hover:text-white transition-colors duration-500 cursor-default">Boutique Commercial</li>
              <li className="hover:text-white transition-colors duration-500 cursor-default">Landscape Integration</li>
              <li className="hover:text-white transition-colors duration-500 cursor-default">Sustainable Design</li>
            </ul>
          </div>

          {/* Global Reach */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Studio</h4>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600">HQ — Gurugram</p>
                <p className="text-[13px] font-light text-neutral-400 leading-relaxed">
                  Sector 54, Golf Course Road <br />
                  DLF Phase V, HR 122009
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600">Inquiries</p>
                <a href="mailto:aryankhan00741@gmail.com" className="text-[13px] font-light text-[#C5A880] hover:text-white transition-colors block">
                  aryankhan00741@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Legal --- */}
        <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            © {currentYear} Create Space Architects • <span className="text-neutral-700">Architecture & Interior Design</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-neutral-500 hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.3em]"
          >
            Back to Top
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 group-hover:border-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#050505] transition-all duration-700">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </button>
        </div>
      </div>
      
      {/* Accent Gold Bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C5A880]/40 to-transparent" />
    </footer>
  );
};

export default Footer;