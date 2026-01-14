import AnimatedHeading from "../../../components/animatedHeading";

const StoryBehindBrand = () => {
  return (
   <section
  className="
    relative w-full
    h-[70vh] md:h-screen
    bg-center bg-cover bg-no-repeat
    overflow-hidden
  "
  style={{
    backgroundImage:
      "url(/Home/naturesign.webp)",
  }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-[#F4EFE5]" />

  {/* CONTENT */}
  <div className="relative h-full max-w-7xl mx-auto px-6">
    <div
      className="
        h-full
        grid
        place-items-center
      "
    >
      {/* wrapper */}
      <div
        className="
          relative
          w-[min(78vw,520px)]
          aspect-[520/420]
        "
      >
        {/* TOP LEFT TITLE */}
        <div
          className="
            absolute
            top-0 left-0
            -translate-y-[130%]
            text-left
            md:-translate-x-[80%] md:-translate-y-[10%]
          "
        >
          <AnimatedHeading
            as="h1"
            delay={0}
            staggerDelay={0.15}
            className="
              font-bold leading-tight whitespace-pre-line
              text-[clamp(22px,5vw,34px)]
            "
          >
            The Story{"\n"}Behind the Brand
          </AnimatedHeading>
        </div>

        {/* MASK IMAGE */}
        <div
          className="
            w-full h-full
            bg-center bg-cover
            md:bg-fixed
          "
          style={{
            backgroundImage:
              "url(/Home/naturesign.webp)",

            WebkitMaskImage: "url(/logo.svg)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",

            maskImage: "url(/logo.svg)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />

        {/* BOTTOM TEXT */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-full
            mt-6
            text-center
            max-w-[32ch]

            md:mt-0
            md:left-auto md:right-0
            md:bottom-0 md:top-auto
            md:translate-x-[60%] md:translate-y-[60%]
            md:text-right
            md:max-w-[26ch]
          "
        >
          <p className="text-[clamp(13px,1.2vw,15px)] text-[#2A2A2A] leading-relaxed mb-5">
            Our brand tells a story of commitment, trust, and progress.
          </p>

          <button className="text-[11px] tracking-widest uppercase text-[#111] border-b border-[#111] pb-1">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default StoryBehindBrand;
