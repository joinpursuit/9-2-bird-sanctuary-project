const Checkout = ({ setCart }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    e.target.reset();
    setCart([]);
  };
  return (
    <div className="Checkout">
      <h4>Checkout</h4>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Zip Code
          <input type="text" pattern="[0-9]{5}" title="Five digit zip code" />
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
