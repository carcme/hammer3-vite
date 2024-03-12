import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hostsData } from "@/data/hostsData";
import HowToPlay from "@/components/IconPack";

import HostsSimple from "@/components/Hosts/HostsSimple";
import howToPlayData from "../data/howToPlayData";
import Testimonial from "@/components/Testimonial/Testimonial";

const About = () => {
  return (
    <>
      <Navbar />
      <HowToPlay json={howToPlayData} />
      <HostsSimple json={hostsData} />
      <Testimonial />
      <Footer />
    </>
  );
};

export default About;
