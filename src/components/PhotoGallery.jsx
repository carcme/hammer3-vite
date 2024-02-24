import React from "react";
import PhotoItem from "./PhotoItem";

const PhotoGallery = () => {
  return (
    <div id="photoGallery" className="relative xl:h-[1112px]  bg-cover w-full">
      <div
        className="xl:h-fit w-full bg-cover object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.3),rgba(27,27,27,0.8)),url('assets/bg_forest_lodge.webp')]"
        loading="lazy"
        // className="xl:h-[1080px] w-full bg-cover lg:bg-left bg-center object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.1),rgba(27,27,27,1)),url('assets/bg2.webp')]"
        // loading="eager"
      >
        <div className="container px-5 pb-[84px] mx-auto pt-80">
          <div className="flex flex-col w-full mb-20 text-center text-white">
            <h1 className="mb-4 text-2xl font-medium sm:text-5xl ">
              Detectives that spent the night solving Mysteries!
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              quibusdam facere! Explicabo asperiores, rerum ipsam unde sint
              dolor praesentium facere iste minus vitae ratione porro
              doloremque, quia eaque nisi aliquid?
            </p>
          </div>
          <div className="flex flex-wrap ">
            {Array.from({ length: 6 }).map((_, index) => (
              <PhotoItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
