import React from "react";
import Navbar from "../components/Navbar";
import HeroContent from "../components/HeroContent";
import Footer from "../components/Footer";
import Concept from "../components/Concept";
import Expectation from "../components/Expectation";
import Featured from "@/components/Featured";
import Testimonial from "@/components/Testimonial";
import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroContent />
      <Concept />
      <Expectation />
      <Featured />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
