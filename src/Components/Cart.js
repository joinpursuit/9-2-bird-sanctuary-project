import Bonuses from "./Bonuses";

function Cart({ selectedBird }) {

  const total = selectedBird.reduce((a, b) => {
    return a + Number(b.amount)}, 0);
    
    function handleDelete() {

    }

  return (
      <div className="Cart">
          <h2>Cart</h2>
          <h4>Discount: {selectedBird.length >= 3 ? 10 : 0}%</h4>
          <h4>Total: ${total}</h4>
         
      <ol>
        {selectedBird.map((bird) => {
            return (<li key={bird.id}>
                <h5>{bird.name} </h5>
                <h4>${bird.amount}</h4>
                <button onClick={handleDelete}>Delete</button>

            </li>);
        })}
          </ol>
          <h5>Your donations has qualified you for the following items</h5>
          <ul>
              {
                  <Bonuses total={total} />
              }
             
          </ul>
    </div>
  );
}

export default Cart;
