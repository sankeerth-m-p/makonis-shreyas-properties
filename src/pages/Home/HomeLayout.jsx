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
const HomeLayout = () => {
    const isMobile = window.matchMedia("(max-width: 1020px)").matches;

 return (  <> 

  <div
  id="home-scroll"
  className="relative lg:isolate
    lg:h-[calc(100vh)]
    lg:overflow-y-scroll
    lg:snap-y lg:snap-mandatory
    scroll-smooth lg:mt-
    overscroll-contain
  "
>
  

     <div className="snap-start lg:h-screen  snap-always pt-[5rm]">
      {!isMobile && <Navbar onEnquireClick={() => {}} />}
      <HeroSection />
    </div>

    <div className="snap-start  lg:pt-20 lg:h-screen snap-always">
      <ThoughtfulSection />
    </div>

    <div className="snap-start  lg:pt-20  snap-always">
      <BespokeSection />
    </div>

    {/* ✅ Signature becomes nested snap zone */}
    <div className="snap-start  lg:pt-20 snap-always">
      <SignatureSpaces />
    </div>

    <div className="snap-start  lg:pt-20 snap-always">
      <StoryBehindBrand />
    </div>

    <div className="snap-start  lg:pt-20 snap-always">
      <WhatMakesUsDifferent />
    </div>

    <div className="snap-start   lg:pt-20 snap-always" id="testimonials">
      <Testimonials />
    </div>

    <div className="snap-start  lg:pt-20 bg-[#F4EFE5] snap-always">
      <NatureSign />
    </div>

    <div 
  className="snap-start  snap-always mt-20 overflow-hidden lg:overflow-visible"
  style={{ scrollSnapStop: 'always' }}
>
  <ExpertsSection />
</div>

    <div className="snap-start  lg:pt-20  snap-always">
      <PromiseSection />
     </div>
    <div className="snap-end  snap-always">
     <Footer/>
     </div>
  </div></>
);

};

export default HomeLayout;
