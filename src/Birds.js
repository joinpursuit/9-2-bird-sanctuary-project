import birdData from "./data/birds";
import Cart from "./Cart";
import { useState } from "react";

function Birds(){
const [birdArray,setbirdArray] =useState([])
const [birdCostArray,setbirdCostArray] =useState([])


    return(
    <section>
    {birdData.map(birds=>{
      return(
        <div key={birds.id} className="card">
          <div className="birds">
      <h3>{birds.name}</h3>
      <h4>${birds.amount}</h4>
      <img src={birds.img} alt="bird images"></img>
      <button onClick={()=>{ 

setbirdArray(birdArray => [...birdArray, birds.name]);
setbirdCostArray(birdCostArray => [...birdCostArray, birds.amount])



      }}>Adopt</button>
     </div>
    </div>)
    
    })}

    <Cart birdArray={birdArray} birdCostArray={birdCostArray}/>
    
       </section>)
}

export default Birds