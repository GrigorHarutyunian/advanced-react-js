import "./App.css";
import { Header } from "./header/Header.js";
import { Todo } from "./todo/ToDo.js";
import { Footer } from "./footer/Footer.js";
import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "add") {
    return [
      ...state,
      {
        text: action.payload.text,
        date: action.payload.date.split(",")[0],
        id: Math.random(),
        completed: false,
      },
    ];
  } else if (action.type === "delet") {
    return state.filter((data) => data.id !== action.payload);
  } else if (action.type === "completed") {
    return state.map((todo) => {
      if (todo.id === action.payload?.todo) {
        return {
          ...todo,
          completed: action.payload.completed,
        };
      } else {
        return todo;
      }
    });
  } else if (action.type === "cleareCompleted") {
    return state.filter((todo) => !todo.completed);
  }
}

function App({ newCompletedList, setAllTodos }) {
  const [data, dispatch] = useReducer(reducer, []);
  const [completedData, setCompletedData] = useState([]);

  useEffect(() => {
    setAllTodos([...data, ...completedData]);
  }, [data, completedData]);

  useEffect(() => {
    newCompletedList(completedData);
  }, [completedData]);

  const gettingNewData = (newInfo) => {
    dispatch({
      type: "add",
      payload: newInfo,
    });
  };
  const deleteOneTodo = (id) => {
    dispatch({
      type: "delet",
      payload: id,
    });
  };

  const isCompletedTodo = (todo, completed) => {
    dispatch({
      type: "completed",
      payload: {
        todo,
        completed,
      },
    });
  };

  const cleareCompletedTodo = () => {
    const newArr = data.filter((val) => {
      return val.completed;
    });
    setCompletedData([...completedData, ...newArr]);
    dispatch({ type: "cleareCompleted" });
  };

  const completedTodos = () => {
    return data.reduce((acc, val) => {
      return acc + val.completed;
    }, 0);
  };

  return (
    <div className="app">
      <Header gettingNewData={gettingNewData} />
      <Todo
        isCompletedTodo={isCompletedTodo}
        deleteOneTodo={deleteOneTodo}
        data={data}
      />
      <Footer
        completedTodos={completedTodos}
        data={data}
        cleareCompletedTodo={cleareCompletedTodo}
      />
    </div>
  );
}

export default App;
