import React from 'react'
import { useState } from 'react'

export default function BirdCard({ bird, handleBirdCardClick }) {
  
  return (
    <div className='card'>
      <h2>{bird.name}</h2>
      <img src={bird.img} alt={bird.name} />
      <p>Price: ${bird.amount}</p>
      <button onClick={() => handleBirdCardClick(bird)}>Adopt</button>
    </div>
  )
}