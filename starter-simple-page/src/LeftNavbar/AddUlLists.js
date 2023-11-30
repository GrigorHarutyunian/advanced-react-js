export const CreatUlListes = ({ liArr, variant }) => {
  return (
    <ul className={`ul ul-${variant} `}>
      {liArr.map((labels) => {
        return <li>{labels}</li>;
      })}
    </ul>
  );
};
