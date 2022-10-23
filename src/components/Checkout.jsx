export default function Checkout({ setBirds }) {
  function Submit(e) {
    e.preventDefault();
    setBirds([]);
    return alert("You have adopted birds. Thank you!");
  }

  return (
    <div className="Checkout">
      <h6> Checkout</h6>
      <form onSubmit={Submit}>
        <label htmlFor="firstName"> First Name </label>
        <input type="text" id="firstName" />
        <label htmlFor="lastName"> Last Name </label>
        <input type="text" id="lastName" />
        <label htmlFor="email"> Email </label>
        <input type="email" id="email" />
        <label htmlFor="zipcode"> Zip Code </label>
        <input type="number" id="zipcode" />
        <br />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

// function Checkout() {
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [zipCode, setZipCode] = useState("");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     zipcode: "",
//   });

//   function changeFormData(e) {
//     const newData = JSON.parse(JSON.stringify(formData));
//     newData[e.target.id] = e.target.value;
//     setFormData(newData);
//   }

//   return (
//     <>
//       <div className="Checkout">
//         <h4>Checkout</h4>
//         <form>
//           <label htmlFor="firstName"> Last Name </label>
//           <input
//             type="text"
//             id="firstName"
//             value={formData.firstName}
//             onChange={changeFormData}
//           />

//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             value={formData.lastName}
//             onChange={changeFormData}
//             id="lastName"
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             value={formData.email}
//             onChange={changeFormData}
//             id="email"
//           />

//           <label htmlFor="zipCode">Zip Code</label>
//           <input
//             type="number"
//             value={formData.zipcode}
//             onChange={changeFormData}
//             id="zipCode"
//           />
//           <input type="submit" />
//         </form>
//       </div>
//     </>
//   );
// }

// export default Checkout;
