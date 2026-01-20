import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import { useNavigate } from "react-router-dom";

import { ArrowRight } from "lucide-react";
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
];

function BespokeImageHover() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const touchRef = useRef(false);
const startXRef = useRef(0);
const swipeThreshold = 50;
  // ✅ Auto slide ONLY on mobile
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    intervalRef.current = setInterval(() => {
      if (touchRef.current) return; // if user is interacting, pause auto
      setActive((prev) => (prev + 1) % bespokeImages.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full md:w-[70%] h-auto md:h-full  ">
      {/* ✅ MOBILE SLIDER */}
      <div className="md:hidden relative w-full">
        {/* Slides */}
        <div
  className="w-full overflow-hidden rounded-3xl"
  onTouchStart={(e) => {
    touchRef.current = true;
    clearInterval(intervalRef.current);
    startXRef.current = e.touches[0].clientX;
  }}
  onTouchEnd={(e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // swipe left → next
        setActive((prev) => (prev + 1) % bespokeImages.length);
      } else {
        // swipe right → prev
        setActive((prev) =>
          prev === 0 ? bespokeImages.length - 1 : prev - 1
        );
      }
    }

    setTimeout(() => {
      touchRef.current = false;
    }, 1200);
  }}
>

          <div
            className="flex  transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {bespokeImages.map((img, index) => (
              <div key={index} className="w-full shrink-0 relative h-[50vh">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />

                {/* Label */}
                <span className="absolute bottom-0 uppercase left-0 px-4 py-3 text-center justify-center text-white bg-black/50 flex w-full text-[10px] tracking-widest">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ DOT INDICATOR */}
        <div className=" absolute bottom-10 left-0 w-full flex justify-center gap-2">
          {bespokeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === active ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ✅ DESKTOP LAYOUT (unchanged) */}
      <div className="hidden md:flex gap-4 h-full">
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
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" />

            {active === index && (
              <span
  className={`
    absolute bottom-0 left-0 w-full h-[44px]
    flex items-center justify-center
    uppercase text-white text-[11px] tracking-wide
    bg-black/50
    whitespace-nowrap 
    transition-opacity duration-300 ease-in-out
    ${active === index ? "opacity-100" : "opacity-0"}
  `}
>
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
    <section className="bg-[#EEF2F3] py-10 h-screen md:pt-28  justify-center flex">
      <div className="max-w-6xl px-4 h-full   md:px-4">
        <div className="bg-white rounded-3xl h-full px-5 md:px-5 py-6 md:py-5 flex flex-col md:flex-row  gap-6">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[30%] items-center flex flex-col justify-center font-bold">
            <div>

            <AnimatedHeading
              as="h3"
              delay={0}
              staggerDelay={0.15}
              className="text-lg md:text-4xl font-semibold   mb-4 md:mb-8"
              >
              Bespoke {'\n'}services for { '\n'}elevated living {'\n'} 
            </AnimatedHeading>

            <button
              onClick={() => navigate("/projects")}
              className="text-[11px] buttons  justify-center items-center gap-3  hover:text-ORANGE hover:bg-ORANGE2/5 w-fit p-2 rounded-md flex tracking-widest text-gray-700"
              >
                <span>
                VIEW PROJECTS
                </span>
                <ArrowRight className="h-4 w-4" />
            </button>
              </div>
          </div>

          {/* RIGHT IMAGE INTERACTION */}
          <BespokeImageHover />
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
