import { useEffect, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";

import profoundInfra from "../../../assets/Home/profoundInfra.webp";
import royalEnclave from "../../../assets/Home/royalEnclave.webp";
import ChourasiaShreyas from "../../../assets/Home/ChourasiaShreyasMarathahalli.webp";
import natureSign from "../../../assets/Home/naturesign.webp";
import Paradise from "../../../assets/Home/SandsParadiseVignanNagar.webp";
import ModernView from "../../../assets/Home/ModernView.webp";

const heroSlides = [
  {
    image: profoundInfra,
    title: "Modern Profound Tech Park",
    subtitle:
      "A prestigious Kondapur landmark beside Satyam, neighboring tech giants TCS, Cognizant, and HSBC.",
  },
  {
    image: royalEnclave,
    title: "Royal Enclave",
    subtitle:
      "Elegant 2 & 3 BHKs blending lush greenery with rapid access to major IT corridors.",
  },
  {
    image: Paradise,
    title: "Paradise",
    subtitle:
      "An eco-friendly sanctuary featuring modern infrastructure in a peaceful family setting.",
  },
  {
    image: ChourasiaShreyas,
    title: "Chourasia Shreyas",
    subtitle:
      "A prime commercial hub placing your business at the center of major IT corridors.",
  },
  {
    image: natureSign,
    title: "Nature’s Sign",
    subtitle:
      "Build your custom villa in a low-density community with direct access to North Bangalore’s CBD.",
  },
  {
    image: ModernView,
    title: "Modern View Apartment",
    subtitle:
      "A peaceful residential haven offering immediate access while maintaining a family-friendly atmosphere.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeSlide = heroSlides[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setNextIndex((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 1200);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative h-screen w-full overflow-y-visible ">
      {/* Current Slide (underneath) */}
      <div className="absolute inset-0">
        <img
          src={heroSlides[currentIndex].image}
          alt={heroSlides[currentIndex].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Next Slide (overlaps from right) */}
      <div
        className={`absolute inset-0 ${
          isTransitioning ? "animate-slide-overlap" : "translate-x-full"
        }`}
      >
        <img
          src={heroSlides[nextIndex].image}
          alt={heroSlides[nextIndex].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ORANGE CARD */}
      <div className="absolute left-0 bottom-0 w-full z-20 translate-y-[50%]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-ORANGE text-white px-6 py-10 md:px-14 md:py-16 w-full md:w-[65%] shadow-xl">
            <AnimatedHeading
              as="h1"
              delay={0}
              staggerDelay={0.15}
              className="text-2xl md:text-5xl font-semibold leading-tight mb-4 md:mb-6"
            >
              {activeSlide.title}
            </AnimatedHeading>

            <p className="text-sm md:text-lg text-orange-100 max-w-lg">
              {activeSlide.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes slide-overlap {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-overlap {
          animation: slide-overlap 1200ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
