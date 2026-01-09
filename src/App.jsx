import "./index.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import OurStory from "./pages/OurStory.jsx";
import Home from "./pages/Home";
import PromisePage from "./pages/Promise.jsx";
import ReactLenis from "lenis/react";
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
function App() {
  return (
    <>
       <Navbar />

          <ReactLenis
            root
            options={{
              lerp: 0.1,
              duration: 1.2,
              orientation: 'vertical',
              gestureOrientation: 'vertical',
              smoothWheel: true,
              wheelMultiplier: 1,
              smoothTouch: false,
              touchMultiplier: 2,
            }}
          >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

         
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Home />
              </motion.div>
            }
          />

          <Route
            path="/our-promise"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <PromisePage />
              </motion.div>
            }
          />

            <Route
            path="/our-story"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <OurStory/>
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
