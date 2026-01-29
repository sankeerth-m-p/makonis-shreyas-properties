import AnimatedHeading from "../../../components/animatedHeading";
import { useNavigate } from "react-router-dom";
import FloatUpText from "../../../components/floatUpText";
const StoryBehindBrand = () => {
  const navigate = useNavigate();
  return (
   <section
  className=" 
    relative w-full 
    h-[70vh]   lg:h-[calc(100vh-5rem)]
    bg-center bg-cover bg-no-repeat
    overflow-hidden z-10
  "
  style={{
    backgroundImage:
      "url(/Home/naturesign.webp)",
  }}
>
  {/* overlay */}
  <div className="absolute   inset-0 bg-[#F4EFE5]" />

  {/* CONTENT */}
  <div className="relative h-full pb-10 max-w-7xl mx-auto md:px-6">
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
          relative  lg:h-[50vh] md:h-3/5  h-2/5
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
            text-left  lg:mt-10
             lg:-translate-x-[80%]  lg:-translate-y-[70%]
          "
        >
          <AnimatedHeading
            as="h1"
            delay={0}
            staggerDelay={0.15}
            className="
             text-3xl md:text-4xl font-semiboldx mb-3 lg:mb-8"
          >
            The Story{"\n"}Behind the Brand
          </AnimatedHeading>
        </div>

        {/* MASK IMAGE */}
        <div
          className=" 
            w-full h-full 
            bg-center bg-cover
             bg-fixed
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

             lg:mt-0
             lg:left-auto  lg:right-0
             lg:bottom-0  lg:top-auto
             lg:translate-x-[60%]  lg:translate-y-[60%]
             lg:text-right
             lg:max-w-[26ch]
          "
            ><FloatUpText delay={0}>
                
          <p className="text-[clamp(16px,1.2vw,16px)]   mb-5">
            Our brand tells a story of commitment, trust, and progress.
          </p>

          <button onClick={()=>navigate('/our-story')}  className="text-[11px] tracking-widest uppercase  border-b hover:text-ORANGE hover:font-bold hover:border-ORANGE  border-black pb-1">
            KNOW MORE
          </button>
        </FloatUpText>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default StoryBehindBrand;
