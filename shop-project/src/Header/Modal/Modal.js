import { useEffect } from "react";
import "../Modal/Modal.css";
import { List } from "./List.js";
export const Modal = ({
  cardList,
  cardCount,
  setCardCount,
  onClickModal,
  className,
}) => {
  const totolPrice = cardList.reduce((acc, val) => {
    return acc + val.count * val.price.slice(1);
  }, 0);

  return (
    <div onClick={onClickModal} className={className}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <p
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontFamily: "fantasy",
          }}
        >
          Total ${totolPrice}
        </p>
        <ul style={{ margin: "29px", padding: "28px", height: "100%" }}>
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
