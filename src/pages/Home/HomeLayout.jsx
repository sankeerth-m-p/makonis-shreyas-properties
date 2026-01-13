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

const HomeLayout = () => {
  return (
    <>
      <HeroSection />
      <ThoughtfulSection />
      <BespokeSection />
      <SignatureSpaces />
      <StoryBehindBrand />
      <WhatMakesUsDifferent />
      <Testimonials />
      <NatureSign />
      <ExpertsSection />
      <PromiseSection />
    </>
  );
};

export default HomeLayout;
