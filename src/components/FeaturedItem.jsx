import React from "react";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAssetURL } from "../lib/image-util";

const Featured = ({ title, plot, image, players, difficulty, cost, slug }) => {
  console.log(image);
  const imageFile = getAssetURL(image);

  return (
    <div id="mysteryItem">
      <div className="flex justify-center h-screen bg-[#1b1b1b]">
        <div className="lg:grid lg:grid-cols-12 h-9 lg:mx-20 mx-5 max-w-6xl text-neutral-400 border-neutral-400">
          <div className="flex items-center col-span-7 border-neutral-400">
            <img
              className="object-cover w-full lg:hover:scale-105 lg:shadow-xl lg:shadow-black lg:hover:drop-shadow-[10px_15px_15px_rgba(0,0,0,0.5)] transition-[transform, shadow] duration-300"
              decoding="async"
              src={imageFile}
              width="900px"
              height="600px"
              alt="Featured mystery"
              // srcSet={`
              //     ${getAssetURL("pbg6.webp")} 900w,
              //     ${getAssetURL("pbg6-768x512.webp")} 768w,
              //     ${getAssetURL("pbg6-600x400.webp")} 600w,
              //     ${getAssetURL("pbg6-300x200.webp")} 300w
              //   `}
              sizes="(max-width: 900px) 100vw, 900px"
              loading="eager"
            />
          </div>
          <div className="col-span-5 max-w-96 bg-[#242424] shadow-xl shadow-black">
            <h2 className="text-left px-6 text-white font-Montserrat lg:text-3xl text-2xl font-bold py-10">
              {title}
            </h2>
            <ul className="flex flex-wrap justify-center mr-[10px] ml-[10px] pb-4">
              <li className="flex items-center break-words">
                <span className="px-3">
                  <FaPeopleGroup size={20} color="#C2C2C2" />
                </span>
                <span className="font-Montserrat text-[13px] text-[#717171]">
                  {players}
                </span>
              </li>
              <p className="text-red-700 px-3">|</p>
              <li className="flex items-center break-words">
                <span className="px-3">
                  <FaGamepad size={20} color="#C2C2C2" />
                </span>
                <span className="font-Montserrat text-[13px] text-[#717171]">
                  {difficulty}
                </span>
              </li>
              <p className="text-red-700 px-3">|</p>
              <li className="flex items-center break-words">
                <span className="px-3">
                  <FaEuroSign size={20} color="#C2C2C2" />
                </span>
                <span className="font-Montserrat text-[13px] text-[#717171]">
                  {cost}
                </span>
              </li>
            </ul>
            <div className="inline-flex flex-col text-[#717171] font-normal leading-6 md:text-[16px] text-[14px] font-Hind px-6 text-left">
              {plot.map((paragraph, index) => (
                <p key={index} className="py-2 text-left">
                  {paragraph}
                </p>
              ))}
              {/* <p className="py-2 text-left">
                Whatever happened to Jane Templeton? The young maid disappeared
                without a trace 20 years ago and now your group must find out
                what happened to her.
              </p>
              <p className="py-2 text-left">
                Detective Inspector Duncan Hall has gathered all the suspects to
                dinner… and none of the guests are who they seem to be.
              </p>
              <p className="py-2 text-left">
                Your hosts will guide you through a thrilling crime where each
                character will play an important role. Enjoy the eerie scenery,
                the delicious food and the all inclusive drinks.
              </p> */}
            </div>
            <Link to={"/mystery"}>
              <button
                className="my-10 px-10 py-3 bg-red-700 rounded-3xl text-white 
            hover:text-red-700 hover:border-red-700 hover:shadow-[inset_14rem_0_0_0] hover:shadow-neutral-200 
            duration-300 transition-[color,box-shadow]"
              >
                Investigate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
