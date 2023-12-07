import "./TodoItems.css";
export const TodoItem = ({ text, date }) => {
  return (
    <div className="todoItem">
      <label>
        <input type="checkbox"></input>
        <span>{text}</span>
      </label>
      <span>{date}</span>
      <div>
        <button>change</button>
        <button>X</button>
      </div>
    </div>
  );
};
