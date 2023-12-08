import { useEffect, useState } from "react";
import "./CompletedTodos.css";
import CheckIcon from "@mui/icons-material/Check";
export const CompletedTodos = ({ newListDraw }) => {
  const [newa, setNewListDraw] = useState(newListDraw);

  return (
    <div className="completedTodos">
      {newListDraw.map((obj) => {
        return (
          <div
            key={obj.id}
            style={{
              width: "75%",
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CheckIcon />
            <span>{obj.text}</span>
            <span>{obj.date}</span>
          </div>
        );
      })}
    </div>
  );
};
