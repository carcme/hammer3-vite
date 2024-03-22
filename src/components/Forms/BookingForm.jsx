import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import TWCalendar from "../ui/Calendar/TWCalendar";
import { getGoogleCalendarEvents } from "@/lib/getGoogleCalendarEvents";
import { splitStrtoInt } from "@/lib/utils";
import BookingDetails from "./BookingDetails";
import { useLanguage } from "@/LanguageContext";

const BookingForm = ({ title, players, cost, bookingText }) => {
  const currentDate = dayjs(new Date());
  const [events, setEvents] = useState([]);
  const [selectDate, setSelectDate] = useState(currentDate);
  const playersOptions = splitStrtoInt(players, "-");

  const onEventsUpdated = (list) => {
    setEvents(list);
  };

  getGoogleCalendarEvents(onEventsUpdated);

  return (
    <div>
      <div className="flex justify-center ">
        <TWCalendar
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          gcEvents={events}
          bookingText={bookingText}
        />
      </div>
      <div className="flex flex-col justify-center pt-10">
        <BookingDetails
          numPlayers={playersOptions}
          gameTitle={title}
          cost={cost}
          date={selectDate.toDate().toDateString()}
          bookingText={bookingText}
        />
      </div>
    </div>
  );
};

export default BookingForm;
