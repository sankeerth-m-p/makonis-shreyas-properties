import { useEffect, useState } from "react";
import HeroSection from "./sections/HeroSection.jsx";
import ThoughtfulSection from "./sections/ThoughtfulSection.jsx";
import BespokeSection from "./sections/BespokeSection.jsx";
import SignatureSpaces from "./sections/SignatureSpaces.jsx";
import StoryBehindBrand from "./sections/StoryBehindBrand.jsx";
import WhatMakesUsDifferent from "./sections/WhatMakesUsDifferent.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import NatureSign from "./sections/NatureSign.jsx";
import ExpertsSection from "./sections/ExpertsSection.jsx";
import PromiseSection from "./sections/PromiseSection.jsx";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import Enquire from "../Enquire.jsx";
import Ongoing from "./sections/Card.jsx";
import CursorReveal from "./sections/Experince.jsx";
const HomeLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showEnquire, setShowEnquire] = useState(false);

  // ✅ detect mobile (same logic as coworker)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ last scroll → go to top (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const container = document.getElementById("home-scroll");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // when user scrolls UP at the very bottom → go to top
      if (
        scrollTop < lastScrollTop &&
        scrollTop + clientHeight >= scrollHeight - 20
      ) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      }

      setLastScrollTop(scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile, lastScrollTop]);

  return (
    <>
      <div
        id="home-scroll"
        className="relative lg:isolate 
          lg:h-[calc(100vh)]
          lg:overflow-y-scroll
          lg:snap-y lg:snap-mandatory
          scroll-smooth
          overscroll-contain
        "
      >
        <div className="snap-start lg:h-screen snap-always pt-[5rm]">
          {!isMobile && <Navbar onEnquireClick={() => setShowEnquire(true)}/>}
          <HeroSection />
        </div>

        <div className="snap-start lg:pt-20 lg:h-screen snap-always">
          <ThoughtfulSection />
        </div>
<div className="snap-start  bg-ORANGE snap-always">
          <CursorReveal/>
        </div>
        <div className="snap-start bg-[#EEF2F3]  lg:pt-20 snap-always">
          <BespokeSection />
        </div>

        <div className="snap-start lg:pt-20 snap-always">
          <SignatureSpaces />
        </div>

        <div className="snap-start lg:pt-20 snap-always">
          <StoryBehindBrand />
        </div>

        <div className="snap-start lg:pt-20 snap-always">
          <WhatMakesUsDifferent />
        </div>

        <div className="snap-start lg:pt-20 snap-always" id="testimonials">
          <Testimonials />
        </div>

        <div className="snap-start lg:pt-20 bg-[#F4EFE5]  snap-always">
          <Ongoing/>
        </div>
        
        <div className="snap-start lg:pt-20 bg-[#FEF8BA] snap-always">
          <NatureSign />
        </div>

        <div
          className="snap-start snap-always mt-20 overflow-hidden lg:overflow-visible"
          style={{ scrollSnapStop: "always" }}
        >
          <ExpertsSection />
        </div>

        <div className="snap-start lg:pt-20 snap-always">
          <PromiseSection />
        </div>

        <div className="snap-end snap-always">
          <Footer />
        </div> {showEnquire && <Enquire onClose={() => setShowEnquire(false)} />}
      </div>
    </>
  );
};

export default HomeLayout;