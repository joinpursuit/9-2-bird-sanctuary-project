import BirdCard from "./components/BirdCard";
import birdData from "./data/birds";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
  });

  function handleTextChange() {}

  function handleSubmit() {
    alert("You have adopted birds. Thank you!");
    setCart([]);
    setTotal(0);
    setUser({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
    });
  }

  function handleBirdCardClick(bird) {
    setCart([...cart, bird]);
    setTotal(total + bird.amount);
  }

  return (
    <div>
      <Cart cart={cart} total={total} />
      <Checkout
        user={user}
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
      />
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
