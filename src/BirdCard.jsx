
import { useState } from "react";
import BirdCard from "./components/BirdCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import avian from "./data/birds.js.js";
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