import { Link, useNavigate } from "react-router-dom";

const Footer = () => {const navigate = useNavigate();const goToTestimonials = () => {
    navigate("/#testimonials");
  };
 
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-neutral-400 text-sm font-normal min-h-[50vh] md:min-h-[66vh] relative flex justify-center items-center">

      <div className="max-w-6xl md:py-5 uppercase px-6 md:px-6 sm:px-6  w-full  py-8 ">

        {/* MOBILE */}
        <div className=" lg:hidden h-full flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 pt-6">
            <ul className="space-y-4">
              <li><Link to="/our-story" className="hover:text-white block">Our Story</Link></li>
              <li><Link to="/projects" className="hover:text-white block">Projects</Link></li>
              {/* <li><button onClick={goToTestimonials} className="hover:text-white buttons block text-left">Testimonial</button></li> */}
              <li><Link to="/media-center" className="hover:text-white block">Media Center</Link></li>
              <li><Link to="/blogs" className="hover:text-white block">Blog</Link></li>
            </ul>

            <ul className="space-y-4">
              <li><Link to="/career" className="hover:text-white block">Career</Link></li>
              <li><Link to="/contact" className="hover:text-white block">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white block">FAQ</Link></li>
            </ul>
          </div>

     <div className="flex items-center gap-6 pt-10">
  <img className="w-32 h-auto opacity-90" src="/shreyas_logo_footer.webp" />

 <div className="flex gap-3">
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <img
      src="/LinkedIn.svg"
      className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition"
    />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img
      src="/insta.svg"
      className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition"
    />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <img
      src="/facebook.svg"
      className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition"
    />
  </a>
</div>

</div>


          {/* Bottom policy section */}
          <div className="pt-10  pb-6 text-xs tracking-wide  text-neutral-400 -500">
            <div className="flex items-center gap-3">
              <span className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white transition cursor-pointer">
                Terms of Use
              </span>
              <span className="hover:text-white transition cursor-pointer">
                Disclaimer
              </span>
            </div>
            <div className="mt-4">©2025. All Rights Reserved.</div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden   lg:block">
          {/* Top Section */}
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8  lg:gap-10">
            {/* Column 1 */}
            <div>
              <ul className="space-y-4  lg:space-y-5 text-xs ">
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
                  {/* <button onClick={goToTestimonials} 
                    className="hover:text-white  buttons cursor-pointer transition block"
                  >
                    Testimonial
                  </button> */}
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
              <ul className="space-y-4  lg:space-y-5 text-xs">
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

            {/* Column 3 */}
            <div className="hidden  lg:text-right  lg:flex flex-col  lg:items-end">
              <div className="flex  lg:justify-end items-center gap-2 w-[300px]  mb-3 ">
                <img src="/shreyas_logo_footer.webp" />
              </div>

             <div className="text-xs mt-20 text-neutral-500 space-y-3 text-right">
  <p className="uppercase text-xs text-neutral-500">Visiting Hours</p>
  <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
  <div className="border-b-2 pt-5 border-neutral-600 w-40 ml-auto" />

  {/* Social Icons */}
<div className="flex justify-end gap-4 pt-4">
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <img
      src="/LinkedIn.svg"
      className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition"
    />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img
      src="/insta.svg"
      className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition"
    />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <img
      src="/facebook.svg"
      className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition"
    />
  </a>
</div>
</div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="flex mt-12  lg:mt-32 flex-col    lg:flex-row items-center justify-between text-xs text-neutral-500 -400 gap-4">
            <div className="flex flex-wrap justify-center  lg:justify-start gap-1   lg:gap-6 text-xs">
              <Link to="/privacy-policy" className="hover:text-white cursor-pointer text-center">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white cursor-pointer text-center">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="hover:text-white cursor-pointer text-center">
                Disclaimer
              </Link>
              <span className="hover:text-white cursor-pointer text-center">
                © 2025. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
