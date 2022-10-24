import React, { useState } from "react";
import bonusItems from "../data/bonusItems";

export default function Cart({ selectedBirds, updateSelectedBirds }) {
  let total = selectedBirds.reduce((initialValue, eachBird) => {
    return eachBird.amount + initialValue;
  }, 0);

function removeBird(index){
selectedBirds.splice(index, 1)
updateSelectedBirds([...selectedBirds])
}

// let a = [1]
// let b = a
// b.push(2)

  let discount = "0%";
  if (selectedBirds.length >= 3) {
    total = (total / 100) * 90;
    discount = "10%";
  }

  let bonuses = [];
  if (total >= 100) {
    bonuses.push(bonusItems[0]);
  }
  if (total >= 300) {
    bonuses.push(bonusItems[1]);
  }
  if (total >= 500) {
    bonuses.push(bonusItems[2]);
  }
  if (total >= 1000) {
    bonuses.push(bonusItems[3]);
  }

  return (
    <div className="cart">
      <h3> Cart </h3>
      Discount: {discount}
      <h4>Total: ${total}</h4>
      <ol>
        {selectedBirds.map((bird, index) => (
          <li>
            {bird.name}: ${bird.amount}
            <button onClick={() => removeBird(index)}>Remove Bird</button>
          </li>
        ))}
      </ol>
      <h6>
        Your donations has qualified you for the following items
        <ul>
          {bonuses.map((bonus) => (
            <li>{bonus}</li>
          ))}
        </ul>
      </h6>
    </div>
  );
}
