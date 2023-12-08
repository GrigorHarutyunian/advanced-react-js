import "./Footer.css";
export const Footer = ({ cleareCompletedTodo, data, completedTodos }) => {
  return (
    <footer className="footer">
      <span>
        {completedTodos()}/{data.length}
      </span>
      <button onClick={cleareCompletedTodo}>Completed</button>
    </footer>
  );
};
