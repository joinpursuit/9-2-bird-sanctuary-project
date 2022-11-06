import birds from "../data/birds";

function BirdsCards({ selectBird, setSelectBird }) {
  function displayBird(bird) {
    setSelectBird([...selectBird, bird]);
  }
  return (
    <div className="birds">
      <ul className="eachCard">
        {birds.map((bird) => (
          <li key={bird.id} className="card">
            {bird.name}
            <br />$ {bird.amount}
            <br />
            <img alt={bird.name} src={bird.img} />
            <br />
            <button id="button" onClick={() => displayBird(bird)}>
              Adopt
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BirdsCards;
