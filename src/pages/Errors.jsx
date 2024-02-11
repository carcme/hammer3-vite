import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Errors = () => {
  return (
    <div>
      <Navbar />
      <div
        id="error"
        className="relative h-screen min-h-screen bg-cover w-full bg-[black]/20"
      >
        <div className="bg-[url('assets/clown-gun-zoom.webp')]  h-screen bg-cover w-full bg-right object-cover animate-bgBlur mix-blend-overlay z-10 ">
          <h1 className="text-center text-red-900 text-5xl font-extrabold">
            Error: 404
          </h1>
          <p className="text-center text-red-900 text-5xl font-extrabold">
            Page Not Found!
          </p>

          <div
            id="lines"
            className="p-32 w-[100%] h-32 relative before:absolute before:content-[''] 
        before:h-[2px] before:bg-white before:w-[45%] before:t-[45%] before:right-0
        after:h-[2px] after:bg-white after:w-[45%] after:t-[45%] after:left-0"
          >
            <div id="circle"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Errors;
