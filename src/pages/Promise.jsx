import hero from "../assets/images/promise_hero.jpg";
import artistry from "../assets/images/promise_artistry.jpg";
import nature from "../assets/images/promise_nature.jpg";
import aesthetic from "../assets/images/promise_aesthetic_desgin.jpg";
import RevealImageAnimation from "../components/RevealImageAnimation";
import { useEffect, useState ,useRef} from "react";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";



function Showcase({
  title,
  para1,
  para2,
  image,
  reverse = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="w-full min-h-[50vh] md:min-h-[75vh] grid grid-cols-1 md:grid-cols-2">
      
      {/* IMAGE BLOCK */}
      <div
        ref={ref}
        className={`relative bg-gray-300 min-h-[40vh] md:min-h-full ${reverse ? "md:order-2" : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : `translateX(${reverse ? '100px' : '-100px'})`,
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
       
        {/* TITLE OVERLAY - Mobile optimized */}
        <div className={`absolute bottom-4 px-5 py-3 bg-ORANGE/80 backdrop-blur-sm w-4/5 md:min-w-60 md:w-auto ${
          !reverse ? "right-4 md:right-6 text-right md:text-right" : "left-4 md:left-6 text-left md:text-left"
        }`}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* TEXT BLOCK */}
      <FloatUpText className={`flex flex-col justify-center px-6 sm:px-8 md:px-20 lg:px-12 py-8 md:py-0 ${
          reverse ? "md:order-1 md:items-end" : ""
        }`} delay={0}>
        
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base max-w-full md:max-w-md">
          {para1}
        </p>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-full md:max-w-md">
          {para2}
        </p>
     
      </FloatUpText>
    </section>
  );
}

// ================= MAIN PAGE =================

export default function PromisePage() {
  return (
    <div className="flex overflow-hidden flex-col items-center justify-center w-full">

      {/* ========= HERO ========= */}
<section className="relative w-full min-h-screen md:h-screen pt-20 md:pt-28 overflow-hidden bg-white">
  
  {/* Decorative background shapes */}
  <div className="absolute -left-56 top-36 w-[500px] h-[460px] rounded-full bg-[#F1F4F3] hidden md:block" />
  <div className="absolute -left-24 top-60 w-[300px] h-[300px] rounded-full bg-[#ffffff] hidden md:block" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-5xl text-center px-4 md:px-6 lg:px-8 pt-6 md:pt-0">
    <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-900 px-2"
>
   
      We Deliver What We Promise
  
    </AnimatedHeading>
          <FloatUpText delay={0}>
            
    <p className="mt-4 text-sm sm:text-base md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
      At every stage of our journey, we stand by our word. From project
      planning to final handover, we ensure transparency, timely delivery,
      and uncompromising quality, so what we promise is exactly what you
      receive.
    </p>
</FloatUpText>

   
    <RevealImageAnimation
  image={hero}
  className="mt-6 md:mt-6 h-[40vh] sm:h-[0vh] md:h-[50vh] w-full rounded-xl md:rounded-2xl "
/>

  </div>
</section>

      {/* ========= ORANGE STRIP ========= */}
      <section className="bg-ORANGE p-10 items-center flex text-white h-screen md:h-auto w-full py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold leading-relaxed">
            Shaping the urban lifestyle through thoughtful design and purposeful planning.

          </h2>
        </div>
      </section>

      {/* ========= SHOWCASE ========= */}
      <section>

      <Showcase
        title="Aesthetic Design"
        para1="At Shreyas Infra, our design process is driven by purpose, precision, and people. We begin by understanding the land, its surroundings, and the lifestyle aspirations of future residents. Every plan is thoughtfully crafted to balance aesthetics, functionality, and sustainability.
"
        para2="From intelligent space planning and natural light optimization to seamless connectivity and green integration, each design decision is made with long-term value in mind. Our collaborative approach ensures that every project reflects timeless design, practical living, and the promise of a better urban lifestyle."
        image={aesthetic}
      />

      <Showcase
        title="Artistry"
        para1="At Shreyas Infra, craftsmanship is the foundation of everything we build. Every detail, from structural strength to finishing touches, is executed with care, precision, and uncompromising quality standards. We work with skilled professionals, premium materials, and proven construction practices to ensure lasting value and superior outcomes."
        para2="Our commitment to craftsmanship ensures that each development is not only visually refined but also durable, functional, and built to stand the test of time."
        image={artistry}
        reverse
        />

      <Showcase
        title="Nature Oriented"
        para1="Our nature-oriented projects are designed to live in harmony with the environment. By preserving natural landscapes, integrating green spaces, and prioritizing open, breathable layouts, we create developments that offer a healthier and more balanced way of living."
        para2="From tree-lined avenues and landscaped gardens to eco-sensitive planning and sustainable practices, every project reflects our commitment to nature, well-being, and long-term environmental responsibility."
        image={nature}
        />

        </section>
    </div>
  );
}
