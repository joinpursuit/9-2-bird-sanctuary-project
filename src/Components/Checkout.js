function Checkout(props) {
    const handleSubmit = () => {
       alert("You have adopted birds. Thank you!")
       props.emptyCart();
    }
    return (
      <section className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input id="fname" type="text" /> 
  
          <label htmlFor="lname">Last Name</label>
          <input id="lname" type="text" /> 
  
          <label htmlFor="email">Email Name</label>
          <input id="email" type="email" /> 
  
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" /> 
  
          <input type="submit" value="Submit" />
        </form>
      </section>
    )
  }
  
  export default Checkout;