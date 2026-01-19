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
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedHeading className="text-3xl text-gray-800 my-10 max-w-3xl">
          Our journey, values, and projects as recognized and featured by leading media platforms.
        </AnimatedHeading>

        {/* ================= BANNER SECTION ================= */}
        <FloatUpText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">

            {/* Banner Image */}
            <div className="rounded-3xl overflow-hidden h-[420px]">
              <img src={mediaImg} className="w-full h-full object-cover" />
            </div>

            {/* Banner Content */}
            <div className="bg-[#ff6a13] rounded-3xl p-14 flex flex-col justify-between h-[420px]">
              <div className="flex justify-end text-white text-sm font-semibold">
                Shreyas
              </div>

              <div>
                <h2 className="text-white text-4xl leading-tight mb-4">
                  Headlines <br /> that <br /> matters.
                </h2>

                <div className="w-8 h-[2px] bg-white mb-4"></div>

                <p className="text-white/90 text-sm">
                  Our story highlighted in over <br /> 10 media publications.
                </p>
              </div>
            </div>

          </div>
        </FloatUpText>

        {/* ================= NEWS SECTION ================= */}
        <FloatUpText>
          <h3 className="text-xl font-semibold text-gray-800 mb-10">
            In The News
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

            {/* News Card 1 */}
            <div>
              <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="font-bold">CNBC TV18</span>
                <span className="text-gray-500">| Published on: March 06, 2026</span>
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
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="font-bold">ZEE NEWS</span>
                <span className="text-gray-500">| Published on: March 06, 2026</span>
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
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="font-bold">CNBC TV18</span>
                <span className="text-gray-500">| Published on: March 06, 2026</span>
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
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="font-bold">ZEE NEWS</span>
                <span className="text-gray-500">| Published on: March 06, 2026</span>
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
