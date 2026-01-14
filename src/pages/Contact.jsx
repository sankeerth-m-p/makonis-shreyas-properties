import React from "react";
import contactImg from "/Contact/contact.jpg"; // replace with your image
//import { Phone, Mail, Globe, Headphones } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="bg-white">

      {/* ===== Top Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            We would love to <br /> connect to you.
          </h2>
          <p className="text-gray-500 max-w-md">
            Reach out to us with your queries, requirements, or ideas, and we’ll get back to you promptly.
          </p>
        </div>
        <div>
          <img
            src={contactImg}
            alt="Support"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* ===== Orange CTA Bar ===== */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 text-white">
         <span className="text-3xl">🎧</span>
            <div>
              <p className="text-sm">Have any questions?</p>
              <h3 className="text-lg font-semibold">Speak with our experts.</h3>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-orange-500 px-6 py-2 rounded-full text-sm font-medium">
            REQUEST CALLBACK
          </button>
        </div>
      </section>

     {/* ===== Contact Info Row (Exact Style) ===== */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-6 text-sm text-gray-700">

    {/* Call us */}
    <div className="flex items-center gap-4">
      <div className="bg-orange-500 text-white p-3 rounded">
        📞
      </div>
      <div>
        <p className="font-medium">Call us</p>
        <p className="text-gray-500">+91 99642 00191</p>
      </div>
    </div>

    {/* Email us */}
    <div className="flex items-center gap-4">
      <div className="bg-orange-500 text-white p-3 rounded">
        ✉️
      </div>
      <div>
        <p className="font-medium">Email us</p>
        <p className="text-gray-500">info@shreyasinfra.com</p>
      </div>
    </div>

    {/* Website */}
    <div className="flex items-center gap-4">
      <div className="bg-orange-500 text-white p-3 rounded">
        🌐
      </div>
      <div>
        <p className="font-medium">Website</p>
        <p className="text-gray-500">www.shreyasinfra.com</p>
      </div>
    </div>

    {/* Follow us with divider */}
<div className="flex items-center gap-6 border-l pl-6">
  <p className="text-gray-500">Follow us on</p>
  <div className="flex gap-4 text-gray-700 text-sm">
    <FaLinkedinIn className="cursor-pointer hover:text-orange-500" />
    <FaInstagram className="cursor-pointer hover:text-orange-500" />
    <FaFacebookF className="cursor-pointer hover:text-orange-500" />
  </div>
</div>


  </div>
</section>


      {/* ===== Map Section ===== */}
      <section className="w-full h-[400px]">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps?q=Bangalore&output=embed"
          loading="lazy"
        ></iframe>
      </section>

{/* ===== Our Office + Contact Form (Final Balanced Layout) ===== */}
<section className="w-full px-6 py-24 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-24 items-start">

    {/* Left: Office Info */}
    <div className="md:pl-16">
      <h2 className="text-3xl font-medium mb-10">Our office</h2>

      <p className="font-semibold mb-4">Shreyas Infra Projects Pvt.Ltd.</p>

      <p className="text-gray-600 leading-relaxed text-base">
        3rd Floor, Chourasia Shreyas Arcade,<br />
        3rd Main Cross Rd,<br />
        Aswath Nagar,<br />
        Marathahalli, Bengaluru - 560037
      </p>

      <div className="border-t border-gray-300 w-40 my-8"></div>

      <p className="font-semibold mb-1">Visiting Hours</p>
      <p className="text-gray-600">Mon-Fri: 10:00 am to 6:00 pm</p>
    </div>

    {/* Right: Form Card */}
    <div className="bg-[#f3f3f3] p-12 rounded-xl shadow-sm">
      <p className="text-sm mb-8 text-gray-700">
        Please fill the form, we will contact you shortly.
      </p>

      <form className="space-y-6">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email address</label>
          <input
            type="email"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Phone number</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">City</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">What are you enquiring about?</label>
          <textarea
            rows="4"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-white"
          ></textarea>
        </div>

        <div className="flex justify-end pt-6">
          <button className="bg-orange-500 text-white px-10 py-3 rounded-full text-xs tracking-widest">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>

  </div>
</section>


    </div>
  );
};

export default Contact;
