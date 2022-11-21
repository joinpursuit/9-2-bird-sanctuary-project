import React from 'react'
import bonusItems from '../data/bonusItems'

export default function Cart({ cart, handleDelete }) {
  
  const total = cart.reduce((acc, bird) => {
    return bird.amount + acc;
  }, 0);
  
  return (
    <div className='Cart'>
      <h2>Cart</h2>
      <h3>Discount: {cart.length < 3 ? 0 : 10}%</h3>s
      <h4>Total: ${total}</h4>

      <ol>
        {cart.map((bird, i) => {
          return (
            <li key={`${bird.id}-${i}`}>
              {bird.name}: ${bird.amount}
              <button onClick={() => handleDelete(i)}>Delete:</button>
            </li>
          )
        })}
      </ol>

      <p>Your donations has qualified you for the following items.</p>
      <ul>
        {total >= 100 ? <li>{bonusItems[0]}</li> : null}
        {total >= 300 ? <li>{bonusItems[1]}</li> : null}
        {total >= 500 ? <li>{bonusItems[2]}</li> : null}
        {total >= 1000 ? <li>{bonusItems[3]}</li> : null}

      </ul>
    </div>
  )
}
