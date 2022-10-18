import Card from "./components/card";
import Cart from "./components/cart";
import birds from "./data/birds";
import bonusItems from "./data/bonusItems";
import "./App.css";
import { useState,useEffect } from "react";

function App () {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [checkout_form, setCheckOutForm] = useState({firstname:"",lastname:"",email:"",zipcode:""})
  //////////////////////////////////////////////
  const on_submit = (evt) =>{
    evt.preventDefault();
    alert("You have adopted birds. Thank you!");
    on_reset();
  }
  const on_reset = () =>{
    setTotal(0);
    setCart([]);
    setBonus([]);
    setDiscount([]);
  }
  const on_checkout_form_change = (evt) =>{
    setCheckOutForm(pv => ({...pv, [evt.target.name] : evt.target.value }));
  }
  const add_item_to_cart = (item) => {
    setCart( pv => pv.concat(item));
  }
  const remove_from_cart = (idx) =>{
    cart.splice(idx,1);
    setCart([...cart]);
  }
  //////////////////////////////////////////////
  useEffect(() => {
    //////////////////////////////////////////////
    const num_chk_rng = (min,max,cv) => cv>=min && cv<=max;
    //////////////////////////////////////////////
    setDiscount(cart.length>=3 ? 10 : 0);
    let sum_amount = cart.reduce((acc,cv)=>acc+cv.amount,0);
    let bonus_rst;
    if(num_chk_rng(100 ,300,     sum_amount)) bonus_rst = 1;
    if(num_chk_rng(300 ,500,     sum_amount)) bonus_rst = 2;
    if(num_chk_rng(500 ,1000,    sum_amount)) bonus_rst = 3;
    if(num_chk_rng(1000,Infinity,sum_amount)) bonus_rst = 4;
    if(bonus_rst) {
      setBonus( bonusItems.slice(0,bonus_rst));
    }
    else{
      setBonus([]);
    }
    setTotal( sum_amount );
  }, [cart]);
  //////////////////////////////////////////////
  return (
    <div className="container">
      <div className="sidebar">
        <Cart bonus={bonus} total={total} discount={discount} cart={cart} remove_from_cart={remove_from_cart}/>
        <hr></hr>
        <div className="Checkout">
          <h2>Checkout</h2>
          <form onSubmit={on_submit}>
            <label>
              <div>First Name</div>
              <input name="firstname" value={checkout_form.firstname} onChange={on_checkout_form_change}/>
            </label>
            <label>
              <div>Last Name</div>
              <input name="lastname" value={checkout_form.lastname} onChange={on_checkout_form_change}/>
            </label>
            <label>
              <div>Email</div>
              <input name="email" value={checkout_form.email} onChange={on_checkout_form_change}/>
            </label>
            <label>
              <div>Zip Code</div>
              <input name="zipcode" value={checkout_form.zipcode} onChange={on_checkout_form_change}/>
            </label>
            <input type="submit"/>
          </form>
        </div>
      </div>
      {/* /////////////////////// */}
      <div className="birds">
        {birds.map(el=> <Card key={el.id} bird={el} updateCart={add_item_to_cart}/> )}
      </div>
    </div>
  );
};

export default App;
