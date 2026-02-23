import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../Components/Reveal';
import { ArrowUpRight } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop', label: 'Luxury High‑Rise', location: 'Mumbai', num: '01', year: '2024', type: 'Residential' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop', label: 'Corporate Campus', location: 'Gurugram', num: '02', year: '2025', type: 'Commercial' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop', label: 'Urban Villa', location: 'Pune', num: '03', year: '2023', type: 'Residential' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop', label: 'Industrial Hub', location: 'Navi Mumbai', num: '04', year: '2026', type: 'Industrial' },
];

const ProjectsPreview = () => {
  return (
    <section className="py-32 md:py-48 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Section Header: Editorial Style --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-12">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-[#C5A880]">
                  Portfolio
                </span>
                <div className="h-[1px] w-12 bg-neutral-800" />
              </div>
              <h2 className="font-serif text-6xl md:text-8xl leading-[0.9] text-white tracking-tighter">
                Selected <br />
                <span className="italic text-neutral-600 font-light">Showcase.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pb-4">
              <Link to="/gallery" className="group flex flex-col items-start gap-2">
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-neutral-400 group-hover:text-white transition-colors">View All Works</span>
                <div className="relative w-48 h-[1px] bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 bg-[#C5A880] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* --- The Asymmetric Archive Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 lg:gap-x-20">
          
          {/* Item 01 - Large Offset */}
          <div className="md:col-span-7">
            <Reveal>
              <ProjectCard project={images[0]} isLarge={true} />
            </Reveal>
          </div>

          {/* Item 02 - Smaller Elevated */}
          <div className="md:col-span-5 md:pt-40">
            <Reveal delay={0.2}>
              <ProjectCard project={images[1]} />
            </Reveal>
          </div>

          {/* Item 03 - Smaller Lower */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <ProjectCard project={images[2]} />
            </Reveal>
          </div>

          {/* Item 04 - Large Overlapping look */}
          <div className="md:col-span-7 md:-mt-40">
            <Reveal delay={0.3}>
              <ProjectCard project={images[3]} isLarge={true} />
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};

/* --- Refined Project Card Component --- */
const ProjectCard = ({ project, isLarge = false }) => (
  <Link to={`/gallery`} className="group block relative">
    {/* Image Container */}
    <div className={`relative overflow-hidden bg-neutral-900 ${isLarge ? 'aspect-[4/5]' : 'aspect-square'}`}>
      
      {/* Top Metadata Overlay (Technical Feel) */}
      <div className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-4 group-hover:translate-y-0">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-widest text-[#C5A880]">REF_{project.num}</span>
          <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">{project.type}</span>
        </div>
        <span className="text-[10px] font-serif italic text-white/60">{project.year}</span>
      </div>

      {/* Main Image */}
      <img 
        src={project.src} 
        alt={project.label}
        className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[2s] ease-[cubic-bezier(0.16, 1, 0.3, 1)]" 
      />
      
      {/* Interactive Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
      
      {/* View Project Button (Center) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
         <div className="w-20 h-20 rounded-full bg-[#C5A880] flex items-center justify-center text-[#050505] shadow-2xl">
            <ArrowUpRight size={24} />
         </div>
      </div>
    </div>

    {/* Bottom Content */}
    <div className="mt-10 grid grid-cols-12 items-end">
      <div className="col-span-10">
        <h3 className="font-serif text-3xl md:text-4xl text-white mb-3 group-hover:text-[#C5A880] transition-colors duration-500">
          {project.label}
        </h3>
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">{project.location}</span>
          <div className="h-[1px] w-8 bg-neutral-800" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">India</span>
        </div>
      </div>
      
      <div className="col-span-2 text-right">
        <span className="font-serif text-5xl text-neutral-900 group-hover:text-neutral-800 transition-colors duration-700 select-none">
          {project.num}
        </span>
      </div>
    </div>
  </Link>
);

export default ProjectsPreview;