import React from "react";
import { Link } from "react-router-dom";
import FooterData from "../data/FooterData";
import { getAssetURL } from "../lib/image-util";

export const Footer = () => {
  const logo = getAssetURL("footer-logo3.png");
  console.log(logo);
  return (
    <div id="footer" className="bg-cover w-full bg-[black]/20 ">
      <div className="bg-[url('assets/clown-gun-zoom.webp')] h-full bg-cover w-full sm:bg-right bg-center object-cover animate-bgBlur mix-blend-overlay">
        <footer className="pt-16 bg-[#222]/80">
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-4">
              <FooterData />
            </div>
          </div>
          <div className="text-center py-11 bg-transparent/40 m-0 mt-6 text-neutral-700 ">
            <Link to="/">
              <p>
                © <span className="text-base">Hammer3 </span> | 2024
              </p>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
