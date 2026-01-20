import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Placeholder for RevealImageAnimation - replace with your actual component
const RevealImageAnimation = ({ image, className }) => (
  <img src={image} alt="Expert" className={className} />
);

const ExpertsSection = () => {
  const sectionRef = useRef(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // STAGE 1: Big title in center (0-0.5)
  // STAGE 2: Transform to layout (0.5-1)
  
  // Big title animations - fades out as we transition
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0.4]);
  const titleX = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, -400]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.55], [1, 1, 1, 0]);

  // Left content (icon + text) - appears during transition
  const leftOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

  // Center image - appears after left content starts
  const imageOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.55, 0.75], [0.85, 1]);

  // Right content - appears last
  const rightOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0.65, 0.85], [-100, 0]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white md:relative py-5 md:py-0"
      style={{ height: window.innerWidth >= 768 ? '200vh' : 'auto' }}
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

      {/* DESKTOP VERSION - Scroll-based animation */}
      <div className="hidden md:block sticky top-0 h-screen">
        <div className="h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full relative">
            
            {/* STAGE 1: Big centered title */}
            <motion.div
              style={{
                scale: titleScale,
                x: titleX,
                opacity: titleOpacity
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-center text-gray-900">
                Have any questions?
              </h2>
            </motion.div>

            {/* STAGE 2: Three column layout */}
            <div className="grid grid-cols-3 items-center gap-12 relative">
              
              {/* LEFT CONTENT */}
              <motion.div
                style={{
                  opacity: leftOpacity,
                  x: leftX
                }}
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
                style={{
                  opacity: imageOpacity,
                  scale: imageScale
                }}
                className="flex justify-center"
              >
                <RevealImageAnimation
                  image="/Home/expert.jpg"
                  className="w-[300px] h-[400px] rounded-3xl object-cover"
                />
              </motion.div>

              {/* RIGHT CONTENT */}
              <motion.div
                style={{
                  opacity: rightOpacity,
                  x: rightX
                }}
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