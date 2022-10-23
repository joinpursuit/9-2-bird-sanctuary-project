import { useState } from "react";

function Checkout({ setSelectBird }) {
  // sets the state for the forms
  const [formDetails, setFormDetails] = useState({
    first: "",
    last: "",
    email: "",
    zipcode: "",
  });

  //function handles any change to the form and sets the input to the appropriate targeted field.
  function uponChange(e) {
    //creates a deep copy of the old data so that new info can be inputeed and saved...
    const newDetail = JSON.parse(JSON.stringify(formDetails));
    newDetail[e.target.id] = e.target.value;
    setFormDetails(newDetail);
  }

  // this function will handle the submission, resets the form, and edge cases.
  function uponSubmit(e) {
    e.preventDefault();

    if (
      formDetails.first &&
      formDetails.last &&
      formDetails.email &&
      formDetails.zipcode
    ) {
      alert("You have adopted birds. Thank you!");
      setSelectBird([]);
      setFormDetails({
        first: "",
        last: "",
        email: "",
        zipcode: "",
      });
    } else {
      alert("You have not filled the form.");
    }
  }

  return (
    <>
      <form onSubmit={uponSubmit} className="Checkout">
        <h2>Checkout</h2>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          value={formDetails.first}
          onChange={uponChange}
        />

        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          id="last"
          value={formDetails.last}
          onChange={uponChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formDetails.email}
          onChange={uponChange}
        />

        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="number"
          id="zipcode"
          value={formDetails.zipcode}
          onChange={uponChange}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Checkout;
