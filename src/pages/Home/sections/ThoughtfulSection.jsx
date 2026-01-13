import RevealImageAnimation from "../../../components/RevealImageAnimation";
import aboutUsImg from "../../../assets/Home/aboutus.jpg";

const ThoughtfulSection = () => {
  return (
   <section className="relative bg-white pt-10 md:pt-56 pb-20 md:pb-32 overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

      {/* IMAGE */}
      <div className="flex justify-start md:justify-end">
        <RevealImageAnimation
          image={aboutUsImg}
          className="w-full   h-[420px] md:w-[420px] md:h-[520px] object-cover rounded-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col text-left ">

        <h2 className="text-[22px] leading-tight font-semibold text-[#1A1A1A] mb-3  md:max-w-none md:text-[38px]">
          Thoughtfully developing spaces that reflect city’s progress and promise
        </h2>

        <p className="text-[13px] text-gray-600 mb-6  md:max-w-md">
          Crafting meaningful experiences where every detail is carefully envisioned.
        </p>

        {/* VISION */}
        <div className="flex gap-3     mb-5">
          <span className="text-orange-600 mt-1">👁️</span>
          <div>
            <h4 className="text-[14px] font-semibold">Our vision</h4>
            <p className="text-[12px] text-gray-600 leading-relaxed    ">
              To create thoughtfully planned spaces that elevate everyday living,
              blending design, functionality and sustainability.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="flex gap-3 mb-8">
          <span className="text-orange-600 mt-1">🎯</span>
          <div>
            <h4 className="text-[14px] font-semibold">Our mission</h4>
            <p className="text-[12px] text-gray-600 leading-relaxed    ">
              To develop responsibly by integrating sustainable practices
              and creating balanced communities.
            </p>
          </div>
        </div>

        <button className="bg-ORANGE text-white px-8 py-2.5 rounded-full text-[11px] tracking-widest w-fit">
          VIEW DETAILS
        </button>

      </div>
    </div>
  </div>
</section>
  );
};

export default ThoughtfulSection;
