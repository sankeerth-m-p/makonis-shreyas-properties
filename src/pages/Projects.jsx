import React from "react";
import heroImg2 from "../assets/Home/royalenclave.jpg";
import heroImg5 from "../assets/Home/profound_infra.jpg";
import brandLogo from "../assets/images/modern_propound_logo.png";

const statusStyles = {
  Ongoing: "bg-ORANGE2",
  Completed: "bg-green-500",
  Upcoming: "bg-yellow-500",
};

const ProjectCard = ({
  image,
  status = "Ongoing",
  brand = "Modern Propound",
  title,
  location,
  description,
  buttonText = "VIEW DETAILS",
  onClick,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* IMAGE */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img src={image} alt={title} className="w-full  h-full object-cover" />

        {/* STATUS */}
        <span
          className={`hidden md:block absolute top-4 right-4 ${
            statusStyles[status] || "bg-ORANGE"
          } text-white text-xs px-3 py-1 rounded-full`}
        >
          {status}
        </span>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        {/* BRAND */}
       {/* <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"> */}
  <img
    src={brandLogo}
    alt={brand}
    className="w-32 py-2 h-auto -ml-5 object-contain"
  />
{/* </p> */}


        {/* TITLE */}
        <h3 className="text-2xl md:text-xl font-semibold">{title}</h3>

        {/* LOCATION */}
        <p className="text-gray-500 text-sm mb-4">{location}</p>

        {/* LINE */}
        <div className="w-full h-[1px] bg-gray-300 mb-5 md:mb-4" />

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 mb-6">{description}</p>

        {/* BUTTON */}
        <button
          onClick={onClick}
          className="bg-ORANGE hover:bg-ORANGE2 text-white px-6 py-2 rounded-full text-sm w-fit tracking-wider"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      {/* ================= FIRST PROJECTS SECTION ================= */}
      <section className="bg-[#F5F2EF] md:py-20">
        {/* Header */}
        <div className="bg-ORANGE px-4 py-20 text-center text-white">
          <h2 className="text-lg md:text-3xl font-semibold mb-3">
            Smartly planned developments for today’s lifestyle
          </h2>
          <p className="max-w-2xl mx-auto text-sm opacity-90">
            Smartly planned developments crafted with thoughtful layouts,
            contemporary comforts, and seamless functionality to elevate today’s
            way of living.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto px-6 -mt-14 md:-mt-10 space-y-10">
          <ProjectCard
            image={heroImg2}
            status="Ongoing"
            title="Royal Enclave"
            location="Marathahalli"
            description={
              <>
                2 BHK & 3 BHK <br /> Residential apartments
              </>
            }
            onClick={() => console.log("Royal Enclave clicked")}
          />

          <ProjectCard
            image={heroImg5}
            status="Ongoing"
            title="Modern Profound Tech Park"
            location="Marathahalli"
            description={
              <>
                2 BHK & 3 BHK <br /> Residential apartments
              </>
            }
            onClick={() => console.log("Tech Park clicked")}
          />
        </div>
      </section>

      {/* ================= EXPERT ASSISTANCE HEADER ================= */}
      <section className="bg-[#F6DCA6] hidden md:block py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Expert Assistance, Simplified
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Our team ensures smooth, transparent, and hassle-free experience
              at every stage.
            </p>
          </div>

          <button className="border border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition w-fit">
            REQUEST CALLBACK
          </button>
        </div>
      </section>

      {/* ================= EXPERT ASSISTANCE CARDS ================= */}
      <section className="bg-[#F5F2EF] pb-10 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <ProjectCard
            image={heroImg2}
            status="Completed"
            title="Royal Enclave"
            location="Marathahalli"
            description={
              <>
                2 BHK & 3 BHK <br /> Residential apartments
              </>
            }
            onClick={() => console.log("Completed Royal Enclave clicked")}
          />

          <ProjectCard
            image={heroImg5}
            status="Upcoming"
            title="Modern Profound Tech Park"
            location="Marathahalli"
            description={
              <>
                2 BHK & 3 BHK <br /> Residential apartments
              </>
            }
            onClick={() => console.log("Upcoming Tech Park clicked")}
          />
        </div>
      </section>
    </>
  );
}
