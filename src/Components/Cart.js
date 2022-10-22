import bonusItems from "../data/bonusItems";
export default function Cart({ cart, setCart }) {

  let cartTotal = cart.reduce((a, b) => {
    return b.amount + a;
  }, 0);

  
  const updateBirdsArray = (bird) => {
    cart.splice(cart.indexOf(bird), 1);

    setCart([...cart]);
  };

  

  return (
    <div className="Cart">
      <h4>Cart</h4>
      <p>Discount: {cart.length >= 3 ? "10%" : "0%"}</p>
      <h4>Total: ${cartTotal}</h4>
      <ol>
        {cart.map((birdie) => {
          return (
            <li key={birdie.id}>
              {birdie.name}: ${birdie.amount}
              <button onClick={() => updateBirdsArray(birdie)}>Remove</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
