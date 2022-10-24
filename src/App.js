import React, {useState} from 'react';
import "./App.css";

import Cart from './Components/Cart.js';
import Checkout from './Components/Checkout.js'
import Birds from './Components/Birds.js'


function App () {
  const [cart, setCart] = useState([])

  const removeItem = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
  }

  return (

    <div className="app-container">
      <aside>
        <Cart items={cart} remove={removeItem} />
        <Checkout emptyCart={() => setCart([])} />
      </aside>
      <Birds addItem={(item) => setCart([...cart, item])} />
    </div>
  );
};

export default App;