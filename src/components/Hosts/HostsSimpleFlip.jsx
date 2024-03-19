import React from "react";

const HostsSimpleFlip = ({ json }) => {
  return (
    <div
      class="flex min-h-screen justify-center sm:flex-row
    flex-col items-center gap-10 bg-[#171717]"
    >
      {json.listing.map((host, i) => (
        <div
          key={i}
          class="group h-[450px] sm:w-96 w-full px-6 [perspective:1000px]"
        >
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div class="absolute inset-0">
              <img
                src={host.frontImg}
                alt={host.name}
                class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 "
              />
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 p-12  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <div class="flex min-h-full flex-col ">
                <h1 class="text-3xl font-bold text-white">{host.name}</h1>
                {host.text.map((txt, j) => (
                  <p className="py-1 mt-2 rounded-md text-neutral-400" key={j}>
                    {txt}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HostsSimpleFlip;
