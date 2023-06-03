function Card({animal, nombre}) {
  return (
    <div className="listado-hijo">
      <h4>ANIMALES DEL SAFARI</h4>

      <p>Animal ingresado: {animal}</p>
      <p>Nombre del animal: {nombre}</p>
    </div>
  );
}

export default Card;
