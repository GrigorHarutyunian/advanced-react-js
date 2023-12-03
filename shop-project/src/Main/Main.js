import { Card } from "../Carts/Carts";
import "./Main.css";
export const Main = ({ products, buttonClick }) => {
  return (
    <main className="main">
      {products.map((obj) => {
        return (
          <Card cartButtonClick={buttonClick} key={obj.id} uniqeObj={obj} />
        );
      })}
    </main>
  );
};
