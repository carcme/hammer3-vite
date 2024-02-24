import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";
import MailchimpForm from "@/components/MailchimpForm";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <section
          id="contact"
          className="section-divider py-40 bg-[#222222] flex flex-col text-white"
        >
          <h1 className="text-2xl font-bold text-center lg:text-4xl">
            Contact Page!
          </h1>
          <p className="px-3 text-center lg:text-2xl">
            TODO: build the Contact page{" "}
          </p>
          <button className="block w-1/3 p-2 mx-auto my-4 font-bold rounded-lg bg-AlmostBlack text-AlmostWhite hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack ">
            Something
          </button>
        </section>
      </div>
      <MailchimpForm />
      <SubscribeNewsletter />
      <Footer />
    </>
  );
};

export default Contact;
