import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import RevealImageAnimation from "../../../components/RevealImageAnimation";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Enquire from "../../Enquire";
import FloatUpText from "../../../components/floatUpText";
const ExpertsSection = () => {
  const sectionRef = useRef(null);
  const scrollRootRef = useRef(null);
  const [showEnquire, setShowEnquire] = useState(false);
  
  // ✅ NEW: stage visibility system
  const [showStage1, setShowStage1] = useState(true);
  const [hasTriggeredStage2, setHasTriggeredStage2] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageRevealedByDefault, setImageRevealedByDefault] = useState(false);
  
  useEffect(() => {
    scrollRootRef.current = document.getElementById("home-scroll");
  }, []);

  

  const { scrollYProgress } = useScroll({
    container: scrollRootRef,
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ✅ RESET RULE:
  // only when user goes ABOVE this section fully
  useEffect(() => {
    const container = scrollRootRef.current;
    if (!container || !sectionRef.current) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionTop = sectionRef.current.offsetTop;

      // ✅ If user has gone ABOVE the section, reset everything
      if (scrollTop < sectionTop - 80) {
        setShowStage1(true);
        setHasTriggeredStage2(false);
        setImageRevealedByDefault(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Trigger stage2
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isTransitioning) return;

    // ✅ When user scrolls down enough -> trigger stage2 and permanently hide stage1
    if (latest > 0.25 && !hasTriggeredStage2) {
      setHasTriggeredStage2(true);
      setShowStage1(false);
setImageRevealedByDefault(true);
      // snap to stage2
      snapToStage2();
    }

    // ❌ IMPORTANT: we do NOTHING when scrolling upward
    // Stage1 never returns unless reset happens (above section)
  });

  const snapToStage2 = () => {
    if (!sectionRef.current) return;

    const container = scrollRootRef.current;
    if (!container) return;

    setIsTransitioning(true);

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;

    // stage2 snap position
    const targetScroll = sectionTop + sectionHeight * 0.4;

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // ✅ Animations based on showStage1 + hasTriggeredStage2
  const titleClip =
    showStage1 ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)";

  const stage2Active = hasTriggeredStage2;

  const leftOpacity = stage2Active ? 1 : 0;
  const leftX = stage2Active ? 0 : 200;

  const rightOpacity = stage2Active ? 1 : 0;
  const rightX = stage2Active ? 0 : -80;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white   lg:relative py-5  lg:py-0  lg:h-[calc(250vh)]"
    >
      {/* MOBILE VERSION unchanged */}
      <div className=" lg:hidden pb-10 max-w-7xl h-full mx-auto">
         <div className="grid grid-cols-1 items-center gap-5">
          <div
            className="flex justify-center"
          >
           <RevealImageAnimation
  image="/Home/expert.webp"
    className="w-[220px] h-[300px] object-cover rounded-lg"
/>
          </div>

          <FloatUpText
            className="flex flex-col gap-3 items-center text-center"
          >
            <div className="w-10 h-10 flex justify-center">
              <img 
                src="/Home/speak.svg" 
                alt="speak" 
              />
            </div>

           <p className="text-xl md:text-4xl font-semiboldx mb-4 md:mb-8 text-black">
  Have any questions?
</p>

            <h3 className="text-3xl leading-none md:text-4xl font-semiboldx mb-4 md:mb-8">
              Speak with <br /> our experts
            </h3>
          </FloatUpText>

          <FloatUpText
            className="flex flex-col gap-4 items-center text-center"
          >
            <p className="text-base  leading-relaxed max-w-xs">
              Request a callback for personalized assistance and project details.
            </p>
<button
  onClick={() => setShowEnquire(true)}
  className="buttons btn btn-orange"
>
  <span>REQUEST CALLBACK</span>
  <ArrowRight className="w-4 h-4" />
</button>

          </FloatUpText>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden  lg:flex sticky top-0 h-screen   lg:h-[calc(100vh)]  lg:w-full  lg:items-center  lg:justify-center">
        <div className=" lg:h-full h-screen flex items-center justify-center    overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full relative">
            {/* STAGE 1 */}
            <div className="absolute  inset-0 flex items-center justify-center overflow-hidden">
              <motion.div
                style={{ clipPath: titleClip }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
               <AnimatedHeading className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8 text-center ">
  Have any questions?
</AnimatedHeading>

              </motion.div>
            </div>

            {/* STAGE 2 */}
            <div className="grid grid-cols-3 items-center gap-12 relative">
              {/* LEFT */}
              <motion.div
                animate={{ opacity: leftOpacity, x: leftX }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col gap-3 items-center text-center"
              >
                <div className="w-10 h-10 flex justify-center">
                  <img src="/Home/speak.svg" alt="Diamond icon" />
                </div>
                <p className="text-[14px] text-black">Have any questions?</p>
                <h3 className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8">
                  Speak with <br /> our experts
                </h3>
              </motion.div>

              {/* CENTER IMAGE */}
              <div className="flex justify-center">
                {imageRevealedByDefault ? (
                  // User came from bottom - show image immediately without trigger
                  <RevealImageAnimation
                    image="/Home/expert.webp"
                    className="w-[300px] h-[400px] rounded-3xl object-cover"
                  />
                ) : (
                  // User came from top - use trigger animation
                  <RevealImageAnimation
                    image="/Home/expert.webp"
                    className="w-[300px] h-[400px] rounded-3xl object-cover"
                    triggerAnimation={stage2Active}
                      
                      intialSize="0%"
                  />
                )}
              </div>

              {/* RIGHT */}
              <motion.div
                animate={{ opacity: rightOpacity, x: rightX }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col gap-4 items-start text-left"
              >
                <p className="text-[14px] text-black leading-relaxed max-w-xs">
                  Request a callback for personalized assistance and project
                  details.
                </p>

               <button
  onClick={() => setShowEnquire(true)}
className="buttons btn btn-orange">
  <span>REQUEST CALLBACK</span>
  <ArrowRight className="w-4 h-4" />
</button>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
  {showEnquire && <Enquire onClose={() => setShowEnquire(false)} />}
</AnimatePresence>

    </section>
    
  );
  
};

export default ExpertsSection;