
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import mediaImg5 from "/north.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";

/* ---------------- MEDIA DATA ---------------- */
const mediaData = [
  {
    id: 1,
    image: "/media/cover/cover (8).png",
    logo: "/media/et-logo.webp",
    date: "Aug 20, 2024",
    link: "https://economictimes.indiatimes.com/industry/cons-products/electronics/taiwans-bestec-proposes-rs-200-cr-investment-in-manufacturing-unit-near-bengaluru/articleshow/112657997.cms?from=mdr",
    shortTitle: "Taiwan's Bestec proposes Rs 200 Cr investment in manufacturing unit near Bengaluru",
    shortDesc: "Taiwan's Bestec Group plans to invest Rs 200 crore in a new manufacturing unit near Bengaluru. Industries Minister MB Patil confirmed the project's aim to generate 5,000 jobs over three years. The facility will produce adapters, chargers, and cables, targeting an annual turnover of Rs 2,500 crore, with full government support assured.",
    desc: "With a strong focus on quality, transparency, and long-term value, we create developments that blend thoughtful planning with modern design, sustainability, and customer satisfaction..."
  },
  {
    id: 2,
    image: "/media/cover/cover (7).png",
    logo: "/media/et-logo.webp",
    date: "Jan 19, 2024",
    link: "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/pm-inaugurates-boeings-global-engineering-tech-centre-campus-near-bengaluru/articleshow/106985572.cms?from=mdr",
    shortTitle: "PM Modi inaugurates Boeing's global engineering & tech centre campus near Bengaluru",
    shortDesc: "Boeing's new global engineering and technology centre campus was inaugurated by PM Modi in Bengaluru. The facility is built at cost of Rs 1,600 crore. The 43-acre state-of-the-art Boeing India Engineering and Technology Centre (BIETC) campus launched on Friday is the company's largest such investment outside the US.",
    desc: "Our projects are crafted to enhance urban living by integrating smart planning..."
  },
  {
    id: 3,
    image: "/media/cover/cover (6).png",
    logo: "/media/et-logo.webp",
    date: "Mar 14, 2018",
    link: "https://economictimes.indiatimes.com/tech/hardware/apple-supplier-wistron-secures-land-to-build-new-site-in-karnataka-sources/articleshow/63283351.cms",
    shortTitle: "Apple supplier Wistron to invest Rs 682 crore to set up new manufacturing facility",
    shortDesc: "The Taiwanese contract manufacturer will invest a sum of $105 million to develop land and manufacture smartphones as well as IoT and bio-tech devices.",
    desc: "We develop spaces that prioritize lifestyle, innovation..."
  },
  {
    id: 4,
    image: "/media/cover/mm.png",
    logo: "/media/et-logo.webp",
    date: "Jul 06, 2010",
    link: "https://economictimes.indiatimes.com/articleshow/6132775.cms?%20utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
    shortTitle: "M&M plans aerospace SEZ in Bangalore",
    shortDesc: "Mahindra & Mahindra (M&M), the diversified business group, plans to set up a 250-acre special economic zone (SEZ) catering to the aerospace sector near the Bangalore International Airport.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 5,
    image: "/media/cover/cover (5).png",
    logo: "/media/bl-circle.webp",
    date: "Aug 09, 2018",
    link: "https://www.thehindubusinessline.com/news/karnataka-govt-allows-boeing-to-set-up-mro-facility/article24646489.ece",
    shortTitle: "Karnataka govt allows Boeing to set up MRO facility",
    shortDesc: "Boeing plans to make aerospace components and set up a maintenance and repair facility at its aerospace SEZ near the Devanahalli airport.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 6,
    image: "/media/cover/cover.png",
   logo: "/media/money.webp",
    date: "Aug 09, 2018",
    link: "https://www.moneycontrol.com/news/india/german-lens-maker-carl-zeiss-plant-near-bengaluru-airport-to-be-ready-in-9-months-12958205.html?utm_source=chatgpt.com",
    shortTitle: "Carl Zeiss' plant near Bengaluru airport to be ready in 9 months",
    shortDesc: "Zeiss India has said the facility in Devanahalli is the company's fifth and largest plant in India",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 7,
    image: "/media/cover/cover (3).png",
    logo: "/media/thehindu-logo.svg",
    date: "Aug 17, 2024",
    link: "https://www.thehindu.com/news/national/karnataka/foxconn-unit-in-karnataka-will-be-the-second-largest-after-china-plant-ceo/article68534091.ece",
    shortTitle: "Foxconn unit in Karnataka will be the second-largest after China plant: CEO",
    shortDesc: "Chief Minister Siddaramaiah on Friday said that Foxconn, part of the Taiwanese Hon Hai Technology Group, which is investing ₹25,000 crore to establish a manufacturing plant near Doddaballapur, would be provided with all necessary infrastructure and support by the State government.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 8,
    image: "/media/cover/cover (2).png",
    logo: "/media/bl-circle.webp",
    date: "May 22, 2025",
    link: "https://www.thehindubusinessline.com/info-tech/sap-to-inaugurate-its-41-acre-campus-in-devanahalli-bengaluru-in-july-august/article69603507.ece",
    shortTitle: "SAP to inaugurate its 41-acre campus in Devanahalli, Bengaluru, in July-August",
    shortDesc: "SAP Labs India’s 41-acre campus at Devanahalli in Bengaluru will be ready by the second half of the year, generating a seating capacity of 15,000 more. SAP Labs India, which has been in operation since 1988, is home to 14,000 employees across five cities: Bengaluru, Gurugram, Mumbai, Hyderabad, and Pune.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 9,
    image: "/media/cover/cover (1).png",
    logo: "/media/dh.png",
    date: "Nov 12,2024",
    link: "https://www.deccanherald.com/amp/story/business/zeiss-to-set-up-plant-in-b-luru-with-rs-3-000-crore-to-double-workforce-to-5-000-in-3-yrs-3272881",
    shortTitle: "Zeiss to set up plant in Bengaluru with Rs 3,000 crore; to double workforce to 5,000 in 3 years ",
    shortDesc: "ZEISS’s journey in India is a testament to our nation’s strength as a premier global investment hub, attracting and retaining top-tier companies. Karnataka has the potential to drive growth across diverse sectors and I am excited to see the positive outcomes of public-private partnership. I encourage more such alliances to drive impactful solutions,” said IT/BT minister Priyank Kharge at the event. ",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 10,
    image: "/media/cover/rajnath.png",
    logo: "/media/dh.png",
    date: "Feb 15,2026",
    link: "https://www.deccanherald.com/india/karnataka/rajnath-singh-to-inaugurate-h125-helicopter-unit-in-kolars-vemgal-on-feb-17-3899109",
    shortTitle: "Rajnath Singh to inaugurate H125 helicopter unit in Kolar's Vemgal on Feb 17",
    shortDesc: "As per his itinerary, the defence minister will arrive in Bengaluru on February 16, where he will take part in several programmes. On the evening of February 17, Rajnath will visit the TASL site at Vemgal and inaugurate the FAL for H125 helicopters",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 11,
    image: "/media/cover/nh44.webp",
    logo: "/media/vijaykarnataka.webp",
    date: "Jan 28,2026",
    link: "https://vijaykarnataka.com/news/karnataka/nh-44-to-get-a-high-tech-touch-to-be-converted-into-a-10-lane-road-bengaluru-vijayawada-journey-to-reduce-6-hours/articleshow/127687675.cms?utm_source=FBComments&utm_medium=Social&utm_campaign=facebook&fbclid=IwZnRzaAPoNtlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEeoqnHd2PbOx97E3OMCN0QY62WN2QNtkPHoElmq5wmZS1UtJePNmv4ENBCTIM_aem_gt14yXqzszWEWG7J5Rs8Zg",
    shortTitle: "NH-44ಕ್ಕೆ ಹೈಟೆಕ್ ಸ್ಪರ್ಶ, 10 ಪಥದ ರಸ್ತೆಯಾಗಿ ಪರಿವರ್ತನೆ, 6 ಗಂಟೆಗೆ ಇಳಿಯಲಿದೆ ಬೆಂಗಳೂರು-ವಿಜಯವಾಡ ಪ್ರಯಾಣ",
    shortDesc: "ಬೆಂಗಳೂರು ಮತ್ತು ವಿಜಯವಾಡ ನಡುವಿನ ಪ್ರಯಾಣದ ಸಮಯವನ್ನು 6-7 ಗಂಟೆಗೆ ಇಳಿಸುವ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಎಕ್ಸ್‌ಪ್ರೆಸ್‌ವೇ ಯೋಜನೆಯ ಭಾಗವಾಗಿ, ಎನ್‌ಎಚ್‌ಎಐ ಮಹತ್ವದ ಹೆಜ್ಜೆ ಇಟ್ಟಿದೆ. ದೇವನಹಳ್ಳಿಯಿಂದ ಆಂಧ್ರದ ಕೋಡಿಕೊಂಡದವರೆಗಿನ 90 ಕಿ.ಮೀ ಉದ್ದದ ಎನ್‌ಎಚ್-44 ರಸ್ತೆಯನ್ನು 10 ಪಥಗಳಿಗೆ ವಿಸ್ತರಿಸಲು ಡಿಪಿಆರ್ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ. ಕೋಡಿಕೊಂಡದಿಂದ ಈ ರಸ್ತೆ ಹೊಸ ಗ್ರೀನ್‌ಫೀಲ್ಡ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್‌ವೇಗೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸಲಿದೆ.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 12,
    image: "/media/cover/yt.webp",
    logo: "/media/yt.jpg",
    date: "July 3,2025",
    link: "https://youtu.be/9hzpHbd4SxA?si=iLPePhkol9ESYbMP",
    shortTitle: "🚨 ITIR PHASE 2: Devanahalli–Doddaballapura 🔥 10 New Villages 5 Rumoured to Join! | $22B Tech Zone",
    shortDesc: "Explore the next big chapter in Bangalore’s tech growth — Devanahalli–Doddaballapura ITIR Phase 2! In this video, we dive into the massive ITIR project that is set to reshape North Bengaluru with over 10,000+ acres of planned development, expected to generate 3 million+ jobs and attract $22 billion+ in investment.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 13,
    image: "/media/cover/Industrial Corridor.jpg",
    logo: "/media/tradebrain.png",
    date: "Sept 12,2025",
    link: "https://tradebrains.in/3-industrial-corridor-projects-that-could-transform-bengalurus-real-estate-forever-see-the-list/",
    shortTitle: "3 Industrial Corridor Projects That Could Transform Bengaluru’s Real Estate Forever – See the List",
    shortDesc: "Bengaluru’s real estate market is being reshaped with mega projects in the large industrial corridors – CBIC, BMIC and HBIC – these corridors are targeted for connectivity, jobs and industrial investment, primarily through corridors these types of connected mega nodes will create new residential, commercial and industrial markets that will make Bengaluru the focus of urban and economic growth in 2035.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 14,
    image: "/media/cover/bengaluru airport.jpg",
    logo: "/media/dh.png",
    date: "Oct 14,2024",
    link: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-airport-city-breaks-ground-for-2-million-sq-ft-business-park-3231246",
    shortTitle: "Bengaluru Airport City breaks ground for 2 million-sq ft business park",
    shortDesc: "Bengaluru: Bengaluru Airport City Limited (BACL) has initiated work for its ambitious 2 million-sq ft business park located within the larger campus of the Kempegowda International Airport.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 15,
    image: "/media/cover/bengaluru airport.jpg",
    logo: "/media/hindustantimes.webp",
    date: "Oct 14,2024",
    link: "https://www.hindustantimes.com/cities/bengaluru-news/bengaluru-airport-city-begins-construction-on-2-million-sq-ft-business-park-101728890054002-amp.html",
    shortTitle: "Bengaluru Airport City begins construction on 2 million sq ft business park",
    shortDesc: "Bengaluru Airport City Limited (BACL), a subsidiary of Bangalore International Airport Limited (BIAL), has commenced construction on a massive 2 million sq ft Business Park.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
  ,
  {
    id: 16,
    image: "/media/cover/banglore.jpg",
    logo: "/media/koto.png",
    date: "Aug 14,2025",
    link: "https://www.kots.world/blog/bangalore-is-the-fastest-developing-city-in-the-world-and-why",
    shortTitle: "Bangalore is the Fastest Developing City in the World and Why?",
    shortDesc:"As per the Bangalore Innovation Report, amongst the 780 major cities in the world, 17 out of the 20 fastest-growing cities in this world will be Indian with Bengaluru between 2019 to 2035. With projected GDP of 8.5%, Bangalore will be the world's fastest-growing city for the next 15 years.",
    desc: "Our commitment is to deliver excellence through ethical practices..."
  }
];




/* ---------------- MEDIA LIST PAGE ---------------- */
const MediaList = () => {
  return (
    <div className="bg-white pt-5 md:pt-28   pb-24">
    <div className="max-w-6xl  px-6 mx-auto ">

        <AnimatedHeading className="section-heading  mb-10 max-w-4xl ">
North Bengaluru is rapidly emerging as a business and residential hub, attracting multinational companies, R&D centers, and major industries.        </AnimatedHeading>

        {/* ================= BANNER ================= */}
        <FloatUpText>
          <div className="grid grid-cols-1  md:grid-cols-5 md:gap-5 gap-y-5 mb-16 items-center">
            <div className="rounded-lg  col-span-3 overflow-hidden h-full">
              <img src={mediaImg5} className="w-full h-50vh md:h-[70vh] object-cover" />
            </div>

            <div className="bg-ORANGE w-full  col-span-2 rounded-lg p-6 lg:p-16 h-full flex flex-col justify-between">
              <div className="flex justify-end ">
                <img src="/shreyas_logo_footer_1.webp" className="h-12 brightness-125 top-10 lg:absolute right-10 object-contain" />
              </div>

              <div>
                <h2 className="hidden lg:block text-white section-heading mb-8">
                  Headlines <br /> that <br /> matters.
                </h2>
                <h2 className="block lg:hidden mt-10 text-white section-heading mb-8">
                  Headlines  that <br /> matters.
                </h2>
                <div className="w-60 h-[2px] bg-white mb-4"></div>
                <p className="text-white/90 text-lg max-w-xs">
                  Journey, Innovations, and success stories featured across notable media channels.
                </p>
              </div>
            </div>
          </div>
        </FloatUpText>

        {/* ================= MEDIA CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {mediaData.map((item) => (
            <FloatUpText key={item.id}>
              <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full ">
                <div className="overflow-hidden ">
                <img
    src={item.image}
    className="mb-6 w-full lg:h-64 h-48 object-cover object-[top] hover:scale-105 transition-transform duration-300"
  />
</div>
  <div className="p-6 flex flex-col flex-1">
    <div>
      <div className="flex items-center gap-4 mb-4">
        <img src={item.logo} className="h-10 max-w-28 object-contain" />
        <div className="h-8 w-px bg-gray-300"></div>
        <div className="text-sm">
          <p className="text-black">Published on:</p>
          <p className="font-medium">{item.date}</p>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl mt-3 mb-3 md:line-cla">
        {item.shortTitle}
      </h3>

      <p className="text-base line-clamp-3 mb-6 max-w-xl">
        {item.shortDesc}
      </p>
    </div>

    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-white py-3 w-fit px-6 text-[10px] mt-auto"
    >
      READ MORE
    </a>
  </div>
</div>

            </FloatUpText>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- MEDIA DETAIL PAGE ---------------- */
const MediaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const media = mediaData.find(m => m.id === Number(id));

  return (
    <section className="bg-white pt-24 pb-24">
     <div className="max-w-[1120px] mx-auto px-0">

        {/* BACK ARROW OUTSIDE CARD */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-black text-3xl font-semiboldx flex items-center gap-3"

        >
          ←
        </button>

        <div className="rounded-2xl overflow-hidden shadow">


          {/* IMAGE */}
          <img
            src={media.image}
            className="w-full h-[420px]  object-cover"
          />

          {/* CONTENT */}
          <div className="p-8">

            {/* LOGO + DATE (CARD STYLE) */}
            <div className="flex items-center gap-4 mb-4">
              <img src={media.logo} className="h-10 object-contain" />
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-sm">
                <p className="   y-500">Published on:</p>
                <p className="font-medium">{media.date}</p>
              </div>
            </div>

            {/* TITLE */}
            <p className="text-2xl    y-800 leading-snug mb-3 max-w-3xl">
              {media.shortTitle}
            </p>

            <p className="text-base    y-600 leading-relaxed mb-6 max-w-3xl">
              {media.shortDesc}
            </p>


            {/* DESCRIPTION */}
            <p className="   y-700 leading-relaxed">
              {media.desc}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};


/* ---------------- ROUTES ---------------- */
const Media = () => {
  return (
    <Routes>
      <Route path="/" element={<MediaList />} />
      <Route path="/:id" element={<MediaDetail />} />
    </Routes>
  );
};

export default Media;
