import BirdCard from "./components/BirdCard";
import birdData from "./data/birds";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);

  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
  });

  function handleTextChange() {}

  function handleDelete(i) {
    cart.splice(i, 1);
    setCart([...cart]);
  }

  function handleSubmit() {
    alert("You have adopted birds. Thank you!");
    setCart([]);
    // setTotal(0);
    setUser({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
    });
  }

  function handleBirdCardClick(bird) {
    setCart([...cart, bird]);
  }

  return (
    <div>
      <Cart cart={cart} handleDelete={handleDelete} />
      <Checkout
        user={user}
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
      />
      <div className="birds">
        {birdData.map((bird, i) => {
          return (
            <BirdCard
              key={bird.name}
              bird={bird}
              handleBirdCardClick={handleBirdCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
