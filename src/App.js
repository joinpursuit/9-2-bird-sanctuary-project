import { useState } from "react";
import "./App.css"
import BirdsCards from "./Components/BirdsCards";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";


function App () {
  const [selectBird, setSelectBird] = useState([])

  return (
    <div className="birdApp">
     <BirdsCards selectBird={selectBird} setSelectBird={setSelectBird}/>
     <Checkout />
     <Cart selectBird={selectBird} setSelectBird={setSelectBird}/>
    </div>
  );
};

export default App;
