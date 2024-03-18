import React, { useEffect } from "react";
import { hostsData } from "@/data/hostsData";
import HowToPlay from "@/components/IconPack";

import HostsSimple from "@/components/Hosts/HostsSimple";
import howToPlayData from "../data/howToPlayData";
import Testimonial from "@/components/Testimonial/Testimonial";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HowToPlay json={howToPlayData} />
      <HostsSimple json={hostsData} />
      <Testimonial />
    </>
  );
};

export default About;
