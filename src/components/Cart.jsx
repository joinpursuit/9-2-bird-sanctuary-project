import React from 'react'
import bonusItems from '../data/bonusItems'

export default function Cart({ cart, total, discount }) {
  

  return (
    <div className='Cart'>
      <h2>Cart</h2>
      <h4>Discount: {cart.length < 3 ? 0 : 10}%</h4>
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
