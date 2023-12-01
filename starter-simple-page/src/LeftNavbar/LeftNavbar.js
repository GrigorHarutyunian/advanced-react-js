import { CreatUlListes } from "./AddUlLists";
export const LeftNavbar = ({ topNavBarLabels, bottomNavBarLabels }) => (
  <nav className="leftNavbar">
    <div className="topNavDiv">
      <img src="1" alt="1as" style={{ width: "20px", height: "20px" }} />
      <CreatUlListes labelsFonts={topNavBarLabels} />
    </div>
    <CreatUlListes variant="secondUl" labelsFonts={bottomNavBarLabels} />
  </nav>
);
