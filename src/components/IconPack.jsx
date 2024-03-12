import React, { useRef, useState, useEffect } from "react";
import useIsVisible from "../hooks/useIsVisible";
import data from "../data/ExpectationData";
import IconPackItem from "./IconPackItem";

const IconPack = ({ json }) => {
  return (
    <section className="section-divider py-40 bg-[#222222]">
      <div className="justify-center max-w-6xl mx-auto">
        <h1
          className={`text-white text-2xl font-bold font-Montserrat leading-2 pb-10 animate-bgBlur
          sm:text-5xl `}
        >
          {json.sectionHeading}
        </h1>

        <div
          className={`grid grid-cols-1 gap-6 mt-4 
          ${
            json.listItems.length % 2 !== 0
              ? "sm:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }
          `}
        >
          {json.listItems.map((item, index) => (
            <IconPackItem
              key={index}
              Icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconPack;
