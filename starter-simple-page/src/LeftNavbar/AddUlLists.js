import "./LeftNavbar.css";
export const CreatUlListes = ({ labelsFonts, variant }) => {
  const keys = Object.keys(labelsFonts);
  return (
    <ul className={`ul ul-${variant} `}>
      {keys.map((labels) => {
        return (
          <div className="listsDiv">
            {labelsFonts[labels]}
            <li>{labels}</li>
          </div>
        );
      })}
    </ul>
  );
};
