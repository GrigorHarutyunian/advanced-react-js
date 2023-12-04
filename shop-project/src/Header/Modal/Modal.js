import "../Modal/Modal.css";
import { List } from "./List.js";
export const Modal = ({ cardList }) => {
  //   console.log(products);
  return (
    <div className="modal">
      <ul style={{ margin: "4px", padding: "9px" }}>
        {cardList.map((obj) => {
          return <List className="list" uniqueDate={obj} />;
        })}
      </ul>
    </div>
  );
};
