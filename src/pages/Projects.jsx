import React, { useState, useEffect } from "react";
import heroImg2 from "/Home/royalEnclave.webp";
import heroImg5 from "/Home/profound_infra.jpg";
import brandLogo from "/modern_propound_logo.png";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";
import RevealImageAnimation from "../components/RevealImageAnimation";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Enquire from "./Enquire";

const statusStyles = {
  Ongoing: "bg-ORANGE2",
  Completed: "bg-green-500",
  Upcoming: "bg-yellow-500",
};

const ProjectCard = ({
  image,
  logo, 
  status = "Ongoing",
  brand = "Modern Propound",
  title,
  location,
  description,
  buttonText = "VIEW DETAILS",
  onClick,
  noFade = false,
}) => {
  const Wrapper = noFade || typeof window !== "undefined" && window.innerWidth < 768
  ? React.Fragment
  : FloatUpText;


  return (
    <Wrapper>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700" />

          {/* STATUS */}
          <span
            className={`hidden md:block absolute top-4 right-4 ${statusStyles[status] || "bg-ORANGE"
              } text-white text-xs px-3 py-1 rounded-full`}
          >
            {status}
          </span>
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <img
  src={logo}
  alt={title}
  className="w-32 mb-2 object-contain"
/>



          <h3 className="text-2xl md:text-xl font-semiboldx">{title}</h3>

          <p className="text-gray-500 text-sm mb-4">{location}</p>

          <div className="w-full h-[1px] bg-gray-300 mb-5 md:mb-4" />

          <p className="text-sm text-gray-600 mb-6">{description}</p>

          <button
            onClick={onClick}
            className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1 w-fit"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const ProjectDetails = ({ project, onBack }) => {
 
  useEffect(() => {
    window.scrollTo(0, 0);   // <-- replace smooth scroll
  }, []);
  return (
   <div className="relative w-full bg-white overflow-hidden">

      {/* ===== BACK BUTTON ===== */}
     <div className="pt-4">
  <div className="max-w-[1120px] mx-auto px-0 ">
   <button
  onClick={onBack}
  className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1 w-fit"
>
  <span>Back to Projects</span>
  <ArrowRight className="w-4 h-4" />
</button>

  </div>
</div>



      {/* ===== TOP CENTER INFO BAR ===== */}
      <div className="w-full py-6 flex justify-center">
        <div className="flex items-center gap-6">

          {/* Logo with rectangle */}
         <div className="border border-gray-300 px-4 py-2 flex items-center">
  <img src={project.logo} className="h-14 object-contain" />
</div>


          {/* Title & Location */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-semiboldx text-gray-900">
              {project.title}
            </span>
            <span className="text-base text-gray-500">
              {project.location}
            </span>
          </div>

       <span
  className={`${statusStyles[project.status]} text-white text-sm px-5 py-1.5 rounded-full`}
>
  {project.status}
</span>

        </div>
      </div>

{/* Spacer to prevent overlap */}
<div className="h-4 md:h-0" />

   
{/* ===== HERO IMAGE (NO JUMP) ===== */}
<div className="w-full h-[60vh] md:h-[85vh] overflow-hidden bg-gray-100">
  <img
    src={project.image}
    alt="Project"
    className="w-full h-full object-cover object-center block"
    loading="eager"
  />
</div>



      {/* ===== ABOUT SECTION ===== */}
      <div className="bg-[#F5F2EF] py-20">
        <div className="max-w-[1120px] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div className="relative">
            <div className="absolute -left-16 -top-10 w-64 h-64 bg-gray-200 rounded-full opacity-30"></div>

            <h2 className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8">
              Signature spaces crafted <br /> for modern living.
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Modern Profound Tech Park is a prominent commercial property located in Kondapur, Hyderabad, with a landmark beside Sarath City Mall. Designed for modern businesses,
              this premium office complex provides spacious and skilfully designed commercial spaces suitable for IT,
              corporate offices, and startups alike. The project reflects a blend of functionality and modern architecture,
              offering an environment that fosters productivity and professional growth.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              The building enjoys excellent connectivity and a prime location surrounded by leading companies like Capita, TCS, Cognizant, and HSBC.
              With seamless access to public transportation, proximity to restaurants, hotels, and retail hubs, and in-house dedicated parking,
              this tech park ensures a comfortable and business-friendly ecosystem for its occupants.
            </p>
          </div>

          <div className="overflow-hidden">
            <RevealImageAnimation
              image="/family.jpg"
              className="w-full h-[350px] md:h-[600px] object-cover"
            />
          </div>



        </div>
      </div>

<section
  className="
    relative 
    w-full min-h-screen
    md:h-screen 
    bg-center 
    bg-cover 
    bg-no-repeat
    md:bg-fixed
    overflow-hidden
  "
  style={{ backgroundImage: "url(/hotel.jpg)" }}
>
  <div className="absolute inset-0 bg-black/65" />

  <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:h-full flex flex-col md:justify-center">

    <h2 className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8">
      Key Features and Amenities
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 text-center text-white">
      {[
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-5 px-4">
          <img
            src={item.icon}
            className="w-16 h-16 md:w-20 md:h-20 object-contain invert"
            alt=""
          />
          <p className="text-sm md:text-base leading-snug max-w-[240px]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ===== LOCATION & BUSINESS ADVANTAGES ===== */}
      <div className="bg-[#F5F2EF] py-20">
        <div className="max-w-[1120px] mx-auto px-4 md:px-0">

          {/* Heading aligned to image left edge */}
          <h2 className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8">
            Location and Business Advantages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* LEFT IMAGE – no rounding, no shadow, exact frame */}
            <div>
              <RevealImageAnimation
                image="/business.jpg"
                className="w-full md:w-[480px] h-[300px] md:h-[500px] object-cover"
              />

            </div>

            {/* RIGHT CONTENT – bullets start from image top */}
            <div className="pt-1">
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-none">›</span>
                  Situated in Kondapur, beside Sarath City Mall, a major IT corridor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-none">›</span>
                  Surrounded by Capita, TCS, Cognizant, and HSBC
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-none">›</span>
                  Excellent public transport connectivity with bus and cabs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-none">›</span>
                  Easy access to malls, eateries, and business support services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-none">›</span>
                  Ideal for IT companies, startups, and corporate offices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg leading-none">›</span>
                  Looking for a prestigious business address
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
const [showEnquire, setShowEnquire] = useState(false);
  return selectedProject ? (
    <ProjectDetails
      project={selectedProject}
      onBack={() => setSelectedProject(null)}
    />
  ) : (
    <>
      {/* ================= FIRST PROJECTS SECTION ================= */}
      <section className="bg-[#F5F2EF] ">
        {/* Header */}
        <div className="bg-ORANGE px-4 py-20 text-center text-white">
          <AnimatedHeading delay={0} className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8">
            Smartly planned developments for today’s lifestyle
          </AnimatedHeading>
          <FloatUpText delay={0} className="max-w-2xl mx-auto text-sm opacity-90">
            Smartly planned developments crafted with thoughtful layouts,
            contemporary comforts, and seamless functionality to elevate today’s
            way of living.
          </FloatUpText>
        </div>

        {/* Cards */}
  <div className="max-w-[1120px] mx-auto px-0 -mt-14 md:-mt-10 space-y-10">

  {/* 1 */}
  <ProjectCard
    noFade
    image= "/Home/profoundInfra.webp"
    logo={brandLogo}
     status="Completed"
    title="Modern Profound Tech Park"
    location="Kondapur, Hyderabad"
    description="Commercial office spaces designed for flexibility"
  onClick={() =>
  setSelectedProject({
    title: "Modern Profound Tech Park",
    location: "Kondapur, Hyderabad",
    status: "Completed",
    image: "/Home/profoundInfra.webp",   // ✅ ADD THIS
    logo: brandLogo,
  })
}

  />

  {/* 2 */}
  <ProjectCard
    image="/Home/royalEnclave.webp"
      logo="/royalenclave.png"
     status="Completed"
    title="Royal Enclave"
    location="Marathahalli, Bangalore"
    description="2BHK & 3BHK residential apartments"
    onClick={() =>
      setSelectedProject({
        title: "Royal Enclave",
        location: "Marathahalli, Bangalore",
        status: "Completed",
        image: "/Home/royalEnclave.webp",
         logo: "/royalenclave.png",
      })
    }
  />

  {/* 3 */}
  <ProjectCard
    image= "/Home/SandsParadiseVignanNagar_enhanced.webp"
      logo="/Paradise.png"
    status="Completed"
    title="Paradise"
    location="Vignana Nagar, Bangalore"
    description="2BHK and 3BHK luxury apartments"
    onClick={() =>
      setSelectedProject({
        title: "Paradise",
        location: "Vignana Nagar, Bangalore",
        status: "Completed",
        image:  "/Home/SandsParadiseVignanNagar_enhanced.webp",
         logo: "/Paradise.png",
      })
    }
  />

  {/* 4 */}
  <ProjectCard
    image= "/Home/ChourasiaShreyasMarathahalli.webp"
      logo="/ChourasiaShreyas.png"
     status="Completed"
    title="Chourasia Shreyas"
    location="Marathahalli, Bangalore"
    description="Commercial units suitable for offices, showrooms, or retail outlets"
    onClick={() =>
      setSelectedProject({
        title: "Chourasia Shreyas",
        location: "Marathahalli, Bangalore",
        status: "Completed",
        image: "/Home/ChourasiaShreyasMarathahalli.webp",
         logo: "/ChourasiaShreyas.png",
      })
    }
  />

</div>


      </section>

      {/* ================= EXPERT ASSISTANCE HEADER ================= */}
    <section className="bg-[#F6DCA6] hidden md:block py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h2 className="text-lg md:text-4xl font-semiboldx mb-4 md:mb-8">
              Expert Assistance, Simplified
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Our team ensures smooth, transparent, and hassle-free experience
              at every stage.
            </p>
          </div>

       <button
  onClick={() => setShowEnquire(true)}
  className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-orange-500 hover:text-white transition-all hover:translate-x-1"
>
  <span>REQUEST CALLBACK</span>
  <ArrowRight className="w-4 h-4" />
</button>

        </div>
      </section>

      {/* ================= EXPERT ASSISTANCE CARDS ================= */}
      <section className="bg-[#F5F2EF] pb-10 md:py-20">
<div className="max-w-[1120px] mx-auto px-0 mt-10 space-y-10">

  {/* 5 */}
  <ProjectCard
    image= "/Home/ModernView.webp"
      logo="/ModernView.png"
     status="Completed"
    title="Modern View Apartment"
    location="Marathahalli, Bangalore"
    description="32 exclusive homes fostering a close-knit family environment"
    onClick={() =>
      setSelectedProject({
        title: "Modern View Apartment",
        location: "Marathahalli, Bangalore",
        status: "Completed",
        image: "/Home/ModernView.webp",
         logo: "/ModernView.png",
      })
    }
  />

  {/* 6 */}
  <ProjectCard
    image= "/Home/naturesign.webp"
      logo="/naturessign.png"
    status="Ongoing"
    title="Nature’s Sign"
    location="Devanahalli, Bangalore"
    description="Plotted development community in North Bangalore’s fastest growing locations"
    onClick={() =>
      setSelectedProject({
        title: "Nature’s Sign",
        location: "Devanahalli, Bangalore",
        status: "Ongoing",
        image: "/Home/naturesign.webp",
         logo: "/naturessign.png",
      })
    }
  />

</div>

      </section>
      <AnimatePresence>
  {showEnquire && <Enquire onClose={() => setShowEnquire(false)} />}
</AnimatePresence>

    </>
  );

}
