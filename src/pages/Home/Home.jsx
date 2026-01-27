import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const Home = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = document.getElementById("home-scroll");
    if (!container) return;

    if (location.hash === "#testimonials") {
      const el = document.getElementById("testimonials");
      if (el) {
        setTimeout(() => {
          container.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
        }, 200);
      }
    } else if (isMobile) {
      // Scroll to top on mobile when opening link without hash
      setTimeout(() => {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 200);
    }
  }, [location, isMobile]);

  return <HomeLayout />;
};

export default Home;
