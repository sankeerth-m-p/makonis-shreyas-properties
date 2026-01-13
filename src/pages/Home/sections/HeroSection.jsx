import { useEffect, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";

import heroImg1 from "../../../assets/Home/Sands Paradise_Vignan Nagar.jpg";
import heroImg2 from "../../../assets/Home/royalenclave.jpg";
import heroImg3 from "../../../assets/Home/residential_projects.jpg";
import heroImg4 from "../../../assets/Home/naturesign.jpg";
import heroImg5 from "../../../assets/Home/profound_infra.jpg";

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];
const slides = [...heroImages, heroImages[0]];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (index === heroImages.length) {
      setEnableTransition(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  return (
<section className="relative h-screen w-full overflow-hidden">

  {/* HERO SLIDER */}
  <div
    className={`absolute inset-0 flex ${enableTransition
      ? "transition-transform duration-[1200ms] ease-in-out"
      : ""
      }`}
    style={{ transform: `translateX(-${index * 100}vw)` }}
    onTransitionEnd={handleTransitionEnd}
  >
    {slides.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`hero-${i}`}
        className="w-screen h-full object-cover flex-shrink-0"
      />
    ))}
  </div>

  {/* ORANGE CARD */}
  <div className="absolute bottom-0 md:bottom-[-90px] left-0 w-full z-10 animate-cardUp">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="bg-ORANGE text-white px-6 py-10 md:px-14 md:py-16 w-full md:w-[65%]">

        <AnimatedHeading
          as="h1"
          delay={0}
          staggerDelay={0.15}
          className="text-2xl md:text-5xl font-semibold leading-tight mb-4 md:mb-6"
        >
          WHERE EVERY LUXURY
          SQUARE FOOT SPEAKS
          QUALITY.
        </AnimatedHeading>

        <p className="text-sm md:text-lg text-orange-100 max-w-lg">
          Enter a world of refined workspaces where elegance meets
          extraordinary service.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSection;
