import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const [showWave, setShowWave] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShowWave(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#F4EFE5] overflow-hidden"
    >
    
      {/* WAVE — ONLY WHEN SCROLLED */}
      {showWave && (
        <svg
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-[260px] z-0"
        >
          <path
            d="
              M0 140
              C240 40, 480 40, 720 120
              C960 200, 1200 200, 1440 120
              L1440 0
              L0 0
              Z
            "
            fill="#ffffff"
          />
        </svg>
      )}
    
      {/* HEADING */}
      <div className="relative z-10 pt-24 text-center">
        <p className="text-[16px] text-[#1A1A1A] leading-tight">
          What <br />
          people <br />
          says
        </p>
      </div>
    
      {/* CONTENT */}
      <div className="relative z-10     max-w-5xl mx-auto px-6 md:pt-32 py-10 md:pb-36">
    
        {/* QUOTE */}
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="absolute -left-12 top-0 text-[48px]">“</span>
    
          <p className=" text-lg md:text-[22px] leading-relaxed">
            From the very first meeting to project handover,
            the experience was smooth and transparent.
          </p>
    
          <span className="absolute -right-12 bottom-0 text-[48px]">”</span>
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
