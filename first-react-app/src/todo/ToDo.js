import "./Todo.css";
import { useState } from "react";

export function Todo({ className }) {
  const todoData = [
    { id: Math.random(), name: "JS", label: false },
    { id: Math.random(), name: "React JS", label: false },
    { id: Math.random(), name: "Webpack", label: false },
  ];

  const [data, setData] = useState(todoData);
  console.log(data);
  let newTodoName = "";

  const checkElement = (element) => (evt) => {
    const newData = data.map((elem) => {
      if (elem.id === element.id) {
        return {
          ...elem,
          label: evt.target.checked,
        };
      } else {
        return elem;
      }
    });

    setData(newData);
  };

  const newElems = data.map((elem) => {
    return (
      <div className="newTodo">
        <label
          name={elem.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span>{elem.name}</span>
          <input
            checked={elem.label}
            onChange={checkElement(elem)}
            name={elem.id}
            type="checkbox"
          ></input>
        </label>
      </div>
    );
  });

  return (
    <section className={className}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setData([
            ...data,
            { id: Math.random(), name: newTodoName, label: false },
          ]);
        }}
      >
        <input
          onKeyDown={(evt) => (newTodoName = evt.target.value)}
          placeholder="Type Smt"
        ></input>
      </form>
      {newElems}
      <button
        onClick={() => setData(data.filter((elem) => elem.label === false))}
      >
        Clear
      </button>
    </section>
  );
}
