import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import RevealImageAnimation from "../../../components/RevealImageAnimation";

const ExpertsSection = () => {
  const sectionRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRootRef = useRef(null);
  
  useEffect(() => {
    scrollRootRef.current = document.getElementById("home-scroll");
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollRootRef,
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Monitor scroll progress and snap to stages
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isTransitioning) return;
    
    // Determine which stage we should be at
    if (latest < 0.25) {
      if (currentStage !== 0) {
        setCurrentStage(0);
        snapToStage(0);
      }
    } else {
      if (currentStage !== 1) {
        setCurrentStage(1);
        snapToStage(1);
      }
    }
  });

  const snapToStage = (stage) => {
    if (!sectionRef.current) return;

    const container = scrollRootRef.current;
    if (!container) return;

    setIsTransitioning(true);

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;

    const targetScroll = sectionTop + stage * sectionHeight * 0.4;

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Animate based on current stage (0 or 1)
  const titleClip = currentStage === 0 
    ? "inset(0% 0% 0% 0%)" 
    : "inset(0% 0% 100% 0%)";

  const leftOpacity = currentStage === 1 ? 1 : 0;
  const leftX = currentStage === 1 ? 0 : 200;

  const imageOpacity = currentStage === 1 ? 1 : 0;
  const imageY = currentStage === 1 ? 0 : 50;

  const rightOpacity = currentStage === 1 ? 1 : 0;
  const rightX = currentStage === 1 ? 0 : -80;

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white md:relative py-5 md:py-0 md:h-[calc(250vh-12.5rem)]"
    >
      {/* MOBILE VERSION - Original simple layout */}
      <div className="md:hidden max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center"
          >
            <RevealImageAnimation
              image="/Home/expert.jpg"
              className="h-[50vh] w-full rounded-3xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-3 items-center text-center"
          >
            <div className="w-10 h-10 flex justify-center">
              <img 
                src="/Home/speak.svg" 
                alt="Diamond icon" 
              />
            </div>

            <p className="text-base text-gray-600">
              Have any questions?
            </p>

            <h3 className="text-lg font-semibold leading-snug">
              Speak with <br /> our experts
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 items-center text-center"
          >
            <p className="text-base text-gray-600 leading-relaxed max-w-xs">
              Request a callback for personalized assistance and project details.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-[12px] tracking-widest uppercase w-full transition">
              REQUEST CALLBACK
            </button>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP VERSION - Scroll-based animation with snap */}
      <div className="hidden md:block sticky top-0 h-screen">
        <div className="h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full relative">
            
            {/* STAGE 1: Big centered title */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <motion.div 
                style={{ clipPath: titleClip }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <AnimatedHeading className="text-6xl md:text-7xl font-bold text-center text-gray-900">
                  Have any questions?
                </AnimatedHeading>
              </motion.div>
            </div>

            {/* STAGE 2: Three column layout */}
            <div className="grid grid-cols-3 items-center gap-12 relative">
              
              {/* LEFT CONTENT */}
              <motion.div
                animate={{
                  opacity: leftOpacity,
                  x: leftX
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col gap-3 items-center text-center"
              >
                <div className="w-10 h-10 flex justify-center">
                  <img 
                    src="/Home/speak.svg" 
                    alt="Diamond icon" 
                  />
                </div>

                <p className="text-[14px] text-gray-600">
                  Have any questions?
                </p>

                <h3 className="text-2xl font-semibold leading-snug">
                  Speak with <br /> our experts
                </h3>
              </motion.div>

              {/* CENTER IMAGE */}
              <motion.div
                animate={{
                  opacity: imageOpacity,
                  y: imageY
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <RevealImageAnimation
                  image="/Home/expert.jpg"
                  className="w-[300px] h-[400px] rounded-3xl object-cover"
                />
              </motion.div>

              {/* RIGHT CONTENT */}
              <motion.div
                animate={{
                  opacity: rightOpacity,
                  x: rightX
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col gap-4 items-start text-left"
              >
                <p className="text-[14px] text-gray-600 leading-relaxed max-w-xs">
                  Request a callback for personalized assistance and project details.
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-[12px] tracking-widest uppercase transition">
                  REQUEST CALLBACK
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;