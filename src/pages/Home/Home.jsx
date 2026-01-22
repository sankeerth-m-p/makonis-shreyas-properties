import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#testimonials") {
      const container = document.getElementById("home-scroll");
      const el = document.getElementById("testimonials");

      if (container && el) {
        setTimeout(() => {
          container.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
        }, 200);
      }
    }
  }, [location]);

  return <HomeLayout />;
};

export default Home;
