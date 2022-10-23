import bonusItems from "../data/bonusItems";

export default function Cart({cartArr , setCartArr}) {
  function cartTotal() {
    if (!cartArr) {
      return 0;
    } else if (cartArr.length < 3) {
      return cartArr.reduce((a, b) => a + b.amount, 0);
    } else {
      return cartArr.reduce((a, b) => a + b.amount, 0) * 0.9;
    }
  }
  function discountTotal() {
    return cartArr.length >= 3 ? 10 : 0;
  }

  function removeFromCart(index) {
    cartArr.splice(index, 1);
    setCartArr([...cartArr]);
  }

  function populateCartList() {
    if (cartArr.length) {
      return cartArr.map((elem, index) => {
        return (
          <li>
            {elem.name}: ${elem.amount}.00
            <button onClick={() => removeFromCart(index)}>X</button>
          </li>
        );
      });
    }
  }

  function populateBonusList() {
    const cartTotal =
      cartArr.length < 3
        ? cartArr.reduce((a, b) => a + b.amount, 0)
        : cartArr.reduce((a, b) => a + b.amount, 0) * 0.9;
    if (cartTotal >= 1000) {
      return bonusItems.map((bonus) => {
        return <li>{bonus}</li>;
      });
    } else if (cartTotal >= 500 && cartTotal < 1000) {
      return bonusItems.slice(0, 3).map((bonus) => {
        return <li>{bonus}</li>;
      });
    } else if (cartTotal >= 300 && cartTotal < 500) {
      return bonusItems.slice(0, 2).map((bonus) => {
        return <li>{bonus}</li>;
      });
    } else if (cartTotal >= 100) {
      return <li>{bonusItems[0]}</li>;
    }
  }
  return (
    <div className="Cart">
      <h3>Cart</h3>
      <p>Discount: {discountTotal()}%</p>
      <h4>Total: ${cartTotal()}</h4>
      <ol>{populateCartList()}</ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>{populateBonusList()}</ul>
    </div>
  );
}
