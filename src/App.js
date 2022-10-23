import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import "./App.css";
import { useState } from "react";
import Birdcards from "./components/Birdcards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [birds, setBirds] = useState([]);

  function setBirdCount(bird) {
    const allBirds = { ...bird };
    setBirds([...birds, allBirds]);
  }

  return (
    <div className="App">
      <header>
        <h4 className="title">Bird Sanctuary Lab</h4>
      </header>
      <main>
        <div>
          <Cart birds={birds} bonusItems={bonusItems} setBirds={setBirds} />
          <Checkout setBirds={setBirds} />
        </div>
        <Birdcards dataBirds={birdData} setBirdCount={setBirdCount} />
      </main>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import BirdsCards from "./components/BirdsCards";
// // import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
// import React from "react";
// import "./App.css";

// function App() {
//   const [selectBird, setSelectBird] = useState();

//   return (
//     <div>
//       <BirdsCards selectBird={selectBird} setSelectBird={setSelectBird} />
//       <Checkout />
//     </div>
//   );
// }

// export default App;
