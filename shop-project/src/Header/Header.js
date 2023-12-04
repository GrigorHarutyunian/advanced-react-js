import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material-next/Badge";

import "./Header.css";
export const Header = ({ selectedProductsCount, filteredData }) => {
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
          <FontAwesomeIcon icon={faCartShopping} />
          <Badge badgeContent={selectedProductsCount} />
        </div>
      </div>
    </header>
  );
};
