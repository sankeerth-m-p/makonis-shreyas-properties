import nature1 from "/Home/naturesign1.jpg";
import nature2 from "/Home/naturesign2.png";
import nhIcon from "/Home/NH-4.svg";
import airportIcon from "/Home/Airport.svg";
import hillIcon from "/Home/Hill.svg";
import nature7 from "/Home/naturesign_2.webp";
import nature6 from "/Home/naturesign_3.webp";
import nature3 from "/Home/naturesign_4.webp";
import nature4 from "/Home/naturesign_5.webp";
import nature5 from "/Home/naturesign_6.webp";
import { useState,useEffect } from "react";
import FloatUpText from "../../../components/floatUpText";
import AnimatedHeading from "../../../components/animatedHeading";

const images = [
  nature7,
  nature5,
  nature4,
  nature6,
  nature3,
];


const NatureSign = () => {
  const visibleCount = 3;
  const thumbWidth = 110;

  const [index, setIndex] = useState(0);
  const [bgImage, setBgImage] = useState(nature1);
const [currentBg, setCurrentBg] = useState(bgImage);
const [nextBg, setNextBg] = useState(null);
const [isFading, setIsFading] = useState(false);

useEffect(() => {
  if (!bgImage || bgImage === currentBg) return;

  setNextBg(bgImage);
  setIsFading(true);

  const timeout = setTimeout(() => {
    setCurrentBg(bgImage);
    setNextBg(null);
    setIsFading(false);
  }, 700); // must match duration

  return () => clearTimeout(timeout);
}, [bgImage, currentBg]);

useEffect(() => {
  // if (window.innerWidth >= 768) return; // desktop = NO auto scroll

  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);useEffect(() => {
  setBgImage(images[index]);
}, [index]);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setOrigin({ x: 50, y: 50 }); // reset to center
  };

  return (
<section className="relative  w-full h-[60vh] md:h-screen overflow-hidden bg-[#0B1F1A]">
      {/* BACKGROUND IMAGE */}
       <img
    key={index}
    src={bgImage}
    alt=""
    className="absolute inset-0 w-full h-full object-cover animate-fadeIn  z-0"
  />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E2A]/100 via-[#0A1E2A]/10 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-end">
        {/* INFO STRIP */}{/* MOBILE DOT INDICATOR */}
<div className="md:hidden absolute top-[100px] w-full flex justify-center gap-2 z-30">
  {images.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`w-2.5 h-2.5 rounded-full transition ${
        i === index ? "bg-white" : "bg-white/40"
      }`}
    />
  ))}
</div>

        {/* INFO STRIP */}
<div className="   md:absolute md:bottom-[150px]  w-full px-4 md:px-0">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-row       items-center justify-between gap-4 md:gap-0 text-[#D7E2E8] text-xs md:text-sm">

      {/* ITEM */}
      <div className="flex    items-center gap-1 md:gap-3">
        <img src={nhIcon} className=" md:block hidden w-8 h-7 md:w-12 md:h-8 opacity-80" />
        <div className="leading-tight text-xs md:text-base text-left    ">
          <FloatUpText>Located on</FloatUpText>
          <FloatUpText>NH-44 North Bengaluru</FloatUpText>
        </div>        <img src={nhIcon} className="md:hidden w-8 h-8 md:w-12 md:h-12 opacity-80" />

      </div>

      <span className="block md:mx-12 w-[1px] h-8 md:h-[46px] bg-[#6F8C9B]/45" />

      <div className="flex   items-center gap-1 md:gap-3">
        <img src={airportIcon} className=" md:block hidden w-8 h-8 md:w-12 md:h-12 opacity-80" />
        <div className="leading-tight text-xs md:text-base text-left    ">
          <FloatUpText>Just</FloatUpText>
          <FloatUpText>20 minutes from Airport</FloatUpText>
        </div>
        <img src={airportIcon} className="md:hidden w-8 h-8 md:w-12 md:h-12 opacity-80" />
      </div>

      <span className="block md:mx-12 w-[1px] h-8 md:h-[46px] bg-[#6F8C9B]/45" />

      <div className="flex   items-center gap-1 md:gap-3">
        <img src={hillIcon} className=" md:block hidden w-8 h-8 md:w-12 md:h-12 opacity-80" />
        <div className="leading-tight text-xs md:text-base text-left    ">
          <FloatUpText>Very close</FloatUpText>
          <FloatUpText>proximity from Nandi Hills</FloatUpText>
        </div>
        <img src={hillIcon} className="md:hidden w-8 h-8 md:w-12 md:h-12 opacity-80" />
      </div>

    </div>
  </div>
</div>


        {/* BOTTOM BAND */}
<div className="] py-4 md:py-6 ">
  <div className="max-w-6xl  mx-auto px-4 md:px-0 flex flex-row  items-center md:justify-between gap-4 md:gap-10 text-[#D7E2E8]">

    {/* LOGO */}
    <img src={nature2} className="w-[130px] md:w-[160px]" />

    {/* TEXT */}
    <AnimatedHeading className="text-sm md:text-2xl text-left leading-snug font-light max-w-xs md:max-w-md">
      Nature’s sign, where luxury and nature flow in perfect harmony.
    </AnimatedHeading>

   
            {/* SLIDER */}
           {/* SLIDER */}
<div className="relative w-[360px] hidden md:flex items-center">

  {/* LEFT */}
  <button
    onClick={() =>
      setIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    className="absolute -left-8 bg-[#0A1E2A]/90 w-9 h-9 rounded-full"
  >
    ‹
  </button>

  <div className="w-[320px] overflow-hidden mx-auto">
    <div
      className="flex gap-3 transition-transform duration-500"
      style={{
        transform: `translateX(-${index * thumbWidth}px)`,
      }}
    >
      {[...images, ...images].map((img, i) => {
        const realIndex = i % images.length;

        return (
          <img
            key={i}
            src={img}
            className="w-[100px] h-[70px] object-cover shrink-0 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setBgImage(img);
              setIndex(realIndex);
            }}
          />
        );
      })}
    </div>
  </div>

  {/* RIGHT */}
  <button
    onClick={() =>
      setIndex((prev) => (prev + 1) % images.length)
    }
    className="absolute -right-8 bg-[#0A1E2A]/90 w-9 h-9 rounded-full"
  >
    ›
  </button>

</div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default NatureSign;
