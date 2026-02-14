import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import { useNavigate } from "react-router-dom";

const StoryBehindBrand = () => {
  const navigate = useNavigate();
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        lg:h-[calc(100vh-5rem)]
        py-10
        lg:py-0
       bg-fixed
        bg-center
        bg-cover
      "
      style={{
        backgroundImage: "url(/hero_image_2.webp)",
      }}
    >
      {/* FROSTED GLASS OVERLAY - FULL WIDTH */}
      <div
        className="absolute inset-0 glassmorphism pointer-events-none"
        style={{
          background: "rgba(225, 225, 225, 0.30)",
          backdropFilter: "blur(40px) saturate(90%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
          border: "1px solid rgba(255, 255, 255, 0.35)",
        }}
      />
      {/* CONTENT CONTAINER - MAX WIDTH 6XL */}
      <div className="relative max-w-6xl px-6 mx-auto px-6 h-full flex items-center">
        <div className="w-full flex flex-col h-full lg:flex-row gap-8 lg:gap-0 min-h-[70vh] lg:min-h-0">
          {/* LEFT 50% — LOGO CUTOUT (SHOWS SECTION BG) */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[40vh] lg:min-h-0">
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage: `url(/logo.svg)`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "min(320px, 80%)",
                maskImage: `url(/logo.svg)`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "min(320px, 80%)",
                backgroundImage: "url(/hero_image_2.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />
          </div>
          {/* RIGHT 50% — CONTENT */}
          <div className="relative w-full lg:w-1/2 flex   items-center justify-center lg:justify-start">
            <div className="w-full  p-8   lg:py-12">
              {/* TITLE WITH CUTOUT MASK */}
              <div className="relative    mb-6">
                <h2
                  className="text-6xl   md:text-8xl font-bold leading-tight"
                  style={{
                    background: "url(/hero_image_2.webp)",
                    backgroundSize: "cover",
                   
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  The Story
                  <br />
                  Behind the Brand
                </h2>
              </div>

              <FloatUpText delay={0}>
                <p className="text-sm mb-5  text-white/70">
Our logo embodies strength, movement, and modern simplicity through a clean, minimal design. The two bold orange forms represent growth and structure, symbolizing buildings, plotted developments, and rising foundations within the real estate landscape.
The subtle curve created through the central negative space signifies connection uniting land and vision, design and execution, developer and customer. Balanced and upright, the geometric forms convey stability, trust, and solid foundations. Their upward movement reflects ambition, progress, and a commitment to continuous growth in the real estate journey.                </p>
                {/* <button
                  onClick={() => navigate("/our-story")}
                  className="
                    text-[11px]
                    tracking-widest
                    uppercase
                    border-b
                    border-white
                    pb-1
                    hover:text-ORANGE
                    hover:border-ORANGE
                    transition
                  "
                >
                  KNOW MORE
                </button> */}
              </FloatUpText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StoryBehindBrand;