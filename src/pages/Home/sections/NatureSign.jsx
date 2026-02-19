import nature2 from "/Home/naturesign2.png";
import nature7 from "/Home/naturesign_2.webp";
import nature6 from "/Home/naturesign_3.webp";
import nature3 from "/Home/naturesign_4.webp";
import nature4 from "/Home/naturesign_5.webp";
import nature5 from "/Home/naturesign_6.webp";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FloatUpText from "../../../components/floatUpText";
import AnimatedHeading from "../../../components/animatedHeading";

const images = [nature7, nature5, nature4, nature6, nature3];

const NatureSign = () => {
  const thumbWidth = 110;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const autoSlideRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  /* ---------------- MOBILE ---------------- */
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const MIN_SWIPE_DISTANCE = 50;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- PAUSE / RESUME LOGIC ---------------- */
  const pauseAutoSlide = () => {
    setIsPaused(true);

    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    };
  }, [isPaused]);

  /* ---------------- SWIPE ---------------- */
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    pauseAutoSlide();

    const distance = touchStart - touchEnd;

    if (distance > MIN_SWIPE_DISTANCE) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (distance < -MIN_SWIPE_DISTANCE) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  /* ---------------- CLEANUP ---------------- */
  useEffect(() => {
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section
      className="relative w-full h-[60vh] lg:h-[calc(100vh-5rem)] overflow-hidden bg-[#0B1F1A]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute h-1/2 bottom-0 w-full bg-gradient-to-t from-[#0A1E2A]/100 via-[#0A1E2A]/40 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-end">{/* INFO STRIP – DESKTOP ONLY */}
{/* <div className="lg:absolute hidden px-6 lg:px-0 md:block lg:bottom-[150px] w-full z-30">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between text-[#D7E2E8] text-sm">
      
      <div className="flex items-center gap-3">
        <FloatUpText>
          <img src={nhIcon} className="w-12 h-8 opacity-80" />
        </FloatUpText>
        <div>
          <FloatUpText>Located on</FloatUpText>
          <FloatUpText>NH-44 North Bengaluru</FloatUpText>
        </div>
      </div>

      <span className="w-[1px] h-[46px] bg-[#6F8C9B]/45" />

      <div className="flex items-center gap-3">
        <FloatUpText>
          <img src={airportIcon} className="w-12 h-12 opacity-80" />
        </FloatUpText>
        <div>
          <FloatUpText>Just</FloatUpText>
          <FloatUpText>20 minutes from Airport</FloatUpText>
        </div>
      </div>

      <span className="w-[1px] h-[46px] bg-[#6F8C9B]/45" />

      <div className="flex items-center gap-3">
        <FloatUpText>
          <img src={hillIcon} className="w-12 h-12 opacity-80" />
        </FloatUpText>
        <div>
          <FloatUpText>Very close</FloatUpText>
          <FloatUpText>proximity from Nandi Hills</FloatUpText>
        </div>
      </div>

    </div>
  </div>
</div> */}

        {/* BOTTOM BAND */}
        <div className="py-4 px-6 lg:px-0 lg:py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 text-[#D7E2E8]">
            <img src={nature2} className="w-[130px] lg:w-[160px]" />

            <div className="flex flex-col gap-2">
              {/* MOBILE DOTS */}
              <div className="md:hidden flex justify-end gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      pauseAutoSlide();
                      setIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <AnimatedHeading className="text-sm lg:text-2xl max-w-xs lg:max-w-md text-white">
                Nature’s sign, where luxury and nature flow in perfect harmony.
              </AnimatedHeading>
            </div> {/* DESKTOP THUMB SLIDER */}
<div className="relative w-[360px] hidden lg:flex items-center">
  
  <button
    onClick={() => {
      pauseAutoSlide();
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }}
    className="absolute -left-8 bg-[#0A1E2A]/90 w-9 h-9 rounded-full"
  >
    ‹
  </button>

  <div className="w-[320px] overflow-hidden mx-auto">
    <div
      className="flex gap-3 transition-transform duration-500"
      style={{
        transform: `translateX(-${index * thumbWidth}px)`,
      }}
    >
      {[...images, ...images].map((img, i) => {
        const realIndex = i % images.length;
        return (
          <img
            key={i}
            src={img}
            className="w-[100px] h-[70px] object-cover shrink-0 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              pauseAutoSlide();
              setIndex(realIndex);
            }}
          />
        );
      })}
    </div>
  </div>

  <button
    onClick={() => {
      pauseAutoSlide();
      setIndex((prev) => (prev + 1) % images.length);
    }}
    className="absolute -right-8 bg-[#0A1E2A]/90 w-9 h-9 rounded-full"
  >
    ›
  </button>

</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSign;
