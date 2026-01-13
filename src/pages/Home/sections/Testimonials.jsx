import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const [showWave, setShowWave] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShowWave(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Smooth scroll progress calculation (0 to 1)
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight * 0.3)
      ));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#F4EFE5] overflow-hidden"
    >
    
      {/* WAVE – RESPONDS TO SCROLL */}
      {showWave && (
        <div className="absolute top-0 left-0 w-full h-[260px] z-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 260"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateY(${-50 + scrollProgress * 50}px)`,
              opacity: scrollProgress * 0.95 + 0.05
            }}
          >
            <path
              d={`
                M0,${140 - scrollProgress * 20}
                C${240},${60 - scrollProgress * 20} ${480},${60 - scrollProgress * 20} ${720},${120 - scrollProgress * 10}
                C${960},${180 + scrollProgress * 20} ${1200},${180 + scrollProgress * 20} ${1440},${110 - scrollProgress * 10}
                L1440,0 L0,0 Z
              `}
              fill="#ffffff"
              style={{
                transition: 'none'
              }}
            />
          </svg>
        </div>
      )}
    
      {/* HEADING */}
      <div 
        className="relative z-10 pt-24 text-center"
        style={{
          opacity: Math.min(1, scrollProgress * 1.3),
          transform: `translateY(${(1 - scrollProgress) * 40}px)`
        }}
      >
        <p className="text-[16px] text-[#1A1A1A] leading-tight">
          What <br />
          people <br />
          says
        </p>
      </div>
    
      {/* CONTENT */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-6 md:pt-32 py-10 md:pb-36"
        style={{
          opacity: Math.min(1, scrollProgress * 1.5),
          transform: `translateY(${(1 - scrollProgress) * 60}px)`
        }}
      >
    
        {/* QUOTE */}
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="absolute -left-12 top-0 text-[48px]">"</span>
    
          <p className=" text-lg md:text-[22px] leading-relaxed">
            From the very first meeting to project handover,
            the experience was smooth and transparent.
          </p>
    
          <span className="absolute -right-12 bottom-0 text-[48px]">"</span>
        </div>
    
        {/* AUTHOR */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-10 h-10 rounded-full object-cover"
            alt="Neetu sargam"
          />
          <div className="text-left">
            <p className="text-[14px] font-semibold">Neetu sargam</p>
            <p className="text-[12px] text-gray-600">
              Founder, KPCC International
            </p>
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default Testimonials;