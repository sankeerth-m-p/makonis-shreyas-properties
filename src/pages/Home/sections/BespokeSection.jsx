import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import { useNavigate } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import FloatUpText from "../../../components/floatUpText";
const bespokeImages = [
  {
    src: "/Home/services_plotted_developemnt.webp",
    label: "Plotted\n development",
  },
  {
    src: "/Home/residential_projects.webp",
    label: "Residential\n projects",
  },
  {
    src: "/Home/hospitality.webp",
    label: "Hospitality",
  },
  {
    src: "/Home/commercial&retailsspaces.webp",
    label: "Commercial \n spaces",
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
    <div className="w-full md:w-[70%] h-auto  md:h-full   ">
      {/* ✅ MOBILE SLIDER */}
      <div className="md:hidden relative w-full ">
        {/* Slides */}
        <FloatUpText>
        <div
  className="w-full overflow-hidden a  rounded-lg"
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
            className={`flex  ${noAnim ? "" : " transition-transform duration-700 ease-in-out"}`}
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
           {mobileSlides.map((img, index) => (

              <div key={index} className="w-full  shrink-0 relative h-[50vh]">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />

                {/* Label */}
                <h3
  className="
    absolute bottom-0 left-0 w-full
    px-6 pb-9   items-end flex
    text-2xl  text-white
    whitespace-pre-line
h-1/3
    bg-gradient-to-t
    from-[#0A1E2A]/100
    via-[#0A1E2A]/90
    to-transparent
  "
>
                  {img.label}
                </h3> {/* ✅ DOT INDICATOR */}
        <div className=" absolute bottom-9  w-full flex justify-end pr-6 gap-2">
         {bespokeImages.map((_, i) => (
  <button
    key={i}
    onClick={() => setActive(i + 1)} // ✅ offset because of clone
    className={`w-2 h-2 rounded-full transition ${
      i + 1 === active ? "bg-white" : "bg-white/40"
    }`}
  />
))}

        </div>
              </div>
            ))}
          </div>
        </div>
</FloatUpText>
       
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
            <h1
  className={`
    absolute bottom-0 left-0 w-full h-1/3
    flex items-end pl-10 pb-6 
    text-white md:text-2xl lg:text-3xl
    bg-gradient-to-t from-[#0A1E2A]/100 via-[#0A1E2A]/60 to-transparent
    whitespace-pre-line

    transition-all duration-1000  delay-200 ease-in-out
    ${active === index
      ? "opacity-100 translate-y-0 "
      : "opacity-0 translate-y- "}
  `}
>
  

  {img.label}
</h1>

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
    <section className="bg-[#EEF2F3] py-10   lg:h-[calc(100vh-5rem)] md:h-[50vh]  justify-center  items-center flex">
      <div className="max-w-6xl h-full md:max-h-[550px]    md:px-6">
        <div className="bg-white  md:rounded-3xl h-full px-6 md:px-5 pt-14 pb-5 md:py-5 flex flex-col md:flex-row  gap-6">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[30%] flex flex-col md:items-center  justify-center font-bold text-center">
  <div className=" text-center  flex flex-col items-center md:items-start">

    <AnimatedHeading
      as="h3"
      delay={0}
    className="text-3xl md:text-4xl   mb-4 md:mb-8  text-center  md:text-left"
    >
      Bespoke {'\n'}services for { '\n'}elevated living {'\n'} 
    </AnimatedHeading>
              <FloatUpText>
                
            <button
              onClick={() => navigate("/projects")}
              className=" buttons  btn btn-orange "
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
            </button>
              </FloatUpText>
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
