import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Loader2, ArrowUpRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, 'projects'),
          orderBy('createdAt', 'desc'),
          limit(6)
        );
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          updatedAt: doc.data().updatedAt?.toDate() || doc.data().createdAt?.toDate()
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    // Added overflow-x-hidden here to catch any button bleed
    <section className="py-24 md:py-32 bg-white border-t border-neutral-100 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-black" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#C5A880]">Archive.v02</span>
            </div>
            <h2 className="font-serif text-6xl md:text-7xl text-neutral-900 tracking-tighter leading-[0.9]">
              Latest Works<span className="text-[#C5A880]">.</span>
            </h2>
          </div>
          
          <Link to="/projects" className="group flex items-center gap-4 pb-2">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 group-hover:text-black transition-colors">View Full Index</span>
            <div className="p-2 border border-neutral-100 group-hover:border-black transition-colors">
              <Plus size={14} className="group-hover:rotate-90 transition-transform duration-500" />
            </div>
          </Link>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
            <Loader2 className="animate-spin" size={32} strokeWidth={1} />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Retrieving Data...</span>
          </div>
        ) : projects.length > 0 ? (
          <div className="relative group/swiper">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={40}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} swiper-bullet"></span>`;
                },
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 40 },
              }}
              className="!pb-20"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <div
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="group cursor-pointer h-full"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100 border border-neutral-100 transition-colors duration-500 group-hover:border-neutral-300">
                      <img 
                        src={project.projectImage} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
                      
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 border border-neutral-100">
                        <span className="text-[8px] font-mono font-bold tracking-widest text-neutral-400">
                          PRJ_0{index + 1}
                        </span>
                      </div>

                      <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <div className="bg-white p-3 shadow-xl">
                          <ArrowUpRight size={20} className="text-[#C5A880]" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 relative">
                      <h3 className="font-serif text-2xl text-neutral-900 group-hover:text-[#C5A880] transition-colors duration-300">
                        {project.name}
                      </h3>
                      
                      <div className="flex items-center gap-6 mt-4">
                        <div>
                          <p className="text-[8px] uppercase tracking-widest text-neutral-400 mb-1">Scale / Date</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-800">
                            Full Suite // {project.updatedAt?.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                          </p>
                        </div>
                        <div className="h-8 w-px bg-neutral-100" />
                        <div>
                          <p className="text-[8px] uppercase tracking-widest text-neutral-400 mb-1">Status</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">Archived</p>
                        </div>
                      </div>

                      <div className="mt-6 h-[1px] w-full bg-neutral-100 overflow-hidden">
                        <div className="h-full bg-black w-0 group-hover:w-full transition-all duration-700 ease-out" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- FIX: Navigation Buttons --- */}
            {/* Buttons now hidden on small mobile to prevent overflow, 
                and they use absolute positioning that stays within parent 
            */}
            <div className="hidden xl:block">
              <button className="swiper-button-prev-custom absolute left-0 top-1/3 -translate-x-1/2 z-20 p-4 bg-white border border-neutral-200 hover:border-black text-neutral-400 hover:text-black transition-all shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button className="swiper-button-next-custom absolute right-0 top-1/3 translate-x-1/2 z-20 p-4 bg-white border border-neutral-200 hover:border-black text-neutral-400 hover:text-black transition-all shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 text-center border border-neutral-100">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-300">Null_Result / No_Projects_Found</span>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-bullet {
          width: 6px;
          height: 6px;
          background: #D1D5DB;
          opacity: 1;
          display: inline-block;
          margin: 0 6px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .swiper-pagination-bullets {
          bottom: 0 !important;
        }

        .swiper-bullet-active {
          background: #C5A880;
          width: 30px;
          border-radius: 4px;
        }

        .swiper {
          overflow: visible !important;
        }

        .swiper-button-prev-custom:disabled,
        .swiper-button-next-custom:disabled {
          opacity: 0;
          pointer-events: none;
        }
      `}} />
    </section>
  );
};

export default ProjectsPreview;