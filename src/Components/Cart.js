import bonusItems from "../data/bonusItems"

export default function Cart({ cart, setCart}) {
    // console.log(cart);
    // let cartTotal = 0;
    let cartTotal = cart.length > 0 ? cart.reduce((a, b) => {
      return b.amount + a;
    }, 0) : [];
  
  

    const cartChange = (bird) => {
      cart.splice(cart.indexOf(bird), 1);
  
      setCart([...cart]);
    };

    return (
        <div className="Cart">
          <h4>Cart</h4>
          <p>Discount: {cart.length >= 3 ? "10%" : "0%"}</p>
          <p>Discount: {cart.length >= 3 ? "10" : "0"}%</p>
          <h4>Total: ${cartTotal}</h4>
          <ol>
            {cart.map((bird) => {
              return (
                <li key={bird.id}>
                  {bird.name}: ${bird.amount}
                  <button onClick={() => cartChange(bird)}>Remove</button>
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