import "./Footer.css";
import { Button } from "@mui/material";
export const Footer = ({ cleareCompletedTodo, data, completedTodos }) => {
  return (
    <footer className="footer">
      <span style={{ fontSize: "30px" }}>
        {completedTodos()}/{data.length}
      </span>
      <Button
        className="completed"
        onClick={cleareCompletedTodo}
        variant="contained"
        color="success"
      >
        Done
      </Button>
    </footer>
  );
};
