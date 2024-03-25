import React, { useEffect, useState } from "react";
import Accordion from "@/components/ui/Accordion";
import { getAssetURL } from "@/lib/image-util";
import ContactUs from "@/components/Contact/ContactUs";
import Testimonial from "@/components/Testimonial/Testimonial";

import faqData from "@/data/faqData";
import contactUsText from "@/data/contactPageText";
import { getLanguage, useLanguage } from "@/LanguageContext";

const Faq = () => {
  const language = useLanguage();
  const text = getLanguage(faqData);

  const heroImage = getAssetURL("bg_forest_lodge.webp");
  const [accordions, setAccordion] = useState(text.faqs);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });
    setAccordion(updatedAccordions);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setAccordion(text.faqs);
  }, [language]);

  return (
    <>
      <section
        id="faqs"
        className="relative w-full py-40 overflow-hidden bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${heroImage}')`,
          width: "screen",
          height: "300px",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white font-Montserrat md:px-12">
              <h1 className="mb-6 text-6xl relative font-bold before:content-[''] before:block before:absolute before:left-36 before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-red-700 animate-bgBlur">
                {text.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-10">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="mx-auto mb-10 text-2xl font-bold sm:text-4xl text-neutral-200 font-Montserrat">
            {text.subTitle}
          </h2>
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              text={accordion.text}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </section>

      <ContactUs text={getLanguage(contactUsText)} />
      <Testimonial />
    </>
  );
};

export default Faq;
