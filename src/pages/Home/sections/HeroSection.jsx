import { useEffect, useState } from "react";

// ✅ Desktop banners
import desktopBanner1 from "/Home/hero/desktop/SI_bannerimage1.webp";
import desktopBanner2 from "/Home/hero/desktop/SI_bannerimage2.webp";
import desktopBanner3 from "/Home/hero/desktop/SI_bannerimage3.webp";
import desktopBanner4 from "/Home/hero/desktop/SI_bannerimage4.webp";

// ✅ Mobile banners
import mobileBanner1 from "/Home/hero/mobile/shreyaainfra web_mobilebanner1.webp";
import mobileBanner2 from "/Home/hero/mobile/shreyaainfra web_mobilebanner2.webp";
import mobileBanner3 from "/Home/hero/mobile/shreyaainfra web_mobilebanner3.webp";
import mobileBanner4 from "/Home/hero/mobile/shreyaainfra web_mobilebanner4.webp";

// ✅ Same slides, just split images for responsive rendering
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

  const SLIDE_DURATION = 2000; // ms (animation speed)
  const SLIDE_DELAY = 6000; // ms (time per slide)

  const activeSlide = heroSlides[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, SLIDE_DURATION);
    }, SLIDE_DELAY);

    return () => clearInterval(interval);
  }, []);

  // ✅ decide correct banner based on screen size
  const getSlideImage = (slide) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return slide.imageMobile;
    }
    return slide.imageDesktop;
  };

  return (
    <section className=" relative w-full overflow-hidden h-auto md:h-[calc(100vh-80px)]">
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
        className={` absolute inset-0 ${
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
