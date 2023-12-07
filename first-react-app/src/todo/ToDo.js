import "./Todo.css";
import { useState } from "react";
import { TodoItem } from "./toDoItem/TodoItems";
export function Todo({ data }) {
  return (
    <main className="mainTodo">
      {data.map((todo) => {
        return <TodoItem key={todo.id} text={todo.text} date={todo.date} />;
      })}
    </main>
  );
}
