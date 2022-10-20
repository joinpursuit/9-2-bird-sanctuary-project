export default function Cart({ birds, bonusItems, setBirds}) {

  function removeBird(bird){
    birds.splice(birds.indexOf(bird),1)
    setBirds([...birds]);
  }

  let total = 0;
  birds.map((bird) => {
    total += bird.amount;
  });

  let discount = 0;
  if (birds.length >= 3) {
    discount = 10;
  }

  let items = [];
  if (total >= 100) {
    items.push(bonusItems[0]);
  }
  if (total >= 300) {
    items.push(bonusItems[1]);
  }
  if (total >= 500) {
    items.push(bonusItems[2]);
  }
  if (total >= 1000) {
    items.push(bonusItems[3]);
  }

  return (
    <div className="Cart">
      <h3> Cart </h3>
      <h5> Discount: {discount}%</h5>
      <h4> Total: ${discount === 10 ? total-(total*(discount/100)) : total}</h4>
      <ol>
        {birds.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
              <button onClick={() => removeBird(bird)}> Delete </button>
            </li>
          );
        })}
      </ol>
      <ul> Bonus Items:
        {items.map((item) => {
          return (
            <li>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
