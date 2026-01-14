import RevealImageAnimation from "../../../components/RevealImageAnimation";
import { motion } from "framer-motion";

const ExpertsSection = () => {
  return (
    <section className="w-full bg-white md:min-h-screen md:flex md:items-center py-5 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-12">
 <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex md:hidden justify-center"
          >
            <RevealImageAnimation
              image="/Home/expert.jpg"
              className="h-[50vh] w-full rounded-3xl object-cover"
            />
          </motion.div>
          {/* LEFT CONTENT (comes from RIGHT slightly) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col  gap-3 items-center text-center"
          >
            <div className="w-10 h-10 flex justify-center "><img 
            src="/Home/speak.svg" 
            alt="Diamond icon" /></div>

            <p className="md:text-[14px] text-md text-gray-600">
              Have any questions?
            </p>

            <h3 className="text-lg md:text-2xl font-semibold  leading-snug">
              Speak with <br /> our experts
            </h3>
          </motion.div>

          {/* CENTER IMAGE (reveals between) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="md:flex hidden  justify-center"
          >
            <RevealImageAnimation
              image="/Home/expert.jpg"
              className="w-[300px] h-[400px] rounded-3xl object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT (comes from LEFT slightly) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col  gap-4 items-center md:items-start text-center md:text-left"
          >
            <p className="md:text-[14px] text-md text-gray-600 leading-relaxed max-w-xs">
              Request a callback for personalized assistance and project details.
            </p>

            <button className="bg-ORANGE hover:bg-ORANGE2 text-white px-8 py-3 rounded-full text-[12px] tracking-widest uppercase md:w-fit w-full  transition">
              REQUEST CALLBACK
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
