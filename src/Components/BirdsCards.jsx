import birds from "../data/birds"

function BirdsCards({selectBird, setSelectBird}){

    
    
  function displayBird(bird){
    setSelectBird([...selectBird, bird])
  }
  return (
     <div className="birds">
        <ul>
          {birds.map((bird) =>(

           <li key={bird.id} className="card">

        {bird.name}
        {bird.amount} 

             <img alt={bird.name} src={bird.img}/>

             <button onClick={() => displayBird(bird)}>Adopt</button>
           </li>  
    )) 
}
        </ul>
    </div>
)
}


export default BirdsCards;