import RevealImageAnimation from "../../../components/RevealImageAnimation";
import aboutUsImg from "/Home/aboutUsImg.webp";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import vision from "/Home/vision.svg";
import mission from "/Home/mission.svg";
import circleBg from "/Home/cicle.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const ThoughtfulSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bottomLeftX = useTransform(scrollYProgress, [0, 1], [-160, 50]);
  const bottomLeftY = useTransform(scrollYProgress, [0, 1], [20, -10]);

  const topRightX = useTransform(scrollYProgress, [0, 1], [20, 10]);
  const topRightY = useTransform(scrollYProgress, [0, 1], [-22, 100]);

  return (
    <section ref={sectionRef} className=" relative lg:h-[calc(100vh-5rem)] py-10 lg:py-0 overflow-hidden">

      {/* Background Circles */}
      <motion.img
        src={circleBg}
        alt=""
        style={{ x: bottomLeftX, y: bottomLeftY }}
        className="pointer-events-none select-none absolute left-[-220px] bottom-[-200px] w-[560px] opacity-[0.12] z-[1]"
      />
      <motion.img
        src={circleBg}
        alt=""
        style={{ x: topRightX, y: topRightY }}
        className="pointer-events-none select-none absolute right-[-220px] top-[-200px] w-[560px] opacity-[0.12] z-[1]"
      />

      {/* MOBILE */}
      <div className="block lg:hidden  relative max-w-6xl mx-auto  z-10 px-4">

        <div className="py-8  text-center  ">
          <AnimatedHeading delay={0} className="  section-heading  mb-4">
            Thoughtfully developing spaces that reflect city's progress and promise
          </AnimatedHeading>
          <FloatUpText delay={0}>
            <p className="text-base mb-6 max-w-md mx-auto">
              Crafting meaningful experiences where every detail is carefully envisioned.
            </p>
          </FloatUpText>
        </div>

        <div className="flex justify-center mb-8">
          <RevealImageAnimation image={aboutUsImg} className="w-full h-[420px] object-cover" />
        </div>

        {/* LEFT ALIGNED + SLIGHTLY BIGGER TEXT */}
        <div className="py-8 text-left">
          <FloatUpText delay={0}>

            <div className="flex gap-3 items-start mb-8">
              <img src={vision} className="w-6 h-6" alt="Vision icon" />
              <div>
                <h4 className="text-lg font-semiboldx">Our Vision</h4>
                <p className="text-base   leading-relaxed">
                  To create thoughtfully planned spaces that elevate everyday living,
                  blending design, functionality and sustainability.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start mb-8">
              <img src={mission} className="w-6 h-6" alt="Mission icon" />
              <div>
                <h4 className="text-lg font-semiboldx">Our Mission</h4>
                <p className="text-base leading-relaxed">
                  To develop responsibly by integrating sustainable practices
                  and creating balanced communities.
                </p>
              </div>
            </div>

           <div className="flex justify-center md:justify-start">
  <button
    onClick={() => navigate('/our-story')}
    className="buttons btn btn-orange"
  >
    <span>VIEW DETAILS</span>
    <ArrowRight className="w-4 h-4" />
  </button>
</div>


          </FloatUpText>
        </div>
      </div>

      {/* DESKTOP (UNCHANGED) */}
      <div className="hidden lg:block relative max-w-6xl mx-auto flex items-center h-full z-10 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full gap-10 md:gap-0 items-start">

          <div className="flex justify-start h-full md:col-span-2 md:justify-end md:mt-10">
            <RevealImageAnimation
              image={aboutUsImg}
              className="w-full h-[420px] md:h-[70vh] object-cover"
            />
          </div>

          <div className="flex flex-col md:col-span-3 md:pl-20 md:mt-10 text-left">
            <AnimatedHeading delay={0} className="text-lg md:text-4xl  mb-4 md:mb-8">
              Thoughtfully developing spaces that reflect city's progress and promise
            </AnimatedHeading>

            <FloatUpText delay={0}>
              <p className="md:text-xl text-base mb-6 md:max-w-md">
                Crafting meaningful experiences where every detail is carefully envisioned.
              </p>

              <div className="flex gap-3 items-start mb-8">
                <img src={vision} className="w-7 h-7" alt="Vision icon" />
                <div>
                  <h4 className="md:text-xl text-base font-semiboldx">Our Vision</h4>
                  <p className="md:text-lg text-sm leading-relaxed">
                    To create thoughtfully planned spaces that elevate everyday living,
                    blending design, functionality and sustainability.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start mb-8">
                <img src={mission} className="w-7 h-7" alt="Mission icon" />
                <div>
                  <h4 className="md:text-xl text-base font-semiboldx">Our Mission</h4>
                  <p className="md:text-lg text-sm leading-relaxed">
                    To develop responsibly by integrating sustainable practices
                    and creating balanced communities.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/our-story')}
                className="buttons btn btn-orange">
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
