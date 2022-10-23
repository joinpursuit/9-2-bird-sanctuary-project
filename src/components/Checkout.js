import { useState } from "react"



export default function Checkout({setCart}){
    
    const [form,setForm]=useState({firstName:""})

    function submitForm(e){
        e.preventDefault()
        setCart([])
        alert("You have adopted birds. Thank you!")
    }

    function handleChange(e){
        const newObj={...form,[e.target.id]: e.target.value}
        setForm(newObj)
    }
    return (
        <form className="Checkout" onSubmit={submitForm}>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" value={form.firstName} onChange={handleChange}/>

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" value={form.lastName} onChange={handleChange}/>

        <label for="email">Email</label>
        <input type="email" id="email" value={form.email}onChange={handleChange}/>

        <label for="zipcode">Zip Code</label>
        <input type="number" id="zipcode" value={form.zipcode}onChange={handleChange}/>

        
        <input type="submit" id="submit" onChange={handleChange}/>
        </form>
    )
}