import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

const BookingCalendar = () => {
  const [date, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        className="Sample"
        onChange={onChange}
        value={date}
        style="Sample"
      />
    </div>
  );
};

export default BookingCalendar;
