import React, { useState,useRef ,useLayoutEffect } from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Enquire from "./Enquire";
import { AnimatePresence, motion } from "framer-motion";import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeading from "../components/animatedHeading";
import FloatUpText from "../components/floatUpText";
import gsap from "gsap"; gsap.registerPlugin(ScrollTrigger);


 function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 w-full flex px-6 items-center justify-center bg-cover bg-center" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')"}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}<div className="max-w-6xl w-full z-10 bg-white rounded-3xl shadow-2xl p-8 py-20 md:p-32">

      
      <div className="relative  max-w-2xl  mx-auto"> 
       

        {/* Heading */}
        <h1 className="section-heading text-center text-black mb-12">
          Share query by filling out the form, we will assist you at the earliest.
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-[#f2f2f2] rounded-full text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-[#f2f2f2] rounded-full text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-[#f2f2f2] rounded-full text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black"
            />

            {/* Dropdown */}
            <textarea
     name="message"
     placeholder="Your inquiry about..."
     value={formData.message}
     onChange={handleChange}
     rows="1"
     className="w-full px-6 py-4 bg-[#f2f2f2] rounded-3xl text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black resize-none"
   ></textarea>
          </div>

          {/* Footer Text and Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">
            <p className="text-black text-sm md:text-base">
              
              Required fields are marked *
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative px-8 py-4 btn btn-orange w-fit font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
            >
              Get A Call Back
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}
const Contact = () => {
  const [showEnquire, setShowEnquire] = useState(false);
  const imageWrapperRef = useRef(null);
  useLayoutEffect(() => {
  let tl;

  const ctx = gsap.context(() => {
    tl = gsap.timeline({
      defaults: { ease: "power2.out" }
    });

    /* CLIP PATH REVEAL */
    tl.fromTo(
      imageWrapperRef.current,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.2,
      }
    );

    /* IMAGE ZOOM OUT */
    tl.fromTo(
      imageWrapperRef.current,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 1.2,
      },
      0
    );
  }, imageWrapperRef);

  return () => {
    tl?.kill(); // ❗ stop animation but KEEP final state
    ctx.kill(); // remove GSAP context safely
  };
}, []);

  return (
    <div className="bg-white">

      {/* ===== Top Section ===== */}
{/* ===== Top Section ===== */}
<section className="w-full bg-white overflow-hidden">
  <div className="flex flex-col md:flex-row min-h-[520px]">

    {/* LEFT TEXT */}
    <div className="w-full md:w-1/2  flex items-center py-12 md:py-0">
      <div className="   lg:translate-x-10 mx-auto md:ml-auto px-6 max-w-lg ">
        <AnimatedHeading className="section-heading md:hidden block  mb-4 md:mb-8">
          We would love to  connect to you.
        </AnimatedHeading>
        <AnimatedHeading className="section-heading hidden md:block  mb-4 md:mb-8">
          We would love to {'\n'}connect to you.
        </AnimatedHeading>
        <FloatUpText className=" y-600 text-lg leading-relaxed">
          Reach out to us with your questions, requirements,
          or ideas, and we’ll get back to you promptly.
        </FloatUpText>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div  ref={imageWrapperRef} className="w-full md:w-1/2 h-[300px] md:h-auto">
      <img
        src="/webcontent.webp"
        alt="Support"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>




      {/* ===== Orange CTA Bar ===== */}
      <section className="bg-ORANGE  py-16 ">
              <div className="max-w-6xl px-6  mx-auto  flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <img src="/headphone.svg" alt="Headphone" className="w-10 h-10" />
            <div className="">
             <p className="text-lg text-white mt-1">
                    Have any questions?
                  </p>
                  <h2 className="section-heading text-white  ">
                    Speak with our experts.
                  </h2>
                 
                </div>
                </div>
          <div className=" h-full  flex">
            
      
             <button
        onClick={() => setShowEnquire(true)}
      className="btn btn-white  ">
        <span>REQUEST CALLBACK</span>
        <ArrowRight className="w-4 h-4" />
      </button>
      
              </div>
              </div>
            </section>

     {/* ===== Contact Info Row (Exact Style) ===== */}
<section className="max-w-6xl mx-auto px-6 py-12">
 <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6 text-sm  y-700">

    {/* Call us */}
    <div className="flex items-center gap-4">
     <div className="bg-ORANGE   -500 p-3 rounded">
  <img src="/call.svg" className="w-3 h-3" alt="Call" />
</div>

      <div>
        <p className="font-medium">Call us</p>
        <p className=" y-500">+91 99642 00191</p>
      </div>
    </div>

    {/* Email us */}
    <div className="flex items-center gap-4">
     <div className="bg-ORANGE   -500 p-3 rounded">
  <img src="/email.svg" className="w-3 h-3" alt="Email" />
</div>

      <div>
        <p className="font-medium">Email us</p>
        <p className=" y-500">info@shreyasinfra.com</p>
      </div>
    </div>

    {/* Website */}
    <div className="flex items-center gap-4">
     <div className="bg-ORANGE   -500 p-3 rounded">
  <img src="/web.svg" className="w-3 h-3" alt="Website" />
</div>

      <div>
        <p className="font-medium">Website</p>
        <p className=" y-500">www.shreyasinfra.com</p>
      </div>
    </div>

    {/* Follow us with divider */}
<div className="flex items-center gap-6 md:border-l lg:pl-6">
  <p className=" text-base">Follow us on</p>
 <div className="flex gap-4  y-700 text-base">
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn className="cursor-pointer hover:text-gray-400   -500 transition-colors" />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram className="cursor-pointer hover:text-gray-400   -500 transition-colors" />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF className="cursor-pointer hover:text-gray-400   -500 transition-colors" />
  </a>
</div>

</div>


  </div>
</section>


      {/* ===== Map Section ===== */}
      <section className="w-full h-[400px]">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2188232216645!2d77.69906447465063!3d12.95784498735625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123273fb6281%3A0x1e34c3120175fa80!2sChourasia%20Shreyas!5e0!3m2!1sen!2sin!4v1769773902275!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>

{/* ===== Our Office + Contact Form (Final Balanced Layout) ===== */}
<section className="w-full py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 items-start">


    {/* Left: Office Info */}
    <div className="">
      <h2 className="section-heading  mb-4 md:mb-8">Our office</h2>

      <p className=" mb-4 text-lg">Shreyas Infra Projects Pvt.Ltd.</p>
            <div className="flex  flex-col sm:flex-row md:gap-10 lg:gap-32">
              
      <p className=" text-base">
        3rd Floor, Chourasia Shreyas Arcade,<br />
        3rd Main Cross Rd, Aswath Nagar, Marathahalli, Bengaluru - 560037
      </p>

     <div className="md:w-px w-1/2  h-px my-5 rounded-full flex md:h-12 bg-gray-600"/>
            <div>
              

      <p className="font-semiboldx mb-1 md:mt-0 ">Visiting Hours</p>
      <p className=" y-600">Mon-Fri: 10:00 am to 6:00 pm</p>
</div> 
    </div>
    </div>


  </div>
      </section>
      {/* <section className=" h-[calc(100vh-5vh)] bg-ORANGE flex flex-col justify-center items-center  text-center ">
        <div className=" flex bg-white rounded-xl">
          <div className="w-6xl p-6 h-full flex">
            <AnimatedHeading className="section-heading  mb-4 md:mb-8">
              We are exited to connect with you!
            </AnimatedHeading>
            <div className="flex md:grid md:grid-cols-2 md:grid-rows-1 gap-6 justify-center items-center">
              <div className="a2 p-6 rounded-full">adsa</div>
              <div className="a2 p-6 rounded-full">adsa</div>
              <div className="a2 p-6 rounded-full">adsa</div>
              <div className="a2 p-6 rounded-full">adsa</div>
              

            </div>
          </div>
          
</div>
      </section> */}
      <ContactForm />
    {/* Right: Form Card */}
    {/* <div className="bg-[#f3f3f3] p-12 rounded-xl shadow-sm">
      <p className="text-sm mb-8  y-700">
        Please fill the form, we will contact you shortly.
      </p>

      <form className="space-y-6">
        <div>
          <label className="text-sm  y-600">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div>
          <label className="text-sm  y-600">Email address</label>
          <input
            type="email"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div>
          <label className="text-sm  y-600">Phone number</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        

        <div>
          <label className="text-sm  y-600">What are you enquiring about?</label>
          <textarea
            rows="4"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          ></textarea>
        </div>

        <div className="flex justify-end pt-6">
          <button className="bg-ORANGE   -500 text-white px-10 py-3 rounded-full text-xs tracking-widest">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div> */}
<AnimatePresence>
  {showEnquire && <Enquire onClose={() => setShowEnquire(false)} />}
</AnimatePresence>


    </div>
  );
};

export default Contact;
