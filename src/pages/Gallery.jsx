import React from "react";
import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

import Autoplay from "embla-carousel-autoplay";
import { Fade } from "react-awesome-reveal";

import data from "../data/TestimonialData";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <PhotoGallery />
      <Footer />
    </>
  );
};

export default Gallery;
