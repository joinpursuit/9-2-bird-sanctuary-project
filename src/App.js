import { useState } from "react";
import BirdsCards from "./Components/BirdsCards";
import Checkout from "./Components/Checkout";
import "./App.css"

function App() {
  const [selectBird, setSelectBird] = useState([]);
  return (
    <div>
      <BirdsCards selectBird={selectBird} setSelectBird={setSelectBird} />
      <Checkout />
    </div>
  );
}

export default App;
