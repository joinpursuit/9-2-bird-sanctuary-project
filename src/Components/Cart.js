import bonusItems from "../data/bonusItems";
export default function Cart({ cart, setCart}) {
  let cartTotal = cart.reduce((a, b) => {
    return b.amount + a;
  }, 0);

  //removing bird from cart
  const updateBirdsArray = (bird) => {
    cart.splice(cart.indexOf(bird), 1);

    setCart([...cart]);
  };

  // let result;
  // let bonusList = bonusItems.map((bonus) => {
   
  //   if ((cartTotal >= 100) && (cartTotal <= 300)) {

  //   bonus.slice(0);

  //   } else if ((cartTotal >= 300) && (cartTotal <= 500)) {

  //      bonus.slice(0, 1);

  //   } else if ((cartTotal >= 500 )&& (cartTotal <= 1000)) {
  //      bonus.slice(0, 1, 2);
  //   } else if ((cartTotal > 1000)) {
  //     bonus.slice();
  //   } else {
  //     return null
  //   }
  // });

  

  return (
    <div className="Cart">
      <h4>Cart</h4>
      <p>Discount: {cart.length >= 3 ? "10" : "0"}%</p>
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
      <p>Your donations have qualified you for the following items:</p>
      <ul>
    
      {cartTotal > 99 ? <li>{bonusItems[0]} </li> : null}
       {cartTotal > 100 ? <li>{bonusItems[1]} </li> : null}
        { cartTotal> 499 ? <li>{bonusItems[2]}</li> : null}
        {cartTotal > 999 ? <li>{bonusItems[3]} </li> : null}
      </ul> 
    </div>
  );
}
