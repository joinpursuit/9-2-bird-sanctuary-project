import React from "react";

class BirdCard extends React.Component {
  render() {
    const { img, amount, name, id } = this.props.birdInfo;
    const { adoptHandler } = this.props;

    return (
      <div className="card birds">
        <h4>{name}</h4>
        <p>Price: ${amount}</p>
        <img src={img} alt={name} />
        <button onClick={() => adoptHandler(id, name, amount)}>ADOPT</button>
      </div>
    );
  }
}

export default BirdCard;
