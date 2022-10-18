function Cart({ selectedBird }) {
  const total = selectedBird.reduce((a, b) => {
   return a + b.amount
  }, 0);

  return <div className="sidebar">Discount: % Total: {total}</div>;
}

export default Cart;