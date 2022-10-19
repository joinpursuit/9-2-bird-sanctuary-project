import React from "react";
import birds from "../data/birds";

export default function BirdCards({ updateBird, selectedBirds }) {
  function sendBird(bird) {
    updateBird([...selectedBirds, bird]);
  }

  return (
    <div className="birds">
      {birds.map((bird) => (
        <div key={bird.id} className="birdCard">
        <span className="birdName">
        {bird.name}
        </span>
        <span className="birdAmount">
        Price: ${bird.amount}
        </span>
          <img alt={bird.name} src={bird.img} style={{ width: "250px" }} />
          <button onClick={() => sendBird(bird)}>Adopt</button>
        </div>
      ))}
    </div>
  );
}

//
