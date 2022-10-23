import { useState } from "react";

export default function Checkout({ setCartArr }) {
  const inputs = {
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  };
  const [inputState, setInputState] = useState(inputs);
  function renderTextChange(e, inputKey) {
    const inputClone = { ...inputState };
    inputClone[inputKey] = e.target.value;
    setInputState(inputClone);
  }

  function checkingOut(e) {
    e.preventDefault();
    console.log(e);
    const nameValidation = /^[a-zA-Z\s]+$/;
    const emailValidation = /\S+@\S+\.\S+/;
    if (!nameValidation.test(e.target[0].value)) {
      window.alert("Please enter a valid first name and last name");
    }
    if (!nameValidation.test(e.target[1].value)) {
      window.alert("Please enter a valid first name and last name");
    }
    if (!emailValidation.test(e.target[2].value) || e.target[2].value === "") {
      window.alert("Please enter a valid email address");
    }
    if (e.target[3].value.length !== 5 || e.target[3].value === "") {
      window.alert("Please enter a valid zipcode");
    }
    window.alert("You have adopted birds. Thank you!");
    resetAll();
  }

  function resetAll() {
    setCartArr([]);
    setInputState(inputs);
  }

  return (
    <form className="Checkout" onSubmit={checkingOut}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        onChange={(e) => renderTextChange(e, "firstName")}
        value={inputState.firstName}
      ></input>
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        name="last-name"
        onChange={(e) => renderTextChange(e, "lastName")}
        value={inputState.lastName}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={(e) => renderTextChange(e, "email")}
        value={inputState.email}
      ></input>
      <label htmlFor="zip-code">Zip Code</label>
      <input
        type="number"
        id="zip-code"
        name="zip-code"
        onChange={(e) => renderTextChange(e, "zipCode")}
        value={inputState.zipCode}
      ></input>
      <input type="submit" value="Submit"/>
    </form>
  );
}
