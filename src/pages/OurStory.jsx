import React from "react";
import AnimatedHeading from "../components/animatedHeading";
import FloatUpText from "../components/floatUpText"; import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from 'lucide-react';
import banner from "/banner.svg";
import banner1 from "/banner1.svg";
import aboutUsImg from "/Home/aboutUsImg.webp";
import RevealImageAnimation from "../components/RevealImageAnimation";
import quote from "/Home/quotes.svg";
const OurStory = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftCircleX = useTransform(scrollYProgress, [0, 1], [-200, 10]);
  const rightCircleX = useTransform(scrollYProgress, [0, 1], [20, -100]);

  return (
    <div className="w-full   relative overflow-hidden">

      {/* ================= ORANGE SECTION ================= */}
      <section className="bg-ORANGE px-6 md:px-0  pt-20 md:pt-28 pb-72 relative">
        <div className="max-w-[1120px] mx-auto px-0 flex flex-col justify-center text-center  text-white">
          <AnimatedHeading
            as="h1"
            delay={0}
            staggerDelay={0.15} className="text-xl section-heading md:text-4xl  text-white font-semiboldx leading-normal">
            Our journey is defined by a commitment to {'\n'}
            deliver more than just properties
          </AnimatedHeading>
          <FloatUpText delay={0}>

            <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base opacity-90">
              we create thoughtfully designed spaces that inspire belonging,
              enhance lifestyles, and stand as lasting symbols of quality and trust.
            </p>
          </FloatUpText>
        </div>

        {/* WHITE CURVE */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%]" />
      </section>

      <section ref={sectionRef} className="bg-white relative pt-10 -mt-48">

        <motion.div
          style={{ x: leftCircleX }}
          className="absolute top-24 left-[-160px] w-[420px] h-[420px] bg-gray-100 rounded-full z-0"
        />

        <motion.div
          style={{ x: rightCircleX }}
          className="absolute top-60 right-[-200px] w-[380px] h-[380px] bg-gray-100 rounded-full z-0"
        />

        <div className="max-w-[1120px] mx-auto px-6 md:px-0 relative z-10 -mt-24">


          {/* ================= IMAGES ================= */}
          <div className=" grid md:grid-cols-2 gap-14 md:px-5 lg:px-0 items-start">

            {/* LEFT – VERTICAL IMAGE */}
            <div className="rounded-lg overflow-hidden    ">
             <RevealImageAnimation
  image="\story_3.webp"
  alt="Design discussion"
  className="w-full h-[400px] md:h-[600px]  hover:scale-105 transition-transform ease-in-out duration-700 object-contain md:object-cover  rounded-lg"
/>

            </div>

            {/* RIGHT – IMAGE + TEXT */}
            <div>
              <div className="rounded-lg md:block hidden overflow-hidden     mb-8">
                <RevealImageAnimation
                  image="\story_1.webp"
                  alt="Client meeting"
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform ease-in-out duration-700"
                />


              </div>
              <AnimatedHeading
                as="h1"
                delay={0}
                staggerDelay={0.15} className="text-xl md:text-2xl lg:text-2xl font-semiboldx mb-4 md:mb-8">

                {/* <h2 className="text-xl font-semiboldx text-gray-900 mb-4 leading-snug"> */}
                We are a forward thinking real estate company driven by the belief
                that well designed spaces shape better lives.
                {/* </h2> */}
              </AnimatedHeading>
              <FloatUpText>

                <p className="text-base text-gray-600">
                  With a strong focus on quality, transparency, and long-term value,
                  we create developments that blend thoughtful planning with
                  enduring craftsmanship.
                </p>
              </FloatUpText>
              <FloatUpText>
                <p className="text-base text-gray-600">
                  We believe real estate is not just about constructing buildings, but about creating
                  environments that enhance the way people live, grow, and connect. Every project we
                  undertake is guided by thoughtful planning, responsible development, and a deep
                  understanding of our customers’ aspirations.
                </p>
              </FloatUpText>


              <div className="mt-5   rounded-lg md:hidden overflow-hidden    mb-8">
  <RevealImageAnimation
    image="\story_1.webp"
    alt="Client meeting"
    className="w-full h-[250px] object-contain"
  />
</div>

            </div>
          </div>

          {/* ================= TEXT BELOW ================= */}
          <FloatUpText className="md:my-14   md:px-6 my-5 text-base   lg:px-0  space-y-6   ">

            <p>
              Our philosophy is rooted in integrity, quality, and long-term value. From selecting the
              right location to executing every detail with care, we focus on delivering spaces that
              are functional today and relevant for generations to come.
            </p>

            <p>
              We strive to balance modern design with sustainability, ensuring our developments
              respect nature while embracing progress. By placing people at the center of our process,
              we create communities that foster comfort, trust, and a sense of belonging.
            </p>

            <p>
              We believe real estate is not just about constructing buildings, but about creating
              environments that enhance the way people live, grow, and connect. Every project we
              undertake is guided by thoughtful planning, responsible development, and a deep
              understanding of our customers’ aspirations.
            </p>

            

          </FloatUpText>


        </div>
      </section>

{/* ================= VISION & MISSION SECTION ================= */}
<section className="relative w-full px-6 md-px-0 bg-[#f4efe4] overflow-hidden pt-10 md:py-28">

        {/* LEFT BACKGROUND ICON – OUR VISION (EYE) */}
        <div className="flex flex-col  absolute justify-between   h-full w-full top-0  left-0 pointer-events-none z-0">

  <img
    src={banner1}
    alt="Vision Icon"
    className="md:absolute left-1/2    mt-10 -translate-x-1/2 md:left-0  md:-translate-x-1/4 top-10 w-[200px] md:w-[320px] opacity-[0.05] z-0"
    
    />

  {/* RIGHT BACKGROUND ICON – OUR MISSION (GROWTH) */}
  <img
    src={banner}
    alt="Mission Icon"
    className="md:absolute left-1/2    mb-10 -translate-x-1/2 md:left-auto md:right-[5%] top-10 md:top-[90px] w-[200px] md:w-[260px] opacity-[0.05] z-0"
    
    />
    </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-[1120px] mx-auto px-0 grid md:grid-cols-2 md:gap-28 gap-14 pb-14 md:pb-0">

    {/* OUR VISION */}
    <div className="text-left">
      <AnimatedHeading
        as="h1"
        delay={0}
        staggerDelay={0.15}
        className="text-sm text-gray-500 mb-2"
      >
        Our vision
      </AnimatedHeading>

      <div className="w-24 md:w-36 h-[1px] bg-gray-400 mb-6" />

      <AnimatedHeading
        as="h1"
        delay={0}
        staggerDelay={0.15}
        className="text-[20px] md:text-2xl font-medium text-gray-900 leading-snug mb-3 max-w-md"
      >
        To create thoughtfully planned spaces that elevate everyday living.
      </AnimatedHeading>

      <FloatUpText>
        <p className="text-[15px] md:text-[18px] text-gray-600 leading-relaxed max-w-md">
          To create thoughtfully planned spaces that elevate everyday living,
          blending design, functionality, and sustainability to shape enduring
          communities for the future.
        </p>
      </FloatUpText>
    </div>

    {/* OUR MISSION */}
    <div className="text-left">
      <AnimatedHeading
        as="h1"
        delay={0}
        staggerDelay={0.15}
        className="text-sm text-gray-500 mb-2"
      >
        Our mission
      </AnimatedHeading>

      <div className="w-24 md:w-36 h-[1px] bg-gray-400 mb-6" />

      <AnimatedHeading
        as="h1"
        delay={0}
        staggerDelay={0.15}
        className="text-[20px] md:text-2xl font-medium text-gray-900 leading-snug mb-3 max-w-md"
      >
        To develop responsibly by integrating sustainable practices.
      </AnimatedHeading>

      <FloatUpText>
        <p className="text-[15px] md:text-[18px] text-gray-600 leading-relaxed max-w-md">
          To develop responsibly by integrating sustainable practices,
          respecting the environment, and creating communities that support
          healthier, balanced lifestyles.
        </p>
      </FloatUpText>
    </div>

  </div>
</section>


<section
  className="relative w-full h-[70vh] lg:h-screen bg-center bg-cover bg-no-repeat overflow-hidden bg-fixed"

  style={{ backgroundImage: `url(/story_2.webp)` }}
>
  {/* ORANGE CURVED CARD */}
  <img
    src="/story_orsngebg.svg"
    alt=""
    className="absolute lg:bottom-0 md:bottom-20 bottom-28  left-0 w-full h-auto z-10 pointer-events-none "
  />

  {/* CONTENT ON ORANGE */}
  <div className="absolute bottom-0   left-0 w-full z-20 md:relative md:h-full md:flex md:items-end">
    <div className="max-w-[1120px] mx-auto bg-ORANGE lg:bg-transparent px-0 pb-5 md:pb-24 text-white w-full">
      <div className="grid md:grid-cols-2   px-6 gap-2 lg:gap-6">

        <AnimatedHeading
          as="h1"
          delay={0}
          staggerDelay={0.15}
          className="text-[22px] text-white md:text-3xl font-semiboldx leading-snug max-w-md"
        >
          A Philosophy that {'\n'}
          puts people first.
        </AnimatedHeading>

        <FloatUpText>
          <p className="text-[14px] md:text-base opacity-90 max-w-md mt-3 md:mt-0">
            Our approach is guided by thoughtful planning, ethical practices,
            and an uncompromising commitment to quality.
          </p>
        </FloatUpText>

      </div>
    </div>
  </div>
</section>

      {/* ================= IMAGE + TEXT SECTION ================= */}
      <section className="w-full px-6 lg:px-0 bg-white py-5 md:py-24 ">
        <div className="max-w-[1120px]   mx-auto grid md:grid-cols-12     gap-5 lg:gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-4 md:col-span-5    h-full  ">
            <div className="lg:w-full  h-full lg:h-[420px] overflow-hidden rounded-sm">
              <RevealImageAnimation
                image={aboutUsImg}
                alt="Conversation"
                className="w-full h-full    object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <FloatUpText className="lg:col-span-8 md:col-span-7 w-full    md:mr-4 lg:mr-0  text-base  leading-relaxed md:space-y-6">
            <p>
              We believe real estate is not just about constructing buildings, but about
              creating environments that enhance the way people live, grow, and connect.
              Every project we undertake is guided by thoughtful planning, responsible
              development, and a deep understanding of our customers’ aspirations.
            </p>

            <p>
              Our philosophy is rooted in integrity, quality, and long-term value. From
              selecting the right location to executing every detail with care, we focus
              on delivering spaces that are functional today and relevant for generations
              to come.
            </p>

            <p>
              We strive to balance modern design with sustainability, ensuring our
              developments respect nature while embracing progress. By placing people
              at the center of our process, we create communities that foster comfort,
              trust, and a sense of belonging.
            </p>

          </FloatUpText>

        </div>
      </section>
      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="relative pb-20 pt-28 md:py-32 lg:py-40   z-40    bg-[#F4EFE5]  flex h-full mt-5  lg:mt-10">
        <div
  className="relative z-10 max-w-5xl mx-auto px-6 md:px-6"
        
      >
        <FloatUpText>
          <div className="relative max-w-4xl  mx-auto text-center transition-all duration-700 ease-in-out">
            {/* Quote SVG */}
            <img
  src={quote}
  alt=""
  className="
    absolute -top-4
    left-6 md:left-0
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
              className="text-2xl  max-w-xl lg:max-w-full lg:text-[38px] font-normal leading-normal animate-fadeIn"
            >
              From the very first meeting to project handover,
              
              the experience was smooth and transparent.
            </AnimatedHeading>

            {/* AUTHOR */}
            <div className="mt-16 flex items-center justify-center gap-3 animate-fadeIn">
              
              <div className="text-left flex flex-col items-center">
                <p className="text-lg font-semibold">Mr. Sandeep Lella</p>
                <p className="text-sm">Founder, Shreyas Infra</p>
              </div>
            </div>
          </div>
        </FloatUpText>
      </div>
      
      </section>




    </div>
  );
};

export default OurStory;
