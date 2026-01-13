import { useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";

const bespokeImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    label: "PLOTTED DEVELOPMENT",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    label: "APARTMENTS",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    label: "VILLAS",
  },
];
function BespokeImageHover() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full md:w-[70%] h-[260px] md:h-[380px] flex gap-3 md:gap-4">
      {bespokeImages.map((img, index) => (
        <div
          key={index}
          onMouseEnter={() => setActive(index)}
          onTouchStart={() => setActive(index)}
          className={`
            relative overflow-hidden rounded-xl transition-all duration-500 ease-in-out
            ${active === index ? "flex-[2]" : "flex-[1]"}
          `}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
          />

          {active === index && (
            <span className="absolute bottom-3 left-3 text-white text-[10px] md:text-[11px] tracking-widest">
              {img.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
const BespokeSection = () => {

  return (
   <section className="bg-[#EEF2F3] py-10 md:py-28">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="bg-white rounded-2xl px-5 md:px-10 py-6 md:py-12 flex flex-col md:flex-row gap-6">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-[30%]">
        <AnimatedHeading
          as="h3"
          delay={0}
          staggerDelay={0.15}
          className="text-[20px] md:text-[28px] font-semibold text-gray-900 leading-snug mb-4 md:mb-6"
        >
          Bespoke services for elevated living
        </AnimatedHeading>
        <span className="text-[11px] tracking-widest text-gray-700">
          VIEW PROJECTS
        </span>
      </div>

      {/* RIGHT IMAGE INTERACTION (SAME HOVER FOR MOBILE + DESKTOP) */}
      <BespokeImageHover />

    </div>
  </div>
</section>
  );
};

export default BespokeSection;
