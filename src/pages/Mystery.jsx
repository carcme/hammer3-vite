import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MysteryItem from "@/components/MysteryItem";
import data from "../data/MysteryListData";

const Mystery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <div id="mysteryPage" className="relative">
        <div
          className="w-full sm:p-20 bg-cover object-cover animate-bgBlur mix-blend-overlay bg-[#1b1b1b]"
          // linear-gradient(to_bottom,rgba(27,27,27,0.5),rgba(27,27,27,1)),url('assets/bg_forest_lodge.webp')
          loading="eager"
        >
          <div className="container max-w-6xl px-5 pt-40">
            <div className="section-divider-white -top-24"></div>
            <div className="flex justify-center mb-10 text-center text-white md:mb-20">
              <h1 className="text-2xl font-bold font-Montserrat sm:text-5xl ">
                Mysteries for you, Detective!
              </h1>
            </div>
            <div className="flex flex-col flex-wrap justify-center md:flex-row">
              {data.map((item, index) => (
                <MysteryItem
                  key={index}
                  id={Boolean(index % 2)}
                  title={item.title}
                  plot={item.plot}
                  image={item.image}
                  srcset={item.srcset}
                  players={item.players}
                  difficulty={item.difficulty}
                  cost={item.cost}
                  slug={item.slug}
                />
              ))}
              {/* {Array.from({ length: 2 }).map((_, index) => (
                <MysteryItem key={index} />
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mystery;
