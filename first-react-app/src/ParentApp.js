import App from "./App";
import "./index.css";
import { MyCalendar } from "./calendar/MyCalendar";
import { Parentheader } from "./parent header/ParentHeader";
import { CompletedTodos } from "./completed todos/CompletedTodos";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

export const ParentApp = () => {
  const newCompletedList = (obj) => {
    console.log(obj);
  };
  return (
    <div className="parentDiv">
      <Parentheader />
      <Routes>
        <Route path="/" element={<App newCompletedList={newCompletedList} />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="/calendar" element={<MyCalendar />} />
      </Routes>
    </div>
  );
};
