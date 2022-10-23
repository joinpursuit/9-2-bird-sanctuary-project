import React from "react";
import BirdCard from "./Components/BirdCard";

function App() {
  return (
    <div>
      <h1>My project</h1>
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

