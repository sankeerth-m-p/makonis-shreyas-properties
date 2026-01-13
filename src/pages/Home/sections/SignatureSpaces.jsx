import { useEffect, useState } from "react";
import AnimatedHeading from "../../../components/animatedHeading";

const SignatureSpaces = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const items = [
    {
      id: "01",
      location: "Kondapur, Hyderabad",
      title: "Modern Profound\nTech Park",
      image: "src/assets/Home/profoundInfra.webp",
    },
    {
      id: "02",
      location: "Whitefield, Bengaluru",
      title: "Urban Crest\nBusiness Hub",
      image: "src/assets/Home/profoundInfra.webp",
    },
    {
      id: "03",
      location: "Gachibowli, Hyderabad",
      title: "Elevate\nCorporate Tower",
      image: "src/assets/Home/profoundInfra.webp",
    },
    {
      id: "04",
      location: "Hinjewadi, Pune",
      title: "Axis\nTech Square",
      image: "src/assets/Home/profoundInfra.webp",
    },
  ];

  return (
  <section className="relative w-full bg-black">

  {/* ✅ MOBILE ONLY: Horizontal Scroll */}
  <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory">
    <div className="flex  w-max">
      {items.map((item, i) => {
        const leftBg = i % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2";

        return (
          <div
            key={i}
            className="
              w-[95vw] max-w-[360px] h-screen flex-shrink-0
              snap-center
              flex flex-col
            "
          >
            {/* IMAGE */}
            <div className="w-full h-[45vh]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ORANGE CARD */}
            <div
              className={`
                ${leftBg} flex-1 text-white
                px-6 py-10 flex flex-col justify-between relative overflow-hidden
              `}
            >
              {/* faded circle */}
              <div className="absolute -left-24 top-16 w-[280px] h-[280px] rounded-full bg-white/10" />

              <h2 className="text-[26px] font-medium leading-tight max-w-[260px] relative z-10">
                Signature spaces <br />
                crafted for <br />
                modern living.
              </h2>

              <div className="mt-10 flex items-end gap-6 relative z-10">
                <div
                  className="text-[88px] leading-none"
                  style={{
                    WebkitTextStroke: "1px #fff",
                    color: "transparent",
                  }}
                >
                  {item.id}
                </div>

                <div className="pb-2">
                  <p className="text-[11px] tracking-widest uppercase opacity-80">
                    {item.location}
                  </p>
                  <h3 className="text-[22px] mt-2 whitespace-pre-line leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* ✅ DESKTOP ONLY: Your existing sticky scroll */}
  <div className="  hidden md:block relative h-[500vh]">
    {items.map((item, i) => {
      const start = i * 120;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / 120));
      const leftBg = i % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2";

      return (
        <div
          key={i}
          className="sticky top-0 h-screen w-full flex"
          style={{
            zIndex: i + 1,
            transform: `translateY(${(1 - progress) * 100}%)`,
          }}
        >
          {/* LEFT PANEL */}
          <div
            className={`w-1/2   ${leftBg} text-white  pl-48 py-24 flex flex-col justify-between `}
          >
            <AnimatedHeading
              as="h2"
              delay={0}
              staggerDelay={0.15}
              className="text-[34px] font-medium leading-tight max-w-sm"
            >
              Signature spaces
              crafted for
              modern living.
            </AnimatedHeading>

            <div>
              <div
                className="text-[110px] mb-4"
                style={{
                  WebkitTextStroke: "1px #fff",
                  color: "transparent",
                }}
              >
                {item.id}
              </div>

              <p className="text-[11px] tracking-widest uppercase opacity-80">
                {item.location}
              </p>

              <h3 className="text-[20px] mt-4 whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
    })}
  </div>
</section>
  );
};

export default SignatureSpaces;
