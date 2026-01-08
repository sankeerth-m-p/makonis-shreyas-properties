const Footer = () => {
  return (
    <footer className="bg-gradient-to-b  font-medium uppercase h-screen md:h-1/2  flex justify-center items-center from-neutral-900 to-black text-neutral-400">
      <div className="  w-full m-36 mx-64  ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1 */}
          <div>
            <ul className="space-y-5 text-xs">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">Testimonial</li>
              <li className="hover:text-white cursor-pointer">Media Center</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-5 text-sm">
              <li className="hover:text-white cursor-pointer">Career</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:text-right flex flex-col items-end ">
            <div className="flex  md:justify-end items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/90 rounded-sm" />
              <span className="text-white text-2xl font-semibold tracking-wide">
                Shreyas | LOGO
              </span>
            </div>
                 

            <div className="text-sm mt-20  text-left space-y-3 ">
              <p className="uppercase text-neutral-500 tracking-wide ">
                Visiting Hours
              </p>
                          <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
                          <div className=" border-b-2 pt-5 border-neutral-400"/>
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="flex mt-32 flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
            <span className="hover:text-white cursor-pointer">© 2025. All Rights Reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
