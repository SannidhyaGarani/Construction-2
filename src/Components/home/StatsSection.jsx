import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasStarted(true);
    }, { threshold: 0.5 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { val: 25, label: 'Years Practiced', suffix: '+' },
    { val: 120, label: 'Projects Delivered', suffix: '+' },
    { val: 15, label: 'SQ.FT Designed', suffix: 'K' },
    { val: 0, label: 'Design Awards', suffix: '12' }, // Custom example
  ];

  return (
    <section ref={sectionRef} className="bg-white border-y border-neutral-100 py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start lg:px-10 lg:border-r last:border-0 border-neutral-100 group">
              {/* Technical ID */}
              <span className="text-[8px] font-mono text-neutral-300 tracking-[0.4em] mb-4 uppercase">Data_Point.0{i+1}</span>
              
              <div className="flex items-baseline gap-1">
                <Counter end={item.val} startAnim={hasStarted} />
                <span className="text-xl font-light text-[#C5A880]">{item.suffix}</span>
              </div>

              <div className="mt-4 space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-800 group-hover:text-black transition-colors">
                  {item.label}
                </h4>
                {/* Visual Accent */}
                <div className="h-[1px] w-4 bg-[#C5A880] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end, startAnim }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startAnim) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, startAnim]);

  return (
    <span className="font-serif text-5xl md:text-6xl text-neutral-900 tracking-tighter">
      {count}
    </span>
  );
};

export default StatsSection;