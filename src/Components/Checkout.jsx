import { useState } from "react";

function Checkout() {
  //   const [firstname, setFirstName] = useState("");

  //   const [lastname, setLastName] = useState("");

  //   const [email, setEmail] = useState("");

  //   const [zipcode, setZipCode] = useState("")

  const [formDetails, setFormDetails] = useState({
    first: "",
    last: "",
    email: "",
    zipcode: "",
  });

  function uponChange(e) {
    const newDetail = JSON.parse(JSON.stringify(formDetails));
    newDetail[e.target.id] = e.target.value;
    setFormDetails(newDetail);
  }

  return (
    <>
      <form className="Checkout">
        <h2>Checkout</h2>
        <label type="text">First Name</label>
        <input id="first" value={formDetails.first} onChange={uponChange} />

        <label type="text">Last Name</label>
        <input id="last" value={formDetails.last} onChange={uponChange} />

        <label type="text">Email</label>
        <input id="email" value={formDetails.email} onChange={uponChange} />

        <label type="number">ZipCode</label>
        <input id="zipcode" value={formDetails.zipcode} onChange={uponChange} />

        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Checkout;
