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
const [active, setActive] = useState(1); // start at 1 (real first)
const [noAnim, setNoAnim] = useState(false);
  const intervalRef = useRef(null);
  const touchRef = useRef(false);
const startXRef = useRef(0);
const swipeThreshold = 50;const mobileSlides = [
  bespokeImages[bespokeImages.length - 1], // clone last
  ...bespokeImages,                       // real slides
  bespokeImages[0],                       // clone first
];
useEffect(() => {
  if (window.innerWidth >= 768) return;

  // when hitting clone at end -> jump to real first
  if (active === mobileSlides.length - 1) {
    setTimeout(() => {
      setNoAnim(true);
      setActive(1);
    }, 700); // match transition duration
  }

  // when hitting clone at start -> jump to real last
  if (active === 0) {
    setTimeout(() => {
      setNoAnim(true);
      setActive(mobileSlides.length - 2);
    }, 700);
  }

  // re-enable animation after snap
  if (noAnim) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoAnim(false));
    });
  }
}, [active]);

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
    <div className="w-full md:w-[70%] h-auto md:h-full   ">
      {/* ✅ MOBILE SLIDER */}
      <div className="md:hidden relative w-full ">
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
  setActive((prev) => prev + 1);
} else {
  // swipe right → prev
  setActive((prev) => prev - 1);
}

    }

    setTimeout(() => {
      touchRef.current = false;
    }, 1200);
  }}
>

          <div
            className={`flex ${noAnim ? "" : "transition-transform duration-700 ease-in-out"}`}
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
           {mobileSlides.map((img, index) => (

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
    onClick={() => setActive(i + 1)} // ✅ offset because of clone
    className={`w-2.5 h-2.5 rounded-full transition ${
      i + 1 === active ? "bg-white" : "bg-white/40"
    }`}
  />
))}

        </div>
      </div>

      {/* ✅ DESKTOP LAYOUT (unchanged) */}
      <div className="hidden md:flex gap-4  h-full">
        {bespokeImages.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            onTouchStart={() => setActive(index)}
            className={`
              relative overflow-hidden rounded-xl transition-all  duration-1000 ease-in-out
              ${active === index ? "flex-[5]" : "flex-[1]"}
            `}
          >
            <img src={img.src} alt={img.label} className="w-full h-full hover:scale-105 transition-transform ease-in-out duration-700 object-cover" />

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
    <section className="bg-[#EEF2F3] py-10  lg:h-[calc(100vh-5rem)] md:h-[50vh]  justify-center  items-center flex">
      <div className="max-w-6xl h-full max-h-[550px]    md:px-4">
        <div className="bg-white  rounded-3xl h-full px-5 md:px-5 py-6 md:py-5 flex flex-col md:flex-row  gap-6">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[30%] flex flex-col items-center justify-center font-bold text-center">
  <div className="text-center">

    <AnimatedHeading
      as="h3"
      delay={0}
      staggerDelay={0.15}
    className="text-3xl md:text-4xl font-semibold mb-4 md:mb-8 text-center"
    >
      Bespoke {'\n'}services for { '\n'}elevated living {'\n'} 
    </AnimatedHeading>

            <button
              onClick={() => navigate("/projects")}
              className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
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
