import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { TiTick } from "react-icons/ti";
import { BiMailSend } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { Button } from "./button";

const ProcessForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  // start, sending, success, error
  // const [test, setTest] = useState("error");

  console.log("status: " + status);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit pressed!!");
    console.log("email: " + email);
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const reset = () => {
    setTest("start");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {status == null && (
        <div className="items-center max-w-screen-sm mx-0 mb-3 space-y-4 sm:flex sm:space-y-0">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#717171]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              className="block w-full p-3 pl-10 text-sm text-white placeholder-[#717171] bg-transparent border border-gray-600 rounded-lg shadow-none sm:rounded-none sm:rounded-l-lg  focus:ring-0 focus:border-gray-400  focus:outline-none webkitAutoFillOverride focus:text-white active:text-white"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              type="email"
              id="email"
              required={true}
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-5 w-full text-sm font-medium text-center text-white border border-gray-500 cursor-pointer bg-red-700 sm:rounded-none sm:rounded-r-xl rounded-lg hover:text-red-700 hover:border-red-700 hover:shadow-[inset_7rem_0_0_0] hover:shadow-neutral-200 transition-[color,box-shadow] duration-300 md:text-[16px] text-[14px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
      {status == "success" && (
        <div className="items-center max-w-screen-sm py-3 mx-0 mb-3 space-y-4 sm:flex sm:space-y-0 animate-txtBlur">
          <TiTick size={24} className="text-red-700 " />
          <p className="mr-2 italic text-neutral-200">
            Subscribed to the Newsletter{" "}
          </p>
        </div>
      )}
      {status == "error" && (
        <div className="items-center max-w-screen-sm py-3 mx-0 mb-3 space-y-4 sm:flex sm:space-y-0 ">
          <MdErrorOutline
            size={24}
            className="mr-2 text-red-700 animate-shuffle"
          />

          <p className="italic text-neutral-200"></p>
          <Button
            onClick={reset}
            className="h-6 ml-4 bg-transparent border-2 hover:bg-neutral-700 border-neutral-700 hover:italic"
          >
            reset
          </Button>
        </div>
      )}
      {status == "sending" && (
        <div className="items-center max-w-screen-sm py-3 mx-0 mb-3 space-y-4 sm:flex sm:space-y-0 animate-txtBlur">
          <BiMailSend size={24} className="mr-2 text-red-700 animate-pulse" />

          <p className=" text-neutral-200 animate-pulse">
            Sending your subscription
          </p>
        </div>
      )}
    </form>
  );
};

const SubscribeForm = () => {
  const url = `${import.meta.env.VITE_MC_SIGNUP_URL}?u=${
    import.meta.env.VITE_MC_U
  }&id=${import.meta.env.VITE_MC_ID}`;

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status = "", message }) => (
          <ProcessForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />

      <div className="mx-0 max-w-screen-sm text-[12px] text-left newsletter-form-footer text-[#717171]">
        <p>We care about the protection of your data. </p>
        <p className="group">
          <Link to={"/#"} className="font-medium hover:underline">
            Read our{" "}
            <span className="group-hover:text-white">Privacy Policy</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SubscribeForm;