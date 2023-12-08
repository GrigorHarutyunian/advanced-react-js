import "./ParendHeader.css";
import { Link } from "react-router-dom";

export const Parentheader = () => {
  return (
    <header className="parentHeader">
      <Link to="/completed">Completed</Link>
      <Link to="/">Todo</Link>
      <Link to="/calendar">Calendar</Link>
    </header>
  );
};
