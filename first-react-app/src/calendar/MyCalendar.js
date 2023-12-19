import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const localizer = momentLocalizer(moment);
export const MyCalendar = ({ allList }) => {
  let events = [];

  function convertDateStringToDate(dateString, sec = 0) {
    const [datePart, timePart] = dateString.split(", ");

    let [month, day, year] = datePart.split("/").map(Number);

    let [time, ampm] = timePart.split(" ");
    let [hours, minutes, seconds] = time.split(":").map(Number);

    if (ampm === "PM" && hours < 12) {
      hours += 12;
    } else if (ampm === "AM" && hours === 12) {
      hours = 0;
    }

    return new Date(year, month - 1, day, hours, minutes, seconds + sec);
  }

  allList.forEach((todo) => {
    events = [
      ...events,
      {
        title: todo.text,
        start: convertDateStringToDate(todo.date),
        end: convertDateStringToDate(todo.date, 1),
      },
    ];
  });

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
