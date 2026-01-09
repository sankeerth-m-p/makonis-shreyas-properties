import React, { useEffect, useState } from "react";
import RevealImageAnimation from "../components/RevealImageAnimation";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";
import expertImg from "../assets/Home/expert.jpg";
import promiseImg from "../assets/home/promisesection.jpg";
const heroImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d93",
];

// duplicate first image for seamless looping
const slides = [...heroImages, heroImages[0]];
const bespokeImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    label: "PLOTTED DEVELOPMENT",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    label: "APARTMENTS",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    label: "VILLAS",
  },
];

function BespokeImageHover() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-[70%] h-[380px] flex gap-4">
      {bespokeImages.map((img, index) => (
        <div
          key={index}
          onMouseEnter={() => setActive(index)}
          className={`
            relative overflow-hidden rounded-xl transition-all duration-500 ease-in-out
            ${active === index ? "w-[50%]" : "w-[25%]"}
          `}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
          />

          {active === index && (
            <span className="absolute bottom-4 left-4 text-white text-[11px] tracking-widest">
              {img.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}


const Home = () => {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 7000); // slow premium timing

    return () => clearInterval(interval);
  }, []);

  // handle seamless reset
  const handleTransitionEnd = () => {
    // if we reached the duplicated slide
    if (index === heroImages.length) {
      setEnableTransition(false); // disable animation
      setIndex(0); // jump instantly to first slide
    }
  };

  // re-enable transition after jump
  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        setEnableTransition(true);
      });
    }
  }, [enableTransition]);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* HERO SLIDER */}
        <div
          className={`absolute inset-0 flex ${enableTransition
              ? "transition-transform duration-[1200ms] ease-in-out"
              : ""
            }`}
          style={{ transform: `translateX(-${index * 100}vw)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`hero-${i}`}
              className="w-screen h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* ORANGE CARD */}
        <div className="absolute bottom-[-90px] left-0 w-full z-10 animate-cardUp">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-ORANGE text-white px-14 py-16 w-full md:w-[65%]">

              <AnimatedHeading
                as="h1"
                delay={0}
                staggerDelay={0.15} className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                WHERE EVERY LUXURY
                SQUARE FOOT SPEAKS
                QUALITY.
              </AnimatedHeading>


              <p className="text-base md:text-lg text-orange-100 max-w-lg">
                Enter a world of refined workspaces where elegance meets
                extraordinary service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THOUGHTFUL SECTION (UNCHANGED) ================= */}
      <section className="relative bg-white pt-56 pb-32 overflow-hidden">

        <div className="absolute -left-56 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-[40px] border-[#EEF2F3]"></div>
        <div className="absolute -right-56 top-[140px] w-[520px] h-[520px] rounded-full border-[40px] border-[#EEF2F3]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            <div className="flex justify-end pr-2">
              {/* <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                alt="Thoughtful Spaces"
                className="w-[420px] h-[520px] object-cover"
              /> */}
              <RevealImageAnimation
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                className="w-[420px] h-[520px] object-cover "
              />
            </div>

            <div className="flex flex-col justify-between h-[520px]">
              <div>

                <AnimatedHeading
                as="h2"
                delay={0}
                staggerDelay={0.15} className="text-[38px] font-semibold text-gray-900 leading-[1.25] mb-6">
                  Thoughtfully developing 
                  spaces that reflect city’s 
                  progress and promise
                </AnimatedHeading>

                <FloatUpText delay={0}>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-md">
                    Crafting meaningful experiences where <br />
                    every detail is carefully envisioned.
                  </p>
                </FloatUpText>
                <div className="flex gap-4 mb-6">
                  <span className="text-orange-600 text-[18px] mt-1">👁️</span>
                  <div>
                    <FloatUpText delay={0}>
                      <h4 className="text-gray-900 font-semibold text-[15px] mb-1">
                        Our vision
                      </h4>

                      <p className="text-gray-600 text-[13px] leading-relaxed max-w-md">
                        To create thoughtfully planned spaces that elevate everyday
                        living, blending design, functionality, and sustainability
                        to shape enduring communities for the future.
                      </p>
                    </FloatUpText>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-orange-600 text-[18px] mt-1">🎯</span>
                  <div>
                    <FloatUpText delay={0}>
                      <h4 className="text-gray-900 font-semibold text-[15px] mb-1">
                        Our mission
                      </h4>
                      <p className="text-gray-600 text-[13px] leading-relaxed max-w-md">
                        To develop responsibly by integrating sustainable practices,
                        respecting the environment, and creating communities that
                        support healthier, balanced lifestyles.
                      </p>
                    </FloatUpText>
                  </div>
                </div>
              </div>

              <button className="mt-10 w-fit bg-ORANGE text-white px-10 py-3 rounded-full text-[12px] tracking-widest hover:bg-orange-700 transition">
                VIEW DETAILS
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ================= BESPOKE SERVICES (VIDEO MATCHED EXACT) ================= */}
      <section className="bg-[#EEF2F3] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl px-10 py-12 flex items-center gap-6">

            {/* LEFT CONTENT */}
            <div className="w-[30%]">
              <AnimatedHeading
                as="h3"
                delay={0}
                staggerDelay={0.15} className="text-[28px] font-semibold text-gray-900 leading-snug mb-6">
                Bespoke
                services for 
                elevated living
             </AnimatedHeading>
              <span className="text-[11px] tracking-widest text-gray-700">
                VIEW PROJECTS
              </span>
            </div>

            {/* RIGHT IMAGE INTERACTION */}
            <BespokeImageHover />

          </div>
        </div>
      </section>


      {/* ================= SIGNATURE SPACES (WORKING VERSION) ================= */}
      <section className="relative w-full bg-black">

        {[
          {
            id: "01",
            location: "Kondapur, Hyderabad",
            title: "Modern Profound\nTech Park",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          },
          {
            id: "02",
            location: "Whitefield, Bengaluru",
            title: "Urban Crest\nBusiness Hub",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
          },
          {
            id: "03",
            location: "Gachibowli, Hyderabad",
            title: "Elevate\nCorporate Tower",
            image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
          },
          {
            id: "04",
            location: "Hinjewadi, Pune",
            title: "Axis\nTech Square",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
          },
        ].map((item, index) => (
          <div key={index} className="h-[200vh] relative">

            {/* STICKY PAGE */}
            <div className="sticky top-0 h-screen w-full flex">

              {/* LEFT PANEL */}
              <div className="w-1/2 bg-[#FF6A13] text-white px-24 py-24 flex flex-col justify-between">

                <AnimatedHeading
                as="h2"
                delay={0}
                staggerDelay={0.15}className="text-[34px] font-medium leading-tight max-w-sm">
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
          </div>
        ))}

      </section>

      {/* ================= STORY BEHIND THE BRAND (EXACT FRAME) ================= */}
      <section className="w-full bg-[#F4EFE5] py-32">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LEFT TEXT */}
          <div className="max-w-sm">
             <AnimatedHeading
                as="h1"
                delay={0}
                staggerDelay={0.15} className="text-[34px] font-semibold text-[#111] leading-tight">
              The Story 
              Behind the Brand
             </AnimatedHeading>
          </div>

          {/* IMAGE FRAMES */}
          <div className="relative w-[520px] h-[420px] flex items-center justify-center gap-10">

            {/* SVG DEFINITIONS */}
            <svg width="0" height="0" viewBox="0 0 100 400">
              <defs>
                {/* LEFT FRAME */}
                <clipPath id="exactLeft">
                  <path d="
              M60 0
              C20 40 20 120 20 200
              C20 280 20 360 60 400
              L100 360
              L100 40
              Z
            " />
                </clipPath>

                {/* RIGHT FRAME */}
                <clipPath id="exactRight">
                  <path d="
              M40 0
              C80 40 80 120 80 200
              C80 280 80 360 40 400
              L0 360
              L0 40
              Z
            " />
                </clipPath>
              </defs>
            </svg>

            {/* LEFT IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Story Left"
              className="w-[220px] h-full object-cover"
              style={{ clipPath: "url(#exactLeft)" }}
            />

            {/* RIGHT IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
              alt="Story Right"
              className="w-[220px] h-full object-cover"
              style={{ clipPath: "url(#exactRight)" }}
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-xs text-right">
            <p className="text-[15px] text-[#2A2A2A] leading-relaxed mb-6">
              Our brand tells a story of <br />
              commitment, trust, and progress.
            </p>

            <button className="text-[11px] tracking-widest uppercase text-[#111] border-b border-[#111] pb-1">
              Know more
            </button>
          </div>

        </div>
      </section>
      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      {/* ================= WHAT MAKES US DIFFERENT (EXACT MATCH) ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team discussion"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* HEADING */}
             <AnimatedHeading
                as="h2"
                delay={0}
                staggerDelay={0.15}className="text-[34px] font-semibold text-[#1A1A1A] leading-tight mb-4">
              What makes us different 
              lies in how we blend vision 
              with execution.
             </AnimatedHeading>

            {/* SUBTEXT */}
            <FloatUpText delay={0}>
              <p className="text-[14px] text-gray-600 mb-12 max-w-md">
                What makes every project distinctly ours,
                from vision and design to lasting value.
              </p>
            </FloatUpText>

            {/* ITEM 1 */}
            <div className="flex gap-5 pb-6 mb-6 border-b border-gray-300">
              <div className="w-10 h-10 bg-[#FF6A13] flex items-center justify-center">
                <span className="text-white text-sm">◆</span>
              </div>
              <div>
                <FloatUpText delay={0}>
                  <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                    Values Driven Development
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Every project is planned with long-term value in mind
                    focusing on quality, sustainability, and future appreciation.
                  </p>
                </FloatUpText>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-5 pb-6 mb-6 border-b border-gray-300">
              <div className="w-10 h-10 bg-[#FF6A13] flex items-center justify-center">
                <span className="text-white text-sm">◆</span>
              </div>
              <div>
                <FloatUpText delay={0}>
                  <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                    Thoughtfully Planned Spaces
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    From layouts to amenities, each development is designed
                    to enhance lifestyle, comfort, and functionality.
                  </p>
                </FloatUpText>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-[#FF6A13] flex items-center justify-center">
                <span className="text-white text-sm">◆</span>
              </div>
              <div>
                <FloatUpText delay={0}>
                  <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                    End to End Customer Care
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Support that goes beyond possession assisting clients
                    from site visits to handover and after-sales service.
                  </p>
                </FloatUpText>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ================= WHAT PEOPLE SAYS (EXACT MATCH) ================= */}
      <section className="relative bg-[#F4EFE5] overflow-hidden">

        {/* TOP WAVE */}
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full h-[160px] absolute top-0 left-0"
        >
          <path
            d="
        M0,0
        H1440
        V80
        C1080,160 360,160 0,80
        Z
      "
            fill="#ffffff"
          />
        </svg>

        {/* CENTER HEADING */}
        <div className="relative z-10 pt-20 text-center">
          <p className="text-[16px] text-[#1A1A1A] leading-tight">
            What <br /> people <br /> says
          </p>
        </div>

        {/* DECORATIVE CIRCLES */}
        <div className="absolute -left-40 top-48 w-[320px] h-[320px] rounded-full bg-white/40"></div>
        <div className="absolute -right-40 bottom-24 w-[320px] h-[320px] rounded-full bg-white/40"></div>

        {/* TESTIMONIAL CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-36 text-center">

          {/* QUOTE */}
          <p className="text-[22px] text-[#1A1A1A] leading-relaxed mb-14">
            <span className="text-[48px] align-top">“</span>
            From the very first meeting to project handover,
            the experience was smooth and transparent.
            <span className="text-[48px] align-bottom">”</span>
          </p>

          {/* AUTHOR */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Neetu sargam"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-[14px] font-semibold text-[#1A1A1A]">
              Neetu sargam
            </p>
            <p className="text-[12px] text-gray-600">
              Founder, KPCC International
            </p>
          </div>

        </div>
      </section>

      {/* ================= NATURE'S SIGN SECTION (FINAL EXACT) ================= */}
      <section className="relative w-full h-screen overflow-hidden bg-[#0B1F1A]">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Nature Community"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1A]/95 via-[#0B1F1A]/80 to-[#0B1F1A]/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-14 text-white">

          {/* INFO ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12 text-center text-[12px] tracking-wide">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center gap-3 opacity-90">
              <span className="w-[1px] h-[28px] bg-white/30"></span>
              <span className="text-xl">📍</span>
              <p>
                Located on <br />
                NH-44 <br />
                North Bengaluru
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center gap-3 opacity-90">
              <span className="w-[1px] h-[28px] bg-white/30"></span>
              <span className="text-xl">✈️</span>
              <p>
                Just <br />
                20 minutes <br />
                from Airport
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center gap-3 opacity-90">
              <span className="w-[1px] h-[28px] bg-white/30"></span>
              <span className="text-xl">⛰️</span>
              <p>
                Very close <br />
                proximity from <br />
                Nandi Hills
              </p>
            </div>

          </div>

          {/* BOTTOM ROW */}
          <div className="flex justify-between items-end gap-10">

            {/* LEFT BRAND */}
            <div className="max-w-md">
              <p className="text-[14px] text-green-400 mb-2 lowercase">
                nature’s sign
              </p>
              <p className="text-[10px] tracking-widest uppercase mb-3">
                by shreyas
              </p>

              <h3 className="text-[20px] leading-snug font-medium">
                Nature’s sign, <br />
                Where luxury and nature flow <br />
                in perfect harmony.
              </h3>
            </div>

            {/* RIGHT THUMBNAILS */}
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                className="w-[90px] h-[60px] object-cover"
                alt="thumb1"
              />
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                className="w-[90px] h-[60px] object-cover"
                alt="thumb2"
              />
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
                className="w-[90px] h-[60px] object-cover"
                alt="thumb3"
              />
            </div>

          </div>

        </div>
      </section>
{/* ================= SPEAK WITH OUR EXPERTS ================= */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-center gap-12">

      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-3 w-[260px]">
        <span className="text-2xl">🎧</span>

        <p className="text-[14px] text-gray-600">
          Have any questions?
        </p>

        <h3 className="text-[24px] font-semibold text-[#1A1A1A] leading-snug">
          Speak with <br />
          our experts
        </h3>
      </div>

      {/* CENTER IMAGE */}
      <div className="w-[240px] h-[320px] rounded-2xl overflow-hidden shadow-md">
        <img
          src={expertImg}
          alt="Expert support"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-4 w-[260px]">
        <p className="text-[14px] text-gray-600 leading-relaxed">
          Request a callback for personalized assistance and project details.
        </p>

        <button className="bg-[#FF6A13] text-white px-7 py-2.5 rounded-full text-[11px] tracking-widest uppercase hover:bg-[#e85c0f] transition w-fit">
          Request Callback
        </button>
      </div>

    </div>

  </div>
</section>
{/* ================= OUR PROMISE SECTION ================= */}
<section className="relative w-full h-screen overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src={promiseImg}
    alt="Our Promise"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">

    <h2 className="text-[28px] md:text-[34px] font-medium leading-snug mb-6">
      Our promise is to turn urban spaces into <br />
      meaningful lives.
    </h2>

    <p className="text-[13px] md:text-[14px] text-white/80 max-w-2xl mx-auto mb-10">
      We design spaces that nurture life itself where <br />
      craftsmanship and dedicated service come together
      to elevate living.
    </p>

    <button className="bg-[#FF6A13] text-white px-10 py-3 rounded-full text-[11px] tracking-widest uppercase hover:bg-[#e85c0f] transition">
      Know More
    </button>

  </div>

</section>





    </>
  );
};

export default Home;
