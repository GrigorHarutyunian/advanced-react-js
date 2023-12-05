import { Card } from "../Carts/Carts";
import "./Main.css";
export const Main = ({ products, buttonClick, className }) => {
  return (
    <main className={className}>
      {products.map((obj) => {
        return (
          <Card cartButtonClick={buttonClick} key={obj.id} uniqeObj={obj} />
        );
      })}
    </main>
  );
};
