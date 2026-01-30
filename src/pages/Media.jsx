import React, { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import mediaImg from "/media/media.webp";
import mediaImg1 from "/mediaimg.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";

/* ---------------- MEDIA DATA ---------------- */
const mediaData = [
  {
    id: 1,
    image: mediaImg,
    logo: "/CNBC.webp",
    date: "March 06, 2026",
    shortTitle: "We are a forward-thinking real estate company driven by the belief that well-designed spaces shape better lives.",
    shortDesc: "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with...",
    desc: "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with modern design, sustainability, and customer satisfaction..."
  },
  {
    id: 2,
    image: mediaImg,
    logo: "/zee.webp",
    date: "March 06, 2026",
    shortTitle: "Smart urban communities designed to elevate everyday living experiences.",
    shortDesc: "Our projects integrate sustainable materials, future-ready infrastructure, and intelligent space planning to support modern lifestyles...",
    desc: "Our projects are crafted to enhance urban living by integrating smart planning..."
  },
  {
    id: 3,
    image: mediaImg,
    logo: "/CNBC.webp",
    date: "March 06, 2026",
    shortTitle: "Future-ready neighborhoods built for growth, comfort, and innovation.",
    shortDesc: "We develop thoughtfully planned communities that promote sustainability, technology integration, and superior living standards...",
    desc: "We develop spaces that prioritize lifestyle, innovation..."
  },
  {
    id: 4,
    image: mediaImg,
    logo: "/zee.webp",
    date: "March 06, 2026",
    shortTitle: "Construction excellence driven by trust, quality, and ethical practices.",
    shortDesc: "Every project follows strict quality control, advanced engineering, and customer-first execution for lasting value...",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
];




/* ---------------- MEDIA LIST PAGE ---------------- */
const MediaList = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-4 pb-24">
    <div className="max-w-[1120px] mx-auto px-0">

        <AnimatedHeading className="text-3xl text-gray-800 my-10 max-w-3xl">
          Our journey, values, and projects as recognized and featured by leading media platforms.
        </AnimatedHeading>

        {/* ================= BANNER (DO NOT REMOVE) ================= */}
        <FloatUpText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center">
            <div className="rounded-3xl overflow-hidden h-[520px]">
              <img src={mediaImg1} className="w-full h-full object-cover" />
            </div>

            <div className="bg-[#ff6a13] rounded-3xl p-16 h-[540px] flex flex-col justify-between">
              <div className="flex justify-end">
                <img src="/shreyas_logo_footer_1.webp" className="h-12 object-contain" />
              </div>

              <div>
                <h2 className="text-white text-[46px] leading-[1.1] font-light mb-8">
                  Headlines <br /> that <br /> matters.
                </h2>
                <div className="w-60 h-[2px] bg-white mb-8"></div>
                <p className="text-white/90 text-sm leading-relaxed max-w-xs">
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
              <div>
                <img src={item.image} className="rounded-2xl mb-6 w-full h-[240px] object-cover" />

                <div className="flex items-center gap-4 mb-4">
                  <img src={item.logo} className="h-10 object-contain" />
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div className="text-sm">
                    <p className="text-gray-500">Published on:</p>
                    <p className="font-medium">{item.date}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-800 leading-snug mb-3 max-w-xl">
                  {item.shortTitle}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xl">
                  {item.shortDesc}
                </p>


                <button
                  onClick={() => navigate(`/media-center/${item.id}`)}
                  className="border border-black rounded-full px-6 py-2 text-xs tracking-widest"
                >
                  READ MORE
                </button>
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
                <p className="text-gray-500">Published on:</p>
                <p className="font-medium">{media.date}</p>
              </div>
            </div>

            {/* TITLE */}
            <p className="text-2xl text-gray-800 leading-snug mb-3 max-w-3xl">
              {media.shortTitle}
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-3xl">
              {media.shortDesc}
            </p>


            {/* DESCRIPTION */}
            <p className="text-gray-700 leading-relaxed">
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
