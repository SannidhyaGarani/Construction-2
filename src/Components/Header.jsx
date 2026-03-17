import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        {/* MATCH HERO WIDTH */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-5">
            <img
              src="/img/logos.png"
              alt="Logo"
              className={`transition-all duration-700 ${
                isScrolled ? 'h-14' : 'h-15'
              } drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]`}
            />

            {!isScrolled && (
              <div className="hidden md:block h-10 w-px bg-white/20" />
            )}
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-12">

            <Link
              to="/"
              className={`nav-link-premium ${
                isScrolled
                  ? 'text-neutral-700 hover:text-black'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              to="/floorplans"
              className={`nav-link-premium ${
                isScrolled
                  ? 'text-neutral-700 hover:text-black'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Floor Plans
            </Link>

            {/* DROPDOWN */}
            <div
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 nav-link-premium ${
                  isScrolled
                    ? 'text-neutral-700 hover:text-black'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Portfolio
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* DROPDOWN MENU */}
              <div
                className={`absolute top-full left-0 w-52 backdrop-blur-xl bg-white/90 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 origin-top ${
                  dropdownOpen
                    ? 'opacity-100 scale-y-100'
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col py-2">
                  <Link to="/exteriors" className="dropdown-item">Exteriors</Link>
                  <Link to="/interiors" className="dropdown-item">Interiors</Link>
                  <Link to="/projects" className="dropdown-item">Projects</Link>
                </div>
              </div>
            </div>

            <Link
              to="/blogs"
              className={`nav-link-premium ${
                isScrolled
                  ? 'text-neutral-700 hover:text-black'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Blogs
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            <Link
              to="/contact"
              className={`hidden md:block text-[10px] uppercase tracking-[0.4em] font-semibold transition ${
                isScrolled
                  ? 'text-neutral-500 hover:text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Contact
            </Link>

            {/* ENQUIRE BUTTON */}
            <Link
              to="/enquire"
              className={`relative px-8 py-3 overflow-hidden group border transition ${
                isScrolled ? 'border-black' : 'border-white'
              }`}
            >
              <div className={`absolute inset-0 transition-transform duration-500 ${
                isScrolled
                  ? 'bg-black translate-y-full group-hover:translate-y-0'
                  : 'bg-white translate-y-full group-hover:translate-y-0'
              }`} />

              <span
                className={`relative z-10 text-[9px] uppercase tracking-[0.4em] font-bold flex items-center gap-3 transition ${
                  isScrolled
                    ? 'text-black group-hover:text-white'
                    : 'text-white group-hover:text-black'
                }`}
              >
                Enquire
                <span
                  className={`w-6 h-[1px] transition ${
                    isScrolled
                      ? 'bg-black group-hover:bg-white'
                      : 'bg-white group-hover:bg-black'
                  }`}
                />
              </span>
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden flex flex-col items-end gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className={`h-[1px] transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${mobileOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />

              <div className={`h-[1px] transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${mobileOpen ? 'opacity-0' : 'w-5'}`} />

              <div className={`h-[1px] transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${mobileOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-all duration-700 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-10">
          <button
            className="absolute top-10 right-10 text-[10px] tracking-[0.5em] uppercase font-bold"
            onClick={() => setMobileOpen(false)}
          >
            Close [x]
          </button>

          <div className="space-y-8">
            {['Home', 'Floor Plans', 'Exteriors', 'Interiors', 'Projects'].map((label, i) => (
              <Link
                key={i}
                to="/"
                className="block text-5xl font-serif text-neutral-900 border-b border-neutral-100 pb-4"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link-premium {
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.4em;
          transition: all 0.4s ease;
        }

        .dropdown-item {
          padding: 12px 18px;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-weight: 600;
          color: #737373;
          transition: all 0.3s;
        }

        .dropdown-item:hover {
          background: rgba(0,0,0,0.03);
          color: #000;
          padding-left: 22px;
        }
      `}} />
    </>
  );
};

export default Header;