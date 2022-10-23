// import { useState } from "react";
import TotalCost from "./TotalCost";
import BirdLIST from "./BirdLIST";
import Checkout from "./Checkout";
function Cart({birdArray,birdCostArray}){


    
return(

    <div className="Cart">
<BirdLIST birdArray={birdArray} birdCostArray={birdCostArray}/>
<TotalCost birdCostArray={birdCostArray} />
<Checkout birdArray={birdArray} birdCostArray={birdCostArray}/>
    </div>
)

}


export default Cart