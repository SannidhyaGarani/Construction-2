import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-[#050505] text-white">
      <PageHero 
        title="Inquiry." 
        subtitle="Initiate Your Structural Vision"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* --- Info Column (Left) --- */}
          <div className="lg:col-span-5 space-y-20">
            <Reveal>
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.9] tracking-tighter mb-8">
                Let's architect <br />
                <span className="italic text-neutral-500 font-light">the remarkable.</span>
              </h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-sm">
                Whether you have a finalized blueprint or a nascent vision, our studio provides the technical precision required for execution.
              </p>
            </Reveal>

            <div className="grid gap-12">
              <Reveal delay={0.2}>
                <div className="group">
                  <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-[#C5A880] block mb-4">The_Studio</span>
                  <p className="font-serif text-xl text-neutral-200 group-hover:text-white transition-colors">Sector 54, Golf Course Road,</p>
                  <p className="font-serif text-xl text-neutral-200 group-hover:text-white transition-colors">Gurugram, HR 122009</p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-[#C5A880] block mb-4">Direct_Lines</span>
                  <p className="font-serif text-xl text-neutral-200 mb-2">A. Mehta: +91 98272 16004</p>
                  <p className="font-serif text-xl text-neutral-200">N. Rao: +91 84618 83444</p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-[#C5A880] block mb-4">Correspondence</span>
                  <a href="mailto:studio@archelondev.com" className="font-serif text-2xl text-white hover:text-[#C5A880] transition-colors underline underline-offset-8 decoration-white/10">
                    studio@archelondev.com
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* --- Contact Form (Right) --- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-neutral-900/50 border border-white/5 p-10 md:p-16 backdrop-blur-sm">
                <form className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-2">Identity</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-700" 
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-2">Contact_No</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-700" 
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-2">Email_Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-700" 
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-2">Brief_Description</label>
                    <textarea 
                      rows="4" 
                      className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-700 resize-none" 
                      placeholder="Project vision, location, and scale..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="group relative w-full py-5 bg-[#C5A880] text-[#050505] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-bold flex items-center justify-center gap-4">
                      Transmit Inquiry <ArrowUpRight size={18} />
                    </span>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* --- Dark Themed Map --- */}
      <section className="h-[60vh] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?..." // Replace with actual embed
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
          allowFullScreen="" 
          loading="lazy"
          title="Studio Location"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      </section>

    </main>
  );
};

export default Contact;