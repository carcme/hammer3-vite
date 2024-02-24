import React from "react";

const ExpectationItem = ({ Icon, title, text }) => {
  return (
    <div className="p-6 bg-[#222222] group">
      <div className="w-full flex justify-center z-[-2] ">
        <div className="before:content-[''] before:absolute before:h-0.5 before:w-[200px] before:-translate-x-[100px] before:translate-y-16 before:-rotate-45 before:bg-[#404040] before:group-hover:bg-red-700 ">
          <div className="w-32 h-32 rounded-full text-center border-2 border-[rgb(64,64,64)] bg-[#222222]  flex justify-center items-center relative transition-all">
            {Icon}
          </div>
        </div>
      </div>
      <h2 className="pt-10 mt-2 text-lg font-bold text-center text-white lg:text-2xl">
        {title}
      </h2>
      <span className="p-4 ">
        {text.map((item, index) => (
          <p
            key={index}
            className="mt-2 text-neutral-400 sm:text-[#404040] text-center md:text-[16px] text-[14px] group-hover:text-neutral-400  "
          >
            {item}
          </p>
        ))}
      </span>
    </div>
  );
};

export default ExpectationItem;
