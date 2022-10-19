import React from "react";

//usestate from birds for adopt button "$0"
//-adopt button shoult change cart content

export default Cart = () => {
    return (
        <div className="cartCard">
            <span>Cart</span>
            <p>Discount {discount}</p>
            <p>Total: {totalCost}<p/>
            
            {adopt ? <li key={birdie.id}>
                {birdie.name}: {birdie.amount}
            </li>  : null

            }

        </div>
    )
}