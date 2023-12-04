import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material-next/Badge";
import "./Header.css";
import { Modal } from "./Modal/Modal";
export const Header = ({ selectedProductsCount, filteredData, cardList }) => {
  const [scrolling, setScrolling] = useState(false);
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

  const [cartClicked, setCartClicked] = useState(false);

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
          <FontAwesomeIcon
            onClick={() => setCartClicked(!cartClicked)}
            icon={faCartShopping}
          />
          <Badge badgeContent={selectedProductsCount} />
          {cartClicked && <Modal cardList={cardList} />}
        </div>
      </div>
    </header>
  );
};
