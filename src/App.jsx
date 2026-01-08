import "./index.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import OurStory from "./pages/Ourstory.jsx";
import Home from "./pages/Home";
import PromisePage from "./pages/Promise.jsx";
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
function App() {
  return (
    <>
       <Navbar />

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
    </>
  );
}

export default App;
