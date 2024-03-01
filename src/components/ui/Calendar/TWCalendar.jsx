import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { generateDate, months } from "@/lib/calendar";
import cn from "@/lib/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const TWCalendar = ({ gcEvents, selectDate, setSelectDate }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs(new Date());
  const [today, setToday] = useState(currentDate);
  //   const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex flex-col items-center justify-center mx-auto lg:gap-40 md:gap-20 sm:gap-5 md:divide-x md:w-full md:flex-row">
      <div className="sm:w-96 w-80 md:w-w-2/3 h-fit">
        <h1 className="pb-4 font-semibold text-center select-none">
          {months[today.month()]} {today.year()}
        </h1>
        <div className="">
          <div className="flex items-center gap-20 justify-evenly">
            <GrFormPrevious
              className="w-10 h-10 p-2 transition-all bg-red-700 rounded-full cursor-pointer hover:scale-110 hover:bg-red-800"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="px-2 py-1 text-gray-100 transition-all bg-gray-500 rounded-lg cursor-pointer hover:scale-105 "
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-10 h-10 p-2 transition-all bg-red-700 rounded-full cursor-pointer hover:scale-110 hover:bg-red-800"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="grid text-sm text-center text-gray-500 select-none h-14 w-14 place-content-center"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className="grid grid-cols-7 ">
          {generateDate(today.month(), today.year(), currentDate, gcEvents).map(
            ({ date, currentMonth, today, busy, inPast }, index) => {
              return (
                <div
                  key={index}
                  className="grid p-2 text-sm text-center border-t h-14 place-content-center"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-600 pointer-events-none",
                      inPast ? "text-gray-600 pointer-events-none" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-red-800 ring-2 ring-white text-white"
                        : "",
                      busy
                        ? "bg-black text-neutral-500 pointer-events-none"
                        : "",
                      today ? "bg-gray-500 text-white" : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-red-700 hover:text-white transition-all cursor-pointer duration-300 select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-28 md:w-1/3 w-80 md:h-96 md:px-5 ">
        <div className="flex items-center justify-between w-full md:items-start md:flex-col">
          <h1 className="font-normal">Your selected date </h1>
          <h1 className="p-3 my-4 text-white rounded-lg font-semi bold bg-[#252525] w-fit animate-txtBlur">
            {selectDate.toDate().toDateString()}
          </h1>
        </div>
        <div>
          <p className="text-sm italic">
            * the selected date will be confirmed via email
          </p>
        </div>
      </div>
    </div>
  );
};

export default TWCalendar;
