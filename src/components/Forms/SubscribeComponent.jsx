import React from "react";
import SubscribeWidget from "./SubscribeWidget";
import subscribeText from "@/data/subscribeComponentText";
import { getLanguage } from "@/LanguageContext";

const Subscribe = () => {
  const text = getLanguage(subscribeText);

  return (
    <section className="bg-[#1b1b1b]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 font-Montserrat">
        <div className="max-w-screen-md px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {text.title}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 font-light text-[#717171] font-Montserrat md:mb-12 sm:text-xl">
            {text.subTitle}
          </p>
          <SubscribeWidget source="component" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
