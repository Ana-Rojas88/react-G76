import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";

const Card = ({producto}) => {
//Paso 3: Consumir un contexto
const { agregarAlCarrito} = useContext(CartContext)
const navigate = useNavigate();

const details = (id) => {
  navigate(`/product/${id}`);
};

  return (

      <div style={{
        width: '18rem', padding:'1rem', textAlign:'center'
      }}>
      <img src={producto.image} alt={producto.nombre} width='200px' height='200px' />
      <h6>{producto.title}</h6>
      <p>${producto.price}</p>
      <button className="btn btn-success mb-2" onClick={()=>details(producto.id)}>Ver Detalles</button>
     <button className="btn btn-primary" onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
     
    </div>
   
   
  );
};

export default Card;
