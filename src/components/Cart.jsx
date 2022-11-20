import React from 'react'
import { useState } from 'react'

export default function Cart({ cart }) {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  return (
    <div className='Cart'>
      <h2>Cart</h2>
      <h4>Discount: {discount}%</h4>
      <h4>Total: ${total}</h4>

      <ol>
        {cart.map(bird => {
          return (
            <li>
              {bird.name}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
