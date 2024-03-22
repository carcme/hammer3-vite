import React, { useRef, useState, useEffect } from "react";
import useIsVisible from "../../hooks/useIsVisible";
import FeatureItem from "./FeaturedItem";
import { MysteryListData } from "@/data/MysteryListData";
import { getLanguage, useLanguage } from "@/LanguageContext";

const Featured = () => {
  const data = getLanguage(MysteryListData);
  const language = useLanguage();
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
    <div className="section-divider bg-[#1B1B1B] ">
      <div className="w-full lg:p-10 bg-[#1B1B1B]">
        <div className="px-20 pt-32 pb-10 text-center">
          <h1
            ref={refFeature}
            className={`text-white lg:text-5xl text-2xl font-bold font-Montserrat leading-2
             ${isVisible1 && animate ? "sm:animate-txtBlur" : {}}`}
          >
            {language === "en" && "Featured Mysteries"}
            {language === "de" && "Ausgewählte Mysterien"}
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          {data.mysteries.map(
            (item, index) =>
              item.feature && (
                <FeatureItem
                  key={index}
                  order={Boolean(index % 2)}
                  id={item.id}
                  title={item.title}
                  plot={item.plot}
                  image={item.image}
                  srcset={item.srcset}
                  players={item.players}
                  difficulty={item.difficulty}
                  cost={item.cost}
                  slug={item.slug}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
