import React, { useState } from "react";
import HeroContent from "@/components/HeroContent";
import Concept from "@/components/Concept";
import Expectation from "@/components/IconPack";
import Featured from "@/components/Featured/Featured";
import Testimonial from "@/components/Testimonial/Testimonial";

import expectData from "@/data/ExpectationData";
import { getLanguage } from "@/LanguageContext";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const textContent = getLanguage(expectData);

  return (
    <div>
      <HeroContent loaded={loaded} setLoaded={setLoaded} />
      {loaded && <Concept />}
      {loaded && <Expectation json={textContent} />}
      {loaded && <Featured />}
      {loaded && <Testimonial />}
    </div>
  );
};

export default Home;
