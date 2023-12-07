import "./App.css";
import { Header } from "./header/Header.js";
import { Todo } from "./todo/ToDo.js";
import { Footer } from "./footer/Footer.js";
import { useReducer } from "react";
import { func } from "prop-types";

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
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const gettingNewData = (newInfo) => {
    dispatch({
      type: "add",
      payload: newInfo,
    });
  };

  return (
    <div className="app">
      <Header gettingNewData={gettingNewData} />
      <Todo data={data} />
      <Footer />
    </div>
  );
}

export default App;
