import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import quote from "/Home/quotes.svg";

const TESTIMONIALS = [
  {
    quote:
      'From the very first meeting to project handover, the experience was smooth and transparent."',
    name: "Neetu Sargam",
    role: "Founder, KPCC International",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: 'Their attention to detail and commitment to quality exceeded our expectations."',
    name: "Rahul Mehta",
    role: "Director, UrbanNest",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "A rare blend of aesthetics, engineering, and reliability. Highly recommended.",
    name: "Ananya Rao",
    role: "Architect, Studio AR",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const ref = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ EASY COLOR CONTROL HERE
const COLORS = {       // warm white (not pure)
  mainFill: "#F4EFE5",        // keep same base
  wave1: "rgba(244,239,229,0.55)", // beige tint
  wave2: "rgba(244,239,229,0.40)",
  wave3: "rgba(244,239,229,0.25)",
  wave4: "#F4EFE5",           // warm white wave front
};
const COLORS1 = {
  mainFill: "#FF8A4D",                 // lighter orange
  wave1: "rgba(255,138,77,0.55)",
  wave2: "rgba(255,138,77,0.40)",
  wave3: "rgba(255,138,77,0.25)",
  wave4: "#FF8A4D",
};



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const container = document.getElementById("home-scroll");
  if (!container) return;

  const handleScroll = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const containerHeight = containerRect.height;

    // rect.top relative to container viewport
    const relativeTop = rect.top - containerRect.top;

    const progress = Math.max(
      0,
      Math.min(
        1,
        (containerHeight - relativeTop) /
          (containerHeight + rect.height * 0.3)
      )
    );

    setScrollProgress(progress);
  };

  container.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => container.removeEventListener("scroll", handleScroll);
}, []);


  const t = TESTIMONIALS[activeIndex];

  return (
  <section ref={ref} id="testimonials" className="relative  lg:h-[calc(100vh-5rem)] flex-col  lg:justify-end   lg:flex w-full overflow-hidden">
    {/* ✅ TOP SECTION (WHITE) */}
    <div className="relative bottom-0 bg-white  mt-20 pb-20">
      {/* HEADING should be BEFORE wave */}
      <div
        className="relative z-10 text-center py-10 "
        style={{
          opacity: Math.min(1, scrollProgress * 1.3),
          transform: `translateY(${(1 - scrollProgress) * 40}px)`,
        }}
      >
        <AnimatedHeading className="text-lg  lg:text-3xl">
          What 
          people 
          says
        </AnimatedHeading>
      </div>

      {/* ✅ Wave at BOTTOM of header section */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[45%] pointer-events-none">
        <svg
          className="mm-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="mm-gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>

          <g className="mm-parallax">
            <use xlinkHref="#mm-gentle-wave" x="48" y="0" fill={COLORS.wave1} />
            <use xlinkHref="#mm-gentle-wave" x="48" y="3" fill={COLORS.wave2} />
            <use xlinkHref="#mm-gentle-wave" x="48" y="5" fill={COLORS.wave3} />
            <use xlinkHref="#mm-gentle-wave" x="48" y="7" fill={COLORS.wave4} />
          </g>
        </svg>
      </div>
    </div>

    {/* ✅ MAIN CONTENT SECTION (FILLED) */}
   <div
  className="relative pt-2   z-50 pb-24 mt-5  lg:mt-10"
  style={{ backgroundColor: COLORS.mainFill }}
>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6"
        style={{
          opacity: Math.min(1, scrollProgress * 1.5),
          transform: `translateY(${(1 - scrollProgress) * 60}px)`,
        }}
      >
        <FloatUpText>
          <div className="relative max-w-4xl  mx-auto text-center transition-all duration-700 ease-in-out">
            {/* Quote SVG */}
            <img
  src={quote}
  alt=""
  className="
    absolute 
    left-0 top-0
    -translate-x-2/3
    -translate-y-2/3
    rotate-180
    w-10 h-10 
     lg:w-20  lg:h-16
    opacity-70
    pointer-events-none
  "
/>


            <AnimatedHeading
              key={activeIndex}
              className="text-lg  lg:text-[38px] font-normal leading-relaxed animate-fadeIn"
            >
              {t.quote}
            </AnimatedHeading>

            {/* AUTHOR */}
            <div className="mt-16 flex items-center justify-center gap-3 animate-fadeIn">
              <img
                src={t.img}
                className="w-10 h-10 rounded-full object-cover"
                alt={t.name}
              />
              <div className="text-left">
                <p className="text-lg font-semibold">{t.name}</p>
                <p className="text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        </FloatUpText>
      </div>

      {/* ✅ CSS injection */}
      <style>{`
        .mm-waves {
          position: relative;
          width: 100%;
          height: 120px;
          min-height: 80px;
          max-height: 140px;
        }

        .mm-parallax > use {
          animation: mm-move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }

        .mm-parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .mm-parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .mm-parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .mm-parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        @keyframes mm-move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .mm-waves {
            height: 70px;
            min-height: 50px;
          }
        }
      `}</style>
    </div>
  </section>
);

};

export default Testimonials;
