import React from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* --- Section Header --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-black" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#C5A880]">Inquiry_Portal.v02</span>
          </div>
          <h2 className="font-serif text-6xl md:text-8xl text-neutral-900 tracking-tighter leading-[0.85]">
            Start a Project<span className="text-[#C5A880]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* --- Left Column: Contact Details (Technical HUD Style) --- */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-400 mb-6">/ Communication_Lines</p>
              <div className="space-y-6">
                <a href="mailto:studio@createspace.com" className="group flex items-center gap-4">
                  <div className="p-3 border border-neutral-100 group-hover:border-[#C5A880] transition-colors duration-500">
                    <Mail size={16} className="text-neutral-400 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Email</p>
                    <p className="text-sm font-medium">studio@createspace.com</p>
                  </div>
                </a>
                <a href="tel:+911244567890" className="group flex items-center gap-4">
                  <div className="p-3 border border-neutral-100 group-hover:border-[#C5A880] transition-colors duration-500">
                    <Phone size={16} className="text-neutral-400 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Phone</p>
                    <p className="text-sm font-medium">+91 (0) 124 456 7890</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-400 mb-6">/ Studio_Location</p>
              <div className="flex items-start gap-4">
                <div className="p-3 border border-neutral-100">
                  <MapPin size={16} className="text-neutral-400" />
                </div>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  DLF Cyber City, Phase III, <br />
                  Building 10-C, 14th Floor, <br />
                  Gurugram, HR 122002
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-100">
              <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-400 mb-4">/ Coordinates</p>
              <p className="text-[10px] font-bold tracking-[0.3em]">28.4950° N, 77.0878° E</p>
            </div>
          </div>

          {/* --- Right Column: The Form (Minimal & Sharp) --- */}
          <div className="lg:col-span-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2 block group-focus-within:text-[#C5A880] transition-colors">Full Name_</label>
                <input
                  type="text"
                  placeholder="E.G. ADRIAN SMITH"
                  className="w-full bg-neutral-50 border-b border-neutral-200 px-0 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all placeholder:text-neutral-200 placeholder:font-light"
                />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2 block group-focus-within:text-[#C5A880] transition-colors">Email Address_</label>
                <input
                  type="email"
                  placeholder="CLIENT@ARCHIVE.COM"
                  className="w-full bg-neutral-50 border-b border-neutral-200 px-0 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all placeholder:text-neutral-200 placeholder:font-light"
                />
              </div>
              <div className="md:col-span-2 group">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2 block group-focus-within:text-[#C5A880] transition-colors">Project Type_</label>
                <select className="w-full bg-neutral-50 border-b border-neutral-200 px-0 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                  <option>RESIDENTIAL ARCHITECTURE</option>
                  <option>COMMERCIAL INTERIORS</option>
                  <option>TURNKEY DEVELOPMENT</option>
                  <option>FLOOR PLANNING & VIZ</option>
                </select>
              </div>
              <div className="md:col-span-2 group">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2 block group-focus-within:text-[#C5A880] transition-colors">Project Brief_</label>
                <textarea
                  rows="4"
                  placeholder="DESCRIBE THE SCOPE OF WORK..."
                  className="w-full bg-neutral-50 border-b border-neutral-200 px-0 py-4 text-sm font-medium focus:outline-none focus:border-black transition-all placeholder:text-neutral-200 placeholder:font-light resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button className="relative group overflow-hidden bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.5em] font-bold transition-all">
                  <div className="absolute inset-0 bg-[#C5A880] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    Submit Proposal <Send size={14} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- Map Section: Integrated Site Plan Look --- */}
        <div className="relative w-full h-[500px] bg-neutral-100 overflow-hidden border-t border-neutral-200 grayscale contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-1000">
          {/* Replace this with a real Google Maps Iframe if needed */}
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223391312741!2d77.0855!3d28.4950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzQyLjAiTiA3N8KwMDUnMDcuOCJF!5e0!3m2!1sen!2sin!4v1625560000000!5m2!1sen!2sin"
            className="w-full h-full border-none filter contrast-125 transition-all duration-700"
            loading="lazy"
          ></iframe>

          {/* Technical Grid Overlay for the Map */}
          <div className="absolute inset-0 pointer-events-none z-10 border-[20px] border-white" />
          <div className="absolute bottom-10 left-10 bg-white p-6 shadow-2xl z-20 border border-neutral-100 hidden md:block">
            <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-2">Location_Marker</p>
            <h4 className="text-sm font-bold tracking-tighter uppercase mb-4">Create Space Studio HQ</h4>
            <div className="h-px w-12 bg-[#C5A880]" />
          </div>
        </div>
      </div>

      {/* Footer Bridge */}
      <div className="bg-white py-4 flex justify-center border-t border-neutral-100">
        <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-[1em]">Architecture // Interior // Landscape</span>
      </div>
    </section>
  );
};

export default ContactSection;