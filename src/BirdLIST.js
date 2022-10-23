// import { useState } from "react";


function BirdLIST({birdArray,birdCostArray}){
  let birdiesrender=""
        // const[birdarr, setbirdarr] = useState("")
        // birdArray.forEach(element => {birdies+=`<li>${element}</li>`})
        // birdCostArray.forEach(element => {cost+=`<li>${element}</li>`})

        //         setbirdarr(birdies)
for (let i=0;i<birdArray.length;i++){
    birdiesrender += `<li id=${{i}} >${birdArray[i]}: $${birdCostArray[i]}</li>`;

}



// remove element code from https://stackoverflow.com/questions/17012157/remove-clicked-li-onclick , functionality incomplete; does not update cart
        return(
                <div>
                <ol onClick={(e)=>{var tgt = e.target;
  if (tgt.tagName.toUpperCase() == "LI") {
    tgt.parentNode.removeChild(tgt);  // or tgt.remove();
  }}} dangerouslySetInnerHTML={{__html: birdiesrender}}></ol>
        
                
        
                </div>
               
        )
        }
        
        
        export default BirdLIST




