import Card from './components/Card';
import Formulario from './components/Formulario';
import './App.css'
import { useState } from "react";




function App() {
    const [tarjeta, setTarjeta] = useState(false);
    const [carta, setCarta] = useState({});
  
    const handlerSubmit = (data) => {
      setCarta(data);
      setTarjeta(true);
    };
  
    return (
      <div>
        <h1>SAFARI</h1>
        {!tarjeta ? (
          <Formulario onFormSubmit={handlerSubmit} />
        ) : (
          <Card {...carta} />
        )}
      </div>
    );
  }
  
  export default App;
  