export const ProductsData = ({ className, newObj }) => {
  const newArr = [];
  for (let key in newObj) {
    newArr.push(<td className={className}>{newObj[key]}</td>);
  }
  newArr.push(
    <td className={className}>
      <button>Ass</button>
    </td>
  );
  return newArr;
};
