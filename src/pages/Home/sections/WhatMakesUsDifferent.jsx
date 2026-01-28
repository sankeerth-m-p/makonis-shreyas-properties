import RevealImageAnimation from "../../../components/RevealImageAnimation";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";

const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-white px-6 lg:px-6 lg:h-[calc(100vh-5rem)] py-10 lg:py-0 flex justify-center items-center">
      <div className="max-w-6xl md:max-h[70vh] grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20 items-start mb-5 md:px-4">

        <RevealImageAnimation
          image="/Home/wahtmakesusdiffrent.webp"
          alt="Team discussion"
          className="md:w-full h-[50vh] md:h-full object-cover md:col-span-2"
        />

        <div className="md:col-span-3 flex flex-col w-full gap-5 h-full justify-around text-center md:text-left">

          <div className="flex flex-col gap-3">
            <AnimatedHeading
              as="h2"
              delay={0}
              staggerDelay={0.15}
             className="text-3xl md:text-4xl font-semibold mb-3 md:mb-8"
            >
              What makes us different
              lies in how we blend vision
              with execution.
            </AnimatedHeading>

            <FloatUpText delay={0}>
              <p className="text-sm md:text-lg max-w-lg">
                What makes every project distinctly ours,
                from vision and design to lasting value.
              </p>
            </FloatUpText>
          </div>

          <div className="flex gap-3 flex-col text-left md:text-left">

            {/* ITEM 1 */}
            <div className="flex gap-3 items-start mb-3">
<FloatUpText className="w-16 h-10 md:w-10 md:h-10 p-2 bg-ORANGE flex items-center justify-center">
  <img src="/Home/diamondlicon.svg" alt="Diamond icon" />
</FloatUpText>
              <div>
                <FloatUpText delay={0}>
                  <h4 className="md:text-lg text-base font-semibold mb-1">
                    Values Driven Development
                  </h4>
                  <p className="md:text-base text-sm leading-relaxed">
                    Every project is planned with long-term value in mind
                    focusing on quality, sustainability, and future appreciation.
                  </p>
                </FloatUpText>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-3 items-start mb-3">
 <FloatUpText className="w-16 h-10 md:w-10 md:h-10 p-2 bg-ORANGE flex items-center justify-center">
  <img src="/Home/plannedicon.svg" alt="icon" />
</FloatUpText>

              <div>
                <FloatUpText delay={0}>
                  <h4 className="md:text-lg text-base font-semibold mb-1">
                    Thoughtfully Planned Spaces
                  </h4>
                  <p className="md:text-base text-sm leading-relaxed">
                    From layouts to amenities, each development is designed
                    to enhance lifestyle, comfort, and functionality.
                  </p>
                </FloatUpText>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-3 items-start">
       <FloatUpText className="w-16 h-10 md:w-10 md:h-10 p-2 bg-ORANGE flex items-center justify-center">
  <img src="/Home/shakehandicon.svg" alt="icon" />
</FloatUpText>

              <div>
                <FloatUpText delay={0}>
                  <h4 className="md:text-lg text-base font-semibold mb-1">
                    End to End Customer Care
                  </h4>
                  <p className="md:text-base text-sm leading-relaxed">
                    Support that goes beyond possession assisting clients
                    from site visits to handover and after-sales service.
                  </p>
                </FloatUpText>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;







// import RevealImageAnimation from "../../../components/RevealImageAnimation";
// import AnimatedHeading from "../../../components/animatedHeading";
// import FloatUpText from "../../../components/floatUpText";

// const WhatMakesUsDifferent = () => {
//   return (
//      <section className="bg-white  md:h-screen pt-10 md:pt-28 pb-10 md:pb-0 flex justify-center">
//   <div className="max-w-6xl  px-4 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20 items-start">
    
//     {/* LEFT IMAGE - Takes 2 columns on desktop */}
//     <RevealImageAnimation 
//       image="/Home/wahtmakesusdiffrent.webp" 
//       alt="Team discussion"
//       className="md:w-full h-[50vh]  md:h-[80vh] object-cover md:col-span-2" />
    
//     {/* RIGHT CONTENT - Takes 3 columns on desktop */}
//     <div className="md:col-span-3 flex flex-col w-full  ">
//       {/* HEADING */}
//       <AnimatedHeading
//         as="h2"
//         delay={0}
//         staggerDelay={0.15} 
//         className=" text-base md:text-[38px] font-semibold    leading-tight mb-4">
//         What makes us different
//         lies in how we blend vision
//         with execution.
//       </AnimatedHeading>

//       {/* SUBTEXT */}
//       <FloatUpText delay={0}>
//         <p className="text-sm md:md:text-lg    mb-12 max-w-md">
//           What makes every project distinctly ours,
//           from vision and design to lasting value.
//         </p>
//       </FloatUpText>

//       {/* ITEM 1 */}
//       <div className="flex gap-5 pb-2 mb-2   md:pb-6 md:mb-6 border-b border-gray-300">
//          <div className="w-20 md:w-10 p-2  aspect-square h-10 bg-ORANGE flex items-center justify-center">
//           <img 
//             src="/Home/diamondlicon.svg" 
//             alt="Diamond icon" />
//         </div>
//         <div>
//           <FloatUpText delay={0}>
//             <h4 className="md:text-lg text-base font-semibold  mb-1">
//               Values Driven Development
//             </h4>
//             <p className="md:text-base text-sm  leading-relaxed">
//               Every project is planned with long-term value in mind
//               focusing on quality, sustainability, and future appreciation.
//             </p>
//           </FloatUpText>
//         </div>
//       </div>

//       {/* ITEM 2 */}
//       <div className="flex gap-5 pb-2 mb-2   md:pb-6 md:mb-6 border-b border-gray-300">
//         <div className="w-20 md:w-10 p-2 h-10 aspect-square bg-ORANGE flex items-center justify-center">
//           <img 
//             src="/Home/plannedicon.svg" 
//             alt="icon" />
//         </div>
//         <div>
//           <FloatUpText delay={0}>
//             <h4 className="md:text-lg text-base font-semibold  mb-1">
//               Thoughtfully Planned Spaces
//             </h4>
//             <p className="md:text-base text-sm  leading-relaxed">
//               From layouts to amenities, each development is designed
//               to enhance lifestyle, comfort, and functionality.
//             </p>
//           </FloatUpText>
//         </div>
//       </div>

//       {/* ITEM 3 */}
//       <div className="flex gap-5">
//         <div className="w-20 md:w-10   p-2 h-10 aspect-square bg-ORANGE flex items-center justify-center">
//           <img 
//             src="/Home/shakehandicon.svg" 
//             alt="icon" />
//         </div>
//         <div>
//           <FloatUpText delay={0}>
//             <h4 className="md:text-lg text-base font-semibold  mb-1">
//               End to End Customer Care
//             </h4>
//             <p className="md:text-base text-sm  leading-relaxed">
//               Support that goes beyond possession assisting clients
//               from site visits to handover and after-sales service.
//             </p>
//           </FloatUpText>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   );
// };

// export default WhatMakesUsDifferent;
