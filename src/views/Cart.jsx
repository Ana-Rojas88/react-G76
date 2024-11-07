import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";


const Cart = () => {
  //Paso 3: Consumir un contexto
  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total, pagoTotal
  } = useContext(CartContext);
const {token} = useContext(UserContext);
  return (
    <div style={{padding:'3rem'
    }}>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((producto) => (
          <div  className="mt-2" key={producto.id} style={{height:'10rem',
            display:"flex", padding:'2rem', gap:'2rem'
          }}>
            <img src={producto.image} alt={producto.nombre}  />
            <h5>{producto.title}</h5>
            <p>${producto.price}</p>
            <p>Cantidad: {producto.cant}</p>
            <div style={{height:'3rem', display:'flex', gap:'1rem'}}>
            <button className="btn btn-primary" onClick={() => aumentarCantidad(producto)}> + </button >
            <button className="btn btn-primary"  onClick={() => disminuirCantidad(producto)}> - </button>
            <button className="btn btn-danger" onClick={() => eliminarDelCarrito(producto.id)}>
              Eliminar
            </button>
            </div>
            <p>Total: ${producto.price * producto.cant}</p>
          </div>
        ))
      )}
      <h3>Total a pagar: ${total.toFixed(2)}</h3>
     <button disabled={!token} onClick={pagoTotal} >Pagar</button>
    </div>
  );
};

export default Cart;
