import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import { useNavigate } from "react-router-dom";

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

  // ✅ Auto slide ONLY on mobile
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    intervalRef.current = setInterval(() => {
      if (touchRef.current) return; // if user is interacting, pause auto
      setActive((prev) => (prev + 1) % bespokeImages.length);
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full md:w-[70%] h-auto md:h-[380px]">
      {/* ✅ MOBILE SLIDER */}
      <div className="md:hidden relative w-full">
        {/* Slides */}
        <div
          className="w-full overflow-hidden rounded-3xl"
          onTouchStart={() => {
            touchRef.current = true;
            clearInterval(intervalRef.current);
          }}
          onTouchEnd={() => {
            // allow auto scroll again after a short delay
            setTimeout(() => {
              touchRef.current = false;
            }, 1200);
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {bespokeImages.map((img, index) => (
              <div key={index} className="w-full shrink-0 relative h-[280px]">
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
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" />

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
          <div className="w-full md:w-[30%] flex flex-col justify-center font-bold">
            <AnimatedHeading
              as="h3"
              delay={0}
              staggerDelay={0.15}
              className="text-lg md:text-4xl font-semibold text-gray-900 leading-snug mb-4 md:mb-8"
            >
              Bespoke services for elevated living
            </AnimatedHeading>

            <button
              onClick={() => navigate("/projects")}
              className="text-[11px] hover:text-ORANGE hover:bg-ORANGE2/5 w-fit p-2 rounded-md flex tracking-widest text-gray-700"
            >
              VIEW PROJECTS
            </button>
          </div>

          {/* RIGHT IMAGE INTERACTION */}
          <BespokeImageHover />
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
