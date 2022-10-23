export default function Cart({ birds, bonusItems, setBirds }) {
  function removeBird(card) {
    birds.splice(birds.indexOf(card), 1);
    setBirds([...birds]);
  }

  let sum = 0;
  birds.map((card) => {
    sum += card.amount;
  });

  let discount = 0;
  if (birds.length >= 3) {
    discount = 10;
  }

  let bonusArr = [];
  if (sum >= 100) {
    bonusArr.push(bonusItems[0]);
  }
  if (sum >= 300) {
    bonusArr.push(bonusItems[1]);
  }
  if (sum >= 500) {
    bonusArr.push(bonusItems[2]);
  }
  if (sum >= 1000) {
    bonusArr.push(bonusItems[3]);
  }

  return (
    <div className="Cart">
      <h6> Cart </h6>
      <h6> Discount: {discount}%</h6>
      <h4> Total: ${discount === 10 ? sum - sum * (discount / 100) : sum}</h4>
      <ol>
        {birds.map((card) => {
          return (
            <li>
              {card.name}: ${card.amount.toFixed(2)}
              <button id="button" onClick={() => removeBird(card)}>
                Remove
              </button>
            </li>
          );
        })}
      </ol>
      <ul>
        Bonus Items:
        {bonusArr.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

// import React, { useState } from "react";
// import addedBonuses from "./addedBonuses";

// function Cart ({birdSelect}) {
//     const birdSum = birdSelect.reduce((a,b) =>  {
//         return a + Number(b.amount)}, 0);
// }

// export default Cart;
