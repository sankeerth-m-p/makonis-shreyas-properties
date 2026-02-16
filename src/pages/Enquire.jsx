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
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // ❌ stops submission

    console.log("Form submitted:", formData);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow ONLY numbers & max 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;   // blocks alphabets
      if (value.length > 10) return;      // blocks more than 10 digits
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // clear error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };



  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {/* <motion.div
        className=" w-full  rounded-3xl shadow-2xl p-8 py-10 md:p-32"
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      > */}
      <motion.div
        className="
    relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 py-10 md:p-32
  "
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
       <button
  onClick={onClose}
  className="absolute top-4 right-4 md:top-10 md:right-10 z-[999]"
>
  <X className="w-5 h-5 md:w-9 md:h-9" />
</button>

        <div className="  relative  max-w-2xl  mx-auto">


          {/* Heading */}
     <h1 className=" text-base md:text-3xl text-center text-black mb-4 md:mb-12">
            Share query by filling out the form, we will assist you at the earliest.
          </h1>

          {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 md:px-6 md:py-4 bg-[#f2f2f2] rounded-full text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black"
              />  

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 md:px-6 md:py-4 bg-[#f2f2f2] rounded-full text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Input */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 md:px-6 md:py-4 bg-[#f2f2f2] rounded-full text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>


              {/* Dropdown */}
              <textarea
                name="message"
                placeholder="Your inquiry about..."
                value={formData.message}
                onChange={handleChange}
                rows="1"
                className="w-full px-5 py-3 md:px-6 md:py-4 bg-[#f2f2f2] rounded-3xl text-black placeholder-black/60 focus:outline-none focus:ring-1 focus:ring-black resize-none"
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
      </motion.div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default Enquire;
