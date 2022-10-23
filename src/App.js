import { useState } from "react";
import birdData from "./data/birds";
import Birds from "./components/Birds";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [birdArr, setBirdArr] = useState(birdData);
  const [cartArr, setCartArr] = useState([]);

  console.log(birdArr);
  return (
    <div className="main-content">
      <div className="cart">
        <Cart cartArr={cartArr} setCartArr={setCartArr}/>
        <Checkout setCartArr={setCartArr}/>
      </div>
      <div className="birds-list">
        <Birds birdArr={birdArr} cartArr={cartArr} setCartArr={setCartArr} />
      </div>
    </div>
  );
}

export default App;
