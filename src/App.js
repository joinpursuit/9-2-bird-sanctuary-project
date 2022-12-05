import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Cards from "./components/Card";
import birdsData from "./data/birds";

function App() {
  const [birds, setBirds] = useState(birdsData);
  const [cart, setCart] = useState([]);

  const handleCart = (bird) => {
    if(cart.includes(bird)){ 
      alert('You have already added this bird to the cart')
      return
    }
    setCart([...cart, bird]);
  };

  return (
    <div>
      <aside>
        <Cart
          birds={birds}
          cart={cart}
          setCart={setCart}
        />
        <Checkout setCart={setCart} />
      </aside>
      <main>
        <Cards
          birds={birds}
          cart={cart}
          handleCart={handleCart}
        />
      </main>
    </div>
  );
}

export default App;