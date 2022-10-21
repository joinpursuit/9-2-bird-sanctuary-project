export default function Checkout({setBirdFlu}){

    function resetEverything(event){
        event.preventDefault();
        setBirdFlu([]);
        alert("You have adopted birds. Thank you!")
    }

    return (
        <div className="Checkout">
            <form onSubmit={resetEverything}>
                <label htmlFor="First Name">First Name
                    <input id="First Name" type="text"></input>
                </label>
                <label htmlFor="Last Name">Last Name
                    <input id="Last Name" type="text"></input>
                </label>
                <label htmlFor="Email">Email
                    <input id="Email" type="text"></input>
                </label>
                <label htmlFor="Zip Code">Zip Code
                    <input id="Zip Code" type="text"></input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}