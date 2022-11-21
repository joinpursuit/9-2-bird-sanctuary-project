import userEvent from '@testing-library/user-event'
import React from 'react'

export default function checkout({ user, handleTextChange, handleSubmit }) {
  return (
    <div className='Checkout'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text"
          value={user.firstName}
          onChange={handleTextChange}
          id="firstName"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input 
          type="text"
          value={user.lastName}
          onChange={handleTextChange}
          id="lastName"
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          value={user.email}
          onChange={handleTextChange}
          id="email"
        />
        <label htmlFor="zip">Zip Code:</label>
        <input 
          type="text"
          value={user.zip}
          onChange={handleTextChange}
          id="zip"
        />
        <input type="submit" />
      </form>
    </div>
  )
}
