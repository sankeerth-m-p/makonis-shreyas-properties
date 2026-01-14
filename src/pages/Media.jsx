import React from "react";
import mediaImg from "/media/media.webp";

const Media = () => {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-lg text-gray-800 mb-12 max-w-2xl">
          Our journey, values, and projects as recognized and featured by leading media platforms.
        </p>

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          <div className="rounded-3xl overflow-hidden h-[380px]">
            <img src={mediaImg} className="w-full h-full object-cover" />
          </div>

          <div className="bg-[#ff6a13] rounded-3xl p-12 flex flex-col justify-between h-[380px]">
            <div className="flex justify-end text-white text-sm font-semibold">Shreyas</div>

            <div>
              <h2 className="text-white text-4xl leading-tight mb-4">
                Headlines <br /> that <br /> matters.
              </h2>
              <div className="w-6 h-[2px] bg-white mb-4"></div>
              <p className="text-white/90 text-sm">
                Our story highlighted in over <br /> 10 media publications.
              </p>
            </div>
          </div>

        </div>

        {/* Media Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

          {/* Card */}
          <div>
            <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
            <div className="flex items-center gap-3 mb-3 text-sm">
              <span className="font-bold">CNBC TV18</span>
              <span className="text-gray-500">| Published on: March 06, 2026</span>
            </div>
            <h3 className="text-lg mb-3">
              We are a forward-thinking real estate company driven by the belief that well-designed spaces shape better lives.
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with...
            </p>
            <button className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
              READ MORE
            </button>
          </div>

          {/* Card */}
          <div>
            <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
            <div className="flex items-center gap-3 mb-3 text-sm">
              <span className="font-bold">ZEE NEWS</span>
              <span className="text-gray-500">| Published on: March 06, 2026</span>
            </div>
            <h3 className="text-lg mb-3">
              We are a forward-thinking real estate company driven by the belief that well-designed spaces.
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning...
            </p>
            <button className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
              READ MORE
            </button>
          </div>

        </div>

        {/* Second Row Same Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
            <div className="flex items-center gap-3 mb-3 text-sm">
              <span className="font-bold">CNBC TV18</span>
              <span className="text-gray-500">| Published on: March 06, 2026</span>
            </div>
            <h3 className="text-lg mb-3">
              We are a forward-thinking real estate company driven by the belief that well-designed spaces shape better lives.
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with...
            </p>
            <button className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
              READ MORE
            </button>
          </div>

          <div>
            <img src={mediaImg} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />
            <div className="flex items-center gap-3 mb-3 text-sm">
              <span className="font-bold">ZEE NEWS</span>
              <span className="text-gray-500">| Published on: March 06, 2026</span>
            </div>
            <h3 className="text-lg mb-3">
              We are a forward-thinking real estate company driven by the belief that well-designed spaces.
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning...
            </p>
            <button className="border border-black rounded-full px-6 py-2 text-xs tracking-widest">
              READ MORE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Media;
