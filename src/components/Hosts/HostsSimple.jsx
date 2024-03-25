import React from "react";

const HostsSimple = ({ json }) => {
  return (
    <div>
      <div className=" min-h-screen items-center justify-center bg-[#1b1b1b] section-divider py-40">
        <h1
          className={`text-white text-2xl font-bold font-Montserrat leading-2 pb-10 animate-bgBlur
          sm:text-5xl `}
        >
          Your Hosts
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:gap-28 md:grid-cols-2 ">
            {json.listing.map((host, i) => (
              <div
                key={i}
                className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-[440px] w-80">
                  <img
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={host.frontImg}
                    alt={host.name}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/10 group-hover:via-black/60 group-hover:to-black/90"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col justify-center px-9 transition-all duration-500 group-hover:translate-y-0 group-hover:bg-black/50">
                  <h1 className="text-3xl font-bold text-neutral-400 font-Montserrat">
                    {host.name.split(" ")[0]}
                  </h1>
                  {host.text.map((txt, j) => (
                    <p
                      key={j}
                      className="pt-4 text-sm text-left text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    >
                      {txt}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostsSimple;
