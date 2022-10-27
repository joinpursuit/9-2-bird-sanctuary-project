import './Cart.css'
import dataBonusItems from '../data/bonusItems'

const Cart = ({adoptedBirds, deleteBird }) => {
  // const [bonuses, setBonuses] = useState([])
  const birdsQuantity = adoptedBirds.length
  const amounts = adoptedBirds.map((bird) => bird.amount)
  const subTotal = amounts.reduce((prev, acc) => prev + acc, 0)

  const hasDiscount = birdsQuantity >= 3
  
  const totalAmount = hasDiscount ? subTotal - (subTotal * 0.1) : subTotal
  
  let bonuses = []
  if (totalAmount >= 100 && totalAmount < 300) bonuses = dataBonusItems.slice(0, 1)
  if (totalAmount >= 300 && totalAmount < 500) bonuses = dataBonusItems.slice(0, 2)
  if (totalAmount >= 500 && totalAmount < 1000) bonuses = dataBonusItems.slice(0, 3)
  if (totalAmount > 1000) bonuses = dataBonusItems

  return (
    <div className="Cart">
        <h3 className="Cart__title">Cart</h3>
        <p className="Cart__discount">Discount: {hasDiscount ? '10%' : '0%'}</p>
        <h4 className="Cart__total">Total: ${totalAmount}</h4>
        <ol>
            { adoptedBirds.map(({ name, amount, id }) => {
                return(
                  <li key={id}> 
                    <p>{name}: ${amount}</p>
                    <button onClick={() => deleteBird(id)}>Delete</button> 
                  </li>
                )
              })
            }
        </ol>

        <p className="Cart__donations">Your donation I can see sections with birds, that have a name, image, amount and adopt button</p>
        <ul>
          {bonuses.map(bonus => <li key={bonus}>{bonus}</li>)}
        </ul>
    </div>
  )
}

export {Cart}

// rafce: es la ayuda de la extension para el template.