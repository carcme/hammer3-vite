import React from "react";
import { Link } from "react-router-dom";
import { getAssetURL } from "../lib/image-util";

const HeroContent2 = () => {
  const heroImage = getAssetURL("pbg2.webp");

  return (
    <div>
      {/* <!-- Hero section with background image, heading, subheading and button --> */}
      <div
        className="relative w-full overflow-hidden bg-no-repeat bg-cover h-max"
        style={{
          backgroundImage: `url('${heroImage}')`,
          width: "screen",
          height: "1000px",
        }}
      >
        {/* <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
            backgroundRepeat: "no-repeat",
            width: "250px",
          }}
        >
          Hello World
        </div> */}
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">Heading</h1>
              <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent2;
