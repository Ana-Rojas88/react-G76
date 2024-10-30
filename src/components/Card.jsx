import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Card = ({producto}) => {
//Paso 3: Consumir un contexto
const { agregarAlCarrito} = useContext(CartContext)

  return (

      <div style={{
        width: '18rem', padding:'1rem'
      }}>
      <img src={producto.image} alt={producto.nombre} width='200px' height='200px' />
      <h6>{producto.title}</h6>
      <p>${producto.price}</p>
     <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
   
   
  );
};

export default Card;
