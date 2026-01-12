import React from "react";
import heroImg2 from "../assets/Home/royalenclave.jpg";
import heroImg5 from "../assets/Home/profound_infra.jpg";

export default function Projects() {
  return (
    <>
      {/* ================= FIRST PROJECTS SECTION ================= */}
      <section className="bg-[#F5F2EF] py-20">
        {/* Header */}
        <div className="bg-[#FF6A00] py-20 text-center text-white">
          <h2 className="text-3xl font-semibold mb-3">
            Smartly planned developments for today’s lifestyle
          </h2>
          <p className="max-w-2xl mx-auto text-sm opacity-90">
            Smartly planned developments crafted with thoughtful layouts, contemporary comforts,
            and seamless functionality to elevate today’s way of living.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto px-6 -mt-10 space-y-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg flex overflow-hidden">
            <div className="relative w-1/2">
              <img src={heroImg2} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                Ongoing
              </span>
            </div>

            <div className="w-1/2 p-10 flex flex-col justify-center">
              <p className="text-sm font-semibold text-gray-700 mb-1">Modern Propound</p>
              <h3 className="text-xl font-semibold">Royal Enclave</h3>
              <p className="text-gray-500 text-sm mb-4">Marathahalli</p>
              <p className="text-sm text-gray-600 mb-6">
                2BHK & 3BHK <br /> Residential apartments
              </p>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm w-fit">
                VIEW DETAILS
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg flex overflow-hidden">
            <div className="relative w-1/2">
              <img src={heroImg5} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                Ongoing
              </span>
            </div>

            <div className="w-1/2 p-10 flex flex-col justify-center">
              <p className="text-sm font-semibold text-gray-700 mb-1">Modern Propound</p>
              <h3 className="text-xl font-semibold">Modern Profound Tech Park</h3>
              <p className="text-gray-500 text-sm mb-4">Marathahalli</p>
              <p className="text-sm text-gray-600 mb-6">
                2BHK & 3BHK <br /> Residential apartments
              </p>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm w-fit">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* ================= EXPERT ASSISTANCE HEADER ================= */}
<section className="bg-[#F6DCA6] py-16">
  <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">
        Expert Assistance, Simplified
      </h2>
      <p className="text-sm text-gray-700 mt-1">
        Our team ensures smooth, transparent, and hassle-free experience at every stage.
      </p>
    </div>

    <button className="border border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
      REQUEST CALLBACK
    </button>
  </div>
</section>

{/* ================= EXPERT ASSISTANCE CARDS ================= */}
<section className="bg-[#F5F2EF] py-20">
  <div className="max-w-6xl mx-auto px-6 space-y-10">

    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-lg flex overflow-hidden">
      <div className="relative w-1/2">
        <img src={heroImg2} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          Completed
        </span>
      </div>

      <div className="w-1/2 p-10 flex flex-col justify-center">
        <p className="text-sm font-semibold text-gray-700 mb-1">Modern Propound</p>
        <h3 className="text-xl font-semibold">Royal Enclave</h3>
        <p className="text-gray-500 text-sm mb-4">Marathahalli</p>
        <p className="text-sm text-gray-600 mb-6">
          2BHK & 3BHK <br /> Residential apartments
        </p>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm w-fit">
          VIEW DETAILS
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-lg flex overflow-hidden">
      <div className="relative w-1/2">
        <img src={heroImg5} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
          Upcoming
        </span>
      </div>

      <div className="w-1/2 p-10 flex flex-col justify-center">
        <p className="text-sm font-semibold text-gray-700 mb-1">Modern Propound</p>
        <h3 className="text-xl font-semibold">Modern Profound Tech Park</h3>
        <p className="text-gray-500 text-sm mb-4">Marathahalli</p>
        <p className="text-sm text-gray-600 mb-6">
          2BHK & 3BHK <br /> Residential apartments
        </p>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm w-fit">
          VIEW DETAILS
        </button>
      </div>
    </div>

  </div>
</section>

    </>
  );
}
