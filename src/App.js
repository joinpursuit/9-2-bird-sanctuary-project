import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import "./App.css";
import { useState } from "react";
import Birdcards from "./components/Birdcards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {

  const [birds, setBirds] = useState([]);

  function handleBirdCount(bird){
    const birdObj = {...bird};
    setBirds([...birds, birdObj])
  }

  return (
    <div className="App">
      <header>
        <h1>Bird Sanctuary Lab</h1>
      </header>
      <main>
        <div>
          <Cart birds={birds} bonusItems={bonusItems} setBirds={setBirds}/>
          <Checkout setBirds={setBirds}/>
        </div>
        <Birdcards birdData={birdData} handleBirdCount={handleBirdCount}/>
      </main>
    </div>
  );
}

export default App;
