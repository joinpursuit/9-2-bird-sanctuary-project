export default function Bird({ birdArr , cartArr, setCartArr}) {

  function addBirdToCart(bird) {
    cartArr.push(bird);
    setCartArr([...cartArr]);
    // console.log(cartArr);
  }

  function createBirdList(arrayOBirds) {
    return (
        birdArr.map((bird) => {
            return (
              <div key={bird.id} className="card">
                <h5>{bird.name}</h5>
                <p>{bird.amount}</p>
                <img src={bird.img}></img><br />
                <button onClick={() => addBirdToCart(bird)}>Adopt</button>
              </div>
            );
          })
    )
  }

  return createBirdList(birdArr);
}
