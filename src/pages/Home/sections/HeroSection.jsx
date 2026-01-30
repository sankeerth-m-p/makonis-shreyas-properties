import { useEffect, useState, useRef } from "react";

// Desktop banners
import desktopBanner1 from "/Home/hero/desktop/SI_bannerimage1.webp";
import desktopBanner2 from "/Home/hero/desktop/SI_bannerimage2.webp";
import desktopBanner3 from "/Home/hero/desktop/SI_bannerimage3.webp";
import desktopBanner4 from "/Home/hero/desktop/SI_bannerimage4.webp";
import desktopBanner5 from "/Home/hero/desktop/SI_bannerimage5.webp";
// Mobile banners
import mobileBanner1 from "/Home/hero/mobile/shreyaainfra web_mobilebanner1.webp";
import mobileBanner2 from "/Home/hero/mobile/shreyaainfra web_mobilebanner2.webp";
import mobileBanner3 from "/Home/hero/mobile/shreyaainfra web_mobilebanner3.webp";
import mobileBanner4 from "/Home/hero/mobile/shreyaainfra web_mobilebanner4.webp";
import mobileBanner5 from "/Home/hero/mobile/shreyaainfra web_mobilebanner5.webp";

const heroSlides = [{
    imageDesktop: desktopBanner4,
    imageMobile: mobileBanner4,

  },
   {
    imageDesktop: desktopBanner5,
    imageMobile: mobileBanner5,
 
  },
  
  {
    imageDesktop: desktopBanner2,
    imageMobile: mobileBanner2,
 
  },
  {
    imageDesktop: desktopBanner3,
    imageMobile: mobileBanner3,
  },
  {
    imageDesktop: desktopBanner1,
    imageMobile: mobileBanner1,
    
  },
  
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState("forward"); // "forward" or "backward"
  const [isManualTransition, setIsManualTransition] = useState(false); // Track if transition is manual
  
  const autoPlayTimeoutRef = useRef(null);
  const slideIntervalRef = useRef(null);

  const SLIDE_DURATION = isMobile ? 600 : 1300; // Faster auto-scroll duration on mobile
  const MANUAL_SLIDE_DURATION = isMobile ? 150 : 200; // Faster manual duration on mobile
  const SLIDE_DELAY = isMobile ? 3000 : 6000; // Shorter delay between slides on mobile
  const RESUME_DELAY = 5000;
  const MIN_SWIPE_DISTANCE = 50;

  // Get current duration based on transition type
  const currentDuration = isManualTransition ? MANUAL_SLIDE_DURATION : SLIDE_DURATION;

  // Calculate next/prev index based on direction
  const targetIndex = slideDirection === "forward" 
    ? (currentIndex + 1) % heroSlides.length 
    : (currentIndex - 1 + heroSlides.length) % heroSlides.length;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide logic
  useEffect(() => {
    if (isAutoPlayPaused) return;

    slideIntervalRef.current = setInterval(() => {
      setSlideDirection("forward");
      setIsManualTransition(false); // Auto-scroll uses slow animation
      goToSlide((currentIndex + 1) % heroSlides.length);
    }, SLIDE_DELAY);

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [currentIndex, isAutoPlayPaused]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, currentDuration);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlayPaused(true);
    
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, RESUME_DELAY);
  };

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
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      // Swipe left - next slide (forward)
      setSlideDirection("forward");
      setIsManualTransition(true); // Manual interaction uses fast animation
      pauseAutoPlay();
      goToSlide((currentIndex + 1) % heroSlides.length);
    } else if (isRightSwipe) {
      // Swipe right - previous slide (backward)
      setSlideDirection("backward");
      setIsManualTransition(true); // Manual interaction uses fast animation
      pauseAutoPlay();
      goToSlide((currentIndex - 1 + heroSlides.length) % heroSlides.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleDotClick = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    // Determine direction
    const diff = index - currentIndex;
    const wrappedDiff = diff < 0 ? diff + heroSlides.length : diff;
    
    if (wrappedDiff <= heroSlides.length / 2) {
      setSlideDirection("forward");
    } else {
      setSlideDirection("backward");
    }
    
    setIsManualTransition(true); // Manual interaction uses fast animation
    pauseAutoPlay();
    goToSlide(index);
  };

  const getSlideImage = (slide) => {
    return isMobile ? slide.imageMobile : slide.imageDesktop;
  };

  return (
    <section className="relative w-full overflow-hidden h-auto  lg:h-[calc(100vh-80px)]">
      {/* Slider Container */}
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Current Slide */}
        <div className="relative  lg:absolute inset-0">
          <img
            src={heroSlides[currentIndex].imageMobile}
    alt={heroSlides[currentIndex].title}
            className={`w-full h-full md:hidden object-cover ${
              isTransitioning 
                ? slideDirection === "forward" 
                  ? isManualTransition ? "animate-old-zoom-in-fast" : "animate-old-zoom-in" 
                  : isManualTransition ? "animate-old-zoom-in-reverse-fast" : "animate-old-zoom-in-reverse"
                : ""
            }`}
          />
          <img
            src={heroSlides[currentIndex].imageDesktop}
    alt={heroSlides[currentIndex].title}
            className={`w-full h-full hidden md:block object-cover ${
              isTransitioning 
                ? slideDirection === "forward" 
                  ? isManualTransition ? "animate-old-zoom-in-fast" : "animate-old-zoom-in" 
                  : isManualTransition ? "animate-old-zoom-in-reverse-fast" : "animate-old-zoom-in-reverse"
                : ""
            }`}
          />
        </div>

        {/* Target Slide (next or previous) */}
        <div
          className={`absolute inset-0 ${
            isTransitioning 
              ? slideDirection === "forward" 
                ? isManualTransition ? "animate-slide-reveal-rtl-fast" : "animate-slide-reveal-rtl" 
                : isManualTransition ? "animate-slide-reveal-ltr-fast" : "animate-slide-reveal-ltr"
              : ""
          }`}
          style={{
            clipPath: isTransitioning
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : slideDirection === "forward"
              ? "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
              : "polygon(0 0, 0 0, 0 100%, 0 100%)",
          }}
        >
          <img
            src={getSlideImage(heroSlides[targetIndex])}
            alt={heroSlides[targetIndex].title}
            className={`w-full h-auto  lg:h-full object-contain  lg:object-cover ${
              isTransitioning 
                ? slideDirection === "forward" 
                  ? isManualTransition ? "animate-new-zoom-out-fast" : "animate-new-zoom-out" 
                  : isManualTransition ? "animate-new-zoom-out-reverse-fast" : "animate-new-zoom-out-reverse"
                : ""
            }`}
          />
        </div>
      </div>

      {/* Dots Navigation - Mobile Only */}
      {isMobile && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style>{`
        /* ===== FORWARD ANIMATIONS - AUTO (Right to Left reveal) ===== */
        
        @keyframes old-zoom-in {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.06);
          }
        }

        .animate-old-zoom-in {
          animation: old-zoom-in ${SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        @keyframes slide-reveal-rtl {
          from {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        .animate-slide-reveal-rtl {
          animation: slide-reveal-rtl ${SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: clip-path;
        }

        @keyframes new-zoom-out {
          from {
            transform: scale(1.5);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-new-zoom-out {
          animation: new-zoom-out ${SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        /* ===== BACKWARD ANIMATIONS - AUTO (Left to Right reveal) ===== */
        
        @keyframes old-zoom-in-reverse {
          from {
            transform: scale(1.5);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-old-zoom-in-reverse {
          animation: old-zoom-in-reverse ${SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        @keyframes slide-reveal-ltr {
          from {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        .animate-slide-reveal-ltr {
          animation: slide-reveal-ltr ${SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: clip-path;
        }

        @keyframes new-zoom-out-reverse {
          from {
            transform: scale(1.5);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-new-zoom-out-reverse {
          animation: new-zoom-out-reverse ${SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        /* ===== FORWARD ANIMATIONS - MANUAL/FAST (Right to Left reveal) ===== */
        
        .animate-old-zoom-in-fast {
          animation: old-zoom-in ${MANUAL_SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        .animate-slide-reveal-rtl-fast {
          animation: slide-reveal-rtl ${MANUAL_SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: clip-path;
        }

        .animate-new-zoom-out-fast {
          animation: new-zoom-out ${MANUAL_SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        /* ===== BACKWARD ANIMATIONS - MANUAL/FAST (Left to Right reveal) ===== */
        
        .animate-old-zoom-in-reverse-fast {
          animation: old-zoom-in-reverse ${MANUAL_SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        .animate-slide-reveal-ltr-fast {
          animation: slide-reveal-ltr ${MANUAL_SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: clip-path;
        }

        .animate-new-zoom-out-reverse-fast {
          animation: new-zoom-out-reverse ${MANUAL_SLIDE_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          will-change: transform;
        }

        /* ===== OTHER ANIMATIONS ===== */
        
        @keyframes text-swap {
          0% {
            opacity: 0.5;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-text-swap {
          animation: text-swap 4000ms fade-in;
        }

        @keyframes orange-swap {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;