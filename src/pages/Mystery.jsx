import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Concept from "@/components/Concept";

const Mystery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <div>
        <section
          id="mystery"
          className="section-divider py-40 bg-[#222222] flex flex-col text-white"
        >
          <h1 className="text-2xl text-center font-bold lg:text-4xl">
            Mystery Page!
          </h1>
          <p className="text-center lg:text-2xl">
            TODO: build the Mystery page{" "}
          </p>
          <button className="block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack ">
            Something
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Mystery;
