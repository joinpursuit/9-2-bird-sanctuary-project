import { useState } from "react";
import BirdsCards from "./components/BirdsCards";
// import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import React from "react";
import "./App.css";



function App() {
  const [selectBird, setSelectBird] = useState([]);

  return (
    <div>
      <BirdsCards selectBird={selectBird} setSelectBird={setSelectBird} />
      <Checkout/>
    </div>
  );
}

export default App;
