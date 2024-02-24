import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroContent2 from "@/components/HeroContent2";
// import { getAssetURL } from "../lib/image-util";

// const imageFile = getAssetURL(image);

const Faq = () => {
  return (
    <>
      <Navbar />
      {/* <section id="abt" className="py-40 h-screen bg-[#222222]"></section> */}
      <HeroContent2 />
      <Footer />
    </>
  );
};

export default Faq;
