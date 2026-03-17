import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll Transparency
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fix Horizontal Scroll / Body Lock when Mobile Menu is Open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-5 shadow-sm'
            : 'bg-gradient-to-b from-black/40 to-transparent py-8'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center gap-6 group relative z-50">
            <img
              src="/img/logos.png"
              alt="Studio Logo"
              className={`transition-all duration-700 ${
                isScrolled ? 'h-12 grayscale-[50%]' : 'h-14 brightness-0 invert drop-shadow-md'
              }`}
            />
            {/* Technical Divider - Only visible when not scrolled */}
            <div className={`hidden md:block h-8 w-px transition-all duration-700 ${isScrolled ? 'bg-black/10' : 'bg-white/20'}`} />
            <span className={`hidden md:block text-[8px] uppercase tracking-[0.4em] font-mono transition-colors duration-700 ${isScrolled ? 'text-neutral-400' : 'text-white/60'}`}>
              Est. 2001
            </span>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/floorplans" isScrolled={isScrolled}>Floor Plans</NavLink>

            {/* DROPDOWN */}
            <div
              className="relative py-4"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-300 relative group pb-1 ${
                  isScrolled ? 'text-neutral-700 hover:text-black' : 'text-white/80 hover:text-white'
                }`}
              >
                Portfolio
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-500 ease-out ${dropdownOpen ? 'rotate-180 text-[#C5A880]' : ''}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 group-hover:w-full" />
              </button>

              {/* DROPDOWN MENU PANEL */}
              <div
                className={`absolute top-full -left-6 w-56 bg-white border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 origin-top overflow-hidden ${
                  dropdownOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Structural Top Line */}
                <div className="h-[2px] w-full bg-[#C5A880]" />
                <div className="flex flex-col py-3">
                  <DropdownLink to="/exteriors">Exteriors</DropdownLink>
                  <DropdownLink to="/interiors">Interiors</DropdownLink>
                  <DropdownLink to="/projects">All Projects</DropdownLink>
                </div>
              </div>
            </div>

            <NavLink to="/blogs" isScrolled={isScrolled}>Insights</NavLink>
          </nav>

          {/* --- RIGHT SIDE CTA & MENU --- */}
          <div className="flex items-center gap-8 relative z-50">
            <Link
              to="/contact"
              className={`hidden md:block text-[9px] uppercase tracking-[0.4em] font-bold transition-colors ${
                isScrolled ? 'text-neutral-500 hover:text-[#C5A880]' : 'text-white/70 hover:text-[#C5A880]'
              }`}
            >
              Contact
            </Link>

            {/* ENQUIRE BUTTON - Architectural Fill Effect */}
            <Link
              to="/enquire"
              className={`relative hidden sm:flex items-center justify-center px-8 py-3.5 overflow-hidden group transition-colors duration-500 ${
                isScrolled ? 'bg-neutral-100 text-black' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
              }`}
            >
              <div className="absolute inset-0 bg-[#C5A880] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className={`relative z-10 text-[9px] uppercase tracking-[0.4em] font-bold flex items-center gap-2 transition-colors ${
                isScrolled ? 'group-hover:text-white' : ''
              }`}>
                Enquire
                <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </span>
            </Link>

            {/* CUSTOM MOBILE TOGGLE */}
            <button
              className="lg:hidden flex flex-col items-end justify-center w-10 h-10 gap-1.5 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className={`h-[1px] transition-all duration-500 origin-right ${
                isScrolled || mobileOpen ? 'bg-black' : 'bg-white'
              } ${mobileOpen ? 'w-6 -rotate-45 -translate-y-[1px]' : 'w-8'}`} />
              
              <div className={`h-[1px] transition-all duration-500 ${
                isScrolled || mobileOpen ? 'bg-black' : 'bg-white'
              } ${mobileOpen ? 'w-0 opacity-0' : 'w-5'}`} />
              
              <div className={`h-[1px] transition-all duration-500 origin-right ${
                isScrolled || mobileOpen ? 'bg-black' : 'bg-white'
              } ${mobileOpen ? 'w-6 rotate-45 translate-y-[1px]' : 'w-8'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* --- PREMIUM MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          mobileOpen ? 'clip-path-open pointer-events-auto' : 'clip-path-closed pointer-events-none'
        }`}
      >
        <div className="w-full h-full flex flex-col max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-12">
          
          <div className="flex-1 flex flex-col justify-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold mb-4">Navigation</span>
            {['Home', 'Floor Plans', 'Exteriors', 'Interiors', 'Projects', 'Insights'].map((label, i) => (
              <Link
                key={label}
                to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '')}`}
                className="group w-fit"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`overflow-hidden transition-all duration-700 ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 tracking-tighter hover:text-[#C5A880] transition-colors">
                    {label}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          <div className={`border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between gap-6 transition-all duration-1000 delay-500 ${
            mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-2">General Inquiry</p>
              <a href="mailto:studio@archive.com" className="text-sm font-bold tracking-widest uppercase hover:text-[#C5A880] transition-colors">studio@archive.com</a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 hover:text-black transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .clip-path-open {
          clip-path: inset(0 0 0 0);
        }
        .clip-path-closed {
          clip-path: inset(0 0 100% 0);
        }
      `}} />
    </>
  );
};

// Reusable Desktop Nav Link Component
const NavLink = ({ to, isScrolled, children }) => (
  <Link
    to={to}
    className={`relative group pb-1 text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${
      isScrolled ? 'text-neutral-700 hover:text-black' : 'text-white/80 hover:text-white'
    }`}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 group-hover:w-full" />
  </Link>
);

// Reusable Dropdown Link Component
const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="group flex items-center justify-between px-6 py-3 transition-all duration-300 hover:bg-neutral-50"
  >
    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-500 group-hover:text-black transition-colors">
      {children}
    </span>
    <span className="h-[1px] w-0 bg-[#C5A880] group-hover:w-4 transition-all duration-300" />
  </Link>
);

export default Header;