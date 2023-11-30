import { LeftNavbar } from "./LeftNavbar/LeftNavbar";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import "./Page.css";
export const Page = () => (
  <div className="page">
    <LeftNavbar
      topNavBarLabels={[
        "Dashboard",
        "Transactions",
        "Invoices",
        "My Wallets",
        "Setings",
      ]}
      bottomNavBarLabels={["Helpings", "Log Out"]}
    />
    <div style={{ width: "100%" }}>
      <Header />
      <Main />
    </div>
  </div>
);
