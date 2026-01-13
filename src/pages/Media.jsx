import React from "react";

const Media = () => {
  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <p className="text-lg text-gray-800 mb-10 max-w-2xl">
          Our journey, values, and projects as recognized and featured by leading media platforms.
        </p>

        {/* Two Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">

          {/* Left Image Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-[380px]">
            <img
  src="https://via.placeholder.com/900x600?text=Media+Highlight"
  alt="Media"
  className="w-full h-full object-cover"
/>

          </div>

          {/* Right Orange Card */}
          <div className="bg-[#ff6a13] rounded-3xl p-12 flex flex-col justify-between h-[380px] relative">
            
            {/* Logo */}
            <div className="flex justify-end">
              <span className="text-white font-semibold text-sm tracking-wide">
                shreyas
              </span>
            </div>

            {/* Text + Accent Line */}
            <div>
              <h2 className="text-white text-4xl font-medium leading-tight mb-4">
                Headlines <br />
                that <br />
                matters.
              </h2>

              {/* Accent Line (exact thin small line) */}
              <div className="w-6 h-[1.5px] bg-white mb-4"></div>

              <p className="text-white/90 text-sm">
                Our story highlighted in over <br />
                10 media publications.
              </p>
            </div>
          </div>
        </div>

        {/* Next Section - Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Project"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="font-semibold text-black">CNBC</span>
                <span>| Published on March 08, 2020</span>
              </div>

              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                We are a forward-thinking real estate company driven by the belief that well-designed spaces shape better lives.
              </h3>

              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with modern living.
              </p>

              <button className="border border-gray-300 rounded-full px-4 py-1 text-xs font-medium">
                READ MORE
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Interview"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="font-semibold text-black">ZEE NEWS</span>
                <span>| Published on March 08, 2020</span>
              </div>

              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                We are a forward-thinking real estate company driven by the belief that well-designed spaces shape better lives.
              </h3>

              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with modern living.
              </p>

              <button className="border border-gray-300 rounded-full px-4 py-1 text-xs font-medium">
                READ MORE
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Media;
