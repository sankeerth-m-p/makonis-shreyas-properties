import nature1 from "../../../assets/Home/naturesign1.jpg";
import nature2 from "../../../assets/Home/naturesign2.png";
import nhIcon from "../../../assets/Home/NH-4.svg";import airportIcon from "../../../assets/Home/Airport.svg";import hillIcon from "../../../assets/Home/Hill.svg";
import { useState } from "react";
const images = [
  "https://images.unsplash.com/photo-1501183638710-841dd1904471",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
];
const NatureSign = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0B1F1A]">
    
      {/* BACKGROUND IMAGE (UNCHANGED) */}
      <img
        src={nature1} // assets/Home image ONLY
        alt="Nature’s Sign"
        className="absolute inset-0 w-full h-full object-cover"
      />
    
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E2A]/95 via-[#0A1E2A]/80 to-transparent z-10" />
    
    
      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-end">
    
    {/* ───────── INFO STRIP (NO OVERLAP, CENTERED ACCENTS) ───────── */}
    <div className="absolute bottom-[190px] w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center text-[#D7E2E8] text-sm">
    
          {/* ITEM 1 */}
          <div className="flex items-center gap-6">
            <div className="text-right leading-relaxed">
              <p>Located on</p>
              <p>NH-44</p>
              <p>North Bengaluru</p>
            </div>
    
            <img
              src={nhIcon}
              alt="NH-44"
              className="w-12 h-12 opacity-80"
            />
          </div>
    
          {/* ACCENT LINE (CENTERED) */}
          <div className="mx-12 flex items-center">
            <span className="w-[1px] h-[46px] bg-[#6F8C9B]/45" />
          </div>
    
          {/* ITEM 2 */}
          <div className="flex items-center gap-6">
            <div className="leading-relaxed">
              <p>Just</p>
              <p>20 minutes</p>
              <p>from Airport</p>
            </div>
    
            <img
              src={airportIcon}
              alt="Airport"
              className="w-12 h-12 opacity-80"
            />
          </div>
    
          {/* ACCENT LINE (CENTERED) */}
          <div className="mx-12 flex items-center">
            <span className="w-[1px] h-[46px] bg-[#6F8C9B]/45" />
          </div>
    
          {/* ITEM 3 */}
          <div className="flex items-center gap-6">
            <div className="leading-relaxed">
              <p>Very close</p>
              <p>proximity from</p>
              <p>Nandi Hills</p>
            </div>
    
            <img
              src={hillIcon}
              alt="Hills"
              className="w-12 h-12 opacity-80"
            />
          </div>
    
        </div>
      </div>
    </div>
    
    
    
        {/* ───────── BOTTOM DARK BAND (EXACT ALIGNMENT) ───────── */}
        <div className="bg-[#15272f] py-6">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-10 text-[#D7E2E8]">
    
            {/* LEFT – LOGO */}
           {/* LEFT – LOGO IMAGE */}
    <div className="min-w-[180px] flex items-center">
      <img
        src={nature2}
        alt="Nature's Sign Logo"
        className="w-[160px] object-contain"
      />
    </div>
    
    
            {/* CENTER – TEXT */}
            <div className="flex-1 max-w-md">
              <h3 className="text-[18px] leading-snug font-medium">
                Nature’s sign, <br />
                Where luxury and nature flow <br />
                in perfect harmony.
              </h3>
            </div>
    {/* RIGHT – IMAGE SLIDER (VISIBLE FIXED) */}
    <div className="relative z-20 w-[360px] flex items-center">
    
      {/* LEFT ARROW */}
      <button
        onClick={() => setIndex(prev => Math.max(prev - 1, 0))}
      >
        ‹
      </button>
    
      {/* VIEWPORT */}
      <div className="w-[320px] overflow-hidden mx-auto">
        <div
          className="flex gap-3 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 110}px)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-[100px] h-[70px] object-cover shrink-0"
              alt={`slide-${i}`}
            />
          ))}
        </div>
      </div>
    
      {/* RIGHT ARROW */}
      <button
        onClick={() => setIndex(prev => Math.min(prev + 1, images.length - 3))}
        className="absolute -right-8 z-30 bg-[#0A1E2A]/90 text-[#D7E2E8] w-9 h-9 rounded-full flex items-center justify-center"
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
