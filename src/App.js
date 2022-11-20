import BirdCard from "./components/BirdCard";
import birdData from "./data/birds";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);

  function handleAddToCart(bird) {
    setCart([...cart, bird]);
  }

  return (
    <div>
      <Cart cart={cart} />
      <div className="birds">
        {birdData.map((bird) => {
          return <BirdCard bird={bird} handleAddToCart={handleAddToCart} />;
        })}
      </div>
    </div>
  );
}

export default App;
