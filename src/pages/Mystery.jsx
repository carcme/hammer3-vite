import React, { useEffect } from "react";
import MysteryItem from "@/components/MysteryItem";
import { MysteryListData as data } from "../data/MysteryListData";

const Mystery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="mysteryPage" className="relative">
        <div
          className="w-full bg-cover object-cover mix-blend-overlay bg-[#1b1b1b] section-divider"
          // linear-gradient(to_bottom,rgba(27,27,27,0.5),rgba(27,27,27,1)),url('assets/bg_forest_lodge.webp')"
          loading="eager"
        >
          <div className="container max-w-6xl px-5 pt-40">
            <div className="flex justify-center mb-10 text-center text-white md:mb-20">
              <h1 className="text-2xl font-bold font-Montserrat sm:text-5xl animate-bgBlur ">
                Mysteries for you, Detective!
              </h1>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row">
              {data.map((item, index) => (
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
                  compact={false}
                />
              ))}
              {/* {Array.from({ length: 2 }).map((_, index) => (
                <MysteryItem key={index} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mystery;
