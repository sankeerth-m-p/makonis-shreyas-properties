import React from "react";

const Career = () => {
  return (
    <div className="bg-[#f3f0ef] pt-36 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Hiring Card */}
        <div className="bg-white rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10 shadow-sm">
          <img
            src="/Career.jpg"
            alt="We are hiring"
            className="w-full lg:w-[420px] rounded-2xl object-cover"
          />
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold mb-4">We are hiring !</h2>
            <p className="text-gray-700 mb-8">
              Looking for a workplace that values <br />
              ambition and dedication? Join us!.
            </p>
            <p className="text-gray-800">
              Apply now at: <br />
              <span className="font-semibold">career@shreyasinfr.com</span>
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <h3 className="text-2xl font-semibold mt-20 mb-8">Current openings</h3>

        {/* Sales Manager */}
        <div className="bg-[#eef1f1] rounded-xl p-8 mb-12">
          <h4 className="text-2xl font-semibold mb-3">Sales manager</h4>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
            <span>Male candidates</span>
            <span>Location: Bengaluru</span>
            <span>Experience: 11+ years</span>
            <span>Vacancy: 2</span>
          </div>

          <p className="text-gray-700 mb-6">
            We are looking for an experienced Sales Manager to lead our real estate sales team, drive revenue growth,
            and develop strategic sales plans. The role involves team management, client acquisition, and ensuring sales
            targets are met while maintaining strong customer relationships.
          </p>

          <p className="font-semibold mb-1">Minimum Qualification</p>
          <p className="mb-4">MBA - Master of Business Administration</p>

          <p className="font-semibold mb-2">Key Responsibilities Area &nbsp; KRA</p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>Develop and implement effective sales strategies for real estate projects.</li>
            <li>Lead, mentor, and manage the sales team to achieve targets.</li>
            <li>Identify and engage potential clients through various sales channels.</li>
            <li>Build and maintain strong relationships with clients, brokers, and channel partners.</li>
            <li>Monitor market trends, competitor activities, and customer needs.</li>
            <li>Ensure smooth coordination between marketing and sales teams for lead conversion.</li>
            <li>Oversee negotiations, closing deals, and handling customer queries.</li>
            <li>Prepare and present sales reports to management.</li>
            <li>Smart, well-presentable professional with real estate knowledge; hospitality backgrounds welcome.</li>
            <li>High-ticket sales experience, strong communication, excellent grooming, relationship management skills.</li>
          </ul>
        </div>

        {/* Marketing Manager */}
        <div className="bg-[#eef1f1] rounded-xl p-8">
          <h4 className="text-2xl font-semibold mb-3">Marketing manager</h4>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
            <span>Male candidates</span>
            <span>Location: Bengaluru</span>
            <span>Experience: 11+ years</span>
            <span>Vacancy: 2</span>
          </div>

          <p className="text-gray-700 mb-6">
            We are looking for an experienced Sales Manager to lead our real estate sales team, drive revenue growth,
            and develop strategic sales plans. The role involves team management, client acquisition, and ensuring sales
            targets are met while maintaining strong customer relationships.
          </p>

          <p className="font-semibold mb-1">Minimum Qualification</p>
          <p className="mb-4">MBA - Master of Business Administration</p>

          <p className="font-semibold mb-2">Key Responsibilities Area &nbsp; KRA</p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>Develop and implement effective sales strategies for real estate projects.</li>
            <li>Lead, mentor, and manage the sales team to achieve targets.</li>
            <li>Identify and engage potential clients through various sales channels.</li>
            <li>Build and maintain strong relationships with clients, brokers, and channel partners.</li>
            <li>Monitor market trends, competitor activities, and customer needs.</li>
            <li>Ensure smooth coordination between marketing and sales teams for lead conversion.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Career;
