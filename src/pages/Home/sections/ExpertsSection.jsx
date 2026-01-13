import RevealImageAnimation from "../../../components/RevealImageAnimation";

const ExpertsSection = () => {
  return (
      <section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* GRID */}
    <div className="
      grid gap-10 items-center
      grid-cols-1 text-center
      md:grid-cols-[1fr_auto_1fr] md:text-left
    ">

      {/* CENTER IMAGE */}
      <RevealImageAnimation
        image="src/assets/Home/expert.jpg"
        className="
          w-[260px] h-[320px] rounded-2xl overflow-hidden mx-auto
          md:w-[300px] md:h-[400px]
        "
      />

      {/* LEFT CONTENT (but on mobile comes after image) */}
      <div className="
        flex flex-col gap-3 max-w-[260px] mx-auto
        md:justify-self-end md:text-right md:mx-0
        order-2 md:order-1
      ">
        <span className="text-2xl">🎧</span>

        <p className="text-[14px] text-gray-600">
          Have any questions?
        </p>

        <h3 className="text-[24px] font-semibold text-[#1A1A1A] leading-snug">
          Speak with <br />
          our experts
        </h3>
      </div>

      {/* RIGHT CONTENT */}
      <div className="
        flex flex-col gap-4 max-w-[260px] mx-auto
        md:justify-self-start md:mx-0
        order-3 md:order-3
      ">
        <p className="text-[14px] text-gray-600 leading-relaxed">
          Request a callback for personalized assistance and project details.
        </p>

        <button className="
          bg-[#FF6A13] text-white px-7 py-2.5 rounded-full text-[11px]
          tracking-widest uppercase hover:bg-[#e85c0f] transition
          mx-auto md:mx-0 w-fit
        ">
          Request Callback
        </button>
      </div>

    </div>

  </div>
</section>
  );
};

export default ExpertsSection;
