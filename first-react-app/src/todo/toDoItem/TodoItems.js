import "./TodoItems.css";
export const TodoItem = ({
  text,
  date,
  deleteOneTodo,
  isCompletedTodo,
  changeTodo,
}) => {
  return (
    <div className="todoItem">
      <label>
        <input
          onChange={(evt) => isCompletedTodo(evt.target.checked)}
          type="checkbox"
        ></input>
        <span>{text}</span>
      </label>
      <span>{date}</span>
      <div>
        <button onClick={changeTodo}>change</button>
        <button onClick={deleteOneTodo}>X</button>
      </div>
    </div>
  );
};
