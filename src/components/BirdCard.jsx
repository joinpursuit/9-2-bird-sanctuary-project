import React from 'react'
import { useState } from 'react'

export default function BirdCard({ bird, addToCart }) {
  
  return (
    <div className='card'>
      <h2>{bird.name}</h2>
      <img src={bird.img} alt={bird.name} />
      <p>Price: ${bird.amount}</p>
      <button onClick={addToCart}>Adopt</button>
    </div>
  )
}