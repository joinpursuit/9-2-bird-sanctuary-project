import { useState } from "react";

function Checkout() {
  //formDetails is a variable, setFormDetails is a function. useState will always return a variable and a function. when we use state, we destructure it
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  function handleFormChange(e) {
    console.log(e.target.id);
    console.log(e.target.value);
    const newDetails = JSON.parse(JSON.stringify(formDetails));
    newDetails[e.target.id] = e.target.value;
    setFormDetails(newDetails);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formDetails);
    if (
      formDetails.firstName &&
      formDetails.lastName &&
      formDetails.email &&
      formDetails.zipCode
    ) {
      alert("You have adopted birds. Thank you!");
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
      });
    } else {
      alert("Please fill out the form");
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="Checkout">
      <h2>Checkout</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value={formDetails.firstName}
        onChange={handleFormChange}
        id="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value={formDetails.lastName}
        onChange={handleFormChange}
        id="lastName"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={formDetails.email}
        onChange={handleFormChange}
        id="email"
      />
      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="number"
        value={formDetails.zipCode}
        onChange={handleFormChange}
        id="zipCode"
      />
      <input type="submit" />
    </form>
  );
}

export default Checkout;
