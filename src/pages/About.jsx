import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Temp from "@/components/Temp";

const About = () => {
  return (
    <>
      <Navbar />
      {/* <div className="h-96 bg-[#222] flex  justify-center py-40 text-neutral-400 ">
        <p>nothign here except the footer</p>
      </div> */}
      <Temp />
      <Footer />
    </>
  );
};

export default About;
