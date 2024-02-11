import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div>
      <div
        id="home"
        className="relative h-screen min-h-screen bg-cover w-full bg-[black]/20"
      >
        {/* background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 4'%3E%3Cpath transform='translate(-586.156 -1047.28)' fill='%23777777' d='M586.171,1048l0.708-.71,2.828,2.83-0.707.71Zm4.95-.71,0.707,0.71L589,1050.83l-0.707-.71Z'/%3E%3C/svg%3E"); */}
        <div
          className="bg-[url('assets/bg2.webp')] h-screen bg-cover w-full lg:bg-left bg-center object-cover animate-bgBlur mix-blend-overlay z-10"
          loading="eager"
        >
          {/* bottom gradient to blend to next page */}
          <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-b from-transparent  to-[#151515]"></div>

          <div className="lg:p-64 py-40 px-20 text-white ">
            <h1 className="text-6xl lg:text-8xl font-bold font-Montserrat animate-txtBlur">
              Eat
            </h1>
            <h1 className="text-6xl lg:text-8xl font-bold font-Montserrat animate-txtBlur">
              Drink
            </h1>
            <h1 className="text-6xl lg:text-8xl font-bold font-Montserrat animate-txtBlur">
              Murder
            </h1>
            <div className="w-fit z-40">
              <Link to="/about">
                <p className="hero-decor-before pt-4 hover:text-[#f60b0e] md:before:w-[80px] sm:before:w-0 md:before:mr-6 tracking-[3px] font-normal lg:font-bold font-Montserrat cursor-pointer animate-txtBlur">
                  View the Mysteries
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
