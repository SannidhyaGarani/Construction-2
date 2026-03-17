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
                "url('https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D')",
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






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';

// const HeroSection = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const id = requestAnimationFrame(() => setIsLoaded(true));
//     return () => cancelAnimationFrame(id);
//   }, []);

//   return (
//     <section className="relative min-h-[95vh] w-full bg-[#FDFDFD] overflow-hidden flex flex-col justify-end pb-12 lg:pb-24">
      
//       {/* 1. TOP GRADIENT (Ensures Header Visibility) */}
//       <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-30 pointer-events-none" />

//       {/* 2. BACKGROUND ARCHITECTURAL IMAGE */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className={`absolute inset-0 bg-cover bg-center transition-all duration-[4s] ease-out ${
//             isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
//           }`}
//           style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')" 
//           }}
//         />
//         {/* Subtle Architectural Scrim */}
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent" />
//       </div>

//       {/* 3. MAIN CONTENT CONTAINER (MAX-W-1440) */}
//       <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
//           {/* LEFT: Massive Typography */}
//           <div className="lg:col-span-8">
//             <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//               <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#C5A880]">Studio_Archive.01</span>
//               <div className="w-12 h-[1px] bg-[#C5A880]/40" />
//             </div>

//             <h1 className="font-serif text-[14vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.85] text-white mix-blend-difference tracking-tighter">
//               <span className="block overflow-hidden">
//                 <span className={`block transition-all duration-[1.8s] ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
//                   Sculpting <span className="italic font-light">Space</span>
//                 </span>
//               </span>
//               <span className="block overflow-hidden">
//                 <span className={`block transition-all duration-[1.8s] delay-300 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
//                   Defining <span className="text-[#C5A880]">Time.</span>
//                 </span>
//               </span>
//             </h1>
//           </div>

//           {/* RIGHT: Technical Details & CTA */}
//           <div className={`lg:col-span-4 lg:pl-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 space-y-8">
//               <p className="text-white/80 text-sm font-light leading-relaxed tracking-wide">
//                 We curate high-performance environments that harmonize technical mastery with a silent, timeless luxury.
//               </p>

//               <div className="space-y-4">
//                 <Link 
//                   to="/contact" 
//                   className="group flex items-center justify-between bg-white px-6 py-4 transition-all duration-500 hover:bg-[#C5A880]"
//                 >
//                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-900 group-hover:text-white transition-colors">
//                     Start Project
//                   </span>
//                   <ArrowUpRight size={18} className="text-neutral-900 group-hover:text-white transition-all group-hover:rotate-45" />
//                 </Link>

//                 <div className="flex justify-between items-center px-2">
//                   <Link to="/projects" className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-[#C5A880] transition-colors">
//                     View Folio
//                   </Link>
//                   <div className="h-px w-8 bg-white/20" />
//                   <Link to="/about" className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-[#C5A880] transition-colors">
//                     The Studio
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM METADATA BAR */}
//         <div className={`mt-16 pt-8 border-t border-black/5 flex justify-between items-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//            <div className="flex gap-12">
//               <div className="hidden md:block">
//                 <p className="text-[8px] uppercase tracking-widest text-neutral-400 mb-1">Coordinates</p>
//                 <p className="text-[10px] font-bold text-neutral-800">28.4950° N, 77.0878° E</p>
//               </div>
//               <div>
//                 <p className="text-[8px] uppercase tracking-widest text-neutral-400 mb-1">Project Status</p>
//                 <p className="text-[10px] font-bold text-[#C5A880]">Available for Commissions</p>
//               </div>
//            </div>
           
//            {/* SCROLL LINE */}
//            <div className="flex items-center gap-4">
//               <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-400">Scroll</span>
//               <div className="relative w-16 h-px bg-neutral-200 overflow-hidden">
//                 <div className="absolute inset-0 bg-[#C5A880] animate-slide-line" />
//               </div>
//            </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide-line {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-slide-line {
//           animation: slide-line 2.5s infinite ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;