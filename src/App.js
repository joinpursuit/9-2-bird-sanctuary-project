
import {BirdCards} from "./Components/BirdCards";
import birdData from "./data/birds"
import { useState } from "react";
import { Cart } from "./Components/Cart";
import { Checkout } from "./Components/Checkout";
import './App.css'

function App() {
  const [birds, setBirds]= useState([]);

  // MUTAR consiste en CAMBIAR El contenido INTERNO de una estructura de datos (ARRAY / OBJETOS)
  const adopt1 = (newBird) => {
    const randomExtraId = Math.round(Math.random() * 1000) // 0,685943674356124 ==> 4444-5785
    
    let actualObject = {
      id: `${newBird.id}${randomExtraId}`, /// 44441753
      name: newBird.name, // Pajarillo
      amount: newBird.amount // 250
    }

    // Operador: SPREAD (...)
    const updatedBirdsArray = [...birds, actualObject] // MANTENEMOS LA INMUTABILIDAD
    setBirds(updatedBirdsArray)
  }

  // FUNCION PARA ELIMINAR
  const deleteBird = (id) => {
    const updatedBirds = birds.filter(bird => bird.id !== id)

    setBirds(updatedBirds)
  }

  // FUNCION RESET
  const reset = () => setBirds([])

  return (
    <div>
      <main className="main-container">
        <aside>
          <section className="section-cart">
            <Cart adoptedBirds={birds} deleteBird={deleteBird} />
          </section>
          <section className="section-chekout">
            <Checkout reset={reset} />
          </section>
        </aside>
        <BirdCards birdData={birdData} adopt={adopt1} />
      </main>
    </div> 
  );
};

export default App;


//Metodologia de trabajo 1er proyecto react:

//1. Crear componentes hijos de App: bird cards, checkout, cart.
////1.1 bird cards sera el padre de bird card.

//2.Crear un estado(1) en 'App" padre que actualice su valor con la informacion de "bird card" elegida por el usuario.
////**{desde App padre se enviara como una prop la funcion transformadora del estado para que se ejecute con la informacion elegida por el usuario y/o ejecutadam por nuestro componente}

//3.Enviar como prop la informacion del estado de "bird cards" para ejecutar el componente "cart". 
////3.1 Crear un estado(2) en 'App" padre que actualice su valor con la informacion de "Cart" elegida por el usuario.

//4.Enviar como prop la informacion del estado de "cart" para ejecutar el componente "checkout". 

////Podran necesitarse mas estados dentro de los componentes.

