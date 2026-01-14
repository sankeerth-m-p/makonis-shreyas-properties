import "./index.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import OurStory from "./pages/OurStory.jsx";
import Projects from "./pages/Projects.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home/Home.jsx";import Media from "./pages/Media.jsx";
import PromisePage from "./pages/Promise.jsx";
import ReactLenis from "lenis/react";
import ScrollToTop from "./components/scrollToTop.jsx";
import { pageVariants, pageTransition } from "./components/pageTransitions.js";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

function App() {const location = useLocation();
const prevPath = useRef(location.pathname);

const direction =
  location.pathname.length > prevPath.current.length ? 1 : -1;

prevPath.current = location.pathname;

  return (
    <>
       <Navbar />

         <ReactLenis
  root
  options={{
    lerp: 0.1,        // Changed from 0.01 - this makes it much smoother
    duration: 1.5,    // Slightly longer for smoother feel
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,syncTouch: true,  // Add this line
  }}
><ScrollToTop/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

         
          <Route
            path="/"
            element={
              <motion.div
  custom={direction}
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
                <Home />
              </motion.div>
            }
          />

          <Route
            path="/our-promise"
            element={
              <motion.div
  custom={direction}
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
                <PromisePage />
              </motion.div>
            }
          />

            <Route
            path="/our-story"
            element={
              <motion.div
  custom={direction}
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
                <OurStory/>
              </motion.div>
            }
            />
            <Route
            path="/projects"
            element={
              <motion.div
  custom={direction}
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
                <Projects/>
              </motion.div>
            }
            />
             <Route
            path="/media-center"
            element={
              <motion.div
  custom={direction}
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
                <Media/>
              </motion.div>
            }
            />
           <Route
  path="/blogs/*"
  element={
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Blogs/>
    </motion.div>
  }
/>
<Route
  path="/contact"
  element={
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Contact />
    </motion.div>
  }
/>


            
        </Routes> 
      </AnimatePresence>

      <Footer />
          </ReactLenis>
    </>
  );
}

export default App;
