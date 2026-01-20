import { useEffect, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";

import profoundInfra from "/Home/profoundInfra.webp";
import royalEnclave from "/Home/royalEnclave.webp";
import ChourasiaShreyas from "/Home/ChourasiaShreyasMarathahalli.webp";
import natureSign from "/Home/naturesign.webp";
import Paradise from "/Home/SandsParadiseVignanNagar.webp";
import ModernView from "/Home/ModernView.webp";
import banner1 from "/Home/SI_bannerimage1.jpg";
import FloatUpText from "../../../components/floatUpText";

const heroSlides = [
  {
    image: banner1,
    title: "Modern Profound Tech Park",
    subtitle:
      "A prestigious Kondapur landmark beside Satyam, neighboring tech giants TCS, Cognizant, and HSBC.",
  }
  // {
  //   image: royalEnclave,
  //   title: "Royal Enclave",
  //   subtitle:
  //     "Elegant 2 & 3 BHKs blending lush greenery with rapid access to major IT corridors.",
  // },
  // {
  //   image: Paradise,
  //   title: "Paradise",
  //   subtitle:
  //     "An eco-friendly sanctuary featuring modern infrastructure in a peaceful family setting.",
  // },
  // {
  //   image: ChourasiaShreyas,
  //   title: "Chourasia Shreyas",
  //   subtitle:
  //     "A prime commercial hub placing your business at the center of major IT corridors.",
  // },
  // {
  //   image: natureSign,
  //   title: "Nature’s Sign",
  //   subtitle:
  //     "Build your custom villa in a low-density community with direct access to North Bangalore’s CBD.",
  // },
  // {
  //   image: ModernView,
  //   title: "Modern View Apartment",
  //   subtitle:
  //     "A peaceful residential haven offering immediate access while maintaining a family-friendly atmosphere.",
  // },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const nextIndex = (currentIndex + 1) % heroSlides.length;
  const [isTransitioning, setIsTransitioning] = useState(false);
const SLIDE_DURATION = 1200; // ms (animation speed)
const SLIDE_DELAY = 4000;   // ms (time per slide)

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


  return (
<section className="relative h-[80vh] md:h-screen w-full md:-mt-20  overflow-y-visible">
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
{/* <div className="absolute left-0 bottom-0 w-full z-30 translate-y-0  md:translate-y-10">
        <div className="max-w-7xl  mx-auto  px-4 md:px-0 ">
    <div
  key={currentIndex}
  className={`text-white  px-6 py-10 md:px-14 md:pb-20 md:pt-10 w-full md:w-[65%] shadow-xl animate-orange-swap 
    ${currentIndex % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2"}
  `}
>



  <AnimatedHeading
    as="h1"
    delay={0}
    staggerDelay={0.15}
    className="text-lg md:text-5xl font-medium leading-tight mb-4 md:mb-6"
  >
    {activeSlide.title}
  </AnimatedHeading>
            <FloatUpText>
              
  <p className="text-sm md:text-lg text-orange-100 max-w-lg">
    {activeSlide.subtitle}
  </p>
</FloatUpText>

<div className=" justify-end z-30 flex gap-2">
  {heroSlides.map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrentIndex(i)}
      className={`w-2 h-2 rounded-full transition  ${
        i === currentIndex ? "bg-white" : "bg-white/40"
      }`}
    />
  ))}
</div>
          </div>
        </div>
      </div> */}

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
}@keyframes orange-swap {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-orange-swap {
  animation: orange-swap 300ms  cubic-bezier(0.6, 0, 0.2, 1);
}


  .animate-slide-overlap {
    animation: slide-overlap ${SLIDE_DURATION}ms cubic-bezier(0.25, 0.3, 0.25, 0.1) forwards;
  }
`}</style>

    </section>
  );
};

export default HeroSection;
