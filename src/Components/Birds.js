
import birdData from "../data/birds";
export default function Birds({ cart, setCart }) {
  const birdForCart = (birdie) => {
    setCart([...cart, birdie]);
  };

  return (
    <>
      {/**console.log(birdData**/}
      <ul className="birds">
        {birdData.map((birdie) => {
          return (
            <li key={birdie.id}>
              <img src={birdie.img} alt="bird" />
              <span>{birdie.name}</span>
              <p>Price ${birdie.amount}</p>
              <button onClick={() => birdForCart(birdie)}>Adopt</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
