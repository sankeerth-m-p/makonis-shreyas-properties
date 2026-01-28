import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import promiseImg from "/Home/promisesection.jpg";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
const PromiseSection = () => {
  const navigate = useNavigate();
  return (
      <section
  className="
    relative 
    w-full h-[60vh]
    lg:h-[calc(100vh-5rem)] 
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
  <div className="relative z-10   max-w-4xl mx-auto md:px-6 h-full flex flex-col items-center justify-center text-center text-white">

    <AnimatedHeading
      as="h2"
      delay={0}
      staggerDelay={0.15}
      className="text-lg md:text-4xl font-semibold mb-4 md:mb-8 text-white"
    >
          Our promise is to turn urban spaces  { '\n'}into meaningful lives.
    </AnimatedHeading>

    <FloatUpText delay={0}>
      <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
        We design spaces that nurture life itself where <br />
        craftsmanship and dedicated service come together
        to elevate living.
      </p>
    </FloatUpText>

   <button onClick={()=>navigate('/our-promise')}  className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1">
      <span>Know More</span>
      <ArrowRight className="w-4 h-4" />
    </button>

  </div>
</section>
  );
};

export default PromiseSection;
