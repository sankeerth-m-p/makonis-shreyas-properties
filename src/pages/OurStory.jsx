import React from "react";
import AnimatedHeading from "../components/animatedHeading";
import FloatUpText from "../components/floatUpText";
const OurStory = () => {
  return (
    <div className="w-full pt-20 relative overflow-hidden">

      {/* ================= ORANGE SECTION ================= */}
      <section className="bg-ORANGE pt-20 pb-60 relative">
        <div className="max-w-6xl mx-auto  flex flex-col justify-center px-6 text-center text-white">
          <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className="text-3xl md:text-4xl  font-semibold leading-normal">
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

      {/* ================= WHITE SECTION ================= */}
      <section className="bg-white relative -mt-48 pt-10">

        {/* GREY BACKGROUND SHAPES */}
        <div className="absolute top-24 left-[-160px] w-[420px] h-[420px] bg-gray-100 rounded-full z-0" />
        <div className="absolute top-60 right-[-200px] w-[380px] h-[380px] bg-gray-100 rounded-full z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* ================= IMAGES ================= */}
          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* LEFT – VERTICAL IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Design discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT – IMAGE + TEXT */}
            <div className="pt-20">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[240px] mb-8">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
                  alt="Client meeting"
                  className="w-full h-full object-cover"
                />
                

              </div>
<AnimatedHeading 
  as="h1"
  delay={0}
                staggerDelay={0.15} className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                
              {/* <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-snug"> */}
                We are a forward thinking real estate company driven by the belief
                that well designed spaces shape better lives.
              {/* </h2> */}
  </AnimatedHeading>
              <FloatUpText>
                
              <p className="text-sm text-gray-600">
                With a strong focus on quality, transparency, and long-term value,
                we create developments that blend thoughtful planning with
                enduring craftsmanship.
              </p>
</FloatUpText>
            </div>
          </div>

          {/* ================= TEXT BELOW ================= */}
          <FloatUpText className="my-20 text-sm text-gray-600 space-y-6 max-w-5xl">
            <p>
              We believe real estate is not just about constructing buildings,
              but about creating environments that enhance the way people live,
              grow, and connect.
            </p>

            <p>
              Our philosophy is rooted in integrity, quality, and long-term value.
              From selecting the right location to executing every detail with care,
              we focus on delivering spaces that are functional today and relevant
              for generations to come.
            </p>

            <p>
              We strive to balance modern design with sustainability, ensuring our
              developments respect nature while embracing progress.
            </p>
          </FloatUpText>

        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className="relative w-full bg-[#f4efe4] overflow-hidden py-28">

  {/* LEFT BACKGROUND ICON – EYE (VISION) */}
  <div className="absolute left-[-140px] top-24 opacity-[0.08]">
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      fill="none"
      stroke="#000"
      strokeWidth="3"
    >
      {/* outer eye */}
      <ellipse cx="100" cy="100" rx="90" ry="55" />
      {/* middle ring */}
      <ellipse cx="100" cy="100" rx="55" ry="35" />
      {/* pupil */}
      <circle cx="100" cy="100" r="14" />
      {/* side dots */}
      <circle cx="30" cy="100" r="4" />
      <circle cx="170" cy="100" r="4" />
      <circle cx="100" cy="30" r="4" />
      <circle cx="100" cy="170" r="4" />
    </svg>
  </div>

  {/* RIGHT BACKGROUND ICON – ARROW / GROWTH */}
  <div className="absolute right-[-160px] top-20 opacity-[0.08]">
    <svg
      width="380"
      height="380"
      viewBox="0 0 200 200"
      fill="none"
      stroke="#000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* base line */}
      <line x1="30" y1="150" x2="170" y2="150" />
      {/* arrow path */}
      <path d="M40 140 L90 90 L120 120 L165 75" />
      {/* arrow head */}
      <path d="M145 75 L165 75 L165 95" />
    </svg>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-28">

    {/* OUR VISION */}
    <div>
       <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className="text-sm text-gray-500 mb-3">Our vision</AnimatedHeading>
      <div className="w-24 h-[1px] bg-gray-400 mb-8" />

      <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className="text-2xl font-medium text-gray-900 leading-snug mb-4 max-w-md">
        To create thoughtfully planned spaces that elevate everyday living.
      </AnimatedHeading>
            <FloatUpText>
              
      <p className="text-sm text-gray-600 leading-relaxed max-w-md">
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
  staggerDelay={0.15} className="text-sm text-gray-500 mb-3">Our mission</AnimatedHeading>
      <div className="w-24 h-[1px] bg-gray-400 mb-8" />

      <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className="text-2xl font-medium text-gray-900 leading-snug mb-4 max-w-md">
        To develop responsibly by integrating sustainable practices.
      </AnimatedHeading>
            <FloatUpText>
              
      <p className="text-sm text-gray-600 leading-relaxed max-w-md">
        To develop responsibly by integrating sustainable practices,
        respecting the environment, and creating communities that support
        healthier, balanced lifestyles.
      </p>
</FloatUpText>
    </div>

  </div>
</section>
{/* ================= PEOPLE FIRST PHILOSOPHY SECTION ================= */}
{/* ================= PEOPLE FIRST PHILOSOPHY SECTION ================= */}
<section className="relative w-full overflow-hidden">

  {/* IMAGE AREA */}
  <div className="relative w-full h-[520px]">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      alt="Team meeting"
      className="w-full h-full object-cover"
    />

    {/* ORANGE SVG WAVE */}
    <svg
      viewBox="0 0 1440 220"
      className="absolute bottom-0 left-0 w-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0,120 
           C240,200 480,200 720,170 
           C960,140 1200,80 1440,120 
           L1440,220 L0,220 Z"
        fill="#ff6a1a"
      />
    </svg>
  </div>

  {/* ORANGE CONTENT AREA */}
  <div className="bg-[#ff6a1a]">
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 text-white">

      {/* LEFT HEADING */}
       <AnimatedHeading 
  as="h1"
  delay={0}
  staggerDelay={0.15} className="text-2xl md:text-3xl font-semibold leading-snug max-w-md">
        A Philosophy that <br />
        puts people first.
      </AnimatedHeading>

            {/* RIGHT DESCRIPTION */}
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
<section className="w-full bg-white py-24">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">

    {/* LEFT IMAGE */}
    <div className="md:col-span-4">
      <div className="w-full h-[420px] overflow-hidden rounded-sm">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
          alt="Conversation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT TEXT */}
    <FloatUpText className="md:col-span-8 text-gray-600 text-sm leading-relaxed space-y-6">
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
<section className="w-full bg-[#f4efe4] py-32">
  <div className="max-w-4xl mx-auto px-6 text-center">

          {/* QUOTE TEXT WITH EXACT INLINE QUOTES */}
         

    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-10">
          
            <span className="text-3xl align-top  ">“</span>
            <AnimatedHeading >

      From the very first meeting to project handover,
      {'\n'}
      the experience was smooth and transparent.
            </AnimatedHeading>
      <span className="text-3xl align-bottom">”</span>
    </p>

          {/* AUTHOR */}<FloatUpText>
            
    <p className="text-sm font-medium text-gray-900">
      Krishna samanth Lella
    </p>

    {/* DESIGNATION */}
    <p className="text-xs text-gray-500 mt-1">
      Founder, Shreyas Infra
    </p>
    </FloatUpText>

  </div>
</section>



    </div>
  );
};

export default OurStory;
