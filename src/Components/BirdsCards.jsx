import birds from "../data/birds";

function BirdsCards({ selectBird, setSelectBird }) {
  // this funciton handles adding birds to the cart when the adopt button is clicked...
  function birdDisplay(bird) {
    setSelectBird([...selectBird, bird]);
  }

  return (
    <div className="birds">
      <>
        {/* to display each bird, map over the birds array and grab the name, amount , and image */}
        {birds.map((bird) => (
          <div key={bird.id} className="card">
            <h4>{bird.name}</h4>
            <br />
            <p>${bird.amount}</p>
            <br />
            <img src={bird.img} alt={bird.name} />
            <br />
            <br />
            <button onClick={() => birdDisplay(bird)}>Adopt</button>
          </div>
        ))}
      </>
    </div>
  );
}

export default BirdsCards;
