import BirdCard from "./components/BirdCard";
import birdData from "./data/birds";
import "./App.css"
import { useState } from "react";
import Cart from "./components/Cart";
function App () {
  // const totalAmount=cartItems.reduce((total,item)=>total+item.amount,0)
  const [cart,setCart]=useState([])

  return (
    <div>
      <main>
      <h1>Hello, world!</h1>
      
      <div className="birds-display">
      <BirdCard birdData={birdData} setCart={setCart}/>
      <Cart cart={cart} />
      </div>
      </main>
    </div>
  );
};

export default App;
