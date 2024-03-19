import React from "react";
import { getAssetURL } from "../lib/image-util";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MysteryItem = ({
  id,
  title,
  plot,
  image,
  srcset,
  imgAlt,
  players,
  difficulty,
  cost,
  slug,
  compact,
}) => {
  const imageFile = getAssetURL(image);

  return (
    <div
      className={`p-4 overflow-hidden w-full ${
        compact ? "xl:w-1/3" : "lg:w-1/2"
      }`}
    >
      <div className="relative group">
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
          <img
            alt={imgAlt}
            className="inset-0 sm:h-[400px] h-[300px] object-cover object-center w-full opacity-30 group-hover:opacity-100 group-hover:bg-[linear-gradient(to_bottom,rgba(27,27,27,0.5),rgba(27,27,27,1))] shadow-xl shadow-black group-hover:scale-105 transition ease-in-out duration-300"
            src={imageFile}
            srcSet={`
                  ${getAssetURL(`${srcset}` + ".webp")} 900w,
                  ${getAssetURL(`${srcset}` + "-768x512.webp")} 768w,
                  ${getAssetURL(`${srcset}` + "-600x400.webp")} 600w,
                  ${getAssetURL(`${srcset}` + "-300x200.webp")} 300w
                `}
          />
          <div className="absolute top-0 block w-1/2 transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-white " />
          <div
            className={`absolute top-0 sm:left-0 shadow-2xl sm:m-4 p-1 m-2 text-sm font-light text-center text-white rounded-md sm:text-base sm:font-bold sm:min-w-20 before:ease overflow-hidden border transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  group-hover:before:-translate-x-40 ${
              difficulty == "Easy"
                ? "bg-green-700 group-hover:bg-green-800 group-hover:shadow-green-800 border-green-500"
                : difficulty == "Taxing"
                ? "bg-orange-400 group-hover:bg-orange-500 group-hover:shadow-orange-500 border-yellow-400"
                : "bg-red-700 group-hover:bg-red-700  group-hover:shadow-red-700 border-red-400"
            }`}
          >
            <span className="relative z-10">{difficulty}</span>
          </div>
          <div className="absolute z-10 w-full px-2 py-10 lg:px-8 -bottom-10 group-hover:bg-transparent">
            <h2 className="mb-1 font-bold tracking-widest text-left text-white xl:text-3xl lg:text-2xl sm:text-3xl font-Montserrat ">
              {title}
            </h2>
            <ul className="flex flex-wrap py-4 mb-4 text-[#717171] font-Montserrat text-[13px]">
              <li className="flex items-center">
                <span className="px-3">
                  <FaPeopleGroup size={16} color="#C2C2C2" />
                </span>
                <span className="text-neutral-200">{players}</span>
              </li>
              <p className="hidden pl-4 text-red-700 sm:inline-block">|</p>
              <li className="items-center hidden sm:flex">
                <span className="px-3">
                  <FaGamepad size={16} color="#C2C2C2" />
                </span>
                <span className="text-neutral-200">{difficulty}</span>
              </li>
              <p className="pl-4 text-red-700">|</p>
              <li className="flex items-center">
                <span className="px-3">
                  <FaEuroSign size={16} color="#C2C2C2" />
                </span>
                <span className="text-neutral-200">{cost} per Person</span>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MysteryItem;
