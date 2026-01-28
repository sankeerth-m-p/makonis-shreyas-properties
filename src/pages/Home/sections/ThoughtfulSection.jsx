import RevealImageAnimation from "../../../components/RevealImageAnimation";
import aboutUsImg from "/Home/aboutUsImg.webp";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import vision from "/Home/vision.svg";
import mission from "/Home/mission.svg";import circleBg from "/Home/cicle.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
const ThoughtfulSection = () => {const sectionRef = useRef(null);

  const navigate = useNavigate();
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});

/// Bottom-left circle moves diagonally upward/right (closer to center)
const bottomLeftX = useTransform(scrollYProgress, [0, 1], [-160, 50]);
const bottomLeftY = useTransform(scrollYProgress, [0, 1], [20, -10]);

// Top-right circle moves diagonally downward/left (closer to center)
const topRightX = useTransform(scrollYProgress, [0, 1], [20, 10]);
const topRightY = useTransform(scrollYProgress, [0, 1], [-22,  100]);


  return (
   <section ref={sectionRef} className="relative lg:h-[calc(100vh-5rem)]    lg:py-0  py-10 overflow-hidden">{/* ===== CIRCLE SVG BACKGROUND (ANIMATED) ===== */}
{/* ===== SVG CIRCLES BACKGROUND ===== */}
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

{/* MOBILE LAYOUT: Heading and subheading above image, rest below */}
<div className="block lg:hidden relative max-w-6xl mx-auto z-10 px-4">
  {/* HEADING AND SUBHEADING ABOVE IMAGE */}
  <div className="py-8 text-center">
    <AnimatedHeading delay={0} className="text-3xl lg:text-4xl font-semibold mb-4 md:mb-8 text">
      Thoughtfully developing spaces that reflect city's progress and promise
    </AnimatedHeading>
    <FloatUpText delay={0}>
      <p className="text-lg md:text-xl text-base mb-6 md:max-w-md mx-auto">
        Crafting meaningful experiences where every detail is carefully envisioned.
      </p>
    </FloatUpText>
  </div>

  {/* IMAGE IN MIDDLE */}
  <div className="flex justify-center mb-8">
    <RevealImageAnimation
      image={aboutUsImg}
      className="w-full h-[420px] object-cover"
    />
  </div>

  {/* VISION, MISSION AND BUTTON BELOW IMAGE */}
  <div className="py-8 text-center">
    <FloatUpText delay={0}>
      {/* VISION */}
      <div className="flex gap-3 items-center justify-center mb-8">
        <img src={vision} className="w-3 h-4 md:w-7 md:h-7" alt="Mission icon"/>
        <div>
          <h4 className="md:text-xl text-base font-semibold">Our vision</h4>
          <p className="md:text-lg text-sm leading-relaxed">
            To create thoughtfully planned spaces that elevate everyday living,
            blending design, functionality and sustainability.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="flex gap-3 items-center justify-center mb-8">
        <img src={mission} className="w-4 h-4 md:w-7 md:h-7" alt="Mission icon"/>
        <div>
          <h4 className="md:text-xl text-base font-semibold">Our mission</h4>
          <p className="md:text-lg text-sm leading-relaxed">
            To develop responsibly by integrating sustainable practices
            and creating balanced communities.
          </p>
        </div>
      </div>

      <button onClick={()=>navigate('/our-story')} className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1">
        <span>VIEW DETAILS</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </FloatUpText>
  </div>
</div>

{/* DESKTOP LAYOUT: Image and text side by side */}
<div className="hidden lg:block relative max-w-6xl mx-auto flex items-center h-full z-10 md:px-4">
  <div className="grid grid-cols-1 md:grid-cols-5 h-full gap-10 md:gap-0 items-start">

    {/* IMAGE */}
    <div className="flex justify-start h-full md:col-span-2 md:justify-end md:mt-10">
      <RevealImageAnimation
        image={aboutUsImg}
        className="w-full h-[420px] md:h-[70vh] object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="flex flex-col md:col-span-3 md:pl-20 md:mt-10 text-left">
      <AnimatedHeading delay={0} className="text-lg md:text-4xl font-semibold mb-4 md:mb-8">
        Thoughtfully developing spaces that reflect city's progress and promise
      </AnimatedHeading>
      <FloatUpText delay={0}>
        <p className="md:text-xl text-base mb-6 md:max-w-md">
          Crafting meaningful experiences where every detail is carefully envisioned.
        </p>

        {/* VISION */}
        <div className="flex gap-3 items-start mb-8">
          <img src={vision} className="w-3 h-4 md:w-7 md:h-7" alt="Mission icon"/>
          <div>
            <h4 className="md:text-xl text-base font-semibold">Our vision</h4>
            <p className="md:text-lg text-sm leading-relaxed">
              To create thoughtfully planned spaces that elevate everyday living,
              blending design, functionality and sustainability.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="flex gap-3 items-start mb-8">
          <img src={mission} className="w-4 h-4 md:w-7 md:h-7" alt="Mission icon"/>
          <div>
            <h4 className="md:text-xl text-base font-semibold">Our mission</h4>
            <p className="md:text-lg text-sm leading-relaxed">
              To develop responsibly by integrating sustainable practices
              and creating balanced communities.
            </p>
          </div>
        </div>

        <button onClick={()=>navigate('/our-story')} className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1">
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </FloatUpText>
    </div>
  </div>
</div>

</section>
  );
};

export default ThoughtfulSection;
