// import birdData from "../data/birds";

export default function BirdCard({birdData,setCart}){
    
    return birdData.map((bird,jk)=>{
    
        return (
            <div key={jk} className="card">
               <h2>{bird.name}</h2> 
               <img src={bird.img} className="img-size"/>
               <p>{bird.amount}</p>
               <button onClick={()=>{setCart(pv=>pv.concat(bird))}}>Adopt</button>
            </div>
        )
    })

}