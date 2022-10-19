import React, { useState } from "react";

export default function Checkout({ updateSelectedBirds }) {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [zipcode, setZipCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    updateSelectedBirds([])
    setFirstName("")
    setLastName("")
    setEmail("")
    setZipCode("")
  }

  return (
    <>
    <h3> Checkout </h3>
    <form onSubmit={handleSubmit}>
    <label for="first-name">First Name</label>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        id="first-name"
        name="first-name"
        type="text"
        value={firstName}
      />
      
      <label for="last-name" >Last Name</label>
      <input
        onChange={(e) => setLastName(e.target.value)}
        id="last-name"
        name="last-name"
        type="text"
        value={lastName}
      />
       
      <label for="email">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        type="email"
        value={email}
      />

      <label for="zip-code">Zip Code</label>
      <input
        onChange={(e) => setZipCode(e.target.value)}
        id="zip-code"
        name="zip-code"
        type="number"
        value={zipcode}
      />
      <input type="submit" value="Submit"/>
    </form>
    </>
  );
}
