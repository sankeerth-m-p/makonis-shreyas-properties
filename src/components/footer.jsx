import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToTestimonials = () => {
    navigate("/#testimonials");
  };

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-neutral-400 text-sm font-normal min-h-[50vh] md:h-[66vh] relative flex justify-center items-center">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:m-36 lg:mx-64 py-8 md:py-0">

        {/* MOBILE */}
        <div className="md:hidden h-full flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 pt-6">
            <ul className="space-y-4">
              <li><Link to="/our-story" className="hover:text-white block">Our Story</Link></li>
              <li><Link to="/projects" className="hover:text-white block">Projects</Link></li>
              <li><button onClick={goToTestimonials} className="hover:text-white block text-left">Testimonial</button></li>
              <li><Link to="/media-center" className="hover:text-white block">Media Center</Link></li>
              <li><Link to="/blogs" className="hover:text-white block">Blog</Link></li>
            </ul>

            <ul className="space-y-4">
              <li><Link to="/career" className="hover:text-white block">Career</Link></li>
              <li><Link to="/contact" className="hover:text-white block">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white block">FAQ</Link></li>
            </ul>
          </div>

          <div className="flex items-center gap-4 pt-10">
            <img className="w-32 opacity-90" src="/shreyas_logo_footer.png" alt="Shreyas Logo" />
            <div className="text-white leading-tight">
              defining <br /> lifestyles
            </div>
          </div>

          <div className="pt-10 pb-6 text-neutral-500">
            <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
            </div>
            <div className="mt-4">©2025. All Rights Reserved.</div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-10">

            <ul className="space-y-4">
              <li><Link to="/our-story" className="hover:text-white block">Our Story</Link></li>
              <li><Link to="/projects" className="hover:text-white block">Projects</Link></li>
              <li><button onClick={goToTestimonials} className="hover:text-white block text-left">Testimonial</button></li>
              <li><Link to="/media-center" className="hover:text-white block">Media Center</Link></li>
              <li><Link to="/blogs" className="hover:text-white block">Blog</Link></li>
            </ul>

            <ul className="space-y-4">
              <li><Link to="/career" className="hover:text-white block">Career</Link></li>
              <li><Link to="/contact" className="hover:text-white block">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white block">FAQ</Link></li>
            </ul>

            <div className="text-right flex flex-col items-end">
              <img width="300" src="/shreyas_logo_footer.png" />
              <div className="mt-20 space-y-2">
                <p className="text-neutral-500">Visiting Hours</p>
                <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
                <div className="border-b pt-4 w-40 border-neutral-400" />
              </div>
            </div>

          </div>

          <div className="flex mt-24 justify-between items-center">
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <span>© 2025. All Rights Reserved.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
