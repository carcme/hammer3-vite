import React, { useRef, useState, useEffect } from "react";
import useIsVisible from "../hooks/useIsVisible";
import FeatureItem from "./FeaturedItem";
import data from "../data/MysteryListData";

const Featured = () => {
  const [animate, setAnimate] = useState(true);
  const refFeature = useRef();
  const isVisible1 = useIsVisible(refFeature);

  useEffect(() => {
    let timeoutId;
    if (isVisible1) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible1]);

  return (
    <div className="section-divider h-fit bg-[#1B1B1B] ">
      <div className="w-full lg:p-10 bg-[#1B1B1B]">
        <div className="px-20 pt-32 pb-10 text-center">
          <h1
            ref={refFeature}
            className={`text-white lg:text-4xl text-2xl font-bold font-Montserrat leading-2
             ${isVisible1 && animate ? "sm:animate-txtBlur" : {}}`}
          >
            Featured Mysteries
          </h1>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        {data.map((item, index) => (
          <FeatureItem
            key={index}
            title={item.title}
            plot={item.plot}
            image={item.image}
            players={item.players}
            difficulty={item.difficulty}
            cost={item.cost}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
