import { useState } from "react";

function Checkout({ setSelectedBird }) {
  //setting state for the form details
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  //this function handles any changes to the form and sets the input to the appropiate targetted field
  function handleFormChange(e) {
    //creates a deep copy of the old data so that new information can be inputted and saved
    const newDetails = JSON.parse(JSON.stringify(formDetails));
    newDetails[e.target.id] = e.target.value;
    setFormDetails(newDetails);
  }

  //this function handles the submission, resets the form, and edge cases
  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      formDetails.firstName &&
      formDetails.lastName &&
      formDetails.email &&
      formDetails.zipCode
    ) {
      alert("You have adopted birds. Thank you!");
      setSelectedBird([]);
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
      <br />
      <input type="submit" />
    </form>
  );
}

export default Checkout;
