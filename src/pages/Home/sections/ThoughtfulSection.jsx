import RevealImageAnimation from "../../../components/RevealImageAnimation";
import aboutUsImg from "/Home/aboutUsImg.webp";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import vision from "/Home/vision.svg";
import mission from "/Home/mission.svg";import circleBg from "/Home/cicle.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ThoughtfulSection = () => {const sectionRef = useRef(null);


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
   <section ref={sectionRef} className="   relative h-screen pt-10 md:pt-28 pb-20 md:pb-0 overflow-hidden">{/* ===== CIRCLE SVG BACKGROUND (ANIMATED) ===== */}
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



  <div className="relative max-w-6xl mx-auto px-4  h-full  z-10  md:px-0">
    <div className="grid grid-cols-1 md:grid-cols-5 h-full  gap-10 md:gap-0 items-start">

      {/* IMAGE */}
      <div className="flex justify-start h-full md:col-span-2 md:justify-end ">
        <RevealImageAnimation
          image={aboutUsImg}
          className="w-full   h-[420px] md:w- md:h-[70vh]  object-cover "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:col-span-3 md:pl-20    text-left ">
            <AnimatedHeading className="text-[22px] leading-tight font-bold boldFont mb-3  md:max-w-none md:text-[38px]">
              
        
          Thoughtfully developing spaces that reflect city’s progress and promise
       
</AnimatedHeading>
            <FloatUpText>
              
        <p className="text-xl text-gray-600 mb-6  md:max-w-md">
          Crafting meaningful experiences where every detail is carefully envisioned.
        </p>

        {/* VISION */}
        <div className="flex gap-3     mb-5">
                <img src={vision}  width={24} height={24}/>
          <div>
            <h4 className="text-xl font-semibold">Our vision</h4>
            <p className="text-lg text-gray-600 leading-relaxed    ">
              To create thoughtfully planned spaces that elevate everyday living,
              blending design, functionality and sustainability.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="flex gap-3  mb-8">
           <img src={mission}  width={24} height={24}/>
          <div>
            <h4 className="text-xl font-semibold">Our mission</h4>
            <p className="text-lg text-gray-600 leading-relaxed   ">
              To develop responsibly by integrating sustainable practices
              and creating balanced communities.
            </p>
          </div>
        </div>

        <button className="bg-ORANGE hover:bg-ORANGE2 text-white px-8 py-2.5 rounded-full text-xl tracking-widest w-fit">
          VIEW DETAILS
        </button>
</FloatUpText>

      </div>
    </div>
  </div>
</section>
  );
};

export default ThoughtfulSection;
