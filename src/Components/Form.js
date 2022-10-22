
export default function Form({setCart,formSubmit}) {


const resets = (e) => {
    e.preventDefault();
    formSubmit({});
    setCart([]);
    alert("You have adopted birds. Thank you!");
  }

  return (
    <div className="Checkout">
      <form onSubmit={resets}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" id="zipCode" name="zipCode" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
