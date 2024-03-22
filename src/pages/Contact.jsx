import React, { useEffect } from "react";
import ContactUs from "@/components/Contact/ContactUs";
import SubscribeComponent from "@/components/Forms/SubscribeComponent";
import contactUsText from "@/data/contactPageText";
import { getLanguage } from "@/LanguageContext";

const Contact = () => {
  const text = getLanguage(contactUsText);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section-divider bg-[#1b1b1b]">
        <div className="flex flex-col w-full px-4 pt-40 text-center text-white lg:px-40">
          <h1 className="mb-4 text-2xl font-bold sm:text-5xl animate-bgBlur">
            {text.title}
          </h1>
          <p className="pb-10 mx-auto text-base leading-relaxed lg:w-2/3 animate-bgBlur sm:text-xl font-light text-[#717171] font-Montserrat">
            {text.subTitle}
          </p>
        </div>
      </div>
      <ContactUs text={text} />
      <div className="section-divider py-10 bg-[#1b1b1b]" />
      <SubscribeComponent />
    </>
  );
};

export default Contact;
