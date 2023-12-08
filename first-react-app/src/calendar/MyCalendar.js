import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";

const localizer = momentLocalizer(moment);

export const MyCalendar = ({ allList }) => {
  const events = [
    {
      title: "Meeting",
      start: new Date(2023, 11, 8, 10, 0),
      end: new Date(2023, 11, 8, 12, 0),
    },
    // Add more events as needed
  ];

  allList.forEach((todo) => {
    events.push({
      title: "Meeting",
      start: new Date(todo.date),
      end: new Date(todo.date + 1),
    });
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
