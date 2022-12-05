import React from "react";

const Cards = ({ birds, handleCart }) => {
  return (
    <div className="card">
      <ul>
        {birds.map((bird) => {
          return (
            <div className="birds">
              <li key={bird.id}>
                <h3>{bird.name}</h3>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt="bird"></img>
                <button
                  className="birds button"
                  onClick={() => {
                    handleCart(bird);
                  }}
                >
                  Adopt
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;