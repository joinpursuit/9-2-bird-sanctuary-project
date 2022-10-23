import bonus from './bonusItems.js'

export default function Cart({birdFlu, setBirdFlu}) {

let total = birdFlu.length ? birdFlu.map((prev) => prev.amount).reduce((prev, curr) => prev + curr) : 0;

function addShiny(total, bonus){
    const catToys = [];
    if ((total >= 100) && (total < 300))
    { catToys.push(bonus[0]);
    } else if ((total >= 300) && (total < 500))
    { catToys.push(bonus[0]);
        catToys.push(bonus[1]);
    } else if ((total >= 500) && (total < 1000))
    {   catToys.push(bonus[0]);
        catToys.push(bonus[1]);
        catToys.push(bonus[2]);
    } else if ((total > 1000))
    { catToys.push(bonus[0]);
        catToys.push(bonus[1]);
        catToys.push(bonus[2]);
        catToys.push(bonus[3]);
    }
    return catToys;
}

function KFC(something) {
    birdFlu.splice(something, 1);
    setBirdFlu([...birdFlu]);
}

    return (<div className="Cart"> <h2>Cart</h2>
    <h5>Discount: { birdFlu.length >= 3 ? '10%' : '0%'}</h5>
    <h4>Total: ${birdFlu.length >= 3 ? total * .9 : total}</h4> 
    <ol>
        {birdFlu.map((sars, something) => { console.log(sars);
        console.log(birdFlu.length);
        console.log(something);
           return  ( <li className="buttoncolor" key={sars.id + something}><p>{sars.name} - ${sars.amount} </p><button onClick={() => KFC(something)}>86</button></li>)})}
           </ol>
        <h5>Shiny Extras:</h5>
        <ul className='center'>{addShiny(total, bonus).map(shiny => {console.log(shiny); return <li className='center'>{shiny}</li>})}</ul></div>)
}