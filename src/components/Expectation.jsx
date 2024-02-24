import React, { useRef, useState, useEffect } from "react";
import useIsVisible from "../hooks/useIsVisible";
import data from "../data/ExpectationData";
import ExpectationItem from "./ExpectationItem";

const Expectation = () => {
  const [animate, setAnimate] = useState(true);
  const refExpect = useRef();
  const isVisible1 = useIsVisible(refExpect);

  useEffect(() => {
    let timeoutId;
    if (isVisible1) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible1]);

  return (
    <section className="section-divider py-40 bg-[#222222] ">
      <div className="w-full text-center lg:p-10">
        <h1
          ref={refExpect}
          className={`text-white lg:text-4xl text-2xl font-bold font-Montserrat leading-2 pb-10
             ${isVisible1 && animate ? "sm:animate-txtBlur" : {}}`}
        >
          What to Expect
        </h1>
        <div className="flex "></div>
        <div
          ref={refExpect}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 w-full  
          ${isVisible1 && animate ? "sm:animate-txtBlur" : ""}`}
        >
          {data.map((item, index) => (
            <ExpectationItem
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

export default Expectation;
