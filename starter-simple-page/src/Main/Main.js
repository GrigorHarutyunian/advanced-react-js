import "./Main.css";
import { useState } from "react";
import { ProductsTable } from "./ProductsTable";
import { InputMainSearch } from "./InputMainSearch";
export const Main = () => {
  let timeoutId;
  const productsInfo = [
    {
      name: "Iphone 13",
      type: "Mobile",
      amout: "$420",
      data: "20 May 2022",
      invoiceID: "12121",
    },
    {
      name: "Neftlix Subs",
      type: "Enterainment",
      amout: "$100",
      data: "20 Apr 2022",
      invoiceID: "9100212",
    },
    {
      name: "Figma Subs",
      type: "Software",
      amout: "$244.3",
      data: "02 01 2021",
      invoiceID: "990882",
    },
    {
      name: "Sajib Rahman",
      type: "Withdraw",
      amout: "$500.131",
      data: "12 08 2019",
      invoiceID: "339821",
    },
    {
      name: "Instagram Ads",
      type: "Entertainment",
      amout: "$50",
      data: "17 04 2021",
      invoiceID: "715821",
    },
    {
      name: "UIHUT Subscription",
      type: "Payment",
      amout: "$43.44",
      data: "12 08 2020",
      invoiceID: "545821",
    },
    {
      name: "Citi Bank Ltd.",
      type: "Withdraw",
      amout: "$603.4",
      data: "12 08 2020",
      invoiceID: "871903",
    },
  ];
  const [info, setInfo] = useState(productsInfo);

  const onchangeStateThroughInput = (evt) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => setInfo(onFilter(evt.target.value)), 500);
  };

  const onFilter = (searchTerm) => {
    return productsInfo.filter((val) => val.name.includes(searchTerm));
  };

  return (
    <main className="main">
      <InputMainSearch onChange={onchangeStateThroughInput} />
      <ProductsTable productsInfo={info} />
    </main>
  );
};
