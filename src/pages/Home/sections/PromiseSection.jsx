import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import promiseImg from "/Home/promisesection.jpg";

const PromiseSection = () => {
  return (
      <section
  className="
    relative 
    w-full h-[60vh]
    md:h-screen 
    bg-center 
    bg-cover 
    bg-no-repeat 
    bg-fixed
    overflow-hidden
  "
  style={{
    backgroundImage: `url(${promiseImg})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">

    <AnimatedHeading
      as="h2"
      delay={0}
      staggerDelay={0.15}
      className="text-lg md:text-[34px] font-medium leading-snug mb-6"
    >
      Our promise is to turn urban spaces into meaningful lives.
    </AnimatedHeading>

    <FloatUpText delay={0}>
      <p className="text-sm md:text-[14px] text-white/80 max-w-2xl mx-auto mb-10">
        We design spaces that nurture life itself where <br />
        craftsmanship and dedicated service come together
        to elevate living.
      </p>
    </FloatUpText>

    <button className="bg-ORANGE  hover:bg-ORANGE2  text-white px-10 py-3 rounded-full text-sm md:text-base tracking-widest uppercase  w-full md:w-fit transition ">
      Know More
    </button>

  </div>
</section>
  );
};

export default PromiseSection;
