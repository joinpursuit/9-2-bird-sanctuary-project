import { useState } from "react";
import BirdsCards from "./Components/BirdsCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

function App() {
  //sets state for the selection of the birds...
  const [selectBird, setSelectBird] = useState([]);
  return (
    <div className="container">
      <BirdsCards selectBird={selectBird} setSelectBird={setSelectBird} />
      <Checkout setSelectBird={setSelectBird} />
      <Cart selectBird={selectBird} setSelectBird={setSelectBird} />
    </div>
  );
}

export default App;
