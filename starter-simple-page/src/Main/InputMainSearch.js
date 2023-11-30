export const InputMainSearch = ({ onChange }) => {
  return (
    <form>
      <input
        onKeyUp={onChange}
        className="inputSearchManu"
        placeholder="Search anything on Transactions"
      ></input>
    </form>
  );
};
