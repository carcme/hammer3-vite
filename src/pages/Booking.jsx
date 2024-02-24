import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";
import { getAssetURL } from "../lib/image-util";
import { Link } from "react-router-dom";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const Booking = ({}) => {
  const location = useLocation();
  const { id, title, plot, image, srcset, players, difficulty, cost, slug } =
    location.state;
  console.log("image: " + image);
  const heroImage = getAssetURL(image);
  console.log("image: " + heroImage);

  return (
    <div>
      <Navbar />
      <div id="home" className="relative w-full bg-cover">
        <div
          style={{
            backgroundImage: ` linear-gradient(to bottom, rgba(27,27,27,0.1),rgba(27,27,27,1)),url(${heroImage})`,
            mixBlendMode: "overlay",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
          // className={`relative bg-cover w-full bg-center object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.1),rgba(27,27,27,1)),url('http://localhost:5174/src/assets/forest-walk.webp')]`}
          // loading="eager"
        >
          <div className="text-white pt-96 md:pt-[600px] lg:h-screen">
            <h1 className="p-4 text-5xl font-bold lg:text-8xl font-Montserrat animate-txtBlur">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative bg-[#1B1B1B] text-neutral-300">
        <div className="flex flex-col justify-between max-w-screen-lg px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div className="mt-20 ">
            <ul className="rounded-xl bg-[#282828] md:col-gap-10 md:row-gap-10 md:grid md:grid-cols-3 ">
              <li className="p-5 pb-10 text-center ">
                <div className="flex flex-col items-center">
                  <div className="relative top-0 flex-shrink-0 -mt-14">
                    <div className="flex items-center justify-center w-16 h-16 text-xl font-semibold text-white bg-red-700 border border-white rounded-full">
                      <FaPeopleGroup size={30} />
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <h4 className="text-lg font-semibold leading-6 text-neutral-600">
                      {difficulty}
                    </h4>
                    <p className="mt-2 text-base font-bold leading-6 text-white">
                      Difficulty
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-5 pb-10 text-center border-l border-neutral-500">
                <div className="flex flex-col items-center">
                  <div className="relative top-0 flex-shrink-0 -mt-14">
                    <div className="flex items-center justify-center w-16 h-16 text-xl font-semibold text-white bg-red-700 border border-white rounded-full">
                      <FaGamepad size={30} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold leading-6 text-neutral-600">
                      {players}
                    </h4>
                    <p className="mt-2 text-base font-bold leading-6 text-white">
                      Players.
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-5 pb-10 text-center border-l border-neutral-500">
                <div className="flex flex-col items-center">
                  <div className="relative top-0 flex-shrink-0 -mt-14">
                    <div className="flex items-center justify-center w-16 h-16 text-xl font-semibold text-white bg-red-700 border border-white rounded-full">
                      <FaEuroSign size={30} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold leading-6 text-neutral-600">
                      {cost}
                    </h4>
                    <p className="mt-2 text-base font-bold leading-6 text-white">
                      Price per Person
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-20">
            {plot.map((para, index) => (
              <h3 key={index}>{para}</h3>
            ))}
          </div>
        </div>
        <p>{slug}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
