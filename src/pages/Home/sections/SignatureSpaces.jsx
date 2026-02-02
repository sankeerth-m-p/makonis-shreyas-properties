import { ArrowRight } from 'lucide-react';
import AnimatedHeading from "../../../components/animatedHeading";
import FloatUpText from "../../../components/floatUpText";
import { useNavigate } from 'react-router-dom';
const SignatureSpaces = ({ sections }) => {
  const navigate = useNavigate();

  // Default sections if none provided
const defaultSections = [
  {
    number: '01',
    location: 'Kondapur, Hyderabad',
    title: 'Modern Profound Tech Park',
    slug: 'modern-profound-tech-park',
    description: 'A state-of-the-art tech park designed for innovation...',
    image: '/Home/profoundInfra.webp',
    bgColor: 'bg-ORANGE'
  },
  {
    number: '02',
    location: 'Marathahalli, Bangalore',
    title: 'Royal Enclave',
    slug: 'royal-enclave',
    description: 'Experience luxury living at its finest...',
    image: "/Home/royalEnclave.webp",
    bgColor: 'bg-ORANGE2'
  },
  {
    number: '03',
    location: 'Vignana Nagar, Bangalore',
    title: 'Paradise',
    slug: 'paradise',
    description: 'Your urban paradise awaits...',
    image: "/Home/SandsParadiseVignanNagar_enhanced.webp",
    bgColor: 'bg-ORANGE'
  },
  {
    number: '04',
    location: 'Marathahalli, Bangalore',
    title: 'Chourasia Shreyas',
    slug: 'chourasia-shreyas',
    description: 'Contemporary living spaces...',
    image: "/Home/ChourasiaShreyasMarathahalli.webp",
    bgColor: 'bg-ORANGE2'
  },
  {
    number: '05',
    location: 'Devanahalli, Bangalore',
    title: "Nature's Sign",
    slug: 'natures-sign',
    description: 'Embrace nature with eco-friendly homes...',
    image: "/Home/naturesign.webp",
    bgColor: 'bg-ORANGE'
  },
  {
    number: '06',
    location: 'Marathahalli, Bangalore',
    title: 'Modern View Apartment',
    slug: 'modern-view-apartment',
    description: 'Contemporary apartments with panoramic views...',
    image: "/Home/ModernView.webp",
    bgColor: 'bg-ORANGE2'
  },
  {
    number: '07',
    location: 'Nandagudi, Bengaluru',
    title: 'Shreyas Sunrise',
    slug: 'shreyas-sunrise',
    description: 'Well-planned residences in Nandagudi...',
    image: "/sunrise.webp",
    bgColor: 'bg-ORANGE'
  }
];


  const items = sections || defaultSections;


  return (
    <div className=" min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between   lg:p-10">
      <div className='mx-6 md:mx-0   pt-14 pb-10 max-w-xl md:p-20 flex flex-col justify-center items-center'>
       <AnimatedHeading
  delay={0}
  className="text-3xl md:text-4xl  font-semiboldx mb-4 md:mb-8 text-center"
>
  Signature spaces crafted for modern living
</AnimatedHeading>
        <FloatUpText delay={0} className=' lg:px-5  flex flex-col gap-5 items-center' >
       <p className="text-lg w-full text-center">
  A thoughtfully planned development bringing essential amenities together in one cohesive environment.
</p>
<button
  onClick={()=>navigate('/projects')}
  className="inline-flex buttons btn btn-orange"
>

  <span>VIEW PROJECTS</span>
  <ArrowRight className="w-4 h-4" />
</button>

          </FloatUpText>
        
      </div>
     

     
       {items.map((section, index) => (
  <div
    key={index}
    className="sticky top-10   flex flex-col  lg:flex-row h-3/5  lg:h-full"
  >
    {/* IMAGE */}
    <div className="
      relative overflow-hidden  
      h-2/3  lg:h-auto
       lg:w-2/3
    ">
      <img
        src={section.image}
        alt={section.title}
        className="w-full h-full   object-cover "
      />
    </div>

    {/* CONTENT */}
    <div
      className={`
        relative flex flex-col  justify-start
        p-6    lg:p-16
        h-1/3  lg:h-auto
         lg:w-1/3
        ${section.bgColor}
      `}
    >
      {/* Content Wrapper */}
      <div className="relative z-10  py-5 max-w-md">
<h3 className="text-2xl md:text-4xl font-semiboldx mb-2 lg:mb-6 text-white leading-tight">

  {section.title}
</h3>
        <p className="text-xs md:text-sm text-white tracking-widest mb-4">
          {section.location}
        </p>

    <p className="text-sm md:text-base text-left md:text-left lg:text-left text-white/90 leading-relaxed mb-6 lg:mb-10">
  {section.description}
</p>

      <button
  onClick={() => navigate(`/projects/${section.slug}`)}
  className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4
  bg-white text-black text-xs font-bold uppercase tracking-wider
  rounded-full hover:bg-gray-100 transition-all hover:translate-x-1"
>
  <span>view details</span>
  <ArrowRight className="w-4 h-4" />
</button>

      </div>

      {/* BIG NUMBER (Desktop only – mobile would look dumb) */}
      <div
        className="
            lg:tracking-tight
          absolute bottom-8 lg:bottom-10 right-4 lg:right-16
           text-7xl  md:text-[170px] lg:text-[180px] font-roboto leading-none z-0 select-none
        "
        style={{
          WebkitTextStroke: "1px #fff",
          color: "transparent",
          fontWeight: 700,
        }}
      >
        {section.number}
      </div>
    </div>
  </div>
))}

   
    </div>
  );
};

export default SignatureSpaces;