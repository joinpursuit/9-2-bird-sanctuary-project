import React from "react";
import birdData from "../data/birds";
export default function Birds  ()  {

    return (

        <div className="birdCard">
            {console.log(birdData)}
            <ul>
                {
                    birdData.forEach((birdie) => {
                        return(
                        <li key={birdie.id}>
                            <img src={birdie.img} alt="Picture of a bird" />
                            <span>{birdie.name}</span>
                            <p>Price ${birdie.amount}</p>
                            <button>Adopt</button>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
  
    )
}

