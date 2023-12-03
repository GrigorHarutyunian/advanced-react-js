import "./Cart.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export const Card = ({ uniqeObj, cartButtonClick }) => {
  return (
    <div key={uniqeObj.key} className="cart">
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadiusTop: "8px",
        }}
        src={uniqeObj.img}
      />
      <span>{uniqeObj.songName}</span>
      <Button onClick={() => cartButtonClick(uniqeObj)} variant="contained">
        Contained
      </Button>
    </div>
  );
};
