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
    <div className="w-full md:w-[70%] h-auto md:h-[380px]">
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
              <div key={index} className="w-full shrink-0 relative h-[50vh]">
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
              <span
  className={`
    absolute bottom-0 left-0 w-full h-[44px]
    flex items-center justify-center
    uppercase text-white text-[11px] tracking-widest
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
    <section className="bg-[#EEF2F3] py-10  md:py-28">
      <div className="max-w-6xl mx-auto px-4  md:px-0">
        <div className="bg-white rounded-3xl px-5 md:px-10 py-6 md:py-12 flex flex-col md:flex-row  gap-6">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[30%]  flex flex-col justify-center font-bold">
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
