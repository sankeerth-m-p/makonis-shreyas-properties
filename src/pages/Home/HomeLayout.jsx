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
const HomeLayout = () => {
 return (
  <div
    id="home-scroll"
    className="
      h-[calc(100vh-5rem)]
      overflow-y-scroll
      snap-y snap-mandatory
      scroll-smooth
      overscroll-contain
    "
  >
    <div className="snap-start  snap-always">
      <HeroSection />
    </div>

    <div className="snap-start  snap-always">
      <ThoughtfulSection />
    </div>

    <div className="snap-start  snap-always">
      <BespokeSection />
    </div>

    {/* ✅ Signature becomes nested snap zone */}
    <div className="snap-start snap-always">
      <SignatureSpaces />
    </div>

    <div className="snap-start  snap-always">
      <StoryBehindBrand />
    </div>

    <div className="snap-start  snap-always">
      <WhatMakesUsDifferent />
    </div>

    <div className="snap-start   snap-always" id="testimonials">
      <Testimonials />
    </div>

    <div className="snap-start snap-always">
      <NatureSign />
    </div>

    <div 
  className="snap-start snap-always overflow-hidden md:overflow-visible"
  style={{ scrollSnapStop: 'always' }}
>
  <ExpertsSection />
</div>

    <div className="snap-start  snap-always">
      <PromiseSection />
     </div>
    <div className="snap-end  snap-always">
     <Footer/>
     </div>
  </div>
);

};

export default HomeLayout;
