import Bonuses from "./Bonuses";

function Cart({ selectBird, setSelectBird }) {
  //   let total = selectBird.reduce((a, b) => {
  //     return b.amount + a;
  //   }, 0);

  //gets total by mapping through selected birds and grabbing the amount, and using it to add all of the amounts. If no birds are selected, the total would be 0...
  let total = selectBird.length
    ? selectBird
        .map((bird) => bird.amount)
        .reduce((a, b) => {
          return a + b;
        })
    : 0;

  // This function handles the deletion of birds that are selected. at the given index, delete that bird and returns the remaining birds if any...
  function handleDelete(index) {
    selectBird.splice(index, 1);
    setSelectBird([...selectBird]);
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h5>Discount: {selectBird.length >= 3 ? 10 : 0}%</h5>
      <h4>Total: ${selectBird.length >= 3 ? total * 0.9 : total}</h4>
      <ol>
        {selectBird.map((bird, index) => {
          return (
            <li key={bird.id}>
              {bird.name}${bird.amount}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ol>
      <h5>
        Your donations have qualified for the following items
        <ul>
            {/* adds the li's of bonuses according to the total */}
         <Bonuses total={total} />
        </ul>
      </h5>
    </div>
  );
}

export default Cart;
