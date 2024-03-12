import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { getAssetURL } from "../lib/image-util";
import { Link } from "react-router-dom";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import MysteryItem from "@/components/MysteryItem";
import { MysteryListData as data } from "../data/MysteryListData";
import BookingForm from "@/components/Forms/BookingForm";

const Booking = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state === null) {
    // window.location.replace("https://hammer3.com/mystery");
    navigate("/mystery");
    return;
  }
  const { id, title, plot, image, srcset, players, difficulty, cost, slug } =
    location.state;
  const heroImage = getAssetURL(image);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      <Navbar />
      <div id="home" className="w-full bg-cover">
        <div className="relative">
          <div
            className="object-cover w-full h-screen bg-center bg-cover lg:bg-left mix-blend-overlay"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(27,27,27,0.1),rgba(27,27,27,1)),url(${heroImage})`,
            }}
            loading="eager"
            // className={`relative bg-cover w-full bg-center object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.1),rgba(27,27,27,1)),url('http://localhost:5174/src/assets/forest-walk.webp')]`}
          ></div>
          <div className="absolute flex text-white md:bottom-20 bottom-10 h-fit">
            <h1 className="px-4 text-5xl font-bold lg:px-10 lg:text-7xl font-Montserrat animate-txtBlur">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative bg-[#1B1B1B] text-neutral-300">
        <div className="flex flex-col justify-between max-w-screen-lg px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <ul className="rounded-xl md:col-gap-10 md:row-gap-10 md:grid md:grid-cols-3 ">
              <li className="p-5 pb-10 mt-14 text-center bg-[#282828] rounded-xl md:rounded-r-none">
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
              <li className="p-5 pb-10 mt-14 text-center md:border-l rounded-xl md:rounded-none  border-neutral-500 bg-[#282828]">
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
              <li className="p-5 pb-10 mt-14 text-center md:border-l rounded-xl border-neutral-500 bg-[#282828] md:rounded-l-none">
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
              <h3 key={index} className="pt-4 sm:text-xl font-Montserrat">
                {para}
              </h3>
            ))}
          </div>
          <div className="section-divider-white"></div>
          <div className="pt-40 pb-20 text-2xl font-bold text-center sm:text-4xl font-Montserrat">
            <p>BOOK YOUR MYSTERY NIGHT NOW!</p>
          </div>
          <div className="">
            <BookingForm
              id={id}
              title={title}
              plot={plot}
              image={image}
              srcset={srcset}
              players={players}
              difficulty={difficulty}
              cost={cost}
              slug={slug}
              compact={true}
            />
          </div>
        </div>

        <div className="text-2xl font-bold text-center sm:p-40 sm:text-4xl font-Montserrat">
          <p className="p-0">Other Mysteries</p>
          <div className="flex flex-col flex-wrap md:flex-row">
            {data.map(
              (item, index) =>
                item.id != id && (
                  <MysteryItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    plot={item.plot}
                    image={item.image}
                    srcset={item.srcset}
                    players={item.players}
                    difficulty={item.difficulty}
                    cost={item.cost}
                    slug={item.slug}
                    compact={true}
                  />
                )
            )}
            {/* {Array.from({ length: 2 }).map((_, index) => (
                <MysteryItem key={index} />
              ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
