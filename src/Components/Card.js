function Card(props) {
    return (
      <div className="card">
        <h4>{props.name}</h4>
        <p>Price: {props.amount}</p>
        <img src={props.img} />
        <button onClick={props.addItem}>Adopt</button>
      </div>
    )
  }
  
  export default Card;