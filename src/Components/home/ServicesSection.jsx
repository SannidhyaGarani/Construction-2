import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Interior Designing',
      subtitle: 'Bespoke Environments',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      link: '/interiors'
    },
    {
      id: '02',
      title: 'Exterior Architecture',
      subtitle: 'Structural Excellence',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      link: '/exteriors'
    },
    {
      id: '03',
      title: 'Floor Planning',
      subtitle: 'Spatial Precision',
      image: 'https://images.unsplash.com/photo-1563219125-1db796e20ff2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb3IlMjB0aWxlc3xlbnwwfHwwfHx8MA%3D%3D',
      link: '/floorplans'
    },
    {
      id: '04',
      title: 'Luxury Projects',
      subtitle: 'Turnkey Delivery',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      link: '/projects'
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-black" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#C5A880]">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 tracking-tighter">
              Studio Services<span className="text-[#C5A880]">.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 leading-relaxed">
              We provide comprehensive architectural solutions, from initial blueprint to final interior staging.
            </p>
          </div>
        </div>

        {/* --- Services Grid (4 Columns) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item) => (
            <Link 
              key={item.id} 
              to={item.link} 
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-200 border border-neutral-100 transition-all duration-500 hover:border-black"
            >
              {/* Image with subtle zoom and grayscale-to-color transition */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                {/* Top Label */}
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
                    Catalog_Ref_{item.id}
                  </span>
                  <ArrowUpRight 
                    size={20} 
                    className="text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" 
                  />
                </div>

                {/* Bottom Content */}
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#C5A880] font-bold mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl font-light text-white uppercase tracking-tight leading-tight mb-4">
                    {item.title}
                  </h3>
                  
                  {/* The Architectural Line Animation */}
                  <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-[#C5A880] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Technical Hover Decor (Corners) */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/0 group-hover:border-white/40 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/0 group-hover:border-white/40 transition-all duration-500" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;