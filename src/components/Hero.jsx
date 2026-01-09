export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
          {/* Background Image Layer (empty div) */}
          
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero-family-car.jpg')", // replace with your image path
        }}
      />

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-end h-full">
        <div className="max-w-7xl px-6 pb-20">
          {/* Orange Info Card */}
          <div className="bg-ORANGE text-white max-w-md p-6 rounded-sm shadow-lg">
            <p className="text-xs tracking-wide uppercase opacity-90">
              Premium Living
            </p>

            <h1 className="mt-2 text-2xl md:text-3xl font-semibold leading-snug">
              Where every luxury <br />
              square foot speaks quality.
            </h1>

            <p className="mt-3 text-sm text-orange-100">
              Thoughtfully designed spaces built with craftsmanship,
              comfort, and timeless elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
