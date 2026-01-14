import React from "react";
import AnimatedHeading from "../components/animatedHeading";
import FloatUpText from "../components/floatUpText"; import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import banner from "/banner.svg";
import banner1 from "/banner1.svg";
import aboutUsImg from "/Home/aboutUsImg.webp";

const OurStory = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftCircleX = useTransform(scrollYProgress, [0, 1], [-200, 10]);
  const rightCircleX = useTransform(scrollYProgress, [0, 1], [20, -100]);

  return (
    <div className="w-full md:pt-20 relative overflow-hidden">

      {/* ================= ORANGE SECTION ================= */}
      <section className="bg-ORANGE pt-20 md:pt-28 pb-72 relative">
        <div className="max-w-6xl mx-auto  flex flex-col justify-center px-6 text-center text-white">
          <AnimatedHeading
            as="h1"
            delay={0}
            staggerDelay={0.15} className="text-xl md:text-4xl  font-semibold leading-normal">
            Our journey is defined by a commitment to {'\n'}
            deliver more than just properties
          </AnimatedHeading>
          <FloatUpText>

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

        <div className="max-w-6xl mx-auto px-6 relative z-10 -mt-24">


          {/* ================= IMAGES ================= */}
          <div className=" grid md:grid-cols-2 gap-14  items-start">

            {/* LEFT – VERTICAL IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl ">
              <img
                src="\story_3.webp"
                alt="Design discussion"
                className="w-full h-[45vh] md:h-[600px] object-cover rounded-2xl"
              />
            </div>

            {/* RIGHT – IMAGE + TEXT */}
            <div>
              <div className="rounded-2xl md:block hidden overflow-hidden shadow-xl  mb-8">
                <img
                  src="\story_1.webp"
                  alt="Client meeting"
                  className="w-full h-full object-cover"
                />


              </div>
              <AnimatedHeading
                as="h1"
                delay={0}
                staggerDelay={0.15} className="text-base md:text-xl font-bold text-gray-900 mb-4 leading-snug">

                {/* <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-snug"> */}
                We are a forward thinking real estate company driven by the belief
                that well designed spaces shape better lives.
                {/* </h2> */}
              </AnimatedHeading>
              <FloatUpText>

                <p className="text-[16px] text-gray-600">
                  With a strong focus on quality, transparency, and long-term value,
                  we create developments that blend thoughtful planning with
                  enduring craftsmanship.
                </p>
              </FloatUpText>
              <FloatUpText>
                <p className="text-[16px] text-gray-600">
                  We believe real estate is not just about constructing buildings, but about creating
                  environments that enhance the way people live, grow, and connect. Every project we
                  undertake is guided by thoughtful planning, responsible development, and a deep
                  understanding of our customers’ aspirations.
                </p>
              </FloatUpText>


              <div className="mt-5 rounded-2xl md:hidden overflow-hidden shadow-xl  mb-8">
                <img
                  src="\story_1.jpg"
                  alt="Client meeting"
                  className="w-full h-full object-cover"
                />


              </div>
            </div>
          </div>

          {/* ================= TEXT BELOW ================= */}
          <FloatUpText className="md:mt-15 mt-5 text-[16px] text-gray-600 space-y-6 max-w-6xl mx-auto px-6">

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

          </FloatUpText>


        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className="relative w-full bg-[#f4efe4] overflow-hidden pt-5 md:py-28">

        {/* LEFT BACKGROUND ICON – OUR VISION (EYE) */}
        <img
          src={banner1}
          alt="Vision Icon"
          className="absolute left-[-120px] top-16 w-[420px] opacity-[0.08] z-0"
        />

        {/* RIGHT BACKGROUND ICON – OUR MISSION (GROWTH) */}
        <img
          src={banner}
          alt="Mission Icon"
          className="absolute right-[5%] top-[40px] w-[420px] opacity-[0.08] z-0"
        />


        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 md:gap-28 gap-10 pb-10 md:pb-0">

          {/* OUR VISION */}
          <div>
            <AnimatedHeading
              as="h1"
              delay={0}
              staggerDelay={0.15}
              className="text-sm text-gray-500 mb-3"
            >
              Our vision
            </AnimatedHeading>

            <div className="w-36 h-[1px] bg-gray-400 mb-8" />

            <AnimatedHeading
              as="h1"
              delay={0}
              staggerDelay={0.15}
              className="md:text-2xl font-medium text-gray-900 leading-snug mb-4 max-w-md"
            >
              To create thoughtfully planned spaces that elevate everyday living.
            </AnimatedHeading>

            <FloatUpText>
              <p className="text-[18px] text-gray-600 leading-relaxed max-w-md">
                To create thoughtfully planned spaces that elevate everyday living,
                blending design, functionality, and sustainability to shape enduring
                communities for the future.
              </p>
            </FloatUpText>
          </div>

          {/* OUR MISSION */}
          <div>
            <AnimatedHeading
              as="h1"
              delay={0}
              staggerDelay={0.15}
              className="text-sm text-gray-500 mb-3"
            >
              Our mission
            </AnimatedHeading>

            <div className="w-36 h-[1px] bg-gray-400 mb-8" />

            <AnimatedHeading
              as="h1"
              delay={0}
              staggerDelay={0.15}
              className="md:text-2xl font-medium text-gray-900 leading-snug mb-4 max-w-md"
            >
              To develop responsibly by integrating sustainable practices.
            </AnimatedHeading>

            <FloatUpText>
              <p className="text-[18px] text-gray-600 leading-relaxed max-w-md">
                To develop responsibly by integrating sustainable practices,
                respecting the environment, and creating communities that support
                healthier, balanced lifestyles.
              </p>
            </FloatUpText>
          </div>

        </div>
      </section>

      {/* ================= PEOPLE FIRST PHILOSOPHY SECTION ================= */}
     {/* ================= PEOPLE FIRST WITH WAVE OVER IMAGE ================= */}
<section
  className="relative w-full h-screen bg-center bg-cover bg-no-repeat bg-fixed overflow-hidden"
  style={{ backgroundImage: `url(/story_2.webp)` }}
>
  {/* ORANGE WAVE OVERLAY (LIKE DARK OVERLAY) */}
  <img
    src="/story_orsngebg.svg"
    alt=""
    className="absolute bottom-0 left-0 w-full h-auto z-10 pointer-events-none"
  />

  {/* CONTENT */}
  <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-end pb-24 text-white">
    <div className="grid md:grid-cols-2 gap-6">

      <AnimatedHeading
        as="h1"
        delay={0}
        staggerDelay={0.15}
        className="text-xl md:text-3xl font-semibold leading-snug max-w-md"
      >
        A Philosophy that {'\n'}
        puts people first.
      </AnimatedHeading>

      <FloatUpText>
        <p className="text-sm md:text-base opacity-90 max-w-md">
          Our approach is guided by thoughtful planning, ethical practices,
          and an uncompromising commitment to quality.
        </p>
      </FloatUpText>

    </div>
  </div>
</section>



      {/* ================= IMAGE + TEXT SECTION ================= */}
      <section className="w-full bg-white py-5 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12  gap-5 md:gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="md:col-span-4">
            <div className="w-full md:h-[420px] overflow-hidden rounded-sm">
              <img
                src={aboutUsImg}
                alt="Conversation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <FloatUpText className="md:col-span-8 text-gray-600 text-[20px]leading-relaxed md:space-y-6">
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

            <p>
              We believe real estate is not just about constructing buildings, but about
              creating environments that enhance the way people live, grow, and connect.
              Every project we undertake is guided by thoughtful planning, responsible
              development, and a deep understanding of our customers’ aspirations.
            </p>
          </FloatUpText>

        </div>
      </section>
      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="w-full bg-[#f4efe4] py-12  md:py-32">
       <div className="max-w-6xl mx-auto px-6 text-center">


          {/* QUOTE BLOCK */}
          <div className="relative inline-block md:px-10 py-6">

            {/* OPENING QUOTE */}

            <span className="absolute -top-6 flex md:-left-4 text-7xl md:text-9xl text-gray-700 leading-none">
              “
            </span>
            {/* QUOTE TEXT */}
            <AnimatedHeading className="text-lg md:text-2xl text-gray-800 leading-relaxed">
              From the very first meeting to project handover,
              {'\n'}
              the experience was smooth and transparent.

            </AnimatedHeading>

            {/* CLOSING QUOTE */}
            <span className="absolute hidden md:block -bottom-6 -right-4 text-7xl text-gray-700 leading-none">
              ”
            </span>

          </div>

          {/* AUTHOR */}
          <FloatUpText>
            <p className="md:mt-10 mt-2  text-sm md:text-md font-medium text-gray-900">
              Krishna Samanth Lella
            </p>

            <p className="md:text-sm text-xs text-gray-500 mt-1">
              Founder, Shreyas Infra
            </p>
          </FloatUpText>

        </div>
      </section>




    </div>
  );
};

export default OurStory;
