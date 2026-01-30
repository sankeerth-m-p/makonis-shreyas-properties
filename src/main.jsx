import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <div className="relative m-0">
  {/* Left guide */}
  <div className="fixed top-0 left-6 h-screen w-px bg-red-500 pointer-events-none z-[9999]" />

  {/* Right guide */}
  <div className="fixed top-0 right-6 h-screen w-px bg-red-500 pointer-events-none z-[9999]" />
  <div className="fixed md:top-44 lg:top-[12.5rem] right-0 w-screen h-[2px] bg-green-500 pointer-events-none z-[9999]" />
        {/* Left guide */}
        <div className="absolute h-screen  w-screen hidden lg:flex justify-center items-center pointer-events-none z-[9999]">
          
  <div className="fixed  max-w-6xl px-6 w-screen block   h-full   pointer-events-none z-[9999]" >
  <div className="    w-full block border-x-2 border-dashed  h-full  border-sky-500 pointer-events-none z-[9999] text-lg" >max-w-6xl px-6</div></div>
        </div>


  {/* Your app */}
  <App />
</div>

    </BrowserRouter>
  </StrictMode>
);
