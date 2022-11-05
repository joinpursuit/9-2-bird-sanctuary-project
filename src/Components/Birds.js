import birdData from "../data/birds";

export default function Birds({ cart, setCart }) {
  const cartBirds = (bird) => {
    setCart([...cart, bird]);
  };

  return (
    <>
      <ul className="birds">
        {birdData.map((bird) => {
          return (
            <li key={bird.id}>
              <img src={bird.img} alt="bird" />
              <span>{bird.name}</span>
              <p>Price ${bird.amount}</p>
              <button onClick={() => cartBirds(bird)}>Adopt</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}