import { useRef, useLayoutEffect, useState  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";
import RevealImageAnimation from "../components/RevealImageAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../components/scrollToTop";
gsap.registerPlugin(ScrollTrigger);

const MobileGalleryImage = ({ src }) => {
  const wrapperRef = useRef(null);
  const clipRef = useRef(null);
  const imgRef = useRef(null);
  const playedRef = useRef(false);

  useLayoutEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playedRef.current) {
          playedRef.current = true;

          gsap.timeline({ defaults: { ease: "power2.out" } })
            .fromTo(
              clipRef.current,
              { clipPath: "polygon(0 0,100% 0,100% 0,0 0)" },
              {
                clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
                duration: 1.1,
              }
            )
            .fromTo(
              imgRef.current,
              { scale: 1.5 },
              { scale: 1, duration: 1.1 },
              0
            );

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full aspect-[16/9] overflow-hidden rounded-[14px]"
    >
      <div ref={clipRef} className="w-full h-full overflow-hidden">
        <img
          ref={imgRef}
          src={src}
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
};

const GalleryGrid = () => {
  const [active, setActive] = useState(null);

  const images = [
    "/Gallery1.jpg",
    "/Gallery2.jpg",
    "/Gallery3.jpg",
    "/Gallery4.jpg",
    "/sun.jpg",
    "/Gallery1.jpg",
  ];

  return (
    <>
      {/* ================= DESKTOP GALLERY ================= */}
      <div
        className="relative hidden md:block w-full h-[600px] rounded-2xl bg-white overflow-hidden"
        onMouseLeave={() => setActive(null)}
      >
        {/* GRID */}
        <div className="grid grid-cols-3 grid-rows-2 w-full h-full gap-[6px] p-[6px]">
          {images.map((img, index) => (
          <div
  key={index}
  onMouseEnter={() => setActive(index)}
  className="gallery-tile"
>
  <img src={img} alt="" />

  {/* ZOOM ICON */}
  <span className="gallery-icon">
    <img src="/zoom.svg" alt="Zoom" />
  </span>
</div>

          ))}
        </div>

        {/* OVERLAY IMAGE (NO JUMP) */}
    <div className="absolute inset-0 z-30 pointer-events-none">
  <img
    src={active !== null ? images[active] : images[0]}
    alt=""
    className={`gallery-hover-image ${
      active !== null ? "is-visible" : ""
    }`}
  />
</div>

      </div>

      {/* ================= MOBILE GALLERY ================= */}
     <div className="md:hidden flex flex-col gap-[10px] px-3">
  {images.map((img, index) => (
    <MobileGalleryImage key={index} src={img} />
  ))}
</div>


      {/* ================= CSS (INLINE) ================= */}
      <style>
        {`
          .gallery-tile {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            background: white;
            cursor: pointer;
          }

          .gallery-tile img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
          }

          .gallery-tile:hover img {
            transform: scale(1.04);
          }

     .gallery-hover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;

  opacity: 0;
  transform: scale(1.03);
  transition:
    opacity 0.35s ease,
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);

  will-change: opacity, transform;
}

.gallery-hover-image.is-visible {
  opacity: 1;
  transform: scale(1);
}



       .gallery-tile-mobile {
  width: 100%;
  aspect-ratio: 16 / 9;   /* 👈 KEY FIX */
  overflow: hidden;
  border-radius: 14px;
  background: white;
}

.gallery-tile-mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;

  width: 34px;
  height: 34px;

  background: rgba(0, 0, 0, 0.55);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none; /* IMPORTANT */
}

.gallery-icon img {
  width: 16px;
  height: 16px;

  filter: brightness(0) invert(1);
}


/* Slightly smaller on mobile */
.gallery-icon.mobile {
  width: 30px;
  height: 30px;
}





        `}
      </style>
    </>
  );
};







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
        "Chourasia Shreyas is a well-planned commercial project located in the prime locality of Marathahalli, Bangalore. Designed with modern architecture and functionality, it caters to businesses looking for a strategic location with high visibility and easy connectivity. Its smart design ensures that both businesses and visitors enjoy a convenient and professional environment..",
        "The project benefits from its strategic placement in one of Bangalore’s most vibrant and well-connected localities. Marathahalli is known for its proximity to IT hubs, tech parks, residential neighborhoods, and major road networks like Outer Ring Road and Old Airport Road, making it an ideal choice for retail, office, and service-based businesses.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
       { icon: "/a.svg", text: "Spacious commercial units suitable for offices, showrooms, or retail outlets" },
        { icon: "/b.svg", text: "24/7 security and CCTV surveillance for a safe business environment" },
        { icon: "/c.svg", text: "Ample parking space for visitors and occupants" },
        { icon: "/highvisibility.svg", text: "High visibility from main roads to attract footfall and customers" },
        { icon: "/e.svg", text: "Power backup and modern lift facilities for smooth operations" },
        { icon: "/harvesting.svg", text: "Rainwater harvesting and eco-friendly infrastructure" },
      ],
    },


    advantages: {
      image: "/tech.webp",
      title: "Strategic Advantages",
      items: [
    "Situated in Marathahalli’s prime commercial hub",
"Close to IT parks, business centers, and corporate offices",
"High footfall from nearby residential communities and tech employees",
"Easy connectivity to Whitefield, Bellandur, and Outer Ring Road",
"Ideal for startups, retail businesses, and professional offices",
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
  },
  //  {
  //   slug: "modern-profound-tech-park",
  //   title: "Modern Profound Tech Park",
  //   location: "Kondapur, Hyderabad",
  //   status: "Completed",
  //   image: "/Home/profoundInfra.webp",
  //   logo: "/modernpropound.webp",

  //   about: {
  //     heading: "A contemporary workspace designed for growing enterprises.",
  //     image: "/family.webp",
  //     text: [
  //       "Modern Profound Tech Park is a prominent commercial property located in Kondapur, Hyderabad, with a landmark beside Satyam. Designed for modern businesses, this premium office complex provides spacious and skillfully designed commercial spaces suitable for IT, corporate offices, and startups alike. The project reflects a blend of functionality and modern architecture, offering an environment that fosters productivity and professional growth.",
  //       "The building enjoys excellent connectivity and a prime location surrounded by leading companies like Capitol IQ, TCS, Cognizant, and HSBC. With seamless access to public transportation, proximity to restaurants, hotels, and retail hubs, and in-house dedicated parking, this tech park ensures a comfortable and business-friendly ecosystem for its occupants.",
  //     ],
  //   },

  //   amenities: {
  //     background: "/hotel.webp",
  //     title: "Key Features & Amenities",
  //     items: [
  //       { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
  //       { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
  //       { icon: "/c.svg", text: "In-house parking for employees and visitors" },
  //       { icon: "/d.svg", text: "Modern infrastructure with high-speed connectivity" },
  //       { icon: "/e.svg", text: "Power backup and lift facilities for smooth operations" },
  //       { icon: "/f.svg", text: "Proximity to restaurants, hotels, and essential services" },
  //     ],
  //   },


  //   advantages: {
  //     image: "/transport.webp",
  //     title: "Location & Business Advantages",
  //     items: [
  //       "Situated in Kondapur, beside Satyam, a major IT corridor",
  //       "Surrounded by Capitol IQ, TCS, Cognizant, and HSBC",
  //       "Excellent public transport connectivity via bus and cabs",
  //       "Easy access to malls, eateries, and business support services",
  //       "Ideal for IT companies, startups, and corporate offices looking for a prestigious address",
  //     ],
  //   },
  // },

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
        "Royal Enclave is an ultimate reflection of the urban chic lifestyle located in the vibrant neighborhood of Marathahalli, Bangalore. This residential project offers exclusively designed apartments that embody elegance, simplicity, and comfort. With thoughtfully planned interiors and quality construction, it is tailored for modern families seeking a stylish yet peaceful living experience.",
        " The project is inspiring in design and surrounded by lush greenery, providing a calm escape from the city’s hustle while keeping you close to urban conveniences. Strategically positioned in Marathahalli, Royal Enclave allows residents to enjoy quick connectivity to Outer Ring Road, Whitefield, and IT hubs, making it an excellent choice for working professionals.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious 2BHK & 3BHK residential apartments" },
//        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "Dedicated parking facilities for residents and visitors" },
        { icon: "/landscape.svg", text: "Landscaped gardens and green surroundings" },
        { icon: "/e.svg", text: "Power backup for uninterrupted living" },
        { icon: "/kidsplayarea.svg", text: "Children’s play area and recreational spaces" },
        { icon: "/harvesting.svg", text: "Rainwater harvesting and eco-friendly infrastructure" },
      ],
    },


    advantages: {
      image: "/fam.webp",
      title: "Locality & Lifestyle Advantages",
      items: [
"Located in Marathahalli’s prime residential zone" ,
"Close to renowned schools, colleges, and educational institutes",
"Easy access to hospitals, malls, and supermarkets",
"Proximity to tech parks and major IT corridors",
"Perfect balance of peaceful community living and urban convenience",
      ],
    },
  },

  {
    slug: "paradise",
    title: "Paradise",
    location: "Vignan Nagar, Bangalore",
    status: "Completed",
    image: "/Home/SandsParadiseVignanNagar_enhanced.webp",
    logo: "/Paradise.webp",

    about: {
      heading: "Comfortable residences built for peaceful city living.",
      image: "/family.webp",
      text: [
        "Paradise, located in Vignana Nagar, Bangalore, is precisely planned for the modern city dweller.Designed to provide a pollution-free living environment, this residential community is surrounded by wide open spaces that offer not just the luxury of space, but also peace of mind.. Every corner of this development reflects careful planning to balance urban convenience with serene living. ",
        "The project is strategically located, placing residents in close proximity to schools, shopping centers, hospitals, and entertainment hubs. Whether it’s daily essentials, healthcare, or leisure activities, everything is just a short drive away, making Paradise a perfect choice for families and professionals seeking comfort and convenience.",
       
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious 2BHK and 3BHK luxury apartments" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "In-house parking for employees and visitors" },
        { icon: "/landscape.svg", text: "Landscaped gardens and green surroundings" },
        { icon: "/e.svg", text: "Power backup for all common areas and lifts" },
        { icon: "/kidsplayarea.svg", text: "Children’s play area and recreational spaces" },
    //     { icon: "/f.svg", text: "Rainwater harvesting and eco-friendly design" },
      ],
    },


    advantages: {
      image: "/nature.webp",
      title: "Connectivity Advantages",
      items: [
       "Located in a peaceful and pollution-free environment",
"Surrounded by beautiful natural spots for a refreshing lifestyle",
"Close to schools, hospitals, malls, and entertainment avenues",
"Well-connected to IT hubs and key areas of East Bangalore",
"Ideal for those seeking modern living with a community feel",
      ],
    },
  },

//   {
//     slug: "chourasia-shreyas",
//     title: "Chourasia Shreyas",
//     location: "Marathahalli, Bangalore",
//     status: "Completed",
//     image: "/Home/royalEnclave.webp",
//     logo: "/royalenclave.webp",

//     about: {
//       heading: "A smart commercial destination in a high-demand business zone.",
//       image: "/family.webp",
//       text: [
//         "Chourasia Shreyas is a well-planned commercial project located in the prime locality of Marathahalli, Bangalore. Designed with modern architecture and functionality, it caters to businesses looking for a strategic location with high visibility and easy connectivity. Its smart design ensures that both businesses and visitors enjoy a convenient and professional environment..",
//         "The project benefits from its strategic placement in one of Bangalore’s most vibrant and well-connected localities. Marathahalli is known for its proximity to IT hubs, tech parks, residential neighborhoods, and major road networks like Outer Ring Road and Old Airport Road, making it an ideal choice for retail, office, and service-based businesses.",
//       ],
//     },

//     amenities: {
//       background: "/hotel.webp",
//       title: "Key Features & Amenities",
//       items: [
//         { icon: "/a.svg", text: "Spacious commercial units suitable for offices, showrooms, or retail outlets" },
//         { icon: "/b.svg", text: "24/7 security and CCTV surveillance for a safe business environment" },
//         { icon: "/c.svg", text: "Ample parking space for visitors and occupants" },
//         { icon: "/d.svg", text: "High visibility from main roads to attract footfall and customers" },
//         { icon: "/e.svg", text: "Power backup and modern lift facilities for smooth operations" },
//         { icon: "/f.svg", text: "Rainwater harvesting and eco-friendly infrastructure" },
//       ],
//     },


//     advantages: {
//       image: "/swimmingpool.webp",
//       title: "Location & Business Advantages",
//       items: [
// "Situated in Marathahalli’s prime commercial hub",
// "Close to IT parks, business centers, and corporate offices",
// "High footfall from nearby residential communities and tech employees",
// "Easy connectivity to Whitefield, Bellandur, and Outer Ring Road",
// "Ideal for startups, retail businesses, and professional offices",
//       ],
//     },
//   },

  {
    slug: "modern-view-apartment",
    title: "Modern View",
    location: "Marathahalli, Bangalore",
    status: "Completed",
    image: "/Home/ModernView.webp",
    logo: "/ModernView.webp",

    about: {
      heading: "Modern commercial spaces built for visibility and growth.",
      image: "/family.webp",
      text: [
        "Nestled amidst a bustling IT corridor, the society offers 32 exclusive homes, fostering a close-knit and family-friendly environment. Its strategic location provides excellent connectivity to Outer Ring Road, Whitefield, and ITPL, making it an ideal choice for working professionals and families alike.",
        "The society emphasizes comfortable and secure living, ensuring that residents enjoy a peaceful atmosphere while staying connected to urban conveniences. Essential facilities and modern infrastructure make day-to-day life effortless and enjoyable.",
      ],
    },

    amenities: {
      background: "/hotel.webp",
      title: "Key Features & Amenities",
      items: [
        { icon: "/a.svg", text: "Spacious commercial office spaces designed for flexibility" },
        { icon: "/b.svg", text: "24/7 security with CCTV surveillance" },
        { icon: "/c.svg", text: "Dedicated covered and open parking spaces" },
        { icon: "/lift.svg", text: "Lift facility for easy access to all floors" },
      //  { icon: "/e.svg", text: "Power backup for uninterrupted living" },
        { icon: "/harvesting.svg", text: "Rainwater harvesting and eco-friendly infrastructure" },
       { icon: "/landscape.svg", text: "Landscaped garden and walking areas for relaxation" },
      ],
    },


    advantages: {
      image: "/kids.webp",
      title: "Lifestyle Benefits for Residents",
      items: [
      " Children’s play area for recreational activities",
"Well-maintained party hall for gatherings and events",
"Close proximity to schools, hospitals, malls, and supermarkets",
"Easy access to public transportation and nearby IT hubs",
"Peaceful community living in a low-density environment",
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
<div className="max-w-6xl mx-auto px-6 pt-10 hidden md:block">
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
        This project is strategically located very close to Bengaluru’s fast developing satellite township
      </AnimatedHeading>

      <FloatUpText className="text-base leading-relaxed space-y-4">
        <p>
          Shreyas Sunrise is developed by Shreyas properties, a company with a passionate approach towards creating infracture and living space that adds beauty to life.
          This project is strategically located very close to Bengaluru’s fast developing satellite township the Nandagudi and is just a few minutes away from Devanahalli.
        </p>

        <p>
          The Widening of roads and future connectivity through the planned peripheral ring road, along with the elevated expressway to the airport and the high-speed rail link, has also made this area the most sought-after one.
          This is an opportunity that speaks for itself its location, as you will soon see, is the key.
        </p>

        {/* ✅ RERA DETAILS (same size + animated) */}
        <p className="text-base leading-relaxed pt-4">
          <span className="font-semibold">RERA Number – </span>
          PRM/KA/RERA/1254/465/PR/181103/002112,&nbsp;
          PRM/KA/RERA/1254/465/PR/181103/002113,&nbsp;
          PRM/KA/RERA/1254/465/PR/181103/002114,&nbsp;
          PRM/KA/RERA/1254/465/PR/181103/002115,&nbsp;
          PRM/KA/RERA/1254/465/PR/181103/002116
        </p>

      </FloatUpText>
    </div>

    <RevealImageAnimation
      image="/family.webp"
      className="h-[350px] md:h-[600px] object-cover"
    />
  </div>
</section>


{/* ================= STRATEGIC LOCATION HIGHLIGHTS ================= */}
<section className="bg-[#F5F2EF] py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADING */}
    <AnimatedHeading className="section-heading mb-14">
     Facilities & Amenities
    </AnimatedHeading>

    {/* CONTENT GRID */}
    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT IMAGE */}
      <RevealImageAnimation
        image="/Gym.jpg"
        className="h-[520px] w-full object-cover rounded-xl"
      />

      {/* RIGHT CONTENT */}
      <div>
  <FloatUpText className="text-base leading-relaxed">
    <ul className="space-y-4">
      <li>› Swimming pool</li>
      <li>› Overhead storage tanks for water</li>
      <li>› Playground for children</li>
      <li>› Basketball court, tennis court & cricket practice net</li>
      <li>› Space for commercial complex & schools</li>
      <li>› Clubhouse with library, yoga & aerobics room</li>
      <li>› Spa & multi-gym</li>
      <li>› Plot sizes range from 30×40, 30×50, 40×50, 40×60 & 60×80</li>
      <li>› Well-designed arch</li>
      <li>› Eco-friendly environment</li>
    </ul>
  </FloatUpText>
</div>


    </div>
  </div>
</section>

      {/* ================= LOCATION ADVANTAGES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          <div>
            <AnimatedHeading className="section-heading mb-8">
              Location Advantages
            </AnimatedHeading>

         <FloatUpText className="text-base leading-relaxed">
  <ul className="space-y-4">
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
</FloatUpText>

          </div>

          <RevealImageAnimation
            image="/sun.jpg"
            className="h-[500px] object-cover rounded-xl"
          />
        </div>
      </section>

  {/* ================= LOCATION & BUSINESS ADVANTAGES ================= */}
<section className="bg-[#F5F2EF] py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADING */}
    <AnimatedHeading className="section-heading mb-14">
    Developments Nearby
    </AnimatedHeading>

    {/* CONTENT GRID */}
    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT IMAGE */}
      <RevealImageAnimation
        image="/development.webp"
        className="h-[520px] w-full object-cover rounded-xl"
      />

      {/* RIGHT CONTENT */}
      <div>
     <FloatUpText className="text-base leading-relaxed">
  <ul className="space-y-4">

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>Bengaluru Aerospace SEZ:</strong> 950-acre Bengaluru Aerospace Park including
        a 250-acre Special Economic Zone (SEZ) has attracted investments from 56 large
        and mid-sized companies.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>Bengaluru University:</strong> Bengaluru North University would be established
        as an affiliating university with its headquarters at Jangamakote
        (Sidlaghatta taluk).
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>Devanahalli Business Park:</strong> 413-acre Devanahalli Business Park expects
        to attract an investment of $2.2 billion over the next three to five years.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>Narsapura Industrial Area:</strong> Developed over 700.75 acres, abutting NH-4,
        about 15 km from Kolar and 55 km from Bengaluru.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>Vemgal Industrial Area:</strong> Located on SH-96, about 10 km from
        Narsapura & Jakkasandra Industrial Area, covering 666 acres.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>International Convention Centre:</strong> Proposed on 35 acres next to
        Bengaluru International Airport under a PPP model.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-lg leading-none">›</span>
      <p>
        <strong>Devanahalli–Kolar Road (SH-96):</strong> Being widened from 2 to 6 lanes to
        support airport expansion and real estate growth.
      </p>
    </li>

  </ul>
</FloatUpText>

      </div>

    </div>
  </div>
</section>

{/* ================= GALLERY SECTION ================= */}
<section className="bg-white py-12 md:py-16">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADING */}
<AnimatedHeading className="section-heading mb-6 md:mb-8">
      Gallery
    </AnimatedHeading>

    {/* GALLERY WRAPPER */}
   <div className="relative w-full md:h-[600px] rounded-2xl md:overflow-hidden">
      <GalleryGrid />
    </div>

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