import './Checkout.css'
import { useState } from 'react'

const Checkout = ({ reset }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [zipCode, setZipCode] = useState('')

  const setters = [setFirstName, setLastName, setEmail, setZipCode]

  const resetForm = () => setters.forEach(setter => setter(''))

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validamos que todos los campos tengan contenido
    if (!firstName || !lastName || !email || !zipCode) {
      alert('Invalid empty fields')
      return
    }

    const formData = { /// para registrar la data obtenida en mi forma de tal manera de poderla resumir en un objeto y manejarla de forma optima para su posterior envio y procesamiento en servidores (bancos)
      // firstName: firstName,//*
      // fistName: 'pepito'
      firstName, //* manera simplificada de hacer el objeto cuando las propiedades son iguales a su valor/
      lastName,
      email,
      zipCode
    }
    // You have adopted birds. Thank you!

    alert('You have adopted birds. Thank you!')
    // resetear el formulario
    // resetear la info del carrito

    reset()
    resetForm()
  }

  return (
    <section className='Checkout'>
      <header>
        <h3>Checkout</h3>
      </header>

      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input onChange={(event) => setFirstName(event.target.value)} type='text' name="firstName" id="firstName" value={firstName} />
          {/* 
           value es un atributo que nos permite sincronizar con el estado que se esta desarrollando de manera externa. ESTAMOS ....QUE EL VALOR DEL INPUT SEA REALMENTE EL VALOR DEL ESTADO 
          */}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input onChange={(event) => setLastName(event.target.value)} type='text' name="lastName" id="lastName" value={lastName} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input onChange={(event) => setEmail(event.target.value)} type='email' name="email" id="email" value={email} />
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input onChange={(event) => setZipCode(event.target.value)} type='number' min="10000" max="99999" name="zipCode" id="zipCode" value={zipCode} />
        </div>

        <input type='submit' value='Submit' />
      </form>
    </section>
  )
}

export { Checkout }