export default function Checkout({setBirds}){

    function handleSubmit(e){
        e.preventDefault();
        setBirds([]);
        return alert("You have adopted birds. Thank you!");
    }

    return(
        <div className="Checkout">
            <h3> Checkout</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor="firstName"> First Name </label>
                <input type="text" id="firstName"/>
                <label htmlFor="lastName"> Last Name </label>
                <input type="text" id="lastName"/>
                <label htmlFor="email"> Email </label>
                <input type="email" id="email"/>
                <label htmlFor="zipcode"> Zip Code </label>
                <input type="number" id="zipcode"/>
                <br/>
                <input type="submit"/>
                {/* <button > Submit </button> */}
            </form>
        </div>
    );
}