import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#testimonials") {
      const el = document.getElementById("testimonials");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);

  return <HomeLayout />;
};

export default Home;
