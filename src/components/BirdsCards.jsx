import birds from "../data/birds";

function BirdsCards({ selectBird, setSelectBird }) {
  function displayBird(bird) {
    setSelectBird([...selectBird, bird]);
  }
  return (
    <div className="birds">
      <>
        {birds.map((bird) => (
          <div key={bird.id} className="card">
            {bird.name}
            {bird.amount}
            <img alt={bird.name} src={bird.img} />
            <button onClick={() => displayBird(bird)}>Adopt</button>
          </div>
        ))}
      </>
    </div>
  );
}

export default BirdsCards;
