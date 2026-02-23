import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [statusIndex, setStatusIndex] = useState(0);
    
    const statuses = [
        "Calibrating_Optics", 
        "Loading_Assets", 
        "Rendering_Structures", 
        "Finalizing_View"
    ];
    const gold = '#C5A880'; 
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 1400); // Slightly longer for a graceful exit
                    return 100;
                }
                // Ease-out effect for the counter
                const increment = prev > 85 ? 0.5 : prev > 60 ? 1 : 2; 
                return Math.min(prev + increment, 100);
            });
        }, 30);

        const statusInterval = setInterval(() => {
            setStatusIndex(prev => (prev + 1) % statuses.length);
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(statusInterval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden selection:bg-transparent">
            
            {/* Cinematic Split Panel Exit Animation */}
            <div className={`absolute top-0 left-0 w-full h-1/2 bg-[#080808] transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] z-0 ${progress === 100 ? '-translate-y-full' : ''}`} />
            <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#080808] transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] z-0 ${progress === 100 ? 'translate-y-full' : ''}`} />

            {/* Main Content Wrapper */}
            <div className={`relative z-10 flex flex-col items-center w-full max-w-2xl px-6 transition-all duration-[1200ms] ease-out ${progress === 100 ? 'opacity-0 scale-105 blur-md' : 'opacity-100'}`}>
                
                {/* Brand Identity */}
                <div className="relative flex flex-col items-center mb-20 md:mb-28">
                    {/* Subtle Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#C5A880]/10 blur-[60px] rounded-full pointer-events-none" />
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.15em] uppercase font-light m-0 leading-none text-center">
                        ARCHELON
                    </h1>
                    <div className="flex items-center gap-4 mt-6">
                        <div className="h-[1px] w-8 md:w-12 bg-white/20" />
                        <span className="text-[9px] md:text-[11px] font-mono text-[#C5A880] tracking-[0.5em] uppercase m-0 leading-none">
                            Developments
                        </span>
                        <div className="h-[1px] w-8 md:w-12 bg-white/20" />
                    </div>
                </div>

                {/* Technical Meter & Progress */}
                <div className="w-full md:w-[28rem] space-y-5">
                    <div className="flex justify-between items-baseline px-1">
                        <div className="flex flex-col">
                            <span className="text-[10px] md:text-xs font-mono text-white/50 tracking-[0.2em] uppercase">
                                {statuses[statusIndex]}
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl md:text-4xl font-serif text-white font-light tracking-wider">
                                {Math.floor(progress)}
                            </span>
                            <span className="text-[#C5A880] font-mono text-sm md:text-base tracking-widest">%</span>
                        </div>
                    </div>

                    {/* Architectural Hairline Progress Bar */}
                    <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
                        <div 
                            className="absolute left-0 top-0 h-full transition-all duration-75 ease-linear"
                            style={{ 
                                width: `${progress}%`, 
                                backgroundColor: gold,
                                boxShadow: `0 0 15px ${gold}, 0 0 30px ${gold}`
                            }}
                        />
                    </div>
                </div>

                {/* Footer Metrics */}
                <div className="absolute bottom-[-20vh] md:bottom-[-25vh] flex gap-8 md:gap-16 border-t border-white/10 pt-6 w-full justify-center opacity-60">
                    {['Beyond_Luxury', 'Architectural_Precision', 'Est_2024'].map((text, i) => (
                        <span key={i} className="text-[7px] md:text-[9px] font-mono tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase">
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Subtle Cinematic Scan Line */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-32 w-full -translate-y-full animate-scan opacity-30" />
            
            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-100vh); }
                    100% { transform: translateY(100vh); }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Preloader;