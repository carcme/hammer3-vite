import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { TiTick } from "react-icons/ti";
import { BiMailSend } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";

const ProcessForm = ({ status, message, onValidated, source }) => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState();
  // start, sending, success, error
  // const [test, setTest] = useState("error");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: " + email);
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    console.log("status: " + status);
    console.log("state: " + state);
    console.log("msg: " + message);
    if (status === "success") clearFields();
    else {
      setState(status);
    }
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const reset = () => {
    clearFields();
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
              className="block w-full p-3 pl-10 text-sm text-white placeholder-[#717171] bg-transparent border border-gray-600 rounded-lg shadow-none sm:rounded-none sm:rounded-l-lg focus:ring-0 focus:border-gray-400 focus:outline-none webkitAutoFillOverride focus:text-white active:text-white"
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
              className="relative w-full px-5 py-3 overflow-hidden text-sm font-medium text-center text-white transition-all bg-red-700 border border-gray-500 rounded-lg shadow-2xl cursor-pointer sm:rounded-none sm:rounded-r-xl hover:before:bg-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 hover:text-red-700 hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10">Subscribe</span>
            </button>
          </div>
        </div>
      )}
      {status == "success" && (
        <div
          className={`items-center py-3 mx-0 mb-3 space-y-4 sm:flex sm:space-y-0 animate-txtBlur ${
            source === "component"
              ? "justify-center max-w-full"
              : "max-w-screen-sm "
          }}`}
        >
          <TiTick size={24} className="text-red-700 " />
          <p className="mr-2 italic text-neutral-200">
            Subscribed to the Newsletter{" "}
          </p>
        </div>
      )}
      {state == "error" && (
        <div className="items-center max-w-screen-sm py-3 mx-0 mb-3 space-y-4 sm:flex sm:space-y-0 ">
          <MdErrorOutline
            size={24}
            className="mr-2 text-red-700 animate-shuffle"
          />

          <p className="italic text-neutral-200"></p>
          <button
            onClick={reset}
            className="h-6 ml-4 bg-transparent border-2 hover:bg-neutral-700 border-neutral-700 hover:italic"
          >
            Reset
          </button>

          <div className="pl-2 text-[10px]">
            <p>{message}</p>
          </div>
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

const SubscribeWidget = ({ source }) => {
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
            source={source}
          />
        )}
      />

      <div className="mx-0 max-w-screen-sm text-[12px] text-left newsletter-form-footer text-[#717171]">
        <p>We care about the protection of your data. </p>
        <p className="group">
          <Link to={"/private-policy"} className="font-medium hover:underline">
            Read our{" "}
            <span className="group-hover:text-white">Privacy Policy</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SubscribeWidget;
