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
      description: 'A state-of-the-art tech park designed for innovation and collaboration. Features premium office spaces, modern amenities, and excellent connectivity in the heart of Hyderabad\'s IT corridor.',
      image: '/Home/profoundInfra.webp',
      bgColor: 'bg-ORANGE'
    },
    {
      number: '02',
      location: 'Marathahalli, Bangalore',
      title: 'Royal Enclave',
      description: 'Experience luxury living at its finest with spacious apartments, world-class amenities, and stunning architecture. Located in Bangalore\'s prime locality with easy access to major IT hubs.',
      image: "/Home/royalEnclave.webp",
       bgColor: 'bg-ORANGE2'
    },
    {
      number: '03',
      location: 'Vignana Nagar, Bangalore',
      title: 'Paradise',
      description: 'Your urban paradise awaits with thoughtfully designed homes, lush green spaces, and premium facilities. Perfect blend of comfort and convenience in one of Bangalore\'s most sought-after neighborhoods.',
      image: "/Home/SandsParadiseVignanNagar_enhanced.webp",
       bgColor: 'bg-ORANGE'
    },
    {
      number: '04',
      location: 'Marathahalli, Bangalore',
      title: 'Chourasia Shreyas',
      description: 'Contemporary living spaces crafted with precision and elegance. Offering modern amenities, excellent ventilation, and strategic location near major tech parks and shopping centers.',
      image: "/Home/ChourasiaShreyasMarathahalli.webp",
       bgColor: 'bg-ORANGE2'
    },
    {
      number: '05',
      location: 'Devanahalli, Bangalore',
      title: 'Nature\'s Sign',
      description: 'Embrace nature with eco-friendly homes surrounded by greenery and fresh air. Features sustainable design, rainwater harvesting, and proximity to the airport making it ideal for modern families.',
      image: "/Home/naturesign.webp",
       bgColor: 'bg-ORANGE'
    },
    {
      number: '06',
      location: 'Marathahalli, Bangalore',
      title: 'Modern View Apartment',
      description: 'Contemporary apartments with panoramic views and cutting-edge design. Enjoy spacious layouts, premium finishes, and a lifestyle that complements your aspirations in the city\'s tech hub.',
      image: "/Home/ModernView.webp",
       bgColor: 'bg-ORANGE2'
    }
  ];

  const items = sections || defaultSections;


  return (
    <div className="  min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between   lg:p-10">
      <div className='  max-w-xl md:p-20 flex flex-col justify-center items-center'>
       <AnimatedHeading
  delay={0}
  className="text-lg md:text-4xl font-semibold mb-4 md:mb-8 text-center"
>
  Signature spaces crafted for modern living
</AnimatedHeading>
        <FloatUpText delay={0} className=' lg:px-5 flex flex-col gap-5 items-center' >
       <p className="text-sm w-full text-center">
  A thoughtfully planned development bringing essential amenities together in one cohesive environment.
</p>

        <button
  onClick={()=>navigate('/projects')}
  className="inline-flex buttons items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all hover:translate-x-1"
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
        p-8  lg:p-16
        h-1/3  lg:h-auto
         lg:w-1/3
        ${section.bgColor}
      `}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-md">
<h3 className="text-lg md:text-4xl font-semibold mb-4 md:mb-8 text-white leading-tight">
  {section.title}
</h3>

               
                 

        <p className="text-xs text-white tracking-widest mb-4">
          {section.location}
        </p>

      <p className="text-sm text-center text-white/90 leading-relaxed mb-6 lg:mb-10">
  {section.description}
</p>

        <a
          href="#"
          className="inline-flex buttons items-center gap-3 px-6  lg:px-8 py-3  lg:py-4
          bg-white text-black text-xs font-bold uppercase tracking-wider
          rounded-full hover:bg-gray-100 transition-all hover:translate-x-1"
        >
          <span>view details</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* BIG NUMBER (Desktop only – mobile would look dumb) */}
      <div
        className="
            lg:tracking-tight
          absolute bottom-2 lg:bottom-10 right-4 lg:right-16
           text-7xl lg:text-[200px] font-roboto leading-none z-0 select-none
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