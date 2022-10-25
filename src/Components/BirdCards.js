import "./BirdCards.css"
// import React, { useState } from "react";


//   {
//     img: "https://cdn.pixabay.com/photo/2020/06/03/13/47/bird-5255017_960_720.jpg",
//     name: "Shoebill",
//     amount: 100,
//     id: 444,
//   },

const BirdCards = ({ birdData, adopt }) => {
    return (
        <section className='cards-container'>
            <ul className='Birds'>
                {birdData.map(((bird) => {
                    const { id, img, name, amount } = bird;

                    return (
                        <li key={id} className='Bird'>
                            <h5 className="bird-name">{name}</h5>
                            <p className="bird-price">Price ${amount}</p> 
                            <img src={img} alt="user img" className='img'></img>
                            <button onClick={()=>{adopt(bird)}}>ADOPT</button>
                        </li>
                        )
                    })
                )}
            </ul>
        </section>
    )
}

export {BirdCards}