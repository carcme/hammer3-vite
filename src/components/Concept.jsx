import React, { useRef, useEffect, useState } from "react";
import useIsVisible from "../hooks/useIsVisible";
import { Link } from "react-router-dom";

import { conceptSection } from "@/data/homePageText";
import { getLanguage } from "@/LanguageContext";

const Concept = () => {
  const text = getLanguage(conceptSection);
  const [animate, setAnimate] = useState(true);
  const refConcept = useRef();
  const isVisible1 = useIsVisible(refConcept);

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
    <section className="section-divider bg-[#1B1B1B] ">
      <div className="flex justify-center m-auto bg-[#1B1B1B] max-w-5xl">
        <div className="px-20 py-40 text-center">
          <h1
            ref={refConcept}
            className={`text-white lg:text-5xl text-2xl font-bold font-Montserrat pb-10
             ${isVisible1 && animate ? "sm:animate-txtBlur" : {}}`}
          >
            {text.title}
          </h1>
          <div className="text-[#999] flex flex-col gap-4 md:text-[16px] text-[14px]">
            {text.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <Link to={"/mystery"}>
            <button
              className="mt-20 px-10 py-4 bg-red-700 rounded-3xl text-white 
            hover:text-red-700 hover:border-red-700 hover:shadow-[inset_14rem_0_0_0] hover:shadow-neutral-200 
            duration-300 transition-[color,box-shadow] md:text-[16px] text-[14px]"
            >
              {text.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Concept;
