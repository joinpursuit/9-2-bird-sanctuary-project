import Bonuses from "./Bonuses";

function Cart({ selectedBird, setSelectedBird }) {
  //gets the total by mapping through the selected birds and grabbing the amount then using reduce to add all of the amounts. if no birds are selected, the total is 0
  let total = selectedBird.length
    ? selectedBird
        .map((bird) => bird.amount)
        .reduce((a, b) => {
          return a + b;
        })
    : 0;
  //this function handles the deletion of birds selected. at the given index, delete that bird and return the remaining birds if any
  function handleDelete(index) {
    selectedBird.splice(index, 1);
    setSelectedBird([...selectedBird]);
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      {/**if there are 3 or more birds selected, the discount is 10% and the total should reflect said discount. otherwise no discount and return the total*/}
      <h5>Discount: {selectedBird.length >= 3 ? 10 : 0}%</h5>
      <h4>Total: ${selectedBird.length >= 3 ? total * 0.9 : total}</h4>

      <ol>
        {selectedBird.map((bird, index) => {
          return (
            <li key={bird.id}>
              {bird.name}${bird.amount}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ol>
      <h5>Your donations has qualified you for the following items</h5>
      <ul>
        {/**adds the li/s of bonus/es according the total*/}
        <Bonuses total={total} />
      </ul>
    </div>
  );
}

export default Cart;
