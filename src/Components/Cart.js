import React from "react";

class Cart extends React.Component {
  displayAdoptedBirds = (adoptedBirds, removeItemHandler) => {
    return adoptedBirds.map((adoptedBird, index) => {
      return (
        <li key={index}>
          {adoptedBird.name} ${adoptedBird.amount}
          <button
            onClick={() => {
              removeItemHandler(adoptedBird.id);
            }}
          >
            Remove
          </button>
        </li>
      );
    });
  };

  totalCost = (adoptedBirds) => {
    return adoptedBirds.reduce((total, bird) => {
      return (total += bird.amount);
    }, 0);
  };

  render() {
    const { adoptedBirds, removeItemHandler } = this.props;

    return (
      <div className="Cart">
        <h3>Cart</h3>
        <h5>Discount: {adoptedBirds.length >= 3 ? 10 : 0}%</h5>
        <h4>Total: ${this.totalCost(adoptedBirds)}</h4>
        <ol>{this.displayAdoptedBirds(adoptedBirds, removeItemHandler)}</ol>
      </div>
    );
  }
}

export default Cart;
