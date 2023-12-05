import { useEffect } from "react";
import "../Modal/Modal.css";
import { List } from "./List.js";
export const Modal = ({ cardList, cardCount, setCardCount, onClickModal }) => {
  return (
    <div onClick={onClickModal} className="parentModal">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <ul style={{ margin: "4px", padding: "9px" }}>
          {cardList.map((obj) => {
            return (
              <List
                key={obj.id}
                className="list"
                uniqueDate={obj}
                cardCount={cardCount}
                setCardCount={setCardCount}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
