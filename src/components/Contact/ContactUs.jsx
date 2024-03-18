import React, { useEffect, useState, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";

const ContactUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    control,
    formState: { isValid, errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data, e) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
      });
  };

  const onMapLoaded = () => {
    setMapLoaded(true);
  };

  return (
    <section className="text-gray-600 body-font relative bg-[#1b1b1b] ">
      <div className="container flex flex-wrap max-w-5xl px-5 py-10 mx-auto sm:flex-nowrap">
        <div className="relative flex items-end justify-start w-full p-10 overflow-hidden rounded-lg lg:w-2/3 md:w-1/2 sm:h-auto h-96 sm:mr-10">
          <iframe
            className={`absolute inset-0  ${
              mapLoaded ? "visible" : "invisible"
            }`}
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4895.946586864058!2d13.7409994!3d52.1529954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a81b795bca3c45%3A0xf5cdca187c859a87!2sHammer%203!5e0!3m2!1sen!2sde!4v1710157639721!5m2!1sen!2sde"
            loading="lazy"
            referrerPolicy="noReferrerWhenDowngrade"
            style={{
              filter: "grayscale(1) contrast(1.2) invert(90%)",
            }}
            onLoad={() => onMapLoaded()}
          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-[#1b1b1b] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="mb-1 text-lg font-medium text-neutral-300 title-font">
            Contact Us
          </h2>
          <p className="mb-5 leading-relaxed text-neutral-600">
            Use the contact form or telephone the number below
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* web3Forms data */}
            <input
              type="hidden"
              value={import.meta.env.VITE_WEB3_PUB_ACCESS_KEY}
              {...register("access_key")}
            />
            <input
              type="hidden"
              value="New Contact from Hammer"
              {...register("subject")}
            />
            <input
              type="hidden"
              value="Hammer3 Booking"
              {...register("from_name")}
            />
            <div className="relative mt-6 mb-10 border-b-2 border-transparent focus-within:border-red-700">
              <input
                className="webkitAutoFillOverride block w-full p-2 px-3 border-0 rounded-md bg-neutral-800 leading-[1.6] shadow-none focus:outline-none focus:text-white focus-within:border-red-700"
                type="name"
                name="name"
                placeholder=""
                autoComplete="name"
                id="name"
                {...register("name", { required: true, maxLength: 100 })}
              />
              <label
                className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
                htmlFor="name"
              >
                Full Name
              </label>
            </div>
            <div className="relative mt-6 mb-10 border-b-2 border-transparent focus-within:border-red-700">
              <input
                className="webkitAutoFillOverride block w-full p-2 px-3 border-0 rounded-md bg-neutral-800 leading-[1.6] shadow-none focus:outline-none focus:text-white focus-within:border-red-700"
                type="email"
                name="email"
                placeholder=""
                autoComplete="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <label
                className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="relative my-6 border-b-2 border-transparent focus-within:border-red-700">
              <textarea
                className="block w-full p-2 px-3 leading-6 border-0 rounded-md shadow-none webkitAutoFillOverride bg-neutral-800 focus:outline-none focus:text-white "
                id="comments"
                type="text"
                name="comments"
                rows="5"
                placeholder=""
                {...register("comments", {
                  required: true,
                  maxLength: 1000,
                  minLength: 20,
                })}
              />
              <label
                htmlFor="comments"
                className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
              >
                Any questions can we help with?
              </label>
            </div>
            {isValid && (
              <div className="flex flex-col items-center py-6 animate-txtBlur">
                <button
                  type="submit"
                  className="relative w-full py-3 overflow-hidden text-sm font-medium text-center text-white transition-all bg-red-700 border border-red-300 rounded-lg shadow-2xl cursor-pointer max-w-96 sm:rounded-xl hover:before:bg-white hover:border-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-200 hover:text-red-700 hover:before:left-0 hover:before:w-full animate-txtBlur"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <svg
                        className="w-6 h-5 mx-auto animate-spin "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      "Send Enquiry"
                    )}
                  </span>
                </button>
              </div>
            )}
            {isSubmitSuccessful && isSuccess && (
              <>
                <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                  <svg
                    width="100"
                    height="100"
                    className="text-green-700"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  <h3 className="py-5 text-2xl text-green-500">Sent</h3>
                  <p className="text-gray-700 md:px-3">{Message}</p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
