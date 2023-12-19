import "./ParendHeader.css";
import { Link } from "react-router-dom";

export const Parentheader = () => {
  return (
    <header className="parentHeader">
      <Link className="link" to="/completed">
        Completed
      </Link>
      <Link className="link" to="/">
        Todo
      </Link>
      <Link className="link" to="/calendar">
        Calendar
      </Link>
    </header>
  );
};
