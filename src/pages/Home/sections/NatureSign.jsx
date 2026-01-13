import nature1 from "../../../assets/Home/naturesign1.jpg";
import nature2 from "../../../assets/Home/naturesign2.png";
import nhIcon from "../../../assets/Home/NH-4.svg";
import airportIcon from "../../../assets/Home/Airport.svg";
import hillIcon from "../../../assets/Home/Hill.svg";
import nature7 from "../../../assets/Home/naturesign_2.webp";
import nature6 from "../../../assets/Home/naturesign_3.webp";
import nature3 from "../../../assets/Home/naturesign_4.webp";
import nature4 from "../../../assets/Home/naturesign_5.webp";
import nature5 from "../../../assets/Home/naturesign_6.webp";
import { useState } from "react";

const images = [
  nature7,
  nature5,
  nature4,
  nature6,
  nature3,
];

const NatureSign = () => {
  const [index, setIndex] = useState(0);
  const [bgImage, setBgImage] = useState(nature1);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0B1F1A]">

      {/* BACKGROUND IMAGE (DYNAMIC) */}
      <img
        src={bgImage}
        alt="Nature’s Sign"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E2A]/95 via-[#0A1E2A]/80 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-end">

        {/* INFO STRIP */}
        <div className="absolute bottom-[190px] w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center text-[#D7E2E8] text-sm">

              <div className="flex items-center gap-6">
                <div className="text-right leading-relaxed">
                  <p>Located on</p>
                  <p>NH-44</p>
                  <p>North Bengaluru</p>
                </div>
                <img src={nhIcon} className="w-12 h-12 opacity-80" />
              </div>

              <div className="mx-12 flex items-center">
                <span className="w-[1px] h-[46px] bg-[#6F8C9B]/45" />
              </div>

              <div className="flex items-center gap-6">
                <div className="leading-relaxed">
                  <p>Just</p>
                  <p>20 minutes</p>
                  <p>from Airport</p>
                </div>
                <img src={airportIcon} className="w-12 h-12 opacity-80" />
              </div>

              <div className="mx-12 flex items-center">
                <span className="w-[1px] h-[46px] bg-[#6F8C9B]/45" />
              </div>

              <div className="flex items-center gap-6">
                <div className="leading-relaxed">
                  <p>Very close</p>
                  <p>proximity from</p>
                  <p>Nandi Hills</p>
                </div>
                <img src={hillIcon} className="w-12 h-12 opacity-80" />
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAND */}
        <div className="bg-[#15272f] py-6">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-10 text-[#D7E2E8]">

            <div className="min-w-[180px]">
              <img src={nature2} className="w-[160px]" />
            </div>

            <div className="flex-1 max-w-md">
              <h3 className="text-[18px] leading-snug font-medium">
                Nature’s sign, <br />
                Where luxury and nature flow <br />
                in perfect harmony.
              </h3>
            </div>

            {/* SLIDER */}
            <div className="relative w-[360px] flex items-center">

              <button onClick={() => setIndex(prev => Math.max(prev - 1, 0))}>‹</button>

              <div className="w-[320px] overflow-hidden mx-auto">
                <div
                  className="flex gap-3 transition-transform duration-500"
                  style={{ transform: `translateX(-${index * 110}px)` }}
                >
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-[100px] h-[70px] object-cover shrink-0 cursor-pointer hover:scale-105 transition"
                      onClick={() => {
                        setBgImage(img);
                        setIndex(i);
                      }}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIndex(prev => Math.min(prev + 1, images.length - 3))}
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
