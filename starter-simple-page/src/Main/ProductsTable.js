import { ProductsData } from "./ProductsData";
export const ProductsTable = ({ productsInfo }) => {
  const productsName = [
    "NAME",
    "TYPE",
    "AMOUNT",
    "DATE",
    "INVOICE ID",
    "ACTION",
  ];

  return (
    <table style={{ width: "100%" }}>
      <tbody style={{ border: "1px solid grey" }}>
        {productsName.map((name) => {
          return <th>{name}</th>;
        })}
        {productsInfo.map((obj) => {
          return (
            <tr>
              <ProductsData className="tdStyle" newObj={obj} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
