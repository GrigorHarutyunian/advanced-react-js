import { LeftNavbar } from "./LeftNavbar/LeftNavbar";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import "./Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faClipboard,
  faFileInvoice,
  faWallet,
  faGears,
  faCircleInfo,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Page = () => (
  <div className="page">
    <LeftNavbar
      topNavBarLabels={{
        Dashboard: <FontAwesomeIcon icon={faClipboard} />,
        Transactions: <FontAwesomeIcon icon={faCreditCard} />,
        Invoices: <FontAwesomeIcon icon={faFileInvoice} />,
        "My Wallets": <FontAwesomeIcon icon={faWallet} />,
        Setings: <FontAwesomeIcon icon={faGears} />,
      }}
      bottomNavBarLabels={{
        Helpings: <FontAwesomeIcon icon={faCircleInfo} />,
        "Log Out": <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      }}
    />
    <div style={{ width: "100%" }}>
      <Header />
      <Main />
    </div>
  </div>
);
