import hero from "../assets/promise_hero.png";
import artistry from "../assets/promise_artistry.png";
import nature from "../assets/promise_nature.png";
import aesthetic from "../assets/promise_aesthetic_desgin.png";
function Showcase({
  title,
  para1,
  para2,
  image,
  reverse = false,
}) {
  return (
    <section className="w-full   min-h-[75vh] grid grid-cols-1 md:grid-cols-2">
      
      {/* IMAGE BLOCK */}
<div
  className={`relative bg-gray-300 ${reverse ? "md:order-2" : ""}`}
>
  
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
  />
 

  {/* TITLE OVERLAY */}
  <div className={`absolute bottom-6 px-7 py-3 bg-red-400 min-w-60  ${
    !reverse ? "right-6 text-right" : "left-6 text-left"
  }`}>
    <h3 className="text-2xl font-semibold text-white">
      {title}
    </h3>
  </div>
</div>


      {/* TEXT BLOCK */}
      <div
        className={`flex flex-col justify-center  px-8 md:px-20 lg:px-12 ${
          reverse ? "md:order-1 items-end" : ""
        }`}
      >
        

        <p className="text-gray-700  leading-relaxed mb-4 max-w-md">
          {para1}
        </p>

        <p className="text-gray-600 leading-relaxed max-w-md">
          {para2}
        </p>
      </div>
    </section>
  );
}

// ================= MAIN PAGE =================

export default function PromisePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">

      {/* ========= HERO ========= */}
      <section className="relative w-full h-screen pt-28 overflow-hidden bg-white">
      
      {/* Decorative background shapes */}
      <div className="absolute -left-56 top-36 w-[500px] h-[460px] rounded-full bg-[#F1F4F3]" />
      <div className="absolute -left-24 top-60 w-[300px] h-[300px] rounded-full bg-[#ffffff]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl  text-center px-4">
        
        <h1 className="text-3xl font-semibold text-gray-900">
          We Deliver What We Promise
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          At every stage of our journey, we stand by our word. From project
          planning to final handover, we ensure transparency, timely delivery,
          and uncompromising quality, so what we promise is exactly what you
          receive.
        </p>

       
          <img
    src={hero}
    className=" object-cover mt-8 h-[400px] w-full rounded-2xl bg-gray-300"
  />
      </div>

    </section>

      {/* ========= ORANGE STRIP ========= */}
      <section className="bg-ORANGE p-10 items-center flex text-white h-screen md:h-auto w-full py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold leading-relaxed">
            Shaping the urban lifestyle through thoughtful design and purposeful planning.

          </h2>
        </div>
      </section>

      {/* ========= SHOWCASE ========= */}
      <Showcase
        title="Aesthetic Design"
        para1="At Shreyas Infra, our design process is driven by purpose, precision, and people. We begin by understanding the land, its surroundings, and the lifestyle aspirations of future residents. Every plan is thoughtfully crafted to balance aesthetics, functionality, and sustainability.
"
        para2="From intelligent space planning and natural light optimization to seamless connectivity and green integration, each design decision is made with long-term value in mind. Our collaborative approach ensures that every project reflects timeless design, practical living, and the promise of a better urban lifestyle."
        image={aesthetic}
      />

      <Showcase
        title="Artistry"
        para1="At Shreyas Infra, craftsmanship is the foundation of everything we build. Every detail, from structural strength to finishing touches, is executed with care, precision, and uncompromising quality standards. We work with skilled professionals, premium materials, and proven construction practices to ensure lasting value and superior outcomes."
        para2="Our commitment to craftsmanship ensures that each development is not only visually refined but also durable, functional, and built to stand the test of time."
        image={artistry}
        reverse
      />

      <Showcase
        title="Nature Oriented"
        para1="Our nature-oriented projects are designed to live in harmony with the environment. By preserving natural landscapes, integrating green spaces, and prioritizing open, breathable layouts, we create developments that offer a healthier and more balanced way of living."
        para2="From tree-lined avenues and landscaped gardens to eco-sensitive planning and sustainable practices, every project reflects our commitment to nature, well-being, and long-term environmental responsibility."
        image={nature}
      />

    </div>
  );
}
