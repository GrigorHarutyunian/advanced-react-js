import "./Cart.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
export const Card = ({ uniqeObj, cartButtonClick }) => {
  const [keyEnter, setKeyEnter] = useState(false);
  return (
    <div
      key={uniqeObj.key}
      className={`cart ${keyEnter ? "hovered" : ""}`}
      onMouseMove={() => setKeyEnter(true)}
      onMouseLeave={() => setKeyEnter(false)}
    >
      <img
        style={{
          width: "100%",
          minHeight: "92%",
          borderRadius: "8px",
        }}
        src={uniqeObj.img}
      />
      <span>{keyEnter ? uniqeObj.price : uniqeObj.songName}</span>
      {keyEnter ? (
        <Button
          onClick={() => cartButtonClick(uniqeObj)}
          variant="contained"
          className="contained"
        >
          Add
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};
