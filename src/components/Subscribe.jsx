import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#1b1b1b]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 font-Montserrat">
        <div className="max-w-screen-md px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="max-w-2xl mx-auto mb-8 font-light text-gray-400 font-Montserrat md:mb-12 sm:text-xl">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  placeholder="for email"
                  className="hidden mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block w-full p-3 pl-10 text-sm text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  autoComplete="email"
                  type="email"
                  id="email"
                  required=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white 
                   border border-gray-500 cursor-pointer bg-red-700 sm:rounded-r-xl sm:rounded-none rounded-lg
                   hover:text-red-700 hover:border-red-700 hover:shadow-[inset_7rem_0_0_0] hover:shadow-neutral-200 
            duration-1000 transition-[color,box-shadow] md:text-[16px] text-[14px]
                    focus:ring-4 focus:ring-red-900"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-[12px] text-left newsletter-form-footer text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
