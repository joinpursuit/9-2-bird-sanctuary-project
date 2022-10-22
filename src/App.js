import React, { useState } from "react";
import "./index.css";
import Birds from "./Components/Birds.js";
import Cart from "./Components/Cart";
import Form from "./Components/Form";

function App() {
  const [cart, setCart] = useState([]);
  const [form, formSubmit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  return (
    <>
      <div className="card">
        <Form setCart={setCart} formSubmit={formSubmit} />
      </div>
      <div className="card">
        <Cart cart={cart} setCart={setCart} />
      </div>
      <div className="card">
        <Birds cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default App;
