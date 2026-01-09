import { useEffect, useState } from "react";

function RevealImageAnimation({ image, className = "" }) {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReveal(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Expanding frame */}
      <div
        className={`absolute inset-1/2 -translate-x-1/2  -translate-y-1/2 bg-white overflow-hidden transition-all duration-[2000ms] ease-initial ${
          reveal ? "w-full h-full" : "w-1/2 h-1/2"
        }`}
      >
        {/* Image */}
        <div
          className={`absolute inset-0 bg-cover  ${className} bg-center transition-all duration-[2500ms] ease-initial ${
            reveal ? "scale-100" : "scale-100"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            
          }}
        />
      </div>
    </div>
  );
}

export default RevealImageAnimation;
