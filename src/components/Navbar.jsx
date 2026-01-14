import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "/Shreyasinfra_logo.png";
import navClose from '/nav_close.svg';
import navMenu from '/nav_menu.svg';
const navItems = [
  { label: "OUR STORY", path: "/our-story" },
  { label: "OUR PROMISE", path: "/our-promise" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOGS", path: "/blogs" },
  { label: "MEDIA CENTER", path: "/media-center" },
  { label: "ENQUIRE", path: "/enquire" },
  { label: "CONTACT", path: "/contact" },
];

const NavContent = ({ location }) => (
  <nav className="max-w-6xl mx-auto w-full min-h-20 px-6 py-4 flex items-center justify-between">
    {/* LOGO */}
    <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
      <Link to="/" className="hover:opacity-80 transition">
        <img src={LogoImg} alt="Shreyas Infra" className="h-8 md:h-10 object-contain" />
      </Link>
    </h1>

    {/* NAV LINKS - DESKTOP */}
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
      {navItems.map(({ label, path }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={label}
            to={path}
            className={`
              relative transition-colors duration-300
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ORANGE
              after:origin-center after:transition-transform after:duration-300 after:ease-out
              ${
                isActive
                  ? "text-ORANGE after:scale-x-100"
                  : "text-gray-800 hover:text-ORANGE hover:after:scale-x-100 after:scale-x-0"
              }
            `}
          >
            {label}
          </Link>
        );
      })}
    </div>
  </nav>
);

const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const triggered = useRef(false);
  const location = useLocation();

  // Handle scroll for sticky navbar
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current === 0) {
        triggered.current = false;
        setShowSticky(false);
        return;
      }
      if (!triggered.current && current > 80) {
        setShowSticky(true);
        triggered.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg
        transition-transform duration-500 ease-in-out will-change-transform
        ${showSticky ? "translate-y-0" : "translate-y-0"}
      `}
    >
      {/* MOBILE NAVBAR */}
      <div className="md:hidden flex items-center justify-between w-full md:min-h-20 px-6 py-2">
        <button
          id="mobile-menu-button"
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-center w-10 h-10 z-[60]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
    <img 
      src={navClose} 
      alt="Close menu" 
      className="w-6 h-6"
    />
  ) : (
    <img 
      src={navMenu} 
      alt="Open menu" 
      className="w-6 h-6"
    />
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
        <NavContent location={location} />
      </div>

      {/* ✅ MOBILE MENU OVERLAY + MENU */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[55]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* MENU PANEL */}
          <div
            id="mobile-menu"
            className="fixed top-0 left-0 w-full h-screen bg-white z-[56]
              transition-all duration-500 ease-in-out overflow-y-auto translate-x-0"
            style={{ paddingTop: "5rem" }}
            onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside menu
          >
            <div className="flex flex-col px-6 py-8">
              {navItems.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={label}
                    to={path}
                    className={`py-4 px-2 text-lg font-medium  transition-colors duration-300 ${
                      isActive
                        ? "text-ORANGE"
                        : "text-gray-800 hover:text-ORANGE"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
