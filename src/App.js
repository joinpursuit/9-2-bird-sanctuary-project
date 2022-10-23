import { useState } from "react";
import BirdCard from "../src/components/BirdCard";
import Cart from "../src/components/Cart";
import Checkout from "../src/components/Checkout";
import avian from "../src/data/birds.js";
import "./App.css";

function App() {
  const [birdFlu, setBirdFlu] = useState([]);

  return (
    <div className="container">
      <div className="left border">
        <Cart birdFlu={birdFlu} setBirdFlu={setBirdFlu} />
      </div>
      <div className="right">
        <BirdCard avian={avian} setBirdFlu={setBirdFlu} birdFlu={birdFlu} />
      </div>
      <div className="left2 border moremargin">
        <Checkout setBirdFlu={setBirdFlu} />
      </div>
    </div>
  );
}

export default App;
