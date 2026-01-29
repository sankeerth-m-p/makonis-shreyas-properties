import hero from "/promise_hero.webp";
import aesthetic from "/promise_artistry.webp";
import nature from "/promise_nature.webp";
import artistry  from "/promise_aesthetic_desgin.webp";
import RevealImageAnimation from "../components/RevealImageAnimation";
import { useEffect, useState ,useRef} from "react";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import circleBg from "/Home/cicle.svg"; // Make sure this path is correct
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Showcase({ title, para1, para2, image, reverse = false }) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------------- IMAGE REVEAL (TOP → BOTTOM) ---------------- */
      gsap.fromTo(
        wrapperRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
end: "top 20%",

            scrub: true,
          },
        }
      );

      /* ---------------- IMAGE ZOOM OUT (SLIGHTLY DELAYED) ---------------- */
      gsap.fromTo(
  imgRef.current,
  { scale: 1.5 },
  {
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top 80%",
      end: "top 15%",
      scrub: true,
    },
  }
);


      /* ---------------- TEXT LINE-BY-LINE REVEAL ---------------- */
      const lines = textRef.current.querySelectorAll(".text-line");

      gsap.fromTo(
  lines,
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top 55%",
      end: "top 15%",
      scrub: true,
    },
  }
);

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full a2 min-h-[50vh] lg:min-h-[40vh] grid grid-cols-1   lg:grid-cols-2">
      
      {/* IMAGE BLOCK */}
      <div
        className={`relative min-h-[40vh] lg:min-h-full overflow-hidden ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <div
          ref={wrapperRef}
          className="w-full h-full overflow-hidden"
        >
          <img
            ref={imgRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        
      </div>

      {/* TEXT BLOCK */}
      <div
        ref={textRef}
        className={`flex flex-col justify-center px-6 sm:px-8 md:px-20 py-8 ${
          reverse ? "  lg:order-1   lg:items-end" : ""
        }`}
      ><AnimatedHeading className="section-heading  font-semibold mb-5">
            {title}
          </AnimatedHeading>
        <p className="text-line text-base text-gray-700 leading-relaxed mb-4 max-w-md">
          {para1}
        </p>

        <p className="text-line text-base text-gray-600 leading-relaxed max-w-md">
          {para2}
        </p>
      </div>
    </section>
  );
}



// ================= MAIN PAGE =================

export default function PromisePage() { const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animation values for circles
  const bottomLeftX = useTransform(scrollYProgress, [0, 1], [-160, 50]);
  const bottomLeftY = useTransform(scrollYProgress, [0, 1], [20, -10]);
  const topRightX = useTransform(scrollYProgress, [0, 1], [20, 10]);
  const topRightY = useTransform(scrollYProgress, [0, 1], [-22, 100]);
  return (
    <div className="flex overflow-hidden  flex-col items-center justify-center w-full">

      {/* ========= HERO ========= */}
<section className="relative   ref={sectionRef} px-6 lg:px-0  w-full  lg:h-screen  py-10 lg:pt-28 overflow-hidden bg-white">
  
   {/* ANIMATED CIRCLES - Add these */}
      {/* BOTTOM LEFT */}
      <motion.img
        src={circleBg}
        alt=""
        aria-hidden="true"
        style={{ x: bottomLeftX, y: bottomLeftY }}
        className="pointer-events-none select-none absolute left-[-220px] bottom-[-200px] w-[560px] opacity-[0.12] z-[1]"
      />

      {/* TOP RIGHT */}
      <motion.img
        src={circleBg}
        alt=""
        aria-hidden="true"
        style={{ x: topRightX, y: topRightY }}
        className="pointer-events-none select-none absolute right-[-220px] top-[-200px] w-[560px] opacity-[0.12] z-[1]"
      />
  {/* Content */}
  <div className="relative z-10    mx-auto max-w-5xl text-center  pt-6 md:pt-0">
    <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className=" section-heading  mb-4 md:mb-8"
>
   
      We Deliver What We Promise
  
    </AnimatedHeading>
          <FloatUpText delay={0}>
            
   <p className="mt-4 text-lg  leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">

      At every stage of our journey, we stand by our word. From project
      planning to final handover, we ensure transparency, timely delivery,
      and uncompromising quality, so what we promise is exactly what you
      receive.
    </p>
</FloatUpText>

   
    <RevealImageAnimation
  image={hero}
  className="mt-6 md:mt-6 h-[40vh] sm:h-[0vh] md:h-[60vh] w-full rounded-lg  "
/>

  </div>
</section>

      {/* ========= ORANGE STRIP ========= */}
      <section className="bg-ORANGE px-6 items-center flex md:h-auto w-full py-16">
        <div className="mx-auto max-w-4xl">
          <AnimatedHeading className="section-heading text-white  mb-4 md:mb-8">
            Shaping the urban lifestyle through thoughtful design and purposeful planning.

          </AnimatedHeading>
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
