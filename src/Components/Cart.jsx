import bonusItems from "../data/bonusItems";
function Cart ({selectBird, setSelectBird}) {



let sum = selectBird.reduce((value, birdPrice) => { return value + birdPrice.amount;}, 0);
console.log(sum)

function removeAdoptedFromCart(index) {
    selectBird.splice(index, 1);
    setSelectBird([...selectBird])
}

//bonus requirements
let bonus = [];
if (sum >= 100) {
    bonus.push(bonusItems[0])
}
if (sum >= 300 && sum <= 500){
    bonus.push(bonusItems[1], bonusItems[0])
}
if (sum >= 500 && sum <= 1000){
    bonus.push(bonusItems[0],bonusItems[1],bonusItems[2])
}
if (sum >= 1000){
    bonus.push(bonusItems[3],bonusItems[2],bonusItems[1],bonusItems[0])
}


//calculates the discount amount based on how many birds are placed in the cart 
let discount = '0%';
if (selectBird.length >= 3){
sum = (sum/100) * 90;
discount = '10%';
}

    return (
    <div className="Cart">
        <h1>Cart</h1>
        <h3>Discount: {discount}</h3>
        <h4>Total: ${sum}</h4>
    <ol>
{selectBird.map((bird, index) => {

    return (
        <li>
            {bird.name}: ${bird.amount}
            <button onClick={() =>removeAdoptedFromCart(index)}>Remove</button>
        </li>
    )
})}

    </ol>
   <p>Your donations has qualified for the following items</p> 
    <ul>{bonus.map((b) => {
        return (
            <li id="prizes">{b}</li>
        )
    })}</ul>
    </div>
 )
}

export default Cart;