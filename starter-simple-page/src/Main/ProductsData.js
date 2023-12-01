export const ProductsData = ({ className, newObj }) => {
  console.log(newObj);
  const columns = {
    name: newObj["name"],
    type: newObj["type"],
    amout: newObj["amout"],
    data: newObj["data"],
    invoiceID: newObj["invoiceID"],
  };
  const newArr = [];
  for (let key in columns) {
    newArr.push(<td className={className}>{newObj[key]}</td>);
  }
  newArr.push(
    <td className={className}>
      <button>Ass</button>
    </td>
  );
  return newArr;
};
