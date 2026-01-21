import { useEffect, useState, useRef } from "react";

// Desktop banners
import desktopBanner1 from "/Home/hero/desktop/SI_bannerimage1.webp";
import desktopBanner2 from "/Home/hero/desktop/SI_bannerimage2.webp";
import desktopBanner3 from "/Home/hero/desktop/SI_bannerimage3.webp";
import desktopBanner4 from "/Home/hero/desktop/SI_bannerimage4.webp";

// Mobile banners
import mobileBanner1 from "/Home/hero/mobile/shreyaainfra web_mobilebanner1.webp";
import mobileBanner2 from "/Home/hero/mobile/shreyaainfra web_mobilebanner2.webp";
import mobileBanner3 from "/Home/hero/mobile/shreyaainfra web_mobilebanner3.webp";
import mobileBanner4 from "/Home/hero/mobile/shreyaainfra web_mobilebanner4.webp";

const heroSlides = [
  {
    imageDesktop: desktopBanner1,
    imageMobile: mobileBanner1,
    title: "Royal Enclave",
    subtitle:
      "Elegant 2 & 3 BHKs blending lush greenery with rapid access to major IT corridors.",
  },
  {
    imageDesktop: desktopBanner2,
    imageMobile: mobileBanner2,
    title: "Royal Enclave",
    subtitle:
      "Elegant 2 & 3 BHKs blending lush greenery with rapid access to major IT corridors.",
  },
  {
    imageDesktop: desktopBanner3,
    imageMobile: mobileBanner3,
    title: "Paradise",
    subtitle:
      "An eco-friendly sanctuary featuring modern infrastructure in a peaceful family setting.",
  },
  {
    imageDesktop: desktopBanner4,
    imageMobile: mobileBanner4,
    title: "Chourasia Shreyas",
    subtitle:
      "A prime commercial hub placing your business at the center of major IT corridors.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % heroSlides.length;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  
  const autoPlayTimeoutRef = useRef(null);
  const slideIntervalRef = useRef(null);

  const SLIDE_DURATION = 2000; // animation speed
  const SLIDE_DELAY = 6000; // time per slide
  const RESUME_DELAY = 7000; // resume autoplay after user interaction
  const MIN_SWIPE_DISTANCE = 50;

  const activeSlide = heroSlides[currentIndex];

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
    }, SLIDE_DURATION);
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
      // Swipe left - next slide
      pauseAutoPlay();
      goToSlide((currentIndex + 1) % heroSlides.length);
    } else if (isRightSwipe) {
      // Swipe right - previous slide
      pauseAutoPlay();
      goToSlide((currentIndex - 1 + heroSlides.length) % heroSlides.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleDotClick = (index) => {
    if (index === currentIndex || isTransitioning) return;
    pauseAutoPlay();
    goToSlide(index);
  };

  const getSlideImage = (slide) => {
    return isMobile ? slide.imageMobile : slide.imageDesktop;
  };

  return (
    <section className="relative w-full overflow-hidden h-auto md:h-[calc(100vh-80px)]">
      {/* Slider Container */}
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Current Slide */}
        <div className="relative md:absolute inset-0">
          <img
            src={getSlideImage(heroSlides[currentIndex])}
            alt={heroSlides[currentIndex].title}
            className={`w-full h-full object-cover ${
              isTransitioning ? "animate-old-zoom-in" : ""
            }`}
          />
        </div>

        {/* Next Slide */}
        <div
          className={`absolute inset-0 ${
            isTransitioning ? "animate-slide-reveal-rtl" : ""
          }`}
          style={{
            clipPath: isTransitioning
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
        >
          <img
            src={getSlideImage(heroSlides[nextIndex])}
            alt={heroSlides[nextIndex].title}
            className={`w-full h-auto md:h-full object-contain md:object-cover ${
              isTransitioning ? "animate-new-zoom-out" : ""
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
        @keyframes slide-overlap {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
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
      `}</style>
    </section>
  );
};

export default HeroSection;