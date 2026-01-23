import React, { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Enquire = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }
    alert("Form submitted successfully");
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="bg-white w-[90%] max-w-xl rounded-lg p-10 relative shadow-2xl"
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 40, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input required type="text" placeholder="Name" className="w-full border-b outline-none py-2" />
          <input required type="email" placeholder="Email address" className="w-full border-b outline-none py-2" />

          <select required className="w-full border-b outline-none py-2 bg-transparent text-gray-500">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Singapore">Singapore</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
          </select>

          <input required type="text" placeholder="City" className="w-full border-b outline-none py-2" />

          <div className="flex gap-3">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border-b outline-none py-2 bg-transparent"
              required
            >
              <option value="+91">+91 India</option>
              <option value="+1">+1 USA</option>
              <option value="+44">+44 UK</option>
              <option value="+971">+971 UAE</option>
              <option value="+61">+61 Australia</option>
              <option value="+49">+49 Germany</option>
              <option value="+33">+33 France</option>
              <option value="+81">+81 Japan</option>
              <option value="+65">+65 Singapore</option>
              <option value="+86">+86 China</option>
              <option value="+7">+7 Russia</option>
            </select>

            <input
              required
              type="text"
              placeholder="Mobile number"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full border-b outline-none py-2"
              maxLength="10"
            />
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-600">
            <input required type="checkbox" className="mt-1" />
            <p>
              By checking this box you confirm that you have read and agree to our{" "}
              <Link to="/terms" target="_blank" className="text-orange-500 underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" target="_blank" className="text-orange-500 underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full mt-4"
          >
            REQUEST CALLBACK
          </button>

        </form>
      </motion.div>
    </motion.div>
  );
};

export default Enquire;
