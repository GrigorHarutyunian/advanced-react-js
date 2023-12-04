import "./List.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
export const List = ({ uniqueDate, className }) => {
  return (
    <div className={className} key={uniqueDate.id}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          fontFamily: "fantasy",
          fontStyle: "italic",
        }}
      >
        {uniqueDate.songName}
        <span style={{ alignSelf: "end", marginRight: "10px" }}>1</span>
        <ButtonGroup
          className="buttonGroup"
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>+</Button>
          <Button>-</Button>
        </ButtonGroup>
      </div>
      <div>
        <img
          src={uniqueDate.img}
          style={{ width: "112px", height: "68px" }}
        ></img>
      </div>
    </div>
  );
};
