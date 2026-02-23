import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-1000 ease-in-out ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          
          {/* Text-Based Brand Identity */}
          <Link to="/" className="group z-50 flex flex-col leading-none">
            <span className="font-serif text-2xl md:text-3xl tracking-tight text-white">
              ARCHELON
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] text-[#C5A880] mt-1 font-bold">
              Developments
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors duration-500 group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
            
            {/* Architectural CTA */}
            <Link 
              to="/contact" 
              className="ml-4 px-8 py-3 bg-[#C5A880] text-[#050505] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 flex items-center gap-3 group shadow-2xl"
            >
              Enquire
              <div className="w-5 h-[1px] bg-[#050505] group-hover:w-8 transition-all duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-white transition-transform active:scale-90"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <div className="relative w-7 h-7">
              <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'top-3 rotate-45' : 'top-2 rotate-0'}`} />
              <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'top-3 -rotate-45' : 'top-3 rotate-0'}`} />
              <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'top-4'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Architectural Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileOpen ? 'clip-path-open' : 'clip-path-closed'
        }`}
        style={{
          clipPath: mobileOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)',
        }}
      >
        <div className="flex flex-col justify-center h-full px-12 md:px-24">
          <div className="space-y-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block group"
              >
                <span className="inline-block font-serif text-5xl md:text-7xl text-white group-hover:text-[#C5A880] group-hover:italic transition-all duration-500 transform group-hover:translate-x-4">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 max-w-sm">
            <p className="text-[#C5A880] text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">New Business</p>
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              Let's discuss your next architectural landmark.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
