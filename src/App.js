import { useState } from "react";
import "./App.css"
import BirdsCards from "./Components/BirdsCards";
import Checkout from "./Components/Checkout";



function App () {
  const [selectBird, setSelectBird] = useState([])
  return (
    <div>
     <BirdsCards selectBird={selectBird} setSelectBird={setSelectBird}/>
<Checkout/>
    </div>
  );
};

export default App;
