import { useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import { useNavigate } from 'react-router-dom';
const bespokeImages = [
  {
    src: "/Home/services_plotted_developemnt.webp",
    label: "PLOTTED DEVELOPMENT",
  },
  {
    src: "/Home/residential_projects.webp",
    label: "residential projects",
  },
  {
    src: "/Home/hospitality.webp",
    label: "hospitality",
  },
  {
    src: "/Home/commercial&retailsspaces.webp",
    label: "commercial and retail spaces",
  },
  
  // {
  //   src: "src/assets/Home/residential_projects.jpg",
  //   label: "residential projects",
  // },
  
];
function BespokeImageHover() {
  const [active, setActive] = useState(0);
  return (
   <div className="w-full md:w-[70%] h-auto md:h-[380px]">
  {/* Mobile layout - 2 rows, 2 columns */}
  <div className="md:hidden grid grid-rows-2 gap-3 h-auto">
    {/* Row 1 */}
    <div className="flex gap-3 h-[130px]">
      {bespokeImages.slice(0, 2).map((img, index) => (
        <div
          key={index}
          onTouchStart={() => setActive(index)}
          className={`
            relative overflow-hidden rounded-3xl transition-all duration-300 ease-in-out
            ${active === index ? "w-[90%]" : active !== null && active < 2 ? "w-[10%]" : "w-1/2"}
          `}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
          />
          {active === index && (
            <span className="absolute bottom-0 uppercase left-0 p-3 text-center justify-center text-white bg-black/50 flex w-full text-[10px] tracking-widest">
              {img.label}
            </span>
          )}
        </div>
      ))}
    </div>
    
    {/* Row 2 */}
    <div className="flex gap-3 h-[130px]">
      {bespokeImages.slice(2, 4).map((img, index) => (
        <div
          key={index + 2}
          onTouchStart={() => setActive(index + 2)}
          className={`
            relative overflow-hidden rounded-3xl transition-all duration-300 ease-in-out
            ${active === index + 2 ? "w-[90%]" : active !== null && active >= 2 ? "w-[10%]" : "w-1/2"}
          `}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
          />
          {active === index + 2 && (
            <span className="absolute bottom-0 uppercase left-0 p-3 text-center justify-center text-white bg-black/50 flex w-full text-[10px] tracking-widest">
              {img.label}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Desktop layout - original */}
  <div className="hidden md:flex gap-4 h-[380px]">
    {bespokeImages.map((img, index) => (
      <div
        key={index}
        onMouseEnter={() => setActive(index)}
        onTouchStart={() => setActive(index)}
        className={`
          relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out
          ${active === index ? "flex-[2]" : "flex-[1]"}
        `}
      >
        <img
          src={img.src}
          alt={img.label}
          className="w-full h-full object-cover"
        />

        {active === index && (
          <span className="absolute bottom-0 uppercase left-0 p-5 text-center justify-center text-white bg-black/50 flex w-full text-[11px] tracking-widest">
            {img.label}
          </span>
        )}
      </div>
    ))}
  </div>
</div>
  );
}
const BespokeSection = () => {
 const navigate = useNavigate();

  return (
   <section className="bg-[#EEF2F3] py-10 md:py-28">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    <div className="bg-white rounded-3xl px-5 md:px-10 py-6 md:py-12 flex flex-col md:flex-row gap-6">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-[30%]  flex flex-col justify-center font-bold ">
        <AnimatedHeading
          as="h3"
          delay={0}
          staggerDelay={0.15}
          className="text-lg md:text-4xl  font-semibold text-gray-900 leading-snug mb-4 md:mb-8"
        >
          Bespoke services for elevated living
        </AnimatedHeading>
        <button onClick={()=>navigate('/projects')} className="text-[11px] hover:text-ORANGE hover:bg-ORANGE2/5 w-fit p-2  rounded-md flex tracking-widest text-gray-700">
          VIEW PROJECTS
        </button>
      </div>

      {/* RIGHT IMAGE INTERACTION (SAME HOVER FOR MOBILE + DESKTOP) */}
      <BespokeImageHover />

    </div>
  </div>
</section>
  );
};

export default BespokeSection;
