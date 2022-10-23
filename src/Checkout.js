

function Checkout({birdArray,birdCostArray}){


function resetform(){
    alert("You have adopted birds. Thank you!")

}




    return(

        <div>

           <form className="Checkout">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname"/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text"  id="lastname" name="lastname"/>

            <label htmlFor="email">Email</label>
            <input type="email"  id="email" name="email"/>

            <label htmlFor="zip">Zip Code</label>
            <input type="text"  id="zip" name="zip"/>

            <input type="submit" value="Checkout" onClick={resetform}/>

           </form>
        </div>
    )




}

export default Checkout