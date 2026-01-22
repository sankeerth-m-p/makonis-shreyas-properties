import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "/Shreyasinfra_logo.png";
import navClose from "/nav_close.svg";
import navMenu from "/nav_menu.svg";

const navItems = [
  { label: "OUR STORY", path: "/our-story" },
  { label: "OUR PROMISE", path: "/our-promise" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOGS", path: "/blogs" },
  { label: "MEDIA CENTER", path: "/media-center" },
  { label: "CONTACT", path: "/contact" },
];


// ✅ Desktop nav content only (same underline animation)
const NavContent = ({ location, onEnquireClick }) => (
  <nav className="max-w-6xl px-4 buttons mx-auto w-full min-h-[5rem] px-  py-4 flex items-center justify-between">
    {/* LOGO */}
    <h1 className="text-2xl  font-semibold tracking-wide text-gray-900">
      <Link to="/" className="hover:opacity-80 transition">
        <img
          src={LogoImg}
          alt="Shreyas Infra"
          className="h-8 md:h-10 object-contain"
        />
      </Link>
    </h1>

    {/* NAV LINKS - DESKTOP */}
    <div className="hidden md:flex gap-8  tracking-wider text-xs font-medium text-gray-800">
      {navItems.map(({ label, path }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            key={label}
            to={path}
            className={`
              relative transition-colors duration-300
              after:content-['']  pb-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gray-300
              after:origin-center after:transition-transform after:duration-300 after:ease-out
              ${isActive
                ? "text-ORANGE  after:scale-x-100"
                : "text-gray-800 hover:text-ORANGE border-ORANGE hover:after:scale-x-100 after:scale-x-0"
              }
            `}
          >
            {label}
          </Link>

        );

      })}
      
      <button
        onClick={onEnquireClick}
        className="relative transition-colors duration-300
    after:content-[''] pb-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gray-300
    after:origin-center after:transition-transform after:duration-300 after:ease-out
    text-gray-800 hover:text-ORANGE hover:after:scale-x-100 after:scale-x-0"
      >
        ENQUIRE
      </button>

    </div>
  </nav>
);

const Navbar = ({ onEnquireClick }) => {
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const triggered = useRef(false);
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowSticky(!entry.isIntersecting);
    });

    if (navRef.current) observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  // // ✅ SAME animation logic as your reference
  // useEffect(() => {
  //   const onScroll = () => {
  //     const current = window.scrollY;

  //     // reset when back at top
  //     if (current < 60) {
  //       triggered.current = false;
  //       setShowSticky(false);
  //       return;
  //     }

  //     // trigger animation once after leaving top
  //     if (!triggered.current && current > 60) {
  //       setShowSticky(true);
  //       triggered.current = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // ✅ Close mobile menu on route change (same as before)
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // 🔒 Disable background scroll when mobile menu is open
useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  } else {
    document.body.style.position = "";
    document.body.style.width = "";
  }

  return () => {
    document.body.style.position = "";
    document.body.style.width = "";
  };
}, [isMobileMenuOpen]);


  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* ✅ DEFAULT NAVBAR (slides UP when sticky appears) */}
      <header ref={navRef}
        className={`relative w-full z-50 bg-white shadow-lg
          transition-transform duration-100 ease-in will-change-transform
         
        `}
      >
        {/* MOBILE NAVBAR (UNCHANGED) */}
        <div className="md:hidden flex items-center justify-between w-full md:min-h-20 px-6 py-2">
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-10 h-10 z-[60]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <img src={navClose} alt="Close menu" className="w-6 h-6" />
            ) : (
              <img src={navMenu} alt="Open menu" className="w-6 h-6" />
            )}
          </button>

          {/* LOGO CENTER */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="hover:opacity-80 transition">
              <img
                src={LogoImg}
                alt="Shreyas Infra"
                className="h-8 md:h-10 object-contain"
              />
            </Link>
          </div>

          <div className="w-10"></div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <NavContent location={location} onEnquireClick={onEnquireClick} />
        </div>

        {/* ✅ MOBILE MENU OVERLAY + MENU (UNCHANGED) */}
{/* ✅ MOBILE MENU OVERLAY + MENU */}
<div
  className={`md:hidden fixed left-0 right-0 bottom-0 top-[56px] z-[55] bg-black/30 transition-opacity duration-300
    ${isMobileMenuOpen ? "opacity-100  pointer-events-auto" : "opacity-0 pointer-events-none"}`}
  onClick={() => setIsMobileMenuOpen(false)}
>


  {/* MENU PANEL */}
<div
  id="mobile-menu"
  className={`fixed left-0 w-full h-[calc(100vh-56px)] bg-white z-[56]
    top-[56px] overflow-y-auto
    transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
  style={{ paddingBottom: "2rem" }}
  onClick={(e) => e.stopPropagation()}
>


    <div className="flex flex-col px-6 py-8 space-y-4">

      {/* HOME */}
    <Link
  to="/"
  onClick={() => setIsMobileMenuOpen(false)}
  className="w-full py-4 text-lg font-medium text-gray-800 border-b border-gray-400 hover:text-ORANGE"

  >
  HOME
</Link>


      {navItems.map(({ label, path }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={label}
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
         className={`w-full py-4 text-lg font-medium border-b border-gray-400 transition-colors duration-300
${isActive ? "text-ORANGE" : "text-gray-800 hover:text-ORANGE"}`}


          >
            {label}
          </Link>
        );
      })}
{/* FAQ */}
<Link
  to="/faq"
  onClick={() => setIsMobileMenuOpen(false)}
  className="w-full py-4 text-lg font-medium border-b border-gray-400 text-gray-800 hover:text-ORANGE"
>
  FAQ
</Link>

{/* CAREERS */}
<Link
  to="/career"
  onClick={() => setIsMobileMenuOpen(false)}
  className="w-full py-4 text-lg font-medium border-b border-gray-400 text-gray-800 hover:text-ORANGE"
>
  CAREER
</Link>

      <button
        onClick={() => {
          setIsMobileMenuOpen(false);
          onEnquireClick();
        }}
        className="w-full py-4 text-lg font-medium text-left text-gray-800 border-b border-gray-400 hover:text-ORANGE"   >
        ENQUIRE
      </button>

    </div>
  </div>
</div>


      </header>

      {/* ✅ STICKY NAVBAR (slides DOWN after scroll > 80px) */}
     {/* ✅ STICKY NAVBAR (DESKTOP + MOBILE) */}
<header
  className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg
    transition-transform duration-300 ease-in-out will-change-transform
    ${showSticky ? "translate-y-0" : "-translate-y-full"}
  `}
>
  {/* DESKTOP STICKY */}
  <div className="hidden md:block">
    <NavContent location={location} onEnquireClick={onEnquireClick} />
  </div>

  {/* MOBILE STICKY */}
<div className="md:hidden flex items-center justify-between w-full px-6 py-2 bg-white">
    <button onClick={toggleMobileMenu}>
      <img src={navMenu} className="w-6 h-6" />
    </button>

    <Link to="/" className="absolute left-1/2 -translate-x-1/2">
      <img src={LogoImg} className="h-8" />
    </Link>

    <div className="w-6"></div>
  </div>
</header>
{/* <div className="h-14 md:hidden"></div> */}




    </>
  );
};

export default Navbar;
