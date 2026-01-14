import RevealImageAnimation from "../../../components/RevealImageAnimation";

const ExpertsSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">

     {/* LEFT CONTENT */}
<div className="flex flex-col gap-3 items-center text-center">
  <span className="text-3xl text-gray-400 flex justify-center">🎧</span>

  <p className="text-[14px] text-gray-600">
    Have any questions?
  </p>

  <h3 className="text-[26px] font-semibold text-[#1A1A1A] leading-snug">
    Speak with <br /> our experts
  </h3>
</div>


          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <RevealImageAnimation
              image="/Home/expert.jpg"
              className="w-[300px] h-[400px] rounded-3xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-xs">
              Request a callback for personalized assistance and project details.
            </p>

            <button className="bg-[#FF6A13] text-white px-8 py-3 rounded-full text-[12px] tracking-widest uppercase hover:bg-[#e85c0f] transition">
              REQUEST CALLBACK
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExpertsSection;
