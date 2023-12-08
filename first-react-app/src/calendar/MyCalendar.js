import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const MyCalendar = () => {
  const events = [
    {
      title: "Meeting",
      start: new Date(2023, 11, 8, 10, 0),
      end: new Date(2023, 11, 8, 12, 0),
    },
    // Add more events as needed
  ];

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
