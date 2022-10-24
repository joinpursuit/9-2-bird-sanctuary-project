import BirdCards from "./components/birdCards";
import Cart from "./components/cart";
// import Checkout from "./components/checkout";
import "./App.css";
import { useState } from "react";
import Checkout from "./components/checkout";

function App() {
  const [selectedBirds, updateSelectedBirds] = useState([]);

  return (
    <>
      <div className="parent">
        <div className="Cart">
          <Cart selectedBirds={selectedBirds} updateSelectedBirds={updateSelectedBirds} />
          <div className="Checkout">
          <Checkout updateSelectedBirds={updateSelectedBirds} selectedBirds={selectedBirds}/> 
          </div>
          
        </div>
        <div className="card">
          <BirdCards
            updateBird={updateSelectedBirds}
            selectedBirds={selectedBirds}
          />
        </div>
      </div>
    </>
  );
}

export default App;
