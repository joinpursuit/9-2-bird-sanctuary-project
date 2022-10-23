export default function birdCards({ dataBirds, setBirdCount }) {
  return (
    <div className="cards">
      {dataBirds.map((bird) => {
        const { name, amount, img } = bird;
        return (
          <>
            <div className="birds card">
              <h6>{name}</h6>
              <div>${amount}</div>
              <img src={img} />
              <button id="button" onClick={() => setBirdCount(bird)}>
                Adopt
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

// import birds from "../data/birds";

// function BirdsCards() {
//   return (
//     <div className="birds">
//       <>
//         {birds.map((bird) => (
//           <div key={bird.id} className="card">
//             <button id="button">Adopt</button>
//             {bird.name} for ${bird.amount}
//             <img alt={bird.name} src={bird.img} />
//           </div>
//         ))}
//       </>
//     </div>
//   );
// }

// export default BirdsCards;
