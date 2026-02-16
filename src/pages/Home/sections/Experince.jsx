import { useRef, useState, useEffect } from "react";

export default function CursorReveal() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const backRef = useRef(null);

  const DEFAULT_SIZE = 20;
  const HOVER_SIZE = 300;
  const MASK_INSET = 300;

  const [maskSize, setMaskSize] = useState(DEFAULT_SIZE);

  // Smooth cursor follow
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  const lerp = (start, end, factor) =>
    start + (end - start) * factor;

  const animate = () => {
    currentPos.current.x = lerp(
      currentPos.current.x,
      targetPos.current.x,
      0.15
    );
    currentPos.current.y = lerp(
      currentPos.current.y,
      targetPos.current.y,
      0.15
    );

    if (backRef.current) {
      backRef.current.style.webkitMaskPosition = `${currentPos.current.x}px ${currentPos.current.y}px`;
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  const handleSectionMove = (e) => {
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetPos.current.x = x + MASK_INSET - maskSize / 2;
    targetPos.current.y = y + MASK_INSET - maskSize / 2;

    if (!animationFrameId.current) {
      currentPos.current = { ...targetPos.current };
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  const handleSectionLeave = () => {
    cancelAnimationFrame(animationFrameId.current);
    animationFrameId.current = null;
  };

  const handleBoxEnter = () => {
    setMaskSize(HOVER_SIZE);
    backRef.current?.style.setProperty("--mask-size", `${HOVER_SIZE}px`);
  };

  const handleBoxLeave = () => {
    setMaskSize(DEFAULT_SIZE);
    backRef.current?.style.setProperty("--mask-size", `${DEFAULT_SIZE}px`);
  };

  /* -------- COUNTERS -------- */

  const stat1 = useRef(null);
  const stat2 = useRef(null);
  const stat3 = useRef(null);

  const useCountUp = (ref, end, duration = 2000) => {
    useEffect(() => {
      if (!ref.current) return;

      const startTime = performance.now();

      const animateCount = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = end * progress;

        ref.current.textContent =
          end % 1 === 0 ? Math.floor(value) : value.toFixed(1);

        if (progress < 1) requestAnimationFrame(animateCount);
      };

      requestAnimationFrame(animateCount);
    }, [end, duration, ref]);
  };

  useCountUp(stat1, 250);
  useCountUp(stat2, 10);
  useCountUp(stat3, 79);

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="relative lg:h-screen pt-[5rem] w-full text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hero-gradient-base" />
        <div className="liquid-gradient" />
        <div className="grain-layer" />
      </div>

      {/* CONTENT */}
      <div className="relative  z-10 h-full flex flex-col justify-between text-center px-6 py-20">

        {/* HEADER */}
        <div>
          

          <p className="max-w-xl mx-auto text-base">
Where experience meets enduring value, every project is shaped by insight, precision, and proven expertise.          </p>
        </div>

        {/* INTERACTION AREA */}
        <div
          ref={boxRef}
          onMouseEnter={handleBoxEnter}
          onMouseLeave={handleBoxLeave}
          className="
            relative
            mx-auto
            px-6 py-20
            w-full
            md:px-32 md:py-32
            md:w-[60vw]
            overflow-visible
          "
        >
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <span
              className="
                text-5xl
                md:text-9xl
                font-bold
                whitespace-nowrap
                text-white
              "
            >
              8 + years 
            </span>
            <span
              className="
                text-4xl
                md:hidden
                font-bold
                whitespace-nowrap
                text-white
              "
            >
              experience
            </span>
          </div>

          {/* BACK (MASKED) */}
          <div
            ref={backRef}
            className="
              absolute
              -inset-[300px]
              flex items-center justify-center
              z-20
              pointer-events-none
              bg-white
              text-black
              mask-layer
            "
            style={{ "--mask-size": `${maskSize}px` }}
          >
            <span
              className="
                text-5xl
                md:text-9xl
                text-ORANGE2
                font-bold
                whitespace-nowrap
              "
            >
              experience
            </span>
          </div>
        </div>

        {/* COUNTERS */}
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

            <div>
              <p className="text-sm uppercase tracking-wider mb-3 text-white">
                Satisfied customers
              </p>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <span ref={stat1}>0</span>+
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider mb-3 text-white">
                Successful Projects
              </p>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <span ref={stat2}>0</span>+
              </div>
            </div>

            

          </div>
        </div>

      </div>
    </div>
  );
}
