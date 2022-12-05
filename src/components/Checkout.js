import React from "react";
import { useState } from "react";

const Checkout = ({setCart}) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(fName && lName && email && zipCode){
      alert("You have adopted birds. Thank you!");
      setCart([])
      setFName('')
      setLName('')
      setEmail('')
      setZipCode('')
  };
  }

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={fName}
          onChange={handleFNameChange}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lName}
          onChange={handleLNameChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          placeholder="Zip Code"
          value={zipCode}
          onChange={handleZipCodeChange}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Checkout;