import React from 'react';
import bounuses from '../data/bonusItems.js';

function Cart(props) {
  const items = props.items;
  let totalPrice = items.reduce((accu, curr) => accu + curr.amount, 0);
  let discount = 0;

  if (items.length >= 3) {
    discount = totalPrice * .10;
    totalPrice -= discount;
  }

  const renderBouns = () => {
    const bounus = [];

    let noOfBounces = 0;
    if (totalPrice >= 100) noOfBounces = 1;
    if (totalPrice >= 300) noOfBounces = 2;
    if (totalPrice >= 500) noOfBounces = 3;
    if (totalPrice >= 1000) noOfBounces = 4;

    for (const [index, b] of bounuses.entries()) {
      if (index >= noOfBounces) break;

      bounus.push(<li key={`bounus-${index}`}>{b}</li>);
    }

    return bounus;

  }

  const renderItems = () => {
    const results = []

    for (const [index, item] of items.entries()) {
      results.push(<li key={`${item.id}-${index}`}>{item.name}: ${item.amount} <button onClick={() => props.remove(index)}>delete</button></li>);
    }

    return results;

  }

  return (
    <section className="Cart">
      <h2>Cart</h2>
      <h3>Discount: {discount > 0 ? 10 : 0}%</h3> 
      <h4>Total: ${totalPrice}</h4>

      <ol>
        {renderItems()}
      </ol>

      <p>Your donations has qualified you for the following items</p>

      <ul>
        {renderBouns()}
      </ul>

    </section>
  )
}

export default Cart;