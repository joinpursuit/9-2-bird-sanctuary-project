export default function birdscards({ birdData, handleBirdCount}) {
  return (
    <div className="cards">
      {birdData.map((bird) => {
        const { name, amount, img } = bird;
        return (
          <>
            <div className="card birds" >
              <h4>{name}</h4>
              <div>${amount}</div>
              <img src={img} />
              <button onClick={() => handleBirdCount(bird)}>Adopt</button>
            </div>
          </>
        );
      })}
    </div>
  );
}
