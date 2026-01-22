import { useEffect, useState, useRef } from "react";
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";

const SignatureSpaces = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 (first real item)
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Create infinite loop array: [last, ...items, first]
  const infiniteItems = [items[items.length - 1], ...items, items[0]];

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle infinite loop transition
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const slideWidth = container.offsetWidth;

    // Scroll to current slide with smooth transition
    setIsTransitioning(true);
    container.scrollTo({
      left: currentSlide * slideWidth,
      behavior: "smooth",
    });

    // Check if we're at clone positions and jump instantly
    const checkPosition = setTimeout(() => {
      if (currentSlide === 0) {
        // At last item clone, jump to real last item
        setIsTransitioning(false);
        setCurrentSlide(items.length);
        container.scrollTo({
          left: items.length * slideWidth,
          behavior: "auto",
        });
      } else if (currentSlide === infiniteItems.length - 1) {
        // At first item clone, jump to real first item
        setIsTransitioning(false);
        setCurrentSlide(1);
        container.scrollTo({
          left: slideWidth,
          behavior: "auto",
        });
      }
    }, 500); // Wait for smooth scroll to complete

    return () => clearTimeout(checkPosition);
  }, [currentSlide, items.length, infiniteItems.length]);

  // Handle manual scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current || !isTransitioning) return;

    const container = scrollContainerRef.current;
    const slideWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const newSlide = Math.round(scrollLeft / slideWidth);

    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
    }
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section className="relative w-full bg-black z-0">
      {/* ✅ MOBILE ONLY: Infinite Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="md:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex w-max">
          {infiniteItems.map((item, i) => {
            const leftBg = i % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2";

            return (
              <div
                key={i}
                className="
                  w-[90vw] md:w-[95vw] max-w-[360px] md:h-screen h-[80vh] flex-shrink-0
                  snap-center
                  flex flex-col
                "
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

                  <AnimatedHeading className="text-base md:text-[26px] font-medium leading-tight max-w-[260px] relative z-10">
                    Signature spaces {"\n"}
                    crafted for {"\n"}
                    modern living.
                  </AnimatedHeading>

                  <div className="md:mt-5 flex items-end gap-6 relative z-10">
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
                      <h3 className="text-lg md:text-[22px] mt-2 whitespace-pre-line leading-snug">
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
      <div className="hidden md:block relative h-[calc((100vh-5rem)*6)]">
        {items.map((item, i) => {
          const start = i * 120;
          const progress = Math.max(0, Math.min(1, (scrollY - start) / 120));
          const leftBg = i % 2 === 0 ? "bg-ORANGE" : "bg-ORANGE2";

          return (
            <div
              key={i}
              className="sticky top-20 h-[calc(100vh-5rem)] w-full flex"
              style={{
                zIndex: i + 1,
                transform: `translateY(${(1 - progress) * 100}%)`,
              }}
            >
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
                  className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700"
                />
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