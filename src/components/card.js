export default function Card({bird,updateCart}){
  const on_adopt_click = (evt)=>{
    updateCart(bird);
  }

  return(
    <div className="card">
      <h6>{bird.name}</h6>
      <p>Price ${bird.amount}</p>
      <img src={bird.img} alt={bird.name} />
      <button onClick={on_adopt_click}>Adopt</button>
    </div>
  );
}