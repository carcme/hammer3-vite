import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year(),
  currentDate,
  gcEvents
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  //   console.log("firstDateOfMonth: ", firstDateOfMonth);
  //   console.log("lastDateOfMonth: ", lastDateOfMonth);
  //   console.log(
  //     "date d/m/y: ",
  //     currentDate.date() + " " + currentDate.month() + " " + currentDate.year()
  //   );
  //   console.log("in the past: " + (firstDateOfMonth < currentDate));
  //   start processing events from google calendar

  const daysOfEvents = [];

  gcEvents.map((event) => {
    // Extract the date part start date
    const startDate = new Date(event.start.date);
    const endDate = new Date(event.end.date).getDate();
    if (startDate.getFullYear() === year && startDate.getMonth() === month) {
      for (let day = startDate.getDate(); day <= endDate - 1; day++) {
        daysOfEvents.push(day);
      }
      daysOfEvents.push(startDate.getDate());
    }
    return null;
  });
  daysOfEvents.sort((a, b) => a - b);

  const busyDays = daysOfEvents.filter((item, index) => {
    return daysOfEvents.indexOf(item) === index;
  });

  //   console.log("busyDays: ", busyDays);

  // end processing events from google calendar

  const arrayOfDate = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    const date = firstDateOfMonth.day(i);

    arrayOfDate.push({
      currentMonth: false,
      date,
    });
  }

  // generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      busy: busyDays[0] === i ? true : false,
      inPast: firstDateOfMonth.date(i) <= currentDate,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
    if (busyDays[0] === i) {
      busyDays.shift();
    }
  }

  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }
  //   console.log("arrayOfDate: ", arrayOfDate);
  return arrayOfDate;
};

export const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
};

/*
Date Wed Feb 28 2024 00:00:00 GMT+0100 (Central European Standard Time)
Date Wed Feb 28 2024 01:00:00 GMT+0100 (Central European Standard Time)
*/
