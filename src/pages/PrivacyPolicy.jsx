import React, { useEffect, useState } from "react";
import Accordion from "@/components/ui/Accordion";

import data from "@/data/PrivacyPolicyData";
import { getAssetURL } from "../lib/image-util";

const PrivacyPolicy = () => {
  const heroImage = getAssetURL("clown-gun-zoom.webp");
  const [policies, setPolicies] = useState(data.policy);

  const toggleAccordion = (accordionkey) => {
    const updatedPolicies = policies.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setPolicies(updatedPolicies);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        id="faqs"
        className="relative w-full overflow-hidden bg-center bg-no-repeat bg-cover h-60 sm:py-40 sm:h-80"
        style={{
          backgroundImage: `url('${heroImage}')`,
          width: "screen",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white font-Montserrat md:px-12">
              <h1 className="mb-6 sm:text-6xl text-3xl relative font-bold before:content-[''] before:block before:absolute sm:before:left-[435px] before:left-[220px] before:bottom-1 sm:before:w-4 sm:before:h-4 before:w-2 before:h-2 before:rounded-full before:bg-red-700 animate-bgBlur">
                {data.sectionTitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-10">
        <div className="max-w-4xl mx-auto text-center ">
          {/* <h2 className="mx-auto mb-2 text-3xl font-bold text-red-800 font-Montserrat">
            Common Questions Answered
          </h2> */}
          {policies.map((item) => (
            <Accordion
              key={item.key}
              title={item.title}
              text={item.text}
              isOpen={item.isOpen}
              toggleAccordion={() => toggleAccordion(item.key)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
