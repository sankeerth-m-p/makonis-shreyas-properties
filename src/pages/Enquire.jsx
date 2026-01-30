import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Enquire = ({ onClose }) => {
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
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className=" w-full  rounded-3xl shadow-2xl p-8 py-10 md:p-32"
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="max-4xl relative  bg-white rounded-3xl shadow-2xl p-8 pt-20 pb-10 md:p-32">
        <button
          onClick={onClose}
          className=" top-5 right-5 md:top-10 z-[999]  absolute md:right-10 "
          >
          <X size={36} />
        </button>
          
        
          
 
      

      
      <div className="relative  max-w-2xl  mx-auto"> 
       

        {/* Heading */}
        <h1 className="md:text-3xl text-xl text-center text-black mb-12">
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
      </div></div>
      </motion.div>
    </motion.div>
  );
};

export default Enquire;
