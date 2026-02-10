import React, { useState } from "react";
import brandLogo from "/modernpropound.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";
import RevealImageAnimation from "../components/RevealImageAnimation";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Enquire from "./Enquire";
import { useNavigate } from "react-router-dom";
//import { ProjectDetails, ShreyasSunriseDetails } from "./ProjectDetails";
const statusStyles = {
  Ongoing: "bg-[#04c2ae]", 
  Completed:"bg-[#04c23e]",
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
  return (
    <FloatUpText fade={!noFade}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 md:h-auto h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700"
          />

          {/* STATUS */}
          <span
            className={`absolute top-4 right-4 ${
              statusStyles[status] || "bg-ORANGE"
            } text-white text-xs px-4 py-1.5 rounded-md`}
          >
            {status}
          </span>
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2 px-6 py-5 pb-10 md:py-16 md:px-10 flex flex-col justify-center">
          
          <div className="border-2 mb-2 flex w-fit h-18 aspect-video items-center p-1 justify-center">
            <img
              src={logo}
              alt={title}
              className="w-32 h-18 object-contain"
            />
          </div>

          <h3 className="text-2xl">{title}</h3>
          <p className="text-black mb-4">{location}</p>

          <div className="w-full h-[1px] bg-gray-300 mb-2 md:mb-4" />

          <p className="mb-8">{description}</p>

          <button
            onClick={onClick}
            className="btn btn-orange w-fit mt-2 md:mt-4"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </FloatUpText>
  );
};


export default function Projects() {
  const navigate = useNavigate();
  //const [selectedProject, setSelectedProject] = useState(null);
const [showEnquire, setShowEnquire] = useState(false);
return (

  <>   
      {/* ================= FIRST PROJECTS SECTION ================= */}
      <section className="bg-ORANGE px-6 md:px-0  pt-20 md:pt-28 pb-20 -z-10 relative">
        <div className="max-w-[1120px] mx-auto px-0 flex flex-col justify-center items-center text-center  text-white">
          <AnimatedHeading
            as="h1"
            delay={0}
            staggerDelay={0.15} className=" section-heading md:text-4xl md:max-w-xl  text-white font-semiboldx leading-normal">
            Smartly planned developments for today’s lifestyle
          </AnimatedHeading>
          <FloatUpText delay={0}>

            <p className="mt-6 max-w-3xl mx-auto text-lg opacity-90">
              Smartly planned developments crafted with thoughtful layouts,
            contemporary comforts, and seamless functionality to elevate today’s
            way of living.
            </p>
          </FloatUpText>
        </div>

      </section>
        {/* Header */}
        <section className="bg-[#eef2f3]      flex pb-10 md:pb-20    " >

        {/* Cards */}
  <div className="max-w-6xl mx-auto px-6 lg:px-6 -mt-14 md:-mt-10 space-y-10">

  {/* 1 */}
{/* <ProjectCard
  noFade
  image="/Home/profoundInfra.webp"
  logo={brandLogo}
  status="Completed"
  title="Modern Profound Tech Park"
  location="Kondapur, Hyderabad"
  description="Commercial office spaces designed for flexibility"
  onClick={() => navigate("/projects/modern-profound-tech-park")}
/> */}

{/* 7 */}
   <ProjectCard
  noFade
  image="/sunrise.webp"
  logo="/shreyas_sunrise.webp"
  status="Ongoing"
  title="Shreyas Sunrise"
  location="Nandagudi, Bengaluru"
  description="Premium gated development in north Bengaluru's fastest growing destination."
  onClick={() => navigate("/projects/shreyas-sunrise")}
/>


  {/* 2 */}
  <ProjectCard
    image="/Home/royalEnclave.webp"
      logo="/royalenclave.png"
     status="Completed"
    title="Royal Enclave"
    location="Marathahalli, Bengaluru"
    description="2BHK & 3BHK residential apartments"
    onClick={() => navigate("/projects/royal-enclave")}
  />

  {/* 3 */}
  <ProjectCard
    image= "/Home/SandsParadiseVignanNagar_enhanced.webp"
      logo="/Paradise.webp"
    status="Completed"
    title="Paradise"
    location="Vignana Nagar, Bengaluru"
    description="2BHK and 3BHK luxury apartments"
 onClick={() => navigate("/projects/paradise")}
  />

  {/* 4 */}
  <ProjectCard
    image= "/Home/ChourasiaShreyasMarathahalli.webp"
      logo="/ChourasiaShreyas.webp"
     status="Completed"
    title="Chourasia Shreyas"
    location="Marathahalli, Bengaluru"
    description="Commercial units suitable for offices, showrooms, or retail outlets"
onClick={() => navigate("/projects/chourasia-shreyas")}
  />

</div>


      </section>

      {/* ================= EXPERT ASSISTANCE HEADER ================= */}
    <section className="bg-[#fae4b4]  px-6 hidden md:block py-16 ">
        <div className="max-w-[1120px] mx-auto px-0 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h2 className="section-heading mb-4 ">
              Expert Assistance, Simplified
            </h2>
            <p className="text-lg text-black mt-1">
              Our team ensures smooth, transparent, and hassle-free experience
              at every stage.
            </p>
          </div>

       <button
  onClick={() => setShowEnquire(true)}
className="btn btn-white">
  <span>REQUEST CALLBACK</span>
  <ArrowRight className="w-4 h-4" />
</button>

        </div>
      </section>

      {/* ================= EXPERT ASSISTANCE CARDS ================= */}
      <section className="bg-[#eef2f3]   pb-10  flex   md:py-20">
<div className="max-w-6xl mx-auto px-6    space-y-10">

  {/* 5 */}
  <ProjectCard
    image= "/Home/ModernView.webp"
      logo="/ModernView.webp"
     status="Completed"
    title="Modern View Apartment"
    location="Marathahalli, Bengaluru"
    description="32 exclusive homes fostering a close-knit family environment"
onClick={() => navigate("/projects/modern-view-apartment")}
  />

  {/* 6 */}
<ProjectCard
  image="/Home/naturesign.webp"
  logo="/naturessign.webp"
  status="Ongoing"
  title="Nature’s Sign"
  location="Devanahalli, Bengaluru"
  description="Plotted development community in North Bengaluru’s fastest growing locations"
  onClick={() => window.open("https://nature-sign.netlify.app/", "_blank")}
/>

</div>

      </section> {/* ================= EXPERT ASSISTANCE HEADER ================= */}
    <section className="bg-[#fae4b4]  px-6 md:hidden block py-16 ">
        <div className="max-w-[1120px] mx-auto px-0 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h2 className="section-heading mb-4 ">
              Expert Assistance, Simplified
            </h2>
            <p className="text-lg text-black mt-1">
              Our team ensures smooth, transparent, and hassle-free experience
              at every stage.
            </p>
          </div>

       <button
  onClick={() => setShowEnquire(true)}
className="btn btn-white w-fit">
  <span>REQUEST CALLBACK</span>
  <ArrowRight className="w-4 h-4" />
</button>

        </div>
      </section>
      <AnimatePresence>
  {showEnquire && <Enquire onClose={() => setShowEnquire(false)} />}
</AnimatePresence>

    </>
);

}
