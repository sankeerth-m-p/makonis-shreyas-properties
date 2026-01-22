import { useEffect, useState, useRef } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";

const SignatureSpaces = () => {
  // ✅ DESKTOP SCROLL TRAP
  const desktopScrollRef = useRef(null);

  // ✅ MOBILE INFINITE SLIDER (transform-based like BespokeImageHover)
  const [mobileActive, setMobileActive] = useState(1); // start at 1 (real first)
  const [noAnim, setNoAnim] = useState(false);
  const intervalRef = useRef(null);
  const touchRef = useRef(false);
  const startXRef = useRef(0);
  const swipeThreshold = 50;

  const items = [
    {
      id: "01",
      location: "Kondapur, Hyderabad",
      title: "Modern Profound Tech Park",
      image: "/Home/profoundInfra.webp",
    },
    {
      id: "02",
      location: "Marathahalli, Bangalore",
      title: "Royal Enclave",
      image: "/Home/royalEnclave.webp",
    },
    {
      id: "03",
      location: "Vignana Nagar, Bangalore",
      title: "Paradise",
      image: "/Home/SandsParadiseVignanNagar.webp",
    },
    {
      id: "04",
      location: "Marathahalli, Bangalore",
      title: "Chourasia Shreyas",
      image: "/Home/ChourasiaShreyasMarathahalli.webp",
    },
    {
      id: "05",
      location: "Devanahalli, Bangalore",
      title: "Nature's Sign",
      image: "/Home/naturesign.webp",
    },
    {
      id: "06",
      location: "Marathahalli, Bangalore",
      title: "Modern View Apartment",
      image: "/Home/ModernView.webp",
    },
  ];

  // ✅ clone slides for infinite loop
  const mobileSlides = [
    items[items.length - 1], // clone last
    ...items, // real slides
    items[0], // clone first
  ];

  // ✅ DESKTOP: trap wheel scroll only inside section
  useEffect(() => {
    const el = desktopScrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const delta = e.deltaY;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      // allow parent scroll if at edges
      if (delta < 0 && atTop) return;
      if (delta > 0 && atBottom) return;

      // otherwise trap scroll
      e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ✅ MOBILE: infinite jump logic (same pattern as BespokeImageHover)
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    // reached clone last -> jump to real last
    if (mobileActive === 0) {
      setTimeout(() => {
        setNoAnim(true);
        setMobileActive(mobileSlides.length - 2); // real last index
      }, 700);
    }

    // reached clone first -> jump to real first
    if (mobileActive === mobileSlides.length - 1) {
      setTimeout(() => {
        setNoAnim(true);
        setMobileActive(1); // real first index
      }, 700);
    }

    // re-enable animation after snap
    if (noAnim) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoAnim(false));
      });
    }
  }, [mobileActive, noAnim, mobileSlides.length]);

  // ✅ MOBILE: autoplay
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    intervalRef.current = setInterval(() => {
      if (touchRef.current) return;
      setMobileActive((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // ✅ MOBILE: keep mobileActive always in safe bounds
  const safeSetMobileActive = (updater) => {
    setMobileActive((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      // allow 0..last (includes clones)
      return Math.max(0, Math.min(next, mobileSlides.length - 1));
    });
  };

  return (
    <section className="relative w-full bg-black z-0">
      {/* ✅ MOBILE ONLY: Infinite loop slider (transform-based) */}
<div className="md:hidden relative w-full overflow-hidden">
     <div
          className="w-full overflow-hidden  "
          onTouchStart={(e) => {
            touchRef.current = true;
            clearInterval(intervalRef.current);
            startXRef.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startXRef.current - endX;

            if (Math.abs(diff) > swipeThreshold) {
              if (diff > 0) {
                // swipe left => next
                safeSetMobileActive((prev) => prev + 1);
              } else {
                // swipe right => prev
                safeSetMobileActive((prev) => prev - 1);
              }
            }

            setTimeout(() => {
              touchRef.current = false;
            }, 1200);
          }}
        >
          <div
            className={`flex ${
              noAnim ? "" : "transition-transform  duration-700 ease-in-out"
            }`}
            style={{
transform: `translateX(-${mobileActive * 92}%)`,
            }}
          >
            {mobileSlides.map((item, i) => {
              const leftBg = i % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2";

              return (
<div
  key={i}
  className="w-[92%] shrink-0 h-[80vh] flex flex-col"
>
                  {/* IMAGE */}
                  <div className="w-full h-[50%]">
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
                      px-6 py-5 flex flex-col justify-between relative overflow-hidden
                    `}
                  >
                    {/* faded circle */}
                    <div className="absolute -left-24 top-16 w-[280px] h-[280px] rounded-full bg-white/10" />

                    <h3 className="text-base font-medium leading-tight max-w-[260px] relative z-10">
                      Signature spaces {"\n"}
                      crafted for {"\n"}
                      modern living.
                    </h3>

                    <div className="flex items-end gap-6 relative z-10">
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
                        <h3 className="text-lg mt-2 whitespace-pre-line leading-snug">
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
        

    
      </div>

      {/* ✅ DESKTOP ONLY: Nested vertical snap inside Signature section */}
      <div
        ref={desktopScrollRef}
        className="
          hidden md:block
          h-[calc(100vh-5rem)]
          overflow-y-scroll
          snap-y snap-mandatory
          scrollbar-hide
        "
      >
        {items.map((item, i) => {
          const leftBg = i % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2";

          return (
            <div
              key={i}
              className="
                relative
                h-[calc(100vh-5rem)]
                w-full
                snap-start snap-always
              "
              style={{ zIndex: i + 1 }}
            >
              <div className="sticky top-0 h-[calc(100vh-5rem)] w-full flex">
                {/* LEFT PANEL */}
                <div
                  className={`w-1/2 ${leftBg} text-white pl-48 py-24 flex flex-col justify-between`}
                >
                  <AnimatedHeading
                    as="h2"
                    delay={0}
                    staggerDelay={0.15}
                    className="text-[34px] font-medium leading-tight max-w-sm"
                  >
                    Signature spaces crafted for modern living.
                  </AnimatedHeading>

                  <div>
                    <FloatUpText>
                      <div
                        className="text-[110px] font-roboto mb-1"
                        style={{
                          WebkitTextStroke: "1px #fff",
                          color: "transparent",
                        }}
                      >
                        {item.id}
                      </div>

                      <p className="text-xs tracking-widest">{item.location}</p>

                      <h3 className="md:text-3xl mt-4 whitespace-pre-line">
                        {item.title}
                      </h3>
                    </FloatUpText>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-1/2 h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700 ease-in-out
                      hover:scale-105
                    "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default SignatureSpaces;
