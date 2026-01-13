import RevealImageAnimation from "../../../components/RevealImageAnimation";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";

const WhatMakesUsDifferent = () => {
  return (
     <section className="bg-white md:h-screen pt-10 md:pt-28">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-20 items-start">
    
    {/* LEFT IMAGE - Takes 2 columns on desktop */}
    <RevealImageAnimation 
      image="src/assets/Home/wahtmakesusdiffrent.webp" 
      alt="Team discussion"
      className="md:w-full h-[40vh] md:h-[80vh] object-cover md:col-span-2" />
    
    {/* RIGHT CONTENT - Takes 3 columns on desktop */}
    <div className="md:col-span-3 flex flex-col w-full">
      {/* HEADING */}
      <AnimatedHeading
        as="h2"
        delay={0}
        staggerDelay={0.15} 
        className="text-md md:text-3xl font-semibold text-[#1A1A1A] leading-tight mb-4">
        What makes us different
        lies in how we blend vision
        with execution.
      </AnimatedHeading>

      {/* SUBTEXT */}
      <FloatUpText delay={0}>
        <p className="text-sm md:text-lg text-gray-600 mb-12 max-w-md">
          What makes every project distinctly ours,
          from vision and design to lasting value.
        </p>
      </FloatUpText>

      {/* ITEM 1 */}
      <div className="flex gap-5 pb-2 mb-2 md:pb-6 md:mb-6 border-b border-gray-300">
         <div className="w-10 h-10 bg-ORANGE flex items-center justify-center">
          <img 
            src="src/assets/Home/diamondlicon.svg" 
            alt="Diamond icon" />
        </div>
        <div>
          <FloatUpText delay={0}>
            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">
              Values Driven Development
            </h4>
            <p className="text-md text-gray-600 leading-relaxed">
              Every project is planned with long-term value in mind
              focusing on quality, sustainability, and future appreciation.
            </p>
          </FloatUpText>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex gap-5 pb-2 mb-2 md:pb-6 md:mb-6 border-b border-gray-300">
        <div className="w-10 h-10 bg-ORANGE flex items-center justify-center">
          <img 
            src="src/assets/Home/diamondlicon.svg" 
            alt="Diamond icon" />
        </div>
        <div>
          <FloatUpText delay={0}>
            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">
              Thoughtfully Planned Spaces
            </h4>
            <p className="text-md text-gray-600 leading-relaxed">
              From layouts to amenities, each development is designed
              to enhance lifestyle, comfort, and functionality.
            </p>
          </FloatUpText>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex gap-5">
        <div className="w-10 h-10 bg-ORANGE flex items-center justify-center">
          <img 
            src="src/assets/Home/diamondlicon.svg" 
            alt="Diamond icon" />
        </div>
        <div>
          <FloatUpText delay={0}>
            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">
              End to End Customer Care
            </h4>
            <p className="text-md text-gray-600 leading-relaxed">
              Support that goes beyond possession assisting clients
              from site visits to handover and after-sales service.
            </p>
          </FloatUpText>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default WhatMakesUsDifferent;
