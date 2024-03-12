import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroContent from "../components/HeroContent";
import Footer from "../components/Footer";
import Concept from "../components/Concept";
import Expectation from "../components/IconPack";
import Featured from "@/components/Featured/Featured";
import Testimonial from "@/components/Testimonial/Testimonial";
import SubscribeComponent from "@/components/Forms/SubscribeComponent";
import expectData from "../data/ExpectationData";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {loaded && <Navbar />}
      {/* <Navbar /> */}
      <HeroContent loaded={loaded} setLoaded={setLoaded} />
      {loaded && <Concept />}
      {loaded && <Expectation json={expectData} />}
      {loaded && <Featured />}
      {loaded && <Testimonial />}
      {/* <Concept />
      <Expectation />
      <Featured />
      <Testimonial /> */}
      {/* <SubscribeComponent /> */}
      {loaded && <Footer />}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
