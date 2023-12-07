import "./List.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextFunction } from "../../App";
export const List = ({ uniqueDate, className, cardCount, setCardCount }) => {
  let [count, setCount] = useState(uniqueDate.count);
  const a = useContext(ContextFunction);

  return (
    <div className={className}>
      <div className={"listContent"}>
        <img
          src={uniqueDate.img}
          style={{
            width: "20%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "46px",
          }}
        ></img>

        <span style={{ width: "140px", height: "41px" }}>
          {uniqueDate.songName}
        </span>
        <ButtonGroup
          className="buttonGroup"
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button
            onClick={() => {
              if (uniqueDate.count > 0) {
                setCount(--uniqueDate.count);
                setCardCount(--cardCount);
              }
            }}
          >
            -
          </Button>
          <span style={{ alignSelf: "center" }}>{uniqueDate.count}</span>
          <Button
            onClick={() => {
              setCount(++uniqueDate.count);
              setCardCount(++cardCount);
            }}
          >
            +
          </Button>
        </ButtonGroup>
        <span style={{ width: "20px", height: "20px" }}>
          {"$" + +uniqueDate.price.slice(1) * uniqueDate.count}
        </span>
        <Button
          onClick={() => a(uniqueDate.id)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
