import birds from "../data/birds";

function BirdsCards() {
  return (
    <div className="birds">
      <>
        {birds.map((bird) => (
          <div key={bird.id} className="card">
            <button id="button">Adopt</button>
            {bird.name} for ${bird.amount}
            <img alt={bird.name} src={bird.img} />
          </div>
        ))}
      </>
    </div>
  );
}

export default BirdsCards;
