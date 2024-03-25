import React, { useEffect } from "react";

import HowToPlay from "@/components/IconPack";
import HostsSimple from "@/components/Hosts/HostsSimple";
import Testimonial from "@/components/Testimonial/Testimonial";

import howToPlayData from "@/data/howToPlayData";
import { hostsData } from "@/data/hostsData";
import { getLanguage } from "@/LanguageContext";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HowToPlay json={getLanguage(howToPlayData)} />
      <HostsSimple json={getLanguage(hostsData)} />
      <Testimonial />
    </>
  );
};

export default About;
