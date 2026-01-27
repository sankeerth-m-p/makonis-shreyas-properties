import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import OurStory from "./pages/OurStory.jsx";
import Projects from "./pages/Projects.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Media from "./pages/Media.jsx";
import Enquire from "./pages/Enquire.jsx";
import PromisePage from "./pages/Promise.jsx";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import Disclaimer from "./pages/Disclaimer";
import Career from "./pages/Career";
import ReactLenis from "lenis/react";
import ScrollToTop from "./components/scrollToTop.jsx";
import { pageVariants, pageTransition } from "./components/pageTransitions.js";
import { useRef, useState } from "react";

function App() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [showEnquire, setShowEnquire] = useState(false);
const isHome = location.pathname === "/"; // check if current path is home

const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const direction =
    location.pathname.length > prevPath.current.length ? 1 : -1;

  prevPath.current = location.pathname;

  return (
    <>
{(!isHome || isMobile) && (
  <Navbar onEnquireClick={() => setShowEnquire(true)} />
)}    
      <>
         <ScrollToTop />
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
                  <OurStory />
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
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/media-center/*"
              element={
                <motion.div
                  custom={direction}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Media />
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
                  <Blogs />
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
            <Route
              path="/faq"
              element={
                <motion.div
                  custom={direction}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <FAQ />
                </motion.div>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <motion.div
                  custom={direction}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <PrivacyPolicy />
                </motion.div>
              }
            />
            <Route
              path="/terms"
              element={
                <motion.div
                  custom={direction}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <TermsOfUse />
                </motion.div>
              }
            />
            <Route
              path="/disclaimer"
              element={
                <motion.div
                  custom={direction}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Disclaimer />
                </motion.div>
              }
            />
            <Route
              path="/career"
              element={
                <motion.div
                  custom={direction}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Career />
                </motion.div>
              }
            />


          </Routes>
        </AnimatePresence>
      <AnimatePresence>
  {showEnquire && <Enquire onClose={() => setShowEnquire(false)} />}
</AnimatePresence>


{!isHome && <Footer />}
      </>
    
    </>
  );
}

export default App;