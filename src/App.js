import { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";


function App() {

const [selectedBird, setSelectedBird] = useState([])

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Cart selectedBird={ selectedBird} />
      <BirdCard selectedBird={ selectedBird} setSelectedBird={setSelectedBird} />
    </div>
  );
};

export default App;
