// import { useState } from "react";
import bonusItems from "./data/bonusItems";


    function TotalCost({birdCostArray}){
        
        // let [birdTotalCost, setbirdTotalCost] = useState(0)
       let initialCost=0 ;
       birdCostArray.forEach(element => {initialCost+= Number(element)});
let discount = "0%"

let bonusinitial = ""      ; 


if(birdCostArray.length>=3){
    initialCost=initialCost*0.90
    discount="10%"
}
console.log(bonusinitial)

if(initialCost===0){
    console.log(initialCost)

    bonusinitial=""
}

if(100<=initialCost&&initialCost<300){
    console.log(initialCost)

    bonusinitial =`<li>${bonusItems[0]}</li>`
    }


 if(300<=initialCost &&initialCost<500){
    console.log(initialCost)

    bonusinitial =`<li>${bonusItems[0]}</li><li>${bonusItems[1]}</li>`


}
 if(500<=initialCost &&initialCost<1000){
    console.log(initialCost)

    bonusinitial =`<li>${bonusItems[0]}</li><li>${bonusItems[1]}</li><li>${bonusItems[2]}</li>`

}
 if(initialCost>=1000){console.log(initialCost)

    bonusinitial =`<li>${bonusItems[0]}</li><li>${bonusItems[1]}</li><li>${bonusItems[2]}</li><li>${bonusItems[3]}</li>`


}

// bonusArr.forEach(element => {bonusinitial += `<li>${element}</li>`});

    //    setbirdTotalCost(total);
    return(
        <div> 
            <ul dangerouslySetInnerHTML={{__html: bonusinitial}}></ul>
            <div>Discount: {discount}</div>
        <div dangerouslySetInnerHTML={{__html: `<h4>$${initialCost}</h4>`}}></div>
       

       
       </div>
)
    }

    export default TotalCost