import "./index.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./pages/Home";
import PromisePage from "./pages/Promise.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-promise" element={<PromisePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
