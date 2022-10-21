import { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

function App() {
  //setting state for the selection of birds
  const [selectedBird, setSelectedBird] = useState([]);

  return (
    <div className="container">
      <BirdCard selectedBird={selectedBird} setSelectedBird={setSelectedBird} />
      <Checkout setSelectedBird={setSelectedBird} />
      <Cart selectedBird={selectedBird} setSelectedBird={setSelectedBird} />
    </div>
  );
}

export default App;
