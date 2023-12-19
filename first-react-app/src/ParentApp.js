import App from "./App";
import "./index.css";
import { MyCalendar } from "./calendar/MyCalendar";
import { Parentheader } from "./parent header/ParentHeader";
import { CompletedTodos } from "./completed todos/CompletedTodos";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useState } from "react";
export const ParentApp = () => {
  const [drawList, setDrawList] = useState([]);
  const [allTodosList, setAllTodos] = useState([]);
  const newCompletedList = (obj) => {
    setDrawList([...drawList, ...obj]);
  };

  return (
    <div className="parentDiv">
      <Parentheader />
      <Routes>
        <Route
          path="/"
          element={
            <App
              setAllTodos={setAllTodos}
              newCompletedList={newCompletedList}
              allTodosList={allTodosList}
            />
          }
        />
        <Route
          path="/completed"
          element={<CompletedTodos newListDraw={drawList} />}
        />
        <Route
          path="/calendar"
          element={<MyCalendar allList={[...allTodosList, ...drawList]} />}
        />
      </Routes>
    </div>
  );
};
