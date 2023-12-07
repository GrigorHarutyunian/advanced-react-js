import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { CSSTransition } from "react-transition-group";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material-next/Badge";
import "./Header.css";
import { Modal } from "./Modal/Modal";
export const Header = ({
  filteredData,
  cardList,
  onClickModal,
  thereIsModal,
}) => {
  const [scrolling, setScrolling] = useState(false);
  const [a, b] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const selectedProductCount = (cardList) => {
      return cardList.reduce((acc, val) => {
        return acc + val.count;
      }, 0);
    };
    b(selectedProductCount(cardList));
  }, [cardList]);

  const deletedItem = (id) => {
    return id;
  };

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      <FontAwesomeIcon icon={faIcons} />
      <TextField
        onKeyUp={filteredData}
        id="standard-basic"
        label="Seacrch"
        variant="standard"
      />
      <div className="rigthSide">
        <div>
          <FontAwesomeIcon onClick={onClickModal} icon={faCartShopping} />
          <Badge badgeContent={a} />
          <CSSTransition
            in={thereIsModal}
            timeout={500} // Duration of the animation
            classNames={{
              enter: "modal-enter",
              enterActive: "modal-enter-active",
              exit: "modal-exit",
              exitActive: "modal-exit-active",
            }}
            unmountOnExit
          >
            <Modal
              className={"parentModal"}
              deletedItem={deletedItem}
              onClickModal={onClickModal}
              cardCount={a}
              setCardCount={b}
              cardList={cardList}
            />
          </CSSTransition>
        </div>
      </div>
    </header>
  );
};
