import "./App.css";
import { Header } from "./header/Header.js";
import { Todo } from "./todo/ToDo.js";
import { Footer } from "./footer/Footer.js";
import { useReducer } from "react";

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
  } else if (action.type === "changing") {
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          text: "AAA",
          date: 11,
        };
      } else {
        return todo;
      }
    });
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  console.log(data);
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
    console.log(1);
    dispatch({ type: "cleareCompleted" });
  };

  const completedTodos = () => {
    return data.reduce((acc, val) => {
      return acc + val.completed;
    }, 0);
  };

  const changeTodo = (todoID) => {
    dispatch({
      type: "changing",
      payload: todoID,
    });
  };

  return (
    <div className="app">
      <Header gettingNewData={gettingNewData} />
      <Todo
        isCompletedTodo={isCompletedTodo}
        deleteOneTodo={deleteOneTodo}
        data={data}
        changeTodo={changeTodo}
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
