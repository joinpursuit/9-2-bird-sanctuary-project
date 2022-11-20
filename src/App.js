import BirdCard from "./components/BirdCard";
import birdData from "./data/birds";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function handleBirdCardClick(bird) {
    setCart([...cart, bird]);
    setTotal(total + bird.amount);
  }

  return (
    <div>
      <Cart cart={cart} total={total} />
      <div className="birds">
        {birdData.map((bird) => {
          return (
            <BirdCard bird={bird} handleBirdCardClick={handleBirdCardClick} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
