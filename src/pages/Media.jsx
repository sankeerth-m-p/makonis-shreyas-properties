import React, { useState } from "react";
import mediaImg from "/media/media.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";

const Media = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="bg-white pt-4 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedHeading className="text-3xl text-gray-800 my-10 max-w-3xl">
          Our journey, values, and projects as recognized and featured by leading media platforms.
        </AnimatedHeading>

 {/* ================= BANNER SECTION ================= */}
<FloatUpText>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center max-w-5xl mx-auto">

    {/* Left Image */}
    <div className="rounded-3xl overflow-hidden h-[520px]">
      <img
        src={mediaImg}
        className="w-full h-full object-cover"
        alt="Media Banner"
      />
    </div>

{/* Right Orange Box */}
<div className="bg-[#ff6a13] rounded-3xl p-16 h-[540px] flex flex-col justify-between">

  {/* Logo */}
  <div className="flex justify-end">
    <img
      src="/shreyas_logo_footer_1.png"
      alt="Shreyas Infra Projects"
      className="h-12 object-contain"   // increased from h-8 to h-12
    />
  </div>

  {/* Text Content */}
  <div>
    <h2 className="text-white text-[46px] leading-[1.1] font-light mb-8">
      Headlines <br />
      that <br />
      matters.
    </h2>

    {/* Accent Line */}
    <div className="w-60 h-[2px] bg-white mb-8"></div> {/* longer like image */}

    <p className="text-white/90 text-sm leading-relaxed max-w-xs">
      Our story highlighted in over <br />
      10 media publications.
    </p>
  </div>
</div>


  </div>
</FloatUpText>



        {/* ================= NEWS SECTION ================= */}
        <FloatUpText>
          {/* <h3 className="text-xl font-semibold text-gray-800 mb-10">
            In The News
          </h3> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

            {/* News Card 1 */}
            <div>
              <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
             <div className="flex items-center gap-4 mb-4">
  <img src="/CNBC.png" alt="CNBC TV18" className="h-10 object-contain" />
  <div className="h-8 w-px bg-gray-300"></div>
  <div className="text-sm">
    <p className="text-gray-500">Published on:</p>
    <p className="font-medium">March 06, 2026</p>
  </div>
</div>

              <p className="text-sm text-gray-600 mb-6">
                {open1
                  ? "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with modern design, sustainability, and customer satisfaction."
                  : "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with..."}
              </p>
              <button onClick={() => setOpen1(!open1)} className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
                {open1 ? "READ LESS" : "READ MORE"}
              </button>
            </div>

            {/* News Card 2 */}
            <div>
              <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
<div className="flex items-center gap-4 mb-4">
  <img src="/zee.png" alt="Zee News" className="h-10 object-contain" />
  <div className="h-8 w-px bg-gray-300"></div>
  <div className="text-sm">
    <p className="text-gray-500">Published on:</p>
    <p className="font-medium">March 06, 2026</p>
  </div>
</div>


              <p className="text-sm text-gray-600 mb-6">
                {open2
                  ? "Our projects are crafted to enhance urban living by integrating smart planning, sustainable materials, and future-ready infrastructure."
                  : "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning..."}
              </p>
              <button onClick={() => setOpen2(!open2)} className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
                {open2 ? "READ LESS" : "READ MORE"}
              </button>
            </div>

          </div>
        </FloatUpText>

        <FloatUpText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* News Card 3 */}
            <div>
              <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
                    <div className="flex items-center gap-4 mb-4">
  <img src="/CNBC.png" alt="CNBC TV18" className="h-10 object-contain" />
  <div className="h-8 w-px bg-gray-300"></div>
  <div className="text-sm">
    <p className="text-gray-500">Published on:</p>
    <p className="font-medium">March 06, 2026</p>
  </div>
</div>
              <p className="text-sm text-gray-600 mb-6">
                {open3
                  ? "We develop spaces that prioritize lifestyle, innovation, and long-term community growth through world-class design and execution."
                  : "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with..."}
              </p>
              <button onClick={() => setOpen3(!open3)} className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
                {open3 ? "READ LESS" : "READ MORE"}
              </button>
            </div>

            {/* News Card 4 */}
            <div>
              <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
   <div className="flex items-center gap-4 mb-4">
  <img src="/zee.png" alt="Zee News" className="h-10 object-contain" />
  <div className="h-8 w-px bg-gray-300"></div>
  <div className="text-sm">
    <p className="text-gray-500">Published on:</p>
    <p className="font-medium">March 06, 2026</p>
  </div>
</div>


              <p className="text-sm text-gray-600 mb-6">
                {open4
                  ? "Our commitment is to deliver excellence through ethical practices, innovative architecture, and customer-first solutions."
                  : "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning..."}
              </p>
              <button onClick={() => setOpen4(!open4)} className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
                {open4 ? "READ LESS" : "READ MORE"}
              </button>
            </div>

          </div>
        </FloatUpText>

      </div>
    </div>
  );
};

export default Media;
