import birds from "../data/birds"

function BirdCard({selectedBird, setSelectedBird}) {
    console.log(birds)

    function addBird(bird) {
setSelectedBird([...selectedBird, bird])
    }

    return (
        <div className="birds">
            <ul>
                {birds.map((bird) => (
                    <li key={bird.id} className="card">
                        {bird.name}
                        {bird.amount}
                        <img src={bird.img} alt={bird.name} style={{ width: "150px" }} />
                        <button onClick={()=>addBird(bird)}>
                            Adopt
                        </button>
                    </li>
                ))}
            </ul>
    </div>
)

}

export default BirdCard