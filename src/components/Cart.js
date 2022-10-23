import bonusItems from "../data/bonusItems"

let bonus=[]
export default function Cart({cart,setCart}){
    function removeBird(index ){
        const NewCart=[...cart]
        NewCart.splice(index,1)
        setCart(NewCart)
    }
    
    let totalAmount=cart.reduce((total,item)=>total+item.amount,0)
    let discount="0%"
    if (cart.length >=3){
       totalAmount=totalAmount*.9 
       discount="10%"
    }
    if (totalAmount<=300&&totalAmount>=100){
        bonus=bonusItems.slice(0,1)
    }
    if (totalAmount<=500&&totalAmount>=300){
        bonus=bonusItems.slice(0,2)
    }
    if (totalAmount<=1000&&totalAmount>=500){
        bonus=bonusItems.slice(0,3)
    }
    if (totalAmount>1000){
        bonus=bonusItems.slice(0,4)
    }
    if(totalAmount<100){
        bonus=[]
    }


console.log(bonus)

    return (
        <div className="Cart">
        <h2>Discount: {discount}</h2>
        {/* <h2>Cart</h2> */}
        <ol>{cart.map((el,idx)=>
           <li key={idx}>{el.name} ${el.amount}<button onClick={()=>removeBird(idx)}>Remove Bird</button></li>
           )}
           </ol>
           <h4>Total: ${totalAmount}</h4>
        <h2>Bonus Items:</h2>
        <ul>
           {bonus.map((b,xyz)=><li key={xyz}>{b}</li>)}
        </ul>
        </div>
    )
    
}