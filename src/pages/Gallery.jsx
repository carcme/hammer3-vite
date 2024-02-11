import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Autoplay from "embla-carousel-autoplay";
import { Fade } from "react-awesome-reveal";

import data from "../data/TestimonialData";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div>
        <section className='section-divider h-screen text-white text-center grid bg-cover bg-right bg-[url("assets/bg_forest_lodge.webp")]'>
          <div className="col-start-1 row-start-1 bg-[#222222]/70 w-full h-full"></div>
          <div className="col-start-1 row-start-1 mx-auto my-40">
            <div className="w-full lg:p-10 ">
              {/* <Fade direction="up" triggerOnce={true}> */}
              <h1
                className="text-white lg:text-4xl text-2xl font-bold font-Montserrat 
              leading-2 pb-10 sm:animate-txtBlur"
              >
                Put some nice photos here
              </h1>

              <div className="flex "></div>
              {/* </Fade> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
