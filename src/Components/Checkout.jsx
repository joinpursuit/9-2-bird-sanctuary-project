import { useState } from "react";
import React from "react";

function Checkout() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipCode] = useState("");

  function submitPurchase() {
    if (firstname && lastname && email && zipcode) {
      alert("You have adopted birds. Thank you!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setZipCode("");
    }
    console.log(submitPurchase);
  }

  return (
    <>
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={submitPurchase}>
          <label>
            <div>First Name</div>
            <input
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <div>Last Name</div>
            <input
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            <div>Email</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <div>Zip Code</div>
            <input
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </label>
          <input type="submit" id="submit-button" />
        </form>
      </div>
    </>
  );
}

export default Checkout;
