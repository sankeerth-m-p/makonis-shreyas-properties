import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b font-medium uppercase from-neutral-900 to-black text-neutral-400 h-[66vh] md:max-h-2/3   flex justify-center items-center ">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:m-36 lg:mx-64 py-8 md:py-0">
        {/* Logo Section - Moves to top on mobile */}
        <div className="md:hidden flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-white/90 rounded-sm" />
            <span className="text-white text-2xl font-semibold tracking-wide">
              Shreyas | LOGO
            </span>
          </div>
          
          {/* Visiting Hours - Mobile version */}
          <div className="text-center mt-6 space-y-3">
            <p className="uppercase text-neutral-500 tracking-wide text-sm">
              Visiting Hours
            </p>
            <p className="text-sm">Mon – Fri: 10:00 AM – 6:00 PM</p>
            <div className="border-b-2 pt-3 border-neutral-400 w-full max-w-xs mx-auto" />
          </div>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Column 1 */}
          <div>
            <ul className="space-y-4 md:space-y-5 text-xs">
              <li>
                <Link
                  to="/our-story"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonial"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  to="/media-center"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Media Center
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4 md:space-y-5 text-xs md:text-sm">
              <li>
                <Link
                  to="/career"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white cursor-pointer transition block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white cursor-pointer transition block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:text-right flex flex-col md:items-end">
            <div className="flex md:justify-end items-center gap-2 mb-3">
              
              <img width="300" src="src\assets\images\shreyas_logo_footer.png"/>
            </div>

            <div className="text-sm mt-20 space-y-3">
              <p className="uppercase text-neutral-500 tracking-wide">
                Visiting Hours
              </p>
              <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
              <div className="border-b-2 pt-5 border-neutral-400" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex mt-12 md:mt-32 flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <span className="hover:text-white cursor-pointer text-center">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer text-center">Terms of Use</span>
            <span className="hover:text-white cursor-pointer text-center">Disclaimer</span>
            <span className="hover:text-white cursor-pointer text-center">© 2025. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;