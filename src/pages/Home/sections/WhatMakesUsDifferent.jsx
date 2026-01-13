import RevealImageAnimation from "../../../components/RevealImageAnimation";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";

const WhatMakesUsDifferent = () => {
  return (
     <section className="bg-white md:h-screen pt-10 md:pt-28">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
    
             
    <RevealImageAnimation image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Team discussion"
                  className="md:w-full h-[40vh] md:h-[520px] object-cover" />
              {/* RIGHT CONTENT */}
              <div>
    
                {/* HEADING */}
                <AnimatedHeading
                  as="h2"
                  delay={0}
                  staggerDelay={0.15} className="text-md md:text-[34px] font-semibold text-[#1A1A1A] leading-tight mb-4">
                  What makes us different
                  lies in how we blend vision
                  with execution.
                </AnimatedHeading>
    
                {/* SUBTEXT */}
                <FloatUpText delay={0}>
                  <p className="text-sm md:text-[14px] text-gray-600 mb-12 max-w-md">
                    What makes every project distinctly ours,
                    from vision and design to lasting value.
                  </p>
                </FloatUpText>
    
                {/* ITEM 1 */}
                <div className="flex gap-5 pb-2 mb-2 md:pb-6 md:mb-6 border-b border-gray-300">
                  <div className="w-10 h-10 bg-[#FF6A13] flex items-center justify-center">
                    <span className="text-white text-sm">◆</span>
                  </div>
                  <div>
                    <FloatUpText delay={0}>
                      <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                        Values Driven Development
                      </h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        Every project is planned with long-term value in mind
                        focusing on quality, sustainability, and future appreciation.
                      </p>
                    </FloatUpText>
                  </div>
                </div>
    
                {/* ITEM 2 */}
                <div className="flex gap-5 pb-2 mb-2 md:pb-6 md:mb-6 border-b border-gray-300">
                  <div className="w-10 h-10 bg-[#FF6A13] flex items-center justify-center">
                    <span className="text-white text-sm">◆</span>
                  </div>
                  <div>
                    <FloatUpText delay={0}>
                      <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                        Thoughtfully Planned Spaces
                      </h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        From layouts to amenities, each development is designed
                        to enhance lifestyle, comfort, and functionality.
                      </p>
                    </FloatUpText>
                  </div>
                </div>
    
                {/* ITEM 3 */}
                <div className="flex gap-5">
                  <div className="w-10 h-10 bg-[#FF6A13] flex items-center justify-center">
                    <span className="text-white text-sm">◆</span>
                  </div>
                  <div>
                    <FloatUpText delay={0}>
                      <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                        End to End Customer Care
                      </h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed">
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
