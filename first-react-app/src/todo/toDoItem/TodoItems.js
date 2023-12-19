import "./TodoItems.css";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
export const TodoItem = ({
  text,
  date,
  deleteOneTodo,
  isCompletedTodo,
  changeTodo,
}) => {
  return (
    <div className="todoItem">
      <label className="labelTodoItem">
        <Checkbox
          onChange={(evt) => isCompletedTodo(evt.target.checked)}
          color="success"
        />
        <span>{text}</span>

        <span>{date.slice(0, 9)}</span>
        <IconButton onClick={deleteOneTodo} aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </label>
    </div>
  );
};
