import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import TWCalendar from "../ui/Calendar/TWCalendar";
import { getGoogleCalendarEvents } from "@/lib/getGoogleCalendarEvents";
import { splitStrtoInt } from "@/lib/utils";
import BookingDetails from "./BookingDetails";

const BookingForm = ({
  id,
  title,
  plot,
  image,
  srcset,
  players,
  difficulty,
  cost,
  slug,
  compact,
}) => {
  const currentDate = dayjs(new Date());
  const [events, setEvents] = useState([]);
  const [selectDate, setSelectDate] = useState(currentDate);
  //   const [numPlayers, setNumberPlayers] = useState(null);
  const playersOptions = splitStrtoInt(players, "-");

  //   const handlePlayerSelect = (option) => {
  //     setNumberPlayers(option);
  //   };
  const onEventsUpdated = (list) => {
    setEvents(list);
  };

  getGoogleCalendarEvents(onEventsUpdated);

  useEffect(() => {
    console.log("selectDate: ", selectDate);
  }, [selectDate]);

  return (
    <div>
      <div className="flex justify-center ">
        <TWCalendar
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          gcEvents={events}
        />
      </div>
      <div className="flex flex-col justify-center pt-10">
        <BookingDetails
          numPlayers={playersOptions}
          gameTitle={title}
          cost={cost}
          date={selectDate.toDate().toDateString()}
        />
      </div>
    </div>
  );
};

export default BookingForm;
