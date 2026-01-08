import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/images/Shreyasinfra_logo.png"; 
const navItems = [
  { label: "OUR STORY", path: "/our-story" },
  { label: "OUR PROMISE", path: "/our-promise" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOGS", path: "/blogs" },
  { label: "MEDIA CENTER", path: "/media-center" },
  { label: "ENQUIRE", path: "/enquire" },
  { label: "CONTACT", path: "/contact" },
];

const NavContent = () => {
  const location = useLocation();

  return (
    <nav className="max-w-5xl mx-auto w-full min-h-20 px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
        <Link to="/" className="hover:opacity-80 transition">
          <img src={LogoImg} alt="Shreyas Infra" className=" h-10 object-contain" />
        
        </Link>
      </h1>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <Link
              key={label}
              to={path}
              className={`
                transition
                ${isActive
                  ? "text-ORANGE border-b-2 border-transparent"
                  : "hover:text-ORANGE hover:border-b-2 hover:border-ORANGE"}
              `}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);
  const lastScrollY = useRef(0);
const triggered = useRef(false);useEffect(() => {
  const onScroll = () => {
    const current = window.scrollY;

    // reset when back at top
    if (current === 0) {
      triggered.current = false;
      setShowSticky(false);
      return;
    }

    // trigger animation once after leaving top
    if (!triggered.current && current > 80) {
      setShowSticky(true);
      triggered.current = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  // useEffect(() => {
  //   const onScroll = () => {
  //     const current = window.scrollY;

  //     // scroll down → switch to sticky navbar
  //     if (current > lastScrollY.current && current > 80) {
  //       setShowSticky(true);
  //     }

  //     // scroll up → bring back default navbar
  //     if (current < lastScrollY.current) {
  //       setShowSticky(false);
  //     }

  //     lastScrollY.current = current;
  //   };

  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      {/* DEFAULT NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg
          transition-transform duration-500 ease-in-out will-change-transform
          ${showSticky ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <NavContent />
      </header>

      {/* STICKY NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg
          transition-transform duration-500 ease-in-out will-change-transform
          ${showSticky ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <NavContent />
      </header>
    </>
  );
};

export default Navbar;
