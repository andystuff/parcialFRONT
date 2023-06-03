import { useState } from "react";


function Formulario({ onFormSubmit }) {
  const [animal, setAnimal] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");


  const handlerSubmit = (e) => {
    e.preventDefault();
    if (animal.trim().length < 3) {
      setError("Error en la info");
      return;
    }
    if (nombre.trim().length < 6) {
      setError("Error en la info");
      return;
    } 

    setError("");
    onFormSubmit({ animal, nombre });
  };


  return (
    <>
      <article className="formulario-padre">
        <h3>SAFARI</h3>

        <form onSubmit={handlerSubmit}>
            <input 
            type="text" 
            value={animal} 
            placeholder="Ingrese el animal"
            onChange={(e) => setAnimal(e.target.value)}/>
        <br />

            <input 
            type="text" 
            value={nombre} 
            placeholder="Ingrese el nombre del animal"
            onChange={(e) => setNombre(e.target.value)} />
    

          <button className="botoncito" type="submit">
            Enviar
          </button>
        </form>
        {error && <p>{error}</p>}
        
      </article>
    </>
  );
}

export default Formulario;

