import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAssetURL } from "../lib/image-util";
import heroBlur from "../assets/heroBlur.jpg";
import hero from "../assets/bg2.webp";

const HeroContent = ({ loaded, setLoaded }) => {
  const heroImage = getAssetURL("bg2.webp");

  useEffect(() => {
    //
    setLoaded(true);
  }, []);

  return (
    <div id="home" className="xl:h-[1080px] w-full">
      {/* 
        bg-[url('assets/bg2.webp')] 
        url('https://hammer3.com/wp-content/uploads/2022/11/bg2.jpg')
        'assets/bg2.webp'
      */}
      {/* {!loaded ? (
        <div>
          <img
            src={heroBlur}
            alt=""
            loading="eager"
            className="object-cover w-full h-screen bg-cover "
          />
          <div className="object-cover xl:h-[1080px] bg-cover w-full">
            <img
              src={hero}
              alt=""
              loading="eager"
              className="object-cover xl:h-[1080px] bg-cover w-full hidden"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      ) : ( */}
      <div>
        <div
          className={`xl:h-[1080px] bg-cover w-full lg:bg-left bg-center object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.1),rgba(27,27,27,1)),url('assets/bg2.webp')]`}
          loading="eager"
        >
          <div className="px-20 py-40 text-white lg:p-64 ">
            <h1 className="z-10 text-6xl font-bold lg:text-8xl font-Montserrat animate-txtBlur">
              Eat
            </h1>
            <h1 className="z-10 text-6xl font-bold lg:text-8xl font-Montserrat animate-txtBlur">
              Drink
            </h1>
            <h1 className="z-10 text-6xl font-bold lg:text-8xl font-Montserrat animate-txtBlur">
              Murder
            </h1>
            <div className="z-40 w-fit">
              <Link to="/mystery">
                <p className="hero-decor-before pt-4 hover:text-[#f60b0e] md:before:w-[80px] sm:before:w-0 md:before:mr-6 tracking-[3px] font-normal lg:font-bold font-Montserrat cursor-pointer animate-txtBlur">
                  View the Mysteries
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default HeroContent;
