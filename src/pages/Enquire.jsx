import React, { useState } from "react";
import { X } from "lucide-react";

const Enquire = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Enquire Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 text-white px-8 py-3 rounded-full"
        >
          Enquire Now
        </button>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[90%] max-w-xl rounded-lg p-10 relative">

            {/* Close Icon */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>

            {/* Form Fields */}
            <div className="space-y-6">
              <input type="text" placeholder="Name" className="w-full border-b outline-none py-2" />
              <input type="email" placeholder="Email address" className="w-full border-b outline-none py-2" />
              <input type="text" placeholder="Select country" className="w-full border-b outline-none py-2" />
              <input type="text" placeholder="Select city" className="w-full border-b outline-none py-2" />
              <input type="text" placeholder="Mobile number" className="w-full border-b outline-none py-2" />

              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  By checking this box you confirm that you have read and agree to our
                  terms of service, and that you have read our privacy policy.
                </p>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full mt-4">
                REQUEST CALLBACK
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Enquire;
