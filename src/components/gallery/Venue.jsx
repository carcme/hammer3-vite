import React from "react";

const Venue = () => {
  return (
    <div className="w-full bg-[#171717]">
      <div className="container px-5 pb-[84px] mx-auto pt-80">
        <div className="flex flex-col w-full mb-20 text-center text-white">
          <h1 className="mb-4 text-2xl font-medium sm:text-5xl animate-bgBlur">
            Detectives that spent the night solving Mysteries!
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 animate-bgBlur">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            quibusdam facere! Explicabo asperiores, rerum ipsam unde sint dolor
            praesentium facere iste minus vitae ratione porro doloremque, quia
            eaque nisi aliquid?
          </p>
        </div>

        <div className="p-5 md:p-10">
          <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            <img
              className="object-cover w-full h-full bg-cover rounded-lg"
              src="https://source.unsplash.com/ztpUS4N1xhY"
              alt=""
            />
            <img
              className="object-cover w-full h-full bg-cover rounded-lg"
              src="https://source.unsplash.com/mPFSPqZOO7s"
              alt=""
            />
            <img
              className="object-cover w-full h-full bg-cover rounded-lg"
              src="https://source.unsplash.com/uPEnxrdSKIw"
              alt=""
            />
            <img
              className="object-cover w-full h-full bg-cover rounded-lg"
              src="https://source.unsplash.com/hFKZ5-OT9Ys"
              alt=""
            />
            <img src="https://source.unsplash.com/xoTt2fjs7d0" alt="" />
            <img src="https://source.unsplash.com/Vc2dD4l57og" alt="" />
            <img src="https://source.unsplash.com/hqnQWmIt3cY" alt="" />
            <img src="https://source.unsplash.com/NTGg2rtWDwg" alt="" />
            <img src="https://source.unsplash.com/uyX3qAQhZVA" alt="" />
            <img src="https://source.unsplash.com/LV-NvIcA-Gg" alt="" />
            <img src="https://source.unsplash.com/0qnRfgnZIsI" alt="" />
            <img src="https://source.unsplash.com/mpwF3Mv2UaU" alt="" />
            <img src="https://source.unsplash.com/gfMWhkDCwYM" alt="" />
            <img src="https://source.unsplash.com/8KtqjrskUg8" alt="" />
            <img src="https://source.unsplash.com/qAaGXj-AOv4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
