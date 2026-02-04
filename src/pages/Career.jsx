import React from "react";

const Career = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= TOP HIRING SECTION ================= */}
        <div className="bg-[#f6f3f2] rounded-[28px] p-10 flex flex-col lg:flex-row items-center gap-10 mb-20">
          <img
            src="/career.webp"
            alt="We are hiring"
            className="w-full lg:w-[400px] h-[260px] rounded-2xl object-cover"
          />

          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold mb-4 text-black">
              We are hiring !
            </h2>

            <p className="text-black mb-8 leading-relaxed">
              Looking for a workplace that values <br />
              ambition and dedication? Join us!
            </p>

            <p className="text-black text-sm">
              Apply now at: <br />
              <span className="font-semibold">info@shreyasinfra.com</span>
            </p>
          </div>
        </div>

        {/* ================= CURRENT OPENINGS ================= */}
        <h3 className="text-[24px] font-semibold mb-10 text-black">
          Current openings
        </h3>

        {/* ================= SALES MANAGER ================= */}
        <div className="mb-16">

          {/* HEADER STRIP */}
          <div className="bg-[#eef1f1] px-8 py-4 rounded-md">
            <h4 className="text-[26px] font-semibold text-black mb-2">
              Sales manager
            </h4>

            <div className="flex flex-wrap gap-6 text-sm text-black">
              <span>Male candidates</span>
              <span>Location: Bengaluru</span>
              <span>Experience: 11+ years</span>
              <span>Vacancy: 2</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="py-6">
            <p className="text-black text-base mb-6 leading-relaxed">
              We are looking for an experienced Sales Manager to lead our real estate
              sales team, drive revenue growth, and develop strategic sales plans.
              The role involves team management, client acquisition, and ensuring
              sales targets are met while maintaining strong customer relationships.
            </p>

            <p className="font-semibold text-black mb-1">
              Minimum Qualification
            </p>
            <p className="mb-4 text-black">
              MBA – Master of Business Administration
            </p>

            <p className="font-semibold text-black mb-3">
              Key Responsibilities Area [KRA]
            </p>

            <ul className="space-y-2 text-black text-sm list-disc pl-5">
              <li>Develop and implement effective sales strategies.</li>
              <li>Lead and manage the sales team.</li>
              <li>Identify and engage potential clients.</li>
              <li>Build strong client and broker relationships.</li>
              <li>Monitor market trends and competitors.</li>
              <li>Coordinate with marketing for lead conversion.</li>
            </ul>
          </div>
        </div>

        {/* ================= MARKETING MANAGER ================= */}
        <div>

          {/* HEADER STRIP */}
          <div className="bg-[#eef1f1] px-8 py-4 rounded-md">
            <h4 className="text-[26px] font-semibold text-black mb-2">
              Marketing manager
            </h4>

            <div className="flex flex-wrap gap-6 text-sm text-black">
              <span>Male candidates</span>
              <span>Location: Bengaluru</span>
              <span>Experience: 11+ years</span>
              <span>Vacancy: 2</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="py-6">
           <p className="text-black text-base mb-6 leading-relaxed">
              We are looking for an experienced Marketing Manager to plan and execute
              real estate marketing strategies and improve brand visibility.
            </p>

            <p className="font-semibold text-black mb-1">
              Minimum Qualification
            </p>
            <p className="mb-4 text-black">
              MBA – Master of Business Administration
            </p>

            <p className="font-semibold text-black mb-3">
              Key Responsibilities Area [KRA]
            </p>

            <ul className="space-y-2 text-black text-sm list-disc pl-5">
              <li>Plan and execute marketing strategies.</li>
              <li>Coordinate with sales teams.</li>
              <li>Manage digital & offline campaigns.</li>
              <li>Analyze market and competitor trends.</li>
              <li>Handle branding & promotions.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
