import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvide = ({children}) =>{

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
  
    //Función que se ejecuta cuando hacemos click en agregar a carrito,
    const agregarAlCarrito = (producto) => {
      //verificar si el producto ya esta en el carrito
      const itemEnCarrito = carrito.find((item) => item.id === producto.id);
  
      //si ya esta, vamos a disminuir o aumentar la cantidad
      if (itemEnCarrito) {
        setCarrito(
          carrito.map((item) =>
            item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
          )
        );
        //sino agregamos al carrito una propiedad cant: 1
      } else {
        setCarrito([...carrito, { ...producto, cant: 1 }]);
      }
    };
  
    //función que nos permite eliminar un producto del carrito, la condición es item.id !== id. Esto significa que se mantendrán en el array todos los elementos cuyo id no sea igual al id pasado como argumento a la función.
    const eliminarDelCarrito = (id) => {
      setCarrito(carrito.filter((item) => item.id !== id));
    };
  
    const aumentarCantidad = (producto) => {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
        )
      );
    };
  
    const disminuirCantidad = (producto) => {
      if (producto.cant === 1) {
        eliminarDelCarrito(producto.id);
      } else {
        setCarrito(
          carrito.map((item) =>
            item.id === producto.id ? { ...item, cant: item.cant - 1 } : item
          )
        );
      }
    };
    useEffect(() => {
      const nuevoTotal = carrito.reduce(
        (acc, item) => acc + item.cant * item.price,
        0
      );
      console.log(nuevoTotal);
      setTotal(nuevoTotal);
      console.log(total);
    }, [carrito]);
    // El efecto depende del carrito
    const token_jwt = localStorage.getItem("token");
    const pagoTotal = async () =>{
      await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_jwt}`,
        },
        body: JSON.stringify({
        cart: carrito,
        }),
        });
        Swal.fire({
          title: "Compra realizada con exito!",
          text: "You clicked the button!",
          icon: "success"
        });
    }
    return(
        <CartContext.Provider value={{ carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            aumentarCantidad,
            disminuirCantidad,
            total, pagoTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvide;