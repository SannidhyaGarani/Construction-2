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
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-8 md:py-12' // Extra breathing room for the larger logo
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Logo Section - Significantly Upscaled */}
          <Link to="/" className="group z-50 flex items-center">
            <img
              src="img/logo.png"
              alt="Create Space Architects Logo"
              /* Mobile: h-16 (unscrolled) to h-14 (scrolled)
                 Desktop: h-24 (unscrolled) to h-18 (scrolled)
              */
              className={`w-auto object-contain transition-all duration-500 brightness-110 ${
                isScrolled 
                ? 'h-14 md:h-18' 
                : 'h-16 md:h-19' 
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors duration-500 group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}

            {/* Architectural CTA */}
            <Link
              to="/contact"
              className="ml-4 px-10 py-4 bg-[#C5A880] text-[#050505] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 flex items-center gap-4 group shadow-2xl"
            >
              Enquire
              <div className="w-6 h-[1px] bg-[#050505] group-hover:w-10 transition-all duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-white transition-transform active:scale-90"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <div className="relative w-8 h-8">
              <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'top-4 rotate-45' : 'top-2 rotate-0'}`} />
              <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'top-4 -rotate-45' : 'top-4 rotate-0'}`} />
              <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'top-6'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{
          clipPath: mobileOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)',
        }}
      >
        <div className="flex flex-col justify-center h-full px-10 md:px-24">
          <div className="space-y-6 md:space-y-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block group overflow-hidden"
              >
                {/* Scaled down from 7xl to 4xl/5xl for a more 
                   premium, gallery-style feel.
                */}
                <span className="inline-block font-serif text-4xl md:text-6xl text-white group-hover:text-[#C5A880] group-hover:italic transition-all duration-500 transform group-hover:translate-x-4">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 max-w-xs">
            <p className="text-[#C5A880] text-[9px] uppercase tracking-[0.5em] mb-4 font-bold">New Business</p>
            <p className="text-neutral-500 text-base font-light leading-relaxed">
              studio@createspace.com <br />
              +91 (0) 124 456 7890
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;