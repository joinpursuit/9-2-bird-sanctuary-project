
export default function BirdCard ({avian, setBirdFlu, birdFlu}) {

function addBird(birb){
    setBirdFlu([...birdFlu, birb])
}
    let birdCard = avian.map((birb) => {
        return (
        <div key={birb.id} id={birb.id} className="a-box card birds">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={birb.img} alt={birb.name}/>
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{birb.name}</h3>
          <div>${birb.amount}</div>
          <button key={birb.id} onClick={() => addBird({name: birb.name, amount: birb.amount, id: birb.id})}
        >Adopt</button>
      </div>
      </div>
      )
        }
      )
    return (
    <div>{birdCard} </div>)
}

