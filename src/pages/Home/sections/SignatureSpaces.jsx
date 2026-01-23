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
    <div className="  min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between  md:p-10">
      <div className='  max-w-xl p-5   md:p-20 flex flex-col justify-center items-center'>
        <AnimatedHeading className='text-2xl  md:text-3xl font-bold md:text-center  uppercase mb-5'>Signature spaces crafted for modern living</AnimatedHeading>
        <FloatUpText className='md:px-5 flex flex-col gap-5 items-center' ><p className='text-sm   '>A thoughtfully planned development bringing essential amenities together in one cohesive environment.
        </p>
         <button onClick={()=>navigate('/projects')} className="bg-ORANGE w-full hover:bg-ORANGE2 text-white buttons px-8 py-3 rounded-full  text-base  md:w-fit">
          VIEW PROJECTS
        </button>
          </FloatUpText>
        
      </div>
     

     
       {items.map((section, index) => (
  <div
    key={index}
    className="sticky top-10   flex flex-col md:flex-row h-3/5 md:h-full"
  >
    {/* IMAGE */}
    <div className="
      relative overflow-hidden  
      h-2/3 md:h-auto
      md:w-2/3
    ">
      <img
        src={section.image}
        alt={section.title}
        className="w-full h-full xgrayscale hover:grayscale-0  object-cover hover:scale-105 transition-all ease-in-out duration-700"
      />
    </div>

    {/* CONTENT */}
    <div
      className={`
        relative flex flex-col  justify-start
        p-8 md:p-16
        h-1/3 md:h-auto
        md:w-1/3
        ${section.bgColor}
      `}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-md">
        <AnimatedHeading className="text-2xl md:text-4xl mt-2 md:mt-4 font-bold text-white mb-3 leading-tight">
          {section.title}
        </AnimatedHeading>
               <FloatUpText>
                 

        <p className="text-xs text-white tracking-widest mb-4">
          {section.location}
        </p>

        <p className="text-sm text-white/90 leading-relaxed mb-6 md:mb-10">
          {section.description}
        </p>

        <a
          href="#"
          className="inline-flex buttons items-center gap-3 px-6 md:px-8 py-3 md:py-4
          bg-white text-black text-xs font-bold uppercase tracking-wider
          rounded-full hover:bg-gray-100 transition-all hover:translate-x-1"
        >
          <span>view details</span>
          <ArrowRight className="w-4 h-4" />
        </a></FloatUpText>
      </div>

      {/* BIG NUMBER (Desktop only – mobile would look dumb) */}
      <div
        className="
          hidden md:block
          absolute bottom-10 right-16
          text-[200px] font-roboto leading-none z-0 select-none
        "
        style={{
          WebkitTextStroke: "1px #fff",
          color: "transparent",
          fontWeight: 700,
          letterSpacing: "-8px",
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