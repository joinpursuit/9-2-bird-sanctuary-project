import React from "react";
import bonusItems from "../data/bonusItems";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, bird) => acc + bird.amount, 0);

  function handleBirdRemoval(birdID) {
    const filteredBirdArr = cart.filter((bird) => bird.id !== birdID);
    setCart(filteredBirdArr);
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cart.length >= 3 ? total * 0.9 : total}</h4>
      <p>Discount: {cart.length >= 3 ? 10 : 0}%</p>
      <ol>
        {cart.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button
                onClick={() => {
                  handleBirdRemoval(bird.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul>
    </div>
  );
};

export default Cart;