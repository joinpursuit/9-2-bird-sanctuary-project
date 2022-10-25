import './Cart.css'

const Cart = ({adoptedBirds}) => {
  const birdsQuantity = adoptedBirds.length
  const amounts = adoptedBirds.map((bird) => bird.amount)
  const subTotal = amounts.reduce((prev, acc) => prev + acc, 0)

  const hasDiscount = birdsQuantity >= 3
  
  const totalAmount = hasDiscount ? subTotal - (subTotal * 0.1) : subTotal
  
  // let discount = ''

  // if (birdsQuantity >= 3) {
  //   discount = "10%"
  // } else {
  //   discount = "0%"
  // }

  return (
    <div className="Cart">
        <h3 className="Cart__title">Cart</h3>
        <p className="Cart__discount">Discount: {hasDiscount ? '10%' : '0%'}</p>
        <p className="Cart__total">Total: ${totalAmount}</p>
        <ol>
            { adoptedBirds.map(({ name, amount }) => {
                return(
                  <li key={name}> {name}: ${amount} </li>
                )
              })
            }
        </ol>

        <p className="Cart__donations">Your donacion I can see sections with birds, that have a name, image, amount and adopt button</p>
        <ul>
            <li>Stickers</li>
            <li>Background for your computer</li>
            <li>Invites to VIP live streams</li>
        </ul>
    </div>
  )
}

export {Cart}

// rafce: es la ayuda de la extension para el template.