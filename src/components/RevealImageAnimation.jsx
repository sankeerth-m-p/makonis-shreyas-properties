import { useEffect, useRef, useState } from "react";

function RevealImageAnimation({ image, className = "" }) {
  const [reveal, setReveal] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setReveal(entry.isIntersecting);
    },
    { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
  );

  observer.observe(el);

  return () => {
    observer.disconnect();
  };
}, []);


  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Expanding frame */}
      <div
        className={`
          absolute inset-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-white overflow-hidden
          transition-all duration-[2000ms] ease-initial
          ${reveal ? "w-full h-full" : "w-1/2 h-1/2"}
        `}
      >
        {/* Image */}
        <div
          className={`absolute inset-0 ${className} bg-cover bg-center transition-transform duration-[2500ms] ease-initial`}
          style={{
            backgroundImage: `url('${image}')`,
            transform: reveal ? "scale(1)" : "scale(1.05)",
          }}
        />
      </div>
    </div>
  );
}

export default RevealImageAnimation;
