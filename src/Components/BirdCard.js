import birds from "../data/birds"

function BirdCard({selectedBird, setSelectedBird}) {
    console.log(birds)

    function addBird(bird) {
setSelectedBird([...selectedBird, bird])
    }

    return (
        <div className="birds">
            <>
                {birds.map((bird) => (
                    <div key={bird.id} className="card">
                       <h4>{bird.name}</h4> 
                       <p>${bird.amount}</p> 
                        <img src={bird.img} alt={bird.name} style={{ width: "150px" }} />
                        <button onClick={()=>addBird(bird)}>
                            Adopt
                        </button>
                    </div>
                ))}
            </>
    </div>
)

}

export default BirdCard