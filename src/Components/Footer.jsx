import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-32 relative overflow-hidden">
      
      {/* Structural Accent Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* --- Hero Footer Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 pb-24">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold block mb-8">
              Legacy of Precision
            </span>
            <h2 className="text-7xl md:text-[9rem] font-serif leading-[0.85] tracking-tighter text-white">
              ARCHELON
            </h2>
            <div className="flex items-center gap-6 mt-4">
              <div className="h-[1px] w-20 bg-neutral-800" />
              <span className="text-neutral-500 uppercase tracking-[0.8em] text-xs md:text-sm">Developments</span>
            </div>
          </div>

          <div className="flex flex-col lg:items-end justify-between h-full min-h-[200px]">
            <Link 
              to="/contact" 
              className="group flex items-center gap-6 bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-[#C5A880] transition-all duration-700"
            >
              <div className="space-y-2">
                <span className="block uppercase text-[10px] tracking-[0.3em] text-[#C5A880] group-hover:text-[#050505] font-bold">Start a Project</span>
                <span className="block text-2xl font-serif text-white group-hover:text-[#050505]">Request a Proposal</span>
              </div>
              <div className="w-8 h-8 border-t border-r border-white group-hover:border-[#050505] rotate-45 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </Link>
          </div>
        </div>

        {/* --- Information Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20 border-t border-white/5">
          
          {/* Identity */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight text-white">ARCHELON</span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Developments</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed font-light max-w-[240px]">
              Defining the future of Tier‑1 urban landscapes through disciplined engineering and timeless aesthetics.
            </p>
            <div className="flex gap-6">
              {['Instagram','LinkedIn','Facebook'].map((name, i) => (
                <Link key={i} to="#" className="text-neutral-600 hover:text-[#C5A880] transition-colors duration-500 text-sm">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">Directory</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-neutral-400 hover:text-white text-sm font-light transition-all duration-500 flex items-center gap-0 hover:gap-4 group">
                    <div className="w-0 h-[1px] bg-[#C5A880] group-hover:w-8 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">Specialization</h4>
            <ul className="space-y-4 text-neutral-500 text-sm font-light">
              <li className="hover:text-[#C5A880] transition-colors duration-500 cursor-default">High-Rise Residential</li>
              <li className="hover:text-[#C5A880] transition-colors duration-500 cursor-default">Corporate Headquarters</li>
              <li className="hover:text-[#C5A880] transition-colors duration-500 cursor-default">Industrial Architecture</li>
              <li className="hover:text-[#C5A880] transition-colors duration-500 cursor-default">Heritage Restoration</li>
            </ul>
          </div>

          {/* Offices */}
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">Inquiries</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#C5A880] rounded-full mt-1" />
                <p className="text-sm font-light text-neutral-400 leading-relaxed">
                  Sector 54, Golf Course Road <br />
                  Gurugram, HR 122009
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#C5A880] rounded-full mt-1" />
                <p className="text-sm font-light text-neutral-400 hover:text-white transition-colors cursor-pointer">
                  studio@archelondev.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Legal --- */}
        <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
            © {currentYear} Archelon Developments • All Rights Reserved
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-neutral-600 hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.3em]"
          >
            Scroll to Top
            <div className="p-2 rounded-full border border-neutral-800 group-hover:border-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#050505] transition-all duration-500">
              <div className="w-2 h-2 border-t border-r border-current rotate-45" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Minimalist Bottom Bar */}
      <div className="h-1 w-full bg-[#C5A880]/20" />
    </footer>
  );
};

export default Footer;
