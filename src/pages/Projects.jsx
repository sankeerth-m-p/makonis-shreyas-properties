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
import mobileBanner5 from "/Home/hero/mobile/shreyaainfra web_mobilebanner5.webp";
import desktopBanner5 from "/Home/hero/desktop/SI_bannerimage5.webp";
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
  const Wrapper = noFade || typeof window !== "undefined" && window.innerWidth < 768
  ? React.Fragment
  : FloatUpText;


  return (
    <Wrapper>
      <div className="bg-white  rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform ease-in-out duration-700" />

          {/* STATUS */}
         <span
  className={`absolute top-4 right-4 ${statusStyles[status] || "bg-ORANGE"} text-white text-xs px-4 py-1.5 rounded-md`}
>
  {status}
</span>

        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2   px-6 py-10 md:py-16 md:px-10 flex flex-col justify-center">
          <div className="border-2 mb-2 flex w-fit h-18 aspect-video items-center p-1 justify-center ">
          <img
  src={logo}
  alt={title}
  className="w-32  h-18 object-contain"
/>
  </div>



          <h3 className="text-2xl  ">{title}</h3>

          <p className="text-gray-500 text-sm mb-4">{location}</p>

          <div className="w-full h-[1px] bg-gray-300 mb-5 md:mb-4" />

          <p className="text-sm text-gray-600 mb-8">{description}</p>

          <button
            onClick={onClick}
            className="btn btn-orange w-fit mt-4 "
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
   <div className="relative w-full bg-white  overflow-hidden">

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
 className={`${statusStyles[project.status]} text-white text-sm px-5 py-1.5 rounded`}
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

           {/* text above circle */}
  <h2 className="relative z-10 text-lg md:text-4xl font-semibold mb-4 md:mb-8">
    {project.title === "Shreyas Sunrise" ? (
      <>
        This project is strategically located very close to <br />
        Bengaluru’s fast developing satellite township
      </>
    ) : (
      <>
        Signature spaces crafted <br /> for modern living.
      </>
    )}
  </h2>


          {project.title === "Shreyas Sunrise" ? (
  <>
    <p className="text-sm text-gray-600 leading-relaxed mb-4">
      Shreyas Sunrise is developed by Shreyas Properties, a company with a passionate approach towards creating infrastructure and living spaces that add beauty to life.
    </p>

    <p className="text-sm text-gray-600 leading-relaxed mb-4">
      This project is strategically located very close to Bengaluru’s fast developing satellite township of Nandagudi and is just a few minutes away from Devanahalli.
    </p>

    <p className="text-sm text-gray-600 leading-relaxed mb-4">
      The widening of roads and future connectivity through the planned Peripheral Ring Road, along with the elevated expressway to the airport and the high-speed rail link, has made this area one of the most sought-after destinations.
    </p>

    <p className="text-sm text-gray-600 leading-relaxed">
      This is an opportunity that speaks for itself. Its location, as you will soon see, is the key.
    </p>
  </>
) : (
  <>
    <p className="text-sm text-gray-600 leading-relaxed mb-4">
      Modern Profound Tech Park is a prominent commercial property located in Kondapur, Hyderabad, with a landmark beside Sarath City Mall. Designed for modern businesses, this premium office complex provides spacious and skilfully designed commercial spaces suitable for IT, corporate offices, and startups alike. The project reflects a blend of functionality and modern architecture, offering an environment that fosters productivity and professional growth.
    </p>

    <p className="text-sm text-gray-600 leading-relaxed">
      The building enjoys excellent connectivity and a prime location surrounded by leading companies like Capita, TCS, Cognizant, and HSBC. With seamless access to public transportation, proximity to restaurants, hotels, and retail hubs, and in-house dedicated parking, this tech park ensures a comfortable and business-friendly ecosystem for its occupants.
    </p>
  </>
)}

          </div>

          <div className="overflow-hidden">
            <RevealImageAnimation
              image="/family.jpg"
              className="w-full h-[350px] md:h-[600px] object-cover"
            />
          </div>



        </div>
      </div>

{project.title !== "Shreyas Sunrise" && (
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

    <div className="relative z-10 max-w-[1120px] mx-auto px-0 py-24 md:h-full flex flex-col md:justify-center">

    <h2 className="text-lg md:text-4xl font-semibold mb-8 text-center text-white">
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
)}


      {/* ===== LOCATION & BUSINESS ADVANTAGES ===== */}
      <div className="bg-[#F5F2EF] py-20">
        <div className="max-w-[1120px] mx-auto px-4 md:px-0">

          {/* Heading aligned to image left edge */}
         <h2 className="text-lg md:text-4xl font-semibold mb-4 md:mb-8">
  {project.title === "Shreyas Sunrise"
    ? "Facilities & Amentities"
    : "Location and Business Advantages"}
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
  {project.title === "Shreyas Sunrise" ? (
    <>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Swimming pool</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Overhead storage tanks for water</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Playground for children</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Basketball court, tennis court & cricket practice net</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Space for commercial complex & schools</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Clubhouse with library, yoga & aerobics room</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Spa & Multi-Gym</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Plot sizes: 30x40, 30x50, 40x50, 40x60 & 60x80</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Well-designed arch</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Eco-friendly environment</li>
    </>
  ) : (
    <>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Situated in Kondapur, beside Sarath City Mall, a major IT corridor</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Surrounded by Capita, TCS, Cognizant, and HSBC</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Excellent public transport connectivity with bus and cabs</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Easy access to malls, eateries, and business support services</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Ideal for IT companies, startups, and corporate offices</li>
      <li className="flex items-start gap-2"><span className="text-lg">›</span> Looking for a prestigious business address</li>
    </>
  )}
</ul>

            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

const ShreyasSunriseDetails = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">

      {/* SECTION 1 – SAME AS ProjectDetails TOP */}
      <ProjectDetails project={project} onBack={onBack} />

      {/* SECTION 2 – same (you will edit later) */}

      {/* SECTION 3 – hidden (skip) */}

      {/* SECTION 4 – same layout */}

      {/* SECTION 5 – Image Right, Content Left */}
<div className="bg-[#F5F2EF] py-20">
  <div className="max-w-[1120px] mx-auto px-4 md:px-0">

  <h2 className="text-lg md:text-4xl font-semibold mb-4 md:mb-8">
  {project.title === "Shreyas Sunrise" ? "LOCATION ADVANTAGES" : "Section Title"}
</h2>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

      {/* CONTENT LEFT */}
      <div className="pt-1 md:order-1">
       <ul className="space-y-4 text-sm text-gray-700">
  {project.title === "Shreyas Sunrise" && (
    <>
      <li className="flex items-start gap-2"><span>›</span> Attached to State Highway 35</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 20 mins away from the International Airport</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 15 mins from AERO SEZ Devanahalli IT Park (SAP Labs, Boeing, Wipro, Mahindra, Shell, etc.)</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 20 mins drive to Narasapura Industrial Area (Apple, Honda, Scania, Volvo, Triumph, etc.)</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 15 mins from Vemgal Industrial Area (GSK, Mitsubishi, TATA Motors, etc.)</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 15 mins from Devanahalli Old Jain Temple</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 10 mins from Nandagudi SEZ</li>
      <li className="flex items-start gap-2"><span>›</span> 20 mins from Hoskote</li>
      <li className="flex items-start gap-2"><span>›</span> 40 mins from ITPL</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 10 mins from Cargo Road</li>
      <li className="flex items-start gap-2"><span>›</span> Approx 5 mins from Central University of North Bengaluru</li>
    </>
  )}
</ul>

      </div>

      {/* IMAGE RIGHT – same animation & spacing */}
      <div className="md:order-2">
        <RevealImageAnimation
          image="/sunrise.webp"
          className="w-full md:w-[480px] h-[300px] md:h-[500px] object-cover"
        />
      </div>

    </div>
  </div>
</div>




{/* EXTRA Location & Business Advantages (SAME DESIGN, IMAGE LEFT) */}
<div className="bg-[#F5F2EF] py-20">
  <div className="max-w-[1120px] mx-auto px-4 md:px-0">

    <h2 className="text-lg md:text-4xl font-semibold mb-4 md:mb-8">
      Location and Business Advantages
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

      {/* IMAGE LEFT (same animation) */}
      <div className="md:order-1">
        <RevealImageAnimation
          image="/business.jpg"
          className="w-full md:w-[480px] h-[300px] md:h-[500px] object-cover"
        />
      </div>

      {/* CONTENT RIGHT (same bullets, same style) */}
      <div className="pt-1 md:order-2">
{project.title === "Shreyas Sunrise" && (
  <ul className="space-y-4 text-sm text-gray-700">
    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>Bengaluru Aerospace SEZ:</strong> 950-acre Bengaluru Aerospace Park including 250-acre special economic zone (SEZ) has attracted investments from 56 large and mid-sized companies.</p>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>Bengaluru University:</strong> Bengaluru North University would be established as an affiliating university with headquarters at Jangamakote (Sidlaghatta taluk).</p>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>Devanahalli Business Park:</strong> 413-acre Devanahalli Business Park expects to attract an investment of $2.2 billion over the next three to five years.</p>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>Narsapura Industrial Area:</strong> Developed over 700.75 acres, abutting NH-4, 15 Km from Kolar and 55 Km from Bengaluru.</p>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>Vemgal Industrial Area:</strong> Located on SH-96, about 10 Km from Narasapura & Jakkasandra Industrial Area, covering 666 acres.</p>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>International Convention Centre:</strong> Proposed on 35 acres next to Bengaluru International Airport under PPP model.</p>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-lg leading-none">›</span>
      <p><strong>Devanahalli–Kolar Road (SH-96):</strong> Being widened from 2 to 6 lanes to support airport and real estate growth.</p>
    </li>
  </ul>
)}



      </div>

    </div>
  </div>
</div>

{project.title === "Shreyas Sunrise" && (
  <>
    {/* LAYOUT PLAN */}
{/* LAYOUT PLAN */}
<section className="bg-white py-20">
  <h2 className="text-center text-lg md:text-4xl font-semibold mb-10">
    Layout Plan
  </h2>

  <div className="max-w-[1120px] mx-auto px-0 border-2 border-black">
    <div className="overflow-hidden">
      <RevealImageAnimation
        image="/layoutplan.jpg"
        className="w-full h-[70vh] md:h-[85vh] object-contain"
      />
    </div>
  </div>
</section>

{/* LOCATION MAP */}
<section className="bg-white py-20">
  <h2 className="text-center text-lg md:text-4xl font-semibold mb-10">
    Location Map
  </h2>

 <div className="max-w-[1120px] mx-auto px-0 border-2 border-black">
    <div className="overflow-hidden">
      <RevealImageAnimation
        image="/locationmap.jpg"
        className="w-full h-[70vh] md:h-[85vh] object-contain"
      />
    </div>
  </div>
</section>


  </>
)}



    </div>
  );
};


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
const [showEnquire, setShowEnquire] = useState(false);
return selectedProject ? (
  selectedProject.title === "Shreyas Sunrise" ? (
    <ShreyasSunriseDetails
      project={selectedProject}
      onBack={() => setSelectedProject(null)}
    />
  ) : (
    <ProjectDetails
      project={selectedProject}
      onBack={() => setSelectedProject(null)}
    />
  )
) : (
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
        <section className="bg-[#eef2f3] flex pb-20    " >

        {/* Cards */}
  <div className="max-w-6xl mx-auto px-6 lg:px-2 -mt-14 md:-mt-10 space-y-10">

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
{/* 7 */}
    <ProjectCard
    noFade
    image= "/sunrise.webp"
    logo={brandLogo}
     status="Ongoing"
    title="Shreyas Sunrise"
    location="Nandagudi, Bengaluru"
    description="Premium gated development in north Bengaluru's fastest growing destination."
  onClick={() =>
  setSelectedProject({
    title: "Shreyas Sunrise",
    location: "Nandagudi, Bengaluru",
    status: "Ongoing",
    image: "/sunrise.webp",   // ✅ ADD THIS
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
    location="Marathahalli, Bengaluru"
    description="2BHK & 3BHK residential apartments"
    onClick={() =>
      setSelectedProject({
        title: "Royal Enclave",
        location: "Marathahalli, Bengaluru",
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
    location="Vignana Nagar, Bengaluru"
    description="2BHK and 3BHK luxury apartments"
    onClick={() =>
      setSelectedProject({
        title: "Paradise",
        location: "Vignana Nagar, Bengaluru",
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
    location="Marathahalli, Bengaluru"
    description="Commercial units suitable for offices, showrooms, or retail outlets"
    onClick={() =>
      setSelectedProject({
        title: "Chourasia Shreyas",
        location: "Marathahalli, Bengaluru",
        status: "Completed",
        image: "/Home/ChourasiaShreyasMarathahalli.webp",
         logo: "/ChourasiaShreyas.png",
      })
    }
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
      <section className="bg-[#eef2f3] px-6 pb-10 md:py-20">
<div className="max-w-[1120px] mx-auto px-0  space-y-10">

  {/* 5 */}
  <ProjectCard
    image= "/Home/ModernView.webp"
      logo="/ModernView.png"
     status="Completed"
    title="Modern View Apartment"
    location="Marathahalli, Bengaluru"
    description="32 exclusive homes fostering a close-knit family environment"
    onClick={() =>
      setSelectedProject({
        title: "Modern View Apartment",
        location: "Marathahalli, Bengaluru",
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
    location="Devanahalli, Bengaluru"
    description="Plotted development community in North Bengaluru’s fastest growing locations"
    onClick={() =>
      setSelectedProject({
        title: "Nature’s Sign",
        location: "Devanahalli, Bengaluru",
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
