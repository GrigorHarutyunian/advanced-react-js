import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material-next/Badge";

import "./Header.css";
export const Header = ({ selectedProductsCount }) => {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faIcons} />
      <TextField id="standard-basic" label="Seacrch" variant="standard" />
      <div className="rigthSide">
        <div>
          <FontAwesomeIcon icon={faCartShopping} />
          <Badge badgeContent={selectedProductsCount} />
        </div>
      </div>
    </header>
  );
};
