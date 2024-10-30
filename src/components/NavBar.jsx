import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartProvider';


const NavBar = () => {
  //Paso 3: Consumir un contexto
  const { total } = useContext(CartContext);
  
  return (

<nav className="navbar navbar-expand-md p-3 mb-3 " style={{
  background:'#dbd7e3'
}}>
  <div className="container-fluid">
    <a className="navbar-brand bg" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item m-2">
        <Link to='/'>Home</Link>
        </li>
        <li className="nav-item m-2">
        <Link to='/carrito'>Carrito  ${total.toFixed(2)}</Link>
        </li>
        <li className="nav-item m-2">
        <Link to='/register'>Register</Link>
        </li>
        <li className="nav-item m-2">
        <Link to='/login'>Login</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar