export default function Cart({total,discount,bonus,cart,remove_from_cart}){
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <p>Discount: {discount}%</p>
      <label>Total: <h4>${ total * ( 1-discount/100 ) }</h4></label>
      <div >
        <ol className="actual_cart">
          {cart.map((el,idx)=>{
            return <li key={idx}>
              <span>{el.name}</span>
              <span>${el.amount}</span>
              <button onClick={()=>{remove_from_cart(idx)}}>X</button>
            </li>
          })}
        </ol>
        <p>{bonus.length>0 ? "Bouns Items" : ""}</p>
        <ul className="bounsitems">
          {bonus.map((el,idx)=> <li key={idx}>{el}</li> )}
        </ul>
      </div>
    </div>
  )
}