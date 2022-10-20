import React, { useState } from "react";
import addedBonuses from "./addedBonuses";

function Cart ({birdSelect}) {
    const birdSum = birdSelect.reduce((a,b) =>  {
        return a + Number(b.amount)}, 0);
}



export default Cart;
