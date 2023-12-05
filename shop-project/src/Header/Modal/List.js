import "./List.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
export const List = ({ uniqueDate, className, cardCount, setCardCount }) => {
  let [count, setCount] = useState(uniqueDate.count);
  console.log(cardCount);
  return (
    <div className={className}>
      <div className={"listContent"}>
        {uniqueDate.songName}
        <span style={{ alignSelf: "center" }}>{uniqueDate.count}</span>
        <ButtonGroup
          className="buttonGroup"
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button
            onClick={() => {
              setCount(++uniqueDate.count);
              setCardCount(++cardCount);
            }}
          >
            +
          </Button>
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
        </ButtonGroup>
      </div>
      <div style={{ width: "300px" }}>
        <img
          src={uniqueDate.img}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
      </div>
    </div>
  );
};
