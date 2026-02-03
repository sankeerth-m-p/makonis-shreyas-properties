import React, { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import mediaImg1 from "/media/media (1).webp";
import mediaImg2 from "/media/media (2).webp";
import mediaImg3 from "/media/media (3).webp";
import mediaImg4 from "/media/media (4).webp";
import mediaImg5 from "/mediaimg.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";

/* ---------------- MEDIA DATA ---------------- */
const mediaData = [
  {
    id: 1,
    image: mediaImg1,
    logo: "/CNBC.webp",
    date: "March 06, 2024",
    shortTitle: "We are a forward-thinking real estate company driven by the belief that well-designed spaces shape better lives.",
    shortDesc: "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with...",
    desc: "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with modern design, sustainability, and customer satisfaction..."
  },
  {
    id: 2,
    image: mediaImg2,
    logo: "/zee.webp",
    date: "Sep 09, 2024",
    shortTitle: "Smart urban communities designed to elevate everyday living experiences.",
    shortDesc: "Our projects integrate sustainable materials, future-ready infrastructure, and intelligent space planning to support modern lifestyles...",
    desc: "Our projects are crafted to enhance urban living by integrating smart planning..."
  },
  {
    id: 3,
    image: mediaImg3,
    logo: "/CNBC.webp",
    date: "May 12, 2025",
    shortTitle: "Future-ready neighborhoods built for growth, comfort, and innovation.",
    shortDesc: "We develop thoughtfully planned communities that promote sustainability, technology integration, and superior living standards...",
    desc: "We develop spaces that prioritize lifestyle, innovation..."
  },
  {
    id: 4,
    image: mediaImg4,
    logo: "/zee.webp",
    date: "Dec 31, 2025",
    shortTitle: "Construction excellence driven by trust, quality, and ethical practices.",
    shortDesc: "Every project follows strict quality control, advanced engineering, and customer-first execution for lasting value...",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
];




/* ---------------- MEDIA LIST PAGE ---------------- */
const MediaList = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-5 md:pt-28   pb-24">
    <div className="max-w-6xl  px-6 mx-auto ">

        <AnimatedHeading className="section-heading  mb-10 max-w-3xl">
          Our journey, values, and projects as recognized and featured by leading media platforms.
        </AnimatedHeading>

        {/* ================= BANNER ================= */}
        <FloatUpText>
          <div className="grid grid-cols-1  md:grid-cols-5 md:gap-5 gap-y-5 mb-16 items-center">
            <div className="rounded-lg col-span-3 overflow-hidden h-full">
              <img src={mediaImg5} className="w-full h-full object-cover" />
            </div>

            <div className="bg-ORANGE w-full  col-span-2 rounded-lg p-6 lg:p-16 h-full flex flex-col justify-between">
              <div className="flex justify-end ">
                <img src="/shreyas_logo_footer_1.webp" className="h-12  top-10 lg:absolute right-10 object-contain" />
              </div>

              <div>
                <h2 className="hidden lg:block text-white section-heading mb-8">
                  Headlines <br /> that <br /> matters.
                </h2>
                <h2 className="block lg:hidden mt-10 text-white section-heading mb-8">
                  Headlines  that <br /> matters.
                </h2>
                <div className="w-60 h-[2px] bg-white mb-4"></div>
                <p className="text-white/90 text-lg max-w-xs">
                  Our story highlighted in over <br /> 10 media publications.
                </p>
              </div>
            </div>
          </div>
        </FloatUpText>

        {/* ================= MEDIA CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {mediaData.map((item) => (
            <FloatUpText key={item.id}>
              <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full ">
                <div className="overflow-hidden ">
                <img
    src={item.image}
    className="mb-6 w-full lg:h-64 h-48 object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
  <div className="p-6 flex flex-col flex-1">
    <div>
      <div className="flex items-center gap-4 mb-4">
        <img src={item.logo} className="h-10 object-contain" />
        <div className="h-8 w-px bg-gray-300"></div>
        <div className="text-sm">
          <p className="text-gray-500">Published on:</p>
          <p className="font-medium">{item.date}</p>
        </div>
      </div>

      <h3 className="text-2xl mt-3 mb-3 line-clamp-2">
        {item.shortTitle}
      </h3>

      <p className="text-base line-clamp-3 mb-6 max-w-xl">
        {item.shortDesc}
      </p>
    </div>

    <button
      
      className="btn btn-white py-3 w-fit px-6 text-[10px] mt-auto"
    >
      READ MORE
    </button>
  </div>
</div>

            </FloatUpText>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- MEDIA DETAIL PAGE ---------------- */
const MediaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const media = mediaData.find(m => m.id === Number(id));

  return (
    <section className="bg-white pt-24 pb-24">
     <div className="max-w-[1120px] mx-auto px-0">

        {/* BACK ARROW OUTSIDE CARD */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-black text-3xl font-semiboldx flex items-center gap-3"

        >
          ←
        </button>

        <div className="rounded-2xl overflow-hidden shadow">


          {/* IMAGE */}
          <img
            src={media.image}
            className="w-full h-[420px] object-cover"
          />

          {/* CONTENT */}
          <div className="p-8">

            {/* LOGO + DATE (CARD STYLE) */}
            <div className="flex items-center gap-4 mb-4">
              <img src={media.logo} className="h-10 object-contain" />
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-sm">
                <p className="   y-500">Published on:</p>
                <p className="font-medium">{media.date}</p>
              </div>
            </div>

            {/* TITLE */}
            <p className="text-2xl    y-800 leading-snug mb-3 max-w-3xl">
              {media.shortTitle}
            </p>

            <p className="text-base    y-600 leading-relaxed mb-6 max-w-3xl">
              {media.shortDesc}
            </p>


            {/* DESCRIPTION */}
            <p className="   y-700 leading-relaxed">
              {media.desc}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};


/* ---------------- ROUTES ---------------- */
const Media = () => {
  return (
    <Routes>
      <Route path="/" element={<MediaList />} />
      <Route path="/:id" element={<MediaDetail />} />
    </Routes>
  );
};

export default Media;
