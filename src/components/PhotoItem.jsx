import React from "react";
import { getAssetURL } from "../lib/image-util";

const PhotoItem = () => {
  const imageFile = getAssetURL("pbg6.webp");

  return (
    <div className="p-4 lg:w-1/3 sm:w-1/2 ">
      <div className="relative flex ">
        <img
          alt="gallery"
          className="absolute inset-0 object-cover object-center w-full h-full "
          src={imageFile}
        />
        <div className="relative z-10 w-full px-8 py-10 bg-gray-900 border-4 border-gray-800 opacity-0 hover:opacity-100">
          <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-400 ">
            Subtitle
          </h2>
          <h1 className="mb-3 text-lg font-medium text-white">Title</h1>
          <p className="leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            aspernatur non tempora aliquam, distinctio excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
