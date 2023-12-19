import TodoList from "./TodoList";
import "./index.css";
import { MyCalendar } from "./calendar/MyCalendar";
import { Parentheader } from "./parent header/ParentHeader";
import { CompletedTodos } from "./completed todos/CompletedTodos";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useEffect, useState } from "react";

export const App = () => {
  const [drawList, setDrawList] = useState(
    JSON.parse(localStorage.getItem("drawList")) || []
  );
  const [allTodosList, setAllTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const newCompletedList = (obj) => {
    setDrawList([...drawList, ...obj]);
    localStorage.setItem("drawList", JSON.stringify([...drawList, ...obj]));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodosList));
  }, [allTodosList]);

  return (
    <div className="parentDiv">
      <Parentheader />
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
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
