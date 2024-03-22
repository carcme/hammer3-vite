import React, { useEffect } from "react";
import GridGallery from "@/components/gallery/GridGallery";
import galleryVenueData from "@/data/galleryVenueData";
import { getLanguage } from "@/LanguageContext";

const Gallery = () => {
  const text = getLanguage(galleryVenueData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#171717]">
        <div className="flex flex-col w-full px-4 pt-40 text-center text-white section-divider lg:px-40">
          <h1 className="mb-4 text-2xl font-bold sm:text-5xl animate-bgBlur">
            {text.sectionHeading}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 animate-bgBlur">
            {text.sectionSubHeading}
          </p>
        </div>
      </div>
      <GridGallery galleryImages={text.listItems} />
    </>
  );
};

export default Gallery;
