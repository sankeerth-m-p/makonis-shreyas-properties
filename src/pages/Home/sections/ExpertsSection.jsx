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

  // STAGE 1: Big title in center (0-0.5) - masked from bottom to top
  // STAGE 2: Transform to layout (0.5-1)
  
  // Big title animations - masked out from bottom to top
const titleClip = useTransform(
  scrollYProgress,
  [0, 0.3, 0.5],
  ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]
);

  // Left content - slides in from left side of image
  const leftOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0.5, 0.7], [200, 0]);

  // Center image - appears as title is masked
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

  // Right content - slides in from right side of image
  const rightOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0.5, 0.7], [-200, 0]);

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
            
            {/* STAGE 1: Big centered title - masked from bottom to top */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <motion.div style={{ clipPath: titleClip }}>
  <h2 className="text-6xl md:text-7xl font-bold text-center text-gray-900">
    Have any questions?
  </h2>
</motion.div>

            </div>

            {/* STAGE 2: Three column layout */}
            <div className="grid  grid-cols-3 items-center gap-12 relative">
              
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
                  y: imageY
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