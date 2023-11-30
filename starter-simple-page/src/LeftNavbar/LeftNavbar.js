import "./LeftNavbar.css";
import { CreatUlListes } from "./AddUlLists";
export const LeftNavbar = ({ topNavBarLabels, bottomNavBarLabels }) => (
  <nav className="leftNavbar">
    <div>
      <img src="1" alt="1as" style={{ width: "20px", height: "20px" }} />
      <CreatUlListes liArr={topNavBarLabels} />
    </div>
    <CreatUlListes variant="secondUl" liArr={bottomNavBarLabels} />
  </nav>
);
