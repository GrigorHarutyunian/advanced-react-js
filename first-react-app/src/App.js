import "./App.css";
import { Header } from "./header/Header.js";
import { Main } from "./main/Main.js";

function App() {
  return (
    <div className="App">
      <Header
        className="header"
        menuNames={["Name", "Product", "Contacts", "About Us"]}
      />
      <Main />
    </div>
  );
}

export default App;
