import React from "react";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAssetURL } from "../../lib/image-util";

const Featured = ({
  id,
  order,
  title,
  plot,
  image,
  srcset,
  players,
  difficulty,
  cost,
  slug,
}) => {
  console.log(image);
  const imageFile = getAssetURL(image);

  return (
    <div id="mysteryItem" className="flex justify-center ">
      <div className="grid grid-cols-1 m-4 lg:grid-cols-12 max-w-[1080px]">
        <div
          className={`order-last lg:col-span-5 bg-[#242424] shadow-xl shadow-black flex flex-col justify-center ${
            order ? " lg:order-first" : "lg:order-last"
          }`}
        >
          <h2 className="px-6 mt-10 text-2xl font-bold text-left text-white font-Montserrat lg:text-3xl">
            {title}
          </h2>
          <ul className="flex flex-wrap mr-[10px] ml-[10px] py-4 text-[#717171] font-Montserrat text-[13px]">
            <li className="flex items-center">
              <span className="px-4">
                <FaPeopleGroup size={16} color="#C2C2C2" />
              </span>
              <span>{players}</span>
            </li>
            <p className="pl-4 text-red-700">|</p>
            <li className="flex items-center ">
              <span className="px-3">
                <FaGamepad size={16} color="#C2C2C2" />
              </span>
              <span>{difficulty}</span>
            </li>
            <p className="pl-4 text-red-700">|</p>
            <li className="flex items-center">
              <span className="px-3">
                <FaEuroSign size={16} color="#C2C2C2" />
              </span>
              <span>{cost} / person</span>
            </li>
          </ul>
          <div className="inline-flex flex-col text-[#717171] font-normal leading-6 md:text-[16px] text-[14px] font-Hind px-6 text-left">
            {plot.map(
              (paragraph, index) =>
                index < 10 && (
                  <p key={index} className="py-2 text-left">
                    {paragraph}
                  </p>
                )
            )}
          </div>
          <Link
            to="/booking"
            state={{
              id: id,
              title: title,
              plot: plot,
              image: image,
              srcset: srcset,
              players: players,
              difficulty: difficulty,
              cost: cost,
              slug: slug,
            }}
          >
            <button
              className="my-6 px-10 py-3 bg-red-700 rounded-3xl text-white 
            hover:text-red-700 hover:border-red-700 hover:shadow-[inset_14rem_0_0_0] hover:shadow-neutral-200 
            duration-300 transition-[color,box-shadow]"
            >
              Investigate
            </button>
          </Link>
        </div>
        <div className="shadow lg:col-span-7">
          <div className="grid grid-rows-12">
            <div className="hidden row-span-2 bg-transparent lg:inline-block"></div>
            <img
              className={`lg:hover:scale-110 lg:hover:shadow-xl lg:shadow-md lg:shadow-black lg:hover:drop-shadow-[10px_15px_15px_rgba(0,0,0,0.5)] transition-all duration-300 row-span-12 lg:row-span-8
            ${order ? "lg:hover:translate-x-8" : "lg:hover:-translate-x-8"} `}
              decoding="async"
              src={imageFile}
              alt="Featured mystery"
              srcSet={`
                  ${getAssetURL(`${srcset}` + ".webp")} 900w,
                  ${getAssetURL(`${srcset}` + "-768x512.webp")} 768w,
                  ${getAssetURL(`${srcset}` + "-600x400.webp")} 600w,
                  ${getAssetURL(`${srcset}` + "-300x200.webp")} 300w
                `}
              loading="eager"
            />

            <div className="hidden row-span-2 bg-transparent lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
