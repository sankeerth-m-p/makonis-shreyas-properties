import { useRef, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";
import RevealImageAnimation from "../components/RevealImageAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../components/scrollToTop";
gsap.registerPlugin(ScrollTrigger);

const projectsData = [

  {
    slug: "chourasia-shreyas",
    title: "Chourasia Shreyas",
    location: "Marathahalli, Bengaluru",
    status: "Completed",
    image: "/Home/ChourasiaShreyasMarathahalli.webp",
    logo: "/ChourasiaShreyas.webp",
    about: {
      heading: "Modern commercial spaces built for visibility and growth.",
      image: "/family.webp",
      text: [
        "Modern View is developed to meet the needs of small and mid-sized businesses.",
        "The project focuses on accessibility, efficient layouts, and long-term value.",
        "Ideal for offices, retail outlets, and professional services.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Strategic Advantages",
      items: [
        "Located in a busy commercial zone",
        "Easy access to Outer Ring Road",
        "Surrounded by residential communities",
      ],
    },
  },
  {
    slug: "shreyas-sunrise",
    title: "Shreyas Sunrise",
    location: "Nandagudi, Bengaluru",
    status: "Ongoing",
    image: "/sunrise.webp",
    logo: "/shreyas_sunrise.webp",
  },
 
  {
    slug: "natures-sign",
    title: "Nature’s Sign",
    location: "Devanahalli, Bengaluru",
    status: "Ongoing",
    image: "/Home/naturesign.webp",
    logo: "/naturessign.webp", about: {
      heading: "Modern commercial spaces built for visibility and growth.",
      image: "/family.webp",
      text: [
        "Modern View is developed to meet the needs of small and mid-sized businesses.",
        "The project focuses on accessibility, efficient layouts, and long-term value.",
        "Ideal for offices, retail outlets, and professional services.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Strategic Advantages",
      items: [
        "Located in a busy commercial zone",
        "Easy access to Outer Ring Road",
        "Surrounded by residential communities",
      ],
    },
  }, {
    slug: "modern-profound-tech-park",
    title: "Nature’s Sign",
    location: "Devanahalli, Bengaluru",
    status: "Completed",
    image: "/Home/royalEnclave.webp",
    logo: "/modern_propound_logo.webp",

    about: {
      heading: "A contemporary workspace designed for growing enterprises.",
      image: "/family.webp",
      text: [
        "Modern Profound Tech Park offers premium commercial spaces tailored for IT firms and corporate offices.",
        "The project blends smart design with functionality to support efficient business operations.",
        "Its professional environment encourages innovation, collaboration, and long-term growth.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Location & Business Advantages",
      items: [
        "Located in Kondapur, a major IT corridor",
        "Surrounded by leading tech companies",
        "Excellent connectivity via public transport",
        "Close to hotels, restaurants, and retail hubs",
      ],
    },
  },

  {
    slug: "royal-enclave",
    title: "Royal Enclave",
    location: "Marathahalli, Bangalore",
    status: "Completed",
    image: "/Home/royalEnclave.webp",
    logo: "/royalenclave.png",

    about: {
      heading: "Thoughtfully planned homes in a thriving urban neighborhood.",
      image: "/family.webp",
      text: [
        "Royal Enclave is crafted for families seeking comfort and convenience.",
        "The project offers well-designed living spaces with a focus on quality construction.",
        "Located close to key business hubs, it balances lifestyle and connectivity.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Location Benefits",
      items: [
        "Close to IT parks and workplaces",
        "Easy access to Outer Ring Road",
        "Nearby schools, hospitals, and malls",
      ],
    },
  },

  {
    slug: "paradise",
    title: "Paradise",
    location: "Vignan Nagar, Bangalore",
    status: "Completed",
    image: "/Home/royalEnclave.webp",
    logo: "/royalenclave.webp",

    about: {
      heading: "Comfortable residences built for peaceful city living.",
      image: "/family.webp",
      text: [
        "Paradise is a residential project designed for calm and secure living.",
        "The project emphasizes space optimization and natural ventilation.",
        "Ideal for families looking for a quiet yet well-connected locality.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Connectivity Advantages",
      items: [
        "Located in a developed residential area",
        "Close to Old Airport Road",
        "Good access to public transportation",
      ],
    },
  },

  {
    slug: "chourasia-shreyas",
    title: "Chourasia Shreyas",
    location: "Marathahalli, Bangalore",
    status: "Completed",
    image: "/Home/royalEnclave.webp",
    logo: "/royalenclave.webp",

    about: {
      heading: "A smart commercial destination in a high-demand business zone.",
      image: "/family.webp",
      text: [
        "Chourasia Shreyas is a commercial project designed for modern businesses.",
        "The structure supports offices, showrooms, and service-based enterprises.",
        "Its design ensures visibility, accessibility, and professional appeal.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Business Location Benefits",
      items: [
        "Prime location in Marathahalli",
        "High footfall area",
        "Close to IT hubs and residential zones",
        "Excellent road connectivity",
      ],
    },
  },

  {
    slug: "modern-view-apartment",
    title: "Modern View",
    location: "Marathahalli, Bangalore",
    status: "Completed",
    image: "/Home/royalEnclave.webp",
    logo: "/royalenclave.webp",

    about: {
      heading: "Modern commercial spaces built for visibility and growth.",
      image: "/family.webp",
      text: [
        "Modern View is developed to meet the needs of small and mid-sized businesses.",
        "The project focuses on accessibility, efficient layouts, and long-term value.",
        "Ideal for offices, retail outlets, and professional services.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
        { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
        { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
      ],
    },


    advantages: {
      image: "/swimmingpool.webp",
      title: "Strategic Advantages",
      items: [
        "Located in a busy commercial zone",
        "Easy access to Outer Ring Road",
        "Surrounded by residential communities",
      ],
    },
  },
];
const statusStyles = {
  Ongoing: "bg-[#04c2ae]",
  Completed: "bg-[#04c23e]",
  Upcoming: "bg-yellow-500",
};



const ProjectDetailsPage = () => {
  const { slug } = useParams();

  console.log("ALL PROJECT SLUGS:", projectsData.map(p => p.slug));
  console.log("CURRENT SLUG:", slug);
  const navigate = useNavigate();

  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <div className="pt-40 text-center">Project not found</div>;
  }


  // 🔥 DECIDE WHICH PAGE TO SHOW BASED ON SLUG

  if (project.slug === "shreyas-sunrise") {
    return (
      <ShreyasSunriseDetails
        project={project}
        onBack={() => navigate("/projects")}
      />
    );
  }


  // ✅ DEFAULT for all other projects
  return (
    <ProjectDetailsContent
      project={project}
      onBack={() => navigate("/projects")}
    />
  );


};


const ProjectDetailsContent = ({ project, onBack }) => {
  const heroWrapperRef = useRef(null);
  const heroClipRef = useRef(null);
  const heroImgRef = useRef(null);

  /* ================= HERO ANIMATION ================= */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        heroClipRef.current,
        { clipPath: "polygon(0 0,100% 0,100% 0,0 0)" },
        {
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
          duration: 1.2,
        }
      ).fromTo(
        heroImgRef.current,
        { scale: 1.5 },
        { scale: 1, duration: 1.2 },
        0
      );
    }, heroWrapperRef);

    return () => ctx.kill();
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">

      {/* ================= BACK BUTTON ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <button onClick={onBack} className="btn">
          <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
      </div>

      {/* ================= TOP INFO ================= */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* LOGO */}
          <div className="border-2 p-2 flex items-center justify-center">
            <img
              src={project.logo}
              alt={project.title}
              className="w-32 object-contain"
            />
          </div>

          {/* TITLE + STATUS */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="section-heading">{project.title}</h3>
              <p className="text-lg">{project.location}</p>
            </div>

            <span
              className={`${statusStyles[project.status]} text-white px-5 py-1.5 rounded-lg w-fit`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <div
        ref={heroWrapperRef}
        className="w-full h-[30vh] md:h-[50vh] lg:h-[85vh] overflow-hidden"
      >
        <div ref={heroClipRef} className="w-full h-full overflow-hidden">
          <img
            ref={heroImgRef}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      {project.about && (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <AnimatedHeading className="section-heading mb-6">
                {project.about.heading}
              </AnimatedHeading>

              <FloatUpText className="text-base">
                {project.about.text.map((para, i) => (
                  <p key={i} className="leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </FloatUpText>
            </div>

            <RevealImageAnimation
              image={project.about.image}
              className="w-full h-[350px] md:h-[600px] object-cover"
            />
          </div>
        </section>
      )}


      {/* ================= AMENITIES SECTION ================= */}
      {project.amenities && (
        <section
          className="relative w-full bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${project.amenities.background})` }}
        >
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <AnimatedHeading className="section-heading text-white text-center pb-20">
              {project.amenities.title}
            </AnimatedHeading>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 text-center text-white">
              {project.amenities.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-5"
                >
                  {/* ICON */}
                  <img
                    src={item.icon}
                    alt=""
                    className="w-12 h-12 md:w-16 md:h-16 object-contain invert"
                  />

                  {/* TEXT */}
                  <p className="px-4 text-sm lg:text-base leading-snug max-w-[240px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* ================= ADVANTAGES ================= */}
      {project.advantages && (
        <section className="bg-[#F4EFE5] py-20">
          <div className="max-w-6xl mx-auto px-6">

            <AnimatedHeading className="section-heading mb-8">
              {project.advantages.title}
            </AnimatedHeading>

            <div className="grid md:grid-cols-2 gap-16 items-start">

              <RevealImageAnimation
                image={project.advantages.image}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />

              <ul className="space-y-4 text-base">
                {project.advantages.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>›</span> {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export const ShreyasSunriseDetails = ({ project, onBack }) => {
  return (
    <div className="w-full bg-white">

      {/* COMMON TOP SECTION */}
      <ProjectDetailsContent project={project} onBack={onBack} />

      {/* ================= ABOUT SHREYAS SUNRISE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <AnimatedHeading className="section-heading mb-8">
              This project is strategically located very close to <br />
              Bengaluru&apos;s fast developing satellite township
            </AnimatedHeading>

            <FloatUpText className="text-base leading-relaxed space-y-4">
              <p>
                Shreyas Sunrise is developed by Shreyas Properties, a company with
                a passionate approach towards creating infrastructure and living
                spaces that add beauty to life.
              </p>

              <p>
                This project is strategically located very close to Bengaluru's
                fast developing satellite township of Nandagudi and is just a
                few minutes away from Devanahalli.
              </p>

              <p>
                The widening of roads and future connectivity through the planned
                Peripheral Ring Road, along with the elevated expressway to the
                airport and the high-speed rail link, has made this area one of
                the most sought-after destinations.
              </p>

              <p>
                This is an opportunity that speaks for itself. Its location, as
                you will soon see, is the key.
              </p>
            </FloatUpText>
          </div>

          <RevealImageAnimation
            image="/family.webp"
            className="h-[350px] md:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* ================= LOCATION ADVANTAGES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          <div>
            <AnimatedHeading className="section-heading mb-8">
              Location Advantages
            </AnimatedHeading>

            <ul className="space-y-4 text-base leading-relaxed">
              <li>› Attached to State Highway 35</li>
              <li>› Approx 20 mins away from the International Airport</li>
              <li>› Approx 15 mins from AERO SEZ Devanahalli IT Park (SAP Labs, Boeing, Wipro, Mahindra, Shell, etc.)</li>
              <li>› Approx 20 mins drive to Narasapura Industrial Area (Apple, Honda, Scania, Volvo, Triumph, etc.)</li>
              <li>› Approx 15 mins from Vemgal Industrial Area (GSK, Mitsubishi, TATA Motors, etc.)</li>
              <li>› Approx 15 mins from Devanahalli Old Jain Temple</li>
              <li>› Approx 10 mins from Nandagudi SEZ</li>
              <li>› 20 mins from Hoskote</li>
              <li>› 40 mins from ITPL</li>
              <li>› Approx 10 mins from Cargo Road</li>
              <li>› Approx 5 mins from Central University of North Bengaluru</li>
            </ul>
          </div>

          <RevealImageAnimation
            image="/sunrise.webp"
            className="h-[500px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* ================= LOCATION & BUSINESS ADVANTAGES ================= */}
      <section className="bg-[#F5F2EF] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          <RevealImageAnimation
            image="/business.webp"
            className="h-[500px] object-cover rounded-xl"
          />

          <ul className="space-y-4 text-base leading-relaxed">
            <li>
              <strong>Bengaluru Aerospace SEZ:</strong> 950-acre Bengaluru Aerospace Park including
              250-acre SEZ has attracted investments from 56 companies.
            </li>

            <li>
              <strong>Bengaluru University:</strong> Bengaluru North University proposed at
              Jangamakote (Sidlaghatta taluk).
            </li>

            <li>
              <strong>Devanahalli Business Park:</strong> 413-acre park expecting $2.2B investment.
            </li>

            <li>
              <strong>Narsapura Industrial Area:</strong> 700.75 acres, abutting NH-4.
            </li>

            <li>
              <strong>Vemgal Industrial Area:</strong> 666 acres on SH-96.
            </li>

            <li>
              <strong>International Convention Centre:</strong> Proposed near Bengaluru Airport.
            </li>

            <li>
              <strong>Devanahalli–Kolar Road (SH-96):</strong> Expansion from 2 to 6 lanes.
            </li>
          </ul>

        </div>
      </section>

      {/* ================= LAYOUT PLAN ================= */}
      <section className="bg-white py-20 px-6 max-w-6xl mx-auto">
        <AnimatedHeading className="section-heading mb-10">
          Layout Plan
        </AnimatedHeading>

        <img
          src="/layoutplan.webp"
          className="w-full object-contain border"
        />
      </section>

      {/* ================= LOCATION MAP ================= */}
      <section className="bg-white pb-20 px-6 max-w-6xl mx-auto">
        <AnimatedHeading className="section-heading mb-10">
          Location Map
        </AnimatedHeading>

        <img
          src="/locationmap.webp"
          className="w-full object-contain border"
        />
      </section>

    </div>
  );
};




export default ProjectDetailsPage;