import BirdCard from "./components/BirdCard";
import birdData from "./data/birds";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);

  function addToCart(bird) {
    const cartCopy = setCart([...cart, bird]);
    return <ol>{bird.name}</ol>;
  }

  return (
    <div>
      <Cart addToCart={addToCart} />
      {birdData.map((bird) => {
        return <BirdCard bird={bird} addToCart={addToCart} />;
      })}
    </div>
  );
}

export default App;
