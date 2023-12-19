import "./App.css";
import { Header } from "./header/Header.js";
import { Todo } from "./todo/ToDo.js";
import { Footer } from "./footer/Footer.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TodoList({ newCompletedList, allTodosList, setAllTodos }) {
  const location = useLocation();

  const [completedData, setCompletedData] = useState([]);
  console.log(location);

  const addTodos = (payload) => {
    const newAllTodos = [
      ...allTodosList,
      {
        text: payload.text,
        date: payload.date,
        id: Math.random(),
        completed: false,
      },
    ];

    setAllTodos(newAllTodos);
  };

  const deleteTodos = (id) => {
    const newAllTodos = allTodosList.filter((data) => data.id !== id);

    setAllTodos(newAllTodos);
  };

  const completeTodos = (todo, completed) => {
    const newAllTodos = allTodosList.map((td) => {
      if (td.id === todo) {
        return {
          ...td,
          completed,
        };
      } else {
        return td;
      }
    });

    setAllTodos(newAllTodos);
  };

  const removeCompleteds = () => {
    const newAllTodos = allTodosList.filter((todo) => !todo.completed);

    setAllTodos(newAllTodos);
  };

  useEffect(() => {
    newCompletedList(completedData);
  }, [completedData]);

  const cleareCompletedTodo = () => {
    const newArr = allTodosList.filter((val) => {
      return val.completed;
    });
    setCompletedData([...completedData, ...newArr]);
    removeCompleteds();
  };

  const completedTodos = () => {
    return allTodosList.reduce((acc, val) => {
      return acc + val.completed;
    }, 0);
  };

  return (
    <div className="app">
      <Header gettingNewData={addTodos} />
      <Todo
        isCompletedTodo={completeTodos}
        deleteOneTodo={deleteTodos}
        data={allTodosList}
      />
      <Footer
        completedTodos={completedTodos}
        data={allTodosList}
        cleareCompletedTodo={cleareCompletedTodo}
      />
    </div>
  );
}

export default TodoList;
